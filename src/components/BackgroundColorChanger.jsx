import { useState } from "react";

const BackgroundColorChanger = () => {
    const [count, setCount] = useState(0);
    const [firstName, setFirstName] = useState("Sherlock");
    const [lastName, setLastName] = useState("Holmes");
    const [color, setColor] = useState("bg-gray-600");

    const handleCount = () => {
        setCount((count) => count + 1);
    }


    return (
        <div className={`w-full h-screen ${color}`}>
            <button className='text-black p-4 mx-auto block bg-yellow-300 rounded' onClick={handleCount}>
                count is {count}
            </button>

            <h1 className=' '>My first name is {firstName} and last name is {lastName}</h1>

            <div className='flex justify-center w-full gap-2'>
                <button
                    className='text-black p-4 bg-yellow-300 rounded '
                    onClick={() => setFirstName("James")}
                >
                    Change first name
                </button>

                <button
                    className='text-black p-4 bg-yellow-300 rounded'
                    onClick={() => setLastName("Bond")}
                >
                    Change last name
                </button>
            </div>


            <div className='flex flex-col justify-center items-center fixed right-0 top-0 p-5 gap-4'>
                <button
                    className=' bg-red-500 text-white rounded-[25px] shadow-lg px-4 py-2 text-xs font-semibold border-white border-[3px]'
                    onClick={() => setColor("bg-red-400")}
                >
                    Red
                </button>

                <button
                    className=' bg-green-500 text-white rounded-[25px] shadow-lg px-4 py-2 text-xs font-semibold border-white border-[3px]'
                    onClick={() => setColor("bg-green-400")}

                >
                    Green
                </button>

                <button
                    className=' bg-blue-500 text-white rounded-[25px] shadow-lg px-4 py-2 text-xs font-semibold border-white border-[3px]'
                    onClick={() => setColor("bg-blue-400")}

                >
                    Blue
                </button>
            </div>
        </div>
    )
}

export default BackgroundColorChanger