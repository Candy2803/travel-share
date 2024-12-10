import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const categories = [
  { id: 'aquaventure', label: 'Aquaventure', icon: '🌊' },
  { id: 'adventure', label: 'Adventure', icon: '🏃' },
  { id: 'nature-walks', label: 'Nature Walks', icon: '🌿' },
  { id: 'hikes', label: 'Hikes', icon: '⛰️' },
  { id: 'hotels', label: 'Hotels', icon: '🏨' },
  { id: 'restaurants', label: 'Restaurants', icon: '🍽️' },
];