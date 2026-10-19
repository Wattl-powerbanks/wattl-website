"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { SquigglyDivider } from "@/components/ui/SquigglyDivider";
import { StationRequestForm } from "@/components/forms/StationRequestForm";
import { FloraIcon, type Flora } from "@/components/ui/FloraIcon";
import Link from "next/link";
import { liveVenues } from "@/lib/venues";

const shadowColors = ["#38AAD4", "#E88D9D", "#003CA7", "#208334", "#F4722B", "#1A1A1A"];

const benefits: { flora: Flora; title: string; description: string }[] = [
  {
    flora: "cockatoo",
    title: "Guests Stay Charged",
    description:
      "Guests don't leave when their phone dies, and your staff stop charging phones behind the bar.",
  },
  {
    flora: "wattle",
    title: "No Cost, No Maintenance",
    description:
      "We install, restock and repair the station, and we look after your guests if anything goes wrong.",
  },
  {
    flora: "koala",
    title: "No Risk",
    description:
      "Unreturned power banks are charged to the guest. You never chase stock.",
  },
  {
    flora: "kookaburra",
    title: "Try It for Two Weeks",
    description:
      "Not for you? We'll take it away the same day. After that, it's just 14 days' notice to end.",
  },
  {
    flora: "waratah",
    title: "Fits Your Bar",
    description:
      "Bright Wattl yellow or a low-key black, with an optional stand.",
  },
  {
    flora: "wattle-flower",
    title: "A Bonus on Top",
    description:
      "You keep 20% of every rental, up to 30% for busier venues. That's up to double what others offer.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function PartnerWithUsPage() {
  return (
    <>
      {/* Benefits Hero */}
      <section className="relative flex min-h-screen items-center bg-brand-yellow py-24 md:py-40">
        {/* Toucan decoration */}
        <div className="pointer-events-none absolute top-8 right-4 hidden md:block md:right-12" aria-hidden="true">
          <Image
            src="/images/decorations/toucan.png"
            alt=""
            width={180}
            height={180}
            className="h-44 w-44 object-contain"
          />
        </div>
        {/* Wattle flower decoration */}
        <div className="pointer-events-none absolute bottom-4 left-4 hidden md:block md:left-8" aria-hidden="true">
          <Image
            src="/images/decorations/wattle-flower.png"
            alt=""
            width={160}
            height={160}
            className="h-40 w-40 object-contain"
          />
        </div>
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="mb-14 text-center">
            <h1
              className="mx-auto mb-4 max-w-[860px] font-heading text-4xl font-bold text-brand-blue md:text-[60px]"
              style={{ textShadow: "3px 3px 0 rgba(26, 26, 26, 0.1)" }}
            >
              Your guests stay charged.{" "}
              <em className="not-italic text-brand-black">We handle the rest.</em>
            </h1>
            <p className="mx-auto max-w-xl text-lg text-brand-black/70" style={{ fontWeight: 700 }}>
              A free Wattl station for your pub or bar. We install it and look
              after it, and you keep a cut of every rental.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid auto-rows-fr gap-4 sm:grid-cols-2 md:grid-cols-3"
          >
            {benefits.map((benefit, i) => (
              <motion.div key={benefit.title} variants={cardVariants} className="h-full">
                <Card className="h-full text-center" shadowColor={shadowColors[i % shadowColors.length]}>
                  <FloraIcon
                    name={benefit.flora}
                    color={shadowColors[i % shadowColors.length]}
                    className="mx-auto mb-4 h-16 w-16"
                  />
                  <h3 className="mb-2 font-heading text-2xl font-normal text-brand-black">
                    {benefit.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-brand-black/80" style={{ fontWeight: 500 }}>
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-14 text-center text-lg text-brand-black/80" style={{ fontWeight: 800 }}>
            Already live at{" "}
            {liveVenues.map((venue, i) => (
              <span key={venue.name}>
                {i > 0 && " and "}
                <span className="text-brand-blue">{venue.name}</span>
              </span>
            ))}{" "}
            in Newtown.{" "}
            <Link href="/locations" className="text-brand-blue underline underline-offset-2">
              See venues
            </Link>
          </p>
        </div>
      </section>

      <SquigglyDivider color="#1A1A1A" bg="#FCE79E" />

      {/* Station Request Form */}
      <section className="relative bg-brand-pale-yellow py-20 md:py-32">
        {/* Cockatoo decoration */}
        <div className="pointer-events-none absolute bottom-8 left-4 hidden md:block md:left-12" aria-hidden="true">
          <Image
            src="/images/decorations/cockatoo.png"
            alt=""
            width={130}
            height={130}
            className="h-44 w-44 object-contain"
          />
        </div>
        <div className="mx-auto max-w-lg px-4 text-center md:px-6">
          <h2 className="mb-2 font-heading text-2xl font-bold text-brand-blue md:text-[36px]">
            Request a free station
          </h2>
          <p className="mb-8 text-brand-black/70" style={{ fontWeight: 700 }}>
            We&apos;re a small, local team from Sydney&apos;s Inner West. Fill
            out the form and one of us will get back to you within 24 hours.
          </p>
          {/* Form on surface */}
          <div
            className="rounded-card border-3 border-brand-black bg-white p-8 text-left"
            style={{ boxShadow: "6px 6px 0 #003CA7" }}
          >
            <StationRequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
