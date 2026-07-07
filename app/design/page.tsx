import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const swatches = [
  { name: "Primary", cls: "bg-primary text-primary-foreground" },
  { name: "Secondary", cls: "bg-secondary text-secondary-foreground" },
  { name: "Success", cls: "bg-success text-success-foreground" },
  { name: "Warning", cls: "bg-warning text-warning-foreground" },
  { name: "Destructive", cls: "bg-destructive text-destructive-foreground" },
  { name: "Muted", cls: "bg-muted text-muted-foreground" },
];

export default function DesignPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-12 px-6 py-16">
      <section>
        <h1 className="text-4xl font-bold">Design System</h1>
        <p className="mt-2 text-muted-foreground">
          Heading uses Space Grotesk. This body text uses Inter. Internal page
          for verifying LaundryFlow design tokens.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Colors</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {swatches.map((s) => (
            <div
              key={s.name}
              className={`flex h-24 items-end rounded-xl p-3 text-sm font-medium shadow-sm ${s.cls}`}
            >
              {s.name}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button size="lg" className="rounded-full">
            Book Pickup
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Wash & Fold</CardTitle>
              <CardDescription>
                Everyday laundry, washed, dried and neatly folded.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                ₹99<span className="text-sm font-normal text-muted-foreground">/kg</span>
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-primary shadow-md">
            <CardHeader>
              <CardTitle className="text-primary">Dry Cleaning</CardTitle>
              <CardDescription>
                Delicate garments treated with expert care.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                ₹199<span className="text-sm font-normal text-muted-foreground">/item</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
