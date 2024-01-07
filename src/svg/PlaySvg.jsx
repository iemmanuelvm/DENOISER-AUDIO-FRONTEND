export const PlaySvg = ({ height = "1em", width = "1em" } = props) => {
    return (
        <>
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height={height}
                width={width}
            >
                <path fill="white" d="M7 6v12l10-6z" />
            </svg>
        </>
    )
}
