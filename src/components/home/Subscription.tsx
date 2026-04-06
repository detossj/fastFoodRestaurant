import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//import Config from "../Config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MySwal = withReactContent(Swal);

const Subscription = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      //await Config.enviarCorreo({ email });

      MySwal.fire({
        title: "¡Ya casi es tuyo!",
        html: `Hemos enviado un enlace a <b>${email}</b> para <b>activar tu cuenta</b> y reclamar tu descuento.`,
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
        imageWidth: 100,
        imageAlt: "Hamburguesa",
        confirmButtonText: "¡Entendido!",
        confirmButtonColor: "#f97c2f", 
        backdrop: `
          rgba(0,0,123,0.1)
          url("/images/confetti.gif") 
          left top
          no-repeat
        `,
      });
      setEmail("");
    } catch (error) {
      console.error(error);

      MySwal.fire({
        icon: "error",
        title: "Ups...",
        text: "Hubo un problema enviando el correo. Intenta nuevamente.",
        confirmButtonColor: "#f97c2f",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-12 md:py-16 px-6 md:px-0 bg-[#fff6ee]">
      <div className="container mx-auto max-w-3xl text-center">
        
        <h3 className="text-2xl md:text-4xl font-extrabold mb-4 text-gray-900">
          ¿No tienes cuenta? ¡Créate una ahora!
        </h3>

        <p className="mb-8 mx-auto text-gray-600 text-sm md:text-base">
          Únete al club y acumula puntos con cada pedido. ¡Tu primera
          hamburguesa podría salirte <strong className="text-gray-900">gratis</strong>!
        </p>

        <form
          className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full mt-5"
          onSubmit={handleRegister}
        >
          <Input
            type="email"
            placeholder="Ingresa tu correo para empezar"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-full sm:max-w-[400px] bg-white border border-gray-300 shadow-sm focus-visible:ring-2 focus-visible:ring-[#f97c2f] focus-visible:border-transparent h-12 px-4 rounded-xl text-base text-gray-800 placeholder:text-gray-400"
          />

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto h-12 px-8 bg-[#f97c2f] hover:bg-[#fa6306] text-white font-bold rounded-xl shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:opacity-70"
          >
            {isLoading ? "Enviando..." : "Crear mi cuenta"}
          </Button>
        </form>

        <div className="mt-8">
          <small className="text-gray-500 text-sm md:text-base">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/login"
              className="text-[#f97c2f] font-bold hover:text-[#fa6306] hover:underline transition-colors"
            >
              Inicia sesión aquí
            </Link>
          </small>
        </div>

      </div>
    </div>
  );
};

export default Subscription;