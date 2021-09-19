import React from 'react';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import Pagination from "./Pagination";

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

            <section
                className="org-list"
            >
                <article
                    className="org-list-item"
                >
                    <div>
                        <h3>Fundacja “Dbam o Zdrowie”</h3>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>
                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </article>
                <hr/>
                <article
                    className="org-list-item"
                >
                    <div>
                        <h3>Fundacja “Dla dzieci”</h3>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <p>ubrania, meble, zabawki</p>
                </article>
                <hr/>
                <article
                    className="org-list-item"
                >
                    <div>
                        <h3>Fundacja “Bez domu”</h3>
                        <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    </div>
                    <p>ubrania, jedzenie, ciepłe koce</p>
                </article>
            </section>

            <Pagination/>

        </section>
    );
};

export default HomeOrganizationsList;