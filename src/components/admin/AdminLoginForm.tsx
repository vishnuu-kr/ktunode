"use client";

import { useActionState } from "react";
import { Shield } from "lucide-react";
import { loginAdmin } from "@/app/admin/auth";

export default function AdminLoginForm({ accessKey }: { accessKey: string }) {
  const [state, formAction, isPending] = useActionState(loginAdmin, null);

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-md w-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-2xl text-center shadow-2xl">
        <div className="inline-flex p-4 bg-red-500/10 rounded-2xl text-red-500 mb-6">
          <Shield className="w-8 h-8 animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold mb-2 tracking-tight">System Access Lock</h2>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          This dashboard controls global routing, branding, and layouts. Authenticate with your administrative key to gain access.
        </p>
        <form action={formAction} className="space-y-4">
          <input type="hidden" name="accessKey" value={accessKey} />
          <input
            type="password"
            name="secret"
            placeholder="Enter System Secret..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-center focus:outline-none focus:border-white/30 transition text-sm font-mono"
            autoFocus
          />
          {state?.error && (
            <p className="text-red-400 text-xs font-semibold bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
              {state.error}
            </p>
          )}
          <button 
            type="submit" 
            disabled={isPending}
            className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition text-sm cursor-pointer shadow-lg active:scale-[0.98] disabled:opacity-50"
          >
            {isPending ? "Authenticating..." : "Unlock Command Center"}
          </button>
        </form>
      </div>
    </div>
  );
}
