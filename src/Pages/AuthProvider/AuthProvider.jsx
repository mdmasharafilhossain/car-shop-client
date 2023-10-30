import { getAuth } from "firebase/auth";
import { createContext } from "react";
import app from "../FireBase/FireBAse";

export const AuthContext = createContext();
const auth = getAuth(app);




const AuthProvider = ({children}) => {

    const AuthInfo = {

    }
    
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;