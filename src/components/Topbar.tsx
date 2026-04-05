import logo from "../assets/images/logo.webp"
import { Link, useLocation } from "@tanstack/react-router"
import { Pizza, Store, User, LogOut } from "lucide-react"
// Importamos tu futura store de Zustand
// import { useAuthStore } from "../stores/authStore" 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const TopBar = () => {
  // const { user, logout } = useAuthStore()
  
  // Usamos el hook de TanStack Router para saber en qué ruta estamos
  const pathname = useLocation({ select: (location) => location.pathname })

  const activeMenuPaths = [
    "/",
    "/acompanamientos",
    "/bebidas",
    "/pizzas",
    "/hamburguesas",
    "/postres",
    "/extras",
    "/promociones"
  ]

  const activeAuthPaths = ["/login", "/register"]
  const activePerfilPaths = ["/perfil", "/pedidos"]

  const isMenuActive = activeMenuPaths.includes(pathname)
  const isAuthActive = activeAuthPaths.includes(pathname)
  const isPerfilActive = activePerfilPaths.includes(pathname)


  const baseLinkClass = "flex items-center gap-2 transition-colors duration-200 cursor-pointer font-medium"
  const activeClass = "text-[#f97c2f]"
  const inactiveClass = "text-black hover:text-[#f97c2f]"

  return (
    <div className="py-2 border-b border-[#e5e5e5] bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center gap-3 md:gap-0">
        
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[70px]" />
        </Link>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          
          <Link
            to="/"
            className={`${baseLinkClass} ${isMenuActive ? activeClass : inactiveClass}`}
          >
            <Pizza size={20} /> MENÚ
          </Link>

          <Link
            to="/locales"
            className={`${baseLinkClass} ${pathname === '/locales' ? activeClass : inactiveClass}`}
          >
            <Store size={20} /> LOCALES
          </Link>

          {/* {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger 
                className={`${baseLinkClass} outline-none ${isPerfilActive ? activeClass : inactiveClass}`}
              >
                <User size={20} /> {user.name}
              </DropdownMenuTrigger>
              

              <DropdownMenuContent align="end" className="w-48">

                <DropdownMenuItem asChild>
                  <Link to="/perfil" className="cursor-pointer w-full">Perfil</Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild>
                  <Link to="/pedidos" className="cursor-pointer w-full">Pedidos</Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem 
                  onClick={logout} 
                  className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 mt-1"
                >
                  <LogOut size={16} className="mr-2" /> Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : ( */}
            <Link
              to="/login"
              className={`${baseLinkClass} ${isAuthActive ? activeClass : inactiveClass}`}
            >
              <User size={20} /> INGRESAR
            </Link>
          {/* )} */}

        </div>
      </div>
    </div>
  )
}

export default TopBar