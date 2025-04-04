import React, { useState } from 'react';
import './tplnItem.scss';
import useWindowWidth from '../../../../../../hooks/useWindowWidth';

type Props = {
    text: string;
    icon: React.ReactNode;
    link: string;
    commonStyles?: React.CSSProperties;
    isNotification?: boolean;
    notificationCount?: number;
    minWidth?: number;
}

const TplnItemLink: React.FC<Props> = ({
    text,
    icon,
    link,
    commonStyles,
    isNotification = false,
    notificationCount = 0,
    minWidth = 1200,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const windowWidth = useWindowWidth();

    return (
        <div
            className='header-tpln-item'
            style={commonStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a href={link} className="header-tpln-item-link" style={{
                color: isHovered ? '#202939' : '#697586',
            }}>
                <div className='header-tpln-itemContent'>
                    <div className='header-tpln-itemIcon'>
                        {React.cloneElement(icon as React.ReactElement<any>, { isHovered })}
                    </div>
                    {text &&  windowWidth >= minWidth &&(
                        <span className='tpln-item-text'>{text}</span>
                    )}
                    {isNotification && notificationCount > 0 && (
                        <div className="notificatoin-circle">
                            {notificationCount}
                        </div>
                    )}
                </div>
            </a>
        </div>
    );
}

export default TplnItemLink;