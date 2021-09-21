import React from 'react';
import FacebookIcon from "../../assets/Facebook.svg";
import InstagramIcon from "../../assets/Instagram.svg";
import {Link} from "react-router-dom";

const HomeFooter = () => {
    return (
        <footer>
            <span>Copyright by Coders Lab</span>
            <div
                className="footer-media"
            >
                <Link to="#">
                    <img src={FacebookIcon} alt="FB"/>
                </Link>

                <Link to="#">
                    <img src={InstagramIcon} alt="IG"/>
                </Link>
            </div>
        </footer>
    );
};

export default HomeFooter;