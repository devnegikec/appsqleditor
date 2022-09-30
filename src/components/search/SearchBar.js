import {
  useContext,
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback
} from 'react';

import { AppContext, debounce } from '../../utills';
import { appActions, editorActions } from '../../constant';
import Autocomplete from "./Autocomplete";
import { UserIcon } from "../Icons";

function SearchBar() {
  const ref = useRef(null);
  const [state, dispatch] = useContext(AppContext);
  const { recentSearch } = state;

  const [search, setSearchResult] = useState([]);
 
  const keypressHandler = (e) => {
    const min = 1000, max = 10000;
    let query = ref.current.value.trim();
    const type = ["aws", "snowflake", "query", "user"];
    let searchType = "";

    if (e.key === "Enter") {
        if(query.toLowerCase().includes('table:')) {
          searchType = "table";
          const tableName = query.split("table:")[1].trim();
          dispatch({
            type: editorActions.SELECTTABLE, selectedTable: tableName
          })
        }
        const searchItem = {
          "id": Math.floor(Math.random() * (max - min + 1)) + min,
          "value": query,
          "details": {
            "type": searchType || type[Math.floor(Math.random() * type.length)],
            "source": "user_search",
            "lastsearch": new Date().getTime()
          }
      };

      dispatch({
        type: appActions.RECENTSEARCH, recentSearch: [...recentSearch, searchItem]
      })
      ref.current.value = "";
      query = "";
      searchType = "";
    }

    if(!query) {
      dispatch({
        type: appActions.SHOWRECENT, showRecent: true
      })
    } else {
      dispatch({
        type: appActions.SHOWRECENT, showRecent: false
      })
    }
  }

  const keypressHandlerDebounce = useCallback(debounce(keypressHandler), [recentSearch]);

  const focusHandler = () => {
    if(!ref.current.value) {
      dispatch({
        type: appActions.SHOWRECENT, showRecent: true
      })
    } else {
      dispatch({
        type: appActions.SHOWRECENT, showRecent: false
      })
    }
  }
  
  return useMemo(() => {
    return (
      <header className="flex-shrink-0 border-b">
          <div className="flex items-center justify-between p-2">
            <div className="items-center px-2 space-x-2 md:flex-1 md:flex md:mr-auto md:ml-5">
            <span>
              <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <input ref={ref} type="text" placeholder="Search" onKeyUp={keypressHandlerDebounce} onFocus={focusHandler} className="px-4 py-3 rounded-md hover:bg-gray-100 lg:max-w-sm md:py-2 md:flex-1 focus:outline-none md:focus:bg-gray-100 md:focus:shadow md:focus:border"></input>
            </div>
            <div className="relative flex items-center space-x-3">
              <div className="relative">
              <button className="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring">
                <UserIcon />
              </button>
              </div>
            </div>
          </div>
      </header>
    );
  }, [recentSearch]);
}

export default SearchBar;
