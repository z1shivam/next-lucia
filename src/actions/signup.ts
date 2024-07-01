"use server";
import User from "@/models/userModel";
import { hash } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { lucia } from "@/auth";
import { generateIdFromEntropySize } from "lucia";
import mongoConnect from "@/lib/mongoConnect";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

async function signup(_: any, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  // Validate username
  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
    return {
      error: "Invalid username",
    };
  }

  // Validate password
  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      error: "Invalid password",
    };
  }

  try {
    // Hash the password
    const passwordHash = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    console.log(`reached here in signup ts`);
    // Ensure MongoDB connection is established
    await mongoConnect();
    console.log(`reached here in signup ts`);

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return {
        error: "Username already exists",
      };
    }

    // Generate user ID
    const userId = generateIdFromEntropySize(10); // Example function to generate user ID
    console.log({
      _id: userId,
      username: username,
      password_hash: passwordHash,
    });
    await User.create({
      _id: userId,
      username: username,
      password_hash: passwordHash,
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    return redirect("/secret");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error("Error signing up:", error);
    return {
      error: "Failed to create user",
    };
  }
}

interface ActionResult {
  error?: string;
}

export default signup;