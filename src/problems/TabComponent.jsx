import { useState } from "react";

const tabsData = [
    {
        title: "React",
        content:
            "React is a JavaScript library for building user interfaces. It uses a component-based architecture and a virtual DOM to make UI updates efficient. Core concepts include JSX, props, state, and hooks such as useState and useEffect.",
    },
    {
        title: "JavaScript",
        content:
            "JavaScript is a lightweight, interpreted programming language used to make web pages interactive. It supports event-driven, functional, and object-oriented programming styles and is the foundation of modern frontend frameworks.",
    },
    {
        title: "Tailwind",
        content:
            "Tailwind CSS is a utility-first CSS framework that provides low-level classes for building custom designs quickly. It promotes a design system approach using classes for spacing, colors, typography, and responsive layouts.",
    },
];


const TabComponent = () => {

    const [tabIndex, setTabIndex] = useState(0)

    function handleTabChange(index) {
        setTabIndex(index);
    }

    if (!tabsData || !tabsData.length) {
        return (
            <div className='max-w-4xl m-auto min-h-60 card'>
                <div>
                    No Data Available
                </div>
            </div>
        )
    }

    return (
        <div className='max-w-4xl m-auto min-h-60 card'>
            <div className="flex gap-2">
                {tabsData.map((element, index) => {
                    return (
                        <button key={index} onClick={() => handleTabChange(index)} className={`px-4 py-2 cursor-pointer border-b-2 ${tabIndex === index ? "border-blue-500" : "border-transparent"}`}>{element.title}</button>
                    )
                })}
            </div>
            {tabsData[tabIndex] && <div className="mt-4">{tabsData[tabIndex].content}</div>}
        </div>
    )
}

export default TabComponent

export const problemData = {
    difficulty: "Medium",
    name: "Tabs Component",
    description: "Implement a Tabs Component that allows users to switch between different tab content sections.",
    path: "/problem/tabs-component",
};