import { login } from "@/services/fastFoodRestaurantService";
import type { LoginCredentials } from "@/services/fastFoodRestaurantService";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";


export const useLogin = () => {

  const loginAction = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => login(credentials),
    
    onSuccess: (data) => {
      if (data.success) {
        loginAction(
          data.user,
          data.token,
          data.user.roles[0].name
        );
      }
    },
    
    onError: (error) => {
      console.error("Fallo el inicio de sesión", error);
    }
  });
};