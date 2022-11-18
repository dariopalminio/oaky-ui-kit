export const ThemesEnum = {
  disabled: "disabled",
  primary: "primary",
  secondary: "secondary",
  danger: "danger",
  neutral: "neutral",
  dark: "dark",
  hover: "hover",
  text: "hover",
  success: "success",
  info: "success",
  warning: "success"
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
      base: "#007CF0",
      lighter: "#3DA2FF",
      darkened: "#0069CB",
    },
    secondary: {
      base: "#27C8FF", //base blue-light RGB 39, 200, 255
      lighter: "#C0ECFB", //RGB 192, 236, 251 
      darkened: "#00ACE7", //RGB 0, 172, 231 
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
      lighter: "#D7D7D7",
      darkened: "#D7D7D7",
    },
    hover: {
      base: "#CFE0EE",
      lighter: "#CFE0EE",
      darkened: "#CFE0EE",
    },
    text: {
      base: "black",
      lighter: "white",
      darkened: "black",
    },
    info: {
      base: '#81C1DF',
      lighter: '#81C1DF',
      darkened: '#81C1DF',
    },
    success: {
      base: '#12DBAD',
      lighter: '#53FFD8',
      darkened: '#00C396',
    },
    warning: {
      base: '#EBC60C',
      lighter:'#FCDE47',
      darkened: '#D6B300',
    },
    error: {
      base: '#FB5F57',
      lighter: '#FF7E77',
      darkened: '#FD382E',
    },
    shadow: {
      base: '#aaa',
      lighter: '#C6C6C6',
      darkened: '#989797',
    }
  }
}

//theme.layout['core'].sidebarWidthMax
const ThemeCore = {
  layout: LayoutStyleType.core,
  color: ColorsPalette.core,
  font: {
      primary: `Helvetica, Arial, sans-serif`,
      secondary: `Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif`
  }
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