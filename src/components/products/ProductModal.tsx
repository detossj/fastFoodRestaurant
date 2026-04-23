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
import { api_url_images } from '@/config/axiosConfig';
import type { Product } from '@/types/product.types';


interface ProductModalProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductModal = ({ product, open, onOpenChange }: ProductModalProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const addToCart = useCartStore((state) => state.addToCart);

  // Aseguramos que el precio sea numérico
  const priceNumber = typeof product.price === 'string' ? parseFloat(product.price) : product.price;

  // Multiplicamos el precio por la cantidad para mostrar el total en el botón
  const total = priceNumber * quantity;
  const formattedTotal = Math.trunc(total).toLocaleString('es-CL');
  
  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: priceNumber,
        image_url: product.image_url ?? '', 
        cartType: 'product',
      },
      quantity
    );

    setTimeout(() => {
      onOpenChange(false);
      setQuantity(1); 
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] sm:w-full max-w-[500px] p-4 sm:p-6 rounded-2xl bg-white max-h-[90vh] overflow-x-hidden overflow-y-auto mx-auto">
        
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>Detalles de {product.name}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center pt-1">
          <img
            src={`${api_url_images}/storage${product.image_url}`}
            alt={product.name}
            className="w-full max-w-[300px] aspect-square object-cover block mx-auto rounded-2xl shadow-sm"
          />

          <h3 className="text-center mt-4 font-bold text-gray-900 text-xl">{product.name}</h3>
          
          <p className="text-center text-gray-500 mt-2 mb-4 px-1 text-[0.95rem]">
            {product.description}
          </p>

          <div className="flex items-center justify-between gap-2 sm:gap-3 mt-2 w-full">
            
            <div className="shrink-0 flex items-center justify-between gap-1.5 sm:gap-2.5 bg-gray-50 py-1.5 px-2 rounded-full border border-gray-200">
              <button
                className="w-8 h-8 rounded-full bg-white text-[#ff7a00] text-lg font-bold flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-colors hover:bg-[#ff7a00] hover:text-white"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                −
              </button>

              <span className="text-base font-bold min-w-[20px] text-center">
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
              className="flex-1 bg-[#ff7a00] hover:bg-[#e16923] hover:-translate-y-0.5 active:translate-y-[1px] text-white rounded-full py-5 sm:py-6 px-3 sm:px-4 text-sm sm:text-base font-bold flex justify-between items-center transition-all shadow-sm"
            >
              <span>AGREGAR</span>
              <span className="font-extrabold text-[1rem] sm:text-[1.1rem]">${formattedTotal}</span>
            </Button>
            
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;