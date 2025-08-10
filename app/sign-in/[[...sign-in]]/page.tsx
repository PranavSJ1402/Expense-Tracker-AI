"use client";

import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4">
      <div className="w-full max-w-md">
        <SignIn />
      </div>
      <p className="text-White dark:text-white">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-cyan-600 hover:underline">
          Create Account
        </Link>
      </p>
    </div>
  );
}
