import postgres from 'postgres';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function POST(req: Request) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ message: 'Tutti i campi sono obbligatori' }, { status: 400 });
  }

  try {
    const data = await sql`SELECT * FROM token WHERE token = ${token}`;

    if (data.length === 0) {
      return NextResponse.json({ message: 'Access Denied' }, { status: 401 });
    }

    const res = NextResponse.json({ message: 'Login riuscito' });

    // imposta il cookie correttamente con NextResponse
    res.cookies.set('risposte', token, {
      httpOnly: true,
      maxAge: 86400,
      path: '/',
    });

    return res;

  } catch (error) {
    console.error("Errore login:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
