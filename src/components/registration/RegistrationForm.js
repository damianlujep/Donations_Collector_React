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
    const [loading, setLoading] = useState(false);
    const resetSignUpErrors = () => {
        return {
            email: "",
            passwordMatch:"",
            passwordLength: "",
            rePasswordLength:""
        }
    }

    const [signUpErrors, setSignUpErrors] = useState(resetSignUpErrors);

    const isEmailValid = (email) => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regex.test(email);
    }

    const validateForm = (email, password, rePassword) => {
        let errorsTemp = {...signUpErrors};
        errorsTemp.email = !isEmailValid(email) ? "Email nie poprawny" : "";
        errorsTemp.passwordLength = password.length < 6 ? "Hasło musi mieć co najmniej 6 znaków" : "";
        errorsTemp.passwordMatch = password !== rePassword ? "Hasła są niezgodne" : "";
        errorsTemp.rePasswordLength = password.length < 6 ? "Hasło musi mieć co najmniej 6 znaków" : "";
        setSignUpErrors({...errorsTemp});
        return Object.values(errorsTemp).every(x => x === "");
    }

    const renderPasswordErrors = () => signUpErrors.passwordLength ?
        <p className="field-error">{signUpErrors.passwordLength}</p> :
        signUpErrors.passwordMatch &&
        <p className="field-error">{signUpErrors.passwordMatch}</p>;

    const renderEmailError = () => signUpErrors.email && <p className="field-error">{signUpErrors.email}</p>;
    const renderAPIError = () => signUpErrors.apiError && <p className="field-error">{signUpErrors.apiError}</p>;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const rePassword = rePasswordRef.current.value;
        console.log( "isValid?",validateForm(email,password,rePassword))
        if (validateForm(email, password,rePassword)) {
            try {
                resetSignUpErrors();
                setLoading(true);
                await signup(email, password);
                history.push("/logowanie")
            } catch {
                setSignUpErrors(prevState => prevState.apiError = "Nie udało się utworzyć konta, spróbuj później");
            }
            setLoading(false);
        }
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
                    <input
                        className={signUpErrors.email && "error"}
                        type="text"
                        ref={emailRef}
                        required
                    />
                    {renderEmailError()}
                </div>
                <div className="auth-form-field">
                    <label>Hasło</label>
                    <input
                        className={signUpErrors.passwordLength || signUpErrors.passwordMatch && "error"}
                        type="password"
                        ref={passwordRef}
                        required
                    />
                    {renderPasswordErrors()}
                </div>
                <div className="auth-form-field">
                    <label>Powtórz Hasło</label>
                    <input
                        className={signUpErrors.passwordLength || signUpErrors.passwordMatch && "error"}
                        type="password"
                        ref={rePasswordRef}
                        required
                    />
                    {renderPasswordErrors()}
                </div>
            </form>

            {renderAPIError()}

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