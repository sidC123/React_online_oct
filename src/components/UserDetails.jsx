/* eslint-disable react/prop-types */
import "./UserDetails.css";

const UserDetails = () => {
    return (
        <div className="bg-red-500 border-lime-200 p-3 m-3">
            <h1 className="font-extrabold">User ID: </h1>
            <h1 className="username">Username: </h1>
            <h1>Contact: </h1>
            <h1>email: </h1>
        </div>
    )
}

export default UserDetails