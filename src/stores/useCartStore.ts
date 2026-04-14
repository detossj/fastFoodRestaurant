import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: number | string;
  name: string;       
  image_url: string;
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

      increaseQty: (cartId) => {
        set((state) => ({
          cart: state.cart.map((p) =>
            p.cartId === cartId ? { ...p, quantity: p.quantity + 1 } : p
          ),
        }));
      },

      decreaseQty: (cartId) => {
        set((state) => ({
          cart: state.cart.map((p) =>
            p.cartId === cartId && p.quantity > 1
              ? { ...p, quantity: p.quantity - 1 }
              : p
          ),
        }));
      },

      removeItem: (cartId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.cartId !== cartId),
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
      name: 'cart-storage',
    }
  )
);