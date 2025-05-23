import { MenuItemType } from "../types";
import MenuItem from "./menu-item";

interface MenuListProps {
    id: string;
    onClick: (item: MenuItemType) => void;
    permission?: string;
    menuList: MenuItemType[];
    backgroundColor?: string;
    hoverColor?: string;
    style?: any;
    isOpenSidebar?: boolean; 
}

/**
 * Menu Accordion
 */
const MenuList: React.FC<MenuListProps> = ({ id, permission, menuList, backgroundColor, hoverColor, style, onClick, isOpenSidebar=true }) => {

    const isShowed = (item: MenuItemType) => {
        return permission ? item.access.includes(permission) : false;
    }

    return (
        <div
            {...(style &&
                (style = { style })
            )}>
            {menuList.map((item, index) => {
                if (isShowed(item))
                    return (
                        <MenuItem
                            onClick={(item: MenuItemType) => onClick(item)}
                            key={index}
                            menuItem={item}
                            backgroundColor={backgroundColor}
                            hoverColor={hoverColor} 
                            isOpenSidebar={isOpenSidebar}/>
                    );
            })}

        </div>
    );
};

export default MenuList;