import React from 'react';
import { Sparkles } from 'lucide-react';

const KtuBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 dark:border-blue-700/60 bg-blue-50/80 dark:bg-blue-900/30 px-4 py-1.5 backdrop-blur-sm shadow-sm">
      {/* Sparkle Icon */}
      <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />

      {/* Text */}
      <span className="text-sm font-bold tracking-wide text-blue-600 dark:text-blue-400">
        Built for KTU Students
      </span>
    </div>
  );
};

export default KtuBadge;
