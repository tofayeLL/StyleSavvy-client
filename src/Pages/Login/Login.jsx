import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin from "../../Components/SocialLogin/GoogleLogin";


const Login = () => {

    const [showPass, setShowPass] = useState(false);

    const {logInUser} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
       

        // login user authentication
        logInUser(data.email, data.password)
        .then((result) => {
            // console.log(result.user);
            toast.success("Login Successfully");
            reset();
            navigate(from, { replace: true });
            
        })
        .catch((error) => {
            // console.log(error.message);
            toast.error(error.message.replace('auth/', 'userEmail or password-').replace('-credential', ''));
        })



    }







    return (
        <section>


            <div className="flex flex-col  justify-center items-center lg:py-20 py-12 bg-[linear-gradient(45deg,rgba(0,0,0,0.2),rgba(0,0,0,0.3)),url(https://i.ibb.co/YLzV3SH/bg.jpg)] bg-center bg-cover object-cover object-center  ">




                <div className="card shrink-0 w-full max-w-lg py-6 shadow-2xl bg-base-100 my-8 " data-aos="zoom-in-down">
                    <div className=" mx-auto text-gray-500">
                        <h1 className="lg:text-4xl text-xl font-bold ">Login to your account</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">

                    

                        <div className="form-control">
                            <label className="label font-semibold">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" required   {...register("email", { required: true })} name="email" placeholder="Your Email" className="input input-bordered" />
                            {errors.email && <span className='text-red-400'>Email field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label font-semibold">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">


                                <input type={showPass ? 'text' : 'password'}    {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/


                                })} name="password" placeholder="password" className="input input-bordered w-full" />

                                {errors.password?.type === 'required' && <span className='text-red-400'>Password field is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-400'>Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-400'>Password must be less 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-400'>Password must have one uppercase and one lowercase and one number,  one special characters</span>}

                                {/* eye icon or show password icon */}
                                <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-3">{showPass ? <FiEyeOff className="text-xl" ></FiEyeOff> : <FiEye className="text-xl"></FiEye>}</span>



                            </div>


                        </div>


                        <div className="form-control mt-6">
                            <input className="btn text-white rounded-full hover:bg-gray-400  text-xl w-full bg-gray-600" type="submit" value="Log In" />

                        </div>
                        <div className="flex flex-col w-full border-opacity-50 ">

                            <div className="divider">Login with social accounts</div>

                        </div>

                         {/* social login */}
                         <div>
                            <GoogleLogin></GoogleLogin>

                        </div>




                        <div className="text-center " >
                            <p className="font-medium mt-6 lg:text-base text-sm mr-2">Do not have an account ?  Please <Link to={'/signUp'} className="btn-active text-blue-600 btn-link">Signup</Link></p>
                        </div>

                    </form>
                </div>








            </div>

        </section>
    );
};

export default Login;