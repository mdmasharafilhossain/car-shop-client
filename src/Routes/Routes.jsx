import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home/Home";

import OrderCard from "../Pages/OrderCard/OrderCard";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "../Pages/PrivateRoutes/PrivateRoutes";
import BookPage from "../Pages/BookPage/BookPage";

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
          element: <PrivateRoutes><OrderCard></OrderCard></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        },
        {
          path:"/bookings",
          element:<PrivateRoutes><BookPage></BookPage></PrivateRoutes>,
        }
      ]
    },
  ]);

  export default router;

