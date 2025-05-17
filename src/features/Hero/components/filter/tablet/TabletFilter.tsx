import React, { useState, memo, useCallback } from 'react'
import DropDownIc from '../../../../../assets/icons/DropDownIc';
import './tabletFilter.scss'
import useClickOutside from '../../../../../hooks/useClickOutside';
import SearchItemHeader from '../../SearchItemHeader/SearchItemHeader';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { HERO_CONSTANTS } from '../../../../../constants/HeroConstants';
import { setEstatePurposeType, toggleEstateType } from '../../../state/filterSlice';
import { selectEstatePurposeType, selectSelectedEstateTypes } from '../../../state/filterSelectors';
import EnterPrice from './EnterPrice';
import TabletSelectRoom from './TabletSelectRoom/TabletSelectRoom';
import SelectHouseUsageType from './SelectHousePurposeType';
import SelectEstateTypeCheckbox from './SelectEstateTypeCheckbox';
import useFilterHouseType from '../../../hooks/useFilterHouseType';

type Props = {
    title?: string;
}

const TabletFilter: React.FC<Props> = ({ title = 'Filter' }) => {
    const selectedEstateTypes = useAppSelector(selectSelectedEstateTypes);
    const estatePurposeType = useAppSelector(selectEstatePurposeType);
    const {
        handleCheckboxChange,
        handleDropdown,
        handleTabClick,
        TABS,
        dropdownIsVisible,
        setDropdownIsVisible
    } = useFilterHouseType();
    const filterRef = useClickOutside(() => setDropdownIsVisible(false));

    return (
        <div className='tablet-filter' ref={filterRef}>
            <SearchItemHeader suffix={<DropDownIc />} suffixRotate={dropdownIsVisible} onClick={handleDropdown}>
                {HERO_CONSTANTS.filter.TABLET_TITLE}
            </SearchItemHeader>
            <div className={`tablet-filter__contnet ${dropdownIsVisible ? 'tablet-filter__visible' : null}`}>
                <SelectEstateTypeCheckbox
                    selectedAppBar={estatePurposeType}
                    selectedEstateTypes={selectedEstateTypes}
                    onCheckboxChange={handleCheckboxChange}
                />
                <div className='tablet-filter__right-side'>
                    <SelectHouseUsageType
                        selectedAppBar={estatePurposeType}
                        onAppBarChange={handleTabClick}
                        appBarTabs={TABS}
                    />

                    {estatePurposeType === HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES[0] && <TabletSelectRoom />}

                    <EnterPrice />
                </div>
            </div>
        </div>
    )
}

export default memo(TabletFilter)