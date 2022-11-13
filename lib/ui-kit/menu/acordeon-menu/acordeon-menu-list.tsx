import React from 'react'
import { MenuItemType } from '../types';
import AcordeonMenuItem from './acordeon-menu-item';

interface Props {
    onClick: (item: MenuItemType) => void;
    list: MenuItemType[];
    isOpenSidebar?: boolean; 
}

const AcordeonMenuList: React.FC<Props> = ({ list, onClick, isOpenSidebar=true }) => {

    const handleOnClickLink = (item: MenuItemType) => {
        onClick(item);
    }

    return (
        <div>
            {list?.map((item, index) => {
                return (
                    <AcordeonMenuItem 
                    key={index} 
                    isOpenSidebar={isOpenSidebar}
                    menuItem={item} 
                    onClick={(item) => handleOnClickLink(item)} />
                );
            })}
        </div>
    )
}

export default AcordeonMenuList;
