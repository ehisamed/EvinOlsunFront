import React from 'react'
import ModalV2 from '../../../../shared/ModalV2/ModalV2'
import MobilePriceEnter from './components/MobilePriceEnter/MobilePriceEnter'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


type Props = {
    onClose: () => void,
    isOpen: boolean
}

const MobileFilterModal: React.FC<Props> = ({ onClose, isOpen}) => {
    return (
        <ModalV2
            title='Filter'
            isOpen={isOpen}
            topPreffix={<ArrowBackIosIcon fontSize='small'/>}
            topPreffixAction={onClose}
            topSuffix='Сбросить'
            bottomBtn={true}
            offersCount='7 500'
        >
            <MobilePriceEnter />
            <div style={{
                height: '450px',
                background: 'black'
            }}>2</div>
        </ModalV2>
    )
}

export default MobileFilterModal