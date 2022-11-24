import React, { useState } from 'react'
import styled from 'styled-components';
import { MenuItemType } from '../types';


interface IAcordeonProps {
    level: number;
}

//.contenedor-menu .menu li a
const AcordeonMenuItemType = styled.li<IAcordeonProps>`
    color: ${props => props.theme.color['text'].base};
    display: block;
    padding: 12px 0px 15px ${props => (props.level * 15).toString()}px;
    &:hover {
        color: black;
        background: ${props => props.theme.color['hover'].lighter};
    }
`;

const MenuItemContainerType = styled.ul`
    list-style: none;
    padding-left: 0;
    margin: 0;
`;

const AnchorLink = styled.a`
    text-decoration:none;
    color: ${props => props.theme.color['text'].base};
`;

interface IProps {
    level: number;
    onClick: (item: MenuItemType) => void;
    menuItem: MenuItemType;
    isOpenSidebar?: boolean;
}

const AcordeonMenuItem: React.FC<IProps> = ({ level, menuItem, onClick, isOpenSidebar }) => {

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        if (menuItem?.submenu) setOpen(!open)
        else onClick(menuItem);
    }

    const handleOnClickSubMenuItem = (item: MenuItemType) => {
        onClick(item);
    }

    const handleOnClickAnchorLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
    }

    return (
        <MenuItemContainerType>
            <AcordeonMenuItemType
                level={level}
                onClick={() => handleClickOpen()}>
                <AnchorLink href="#" onClick={(e) => handleOnClickAnchorLink(e)}>
                    {menuItem.icon}&nbsp;
                    {isOpenSidebar ? menuItem.title : null}
                </AnchorLink>
            </AcordeonMenuItemType>
            {open &&
                menuItem?.submenu?.map(
                    (item, index) => {
                        return (
                            <AcordeonMenuItem
                                key={index}
                                level={level + 1}
                                isOpenSidebar={isOpenSidebar}
                                menuItem={item}
                                onClick={(item) => handleOnClickSubMenuItem(item)} />
                        );
                    }
                )
            }
        </MenuItemContainerType>
    )
}

export default AcordeonMenuItem