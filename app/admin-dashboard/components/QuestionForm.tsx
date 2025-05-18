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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl space-y-4"  // form domande 
      >
       <h2 className="text-2xl font-bold text-center text-white mb-4">Aggiungi una Fake News</h2>
  <textarea
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
    required
    placeholder="Scrivi la domanda da verificare"                       
    rows={4}
    className="w-full p-4 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
  />
        <select
          value={answer ? "true" : "false"}
          onChange={(e) => setAnswer(e.target.value === "true")}
          className="w-full p-3 border border-gray-300 rounded-lg"
        >
          <option value="true">Vero</option>
          <option value="false">Falso</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Aggiungi
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
      </form>
    </div>
  );
}
