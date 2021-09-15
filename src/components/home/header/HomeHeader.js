import React from 'react';
import HeaderActionButtons from "./HeaderActionButtons";
import HeaderNav from "./HeaderNav";

const HomeHeader = () => {
    return (
        <section className="header-section">
            <HeaderActionButtons/>
            <HeaderNav/>
        </section>
    );
};

export default HomeHeader;