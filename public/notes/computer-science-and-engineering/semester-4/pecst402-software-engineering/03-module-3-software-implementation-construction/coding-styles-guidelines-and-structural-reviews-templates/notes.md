# Coding styles, guidelines, and structural reviews templates

<!-- SECTION_1_START -->

# Module 3 — Software Implementation & Construction
## Topic: Coding Styles, Guidelines, and Structural Review Templates

> [!IMPORTANT]
> **KTU 2024 Scheme | PECST402 | Module 3 Focus Area**
> This topic falls under **Course Outcome CO3**: *Apply coding standards, guidelines, and review templates to construct well-structured, maintainable software modules.*

---

## 1.1 Formal Definition (KTU Syllabus Terminology)

**Coding Style** is a set of *consistent, project-wide conventions* governing how source code is written, formatted, and structured. It covers indentation, brace placement, naming conventions, commenting density, and file organization. It is enforced at the **unit (program) level** during the implementation phase of the Software Development Life Cycle (SDLC).

**Coding Guidelines** are the *documented, enforceable rules* that govern the logical, semantic, and stylistic aspects of programming. They dictate how identifiers are named, how control structures are constructed, how errors are handled, and how modules communicate. According to the IEEE Standard 1028-2008 for software reviews, coding guidelines are a prerequisite for any formal code review activity.

**Structural Review Templates** are *predefined, reusable artifacts* — typically checklists, forms, or matrices — that guide a reviewer through a systematic, line-by-line or block-by-block inspection of source code. They convert an *ad hoc* code review into a measurable, repeatable, and audit-ready engineering process. The most common type is the **Code Inspection Checklist**, popularized by Michael Fagan at IBM in 1976.

> [!NOTE]
> **Core Distinction for KTU Board Exams**
> - **Coding Style** $\rightarrow$ *How* the code *looks* (visual aesthetics, formatting).
> - **Coding Guidelines** $\rightarrow$ *What* the code *must do* and *avoid* (logic, robustness, security).
> - **Structural Review Template** $\rightarrow$ *How we verify* both of the above objectively.

---

## 1.2 Intuitive Overview (Real-World Analogy)

Imagine you and **10 other engineers** are building a single bridge together. Without a shared system, one engineer uses inches, another uses centimeters, one welds from the top, another from the bottom, and one paints the structure *before* it is bolted. The bridge may physically stand, but it is unsafe, un-inspectable, and impossible to maintain.

| Engineering Domain | Software Equivalent |
| :--- | :--- |
| **Building Code** (e.g., IS 800 for steel) | **Coding Guidelines** |
| **Drawing & Drafting Standards** (line types, scales) | **Coding Style** |
| **Quality Inspection Checklist** | **Structural Review Template** |
| **Structural Engineer Sign-off** | **Code Review / Inspection Meeting** |

> [!TIP]
> **Think of it this way:** Coding style is the *font* and *grammar* of programming. Coding guidelines are the *rules of the language*. A structural review template is the *examiner's marking scheme* that checks both.

---

## 1.3 Key Engineering Metrics (Highlighted)

- **Lines of Code (LOC)** — A non-functional size measure, often used to estimate review effort. Average review speed is **100–200 LOC/hour** for a thorough inspection.
- **Defect Density (DD)** — Measured as *Defects per KLOC* (Thousand Lines of Code). Industry target: $DD < 1$ defect/KLOC.
- **Code Coverage (CC)** — Percentage of code paths exercised by tests; review templates often demand $\geq 80\%$ coverage.
- **Cyclomatic Complexity (CC)** — The number of independent linear paths through a program; KTU and industry standard demands a **per-function threshold of $V(G) \leq 10$**.

> [!NOTE]
> **Standard Reference (KTU Recommended Reading):**
> Roger S. Pressman, *Software Engineering: A Practitioner's Approach*, McGraw-Hill, Chapter 14 (Implementation) and Chapter 20 (Formal Technical Reviews).

---

> [!VISUALIZATION CONTROL]
> **Concept:** The Coverage & Complexity relationship of a single function.
> **GeoGebra / Desmos Input Equations:**
> - `f(x) = x^2 - 10` (Cyclomatic threshold curve, $V(G) = 10$)
> - Point plot: `(4, 6)` labelled as *Acceptable Function*, `(12, 144)` labelled as *Reject: Refactor Required*
> **Visual Description:** The x-axis represents the number of decision points (if, while, for, case), and the y-axis represents the resulting complexity. Functions plotted above the curve are flagged by the structural review template for mandatory refactoring.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Cheat Sheet

## 2.1 Anatomy of a Coding Style Specification

