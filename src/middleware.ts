import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const token = request.nextauth.token;

    if (!token && pathname.match(/dashboard/)) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (token && pathname.match(/signin/)) {
      return NextResponse.redirect(new URL(`/dashboard`, request.url));
    }
  },
  {
    callbacks: {
      authorized: () => true,
    },
  },
);

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
