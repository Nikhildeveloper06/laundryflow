import type { Metadata } from "next";
import { SignupForm } from "@/components/auth/signup-form";
import { AuthPanel } from "@/components/auth/auth-panel";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your LaundryFlow account and get your first pickup booked in minutes.",
};

export default function SignupPage() {
  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      <AuthPanel />
      <div className="flex items-center justify-center px-6 py-12">
        <SignupForm />
      </div>
    </div>
  );
}
