import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (url.pathname === "/portfolio") {
    url.pathname = "/portfolio/iconography";
    return NextResponse.redirect(url);
  }
  if (url.pathname === "/item") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}
