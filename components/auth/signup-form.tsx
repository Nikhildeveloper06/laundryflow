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

const schema = z
  .object({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().min(10, "Enter a valid phone number"),
    password: z.string().min(6, "At least 6 characters"),
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });
type FormData = z.infer<typeof schema>;

export function SignupForm() {
  const [showPw, setShowPw] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
    console.log("Signup:", data);
    alert("Demo signup — auth backend not connected yet.");
  };

  return (
    <div className="w-full max-w-sm">
      <Link href="/" className="flex items-center gap-2 lg:hidden">
        <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <WashingMachine className="size-5" />
        </span>
        <span className="font-heading text-lg font-bold">LaundryFlow</span>
      </Link>

      <h1 className="mt-8 text-2xl font-semibold lg:mt-0">Create your account</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Get your first pickup booked in minutes.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Your name" className="mt-1.5" {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="+91 98765 43210" className="mt-1.5" {...register("phone")} />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative mt-1.5">
            <Input id="password" type={showPw ? "text" : "password"} placeholder="••••••••" {...register("password")} />
            <button type="button" onClick={() => setShowPw((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-label="Toggle password">
              {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-xs text-destructive">{errors.password.message}</p>}
        </div>
        <div>
          <Label htmlFor="confirm">Confirm password</Label>
          <Input id="confirm" type="password" placeholder="••••••••" className="mt-1.5" {...register("confirm")} />
          {errors.confirm && <p className="mt-1 text-xs text-destructive">{errors.confirm.message}</p>}
        </div>

        <Button type="submit" size="lg" className="w-full rounded-full" disabled={isSubmitting}>
          {isSubmitting ? "Creating account…" : "Create Account"}
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-primary hover:opacity-70">
          Log in
        </Link>
      </p>
    </div>
  );
}
