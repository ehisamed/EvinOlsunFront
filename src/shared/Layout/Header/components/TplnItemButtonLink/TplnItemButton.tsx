import React, { useState, memo, useMemo } from 'react'
import './tplnItem.scss'
import useWindowWidth from '../../../../../hooks/useWindowWidth';

type Props = {
    icon: React.ReactNode;
    alternateIcon?: React.ReactNode;
    text?: string,
    onClick?: () => void;
    minWidth?: number;
    hoverdBlock?: boolean;
}

const TplnItemButton: React.FC<Props> = ({ icon, text, onClick, minWidth = 585, hoverdBlock = false }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const windowWidth = useWindowWidth();

    const shouldShowText = useMemo(() => {
        return text && windowWidth >= minWidth;
    }, [text, windowWidth, minWidth]);

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
                    {shouldShowText && (
                        <span className='tpln-item-text'>{text}</span>
                    )}
                </div>
            </div>
            {hoverdBlock && isHovered && (
                <div className='hovered-block-modal'>
                    <div className="hovered-block-modal-inner">
                        <p className='block-modal-headline'>Əmlakla bağlı hər hansı bir sual üzrə məsləhət alın.</p>
                        <p className='block-modal-bottom-text'>Zəng edin <a href="tel:900" className='phone-number'>900</a>,  zəng pulsuzdur.</p>
                    </div>
                    {/* <div className="close-modal">
                        <CloseIc width={18} height={18}/>
                    </div> */}
                </div>
            )}
        </div>
    )
}

export default memo(TplnItemButton)