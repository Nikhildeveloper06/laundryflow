import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/pricing-hero";
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
      <PricingHero />
      <PricingPreview hideHeader />
      <PriceTable />
      <FinalCta />
    </>
  );
}
