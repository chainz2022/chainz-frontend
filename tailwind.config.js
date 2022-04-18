module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      inset: {
        "5vh": "5vh",
        "10vh": "10vh",
        "15vh": "15vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        "1/7": "14.28%",
        "1/8": "12.5%",
      },
      boxShadow: {
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.35)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
