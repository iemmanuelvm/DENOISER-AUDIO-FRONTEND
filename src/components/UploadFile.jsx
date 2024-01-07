import React, { useRef, useState } from 'react';

export const FileUpload = ({ onFileChange }) => {
    const inputFileRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        if (onFileChange) {
            onFileChange(file);
        }
    };

    const handleClick = () => {
        inputFileRef.current.click();
    };

    return (
        <div className='flex flex-col items-center justify-center mt-10 mb-3'>
            <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                ref={inputFileRef}
                style={{ display: 'none' }}
            />
            <button className="bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 border border-slate-200 rounded" onClick={handleClick}>Select File</button>
            {selectedFile && <p className='items-center justify-center mt-6 mb-6 text-white'>Selected File: {selectedFile.name}</p>}
        </div>
    );
};

