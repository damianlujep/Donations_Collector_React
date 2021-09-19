import React from 'react';
import {ReactComponent as Decoration } from "../../../assets/Decoration.svg";
import {Link, useHistory} from "react-router-dom";
import MainActionBigButton from "../../buttons/MainActionBigButton";

const HomeMainSection = () => {

    return (
        <section className="home-main-section">
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
                    <MainActionBigButton
                        textFirstRow="Oddaj"
                        textSecondRow="rzeczy"
                        onClickGoTo="/oddaj-rzeczy"
                    />

                    <MainActionBigButton
                        textFirstRow="Zorganizuj"
                        textSecondRow="zbiórkę"
                        onClickGoTo="/oddaj-rzeczy"
                    />
                </div>
            </div>

        </section>
    );
};

export default HomeMainSection;