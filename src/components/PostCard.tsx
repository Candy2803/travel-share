// import React from 'react';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02]">
      <div className="aspect-video relative">
        {post.mediaType === 'image' ? (
          <img
            src={post.mediaUrl}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <video
            src={post.mediaUrl}
            className="h-full w-full object-cover"
            controls
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{post.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            {post.category}
          </span>
        </div>
      </div>
    </div>
  );
}