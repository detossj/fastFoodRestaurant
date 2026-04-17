import React from 'react';
import { LogIn, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/useAuthStore';

const CustomerDataCard: React.FC = () => {
  const { user, token } = useAuthStore();
  const isLogged = !!user && !!token;

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-[#ff7a00] text-xl">
          <User size={24} />
          <span className="text-gray-900">Datos del cliente</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-muted-foreground font-bold">Nombre</Label>
            <Input 
              type="text" 
              placeholder="Juan Perez" 
              defaultValue={isLogged ? user.name : ''}
              disabled={isLogged}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground font-bold">Correo</Label>
            <Input 
              type="email" 
              placeholder="juan@ejemplo.com" 
              defaultValue={isLogged ? user.email : ''}
              disabled={isLogged}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground font-bold">Teléfono</Label>
            <Input 
              type="tel" 
              placeholder="+56 9 1234 5678"
              defaultValue={isLogged ? user.phone : ''}
              disabled={isLogged}
            />
          </div>
        </div>

        {!isLogged && ( 
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center bg-gray-50 border p-4 rounded-lg gap-4">
            <span className="text-sm text-gray-600 text-center sm:text-left">
              ¿Ya tienes cuenta? Regístrate para guardar tus pedidos o continúa como invitado.
            </span>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto flex items-center gap-2 border-[#ff7a00] text-[#ff7a00] hover:bg-orange-50"
              onClick={() => window.location.href = '/login'}
            >
              <LogIn size={16} /> Iniciar Sesión
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomerDataCard;