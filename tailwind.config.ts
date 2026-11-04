import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        muted: "var(--muted)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
      },
      fontFamily: {
        sans: ["var(--font-fira)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1080px",
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
