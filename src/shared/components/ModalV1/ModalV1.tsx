import React, { memo } from 'react'
import ReactDOM from 'react-dom'
import './modalv1.scss'
import CloseIc from '../../../assets/icons/CloseIc';

type Props = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    onSave?: () => void;
    modalTitle?: string;
    onCloseText?: string;
    onSaveText?: string;
}

const ModalV1: React.FC<Props> = ({ isOpen, onClose, children, onSave, modalTitle, onCloseText = 'Bağla', onSaveText = 'Saxla' }) => {
    if (!isOpen) return null
    return ReactDOM.createPortal(
        <div className='modal'>
            <div className="modal-content" >
                {modalTitle && (
                    <div className="modal-title">
                        <p className="modal-title-text">{modalTitle}</p>
                    </div>
                )}
                <div className="modal-content-inner">
                    {children}
                </div>
                <div className="modal-content-footer">
                    <button className='save-btn' disabled onClick={onClose}>{onSaveText}</button>
                    <button className='close-btn' onClick={onClose}>{onCloseText}</button>
                </div>
                <button className='x-close-btn' onClick={onClose}>
                    <CloseIc />
                </button>
            </div>
            <div className='modal-overlay' onClick={onClose}></div>
        </div>,
        document.body
    )
}

export default memo(ModalV1)