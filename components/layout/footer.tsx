import Link from "next/link";
import { WashingMachine } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Laundry", href: "/services/laundry" },
      { label: "Dry Cleaning", href: "/services/dry-cleaning" },
      { label: "Shoe Cleaning", href: "/services/shoe-cleaning" },
      { label: "Subscription Plans", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Track Order", href: "/track" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 sm:px-10 md:grid-cols-4">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <WashingMachine className="size-5" />
            </span>
            <span className="font-heading text-lg font-bold">
              {siteConfig.name}
            </span>
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 text-sm font-semibold">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
