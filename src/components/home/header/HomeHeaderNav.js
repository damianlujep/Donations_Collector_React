import React from 'react';
import {Link} from "react-scroll";
import {Link as LinkRouter} from "react-router-dom";

const HomeHeaderNav = () => {
    return (
        <ul
            className="nav-section-home"
        >
            <li>
                <LinkRouter
                    to="/"
                    className="nav-btn"
                >
                    Start
                </LinkRouter>
            </li>
            <li>
                <Link
                    to="about-it"
                    className="nav-btn"
                    smooth={true}
                    duration={1000}
                >
                    O co chodzi?
                </Link>
            </li>
            <li>
                <Link
                    to="about-us"
                    className="nav-btn"
                    smooth={true}
                    duration={1000}
                >
                    O nas
                </Link>
            </li>
            <li>
                <Link
                    to="organizations"
                    className="nav-btn"
                    smooth={true}
                    duration={1000}
                >
                    Fundacja i organizacje
                </Link>
            </li>
            <li>
                <Link
                    to="contact"
                    className="nav-btn"
                    smooth={true}
                    duration={1000}
                >
                    Kontakt
                </Link>
            </li>
        </ul>
    );
};

export default HomeHeaderNav;