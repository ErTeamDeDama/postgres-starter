import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET() {
  try {
    const result = await sql`
      SELECT classe, corrette, sbagliate
      FROM classi
      ORDER BY corrette DESC
    `;

    return new Response(JSON.stringify({ leaderboard: result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Errore leaderboard:", err);
    return new Response(
      JSON.stringify({ message: "Errore nel caricamento della leaderboard" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}