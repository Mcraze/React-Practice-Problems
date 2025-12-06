import { useEffect, useState } from "react";

const WordCounter = () => {

    const [content, setContent] = useState("")
    const [contentArr, setContentArr] = useState([])

    useEffect(() => {
        let words = [];
        let current = "";

        for (let i = 0; i < content.length; i++) {
            let ch = content[i];

            if (ch !== " " && ch !== "\n" && ch !== "\t") {
                current += ch;
            } else {
                if (current !== "") {
                    words.push(current.toLowerCase());
                    current = "";
                }
            }
        }

        if (current !== "") {
            words.push(current.toLowerCase());
        }

        // frequency counting
        let freq = {};
        for (let w of words) {
            if (freq[w]) freq[w]++;
            else freq[w] = 1;
        }        

        setContentArr(freq);
    }, [content]);

    return (
        <div className="max-w-xl mx-auto card">
            <div>
                <label className="block text-sm mb-1 ml-1">Word Counter</label>
                <textarea rows={5} value={content} onChange={e => setContent(e.target.value)}></textarea>
            </div>
            <ul className="list-disc list-inside flex flex-col gap-2 mt-4">
                {Object.entries(contentArr).map(([word, count]) => (
                    <li key={word}>
                        {word}: {count}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WordCounter

export const problemData = {
    difficulty: "Medium",
    name: "Word Counter",
    description: "Build a Word Frequency Counter that dynamically analyzes user input text and displays how often each word appears.",
    path: "/problem/word-counter",
};