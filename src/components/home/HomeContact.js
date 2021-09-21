import React from 'react';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import HomeFooter from "./HomeFooter";

const HomeContact = () => {
    return (
        <section
            className="home-contact"
        >
            <div
                className="contact-form"
                id="contact"
            >
                <h2>Skontaktuj się z nami</h2>
                <Decoration/>

                <form>
                    <section className="contact-form-user-data">
                        <div className="form-input-box">
                            <label>Wpisz swoje imię</label>
                            <input type="text" placeholder="Napisz swoje imię"/>
                        </div>
                        <div className="form-input-box">
                            <label>Wpisz swój email</label>
                            <input type="text" placeholder="example@gmail.com"/>
                        </div>
                    </section>

                    <section className="contact-form-msg">
                        <label>Wpisz swoją wiadomość</label>
                        <textarea
                            rows="4"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                    </section>
                    <button
                        className="submit-btn"
                    >
                        Wyślij
                    </button>
                </form>
            </div>

            <HomeFooter/>
        </section>
    );
};

export default HomeContact;