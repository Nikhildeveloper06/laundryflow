"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { Package, Phone, MapPin, Clock, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrackProgress } from "@/components/track/track-progress";
import { trackingStages, demoOrder } from "@/constants/tracking";

const TrackMap = dynamic(() => import("@/components/track/track-map"), {
  ssr: false,
  loading: () => <div className="flex h-full items-center justify-center bg-muted/40 text-sm text-muted-foreground">Loading map…</div>,
});

export function TrackClient() {
  const [current, setCurrent] = useState(0);

  // auto-advance through stages for demo
  useEffect(() => {
    if (current >= trackingStages.length - 1) return;
    const t = setTimeout(() => setCurrent((c) => c + 1), 2600);
    return () => clearTimeout(t);
  }, [current]);

  const progress = current / (trackingStages.length - 1);

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 sm:px-10">
      {/* Order header */}
      <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Package className="size-6" />
          </span>
          <div>
            <p className="text-lg font-semibold">Order #{demoOrder.id}</p>
            <p className="text-sm text-muted-foreground">{demoOrder.service}</p>
          </div>
        </div>
        <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          {trackingStages[current].label}
        </span>
      </div>

      {/* Progress with truck */}
      <div className="mt-6">
        <TrackProgress current={current} />
      </div>

      {/* Map + details */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-sm lg:aspect-auto">
          <TrackMap progress={progress} />
        </div>

        <div className="flex flex-col gap-4">
          {/* Rider card */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <p className="text-sm font-semibold">Your Rider</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-primary-foreground">
                {demoOrder.rider.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-medium">{demoOrder.rider.name}</p>
                <p className="text-xs text-muted-foreground">{demoOrder.rider.vehicle}</p>
              </div>
            </div>
            <a href={"tel:" + demoOrder.rider.phone.replace(/\s/g, "")} className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary">
              <Phone className="size-4" /> {demoOrder.rider.phone}
            </a>
          </div>

          {/* Details card */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{demoOrder.address}</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <Clock className="size-4 shrink-0 text-primary" />
              <span>Delivery {demoOrder.delivery}</span>
            </div>
            <div className="mt-4 border-t border-border pt-4">
              {demoOrder.items.map((it) => (
                <div key={it.name} className="flex justify-between py-1 text-sm">
                  <span className="text-muted-foreground">{it.name}</span>
                  <span className="font-medium">×{it.qty}</span>
                </div>
              ))}
              <div className="mt-2 flex justify-between border-t border-border pt-2 text-sm font-semibold">
                <span>Total</span>
                <span>{demoOrder.total}</span>
              </div>
            </div>
          </div>

          {current >= trackingStages.length - 1 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <Button variant="outline" className="w-full rounded-full" onClick={() => setCurrent(0)}>
                <RotateCcw className="mr-1 size-4" /> Replay tracking
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button className="rounded-full px-8" nativeButton={false} render={<Link href="/book" />}>
          Book Another Pickup
        </Button>
      </div>
    </div>
  );
}
