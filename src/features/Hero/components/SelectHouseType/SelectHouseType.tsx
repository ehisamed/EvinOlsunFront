import React, { useState, memo } from 'react'
import './selectHouseType.scss'
import DropDownIc from '../../../../assets/icons/DropDownIc'
import useClickOutside from '../../../../hooks/useClickOutside';
import SearchItemHeader from '../SearchItemHeader/SearchItemHeader';
import { HERO_CONSTANTS } from '../../../../constants/HeroConstants';
import CheckboxItem from '../CheckboxItem/CheckboxItem';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { setEstatePurposeType, toggleEstateType } from '../../state/filterSlice'
import { selectEstatePurposeType, selectSelectedEstateTypes } from '../../state/filterSelectors';

type Props = {
    dropTitle?: string;
}

const SelectHouseType: React.FC<Props> = ({ dropTitle = HERO_CONSTANTS.filter.HOUSE_TYPE.title }) => {
    const [dropdownIsVisible, setDropdownIsVisible] = useState<boolean>(false);
    const dropdownRef = useClickOutside(() => setDropdownIsVisible(false));
    const dispatch = useAppDispatch();
    const selectedEstateTypes = useAppSelector(selectSelectedEstateTypes);
    const estatePurposeType = useAppSelector(selectEstatePurposeType);

    const TABS = HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES;

    const handleTabClick = (tabItem: string) => {
        dispatch(setEstatePurposeType(tabItem))
        if (tabItem === HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES[0]) {
            HERO_CONSTANTS.filter.HOUSE_TYPE.COMMERCIAL.types.forEach(type => {
                if (selectedEstateTypes.includes(type)) {
                    dispatch(toggleEstateType(type));
                }
            });
        } else {
            HERO_CONSTANTS.filter.HOUSE_TYPE.LIVING.types.forEach(type => {
                if (selectedEstateTypes.includes(type)) {
                    dispatch(toggleEstateType(type));
                }
            });
        }
    }

    const handleDropdown = () => {
        setDropdownIsVisible(prevState => !prevState)
    }

    const handleCheckboxChange = (type: string) => {
        dispatch(toggleEstateType(type))
    }

    const getDropTitle = () => {
        if (estatePurposeType === HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES[0]) {
            const selectedLivingTypes = HERO_CONSTANTS.filter.HOUSE_TYPE.LIVING.types.filter(type => selectedEstateTypes.includes(type));
            return selectedLivingTypes.length > 0 ? `Yaşayış - ${selectedLivingTypes.join(', ')}` : 'Yaşayış';
        } else {
            const selectedCommercialTypes = HERO_CONSTANTS.filter.HOUSE_TYPE.COMMERCIAL.types.filter(type => selectedEstateTypes.includes(type));
            return selectedCommercialTypes.length > 0 ? `Ticari - ${selectedCommercialTypes.join(', ')}` : 'Ticari';
        }
    }

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