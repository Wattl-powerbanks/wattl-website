"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { FloraIcon, type Flora } from "@/components/ui/FloraIcon";
import { SquigglyDivider } from "@/components/ui/SquigglyDivider";

const reasons: { flora: Flora; title: string; description: string; color: string }[] = [
  {
    flora: "wattle-flower",
    title: "$1 per 10 minutes",
    description: "No $50 deposit, no sign-up. A 30-minute top-up costs $3.",
    color: "#FFC600",
  },
  {
    flora: "kookaburra",
    title: "Take it to the next bar",
    description:
      "Rent at one Wattl venue, drop it back at another. Your night doesn't have to stop when your battery does.",
    color: "#38AAD4",
  },
  {
    flora: "parrot",
    title: "No app needed",
    description: "Scan the QR code, tap Apple Pay or Google Pay, done.",
    color: "#E88D9D",
  },
  {
    flora: "waratah",
    title: "Fast, cables built in",
    description:
      "Charges as fast as an Apple charger, with Lightning, USB-C and Micro-USB cables attached.",
    color: "#208334",
  },
  {
    flora: "koala",
    title: "Capped at $49",
    description:
      "$1 every 10 minutes, and you'll never pay more than $49 for a rental. No deposit, no surprises.",
    color: "#F4722B",
  },
  {
    flora: "kangaroo",
    title: "Locally owned",
    description: "Built and run by locals in Sydney's Inner West.",
    color: "#003CA7",
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

export function WhyWattl() {
  return (
    <>
      <section id="why-wattl" className="bg-brand-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2
              className="mb-4 font-heading text-brand-blue"
              style={{
                fontSize: "clamp(36px, 6vw, 52px)",
                textShadow: "3px 3px 0 rgba(26, 26, 26, 0.12)",
              }}
            >
              Why Wattl<span className="text-brand-yellow">?</span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-brand-black/70" style={{ fontWeight: 700 }}>
              Easier, fairer and a lot more fun than begging the bartender for a
              charger.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {reasons.map((reason) => (
              <motion.div key={reason.title} variants={cardVariants} className="h-full">
                <Card className="flex h-full items-start gap-4" shadowColor={reason.color}>
                  <FloraIcon name={reason.flora} color={reason.color} className="h-16 w-16" />
                  <div>
                    <h3 className="mb-1.5 font-heading text-2xl text-brand-black">
                      {reason.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-brand-black/80" style={{ fontWeight: 600 }}>
                      {reason.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <SquigglyDivider color="#1A1A1A" bg="#003CA7" />
    </>
  );
}
