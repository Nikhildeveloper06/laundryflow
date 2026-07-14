import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FaqAppRow } from "@/components/home/faq-app-row";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about LaundryFlow — pricing, turnaround times, damage policy, coverage areas and minimum orders.",
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F7FF_100%)] pb-10 pt-16 text-center sm:pt-24">
        <div className="mx-auto max-w-2xl px-6">
          <nav className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">FAQ</span>
          </nav>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] sm:text-5xl">
            Questions? <span className="italic text-primary">Answered.</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about how LaundryFlow works.
          </p>
        </div>
      </section>

      <FaqAppRow />
      <FinalCta />
    </>
  );
}
