import { create } from 'zustand';
import { persist } from 'zustand/middleware';


export interface CartItem {
  id: number | string;
  price: number;
  cartType: string;
  cartId: string; 
  quantity: number;
  [key: string]: any; 
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'cartId' | 'quantity'>, quantity: number) => void;
  increaseQty: (cartId: string) => void;
  decreaseQty: (cartId: string) => void;
  removeItem: (cartId: string) => void;
  clearCart: () => void;
  getTotal: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item, quantity) => {
        const cartId = `${item.cartType}-${item.id}`;
        
        set((state) => {
          const existing = state.cart.find((i) => i.cartId === cartId);
          
          if (existing) {
            return {
              cart: state.cart.map((i) =>
                i.cartId === cartId
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            };
          }
          
          return {
            cart: [...state.cart, { ...item, cartId, quantity } as CartItem],
          };
        });
      },

      increaseQty: (id) => {
        set((state) => ({
          cart: state.cart.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        }));
      },

      decreaseQty: (id) => {
        set((state) => ({
          cart: state.cart.map((p) =>
            p.id === id && p.quantity > 1
              ? { ...p, quantity: p.quantity - 1 }
              : p
          ),
        }));
      },

      removeItem: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      },

      clearCart: () => set({ cart: [] }),

      getTotal: () => {
        return get().cart.reduce((acc, p) => acc + (p.price * p.quantity), 0);
      },

      getTotalItems: () => {
        return get().cart.reduce((acc, p) => acc + p.quantity, 0);
      },
    }),
    {
      name: 'cart-storage', // Nombre bajo el cual se guardará en localStorage
    }
  )
);