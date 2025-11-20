import { Eye, EyeClosed, EyeClosedIcon } from "lucide-react";
import { useState } from "react";

const TogglePassword = () => {

    const [showPass, setShowPass] = useState(false)

    return (
        <div className="max-w-sm mx-auto card">
            <div>
                <label className="block text-sm mb-1 ml-1">Enter Password</label>
                <div className="relative">
                    <input type={showPass ? "text" : "password"} />
                    <div
                        className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
                        onClick={() => setShowPass(!showPass)}
                    >
                        {
                            showPass ? <EyeClosedIcon size={20} /> : <Eye size={20} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TogglePassword

export const problemData = {
    difficulty: "Easy",
    name: "Toggle Password",
    description: "Create a react component that allows users to input a password. User can toggle the password to show or hide.",
    path: "/problem/toggle-password",
};