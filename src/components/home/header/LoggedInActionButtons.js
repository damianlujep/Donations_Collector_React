import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../../../contexts/AuthContext";

const LoggedInActionButtons = () => {
    const history = useHistory();
    const { currentUser, logout } = useAuth();
    const [logoutError, setLogoutError] = useState();

    const handleLogout = async () => {
        setLogoutError("");

        try {
            await logout();
            history.push("/")
        } catch {
            setLogoutError("Nie udało się wylogować");
        }
    }

    return (
        <div className="logged-in-cat">
            <p>Cześć <span>{currentUser.email}</span>!</p>

            <section>
                <Link
                    to="/logowanie"
                    className="header-action-btn"
                >
                    Oddaj rzeczy
                </Link>
                <button
                    onClick={handleLogout}
                    className="header-action-btn"
                >
                    Wyloguj
                </button>
            </section>

            {logoutError && <p className="log-out-error">{logoutError}</p>}
        </div>
    );
};

export default LoggedInActionButtons;