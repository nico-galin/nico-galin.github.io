import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (url.pathname !== url.pathname.toLowerCase()) {
    new URL(url.origin + url.pathname.toLowerCase());
  }

  if (url.pathname === "/portfolio") {
    url.pathname = "/portfolio/iconography";
    return NextResponse.redirect(url);
  } else if (url.pathname === "/item") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}
