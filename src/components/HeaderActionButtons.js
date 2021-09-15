import React from 'react';
import {Link} from "react-router-dom";

const HeaderActionButtons = () => {

    return (
        <div>
            <button
                className="header-action-btn"
            >
                <Link
                    to="/logowanie"
                >
                    Zaloguj
                </Link>
            </button>
            <button
                className="header-action-btn"
            >
                <Link
                    to="/rejestracja"
                >
                    Załóż konto
                </Link>
            </button>
        </div>
    );
};

export default HeaderActionButtons;