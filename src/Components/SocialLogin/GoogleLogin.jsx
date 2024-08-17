
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const GoogleLogin = () => {

    const { googleLogin } = useAuth();

    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        // console.log("click")

        googleLogin()
            .then((result) => {
                // console.log(result.user);
                toast.success("Login Successfully");
                navigate('/');
            })
            .catch((error) => {
               console.log(error.message);
            })
    }



    return (
        <section>

            <div className=" w-full mx-auto" >

                <button onClick={handleGoogleLogin} className="btn w-full  rounded-full border-2 border-black"><FaGoogle className="text-2xl text-green-400" ></FaGoogle> <span className="text-lg">Continue With Google</span></button>

            </div>
        </section>
    );
};

export default GoogleLogin;