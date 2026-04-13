import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useRegister } from '@/hooks/useRegister';
import { useAuthStore } from '@/stores/useAuthStore';
import { useNavigate } from '@tanstack/react-router';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  
  // Estado local solo para validar que las contraseñas coincidan
  const [localError, setLocalError] = useState<string | null>(null);

  const { mutate: registerUser, isPending, isError } = useRegister();

  const navigate = useNavigate();

  const submitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalError(null);

    // Validación antes de llamar a la API
    if (password !== passwordConfirmation) {
      setLocalError('Las contraseñas no coinciden.');
      return;
    }

    registerUser(
      { 
        email, 
        name, 
        address, 
        phone, 
        password, 
        password_confirmation: passwordConfirmation 
     },
      {
        onSuccess: () => {

          const { rol } = useAuthStore.getState();

          if (rol === 'admin') {
            navigate({ to: '/admin' as any, replace: true });
          } else {
            navigate({ to: '/', replace: true });
          }
        }
      }
    );
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center p-4 bg-slate-50 py-10">
      <Card className="w-full max-w-md shadow-xl border-slate-100 rounded-2xl bg-white">
        
        <CardHeader className="pb-6">
          <CardTitle className="text-center text-3xl font-extrabold text-slate-900">
            Registro
          </CardTitle>
        </CardHeader>

        <CardContent>
          {(localError || isError) && (
            <Alert variant="destructive" className="mb-6 rounded-xl">
              <AlertDescription>
                {localError || 'Hubo un error al intentar registrarte. Verifica tus datos.'}
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={submitRegister} className="space-y-4">
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-bold text-slate-700">
                Correo
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="correo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl border-slate-200 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-bold text-slate-700">
                Nombre Completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Juan Perez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-xl border-slate-200 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-bold text-slate-700">
                Dirección
              </Label>
              <Input
                id="address"
                type="text"
                placeholder="Serrano 405"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="rounded-xl border-slate-200 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-bold text-slate-700">
                Número de Teléfono
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="989088185"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="rounded-xl border-slate-200 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-bold text-slate-700">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-xl border-slate-200 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="passwordConfirm" className="text-sm font-bold text-slate-700">
                Confirmar Contraseña
              </Label>
              <Input
                id="passwordConfirm"
                type="password"
                placeholder="••••••••"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
                className="rounded-xl border-slate-200 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isPending}
              className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold text-md h-12 rounded-full shadow-md transition-all active:scale-[0.98]"
            >
              {isPending ? 'Registrando...' : 'REGISTRARSE'}
            </Button>

          </form>
        </CardContent>

        <CardFooter className="flex justify-center border-t border-slate-100 p-6 mt-2">
          <div className="text-sm text-center text-slate-600">
            <span>¿Ya tiene cuenta? </span>
            <a
              href="/login"
              className="font-bold text-orange-500 hover:text-orange-600 hover:underline transition-colors"
            >
              Inicie sesión aquí
            </a>
          </div>
        </CardFooter>
        
      </Card>
    </div>
  );
};

export default Register;