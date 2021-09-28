import React, {useRef, useState} from 'react';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import {useHistory} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";

const LoginForm = () => {
    const history = useHistory();
    const emailRef =  useRef();
    const passwordRef =  useRef();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const resetLoginErrors = () => {
        return {
            email: "",
            passwordLength: "",
            userNotFound: ""
        }
    }

    const [loginErrors, setLoginErrors] = useState(resetLoginErrors);

    const isEmailValid = (email) => {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    const validateEmailForm = (email, password) => {
        let errorsTemp = {...loginErrors};
        errorsTemp.email = !isEmailValid(email) ? "Email nie poprawny" : "";
        errorsTemp.passwordLength = password.length < 6 ? "Hasło musi mieć co najmniej 6 znaków" : "";
        errorsTemp.userNotFound = "";
        setLoginErrors({...errorsTemp});
        return Object.values(errorsTemp).every(x => x === "");
    }

    const renderEmailError = () => loginErrors.email && <p className="field-error">{loginErrors.email}</p>;
    const renderPasswordError = () => loginErrors.passwordLength && <p className="field-error">{loginErrors.passwordLength}</p>;
    const renderAPIError = () => loginErrors.userNotFound && <p className="field-error">{loginErrors.userNotFound}</p>;

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (validateEmailForm(email, password)) {
            try {
                resetLoginErrors();
                setLoading(true);
                await login(email, password);
                history.push("/oddaj-rzeczy")
            } catch {
                setLoginErrors(prevState => ({...prevState, userNotFound: "Niepoprawne email lub hasło"}));
            }
            setLoading(false);
        }
    }

    return (
        <section className="auth-section">
            <h1>Zaloguj się</h1>
            <Decoration/>
            <form
                id="login-form"
                className="auth-form"
                onSubmit={handleLogin}
            >
                <div className="auth-form-field">
                    <label>Email</label>
                    <input
                        className={loginErrors.email && "error"}
                        type="text"
                        ref={emailRef}
                        required
                    />
                    {renderEmailError()}
                </div>
                <div className="auth-form-field">
                    <label>Password</label>
                    <input
                        className={loginErrors.passwordLength && "error"}
                        type="password"
                        ref={passwordRef}
                        required
                    />
                    {renderPasswordError()}
                </div>
            </form>

            {renderAPIError()}

            <div className="auth-cta-group">
                <button
                    className="auth-cta-btn no-border"
                    onClick={() => history.push("/rejestracja")}
                >
                    Załóż konto
                </button>
                <button
                    form="login-form"
                    className="auth-cta-btn"
                    type="submit"
                    disabled={loading}
                >
                    Zaloguj się
                </button>
            </div>
        </section>
    );
};

export default LoginForm;