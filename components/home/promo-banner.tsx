import Image from "next/image";
import Link from "next/link";

export function PromoBanner() {
  return (
    <section className="py-16">
      <Link href="/book" className="flex justify-center">
        <Image
          src="/banner.jpeg"
          alt="LaundryFlow — book your first pickup today"
          width={1920}
          height={480}
          sizes="100vw"
          className="h-[150px] w-auto sm:h-[170px] lg:h-[200px]"
        />
      </Link>
    </section>
  );
}
