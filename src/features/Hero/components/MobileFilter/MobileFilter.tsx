import React from 'react'
import SearchItemHeader from '../SearchItemHeader/SearchItemHeader'
import './mobileFilter.scss'
import FilterIc from '../../../../assets/icons/FilterIc'
import ModalV2 from '../../../../shared/ModalV2/ModalV2'
import DropDownIc from '../../../../assets/icons/DropDownIc'

type Props = {
    openFilter: () => void,
}

const MobileFilter: React.FC<Props> = ({ openFilter }) => {


    return (
        <div className='mobile-filter' onClick={openFilter}>
            <SearchItemHeader prefix={<FilterIc width={19} height={19} />}></SearchItemHeader>
        </div>
    )
}

export default MobileFilter