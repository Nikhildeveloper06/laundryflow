export function TickerBanner() {
  return (
    <div
      className="flex h-24 w-full flex-col items-center justify-center gap-1 border-y-2 border-dashed border-border bg-muted/50 text-muted-foreground sm:h-28"
      title="Full-width banner image goes here"
    >
      <p className="text-sm font-semibold">1920×120 — full-width banner</p>
      <p className="text-xs opacity-70">
        Promo strip / offer banner image goes here
      </p>
    </div>
  );
}
