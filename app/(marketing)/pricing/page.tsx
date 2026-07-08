import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingPreview } from "@/components/home/pricing-preview";
import { PriceTable } from "@/components/pricing/price-table";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, honest laundry pricing with no hidden charges. See per-order rates, monthly plans and a full per-item price list for wash, iron and dry cleaning.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70dvh] items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#EEF2FF_45%,#DBEAFE_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_15%,rgba(79,70,229,0.12),transparent_70%)]"
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Pricing</span>
          </nav>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur">
            <Sparkles className="size-4 text-primary" />
            No hidden charges, ever
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Simple, <span className="italic text-primary">honest</span> pricing
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Pay per order or save with a monthly plan. Free pickup and delivery
            on every booking — the price you see is the price you pay.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full px-8" nativeButton={false} render={<Link href="/book" />}>
              Book a Pickup
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" nativeButton={false} render={<Link href="#price-list" />}>
              See Full Price List
            </Button>
          </div>
        </div>
      </section>

      {/* Plan cards (reused, header hidden) */}
      <PricingPreview hideHeader />

      {/* Per-item price table */}
      <PriceTable />

      {/* CTA */}
      <FinalCta />
    </>
  );
}
