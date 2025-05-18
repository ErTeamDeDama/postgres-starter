import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token) {
      return Response.json(
        { message: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      );
    }

    const data = await sql`SELECT * FROM token WHERE token = ${token}`;

    if (!data || data.length === 0) {
      return Response.json({ message: 'Access Denied' }, { status: 401 });
    }

    // Login OK - imposta il cookie
    return new Response(
      JSON.stringify({ message: 'Login riuscito' }),
      {
        status: 200,
        headers: {
          'Set-Cookie': `risposte=${token}; HttpOnly; Max-Age=86400; Path=/; SameSite=Strict`,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error("Errore verifica token:", error);
    return Response.json(
      { message: 'Errore interno del server' },
      { status: 500 }
    );
  }
}
