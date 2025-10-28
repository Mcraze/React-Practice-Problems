import { NavLink } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
    return (
        <header className="p-4">
            <div className="max-w-7xl m-auto flex justify-between items-center gap-4">
                <h1 className="text-xl"><NavLink to="/">React Practice</NavLink></h1>
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header