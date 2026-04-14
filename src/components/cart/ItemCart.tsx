import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { api_url_images } from '@/config/axiosConfig';

export interface CartItemType {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
}

interface ItemCartProps {
  product: CartItemType;
  onIncrease: (id: string | number) => void;
  onDecrease: (id: string | number) => void;
  onRemove: (id: string | number) => void;
}

const ItemCart: React.FC<ItemCartProps> = ({ product, onIncrease, onDecrease, onRemove }) => {
  const { id, name, price, quantity, image_url } = product;

  return (
    <div className="flex items-center gap-4 py-4 border-b border-border last:border-0 relative bg-background">
      
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-border bg-muted">
        <img
          src={`${api_url_images}/storage${image_url}`}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between h-20">
        
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-sm font-medium line-clamp-2 leading-tight text-foreground">
            {name}
          </h3>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10 -mt-1 -mr-2 shrink-0"
            onClick={() => onRemove(id)}
            aria-label="Eliminar producto"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between mt-auto">
          
          <div className="flex items-center rounded-md border border-input bg-transparent">
            <button
              type="button"
              className="flex h-7 w-7 items-center justify-center text-muted-foreground hover:bg-muted transition-colors rounded-l-md disabled:opacity-50"
              onClick={() => onDecrease(id)}
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </button>
            
            <span className="w-8 text-center text-sm font-medium text-foreground">
              {quantity}
            </span>
            
            <button
              type="button"
              className="flex h-7 w-7 items-center justify-center text-muted-foreground hover:bg-muted transition-colors rounded-r-md"
              onClick={() => onIncrease(id)}
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>

          <span className="text-sm font-bold text-foreground">
            ${Math.trunc(price).toLocaleString()}
          </span>
          
        </div>
      </div>
    </div>
  );
}

export default ItemCart;