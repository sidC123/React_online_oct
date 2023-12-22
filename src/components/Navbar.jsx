/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ navData }) => {
    return (
        <header className="h-[70px] flex justify-center items-center bg-slate-300 shadow-lg sticky top-0 w-full">
            <nav className="w-full flex justify-between items-center gap-4 px-4">
                <Link to='/' className="font-bold text-3xl text-orange-500">
                    ReactJS
                </Link>

                <div className="flex gap-5 items-center">
                    <ul className="flex justify-between gap-4 text-black text-lg">
                        {
                            navData.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink
                                            to={item.URL}
                                            className={({ isActive }) => `text-xl ${isActive ? "text-orange-500" : "text-blue-500"} font-semibold`}
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button className="bg-slate-500 text-white text-xl py-1 px-2 font-semibold rounded">
                        Hire Me
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;