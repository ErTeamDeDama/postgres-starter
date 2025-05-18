"use client";
import React, { useEffect, useState } from "react";

type Question = {
  id: number;
  domanda: string;
  soluzione: boolean;
};

export default function QuestionList() {
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
    await fetch(`/api/delete-question?id=${id}`, { method: "DELETE" });
    fetchQuestions();
  };

  return (
    <div className="form-container">
      <h2>Domande inserite</h2>
      <ul>
        {questions.map((q, i) => (
          <li key={i}>
            <textarea
              value={q.domanda}
              onChange={(e) =>
                setQuestions(prev =>
                  prev.map(p => p.id === q.id ? { ...p, domanda: e.target.value } : p)
                )
              }
              className="input-field"
            />
            <select
              value={q.soluzione ? "true" : "false"}
              onChange={(e) =>
                setQuestions(prev =>
                  prev.map(p => p.id === q.id ? { ...p, soluzione: e.target.value === "true" } : p)
                )
              }
              className="input-field"
            >
              <option value="true">Vero</option>
              <option value="false">Falso</option>
            </select>
            <button onClick={() => updateQuestion(q)}>Salva</button>
            <button onClick={() => deleteQuestion(q.id)}>Elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
