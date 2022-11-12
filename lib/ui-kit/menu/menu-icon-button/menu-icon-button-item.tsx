

import { MenuItemType } from "../types";
import styled from "styled-components";
import IconButton from "../../icon-button/icon-button";
import React from "react";
import MenuListFloat from "../menu-list-float/menu-list-float";
//<RiAccountCircleFill size={20} /> user

const MenuIconButtonItemContainer = styled.div`
    position: relative;
    rigt: 1em;
    display: flex;
`;

interface Props {
    permission?: string;
    item: MenuItemType;
    onClick: (item: MenuItemType) => void;
    style?: any;
}

/**
 * Menu Item for Menu Icon-Button
 */
const MenuIconButtonItem: React.FC<Props> = ({ permission, item, onClick, style }) => {

    const [isOpen, setIsOpen] = React.useState(false);
    

    const handleClick = (item: MenuItemType) => {
        toggleMenu(); // open or close MenuListFloat
        if (!item.submenu) {
            onClick(item);
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen); // open or close MenuListFloat
    };

    const getSubmenuData = (): MenuItemType[] => {
        return item.submenu ? item.submenu : [];
    };

    return (
    <MenuIconButtonItemContainer
        {...(style && 
            (style= {style})
          )}>
         <IconButton onClick={() => handleClick(item)}
        >
            {item.icon}
        </IconButton>

        {((item.submenu) && (
            <MenuListFloat
                id={"MenuListFloat"+item.key}
                isOpen={isOpen}
                permission={permission}
                menuList={getSubmenuData()}
                toogle={()=>toggleMenu()}
                onClick={(itemElement: MenuItemType) => onClick(itemElement)}
            />
        ))}
    </MenuIconButtonItemContainer>
    );
};

export default MenuIconButtonItem;