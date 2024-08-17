import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://style-savvy-server-three.vercel.app'
});


const useAxiosPublic = () => {

    return axiosPublic;
    
};



export default useAxiosPublic;