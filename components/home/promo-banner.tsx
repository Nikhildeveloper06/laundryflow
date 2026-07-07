import Image from "next/image";
import Link from "next/link";

export function PromoBanner() {
  return (
    <section className="py-16">
      <Link href="/book" className="group block overflow-hidden">
        <div className="relative w-full">
          <Image
            src="/l12.jpeg"
            alt="LaundryFlow — book your first pickup today"
            width={1920}
            height={480}
            sizes="100vw"
            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
          />
        </div>
      </Link>
    </section>
  );
}
