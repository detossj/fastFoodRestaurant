
import { getProducts } from "@/services/fastFoodRestaurantService";
import { useQuery } from "@tanstack/react-query";


export const useProducts = (categoria: string) => {
    return useQuery({
      queryKey: ['productos', categoria], 
      queryFn: () => getProducts(categoria), 
      staleTime: 1000 * 60 * 10,
    });
};