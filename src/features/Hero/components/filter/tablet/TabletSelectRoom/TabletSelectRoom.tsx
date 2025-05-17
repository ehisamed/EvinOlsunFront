import React, { memo } from 'react'
import './tabletSelectRoom.scss'
import SelectRoomTabItem from '../../desctop/SelectRoom/SelectRoomCountTabItem/SelectRoomTabItem';
import useFilterRoom from '../../../../hooks/useFilterRoom';

const SelectRoom = () => {
    const {
        tabs,
        selectedRoomCounts,
        selectRoomTab
    } = useFilterRoom();


    return (
        <div className='tablet-select-room'>
            <p className='tablet-select-room__title'>Otaqin sayi</p>
            <div className={`tablet-select-room__content`}>
                {tabs.map((item, index) => {
                    const isActive = selectedRoomCounts?.includes(item);
                    return (
                        <SelectRoomTabItem onClick={() => selectRoomTab(item)} isActive={isActive} key={index}>
                            {item}
                        </SelectRoomTabItem>
                    )
                })}
            </div>
        </div>
    )
}

export default memo(SelectRoom)