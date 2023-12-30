// {
//     // import { useState, useEffect } from 'react';
//     // import axios from 'axios';

//     // export default function ApiRequest() {
//     //     const [items, setItem] = useState([]);
//     //     const [userName, setUserName] = useState('');

//     //     const getUsers = async () => {
//     //         try {
//     //             const res = await axios.get('https://6443f21e466f7c2b4b5df7ed.mockapi.io/users')
//     //             setItem(res.data);
//     //             console.log(items);
//     //         } catch (e) {
//     //             alert(e)
//     //         }
//     //     }

//     //     const addUser = async (e) => {
//     //         e.preventDefault()
//     //         const payload = { name: userName }
//     //         try {
//     //             const res = await axios.post('https://6443f21e466f7c2b4b5df7ed.mockapi.io/users', payload);
//     //             setItem([...items, res.data]);
//     //             setUserName('');
//     //             console.log("user added successfully");
//     //         } catch (e) {
//     //             alert(e)
//     //         }
//     //     }

//     //     const removeUser = async (id) => {
//     //         try {
//     //             const res = await axios.delete(`https://6443f21e466f7c2b4b5df7ed.mockapi.io/users/${id}`);
//     //             console.log(res, 'Item successfully deleted.');
//     //             getUsers();
//     //         } catch (error) {
//     //             alert(error)
//     //         }
//     //     }

//     //     useEffect(() => {
//     //         getUsers();
//     //     }, [])

//     //     useEffect(() => {
//     //         console.log(items);
//     //     }, [items])


//     //     return (
//     //         <div className="container mt-2">
//     //             <h2>React HTTP Post Request Example</h2>

//     //             {/* <button onClick={getUsers} className="btn btn-warning my-5">
//     //                 Get users
//     //             </button> */}

//     //             <form onSubmit={addUser}>
//     //                 <div className="mb-2 mt-3">
//     //                     <input
//     //                         type="text"
//     //                         placeholder="Name"
//     //                         className="form-control"
//     //                         onChange={(event) => {
//     //                             setUserName(event.target.value)
//     //                         }}
//     //                         value={userName}
//     //                     />
//     //                 </div>
//     //                 <button type="submit" className="btn btn-success">
//     //                     Create
//     //                 </button>
//     //             </form>

//     //             <ul className="list-group">
//     //                 {items.map((x) => {
//     //                     return (
//     //                         <li
//     //                             className="list-group-item d-flex justify-content-between align-items-start"
//     //                             key={x.id}
//     //                         >
//     //                             <div className="ms-2 d-flex gap-5 me-auto">
//     //                                 {/* <div className="fw-bold">{x.userName}</div> */}
//     //                                 <div className="fw-bold">{x.name}</div>
//     //                                 <button className="remove btn btn-danger" onClick={() => removeUser(x.id)}>
//     //                                     Delete
//     //                                 </button>
//     //                             </div>
//     //                         </li>
//     //                     )
//     //                 })}
//     //             </ul>
//     //         </div>
//     //     )
//     // }
// }

import { useState, useEffect } from "react";
import axios from "axios";

const ApiRequests = () => {
    const [contacts, setContacts] = useState([]);
    const [userData, setUserData] = useState({
        name: '',
        age: '',
        email: '',
        gender: ''
    });

    const getUsers = async () => {
        try {
            const res = await axios.get("https://6443f21e466f7c2b4b5df7ed.mockapi.io/users");
            console.log(res.data);
            setContacts(res.data);
            console.log(contacts)
        } catch (error) {
            console.log(error);
        }
    }

    const addUser = async (e) => {
        e.preventDefault();
        const res = await axios.post("https://6443f21e466f7c2b4b5df7ed.mockapi.io/users", userData);
        setContacts([...contacts, res.data]);
        setUserData({
            name: '',
            age: '',
            email: '',
            gender: ''
        });
    }

    const deleteContact = async (id) => {
        await axios.delete(`https://6443f21e466f7c2b4b5df7ed.mockapi.io/users/${id}`);
        getUsers();
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className="p-10">
            <h1 className="font-semibold text-xl">My Contacts</h1>

            <form onSubmit={addUser} className="flex gap-3 my-2">
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    placeholder="Name"
                    className="border-4 w-1/4 rounded"
                />

                <input
                    type="number"
                    name="age"
                    value={userData.age}
                    onChange={(e) => setUserData({ ...userData, age: e.target.value })}
                    placeholder="Age"
                    className="border-4 w-1/4 rounded"
                />

                <input
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    placeholder="Email"
                    className="border-4 w-1/4 rounded"
                />

                <input
                    type="text"
                    name="gender"
                    value={userData.gender}
                    onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                    placeholder="Gender"
                    className="border-4 w-1/4 rounded"
                />

                <button type="submit" className="py-1 px-2 font-semibold rounded bg-green-500">ADD USER</button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {
                    contacts.map((person) => (
                        <div className="bg-slate-400 flex items-center justify-between p-2 mb-1 shadow-md" key={person.id}>
                            <span className="font-semibold text-lg">{person.name}</span>
                            <button className="bg-orange-600 text-white font-semibold rounded p-1" onClick={() => deleteContact(person.id)}>Remove Contact</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ApiRequests;
