/* eslint-disable react/prop-types */
const Card = ({ uName, designation, studentData }) => {
    return (
        <div className="m-16 bg-pink-700 border-2">
            <h1>Card Component</h1>
            <p>Designation: {designation}</p>
            <p>User name: {uName}</p>

            <div className="bg-gray-500 border-2 m-3">
                <ul>
                    {
                        studentData.map((std, index) => {
                            return (
                                <li key={index} >{std.stdName} with roll number {std.rollNo}</li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    )
}

export default Card;

