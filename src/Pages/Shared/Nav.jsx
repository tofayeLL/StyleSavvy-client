import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo/logo.png';





const Nav = () => {


    const { logOutUser, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {

        logOutUser()
            .then(() => {
                // console.log("logout successfully");
                toast.success("Logout Successfully");
                navigate('/login')



            })
            .catch((error) => {
                // console.log(error.message);
                toast.error(error.message);

            })


    }


    return (
        <section>



            <div className="navbar fixed z-10  bg-opacity-40  text-white  bg-[#0070dc] py-5">
                <div className="navbar-start">
                    
                    <a className="font-bold lg:text-4xl md:text-2xl text-xl flex items-center gap-2 "><span><img src={logo} alt="logo loading.." className="w-10  text-orange-600" /></span><span className="text-orange-600"><span className="text-white">Style</span>Savvy</span></a>

                </div>
              <Link to={'/allProducts'}>All products</Link>
               

                <div className="navbar-end">

                    {
                        user ?
                            <Link >
                                <button onClick={handleLogout} className="relative  items-center justify-start inline-block px-4 py-2 overflow-hidden font-medium transition-all hover:bg-white rounded-full bg-blue-500 group">
                                    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all  border-white rounded-full"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Logout</span>
                                </button>
                            </Link>



                            :


                            <div className="lg:space-x-3 space-x-2">


                                <Link to={'/login'}>
                                    <button className="relative  items-center justify-start inline-block px-4 py-2 overflow-hidden font-medium transition-all hover:bg-white rounded-full bg-blue-500 group">
                                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all  border-white rounded-full"></span>
                                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Login</span>
                                    </button>
                                </Link>


                                <Link to={'/signUp'}>
                                    <button className="relative  items-center justify-start inline-block px-4 py-2 overflow-hidden font-medium transition-all hover:bg-white rounded-full bg-blue-500 group">
                                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all  border-white rounded-full"></span>
                                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">signup</span>
                                    </button>
                                </Link>



                            </div>


                    }




                </div>

            </div>





        </section>
    );
};

export default Nav;