import React from 'react'
import './searchItemHeader.scss'

type Props = {
    children?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    suffixRotate?: boolean;
    onClick?: () => void
}

const SearchItemHeader: React.FC<Props> = ({ children, prefix, suffix, suffixRotate, onClick }) => {


    return (
        <div className='search-item-header' onClick={onClick}>
            {prefix && (
                <div className="search-item-header--prefix">
                    {prefix}
                </div>
            )}
            {children && (
                <div className="search-item-header--title">
                    {children}
                </div>
            )}
            {suffix && (
                <div className={`search-item-header--suffix ${suffixRotate ? 'suffix-rotate' : null}`}>
                    {suffix}
                </div>
            )}
        </div>
    )
}

export default SearchItemHeader