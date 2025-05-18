import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || "";

export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ message: "Unauthorized: token mancante" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const token = authHeader.split(" ")[1];
  if (token !== ACCESS_TOKEN) {
    return new Response(JSON.stringify({ message: "Unauthorized: token non valido" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { question, answer } = await req.json();

    if (!question || !answer) {
      return new Response(JSON.stringify({ message: "Tutti i campi sono obbligatori" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await sql`
      INSERT INTO domande (domanda, soluzione)
      VALUES (${question}, ${answer})
    `;

    return new Response(JSON.stringify({ message: "Domanda creata con successo!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Errore nella creazione delle domande:", error);
    return new Response(JSON.stringify({ message: "Errore nel server" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

