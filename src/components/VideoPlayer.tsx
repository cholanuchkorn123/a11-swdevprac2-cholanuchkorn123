'use client';

import { useEffect, useRef } from 'react';

export default function VideoPlayer({ vdoSrc, isPlaying }: { vdoSrc: string; isPlaying: boolean }) {
  const vdoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      // play() returns a Promise that rejects if the video is removed before it starts
      vdoRef.current?.play()?.catch(() => {});
    } else {
      vdoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <video className="w-[40%]" src={vdoSrc} ref={vdoRef} controls loop muted />
  );
}
