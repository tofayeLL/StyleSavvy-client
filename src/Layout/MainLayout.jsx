import { Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";
import Footer from "../Pages/Shared/Footer";


const MainLayout = () => {
    return (
       <section>
        <div>
            <Nav></Nav>
        </div>


        <div>
            <Outlet></Outlet>
        </div>


        <div>
            <Footer></Footer>
        </div>

       </section>
    );
};

export default MainLayout;