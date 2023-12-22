import { useRef, useState } from "react";

const TodoDemo = () => {

    const [currentTodo, setCurrentTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const inputRef = useRef(null)

    const handleCurrentTask = (event) => {
        setCurrentTodo(event.target.value);
    }

    const handleAddTodo = () => {
        setTodoList([...todoList, currentTodo]);
        setCurrentTodo("");
        inputRef.current.focus();
    }

    const handleDeleteTodo = (index) => {
        let filteredArr = todoList.filter((_, currentIndex) => currentIndex !== index);
        setTodoList(filteredArr);
        console.log(filteredArr);
    }

    const handleUpdateTodo = (currIndex, currValue) => {
        if (currValue !== "") {
            setTodoList((prevTodos) => {
                return (
                    prevTodos.map((ele, index) => {
                        if (index === currIndex) {
                            return currValue;
                        } else {
                            return ele
                        }
                    })
                )
            })
        } else {
            alert("Input field cannot be blank while updating");
        }
        setCurrentTodo("");
        inputRef.current.focus();
    }

    return (
        <div className="border-4 border-red-500 p-6">
            <h1>TodoDemo</h1>
            <div className="flex gap-3 items-stretch justify-between">
                <input
                    type="text"
                    className="px-2 border-blue-600 rounded-md shadow"
                    placeholder="Add your task"
                    value={currentTodo}
                    onChange={handleCurrentTask}
                    ref={inputRef}
                />
                <button
                    className="text-sm bg-lime-500 p-1 rounded"
                    onClick={handleAddTodo}
                >
                    Add Task
                </button>
            </div>

            <ul className="flex flex-col gap-1 py-2">
                {
                    todoList.map((task, index) => (
                        <li key={index} className="flex gap-2 justify-between p-1 bg-blue-400 rounded">
                            <p>
                                {task}
                            </p>
                            <button
                                className="text-sm bg-red-500 p-1 rounded"
                                onClick={() => handleDeleteTodo(index)}
                            >
                                Remove
                            </button>

                            <button
                                className="text-sm bg-orange-500 p-1 rounded"
                                onClick={() => handleUpdateTodo(index, currentTodo)}
                            >
                                Update
                            </button>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default TodoDemo;