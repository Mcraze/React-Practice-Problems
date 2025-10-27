const problems = import.meta.glob("./*.jsx", { eager: true });

export const problemsList = Object.values(problems).map((problem, index) => ({
    id: index + 1,
    difficulty: problem.problemData.difficulty || "Unknown",
    name: problem.problemData.name || "Unnamed Problem",
    description: problem.problemData.description || "No Description Provided",
    path: problem.problemData.path || "/404",
    component: problem.default,
}));
