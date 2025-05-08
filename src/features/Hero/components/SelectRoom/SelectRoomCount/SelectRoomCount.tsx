import React, { useState, memo } from 'react'
import './selectRoomCount.scss'
import DropDownIc from '../../../../../assets/icons/DropDownIc';
import useClickOutside from '../../../../../hooks/useClickOutside';
import SearchItemHeader from '../../SearchItemHeader/SearchItemHeader';
import SelectRoomTabItem from '../SelectRoomCountTabItem/SelectRoomTabItem';
import { setRoomsCount } from '../../../state/filterSlice'
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { updateRoomCount } from '../../../utils/roomCount';
import { HERO_CONSTANTS } from '../../../../../constants/HeroConstants';
import { selectRoomCount } from '../../../state/filterSelectors';

type Props = {
    title?: string;
}

const SelectRoomCount: React.FC<Props> = ({ title = 'Otaq sayı' }) => {
    const dispatch = useAppDispatch();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const selectRef = useClickOutside(() => setIsVisible(false));
    const selectedRoomCounts = useAppSelector((state) => state.filter.roomCount);
    // const selectedRoomCounts = useAppSelector(selectRoomCount);


    // const tabs = ['1', '2', '3', '4', '5+', 'Studiya'];
    const tabs = HERO_CONSTANTS.filter.ROOM_COUNTER.tabs

    const toggleRoomDropdown = () => {
        setIsVisible(prevState => !prevState);
    }

    const selectRoomTab = (selectedTab: string) => {
        const newSelectedRoomCounts = updateRoomCount(selectedTab, selectedRoomCounts, dispatch);
        dispatch(setRoomsCount(newSelectedRoomCounts));
    }

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
                        <SelectRoomTabItem onClick={() => selectRoomTab(item)} isActive={isActive} key={index}>
                            {item}
                        </SelectRoomTabItem>
                    )
                })}
            </div>
        </div>
    )
}

export default memo(SelectRoomCount)