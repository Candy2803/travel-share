// import React from 'react';
import { UploadForm } from '../components/UploadForm';

export function UploadPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Share Your Experience</h1>
      <UploadForm />
    </div>
  );
}