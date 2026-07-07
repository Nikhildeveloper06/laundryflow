"use client";

import { Star } from "lucide-react";
import { reviews, type Review } from "@/constants/reviews";

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="w-[340px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`size-4 ${
              i < review.rating
                ? "fill-warning text-warning"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-foreground/80">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {review.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-semibold">{review.name}</span>
          <span className="block text-xs text-muted-foreground">
            {review.area}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Review[];
  reverse?: boolean;
}) {
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={`flex shrink-0 gap-5 pr-5 group-hover:[animation-play-state:paused] ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
        >
          {items.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function ReviewsMarquee() {
  const firstRow = reviews.slice(0, 4);
  const secondRow = reviews.slice(4);

  return (
    <section className="overflow-x-clip py-16" id="reviews">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-medium">
              <span className="text-primary">/</span> Reviews
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Loved across
              <br />
              <span className="italic text-primary">the city.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-sm">
            <span className="font-body text-4xl font-bold tabular-nums">4.9</span>
            <span>
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-warning text-warning" />
                ))}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                from 2,000+ customers
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-5">
        <MarqueeRow items={firstRow} />
        <MarqueeRow items={secondRow} reverse />
      </div>
    </section>
  );
}
