import React, { memo } from 'react'
import './sidebarNavIten.scss'

type Props = {
    title?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    buttonText?: string 
}

const SidebarNavItem: React.FC<Props> = ({ title, onClick, icon, buttonText }) => {
    return (
        <div className="sidebar-navItem" onClick={onClick}>
            <div className='sidebar-navItem-itemContnet'>
                <div className='sidebar-navItem-title'>
                    {icon && (
                        <div className='sidebar-navItem-icon'>
                            {icon}
                        </div>
                    )}
                    <span className='sidebar-navItem-text'>{title}</span>
                </div>
                <div className='sidebar-navItem-link-text' onClick={onClick}>{buttonText}</div>
            </div>
        </div>
    )
}

export default memo(SidebarNavItem)