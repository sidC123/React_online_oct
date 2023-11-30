import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0);
  // const [firstName, setFirstName] = useState("Sherlock");
  // const [lastName, setLastName] = useState("Holmes");
  const [color, setColor] = useState("bg-slate-400");

  // const handleCount = () => {
  //   setCount((count) => count + 1);
  // }


  const [uText, setUText] = useState("TEXT ");

  const handleInput = (event) => {
    // console.log(event.target.value);
    setUText(event.target.value)
  }

  return (
    <>
      <div className={`w-full h-screen relative ${color}`}>

        {/* Project: Background color changer */}
        {/* <div>
          <button className='text-black p-4 bg-yellow-300 rounded' onClick={handleCount}>
            count is {count}
          </button>

          <h1 className=' '>My first name is {firstName} and last name is {lastName}</h1>

          <button
            className='text-black p-4 bg-yellow-300 rounded mr-4'
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


          <div className='w-full flex justify-center items-center absolute bottom-32 px-10 inset-x-0 gap-4'>
            <button
              className='bg-red-500 text-white rounded-[25px] shadow-lg px-4 py-2 text-2xl border-white border-[3px]'
              onClick={() => setColor("bg-red-400")}
            >
              Red
            </button>

            <button
              className='bg-green-500 text-black rounded-[25px] shadow-lg px-4 py-2 text-2xl border-white border-[3px]'
              onClick={() => setColor("bg-green-400")}

            >
              Green
            </button>

            <button
              className='bg-blue-500 text-white rounded-[25px] shadow-lg px-4 py-2 text-2xl border-white border-[3px]'
              onClick={() => setColor("bg-blue-400")}

            >
              Blue
            </button>
          </div>
        </div> */}

        <div className='w-full flex flex-col justify-center items-center p-10'>

          <input type='text' className='shadow-lg w-[200px]' onChange={handleInput} />

          <button>
            Get text
          </button>

          <p className='text-3xl font-bold'>
            User text:
            <span className='text-red-600'>
              {uText}
            </span>
          </p>
        </div>


      </div>
    </>
  )
}

export default App
