import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Leaf, ShieldCheck, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsBand } from "@/components/home/stats-band";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "LaundryFlow is a premium on-demand laundry service in Delhi NCR — built to give people their weekends back with expert garment care and radical convenience.",
};

const values = [
  { icon: Heart, title: "Care in every fold", text: "Every garment is treated like it's our own — sorted, inspected and handled with respect." },
  { icon: Leaf, title: "Kind to the planet", text: "Eco-friendly detergents, water-efficient machines and reusable packaging on every order." },
  { icon: ShieldCheck, title: "Quality, guaranteed", text: "A 48-point check on every order. If something isn't right, we make it right." },
  { icon: Zap, title: "Radically convenient", text: "Book in 60 seconds, track live, get it back in 24 hours. Laundry should be invisible." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F7FF_100%)] pb-14 pt-16 sm:pt-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <nav className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">About</span>
          </nav>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Giving people their <span className="italic text-primary">weekends back.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            LaundryFlow started with a simple frustration: laundry day eats the
            one day you actually have to yourself. So we built a service that
            makes it disappear.
          </p>
        </div>
      </section>

      <StatsBand />

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 sm:px-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl shadow-primary/10">
            <Image src="/steps/l9.jpeg" alt="Our cleaning facility" fill sizes="(max-width: 1024px) 100vw, 50vw" className="scale-[1.03] object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium"><span className="text-primary">/</span> Our Story</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Built by people who hate laundry day
            </h2>
            <p className="mt-5 text-muted-foreground">
              We started in a single Delhi neighbourhood with one van and a
              promise: pick up, clean properly, deliver on time. No excuses, no
              hidden charges, no shrunken sweaters.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today we serve 12+ areas across Delhi NCR, but the promise hasn't
              changed. Every order still passes a 48-point check, every rider
              still logs every item, and every customer still gets their
              weekend back.
            </p>
            <Button className="mt-7 rounded-full px-6" nativeButton={false} render={<Link href="/book" />}>
              Book Your First Pickup
            </Button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium"><span className="text-primary">/</span> What We Stand For</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Our values</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
