import { getPromociones } from "@/services/fastFoodRestaurantService";
import { useQuery } from "@tanstack/react-query";


export const usePromociones = () => {
  return useQuery({
    queryKey: ['promociones'], // Una clave única para identificar este caché
    queryFn: getPromociones,
    // Opcional: Evita que haga peticiones a la API cada vez que cambias de pestaña
    staleTime: 1000 * 60 * 10, // Los datos se consideran frescos por 10 minutos
  });
};