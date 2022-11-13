import React, { useState } from 'react'
import styled from 'styled-components';
import { MenuItemType } from '../types';

//.contenedor-menu .menu li a
const AcordeonMenuItemType = styled.li`
    color: black;
    display: block;
    padding: 5px;
    &:hover {
        background: #E5E5E5;
    }
`;

const SubMenuItemType = styled.li`
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 5px;
    color: black;
    padding: 5px;
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

const AnchorLink  = styled.a`
    text-decoration:none;
    color: black;
`;

interface Props {
    onClick: (item: MenuItemType) => void;
    menuItem: MenuItemType;
}

const AcordeonMenuItem: React.FC<Props> = ({ menuItem, onClick }) => {

    const [open, setOpen] = useState(false)

    const handleClickOpen = () =>{
        setOpen(!open)
    }

    const handleOnClickSubMenuItem = (item: MenuItemType) =>{
        onClick(item);
    }

    const handleOnClickAnchorLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
        e.preventDefault();
    }

    return (
            <MenuItemContainerType>
                <AcordeonMenuItemType onClick={ () => handleClickOpen() }>
                    <AnchorLink href="#" onClick={ (e) => handleOnClickAnchorLink(e) }>
                    {menuItem.icon}&nbsp;{menuItem.title}
                    </AnchorLink>
                    </AcordeonMenuItemType>
                {menuItem?.submenu?.map((item, index) => {
                    if (open)
                        return (
                            <SubMenuItemType key={index} onClick={ () => handleOnClickSubMenuItem(item) }>
                                <AnchorLink href="#"  onClick={ (e) => handleOnClickAnchorLink(e) }>
                                {item.icon}&nbsp;{item.title}
                                    </AnchorLink>
                                    </SubMenuItemType>
                        );
                })}
            </MenuItemContainerType>
    )
}

export default AcordeonMenuItem