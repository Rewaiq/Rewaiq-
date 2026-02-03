import { Suspense } from "react"
import LoginClient from "./login-client"

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-[#070713] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <p className="text-white/70 mt-1 text-sm">Authorized team members only.</p>

        {/* ✅ Suspense boundary fixes the prerender error */}
        <Suspense fallback={<p className="mt-6 text-white/60 text-sm">Loading…</p>}>
          <LoginClient />
        </Suspense>
      </div>
    </main>
  )
}