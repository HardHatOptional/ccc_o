"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === "admin") {
      router.push("/contributor");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl border border-gray-700 text-center">
        <h1 className="text-4xl font-bold mb-6 glow">Career Cruise Control</h1>
        <p className="text-gray-400 mb-8">Select your access level</p>

        <button
          onClick={() => router.push("/dashboard")}
          className="w-64 py-3 mb-4 text-lg font-semibold text-black bg-yellow-400 rounded-lg hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg"
        >
          Browse as Guest
        </button>

        {!showLogin ? (
          <button
            onClick={() => setShowLogin(true)}
            className="w-64 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
          >
            Login as Contributor
          </button>
        ) : (
          <div className="mt-6">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-64 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="w-64 py-3 mt-3 text-lg font-semibold text-black bg-green-400 rounded-lg hover:bg-green-500 transition transform hover:scale-105 shadow-lg"
            >
              Enter
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

