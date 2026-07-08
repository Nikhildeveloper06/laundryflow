import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sparkles, Check, Truck, Clock, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingPreview } from "@/components/home/pricing-preview";
import { PriceTable } from "@/components/pricing/price-table";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, honest laundry pricing with no hidden charges. See per-order rates, monthly plans and a full per-item price list for wash, iron and dry cleaning.",
};

const trustPoints = [
  { icon: Truck, title: "Free pickup & delivery", note: "On every single order" },
  { icon: Clock, title: "24-hour turnaround", note: "Express options available" },
  { icon: Percent, title: "Save with plans", note: "Up to 30% on monthly" },
];

export default function PricingPage() {
  return (
    <>
      {/* Split hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F7FF_100%)]">
        <div className="mx-auto grid max-w-[1600px] items-center gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-20 lg:py-24">
          {/* Left: copy */}
          <div>
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="size-3.5" />
              <span className="text-foreground">Pricing</span>
            </nav>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium shadow-sm">
              <Sparkles className="size-4 text-primary" />
              No hidden charges, ever
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-[3.75rem]">
              Simple, <span className="italic text-primary">honest</span> pricing for spotless clothes
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Pay per order or save with a monthly subscription — either way,
              pickup and delivery are always free and the price you see is
              exactly what you pay. No surprises, no fine print.
            </p>

            {/* trust points */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" className="rounded-full px-8" nativeButton={false} render={<Link href="/book" />}>
                Book a Pickup
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" nativeButton={false} render={<Link href="#price-list" />}>
                See Full Price List
              </Button>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary/10">
            <Image
              src="/pricing-image.jpeg"
              alt="Neatly folded fresh laundry"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            {/* floating price chip */}
            <span className="absolute bottom-5 left-5 rounded-2xl border border-border bg-card/95 px-5 py-3 shadow-lg backdrop-blur">
              <span className="block text-xs text-muted-foreground">Starting from</span>
              <span className="font-body text-2xl font-bold tabular-nums">₹99<span className="text-sm font-normal text-muted-foreground">/kg</span></span>
            </span>
          </div>
        </div>
      </section>

      <PricingPreview hideHeader />
      <PriceTable />
      <FinalCta />
    </>
  );
}
