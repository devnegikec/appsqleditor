import {useContext, useMemo, useState} from "react";

import { AppContext } from "../../utills";
import { editorActions } from "../../constant";
import Tabs from "../tabs/Tabs";

function MainContainer() {

    const [state, dispatch] = useContext(AppContext);
    const {queryString} = state;

    const handleQueryChange = (e) => {
        const query = e.target.value.trim();
        if(!query) return;
        
        console.log("in handleQueryChange:-", e.target.value);
        dispatch({
            type: editorActions.UPDATEQUERY, queryString: e.target.value
        });
    }
    return useMemo(() => {
        return (
            <main className="flex-1 max-h-full p-8">
                <div className="flex flex-col items-start justify-between pb-2 space-y-4 lg:items-center lg:space-y-0 lg:flex-row">
                    <div className="text-2xl font-semibold whitespace-nowrap w-full">
                        <h1>Search Result</h1>
                        <Tabs />
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
            </main>
        )
    }, [queryString, dispatch]);
}

export default MainContainer;