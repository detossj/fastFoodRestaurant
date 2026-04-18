import React from 'react';
import { CheckCircle, Home } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SuccessCard: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate({ to: '/' });
  };

  return (
    <div className="flex justify-center my-10 w-full">
      <Card className="w-full max-w-[450px] shadow-lg border-border/50 rounded-2xl">
        <CardContent className="p-8 text-center flex flex-col items-center">
          
          <div className="flex justify-center mb-6">
            <div className="bg-green-500/10 p-4 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-500" size={64} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-2">
            ¡Pago Realizado!
          </h2>
          
          <p className="text-muted-foreground mb-5">
            Tu transacción ha sido procesada exitosamente.
          </p>

          <p className="text-sm text-muted-foreground/70 mb-8">
            Tu pedido estará listo en unos minutos.
          </p>

          <Button 
            onClick={handleBackToHome}
            className="w-full bg-[#ff7a00] hover:bg-[#e66a00] text-white font-bold h-12 text-md mt-2"
          >
            <Home size={20} />
            Volver al Inicio
          </Button>

        </CardContent>
      </Card>
    </div>
  );
};

export default SuccessCard;