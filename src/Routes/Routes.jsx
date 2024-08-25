import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProtectedRoutes from "./ProtectedRoutes";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Products from "../Pages/Products/Products";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/productDetails/:id',
                element: <ProductsDetails></ProductsDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/productDetails/${params.id}`)
            },
            {
                path: '/allProducts',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/products',
                element: <ProtectedRoutes><Products></Products></ProtectedRoutes>
            },
            { path: '/login', element: <Login></Login> },
            { path: '/signUp', element: <SignUp></SignUp> },
        ]
    },


   


]);




