"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Career Cruise Control</h1>
        <p className="text-gray-600 mb-6">Choose how you’d like to engage:</p>

        <button
          onClick={() => router.push("/guest")}
          className="w-60 px-6 py-3 mb-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition"
        >
          Browse as Guest
        </button>

        <button
          onClick={() => router.push("/login")}
          className="w-60 px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-800 transition"
        >
          Login as Contributor
        </button>
      </div>
    </div>
  );
}

