import React, {useRef, useState} from 'react';
import {useHistory} from "react-router-dom";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import {useAuth} from "../../contexts/AuthContext";

const RegistrationForm = () => {
    const history = useHistory();
    const emailRef =  useRef();
    const passwordRef =  useRef();
    const rePasswordRef =  useRef();
    const { signup } = useAuth();
    const [signUpError, setSignUpError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== rePasswordRef.current.value) {
            return setPasswordError("Hasła są niezgodne")
        }

        try {
            setPasswordError("");
            setSignUpError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/logowanie")
        } catch {
            setSignUpError(["Nie udało się utworzyć konta, spróbuj później "]);
        }

        setLoading(false);
    }

    return (
        <section className="auth-section">
            <h1>Załóż konto</h1>
            <Decoration/>
            <form
                id="sign-up-form"
                className="auth-form registration"
                onSubmit={handleSubmit}
            >
                <div className="auth-form-field">
                    <label>Email</label>
                    <input type="text" ref={emailRef} required/>
                </div>
                <div className="auth-form-field">
                    <label>Hasło</label>
                    <input
                        className={passwordError && "error"}
                        type="password"
                        ref={passwordRef} required
                    />
                    {passwordError && <p className="field-error">{passwordError}</p>}
                </div>
                <div className="auth-form-field">
                    <label>Powtórz Hasło</label>
                    <input
                        className={passwordError && "error"}
                        type="password"
                        ref={rePasswordRef}
                        required
                    />
                    {passwordError && <p className="field-error">{passwordError}</p>}
                </div>
            </form>

            {signUpError && <p className="field-error">{signUpError}</p>}

            <div className="auth-cta-group">
                <button
                    className="auth-cta-btn no-border"
                    onClick={() => history.push("/logowanie")}
                >
                    Zaloguj się
                </button>
                <button
                    className="auth-cta-btn"
                    disabled={loading}
                    type="submit"
                    form="sign-up-form"
                >
                    Załóż konto
                </button>
            </div>
        </section>
    );
};

export default RegistrationForm;