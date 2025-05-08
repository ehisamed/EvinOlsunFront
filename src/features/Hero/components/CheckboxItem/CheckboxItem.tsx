import React from 'react'

type Props = {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const CheckboxItem: React.FC<Props> = ({ label, checked, onChange }) => {
    return (
        <div className='checkbox-item'>
            <label className="custom-checkbox">
                <input type="checkbox" className="checkbox" checked={checked} onChange={onChange}/>
                <span className="checkmark"></span>
                <span className='checkbox-item-title'>{label}</span>
            </label>
        </div>
    )
}

export default CheckboxItem