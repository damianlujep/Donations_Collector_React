import React from 'react';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import MainActionBigButton from "../buttons/MainActionBigButton";

const HomeDonationSteps = () => {
    return (
        <>
            <div
                className="donation-steps"
                id="about-it"
            >
                <h2>Wystarczą 4 proste kroki</h2>

                <Decoration
                    className="decoration-home"
                />

                <section
                    className="steps-list"
                >
                    <article>
                        <div
                            className="step-icon"
                        >
                        </div>
                        <span>Wybierz rzeczy</span>
                        <hr/>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </article>
                    <article>
                        <div
                            className="step-icon pack"
                        >
                        </div>
                        <span>Spakuj je</span>
                        <hr/>

                        <p>skorzystaj z worków na śmieci</p>
                    </article>
                    <article>
                        <div
                            className="step-icon search"
                        >
                        </div>
                        <span>Zdecyduj komu chcesz pomóc</span>
                        <hr/>
                        <p>wybierz zaufane miejsce</p>
                    </article>
                    <article>
                        <div
                            className="step-icon courier"
                        >
                        </div>
                        <span>Zamów kuriera</span>
                        <hr/>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </article>
                </section>

                <MainActionBigButton
                    textFirstRow="Oddaj"
                    textSecondRow="rzeczy"
                    onClickGoTo="/oddaj-rzeczy"
                />
            </div>
        </>
    );
};

export default HomeDonationSteps;