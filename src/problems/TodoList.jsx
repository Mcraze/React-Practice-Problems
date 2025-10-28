import { Pen, Trash, Trash2 } from "lucide-react"
import { useReducer, useState } from "react"

const TodoList = () => {

    const initialValue = []

    const [listItems, dispatch] = useReducer(reducerFunction, initialValue)

    function reducerFunction(currentState, action) {
        switch (action.type) {
            case "add_item": {
                return [...currentState, { id: Date.now(), value: action.payload, completed: false, editing: false }]
            }
            case "mark_completed": {
                return currentState.map((item) => {
                    if (item.id === action.payload) {
                        return { ...item, completed: !item.completed }
                    }
                    else {
                        return item
                    }
                })
            }
            case "edit_item": {
                return currentState.map((item) => {
                    if (item.id === action.payload) {
                        return { ...item, editing: !item.editing }
                    }
                    else {
                        return item
                    }
                })
            }
            case "save_edited_item": {
                return currentState.map((item) => {
                    if (item.id === action.payload) {
                        return { ...item, value: action.edit, editing: false }
                    }
                    else {
                        return item
                    }
                })
            }
            case "delete_item": {
                return currentState.filter((item) => { return item.id !== action.payload })
            }
            default: {
                return currentState
            }
        }
    }

    function handleListSubmission(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const listInputValue = formData.get("list-input-field").toString().trim();

        if (listInputValue) {
            dispatch({ type: "add_item", payload: listInputValue });
            e.target.reset();
        }
    }

    function handleItemCheck(itemId) {
        dispatch({ type: "mark_completed", payload: itemId });
    }

    function handleItemDelete(itemId) {
        dispatch({ type: "delete_item", payload: itemId });
    }

    function handleItemEdit(itemId) {
        dispatch({ type: "edit_item", payload: itemId });
    }

    function handleItemEditSubmission(e, itemId) {
        if (e.key === "Enter") {
            const editedValue = e.target.value
            dispatch({ type: "save_edited_item", payload: itemId, edit: editedValue });
        }
    }

    return (
        <div className="max-w-xl m-auto min-h-60 card">
            <div>
                <label className="block text-sm mb-1 ml-1">Add Todo List Items Here</label>
                <form onSubmit={handleListSubmission} className="flex gap-2">
                    <input type="text" name="list-input-field" />
                    <button className="btn-primary min-w-max whitespace-nowrap">Add Item</button>
                </form>
            </div>
            <div className="mt-6 grid gap-4">
                {listItems.map((item) => {
                    return (
                        <div key={item.id} className="flex justify-between items-center gap-2">
                            <div className="flex gap-2">
                                <input id={item.id} className="w-max" type="checkbox" checked={item.completed} onChange={() => handleItemCheck(item.id)} />
                                {item.editing ? <input defaultValue={item.value} onKeyUp={(e) => handleItemEditSubmission(e, item.id)} /> : <label className={`${item.completed && "line-through"}`} htmlFor={item.id}>{item.value}</label>}
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="hover:text-green-500 cursor-pointer" onClick={() => handleItemEdit(item.id)}><Pen size={18} /></button>
                                <button className="hover:text-red-500 cursor-pointer" onClick={() => handleItemDelete(item.id)}><Trash2 size={20} /></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList

export const problemData = {
    difficulty: "Medium",
    name: "Todo List",
    description: "Build a Todo List component which enables users to Add task, mark the task as complete, delete task",
    path: "/problem/todo-list",
};