// import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { LiveStreamButton } from './LiveStream/LiveStreamButton';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Compass className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">TravelShare</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4">
          <LiveStreamButton />
          <Link
            to="/upload"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Share Experience
          </Link>
        </nav>
      </div>
    </header>
  );
}