import React from 'react';
import mainSectionImage from "../../../assets/Home-Hero-Image.jpg";
import {ReactComponent as Decoration } from "../../../assets/Decoration.svg";
import {Link, useHistory} from "react-router-dom";

const HomeMainSection = () => {
    const history = useHistory();

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
                        className="main-action-btn"
                        to="/oddaj-rzeczy"
                    >
                        Oddaj rzeczy
                    </Link>
                    <Link
                        className="main-action-btn"
                        to="/oddaj-rzeczy"
                    >
                        Zorganizuj zbiórkę
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default HomeMainSection;