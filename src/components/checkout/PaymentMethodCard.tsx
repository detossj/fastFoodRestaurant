import React from 'react';
import { CreditCard, Banknote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface PaymentMethodCardProps {
  metodoPago: 'Tarjeta Debito' | 'Efectivo';
  setMetodoPago: (metodo: 'Tarjeta Debito' | 'Efectivo') => void;
}

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({ metodoPago, setMetodoPago }) => {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-[#ff7a00] text-xl">
          <CreditCard size={24} />
          <span className="text-gray-900">Método de pago</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <RadioGroup 
          value={metodoPago} 
          onValueChange={(val: 'Tarjeta Debito' | 'Efectivo') => setMetodoPago(val)}
          className="flex flex-col gap-3"
        >
          <Label
            htmlFor="tarjeta"
            className={`flex items-center gap-4 border rounded-lg p-4 cursor-pointer transition-colors ${
              metodoPago === 'Tarjeta Debito' ? 'border-[#ff7a00] bg-orange-50/50' : 'hover:bg-gray-50'
            }`}
          >
            <RadioGroupItem value="Tarjeta Debito" id="tarjeta" className="text-[#ff7a00]" />
            <CreditCard size={24} className="text-gray-700" />
            <div className="flex flex-col">
              <span className="font-bold text-base">Tarjeta de Crédito / Débito</span>
              <span className="text-sm text-muted-foreground">WebPay, OnePay</span>
            </div>
          </Label>

          <Label
            htmlFor="efectivo"
            className={`flex items-center gap-4 border rounded-lg p-4 cursor-pointer transition-colors ${
              metodoPago === 'Efectivo' ? 'border-[#ff7a00] bg-orange-50/50' : 'hover:bg-gray-50'
            }`}
          >
            <RadioGroupItem value="Efectivo" id="efectivo" className="text-[#ff7a00]" />
            <Banknote size={24} className="text-green-600" />
            <div className="flex flex-col">
              <span className="font-bold text-base">Efectivo en tienda o entrega</span>
              <span className="text-sm text-muted-foreground">Pagas al recibir tu pedido</span>
            </div>
          </Label>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodCard;