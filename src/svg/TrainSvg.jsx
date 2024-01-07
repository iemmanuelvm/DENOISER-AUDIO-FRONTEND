import React from 'react'

export const TrainSvg = ({ height = "1em", width = "1em" } = props) => {
    return (
        <>
            <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height={height}
                width={width}
            >
                <path
                    fillRule="evenodd"
                    d="M5.621 1.485c1.815-.454 2.943-.454 4.758 0 .784.196 1.743.673 2.527 1.119.688.39 1.094 1.148 1.094 1.979V13.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5V4.583c0-.831.406-1.588 1.094-1.98.784-.445 1.744-.922 2.527-1.118zm5-.97C8.647.02 7.353.02 5.38.515c-.924.23-1.982.766-2.78 1.22C1.566 2.322 1 3.432 1 4.582V13.5A2.5 2.5 0 003.5 16h9a2.5 2.5 0 002.5-2.5V4.583c0-1.15-.565-2.26-1.6-2.849-.797-.453-1.855-.988-2.779-1.22zM5 13a1 1 0 11-2 0 1 1 0 012 0zm0 0a1 1 0 112 0 1 1 0 01-2 0zm7 1a1 1 0 10-1-1 1 1 0 10-2 0 1 1 0 002 0 1 1 0 001 1zM4.5 5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h3V5h-3zm4 0v3h3a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-3zM3 5.5A1.5 1.5 0 014.5 4h7A1.5 1.5 0 0113 5.5v2A1.5 1.5 0 0111.5 9h-7A1.5 1.5 0 013 7.5v-2zM6.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3z"
                />
            </svg>
        </>
    )
}