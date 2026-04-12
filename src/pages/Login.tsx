import React, { useState } from 'react';
import { useLogin } from '@/hooks/useLogin'; 
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Login: React.FC = () => { 
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { mutate: loginUser, isPending, isError } = useLogin();

  const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  return (

    <div className="flex min-h-[70vh] items-center justify-center p-4 bg-slate-50">
      <Card className="w-full max-w-md shadow-xl border-slate-100 rounded-2xl bg-white">
        
        <CardHeader className="pb-6">
          <CardTitle className="text-center text-3xl font-extrabold text-slate-900">
            Iniciar sesión
          </CardTitle>
        </CardHeader>

        <CardContent>

          {isError && (
            <Alert variant="destructive" className="mb-6 rounded-xl">
              <AlertDescription>
                Credenciales incorrectas o error de conexión.
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={submitLogin} className="space-y-5">
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-bold text-slate-700">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <Button 
              type="submit" 
              disabled={isPending}
              className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-md h-12 rounded-full shadow-md transition-all active:scale-[0.98]"
            >
              {isPending ? 'Ingresando...' : 'INGRESAR'}
            </Button>

          </form>
        </CardContent>

        <CardFooter className="flex justify-center border-t border-slate-100 p-6 mt-2">
          <div className="text-sm text-center text-slate-600">
            <span>¿No tiene cuenta? </span>
            <a
              href="/register"
              className="font-bold text-orange-500 hover:text-orange-600 hover:underline transition-colors"
            >
              Regístrese aquí
            </a>
          </div>
        </CardFooter>
        
      </Card>
    </div>
  );
};

export default Login;