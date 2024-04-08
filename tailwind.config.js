/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "encode-sans-expanded-sb": ["Encode Sans Expanded SB", "sans-serif"],
        "encode-sans-expanded-m": ["Encode Sans Expanded M", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"]
      },
    },
    fontSize: {
      "4xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.02em",
          fontWeight: "600",
        },
      ],
    },
  },
  plugins: [],
};
