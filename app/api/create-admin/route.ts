import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN!;

export async function POST(req: Request) {
  const auth = req.headers.get('authorization');

  if (!auth || auth !== `Bearer ${ACCESS_TOKEN}`) {
    return Response.json({ message: 'Accesso non autorizzato' }, { status: 401 });
  }

  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return Response.json({ message: 'Tutti i campi sono obbligatori' }, { status: 400 });
    }

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
