import React from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useNavigate } from '@tanstack/react-router';
import { useCartStore } from '@/stores/useCartStore';
import ItemCart from './ItemCart';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { cart, increaseQty, decreaseQty, removeItem, getTotal } = useCartStore();

  const navigateToCheckout = () => {
    onClose();
    navigate({ to: '/checkout' });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex flex-col w-full sm:max-w-md p-6">
        
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-2xl font-bold">Tu pedido</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto my-4 space-y-4 pr-2">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            cart.map((product) => (
              <ItemCart
                key={product.cartId}
                product={product}
                onIncrease={() => increaseQty(product.cartId)}
                onDecrease={() => decreaseQty(product.cartId)}
                onRemove={() => removeItem(product.cartId)}
              />
            ))
          )}
        </div>

        <SheetFooter className="flex-col border-t pt-6 sm:flex-col space-y-4">
          <div className="flex justify-between items-center w-full text-xl font-semibold">
            <span>Total</span>
            <span>${getTotal().toLocaleString()}</span>
          </div>
          
          <Button 
            className="w-full py-6 text-lg font-bold bg-[#ff7a00] hover:bg-[#e96f00] rounded-full"
            onClick={navigateToCheckout}
            disabled={cart.length === 0}
          >
            CONTINUAR CON EL PAGO
          </Button>
        </SheetFooter>

      </SheetContent>
    </Sheet>
  );
}

export default Cart;