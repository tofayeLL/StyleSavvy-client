import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";









const SignUp = () => {
    const [showPass, setShowPass] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        console.log(data);

    }








    return (
        <section>


            <div className="flex flex-col  justify-center items-center lg:py-20 py-12 bg-[linear-gradient(45deg,rgba(0,0,0,0.2),rgba(0,0,0,0.3)),url(https://i.ibb.co/fH0S3yh/parcel5.jpg)] bg-center bg-cover object-cover object-center  ">




                <div className="card shrink-0 w-full max-w-lg py-6 shadow-2xl bg-base-100 my-8 " data-aos="zoom-in-down">
                    <div className=" mx-auto text-gray-500">
                        <h1 className="lg:text-4xl text-xl font-bold ">Create your account</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">User Name</span>
                            </label>
                            <input type="text"   {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-400'>Name field is required</span>}

                        </div>



                        <div className="form-control">
                            <label className="label font-semibold">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email"    {...register("email", { required: true })} name="email" placeholder="Your Email" className="input input-bordered" />
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
                            <input className="btn text-white rounded-full hover:bg-gray-400  text-xl w-full bg-gray-600" type="submit" value="Sign up" />

                        </div>
                        <div className="flex flex-col w-full border-opacity-50 ">

                            <div className="divider">Login with social accounts</div>

                        </div>

                        <div className=" w-full mx-auto" >

                            <button /* onClick={handleGoogleLogin} */ className="btn w-full  rounded-full border-2 border-black"><FaGoogle className="text-2xl text-green-400" ></FaGoogle> <span className="text-lg">Continue With Google</span></button>

                        </div>




                        <div className="text-center " >
                            <p className="font-medium mt-6 lg:text-base text-sm mr-2">have an account ?  Please <Link to={'/login'} className="btn-active text-blue-600 btn-link">Login</Link></p>
                        </div>

                    </form>
                </div>








            </div>





        </section>
    );
};

export default SignUp;