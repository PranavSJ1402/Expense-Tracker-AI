"use client";

import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4">
      <div className="w-full max-w-md">
        <SignUp />
      </div>
      <p className="text-White dark:text-white">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-cyan-600 hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
