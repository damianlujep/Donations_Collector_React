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
                style={{height:"calc(100vh - 73px - 37px)", width: "50vw", alignSelf:"end"}}
            />

            <div
                className="main-section-description"
            >
                <h1>
                    Zacznij pomagać! <br/>
                    Oddaj niechciane rzeczy w zaufane ręce
                </h1>

                <Decoration
                    style={{margin:"25px 0 78px"}}
                />

                <div style={{width: "674px", display:"flex", justifyContent: "space-around"}}>
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
                        style={{padding: "13px 51px"}}
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