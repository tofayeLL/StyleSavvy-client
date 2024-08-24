import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProtectedRoutes from "./ProtectedRoutes";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <ProtectedRoutes><Home></Home></ProtectedRoutes>
            },
        ]
    },


    { path: '/login', element: <Login></Login> },
    { path: '/signUp', element: <SignUp></SignUp> },


]);