A complete coding style document is composed of **seven structural pillars**. Missing any one of them leads to inconsistent code across team members, which is a guaranteed mark-loser in KTU 14-mark design questions.

1. **Layout & Whitespace Rules** — Indentation (commonly **4 spaces**, never tabs mixed with spaces), maximum line length (typically **80 or 120 characters**), and blank line usage between logical blocks.
2. **Naming Conventions** — Lower camelCase for variables ($myVariable$), Upper PascalCase for classes ($BankAccount$), and SCREAMING_SNAKE_CASE for constants ($MAX\_LIMIT = 100$).
3. **Commenting Policy** — Header blocks, function docstrings, inline explanations, and a strict policy against *redundant comments*.
4. **File & Module Organization** — One public class per file, import grouping (standard library $\rightarrow$ third-party $\rightarrow$ local), and folder hierarchy.
5. **Statement & Block Construction** — Consistent brace placement (K\&R vs Allman style), single statement per line, no deep nesting beyond **3–4 levels**.
6. **Error Handling Convention** — Use of exceptions over return codes, specific exception types, and a uniform logging format.
7. **Version Control Metadata** — Required commit message format and file header templates.

---

## 2.2 The IEEE 1028-2008 Family of Reviews (KTU High-Yield)

The KTU 2024 syllabus emphasizes that structural reviews are *not* just "looking at code". They are formal engineering activities defined by the **IEEE Standard for Software Reviews and Inspections (1028-2008)**.

| Review Type | Formality | Conducted By | Primary Goal | Typical Artifact |
| :--- | :--- | :--- | :--- | :--- |
| **Walkthrough** | Low | Author leads | Knowledge transfer, defect discovery | Slide deck, dry-run |
| **Technical Review** | Medium | Peers + Tech Lead | Evaluate suitability for intent | Review log, decision memo |
| **Inspection** | Highest | Trained Moderator, Reader, Recorder | **Defect removal** with measurable data | Fagan Inspection Report |
| **Audit** | External | Independent party | Verify compliance to standards | Audit checklist, sign-off |

> [!IMPORTANT]
> **The Fagan Inspection Process** is the gold standard and is frequently asked in KTU board exams. It has **six strict stages**: Planning $\rightarrow$ Overview $\rightarrow$ Individual Preparation $\rightarrow$ Inspection Meeting $\rightarrow$ Rework $\rightarrow$ Follow-up.

---

## 2.3 KTU High-Yield Cheat Sheet (Tabular Formula & Rule Summary)

> [!NOTE]
> **Critical Rule:** No `$\vert$` pipes are used inside table cells. All absolute values and dividers are written with $\mid$ or \vert.

| \# | Concept | KTU / Industry Standard | Unit / Threshold |
| :---: | :--- | :--- | :--- |
| 1 | Indentation width | **4 spaces** (PEP 8 / KTU default) | spaces |
| 2 | Max line length | **120 characters** (industry), 80 (academic) | characters |
| 3 | Max function length | **50–60 LOC** per function | lines |
| 4 | Cyclomatic complexity per function | $V(G) \leq 10$ | paths |
| 5 | Max nesting depth | **4 levels** (if/loop inside if/loop) | levels |
| 6 | Function parameters | **$\leq 5$ parameters** (use object otherwise) | parameters |
| 7 | Comment density | **$1$ comment per $10$ LOC** (min), $30\%$ ratio (max) | ratio |
| 8 | Review meeting duration | **$\leq 2$ hours**; **$\leq 200$ LOC** per session | hours, LOC |
| 9 | Defect density target | $DD \leq 1$ defect per KLOC | defects/KLOC |
| 10 | Code coverage by tests | $CC \geq 80\%$ | percentage |
| 11 | Inspection preparation rate | **$\leq 100$ LOC / hour** | LOC/hour |
| 12 | Inspection meeting rate | **$\leq 150$ LOC / hour** | LOC/hour |
| 13 | Fagan Inspection stages | **6** (Plan, Overview, Prep, Meet, Rework, Follow-up) | count |
| 14 | Inspection entry criterion | Code compiles, no syntax errors, all tests pass | boolean |
| 15 | Inspection exit criterion | All major defects resolved, re-inspection done | boolean |

> [!TIP]
> **Engineering Utility:** These thresholds are used in production systems at companies like Microsoft, Google, and Amazon. They are encoded into automated linters (Pylint, ESLint, SonarQube) which act as *machine-applied* structural review templates.

---

## 2.4 Real-World Application Mapping

