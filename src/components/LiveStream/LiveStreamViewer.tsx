import { useEffect, useRef } from 'react';

interface LiveStreamViewerProps {
  stream: MediaStream | null;
}

export function LiveStreamViewer({ stream }: LiveStreamViewerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  if (!stream) {
    return (
      <div className="flex aspect-video items-center justify-center bg-gray-900 text-white">
        Waiting for stream...
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className="h-full w-full rounded-lg object-cover"
    />
  );
}