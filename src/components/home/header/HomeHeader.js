import React from 'react';
import HomeHeaderActionButtons from "./HomeHeaderActionButtons";
import HomeHeaderNav from "./HomeHeaderNav";

const HomeHeader = () => {
    return (
        <section
            className="header-section-home"
        >
            <HomeHeaderActionButtons/>
            <HomeHeaderNav/>
        </section>
    );
};

export default HomeHeader;