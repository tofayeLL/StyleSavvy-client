import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { BsCurrencyDollar } from "react-icons/bs";
import { useEffect, useState } from "react";
import useTotalProducts from "../../hooks/useTotalProducts";



const Home = () => {

    const axiosPublic = useAxiosPublic();

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');


    const [searchText, setSearchText] = useState('');

    const [sortProduct, setSortProduct] = useState('');

    // for Keep tracking current page
    const [currentPage, setCurrentPage] = useState(1);

    // Number of products per page
    const [limit] = useState(8);


    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['products', currentPage, searchText],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products?page=${currentPage}&limit=${limit}&search=${searchText}&sort=${sortProduct}&category=${selectedCategory}&brand=${selectedBrand}`);
            return res.data;

        }, initialData: [],

        // use this for when refetch data for the new page, but the data from the previous page will remain visible until the new data is ready
        keepPreviousData: true,
    });

    const { products: allProducts = [], totalPages } = data || {};



    // for Refetch data whenever sortProduct or searchText or filter product changes
    useEffect(() => {
        refetch();
    }, [sortProduct, searchText, currentPage, selectedCategory, selectedBrand, refetch]);


    // page change for pagination
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    // search text
    const handleSearch = (event) => {
        event.preventDefault();

        // reset page for new search
        setCurrentPage(1);
    };

    // sort product depends on price and date
    const handleSort = (sort) => {
        setSortProduct(sort);

        // reset page for new sort
        setCurrentPage(1);
    };


    // filter for category
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);

        // reset brand when category will change
        setSelectedBrand('');

        setCurrentPage(1);
    };


    // filter for brand
    const handleBrandSelect = (brand) => {
        setSelectedBrand(brand);
        setCurrentPage(1);
    };







    return (
        <section className="py-20 ">
            {/* <h1>{totalProducts.length}</h1> */}


            {/* search functionality implement  */}
            <div className="bg-slate-200 py-2 px-10">

                <div className="text-center bg-slate-200 ">
                    <div className="lg:max-w-xl max-w-sm mx-auto  ">
                        <form onSubmit={handleSearch}>
                            <label className="input input-bordered flex rounded-full items-center  ">
                                <input type="text" name="search" className="grow " placeholder="Search any product" value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                                <button className="badge badge-info py-2.5 text-black  px-2">search</button>
                            </label>
                        </form>
                    </div>

                </div>
            </div>




            <div className="flex   items-center px-10">

                {/* price low and high and date newest sorting  */}
                <details className="dropdown ">
                    <summary className="m-1 rounded-full cursor-pointer p-2 text-lg border-2 border-gray-600 "> Sorting</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-40">
                        <li><a onClick={() => handleSort('priceAsc')}>Low to High</a></li>
                        <li><a onClick={() => handleSort('priceDesc')}>High to Low</a></li>
                        <li><a onClick={() => handleSort('dateDesc')}>Date Newest First</a></li>
                    </ul>
                </details>



                {/* categorization */}
                <details className="dropdown">
                    <summary className="m-1 rounded-full cursor-pointer p-2 text-lg border-2 border-gray-600">Categorization</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-40">

                        <li className="relative group">
                            <a className="cursor-pointer" onClick={() => handleCategorySelect('Shirt')}>Shirt</a>
                            <ul className="absolute top-0 left-[87%] hidden group-hover:block group-focus-within:block p-2 shadow bg-white rounded-box w-40">
                                <li><a onClick={() => handleBrandSelect('Zara')}>Zara</a></li>
                                <li><a onClick={() => handleBrandSelect('Twelve')}>Twelve</a></li>
                            </ul>
                        </li>

                        <li className="relative group">
                            <a onClick={() => handleCategorySelect('T-shirt')}>T-shirt</a>
                            <ul className="absolute top-0 left-[87%] hidden group-hover:block group-focus-within:block p-2 shadow bg-white rounded-box w-40">
                                <li><a onClick={() => handleBrandSelect('Supreme')}>Supreme</a></li>
                                <li><a onClick={() => handleBrandSelect('Tanjim')}>Tanjim</a></li>
                            </ul>
                        </li>

                        <li className="relative group">
                            <a onClick={() => handleCategorySelect('Shoes')}>Shoes</a>

                            <ul className="absolute top-0 left-[87%] hidden group-hover:block group-focus-within:block p-2 shadow bg-white rounded-box w-40">
                                <li><a onClick={() => handleBrandSelect('Adidas')}>Adidas</a></li>
                                <li><a onClick={() => handleBrandSelect('Nike')}>Nike</a></li>
                            </ul>
                        </li>

                        <li className="relative group">

                            <a className="cursor-pointer" onClick={() => handleCategorySelect('Watch')}>Watch</a>

                            <ul className="absolute top-0 left-[87%] hidden group-hover:block group-focus-within:block p-2 shadow bg-white rounded-box w-40">
                                <li><a onClick={() => handleBrandSelect('Casio')}>Casio</a></li>
                                <li><a onClick={() => handleBrandSelect('Chanel')}>Chanel</a></li>
                            </ul>
                        </li>

                    </ul>
                </details>







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