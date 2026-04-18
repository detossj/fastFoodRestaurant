import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';

const RedirectionCard: React.FC = () => {
  const navigate = useNavigate();
  // El estado se mantiene para controlar el tiempo, aunque no se muestre
  const [countdown, setCountdown] = useState<number>(5);
  const destination = '/success';

  useEffect(() => {
    // Cuando llegue a 0, redirigimos y detenemos el efecto
    if (countdown <= 0) {
      navigate({ to: destination });
      return;
    }

    // Usamos setTimeout para que no se acumulen intervalos
    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <div className="flex justify-center my-10 w-full">
      <Card className="w-full max-w-[450px] shadow-lg border-border/50 rounded-2xl">
        <CardContent className="p-10 text-center flex flex-col items-center">
          
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full flex items-center justify-center bg-[#ff7a00]/10">
              <Loader2 
                className="animate-spin text-[#ff7a00]" 
                size={64} 
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Redirigiendo...
          </h2>
          
          <p className="text-muted-foreground text-sm md:text-base">
            Estamos procesando tus datos. Serás redirigido automáticamente en breve.
          </p>

        </CardContent>
      </Card>
    </div>
  );
};

export default RedirectionCard;