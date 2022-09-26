import { TableIcon, UserIcon, EditIcon } from "../Icons";
const iconType = {
    TABLE: 'table',
    USER: 'user',
    AWS: 'aws',
    SNOWFLAKE: 'snowflake',
    QUERY: 'query'
};

function Autocomplete({ results, recent }) {

    const getIcon = (type) => {
        switch(type) {
            case iconType.TABLE:
                return <TableIcon />
            case iconType.AWS:
                return <TableIcon />
            case iconType.SNOWFLAKE:
                return <TableIcon />
            case iconType.QUERY:
                return <EditIcon />
            default:
                return <UserIcon />
        }
    }

    const handleSelectSearch = () => {

    }

    return (
        <div className="absolute top-90 ml-5 mt-1 w-1/2 border bg-gray-100 shadow-xl rounded">
            <h2 className="p-3 text-blue-400">{recent ? "Recent" : "" }</h2>
            <div className="p-3">
                <div className="divide-y">
                    {
                        results.map((result) => {
                            return (<a href="#" key={result.id} onClick={handleSelectSearch} className="p-2 flex w-full rounded hover:bg-gray-200">
                                        {getIcon(result.details.type)}
                                        <span className="">{result.value}</span>
                                    </a>);
                        })
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default Autocomplete;
