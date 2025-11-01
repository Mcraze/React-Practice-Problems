import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const cards = [
    {
        title: "Mountain Escape",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    },
    {
        title: "Beach Paradise",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    },
    {
        title: "Open Skies",
        image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800",
    },
];

const ImageCarousel = () => {

    const [imageIndex, setImageIndex] = useState(0);

    return (
        <div className="max-w-xl m-auto card">
            <div className="relative">
                {cards.map((element, index) => {
                    return (
                        index === imageIndex &&
                        <div key={index}>
                            <img src={element.image} alt={element.title} className="h-80 w-full object-cover rounded-lg" />
                        </div>
                    )
                })}
                <div className="mt-4 flex justify-between items-center absolute top-1/2 -translate-y-1/2 -left-2 -right-2">
                    <button
                        className="p-1 bg-blue-500 text-white cursor-pointer rounded-lg hover:scale-110 transition-transform"
                        onClick={() => setImageIndex(prev => (prev - 1 + cards.length) % cards.length)}
                    >
                        <ChevronLeft />
                    </button>
                    <button 
                        className="p-1 bg-blue-500 text-white cursor-pointer rounded-lg hover:scale-110 transition-transform"
                        onClick={() => setImageIndex(prev => (prev + 1) % cards.length)}
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
            <div className="mt-4 flex justify-center gap-4">
                {cards.map((element, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => setImageIndex(index)}
                            className={`cursor-pointer px-2 leading-normal rounded-2xl overflow-hidden group border-2 ${index == imageIndex ? "border-blue-500" : "border-neutral-300 dark:border-neutral-700"}`}
                        >
                            {index + 1}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageCarousel

export const problemData = {
    difficulty: "Medium",
    name: "Image Carousel",
    description: "Build an image carousel which works with navigation buttons as well as the pagination provided below",
    path: "/problem/image-carousel",
};