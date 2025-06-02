"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TokenLoginPage() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/login-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
      credentials: "include",
    });

    let data;
    try {
      data = await res.json();
    } catch (error) {
      data = {};
    }

    setLoading(false);

    if (res.ok) {
      window.location.href = "/fake-news";
    } else {
      setError(data.message || "Token non valido.");
    }
  };

  return (
    <div className="min-h-screen bg-darkBackground flex items-center justify-center text-lightText px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-panelBackground rounded-2xl shadow-xl p-8 space-y-6 border border-borderDefault"
      >
        <h1 className="text-3xl font-bold text-center text-aquaAccent">
          Accesso Token
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Inserisci il token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-[#1c1f23] border border-borderDefault focus:outline-none focus:ring-2 focus:ring-aquaAccent text-lightText placeholder-neutral-400 transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-aquaAccent text-black font-bold rounded-xl hover:bg-softTeal transition duration-300"
          >
            {loading ? "Verifica..." : "Accedi"}
          </button>
        </form>

        {error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}

        <p className="text-center text-sm text-white">
          Inserisci il token che ti è stato fornito.
        </p>

        <p className="text-center text-sm text-white mt-2">
          Non hai un token?{" "}
          <a
            href="/contatti"
            className="text-aquaAccent underline hover:text-softTeal"
          >
            Contattaci per richiederlo
          </a>
          .
        </p>
      </motion.div>
    </div>
  );
}
