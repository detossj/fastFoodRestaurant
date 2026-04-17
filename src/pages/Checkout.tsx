import React, { useState, useEffect } from 'react';
import DeliveryMethodCard from '@/components/checkout/DeliveryMethodCard';
import CustomerDataCard from '@/components/checkout/CustomerDataCard';
import PaymentMethodCard from '@/components/checkout/PaymentMethodCard';
import AbstractCard from '@/components/checkout/AbstractCard';
import { useNavigate } from '@tanstack/react-router';
import { useAuthStore } from '@/stores/useAuthStore';
import { useCartStore } from '@/stores/useCartStore';
import CheckoutTopBar from '@/components/checkout/CheckTopbar';


const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, getTotal, clearCart } = useCartStore();
  const subtotal = getTotal();
  const { user, token } = useAuthStore();

  const isLoggedIn = !!token;
  
  const [tipoEntrega, setTipoEntrega] = useState<'Delivery' | 'Retiro'>('Delivery'); 
  const [metodoPago, setMetodoPago] = useState<'Tarjeta Debito' | 'Efectivo'>('Tarjeta Debito'); 
  const [deliveryAddress, setDeliveryAddress] = useState<string>('');

  useEffect(() => {
    if (tipoEntrega === 'Delivery' && user?.address) {
      setDeliveryAddress(user.address);
    }
  }, [user, tipoEntrega]);

  const costoEnvio = tipoEntrega === 'Delivery' ? 2000 : 0;
  const totalFinal = subtotal + costoEnvio;

  const handleConfirmOrder = async () => {
    const orderData = {
      payment_method: metodoPago, 
      total: totalFinal,
      subtotal: subtotal,
      shipping_cost: costoEnvio,
      delivery_type: tipoEntrega,
      delivery_address: deliveryAddress,
      items: cart.map((item: any) => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        cartType: item.cartType 
      }))
    };

    try {
      if (!isLoggedIn) {
        clearCart();
        //navigate('/redirection'); 
      } else {
        // const response = await Config.createOrder(orderData);
        // if (response.status === 201 || response.status === 200) {
        //   clearCart();
        //   navigate('/redirection'); 
        // }
      }
    } catch (error: any) {
      console.error("Error al crear pedido:", error.response?.data);
      alert("Hubo un error al procesar tu pedido");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <CheckoutTopBar />
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <DeliveryMethodCard 
              tipoEntrega={tipoEntrega} 
              setTipoEntrega={setTipoEntrega} 
              setDeliveryAddress={setDeliveryAddress}
            />
            <CustomerDataCard />
            <PaymentMethodCard 
              metodoPago={metodoPago} 
              setMetodoPago={setMetodoPago}
            />
          </div>
          
          <div className="lg:col-span-4">
            <AbstractCard 
              costoEnvio={costoEnvio} 
              tipoEntrega={tipoEntrega} 
              onConfirm={handleConfirmOrder} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;