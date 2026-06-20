# Analysis Report: Subject APIs & Dynamic Dashboard Loading

This report details the subject API data schema, resolution process, dashboard hide/filter mechanism, and recommendations for dynamically displaying checkboxes to manage subject visibility.

---

## 1. Subject API Data Schema & Resolution

The `/api/subjects` endpoint (`src/app/api/subjects/route.ts`) resolves subjects based on the `branch` and `sem` query parameters.

### Request Query Parameters
*   `branch`: The engineering branch name. It is lowercased and mapped to a canonical branch identifier (`cs`, `ce`, `ec`, `ee`, `me`) using `apiMapping`.
*   `sem`: The semester, either in `sem-X` format or raw number `X` (where `X` is an integer between 1 and 8).

### Resolution Strategies (Priority Order)
1.  **Preferred Folder Structure**: Checks if `src/data/subjects/${branch}-${sem}` exists and is a directory.
    *   If it is a directory, it reads all files in it ending with `.json`, sorts them alphabetically (ensuring correct course order), parses their JSON contents, and returns them as an array.
2.  **Legacy Fallback**: Checks if a flat file `src/data/subjects/${branch}-${sem}.json` exists. If so, it parses and returns its contents.
3.  **Default**: Returns an empty array `[]` if neither is found.

### Schema Definition
The TypeScript interfaces defining the structure of subject files are declared in `src/lib/mockData.ts`:

```typescript
export interface PYQ {
  id: string;
  year: string;
  question: string;
  marks: number;
}

export interface Topic {
  id: string;
  title: string;
  content: string;
  pyqs?: PYQ[];
}

export interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  branchId: string;
  semester: number;
  modules: Module[];
}
```

*Example JSON schema for a subject (`src/data/subjects/cs-6/027_PCCAT601.json`):*
```json
{
  "id": "pccat601-cs-s6",
  "code": "PCCAT601",
  "name": "AGENT BASED INTELLIGENT SYSTEMS",
  "branchId": "cs",
  "semester": 6,
  "modules": [
    {
      "id": "mModule 1",
      "title": "Module Module 1",
      "topics": [
        {
          "id": "tModule 1_1",
          "title": "Definitions",
          "content": "",
          "pyqs": []
        }
      ]
    }
  ]
}
```

---

## 2. Dashboard Hidden Subjects Logic

The dashboard page (`src/app/dashboard/page.tsx`) tracks and filters hidden subjects using three core React states:

```typescript
const [subjects, setSubjects] = useState<Subject[]>([]); // Filtered active subjects rendered in the main grid
const [allAvailableSubjects, setAllAvailableSubjects] = useState<Subject[]>([]); // Total pool of subjects returned by the API
const [hiddenSubjectIds, setHiddenSubjectIds] = useState<string[]>([]); // List of hidden subject IDs
```

### Filtering Flow (Initial Load)
1.  On mounting or when branch/sem changes, the dashboard retrieves hidden subject IDs from `localStorage` using a dynamic key:
    ```typescript
    const editModeStorageKey = `ktunode_hidden_subjects_${branch}_${sem}`;
    const storedHidden = localStorage.getItem(editModeStorageKey);
    const hidden = storedHidden ? JSON.parse(storedHidden) : [];
    setHiddenSubjectIds(hidden);
    ```
2.  The `/api/subjects?branch=${branch}&sem=${sem}` endpoint is called.
3.  Upon fetching the subjects list, the dashboard filters the list before saving it to the active subjects state:
    ```typescript
    const subjectsList = Array.isArray(data) ? data : [];
    setAllAvailableSubjects(subjectsList);
    setSubjects(subjectsList.filter((s: Subject) => !hidden.includes(s.id)));
    ```

---

## 3. Persisting Deselected Subjects

Deselecting or hiding a subject updates both local React state and `localStorage` to ensure persistence across reloads.

### Removal (Deselecting) Logic
When a user removes/deselects a subject from the dashboard grid:
1.  The haptic feedback is triggered.
2.  The subject ID is appended to `hiddenSubjectIds`.
3.  The updated list is stringified and saved to `localStorage`.
4.  The subject is filtered out from the active `subjects` list.

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

### Restoration (Re-selecting) Logic
When a user adds back a hidden subject via the search modal:
1.  The subject ID is filtered out from `hiddenSubjectIds`.
2.  The updated list is saved to `localStorage`.
3.  The subject is appended back to the active `subjects` list.

```typescript
const addSubjectToDashboard = (subject: Subject) => {
  triggerHaptic("success");
  const updatedHidden = hiddenSubjectIds.filter((id) => id !== subject.id);
  setHiddenSubjectIds(updatedHidden);
  localStorage.setItem(editModeStorageKey, JSON.stringify(updatedHidden));
  
  setSubjects((prev) => {
    if (prev.find((s) => s.id === subject.id)) return prev;
    return [...prev, subject];
  });
  setAddSubjectOpen(false);
};
```

---

## 4. Proposing a Checkbox-Based Subject Toggle UI

To dynamically display checkboxes for selecting/deselecting subjects (which replaces or enhances the current search-to-add/trash UI), we can implement a checklist within the edit layout panel.

### Implementation Blueprint

1.  **State Management**: Use `allAvailableSubjects` as the complete list of courses, and render a checkbox next to each.
2.  **Checked Status**: A subject's checkbox is `checked` if `!hiddenSubjectIds.includes(subject.id)`.
3.  **Toggle Handler**: Clicking the checkbox toggles the subject's visibility by either calling `removeSubjectFromDashboard(id)` or `addSubjectToDashboard(subject)`.

### Example React Component (Checkbox UI)

```tsx
import React from "react";
import { Subject } from "@/lib/mockData";

interface SubjectCheckboxListProps {
  allAvailableSubjects: Subject[];
  hiddenSubjectIds: string[];
  onToggle: (subject: Subject) => void;
}

export const SubjectCheckboxList: React.FC<SubjectCheckboxListProps> = ({
  allAvailableSubjects,
  hiddenSubjectIds,
  onToggle,
}) => {
  return (
    <div className="space-y-3 p-4 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
      <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2">
        Manage Visible Courses
      </h3>
      {allAvailableSubjects.map((subject) => {
        const isVisible = !hiddenSubjectIds.includes(subject.id);
        return (
          <label
            key={subject.id}
            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer select-none transition-all"
          >
            <input
              type="checkbox"
              checked={isVisible}
              onChange={() => onToggle(subject)}
              className="w-4.5 h-4.5 rounded border-slate-300 dark:border-slate-700 text-violet-600 focus:ring-violet-500 transition-colors"
            />
            <div className="flex flex-col">
              <span className="text-xs font-black text-slate-800 dark:text-slate-100">
                {subject.name}
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                {subject.code}
              </span>
            </div>
          </label>
        );
      })}
    </div>
  );
};
```
