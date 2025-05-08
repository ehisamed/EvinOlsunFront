import React from 'react'
import './global-container.scss'

type Props = {
    children: React.ReactNode
}

const GlobalContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className='global-container'>
            {children}
        </div>
    )
}

export default GlobalContainer