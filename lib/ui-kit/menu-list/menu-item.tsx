import { MenuItemType } from "./types";
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
        color: #727272;
        margin-left: 0px;
        padding: 12px 0px 12px 15px;
        transition: all 0.4s ease-out;
        width: 100%;
    }

    .submenuItems:hover .submenulink:hover {
        background: #E5E5E5;
        color: black;
    }
`;

interface Props {
    menuItem: MenuItemType;
    backgroundColor?: string;
    hoverColor?: string;
    style?: any;
    onClick: (item: MenuItemType) => void;
}

/**
 * Menu Item for Menu Accordion
 */
const MenuItem: React.FC<Props> = ({ menuItem, backgroundColor, hoverColor, onClick, style }) => {
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

    return (
        <StylesSubMenuItem>
            <div key={menuItem.key} className="submenuItems"
                {...(backgroundColor && {
                    style: { background: backgroundColor },
                })}
            >
                
                <a  href="javascript:void(0)"
                    onClick={ () => onClick(menuItem) }
                    className="submenulink" 
                    onMouseEnter={(e) => handleMouseEnter(e)}
                    onMouseLeave={(e) => handleMouseLeave(e)} 
                    style={styleHover}>
                    {menuItem.icon}&nbsp;{menuItem.title}
                </a>
              
            </div>
        </StylesSubMenuItem>
    );
};

export default MenuItem;