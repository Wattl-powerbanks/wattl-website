import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wattl. | Portable Power Bank Rentals",
    short_name: "Wattl",
    description:
      "Sydney's locally owned powerbank network. $1 per 10 minutes, no $50 deposit, and you can return it at any Wattl venue.",
    start_url: "/",
    display: "standalone",
    background_color: "#FCE79E",
    theme_color: "#FCE79E",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
