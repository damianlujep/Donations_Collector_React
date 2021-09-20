import React, {useState} from 'react';

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
    const [activePage, setActivePage] = useState(1);
    const pageNumbers = [];

    if(totalItems / itemsPerPage > 1){
        for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
    } else {
        paginate(1);
    }

    const buttonHandler = (pageNumber) => {
        paginate(pageNumber);
        setActivePage(pageNumber);
    }

    return (
        <nav
            className="home-org-pagination"
        >
            {
                pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => buttonHandler(number)}
                        className={(activePage === number ? "pagination-btn active" : "pagination-btn")}
                    >
                        {number}
                    </button>
                ))
            }
        </nav>
    );
};

export default Pagination;