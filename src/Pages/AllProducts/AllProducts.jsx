import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Rating } from "@smastrom/react-rating";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";


const AllProducts = () => {

    const axiosPublic = useAxiosPublic();

    const { data: products, refetch } = useQuery({
        queryKey: ['totalProducts'],

        queryFn: async () => {
            const data = await axiosPublic.get('/totalProducts');
            // console.log(data.data);
            return data.data.slice(0, 12);
        }, initialData: []
    })







    return (
        <section className="pt-24">
            <p>{products.length}</p>
            <div  className="px-4">


                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                    {
                        products.map((item, index) => <div key={item._id} className="flex flex-col bg-gray-100 pb-8 border-[1px] border-slate-100 hover:shadow-xl">

                            <h4 >
                                <img alt="" className="object-center object-cover w-full lg:h-96 h-96 dark:bg-gray-500" src={item.productImage} />
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
                                    <span className="text-base text-blue-500">{item.createdDate.slice(0, 10)}</span>

                                </div>






                            </div>








                        </div>)
                    }

                </div>

            </div>

            <div className="py-8 px-4">
                <button className="relative  items-center justify-start inline-block px-4 py-2 overflow-hidden font-medium transition-all hover:bg-gray-200 rounded-full bg-blue-500 group">
                    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all  border-gray-200 rounded-full"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600 flex justify-center items-center gap-2">Show All<span><FaArrowRight></FaArrowRight></span></span>
                </button>
            </div>

        </section >
    );
};

export default AllProducts;