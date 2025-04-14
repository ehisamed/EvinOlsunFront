import React, { useState } from 'react'
import './enterPrice.scss'
import DropDownIc from '../../../../assets/icons/DropDownIc'
import useClickOutside from '../../../../hooks/useClickOutside'
import SearchItemHeader from '../SearchItemHeader/SearchItemHeader'

type Props = {
    title?: string
}

const EnterPrice: React.FC<Props> = ({ title='Qiymet' }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [mouseDown, setMouseDown] = useState<boolean>(false);
    const [focusedInput, setFocusedInput] = useState<number | null>(null);
    const priceEnterRef = useClickOutside(() => {
        setIsVisible(false);
        setFocusedInput(null);
    });

    const handleVisibility = () => {
        setIsVisible(prevState => !prevState)
    }

    const handleMouseDown = (index: number) => {
        if (focusedInput !== index) {
            setFocusedInput(index);
        }
    };

    return (
        <div className='price-enter' ref={priceEnterRef}>
            <SearchItemHeader suffix={<DropDownIc width={14} height={14} />} onClick={handleVisibility} suffixRotate={isVisible}>
                {title}
            </SearchItemHeader>
            <div className={`price-enter-content ${isVisible ? 'content-isvisible' : null}`}>
                <div className={`price ${focusedInput === 0 ? 'price-focused' : ''}`} onMouseDown={() => handleMouseDown(0)}>
                    <input type="number" className='price-field' placeholder='Min'/>
                    <span className='price-symbol'>₼</span>
                </div>
                <div className={`price ${focusedInput === 1 ? 'price-focused' : ''}`} onMouseDown={() => handleMouseDown(1)}>
                    <input type="number" className='price-field' placeholder='Max'/>
                    <span className='price-symbol'>₼</span>
                </div>
            </div>
        </div>
    )
}

export default EnterPrice