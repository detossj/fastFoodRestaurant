import type { CartItemType } from '@/types/cart.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface CartState {
  cart: CartItemType[];
  addToCart: (item: Omit<CartItemType, 'cartId' | 'quantity'>, quantity: number) => void;
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
            cart: [...state.cart, { ...item, cartId, quantity } as CartItemType],
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