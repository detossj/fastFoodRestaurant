
import { getCategories } from "@/services/fastFoodRestaurantService";
import { useQuery } from "@tanstack/react-query";


export const useCategories = (id: string) => {
    return useQuery({
      queryKey: ['categories', id], 
      queryFn: () => getCategories(id), 
      staleTime: 1000 * 60 * 10,
    });
};