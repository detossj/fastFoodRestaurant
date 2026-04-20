import React from 'react';
import OrderCard from './OrderCard';
import { useGetOrders } from '@/hooks/useOrder';

const OrderList: React.FC = () => {

  const { data:pedidos, isLoading } = useGetOrders();

  return (
    <div className="container mx-auto p-5 min-h-screen">
      <div className="flex flex-col gap-6 items-center">
        {isLoading ? (
          <h4 className="text-muted-foreground text-center mt-10 text-lg">
            Cargando pedidos...
          </h4>
        ) : pedidos?.length === 0 ? (
          <h4 className="text-muted-foreground text-center mt-10 text-lg">
            No tienes pedidos actualmente.
          </h4>
        ) : (
            pedidos?.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))
        )}
      </div>
    </div>
  );
};

export default OrderList;