import api_url from "@/config/axiosConfig";
import type { AuthResponse, LoginCredentials, RegisterCredentials } from "@/types/auth.types";
import type { Category } from "@/types/category.types";
import type { Product } from "@/types/product.types";
import type { Promotion } from "@/types/promotion.types";
import type { Store } from "@/types/store.types";

export const getPromociones = async (): Promise<Promotion[]> => {
    try {
        const response = await api_url.get<Promotion[]>('/promotions');
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

export const getStores= async (): Promise<Store[]> => {
    try {
        const response = await api_url.get<Store[]>('/stores');
        return response.data;
    } catch (error) {
        console.error("Error cargando promociones:", error);
        throw error;
    }
};