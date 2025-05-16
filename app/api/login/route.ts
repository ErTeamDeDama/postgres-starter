import postgres from 'postgres'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return Response.json({ message: 'Tutti i campi sono obbligatori' }, { status: 400 });
  }

  try {
    const data = await sql`SELECT * FROM users WHERE username = ${username}`;

    if(!data || data.length === 0) {
      return Response.json({ message: 'Access Denied' }, { status: 401 });
    }

    if (data[0].password !== password) {
      return Response.json({ message: 'Access Denied' }, { status: 401 });
    }

    // LOGIN OK - salva cookie
    const response = Response.json({ message: 'Login riuscito' });
    // Set the cookie with the username
    response.headers.append('Set-Cookie', `session=${username}; HttpOnly; Max-Age=86400; Path=/;`);

    return response;
    
  } catch (error) {
    return Response.json({ message: 'Internal Server Error' }, { status: 500 });
  }


}