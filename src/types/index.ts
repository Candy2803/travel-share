export type Category = 
  | 'aquaventure'
  | 'adventure'
  | 'nature-walks'
  | 'hikes'
  | 'hotels'
  | 'restaurants';

export interface Post {
  id: string;
  title: string;
  description: string;
  category: Category;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  createdAt: string;
  author: {
    name: string;
    avatar: string;
  };
}