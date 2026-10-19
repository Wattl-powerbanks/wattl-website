import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SquigglyDivider } from "@/components/ui/SquigglyDivider";

export function VenueTeaser() {
  return (
    <>
      <section className="relative bg-brand-pale-yellow py-16 md:py-24">
        <div className="pointer-events-none absolute right-4 bottom-6 hidden md:block md:right-12" aria-hidden="true">
          <Image
            src="/images/decorations/kookaburra.png"
            alt=""
            width={160}
            height={160}
            className="h-40 w-40 object-contain"
          />
        </div>
        <div className="mx-auto max-w-[760px] px-4 text-center md:px-6">
          <p className="mb-3 text-[13px] font-[900] uppercase tracking-[3px] text-brand-black/50">
            For pubs, bars &amp; venues
          </p>
          <h2 className="mb-5 font-heading text-3xl text-brand-blue md:text-[44px] md:leading-[1.1]">
            Your guests stay charged. Your staff stop charging phones behind
            the bar.
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-brand-black/70" style={{ fontWeight: 700 }}>
            Free station, no maintenance, no risk. We look after everything, and
            you keep a share of every rental, up to double what others offer.
          </p>
          <Link href="/partner-with-us">
            <Button variant="dark">Get a free station</Button>
          </Link>
        </div>
      </section>
      <SquigglyDivider color="#FFC600" bg="#38AAD4" />
    </>
  );
}
