import React from 'react';
import HomeHeader from "./header/HomeHeader";
import HomeMainSection from "./main-section/HomeMainSection";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeDonationSteps from "./HomeDonationSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeOrganizationsList from "./organizations/HomeOrganizationsList";

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
            <HomeAboutUs/>
            <HomeOrganizationsList/>
        </>
    );
};

export default Home;