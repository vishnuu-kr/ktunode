"use client";

export default function AdminError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-[#070709] text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-4">
        <div className="inline-flex p-4 bg-red-500/10 rounded-2xl text-red-400 mx-auto">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold">Admin panel error</h2>
        <p className="text-gray-400 text-sm">{error.message || "The admin panel encountered an error."}</p>
        <button onClick={reset} className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition text-sm">
          Try again
        </button>
      </div>
    </div>
  );
}
