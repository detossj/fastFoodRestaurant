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

export interface Product {
    id: number;
    name: string;
    description?: string | null; 
    price: string | number;
    image_url?: string | null; 
    available: boolean;
    category_id: number;
    created_at?: string; 
    updated_at?: string; 
}

export interface Category {
    id: number;
    name: string;
    description?: string | null; 
    created_at?: string; 
    updated_at?: string; 
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    success: boolean;
    token: string;
    user: {
      id: number;
      email: string;
      roles: { name: string }[];
    };
}

export interface RegisterCredentials {
    email: string;
    name: string;
    address: string;
    phone: string;
    password: string;
    password_confirmation: string;
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

export const getProducts = async (categoria: string): Promise<Product[]> => {
    try {
        // Axios convertirá esto automáticamente en: /products?category_id=X
        const response = await api_url.get<Product[]>('/products', {
            params: {
                category_id: categoria
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error cargando los productos:", error);
        throw error;
    }
};

export const getCategories = async (id: string): Promise<Category> => {
    try {
        const response = await api_url.get<Category>('/categories', {
            params: {
                id: id
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error cargando las categorias:", error);
        throw error;
    }
}

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      const response = await api_url.post<AuthResponse>('/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error("Error al iniciar sesión:", error); 
      throw error;
    }
};

export const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    try {
      const response = await api_url.post<AuthResponse>('/auth/register', credentials);
      return response.data;
    } catch (error) {
      console.error("Error al registrarse:", error); 
      throw error;
    }
};