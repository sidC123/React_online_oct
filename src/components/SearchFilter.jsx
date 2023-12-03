// Create an input field for users to type in their search query
// Display the list of items and filter them based on the user's search input
// Use the useState hook to manage the search input state

import { useState } from "react";

const SearchFilter = () => {
    const items = [
        "Apple",
        "Banana",
        "Orange",
        "Grapes",
        "Strawberry",
        "Pineapple",
        "Mango",
        "Watermelon",
        "Peach",
        "Pear",
        "Cherry",
        "Plum",
        "Kiwi",
        "Lemon",
        "Coconut",
        "Avocado",
        "Blueberry",
        "Raspberry",
        "Cantaloupe",
        "Fig",
        "Pomegranate",
        "Papaya",
        "Lychee",
        "Guava",
        "Apricot"
    ];
    // const [items, setItems] = useState(['Apple', 'Banana', 'Carrot', 'Date', 'Eggplant', 'Fig', 'Grape']);

    // to store search quey
    const [search, setSearch] = useState('');

    // to store filtered array
    const [result, setResult] = useState(items);


    const handleSearchQuery = (event) => {
        // setting the query string to 'search' useState
        const query = event.target.value.toLowerCase();
        setSearch(query);

        // filtering the array based on search query
        const filteredItems = items.filter((item) => item.toLowerCase().includes(query));

        // setting filtered array to 'result'
        setResult(filteredItems);
    }

    return (
        <div>
            <h1>Search Filter</h1>
            <input
                type="text"
                value={search}
                onChange={handleSearchQuery}
                className="shadow rounded text-sm border border-red-400"
            />

            <ul className="bg-slate-400 p-2 flex flex-col gap-1 min-h-[200px] max-h-[300px] overflow-y-auto">
                {
                    result && result.map((result, index) => (
                        <li
                            key={index}
                            className="px-2 leading-md w-fit text-sm rounded bg-white border border-gray-500"
                        >
                            {result}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SearchFilter