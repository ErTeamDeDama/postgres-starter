import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return Response.json(
      { message: 'Tutti i campi sono obbligatori' },
      { status: 400 }
    );
  }

  try {
    const data = await sql`SELECT * FROM users WHERE username = ${username}`;

    if (!data || data.length === 0) {
      return Response.json({ message: 'Access Denied' }, { status: 401 });
    }

    if (data[0].password !== password) {
      return Response.json({ message: 'Access Denied' }, { status: 401 });
    }

    // Login OK - imposta il cookie
    const headers = new Headers();
    headers.append(
      'Set-Cookie',
      `risposte=${username}; HttpOnly; Max-Age=86400; Path=/;`
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
