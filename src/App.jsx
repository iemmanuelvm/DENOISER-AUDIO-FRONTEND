// App.jsx
import React, { useState } from 'react';
import { airplain, baby, dog, engine, helicopter, people, siren, train } from './assets';
import { CardAudio } from './components/CardAudio';
import { Timeline } from './components/Timeline';
import { FileUpload } from './components/UploadFile';
import './index.css';
import { AirplainSvg, BabySvg, DogSvg, EngineSvg, HelicopterSvg, PeopleSvg, SirenSvg, TrainSvg } from './svg';

const App = () => {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (file) => {
    setAudioFile(file);
  };

  return (
    <div className='bg-black'>
      <FileUpload onFileChange={handleFileChange} />
      <div className='flex flex-col items-center justify-center'>
        <Timeline audioFile={audioFile} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">Environment Sounds</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <CardAudio audio={airplain} iconSvg={<AirplainSvg height="4em" width="4em" />} className="col-span-1" />
          <CardAudio audio={baby} iconSvg={<BabySvg height="4em" width="4em" />} className="col-span-1" />
          <CardAudio audio={dog} iconSvg={<DogSvg height="4em" width="4em" />} className="col-span-1" />
          <CardAudio audio={engine} iconSvg={<EngineSvg height="4em" width="4em" />} className="col-span-1" />
          <CardAudio audio={helicopter} iconSvg={<HelicopterSvg height="4em" width="4em" />} className="col-span-1" />
          <CardAudio audio={people} iconSvg={<PeopleSvg height="4em" width="4em" />} className="col-span-1" />
          <CardAudio audio={siren} iconSvg={<SirenSvg height="4em" width="4em" />} className="col-span-1" />
          <CardAudio audio={train} iconSvg={<TrainSvg height="4em" width="4em" />} className="col-span-1" />
        </div>
      </div>

    </div>
  );
};

export default App;
