module.exports = {
  // mode: 'jit',
  purge: {
    enabled:false,
    content:['./dist/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      julie_primary_burgundy: {
        50: "#F7556A",
        100: "#E92F48",
        200: "#C42137",
        300: "#902331",
        400: "#601F28",
        500: "#35161A",
        600: "#250E11",
        700: "#1E0B0D",
        800: "#17080A",
        900: "#100506",
      },
      julie_primary_cream: {
        50: "#F8F6F1",
        100: "#F6F4EE",
        200: "#F5F1EB",
        300: "#F1EDE4",
        400: "#EBE5DB",
        500: "#E0DACE",
        600: "#CBC2AE",
        700: "#B7AA8F",
        800: "#A49270",
        900: "#897858",
      },
      julie_secondary_dark: {
        50: "#281010",
        100: "#240F0F",
        200: "#200E0E",
        300: "#1D0C0C",
        400: "#190B0B",
        500: "#150909",
        600: "#0E0606",
        700: "#0B0505",
        800: "#070303",
        900: "#040101",
      },
      julie_secondary_light: {
        50: "#F4F1F1",
        100: "#EDE9E8",
        200: "#E6E1E0",
        300: "#E0D9D7",
        400: "#C9BEBA",
        500: "#B3A39E",
        600: "#9C8780",
        700: "#836E67",
        800: "#675651",
        900: "#4A3E3A",
      },
    },
    extend: {
      spacing: {

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
