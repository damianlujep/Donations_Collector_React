import React from 'react';
import {Link} from "react-router-dom";

const HeaderNav = () => {
    return (
        <div>
            <button>
                <Link
                    to="/logowanie"
                >
                    Oddaj rzeczy
                </Link>
            </button>
            <button>
                <Link
                    to="/logowanie"
                >
                    Zorganizuj zbiórkę
                </Link>
            </button>
        </div>
    );
};

export default HeaderNav;