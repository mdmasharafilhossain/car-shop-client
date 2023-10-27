import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home/Home";
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
          element: <BookPage></BookPage>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;

