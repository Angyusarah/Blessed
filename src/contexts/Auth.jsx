import { createContext, useState } from "react";
import Cookies from 'js-cookie';

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
    const cookieValue = Cookies.get('myCookie');
    // console.log(cookieValue);

    const [admin, setAdmin] = useState(cookieValue !== undefined && cookieValue !== null ? JSON.parse(cookieValue) : false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')


    return <AuthContext.Provider value={{ admin, setAdmin, userName, setUserName, password, setPassword }}
    >{children}</AuthContext.Provider>;
}