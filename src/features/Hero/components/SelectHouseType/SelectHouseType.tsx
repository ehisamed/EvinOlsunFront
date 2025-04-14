import React, { useState } from 'react'
import './selectHouseType.scss'
import DropDownIc from '../../../../assets/icons/DropDownIc'
import useClickOutside from '../../../../hooks/useClickOutside';
import SearchItemHeader from '../SearchItemHeader/SearchItemHeader';

type Props = {
    dropTitle?: string;
}

const SelectHouseType: React.FC<Props> = ({ dropTitle = 'Əmlak növləri' }) => {
    const [dropdownIsVisible, setDropdownIsVisible] = useState<boolean>(false);
    const [selectedTab, setSelectedTab] = useState<number | null>(0);
    const dropdownRef = useClickOutside(() => setDropdownIsVisible(false));


    const tabs = ['Yaşayış', 'Ticari'];

    const handleTabClick = (tabIndex: number) => {
        setSelectedTab(tabIndex);
    }

    const handleDropdown = () => {
        setDropdownIsVisible(prevState => !prevState)
    }

    return (
        <div className={`type-dropdown select-type`} ref={dropdownRef}>
            <SearchItemHeader onClick={handleDropdown} suffix={<DropDownIc width={14} height={19} />} suffixRotate={dropdownIsVisible}>
                {dropTitle}
            </SearchItemHeader>
            <div className={`type-dropdown-content ${dropdownIsVisible ? 'dropdown-visible' : null}`}>
                <div className="dropdown-content-tabbar">
                    {tabs.map((item, index) => {
                        return (
                            <div
                                className={`tabbar-item ${selectedTab === index ? 'active-tab' : null}`}
                                key={index}
                                onClick={() => handleTabClick(index)}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
                {selectedTab === 0 && (
                    <div className="dropdown-content-multiCheckboxBlock">
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
                )}

                {selectedTab === 1 && (
                    <div className="dropdown-content-multiCheckboxBlock">
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
                )}
            </div>
        </div>
    )
}

export default SelectHouseType