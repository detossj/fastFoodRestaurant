import React from 'react';
import type { OrderItemResponse } from '@/types/order.types';
import { api_url_images } from '@/config/axiosConfig';

interface OrderProductCardProps {
  item: OrderItemResponse;
  type: 'product' | 'promotion';
}

const OrderProductCard: React.FC<OrderProductCardProps> = ({ item, type }) => {
  const data = type === 'product' ? item.product : item.promotion;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(val);

  if (!data) return null;

  return (
    <div className="flex items-center justify-between bg-white border border-slate-100 shadow-sm rounded-2xl p-3 hover:border-slate-200 transition-colors">
      <div className="flex items-center gap-4 overflow-hidden">
        <img
          src={`${api_url_images}/storage${data.image_url}`}
          alt={data.name}
          className="w-14 h-14 object-cover rounded-xl shadow-sm shrink-0"
        />
        <div className="flex flex-col">
          <p className="text-sm font-bold text-slate-800 truncate">
            {data.name}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end shrink-0 pl-4">
        <p className="text-sm font-extrabold text-slate-800">
          {formatCurrency(item.price)}
        </p>
        <p className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md mt-1">
          Cantidad: {item.quantity}
        </p>
      </div>
    </div>
  );
};

export default OrderProductCard;