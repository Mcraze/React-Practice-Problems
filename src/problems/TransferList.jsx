import { useState } from "react"

const TransferList = () => {

    const listItems = [
        "Apple",
        "Banana",
        "Grapes",
        "Orange",
        "Cherry"
    ]

    const [leftList, setLeftList] = useState(listItems)
    const [rightList, setRightList] = useState([])

    const [checkItems, setCheckItems] = useState([])

    function toggleList(item) {
        setCheckItems(prev => prev.includes(item) ? prev.filter(val => val !== item) : [...prev, item])
    }

    function shiftItemsToLeft() {
        const itemsToMove = rightList.filter(prev => checkItems.includes(prev))
        setLeftList(prev => [...prev, ...itemsToMove])
        setRightList(prev => prev.filter(val => !checkItems.includes(val)))
        setCheckItems([])
    }

    function shiftItemsToRight() {
        const itemsToMove = leftList.filter(prev => checkItems.includes(prev))
        setRightList(prev => [...prev, ...itemsToMove])
        setLeftList(prev => prev.filter(val => !checkItems.includes(val)))
        setCheckItems([])
    }

    return (
        <div className="max-w-xl mx-auto card">

            <div className="grid grid-cols-2 min-h-48">

                <div>
                    <h3 className="text-xl mb-2">Left List</h3>
                    <div className="grid gap-2">
                        {
                            leftList.map((item, index) => {
                                return (
                                    <div key={index} className="flex items-center gap-2">
                                        <input type="checkbox"
                                            id={item + index}
                                            className="w-auto"
                                            checked={checkItems.includes(item)}
                                            onChange={() => toggleList(item)}
                                        />
                                        <label htmlFor={item + index}>{item}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div>
                    <h3 className="text-xl mb-2">Right List</h3>
                    <div className="grid gap-2">
                        {
                            rightList.map((item, index) => {
                                return (
                                    <div key={index} className="flex items-center gap-2">
                                        <input type="checkbox"
                                            id={item + index}
                                            className="w-auto"
                                            checked={checkItems.includes(item)}
                                            onChange={() => toggleList(item)}
                                        />
                                        <label htmlFor={item + index}>{item}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>

            <div className="mt-4 flex justify-center gap-2">
                <button className="btn-primary" onClick={shiftItemsToLeft}>Move to Left</button>
                <button className="btn-primary" onClick={shiftItemsToRight}>Move to Right</button>
            </div>
        </div>
    )
}

export default TransferList

export const problemData = {
    difficulty: "Medium",
    name: "Transfer List",
    description: "Build a simple Transfer List component in React that allows users to move items from one list to another list.",
    path: "/problem/transfer-list",
};