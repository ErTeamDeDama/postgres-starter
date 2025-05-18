"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TokenLoginPage() {
    const [token, setToken] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        setError("");

        const res = await fetch("/api/verify-token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
        });

        let data;

        try {
            data = await res.json(); // Prova a leggere JSON
        } catch (error) {
            data = {}; // Se non è JSON, evita crash
        }

        setLoading(false);

        if (res.ok) {
            window.location.href = "/admin";
        } else {
            setError(data.message || "Token non valido.");
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center text-white px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-neutral-900 rounded-2xl shadow-2xl p-8 space-y-6 border border-neutral-700"
            >
                <h1 className="text-2xl font-semibold text-center tracking-tight">
                    Login
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Inserisci il token"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition"
                    >
                        {loading ? "Verifica..." : "Accedi"}
                    </button>
                </form>
                {error && (
                    <p className="text-center text-red-500 font-medium">{error}</p>
                )}
                <p className="text-center text-sm text-neutral-500">
                    Inserisci il token che ti è stato dato
                </p>
            </motion.div>
        </div>
    );
}
