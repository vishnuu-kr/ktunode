export default function DashboardLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      <div className="pt-4 px-4 w-full max-w-6xl mx-auto">
        <div className="h-14 bg-white/50 rounded-2xl border border-[var(--color-border)] animate-pulse" />
      </div>
      <div className="flex-1 mx-auto w-full max-w-6xl px-6 pt-8 pb-16">
        <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse mb-2" />
        <div className="h-4 w-72 bg-gray-100 rounded-lg animate-pulse mb-8" />
        <div className="flex gap-3 mb-8">
          <div className="h-12 flex-1 bg-gray-100 rounded-xl animate-pulse" />
          <div className="h-12 flex-1 bg-gray-100 rounded-xl animate-pulse" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
        <div className="h-20 bg-gray-100 rounded-xl animate-pulse mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-36 bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
