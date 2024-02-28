import { useState, useEffect, useRef } from 'react';

// Define variables as useStates: length, numAllowed, charAllowed
// And to store the final password create a new state (total 4 states are being used)
// HTML- Password text input, copy button, input range for length, check boxes for number and characters
// First get all values in respective states onChange
// Genrating random password:
// we nned a string of letters both small and caps
// Think of a loop which can iterate over the string and get random index values
// the value count will be equal to my length hence the loop condition
// breakdown thge ranodm index step
// logic to concat string with numbers or charcater when checkboxes are checked
// In the end set the pasword in the state
// Now finally think hwo this password will be already shown when first load and on every change of states
// The copy password method?

function PasswordGen() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("");

    let numOfCopy = useRef(0);

    //useRef hook
    const passwordRef = useRef(null)

    const copyPasswordToClipboard = () => {
        let currentPassword = passwordRef.current.value;
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, currentPassword.length);
        window.navigator.clipboard.writeText(password)
        numOfCopy.current += 1;
    }

    useEffect(() => {
        const passwordGenerator = () => {
            let pass = ""
            let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

            if (numberAllowed) str += "0123456789"
            if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

            for (let i = 1; i < length; i++) {
                let char = Math.floor(Math.random() * str.length + 1)
                pass += str[char]
            }
            setPassword(pass)
        }
        passwordGenerator()
    }, [length, numberAllowed, charAllowed])

    return (
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
            <h1 className='text-white text-center my-3'>Password generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                    type="text"
                    value={password}
                    className="outline-none w-full py-1 px-3"
                    placeholder="Password"
                    readOnly
                    ref={passwordRef}
                />
                <button
                    onClick={copyPasswordToClipboard}
                    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
                >
                    copy
                </button>
            </div>

            <div className='flex text-sm gap-x-2'>
                {/* length range */}
                <div className='flex items-center gap-x-1'>
                    <input
                        type="range"
                        min={8}
                        max={100}
                        value={length}
                        className='cursor-pointer'
                        onChange={(e) => { setLength(e.target.value) }}
                    />
                    <label>Length: {length}</label>
                </div>

                {/* Number checkbox */}
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={numberAllowed}
                        id="numberInput"
                        onChange={() => {
                            setNumberAllowed((prev) => !prev);
                        }}
                    />
                    <label htmlFor="numberInput">Numbers</label>
                </div>

                {/* Characters checkbox */}
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        id="characterInput"
                        onChange={() => {
                            setCharAllowed((prev) => !prev)
                        }}
                    />
                    <label htmlFor="characterInput">Characters</label>
                </div>
            </div>
        </div>
    )
}

export default PasswordGen;