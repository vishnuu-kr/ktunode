export default function ToolsLoading() {
  return (
    <div className="min-h-screen bg-[#070709] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2 mb-8">
          <div className="h-8 w-64 bg-white/5 rounded-lg animate-pulse mx-auto" />
          <div className="h-4 w-96 bg-white/5 rounded animate-pulse mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <div className="h-10 w-10 bg-white/5 rounded-xl animate-pulse mb-4" />
              <div className="h-5 w-24 bg-white/5 rounded animate-pulse mb-2" />
              <div className="h-3 w-full bg-white/5 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
