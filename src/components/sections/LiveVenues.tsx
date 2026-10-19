import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SquigglyDivider } from "@/components/ui/SquigglyDivider";
import { VenueCard } from "@/components/ui/VenueCard";
import { liveVenues } from "@/lib/venues";

export function LiveVenues() {
  return (
    <>
      <section className="bg-brand-yellow py-16 md:py-24">
        <div className="mx-auto max-w-[900px] px-4 text-center md:px-6">
          <h2
            className="mb-4 font-heading text-brand-blue"
            style={{
              fontSize: "clamp(36px, 6vw, 52px)",
              textShadow: "3px 3px 0 rgba(26, 26, 26, 0.12)",
            }}
          >
            Find us on King St<span className="text-brand-black">.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-brand-black/70" style={{ fontWeight: 700 }}>
            Grab a Wattl at one, drop it back at the other. More Inner West
            venues on the way.
          </p>
          <div className="mb-10 grid gap-5 sm:grid-cols-2">
            {liveVenues.map((venue) => (
              <VenueCard key={venue.name} venue={venue} />
            ))}
          </div>
          <Link href="/locations">
            <Button variant="secondary" className="bg-brand-cream">
              See all venues
            </Button>
          </Link>
        </div>
      </section>
      <SquigglyDivider color="#1A1A1A" bg="#FCE79E" />
    </>
  );
}
