function LeftNav() {
    return (
        <>
            <div className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden">SideBar</div>
            <aside className="fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none">
            <div className="flex items-center justify-between flex-shrink-0 p-2">
                <span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
                Atlan
                </span>
                <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
                <ul className="p-2 overflow-hidden">
                    <li>
                    <a
                    href="#"
                    className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                    >Dashboard</a>
                    </li>
                    <li>
                    <a
                    href="#"
                    className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                    >More</a>
                    </li>
                </ul>
                </nav>
            </div>
            </aside>
        </>
    );
};

export default LeftNav;