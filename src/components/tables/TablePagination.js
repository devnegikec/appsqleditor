import React, { useState } from "react";
import { calculateDispayPages } from "../../utills";

const TablePagination = ({
    pageCount,
    pageIndex,
    pageOptions,
    canPreviousPage,
    gotoPage,
    canNextPage,
    previousPage,
    nextPage,
    pageSize,
    totalCount
}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = pageOptions.length;
    const dispayPageSetting = calculateDispayPages(totalCount, currentPage, pageSize, 10);

  return (
    <div>
        <div>
            <span>
                Page{" "}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
            </span>
            <div className="flex items-center justify-center">
                <div className="inline-flex" role="group">
                    <button
                    type="button"
                    className={`
                        rounded-l
                        px-6
                        py-2
                        border-2 border-blue-600
                        text-blue-600
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        focus:outline-none focus:ring-0
                        transition
                        duration-150
                        ease-in-out
                    ` + (canPreviousPage ? "hover:bg-blue-100 hover:bg-opacity-3" : "bg-gray-200")}
                    onClick={() => {
                        gotoPage(0)
                        setCurrentPage(1)
                    }} disabled={!canPreviousPage}
                    >
                    {"<<"}
                    </button>
                    <button
                    type="button"
                    className="
                        px-6
                        py-2
                        border-t-2 border-b-2 border-blue-600
                        text-blue-600
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        hover:bg-blue-100 hover:bg-opacity-3
                        focus:outline-none focus:ring-0
                        transition
                        duration-150
                        ease-in-out
                    "
                    onClick={() => {
                        previousPage()
                        setCurrentPage((prevousCurrent) => prevousCurrent-1)
                    }} disabled={!canPreviousPage}
                    >
                    Previous
                    </button>
                    {
                        dispayPageSetting.pages.map((number) => {
                            return (<button
                                key={number}
                                type="button"
                                className={`
                                    px-6
                                    py-2
                                    border-t-2 border-b-2 border-blue-600
                                    text-blue-600
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    hover:bg-blue-100 hover:bg-opacity-3
                                    focus:outline-none focus:ring-0
                                    transition
                                    duration-150
                                    ease-in-out
                                ` + (number == currentPage ? "bg-blue-300" : "")}
                                onClick={() => {
                                    gotoPage(number)
                                    setCurrentPage(number)
                                }}
                                >
                                {number}
                                </button>)
                        })
                    }
                    <button
                    type="button"
                    className="
                        px-6
                        py-2
                        border-t-2 border-b-2 border-blue-600
                        text-blue-600
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        hover:bg-blue-100 hover:bg-opacity-3
                        focus:outline-none focus:ring-0
                        transition
                        duration-150
                        ease-in-out
                    "
                    onClick={() => {
                        nextPage()
                        setCurrentPage((prevousCurrent) => prevousCurrent+1)
                    }} disabled={!canNextPage}
                    >
                    Next
                    </button>
                    <button
                    type="button"
                    className={`rounded-r
                    px-6
                    py-2
                    border-2 border-blue-600
                    text-blue-600
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    hover:bg-black-100
                    focus:outline-none focus:ring-0
                    transition
                    duration-150
                    ease-in-out ` + (canNextPage ? "hover:bg-blue-100 hover:bg-opacity-3" : "bg-gray-200")}
                    onClick={() => {
                        gotoPage(pageCount-1)
                        setCurrentPage(pageCount)
                    }} disabled={!canNextPage}
                    >
                    {">>"}
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}


export default TablePagination;
