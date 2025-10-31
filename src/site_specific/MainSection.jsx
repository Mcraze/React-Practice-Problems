import { Link } from "react-router-dom";
import { problemsList } from "../problems";
import { useState } from "react";

const MainSection = () => {

    const [searchProblem, setSearchProblem] = useState("");
    const [difficultyFilter, setDifficultyFilter] = useState("");

    const filteredProblems = problemsList.filter((problem) => {
        const problemName = problem.name.toLowerCase().includes(searchProblem.toLowerCase())
        const problemDifficulty = problem.difficulty.includes(difficultyFilter)
        return problemName && problemDifficulty;
    });

    return (
        <div className="min-h-screen">
            <div className="text-center rounded-lg bg-emerald-400 flex justify-center items-center px-4 py-20 md:py-25 lg:py-30">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white">REACT PROBLEMS</h1>
            </div>
            <div className="mt-12 mb-6 grid gap-4 md:grid-cols-2 items-center">
                <h2 className="text-2xl md:text-4xl">Problem List</h2>
                <div className="grid sm:grid-cols-2 gap-2">
                    <input type="text" placeholder="Search problems..." onChange={(e) => setSearchProblem(e.target.value)} />
                    <select onChange={e => setDifficultyFilter(e.target.value)}>
                        <option value="">All Difficulties</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {filteredProblems.length !== 0 ? filteredProblems.map((problem) => (
                    <Link to={problem.path} key={problem.id} className="card flex flex-col">
                        <h3 className="text-xl mb-2">{problem.name}</h3>
                        <p className="text-neutral-700 dark:text-neutral-300 mb-2">{problem.description}</p>
                        <div className="mt-auto"><span className={`px-2 py-1 text-xs font-semibold ${problem.difficulty == "Easy" ? "bg-emerald-400" : problem.difficulty == "Medium" ? "bg-yellow-400" : "bg-red-400"}  rounded-lg`}>{problem.difficulty}</span></div>
                    </Link>
                )) : <div className="text-red-400">No problems found.</div>}
            </div>
        </div>
    );
};

export default MainSection;