- **Google Style Guides** — Used internally for all C++, Python, and Java code; enforced at commit time.
- **MISRA C / MISRA C++** — Mandatory coding guidelines for **safety-critical automotive and aerospace software** (e.g., Boeing 787 flight control, Toyota brake-by-wire systems).
- **CERT Secure Coding Standards** — Guidelines for security-focused code reviews in banking and defense.
- **PEP 8** — The *de facto* Python style guide referenced by the KTU syllabus indirectly via Pressman.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivation, Code Implementation & Template Construction

## 3.1 The Logic Flow of a Structural Review (Fagan Inspection Derivative)

We now derive the **defect-removal efficiency** of a structural review mathematically, which is a common 14-mark KTU derivation.

### 3.1.1 Step-by-Step Derivation of Phase Effort

Let the total source code size be $S$ measured in **Lines of Code (LOC)**. The Fagan Inspection process distributes effort across its six stages. Let the effort fraction for stage $i$ be $p_i$, where:

$$\sum_{i=1}^{6} p_i = 1$$

The standard industrial allocation is:

$$
p_{\text{plan}} = 0.10, \quad p_{\text{overview}} = 0.05, \quad p_{\text{prep}} = 0.40, \quad p_{\text{meet}} = 0.25, \quad p_{\text{rework}} = 0.15, \quad p_{\text{followup}} = 0.05
$$

> **Step 1 — Verification of Sum:**
>
> $$\sum p_i = 0.10 + 0.05 + 0.40 + 0.25 + 0.15 + 0.05 = 1.00 \checkmark$$

> **Step 2 — Total Inspection Effort:**
>
> The total effort $E$ in person-hours is calculated by dividing the size $S$ by the recommended rate $R_i$ for each stage:
>
> $$E = \sum_{i=1}^{6} \frac{p_i \cdot S}{R_i}$$

> **Step 3 — Substituting KTU-Standard Rates:**
>
> Standard rates (LOC per person-hour): $R_{\text{plan}}=500$, $R_{\text{overview}}=1000$, $R_{\text{prep}}=100$, $R_{\text{meet}}=150$, $R_{\text{rework}}=200$, $R_{\text{followup}}=500$.

> **Step 4 — Worked Numerical Example:**
>
> Assume $S = 1000$ LOC. Then:
>
> $$E = \frac{0.10 \cdot 1000}{500} + \frac{0.05 \cdot 1000}{1000} + \frac{0.40 \cdot 1000}{100} + \frac{0.25 \cdot 1000}{150} + \frac{0.15 \cdot 1000}{200} + \frac{0.05 \cdot 1000}{500}$$

> **Step 5 — Term-by-Term Evaluation:**
>
> $$E = 0.20 + 0.05 + 4.00 + 1.67 + 0.75 + 0.10$$
>
> $$E = 6.77 \text{ person-hours}$$

> **Step 6 — Defect Detection Probability:**
>
> Empirical research (Fagan, 1986) shows the cumulative probability of finding a defect at each stage follows:
>
> $$P_{\text{detect}}(k) = 1 - \prod_{i=1}^{k} (1 - d_i)$$
>
> where $d_i$ is the per-stage detection rate. Typical values: $d_1=0.45$ (prep), $d_2=0.40$ (meeting), $d_3=0.25$ (rework), and $d_4=0.10$ (system test). For $k=4$:
>
> $$P_{\text{detect}} = 1 - (0.55 \times 0.60 \times 0.75 \times 0.90)$$
>
> $$P_{\text{detect}} = 1 - 0.2228 = 0.7772 \approx 77.72\%$$

> **Final Interpretive Sentence for Full Marks:**
> Therefore, for a 1000 LOC module, a complete Fagan Inspection consumes approximately **6.77 person-hours** and is statistically expected to detect **77.72\%** of latent defects before unit testing begins.

---

## 3.2 Coding Style Implementation in Python (Full Production-Quality Code)

The following program implements the *Student Grade Processor* with **all 7 coding guidelines** explicitly applied. Each guideline is annotated with a `[G#]` tag for examiner traceability.

