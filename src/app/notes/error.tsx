"use client";

export default function NotesError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-[#070709] text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-4">
        <div className="inline-flex p-4 bg-red-500/10 rounded-2xl text-red-400 mx-auto">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold">Failed to load notes</h2>
        <p className="text-gray-400 text-sm">{error.message || "Something went wrong while loading notes."}</p>
        <button onClick={reset} className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition text-sm">
          Try again
        </button>
      </div>
    </div>
  );
}
