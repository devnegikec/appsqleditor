import { format } from "date-fns";

const dataUtill = ({value}) => {
    return value ? format(new Date(value), "dd/MM/yyyy") : null;
}
const startCase = (value) => {
    return value
        .replace(/([A-Z])/g, (match) => ` ${match}`)
        .replace(/^./, (match) => match.toUpperCase())
        .trim();
}

const buildColumns = (obj) => {
    let outObj, value, key;

     if (typeof obj !== "object" || obj === null) {
        return obj // Return the value if inObject is not an object
      }
    outObj = [];
    for (key in obj) {
        const temp = obj[key];
        
        if (typeof temp !== "object" || temp === null) {
                if (key.toLowerCase().includes('date')) {
                    console.log("inculeds Date:-", key, temp);
                    value = {
                        Header: startCase(key),
                        accessor: key, 
                        Cell: ({value}) => {return format(new Date(value), "dd/MM/yyyy")}
                    }
                } else {
                    value = {
                        Header: startCase(key),
                        accessor: key
                    }
                }
        } else {
            value =  {
                Header: startCase(key),
                columns: buildColumns(temp)
            }
        }
        outObj.push(value);
    }
    // console.log("output:-", outObj);
    return outObj;
}

export default buildColumns;