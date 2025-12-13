import { useState } from "react"

// Custom Hook which uses Use State
const useToggle = (initialValue = false) => {
    const [btnValue, setBtnValue] = useState(initialValue)
    const toggleFunction = () => setBtnValue(prev => !prev)

    return [btnValue, toggleFunction]
}

const ToggleButtonHook = () => {

    const [isOn, setToggle] = useToggle(false)

    return (
        <div className="w-sm mx-auto card text-center">
            <p className="mb-4">Button using Custom Hook</p>
            <button className="btn-primary" onClick={() => setToggle(!isOn)}>
                {isOn ? "Button is ON" : "Button is OFF"}
            </button>
        </div>
    )
}

export default ToggleButtonHook

export const problemData = {
    difficulty: "Easy",
    name: "Toggle Button Hook",
    description: "Create a React component that displays a toggle button which switches its label between ON and OFF each time it is clicked.",
    path: "/problem/toggle-button-custom-hook",
};