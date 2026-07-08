"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { areas } from "@/constants/areas";

const CoverageMap = dynamic(() => import("@/components/home/coverage-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-muted/40 text-sm text-muted-foreground">
      Loading map…
    </div>
  ),
});

export function CoverageAreas() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16" id="coverage">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <div className="grid items-center gap-12 text-center lg:grid-cols-2 lg:text-left">
          {/* Left: copy + chips */}
          <div>
            <p className="text-sm font-medium text-center lg:text-left">
              <span className="text-primary">/</span> Coverage
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-[1.1] sm:text-5xl text-center lg:text-left">
              We're probably
              <br />
              <span className="italic text-primary">in your area.</span>
            </h2>
            <p className="mt-4 text-muted-foreground lg:max-w-md">
              Serving homes across Delhi NCR — with new areas added every
              month. Hover an area to spot it on the map.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {areas.map((area, i) => (
                <button
                  key={area.name}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    active === i
                      ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                      : "border-border bg-card text-foreground hover:border-primary/50"
                  }`}
                >
                  {area.name}
                </button>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Don't see your area?{" "}
              <a href="/contact" className="font-semibold text-primary hover:opacity-70">
                Tell us where to come next →
              </a>
            </p>
          </div>

          {/* Right: real interactive map */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border shadow-sm">
            <CoverageMap active={active} />

            {/* active area label */}
            <AnimatePresence>
              {active !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="pointer-events-none absolute bottom-5 left-5 z-[1000] flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-lg"
                >
                  <MapPin className="size-4 text-primary" />
                  <span className="text-sm font-semibold">{areas[active].name}</span>
                  <span className="text-xs text-muted-foreground">{areas[active].zone}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* corner badge */}
            <span className="pointer-events-none absolute right-5 top-5 z-[1000] flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-md">
              <Navigation className="size-3.5" />
              12+ areas served
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
