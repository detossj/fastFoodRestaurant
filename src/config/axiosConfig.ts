import axios from 'axios';
import { useAuthStore } from '@/stores/useAuthStore';

const API_URL = import.meta.env.VITE_API_URL
const token = useAuthStore.getState().token;

const api_url = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
});

const api_url_images = import.meta.env.VITE_API_IMAGES;

export default api_url;
export { api_url_images };