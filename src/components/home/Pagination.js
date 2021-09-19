import React from 'react';

const Pagination = () => {
    return (
        <section
            className="home-org-pagination"
        >
            <button
                className="pagination-btn active"
            >
                1
            </button>
            <button
                className="pagination-btn"
            >
                2
            </button>
            <button
                className="pagination-btn"
            >
                3
            </button>
        </section>
    );
};

export default Pagination;