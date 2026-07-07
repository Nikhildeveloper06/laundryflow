"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  Truck,
  Clock,
  Sparkles,
  CheckCircle2,
  WashingMachine,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-2 lg:pt-24">
        {/* Left: copy */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium shadow-sm"
          >
            <Sparkles className="size-4 text-primary" />
            Free pickup & delivery on every order
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Laundry day,
            <br />
            <span className="text-primary">off your plate.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 max-w-lg text-lg text-muted-foreground"
          >
            Schedule a pickup in 60 seconds. We collect, clean and deliver your
            clothes fresh to your door — tracked live, every step of the way.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              size="lg"
              className="rounded-full px-8 text-base"
              nativeButton={false}
              render={<Link href="/book" />}
            >
              Book a Pickup
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base"
              nativeButton={false}
              render={<Link href="/pricing" />}
            >
              View Pricing
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-10 flex items-center gap-6"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-warning text-warning"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold">4.9</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="font-semibold text-foreground">2,000+</span>{" "}
              happy customers
            </p>
          </motion.div>
        </div>

        {/* Right: order card visual */}
        <div className="relative mx-auto w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="rounded-3xl border border-border bg-card p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <WashingMachine className="size-6" />
                </span>
                <div>
                  <p className="font-semibold">Order #LF-2481</p>
                  <p className="text-xs text-muted-foreground">
                    Wash & Fold · 6 kg
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                In Progress
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {[
                { label: "Picked up from your door", done: true },
                { label: "Washing & quality check", done: true },
                { label: "Out for delivery by 6:00 PM", done: false },
              ].map((step) => (
                <div key={step.label} className="flex items-center gap-3">
                  <CheckCircle2
                    className={`size-5 ${
                      step.done ? "text-success" : "text-muted-foreground/40"
                    }`}
                  />
                  <p
                    className={`text-sm ${
                      step.done
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
                className="h-full rounded-full bg-primary"
              />
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -left-6 top-8 hidden items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:flex"
          >
            <Truck className="size-5 text-secondary" />
            <div>
              <p className="text-xs font-semibold">Free Pickup</p>
              <p className="text-[11px] text-muted-foreground">At your doorstep</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-5 -right-4 hidden items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:flex"
          >
            <Clock className="size-5 text-primary" />
            <div>
              <p className="text-xs font-semibold">24h Turnaround</p>
              <p className="text-[11px] text-muted-foreground">Express available</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
