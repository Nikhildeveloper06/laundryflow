import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { AuthPanel } from "@/components/auth/auth-panel";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to your LaundryFlow account to book pickups and track orders.",
};

export default function LoginPage() {
  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      <AuthPanel />
      <div className="flex items-center justify-center px-6 py-12">
        <LoginForm />
      </div>
    </div>
  );
}
