"use client";

import React from "react";
import { Copy, ExternalLink } from "lucide-react";

interface Announcement {
  title: string;
  link: string;
}

export default function KtuAnnouncementsList({ announcements }: { announcements: Announcement[] }) {
  const handleUseAsBanner = (title: string) => {
    // Find input element for banner text
    const bannerTextInput = document.querySelector("input[name='bannerText']") as HTMLInputElement;
    if (bannerTextInput) {
      bannerTextInput.value = `🔔 KTU ALERT: ${title}`;
    }

    // Find input element for banner checkbox/toggle and check it
    const bannerEnabledInput = document.querySelector("input[name='bannerEnabled']") as HTMLInputElement;
    if (bannerEnabledInput && !bannerEnabledInput.checked) {
      // Toggle it by dispatching click event to trigger peer style changes in DOM
      bannerEnabledInput.click();
    }
  };

  return (
    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
      {announcements.map((ann, idx) => (
        <div 
          key={idx} 
          className="flex flex-col md:flex-row justify-between items-start md:items-center p-3.5 bg-white/5 rounded-2xl border border-white/5 text-sm gap-3 hover:bg-white/[0.04] transition-colors"
        >
          <div className="min-w-0 flex-1">
            <a 
              href={ann.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-gray-200 hover:text-blue-400 transition-colors flex items-center gap-1.5 leading-snug"
            >
              <span className="line-clamp-2">{ann.title}</span>
              <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 opacity-60 hover:opacity-100" />
            </a>
          </div>
          <button
            type="button"
            onClick={() => handleUseAsBanner(ann.title)}
            className="px-3 py-1.5 bg-blue-500/10 hover:bg-blue-600 text-blue-400 hover:text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 flex-shrink-0 cursor-pointer shadow-sm active:scale-[0.97]"
          >
            <Copy className="w-3 h-3" /> Use as Banner
          </button>
        </div>
      ))}
    </div>
  );
}
