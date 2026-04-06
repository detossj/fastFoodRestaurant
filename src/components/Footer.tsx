import React from "react";
import { Phone } from "lucide-react";
import logo from "../assets/images/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-[#eaefea] py-12">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-12 gap-y-10 gap-x-4 mb-8 text-center md:text-left">
          
          <div className="col-span-12 lg:col-span-3 flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Logo Fast Food Restaurant"
              className="mb-4 h-[70px] w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
            />
            <p className="text-muted-foreground mb-3 text-sm">Síguenos en:</p>

            <div className="flex gap-4 mt-3">
              <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram" onClick={handleLinkClick} className="text-foreground transition-all duration-300 hover:text-[#FA7C2D] hover:-translate-y-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook" onClick={handleLinkClick} className="text-foreground transition-all duration-300 hover:text-[#FA7C2D] hover:-translate-y-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="TikTok" onClick={handleLinkClick} className="text-foreground transition-all duration-300 hover:text-[#FA7C2D] hover:-translate-y-1">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.34-2.87 5.68-1.74 1.37-4.04 1.83-6.17 1.34-2.16-.5-3.95-2.01-4.81-4.07-.84-1.99-.75-4.32.24-6.22 1.05-2 3.02-3.37 5.25-3.61.13-.01.27-.02.4-.02v4.06c-1.07.13-2.14.7-2.78 1.57-.6.82-.82 1.91-.56 2.89.24.96.96 1.74 1.88 2.08.9.33 1.94.24 2.75-.24.8-.48 1.3-1.34 1.41-2.26.11-.96.06-1.93.07-2.9v-15.1h.01z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-span-4 lg:col-span-3 flex flex-col items-center md:items-start">
            <h5 className="font-bold mb-4">FAST FOOD</h5>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-muted-foreground transition-all duration-200 hover:text-[#FA7C2D] hover:pl-1 inline-block" onClick={handleLinkClick}>Acerca de nosotros</a></li>
              <li><a href="#" className="text-muted-foreground transition-all duration-200 hover:text-[#FA7C2D] hover:pl-1 inline-block" onClick={handleLinkClick}>Ingredientes</a></li>
              <li><a href="#s" className="text-muted-foreground transition-all duration-200 hover:text-[#FA7C2D] hover:pl-1 inline-block" onClick={handleLinkClick}>Nuestros locales</a></li>
              <li><a href="#" className="text-muted-foreground transition-all duration-200 hover:text-[#FA7C2D] hover:pl-1 inline-block" onClick={handleLinkClick}>Blog</a></li>
            </ul>
          </div>

          <div className="col-span-4 lg:col-span-3 flex flex-col items-center md:items-start">
            <h5 className="font-bold mb-4">AYUDA</h5>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-muted-foreground transition-all duration-200 hover:text-[#FA7C2D] hover:pl-1 inline-block" onClick={handleLinkClick}>Preguntas frecuentes</a></li>
              <li><a href="#" className="text-muted-foreground transition-all duration-200 hover:text-[#FA7C2D] hover:pl-1 inline-block" onClick={handleLinkClick}>Contacto</a></li>
              <li className="text-muted-foreground flex items-center mt-1">
                <Phone className="w-4 h-4 me-2" />
                +56 111 111 1111
              </li>
            </ul>
          </div>

          <div className="col-span-4 lg:col-span-3 flex flex-col items-center md:items-start">
            <h5 className="font-bold mb-4">LEGAL</h5>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-muted-foreground transition-all duration-200 hover:text-[#FA7C2D] hover:pl-1 inline-block" onClick={handleLinkClick}>Términos y Condiciones</a></li>
              <li><a href="#" className="text-muted-foreground transition-all duration-200 hover:text-[#FA7C2D] hover:pl-1 inline-block" onClick={handleLinkClick}>Política de privacidad</a></li>
              <li><a href="#" className="text-muted-foreground transition-all duration-200 hover:text-[#FA7C2D] hover:pl-1 inline-block" onClick={handleLinkClick}>Tratamiento de datos</a></li>
            </ul>
          </div>

        </div>

        <div className="text-center pt-6 border-t border-border px-2">
          <p className="mb-0 text-muted-foreground text-sm">
            © {currentYear} Fast Food Restaurant. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;