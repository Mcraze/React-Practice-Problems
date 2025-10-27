import { useEffect, useReducer, useState } from "react";

const ProgressBar = () => {

    const initialValue = { progress: 0 }

    function reducerFunction(state, action) {
        switch (action.type) {
            case "increment_value": {
                if (state.progress >= 100) {
                    return state
                }
                return { progress: state.progress + 10 }
            }
            case "decrement_value": {
                if (state.progress <= 0) {
                    return state
                }
                return { progress: state.progress - 10 }
            }
            default: {
                return state
            }
        }
    }

    const [progressValue, setProgressValue] = useReducer(reducerFunction, initialValue)
    const [progressColor, setProgressColor] = useState("bg-red-500")

    useEffect(() => {
        if (progressValue.progress < 40) {
            setProgressColor("bg-red-500")
        }
        else if (progressValue.progress < 80) {
            setProgressColor("bg-yellow-400")
        }
        else {
            setProgressColor("bg-emerald-400")
        }
    }, [progressValue.progress])

    return (
        <div className="max-w-4xl w-full m-auto">
            <div className="h-10 rounded-lg bg-zinc-200 overflow-clip">
                <div
                    className={`${progressColor} h-full flex items-center transition-all duration-300 text-center text-white`}
                    style={{ width: `${progressValue.progress}%` }}
                >
                    <div className="pl-2">{progressValue.progress}%</div>
                </div>
            </div>
            <div className="flex gap-2 mt-4">
                <button className="btn-primary" onClick={() => setProgressValue({ type: "decrement_value" })}>- 10%</button>
                <button className="btn-primary" onClick={() => setProgressValue({ type: "increment_value" })}>+ 10%</button>
            </div>
        </div>
    )
}

export default ProgressBar

export const problemData = {
    difficulty: "Easy",
    name: "Progress Bar",
    description: "Create a Progress Bars Component in React that visually represents progress values for bar.",
    path: "/problem/progress-bar",
};