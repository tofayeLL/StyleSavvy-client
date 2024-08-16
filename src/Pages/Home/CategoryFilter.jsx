import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { BsCurrencyDollar } from 'react-icons/bs';

const CategoryFilter = ({ item }) => {
    console.log(item);
    return (
        <section>

{/* 
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                 <div key={item._id} className="flex flex-col bg-gray-100 pb-8 border-[1px] border-slate-100 hover:shadow-xl">

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








                    </div>
               

            </div>
 */}

 


        </section>
    );
};

export default CategoryFilter;