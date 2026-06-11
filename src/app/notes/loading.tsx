export default function NotesLoading() {
  return (
    <div className="min-h-screen bg-[#070709] text-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="h-8 w-48 bg-white/5 rounded-lg animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <div className="h-5 w-32 bg-white/5 rounded animate-pulse mb-3" />
              <div className="h-4 w-full bg-white/5 rounded animate-pulse mb-2" />
              <div className="h-4 w-3/4 bg-white/5 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
