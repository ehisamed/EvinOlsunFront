import React, { useState, memo } from 'react'
import './enterPrice.scss'
import DropDownIc from '../../../../assets/icons/DropDownIc'
import useClickOutside from '../../../../hooks/useClickOutside'
import SearchItemHeader from '../SearchItemHeader/SearchItemHeader'
import PriceFieldV1 from '../../../../shared/components/ui/PriceFieldV1/PriceFieldV1'
import { HERO_CONSTANTS } from '../../../../constants/HeroConstants'
import { usePriceFilter } from '../../hooks/useFilterPrice'
import { useFocusIndex } from '../../../../shared/hooks/useFocusedIndex'

type Props = {
    title?: string
}

const EnterPrice: React.FC<Props> = ({ title = 'Qiymet' }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const { data, handlePriceField, formatPrice } = usePriceFilter();
    const { focusedInput, handleFocus, clearFocus } = useFocusIndex();

    const priceEnterRef = useClickOutside(() => {
        setIsVisible(false);
        clearFocus();
    });

    const handleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    const minInputRef = useClickOutside(() => {
        if (focusedInput === 0) clearFocus();
    });

    const maxInputRef = useClickOutside(() => {
        if (focusedInput === 1) clearFocus();
    });

    return (
        <div className='price-enter' ref={priceEnterRef}>
            <SearchItemHeader suffix={<DropDownIc width={14} height={14} />} onClick={handleVisibility} suffixRotate={isVisible}>
                {data.min > 0 || data.max > 0 ? (
                    `${formatPrice(data.min)} - ${formatPrice(data.max)}`
                ) : title}
            </SearchItemHeader>
            <div className={`price-enter-content ${isVisible ? 'content-isvisible' : null}`}>
                <PriceFieldV1
                    inputRef={minInputRef}
                    value={data.min}
                    placeholder={HERO_CONSTANTS.filter.PRICE.min}
                    name='min'
                    onChange={handlePriceField}
                    focused={focusedInput === 0}
                    onFocus={() => handleFocus(0)}
                />
                <PriceFieldV1
                    inputRef={maxInputRef}
                    value={data.max}
                    placeholder={HERO_CONSTANTS.filter.PRICE.max}
                    name='max'
                    onChange={handlePriceField}
                    focused={focusedInput === 1}
                    onFocus={() => handleFocus(1)}
                />
            </div>
        </div>
    )
}

export default memo(EnterPrice)