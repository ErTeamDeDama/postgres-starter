"use client";
import { useState } from "react";

export default function LoginPage() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/verify-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      window.location.href = "/admin"; // o dove vuoi reindirizzare
    } else {
      setError(data.message || "Token non valido.");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Accesso con Token</h1>
        <input
          type="text"
          placeholder="Inserisci il token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Verifica..." : "Accedi"}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
