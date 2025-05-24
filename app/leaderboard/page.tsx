'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Classe = {
  classe: string;
  corrette: number;
  sbagliate: number;
};

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<Classe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const res = await fetch('/api/leaderboard'); // ← cambia percorso se diverso
        const data = await res.json();
        setLeaderboard(data.leaderboard);
      } catch (error) {
        console.error('Errore durante il fetch della leaderboard:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-xl">
        Caricamento...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🏆 Classifica</h1>
      <div className="space-y-4">
        {leaderboard.map((item, index) => (
          <motion.div
            key={item.classe}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-xl p-4 flex justify-between items-center border border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <div className="text-lg font-bold text-gray-700 w-6">
                {index + 1}.
              </div>
              <div className="text-gray-800 font-medium">{item.classe}</div>
            </div>
            <div className="text-right">
              <div className="text-green-600 font-semibold">
                ✅ {item.corrette}
              </div>
              <div className="text-red-500 font-semibold">
                ❌ {item.sbagliate}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
