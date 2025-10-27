import { useReducer } from "react";

const Counter = () => {

    const initialCounterValue = { count: 0 }

    function reducerFunction(value, action) {
        switch (action.type) {
            case 'increment_value': {
                return { count: value.count + 1 }
            }
            case 'decrement_value': {
                return { count: value.count - 1 }
            }
            case 'reset_value': {
                return { count: 0 }
            }
            default: {
                return value
            }
        }
    }

    const [counter, setCounter] = useReducer(reducerFunction, initialCounterValue)

    return (
        <div className="flex flex-col items-center gap-6">
            <h1 className="text-9xl">{counter.count}</h1>
            <div className="flex gap-2">
                <button className="btn-primary" onClick={() => setCounter({ type: "decrement_value" })}>- Decrement</button>
                <button className="btn-secondary" onClick={() => setCounter({ type: "reset_value" })}>Reset</button>
                <button className="btn-primary" onClick={() => setCounter({ type: "increment_value" })}>Increment +</button>
            </div>
        </div>
    );
};

export default Counter;

export const problemData = {
    difficulty: "Easy",
    name: "Counter Using React",
    description: "Create a React counter with increment, decrement, and reset functionalities using useReducer hook.",
    path: "/problem/counter-using-react",
};