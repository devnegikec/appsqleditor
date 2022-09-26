import { useContext, useMemo } from "react";
import { AppContext } from "../../utills";
import { PlayIcon, SaveIcon, SettingsIcon, DownloadIcon } from "../Icons";
import { editorActions, appActions } from "../../constant";

function Tabs() {
    const [state, dispatch] = useContext(AppContext);
    const {
        queryRunning,
        queryString
    } = state;

    const runQuery = () => {
        fetch('data/employees.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch({
                    type: appActions.UPDATETABLE, tableData: data
                })
            })
    };

    return useMemo(() => {
        return (      
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="mr-2">
                        <a href="#" onClick={runQuery} className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                            <PlayIcon />Run
                        </a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                            <SaveIcon />Save
                        </a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                            <DownloadIcon />Export
                        </a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                            <SettingsIcon />Settings
                        </a>
                    </li>
                </ul>
            </div>)
    }, [queryRunning, queryString, dispatch]);
}

export default Tabs;