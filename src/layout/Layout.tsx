import { Outlet } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Menu from "../components/menu/Menu"
import NavBar from "../components/navbar/NavBar"

const Layout = () => {
  return (
    <div className="main">
      <NavBar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Layout