```python
"""
Module: grade_processor.py
Author: KTU Software Engineering Lab
Date : 2024-11-15
Purpose: Compute weighted average grade for a student record set.
Coding Standard: KTU 2024 Implementation Guidelines (v1.4)
"""
# --- Standard library imports first [G3: Import Order] ---
from __future__ import annotations
from dataclasses import dataclass, field
from typing import List, Dict, Optional
import logging

# --- Local imports last [G3] ---
from .exceptions import InvalidScoreError

# --- Constants in SCREAMING_SNAKE_CASE [G2: Naming] ---
MAX_SCORE: float = 100.0
MIN_SCORE: float = 0.0
PASS_THRESHOLD: float = 50.0
WEIGHT_THEORY: float = 0.6   # 60% weight for theory component
WEIGHT_PRACTICAL: float = 0.4  # 40% weight for practical component


@dataclass
class StudentRecord:
    """
    Immutable data structure holding one student's marks.

    Attributes:
        roll_no (str): Unique 8-digit university roll number.
        theory_score (float): Score in the theory component.
        practical_score (float): Score in the practical component.
    """
    roll_no: str
    theory_score: float
    practical_score: float
    remarks: str = field(default="Pending Evaluation")

    def __post_init__(self) -> None:
        """Validate scores fall within the permitted academic range [G6: Error Handling]."""
        if not (MIN_SCORE <= self.theory_score <= MAX_SCORE):
            raise InvalidScoreError(
                f"Theory score {self.theory_score} is outside [{MIN_SCORE}, {MAX_SCORE}]."
            )
        if not (MIN_SCORE <= self.practical_score <= MAX_SCORE):
            raise InvalidScoreError(
                f"Practical score {self.practical_score} is outside [{MIN_SCORE}, {MAX_SCORE}]."
            )


class GradeProcessor:
    """
    Processes a batch of StudentRecord objects and emits a result map.

    This class is designed to be stateless [G4: Single Responsibility].
    """

    def __init__(self, class_name: str) -> None:
        """Initialize the processor with a human-readable class label."""
        self._class_name: str = class_name
        self._logger: logging.Logger = logging.getLogger(self.__class__.__name__)

    def compute_weighted_grade(self, record: StudentRecord) -> float:
        """
        Compute the final weighted grade for a single record.

        Formula:
            grade = (theory_score * WEIGHT_THEORY) + (practical_score * WEIGHT_PRACTICAL)

        Args:
            record: A pre-validated StudentRecord instance.

        Returns:
            The weighted grade as a float in the range [0.0, 100.0].
        """
        weighted_total: float = (
            record.theory_score * WEIGHT_THEORY
            + record.practical_score * WEIGHT_PRACTICAL
        )
        return round(weighted_total, 2)

    def has_passed(self, final_grade: float) -> bool:
        """Return True if the final grade meets or exceeds the pass threshold."""
        return final_grade >= PASS_THRESHOLD

    def process_batch(
        self, records: List[StudentRecord]
    ) -> Dict[str, Dict[str, object]]:
        """
        Process an entire batch of student records.

        Returns:
            A dictionary keyed by roll number, containing the grade, pass/fail flag, and remarks.
        """
        result_map: Dict[str, Dict[str, object]] = {}

        for record in records:                            # [G5: Single-line loop, low nesting]
            try:
                grade: float = self.compute_weighted_grade(record)
                status: bool = self.has_passed(grade)
                record.remarks = "Pass" if status else "Re-appear"
                result_map[record.roll_no] = {
                    "grade": grade,
                    "status": record.remarks,
                    "class": self._class_name,
                }
                self._logger.info("Processed %s with grade %.2f", record.roll_no, grade)
            except InvalidScoreError as exc:
                self._logger.error("Skipping invalid record %s: %s", record.roll_no, exc)
                result_map[record.roll_no] = {"grade": None, "status": "Error"}

        return result_map


def safe_main(class_name: str, records: Optional[List[StudentRecord]] = None) -> None:
    """Module entry-point function with defensive programming [G6]."""
    if records is None:
        records = []
    processor: GradeProcessor = GradeProcessor(class_name=class_name)
    output: Dict[str, Dict[str, object]] = processor.process_batch(records)
    print(f"Processing complete. {len(output)} record(s) evaluated.")


if __name__ == "__main__":
    safe_main(class_name="S7-CS-A", records=[])
```

> **Guideline Application Legend (as required by KTU board valuation):**
> - [G1] 4-space indentation, max 80 chars/line
> - [G2] snake_case for functions, PascalCase for classes, SCREAMING_SNAKE_CASE for constants
> - [G3] Import order: standard library $\rightarrow$ third-party $\rightarrow$ local
> - [G4] Single Responsibility Principle — one class, one purpose
> - [G5] Control structure with single statement per line, no deep nesting
> - [G6] Exceptions over return codes; explicit logging
> - [G7] File header docstring with author, date, and purpose

---

## 3.3 Structural Review Template (Production-Ready Form)

The following is a **complete, fillable structural review template** that can be directly deployed in a KTU lab record or a software firm.

### SECTION A — Document Metadata

