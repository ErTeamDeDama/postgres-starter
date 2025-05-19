"use client";
type Question = {
    id: number;
    domanda: string;
    soluzione: boolean;
};

import { useEffect, useState } from "react";

type Domanda = {
    id: number;
    testo: string;
};

export default function VerificaPage() {
    const [questions, setQuestions] = useState<Domanda[]>([]);
    const [answers, setAnswers] = useState<Record<number, "vero" | "falso" | null>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";


    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const res = await fetch("/api/get-questions", {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
                    },
                });
                if (!res.ok) {
                    throw new Error("Errore nel caricamento delle domande.");
                }
                const data = await res.json();

                // Assumiamo che la risposta sia { questions: [...] }
                if (!Array.isArray(data.questions)) {
                    throw new Error("Formato delle domande non valido");
                }

                setQuestions(data.questions);

                // Inizializza le risposte a null
                const initialAnswers: { [key: number]: null } = {};
                data.questions.forEach((q: Question) => {
                    initialAnswers[q.id] = null;
                });
                setAnswers(initialAnswers);
            } catch (err: any) {
                setError(err.message || "Errore sconosciuto");
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    const handleAnswerChange = (id: number, value: "vero" | "falso") => {
        setAnswers((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = () => {
        console.log("Risposte inviate:", answers);
        // TODO: Invia al backend se necessario
        alert("Risposte salvate (vedi console)");
    };

    if (loading) return <div className="p-4 text-center">Caricamento domande...</div>;
    if (error) return <div className="p-4 text-red-500 text-center">{error}</div>;

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold text-center">Verifica: Domande Vero/Falso</h1>

            {questions.map((domanda) => (
                <div key={domanda.id} className="bg-white rounded-xl shadow p-4 space-y-2">
                    <p className="font-medium">{domanda.testo}</p>
                    <div className="flex gap-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name={`domanda-${domanda.id}`}
                                value="vero"
                                checked={answers[domanda.id] === "vero"}
                                onChange={() => handleAnswerChange(domanda.id, "vero")}
                            />
                            <span className="ml-2">Vero</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name={`domanda-${domanda.id}`}
                                value="falso"
                                checked={answers[domanda.id] === "falso"}
                                onChange={() => handleAnswerChange(domanda.id, "falso")}
                            />
                            <span className="ml-2">Falso</span>
                        </label>
                    </div>
                </div>
            ))}

            <div className="text-center">
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                    Invia Risposte
                </button>
            </div>
        </div>
    );
}
