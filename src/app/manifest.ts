import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Delli Digital Store",
    short_name: "DigitalStore",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    background_color: "#ffffff",
    theme_color: "#000000",
    display: "standalone",
    orientation: "portrait",
    icons: [
      {
        src: "/dist/favicon/favicon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/dist/favicon/favicon-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/dist/favicon/favicon-24x24.png",
        sizes: "24x24",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/dist/screenshots/desktop.png",
        sizes: "1280x720",
        type: "image/png",
      },
      {
        src: "/dist/screenshots/mobile.png",
        sizes: "480x800",
        type: "image/png",
      },
    ],
  };
}