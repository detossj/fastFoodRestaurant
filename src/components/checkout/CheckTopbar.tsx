import React from 'react';
import logo from '../../assets/images/logo.webp';
import { Link } from '@tanstack/react-router';

const CheckoutTopBar: React.FC = () => {
  return (
    <header className="py-3 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <img 
            src={logo} 
            alt="Logo de la tienda" 
            className="h-[90px] w-auto object-contain" 
          />
        </Link>
      </div>
    </header>
  );
};

export default CheckoutTopBar;