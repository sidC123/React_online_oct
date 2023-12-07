
const Navbar = () => {

    const navList = [
        {
            URL: "/",
            label: "Home",
        },
        {
            URL: "/todo",
            label: "Todo",
        },
        {
            URL: "/grand-parent",
            label: "GrandParent",
        },
    ]

    return (
        <header>
            <nav className="flex justify-between items-center shadow-lg bg-white gap-4 px-4">
                <div className="font-bold text-lg text-orange-500">
                    ReactJS
                </div>

                <div className="flex gap-5 items-center">
                    <ul className="flex justify-between gap-4 text-black">
                        {
                            navList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.URL}>
                                            {item.label}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <button className="bg-blue-200 p-2 rounded-md">
                        Buy Now
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;