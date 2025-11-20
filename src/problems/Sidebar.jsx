import { Menu, X } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="max-w-6xl mx-auto card">
            <div className="relative overflow-hidden h-80">
                <div className="flex justify-between mb-4">
                    <h3 className="text-xl">Sidebar</h3>
                    <div className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        {
                            menuOpen ? <X /> : <Menu />
                        }
                    </div>
                </div>
                <aside className={`bg-neutral-200 dark:bg-neutral-700 max-w-60 w-full h-full absolute right-0 duration-300 ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                    <div className="p-4 flex flex-col items-end gap-4">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div>
                        <div>Item 5</div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Sidebar

export const problemData = {
    difficulty: "Easy",
    name: "Sidebar",
    description: "Create a React sidebar component that can be toggled open or closed with a menu button and is animated.",
    path: "/problem/sidebar-component",
};