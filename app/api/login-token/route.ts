import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function POST(req: Request) {
  const { token } = await req.json();

  if (!token) {
    return Response.json(
      { message: 'Tutti i campi sono obbligatori' },
      { status: 400 }
    );
  }

  try {
    const data = await sql`SELECT * FROM token WHERE token = ${token}`;

    if (!data || data.length === 0) {
      return Response.json({ message: 'Token non valido' }, { status: 401 });
    }

    // Token valido, imposta il cookie
    const headers = new Headers();
    headers.append(
      'Set-Cookie',
      `risposte=${token}; HttpOnly; Max-Age=86400; Path=/;`
    );

    return new Response(
      JSON.stringify({ message: 'Login riuscito' }),
      {
        status: 200,
        headers,
      }
    );

  } catch (error) {
    console.error("Errore durante il login:", error);
    return Response.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
