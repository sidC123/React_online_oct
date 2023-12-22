import { useState } from "react"

const UpdateObjectsInsideArray = () => {
    const [name, setName] = useState({ firstname: "Sherlock", lastName: "Holmes" });

    const [people, setPeople] = useState([
        { id: 1, name: "John Doe", nickName: "Johnny" },
        { id: 2, name: "Jane Smith", nickName: "Jany" },
        { id: 3, name: "Bob Johnson", nickName: "Bobby" }
    ]);

    const handleChange = () => {
        setName({ ...name, firstname: "Enola" });
    }

    const updateName = (id, newFirstName) => {
        setPeople((prevPeople) => {
            const updatedPeople = prevPeople.map(person => {
                if (person.id === id) {
                    return { ...person, name: newFirstName };
                }
                return person;
            });

            return updatedPeople;
        });
    };

    return (
        <div className="flex justify-center p-10 w-full">
            <div className="shadow-lg bg-warning p-4 font-semibold max-w-xl w-full">
                <h4>
                    My name  first name is {name.firstname} and last name is {name.lastName}
                </h4>

                <button className="text-white rounded bg-gray-500 mb-2 px-1" onClick={handleChange}> Click to update name </button>

                {people.map((person) => (
                    <h5 key={person.id} className="font-semibold p-1 mb-2 flex gap-2 justify-between items-center bg-slate-500">
                        {person.id}: {person.name}

                        <button
                            className="p-1 bg-green-500"
                            onClick={() => updateName(person.id, person.nickName)}
                        >
                            Update
                        </button>
                    </h5>
                ))}

            </div>
        </div>
    )
}

export default UpdateObjectsInsideArray