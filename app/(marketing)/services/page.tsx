import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/constants/services";
import { HowItWorks } from "@/components/home/how-it-works";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From everyday wash & fold to expert dry cleaning, shoe care and more — explore LaundryFlow's full range of premium laundry services with free pickup and delivery.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border/40 bg-muted/20">
        <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Services</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Everything your <span className="italic text-primary">wardrobe</span> needs
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            One pickup covers it all — from everyday laundry to delicate dry
            cleaning, shoes, curtains and bedding. Expertly cleaned, quality
            checked and delivered fresh.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-[1600px] gap-6 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:px-20">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="scale-[1.03] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{service.title}</h2>
                  <span className="text-sm font-semibold text-primary">
                    from {service.priceFrom}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                        <Check className="size-2.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-6 w-full rounded-full"
                  nativeButton={false}
                  render={<Link href="/book" />}
                >
                  Book Now
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reused homepage sections */}
      <HowItWorks />
      <FinalCta />
    </>
  );
}
