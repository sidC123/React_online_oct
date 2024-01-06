/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmt } from "../../store/counterSlice";

const Homepage = ({ routeData }) => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()
    return (
        <div className="max-w-[1440px] mx-auto px-5 md:px-16 py-12">
            <h1 className="text-3xl font-bold mb-5 text-center text-white">View My Projects</h1>

            <div className='text-3xl text-orange-400 flex justify-center p-2 rounded border-2 w-fit mx-auto my-3 bg-slate-500 border-white'>
                <button className='text-white font-bold text-xl border p-2 rounded mx-2 bg-slate-600' onClick={() => dispatch(increment())}>Increment</button>
                <button className='text-white font-bold text-xl border p-2 rounded mx-2 bg-slate-600' onClick={() => dispatch(decrement())}>decrement</button>
                <button className='text-white font-bold text-xl border p-2 rounded mx-2 bg-slate-600' onClick={() => dispatch(incrementByAmt(10))}>incrementByAmt</button>
                {count}
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black text-lg">
                {
                    routeData.map((item, index) => {
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