import React, {useState} from 'react';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import HomeFooter from "./HomeFooter";

const HomeContact = () => {
    const initialFormModelData = {
        name: "",
        email: "",
        message: ""
    }

    const [contactFormData, setContactFormData] = useState(initialFormModelData)

    const resetContactForm = () => {
        setContactFormData(initialFormModelData);
    }

    const [formErrors, setFormErrors] = useState([]);
    const [successfullySubmitted, setSuccessfullySubmitted] = useState(false)

    const handleContactFormDataChange = (e) => {
        let value = e.target.value;

        setContactFormData({
            ...contactFormData,
            [e.target.name]: value
        });
    }

    const renderErrors = (inputName) => {
        let hasError = false;
        let errorMessage = ""

        switch (inputName) {
            case "name":
                errorMessage = "Podane imię jest nieprawidłowe";
                break;
            case "email":
                errorMessage = "Podany email jest nieprawidłowy";
                break;
            case "message":
                errorMessage = "Wiadomość musi mieć conajmniej 120 znaków!";
        }

        formErrors.map((el) => {
            if (el.param === inputName) {
                hasError = true;
            }
        });

        return (hasError) ? <p className="form-error">{errorMessage}</p> : ""
    }

    const renderSuccessMessage = () => (successfullySubmitted) ?
            <p className="success-message">Wiadomość została wysłana!<br/> Wkrótce się skontaktujemy.</p> : "";

    const sendDataToValidation = () => {
        const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";

        fetch(url, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactFormData)
        })
            .then(data => data.json())
            .then(data => (data.status === "success") ? submitValidData([],true) : submitValidData(data,false))
    }

    const submitValidData = (data, isDataValid) => {
        if (isDataValid) {
            setFormErrors(data);
            setSuccessfullySubmitted(true);
            resetContactForm();
        } else {
            setFormErrors(data.errors);
            setSuccessfullySubmitted(false);
        }
    }

    const contactFormHandler = (e) => {
        e.preventDefault();
        sendDataToValidation();
    }

    const formFieldHandler = (inputName) => {
        let hasError = false;
        formErrors.map((el) => {
            if (el.param === inputName){
                hasError = true;
            }
        })
        return hasError ? "error" : "";
    }

    return (
        <section className="home-contact">
            <div className="contact-form" id="contact">
                <h2>Skontaktuj się z nami</h2>
                <Decoration className="decoration-form"/>
                {renderSuccessMessage()}
                <form onSubmit={contactFormHandler}>
                    <section className="contact-form-user-data">
                        <div className="form-input-box">
                            <label>Wpisz swoje imię</label>
                            <input
                                type="text"
                                placeholder={placeholders.name}
                                name="name"
                                value={contactFormData.name}
                                onChange={handleContactFormDataChange}
                                className={formFieldHandler("name")}
                            />
                            {renderErrors("name")}
                        </div>
                        <div className="form-input-box">
                            <label>Wpisz swój email</label>
                            <input
                                type="text"
                                placeholder={placeholders.email}
                                name="email"
                                value={contactFormData.email}
                                onChange={handleContactFormDataChange}
                                className={formFieldHandler("email")}
                            />
                            {renderErrors("email")}
                        </div>
                    </section>

                    <section className="contact-form-msg">
                        <label>Wpisz swoją wiadomość</label>
                        <textarea
                            rows="4"
                            placeholder={placeholders.message}
                            name="message"
                            value={contactFormData.message}
                            onChange={handleContactFormDataChange}
                            className={formFieldHandler("message")}
                        />
                        {renderErrors("message")}
                    </section>
                    <button className="submit-btn">
                        Wyślij
                    </button>
                </form>
            </div>
            <HomeFooter/>
        </section>
    );
};

const placeholders = {
    name: "Napisz swoje imię",
    email: "example@gmail.com",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
        "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

export default HomeContact;