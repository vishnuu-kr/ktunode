export default function SyllabusLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      <div className="pt-4 px-4 w-full max-w-6xl mx-auto">
        <div className="h-14 bg-white/50 rounded-2xl border border-[var(--color-border)] animate-pulse" />
      </div>
      <div className="flex-1 mx-auto w-full max-w-6xl px-6 pt-8 pb-16">
        <div className="h-8 w-52 bg-gray-200 rounded-lg animate-pulse mb-2" />
        <div className="h-4 w-64 bg-gray-100 rounded-lg animate-pulse mb-6" />
        <div className="flex gap-3 mb-6">
          <div className="h-12 flex-1 bg-gray-100 rounded-xl animate-pulse" />
          <div className="h-12 flex-1 bg-gray-100 rounded-xl animate-pulse" />
        </div>
        <div className="h-20 bg-gray-100 rounded-xl animate-pulse mb-6" />
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
