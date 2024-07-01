"use client";

import { login } from "@/actions/login";
import { useRef } from "react";

export function LoginForm() {
  const errorRef = useRef(null); // Ref for error handling

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = login(null, formData);
    console.log(`reached hadnlesubmit function`);
    console.log("User signed up successfully", result);
  };

  return (
    <>
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Continue</button>
      </form>
      <p ref={errorRef} style={{ color: "red" }}></p>{" "}
    </>
  );
}
