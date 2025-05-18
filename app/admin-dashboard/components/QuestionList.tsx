"use client";
import React, { useEffect, useState } from "react";

type Question = {
  id: number;
  domanda: string;
  soluzione: boolean;
};

export default function QuestionList({
  onCreateNew,
}: {
  onCreateNew?: () => void;
}) {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const res = await fetch("/api/get-questions");
    const data = await res.json();
    if (res.ok) setQuestions(data.questions);
  };

  const updateQuestion = async (q: Question) => {
    await fetch("/api/update-question", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q),
    });
    fetchQuestions();
  };

  const deleteQuestion = async (id: number) => {
    try {
      const res = await fetch(`/api/delete-question`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        const err = await res.text();
        alert("Errore nell'eliminazione: " + err);
        return;
      }

      fetchQuestions();
    } catch (error) {
      alert("Errore di rete: " + error);
    }
  };

  return (
   <div className="min-h-screen bg-gray-900 p-6">
  <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-xl">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold text-white">Domande inserite</h2>
      {onCreateNew && (
        <button
          onClick={onCreateNew}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          + Aggiungi Domanda
        </button>
      )}
    </div>

    <ul className="space-y-4 max-h-[70vh] overflow-y-auto">
      {questions.map((q) => (
        <li
          key={q.id}
          className="p-4 border border-gray-600 rounded-lg bg-gray-700 flex flex-col gap-3"
        >
          <textarea
            value={q.domanda}
            onChange={(e) =>
              setQuestions((prev) =>
                prev.map((p) =>
                  p.id === q.id ? { ...p, domanda: e.target.value } : p
                )
              )
            }
            className="w-full border border-gray-500 bg-gray-800 text-white p-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={2}
          />
          <select
            value={q.soluzione ? "true" : "false"}
            onChange={(e) =>
              setQuestions((prev) =>
                prev.map((p) =>
                  p.id === q.id
                    ? { ...p, soluzione: e.target.value === "true" }
                    : p
                )
              )
            }
            className="w-full border border-gray-500 bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="true">Vero</option>
            <option value="false">Falso</option>
          </select>
          <div className="flex gap-2">
            <button
              onClick={() => updateQuestion(q)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            >
              Salva
            </button>
            <button
              onClick={() => deleteQuestion(q.id)}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
            >
              Elimina
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>

  );
}
