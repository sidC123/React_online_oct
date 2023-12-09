/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const Homepage = ({ navData }) => {
    return (
        <div className="max-w-[1440px] px-5 md:px-16">
            <h1 className="text-3xl font-bold mt-20 mb-5 text-center">View My Projects</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black text-lg">
                {
                    navData.map((item, index) => {
                        return (
                            <li key={index} className="border-4 rounded-lg border-blue-600 p-4 text-center bg-blue-400">
                                <Link to={item.URL} className="text-xl text-black font-semibold">
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Homepage