import React from 'react';
import Pagination from "./Pagination";

const OrganizationsList = ({currentGroupList, currentPage, setCurrentPage, activePage, setActivePage}) => {
    const itemsPerPage = 3;

    //Get current organizations
    const indexOfLastOrganization = currentPage * itemsPerPage;
    const indexOfFirstOrganization = indexOfLastOrganization - itemsPerPage;
    const currentOrganization = currentGroupList.slice(indexOfFirstOrganization, indexOfLastOrganization);

    //Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <section
                className="org-list"
            >
                {
                    currentOrganization.map((elem, index) => (
                        <>
                            <article
                                key={index}
                                className="org-list-item"
                            >
                                <div>
                                    <h3>{elem.name}</h3>
                                    <p>{elem.description}</p>
                                </div>
                                <p>{elem.keywords}</p>
                            </article>
                            {
                                ((index + 1) % 3 !== 0) ? (<hr/>) : false
                            }
                        </>
                    ))
                }
            </section>

            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={currentGroupList.length}
                activePage={activePage}
                setActivePage={setActivePage}
                paginate={paginate}
            />
        </>
    );
};

export default OrganizationsList;