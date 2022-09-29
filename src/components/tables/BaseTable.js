import { useMemo } from "react"
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import { GlobalFilter } from "./GlobalFilter";
import TablePagination from "./TablePagination";
import { flattenObj, buildColumns } from "../../utills";

function BaseTable({data, columns}) {
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
                </div>
                </div>
                <talbe {...getTableProps()} className="flex-1 border-l border-t border-gray-400">
                    <thead>
                        {
                            headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {
                                        headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps(column.getSortByToggleProps())} className="border-b border-r border-gray-400 p-5 text-sm font-semibold tracking-wide text-left">
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
                                                return <td {...cell.getCellProps()} className="border-b border-r border-gray-400  max-h-10 w-20 p-5 text-sm text-gray-700 truncate">{cell.render("Cell")}</td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </talbe>
                <TablePagination
                    pageCount= {pageCount}
                    pageIndex= {pageIndex}
                    pageOptions= {pageOptions}
                    canPreviousPage= {canPreviousPage}
                    gotoPage= {gotoPage}
                    canNextPage= {canNextPage}
                    previousPage= {previousPage}
                    nextPage= {nextPage}
                    pageSize={pageSize}
                    totalCount={data.length}
                />
            </>
        )
    
}

export default BaseTable