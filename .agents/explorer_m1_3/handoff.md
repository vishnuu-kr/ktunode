# Handoff Report — Subject APIs & Dynamic Loading Explorer

## 1. Observation

Direct observations of files, key code blocks, and schemas in the codebase:

*   **File Path**: `src/app/api/subjects/route.ts` (Lines 81-117)
    ```typescript
    export async function GET(request: NextRequest) {
      const rawBranch = request.nextUrl.searchParams.get("branch")?.toLowerCase();
      const semParam = request.nextUrl.searchParams.get("sem")?.replace("sem-", "");
      const sem = Number(semParam);

      if (!rawBranch || !(rawBranch in apiMapping) || !Number.isInteger(sem) || sem < 1 || sem > 8) {
        return json({ error: "Missing or invalid branch or sem parameters" }, 400);
      }

      const branch = apiMapping[rawBranch];

      try {
        // Preferred layout: one folder per branch-sem, one file per subject.
        const folderPath = path.join(subjectsDir, `${branch}-${sem}`);
        if (fs.existsSync(folderPath) && fs.statSync(folderPath).isDirectory()) {
          const subjects = fs
            .readdirSync(folderPath)
            .filter((name) => name.endsWith(".json"))
            .sort()
            .map((name) => JSON.parse(fs.readFileSync(path.join(folderPath, name), "utf8")));
          return json(subjects);
        }

        // Backward-compatible fallback: legacy flat file.
        const filePath = path.join(subjectsDir, `${branch}-${sem}.json`);
        if (!fs.existsSync(filePath)) {
          return json([]);
        }

        return json(JSON.parse(fs.readFileSync(filePath, "utf8")));
      } catch (error: any) {
    ```
*   **File Path**: `src/lib/mockData.ts` (Lines 23-30)
    ```typescript
    export interface Subject {
      id: string;
      code: string;
      name: string;
      branchId: string;
      semester: number;
      modules: Module[];
    }
    ```
*   **File Path**: `src/app/dashboard/page.tsx` (Lines 343-346, 447-450, 458-459, 1488-1495)
    *   State declaration:
        ```typescript
        const [hiddenSubjectIds, setHiddenSubjectIds] = useState<string[]>([]);
        const editModeStorageKey = `ktunode_hidden_subjects_${branch}_${sem}`;
        ```
    *   Retrieval:
        ```typescript
        const storedHidden = localStorage.getItem(`ktunode_hidden_subjects_${branch}_${sem}`);
        const hidden: string[] = storedHidden ? JSON.parse(storedHidden) : [];
        setHiddenSubjectIds(hidden);
        ```
    *   Filtering:
        ```typescript
        setSubjects(base.filter(s => !hidden.includes(s.id)));
        ```
    *   Persistence on hide:
        ```typescript
        const removeSubjectFromDashboard = (subjectId: string) => {
          triggerHaptic("medium");
          const updated = [...hiddenSubjectIds, subjectId];
          setHiddenSubjectIds(updated);
          localStorage.setItem(editModeStorageKey, JSON.stringify(updated));
          setSubjects((prev) => prev.filter((s) => s.id !== subjectId));
          showToast("Course hidden. You can restore it from Edit Layout.");
        };
        ```

---

## 2. Logic Chain

1.  **Subject API Schema & Strategy**:
    *   From `src/app/api/subjects/route.ts` GET handler, we trace that `rawBranch` is mapped to canonical branches (`cs`, `ce`, `ec`, `ee`, `me`).
    *   The filesystem search prioritizes directories `src/data/subjects/${branch}-${sem}`. It reads all files ending in `.json` and sorts them to preserve layout order.
    *   Fallback looks for flat file `src/data/subjects/${branch}-${sem}.json`.
2.  **Dashboard Hidden Subjects Logic**:
    *   From `src/app/dashboard/page.tsx`, we observe that `localStorage` key `ktunode_hidden_subjects_${branch}_${sem}` is loaded on mount.
    *   The fetched subject array is immediately filtered against this list of IDs: `base.filter(s => !hidden.includes(s.id))`.
3.  **Persistence & Selection Flow**:
    *   Hiding a subject (`removeSubjectFromDashboard`) appends the ID to the hidden array, stringifies and writes it to `localStorage`, and updates the filtered `subjects` list.
    *   Restoring a subject (`addSubjectToDashboard`) filters the ID out from the hidden list, updates `localStorage`, and inserts it back into the active `subjects` list.

---

## 3. Caveats

*   Only client-side persistence in `localStorage` was investigated. No database or API-driven persistence exists for custom user subject layouts.
*   Custom added subjects (from branches/sem other than the currently selected branch/sem) are saved in `ktunode_custom_subjects_${branch}_${sem}`. The interactions between hidden and custom subjects were only analyzed from the React state perspective and weren't verified with live backend modifications since we are in a read-only explorer mode.

---

## 4. Conclusion

*   The subject API resolves branch names to five canonical keys and serves subject definitions either from directory lists or flat JSONs.
*   Subject filtering and hiding are handled client-side in the dashboard using `localStorage` keys matching `ktunode_hidden_subjects_${branch}_${sem}`.
*   To implement a checkbox-based selector list, developers can construct a checkbox group mapping all available subjects, setting `checked` attributes according to the non-presence of subject IDs in the `hiddenSubjectIds` array, and toggling via the existing `addSubjectToDashboard` and `removeSubjectFromDashboard` routines.

---

## 5. Verification Method

1.  **File Inspections**:
    *   Verify the `/api/subjects` GET route implementation in `src/app/api/subjects/route.ts`.
    *   Verify the `Subject` TypeScript interface definition in `src/lib/mockData.ts`.
    *   Verify `removeSubjectFromDashboard` and `addSubjectToDashboard` routines in `src/app/dashboard/page.tsx` around lines 1488-1524.
2.  **Functional verification**:
    *   Check state in your browser developer console: `localStorage.getItem("ktunode_hidden_subjects_cs_6")` after hiding/adding a subject to verify format matches `["subject-id"]`.
