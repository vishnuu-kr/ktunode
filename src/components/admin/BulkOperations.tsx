"use client";

import { useState, useTransition } from "react";
import {
  Upload,
  Trash2,
  AlertTriangle,
  CheckCircle,
  FileJson,
  Layers,
} from "lucide-react";
import {
  bulkImportSubjects,
  bulkDeleteNotes,
} from "@/app/admin/actions";

interface BulkOperationsProps {
  allowedBranches: string[];
  visibleSemesters: number[];
}

interface OperationResult {
  success: boolean;
  error?: string;
  count?: number;
}

export default function BulkOperations({
  allowedBranches,
  visibleSemesters,
}: BulkOperationsProps) {
  const [importBranch, setImportBranch] = useState(allowedBranches[0] ?? "");
  const [importSem, setImportSem] = useState(visibleSemesters[0] ?? 1);
  const [importJson, setImportJson] = useState("");
  const [importResult, setImportResult] = useState<OperationResult | null>(
    null,
  );
  const [isImporting, startImportTransition] = useTransition();

  const [deleteBranch, setDeleteBranch] = useState(allowedBranches[0] ?? "");
  const [deleteSem, setDeleteSem] = useState(visibleSemesters[0] ?? 1);
  const [deleteResult, setDeleteResult] = useState<OperationResult | null>(
    null,
  );
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [isDeleting, startDeleteTransition] = useTransition();

  function handleImport() {
    setImportResult(null);
    const trimmed = importJson.trim();
    if (!trimmed) {
      setImportResult({ success: false, error: "JSON payload is empty." });
      return;
    }
    startImportTransition(async () => {
      const res = await bulkImportSubjects(importBranch, importSem, trimmed);
      setImportResult(res);
      if (res.success) setImportJson("");
    });
  }

  function handleDeleteRequest() {
    setDeleteResult(null);
    setDeleteConfirmOpen(true);
  }

  function confirmDelete() {
    setDeleteConfirmOpen(false);
    startDeleteTransition(async () => {
      const res = await bulkDeleteNotes(deleteBranch, deleteSem);
      setDeleteResult(res);
    });
  }

  function renderResult(result: OperationResult | null) {
    if (!result) return null;
    if (result.success) {
      return (
        <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-emerald-400 text-sm">
          <CheckCircle className="h-4 w-4 shrink-0" />
          <span>
            Done{result.count != null ? ` — ${result.count} items affected` : ""}.
          </span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-400 text-sm">
        <AlertTriangle className="h-4 w-4 shrink-0" />
        <span>{result.error ?? "Unknown error occurred."}</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* ---- Bulk Import ---- */}
      <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Bulk Subject Import</h3>
            <p className="text-white/40 text-xs">
              Insert subjects from a JSON payload
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-white/50 text-xs mb-1 block">Branch</span>
              <select
                value={importBranch}
                onChange={(e) => setImportBranch(e.target.value)}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-blue-500/50 transition-colors"
              >
                {allowedBranches.map((b) => (
                  <option key={b} value={b} className="bg-neutral-900">
                    {b}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-white/50 text-xs mb-1 block">Semester</span>
              <select
                value={importSem}
                onChange={(e) => setImportSem(Number(e.target.value))}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-blue-500/50 transition-colors"
              >
                {visibleSemesters.map((s) => (
                  <option key={s} value={s} className="bg-neutral-900">
                    Sem {s}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block">
            <span className="text-white/50 text-xs mb-1 block flex items-center gap-1.5">
              <FileJson className="h-3.5 w-3.5" />
              JSON Payload
            </span>
            <textarea
              value={importJson}
              onChange={(e) => setImportJson(e.target.value)}
              rows={8}
              placeholder={'[{"code":"CS301","name":"Databases","credits":4}]'}
              className="w-full resize-y bg-white/5 border border-white/10 rounded-xl font-mono text-xs text-white/80 placeholder:text-white/20 p-3 outline-none focus:border-blue-500/50 transition-colors"
            />
          </label>

          <button
            onClick={handleImport}
            disabled={isImporting}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-500/10 border border-blue-500/20 px-5 py-2.5 text-sm font-medium text-blue-400 hover:bg-blue-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Upload className="h-4 w-4" />
            {isImporting ? "Importing…" : "Import Subjects"}
          </button>

          {renderResult(importResult)}
        </div>
      </div>

      {/* ---- Bulk Delete ---- */}
      <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
            <Trash2 className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Bulk Note Delete</h3>
            <p className="text-white/40 text-xs">
              Permanently remove all notes for a branch &amp; semester
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-white/50 text-xs mb-1 block">Branch</span>
              <select
                value={deleteBranch}
                onChange={(e) => setDeleteBranch(e.target.value)}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-red-500/50 transition-colors"
              >
                {allowedBranches.map((b) => (
                  <option key={b} value={b} className="bg-neutral-900">
                    {b}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-white/50 text-xs mb-1 block">Semester</span>
              <select
                value={deleteSem}
                onChange={(e) => setDeleteSem(Number(e.target.value))}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-red-500/50 transition-colors"
              >
                {visibleSemesters.map((s) => (
                  <option key={s} value={s} className="bg-neutral-900">
                    Sem {s}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="rounded-xl bg-red-500/5 border border-red-500/10 px-4 py-3 text-xs text-red-400/80 leading-relaxed">
            <AlertTriangle className="h-4 w-4 inline mr-1.5 -mt-0.5" />
            This action is <span className="font-semibold text-red-400">irreversible</span>.
            All notes matching the selected branch and semester will be permanently deleted.
          </div>

          <button
            onClick={handleDeleteRequest}
            disabled={isDeleting}
            className="inline-flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 px-5 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Trash2 className="h-4 w-4" />
            {isDeleting ? "Deleting…" : "Delete Notes"}
          </button>

          {renderResult(deleteResult)}
        </div>
      </div>

      {/* ---- Confirmation Dialog ---- */}
      {deleteConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h4 className="text-white font-semibold">Confirm Deletion</h4>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              Delete <span className="font-semibold text-white">{deleteBranch}</span> semester{" "}
              <span className="font-semibold text-white">{deleteSem}</span> notes? This cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteConfirmOpen(false)}
                className="rounded-xl px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="rounded-xl bg-red-500/20 border border-red-500/30 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/30 transition-colors"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
