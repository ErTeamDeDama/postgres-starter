import postgres from 'postgres'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return Response.json({ message: 'Tutti i campi sono obbligatori' }, { status: 400 });
    }

    // Inserisci il nuovo admin nel database
    await sql`
      INSERT INTO users (username, password)
      VALUES (${username}, ${password})
    `;

    return Response.json({ message: 'Admin creato con successo!' });
  } catch (error) {
    console.error('Errore durante la creazione dell\'admin:', error);
    return Response.json({ message: 'Errore nella creazione dell\'admin' }, { status: 500 });
  }
}
