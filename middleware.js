// middleware.js
export function middleware(request) {
  const response = NextResponse.next();

  // Adiciona headers de cache para rotas estáticas
  response.headers.set(
    "Cache-Control",
    "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400"
  );

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
