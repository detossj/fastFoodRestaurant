import { useState } from 'react';
import { useCartStore } from '@/stores/useCartStore';
//import { toast } from 'react-toastify';
import type { Promocion } from '@/services/fastFoodRestaurantService';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Minus, Plus } from 'lucide-react';
import api_url from '@/config/axiosConfig';


interface PromotionModalProps {
  promotion: Promocion;
  close: () => void;
}

export default function PromotionModal({ promotion, close }: PromotionModalProps) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      ...promotion,
      cartType: 'promo'
    }, quantity);
    
    //toast.success("Promoción agregada al carrito");
    
    setTimeout(() => {
      close();
    }, 300);
  };

  // Aseguramos que el precio sea numérico
  const priceNumber = typeof promotion.price === 'string' ? parseFloat(promotion.price) : promotion.price;
  
  // Multiplicamos el precio por la cantidad para mostrar el total en el botón
  const total = priceNumber * quantity;
  const formattedTotal = Math.trunc(total).toLocaleString('es-CL');

  return (
    <div className="flex flex-col w-full">
      <div className="w-full px-4 pt-4 sm:px-6 sm:pt-6">
        {promotion.image_url ? (
          <img
            src={`${api_url}/storage/${promotion.image_url}`}
            alt={promotion.name}
            className="w-full max-w-[700px] aspect-video object-cover mx-auto rounded-2xl shadow-sm"
          />
        ) : (
          <div className="w-full aspect-video bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
            Sin imagen
          </div>
        )}
      </div>

      <DialogHeader className="px-4 mt-4 sm:px-6">
        <DialogTitle className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          {promotion.name}
        </DialogTitle>
        <DialogDescription className="text-center text-[0.95rem] mt-2 mb-4">
          {promotion.description ?? 'Sin descripción disponible.'}
        </DialogDescription>
      </DialogHeader>

      <div className="px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 mt-2 w-full">
          
          <div className="flex items-center justify-between gap-3 bg-gray-50 dark:bg-zinc-900 p-1.5 rounded-full border border-gray-200 dark:border-zinc-800 shrink-0 w-full sm:w-auto">
            <button
              className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 text-[#ff7a00] flex items-center justify-center shadow-sm transition-colors hover:bg-[#ff7a00] hover:text-white disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-[#ff7a00]"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              <Minus className="w-5 h-5" />
            </button>

            <span className="text-lg font-bold min-w-[28px] text-center dark:text-white">
              {quantity}
            </span>

            <button
              className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 text-[#ff7a00] flex items-center justify-center shadow-sm transition-colors hover:bg-[#ff7a00] hover:text-white"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <Button 
            onClick={handleAddToCart}
            className="flex-1 w-full bg-[#ff7a00] hover:bg-[#e16923] text-white rounded-full py-6 px-6 text-base font-bold flex justify-between items-center transition-all shadow-sm active:translate-y-[1px] hover:-translate-y-[2px]"
          >
            <span className="tracking-wide">AGREGAR</span>
            <span className="text-xl">${formattedTotal}</span>
          </Button>

        </div>
      </div>
    </div>
  );
}