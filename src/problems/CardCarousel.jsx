import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const cards = [
    {
        title: "Mountain Escape",
        description: "Experience the serenity of snow-capped peaks and fresh alpine air.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    },
    {
        title: "Beach Paradise",
        description: "Relax under palm trees and enjoy crystal-clear turquoise water.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    },
    {
        title: "Open Skies",
        description: "Explore vast open landscapes and endless horizons.",
        image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800",
    },
];

const CardCarousel = () => {

    const [carouselIndex, setCarouselIndex] = useState(0);

    return (
        <div className="max-w-xl m-auto card">
            {cards.map((element, index) => {
                return (
                    index === carouselIndex &&
                    <div key={index}>
                        <img src={element.image} alt={element.title} className="h-80 w-full object-cover rounded-lg" />
                        <h3 className="mt-4 text-xl">{element.title}</h3>
                        <p className="text-zinc-500">{element.description}</p>
                    </div>
                )
            })}
            <div className="mt-4 flex justify-between items-center">
                <button className="btn-primary" onClick={() => setCarouselIndex(prev => (prev - 1 + cards.length) % cards.length)}>
                    <ChevronLeft />
                </button>
                {carouselIndex + 1} / {cards.length}
                <button className="btn-primary" onClick={() => setCarouselIndex(prev => (prev + 1) % cards.length)}>
                    <ChevronRight />
                </button>
            </div>
        </div >
    )
}

export default CardCarousel

export const problemData = {
    difficulty: "Medium",
    name: "Card Carousel",
    description: "Build a card carousel component that displays one card at a time with navigation buttons to navigate back and forth.",
    path: "/problem/card-carousel",
};