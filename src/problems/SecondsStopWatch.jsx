import { useEffect, useState } from "react";

const SecondsStopwatch = () => {

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div className="max-w-xl card m-auto">
            <div className="text-4xl md:text-7xl text-center">
                {seconds}s
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
                <button className="btn-primary" onClick={() => setIsActive(true)}>Start</button>
                <button className="btn-primary" onClick={() => setIsActive(false)}>Stop</button>
                <button className="btn-secondary" onClick={() => { setIsActive(false); setSeconds(0) }}>Reset</button>
            </div>
        </div>
    )
}

export default SecondsStopwatch

export const problemData = {
    difficulty: "Easy",
    name: "Seconds Stopwatch",
    description: "Build a simple stopwatch with Start, Stop, and Reset functionality. The stopwatch should display elapsed time in seconds.",
    path: "/problem/seconds-stopwatch",
};