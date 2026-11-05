import type { CSSProperties } from "react";
import { Zap } from "lucide-react";
import type { ChargingVenue } from "@/lib/venues";

export function ChargingVenueCard({ venue, index = 0 }: { venue: ChargingVenue; index?: number }) {
  return (
    <div className="flex items-start gap-4 rounded-card border-3 border-dashed border-brand-black/50 bg-brand-cream p-5 text-left">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-3 border-brand-black bg-brand-pale-yellow">
        <Zap className="charging-bolt h-6 w-6 text-brand-orange" fill="currentColor" />
      </div>
      <div className="flex-1">
        <p className="mb-1 text-[12px] font-[900] uppercase tracking-[2px] text-brand-orange">
          Charging up
        </p>
        <h3 className="font-heading text-2xl text-brand-black">{venue.suburb}</h3>
        <p className="text-sm text-brand-black/70" style={{ fontWeight: 600 }}>
          Signed up. Name under wraps until it&apos;s live.
        </p>
        <div className="mt-3 flex items-center" role="img" aria-label={`${venue.charge}% charged`}>
          <div className="relative h-5 flex-1 overflow-hidden rounded-md border-3 border-brand-black bg-white">
            <div
              className="charging-fill h-full bg-brand-green"
              style={{ "--charge": `${venue.charge}%`, animationDelay: `${index * 0.4}s` } as CSSProperties}
            />
          </div>
          <div className="h-2.5 w-1.5 rounded-r-sm bg-brand-black" />
        </div>
      </div>
    </div>
  );
}
