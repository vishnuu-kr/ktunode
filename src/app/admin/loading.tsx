export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-[#070709] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="h-3 w-20 bg-white/5 rounded animate-pulse" />
            <div className="h-8 w-64 bg-white/5 rounded animate-pulse" />
          </div>
          <div className="flex gap-2">
            <div className="h-9 w-20 bg-white/5 rounded-xl animate-pulse" />
            <div className="h-9 w-20 bg-white/5 rounded-xl animate-pulse" />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-56 space-y-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-10 bg-white/5 rounded-xl animate-pulse" />
            ))}
          </div>
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-24 bg-white/5 rounded-2xl animate-pulse" />
              ))}
            </div>
            <div className="h-64 bg-white/5 rounded-3xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
