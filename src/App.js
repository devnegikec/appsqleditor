import React, { useReducer } from "react";

import "./App.css";
import LeftNav from "./components/nav/LeftNav";
import SearchBar from "./components/search/SearchBar";
import MainContainer from "./components/main/MainContainer";
import { AppContext, appReducer } from "./utills";

const initialState = {
  isLoading: false,
  queryRunning: false,
  queryString: '',
  tableData: [],
  serachResult: [],
  recentSearch: []
}

function App() {
  const value = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={value}>
      <div className="flex h-screen bg-white">
        <LeftNav />
        <div className="flex flex-col flex-1 h-full">
          <SearchBar />
          <MainContainer />
        </div>
      </div>
    </AppContext.Provider>
    
  );
}

export default App;
