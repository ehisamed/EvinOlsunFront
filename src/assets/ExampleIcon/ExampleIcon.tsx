import React from 'react';
import './exampleIcon.scss';

type Props = {
  isHovered: boolean; 
  defaultColor?: string;
  hoverColor?: string;
  width: string;
  height: string; 
  onMouseEnter?: () => void; 
  onMouseLeave?: () => void; 
}

const ExampleIcon: React.FC<Props> = ({ 
  isHovered, 
  defaultColor = 'gray',
  hoverColor = 'red',
  width, 
  height, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  return (
    <svg
      className="hoverable-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <g
        className="icon-stroke"
        stroke={isHovered ? hoverColor : defaultColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        <path d="M12 22c4-4 8-7.582 8-12a8 8 0 1 0-16 0c0 4.418 4 8 8 12" />
      </g>
    </svg>
  );
}

export default ExampleIcon;