import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isAdminRoute = pathname.startsWith("/admin")
  const isAdminApi = pathname.startsWith("/api/admin")
  const isLoginPage = pathname === "/admin/login"

  if (!isAdminRoute && !isAdminApi) return NextResponse.next()

  // allow login page + login API without auth
  if (isLoginPage || pathname === "/api/admin/login") return NextResponse.next()

  const cookie = req.cookies.get("rewaiq_admin")?.value
  const expected = process.env.ADMIN_TOKEN

  if (!cookie || !expected || cookie !== expected) {
    const url = req.nextUrl.clone()
    url.pathname = "/admin/login"
    url.searchParams.set("next", pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
}