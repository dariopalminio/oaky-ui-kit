import React from 'react'
import { MenuItemType } from '../types';
import AcordeonMenuItem from './acordeon-menu-item';

interface Props {
    onClick: (item: MenuItemType) => void;
    list: MenuItemType[];
}

const AcordeonMenuList: React.FC<Props> = ({ list, onClick }) => {

    const handleOnClickLink = (item: MenuItemType) => {
        onClick(item);
    }

    return (
        <div>
            {list?.map((item, index) => {
                return (
                    <AcordeonMenuItem key={index} menuItem={item} onClick={(item) => handleOnClickLink(item)} />
                );
            })}
        </div>
    )
}

export default AcordeonMenuList;
