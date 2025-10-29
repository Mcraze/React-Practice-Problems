import { useState } from "react";

const ModalPopup = () => {

    const [isOpen, setIsOpen] = useState(null)

    return (
        <>
            {isOpen &&
                <div
                    style={{ position: "fixed", top: 0, left: 0, height: "100vh", width: "100%" }}
                    className="flex items-center justify-center bg-white/85 dark:bg-black/85" onClick={() => setIsOpen(!isOpen)}>
                    <div className="max-w-xl w-full card grid gap-4" onClick={e => e.stopPropagation()}>
                        <h3 className="text-xl">Modal Header</h3>
                        <p>This popup will close when clicked on the close button and will also close when clicked anywhere behind the popup on the overlay.</p>
                        <button className="btn-primary" onClick={() => setIsOpen(!isOpen)}>Close Modal</button>
                    </div>
                </div>
            }
            <div className="text-center">
                <button className="btn-primary" onClick={() => setIsOpen(!isOpen)}>Click Here to Open Modal</button>
            </div>
        </>
    )
}

export default ModalPopup

export const problemData = {
    difficulty: "Medium",
    name: "Modal In React",
    description: "Create a reusable Modal Component in React that displays a message when triggered by a button click.",
    path: "/problem/modal-in-react",
};