import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { CirclesWithBar } from "react-loader-spinner";
import { ScaleLoader } from "react-spinners";



const ProtectedRoutes = ({ children }) => {
    const { user, loading } = useAuth();

    const location = useLocation();


    if (loading) {
        return <div className="flex flex-col justify-center min-h-screen items-center ">
          
            <ScaleLoader
              
                height={86}
                loading
                radius={10}
                speedMultiplier={1}
                width={8}
            />

           

        </div>
    }




    if (user) {
        return children;
    }


    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default ProtectedRoutes;