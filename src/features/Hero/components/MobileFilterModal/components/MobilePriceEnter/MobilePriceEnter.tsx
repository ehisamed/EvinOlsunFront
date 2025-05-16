import React, { useEffect, useState } from 'react'
import PriceFieldV1 from '../../../../../../shared/components/ui/PriceFieldV1/PriceFieldV1'
import { useAppDispatch, useAppSelector } from '../../../../../../redux/hooks';
import { HERO_CONSTANTS } from '../../../../../../constants/HeroConstants';
import { setPrice } from '../../../../state/filterSlice';
import './mobilePriceEnter.scss'

const MobilePriceEnter = () => {
    const dispatch = useAppDispatch()
    const priceState = useAppSelector((state) => state.filter.price);
    const [focusedInput, setFocusedInput] = useState<number | null>(null);

    const [data, setData] = useState<{ min: number; max: number }>({
        "min": priceState.min,
        "max": priceState.max
    });

    const handlePriceField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const cleanedValue = value.replace(/^0+/, "")
        const numericValue = cleanedValue ? parseInt(cleanedValue) : 0;

        setData((prevData) => ({
            ...prevData,
            [name]: numericValue
        }));
    }

    useEffect(() => {
        if (data.min !== priceState.min || data.max !== priceState.max) {
            dispatch(setPrice(data));
        }
    }, [data, dispatch, priceState.min, priceState.max]);


    const handleMouseDown = (index: number) => {
        if (focusedInput !== index) {
            setFocusedInput(index);
        }
    };

    return (
        <div className='mobile-filter-price'>
            <div className="mobile-silfter--section">{HERO_CONSTANTS.filter.PRICE.title}</div>
            <PriceFieldV1
                value={data.min}
                placeholder={HERO_CONSTANTS.filter.PRICE.min}
                name='min'
                onChange={handlePriceField}
                focused={focusedInput === 0}
                onFocus={() => handleMouseDown(0)}
            />
            <PriceFieldV1
                value={data.max}
                placeholder={HERO_CONSTANTS.filter.PRICE.max}
                name='max'
                onChange={handlePriceField}
                focused={focusedInput === 1}
                onFocus={() => handleMouseDown(1)}
            />
        </div>
    )
}

export default MobilePriceEnter