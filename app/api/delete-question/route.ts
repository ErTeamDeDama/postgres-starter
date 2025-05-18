import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || "";

export async function DELETE(req: Request) {
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
    const { id } = await req.json();

    if (!id) {
      return new Response(
        JSON.stringify({ message: "ID mancante" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const result = await sql`DELETE FROM domande WHERE id = ${id}`;
    if (result.count === 0) {
      return new Response(
        JSON.stringify({ message: "Nessuna domanda trovata con questo ID" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ message: "Domanda eliminata con successo" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Errore DELETE:", error);
    return new Response(
      JSON.stringify({ message: "Errore interno" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
