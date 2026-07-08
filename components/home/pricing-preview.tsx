"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { perOrderPlans, monthlyPlans, type PricingPlan } from "@/constants/pricing";

function PlanCard({
  plan,
  monthly,
}: {
  plan: PricingPlan;
  monthly: boolean;
}) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border bg-card p-6 lg:p-8 ${
        plan.featured
          ? "border-transparent shadow-xl shadow-primary/15 [background:linear-gradient(var(--card),var(--card))_padding-box,linear-gradient(135deg,var(--primary),var(--secondary))_border-box] lg:-translate-y-3"
          : "border-border shadow-sm"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/30">
          Most Popular
        </span>
      )}

      <p className="text-xs font-medium text-muted-foreground lg:text-sm">{plan.tagline}</p>
      <h3 className="mt-1 text-base font-semibold lg:text-xl">{plan.name}</h3>

      <p className="mt-5">
        <span className="font-body text-2xl font-bold tracking-tight tabular-nums lg:text-4xl">
          {plan.price}
        </span>
        <span className="text-muted-foreground">{plan.unit}</span>
      </p>

      <ul className="mt-6 flex flex-col gap-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-xs lg:text-sm">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
              <Check className="size-3" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        className={`mt-6 h-9 w-full rounded-full text-xs lg:text-sm ${plan.featured ? "" : "bg-foreground hover:bg-foreground/85"}`}
        nativeButton={false}
        render={<Link href={monthly ? "/pricing" : "/book"} />}
      >
        {plan.cta}
      </Button>
    </div>
  );
}

export function PricingPreview() {
  const [monthly, setMonthly] = useState(false);
  const plans = monthly ? monthlyPlans : perOrderPlans;

  const railRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const onScroll = () => {
      const card = rail.clientWidth * 0.85;
      setActiveDot(Math.round(rail.scrollLeft / card));
    };
    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => rail.removeEventListener("scroll", onScroll);
  }, []);

  const goToDot = (i: number) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollTo({ left: i * rail.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="py-8 sm:py-12" id="pricing">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <p className="text-sm font-medium text-center lg:text-left">
          <span className="text-primary">/</span> Pricing
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:items-end lg:text-left">
          <h2 className="text-4xl font-semibold leading-[1.1] sm:text-5xl text-center lg:text-left">
            Honest pricing,
            <br />
            <span className="italic text-primary">no surprises.</span>
          </h2>

          <div className="flex items-center rounded-full border border-border bg-card p-1 shadow-sm">
            {["Per Order", "Monthly Plans"].map((label, i) => {
              const isActive = monthly === (i === 1);
              return (
                <button
                  key={label}
                  onClick={() => setMonthly(i === 1)}
                  className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="billing-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop: static 3-up */}
        <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, rotateY: -12 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 12 }}
                transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }}
              >
                <PlanCard plan={plan} monthly={monthly} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tablet & mobile: swipeable carousel */}
        <div className="lg:hidden">
          <div
            ref={railRef}
            className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="w-[72%] shrink-0 snap-center sm:w-[42%]"
              >
                <PlanCard plan={plan} monthly={monthly} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {plans.map((_, i) => (
              <button
                key={i}
                onClick={() => goToDot(i)}
                aria-label={`Go to plan ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  activeDot === i ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
          >
            View full price list →
          </Link>
        </div>
      </div>
    </section>
  );
}
