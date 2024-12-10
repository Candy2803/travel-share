import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LiveStreamViewer } from '../components/LiveStream/LiveStreamViewer';
import { StreamControls } from '../components/LiveStream/StreamControls';

export function LiveStreamPage() {
  const navigate = useNavigate();
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);

  useEffect(() => {
    const startStream = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setStream(mediaStream);
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };

    startStream();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const toggleAudio = useCallback(() => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled;
      setIsAudioEnabled(audioTrack.enabled);
    }
  }, [stream]);

  const toggleVideo = useCallback(() => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      setIsVideoEnabled(videoTrack.enabled);
    }
  }, [stream]);

  const endStream = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    navigate('/');
  }, [stream, navigate]);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="overflow-hidden rounded-lg bg-gray-900">
        <LiveStreamViewer stream={stream} />
        <StreamControls
          isAudioEnabled={isAudioEnabled}
          isVideoEnabled={isVideoEnabled}
          onToggleAudio={toggleAudio}
          onToggleVideo={toggleVideo}
          onEndStream={endStream}
        />
      </div>
      <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
        <h2 className="text-lg font-semibold">Stream Information</h2>
        <div className="mt-2 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-600"></div>
            <span className="text-sm font-medium">LIVE</span>
          </div>
          <span className="text-sm text-gray-600">
            Started {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
}