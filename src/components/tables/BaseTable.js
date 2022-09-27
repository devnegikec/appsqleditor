import { useMemo } from "react"
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import { GlobalFilter } from "./GlobalFilter";

function BaseTable({tableColumns, tableData}) {
    const columns = useMemo(() => tableColumns, []);
    const data = tableData;

    // console.log("col:-", columns, "data:-", data);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy, usePagination);

    const { globalFilter, pageIndex, pageSize } = state;
    return (
        <>
            <div className="mb-4 ml-10 flex w-full">
            <div className="flex pr-4 flex-row w-full">
                <div className="w-10/12">
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                </div>
                <div>
                <label for="countries_multiple" class="block mr-2 text-md font-medium text-gray-900 dark:text-gray-400">Show</label>
                </div>
                <div>
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}
                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            {
                                [10, 20 , 30, 40, 50].map((pageSizeCount) => {
                                    return <option key={pageSizeCount} value={pageSizeCount}>
                                        {pageSizeCount}
                                    </option>
                                })
                            }
                        </select>
                </div>
                {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                <div>
                    <label for="countries_multiple" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Show</label>
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        {
                            [10, 20 , 30, 40, 50].map((pageSizeCount) => {
                                return <option key={pageSizeCount} value={pageSizeCount}>
                                    {pageSizeCount}
                                </option>
                            })
                        }
                    </select>
                </div> */}
            </div>
            </div>
            
            
            <talbe {...getTableProps()} className="flex-1">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} className="p-5  text-sm font-semibold tracking-wide text-left">
                                            {column.render("Header")}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                                            </span>
                                        </th>
                                    ))
                                }
                                
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row, index) => {
                            const bg = index % 2 == 0 ? "bg-white" : "bg-gray-100";

                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()} className={bg}>
                                    {
                                        row.cells.map(cell => {
                                            return <td {...cell.getCellProps()} className="p-5 text-sm text-gray-700">{cell.render("Cell")}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </talbe>
            <div>
                <span>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{" "}
                </span>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageCount-1)} disabled={!canPreviousPage}>{">>"}</button>
            </div>
        </>
    )
}

export default BaseTable