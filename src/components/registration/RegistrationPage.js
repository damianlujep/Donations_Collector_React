import React from 'react';
import HomeHeader from "../home/header/HomeHeader";
import RegistrationForm from "./RegistrationForm";
import {AuthProvider} from "../../contexts/AuthContext";

const RegistrationPage = () => {
    return (
        <AuthProvider>
            <HomeHeader/>
            <RegistrationForm/>
        </AuthProvider>
    );
};

export default RegistrationPage;