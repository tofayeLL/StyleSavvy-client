import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";



const ProductsDetails = () => {

    const products = useLoaderData();
    const { _id, productName, productImage, brandName, description, price, category, ratings, createdDate } = products;

    return (
        <section className="pt-24">


            <section className=" text-gray-100">
                <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12  rounded-md">


                        <div className="w-full  rounded lg:col-span-5  bg-white" >
                            <img src={productImage} alt="" className="w-full h-[80vh] object-cover object-center rounded-sm" />
                        </div>


                        <div className="p-6  lg:col-span-5 max-w-full mx-auto  ">


                            <div className="space-y-4 divide-y divide-black text-gray-900 ">

                                <div className="space-y-6">

                                    <h3 className="text-xl font-semibold sm:text-4xl">{productName}</h3>

                                    <div className="py-3 space-y-2">
                                      
                                        <p className="text-lg font-semibold">{description}</p>

                                    </div>

                                    <p className="flex  items-center gap-3"> <span> <Rating
                                        style={{ maxWidth: 120 }}
                                        value={ratings}
                                        readOnly
                                    /></span> <span className="text-2xl font-semibold">{ratings}</span></p>


                                    <p className="text-xl font-semibold pb-4">Brand: <span className="text-blue-700">{brandName}</span></p>
                                </div>

                                <div className="py-4">

                                    <p className="text-5xl  font-medium flex items-center"><BsCurrencyDollar></BsCurrencyDollar>{price}</p>

                                </div>





                                <div className="pt-32 ">
                                    <Link><button className="relative inline-flex items-center justify-center px-10 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                        <span className="absolute inset-0 w-full h-full bg-cyan-100 rounded-md "></span>
                                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-blue-500 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                        <span className="relative lg:text-2xl text-xl  font-semibold text-cyan-800 transition-colors duration-200 ease-in-out delay-100 group-hover:text-cyan-800 flex gap-2 justify-center items-center">Book now </span>
                                    </button></Link>

                                </div>


                            </div>


                        </div>

                    </div>


                </div>
            </section>


        </section>
    );
};

export default ProductsDetails;