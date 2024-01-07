import React, { useRef, useState } from 'react';

export const CardAudio = ({audio, iconSvg}=props) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasEnded, setHasEnded] = useState(false);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            setHasEnded(false);
        }
        setIsPlaying(!isPlaying);
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
        setHasEnded(true);
    };

    return (
        <>
            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md flex items-center justify-between p-6">
                <div className="flex items-center">
                    <audio ref={audioRef} src={audio} onEnded={handleAudioEnded} />
                    <button
                        onClick={togglePlay}
                        className={`text-white px-2 py-2 rounded-md  flex items-center ${(isPlaying && !hasEnded) ? 'bg-slate-300 hover:bg-slate-800' : 'bg-slate-950 hover:bg-slate-500'
                            } shadow-md focus:outline-none transition-all duration-300 ease-in-out`}>
                        {(isPlaying && !hasEnded) ? (iconSvg) : (iconSvg)}
                    </button>
                </div>
            </div>
        </>
    );
};
