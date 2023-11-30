import Button from "../Button"

const Navbar = () => {

    const navList = [
        {
            URL: "/",
            label: "Home",
        },
        {
            URL: "/contact-us",
            label: "Contact",
        },
        {
            URL: "/about-us",
            label: "About",
        },
        {
            URL: "/offers",
            label: "Offers",
        },
    ]

    return (
        <header>
            <nav className="flex justify-between items-center bg-white rounded-xl gap-4">
                <div>
                    <img src="./image.png" alt="" className="h-16" />
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

                    <Button btnText={"Buy Now"} />
                </div>
            </nav>
        </header >
    )
}

export default Navbar;