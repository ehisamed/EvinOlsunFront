import React, { useState } from 'react'
import style from './moduleStyle.module.scss'
import SelectHouseType from './components/SelectHouseType/SelectHouseType';
import SelectRoomCount from './components/SelectRoomCount/SelectRoomCount';
import EnterPrice from './components/EnterPrice/EnterPrice';
import EnterCity from './components/EnterCity/EnterCity';
import useWindowWidth from '../../hooks/useWindowWidth';
import TabletFilter from './components/TabletFilter/TabletFilter';

type Props = {
    title?: string;
}

const Hero: React.FC<Props> = ({ title }) => {
    const [selectedSwitch, setSelectedSwitch] = useState<number | null>(0);
    let windowWith = useWindowWidth();

    const handleSwitch = (index: number) => {
        setSelectedSwitch(index);
    }

    return (
        <div className={style.hero}>
            {title && <h2 className={style.heroTitle}>{title}</h2>}
            <form className={style.search}>
                <div className={style.searchHead}>
                    <div className={style.switch}>
                        <button
                            className={`${style.switchBtn} ${selectedSwitch === 0 ? style.active : ''}`}
                            onClick={() => handleSwitch(0)}
                            type="button"
                        >
                            Almaq
                        </button>
                        <button
                            className={`${style.switchBtn} ${selectedSwitch === 1 ? style.active : ''}`}
                            onClick={() => handleSwitch(1)}
                            type="button"
                        >
                            Kirayə götürmək
                        </button>
                    </div>
                </div>
                <div className={`${style.searchContent} ${style.descGrid} ${windowWith < 1024 ? style.mobileGrid : ''}`}>
                    {windowWith > 1024 && (
                        <SelectHouseType />
                    )}

                    {windowWith > 1024 && (
                        <SelectRoomCount />
                    )}

                    {windowWith > 1024 && (
                        <EnterPrice />
                    )}

                    <EnterCity />

                    {windowWith < 1024 && (
                        <TabletFilter />
                    )}

                    <button className={style.SearchBtn}>
                        Axtar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Hero