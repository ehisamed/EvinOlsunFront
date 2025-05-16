import React, { memo } from 'react'
import './selectRoomCount.scss'
import DropDownIc from '../../../../../../../assets/icons/DropDownIc';
import useClickOutside from '../../../../../../../hooks/useClickOutside';
import SearchItemHeader from '../../../../SearchItemHeader/SearchItemHeader';
import { RoomSelectorTab } from '..';
import useFilterRoom from '../../../../../hooks/useFilterRoom';

type Props = {
    title?: string;
}

const SelectRoomCount: React.FC<Props> = ({ title = 'Otaq sayı' }) => {
    const {
        selectRoomTab,
        setIsVisible,
        toggleRoomDropdown,
        isVisible,
        selectedRoomCounts,
        tabs
    } = useFilterRoom()
    const selectRef = useClickOutside(() => setIsVisible(false));
    
    return (
        <div className={`select-room-count`} ref={selectRef}>
            <SearchItemHeader
                suffix={<DropDownIc width={14} height={19} />}
                onClick={toggleRoomDropdown}
                suffixRotate={isVisible}
            >
                {selectedRoomCounts.length > 0 ? selectedRoomCounts.join(', ') : title}
            </SearchItemHeader>
            <div className={`select-room-content ${isVisible ? 'select-isvisible' : null}`}>
                {tabs.map((item, index) => {
                    const isActive = selectedRoomCounts.includes(item);
                    return (
                        <RoomSelectorTab onClick={() => selectRoomTab(item)} isActive={isActive} key={index}>
                            {item}
                        </RoomSelectorTab>
                    )
                })}
            </div>
        </div>
    )
}

export default memo(SelectRoomCount)