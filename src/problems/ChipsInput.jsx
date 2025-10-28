import { X } from "lucide-react";
import { useState } from "react";

const ChipsInput = () => {

    const [chips, setChips] = useState([])

    function handleChipSubmission(e) {
        if (e.key === "Enter") {
            const chipValue = e.target.value.trim();
            if (!chips.includes(chipValue) && chipValue) {
                setChips(prev => ([...prev, chipValue]))
                return e.target.value = "";
            }
        }
    }

    function handleChipDeletion(chipIndex) {
        setChips(prev => prev.filter((element, index) => {
            return index != chipIndex;
        }))
    }

    return (
        <div className='max-w-4xl m-auto min-h-60 card'>
            <div>
                <label className="block text-sm mb-1 ml-1">Add text and click enter</label>
                <input type="text" onKeyUp={handleChipSubmission} />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((chip, index) => {
                    return (
                        <span key={index} className="p-2 flex gap-2 text-xs font-semibold bg-zinc-200 dark:bg-zinc-700 rounded-lg">
                            {chip}
                            <button onClick={() => handleChipDeletion(index)} className="hover:text-red-500 transition-colors duration-300 cursor-pointer">
                                <X size={16} />
                            </button>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default ChipsInput

export const problemData = {
    difficulty: "Easy",
    name: "Chips Input",
    description: "Build a component that takes input of tags or keywords. The component will display these tags and can add and remove it.",
    path: "/problem/chips-input",
};