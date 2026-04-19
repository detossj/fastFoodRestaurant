import { useMutation } from "@tanstack/react-query";
import { createOrder } from "@/services/fastFoodRestaurantService";
import type { Order } from "@/types/order.types";


export const useRegister = () => {
  return useMutation({
    mutationFn: (order: Order) => createOrder(order),
    onError: (error) => {
      console.error("Error al crear pedido:", error);
    }
  });
};