/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 100%)",
        surface: "hsl(0, 0%, 96%)",
        "surface-alt": "hsl(0, 0%, 93%)",
        border: "hsl(0, 0%, 80%)",
        "border-alt": "hsl(0, 0%, 73%)",
        "gray-text": "hsl(0, 0%, 40%)",
        "gray-light": "hsl(0, 0%, 85%)",
        text: "hsl(0, 0%, 10%)",
        "text-secondary": "hsl(0, 0%, 26%)",
        "text-tertiary": "hsl(0, 0%, 53%)",
        heading: "hsl(0, 0%, 20%)",
        accent: "hsl(253, 82%, 58%)",
        "accent-hover": "hsl(253, 68%, 46%)",
        "accent-light": "hsl(253, 100%, 94%)",
        primary: "hsl(267, 60%, 40%)",
        "primary-hover": "hsl(267, 60%, 35%)",
        link: "hsl(210, 85%, 58%)",
        "link-hover": "hsl(210, 80%, 50%)",
        error: "hsl(0, 83%, 58%)",
        "footer-bg": "hsl(0, 0%, 20%)",
        "footer-hover": "hsl(0, 0%, 80%)",
        warning: "hsl(359 100% 70%)",
      },
      fontFamily: {
        display: ["Ubuntu", "sans-serif"],
      },
      spacing: {
        75: "18.75rem",
        100: "25rem",
        106: "26.5rem",
        125: "31.25rem",
        135: "33.75rem",
      },
      aspectRatio: {
        "10/7": "10 / 7",
      },
    },
    container: {
      center: true,
      padding: "10px",
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
