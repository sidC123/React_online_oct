import { useState } from 'react';
import GrandParent from "./components/GrandParent"

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("Sherlock");
  const [lastName, setLastName] = useState("Holmes");
  const [color, setColor] = useState("bg-slate-400");

  const handleCount = () => {
    setCount((count) => count + 1);
  }


  const [inputText, setInputText] = useState("Initial input text");
  const [showText, setShowtext] = useState("Initial show text");

  const handleInput = (event) => {
    // console.log(event.target.value);
    setInputText(event.target.value)
  }

  return (
    <>
      <main className={`w-full min-h-screen relative ${color} flex flex-col justify-center items-center`}>

        {/* Project: Background color changer */}
        <div>
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

        <div className='w-full flex flex-col justify-center items-center p-10'>

          <input type='text' className='shadow-lg w-[400px]' onChange={handleInput} />

          <button
            className='p-1 border-2 border-black rounded bg-blue-500 m-2'
            onClick={() => {
              setShowtext(inputText);
            }}
          >
            Get text
          </button>

          <p className='text-3xl font-bold'>
            User text:
            <span className='text-red-600'>
              {showText}
            </span>
          </p>
        </div>
        <GrandParent />
      </main>
    </>
  )
}

export default App
