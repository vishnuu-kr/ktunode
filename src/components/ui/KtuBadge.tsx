import React from 'react';
import { Sparkles } from 'lucide-react';

const KtuBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1.5 backdrop-blur-sm shadow-sm">
      {/* Sparkle Icon */}
      <Sparkles className="h-4 w-4 text-blue-600" />

      {/* Text */}
      <span className="text-sm font-bold tracking-wide text-blue-600">
        Built for KTU Students
      </span>
    </div>
  );
};

export default KtuBadge;
