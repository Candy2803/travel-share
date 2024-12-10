// import React from 'react';
import { Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LiveStreamButton() {
  return (
    <Link
      to="/live"
      className="flex items-center space-x-2 rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
    >
      <Video className="h-4 w-4" />
      <span>Go Live</span>
    </Link>
  );
}