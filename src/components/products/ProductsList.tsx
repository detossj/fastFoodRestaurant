import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal"; 
import { useProducts } from "@/hooks/useProducts";
import { useCategories } from "@/hooks/useCategories";
import SectionHeader from "./SectionHeader";
import type { Product } from "@/types/product.types";

interface ProductsListProps {
  id: string | number;
}

export default function ProductsList({ id }: ProductsListProps) {
  
  const { data: products, isLoading: loadingProducts, isError } = useProducts(String(id));
  const { data: categories, isLoading: loadingCategories } = useCategories(String(id));
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (loadingProducts || loadingCategories) {
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
    <div className="container mx-auto px-8 py-5">

      <SectionHeader name={categories?.name || "Cargando..."} description={categories?.description} />
        <div className="container mx-auto px-8 md:px-18 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products?.map((product) => (
                  <ProductCard
                  key={product.id} 
                  product={product} 
                  onClick={(e) => showModal(e, product)} 
                  />
              ))}
          </div>
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