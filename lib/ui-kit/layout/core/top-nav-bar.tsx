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
  background-image: ${props => props.theme.layout.headerBackgroundImage};
  height: ${props => props.theme.layout.headerHeight}px;
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

const containerTopMenuStyle = {
    display: "flex",
    flexGrow: 100,
    marginLeft: "6px",
    justifyContent: "flex-start",
};

interface IProps {
    style?: any;
    logo?: React.ReactNode;
    bar: React.ReactNode; //Render Prop for footer
}

/**
 * TopNavBar Function Component. Header component.
 * 
 * extensible Style and controlled component
 * @visibleName TopNavBar View
 */
const TopNavBar: React.FC<IProps> = (props: IProps) => {

    const { sidebarWidth,
        isSidebarOpen,
        toggleSidebar } = useContext(LayoutContext) as ILayoutContext;


    return (

        <Topbar style={props.style ? props.style : {}}>
            {!isSidebarOpen &&
                <IconButton onClick={() => toggleSidebar()}
                    style={{ justifySelf: "left", marginLeft: "5px" }}>
                    <RiMenuFill size={24} />
                </IconButton>
            }


            <div style={containerTopMenuStyle}>
                {props.logo && (
                    props.logo
                )}
            </div>

            <TopMenuContainer>

                {props.bar}

            </TopMenuContainer>

        </Topbar>

    );
};

export default TopNavBar;
