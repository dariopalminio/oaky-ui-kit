const PrimaryTheme = {
  layout: {
    sidebarWidthMax: 240,
    sidebarWidthMin: 0,
    headerHeight: 50,
    headerBackgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
  },
  button: {
    color: "white",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 0 0 0 rgba(145, 64, 248, 0.5), 0 0 0 0 rgba(39, 200, 255, 0.5)",
    hoverBackground: "linear-gradient(45deg,  #FF8E53 30%, #FE6B8B 90%)",
    hoverColor: "rgb(255, 255, 255)",
    hoverBoxShadow: "8px -8px 20px 0 rgba(16, 226, 256, 0.5), -8px 8px 20px 0 rgba(183, 0, 255, 0.7)",
  },
  paper: {
    border: "1px solid #d7d7d7",
    boxShadow: "0px 5px 20px #1687d933",
  },
  color: {
    info:'#42bdff',
    success:'#12DBAD',
    warning:'#EBC60C',
    error:'#FB5F57',
    shadow:'#aaa',
    background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    hover:"black",
    backgroundHover:"#E5E5E5"
  }
};

const SecondaryTheme = {
  layout: {
    sidebarWidthMax: 240,
    sidebarWidthMin: 50,
    headerHeight: 50,
    headerBackgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
  },
  button: {
    color: "white",
    background: "#98CDFD",
    boxShadow: "0 0 0 0 rgba(39, 200, 255, 0.5), 0 0 0 0 rgba(145, 64, 248, 0.5)",
    hoverBackground: "linear-gradient(45deg,  #A5C8FE 30%, #4890FF 90%)",
    hoverColor: "rgb(255, 255, 255)",
    hoverBoxShadow: "box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 24px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
  },
  paper: PrimaryTheme.paper,
  color: PrimaryTheme.color
};

const DisableTheme = {
  layout: PrimaryTheme.layout,
  button: {
    color: "white",
    background: "#E0E0E0",
    boxShadow: "box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    hoverBackground: "#E0E0E0",
    hoverColor: "rgb(255, 255, 255)",
    hoverBoxShadow: "box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  },
  paper: PrimaryTheme.paper,
  color: PrimaryTheme.color

};

const DangerTheme = {
  layout: PrimaryTheme.layout,
  button: {
    color: "white",
    background: "#F64545",
    boxShadow: "0 0 0 0 rgba(145, 64, 248, 0.5), 0 0 0 0 rgba(39, 200, 255, 0.5)",
    hoverBackground: "linear-gradient(45deg,  #FA3867 30%, #FA3867 90%)",
    hoverColor: "rgb(255, 255, 255)",
    hoverBoxShadow: "5px -5px 15px 0 rgba(255, 127, 156, 0.5), -5px 5px 15px 0 rgba(255, 127, 156, 0.7)",
  },
  paper: PrimaryTheme.paper,
  color: PrimaryTheme.color
}

const Themes = {
    disabled: DisableTheme, //disable.
    primary: PrimaryTheme, //Indicates the primary action.
    secondary: SecondaryTheme, //Indicates an important action.
    danger: DangerTheme //Indicates a dangerous or negative action.
  };

  const ThemesEnum = {
    disabled: "disabled",
    primary: "primary",
    secondary: "secondary",
    danger: "danger"
  }
  
export { ThemesEnum };

export default Themes;