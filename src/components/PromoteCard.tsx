'use client';

import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { useWindowListener } from '@/hooks/useWindowListener';

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  useWindowListener('contextmenu', (e) => {
    e.preventDefault();
  });

  return (
    <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg border border-gray-400 bg-[#f5ebd7] text-black flex flex-row">
      <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={playing} />
      <div className="m-5 flex flex-col justify-between">
        <div className="text-xl text-black">Book your venue today.</div>
        <button
          className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm w-fit"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}
