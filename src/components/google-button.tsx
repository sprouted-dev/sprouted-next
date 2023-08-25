"use client";
import { signIn } from "next-auth/react";
export default function GoogleButton() {
  return (
    <button
      className="mr-8 rounded-md bg-lime-600 px-4 py-1 text-white"
      onClick={() => signIn("google")}
    >
      Google
    </button>
  );
}
