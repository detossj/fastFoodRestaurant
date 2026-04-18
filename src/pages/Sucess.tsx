import CheckoutTopBar from '@/components/checkout/CheckTopbar';
import SuccessCard from '@/components/redirection/SuccessCard';
import React from 'react';


const Success: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-background">
      <CheckoutTopBar />
      <div className="flex-grow flex justify-center items-center p-4">
        <SuccessCard />
      </div>
    </div>
  );
};

export default Success;