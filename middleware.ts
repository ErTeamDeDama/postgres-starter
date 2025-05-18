import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  const risposte = request.cookies.get('risposte')?.value;

  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin-dashboard') && !session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (pathname.startsWith('/fake-news') && !risposte) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin-dashboard', '/fake-news'],
};
