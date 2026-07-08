"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[65dvh] overflow-hidden pt-20 sm:min-h-[75dvh] sm:pt-24 lg:min-h-dvh lg:pt-32">
      <Image
        src="/hero-image.jpeg"
        alt="Bright laundry room with washing machine and freshly dried clothes"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-3xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-7xl"
        >
          Fresh clothes. <span className="italic text-primary">Zero effort.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          className="mt-4 hidden text-lg font-medium text-foreground/70 lg:block"
        >
          Free pickup &amp; delivery · 24h turnaround
        </motion.p>
      </div>
    </section>
  );
}
