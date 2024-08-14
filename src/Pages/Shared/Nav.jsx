import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





const Nav = () => {


  const {logOutUser} = useAuth();

    const handleLogout = () => {

        logOutUser()
        .then(()=> {
            // console.log("logout successfully");
            toast.success("Logout Successfully");



        })
        .catch((error) => {
            // console.log(error.message);
            toast.error(error.message);

        })

        
    }


    return (
        <section>



            <div className="navbar fixed z-10  bg-opacity-20  text-white  bg-red-500   py-2 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul>






                        </ul>
                    </div>
                    <a className="btn btn-ghost lg:block hidden text-xl "><img src="" alt="" className="w-32 h-11" /></a>

                </div>
                <a className="btn btn-ghost text-xl text-white  lg:hidden navbar-end "><img src="" alt="" className="w-24 h-8" /></a>

                <div className="lg:navbar-end hidden lg:flex ">

                    <div className="lg:space-x-3 space-x-2">
                        <Link to={'/login'}><button className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-cyan-500 rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-cyan-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-white transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Log in</span>
                        </button></Link>


                        <Link to={'/signUp'}><button className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-cyan-500 rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-cyan-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-white transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Signup</span>
                        </button></Link>

                        <Link to={'/signUp'}><button onClick={handleLogout} className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-cyan-500 rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-cyan-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-white transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Logout</span>
                        </button></Link>

                    </div>

                </div>

            </div>





        </section>
    );
};

export default Nav;