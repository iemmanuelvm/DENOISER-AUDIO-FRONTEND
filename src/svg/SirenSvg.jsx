export const SirenSvg = ({ height = "1em", width = "1em" } = props) => {
    return (
        <>
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height={height}
                width={width}
            >
                <path d="M7 12a5 5 0 015-5v0a5 5 0 015 5v6H7v-6zM5 20a2 2 0 012-2h10a2 2 0 012 2v2H5v-2zM21 12h1M18.5 4.5L18 5M2 12h1M12 2v1M4.929 4.929l.707.707M12 12v6" />
            </svg>
        </>
    )
}
