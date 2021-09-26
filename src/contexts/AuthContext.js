import React, {createContext, useContext, useEffect, useState} from 'react';
import {auth} from "../firebase/firebase";

const AuthContext =  createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
    }, [])


    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
    );
}