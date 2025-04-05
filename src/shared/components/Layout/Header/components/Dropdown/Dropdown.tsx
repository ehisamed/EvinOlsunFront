import React from 'react'
import DropDownIc from '../../../../../../assets/icons/DropDownIc';
import './dropdown.scss'
import DropdownItem from './DropdownItem';

type Props = {
    title?: string;
    listItems?: React.ReactNode[];
    onClick?: (key: string) => void;
    isOpen?: boolean;
}

const Dropdown: React.FC<Props> = ({ title, listItems, onClick, isOpen }) => {
    return (
        <div className='dropdown'>
            <div className='dropdown-content'>
                <div className="dropdown-title-wrapper">
                    <div className="dropdown-title"  onClick={() => onClick && onClick(title || '')}>
                        <p className="dropdown-title-text">{title}</p>
                        <div className="dropdown-title-icon" style={{
                            transform: isOpen ? 'rotate(180deg)' : ''
                        }}>
                            <DropDownIc />
                        </div>
                    </div>
                </div>
                <div className={`dropdown-list ${isOpen ? 'dropdown-list-open' : ''}`}>
                    {listItems}
                </div>
            </div>
        </div>
    )
}

export default Dropdown