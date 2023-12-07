/* eslint-disable react/prop-types */

const CustomTitle = ({ titleText }) => {
    return (
        <h1 className="text-white font-semibold text-lg text-center mb-2">{titleText ? titleText : "Your custom title"}</h1>
    )
}

export default CustomTitle