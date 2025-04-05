import React from 'react'

const LocationIc = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="22"
            fill="none"
            viewBox="0 0 18 22"
            {...props}
        >
            <path fill="currentColor" d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            <path fill="currentColor" d="M9 21c4-4 8-7.582 8-12A8 8 0 1 0 1 9c0 4.418 4 8 8 12" />
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            />
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 21c4-4 8-7.582 8-12A8 8 0 1 0 1 9c0 4.418 4 8 8 12"
            />
        </svg>

    )
}

export default LocationIc