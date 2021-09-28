import React from 'react';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import HomeHeader from "../home/header/HomeHeader";
import {useHistory} from "react-router-dom";

const LogoutPage = () => {
    const history = useHistory();

    return (
        <div>
            <HomeHeader/>
            <section className="log-out-page-main">
                <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                <Decoration className="decoration-home"/>
                <button
                    className="submit-btn"
                    onClick={() => history.push("/")}
                >
                    Strona głowna
                </button>
            </section>
        </div>
    );
};

export default LogoutPage;