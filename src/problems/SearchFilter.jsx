import { useState } from "react"

const fruitList = [
    'Apple',
    'Banana',
    'Cherry',
    'Mango',
    'Orange',
    'Grapes',
    'Strawberry',
    'Pineapple',
    'Watermelon',
];

const SearchFilter = () => {

    const [search, setSearch] = useState("")

    const filteredFruits = fruitList.filter((fruit) => {
        return fruit.toLowerCase().includes(search.trim().toLowerCase())
    })

    return (
        <div className="max-w-xl mx-auto card">
            <div>
                <label className="block text-sm mb-1 ml-1">Search Fruit</label>
                <input type="text" onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="mt-4 grid gap-2">
                {
                    filteredFruits.length !== 0
                        ? filteredFruits.map((fruit, index) => {
                            return (
                                <div 
                                key={index} 
                                className={`${index === filteredFruits.length - 1 ? "border-b-0 pb-0" : "border-b pb-2"} border-neutral-300 dark:border-neutral-700`}
                                >
                                    {fruit}
                                </div>
                            )
                        })
                        : <div className="text-red-500 text-center">No items found</div>
                }
            </div>
        </div>
    )
}

export default SearchFilter

export const problemData = {
    difficulty: "Easy",
    name: "Search Filter",
    description: "Create a React component that shows the filtered fruits based on the text inserted into the Input box in Real-time.",
    path: "/problem/search-filter",
};