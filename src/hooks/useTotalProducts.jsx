import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useTotalProducts = () => {

    const axiosPublic = useAxiosPublic();

    
 const [totalProducts, setTotalProducts] = useState([]);
 const [filterProducts, setFilterProducts] = useState([]);





    const { data: productsAll, refetch } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allProducts')
            // console.log(res.data);

            setTotalProducts(res.data);
            setFilterProducts(res.data);

            return res.data;

        }, initialData: []

    })
    return { setFilterProducts, refetch, filterProducts, totalProducts }
};

export default useTotalProducts;