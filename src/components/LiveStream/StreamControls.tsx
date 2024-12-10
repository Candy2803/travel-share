// import React from 'react';
import { Mic, MicOff, Video, VideoOff } from 'lucide-react';

interface StreamControlsProps {
  isAudioEnabled: boolean;
  isVideoEnabled: boolean;
  onToggleAudio: () => void;
  onToggleVideo: () => void;
  onEndStream: () => void;
}

export function StreamControls({
  isAudioEnabled,
  isVideoEnabled,
  onToggleAudio,
  onToggleVideo,
  onEndStream,
}: StreamControlsProps) {
  return (
    <div className="flex items-center justify-center space-x-4 bg-gray-900 p-4">
      <button
        onClick={onToggleAudio}
        className={`rounded-full p-3 ${
          isAudioEnabled ? 'bg-gray-700' : 'bg-red-600'
        }`}
      >
        {isAudioEnabled ? (
          <Mic className="h-6 w-6 text-white" />
        ) : (
          <MicOff className="h-6 w-6 text-white" />
        )}
      </button>
      <button
        onClick={onToggleVideo}
        className={`rounded-full p-3 ${
          isVideoEnabled ? 'bg-gray-700' : 'bg-red-600'
        }`}
      >
        {isVideoEnabled ? (
          <Video className="h-6 w-6 text-white" />
        ) : (
          <VideoOff className="h-6 w-6 text-white" />
        )}
      </button>
      <button
        onClick={onEndStream}
        className="rounded-full bg-red-600 px-6 py-2 font-medium text-white"
      >
        End Stream
      </button>
    </div>
  );
}