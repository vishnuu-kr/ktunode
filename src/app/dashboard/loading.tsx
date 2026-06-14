export default function DashboardLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      {/* Floating Navbar Capsule Mockup */}
      <div className="pt-4 px-4 w-full max-w-6xl mx-auto">
        <div className="h-14 bg-white/50 dark:bg-slate-900/50 rounded-full border border-[var(--color-border)] animate-pulse" />
      </div>

      {/* Main Grid matching dashboard page */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-6 pb-24">
          {/* Welcome Section Header */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-lg text-[9px] font-black tracking-widest uppercase bg-slate-950/[0.04] dark:bg-white/[0.04] border border-slate-950/[0.06] dark:border-white/[0.06] text-slate-700 dark:text-slate-300 shadow-none">
                S4 CS
              </span>
              <span className="text-[10px] font-bold text-slate-400">Current Semester</span>
            </div>
            <h2 id="dashboard-heading" tabIndex={-1} className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-slate-50 leading-tight focus:outline-none">
              Welcome back! Let&apos;s get ready for your exams.
            </h2>
            <p className="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400">
              Get started with your courses, plan your study routine, or search the syllabus.
            </p>
          </div>

          {/* Search bar capsule */}
          <div className="h-12 w-full bg-slate-200/50 dark:bg-white/[0.03] rounded-2xl animate-pulse" />

          {/* Resume session banner */}
          <div className="min-h-[150px] md:h-32 w-full bg-slate-200/50 dark:bg-white/[0.03] rounded-3xl animate-pulse" />

          {/* Courses section title */}
          <div className="flex items-center justify-between">
            <div className="h-6 w-32 bg-slate-200/50 dark:bg-white/[0.03] rounded-lg animate-pulse" />
            <div className="h-4 w-20 bg-slate-200/50 dark:bg-white/[0.03] rounded-md animate-pulse" />
          </div>

          {/* Courses grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-full min-h-[156px] bg-slate-200/50 dark:bg-white/[0.03] rounded-3xl border border-slate-200/20 dark:border-white/[0.02] p-6 flex flex-col justify-between animate-pulse">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="h-3.5 w-16 bg-slate-200/70 dark:bg-white/5 rounded-md" />
                    <div className="h-5 w-3/4 bg-slate-200/70 dark:bg-white/5 rounded-md" />
                  </div>
                  <div className="w-11 h-11 bg-slate-200/70 dark:bg-white/5 rounded-full" />
                </div>
                <div className="h-4 w-1/2 bg-slate-200/70 dark:bg-white/5 rounded-md mt-6" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (lg:col-span-4) */}
        <div className="hidden lg:block lg:col-span-4 space-y-6 pb-24">
          {/* Pomodoro Timer Skeleton */}
          <div className="h-[320px] w-full bg-slate-200/50 dark:bg-white/[0.03] rounded-3xl border border-slate-200/20 dark:border-white/[0.02] p-5 flex flex-col justify-between animate-pulse">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200/70 dark:bg-white/5 rounded-xl" />
              <div className="space-y-1.5 flex-1">
                <div className="h-4 w-24 bg-slate-200/70 dark:bg-white/5 rounded-md" />
                <div className="h-3.5 w-16 bg-slate-200/70 dark:bg-white/5 rounded-md" />
              </div>
            </div>
            <div className="w-28 h-28 bg-slate-200/70 dark:bg-white/5 rounded-full mx-auto my-3" />
            <div className="flex gap-2">
              <div className="h-10 flex-[3] bg-slate-200/70 dark:bg-white/5 rounded-xl" />
              <div className="h-10 flex-[2] bg-slate-200/70 dark:bg-white/5 rounded-xl" />
            </div>
          </div>

          {/* Timetable Widget Skeleton */}
          <div className="h-[320px] w-full bg-slate-200/50 dark:bg-white/[0.03] rounded-3xl border border-slate-200/20 dark:border-white/[0.02] p-5 flex flex-col justify-between animate-pulse">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200/70 dark:bg-white/5 rounded-xl" />
              <div className="space-y-1.5 flex-1">
                <div className="h-4 w-28 bg-slate-200/70 dark:bg-white/5 rounded-md" />
                <div className="h-3.5 w-20 bg-slate-200/70 dark:bg-white/5 rounded-md" />
              </div>
            </div>
            <div className="space-y-3 mt-4 flex-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-slate-200/70 dark:bg-white/5 rounded-xl" />
                  <div className="space-y-1.5 flex-1">
                    <div className="h-4 w-1/2 bg-slate-200/70 dark:bg-white/5 rounded-md" />
                    <div className="h-3.5 w-1/3 bg-slate-200/70 dark:bg-white/5 rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
