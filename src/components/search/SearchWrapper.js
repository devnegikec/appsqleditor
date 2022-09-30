import { useContext, useEffect, useMemo, useState } from "react";

import { AppContext } from "../../utills";
import { appActions } from "../../constant";
import SearchBar from "./SearchBar";
import Autocomplete from "./Autocomplete";

function SearchWrapper() {
    const [state, dispatch] = useContext(AppContext);
    const { showRecent } = state;
    return useMemo(() => {
        return (
            <>
                <SearchBar />
                <Autocomplete />
            </>
        );
    }, [showRecent]);
}
  
export default SearchWrapper;