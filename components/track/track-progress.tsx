"use client";

import { motion } from "framer-motion";
import { Truck, Check } from "lucide-react";
import { trackingStages } from "@/constants/tracking";

export function TrackProgress({ current }: { current: number }) {
  const pct = (current / (trackingStages.length - 1)) * 100;

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      {/* Desktop horizontal progress */}
      <div className="relative hidden pt-10 sm:block">
        {/* base line */}
        <div className="absolute left-0 right-0 top-14 h-1 rounded-full bg-border" />
        {/* filled line */}
        <motion.div
          className="absolute left-0 top-14 h-1 rounded-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        {/* moving truck */}
        <motion.div
          className="absolute top-14 z-10 -translate-x-1/2 -translate-y-1/2"
          initial={{ left: "0%" }}
          animate={{ left: `${pct}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30"
          >
            <Truck className="size-5" />
          </motion.span>
        </motion.div>

        {/* stage markers */}
        <div className="relative flex justify-between">
          {trackingStages.map((stage, i) => {
            const done = i < current;
            const active = i === current;
            const Icon = stage.icon;
            return (
              <div key={stage.key} className="flex flex-1 flex-col items-center text-center">
                <span
                  className={`flex size-10 items-center justify-center rounded-full border-2 bg-card transition-colors duration-500 ${
                    done || active ? "border-primary text-primary" : "border-border text-muted-foreground"
                  }`}
                >
                  {done ? <Check className="size-5" /> : <Icon className="size-5" />}
                </span>
                <p className={`mt-3 text-sm font-semibold ${active ? "text-foreground" : "text-muted-foreground"}`}>
                  {stage.label}
                </p>
                <p className="text-xs text-muted-foreground">{stage.time}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile vertical progress */}
      <div className="flex flex-col sm:hidden">
        {trackingStages.map((stage, i) => {
          const done = i < current;
          const active = i === current;
          const Icon = stage.icon;
          return (
            <div key={stage.key} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
                    done || active ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground"
                  }`}
                >
                  {done ? <Check className="size-5" /> : <Icon className="size-5" />}
                </span>
                {i < trackingStages.length - 1 && (
                  <span className="relative my-1 w-0.5 flex-1 bg-border">
                    <motion.span
                      className="absolute inset-x-0 top-0 bg-primary"
                      initial={{ height: "0%" }}
                      animate={{ height: done ? "100%" : "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </span>
                )}
              </div>
              <div className={i < trackingStages.length - 1 ? "pb-6" : ""}>
                <p className={`font-semibold ${active ? "text-foreground" : "text-muted-foreground"}`}>
                  {stage.label}
                </p>
                <p className="text-xs text-muted-foreground">{stage.desc} · {stage.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
