import React, { useState } from 'react'
import './enterCity.scss'
import SearchIc from '../../../../assets/icons/SearchIc';
import CloseIc from '../../../../assets/icons/CloseIc';
import useClickOutside from '../../../../hooks/useClickOutside';

type Props = {
    title?: string;
}

const EnterCity: React.FC<Props> = ({ title }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const cityEnterRef = useClickOutside(() => setIsVisible(false));

    const handleVisibility = () => {
        setIsVisible(prevState => !prevState)
    }

    return (
        <div className='enter-city' ref={cityEnterRef}>
            <div className="enter-city-header" onClick={handleVisibility}>
                <div className={`enter-city-icon`}>
                    <SearchIc width={16} height={16} />
                </div>
                <div className="enter-city-title">
                    <input type="text" className='enter-city-field' placeholder='Address'/>
                </div>
                <button className="clear-btn">
                    <CloseIc width={14} height={14}/>
                </button>
            </div>
            <div className={`enter-city-content ${isVisible ? 'enter-city-isvisible' : null}`}>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
            </div>
        </div>
    )
}

export default EnterCity