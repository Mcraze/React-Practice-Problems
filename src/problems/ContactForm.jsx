import { useReducer, useState } from "react"

const ContactForm = () => {

    const initialValue = { name: "", email: "", message: "" }

    function reducerFunction(state, action) {
        switch (action.type) {
            case "SET_NAME": {
                return { ...state, name: action.payload }
            }
            case "SET_EMAIL": {
                return { ...state, email: action.payload }
            }
            case "SET_MESSAGE": {
                return { ...state, message: action.payload }
            }
            default: {
                return state;
            }
        }
    }

    const [formData, dispatch] = useReducer(reducerFunction, initialValue);
    const [errorMessage, setErrorMessage] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleNameChange(event) {
        if (event.target.value === "") {
            setErrorMessage(prev => ({ ...prev, name: "Name is required" }));
            return;
        }
        dispatch({ type: "SET_NAME", payload: event.target.value });
        setErrorMessage(prev => ({ ...prev, name: "" }));
    }

    function handleMessageChange(event) {
        if (event.target.value === "") {
            setErrorMessage(prev => ({ ...prev, message: "Message is required" }));
            return;
        }
        dispatch({ type: "SET_MESSAGE", payload: event.target.value });
        setErrorMessage(prev => ({ ...prev, message: "" }));
    }

    function handleEmailChange(event) {
        if (event.target.value === "") {
            setErrorMessage(prev => ({ ...prev, email: "Email is required" }));
            return;
        }
        else if (!/^[a-zA-z]+[a-zA-z0-9]+.?[a-zA-z0-9]*[@][a-z]+[.][a-z]+$/.test(event.target.value)) {
            setErrorMessage(prev => ({ ...prev, email: "Please enter a valid email address" }));
            return;
        }
        dispatch({ type: "SET_EMAIL", payload: event.target.value });
        setErrorMessage(prev => ({ ...prev, email: "" }));
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        setIsSubmitted(false);

        if (formData.name === "") {
            setErrorMessage(prev => ({ ...prev, name: "Name is required" }));
        }
        if (formData.email === "") {
            setErrorMessage(prev => ({ ...prev, email: "Email is required" }));
        }
        if (formData.message === "") {
            setErrorMessage(prev => ({ ...prev, message: "Message is required" }));
            return;
        }

        if (formData && !errorMessage.name && !errorMessage.email && !errorMessage.message) {
            setIsSubmitted(true);
            event.target.reset();
        }
    }

    if (isSubmitted) {
        return (
            <p className="text-green-500 text-center">Thank You {formData.name} for Submission</p>
        )
    }

    return (
        <div className="max-w-xl m-auto card">
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <div className="grid gap-4">
                    <div>
                        <label className="block text-sm mb-1 ml-1">Name</label>
                        <input type="text" onChange={(e) => handleNameChange(e)} />
                        {errorMessage.name && <p className="text-sm text-red-500 mt-1 ml-1">{errorMessage.name}</p>}
                    </div>
                    <div>
                        <label className="block text-sm mb-1 ml-1">Email</label>
                        <input type="email" onChange={(e) => handleEmailChange(e)} />
                        {errorMessage.email && <p className="text-sm text-red-500 mt-1 ml-1">{errorMessage.email}</p>}
                    </div>
                    <div>
                        <label className="block text-sm mb-1 ml-1">Message</label>
                        <textarea rows={5} onChange={(e) => handleMessageChange(e)}></textarea>
                        {errorMessage.message && <p className="text-sm text-red-500 ml-1">{errorMessage.message}</p>}
                    </div>
                    <button className="btn-primary">Submit Form</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm

export const problemData = {
    difficulty: "Easy",
    name: "Contact Form",
    description: "Create a Contact Form Component that allows users to enter their name, email, and a message, and submit the form.",
    path: "/problem/contact-form",
};