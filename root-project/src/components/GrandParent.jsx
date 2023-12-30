import ParentComponent from "./ParentComponent"

// Notes:
// 1. State created in parent
// 2. State passed to child 
// 3. State updated from parent in both the components

// 1. State created in parent
// 2. State passed to child 
// 3. Parent state controlled from child
// 4. By passing the parent functions

const GrandParent = () => {
    return (
        <div className="bg-red-200 p-5 w-full max-w-2xl mx-auto rounded-2xl mt-20">
            <h4 className="bg-red-500 w-fit px-2 text-white mx-auto shadow-custom">This is GrandParent.jsx</h4>

            <ParentComponent />
        </div>
    )
}

export default GrandParent