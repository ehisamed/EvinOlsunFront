import React, { useState } from 'react'
import './selectRoomCount.scss'
import DropDownIc from '../../../../assets/icons/DropDownIc';
import useClickOutside from '../../../../hooks/useClickOutside';
import SearchItemHeader from '../SearchItemHeader/SearchItemHeader';

type Props = {
    title?: string;
}

const SelectRoomCount: React.FC<Props> = ({ title = 'Otaq sayı' }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const selectRef = useClickOutside(() => setIsVisible(false));
    const [selectedTabs, setSelectedTabs] = useState<number[]>([]);

    const tabs = ['1', '2', '3', '4', '5+', 'Studiya'];


    const handleSelectRoom = () => {
        setIsVisible(prevState => !prevState);
    }

    const handleSelectTab = (tabIndex: number) => {
        setSelectedTabs(prevSelected => {
            if (prevSelected?.includes(tabIndex)) {
                return selectedTabs?.filter(index => index !== tabIndex);
            } else {
                return [...prevSelected, tabIndex];
            }
        })
    }

    return (
        <div className={`select-room-count`} ref={selectRef}>
            <SearchItemHeader
                suffix={<DropDownIc width={14} height={19} />}
                onClick={handleSelectRoom}
                suffixRotate={isVisible}
            >
                {title}
            </SearchItemHeader>
            <div className={`select-room-content ${isVisible ? 'select-isvisible' : null}`}>
                {tabs.map((item, index) => {
                    const isActive = selectedTabs?.includes(index);
                    return (
                        <div
                            className={`select-room-tabbar ${isActive ? 'active-select-tab' : null}`}
                            key={index}
                            onClick={() => handleSelectTab(index)}
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SelectRoomCount