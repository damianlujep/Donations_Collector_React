import React from 'react';
import {Link} from "react-router-dom";

const HeaderActionButtons = () => {

    return (
        <div>
            <Link
                to="/logowanie"
                className="header-action-btn"
            >
                Zaloguj
            </Link>
            <Link
                to="/rejestracja"
                className="header-action-btn"
            >
                Załóż konto
            </Link>
        </div>
    );
};

export default HeaderActionButtons;