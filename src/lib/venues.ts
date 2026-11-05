export interface Venue {
  name: string;
  address: string;
  suburb: string;
  mapsUrl: string;
}

export interface ChargingVenue {
  suburb: string;
  /** How "charged" the teaser battery looks, 0-100 */
  charge: number;
}

export const liveVenues: Venue[] = [
  {
    name: "Newtown Hotel",
    address: "174 King St, Newtown NSW 2042",
    suburb: "Newtown",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Newtown+Hotel+174+King+St+Newtown+NSW",
  },
  {
    name: "Botany View Hotel",
    address: "597 King St, Newtown NSW 2042",
    suburb: "Newtown",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Botany+View+Hotel+597+King+St+Newtown+NSW",
  },
  {
    name: "Forest Lodge Hotel",
    address: "117 Arundel St, Forest Lodge NSW 2037",
    suburb: "Forest Lodge",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Forest+Lodge+Hotel+117+Arundel+St+Forest+Lodge+NSW",
  },
];

// Signed-up venues we can't name yet, shown as "charging up" teasers
export const chargingVenues: ChargingVenue[] = [
  { suburb: "Marrickville", charge: 85 },
  { suburb: "Marrickville", charge: 60 },
  { suburb: "Marrickville", charge: 35 },
];
