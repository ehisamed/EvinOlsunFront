import React, { useState, memo, useCallback } from 'react'
import DropDownIc from '../../../../assets/icons/DropDownIc';
import './tabletFilter.scss'
import useClickOutside from '../../../../hooks/useClickOutside';
import SearchItemHeader from '../SearchItemHeader/SearchItemHeader';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { HERO_CONSTANTS } from '../../../../constants/HeroConstants';
import { setEstatePurposeType, toggleEstateType } from '../../state/filterSlice';
import { selectEstatePurposeType, selectSelectedEstateTypes } from '../../state/filterSelectors';
import TabletPriceEnter from './components/TabletPriceEnter/TabletPriceEnter';
import TabletSelectRoom from './components/TabletSelectRoom/TabletSelectRoom';
import TabletAppBar from './components/TabletAppBar/TabletAppBar';
import TabletMulticheckbox from './components/TabletMulticheckbox/TabletMulticheckbox';

type Props = {
    title?: string;
}

const TabletFilter: React.FC<Props> = ({ title = 'Filter' }) => {
    const dispatch = useAppDispatch()
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const filterRef = useClickOutside(() => setIsVisible(false));
    const selectedEstateTypes = useAppSelector(selectSelectedEstateTypes);
    const estatePurposeType = useAppSelector(selectEstatePurposeType);



    const APPBARTABS = HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES;

    const toggleFilterDropdown = () => {
        setIsVisible(prevState => !prevState)
    }

    const handleAppBar = (tabItem: string) => {
        if (estatePurposeType === HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES[0]) {
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
        dispatch(setEstatePurposeType(tabItem))
    }

    const handleCheckboxChange = useCallback((type: string) => {
        dispatch(toggleEstateType(type));
    }, [dispatch]);

    return (
        <div className='tablet-filter' ref={filterRef}>
            <SearchItemHeader suffix={<DropDownIc />} suffixRotate={isVisible} onClick={toggleFilterDropdown}>
                {HERO_CONSTANTS.filter.TABLET_TITLE}
            </SearchItemHeader>
            <div className={`tablet-filter-contnet ${isVisible ? 'filter-visible' : null}`}>
                <TabletMulticheckbox
                    selectedAppBar={estatePurposeType}
                    selectedEstateTypes={selectedEstateTypes}
                    onCheckboxChange={handleCheckboxChange}
                />
                <div className='right-side'>
                    <TabletAppBar
                        selectedAppBar={estatePurposeType}
                        onAppBarChange={handleAppBar}
                        appBarTabs={APPBARTABS}
                    />

                    {estatePurposeType === HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES[0] && <TabletSelectRoom />}

                    <TabletPriceEnter />
                </div>
            </div>
        </div>
    )
}

export default memo(TabletFilter)