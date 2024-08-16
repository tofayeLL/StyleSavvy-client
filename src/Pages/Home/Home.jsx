import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { BsCurrencyDollar } from "react-icons/bs";
import { useState } from "react";



const Home = () => {

    const axiosPublic = useAxiosPublic();

    const [currentPage, setCurrentPage] = useState(1); // Keep track of the current page
    const [limit] = useState(8); // Number of products per page

    const { data, isLoading, isError } = useQuery({
        queryKey: ['products', currentPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products?page=${currentPage}&limit=${limit}`);
            return res.data;
        }, initialData: [],
        keepPreviousData: true, // Retain data from the previous page while loading new data
    });

    const { products: allProducts = [], totalPages } = data || {};

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };





    return (
        <section className="py-20 ">

            <div className="bg-slate-200 py-2 px-10">

                <div className="text-center bg-slate-200 ">
                    <div className="lg:max-w-xl max-w-sm mx-auto  ">
                        <form >
                            <label className="input input-bordered flex rounded-full items-center  ">
                                <input type="text" name="search" className="grow " placeholder="Search for anything" />
                                <button className="badge badge-info py-2.5 text-black  px-2">search</button>
                            </label>
                        </form>
                    </div>

                </div>





            </div>


            {/*All  products */}
            <h1>{allProducts.length}</h1>



            <div className="my-16 px-10 ">



                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                    {
                        allProducts.map((item, index) => <div key={item._id} className="flex flex-col bg-gray-100 pb-8 border-[1px] border-slate-100 hover:shadow-xl">

                            <h4 >
                                <img alt="" className="object-center object-cover w-full h-52 dark:bg-gray-500" src={item.productImage} />
                            </h4>

                            <div className="flex flex-col flex-1 p-4">
                                <p className="text-lg">{item.productName}</p>

                                <p className="text-xs tracking-wider uppercase hover:underline text-blue-500">{item.brandName}</p>

                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{item.description}</h3>

                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span> <Rating
                                        style={{ maxWidth: 100 }}
                                        value={item.ratings}
                                        readOnly
                                    /></span>
                                    <span className="text-base text-blue-500">{item.category}</span>

                                </div>

                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span className="flex justify-center items-center text-2xl text-black font-semibold"><BsCurrencyDollar></BsCurrencyDollar> {item.price}</span>
                                    <span className="text-base text-blue-500">{item.createdDate}</span>

                                </div>






                            </div>








                        </div>)
                    }

                </div>





                {/* Pagination */}
                <div className="flex justify-center mt-10">
                    <nav>
                        <ul className="flex items-center space-x-2">
                            <li>
                                <button
                                    className="px-3 py-1 rounded bg-gray-200"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                            </li>
                            {[...Array(totalPages)].map((_, index) => (
                                <li key={index}>
                                    <button
                                        className={`px-3 py-1 rounded ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    className="px-3 py-1 rounded bg-gray-200"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>



            </div>




















        </section >
    );
};

export default Home;