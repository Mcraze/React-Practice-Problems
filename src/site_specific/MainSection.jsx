import { Link } from "react-router-dom";
import { problemsList } from "../problems";

const MainSection = () => {
    return (
        <>
            <div className="text-center rounded-lg bg-emerald-400 flex justify-center items-center px-4 py-20 md:py-25 lg:py-30">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white">REACT PROBLEMS</h1>
            </div>
            <h2 className="text-2xl md:text-4xl mt-12 mb-4">Problem List</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {problemsList.map((problem) => (
                    <Link to={problem.path} key={problem.id} className="card flex flex-col">
                        <h3 className="text-xl mb-2">{problem.name}</h3>
                        <p className="text-neutral-700 dark:text-neutral-300 mb-2">{problem.description}</p>
                        <div className="mt-auto"><span className={`px-2 py-1 text-xs font-semibold ${problem.difficulty == "Easy" ? "bg-emerald-400" : problem.difficulty == "Medium" ? "bg-yellow-400" : "bg-red-400" }  rounded-lg`}>{problem.difficulty}</span></div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default MainSection;