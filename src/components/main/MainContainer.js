import {useContext, useMemo} from "react";

import { AppContext } from "../../utills";
import { editorActions } from "../../constant";
import Tabs from "../tabs/Tabs";

function MainContainer() {

    const [state, dispatch] = useContext(AppContext);
    const { queryString, queryRunTime } = state;

    const handleQueryChange = (e) => {
        const query = e.target.value.trim();
        if(!query) return;
        
        dispatch({
            type: editorActions.UPDATEQUERY, queryString: e.target.value
        });
    }

    return useMemo(() => {
        return (
            <div className="flex flex-col items-start justify-between pb-2 space-y-4 lg:items-center lg:space-y-0 lg:flex-row">
                <div className="text-2xl font-semibold whitespace-nowrap w-full">
                    <Tabs />
                    <div className="flex pl-5 text-xs">
                        <span className="text-xs text-gray-400">Time taken by query:-</span><span>{queryRunTime/1000} seconds</span>
                    </div>
                    <div className="flex justify-center pt-5">
                        
                        <div className="mb-3 xl:w-100 w-full">
            
                            <textarea
                                onChange={handleQueryChange}
                                value={queryString}
                                className="form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                id="queryformcontrolarea"
                                rows="3"
                                placeholder="type your query"
                            ></textarea>
                        </div>
                        </div>
                </div>
            </div>
        )
    }, [queryString, dispatch, handleQueryChange]);
}

export default MainContainer;