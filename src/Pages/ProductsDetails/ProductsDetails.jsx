import { useLoaderData } from "react-router-dom";



const ProductsDetails = () => {
    
    const item = useLoaderData();
    console.log(item)
   
    return (
        <section className="pt-24">
            <h1>I am from product details</h1>
           
        </section>
    );
};

export default ProductsDetails;