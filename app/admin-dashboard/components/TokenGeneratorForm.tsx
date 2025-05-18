"use client";
import React, { useState } from "react";

export default function TokenGeneratorForm() {
  const [className, setClassName] = useState("");
  const [tokenCount, setTokenCount] = useState(1);
  const [tokens, setTokens] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN || ""; // o prendi da stato/context se preferisci

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/generate-tokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ className, tokenCount }),
    });

    const data = await res.json();
    setMessage(data.message);
    setMessageType(res.ok ? "success" : "error");
    setTokens(data.tokens || []);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-4">Genera Token</h2>

        <input
          type="text"
          placeholder="Nome Classe"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <input
          type="number"
          min="1"
          value={tokenCount}
          onChange={(e) => setTokenCount(Number(e.target.value))}
          className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Genera
        </button>

        {message && (
          <p className={`text-center text-sm ${messageType === "success" ? "text-green-400" : "text-red-400"}`}>
            {message}
          </p>
        )}

        {tokens.length > 0 && (
          <ul className="mt-4 bg-gray-700 border border-gray-600 rounded-lg p-4 max-h-48 overflow-auto space-y-1 text-sm text-white">
            {tokens.map((t, i) => (
              <li key={i} className="truncate">{t}</li>
            ))}
          </ul>
        )}
      </form>
    </div>

  );
}
