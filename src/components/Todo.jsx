// TASK:
// create a simple Todo List component that allows users to add new items to the list and delete items once they are completed. The Todo List should have the following features:
// An input field for adding new todo items
// A button to submit the new todo item
// Display the list of todo items
// A delete button next to each todo item to remove it from the list
// Use the useState hook to manage the todo list state

// Solution:
// 1. create useState() for take userInput
// 2. create useState() for taskList to add all the tasks. This will be an array.
// 3. create html input and add task button
// 4. add onChange event on the input and update the userInput state.
// 5. create onclick function on button which will push the new task i.e. userInput state value inside the taskList array. Either user push() method or spread operator to add the tasks
// 6. Clear out the userInput state and also add this state inside value attribute. (understand the reason behind it!)
// 7. map() the todoList array in the JSX with the delete button. Each li should have unique key i.e. index.
// 8. Create delete function which accepts an argument: index.
// 9. create a new variable which will hold the filteredArr ( except the index provided)
// 10. use set funcion of todoList and provide this filteredArray to it.

import { useState } from "react";
import CustomTitle from "./CustomTitle";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = () => {
        if (inputValue) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }

    const handleDelete = (index) => {
        console.log(index);
        setTodos(todos.filter((_, currentIndex) => currentIndex !== index));
    }

    return (
        <div className="w-1/2 p-4 bg-cyan-600 rounded-lg m-5">
            <CustomTitle titleText="My Todo App" />

            <div className="mx-auto w-fit">
                <input
                    type="text"
                    className="border rounded px-2"
                    placeholder="Add your task"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button
                    className="px-1 rounded font-semibold bg-green-600 ml-2 shadow"
                    onClick={handleSubmit}
                >
                    Add Item
                </button>
            </div>

            <ul className="mt-2 flex flex-col gap-2">
                {
                    todos && todos.map((todo, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between bg-yellow-500 text-white shadow p-1 rounded"
                        >
                            {todo}
                            <button
                                className="bg-red-600 p-1 font-semibold rounded text-black"
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo