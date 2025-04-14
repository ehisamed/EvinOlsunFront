import React, { useState } from 'react'
import DropDownIc from '../../../../assets/icons/DropDownIc';
import './tabletFilter.scss'
import useClickOutside from '../../../../hooks/useClickOutside';

type Props = {
    title?: string;
}

const TabletFilter: React.FC<Props> = ({ title = 'Filter' }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const filterRef = useClickOutside(() => setIsVisible(false));
    const [selectedTabs, setSelectedTabs] = useState<number[]>([]);
    const [selectedAppBar, setSelectedAppBar] = useState<number | null>(0);

    const tabs = ['1', '2', '3', '4', '5+', 'Studiya'];
    const appBarTabs = ['Yaşayış', 'Ticari'];

    const handleVisible = () => {
        setIsVisible(prevState => !prevState)
    }

    const handleRoomCount = (tabIndex: number) => {
        setSelectedTabs(prevSelected => {
            if (prevSelected?.includes(tabIndex)) {
                return selectedTabs.filter(index => index !== tabIndex);
            } else {
                return [...prevSelected, tabIndex];
            }
        })
    }

    const handleAppBar = (tabIndex: number) => {
        setSelectedAppBar(tabIndex);
    }


    return (
        <div className='tablet-filter' ref={filterRef}>
            <div className="tablet-filter-header" onClick={handleVisible}>
                <div className="tablet-filter-title">
                    {title}
                </div>
                <div className={`dropdown-icon`}>
                    <DropDownIc width={14} height={19} />
                </div>
            </div>
            <div className={`tablet-filter-contnet ${isVisible ? 'filter-visible' : null}`}>
                <div className="filter-multiCheckboxBlock">
                    <div className='checkbox-item'>
                        <label className="custom-checkbox">
                            <input type="checkbox" className="checkbox" />
                            <span className="checkmark"></span>
                            <span className='checkbox-item-title'>Квартира на вторичке</span>
                        </label>
                    </div>
                    <div className='checkbox-item'>
                        <label className="custom-checkbox">
                            <input type="checkbox" className="checkbox" />
                            <span className="checkmark"></span>
                            <span className='checkbox-item-title'>Квартира на вторичке</span>
                        </label>
                    </div>
                </div>
                <div className='right-side'>
                    <div className={`tablet-filter-appbar`}>
                        {appBarTabs.map((item, index) => {
                            return (
                                <div
                                    className={`appbar-tab ${selectedAppBar === index ? 'active-appbar-tab' : null}`}
                                    key={index}
                                    onClick={() => handleAppBar(index)}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                    <p className='section-title'>Otaqin sayi</p>
                    <div className={`tablet-select-room-content ${isVisible ? 'tablet-select-isvisible' : null}`}>
                        {tabs.map((item, index) => {
                            const isActive = selectedTabs?.includes(index);
                            return (
                                <div
                                    className={`tablet-select-room-tabbar ${isActive ? 'tablet-active-select-tab' : null}`}
                                    key={index}
                                    onClick={() => handleRoomCount(index)}
                                >
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabletFilter