"use client";

import React, { useEffect, useState } from "react";

type ClasseStats = {
  classe: string;
  corrette: number;
  sbagliate: number;
};

export default function LeaderboardPage() {
  const [data, setData] = useState<ClasseStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const res = await fetch("/api/leaderboard");
        if (!res.ok) throw new Error("Errore nel caricamento");

        const json = await res.json();
        setData(json.leaderboard || []);
      } catch (err: any) {
        setError(err.message || "Errore sconosciuto");
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  if (loading)
    return <div className="text-center mt-10 text-gray-600">Caricamento...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-600">Errore: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Classifica Classi</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">Posizione</th>
              <th className="p-3 text-left">Classe</th>
              <th className="p-3 text-left">Corrette</th>
              <th className="p-3 text-left">Sbagliate</th>
              <th className="p-3 text-left">Totale</th>
            </tr>
          </thead>
          <tbody>
            {data.map((classe, index) => (
              <tr
                key={classe.classe}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="p-3 font-medium">{index + 1}</td>
                <td className="p-3">{classe.classe}</td>
                <td className="p-3 text-green-700">{classe.corrette}</td>
                <td className="p-3 text-red-700">{classe.sbagliate}</td>
                <td className="p-3">
                  {classe.corrette + classe.sbagliate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
