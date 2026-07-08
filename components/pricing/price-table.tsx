"use client";

import { useState } from "react";
import { priceTable } from "@/constants/price-table";

export function PriceTable() {
  const [active, setActive] = useState(0);
  const cat = priceTable[active];

  return (
    <section className="py-14 sm:py-20" id="price-list">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <div className="text-center">
          <p className="text-sm font-medium">
            <span className="text-primary">/</span> Price List
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Transparent per-item rates
          </h2>
          <p className="mt-4 text-muted-foreground">
            No hidden charges. Final price is confirmed after weighing at pickup.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {priceTable.map((c, i) => (
            <button
              key={c.category}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active === i
                  ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "border-border bg-card text-foreground hover:border-primary/50"
              }`}
            >
              {c.category}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 border-b border-border bg-muted/40 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <span>Item</span>
            <span className="text-center">Wash</span>
            <span className="text-center">Iron</span>
            <span className="text-center">Dry Clean</span>
          </div>
          {cat.items.map((item, i) => (
            <div
              key={item.name}
              className={`grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 px-5 py-3.5 text-sm ${
                i !== cat.items.length - 1 ? "border-b border-border/60" : ""
              }`}
            >
              <span className="font-medium">{item.name}</span>
              <span className="text-center tabular-nums text-muted-foreground">
                {item.wash ?? "—"}
              </span>
              <span className="text-center tabular-nums text-muted-foreground">
                {item.iron ?? "—"}
              </span>
              <span className="text-center font-semibold tabular-nums text-primary">
                {item.dryClean ?? "—"}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Prices are indicative. Bulk & subscription discounts apply automatically.
        </p>
      </div>
    </section>
  );
}
