import { create } from 'zustand';
import { persist } from 'zustand/middleware';


export interface User {
  id: number;
  email: string;
  name?: string;
  roles?: { name: string }[];
  [key: string]: any; 
}


interface AuthState {
  token: string | null;
  user: User | null;
  rol: string | null;
}

interface AuthActions {
  login: (user: User, token: string, rol: string) => void;
  updateUser: (updatedUser: User) => void;
  logout: () => void;
}


export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      rol: null,


      login: (user, token, rol) => set({ user, token, rol }),

      updateUser: (updatedUser) => set({ user: updatedUser }),

      logout: () => set({ token: null, user: null, rol: null }),
    }),
    {
      name: 'auth-storage', // Nombre de la clave que se guardará en localStorage
    }
  )
);