import React, {useEffect, useState} from 'react';
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";
import OrganizationsList from "./OrganizationsList";

const HomeOrganizationsList = () => {
    const [currentOrganizationGroup, setCurrentOrganizationGroup] = useState("foundations");
    const [currentGroupList, setCurrentGroupList] = useState(foundationsList);
    const [currentPage, setCurrentPage] = useState(1);
    const [activePage, setActivePage] = useState(1);

    const navOrgHandler = (currentOrg) => {
        setCurrentOrganizationGroup(currentOrg);
        setActivePage(1);
        setCurrentPage(1);
    }

    useEffect(() => {
        collectorGroupHandler(currentOrganizationGroup);
    }, [currentOrganizationGroup]);

    const collectorGroupHandler = (currentGroup) => {
        switch (currentGroup) {
            case "foundations":
                setCurrentGroupList(foundationsList);
                break;
            case "non-governmental":
                setCurrentGroupList(organizationsList);
                break;
            case "local-collector":
                setCurrentGroupList(localCollectorsList);
                break;
        }
    }

    return (
        <section
            className="home-organizations"
            id="organizations"
        >
            <h2>Komu pomagamy?</h2>
            <Decoration/>

            <section className="nav-organizations">
                <button
                    className={currentOrganizationGroup === "foundations" ? "secondary-btn-medium active" : "secondary-btn-medium"}
                    onClick={() => navOrgHandler("foundations")}
                >
                    Fundacjom
                </button>
                <button
                    className={currentOrganizationGroup === "non-governmental" ? "secondary-btn-medium active" : "secondary-btn-medium"}
                    onClick={() => navOrgHandler("non-governmental")}
                >
                    Organizacjom
                    <br/>
                    pozarządowym
                </button>
                <button
                    className={currentOrganizationGroup === "local-collector" ? "secondary-btn-medium active" : "secondary-btn-medium"}
                    onClick={() => navOrgHandler("local-collector")}
                >
                    Lokalnym
                    <br/>
                    zbiórkom
                </button>
            </section>

            <p>
                {
                    renderOrgDescription(currentOrganizationGroup)
                }
            </p>

            <OrganizationsList
                currentGroupList={currentGroupList}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                activePage={activePage}
                setActivePage={setActivePage}
            />
        </section>
    );
};

const renderOrgDescription = (currentGroup) => {
    switch (currentGroup) {
        case "foundations":
            return "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z " +
                "którymi współpracujemy. Możesz sprawdzić czym się zajmują, " +
                "komu pomagają i czego potrzebują."
        case "non-governmental":
            return  "Organizacje pozarządowe, consectetur adipiscing elit, sed " +
                "do eiusmod tempor incididunt ut labore et dolore magna " +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        case "local-collector":
            return  "Lokalne zbiórki sit amet, do eiusmod tempor incididunt ut labore " +
                "consectetur adipiscing elit ut labore et dolore magna " +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    }
}

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
    },
    {
        name: "Fundacja “4”",
        description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        keywords: "Egestas, sed, tempus"
    },
    {
        name: "Fundacja “5”",
        description: "Scelerisque in dictum non consectetur a erat nam.",
        keywords: "Mi, quis, hendrerit, dolor"
    },
    {
        name: "Fundacja “6”",
        description: "Scelerisque in dictum non consectetur a erat nam.",
        keywords: "Ut, aliquam, purus, sit, amet"
    },
    {
        name: "Fundacja “7”",
        description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        keywords: "Ut, aliquam, purus, sit, amet"
    },
    {
        name: "Fundacja “8",
        description: "Scelerisque in dictum non consectetur a erat nam.",
        keywords: "Mi, quis, hendrerit, dolor"
    },
    {
        name: "Fundacja “9”",
        description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        keywords: "Ut, aliquam, purus, sit, amet"
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
    },
    {
        name: "Zbiórka “Lorem Ipsum 4”",
        description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        keywords: "Ut, aliquam, purus, sit, amet"
    },
    {
        name: "Zbiórka “Lorem Ipsum 5”",
        description: "Scelerisque in dictum non consectetur a erat nam.",
        keywords: "Mi, quis, hendrerit, dolor"
    },
    {
        name: "Zbiórka “Lorem Ipsum 6”",
        description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        keywords: "Ut, aliquam, purus, sit, amet"
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

export default HomeOrganizationsList;