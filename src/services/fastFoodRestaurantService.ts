import api_url from "@/config/axiosConfig";

export interface Promocion {
  id: number;
  name: string;
  description?: string | null; 
  price: string | number;
  image_url?: string | null; 
  available: boolean;
  start_date: string; 
  end_date: string;
  created_at?: string; 
  updated_at?: string; 
}

export const getPromociones = async (): Promise<Promocion[]> => {
    try {
        const response = await api_url.get<Promocion[]>('/promotions');
        return response.data;
    } catch (error) {
        console.error("Error cargando promociones:", error);
        throw error;
    }
};