import React, { useEffect, useState, memo } from 'react'
import './enterPrice.scss'
import DropDownIc from '../../../../assets/icons/DropDownIc'
import useClickOutside from '../../../../hooks/useClickOutside'
import SearchItemHeader from '../SearchItemHeader/SearchItemHeader'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { setPrice } from '../../state/filterSlice'
import PriceFieldV1 from '../../../../shared/components/ui/PriceFieldV1/PriceFieldV1'
import { HERO_CONSTANTS } from '../../../../constants/HeroConstants'

type Props = {
    title?: string
}

const EnterPrice: React.FC<Props> = ({ title = 'Qiymet' }) => {
    const dispatch = useAppDispatch();
    const priceState = useAppSelector((state) => state.filter.price);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [focusedInput, setFocusedInput] = useState<number | null>(null);

    const [data, setData] = useState<{ min: number; max: number }>({
        "min": priceState.min,
        "max": priceState.max
    });

    const priceEnterRef = useClickOutside(() => {
        setIsVisible(false);
        setFocusedInput(null);
    });


    // Visibility control price-enter-content
    const handleVisibility = () => {
        setIsVisible(prevState => !prevState)
    }


    // Managing div.price state to add class price-focused
    const handleMouseDown = (index: number) => {
        if (focusedInput !== index) {
            setFocusedInput(index);
        }
    };


    // Controlling the entry of values ​​into input fields
    const handlePriceField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const cleanedValue = value.replace(/^0+/, "")
        const numericValue = cleanedValue ? parseInt(cleanedValue) : 0;

        setData((prevData) => ({
            ...prevData,
            [name]: numericValue
        }));
    }


    // Price format function
    const formatPrice = (value: number) => {
        if (value >= 1000000) {
            return (value / 1000000).toFixed(2) + ' mln';
        } else if (value >= 1000) {
            return (value / 1000).toFixed(3) + ' min';
        } else {
            return value.toString();
        }
    };


    useEffect(() => {
        if (data.min !== priceState.min || data.max !== priceState.max) {
            dispatch(setPrice(data));
        }

        // console.log(priceState)
    }, [data, dispatch, priceState.min, priceState.max]);


    return (
        <div className='price-enter' ref={priceEnterRef}>
            <SearchItemHeader suffix={<DropDownIc width={14} height={14} />} onClick={handleVisibility} suffixRotate={isVisible}>
                {data.min > 0 || data.max > 0 ? (
                    `${formatPrice(data.min)} - ${formatPrice(data.max)}`
                ) : title}
            </SearchItemHeader>
            <div className={`price-enter-content ${isVisible ? 'content-isvisible' : null}`}>
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
        </div>
    )
}

export default memo(EnterPrice)