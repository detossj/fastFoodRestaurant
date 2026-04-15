import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Store } from '@/types/store.types';
import { api_url_images } from '@/config/axiosConfig';

interface StoreCardProps {
  store: Store;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  return (
    <Card className="h-full w-full flex flex-col rounded-2xl border-[#f0f0f0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden">
      
      <div className="w-full shrink-0 bg-gray-50 flex justify-center items-center relative">
        <img 
          src={`${api_url_images}/storage${store.image_url}`}
          alt={store.direction}
          className="w-full h-[260px] object-cover"
          loading="lazy"
          decoding="async"
        />
        <Badge 
          variant="default" 
          className="absolute top-3 right-3 bg-green-600 hover:bg-green-700 text-white shadow-sm"
        >
          Abierto
        </Badge>
      </div>

      <CardContent className="flex-1 flex flex-col p-4 pt-5">
        <h5 className="font-bold text-center text-lg leading-tight mb-4 text-foreground">
          {store.direction}
        </h5>

        <div className="grid gap-3 flex-1 text-sm text-muted-foreground w-full px-2">
          <div className="flex items-start gap-2.5">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-foreground" />
            <span className="line-clamp-2">{store.sub_direction ?? 'Dirección no disponible'}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <Clock className="h-4 w-4 shrink-0 text-foreground" />
            <span className="truncate">{store.schedule ?? 'Horario a consultar'}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <Phone className="h-4 w-4 shrink-0 text-foreground" />
            <span className="truncate">{store.phone ?? 'Teléfono no disponible'}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="mt-auto p-4 w-full flex justify-center">
        <Button 
          className="w-full max-w-[220px] h-auto bg-[#ff7a00] hover:bg-[#e96f00] text-white rounded-[22px] py-3 px-5 text-base font-bold flex justify-center items-center transition-colors"
        >
          Ver Mapa
        </Button>
      </CardFooter>

    </Card>
  );
};

export default StoreCard;