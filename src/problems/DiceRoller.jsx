import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";
import { useRef, useState } from "react";

// A Custom Hook to Manage Multiple clicks within a short Duration.
function useThrottle(callbackFunction, delay = 1000) {

    const lastCallTime = useRef(0)

    return function (...args) {
        const callTimeNow = Date.now()
        if (callTimeNow - lastCallTime.current >= delay) {
            lastCallTime.current = callTimeNow
            callbackFunction(...args)
        }
    }
}

const DiceRoller = () => {

    const [diceNumber, setDiceNumber] = useState(null)

    const rollTheDice = useThrottle(() => {
        const diceValue = Math.floor(Math.random() * 6) + 1
        setDiceNumber(diceValue)
    })

    // Rendering Dice Icons
    const diceIcons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
    const Icon = diceIcons[diceNumber - 1];

    return (
        <div className="max-w-xl m-auto card flex flex-col items-center gap-4">
            <div className="text-4xl md:text-7xl">
                {diceNumber ? (
                    <div className="flex items-center gap-4">
                        <Icon size={40} />
                        {diceNumber}
                    </div>
                ) : (
                    "Start Rolling"
                )}
            </div>
            <button className="btn-primary" onClick={rollTheDice}>Roll the Dice</button>
            <p className="text-sm text-center">The button will only work once per second! It is because we have used Throttling to limit multiple clicks quickly.</p>
        </div>
    )
}

export default DiceRoller

export const problemData = {
    difficulty: "Medium",
    name: "Dice Roller",
    description: "Create a Dice Roller that simulates rolling a dice when a button is clicked. Handle a case where the button is clicked multiple times quickly.",
    path: "/problem/dice-roller",
};