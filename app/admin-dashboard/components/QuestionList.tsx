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
    <div className="form-container">
      <h2>Domande inserite</h2>
      {onCreateNew && (
        <button
          className="create-question-button"
          onClick={onCreateNew}
          aria-label="Aggiungi nuova domanda"
        >
          + Aggiungi Domanda
        </button>
      )}
      <ul className="question-list">
        {questions.map((q) => (
          <li key={q.id}>
            <textarea
              value={q.domanda}
              onChange={(e) =>
                setQuestions((prev) =>
                  prev.map((p) =>
                    p.id === q.id ? { ...p, domanda: e.target.value } : p
                  )
                )
              }
              className="input-field"
              aria-label={`Testo domanda ${q.id}`}
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
              className="input-field"
              aria-label={`Soluzione domanda ${q.id}`}
            >
              <option value="true">Vero</option>
              <option value="false">Falso</option>
            </select>
            <div>
              <button
                className="save-button"
                onClick={() => updateQuestion(q)}
                aria-label={`Salva domanda ${q.id}`}
              >
                Salva
              </button>
              <button
                className="delete-button"
                onClick={() => deleteQuestion(q.id)}
                aria-label={`Elimina domanda ${q.id}`}
              >
                Elimina
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
