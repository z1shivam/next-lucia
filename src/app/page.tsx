import { lucia, validateRequest } from "@/auth";
import { Form } from "@/components/auth/Form";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import type { ActionResult } from "@/components/auth/Form";
import mongoConnect from "@/lib/mongoConnect";

export default async function Page() {
  await mongoConnect()
	const { user } = await validateRequest();
	if (!user) {
		return redirect("/login");
	}
	return (
		<>
			<h1>Hi, {user.username}!</h1>
			<p>Your user ID is {user.id}.</p>
			<Form action={logout}>
				<button>Sign out</button>
			</Form>
		</>
	);
}

async function logout(): Promise<ActionResult> {
	"use server";
  console.log(`object`);
	const { session } = await validateRequest();
	if (!session) {
		return {
			error: "Unauthorized"
		};
	}

	await lucia.invalidateSession(session.id);

	const sessionCookie = lucia.createBlankSessionCookie();
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/login");
}