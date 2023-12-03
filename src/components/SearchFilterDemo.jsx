import { useState } from "react";

const SearchFilterDemo = () => {
    const fruits = ["Apple",
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
        "Apricot"]

    const [searchText, setSearchText] = useState("");
    console.log(searchText);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        console.log(searchText);
    }

    return (
        <div className="border-2 rounded bg-green-300 m-16 p-2">
            <h1>Search filter demo</h1>

            <input
                type="text"
                value={searchText}
                className="w-[400px] rounded bg-gray-300"
                onChange={handleSearch}
            />

            <ul className="w-full p-2 shadow mt-2">
                <li className="bg-gray-400 mb-1 px-2">Item</li>
                <li className="bg-gray-400 mb-1 px-2">Item</li>
                <li className="bg-gray-400 mb-1 px-2">Item</li>
            </ul>
        </div>
    )
}

export default SearchFilterDemo;