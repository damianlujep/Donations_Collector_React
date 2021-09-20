import React from 'react';
import {ReactComponent as Decoration } from "../../assets/Decoration.svg";

const HomeAboutUs = () => {
    return (
        <section
            className="home-about-us"
            id="about-us"
        >
            <div
                className="about-us-text"
            >
                <h2>O nas</h2>
                <Decoration/>
                <p>
                    Nori grape silver beet broccoli kombu beet
                    greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek
                    lentil turnip greens parsnip.
                </p>

                <div
                    className="signature"
                />
            </div>
            <div
                className="about-us-image"
            />
        </section>
    );
};

export default HomeAboutUs;