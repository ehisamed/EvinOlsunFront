import React from 'react'
import './style.scss'

type Props = {
    value?: number;
    placeholder?: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    focused?: boolean;
    onFocus: () => void;
    inputRef?: React.Ref<HTMLDivElement>;
}

const PriceFieldV1: React.FC<Props> = ({ value = 0, placeholder, name, onChange, focused, onFocus, inputRef }) => {
    return (
        <div
            ref={inputRef}
            className={`price ${focused ? 'price-focused' : ''}`}
            onMouseDown={onFocus}
        >
            <input
                type="text"
                className={`price-field price-field--focused`}
                value={value > 0 ? value.toString() : ''}
                placeholder={placeholder}
                name={name}
                autoComplete='off'
                onChange={onChange}
            />
            <span className='price-symbol'>₼</span>
        </div>
    )
}

export default PriceFieldV1