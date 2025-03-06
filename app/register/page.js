"use client";

import { useState } from "react";
import { registerUser } from "../../utils/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 

    try {
      const data = await registerUser(email);
      setMessage(data.message);
    } catch (error) {
      setMessage("Error registering user. Please try again.");
    }
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Register</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="border px-4 py-2 rounded-lg"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
          Submit
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}

