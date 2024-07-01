import React from "react";
import "./pagination.css"

const Pagination = ({ productsPerPage, totalProducts, currentPage, setCurrentPage }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (page) => {
        setCurrentPage(page)
    }

    return (
        <section className="pagination">
            <div className="pagination__content">
                <a
                    href="#category-start"
                    className={`pagination__button pagination__button-prev ${currentPage === 1 ? "pagination__button-disabled" : null}`}
                    onClick={onPreviusPage}>Anterior
                </a>
                {pageNumbers.map((numberPage) => (
                    <a 
                        key={numberPage} 
                        href="#category-start"
                        className={`pagination__number ${numberPage === currentPage ? "pagination__number-active" : null} `}
                        onClick={ () => onSpecificPage(numberPage) }>{numberPage}</a>
                ))}
                <a
                    href="#category-start"
                    className={`pagination__button pagination__button-next ${currentPage === pageNumbers.length ? "pagination__button-disabled" : null}`}
                    onClick={onNextPage}>Siguiente
                </a>
            </div>

        </section>
    )
}

export default Pagination;