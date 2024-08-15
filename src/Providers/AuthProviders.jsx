import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";





export const AuthContext = createContext(null)

const auth = getAuth(app);


// google provider
const provider = new GoogleAuthProvider();





const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    // register user or create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // Login user
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Log out
    const logOutUser = () => {
        return signOut(auth);
    }


    // Google Login
    const googleLogin = () => {
       return signInWithPopup(auth, provider);
    }







    const authInfo = {
        user,
        createUser,
        loading,
        logInUser,
        googleLogin,
        logOutUser
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Observe  current user:', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {

            unSubscribe

        }

    }, [])




    return (
        <AuthContext.Provider value={authInfo}>

            {
                children
            }

        </AuthContext.Provider>
    );
};

export default AuthProviders;

