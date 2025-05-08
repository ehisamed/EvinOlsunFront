import React, { memo } from 'react'
import './style.scss'

type Props = {
    isActive: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}

const SelectRoomTabItem: React.FC<Props> = ({ isActive, onClick, children }) => {
    return (
        <div
            className={`select-room-tabbar ${isActive ? 'active-select-tab' : null}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default memo(SelectRoomTabItem)