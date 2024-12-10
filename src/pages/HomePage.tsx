import { useState } from 'react';
import { CategoryFilter } from '../components/CategoryFilter';
import { PostCard } from '../components/PostCard';
import type { Post } from '../types';

// Sample data - in a real app, this would come from an API
const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Scuba Diving in the Great Barrier Reef',
    description: 'An amazing underwater adventure exploring coral reefs and marine life.',
    category: 'aquaventure',
    mediaUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
    mediaType: 'image',
    createdAt: new Date().toISOString(),
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
  },
  {
    id: '2',
    title: 'Hiking the Grand Canyon',
    description: 'A breathtaking journey through one of nature\'s greatest wonders.',
    category: 'hikes',
    mediaUrl: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b',
    mediaType: 'image',
    createdAt: new Date().toISOString(),
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
  },
];

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? samplePosts.filter((post) => post.category === selectedCategory)
    : samplePosts;

  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}