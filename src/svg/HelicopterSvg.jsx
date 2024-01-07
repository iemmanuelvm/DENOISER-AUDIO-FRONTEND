import React from 'react'

export const HelicopterSvg = ({height="1em", width="1em"}= props) => {
    return (
        <div>
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height={height}
                width={width}
            >
                <path d="M3 3h14v2H3V3m20 3v4.5l-8.25 1.7A3.499 3.499 0 0113 16.66V19h3v2H4a3 3 0 01-3-3v-1h2v1a1 1 0 001 1h1v-2.26c-1.75-.61-3-2.28-3-4.24C2 10 4 8 6.5 8H9V6h2v2h10V6h2M11 19v-2H7v2h4m-3.5-9c-1.38 0-2.5.9-2.5 2s1.12 2 2.5 2 2.5-.9 2.5-2-1.12-2-2.5-2z" />
            </svg>
        </div>
    )
}
