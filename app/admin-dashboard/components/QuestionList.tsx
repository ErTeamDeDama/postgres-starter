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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Domande inserite</h2>
          {onCreateNew && (
            <button
              onClick={onCreateNew}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              + Aggiungi Domanda
            </button>
          )}
        </div>
        <ul className="space-y-4 max-h-[70vh] overflow-y-auto">
          {questions.map((q) => (
            <li
              key={q.id}
              className="p-4 border rounded-lg bg-gray-50 flex flex-col gap-2"
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
                className="w-full border p-2 rounded-lg"
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
                className="w-full border p-2 rounded-lg"
              >
                <option value="true">Vero</option>
                <option value="false">Falso</option>
              </select>
              <div className="flex gap-2">
                <button
                  onClick={() => updateQuestion(q)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Salva
                </button>
                <button
                  onClick={() => deleteQuestion(q.id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
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
