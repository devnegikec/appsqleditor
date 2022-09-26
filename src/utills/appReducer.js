import { editorActions, appActions } from "../constant";

export const initialState = {
  isLoading: false,
  queryRunning: false,
  queryString: '',
  tableData: [],
  serachResult: [],
  recentSearch: []
};

export const appReducer = (state, action) => {
  switch(action.type) {
    case editorActions.RUNQUERY:
      return {...state, queryRunning: action.queryRunning};
    case editorActions.UPDATEQUERY:
      return {...state, queryString: action.queryString};
    case appActions.UPDATETABLE:
      return {...state, tableData: action.tableData};
    case appActions.RECENTSEARCH:
      return {...state, recentSearch: action.recentSearch};
    case appActions.SEARCH:
      return {...state, serachResult: action.serachResult};
    default:
      throw new Error("Unexpected action type");
  }
};
