import { api_url_images } from "@/config/axiosConfig";
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Promotion } from "@/types/promotion.types";

interface PromotionCardProps {
  promotion: Promotion;
  onClick: () => void; 
}

export default function PromotionCard({ promotion, onClick }: PromotionCardProps) {

  const priceNumber = typeof promotion.price === 'string' ? parseFloat(promotion.price) : promotion.price;
  const formattedPrice = Math.trunc(priceNumber).toLocaleString('es-CL');

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg border-gray-100 rounded-2xl">
      
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        {promotion.image_url ? (
          <img 
            src={`${api_url_images}/storage${promotion.image_url}`}
            alt={promotion.name}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Sin imagen
          </div>
        )}
      </div>


      <CardContent className="flex flex-col flex-grow justify-center p-4 text-center min-h-[100px]">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 leading-tight">
          {promotion.name}
        </h3>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
          {promotion.description ?? 'Sin descripción disponible.'}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 mt-auto">
        <Button 
          onClick={onClick}
          className="w-full bg-[#f97c2f] hover:bg-[#fc6000] text-white font-semibold py-6 rounded-xl flex justify-between items-center px-5 transition-colors mt-3"
        >
          <span className="tracking-wide">AGREGAR</span>
          <span className="text-lg">${formattedPrice}</span>
        </Button>
      </CardFooter>

    </Card>
  );
}