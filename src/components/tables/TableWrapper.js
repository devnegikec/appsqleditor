import React, { useContext, useMemo } from "react";

import BaseTable from "./BaseTable";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import { AppContext } from "../../utills";
import { appActions } from "../../constant";

function TableWrapper() {
    const [state] = useContext(AppContext);
    const { tableData } = state;
    // console.log("DataTable:-", tableData);

    return useMemo(() => {
        return (
            <BaseTable tableColumns={COLUMNS} tableData={tableData} />
          )
    }, [tableData]);
}

export default TableWrapper;