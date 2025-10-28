import { Star, StarIcon } from "lucide-react";
import { useState } from "react";

const StarRating = () => {

    const [starRating, setStarRating] = useState(0)
    const [starHover, setStarHover] = useState(0)

    return (
        <div className='max-w-xl m-auto card'>
            <div className="flex justify-center gap-2">
                {
                    [1, 2, 3, 4, 5].map((star) => {
                        return (
                            <Star
                                className="cursor-pointer"
                                size={30}
                                key={star}
                                onMouseEnter={() => setStarHover(star)}
                                onMouseLeave={() => setStarHover(0)}
                                onClick={() => setStarRating(star)} strokeWidth={1}
                                fill={star <= (starHover || starRating) ? "yellow" : "none"}
                            />
                        )
                    })
                }
            </div>
            <div className="text-center mt-6">
                <button className="btn-primary" onClick={() => setStarRating(0)}>Reset Rating</button>
            </div>
        </div>
    )
}

export default StarRating

export const problemData = {
    difficulty: "Medium",
    name: "Star Rating",
    description: "Implement a star rating component where users can select a rating by clicking on stars.",
    path: "/problem/star-rating",
};