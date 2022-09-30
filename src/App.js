import React, { useEffect, useReducer, useState } from "react";

import "./App.css";
import LeftNav from "./components/nav/LeftNav";
import SearchBar from "./components/search/SearchBar";
import MainContainer from "./components/main/MainContainer";
import SearchWrapper from "./components/search/SearchWrapper";
import { AppContext, appReducer, initialState } from "./utills";
import TableWrapper from "./components/tables/TableWrapper";
import Autocomplete from "./components/search/Autocomplete";

function App() {
  const value = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={value}>
      <div className="flex h-screen bg-white">
        <LeftNav />
        <div className="flex flex-col flex-1 h-full">
          <SearchWrapper />
          <MainContainer />
          <TableWrapper />
        </div>
      </div>
    </AppContext.Provider>
    
  );
}

export default App;


