import React, { useContext, useMemo } from "react";

import BaseTable from "./BaseTable";
import { COLUMNS } from "./columns";
import { AppContext, flattenObj } from "../../utills";
import { appActions } from "../../constant";

function TableWrapper() {
    const [state] = useContext(AppContext);
    const { tableData } = state;

    return useMemo(() => {
        const data = tableData.map((tdata) => flattenObj(tdata));
        return (
                <BaseTable tableColumns={COLUMNS} tableData={data} />
          )
    }, [tableData]);
}

export default TableWrapper;