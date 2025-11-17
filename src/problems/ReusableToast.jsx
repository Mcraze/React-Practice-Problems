import { X } from "lucide-react";
import { useState } from "react"

const Toast = ({ id, message, type, onClose }) => {

    const typeColor = {
        success: "bg-green-500",
        error: "bg-red-500",
        warning: "bg-yellow-500",
        loading: "bg-blue-500",
        info: "bg-gray-500"
    }

    const toastClass = typeColor[type] || typeColor.info;

    return (
        <div className={`px-4 py-2 flex items-center gap-2 rounded-md w-max ${toastClass}`}>
            {message}
            <button className="cursor-pointer" onClick={() => onClose(id)}><X size={18} /></button>
        </div>
    )
}

const ReusableToast = () => {

    const [toastMsg, setToastMsg] = useState([])

    function addToast(message, type, duration) {
        const id = Date.now()
        setToastMsg(prev => [...prev, { id, message, type, duration }])

        setTimeout(() => {
            removeToast(id)
        }, duration);
    }

    function removeToast(id) {
        setToastMsg(prev => prev.filter(toast => toast.id !== id))
    }

    return (
        <>
            <div className="max-w-xs mx-auto card grid gap-2">
                <button className="btn-primary" onClick={() => addToast("Success Message", "success", 5000)}>
                    Success Button
                </button>

                <button className="btn-primary" onClick={() => addToast("Error Message", "error", 5000)}>
                    Error Button
                </button>

                <button className="btn-primary" onClick={() => addToast("Warning Message", "warning", 5000)}>
                    Warning Button
                </button>

                <button className="btn-primary" onClick={() => addToast("Loading Message", "loading", 5000)}>
                    Loading Button
                </button>

                <button className="btn-primary" onClick={() => addToast("Info Message", "info", 5000)}>
                    Info Button
                </button>
            </div>
            <div className="absolute right-4 top-18 flex flex-col items-end gap-2">
                {
                    toastMsg.map(toast => (
                        <Toast
                            key={toast.id}
                            id={toast.id}
                            message={toast.message}
                            type={toast.type}
                            onClose={removeToast}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ReusableToast

export const problemData = {
    difficulty: "Medium",
    name: "Reusable Toast",
    description: "Implement a Toast notification feature that provides brief feedback to the user in the form of a popup.",
    path: "/problem/reusable-toast",
};