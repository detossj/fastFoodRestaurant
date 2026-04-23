import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { api_url_images } from '@/config/axiosConfig';
import type { Product } from '@/types/product.types';


interface ProductCardProps {
  product: Product;
  onClick: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const priceNumber = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
  const formattedPrice = Math.trunc(priceNumber).toLocaleString('es-CL');

  return (
    <Card className="h-full flex flex-col rounded-2xl border-[#f0f0f0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden">
      
      <div className="w-full shrink-0 bg-gray-50 flex justify-center items-center">
        <img 
          src={`${api_url_images}/storage${product.image_url}`}
          alt={product.name}
          className="w-full h-[300px] object-cover"
          loading="lazy"
          decoding="async"
          width="260"
          height="200"
        />
      </div>

      <CardContent className="flex-1 flex flex-col md:p-4 pt-2 md:pt-5">
        <h5 className="font-bold text-center text-lg leading-tight">
          {product.name}
        </h5>
        
        <p className="text-muted-foreground text-center text-sm pt-2 md:mt-3 line-clamp-3">
          {product.description ?? 'Sin descripción disponible.'}
        </p>
      </CardContent>

      <CardFooter className="mt-auto p-4 w-full flex justify-center">
        <Button 
          onClick={onClick}
          className="w-full max-w-[220px] h-auto bg-[#ff7a00] hover:bg-[#e96f00] text-white rounded-[22px] py-3 px-5 text-base font-bold flex justify-between items-center transition-colors"
        >
          <span>AGREGAR</span>
          <span className="font-bold">${formattedPrice}</span>
        </Button>
      </CardFooter>

    </Card>
  );
};

export default ProductCard;