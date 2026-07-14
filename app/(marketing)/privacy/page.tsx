import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How LaundryFlow collects, uses and protects your personal information.",
};

const sections = [
  { h: "Information we collect", p: "We collect the information you provide when booking a pickup — your name, phone number, email address and pickup address — along with order details and payment information processed by our payment partner." },
  { h: "How we use it", p: "Your information is used to fulfil your orders, communicate order updates, process payments, and improve our service. We never sell your data to third parties." },
  { h: "Data sharing", p: "We share only what's necessary with our delivery riders (name, address, phone) and payment processors. All partners are bound by confidentiality agreements." },
  { h: "Data security", p: "We use industry-standard encryption for data in transit and at rest. Payment details are never stored on our servers." },
  { h: "Your rights", p: "You can request access to, correction of, or deletion of your personal data at any time by contacting us at hello@laundryflow.in." },
  { h: "Cookies", p: "We use essential cookies to keep you logged in and analytics cookies to understand how our site is used. You can disable non-essential cookies in your browser." },
];

export default function PrivacyPage() {
  return (
    <section className="pb-20 pt-16 sm:pt-24">
      <div className="mx-auto max-w-3xl px-6">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground">Privacy Policy</span>
        </nav>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Privacy Policy</h1>
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
          Questions about this policy?{" "}
          <Link href="/contact" className="font-semibold text-primary hover:opacity-70">Contact us</Link>.
        </p>
      </div>
    </section>
  );
}
