// import axios from "axios";
// import { useEffect, useState } from "react";

// const Demo = () => {
//     const [allUsers, setAllUsers] = useState([]);
//     const [newUser, setNewUser] = useState('');

//     // get request
//     const getUsers = async () => {
//         try {
//             const users = await axios.get("https://6443f21e466f7c2b4b5df7ed.mockapi.io/users");
//             setAllUsers(users.data);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         getUsers();
//     }, [])

//     // Post request
//     const addUsers = async (e) => {
//         e.preventDefault();
//         try {
//             const payload = { name: newUser }
//             await axios.post("https://6443f21e466f7c2b4b5df7ed.mockapi.io/users", payload);
//             setNewUser("")
//             getUsers();
//         } catch (error) {
//             console.log(error);
//         } ``
//     }

//     // Delete
//     const deleteUser = async (userId) => {
//         try {
//             await axios.delete(`https://6443f21e466f7c2b4b5df7ed.mockapi.io/users/${userId}`);
//             getUsers();
//         } catch (error) {
//             console.log(error);
//         }
//     }


//     return (
//         <div className="py-5 px-20">
//             <h1 className="text-3xl mb-2 text-center font-bold text-white uppercase">My contacts</h1>

//             <form onSubmit={addUsers} className="flex justify-center mb-5">
//                 <input
//                     type="text"
//                     name=""
//                     className="w-1/3"
//                     onChange={(e) => { setNewUser(e.target.value) }}
//                     value={newUser}
//                 />

//                 <button
//                     type="submit"
//                     className="text-white bg-green-700 px-1"
//                 >
//                     Add User
//                 </button>
//             </form>

//             <ul className="grid grid-cols-4 gap-2">
//                 {
//                     allUsers && allUsers.map((user) => (
//                         <li key={user.id} className="flex gap-3 justify-between items-center bg-yellow-300 p-3">
//                             <h2 >{user.name}</h2>
//                             <button
//                                 className="bg-red-500 px-1"
//                                 onClick={() => { deleteUser(user.id) }}
//                             >
//                                 Delete
//                             </button>
//                         </li>
//                     ))
//                 }
//             </ul>

//         </div>
//     )
// }

// export default Demo

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import "./Formik_without_Ui_library/Form.scss"


const Demo = () => {
    const initialValues = {
        email: "",
        password: ""
    }

    const myValidations = Yup.object().shape({
        email: Yup.string().email().required("Email is needed for registration"),
        password: Yup.string()
            .required("Passwrod is required")
            .min(8, "Password must be atleast 8 charcters long")
            .max(16, "password must be at most 16 characters long")
    })

    const handleSubmit = (values) => {
        console.log("Form submitted successfully", values)
    }

    return (
        <>
            <div className="text-white text-xl bg-slate-600 container mx-auto">
                <h1>Form Validation</h1>

                <div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={myValidations}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {(props) => {
                            const { error, isValid, touched } = props;
                            return (

                                <Form>
                                    <div className="flex flex-col mb-2">
                                        <label htmlFor="email">Email ID</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            id="email"
                                        />
                                        <ErrorMessage name="email" component="span" className="error" />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="password">Password</label>
                                        <Field
                                            type="password"
                                            name="password"
                                            id="password"

                                        />
                                        <ErrorMessage name="password" component="span" className="error" />
                                    </div>

                                    <button
                                        disabled={!isValid}
                                    >
                                        Submit Form
                                    </button>
                                </Form>
                            )
                        }}
                    </Formik >

                </div >
            </div >

        </>
    )
}

export default Demo;



























