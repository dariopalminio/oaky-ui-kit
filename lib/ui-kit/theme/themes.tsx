export const ThemesEnum = {
  disabled: "disabled",
  primary: "primary",
  secondary: "secondary",
  danger: "danger",
  neutral: "neutral",
  dark: "dark",
  hover: "hover",
  text: "hover",
}

const LayoutStyleType = {
  "core": {
    sidebarWidthMax: 240,
    sidebarWidthMin: 0,
    headerHeight: 50,
    headerBackgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
  },
  "sensitive": {
    sidebarWidthMax: 240,
    sidebarWidthMin: 50,
    headerHeight: 50,
    headerBackgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
  },
  "bullet": {
    sidebarWidthMax: 240,
    sidebarWidthMin: 15,
    headerHeight: 50,
    headerBackgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
  }
}

const ColorsPalette = {
  "core": {
    primary: {
      base: "#27C8FF", //base blue-light RGB 39, 200, 255
      lighter: "#C0ECFB", //RGB 192, 236, 251 
      darkened: "#00ACE7", //RGB 0, 172, 231 
    },
    secondary: {
      base: "#FE6B8B",
      lighter: "#FFA3B7",
      darkened: "#FF3964",
    },
    danger: {
      base: "#FA3867",
      lighter: "#FA6E90",
      darkened: "#FF114A",
    },
    neutral: {
      base: "#D9D9D9",
      lighter: "#F0F0F0",
      darkened: "#B4B4B4",
    },
    dark: {
      base: "#313131",
      lighter: "#646464",
      darkened: "#000000",
    },
    disabled: {
      base: "#D7D7D7",
      lighter:  "#F5F5F5",
      darkened: "#CACACA",
    },
    hover: {
      base: "#CFE0EE",
      lighter:  "#CFE0EE",
      darkened: "#CFE0EE",
    },
    text: {
      base: "black",
      lighter:  "white",
      darkened: "black",
    },
    info: '#81C1DF',
    success: '#12DBAD',
    warning: '#EBC60C',
    error: '#FB5F57',
    shadow: '#aaa',
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  }
}

//theme.layout['core'].sidebarWidthMax
const ThemeCore = {
  layout: LayoutStyleType.core,
  color: ColorsPalette.core
};

export const getTheme = (styleLayout: string) => {

  switch (styleLayout) {
    case 'core':
      return { ...ThemeCore, layout: LayoutStyleType['core'] };
    case 'sensitive':
      return { ...ThemeCore, layout: LayoutStyleType['sensitive'] };
    case 'bullet':
      return { ...ThemeCore, layout: LayoutStyleType['bullet'] };
    default:
      throw new Error('Layout dos not exist!');;
  }
  
}

export default ThemeCore;