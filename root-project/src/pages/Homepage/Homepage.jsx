/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmt } from "../../store/counterSlice";

const Homepage = ({ homedata }) => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()
    return (
        <div className="max-w-[1440px] px-5 md:px-16">
            <h1 className="text-3xl font-bold mt-20 mb-5 text-center">View My Projects</h1>
            <div className='text-3xl text-orange-400 flex justify-center'>
                <button className='text-white font-bold text-xl border mx-2' onClick={() => dispatch(increment())}>Increment</button>
                {count}
                <button className='text-white font-bold text-xl border mx-2' onClick={() => dispatch(decrement())}>decrement</button>
                <button className='text-white font-bold text-xl border mx-2' onClick={() => dispatch(incrementByAmt(10))}>incrementByAmt</button>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black text-lg">
                {
                    homedata.map((item, index) => {
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