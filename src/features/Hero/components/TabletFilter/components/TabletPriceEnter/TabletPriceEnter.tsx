import React, { useState, memo } from 'react'
import './tabletPriceEnter.scss'
import PriceFieldV1 from '../../../../../../shared/components/ui/PriceFieldV1/PriceFieldV1'
import { useAppDispatch, useAppSelector } from '../../../../../../redux/hooks';
import { selectPrice } from '../../../../state/filterSelectors';
import { setPrice } from '../../../../state/filterSlice';

const TabletPriceEnter = () => {
    const dispatch = useAppDispatch()
    const priceState = useAppSelector(selectPrice);
    const [focusedInput, setFocusedInput] = useState<number | null>(null);

    const handlePriceField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const cleanedValue = value.replace(/^0+/, "")
        const numericValue = cleanedValue ? parseInt(cleanedValue) : 0;

        dispatch(setPrice({
            ...priceState,
            [name]: numericValue,
        }));
    }

    const handleFocusPriceEnter = (index: number) => {
        if (focusedInput !== index) {
            setFocusedInput(index);
        }
    };

    return (
        <div className='tablet-price-enter'>
            <p className='section-title'>Qiymet</p>
            <div className="tablet-price-enter">
                <PriceFieldV1
                    value={priceState.min}
                    placeholder='Min'
                    name='min'
                    onChange={handlePriceField}
                    focused={focusedInput === 0}
                    onFocus={() => handleFocusPriceEnter(0)}
                />
                <PriceFieldV1
                    value={priceState.max}
                    placeholder='Max'
                    name='max'
                    onChange={handlePriceField}
                    focused={focusedInput === 1}
                    onFocus={() => handleFocusPriceEnter(1)}
                />
            </div>
        </div>
    )
}

export default memo(TabletPriceEnter)