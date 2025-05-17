import postgres from 'postgres'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return Response.json({ message: "ID mancante" }, { status: 400 });
    }

    const result = await sql`DELETE FROM domande WHERE id = ${id}`;
    if (result.count === 0) {
      return Response.json({ message: "Nessuna domanda trovata con questo ID" }, { status: 404 });
    }
    return Response.json({ message: "Domanda eliminata con successo" }, { status: 200 });
  } catch (error) {
    console.error("Errore DELETE:", error);
    return Response.json({ message: "Errore interno" }, { status: 500 });
  }
}
