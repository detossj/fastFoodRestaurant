import React from 'react';

const OrderSectionHeader: React.FC = () => {
  return (

    <div className="mb-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">
            Pedidos
        </h1>

        <p className="text-muted-foreground md:w-2/3">
          Aquí encontrarás tus pedidos realizados anteriormente.
        </p>
    </div>
    
  );
};

export default OrderSectionHeader;