import { Moon, Sun } from 'lucide-react';
import { useEffect, useLayoutEffect, useState } from 'react'

const ThemeToggle = () => {
    const [theme, setTheme] = useState(null);

    // Set Initial Theme on Component Mount
    useLayoutEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
    }, []);

    // Toggle Theme Function
    function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === "light" ? <Sun size={20} /> : <Moon />}
        </button>
    );
}

export default ThemeToggle