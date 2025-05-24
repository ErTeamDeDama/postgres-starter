"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Classe {
  classe: string;
  corrette: number;
  sbagliate: number;
}

export default function LeaderboardPage() {
  const [classi, setClassi] = useState<Classe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/leaderboard");
        if (!res.ok) throw new Error("Errore nel caricamento delle classifiche");

        const data = await res.json();
        // Ordina per numero di risposte corrette (più corrette -> più in alto)
        const ordered = data.classi.sort((a: Classe, b: Classe) => b.corrette - a.corrette);
        setClassi(ordered);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-gray-600">Caricamento...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-600">Errore: {error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Classifica Classi</h1>
      <motion.div
        className="space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {classi.map((classe, index) => (
          <motion.div
            key={classe.classe}
            className="bg-white shadow rounded-xl p-4 flex justify-between items-center border border-gray-100 hover:shadow-md transition"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex items-center space-x-4">
              <span className="text-xl font-bold text-blue-600">#{index + 1}</span>
              <span className="text-lg font-medium text-gray-800">Classe {classe.classe}</span>
            </div>
            <div className="text-sm text-gray-600">
              ✅ {classe.corrette} &nbsp;&nbsp;&nbsp; ❌ {classe.sbagliate}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
