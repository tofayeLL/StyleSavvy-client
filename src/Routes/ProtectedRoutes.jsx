import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";



const ProtectedRoutes = ({ children }) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (user) {
        return children;
    }


    return navigate('/login');
};

export default ProtectedRoutes;