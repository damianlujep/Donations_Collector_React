import React from 'react';
import HomeThreeColumns from "./HomeThreeColumns";
import HomeDonationSteps from "./HomeDonationSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeOrganizationsList from "./organizations/HomeOrganizationsList";
import HomeContact from "./HomeContact";
import HomeMainScreen from "./main-section/HomeMainScreen";

const Home = () => {
    return (
        <>
            <HomeMainScreen/>
            <HomeThreeColumns/>
            <HomeDonationSteps/>
            <HomeAboutUs/>
            <HomeOrganizationsList/>
            <HomeContact/>
        </>
    );
};

export default Home;