import React from 'react';
import mainSectionImage from "../../../assets/Home-Hero-Image.jpg";
import {ReactComponent as Decoration } from "../../../assets/Decoration.svg";
import {Link} from "react-router-dom";

const HomeMainSection = () => {
    return (
        <section className="home-main-section">
            <img
                src={mainSectionImage}
                alt="main-section-img"
            />

            <div
                className="main-section-description"
            >
                <h1>
                    Zacznij pomagać! <br/>
                    Oddaj niechciane rzeczy w zaufane ręce
                </h1>

                <Decoration
                   className="decoration-home"
                />

                <div
                    className="home-main-cta"
                >
                    <Link
                        to="/logowanie"
                        className="main-action-btn"
                    >
                        <span>Oddaj</span>
                        <span>rzeczy</span>
                    </Link>
                    <Link
                        to="/logowanie"
                        className="main-action-btn"
                    >
                        <span>Zorganizuj</span>
                        <span>zbiórkę</span>
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default HomeMainSection;