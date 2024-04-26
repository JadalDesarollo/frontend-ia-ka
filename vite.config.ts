import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const isProduction = process.env.NODE_ENV === "production";

const baseConfig = {
  //base: isProduction ? "/dashtic-ts/preview/" : "./",
  plugins: [react()],
  define: {
    "process.env": {},
    API_URL: process.env.REACT_APP_BASE_URL,
  },
  build: {
    chunkSizeWarningLimit: 5000,
    minify: true,
  },
  server: {
    host: true,
  },
};
const pwaConfig = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    VitePWA({
      manifest: {
        name: "JADAL TEST",
        short_name: "JADAL TEST",
        description: "Descrition jadal test",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon",
          },
          {
            src: "/maskable_icon.png",
            sizes: "225x225",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#171717",
        background_color: "#e8ebf2",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg,ico,json,tsx,jsx}"],
        navigateFallback: "./index.html",
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|json)$/,
            handler: "CacheFirst",
          },
          {
            urlPattern: /\.(?:js|css)$/,
            handler: "StaleWhileRevalidate",
          },
        ],
      },
    }),
  ],
};

export default isProduction ? pwaConfig : baseConfig;
