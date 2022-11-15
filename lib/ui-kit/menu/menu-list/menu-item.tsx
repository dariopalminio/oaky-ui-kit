import { MenuItemType } from "../types";
import { useState } from "react";
import styled from "styled-components";

const StylesSubMenuItem = styled.div`
    .submenuItems {
        display: flex;
        margin-left: 0px;
        width: 100%;
    }

    .submenulink {
        text-decoration: none;
    }

    .submenuItems .submenulink {
        display: block;
        color: black;
        margin-left: 0px;
        padding: 12px 0px 12px 15px;
        transition: all 0.4s ease-out;
        width: 100%;
    }

    .submenuItems:hover .submenulink:hover {
        background: ${props => props.theme["primary"].color.backgroundHover};
        color: black;
    }
`;

interface Props {
    menuItem: MenuItemType;
    backgroundColor?: string;
    hoverColor?: string;
    style?: any;
    onClick: (item: MenuItemType) => void;
    isOpenSidebar?: boolean;
}

/**
 * Menu Item for Menu Accordion
 */
const MenuItem: React.FC<Props> = ({ menuItem, backgroundColor, hoverColor, onClick, style, isOpenSidebar }) => {
    const [styleHover, setStyleHover] = useState({});
    //const location = useLocation();

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setStyleHover(hoverColor ? { background: hoverColor } : {});
    };
    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setStyleHover(backgroundColor ? { background: backgroundColor } : {});
    };

    const handleOnClickLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        onClick(menuItem);
    }

    return (
        <StylesSubMenuItem>
            <div key={menuItem.key} className="submenuItems"
                {...(backgroundColor && {
                    style: { background: backgroundColor },
                })}
            >

                <a href="#"
                    onClick={(e) => handleOnClickLink(e)}
                    className="submenulink"
                    onMouseEnter={(e) => handleMouseEnter(e)}
                    onMouseLeave={(e) => handleMouseLeave(e)}
                    style={styleHover}>
                    {menuItem.icon}&nbsp;
                    {isOpenSidebar ? menuItem.title : null}
                </a>

            </div>
        </StylesSubMenuItem>
    );
};

export default MenuItem;