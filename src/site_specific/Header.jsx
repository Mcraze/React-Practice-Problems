import { NavLink } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
    return (
        <header className="p-4 shadow">
            <div className="max-w-7xl m-auto flex justify-between gap-4">
                <h1 className="text-xl font-semibold"><NavLink to="/">React Practice</NavLink></h1>
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header