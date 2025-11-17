import { useEffect, useState } from "react";

const SkeletonLoading = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    })

    return (
        <div className="max-w-md mx-auto card">
            {
                loading
                    ? <>
                        <h3 className="text-xl h-7 bg-neutral-500 animate-pulse text-transparent w-full"></h3>
                        <div className="mt-2">
                            <p className="h-6 bg-neutral-500 animate-pulse text-transparent"></p>
                            <p className="h-6 bg-neutral-500 animate-pulse text-transparent"></p>
                            <p className="h-6 bg-neutral-500 animate-pulse text-transparent"></p>
                        </div>
                    </>
                    : <>
                        <h3 className="text-xl">Heading Text</h3>
                        <p className="mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Placeat quidem recusandae officiis culpa natus quod, non
                            doloribus nulla delectus necessitatibus!
                        </p>
                    </>

            }
        </div>
    )
}

export default SkeletonLoading

export const problemData = {
    difficulty: "Easy",
    name: "Skeleton Loading",
    description: "Create a card component with skeleton loading effect for heading and content which will load after 3 seconds delay.",
    path: "/problem/skeleton-loading",
};