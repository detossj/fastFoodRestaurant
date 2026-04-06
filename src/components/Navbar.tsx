import React, { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingCart, Menu, X } from "lucide-react";
import logo from "../assets/images/logo.webp";
//import Cart from "./Cart";
//import { useCartStore } from "../store/cartStore";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // const totalItems = useCartStore((state) => state.totalItems);

  // Detectar Scroll para mostrar/ocultar el logo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar clics fuera del menú móvil para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const showCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCartOpen(true);
  };

  // Clases base compartidas para evitar repetición en los Links
  const baseLinkClasses = "px-3 py-1.5 rounded-[15px] transition-colors duration-200 cursor-pointer block lg:inline-block text-center";

  // Objeto de configuración para TanStack Router Link
  const activeProps = { className: "bg-[#f97c2f] text-white" };
  const inactiveProps = { className: "text-foreground hover:bg-gray-200 hover:text-[#fa6306]" };

  return (
    <div className="sticky top-0 z-[999] bg-background border-b border-border md:p-3">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap items-center justify-between py-2 lg:py-0">
          
          <div className="flex-shrink-0 w-[50px]">
            {scrolled && (
              <img
                src={logo}
                alt="Logo"
                className="h-[50px] w-auto cursor-pointer object-contain transition-opacity duration-300"
              />
            )}
          </div>

          <div className="flex items-center gap-3 lg:order-last">
            
            <button
              className="flex items-center gap-1.5 bg-[#f97c2f] border border-[#f97c2f] rounded-[10px] py-2 px-3 text-white transition-transform hover:scale-105 active:scale-95"
              onClick={showCart}
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="w-[22px] h-[22px]" />
              {/* <span className="text-lg font-medium leading-none">{totalItems}</span> */}
            </button>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-foreground focus:outline-none"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          <div
            ref={menuRef}
            className={`w-full lg:w-auto lg:flex-grow lg:flex lg:items-center lg:justify-center overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100 lg:mt-0"
            }`}
          >
            <ul
              className={`flex flex-col lg:flex-row gap-2 lg:gap-1 w-full lg:w-auto transition-transform duration-300 ${
                scrolled ? "lg:ml-5" : ""
              }`}
            >
              <li>
                <Link to="/" onClick={closeMenu} className={baseLinkClasses} activeProps={activeProps} inactiveProps={inactiveProps}>
                  INICIO
                </Link>
              </li>
              <li>
                <Link to="/promociones" onClick={closeMenu} className={baseLinkClasses} activeProps={activeProps} inactiveProps={inactiveProps}>
                  PROMOCIONES
                </Link>
              </li>
              <li>
                <Link to="/pizzas" onClick={closeMenu} className={baseLinkClasses} activeProps={activeProps} inactiveProps={inactiveProps}>
                  PIZZAS
                </Link>
              </li>
              <li>
                <Link to="/hamburguesas" onClick={closeMenu} className={baseLinkClasses} activeProps={activeProps} inactiveProps={inactiveProps}>
                  HAMBURGUESAS
                </Link>
              </li>
              <li>
                <Link to="/acompanamientos" onClick={closeMenu} className={baseLinkClasses} activeProps={activeProps} inactiveProps={inactiveProps}>
                  ACOMPAÑAMIENTOS
                </Link>
              </li>
              <li>
                <Link to="/bebidas" onClick={closeMenu} className={baseLinkClasses} activeProps={activeProps} inactiveProps={inactiveProps}>
                  BEBIDAS
                </Link>
              </li>
              <li>
                <Link to="/postres" onClick={closeMenu} className={baseLinkClasses} activeProps={activeProps} inactiveProps={inactiveProps}>
                  POSTRES
                </Link>
              </li>
              <li>
                <Link to="/extras" onClick={closeMenu} className={baseLinkClasses} activeProps={activeProps} inactiveProps={inactiveProps}>
                  EXTRAS
                </Link>
              </li>
            </ul>
          </div>
          
        </nav>
      </div>

      {/* {cartOpen && <Cart onClose={() => setCartOpen(false)} />} */}
    </div>
  );
};

export default Navbar;