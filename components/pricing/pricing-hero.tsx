"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Sparkles, Truck, Clock, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustPoints = [
  { icon: Truck, title: "Free pickup & delivery", note: "On every single order" },
  { icon: Clock, title: "24-hour turnaround", note: "Express options available" },
  { icon: Percent, title: "Save with plans", note: "Up to 30% on monthly" },
];

const blurIn = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

export function PricingHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F7FF_100%)]"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-20 lg:py-24">
        {/* Left: copy */}
        <div>
          <motion.nav
            variants={blurIn}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Pricing</span>
          </motion.nav>

          <motion.span
            variants={blurIn}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium shadow-sm"
          >
            <Sparkles className="size-4 text-primary" />
            No hidden charges, ever
          </motion.span>

          <motion.h1
            variants={blurIn}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-[3.75rem]"
          >
            Simple, <span className="italic text-primary">honest</span> pricing for spotless clothes
          </motion.h1>

          <motion.p
            variants={blurIn}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-5 max-w-xl text-lg text-muted-foreground"
          >
            Pay per order or save with a monthly subscription — either way,
            pickup and delivery are always free and the price you see is exactly
            what you pay. No surprises, no fine print.
          </motion.p>

          <motion.div
            variants={blurIn}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-8 grid gap-4 sm:grid-cols-3"
          >
            {trustPoints.map((tp) => {
              const Icon = tp.icon;
              return (
                <div key={tp.title} className="rounded-2xl border border-border bg-card/60 p-4">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-4.5" />
                  </span>
                  <p className="mt-3 text-sm font-semibold">{tp.title}</p>
                  <p className="text-xs text-muted-foreground">{tp.note}</p>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            variants={blurIn}
            initial="hidden"
            animate="visible"
            custom={5}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" className="rounded-full px-8" nativeButton={false} render={<Link href="/book" />}>
              Book a Pickup
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" nativeButton={false} render={<Link href="#price-list" />}>
              See Full Price List
            </Button>
          </motion.div>
        </div>

        {/* Right: scroll-zoom image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary/10"
        >
          <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0">
            <Image
              src="/pricing-image.jpeg"
              alt="Neatly folded fresh laundry"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </motion.div>
          <span className="absolute bottom-5 left-5 z-10 rounded-2xl border border-border bg-card/95 px-5 py-3 shadow-lg backdrop-blur">
            <span className="block text-xs text-muted-foreground">Starting from</span>
            <span className="font-body text-2xl font-bold tabular-nums">₹99<span className="text-sm font-normal text-muted-foreground">/kg</span></span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
