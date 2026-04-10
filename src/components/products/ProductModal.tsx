import { useState } from 'react';
import { useCartStore } from '@/stores/useCartStore';
//import { toast } from 'react-toastify';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"; 
import { Button } from "@/components/ui/button"; 
import type { Product } from '@/services/fastFoodRestaurantService';


interface ProductModalProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductModal = ({ product, open, onOpenChange }: ProductModalProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        cartType: 'product',
      },
      quantity
    );
    //toast.success("Producto agregado al carrito");

    setTimeout(() => {
      onOpenChange(false);
      setQuantity(1); 
    }, 300);
  };

  // Aseguramos que el precio sea numérico
  const priceNumber = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
  
  // Multiplicamos el precio por la cantidad para mostrar el total en el botón
  const total = priceNumber * quantity;
  const formattedTotal = Math.trunc(total).toLocaleString('es-CL');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[500px] p-6 rounded-2xl bg-white max-h-[90vh] overflow-y-auto">
        
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>Detalles de {product.name}</DialogDescription>
        </DialogHeader>


        <div className="flex flex-col items-center pt-2">
          <img
            src={`storage/${product.image_url}`} 
            alt={product.name}
            className="w-full max-w-[300px] aspect-square object-cover block mx-auto rounded-2xl shadow-sm"
          />

          <h3 className="text-center mt-4 font-bold text-gray-900 text-xl">{product.name}</h3>
          
          <p className="text-center text-gray-500 mt-2 mb-4 px-2 text-[0.95rem]">
            {product.description}
          </p>


          <div className="flex items-center justify-between gap-3 mt-2 w-full flex-wrap">
            

            <div className="flex items-center justify-between gap-2.5 bg-gray-50 py-1.5 px-2 rounded-full border border-gray-200">
              <button
                className="w-8 h-8 rounded-full bg-white text-[#ff7a00] text-lg font-bold flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-colors hover:bg-[#ff7a00] hover:text-white"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                −
              </button>

              <span className="text-base font-bold min-w-[24px] text-center">
                {quantity}
              </span>

              <button
                className="w-8 h-8 rounded-full bg-white text-[#ff7a00] text-lg font-bold flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-colors hover:bg-[#ff7a00] hover:text-white"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <Button 
              onClick={handleAddToCart}
              className="flex-1 bg-[#ff7a00] hover:bg-[#e16923] hover:-translate-y-0.5 active:translate-y-[1px] text-white rounded-full py-6 px-5 text-base font-bold flex justify-between items-center transition-all min-w-[200px] shadow-sm"
            >
              <span>AGREGAR</span>
              <span className="font-extrabold text-[1.1rem]">${formattedTotal}</span>
            </Button>
            
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;