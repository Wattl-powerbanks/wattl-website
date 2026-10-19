"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SquigglyDivider } from "@/components/ui/SquigglyDivider";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        {/* Two-color background split */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-brand-yellow" />
          <div className="w-1/2 bg-brand-teal" />
        </div>

        {/* Hand-drawn wavy vertical divider SVG */}
        <svg
          className="pointer-events-none absolute inset-0 z-10 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ shapeRendering: "geometricPrecision" }}
        >
          {/* Yellow fill (left side) — extended past center to prevent gap */}
          <path
            d="M0 0 L50 0 C48 8, 55 14, 52 22 C49 30, 56 36, 53 44 C50 52, 57 58, 54 66 C51 74, 56 80, 53 88 C51 94, 54 97, 52 100 L0 100 Z"
            fill="#FFC600"
          />
          {/* Teal fill (right side) — extended past center to prevent gap */}
          <path
            d="M100 0 L46 0 C44 8, 51 14, 48 22 C45 30, 52 36, 49 44 C46 52, 53 58, 50 66 C47 74, 52 80, 49 88 C47 94, 50 97, 48 100 L100 100 Z"
            fill="#38AAD4"
          />
          {/* Squiggly line stroke on top — draws itself top to bottom */}
          <motion.path
            d="M48 0 C46 8, 53 14, 50 22 C47 30, 54 36, 51 44 C48 52, 55 58, 52 66 C49 74, 54 80, 51 88 C49 94, 52 97, 50 100"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="0.3"
            strokeLinecap="round"
            opacity="0.25"
            initial={prefersReducedMotion ? false : { pathLength: 0 }}
            animate={prefersReducedMotion ? false : { pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          />
        </svg>

        {/* Wattle flower decoration (top-left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-none absolute -top-4 -left-10 z-20 md:-top-2 md:-left-8"
          aria-hidden="true"
        >
          <Image
            src="/images/decorations/wattle.png"
            alt=""
            width={280}
            height={280}
            className="h-36 w-36 object-contain md:h-80 md:w-80"
          />
        </motion.div>

        {/* Cockatoo decoration (bottom-left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pointer-events-none absolute bottom-8 left-6 z-20 md:left-12"
          aria-hidden="true"
        >
          <Image
            src="/images/decorations/cockatoo.png"
            alt=""
            width={200}
            height={200}
            className="h-44 w-44 object-contain md:h-60 md:w-60"
          />
        </motion.div>

        {/* Kangaroo decoration (bottom-right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="pointer-events-none absolute right-4 bottom-10 z-20 md:right-12"
          aria-hidden="true"
        >
          <Image
            src="/images/decorations/kangaroo.png"
            alt=""
            width={160}
            height={160}
            className="h-36 w-36 object-contain md:h-52 md:w-52"
          />
        </motion.div>

        {/* Content - centred */}
        <div className="relative z-20 mx-auto flex min-h-screen max-w-[780px] flex-col items-center justify-center px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <Image
              src="/images/wattl-light.png"
              alt="Wattl."
              width={320}
              height={100}
              className="mx-auto h-auto w-[260px] md:w-[320px]"
              style={{
                filter: "drop-shadow(3px 3px 0 #003CA7)",
                maxWidth: "80vw",
              }}
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 mb-10 w-full max-w-[600px] rounded-[20px] border-3 border-[#141414] bg-[#FFF6DF] px-6 py-[22px] text-center font-[family-name:var(--font-bricolage)] shadow-[5px_5px_0_#003CA7] min-[480px]:px-10 min-[480px]:py-[30px] min-[480px]:shadow-[7px_7px_0_#003CA7]"
          >
            <h1 className="text-[clamp(22px,2.6vw,31px)] font-[650] leading-[1.22] tracking-[-0.01em] text-balance text-[#141414]">
              Flat phone? Grab a Wattl.
            </h1>
            <p className="mt-2.5 text-[clamp(17px,1.8vw,22px)] font-[500] leading-[1.35] text-balance text-[#3D3A33]">
              Portable powerbank rentals for venues across Australia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/locations">
              <Button variant="dark" className="font-[family-name:var(--font-bricolage)] font-[700]">Find a Wattl venue</Button>
            </Link>
            <Link href="/#how-it-works">
              <Button variant="secondary" className="bg-brand-cream font-[family-name:var(--font-bricolage)] font-[700]">How It Works</Button>
            </Link>
          </motion.div>
        </div>
      </section>
      <SquigglyDivider color="#1A1A1A" bg="#FFF8E1" />
    </>
  );
}
