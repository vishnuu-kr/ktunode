"use client";

import React, { useState, useMemo, useCallback } from "react";
import {
  Users,
  Search,
  Trash2,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  UserX,
} from "lucide-react";
import { getUsers, deleteUser } from "@/app/admin/actions";

interface User {
  id: string;
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  topicProgress: Record<string, boolean>;
}

interface UserManagementProps {
  initialUsers: any[];
}

function sanitizeUser(raw: any): User {
  return {
    id: raw.id ?? raw._id ?? "",
    _id: raw._id ?? raw.id ?? "",
    name: raw.name ?? "",
    email: raw.email ?? "",
    createdAt: raw.createdAt ?? "",
    topicProgress: raw.topicProgress ?? {},
  };
}

function countTopics(tp: Record<string, boolean>): number {
  if (!tp) return 0;
  return Object.values(tp).filter(Boolean).length;
}

function formatDate(iso: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function UserManagement({ initialUsers }: UserManagementProps) {
  const [users, setUsers] = useState<User[]>(() =>
    initialUsers.map(sanitizeUser),
  );
  const [search, setSearch] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<User | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return users;
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q),
    );
  }, [users, search]);

  const showToast = useCallback(
    (type: "success" | "error", message: string) => {
      setToast({ type, message });
      setTimeout(() => setToast(null), 3000);
    },
    [],
  );

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const fresh = await getUsers();
      setUsers(fresh.map(sanitizeUser));
      showToast("success", "User list refreshed.");
    } catch {
      showToast("error", "Failed to refresh users.");
    } finally {
      setIsRefreshing(false);
    }
  }, [showToast]);

  const handleDelete = useCallback(async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const result = await deleteUser(deleteTarget.id || deleteTarget._id);
      if (result.success) {
        setUsers((prev) =>
          prev.filter(
            (u) => u.id !== deleteTarget.id && u._id !== deleteTarget._id,
          ),
        );
        showToast("success", `Deleted user "${deleteTarget.name}".`);
      } else {
        showToast("error", result.error ?? "Delete failed.");
      }
    } catch {
      showToast("error", "An unexpected error occurred.");
    } finally {
      setIsDeleting(false);
      setDeleteTarget(null);
    }
  }, [deleteTarget, showToast]);

  return (
    <section
      id="user-management"
      className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl"
    >
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 animate-in fade-in slide-in-from-top-2">
          <div
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium shadow-xl backdrop-blur-xl ${
              toast.type === "success"
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                : "bg-red-500/10 border-red-500/30 text-red-400"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertTriangle className="w-4 h-4" />
            )}
            {toast.message}
          </div>
        </div>
      )}

      {/* Delete confirmation dialog */}
      {deleteTarget && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-[#1a1a1f] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-200">Delete User</h3>
            </div>
            <p className="text-sm text-gray-400 mb-1">
              Are you sure you want to delete this user?
            </p>
            <div className="bg-white/5 rounded-xl border border-white/5 p-3 mb-6">
              <p className="text-sm font-medium text-gray-200">
                {deleteTarget.name}
              </p>
              <p className="text-xs text-gray-400">{deleteTarget.email}</p>
            </div>
            <p className="text-xs text-red-400/80 mb-6">
              This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                disabled={isDeleting}
                className="px-4 py-2 text-sm font-medium rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition cursor-pointer disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={isDeleting}
                className="px-4 py-2 text-sm font-medium rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition cursor-pointer disabled:opacity-50 flex items-center gap-2"
              >
                {isDeleting ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Trash2 className="w-3.5 h-3.5" />
                )}
                {isDeleting ? "Deleting..." : "Delete User"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-violet-500/10 rounded-lg text-violet-400">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-200">User Management</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {users.length} registered user{users.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-64 bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30 transition"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          <button
            type="button"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="p-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-gray-300 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
            title="Refresh user list"
          >
            <RefreshCw
              className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* User list */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center bg-white/5 rounded-2xl border border-white/5">
          <UserX className="w-10 h-10 text-gray-600 mx-auto mb-3" />
          <p className="font-semibold text-sm text-gray-300">
            {users.length === 0 ? "No users registered yet." : "No users match your search."}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {users.length === 0
              ? "Users will appear here after they sign up."
              : "Try adjusting your search query."}
          </p>
        </div>
      ) : (
        <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
          {filtered.map((user) => (
            <div
              key={user.id || user._id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/[0.06] transition-colors"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-200 truncate">
                  {user.name || "Unnamed"}
                </p>
                <p className="text-xs text-gray-400 truncate">{user.email}</p>
                <div className="flex items-center gap-3 mt-1.5 text-[11px] text-gray-500">
                  <span>
                    Joined {formatDate(user.createdAt)}
                  </span>
                  <span className="w-px h-3 bg-white/10" />
                  <span>
                    {countTopics(user.topicProgress)} topic
                    {countTopics(user.topicProgress) !== 1 ? "s" : ""} completed
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDeleteTarget(user)}
                className="flex-shrink-0 p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition cursor-pointer"
                title={`Delete ${user.name}`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
