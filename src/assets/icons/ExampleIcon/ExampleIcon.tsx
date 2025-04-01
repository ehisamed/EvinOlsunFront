// // IconComponent.tsx
// import React, { useState } from 'react';
// // import { ReactComponent as Icon } from './Icon.svg'; // Импортируйте SVG как компонент

// const IconComponent: React.FC = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         display: 'inline-block',
//         transition: 'transform 0.2s',
//         transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//       }}
//     >
//       <Icon
//         style={{
//           fill: isHovered ? 'blue' : 'black', // Измените цвет при наведении
//           transition: 'fill 0.2s',
//         }}
//       />
//     </div>
//   );
// };

// export default IconComponent;


import React from 'react'

const ExampleIcon = () => {
  return (
    <div>ExampleIcon</div>
  )
}

export default ExampleIcon