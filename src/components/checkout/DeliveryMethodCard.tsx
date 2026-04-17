import React, { useState, useEffect } from 'react';
import { MapPin, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useAuthStore } from '@/stores/useAuthStore';
import { useStores } from '@/hooks/useStores';

interface DeliveryMethodCardProps {
  tipoEntrega: 'Delivery' | 'Retiro';
  setTipoEntrega: (tipo: 'Delivery' | 'Retiro') => void;
  setDeliveryAddress: (address: string) => void;
}

const DeliveryMethodCard: React.FC<DeliveryMethodCardProps> = ({ tipoEntrega, setTipoEntrega, setDeliveryAddress }) => {
  const { user } = useAuthStore();
  const { data: stores } = useStores();

  const [direction, setDirection] = useState<string | null | undefined>();
  const [subDirection, setSubDirection] = useState<string | null | undefined>();

  useEffect(() => {
    if (tipoEntrega === 'Delivery') {
      setDeliveryAddress(user?.address || 'Dirección no especificada');
    } else if (tipoEntrega === 'Retiro' && direction) {
      setDeliveryAddress(`${subDirection}, ${direction}`);
    }
  }, [tipoEntrega, direction, subDirection, user, setDeliveryAddress]);

  const handleStoreChange = (storeId: string) => {
    const selectedStore = stores?.find((s: any) => s.id.toString() === storeId);
    if (selectedStore) {
      setDirection(selectedStore.direction);
      setSubDirection(selectedStore.sub_direction);
    }
  };
    
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-[#ff7a00] text-xl">
          <Truck size={24} /> 
          <span className="text-gray-900">Método de entrega</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-6">
          <Button 
            variant={tipoEntrega === 'Delivery' ? 'default' : 'outline'}
            className={`flex-1 font-bold ${tipoEntrega === 'Delivery' ? 'bg-[#ff7a00] hover:bg-[#e66a00] text-white' : 'text-[#ff7a00] border-[#ff7a00] hover:bg-orange-50'}`}
            onClick={() => setTipoEntrega('Delivery')}
          >
            Delivery (Envío)
          </Button>
          <Button 
            variant={tipoEntrega === 'Retiro' ? 'default' : 'outline'}
            className={`flex-1 font-bold ${tipoEntrega === 'Retiro' ? 'bg-[#ff7a00] hover:bg-[#e66a00] text-white' : 'text-[#ff7a00] border-[#ff7a00] hover:bg-orange-50'}`}
            onClick={() => setTipoEntrega('Retiro')}
          >
            Retiro en Tienda
          </Button>
        </div>

        {tipoEntrega === 'Delivery' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 animate-in fade-in duration-300">
            <div className="md:col-span-8 space-y-2">
              <Label className="text-muted-foreground font-bold">Dirección</Label>
              <Input 
                type="text" 
                placeholder="Ej: Av. Siempre Viva 123" 
                defaultValue={user?.address || ''} 
                onChange={(e) => setDeliveryAddress(e.target.value)} 
              />
            </div>
            <div className="md:col-span-4 space-y-2">
              <Label className="text-muted-foreground font-bold">Comuna</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona..." />
                </SelectTrigger>
                <SelectContent>
                  {stores?.map((store: any) => (
                    <SelectItem key={store.id} value={store.id.toString()}>
                      {store.direction}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="space-y-2">
              <Label className="text-muted-foreground font-bold">Sucursal de Retiro</Label>
              <Select onValueChange={handleStoreChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una sucursal" />
                </SelectTrigger>
                <SelectContent>
                  {stores?.map((store: any) => (
                    <SelectItem key={store.id} value={store.id.toString()}>
                      {store.direction}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {direction && (
              <Alert className="bg-[#FFF6EE] border-[#FFDDC1] text-[#663C00]">
                <MapPin className="h-5 w-5 text-[#ff7a00]" />
                <AlertTitle className="font-bold">Sucursal: {subDirection}, {direction}</AlertTitle>
                <AlertDescription>
                  Tu pedido estará listo en 20-30 minutos.
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DeliveryMethodCard;