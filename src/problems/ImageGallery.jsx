import { useState } from "react";

const ImageGallery = () => {

    const [images, setImages] = useState([])
    const [imageUrl, setImageUrl] = useState("")
    const [viewImage, setViewImage] = useState("")

    const addNewImage = () => {
        if (imageUrl !== "") {
            setImages(prev => {
                return prev.includes(imageUrl) ? [...prev] : [...prev, imageUrl]
            })
            setImageUrl("")
        }
    }

    const viewImageModal = (index) => {
        setViewImage(index)
    }

    const deleteImage = (i) => {
        const newImageArray = images.filter((images, index) => {
            return index !== i
        })
        setImages(newImageArray)
    }

    return (
        <div className="max-w-7xl mx-auto card">
            <div className="max-w-xl mx-auto flex flex-col sm:flex-row sm:items-end gap-2">
                <div className="grow">
                    <label className="block text-sm mb-1 ml-1">Enter Image URL</label>
                    <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                </div>
                <div className="mb-px text-right">
                    <button className="btn-primary" onClick={addNewImage}>Add Image</button>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {
                    images && images.map((url, index) => {
                        return (
                            <div key={index} onClick={() => viewImageModal(index)} className="h-60 overflow-clip rounded-lg relative">
                                <button className="absolute right-0 bg-red-500 text-white py-2 px-4 text-xs cursor-pointer" onClick={(e) => { e.stopPropagation(); deleteImage(index) }}>Delete</button>
                                <img src={url} className="w-full h-full object-cover" />
                            </div>
                        )
                    })
                }
            </div>

            {
                images[viewImage]
                &&
                <div
                    className="absolute top-0 left-0 h-full w-full bg-zinc-200/80 dark:bg-zinc-800/80"
                    onClick={() => setViewImage("")}
                >
                    <div
                        className="absolute p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-3xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="card">
                            <img src={images[viewImage]} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            }

            {
                images.length !== 0 && <div className="mt-4 text-center">Click on the Image to view it.</div>
            }

        </div>
    )
}

export default ImageGallery


export const problemData = {
    difficulty: "Medium",
    name: "Image Gallery",
    description: "Create a component that should allow users to view, add, and delete images. Each image is represented by a URL.",
    path: "/problem/image-gallery",
};