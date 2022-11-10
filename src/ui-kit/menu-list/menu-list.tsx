import { MenuItemType } from "./menu-item.type";
import MenuItem from "./menu-item";

interface Props {
    id: string;
    permission?: string;
    menuList: MenuItemType[];
    backgroundColor?: string;
    hoverColor?: string;
    style?: any;
}

/**
 * Menu Accordion
 */
export const MenuList: React.FC<Props> = ({ id, permission, menuList, backgroundColor, hoverColor, style }) => {

    const isShowed = (item: MenuItemType) => {
        return permission? item.access.includes(permission) : false;
    }

    return (
        <div 
        {...(style && 
            (style={style})
          )}>
            {menuList.map((item, index) => {
                if (isShowed(item))
                return (
                    <MenuItem key={index}
                    menuItem={item} backgroundColor={backgroundColor} hoverColor={hoverColor}></MenuItem>
                );
            })}

        </div>
    );
};

export default MenuList;