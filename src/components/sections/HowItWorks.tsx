"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SquigglyDivider } from "@/components/ui/SquigglyDivider";
import { FloraIcon, type Flora } from "@/components/ui/FloraIcon";

const steps: { flora: Flora; num: number; title: string; description: string; color: string }[] = [
  {
    flora: "cockatoo",
    num: 1,
    title: "Scan & Pay",
    description:
      "Scan the QR code on any Wattl station with your phone camera, then tap Apple Pay or Google Pay. No app, no sign-up.",
    color: "#FFC600",
  },
  {
    flora: "wattle",
    num: 2,
    title: "Grab & Charge",
    description:
      "A power bank pops out with Lightning, USB-C and Micro-USB cables built in. Keep it with you while you enjoy your night.",
    color: "#38AAD4",
  },
  {
    flora: "kangaroo",
    num: 3,
    title: "Drop It at Any Wattl Venue",
    description:
      "Done? Pop it back into any Wattl station, here or at the next bar. You only pay for the time you had it.",
    color: "#F4722B",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="relative z-10 bg-brand-blue py-16 pb-24 md:py-24 md:pb-32">
        {/* Waratah decoration */}
        <div className="pointer-events-none absolute top-12 right-8 hidden md:block md:right-20" aria-hidden="true">
          <Image
            src="/images/decorations/waratah.png"
            alt=""
            width={200}
            height={200}
            className="h-44 w-44 object-contain"
          />
        </div>
        <div className="mx-auto max-w-[700px] px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2
              className="mb-4 font-heading text-white"
              style={{
                fontSize: "clamp(36px, 6vw, 52px)",
                textShadow: "3px 3px 0 #1A1A1A",
              }}
            >
              How It Works<span className="text-brand-yellow">?</span>
            </h2>
            <p className="mx-auto max-w-xl text-white/80">
              Three steps. No app, no deposit.
            </p>
          </div>

          {/* Vertical timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center"
          >
            {steps.map((step, i) => (
              <motion.div key={step.num} variants={stepVariants} className="w-full">
                <div className="flex items-start gap-5">
                  {/* Icon circle */}
                  <FloraIcon name={step.flora} color={step.color} className="h-[70px] w-[70px]" />

                  {/* Content card */}
                  <div
                    className="flex-1 rounded-card border-3 border-brand-black bg-white p-5 transition-all duration-200 hover:-translate-y-1"
                    style={{ boxShadow: `5px 5px 0 ${step.color}` }}
                  >
                    <p className="mb-1 text-[13px] font-[900] uppercase tracking-[3px] text-brand-black/40">
                      Step {step.num}
                    </p>
                    <h3 className="mb-2 font-heading text-xl text-brand-black">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-black/70" style={{ fontWeight: 600 }}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector line between steps */}
                {i < steps.length - 1 && (
                  <div className="flex justify-start pl-[33px]">
                    <div
                      className="my-2 h-12 w-1 rounded-full bg-white/30"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <div className="relative z-0">
        <SquigglyDivider color="#1A1A1A" bg="#FFC600" />
      </div>
    </>
  );
}
