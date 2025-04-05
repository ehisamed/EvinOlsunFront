import React, { useState } from 'react'
import './tplnItem.scss'
import useWindowWidth from '../../../../../../hooks/useWindowWidth';

type Props = {
    icon: React.ReactNode;
    alternateIcon?: React.ReactNode;
    text?: string,
    onClick?: () => void;
    minWidth?: number;
    changeIconOnClick?: boolean;
}

const TplnItemButton: React.FC<Props> = ({ icon, text, onClick, minWidth = 585, changeIconOnClick,  }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const windowWidth = useWindowWidth();

    return (
        <div className='header-tpln-item'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="header-tpln-item-button" onClick={onClick} style={{
                color: isHovered ? '#202939' : '#697586',
            }}>
                <div className='header-tpln-itemContent'>
                    <div className='header-tpln-itemIcon'>
                        {icon}
                    </div>
                    {text && windowWidth >= minWidth && (
                        <span className='tpln-item-text'>{text}</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TplnItemButton