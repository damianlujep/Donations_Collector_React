import React from 'react';
import HomeHeader from "./header/HomeHeader";
import HomeMainSection from "./main-section/HomeMainSection";

const Home = () => {
    return (
        <>
            <section
                className="main-section-start"
                id="start"
            >
                <div
                    className="main-section-img"
                />
                <div>
                    <HomeHeader/>
                    <HomeMainSection/>
                </div>
            </section>
        </>
    );
};

export default Home;