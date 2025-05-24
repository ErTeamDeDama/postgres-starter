'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Classe = {
  classe: string;
  corrette: number;
  sbagliate: number;
};

const medal = ["🥇", "🥈", "🥉"];

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<Classe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const res = await fetch('/api/leaderboard');
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
      <div className="flex justify-center items-center h-screen bg-gray-100 text-gray-500 text-xl">
        Caricamento classifica...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        🏆 Classifica delle Classi
      </h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {leaderboard.map((item, index) => (
          <motion.div
            key={item.classe}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            className={`flex justify-between items-center p-5 rounded-2xl shadow-md border bg-white hover:scale-[1.01] transition-transform duration-200 ${
              index === 0
                ? 'border-yellow-400'
                : index === 1
                ? 'border-gray-400'
                : index === 2
                ? 'border-orange-400'
                : 'border-gray-200'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-2xl w-8 text-center">
                {medal[index] || index + 1}
              </div>
              <div className="text-xl font-semibold text-gray-700">
                {item.classe}
              </div>
            </div>
            <div className="text-right">
              <div className="text-green-600 font-bold">
                ✅ {item.corrette}
              </div>
              <div className="text-red-500 font-bold">
                ❌ {item.sbagliate}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
