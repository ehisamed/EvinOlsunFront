import React, { useCallback, memo } from 'react'
import './tabletSelectRoom.scss'
import { HERO_CONSTANTS } from '../../../../../../constants/HeroConstants';
import { useAppDispatch, useAppSelector } from '../../../../../../redux/hooks';
import { selectRoomCount } from '../../../../state/filterSelectors';
import { setRoomsCount } from '../../../../state/filterSlice';
import { updateRoomCount } from '../../../../utils/roomCount';
import SelectRoomTabItem from '../../../SelectRoom/SelectRoomCountTabItem/SelectRoomTabItem';

const TabletSelectRoom = () => {
    const dispatch = useAppDispatch();
    const selectedRoomState = useAppSelector(selectRoomCount);

    const TABS = HERO_CONSTANTS.filter.ROOM_COUNTER.tabs;

    const handleRoomCount = useCallback((selectedTab: string) => {
        const newSelectedRoomCounts = updateRoomCount(selectedTab, selectedRoomState, dispatch);
        dispatch(setRoomsCount(newSelectedRoomCounts));
    }, [dispatch, selectedRoomState]);

    return (
        <div className='tablet-select-room'>
            <p className='section-title'>Otaqin sayi</p>
            <div className={`tablet-select-room-content`}>
                {TABS.map((item, index) => {
                    const isActive = selectedRoomState?.includes(item);
                    return (
                        <SelectRoomTabItem onClick={() => handleRoomCount(item)} isActive={isActive} key={index}>
                            {item}
                        </SelectRoomTabItem>
                    )
                })}
            </div>
        </div>
    )
}

export default memo(TabletSelectRoom)