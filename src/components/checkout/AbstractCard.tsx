import React from 'react';

import { ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { useCartStore } from '@/stores/useCartStore';

interface AbstractCardProps {
  costoEnvio: number;
  tipoEntrega: string;
  onConfirm: () => void;
}

const AbstractCard: React.FC<AbstractCardProps> = ({ costoEnvio, tipoEntrega, onConfirm }) => {
  const navigate = useNavigate(); 
  const { cart, getTotal } = useCartStore();
  const subtotal = getTotal();
  const total = subtotal + costoEnvio;

  const formatMoney = (amount: number) => {
    return "$" + amount.toLocaleString('es-CL');
  };

  const navigateToRedirection = () => {
    onConfirm();
    navigate({ to: '/redirection'}); 

  };

  return (
    <div className="sticky top-[90px]">
      <Card className="border-none shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-[#ff7a00] text-xl">
            <ShoppingBag size={24} />
            <span className="text-gray-900">Resumen de compra</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-4 mb-6 max-h-[300px] overflow-auto pr-2 custom-scrollbar">
            {cart.map((product: any) => (
              <div key={product.id} className="flex justify-between items-start pb-3 border-b last:border-0">
                <div>
                  <div className="font-bold text-sm text-gray-800">{product.quantity}x {product.name}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">Detalles del item...</div>
                </div>
                <div className="font-bold text-gray-900">
                  {formatMoney(product.price * product.quantity)}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-bold">{formatMoney(subtotal)}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Envío ({tipoEntrega})</span>
              <span className={`font-bold ${costoEnvio === 0 ? 'text-green-600' : ''}`}>
                {costoEnvio === 0 ? 'GRATIS' : formatMoney(costoEnvio)}
              </span>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-lg">Total</span>
            <span className="font-extrabold text-2xl text-[#ff7a00]">{formatMoney(total)}</span>
          </div>

          <Button 
            className="w-full bg-[#ff7a00] hover:bg-[#e66a00] text-white font-bold h-12 text-md"
            onClick={navigateToRedirection}
          >
            CONFIRMAR PEDIDO
          </Button>
                  
          <p className="text-center text-muted-foreground text-xs mt-4">
            Tus datos están protegidos por SSL.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AbstractCard;