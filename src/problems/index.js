const problems = import.meta.glob("./*.jsx", { eager: true });

export const problemsList = Object.values(problems)
    .filter(problem => problem.default)
    .map((problem, index) => {
        const data = problem.problemData || {};

        return {
            id: index + 1,
            difficulty: data.difficulty || "Error in " + problem.default.name + " component",
            name: data.name || "Unable to Load Component",
            description: data.description || "ProblemData not found. Please add problemData export in the component file.",
            path: data.path || `/problem-${index + 1}`,
            component: problem.default,
        };
    });
