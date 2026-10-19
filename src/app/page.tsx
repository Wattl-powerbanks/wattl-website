import { Hero } from "@/components/sections/Hero";
import { WhyWattl } from "@/components/sections/WhyWattl";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LiveVenues } from "@/components/sections/LiveVenues";
import { VenueTeaser } from "@/components/sections/VenueTeaser";
import { AppDownloadCTA } from "@/components/sections/AppDownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyWattl />
      <HowItWorks />
      <LiveVenues />
      <VenueTeaser />
      <AppDownloadCTA />
    </>
  );
}
