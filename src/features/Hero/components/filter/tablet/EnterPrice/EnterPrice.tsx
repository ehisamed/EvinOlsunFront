import React, { memo } from 'react'
import './enterPrice.scss'
import PriceFieldV1 from '../../../../../../shared/components/ui/PriceFieldV1/PriceFieldV1'
import { usePriceFilter } from '../../../../hooks/useFilterPrice';
import { useFocusIndex } from '../../../../../../shared/hooks/useFocusedIndex';
import useClickOutside from '../../../../../../hooks/useClickOutside';

const EnterPrice: React.FC = () => {
    const { data, handlePriceField } = usePriceFilter();
    const { focusedInput, handleFocus, clearFocus } = useFocusIndex();

    const minInputRef = useClickOutside(() => {
        if (focusedInput === 0) clearFocus();
    });

    const maxInputRef = useClickOutside(() => {
        if (focusedInput === 1) clearFocus();
    });

    return (
        <div className='tablet-enter-price'>
            <p className='tablet-enter-price__title'>Qiymet</p>
            <div className="tablet-enter-price__fields">
                <PriceFieldV1
                    inputRef={minInputRef}
                    value={data.min}
                    placeholder='Min'
                    name='min'
                    onChange={handlePriceField}
                    focused={focusedInput === 0}
                    onFocus={() => handleFocus(0)}
                />
                <PriceFieldV1
                    inputRef={maxInputRef}
                    value={data.max}
                    placeholder='Max'
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