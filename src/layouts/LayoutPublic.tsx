import { Outlet } from "@tanstack/react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Topbar from "../components/Topbar"

const LayoutPublic = () => {

  return (
    <>
      <Topbar />
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

export default LayoutPublic
