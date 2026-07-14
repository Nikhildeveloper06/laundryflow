"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { WashingMachine, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
type FormData = z.infer<typeof schema>;

export function LoginForm() {
  const [showPw, setShowPw] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
    console.log("Login:", data);
    alert("Demo login — auth backend not connected yet.");
  };

  return (
    <div className="w-full max-w-sm">
      <Link href="/" className="flex items-center gap-2 lg:hidden">
        <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <WashingMachine className="size-5" />
        </span>
        <span className="font-heading text-lg font-bold">LaundryFlow</span>
      </Link>

      <h1 className="mt-8 text-2xl font-semibold lg:mt-0">Welcome back</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Log in to book pickups and track your orders.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="text-xs font-medium text-primary hover:opacity-70">
              Forgot password?
            </Link>
          </div>
          <div className="relative mt-1.5">
            <Input id="password" type={showPw ? "text" : "password"} placeholder="••••••••" {...register("password")} />
            <button type="button" onClick={() => setShowPw((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-label="Toggle password">
              {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-xs text-destructive">{errors.password.message}</p>}
        </div>

        <Button type="submit" size="lg" className="w-full rounded-full" disabled={isSubmitting}>
          {isSubmitting ? "Logging in…" : "Log In"}
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">or</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <Button variant="outline" size="lg" className="w-full rounded-full" onClick={() => alert("Social auth not connected yet.")}>
        Continue with Google
      </Button>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link href="/signup" className="font-semibold text-primary hover:opacity-70">
          Sign up
        </Link>
      </p>
    </div>
  );
}
