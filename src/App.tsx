import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home"
import Users from "./pages/users/Users"
import Products from "./pages/products/Products"

const Layout = ()=>{
  return (
    <div className="main"></div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/users",
      element: <Users />
    },
    {
      path: "/products",
      element: <Products />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
