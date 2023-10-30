import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../FireBase/FireBAse";

export const AuthContext = createContext();
const auth = getAuth(app);




const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] =  useState(true);


    const createUser = (email,password) =>{
        setLoading(true);
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const SignIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const LogOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("user changed",currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[]);
    
    const AuthInfo = {
        user,
        loading,
        createUser,
        SignIn,
        LogOut,
    }
    
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;