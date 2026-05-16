import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  const token = request.cookies.get("auth_token")?.value;

  const protectedPaths = ["/my-account", "/admin", "/checkout"];
  const isProtected = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtected && !token) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  // Create an unmodified response and pass it back
  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
};
