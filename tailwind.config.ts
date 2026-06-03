import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#07090f",
          surface: "#0d1117",
          elevated: "#161b22",
          overlay: "#1c2128",
        },
        accent: {
          cyan: "#00d8ff",
          purple: "#b060ff",
          green: "#39d353",
          amber: "#f5a623",
          pink: "#ff4d94",
        },
        border: {
          subtle: "#21262d",
          muted: "#30363d",
        },
        text: {
          primary: "#e6edf3",
          secondary: "#8b949e",
          muted: "#484f58",
        },
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
