import React, { memo, useEffect, useState } from 'react'
import style from './moduleStyle.module.scss'
import SelectHouseType from './components/SelectHouseType/SelectHouseType';
import SelectRoomCount from './components/SelectRoom/SelectRoomCount/SelectRoomCount';
import EnterPrice from './components/EnterPrice/EnterPrice';
import EnterAddress from './components/EnterAddress/EnterAddress';
import useWindowWidth from '../../hooks/useWindowWidth';
import TabletFilter from './components/TabletFilter/TabletFilter';
import { HERO_CONSTANTS } from '../../constants/HeroConstants';
import { setEstateUsageType } from './state/filterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectEstatePurposeType, selectEstateUsageType } from './state/filterSelectors';
import MobileFilter from './components/MobileFilter/MobileFilter';
import MobileFilterModal from './components/MobileFilterModal/MobileFilterModal';

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

    const filter = useAppSelector(state => state.filter);

    useEffect(() => {
        const params = new URLSearchParams();

        if (filter.price.min) params.set('minPrice', filter.price.min.toString());
        if (filter.price.max) params.set('maxPrice', filter.price.max.toString());
        if (filter.estateUsageType) params.set('usage', filter.estateUsageType);
        if (filter.estatePurposeType) params.set('purpose', filter.estatePurposeType);
        // Добавь остальные параметры по необходимости

        const queryString = params.toString();
        const newUrl = `${window.location.pathname}?${queryString}`;

        // Используем replaceState, чтобы не создавать новую запись в истории
        window.history.replaceState(null, '', newUrl);

    }, [filter]); // каждый раз при изменении фильтра обновляем URL

    const components = [
        { component: <SelectHouseType />, condition: windowWith > 1023 },
        { component: <SelectRoomCount />, condition: windowWith > 1023 && estatePurposeType !== HERO_CONSTANTS.filter.HOUSE_TYPE.TYPES[1] },
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