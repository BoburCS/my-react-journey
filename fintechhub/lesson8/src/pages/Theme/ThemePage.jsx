import React, { useRef, useState } from "react";

function ThemePage() {
    const [theme, setTheme] = useState("bg-white");
    const inputRef = useRef();

    const colors = {
        sariq: "bg-yellow-500",
        yashil: "bg-green-500",
        qizil: "bg-red-500",
    };

    const handleTheme = () => {
        setTheme(colors[inputRef.current.value]);
    };

    return (
        <div className={`p-5 w-full h-screen ${theme}`}>
            <input
                className="border px-5 py-3"
                type="text"
                ref={inputRef}
                placeholder="color"
            />
            <button
                onClick={handleTheme}
                className="border px-5 py-3 bg-sky-400"
            >
                Change
            </button>
        </div>
    );
}

export default ThemePage;
