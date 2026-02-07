import { NavLink, Outlet } from "react-router"
import Navbar from "./Navbar"
import Header from "./Header"

function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout