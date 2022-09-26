import { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../utills/contextUtills';
import { appActions } from '../../constant';
import Autocomplete from "./Autocomplete";
import { UserIcon } from "../Icons";

function SearchBar() {
  const [state, dispatch] = useContext(AppContext);
    const { recentSearch } = state;

  const [search, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");
  const [isRecent, setIsRecent] = useState(false);

  const getRecentSearch = () => {
    fetch('data/recentsearch.json')
      .then((response) => {
          return response.json();
      })
      .then((data) => {
          dispatch({
              type: appActions.RECENTSEARCH, recentSearch: data
          })
      })
  };

  useEffect(() => {
    const result = getRecentSearch();
  }, [isRecent]);

  const keypressHandler = (e) => {
    const query = e.target.value.trim();
    if(!query) {
      focusHandler();
    }
    setIsRecent(false);
    setQuery(query);
  }

  const focusHandler = () => {
    if(!query) {
      setIsRecent((prevIsRecent) => !prevIsRecent);
    }
  }

  const onBlurHandler = () => {
    if(isRecent) {
      setIsRecent(false);
    }
  }
  
  return (
      <header className="flex-shrink-0 border-b">
          <div className="flex items-center justify-between p-2">
            <div className="items-center px-2 space-x-2 md:flex-1 md:flex md:mr-auto md:ml-5">
            <span>
              <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <input type="text" placeholder="Search" onBlur={onBlurHandler} onKeyUp={keypressHandler} onFocus={focusHandler} className="px-4 py-3 rounded-md hover:bg-gray-100 lg:max-w-sm md:py-2 md:flex-1 focus:outline-none md:focus:bg-gray-100 md:focus:shadow md:focus:border"></input>
            </div>
            <div className="relative flex items-center space-x-3">
              <div className="relative">
              <button className="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring">
                <UserIcon />
              </button>
              </div>
            </div>
          </div>
          {isRecent ? <Autocomplete results={recentSearch} recent={isRecent} />: null}
      </header>
  );
}

export default SearchBar;
