import React from 'react';
import {useHistory} from "react-router-dom";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";

const RegistrationForm = () => {
    const history = useHistory();

    return (
        <section className="auth-section">
            <h1>Załóż konto</h1>
            <Decoration/>
            <form className="auth-form registration">
                <div className="auth-form-field">
                    <label>Email</label>
                    <input type="text"/>
                </div>
                <div className="auth-form-field">
                    <label>Hasło</label>
                    <input type="password"/>
                </div>
                <div className="auth-form-field">
                    <label>Powtórz Hasło</label>
                    <input type="password"/>
                </div>
            </form>

            <div className="auth-cta-group">
                <button
                    className="auth-cta-btn no-border"
                    onClick={() => history.push("/logowanie")}
                >
                    Zaloguj się
                </button>
                <button className="auth-cta-btn">Załóż konto</button>
            </div>
        </section>
    );
};

export default RegistrationForm;