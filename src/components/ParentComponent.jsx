import ChildComponent from './ChildComponent';
import { useState } from 'react';

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [firstName, setFirstName] = useState("Rahul");
    const [lastName, setLastName] = useState("Patel");

    const handleIncrease = () => {
        setCount(count + 1);
    }

    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className="bg-green-200 p-5 mt-4 shadow-custom rounded-2xl">
            <h4 className="bg-green-500 text-white mx-auto shadow-custom w-fit px-2">This is Parent.jsx</h4>

            <p>This is my useState value: {count}</p>
            <button className='bg-violet-600 p-1 rounded mr-2' onClick={() => handleIncrease()}>
                Increase Count
            </button>

            <button className='bg-orange-500 p-1 rounded' onClick={() => handleDecrease()}>
                Decrease Count
            </button>

            <ChildComponent
                firstName={firstName}
                lastName={lastName}
                setFirstName={setFirstName}
                setLastName={setLastName}
                propCount={count}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
            />
        </div>

    )
}

export default ParentComponent;