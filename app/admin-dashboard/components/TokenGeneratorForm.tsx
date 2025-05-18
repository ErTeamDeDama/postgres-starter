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
    <div className="form-container">
      <h2>Genera Token</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome Classe"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          value={tokenCount}
          min="1"
          onChange={(e) => setTokenCount(Number(e.target.value))}
          className="input-field"
        />
        <button type="submit" className="submit-button">Genera</button>
        {message && <p className={`message ${messageType}`}>{message}</p>}
        {tokens.length > 0 && (
          <ul>{tokens.map((t, i) => <li key={i}>{t}</li>)}</ul>
        )}
      </form>
    </div>
  );
}
