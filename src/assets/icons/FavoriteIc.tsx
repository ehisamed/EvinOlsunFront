import React from 'react'

const FavoriteIc = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.993 5.136c-2-2.338-5.333-2.966-7.838-.826s-2.858 5.719-.89 8.25c1.635 2.105 6.585 6.544 8.207 7.98.182.162.272.242.378.274a.5.5 0 0 0 .286 0c.106-.032.197-.112.378-.273 1.623-1.437 6.573-5.876 8.208-7.98 1.967-2.532 1.658-6.133-.89-8.251s-5.84-1.512-7.839.826"
                clipRule="evenodd"
            />
        </svg>

    )
}

export default FavoriteIc


// import React from 'react';

// type NotoficationIcProps = React.SVGProps<SVGSVGElement> & {
//     isHovered?: boolean; // Если вам нужно это свойство
// };

// const NotoficationIc: React.FC<NotoficationIcProps> = ({ isHovered, ...rest }) => {
//     // Вы можете использовать isHovered для изменения стилей
//     const fillColor = isHovered ? 'red' : 'black'; // Пример использования isHovered

//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill={fillColor} // Используем fillColor в зависимости от isHovered
//             viewBox="0 0 24 24"
//             {...rest} // Передаем только допустимые атрибуты
//         >
//             {/* Ваш код SVG */}
//             <path d="M12 2C10.34 2 9 3.34 9 5v1H7v2h2v1c0 3.31 2.69 6 6 6h1v2h-1c-4.41 0-8-3.59-8-8V5c0-2.21 1.79-4 4-4s4 1.79 4 4v1h2V5c0-2.21-1.79-4-4-4z" />
//         </svg>
//     );
// };

// export default NotoficationIc;