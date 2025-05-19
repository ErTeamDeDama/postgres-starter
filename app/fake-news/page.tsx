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

        // Inizializza le risposte con null
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

  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>Errore: {error}</div>;
  if (questions.length === 0) return <div>Nessuna domanda disponibile</div>;

  return (
    <div>
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: 20 }}>
          <p>{q.domanda}</p>
          <label>
            <input
              type="radio"
              name={`answer-${q.id}`}
              checked={answers[q.id] === true}
              onChange={() => handleAnswerChange(q.id, true)}
            />
            Vero
          </label>
          <label style={{ marginLeft: 10 }}>
            <input
              type="radio"
              name={`answer-${q.id}`}
              checked={answers[q.id] === false}
              onChange={() => handleAnswerChange(q.id, false)}
            />
            Falso
          </label>
        </div>
      ))}
    </div>
  );
}
