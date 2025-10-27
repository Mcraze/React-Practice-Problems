import { ChevronDown, ChevronDownCircle } from "lucide-react";
import { useState } from "react";

const items = [
    {
        title: "JavaScript Basics",
        content: "Learn variables, functions, and loops in JavaScript."
    },
    {
        title: "React.js Overview",
        content: "Understand components, state, and props in React."
    },
    {
        title: "Node.js",
        content: "Basics of server-side development with Node.js."
    },
    {
        title: "Full-Stack Development",
        content: "Build full-stack apps with React and Node.js."
    },
];

const Accordion = () => {

    const [accordionIndex, setAccordionIndex] = useState(null)

    function toggleAccordion(index) {
        if (index == accordionIndex) {
            setAccordionIndex(null)
        }
        else {
            setAccordionIndex(index)
        }
    }

    return (
        <div className="max-w-4xl m-auto p-4 rounded-lg grid gap-4 border-2 border-neutral-300 dark:border-neutral-700 bg-zinc-100 dark:bg-zinc-800">
            {items.map((accordion, index) => (
                <div key={index}
                    className="rounded-lg border-2 border-neutral-300 dark:border-neutral-700">
                    <button className="w-full p-4 text-xl flex justify-between items-center cursor-pointer"
                        onClick={() => toggleAccordion(index)}>
                        {accordion.title}
                        <ChevronDown className={accordionIndex == index && "rotate-180"} />
                    </button>
                    {accordionIndex == index && <div className="p-4 pt-0">{accordion.content}</div>}
                </div>
            ))}
        </div>
    )
}

export default Accordion

export const problemData = {
    difficulty: "Easy",
    name: "Accordion Group",
    description: "Build a React Accordion component that allows users to expand and collapse sections of content.",
    path: "/problem/accordion-group",
};