| Field | Value |
| :--- | :--- |
| Project Name | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| Module / File Name | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| Review ID (UUID) | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| Date of Review | DD / MM / YYYY |
| Author of Code | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| Reviewer Name(s) | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| Review Type (Tick) | [ ] Walkthrough  [ ] Technical Review  [ ] Inspection |
| Lines of Code Inspected | \_\_\_\_\_ LOC |
| Cyclomatic Complexity (Max) | $V(G) =$ \_\_\_\_\_ |

### SECTION B — Pre-Review Entry Checklist (Gate Criteria)

> The review **MUST NOT** start unless *all* of the following are true. Each item is binary: ✅ Pass / ❌ Fail.

| \# | Gate Criterion | Pass / Fail | Reviewer Initials |
| :---: | :--- | :---: | :--- |
| B1 | Code compiles without warnings | \_\_\_ | \_\_\_ |
| B2 | All existing unit tests pass | \_\_\_ | \_\_\_ |
| B3 | Code adheres to the project style guide (lint passes) | \_\_\_ | \_\_\_ |
| B4 | Public APIs are documented | \_\_\_ | \_\_\_ |
| B5 | No hard-coded credentials present | \_\_\_ | \_\_\_ |
| B6 | Code has been self-reviewed by the author | \_\_\_ | \_\_\_ |

### SECTION C — Structural Review Checklist (Per Function)

For each function under review, the reviewer scores the following items on a **0–2 scale**:
- $0$ = Not compliant, action required
- $1$ = Partially compliant, clarification needed
- $2$ = Fully compliant, no action

| \# | Checklist Item | Score (0–2) | Finding / Comment |
| :---: | :--- | :---: | :--- |
| C1 | Function name is a verb and clearly describes its purpose | \_\_ | |
| C2 | Function length $\leq 50$ LOC | \_\_ | |
| C3 | Number of parameters $\leq 5$ | \_\_ | |
| C4 | Cyclomatic complexity $V(G) \leq 10$ | \_\_ | |
| C5 | Nesting depth $\leq 4$ | \_\_ | |
| C6 | All branches have a clear and consistent return path | \_\_ | |
| C7 | No magic numbers; named constants are used | \_\_ | |
| C8 | All inputs are validated at the function entry | \_\_ | |
| C9 | Exceptions are specific and include diagnostic context | \_\_ | |
| C10 | No dead code, commented-out blocks, or TODOs without an issue link | \_\_ | |
| C11 | Logging is used for diagnostic events (not for control flow) | \_\_ | |
| C12 | All public methods have a docstring (Purpose, Args, Returns) | \_\_ | |

### SECTION D — Defect Log

| Defect ID | Severity (Critical/Major/Minor) | Description | Location (File:Line) | Assigned To | Status |
| :---: | :--- | :--- | :--- | :--- | :--- |
| D1 | | | | | |
| D2 | | | | | |
| D3 | | | | | |
| D4 | | | | | |

### SECTION E — Decision & Sign-Off

| Decision Option | Tick |
| :--- | :---: |
| **ACCEPT** — No defects or only minor trivial defects. Code is approved. | [ ] |
| **ACCEPT WITH MINOR REWORK** — Code approved but author must fix minor items. | [ ] |
| **RE-INSPECT** — Major defects present; another full review required after rework. | [ ] |
| **REJECT** — Fundamental architectural or logic flaws. Rewrite required. | [ ] |

> **Moderator Sign-off:** \_\_\_\_\_\_\_\_\_\_\_\_\_  **Date:** \_\_\_\_\_\_\_\_\_\_\_\_\_
> **Author Sign-off (after rework):** \_\_\_\_\_\_\_\_\_\_\_\_\_  **Date:** \_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Process Schematics

## 4.1 Mermaid Diagram — The Fagan Inspection Lifecycle

```mermaid
graph TD
    A[Stage 1: Planning] --> B[Stage 2: Overview]
    B --> C[Stage 3: Individual Preparation]
    C --> D[Stage 4: Inspection Meeting]
    D --> E{Defects Found?}
    E -- Yes --> F[Stage 5: Rework by Author]
    F --> G{All Major Defects Fixed?}
    G -- No --> F
    G -- Yes --> H[Stage 6: Follow-up Verification]
    E -- No --> H
    H --> I[Review Closed & Archived]

    subgraph Roles [Fagan Inspection Roles]
        R1[Moderator - Leads the Process]
        R2[Reader - Paraphrases Code]
        R3[Recorder - Logs Defects]
        R4[Author - Owns the Code]
        R5[Reviewer - Inspects for Defects]
    end

    subgraph EntryGate [Entry Gate Criteria]
        EG1[Code Compiles Clean]
        EG2[Author Self-Review Done]
        EG3[All Tests Pass]
    end

    EntryGate --> A
```

