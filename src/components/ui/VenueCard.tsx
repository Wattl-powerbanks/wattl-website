import { MapPin } from "lucide-react";
import type { Venue } from "@/lib/venues";

export function VenueCard({ venue }: { venue: Venue }) {
  return (
    <a
      href={venue.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 rounded-card border-3 border-brand-black bg-white p-5 text-left shadow-[5px_5px_0_#003CA7] transition-all duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0_#003CA7]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-3 border-brand-black bg-brand-yellow">
        <MapPin className="h-6 w-6 text-brand-blue" />
      </div>
      <div>
        <p className="mb-1 flex items-center gap-2 text-[12px] font-[900] uppercase tracking-[2px] text-brand-green">
          <span className="inline-block h-2 w-2 rounded-full bg-brand-green" />
          Live now
        </p>
        <h3 className="font-heading text-2xl text-brand-black">{venue.name}</h3>
        <p className="text-sm text-brand-black/70" style={{ fontWeight: 600 }}>
          {venue.address}
        </p>
        <p className="mt-2 text-sm font-[800] text-brand-blue underline underline-offset-2">
          Open in Maps
        </p>
      </div>
    </a>
  );
}
