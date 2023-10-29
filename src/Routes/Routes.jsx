import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home/Home";

import OrderCard from "../Pages/OrderCard/OrderCard";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/cheakout/:id",
          element: <OrderCard></OrderCard>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;

