import { useState } from "react";

const paragraphText = `
    React is a popular JavaScript library developed by Facebook for building user interfaces,
    especially single-page applications. It allows developers to create reusable UI components
    that efficiently update and render as data changes. One of React’s
    key features is the virtual DOM, which improves performance by minimizing
    direct manipulation of the actual DOM.`

const ReadMore = () => {

    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className="max-w-xl mx-auto card">
            <h3 className="text-xl mb-2">Read More Toggle</h3>
            <p className={isExpanded ? "line-clamp-none" : "line-clamp-2"}>
                {paragraphText}
            </p>
            <div className="mt-2">
                <button className="btn-primary" onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Read Less" : "Read More"}</button>
            </div>
        </div>
    )
}

export default ReadMore

export const problemData = {
    difficulty: "Easy",
    name: "Read More",
    description: "Create a React component that displays a paragraph of text and allows users to expand or collapse it based on read more click.",
    path: "/problem/read-more",
};