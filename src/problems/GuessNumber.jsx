import { useState } from "react";

const GuessNumber = () => {
    const [generatedNumber, setGeneratedNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [userInput, setUserInput] = useState("");
    const [message, setMessage] = useState("");
    const [attempts, setAttempts] = useState(0);

    const handleGameReset = () => {
        setGeneratedNumber(Math.floor(Math.random() * 100) + 1);
        setUserInput("");
        setMessage("");
        setAttempts(0);
    };

    const handleNumberGuess = () => {

        const userGuess = Number(userInput);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            setMessage("Enter a number between 1 and 100");
            return;
        }

        setAttempts((prev) => prev + 1);

        if (userGuess === generatedNumber) {
            setMessage(`🎉 Congrats! You guessed it in ${attempts + 1} attempts.`);
        }
        else if (userGuess > generatedNumber) {
            setMessage("Too high! Try again.");
        }
        else {
            setMessage("Too low! Try again.");
        }
    };

    return (
        <div className="max-w-xl mx-auto card">
            <div>
                <label className="block text-sm mb-1 ml-1">Guess the Number</label>
                <input value={userInput} onChange={(e) => setUserInput(e.target.value)} type="number" placeholder="Enter a number between 1 and 100" />
            </div>
            <div className="mt-4 flex justify-center gap-2">
                <button className="btn-primary" onClick={handleNumberGuess}>
                    Guess Number
                </button>
                <button className="btn-secondary" onClick={handleGameReset}>
                    Reset Game
                </button>
            </div>
            {message && <div className="mt-4 text-center">{message}</div>}
        </div>
    );
};

export default GuessNumber;

export const problemData = {
    difficulty: "Easy",
    name: "Guess the Number",
    description: "Create a game where the user tries to guess a randomly generated number between 1 and 100 and shows total attempts made.",
    path: "/problem/guess-the-number",
};