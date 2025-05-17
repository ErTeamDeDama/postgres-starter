import postgres from 'postgres'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function POST(req: Request) {
  try {
    const { question, answer } = await req.json();

    if (!question || !answer) {
      return Response.json({ message: 'Tutti i campi sono obbligatori' }, { status: 400 });
    }

    await sql`
      INSERT INTO domande (domanda, soluzione)
      VALUES (${question}, ${answer})
    `;

    return Response.json({ message: 'Domanda creata con successo!' }, { status: 200 });
  } catch (error) {
    console.error('Errore nella creazione delle domande:', error);
    return Response.json({ message: 'Errore nel server' }, { status: 500 });
  }
}
