import { Result } from "postcss";
import useAuth from "../../hooks/useAuth";


const GoogleLogin = () => {

    const { googleLogin } = useAuth();

    const handleGoogleLogin = () => {

        googleLogin()
            .then((result) => {
                console.log(result.user);
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