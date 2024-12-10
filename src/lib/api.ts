import axios from 'axios';
import type { Post } from '../types';

const API_URL = 'http://localhost:5000/api';

export const api = {
  async getPosts(category?: string) {
    const response = await axios.get<Post[]>(`${API_URL}/posts`, {
      params: { category },
    });
    return response.data;
  },

  async createPost(postData: Omit<Post, 'id' | 'createdAt'>) {
    const response = await axios.post<Post>(`${API_URL}/posts`, postData);
    return response.data;
  },

  async getActiveStreams() {
    const response = await axios.get(`${API_URL}/streams`);
    return response.data;
  },

  async createStream(streamData: { title: string; userId: number }) {
    const response = await axios.post(`${API_URL}/streams`, streamData);
    return response.data;
  },

  async endStream(streamId: number) {
    await axios.delete(`${API_URL}/streams/${streamId}`);
  },
};