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
    <div className="form-container">
      <h2>Aggiungi una Fake News</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          className="input-field"
          placeholder="Scrivi la domanda da verificare"
          aria-label="Testo della domanda"
          rows={4}
        />
        <select
          value={answer ? "true" : "false"}
          onChange={(e) => setAnswer(e.target.value === "true")}
          className="input-field"
          aria-label="Seleziona se la risposta è vera o falsa"
        >
          <option value="true">Vero</option>
          <option value="false">Falso</option>
        </select>
        <button type="submit" className="submit-button">
          Aggiungi
        </button>
        {message && (
          <p className={`message ${messageType}`} style={{ marginTop: "1rem" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
