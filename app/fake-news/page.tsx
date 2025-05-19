"use client";

import React, { useEffect, useState } from "react";

type Question = {
  id: number;
  domanda: string;
  soluzione: boolean;
};

export default function QuestionPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [id: number]: boolean | null }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("/api/get-questions", {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
          },
        });

        if (!res.ok) {
          throw new Error("Errore nel caricamento delle domande");
        }

        const data = await res.json();

        if (!data.questions || !Array.isArray(data.questions)) {
          throw new Error("Formato delle domande non valido");
        }

        setQuestions(data.questions);

        const initialAnswers: { [id: number]: null } = {};
        data.questions.forEach((q: Question) => {
          initialAnswers[q.id] = null;
        });
        setAnswers(initialAnswers);
      } catch (err: any) {
        setError(err.message || "Errore sconosciuto");
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  function handleAnswerChange(id: number, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Caricamento...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        Errore: {error}
      </div>
    );
  if (questions.length === 0)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Nessuna domanda disponibile
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">Domande</h1>
      {questions.map((q) => (
        <div
          key={q.id}
          className="bg-white shadow-md rounded-md p-5 mb-5 border border-gray-200"
        >
          <p className="text-gray-800 font-medium mb-4">{q.domanda}</p>
          <div className="flex space-x-6">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name={`answer-${q.id}`}
                className="form-radio text-blue-600"
                checked={answers[q.id] === true}
                onChange={() => handleAnswerChange(q.id, true)}
              />
              <span className="ml-2 text-gray-700">Vero</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name={`answer-${q.id}`}
                className="form-radio text-blue-600"
                checked={answers[q.id] === false}
                onChange={() => handleAnswerChange(q.id, false)}
              />
              <span className="ml-2 text-gray-700">Falso</span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
