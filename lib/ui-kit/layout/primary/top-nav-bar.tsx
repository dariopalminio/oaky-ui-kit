import { useContext } from "react";
import styled from "styled-components";
import { RiMenuFill } from "react-icons/ri";
import IconButton from "../../icon-button/icon-button";
import { LayoutContext } from "../layout-context-provider";
import { ILayoutContext } from "../types";

const Topbar = styled.div`
  position: relative;
  display: flex; 
  align-items: center;
  background-image: ${props => props.theme['primary'].layout.headerBackgroundImage};
  height: ${props => props.theme['primary'].layout.headerHeight}px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const TopMenuContainer = styled.div`
  position: relative;
  width: 100%;
  right: 30px;
  margin-right: 30px;
  left: 5px;
  display: flex; 
  align-items: center;
  justify-content: right;
`;

const LogoImg = styled.img``;

const containerTopMenuStyle = {
    display: "flex",
    flexGrow: 100,
    marginLeft: "6px",
    justifyContent: "flex-start",
};

interface IProps {
    style?: any;
    logo?: any;
    bar: React.ReactNode; //Render Prop for footer
}

/**
 * TopNavBar Function Component.
 * Header component.
 * @visibleName TopNavBar View
 */
const TopNavBar: React.FC<IProps> = (props: IProps) => {

    const { sidebarWidth,
        isSidebarOpen,
        toggleSidebar } = useContext(LayoutContext) as ILayoutContext;


    return (

        <Topbar>
            {!isSidebarOpen &&
                <IconButton onClick={()=> toggleSidebar()}
                    style={{ justifySelf: "left", marginLeft: "5px" }}>
                    <RiMenuFill size={24} />
                </IconButton>
            }

            <div style={containerTopMenuStyle}>
                {props.logo && (
                    <LogoImg style={{ marginRight: "10px" }}
                        src={props.logo}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "../images/no-image.jpg";
                        }}
                        loading="lazy" />
                )}
            </div>

            <TopMenuContainer>

                {props.bar}

            </TopMenuContainer>

        </Topbar>

    );
};

export default TopNavBar;
