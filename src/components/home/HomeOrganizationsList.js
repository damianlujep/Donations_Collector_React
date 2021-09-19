import React, {useState} from 'react';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import Pagination from "./Pagination";
import OrganizationsList from "../OrganizationsList";

const HomeOrganizationsList = () => {
    return (
        <section
            className="home-organizations"
            id="organizations"
        >
            <h2>Komu pomagamy?</h2>
            <Decoration/>

            <section className="nav-organizations">
                <button
                    className="secondary-btn-medium"
                >
                    Fundacjom
                </button>
                <button
                    className="secondary-btn-medium"
                >
                    Organizacjom
                    <br/>
                    pozarządowym
                </button>
                <button
                    className="secondary-btn-medium"
                >
                    Lokalnym
                    <br/>
                    zbiórkom
                </button>
            </section>

            <p>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                którymi współpracujemy. Możesz sprawdzić czym się zajmują,
                komu pomagają i czego potrzebują.
            </p>

            <OrganizationsList/>
            <Pagination/>

        </section>
    );
};

export default HomeOrganizationsList;