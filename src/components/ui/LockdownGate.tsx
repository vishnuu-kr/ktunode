"use client";
import React, { useState } from "react";
import { ShieldAlert, KeyRound, ArrowRight } from "lucide-react";

interface LockdownGateProps {
  correctPasscode: string;
}

export default function LockdownGate({ correctPasscode }: LockdownGateProps) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    if (passcode === correctPasscode) {
      // Set cookie to authorize session for 1 year
      document.cookie = `ktunode_lockdown_passcode=${passcode}; path=/; max-age=31536000; SameSite=Lax`;
      // Reload page to revalidate server layout state
      window.location.reload();
    } else {
      setError(true);
      setPasscode("");
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col items-center justify-center p-6 font-sans">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-rose-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-md w-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-2xl text-center shadow-2xl">
        <div className="inline-flex p-4 bg-rose-500/10 rounded-2xl text-rose-500 mb-6">
          <ShieldAlert className="w-8 h-8 animate-pulse" />
        </div>
        
        <h2 className="text-2xl font-bold mb-2 tracking-tight text-white">System Under Freeze</h2>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          The administrator has temporarily locked down the system. Please enter the secure passcode to unlock access.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter Passcode..."
              className={`w-full bg-white/5 border rounded-xl pl-10 pr-4 py-3 text-white text-center focus:outline-none focus:border-white/30 transition text-sm font-mono tracking-widest ${error ? "border-rose-500/50 focus:border-rose-500" : "border-white/10"}`}
              autoFocus
            />
            <KeyRound className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>

          {error && (
            <p className="text-rose-400 text-xs font-semibold animate-shake">
              Incorrect passcode. Access remains locked.
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition text-sm cursor-pointer shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            Authenticate Session <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
