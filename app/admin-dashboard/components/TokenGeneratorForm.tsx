"use client";
import React, { useState } from "react";

export default function TokenGeneratorForm() {
  const [className, setClassName] = useState("");
  const [tokenCount, setTokenCount] = useState(1);
  const [tokens, setTokens] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/generate-tokens", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ className, tokenCount }),
    });
    const data = await res.json();
    setMessage(data.message);
    setMessageType(res.ok ? "success" : "error");
    setTokens(data.tokens || []);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Genera Token</h2>
        <input
          type="text"
          placeholder="Nome Classe"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          value={tokenCount}
          min="1"
          onChange={(e) => setTokenCount(Number(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Genera
        </button>
        {message && (
          <p
            className={`text-center text-sm ${
              messageType === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
        {tokens.length > 0 && (
          <ul className="mt-4 bg-gray-50 border rounded-lg p-4 max-h-48 overflow-auto space-y-1 text-sm">
            {tokens.map((t, i) => (
              <li key={i} className="text-gray-700">{t}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}
