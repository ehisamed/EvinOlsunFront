import React, { useState } from 'react'
import './enterAddress.scss'
import SearchIc from '../../../../assets/icons/SearchIc';
import CloseIc from '../../../../assets/icons/CloseIc';
import useClickOutside from '../../../../hooks/useClickOutside';
import { searchSuggestion } from '../../utils/searchSuggestion';

type Props = {
    title?: string;
}

const mockData = {
    cities: {
        "1": { title: "Тамбов" },
        "2": { title: "Москва" },
        "3": { title: "Воронеж" },
        "4": { title: "Волгоград" },
        "5": { title: "Пенза" }
    },
    addresses: {
        "101": { title: "Тамбов, Мичуринская улица, 120" },
        "102": { title: "Москва, Арбат, 12" },
        "103": { title: "Воронеж, Ленинский проспект, 45" },
        "104": { title: "Волгоград, Советская улица, 99" },
        "105": { title: "Пенза, Центральная улица, 23" }
    },
    metro: {
        "201": { title: "Москва, Крылатское" },
        "202": { title: "Москва, Парк Победы" },
        "203": { title: "Москва, Краснопресненская" },
        "204": { title: "Москва, Сокольники" },
        "205": { title: "Москва, Комсомольская" }
    }
}


const EnterAddress: React.FC<Props> = ({ title }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const cityEnterRef = useClickOutside(() => setIsVisible(false));

    const suggestions = searchSuggestion(mockData, inputValue);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        if (value.trim() === '') {
            setIsVisible(false);
        } else {
            const hasMatches = Object.values(searchSuggestion(mockData, value))
                .some(arr => arr.length > 0);
            setIsVisible(hasMatches);
        }
    };

    const handleClearInput = () => {
        setInputValue('');
        setIsVisible(false);
    };

    return (
        <div className='enter-city' ref={cityEnterRef}>
            <div className="enter-city-header">
                <div className={`enter-city-icon`}>
                    <SearchIc width={16} height={16} />
                </div>
                <div className="enter-city-title">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className='enter-city-field'
                        placeholder='Address'
                    />
                </div>
                {inputValue.length > 0 && (
                    <button className={`clear-btn`} onClick={handleClearInput}>
                        <CloseIc width={14} height={14} />
                    </button>
                )}
            </div>
            <div className={`enter-city-content ${isVisible ? 'enter-city-isvisible' : null}`}>
                {isVisible && (
                    <>
                        {suggestions.cities.length > 0 && (
                            <div className="enter-city-content--suggestion-category">
                                <p className='suggestion-category-title'>Şəhər:</p>
                                {suggestions.cities.map(item => (
                                    <div className='suggestion-category-item' key={item.id}>{item.title}</div>
                                ))}
                            </div>
                        )}
                        {suggestions.addresses.length > 0 && (
                            <div className="enter-city-content--suggestion-category">
                                <p className='suggestion-category-title'>Ünvan:</p>
                                {suggestions.addresses.map(item => (
                                    <div className='suggestion-category-item' key={item.id}>{item.title}</div>
                                ))}
                            </div>
                        )}
                        {suggestions.metro.length > 0 && (
                            <div className="enter-city-content--suggestion-category">
                                <p className='suggestion-category-title'>Metro:</p>
                                {suggestions.metro.map(item => (
                                    <div className='suggestion-category-item' key={item.id}>{item.title}</div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default EnterAddress