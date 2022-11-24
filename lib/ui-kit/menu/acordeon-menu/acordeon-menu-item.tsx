import React, { useState } from 'react'
import styled from 'styled-components';
import { MenuItemType } from '../types';

//.contenedor-menu .menu li a
const AcordeonMenuItemType = styled.li`
    color: ${props => props.theme.color['text'].base};
    display: block;
    padding: 12px 0px 12px 15px;
    &:hover {
        color: black;
        background: ${props => props.theme.color['hover'].lighter};
    }
`;

const SubMenuItemType = styled.li`
    display: flex;
    align-items: center;
    padding: 12px 0px 12px 15px;
    margin-left: 10px;
    color: ${props => props.theme.color['text'].base};
    transition: all 0.4s ease-out;
    &:hover {
        color: ${props => props.theme.color['text'].darkened};
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
                    {isOpenSidebar ? menuItem.title : null}
                </AnchorLink>
            </AcordeonMenuItemType>
            {open &&
                menuItem?.submenu?.map(
                    (item, index) => {
                        return (
                            <SubMenuItemType key={index} onClick={() => handleOnClickSubMenuItem(item)}>
                                <AnchorLink href="#" onClick={(e) => handleOnClickAnchorLink(e)}>

                                    {item.icon}&nbsp;
                                    {isOpenSidebar ? item.title : null}

                                </AnchorLink>
                            </SubMenuItemType>
                        );
                    }
                )
            }
        </MenuItemContainerType>
    )
}

export default AcordeonMenuItem