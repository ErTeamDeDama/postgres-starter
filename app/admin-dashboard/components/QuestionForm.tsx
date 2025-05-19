"use client";
import React, { useState } from "react";

export default function QuestionForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string>("false"); // Impostato come stringa
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [error, setError] = useState<string>("");

  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica che il campo question non sia vuoto
    if (!question.trim()) {
      setError("La domanda è obbligatoria.");
      return;
    }

    // Converte la stringa "true" o "false" in un booleano
    const booleanAnswer = answer === "true";

    // Verifica che la risposta sia stata selezionata
    if (answer === "") {
      setError("La risposta è obbligatoria.");
      return;
    }

    // Invia i dati al server
    const res = await fetch("/api/create-question", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ question, answer: booleanAnswer }),
    });
    const data = await res.json();
    setMessage(data.message);
    setMessageType(res.ok ? "success" : "error");
    if (res.ok) setQuestion("");
    setError(""); // Resetta l'errore in caso di successo
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-xl space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-4">Aggiungi una Fake News</h2>

        {/* Errore per campo vuoto */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          placeholder="Scrivi la domanda da verificare"
          rows={4}
          className="w-full p-4 border border-gray-700 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <select
          value={answer} // Usa direttamente la stringa "true" o "false"
          onChange={(e) => setAnswer(e.target.value)} // Mantieni come stringa
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

