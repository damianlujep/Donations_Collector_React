import React from 'react';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import {useHistory} from "react-router-dom";

const LoginForm = () => {
    const history = useHistory();

    return (
        <section className="login-section">
            <h1>Zaloguj się</h1>
            <Decoration/>
            <form className="login-form">
                <div className="login-field">
                    <label>Email</label>
                    <input type="text"/>
                </div>
                <div className="login-field">
                    <label>Password</label>
                    <input type="password"/>
                </div>
            </form>

            <div className="login-cta-group">
                <button
                    className="auth-cta-btn sign-up"
                    onClick={() => history.push("/rejestracja")}
                >
                    Załóż konto
                </button>
                <button className="auth-cta-btn">Zaloguj się</button>
            </div>
        </section>
    );
};

export default LoginForm;