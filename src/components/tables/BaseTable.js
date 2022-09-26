import { useMemo } from "react"
import { useTable } from "react-table";

function BaseTable({tableColumns, tableData}) {
    const columns = useMemo(() => tableColumns, []);
    const data = tableData;

    // console.log("col:-", columns, "data:-", data);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });

    return (
        <talbe {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                                ))
                            }
                            
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </talbe>
    )
}

export default BaseTable