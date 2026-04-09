import { useState } from 'react';
import { usePromociones } from '@/hooks/usePromociones';
import type { Promocion } from '@/services/fastFoodRestaurantService';
//import PizzaCard from './PizzaCard';
//import PizzaModal from './PizzaModal';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function PizzasList() {

  const { data: promotions, isLoading, isError } = usePromociones();
  
  const [selectedPromotion, setSelectedPromotion] = useState<Promocion | null>(null);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        Cargando pizzas increíbles...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500 font-medium">
        Ocurrió un error al cargar las pizzas.
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 md:px-6 pt-6">
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
            Pizzas
          </h1>
          
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg text-center">
            Combos y ofertas especiales en pizzas, hamburguesas, acompañamientos, bebidas y más.
          </p>
          
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* {promotions?.map((promotion) => (
            <PizzaCard 
              key={promotion.id} 
              promotion={promotion} 
              onClick={() => setSelectedPromotion(promotion)} 
            />
          ))} */}
        </div>
      </div>


      <Dialog 
        open={!!selectedPromotion} 
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedPromotion(null);
        }}
      >

        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-white dark:bg-zinc-950">
          {/* {selectedPromotion && (
            <PizzaModal
              promotion={selectedPromotion} 
              close={() => setSelectedPromotion(null)} 
            />
          )} */}
        </DialogContent>
      </Dialog>
    </>
  );
}