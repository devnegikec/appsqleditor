import React, { useContext, useMemo } from "react";

import Spinner from "../spinner/spinner";
import BaseTable from "./BaseTable";
// import { COLUMNS } from "./columns";
import { AppContext, flattenObj, buildColumns } from "../../utills";
import { appActions } from "../../constant";

function TableWrapper() {
    const [state] = useContext(AppContext);
    const { tableData, tableColumns, isLoading } = state;
    console.log("data:-", tableData, "columns:-", tableColumns);

    return useMemo(() => {
        return isLoading ? <Spinner /> : (tableData ? (tableData.length >0  ? <BaseTable data={tableData} columns={tableColumns} /> : null) : null)
    }, [tableData, tableColumns]);
}

export default TableWrapper;