import { NextResponse, NextRequest } from 'next/server'
// import { authenticate } from 'auth-provider'
 
export function middleware(request: NextRequest) {
  console.log("🚀 ~ middleware ~ request:", request)
  const isAuthenticated = true
 
  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next()
  }
 
  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: '/dashboard/:path*',
}