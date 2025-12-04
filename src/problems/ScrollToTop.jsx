import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

const ScrollToTop = () => {

    const contentText = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quos minima velit voluptate rem quisquam fugit. 
        Laudantium sint explicabo earum voluptatum architecto perspiciatis? 
        Consequatur debitis dignissimos asperiores voluptate hic numquam explicabo impedit. 
        Quae placeat inventore recusandae eum commodi culpa sint optio beatae harum consectetur, 
        quo dolor in! Sapiente quidem tempore est!
    `

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {

        scrollToTop()

        function handleScroll() {
            if (window.scrollY > 1000) {
                setIsVisible(true)
            }
            else {
                setIsVisible(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="max-w-md mx-auto">
            {
                [...Array(10)].map((item, index) => {
                    return (
                        <p key={index} className="mt-4">
                            {contentText}
                        </p>
                    )
                })
            }
            {
                isVisible &&
                <div className="fixed right-4 bottom-4">
                    <button
                        className="btn-primary flex items-center gap-2"
                        onClick={() => scrollToTop()}
                    >
                        Scroll to Top <ArrowUp size={20} />
                    </button>
                </div>
            }
        </div>
    )
}

export default ScrollToTop

export const problemData = {
    difficulty: "Easy",
    name: "Scroll To Top",
    description: "Create a Back to Top button that appears when the user scrolls down the page and, when clicked, smoothly scrolls back to the top.",
    path: "/problem/scroll-to-top",
};