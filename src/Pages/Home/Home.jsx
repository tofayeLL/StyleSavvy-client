import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { BsCurrencyDollar } from "react-icons/bs";


const Home = () => {

    const axiosPublic = useAxiosPublic();

    const { data: allProducts } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products')
            // console.log(res.data);
            return res.data;
        }, initialData: []
    })







    return (
        <section className="py-20 ">

            <div className="bg-slate-200 py-4 px-10">
                <div className="flex justify-between items-center ">

                    <div>
                        <h4>All Categories</h4>
                    </div>
                    <div>
                        <h4>search</h4>
                    </div>
                    <div>
                        <h4>Sort</h4>
                    </div>

                </div>

            </div>


            {/*All  products */}
            <h1>{allProducts.length}</h1>

            <div className="my-16 px-10 ">



                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                    {
                        allProducts.map((item, index) => <div key={item._id} className="flex flex-col bg-gray-100 pb-8 b border-[1px] border-slate-100 hover:shadow-xl">

                            <h4 rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
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
                                    <span className="text-base">{item.createdDate}</span>
                                </div>

                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span className="flex justify-center items-center text-2xl text-black font-semibold"><BsCurrencyDollar></BsCurrencyDollar> {item.price}</span>
                                    <span className="text-base text-blue-500">{item.category}</span>
                                </div>






                            </div>








                        </div>)
                    }

                </div>








            </div>

















        </section>
    );
};

export default Home;