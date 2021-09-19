import React, {useState} from 'react';

const OrganizationsList = () => {
    const [foundations, setFoundations] = useState(foundationsList);
    const [organizations, setOrganizations] = useState(organizationsList);
    const [localCollectors, setLocalCollectors] = useState(localCollectorsList);

    const [currentGroup, setCurrentGroup] = useState("foundations");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage]  = useState(3);

    return (
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
    );
};

const foundationsList = [
    {
        name: "Fundacja “Dbam o Zdrowie”",
        description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        keywords: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    },
    {
        name: "Fundacja “Dla dzieci”",
        description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        keywords: "ubrania, meble, zabawki"
    },
    {
        name: "Fundacja “Bez domu”",
        description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        keywords: "ubrania, jedzenie, ciepłe koce"
    }
]

const organizationsList = [
    {
        name: "Zbiórka “Lorem Ipsum 1”",
        description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        keywords: "Egestas, sed, tempus"
    },
    {
        name: "Zbiórka “Lorem Ipsum 2”",
        description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        keywords: "Ut, aliquam, purus, sit, amet"
    },
    {
        name: "Zbiórka “Lorem Ipsum 3”",
        description: "Scelerisque in dictum non consectetur a erat nam.",
        keywords: "Mi, quis, hendrerit, dolor"
    }
];

const localCollectorsList = [
    {
        name: "Lokalna zbiórka “Lorem Ipsum 1”",
        description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        keywords: "Mi, quis, hendrerit, dolor"
    },
    {
        name: "Lokalna zbiórka “Lorem Ipsum 2”",
        description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        keywords: "Egestas, sed, tempus"
    },
    {
        name: "Lokalna zbiórka “Lorem Ipsum 3”",
        description: "Scelerisque in dictum non consectetur a erat nam.",
        keywords: "Ut, aliquam, purus, sit, amet"
    }
]

export default OrganizationsList;