import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** Expected image size, shown on the placeholder, e.g. "800×600" */
  size: string;
  /** Short description of what image goes here, e.g. "Hero — folded clothes" */
  label?: string;
  className?: string;
};

export function ImagePlaceholder({
  size,
  label,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-muted/50 text-muted-foreground",
        className
      )}
    >
      <ImageIcon className="size-8 opacity-50" />
      <p className="text-sm font-semibold">{size}</p>
      {label && <p className="px-4 text-center text-xs opacity-70">{label}</p>}
    </div>
  );
}
