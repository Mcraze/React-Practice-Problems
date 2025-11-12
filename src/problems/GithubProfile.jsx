import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const GithubProfile = () => {

    const [username, setUsername] = useState("")
    const [error, setError] = useState("")
    const [userdata, setUserData] = useState({})

    async function fetchUsername() {
        if (username) {
            try {
                setError("")
                const response = await fetch(`https://api.github.com/users/${username}`)

                if (response.ok) {
                    const data = await response.json()
                    setUserData({
                        avatar: data.avatar_url,
                        name: data.name,
                        bio: data.bio,
                        company: data.company,
                        location: data.location
                    })
                    setUsername("")
                }
                else {
                    setError("User not available")
                }
            }
            catch (err) {
                setError(err)
            }
        }
    }

    return (
        <div className="max-w-xl mx-auto card">
            <div className="max-w-xl mx-auto flex flex-col sm:flex-row sm:items-end gap-2">
                <div className="grow">
                    <label className="block text-sm mb-1 ml-1">Enter Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-px text-right">
                    <button className="ml-auto btn-primary flex items-center gap-2" onClick={fetchUsername}>Search <Search size={20} /></button>
                </div>
            </div>
            {error && <div className="mt-4 text-center text-red-500">{error}</div>}
            {
                userdata &&
                <div className="mt-4">
                    <img src={userdata.avatar} alt={userdata.name} className="max-w-40 w-full rounded-full mx-auto" />
                    <div className="text-center mt-2 text-xl">{userdata.name}</div>

                </div>
            }
        </div>
    )
}

export default GithubProfile

export const problemData = {
    difficulty: "Easy",
    name: "Github Profile",
    description: "Create a React component which takes in a username through textfield and shows github details for that username.",
    path: "/problem/github-profile",
};