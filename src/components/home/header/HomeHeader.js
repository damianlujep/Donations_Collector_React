import React from 'react';
import HomeHeaderActionButtons from "./HomeHeaderActionButtons";
import HomeHeaderNav from "./HomeHeaderNav";
import {useAuth} from "../../../contexts/AuthContext";
import LoggedInActionButtons from "./LoggedInActionButtons";

const HomeHeader = () => {
    const { currentUser } = useAuth();

    return (
        <section
            className="header-section-home"
        >
            {!currentUser ? <HomeHeaderActionButtons/> : <LoggedInActionButtons/>}
            <HomeHeaderNav/>
        </section>
    );
};

export default HomeHeader;