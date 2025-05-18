import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";

export async function GET(req: Request) {
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
    const results = await sql`
      SELECT id, domanda, soluzione FROM domande
    `;

    return new Response(JSON.stringify({ questions: results }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Errore nel recupero delle domande:", err);
    return new Response(JSON.stringify({ message: "Errore nel database" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
