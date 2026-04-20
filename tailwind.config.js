/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./examples/**/*.{html,js}",
    "./public/**/*.html",
    "./templates/**/*.{html,jinja,j2}"
  ],
  theme: {
    extend: {
      colors: {
        bab: {
          bg: "#0F1115",
          surface: "#1A1D22",
          primary: "#FF6A00",
          text: "#E5E7EB",
          muted: "#9CA3AF",
          line: "rgba(229, 231, 235, 0.12)"
        }
      },
      fontFamily: {
        sans: ["'Rajdhani'", "'Segoe UI'", "sans-serif"],
        display: ["'Space Grotesk'", "'Segoe UI'", "sans-serif"]
      },
      boxShadow: {
        "orange-soft": "0 0 0 1px rgba(255, 106, 0, 0.18), 0 12px 40px rgba(255, 106, 0, 0.12)",
        "card-hover": "0 16px 44px rgba(0, 0, 0, 0.32), 0 0 0 1px rgba(255, 106, 0, 0.18)"
      },
      backgroundImage: {
        "hex-fade": "radial-gradient(circle at top, rgba(255, 106, 0, 0.12), transparent 32%)",
        "grid-fine": "linear-gradient(rgba(229, 231, 235, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 231, 235, 0.03) 1px, transparent 1px)"
      },
      letterSpacing: {
        technical: "0.18em"
      }
    }
  },
  plugins: []
};
