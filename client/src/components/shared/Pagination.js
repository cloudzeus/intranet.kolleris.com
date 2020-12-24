import React from 'react';

const PAGINATION_SIZE = 5;

const Pagination = ({
    numberOfPages,
    page,
    previousPage,
    nextPage,
    goToPage,
}) => {
    let startIndex = 0;

    if (page % PAGINATION_SIZE) startIndex = page;

    let lastIndex = startIndex + PAGINATION_SIZE;

    const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1).slice(
        startIndex,
        lastIndex
    );

    return (
        <nav aria-label="Page navigation example ">
            <ul className="pagination">
                <li className="page-item">
                    <a
                        className="btn btn-outline-dark"
                        role="button"
                        onClick={previousPage}
                    >
                        Previous
                    </a>
                </li>
                {/* {pages.map((p) => {
                    return (
                        <li
                            key={p + 'page'}
                            className={`page-item ${p == p && 'active'} `}
                        >
                            <a
                                className=" btn-sm btn btn-outline-dark "
                                role="button"
                                onClick={() => goToPage(p)}
                            >
                                {p}
                            </a>
                        </li>
                    );
                })} */}
                <li className="page-item">
                    <a
                        className="btn btn-outline-dark"
                        role="button"
                        onClick={nextPage}
                    >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
