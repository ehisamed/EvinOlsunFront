import React, { memo } from 'react'
import './selectHouseType.scss'
import DropDownIc from '../../../../../../assets/icons/DropDownIc'
import useClickOutside from '../../../../../../hooks/useClickOutside';
import SearchItemHeader from '../../../SearchItemHeader/SearchItemHeader';
import { HERO_CONSTANTS } from '../../../../../../constants/HeroConstants';
import CheckboxItem from '../../../CheckboxItem/CheckboxItem';
import useFilterHouseType from '../../../../hooks/useFilterHouseType';

type Props = {
    dropTitle?: string;
}

const SelectHouseType: React.FC<Props> = ({ dropTitle = HERO_CONSTANTS.filter.HOUSE_TYPE.title }) => {
    const {
        setDropdownIsVisible,
        handleDropdown,
        dropdownIsVisible,
        getDropTitle,
        TABS,
        handleTabClick,
        estatePurposeType,
        selectedEstateTypes,
        handleCheckboxChange
    } = useFilterHouseType();
    const dropdownRef = useClickOutside(() => setDropdownIsVisible(false));

    return (
        <div className={`type-dropdown select-type`} ref={dropdownRef}>
            <SearchItemHeader onClick={handleDropdown} suffix={<DropDownIc width={14} height={19} />} suffixRotate={dropdownIsVisible}>
                {getDropTitle()}
            </SearchItemHeader>
            <div className={`type-dropdown-content ${dropdownIsVisible ? 'dropdown-visible' : ''}`}>
                <div className="dropdown-content-tabbar">
                    {TABS.map((item, index) => {
                        return (
                            <div
                                className={`tabbar-item ${estatePurposeType === item ? 'active-tab' : ''}`}
                                key={index}
                                onClick={() => handleTabClick(item)}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
                <div className="dropdown-content-multiCheckboxBlock">
                    {estatePurposeType === HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES[0]
                        ? HERO_CONSTANTS.filter.HOUSE_TYPE.LIVING.types.map(type =>
                            <CheckboxItem
                                key={type}
                                label={type}
                                checked={selectedEstateTypes.includes(type)}
                                onChange={() => handleCheckboxChange(type)}
                            />)
                        : HERO_CONSTANTS.filter.HOUSE_TYPE.COMMERCIAL.types.map(type =>
                            <CheckboxItem
                                key={type}
                                label={type}
                                checked={selectedEstateTypes.includes(type)}
                                onChange={() => handleCheckboxChange(type)}
                            />)}
                </div>
            </div>
        </div>
    )
}

export default memo(SelectHouseType)