import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Get a free Wattl power bank station for your pub or bar. No cost, no maintenance, no risk, and you keep a cut of every rental.",
  alternates: {
    canonical: "https://wattl.io/partner-with-us",
  },
};

export default function PartnerWithUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
