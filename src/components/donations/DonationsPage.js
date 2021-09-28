import React from 'react';
import {useAuth} from "../../contexts/AuthContext";
import HomeHeader from "../home/header/HomeHeader";

const DonationsPage = () => {
    const { currentUser } = useAuth();

    return (
        <div>
            <HomeHeader/>
            <h1>Tu będzie strona do oddania rzeczy</h1>
        </div>
    );
};

export default DonationsPage;