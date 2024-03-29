import React from 'react'

export const EngineSvg = ({ height = "1em", width = "1em" } = props) => {
    return (
        <>
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height={height}
                width={width}
            >
                <path d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4H7z" />
            </svg>
        </>
    )
}
