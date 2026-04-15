
import { getStores } from "@/services/fastFoodRestaurantService";
import { useQuery } from "@tanstack/react-query";


export const useStores = () => {
    return useQuery({
      queryKey: ['stores'], 
      queryFn: () => getStores(), 
      staleTime: 1000 * 60 * 10,
    });
};