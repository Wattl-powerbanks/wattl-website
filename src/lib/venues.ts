export interface Venue {
  name: string;
  address: string;
  suburb: string;
  mapsUrl: string;
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
];
