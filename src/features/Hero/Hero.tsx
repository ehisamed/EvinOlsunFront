import React, { memo, useState } from 'react'
import style from './moduleStyle.module.scss'
import { RoomSelector, EnterPrice, EnterAddress, HouseType } from './components/filter/desctop';
import useWindowWidth from '../../hooks/useWindowWidth';
import TabletFilter from './components/filter/tablet/TabletFilter';
import { HERO_CONSTANTS } from '../../constants/HeroConstants';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectEstatePurposeType, selectEstateUsageType } from './state/filterSelectors';
import MobileFilter from './components/MobileFilter/MobileFilter';
import MobileFilterModal from './components/MobileFilterModal/MobileFilterModal';
import { setEstateUsageType } from './state/filterSlice';

type Props = {
    title?: string;
}

const Hero: React.FC<Props> = ({ title }) => {
    const dispatch = useAppDispatch()
    const selectedEstateUsageType = useAppSelector(selectEstateUsageType);
    let windowWith = useWindowWidth();
    const estatePurposeType = useAppSelector(selectEstatePurposeType);
    const [changeMobileFilterVisibility, setChangeMobileFilterVisibility] = useState(false);

    const handleSwitch = (usageType: string) => {
        dispatch(setEstateUsageType(usageType));
    }

    const components = [
        { component: <HouseType />, condition: windowWith > 1023 },
        { component: <RoomSelector />, condition: windowWith > 1023 && estatePurposeType !== HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES[1] },
        { component: <EnterPrice />, condition: windowWith > 1023 },
        { component: <EnterAddress />, condition: true },
        { component: <MobileFilter openFilter={() => setChangeMobileFilterVisibility(true)} />, condition: windowWith <= 768 },
        { component: <TabletFilter />, condition: windowWith > 768 && windowWith < 1024 },
    ];

    return (
        <div className={style.hero}>
            {title && <h2 className={style.heroTitle}>{title}</h2>}
            <form className={style.search}>
                <div className={style.searchHead}>
                    <div className={style.switch}>
                        <button
                            className={`${style.switchBtn} ${selectedEstateUsageType === HERO_CONSTANTS.filter.SWITCH.BUY ? style.active : ''}`}
                            onClick={() => handleSwitch(HERO_CONSTANTS.filter.SWITCH.BUY)}
                            type="button"
                        >
                            {HERO_CONSTANTS.filter.SWITCH.BUY}
                        </button>
                        <button
                            className={`${style.switchBtn} ${selectedEstateUsageType === HERO_CONSTANTS.filter.SWITCH.RENT ? style.active : ''}`}
                            onClick={() => handleSwitch(HERO_CONSTANTS.filter.SWITCH.RENT)}
                            type="button"
                        >
                            {HERO_CONSTANTS.filter.SWITCH.RENT}
                        </button>
                    </div>
                </div>
                <div className={`
                    ${style.searchContent} 
                    ${style.descGrid} 
                    ${windowWith < 1024 ? style.mobileGrid : ''}
                    ${estatePurposeType === HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES[1] ? style.typePriceAddressSearch : ''}
                    `}>

                    {components.map((item, index) => (
                        item.condition ? <React.Fragment key={index}>{item.component}</React.Fragment> : null
                    ))}

                    <button className={style.searchBtn}>
                        {HERO_CONSTANTS.filter.SEARCH_TXT}
                    </button>
                </div>
            </form>

            <MobileFilterModal isOpen={changeMobileFilterVisibility} onClose={() => setChangeMobileFilterVisibility(false)} />
        </div>
    )
}

export default memo(Hero)