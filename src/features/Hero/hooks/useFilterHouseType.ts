import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { HERO_CONSTANTS } from "../../../constants/HeroConstants";
import { setEstatePurposeType, toggleEstateType } from "../state/filterSlice";
import { selectSelectedEstateTypes, selectEstatePurposeType } from "../state/filterSelectors";

const useFilterHouseType = () => {
    const [dropdownIsVisible, setDropdownIsVisible] = useState<boolean>(false);
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

    return {
        handleDropdown,
        dropdownIsVisible,
        getDropTitle,
        TABS,
        estatePurposeType,
        handleTabClick,
        HERO_CONSTANTS,
        handleCheckboxChange,
        selectedEstateTypes,
        setDropdownIsVisible
    }
}

export default useFilterHouseType