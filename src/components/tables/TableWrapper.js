import React, { useContext, useMemo } from "react";

import BaseTable from "./BaseTable";
// import { COLUMNS } from "./columns";
import { AppContext, flattenObj, buildColumns } from "../../utills";
import { appActions } from "../../constant";

function TableWrapper() {
    const [state] = useContext(AppContext);
    const { tableData, tableColumns } = state;
    console.log("data:-", tableData, "columns:-", tableColumns);

    return useMemo(() => {
        return (tableData ? (tableData.length >0  ? <BaseTable data={tableData} columns={tableColumns} /> : null) : null)
    }, [tableData, tableColumns]);
}

export default TableWrapper;