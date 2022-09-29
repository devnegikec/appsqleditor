import React, { useEffect, useReducer, useState } from "react";

import "./App.css";
import LeftNav from "./components/nav/LeftNav";
import SearchBar from "./components/search/SearchBar";
import MainContainer from "./components/main/MainContainer";
import { AppContext, appReducer, initialState } from "./utills";
import TableWrapper from "./components/tables/TableWrapper";

function App() {
  const value = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={value}>
      <div className="flex h-screen bg-white">
        <LeftNav />
        <div className="flex flex-col flex-1 h-full">
          <SearchBar />
          <MainContainer />
          <TableWrapper />
        </div>
      </div>
    </AppContext.Provider>
    
  );
}

export default App;
