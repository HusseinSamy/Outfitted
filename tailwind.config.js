module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "640px",
      md: "790px",
      lg: "1120px",
      xl: "1410px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      primary_red: "#f33a47",
      primary_off_white: "#fefdfc",
      secondary_off_white: "#fcf9f2",
      black: "#313131",
      gray: "#f3f4f6",
      white: "#ffffff",
      "nav-gradient": "rgb(49,49,49,0.5)",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {
      gridTemplateRows: {
        // 'col-custom-layout': 'repeat(12,minmax(900px, 1fr))',
        "row-custom-layout": "88px repeat(4, minmax(0,1fr))",
      },
    },
    plugins: [],
  },
};
