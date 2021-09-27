import React from 'react';
import HomeHeader from "../home/header/HomeHeader";
import LoginForm from "./LoginForm";
import {AuthProvider} from "../../contexts/AuthContext";

const LoginPage = () => {
    return (
        <AuthProvider>
            <HomeHeader/>
            <LoginForm/>
        </AuthProvider>
    );
};

export default LoginPage;