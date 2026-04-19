// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from "astro-icon";
import playformCompress from "@playform/compress";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

const siteUrl =
  process.env.SITE_URL ?? "https://portfolio-site.pages.dev";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    astroIcon({
      include: {
        mdi: ["*"],
        ri: ["*"],
        "simple-icons": ["*"],
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,
      },
    }),
  ],
});
