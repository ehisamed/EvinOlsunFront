import React, { memo } from 'react'
import style from './moduleStyle.module.scss'
import SelectHouseType from './components/SelectHouseType/SelectHouseType';
import SelectRoomCount from './components/SelectRoom/SelectRoomCount/SelectRoomCount';
import EnterPrice from './components/EnterPrice/EnterPrice';
import EnterAddress from './components/EnterAddress/EnterAddress';
import useWindowWidth from '../../hooks/useWindowWidth';
import TabletFilter from './components/TabletFilter/TabletFilter';
import MobileFilterHeader from './components/MobileFilterHeader/MobileFilterHeader';
import { HERO_CONSTANTS } from '../../constants/HeroConstants';
import { setEstateUsageType } from './state/filterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectEstatePurposeType } from './state/filterSelectors';

type Props = {
    title?: string;
}

const Hero: React.FC<Props> = ({ title }) => {
    const dispatch = useAppDispatch()
    const selectedSwitch = useAppSelector(state => state.filter.estateUsageType);
    let windowWith = useWindowWidth();
    const estatePurposeType = useAppSelector(selectEstatePurposeType);



    const handleSwitch = (usageType: string) => {
        dispatch(setEstateUsageType(usageType));
    }

    const components = [
        { component: <SelectHouseType />, condition: windowWith > 1024 },
        { component: <SelectRoomCount />, condition: windowWith > 1024 && estatePurposeType !== HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES[1]},
        { component: <EnterPrice />, condition: windowWith > 1024 },
        { component: <EnterAddress />, condition: true },
        { component: <MobileFilterHeader />, condition: windowWith <= 768 },
        { component: <TabletFilter />, condition: windowWith > 768 && windowWith < 1024 },
    ];

    return (
        <div className={style.hero}>
            {title && <h2 className={style.heroTitle}>{title}</h2>}
            <form className={style.search}>
                <div className={style.searchHead}>
                    <div className={style.switch}>
                        <button
                            className={`${style.switchBtn} ${selectedSwitch === HERO_CONSTANTS.filter.SWITCH.BUY ? style.active : ''}`}
                            onClick={() => handleSwitch(HERO_CONSTANTS.filter.SWITCH.BUY)}
                            type="button"
                        >
                            {HERO_CONSTANTS.filter.SWITCH.BUY}
                        </button>
                        <button
                            className={`${style.switchBtn} ${selectedSwitch === HERO_CONSTANTS.filter.SWITCH.RENT ? style.active : ''}`}
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
        </div>
    )
}

export default memo(Hero)