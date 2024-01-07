import React from 'react'

export const PauseSvg = ({ height = "1em", width = "1em" } = props) => {
    return (
        <>
            <svg fill="none" viewBox="0 0 24 24" height={height} width={width}>
                <path fill="white" d="M11 7H8v10h3V7zM13 17h3V7h-3v10z" />
            </svg>
        </>
    )
}
