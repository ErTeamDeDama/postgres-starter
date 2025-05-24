import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Logout effettuato', headers:{
    "Set-Cookie": `session=; HttpOnly; Path=/; Max-Age=0;SameSite=Strict; Secure`,
    "Content-Type": "application/json" 
  }});
}
