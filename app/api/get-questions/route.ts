import postgres from 'postgres'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET() {
  try {
    const results = await sql`
      SELECT id, domanda, soluzione FROM domande
    `;

    return new Response(JSON.stringify({ questions: results }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error("Errore nel recupero delle domande:", err);
    return new Response(JSON.stringify({ message: 'Errore nel database' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
