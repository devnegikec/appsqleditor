import { useContext, useMemo, useRef, useEffect } from 'react';

import { AppContext } from '../../utills/contextUtills';
import { TableIcon, UserIcon, EditIcon } from "../Icons";
import { editorActions, appActions } from "../../constant";
const iconType = {
    TABLE: 'table',
    USER: 'user',
    AWS: 'aws',
    SNOWFLAKE: 'snowflake',
    QUERY: 'query'
};

function Autocomplete() {
    const [state, dispatch] = useContext(AppContext);
    const { recentSearch, showRecent } = state;
    const ref = useRef(null);
    console.log("recentSearch:-", recentSearch);
    const selectSearchResult = (result) => {
        if (result.details.type === "table") {
            const tableName = result.value.split("table:")[1].trim();
            dispatch({
                type: editorActions.SELECTTABLE, selectedTable: tableName
            })
        }
        dispatch({
            type: appActions.SHOWRECENT, showRecent: false
        })
    }

    const closeAutocomplete = () => {
        dispatch({
            type: appActions.SHOWRECENT, showRecent: false
        })
    }

    const getIcon = (type) => {
        switch(type) {
            case iconType.TABLE:
                return <TableIcon />
            case iconType.AWS:
                return <UserIcon />
            case iconType.SNOWFLAKE:
                return <UserIcon />
            case iconType.QUERY:
                return <EditIcon />
            default:
                return <UserIcon />
        }
    }

    return useMemo(() => {
        return ( 
            <>
            {
                (showRecent && recentSearch.length) ? 
                <div ref={ref} className="flex-shrink-0">
                    <div className="absolute top-190 ml-5 mt-1 w-1/2 border bg-gray-100 shadow-xl rounded z-50">
                        <div className="flex justify-between">
                            <div><h2 className="p-3 text-blue-400"> "Recent"</h2></div>
                            <div><button className="p-2 text-gray-500 text-xl" onClick={() => closeAutocomplete()}>X</button></div>
                        </div>
                        <div className="p-3">
                            <div className="divide-y">
                                {
                                    recentSearch.map((result) => {
                                        return (<button onClick={() => {
                                                selectSearchResult(result)
                                            }} href="#" key={result.id} className="p-2 flex w-full rounded hover:bg-gray-200">
                                                    {getIcon(result.details.type)}
                                                    <span className="">{result.value}</span>
                                                </button>);
                                    })
                                }
                            
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }
            </>
            
        )
    }, [showRecent, recentSearch]);
    
}

export default Autocomplete;
