import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/NavBAr/Navbar";


const MainLayout = () => {
    return (
        <div>
         <Navbar></Navbar>
         <Outlet></Outlet> 
         <Footer></Footer>  
        </div>
    );
};

export default MainLayout;