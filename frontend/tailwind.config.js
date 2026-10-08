import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },

  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1A0089",
          "primary-content": "#c8d0eb",

          secondary: "#B8CE52",
          "secondary-content": "#0c0f02",

          accent: "#FE5E32",
          "accent-content": "#160301",

          neutral: "#1F2937",
          "neutral-content": "#cdd0d3",

          "base-100": "#ffffff",
          "base-200": "#dedede",
          "base-300": "#bebebe",
          "base-content": "#161616",

          info: "#1A0089",
          "info-content": "#c8d0eb",

          success: "#B8CE52",
          "success-content": "#0c0f02",

          warning: "#FE5E32",
          "warning-content": "#160301",

          error: "#DC2626",
          "error-content": "#ffd9d4",
        },
      },
    ],
  },
};
