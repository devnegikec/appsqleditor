import { useContext, useMemo } from "react";

import { AppContext } from "../../utills";
import { editorActions } from "../../constant";
import { TableIcon } from "../Icons"

function LeftNav() {
    const [state, dispatch] = useContext(AppContext);
    const { tableList } = state;

    const selectTable = (tableName) => {
        dispatch({
            type: editorActions.SELECTTABLE, selectedTable: tableName
        })
    }
    return useMemo(() => {
        return (
            <>
                <div className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden">SideBar</div>
                <aside className="fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none">
                <div className="flex items-center justify-between flex-shrink-0 p-2">
                    <span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
                        Atlan
                    </span>
                </div>
                <div className="flex">
                <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
                    <ul className="p-2 overflow-hidden">
                        <li>
                        <a
                        href="#"
                        className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                        >Dashboard</a>
                        </li>
                        <li>
                        <a
                        href="#"
                        className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                        >Tables</a>
                        <ul>
                            {
                                tableList.map((table) => {
                                    // return <li className="pl-4 pb-2"><span><TableIcon />{table}</span></li>
                                    return <li className="mr-2">
                                            <a href="#" onClick={() => selectTable(table)} className="inline-flex p-2 text-gray-400 rounded-t-lg  active dark:text-gray-700 group" aria-current="page">
                                                <TableIcon />{table}
                                            </a>
                                    </li>
                                })
                            }
                        </ul>
                        </li>
                    </ul>
                    </nav>
                </div>
                </aside>
            </>
        )
    }, [tableList]);
   
};

export default LeftNav;