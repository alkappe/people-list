import React, { useState } from 'react'
import style from './Pagination.module.scss'

export default function Pagination({ totalPages, setPage }) {

    const [currentPage, setCurrentPage] = useState(false)

    const onPaginationClick = pageIndex => {
        setCurrentPage(pageIndex)
        setPage(pageIndex)
    }

    let arrayPages = [];
    // INPUT 4
    // OUTPUT [1, 2, 3, 4]

    for (let i = 1; i < totalPages + 1; i++) {
        arrayPages.push(i)
    }

    return (
        <div className={style.pagination}> 
            {arrayPages.map(pageIndex => (
                <button
                    className={`${style.pagination__button} ${currentPage === pageIndex ? style.pagination__buttonActive : null}`}
                    key={pageIndex}
                    onClick={() => {onPaginationClick(pageIndex)}}
                >
                    {pageIndex}
                </button>
            ))}
        </div>
    )
}
