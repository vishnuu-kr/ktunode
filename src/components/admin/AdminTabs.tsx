"use client";

import React, { useState, ReactNode } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Settings,
  Bell,
  Calendar,
  MessageSquare,
  Activity,
  Download,
  LogOut,
  ArrowLeft,
  RefreshCw,
  Shield,
  Users,
  Server,
  Wrench,
  Globe,
} from "lucide-react";
import { logoutAdmin } from "@/app/admin/auth";

export type TabId =
  | "dashboard"
  | "landing"
  | "content"
  | "config"
  | "banners"
  | "timetable"
  | "faqs"
  | "users"
  | "system"
  | "backup";

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
  { id: "landing", label: "Landing Page", icon: <Globe className="w-4 h-4" /> },
  { id: "content", label: "Content", icon: <BookOpen className="w-4 h-4" /> },
  { id: "config", label: "Settings", icon: <Settings className="w-4 h-4" /> },
  { id: "banners", label: "Banners", icon: <Bell className="w-4 h-4" /> },
  { id: "timetable", label: "Timetable", icon: <Calendar className="w-4 h-4" /> },
  { id: "faqs", label: "FAQs & Links", icon: <MessageSquare className="w-4 h-4" /> },
  { id: "users", label: "Users", icon: <Users className="w-4 h-4" /> },
  { id: "system", label: "System", icon: <Server className="w-4 h-4" /> },
  { id: "backup", label: "Backup", icon: <Download className="w-4 h-4" /> },
];

interface AdminTabsProps {
  children: ReactNode;
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function AdminTabs({ children, activeTab, onTabChange }: AdminTabsProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <nav className="lg:w-56 flex-shrink-0">
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-2 backdrop-blur-xl sticky top-6">
          <div className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline lg:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}

export function AdminHeader({
  siteName,
  maintenanceMode,
  onAuditToggle,
  showAudit,
}: {
  siteName: string;
  maintenanceMode: boolean;
  onAuditToggle: () => void;
  showAudit: boolean;
}) {
  return (
    <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/10 pb-6 gap-4">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 text-[10px] font-black tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full uppercase">
            Admin Console
          </span>
          {maintenanceMode && (
            <span className="px-2.5 py-1 text-[10px] font-black tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full uppercase animate-pulse">
              Maintenance Active
            </span>
          )}
        </div>
        <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {siteName} Control Center
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Home
        </Link>
        <form action={logoutAdmin as any}>
          <button
            type="submit"
            className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400 transition text-sm flex items-center gap-2 cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </form>
        <button
          onClick={onAuditToggle}
          className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition text-sm flex items-center gap-2 shadow-lg shadow-blue-900/30 cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" /> {showAudit ? "Clear Audit" : "Audit"}
        </button>
      </div>
    </header>
  );
}