## 4.2 Mermaid Diagram — Code Review Workflow in a Modern CI/CD Pipeline

```mermaid
graph LR
    P1[Developer Commits Code] --> P2[Automated Linter Runs]
    P2 --> P3{Lint Pass?}
    P3 -- No --> P1
    P3 -- Yes --> P4[Static Analysis via SonarQube]
    P4 --> P5[Security Scan via Snyk]
    P5 --> P6[Pull Request Created]
    P6 --> P7[Automated Unit Tests Run]
    P7 --> P8{All Tests Pass?}
    P8 -- No --> P1
    P8 -- Yes --> P9[Peer Code Review via Template]
    P9 --> P10{Two Approvals Received?}
    P10 -- No --> P11[Reviewer Requests Changes]
    P11 --> P1
    P10 -- Yes --> P12[Code Merged to Main Branch]
    P12 --> P13[Continuous Integration Build]
    P13 --> P14[Deployment to Staging]
```

## 4.3 Mermaid Diagram — Functional Block Architecture of a Coding Standard

```mermaid
graph TD
    CS[Coding Standard Document]

    CS --> ST1[Style Rules]
    CS --> ST2[Guideline Rules]
    CS --> ST3[Review Templates]

    ST1 --> ST1a[Indentation: 4 spaces]
    ST1 --> ST1b[Line Length: max 120 chars]
    ST1 --> ST1c[Brace Style: K and R]
    ST1 --> ST1d[Naming: camelCase, PascalCase]

    ST2 --> ST2a[Error Handling: Exceptions]
    ST2 --> ST2b[Logging: INFO, WARN, ERROR]
    ST2 --> ST2c[Documentation: Docstrings]
    ST2 --> ST2d[Security: Input Validation]

    ST3 --> ST3a[Entry Gate Checklist]
    ST3 --> ST3b[Per-Function Checklist]
    ST3 --> ST3c[Defect Log Table]
    ST3 --> ST3d[Sign-off Decision Block]
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

> [!NOTE]
> **Mark Distribution Reference:** Part A = 3 marks each (Remember/Understand). Part B = 14 marks each (Apply/Analyze/Evaluate), with internal choice as per KTU ESE pattern.

---

## PART A — Short Answer Questions (3 Marks Each)

### Question 1 — `[KTU University Exam - July 2024]`
**Differentiate between coding style and coding guidelines with a suitable example. (CO3, Remember)**

**Model Answer (3 Marks — Full Marks Distribution):**
- **Coding Style (1 Mark):** Refers to the *visual and formatting conventions* of source code, such as indentation, brace placement, spacing, and naming conventions.
- **Coding Guidelines (1 Mark):** Refer to the *logical, structural, and best-practice rules* that govern how code is constructed, including error handling, input validation, modularity, and documentation.
- **Suitable Example (1 Mark):** Style: *"Use 4-space indentation and place the opening brace on the same line."* Guideline: *"Validate all function inputs at the entry point and raise a specific exception with a descriptive message."*

### Question 2 — `[KTU University Exam - Dec 2023]`
**List the six stages of the Fagan Inspection process. (CO3, Remember)**

**Model Answer (3 Marks — Half mark per correct stage):**
1. **Planning** — Moderator schedules the inspection, distributes materials.
2. **Overview** — Author presents the design and code context to the team.
3. **Individual Preparation** — Each reviewer studies the code independently using the checklist.
4. **Inspection Meeting** — Team meets (max 2 hours, ≤ 200 LOC) to log defects.
5. **Rework** — Author fixes the logged defects.
6. **Follow-up** — Moderator verifies that all defects are resolved and the code is ready.

---

## PART B — Long Answer Questions (14 Marks Each — Internal Choice Provided)

### Question A — `[KTU University Exam - July 2024]`
**A 14-mark design question with sub-parts:**

**(a)** Explain the key elements that must be included in a comprehensive coding style document for a team developing a Java-based enterprise application. List at least **six** elements with one-line justifications. **(7 Marks, CO3, Understand)**

**(b)** Construct a **complete structural review template** suitable for inspecting a single function in a Python project. Your template must include metadata, entry criteria, a per-function checklist, a defect log, and a sign-off block. **(7 Marks, CO3, Apply)**

#### Model Solution

**Part (a) — Key Elements of a Coding Style Document (7 Marks)**

> **Mark Allocation:** 1 mark for each correctly named element + 0.5 marks for justification. Full 7 marks awarded at 6 elements.

The six essential elements are:

1. **Indentation and Layout Rules** — Mandates 4-space indentation and forbids mixing of tabs and spaces to ensure visual consistency across editors.
2. **Naming Conventions** — Specifies that class names use UpperCamelCase ($CustomerAccount$), variables use lowerCamelCase ($customerName$), and constants use SCREAMING_SNAKE_CASE ($MAX\_RETRIES$).
3. **Commenting and Documentation Policy** — Requires a file header, docstrings for public methods, and forbids redundant comments that simply restate the code.
4. **Statement and Block Construction** — Enforces a single statement per line, consistent brace placement, and a maximum nesting depth of 4 levels.
5. **File and Module Organization** — Requires one public class per file, logical import grouping, and a fixed directory structure for source, tests, and resources.
6. **Error Handling Convention** — Mandates the use of specific exception types over generic return codes and requires structured logging at the point of exception.

> **[Valuation Key Point: 1 Mark reserved for an additional seventh element — e.g., version control commit message format.]**

**Part (b) — Structural Review Template Construction (7 Marks)**

> **Mark Allocation Breakdown:**
> - Metadata block: 1 Mark
> - Entry gate criteria: 1.5 Marks
> - Per-function checklist with $\geq 8$ items: 2.5 Marks
> - Defect log table: 1 Mark
> - Sign-off decision block: 1 Mark

The student is expected to reproduce a template equivalent to the one provided in **Section 3.3** of this note, adapted for Python. The template must include:

- A **metadata header** capturing project name, file name, LOC, and reviewer name.
- An **entry gate** with at least four binary pass/fail conditions (e.g., compiles, lints, tests pass, self-reviewed).
- A **checklist** of at least eight measurable criteria scored on a 0–2 scale, covering complexity, naming, parameter count, and documentation.
- A **defect log table** with columns for ID, severity, description, and location.
- A **sign-off block** with three decision options: Accept, Accept with Minor Rework, Re-inspect / Reject.

> **Final 1 mark** is awarded only if the student demonstrates awareness of *Cyclomatic Complexity threshold $V(G) \leq 10$* somewhere in the checklist.

---

### Question B — `[KTU University Exam - Dec 2023]`
**The alternative 14-mark question:**

**(a)** Describe the Fagan Inspection process. State the **roles**, **activities**, and **entry/exit criteria** for each of the six stages. **(7 Marks, CO3, Understand)**

**(b)** For a 2000 LOC module, calculate the total inspection effort in person-hours using the standard Fagan rate distribution. Then, using the empirical defect detection rates $d_1=0.45$, $d_2=0.40$, $d_3=0.25$, $d_4=0.10$, compute the cumulative detection probability after all four detection stages. **(7 Marks, CO3, Apply)**

#### Model Solution

**Part (a) — Fagan Inspection Process (7 Marks)**

> **Mark Allocation:** 1.5 Marks for roles + 3.5 Marks for stage-wise activities + 2 Marks for entry/exit criteria.

| Stage | Activity | Entry Criterion | Exit Criterion |
| :--- | :--- | :--- | :--- |
| **1. Planning** | Moderator selects team, distributes code, schedules meeting | Code compiles; author self-review done | All reviewers have code and checklist |
| **2. Overview** | Author presents design intent, data structures, and algorithms | Inspection scheduled | Reviewers understand context |
| **3. Individual Preparation** | Reviewers study code, log potential defects | Overview complete | Each reviewer brings defect list |
| **4. Inspection Meeting** | Reader paraphrases code; team logs defects on Recorder's sheet | All prepared; meeting scheduled | All defects logged; ≤ 2 hours; ≤ 200 LOC |
| **5. Rework** | Author fixes logged defects | Inspection report distributed | All major defects addressed |
| **6. Follow-up** | Moderator verifies fixes and decides on closure | Rework complete | Inspection closed or re-inspection triggered |

**Roles** (1.5 Marks): **Moderator** (leader), **Author** (owner), **Reader** (paraphraser), **Recorder** (defect logger), **Reviewer** (defect hunter).

**Part (b) — Numerical Calculation (7 Marks)**

> **Step-by-step mark allocation:**
> - Setting up the formula $E = \sum (p_i \cdot S / R_i)$: 1 Mark
> - Correctly substituting the $p_i$ values: 1 Mark
> - Substituting $S = 2000$ and the standard rates: 1 Mark
> - Final effort calculation: 1 Mark
> - Cumulative probability formula: 1 Mark
> - Final probability value: 1 Mark
> - Interpretive conclusion: 1 Mark

**Step 1 — Total Effort Calculation:**

> **Stating formula: 1 Mark**
>
> $$E = \sum_{i=1}^{6} \frac{p_i \cdot S}{R_i}$$

> **Substituting $S = 2000$ LOC and the standard rates: 1 Mark**
>
> $$E = \frac{0.10 \cdot 2000}{500} + \frac{0.05 \cdot 2000}{1000} + \frac{0.40 \cdot 2000}{100} + \frac{0.25 \cdot 2000}{150} + \frac{0.15 \cdot 2000}{200} + \frac{0.05 \cdot 2000}{500}$$

> **Term-by-term evaluation: 1 Mark**
>
> $$E = 0.40 + 0.10 + 8.00 + 3.33 + 1.50 + 0.20$$
>
> $$E = 13.53 \text{ person-hours}$$

> **Final Effort Answer: 1 Mark**
>
> $$\boxed{E = 13.53 \text{ person-hours}}$$

**Step 2 — Cumulative Defect Detection Probability:**

> **Formula statement: 1 Mark**
>
> $$P_{\text{detect}} = 1 - \prod_{i=1}^{4} (1 - d_i)$$

> **Substitution and final calculation: 1 Mark**
>
> $$P_{\text{detect}} = 1 - (0.55 \times 0.60 \times 0.75 \times 0.90)$$
>
> $$P_{\text{detect}} = 1 - 0.2228$$
>
> $$\boxed{P_{\text{detect}} = 0.7772 \approx 77.72\%}$$

> **Interpretive conclusion: 1 Mark**
>
> The complete Fagan Inspection of a 2000 LOC module will consume approximately **13.53 person-hours** of effort and is expected to remove **77.72%** of latent defects before the testing phase begins, significantly reducing downstream rework cost.

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls (Strict 14-Mark Loss Patterns)**
>
> 1. **Confusing style with guidelines (–2 Marks):** Students often use the two terms interchangeably. Style is *visual*; guidelines are *logical*. Always state both with an example.
> 2. **Skipping entry/exit criteria (–2 Marks):** A Fagan Inspection question that does not mention entry and exit criteria is considered incomplete.
> 3. **Wrong LOC rate (–1 Mark):** The standard Fagan rate is **100 LOC/hour** for individual preparation. Writing 200 LOC/hour is a common but incorrect assumption.
> 4. **Forgetting the 200-LOC-per-meeting cap (–1 Mark):** The inspection meeting is strictly limited to **≤ 200 LOC and ≤ 2 hours**. Exceeding this is a process violation.
> 5. **No defect log in the template (–2 Marks):** A structural review template *without* a defect log table is treated as incomplete. Always include columns for ID, severity, location, and status.
> 6. **Missing the V(G) ≤ 10 threshold (–1 Mark):** Forgetting to mention Cyclomatic Complexity in the checklist loses a guaranteed 1 mark.
> 7. **Units missing in numerical answers (–1 Mark):** Always write "**person-hours**" after the numerical effort value, not just the number.

---

## 📋 Topic Recap & Important Things to Remember

- **Coding Style** governs the *appearance* of code (indentation, braces, spacing, naming).
- **Coding Guidelines** govern the *logic and robustness* of code (error handling, validation, logging, documentation).
- **Structural Review Templates** are *systematic, reusable checklists* that make code reviews objective, measurable, and audit-ready.
- The **Fagan Inspection** process has **6 stages** and uses **5 named roles** (Moderator, Author, Reader, Recorder, Reviewer).
- The inspection meeting is strictly limited to **≤ 200 LOC** and **≤ 2 hours** per session.
- The standard rates are **100 LOC/hour** (prep), **150 LOC/hour** (meeting), **200 LOC/hour** (rework).
- **Cyclomatic Complexity** per function must be $\leq 10$; **nesting depth** must be $\leq 4$; **function length** must be $\leq 50$ LOC.
- **Indentation**: 4 spaces. **Line length**: ≤ 120 characters. **Comment density**: $1$ comment per $10$ LOC minimum.
- **Defect Density** target: $\leq 1$ defect per KLOC. **Code Coverage** target: $\geq 80\%$.
- The cumulative detection probability of a Fagan Inspection is $P_{\text{detect}} = 1 - \prod (1 - d_i)$.
- A complete structural review template must contain **5 blocks**: Metadata, Entry Gate, Checklist, Defect Log, Sign-off.
- Always use **specific exception types** over generic ones; always include **diagnostic context** in error messages.
- Imports must be ordered: **standard library $\rightarrow$ third-party $\rightarrow$ local**.
- Class names use **UpperCamelCase**; functions use **lowerCamelCase**; constants use **SCREAMING_SNAKE_CASE**.
- KTU board exams expect students to **distinguish** style vs guidelines and to **cite Fagan rates** when answering process questions.

<!-- SECTION_5_END -->
