import { Outlet } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Menu from "../components/menu/Menu"
import NavBar from "../components/navbar/NavBar"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import ToasterContext from "../context/ToastContext"
const Layout = () => {
  // Create a client
  const queryClient = new QueryClient()

  return (
    <div className="main">
      <NavBar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <QueryClientProvider client={queryClient} >
            <ToasterContext />
            <Outlet />
          </QueryClientProvider>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Layout
