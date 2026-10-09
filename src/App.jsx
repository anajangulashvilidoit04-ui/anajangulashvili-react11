import { useState } from "react";
import "./App.css";
function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen p-5 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <button
        onClick={toggleTheme}
        className="rounded bg-pink-500 px-4 py-2 block mx-auto text-white"
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <h1 className="mt-20 text-center text-4xl">
        {isDark ? "Welcome to React" : "Learning React"}
      </h1>
    </div>
  );
}

export default App;