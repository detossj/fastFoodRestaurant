import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { OrderResponse } from '@/types/order.types';
import OrderProductCard from './OrderProductCard';


interface OrderCardProps {
  order: OrderResponse;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(val);

  // Función para determinar el color del Badge según el estado
  const getStatusBadgeVariant = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('preparando')) return 'bg-sky-100 text-sky-700 hover:bg-sky-100/80';
    if (s.includes('completado')) return 'bg-green-100 text-green-700 hover:bg-green-100/80';
    if (s.includes('camino')) return 'bg-amber-100 text-amber-700 hover:bg-amber-100/80';
    return 'bg-slate-100 text-slate-700 hover:bg-slate-100/80'; 
  };

  return (
    <Card className="w-full max-w-3xl mx-auto rounded-3xl border-slate-200 shadow-sm overflow-hidden">
      <CardHeader className="p-6 pb-4 flex flex-row justify-between items-center border-b-2 border-dashed border-slate-100 space-y-0">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800 m-0">
            Pedido #{order.id}
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {new Date(order.created_at).toLocaleString('es-CL')}
          </p>
        </div>
        <Badge 
          className={`px-4 py-1.5 rounded-full font-bold tracking-wide uppercase text-xs border-transparent ${getStatusBadgeVariant(order.status)}`}
        >
          {order.status}
        </Badge>
      </CardHeader>

      <CardContent className="p-0">

        <div className="p-6">
          <h4 className="text-lg font-bold text-slate-600 mb-5">
            Resumen de Productos
          </h4>
          <div className="flex flex-col gap-4">
            {order.order_items.map((item) => (
              <OrderProductCard key={`p-${item.id}`} item={item} type="product" />
            ))}
            {order.order_promotion_items.map((item) => (
              <OrderProductCard key={`pr-${item.id}`} item={item} type="promotion" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-slate-50">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
              Dirección de Envío
            </label>
            <p className="text-sm font-medium text-slate-700">
              {order.delivery_address}
            </p>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
              Método de Entrega
            </label>
            <p className="text-sm text-slate-700">{order.delivery_type}</p>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
              Forma de Pago
            </label>
            <p className="text-sm text-slate-700">{order.payment_method}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col items-stretch p-6 bg-white border-t border-slate-100">
        <div className="flex justify-between py-1.5 text-slate-500 text-sm">
          <span>Subtotal</span>
          <span>{formatCurrency(order.subtotal)}</span>
        </div>
        <div className="flex justify-between py-1.5 text-slate-500 text-sm">
          <span>Costo de Envío</span>
          <span>{formatCurrency(order.shipping_cost)}</span>
        </div>
        
        <Separator className="my-4 bg-slate-100 h-0.5" />
        
        <div className="flex justify-between items-center text-2xl font-extrabold text-slate-800">
          <span>Total Pagado</span>
          <span className="text-[#ff7a00]">{formatCurrency(order.total)}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default OrderCard;