import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
          "on-secondary-fixed-variant": "#005236",
          "surface-container": "#1d2022",
          "surface-container-high": "#272a2c",
          "on-error": "#690005",
          "primary-fixed-dim": "#bec6e0",
          "on-primary": "#283044",
          "surface": "#101415",
          "secondary": "#4edea3",
          "on-surface-variant": "#c6c6cd",
          "on-error-container": "#ffdad6",
          "primary-container": "#0f172a",
          "on-primary-fixed-variant": "#3f465c",
          "on-primary-container": "#798098",
          "surface-variant": "#323537",
          "tertiary-fixed": "#c4e7ff",
          "on-secondary-container": "#00311f",
          "surface-container-low": "#191c1e",
          "on-background": "#e0e3e5",
          "inverse-primary": "#565e74",
          "inverse-on-surface": "#2d3133",
          "inverse-surface": "#e0e3e5",
          "secondary-container": "#00a572",
          "on-tertiary": "#00354a",
          "on-secondary-fixed": "#002113",
          "surface-tint": "#bec6e0",
          "surface-bright": "#363a3b",
          "on-tertiary-container": "#008abb",
          "tertiary-fixed-dim": "#7bd0ff",
          "on-secondary": "#003824",
          "background": "#101415",
          "primary-fixed": "#dae2fd",
          "on-tertiary-fixed-variant": "#004c69",
          "tertiary-container": "#001a27",
          "outline": "#909097",
          "tertiary": "#7bd0ff",
          "on-tertiary-fixed": "#001e2c",
          "surface-dim": "#101415",
          "surface-container-highest": "#323537",
          "secondary-fixed-dim": "#4edea3",
          "on-primary-fixed": "#131b2e",
          "error-container": "#93000a",
          "on-surface": "#e0e3e5",
          "surface-container-lowest": "#0b0f10",
          "primary": "#bec6e0",
          "error": "#ffb4ab",
          "outline-variant": "#45464d",
          "secondary-fixed": "#6ffbbe"
      },
      "borderRadius": {
          "DEFAULT": "0.125rem",
          "lg": "0.25rem",
          "xl": "0.5rem",
          "full": "0.75rem"
      },
      "spacing": {
          "stack-sm": "12px",
          "section-gap": "120px",
          "content-gap": "48px",
          "base": "8px",
          "container-max": "1100px",
          "gutter": "24px"
      },
      "fontFamily": {
          "label-caps": ["Hanken Grotesk"],
          "headline-lg-mobile": ["Hanken Grotesk"],
          "body-lg": ["Inter"],
          "headline-lg": ["Hanken Grotesk"],
          "display": ["Hanken Grotesk"],
          "body-md": ["Inter"],
          "headline-md": ["Hanken Grotesk"],
          "label-code": ["JetBrains Mono"]
      },
      "fontSize": {
          "label-caps": ["12px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "700" }],
          "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
          "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
          "headline-lg": ["40px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
          "display": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "800" }],
          "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
          "headline-md": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
          "label-code": ["14px", { "lineHeight": "1.4", "fontWeight": "500" }]
      }
    },
  },
  plugins: [forms, containerQueries],
}
