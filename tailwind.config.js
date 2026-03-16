/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandNavy: "#1a1a2e",
        brandBlue: "#16213e",
        brandOrange: "#e07c24",
        brandAmber: "#f4a261",
        "tropical-green": "#E2C449",
        "ocean-blue": "#171A3A",
        "sunset-orange": "#FF6F2C",
        "sand-light": "#D8D4CB",
        "coast-gold": "#E2C449",
        "coast-white": "#F5F0E8",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
