import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home"
import Users from "./pages/users/Users"
import Products from "./pages/products/Products"
import Layout from "./layout/Layout"
import Login from "./pages/login/Login"
import "./styles/global.scss"
import User from "./pages/user/User"
import Product from "./pages/product/Product"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/user/:userId",
          element: <User />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/product/:productId",
          element: <Product />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
