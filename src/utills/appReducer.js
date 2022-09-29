import { editorActions, appActions } from "../constant";

export const initialState = {
  isLoading: false,
  queryRunning: false,
  queryString: "",
  tableData: [],
  tableColumns: [],
  serachResult: [],
  recentSearch: [],
  selectedTable: "employees",
  tableList: [
    "categories",
    "customers",
    "employee_territories",
    "employees",
    "order_details",
    "orders",
    "products",
    "shippers",
    "suppliers",
    "territories",
  ]
};

export const appReducer = (state, action) => {
  switch(action.type) {
    case appActions.ISLOADING:
      return {...state, isLoading: action.isLoading};
    case editorActions.RUNQUERY:
      return {...state, queryRunning: action.queryRunning};
    case editorActions.UPDATEQUERY:
      return {...state, queryString: action.queryString};
    case appActions.UPDATETABLECOLUMNS:
      return {...state, tableColumns: action.tableColumns}
    case appActions.UPDATETABLE:
      return {...state, tableData: action.tableData};
    case appActions.RECENTSEARCH:
      return {...state, recentSearch: action.recentSearch};
    case appActions.SEARCH:
      return {...state, serachResult: action.serachResult};
    case editorActions.SELECTTABLE:
      return {
        ...state,
        selectedTable: action.selectedTable,
        queryString: `select * from ${action.selectedTable};`
      };
    default:
      throw new Error("Unexpected action type");
  }
};
