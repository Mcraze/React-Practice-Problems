import { useState } from "react"

const SortableList = () => {

    const [listItems, setListItems] = useState([])
    const [inputValue, setInputValue] = useState("")

    function handleAddItem(e) {
        e.preventDefault()
        if (inputValue.trim() === "") return
        setListItems(prev => [...prev, inputValue.trim()])
        setInputValue("")
    }

    function handleSortChange(sortOrder) {
        if (sortOrder === "asc") {            
            const sortedList = [...listItems].sort((a, b) => a.localeCompare(b))
            setListItems(sortedList)
        } else if (sortOrder === "desc") {
            const sortedList = [...listItems].sort((a, b) => b.localeCompare(a))
            setListItems(sortedList)
        }
    }

    return (
        <div className="max-w-xl mx-auto card">
            <div>
                <label className="block text-sm mb-1 ml-1">Add Items Here</label>
                <form className="flex gap-2" onSubmit={handleAddItem}>
                    <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} name="list-input-field" />
                    <button className="btn-primary min-w-max whitespace-nowrap">Add Item</button>
                </form>
            </div>
            <div className="mt-4 flex gap-2">
                <button className="btn-primary grow" onClick={() => handleSortChange("asc")}>Sort Ascending</button>
                <button className="btn-primary grow" onClick={() => handleSortChange("desc")}>Sort Descending</button>
            </div>
            <div>
                <ul className="list-disc list-inside">
                    {
                        listItems.map((item, index) => (
                            <li key={index} className="mt-2 marker:mr-0">
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SortableList

export const problemData = {
    difficulty: "Medium",
    name: "Sortable List",
    description: "Create a sortable list component that allows users to add items and reorder them as ascending or descending as needed.",
    path: "/problem/sortable-list",
};