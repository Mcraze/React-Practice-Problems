import { Link } from "react-router-dom";
import { problemsList } from "../problems";

const MainSection = () => {
    return (
        <>
            <h2 className="text-4xl mb-6">Problem List</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {problemsList.map((problem) => (
                    <Link to={problem.path} key={problem.id} className="p-4 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 bg-zinc-100 dark:bg-zinc-800">
                        <h3 className="text-xl mb-2">{problem.name}</h3>
                        <p className="text-neutral-700 dark:text-neutral-300 mb-2">{problem.description}</p>
                        <div><span className="px-2 py-1 text-xs font-semibold bg-emerald-400 rounded-lg">{problem.difficulty}</span></div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default MainSection;