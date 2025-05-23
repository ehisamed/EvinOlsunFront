import React from 'react'
import './main.scss'
type Props = {
    children: React.ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
    return (
        <div className='main'>
            {children}
        </div>
    )
}

export default Main