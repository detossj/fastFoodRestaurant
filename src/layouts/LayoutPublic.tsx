import { Outlet } from "@tanstack/react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Topbar from "../components/Topbar"

const LayoutPublic = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}

export default LayoutPublic
