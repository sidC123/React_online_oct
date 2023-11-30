import ParentComponent from "./ParentComponent"

const GrandParent = () => {
    return (
        <div className="bg-red-200 p-5 w-full max-w-2xl mx-auto rounded-2xl">
            <h4 className="bg-red-500 w-fit px-2 text-white mx-auto shadow-custom">This is GrandParent.jsx</h4>

            <ParentComponent />
        </div>
    )
}

export default GrandParent