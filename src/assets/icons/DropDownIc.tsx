import React from 'react'

const DropDownIc = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            fill="none"
            viewBox="0 0 14 8"
            {...props}
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6 6-6"
            />
        </svg>

    )
}

export default DropDownIc