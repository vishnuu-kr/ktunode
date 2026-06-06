"use client";
import React, { useState, useEffect } from "react";
import { X, Info, AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";

interface DismissibleBannerProps {
  bannerText: string;
  severity: "info" | "warning" | "danger" | "success";
  dismissible: boolean;
}

export default function DismissibleBanner({
  bannerText,
  severity = "info",
  dismissible = true
}: DismissibleBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("ktunode_banner_dismissed") === "true";
    if (!isDismissed) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleDismiss = () => {
    sessionStorage.setItem("ktunode_banner_dismissed", "true");
    setVisible(false);
  };

  const severityClasses = {
    info: "bg-blue-600 dark:bg-blue-950/90 border-blue-500/20 text-white",
    warning: "bg-amber-600 dark:bg-amber-950/90 border-amber-500/20 text-white",
    danger: "bg-rose-600 dark:bg-rose-950/90 border-rose-500/20 text-white",
    success: "bg-emerald-600 dark:bg-emerald-950/90 border-emerald-500/20 text-white"
  };

  const Icons = {
    info: Info,
    warning: AlertTriangle,
    danger: AlertCircle,
    success: CheckCircle
  };

  const IconComponent = Icons[severity] || Info;

  return (
    <div className={`w-full py-2.5 px-4 text-xs md:text-sm font-semibold border-b shadow-md flex items-center justify-between gap-3 relative z-[100] transition ${severityClasses[severity] || severityClasses.info}`}>
      <div className="flex items-center gap-2 flex-grow justify-center">
        <IconComponent className="w-4 h-4 flex-shrink-0" />
        <span className="text-center">{bannerText}</span>
      </div>
      {dismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          className="p-1 hover:bg-white/10 rounded-lg transition-colors cursor-pointer flex-shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
