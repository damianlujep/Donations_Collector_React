import React from 'react';
import HomeHeader from "./header/HomeHeader";
import HomeMainSection from "./main-section/HomeMainSection";
import HomeThreeColumns from "./HomeThreeColumns";

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
            <section
                id="about-it"
            >
                <HomeThreeColumns/>
            </section>
        </>
    );
};

export default Home;