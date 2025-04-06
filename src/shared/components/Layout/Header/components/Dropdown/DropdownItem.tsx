import React, { memo } from 'react'

type Props = {
    title?: string;
    navigateTo?: string;

}

const DropdownItem: React.FC<Props> = ({ title, navigateTo }) => {
    return (
        <a href='/' className='dropdown-item'>{title}</a>
    )
}

export default memo(DropdownItem)