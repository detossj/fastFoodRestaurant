import { useMutation } from "@tanstack/react-query";
import { register, type RegisterCredentials } from "@/services/fastFoodRestaurantService";
import { useAuthStore } from "@/stores/useAuthStore";


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