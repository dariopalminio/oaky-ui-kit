import React, { useState } from 'react'
import styled from 'styled-components';
import { MenuItemType } from '../types';

//.contenedor-menu .menu li a
const AcordeonMenuItemType = styled.li`
    color: black;
    display: block;
    padding: 12px 0px 12px 15px;
    &:hover {
        background: ${props => props.theme["primary"].color.backgroundHover};
    }
`;

const SubMenuItemType = styled.li`
    display: flex;
    align-items: center;
    padding: 12px 0px 12px 15px;
    margin-left: 10px;
    color: black;
    transition: all 0.4s ease-out;
    &:hover {
        background: #E5E5E5;
    }
`;

const MenuItemContainerType = styled.ul`
    list-style: none;
    padding-left: 0;
    margin: 0;
`;

const AnchorLink = styled.a`
    text-decoration:none;
    color: black;
`;

interface Props {
    onClick: (item: MenuItemType) => void;
    menuItem: MenuItemType;
    isOpenSidebar?: boolean; 
}

const AcordeonMenuItem: React.FC<Props> = ({ menuItem, onClick, isOpenSidebar }) => {

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(!open)
    }

    const handleOnClickSubMenuItem = (item: MenuItemType) => {
        onClick(item);
    }

    const handleOnClickAnchorLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
    }

    return (
        <MenuItemContainerType>
            <AcordeonMenuItemType onClick={() => handleClickOpen()}>
                <AnchorLink href="#" onClick={(e) => handleOnClickAnchorLink(e)}>
                    {menuItem.icon}&nbsp;
                    { isOpenSidebar ? menuItem.title : null}
                </AnchorLink>
            </AcordeonMenuItemType>
            {menuItem?.submenu?.map((item, index) => {
                if (open)
                    return (
                        <SubMenuItemType key={index} onClick={() => handleOnClickSubMenuItem(item)}>
                            <AnchorLink href="#" onClick={(e) => handleOnClickAnchorLink(e)}>
                                {item.icon}&nbsp;{item.title}
                            </AnchorLink>
                        </SubMenuItemType>
                    );
            })}
        </MenuItemContainerType>
    )
}

export default AcordeonMenuItem