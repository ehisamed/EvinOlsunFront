import React from 'react'
import './sidebarNavIten.scss'
import LocationIc from '../../../../../../assets/icons/LocationIc'

type Props = {
    city?: string;
    onClick?: () => void;
}

const SidebarNavItem: React.FC<Props> = ({ city, onClick }) => {
    return (
        <div className="sidebar-navItem">
            <div className='sidebar-navItem-itemContnet'>
                <div className='sidebar-navItem-title'>
                    <div className='sidebar-navItem-icon'>
                        <LocationIc width={18} height={18} />
                    </div>
                    <span className='sidebar-navItem-text'>{city}</span>
                </div>
                <div className='sidebar-navItem-link-text' onClick={onClick}>Dəyiş</div>
            </div>
        </div>
    )
}

export default SidebarNavItem