import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal"; 
import { useProducts } from "@/hooks/useProducts";
import type { Product } from "@/services/fastFoodRestaurantService";

interface ProductsListProps {
  id: string | number;
}

export default function ProductsList({ id }: ProductsListProps) {
  
  const { data: products, isLoading, isError } = useProducts(String(id));
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        Cargando productos...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500 font-medium">
        Ocurrió un error al cargar los productos.
      </div>
    );
  }

  const showModal = (e: React.MouseEvent<HTMLElement>, product: Product) => {
    e.preventDefault();
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto min-h-screen px-8 py-5">
        <div className="mb-8 flex flex-col items-center justify-center text-center">
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-0 leading-none">
                Pizzas
            </h1>

            <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg text-center -mt-2">
                Deliciosas pizzas artesanales con ingredientes frescos y masas crujientes.
            </p>

        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products?.map((product) => (
                <ProductCard
                key={product.id} 
                product={product} 
                onClick={(e) => showModal(e, product)} 
                />
            ))}
        </div>
        
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            open={isModalOpen} 
            onOpenChange={(isOpen) => {
              setIsModalOpen(isOpen);
              if (!isOpen) setSelectedProduct(null); 
            }} 
          />
        )}
      
    </div>
  );
}