import React from 'react';
import HomeHeader from "./header/HomeHeader";
import HomeMainSection from "./main-section/HomeMainSection";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeDonationSteps from "./HomeDonationSteps";

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

            <HomeThreeColumns/>
            <HomeDonationSteps/>
        </>
    );
};

export default Home;