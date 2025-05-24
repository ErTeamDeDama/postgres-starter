import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Logout effettuato', headers:{
    "Set-Cookie": "session=; HttpOnly; Max-Age=0; Path=/;",
    "Content-Type": "application/json",
  }});
  
}
