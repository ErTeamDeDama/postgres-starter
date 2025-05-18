"use client";
import React, { useState } from "react";

export default function CreateAdminForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/create-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    setMessage(data.message);
    setMessageType(res.ok ? "success" : "error");
  };

  return (
<div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
  <form
    onSubmit={handleSubmit}
    className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5"
  >
    <h2 className="text-3xl font-bold text-center text-white mb-4">Crea un nuovo Admin</h2>

    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
      className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />

    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
    >
      Crea
    </button>

    {message && (
      <p className={`text-center text-sm ${messageType === "success" ? "text-green-400" : "text-red-400"}`}>
        {message}
      </p>
    )}
  </form>
</div>

  );
}
