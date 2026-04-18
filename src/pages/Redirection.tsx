import CheckoutTopBar from '@/components/checkout/CheckTopbar';
import RedirectionCard from '@/components/redirection/RedirectionCard';
import React from 'react';


const Redirection: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-background">
      <CheckoutTopBar />
      <div className="flex-grow flex justify-center items-center p-4">
        <RedirectionCard />
      </div>
    </div>
  );
};

export default Redirection;