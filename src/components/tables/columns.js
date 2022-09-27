import { format } from "date-fns";

export const COLUMNS = [
    {
        Header: "Id",
        accessor: "employeeID"
    },
    {
        Header: "Name",
        columns: [
            {
                Header: "First Name",
                accessor: "firstName"
            },
            {
                Header: "Last Name",
                accessor: "lastName"
            }
        ]
    },
    {
        Header: "Title",
        accessor: "title"
    },
    {
        Header: "Office Title",
        accessor: "titleOfCourtesy"
    },
    {
        Header: "DOB",
        accessor: "birthDate",
        Cell: ({value}) => {return format(new Date(value), "dd/MM/yyyy")}
    },
    {
        Header: "DOJ",
        accessor: "hireDate",
        Cell: ({value}) => {return format(new Date(value), "dd/MM/yyyy")}
    },
    {
        Header: "Address",
        columns: [
            {
                Header: "street",
                accessor: "street",
            },
            {
                Header: "city",
                accessor: "city",
            },
            {
                Header: "region",
                accessor: "region",
            },
            {
                Header: "postalCode",
                accessor: "postalCode",
            },
            {
                Header: "country",
                accessor: "country",
            },
            {
                Header: "phone",
                accessor: "phone",
            },

        ]
    }
]

// "address" : {
//     "street" : "908 W. Capital Way",
//     "city" : "Tacoma",
//     "region" : "WA",
//     "postalCode" : 98401,
//     "country" : "USA",
//     "phone" : "(206) 555-9482"
// },