import { useMutation, useQuery } from "@tanstack/react-query";
import { createOrder, getOrders } from "@/services/fastFoodRestaurantService";
import type { Order } from "@/types/order.types";


export const useCreateOrders = () => {
  return useMutation({
    mutationFn: (order: Order) => createOrder(order),
    onError: (error) => {
      console.error("Error al crear pedido:", error);
    }
  });
};

export const useGetOrders = () => {
  return useQuery({
    queryKey: ['pedidos'],
    queryFn: getOrders,
  });
};