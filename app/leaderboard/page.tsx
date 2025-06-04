'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

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
        const res = await fetch('/api/leaderboard');
        const data = await res.json();

        // Ordina in base alla percentuale di correttezza (decrescente)
        const sorted = data.leaderboard.sort((a: Classe, b: Classe) => {
          const percA = a.corrette / (a.corrette + a.sbagliate);
          const percB = b.corrette / (b.corrette + b.sbagliate);
          return percB - percA;
        });

        setLeaderboard(sorted);
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
      <div className="flex justify-center items-center h-screen bg-black text-white text-xl">
        Caricamento classifica...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-4xl font-bold text-center mb-10 tracking-tight">
          Classifica Classi
        </h1>
        <div className="max-w-3xl mx-auto space-y-4">
          {leaderboard.map((item, index) => {
            const percentuale = isNaN((item.corrette / (item.corrette + item.sbagliate)) * 100)
              ? 0
              : ((item.corrette / (item.corrette + item.sbagliate)) * 100).toFixed(1);

            return (
              <motion.div
                key={item.classe}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="flex justify-between items-center p-5 rounded-xl shadow-md border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 transition-all duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-lg font-medium w-10 text-right text-gray-400">
                    {index + 1}.
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {item.classe.toUpperCase()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-white">
                    Corrette: {percentuale}%
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </>
  );
}
