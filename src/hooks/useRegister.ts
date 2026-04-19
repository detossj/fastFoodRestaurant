import { useMutation } from "@tanstack/react-query";
import { register } from "@/services/fastFoodRestaurantService";
import { useAuthStore } from "@/stores/useAuthStore";
import type { RegisterCredentials } from "@/types/auth.types";


export const useRegister = () => {
  const loginAction = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: (userData: RegisterCredentials) => register(userData),
    
    onSuccess: (data) => {
      if (data.success || data.token) { 
        loginAction(
          data.user,
          data.token,
          data.user.roles[0].name
        );
      }
    },
    
    onError: (error) => {
      console.error("Error en el registro:", error);
    }
  });
};