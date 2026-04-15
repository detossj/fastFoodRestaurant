import React from 'react';
import StoreCard from './StoreCard';
import { useStores } from '@/hooks/useStores';

const StoreList: React.FC = () => {
  const { data: stores } = useStores();

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen max-w-5xl">
      
      <div className="mb-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-0 leading-none"> 
          Nuestros Locales
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg text-center mt-2">
          Encuentra el local más cercano a ti y disfruta de nuestras deliciosas pizzas, hamburguesas, acompañamientos y bebidas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center sm:justify-items-stretch">
        {stores?.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
};

export default StoreList;