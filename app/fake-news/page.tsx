"use client";

import React, { useEffect, useState } from "react";

interface Question {
  id: number;
  domanda: string;
}

export default function QuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, "vero" | "falso" | null>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("/api/get-questions");
        const data = await res.json();
        setQuestions(data);
        // Inizializza risposte a null
        const initialAnswers: Record<number, "vero" | "falso" | null> = {};
        data.forEach((q: Question) => {
          initialAnswers[q.id] = null;
        });
        setAnswers(initialAnswers);
        setLoading(false);
      } catch (err) {
        setError("Errore nel caricamento delle domande.");
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (id: number, answer: "vero" | "falso") => {
    setAnswers((prev) => ({
      ...prev,
      [id]: answer,
    }));
  };

  if (loading) return <p className="text-center">Caricamento domande...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-4">Domande</h1>

      {questions.map((question) => (
        <div
          key={question.id}
          className="bg-white p-4 rounded-xl shadow border space-y-2"
        >
          <p className="text-lg">{question.domanda}</p>
          <div className="flex gap-4">
            <button
              onClick={() => handleAnswer(question.id, "vero")}
              className={`px-4 py-2 rounded-lg font-semibold ${
                answers[question.id] === "vero"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              ✅ Vero
            </button>
            <button
              onClick={() => handleAnswer(question.id, "falso")}
              className={`px-4 py-2 rounded-lg font-semibold ${
                answers[question.id] === "falso"
                  ? "bg-red-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              ❌ Falso
            </button>
          </div>
        </div>
      ))}

      <pre className="mt-10 bg-gray-100 p-4 rounded text-sm">
        Risposte utente: {JSON.stringify(answers, null, 2)}
      </pre>
    </div>
  );
}
