/* eslint-disable react/prop-types */

const ChildComponent = ({ firstName, lastName, propCount, handleDecrease, handleIncrease }) => {

    // console.log(firstName, lastName);

    return (
        <div className="bg-blue-200 p-5 mt-4 shadow-custom rounded-2xl">
            <h4 className="bg-blue-500 text-white mx-auto shadow-custom w-fit px-2">This is Child.jsx</h4>
            <p>Student name is {firstName} {lastName}</p>

            <button className='bg-violet-600 p-1 rounded mr-2' onClick={handleIncrease}>
                Increase Count
            </button>

            <button className='bg-orange-500 p-1 rounded' onClick={handleDecrease}>
                Decrease Count
            </button>
            <p>
                {propCount}
                {/* Controlling Parent's state from parent and rendering in child */}
            </p>
        </div>
    )
}

export default ChildComponent;