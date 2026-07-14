import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing your use of LaundryFlow services.",
};

const sections = [
  { h: "Service agreement", p: "By booking a pickup, you agree to these terms. LaundryFlow provides laundry, dry cleaning and related garment care services within our listed service areas." },
  { h: "Pricing and payment", p: "Prices are indicative until items are weighed and inspected at pickup. Final pricing is confirmed before cleaning begins. Payment is due on delivery unless you're on a subscription plan." },
  { h: "Turnaround times", p: "Standard turnaround is 48 hours; express is 24 hours where available. Delays caused by weather, festivals or unforeseen circumstances will be communicated promptly." },
  { h: "Damage and loss", p: "Every garment is tagged and tracked. In the rare event of damage or loss caused by us, we compensate up to 10x the service charge for that item. Claims must be raised within 48 hours of delivery." },
  { h: "Items we cannot accept", p: "We do not accept items contaminated with hazardous substances, heavily soiled items posing health risks, or garments without care labels where cleaning method cannot be determined." },
  { h: "Cancellation", p: "You may cancel free of charge up to 2 hours before your pickup slot. Cancellations after collection may incur a partial charge." },
  { h: "Subscriptions", p: "Monthly plans renew automatically and can be paused or cancelled anytime from your account. Unused quota does not roll over." },
];

export default function TermsPage() {
  return (
    <section className="pb-20 pt-16 sm:pt-24">
      <div className="mx-auto max-w-3xl px-6">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground">Terms of Service</span>
        </nav>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: January 2026</p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-semibold">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          Questions?{" "}
          <Link href="/contact" className="font-semibold text-primary hover:opacity-70">Contact us</Link>.
        </p>
      </div>
    </section>
  );
}
