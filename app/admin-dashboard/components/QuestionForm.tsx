"use client";
import React, { useState } from "react";

export default function QuestionForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(true);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/create-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, answer }),
    });
    const data = await res.json();
    setMessage(data.message);
    setMessageType(res.ok ? "success" : "error");
    if (res.ok) setQuestion("");
  };

  return (
   <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
  <form
    onSubmit={handleSubmit}
    className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-xl space-y-5"
  >
    <h2 className="text-3xl font-bold text-center text-white mb-4">Aggiungi una Fake News</h2>

    <textarea
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      required
      placeholder="Scrivi la domanda da verificare"
      rows={4}
      className="w-full p-4 border border-gray-700 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />

    <select
      value={answer ? "true" : "false"}
      onChange={(e) => setAnswer(e.target.value === "true")}
      className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    >
      <option value="true">Vero</option>
      <option value="false">Falso</option>
    </select>

    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
    >
      Aggiungi
    </button>

    {message && (
      <p
        className={`text-center text-sm ${
          messageType === "success" ? "text-green-400" : "text-red-400"
        }`}
      >
        {message}
      </p>
    )}
  </form>
</div>

  );
}
