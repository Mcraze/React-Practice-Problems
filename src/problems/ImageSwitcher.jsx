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

const ImageSwitcher = () => {

    const [imageIndex, setImageIndex] = useState(0);

    return (
        <div className="max-w-xl m-auto card">
            {cards.map((element, index) => {
                return (
                    index === imageIndex &&
                    <div key={index}>
                        <img src={element.image} alt={element.title} className="h-80 w-full object-cover rounded-lg" />
                    </div>
                )
            })}
            <div className="mt-4 grid grid-cols-3 gap-4">
                {cards.map((element, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => setImageIndex(index)}
                            className={`cursor-pointer rounded-lg overflow-hidden group border-2 ${index == imageIndex ? "border-blue-500" : "border-transparent"}`}
                        >
                            <img src={element.image} alt={element.title} className="object-cover group-hover:scale-110 transition-all duration-300" />
                        </button>
                    )
                })}
            </div>
            <div className="mt-4 text-center">
                Click over the smaller image to view it above
            </div>
        </div>
    )
}

export default ImageSwitcher

export const problemData = {
    difficulty: "Easy",
    name: "Image Switcher",
    description: "Build an image switcher component that updates the main image by clicking on the image thumbnail accordingly.",
    path: "/problem/image-switcher",
};