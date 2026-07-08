"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/constants/services";

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[1].replace(/,/g, ""));
    const suffix = match[2];
    const isDecimal = match[1].includes(".");
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = target * eased;
      setDisplay(
        (isDecimal ? cur.toFixed(1) : Math.round(cur).toLocaleString("en-IN")) +
          suffix
      );
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-body text-xl font-bold tabular-nums text-primary-foreground sm:text-2xl">
        <CountUp value={value} />
      </p>
      <p className="mt-0.5 whitespace-nowrap text-xs text-primary-foreground/70 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="bg-primary py-6 sm:py-8">
      {/* Mobile: swipeable rail (~2.2 visible) */}
      <div className="flex gap-6 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:hidden">
        {stats.map((stat) => (
          <div key={stat.label} className="w-[42%] shrink-0">
            <StatItem value={stat.value} label={stat.label} />
          </div>
        ))}
      </div>
      {/* Tablet & up: single row grid */}
      <div className="mx-auto hidden max-w-7xl grid-cols-4 gap-8 lg:gap-12 px-6 sm:grid">
        {stats.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
