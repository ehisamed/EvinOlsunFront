import React from 'react'
import SearchItemHeader from '../SearchItemHeader/SearchItemHeader'
import './mobileFilterHeader.scss'
import FilterIc from '../../../../assets/icons/FilterIc'

const MobileFilterHeader = () => {
    return (
        <div className='mobile-filter'>
            <SearchItemHeader prefix={<FilterIc width={19} height={19}/>}>
                
            </SearchItemHeader>
        </div>
    )
}

export default MobileFilterHeader