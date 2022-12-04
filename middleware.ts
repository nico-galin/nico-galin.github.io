import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  if (url.pathname === '/portfolio') {
    url.pathname = '/portfolio/icons';
    return NextResponse.redirect(url);
  } else if (url.pathname === '/item') {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
}
