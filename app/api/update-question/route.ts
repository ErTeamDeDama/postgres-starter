import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || "";

export async function PUT(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response(
      JSON.stringify({ message: "Unauthorized: token mancante" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  const token = authHeader.split(" ")[1];
  if (token !== ACCESS_TOKEN) {
    return new Response(
      JSON.stringify({ message: "Unauthorized: token non valido" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const { id, domanda, soluzione } = await req.json();

    if (!id || domanda === undefined || soluzione === undefined) {
      return new Response(
        JSON.stringify({ message: "Tutti i campi sono obbligatori" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await sql`
      UPDATE domande
      SET domanda = ${domanda}, soluzione = ${soluzione}
      WHERE id = ${id}
    `;

    return new Response(
      JSON.stringify({ message: "Domanda aggiornata con successo" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Errore PUT:", error);
    return new Response(
      JSON.stringify({ message: "Errore interno" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

