import React from 'react';
import {Link} from "react-router-dom";

const HomeHeaderNav = () => {
    return (
        <section
            className="nav-section-home"
        >
            <Link
                to="/"
                className="nav-btn"
            >
                Start
            </Link>
            <Link
                to="/"
                className="nav-btn"
            >
                O co chodzi?
            </Link>
            <Link
                to="/"
                className="nav-btn"
            >
                O nas
            </Link>
            <Link
                to="/"
                className="nav-btn"
            >
                Fundacja i organizacje
            </Link>
            <Link
                to="/"
                className="nav-btn"
            >
                Kontakt
            </Link>
        </section>
    );
};

export default HomeHeaderNav;