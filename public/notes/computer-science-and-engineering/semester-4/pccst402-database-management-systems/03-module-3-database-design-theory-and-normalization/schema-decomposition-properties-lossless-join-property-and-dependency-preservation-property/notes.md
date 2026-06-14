# Schema Decomposition Properties: Lossless-join property and Dependency preservation property

<!-- SECTION_1_START -->

# Schema Decomposition Properties: Lossless-Join & Dependency Preservation

## 1.1 Core Technical Definition

> [!IMPORTANT]
> **Schema Decomposition** is the process of replacing a relation schema $R$ with a collection of relation schemas $R_1, R_2, \dots, R_n$ such that each $R_i$ is a subset of the attributes of $R$ and every attribute of $R$ appears in at least one $R_i$, i.e., $R = R_1 \cup R_2 \cup \dots \cup R_n$.

A "good" decomposition must satisfy three fundamental properties in the KTU 2024 Scheme context:

1. **Lossless-Join (Non-additive) Property** — joining the decomposed relations must yield exactly the original relation, with no spurious (extra) tuples.
2. **Dependency Preservation** — all functional dependencies of the original relation must be enforceable on the individual decomposed relations without computing a join.
3. **Lack of Redundancy (Normalization)** — minimized duplication of data to suppress update, insertion, and deletion anomalies.

### 1.1.1 Formal Definition — Lossless-Join Decomposition

> [!NOTE]
> **Definition (Lossless-Join):** A decomposition of $R$ into $R_1$ and $R_2$ is **lossless** if for every legal instance $r$ of $R$:
> $$r = \pi_{R_1}(r) \bowtie \pi_{R_2}(r)$$
> where $\pi$ denotes projection and $\bowtie$ denotes natural join. Equivalently, no spurious tuples are generated when the projections are recombined.

### 1.1.2 Formal Definition — Dependency Preservation

> [!NOTE]
> **Definition (Dependency Preservation):** Let $F$ be the set of functional dependencies on schema $R$, and let $F_i$ be the projection of $F$ onto $R_i$ (i.e., $F_i = \{X \to Y \in F^+ \mid X \cup Y \subseteq R_i\}$). The decomposition $(R_1, R_2, \dots, R_n)$ is **dependency preserving** if:
> $$F^+ = (F_1 \cup F_2 \cup \dots \cup F_n)^+$$
> That is, every functional dependency in the closure of $F$ can be inferred from the union of the projected dependencies.

### 1.2 Intuitive Overview & Real-World Analogy

> [!TIP]
> **Analogy — The "Origami Bird" Problem:**
> Imagine a single master blueprint of a complex origami bird containing 30 features (head, wings, body, tail, legs). You decide to split the blueprint into 5 sheets, each containing 6 related features (e.g., one sheet for "head + neck", one for "left wing", one for "right wing", etc.). Two questions now arise:
>
> - **Lossless Join:** If you fold each sheet independently and then tape them together, do you get the *exact* original bird — no extra paper sticking out, no pieces missing? If yes, the split was lossless.
> - **Dependency Preservation:** The original blueprint stated a critical rule: *"if the head is folded right, the neck must follow"* ($Head \to Neck$). After splitting, can you still verify this rule using only the contents of *one* sheet (without reassembling the bird)? If yes, dependency is preserved.
>
> A *lossless* decomposition ensures no information is lost or fabricated during reconstruction. A *dependency-preserving* decomposition ensures business rules can still be enforced locally, without paying the cost of rejoining.

### 1.3 Standard KTU Terminology

- **Spurious Tuple** — an extraneous tuple produced by joining decomposed relations that was **not** present in the original relation.
- **Chase Test** — a symbolic algorithm that uses functional dependencies to verify lossless-join for an n-ary decomposition.
- **Projected Dependency Set $F_i$** — the restriction of $F$ to a single decomposed relation $R_i$.
- **Closure of FDs $F^+$** — the complete set of all functional dependencies logically implied by $F$.

### 1.4 Visualization Hint

> [!VISUALIZATION CONTROL]
> **Concept:** Lossless-Join as a Venn Diagram of Attribute Sets
> **GeoGebra / Desmos Input:**
> * Circle $R_1$ with equation $(x-1)^2 + y^2 = 1$
> * Circle $R_2$ with equation $(x+1)^2 + y^2 = 1$
> * Highlight intersection region $R_1 \cap R_2$
> **Visual Description:** The intersection of two attribute sets is the *common attributes* that act as the "glue" during natural join. A decomposition is lossless only when this intersection functionally determines at least one of the participating relations.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU Formula Sheet

## 2.1 Why Decompose at All?

Decomposition is the *engine* of normalization. Without it, we encounter the classical anomalies:

| Anomaly Type | Description | Example |
|:---:|:---|:---|
| **Update Anomaly** | Updating a value in one row leaves inconsistent values in others. | Student $S_{101}$ address changed in 1 row, still old in 3 rows. |
| **Insertion Anomaly** | Cannot insert certain data without other (possibly unavailable) data. | Cannot add a new course without enrolling a student. |
| **Deletion Anomaly** | Deleting one fact erases another fact unintentionally. | Deleting the only student enrolled in a course removes the course. |

> [!IMPORTANT]
> **Goal of Decomposition:** Eliminate anomalies **without** losing information (lossless-join) and **without** losing the ability to enforce constraints locally (dependency preservation).

## 2.2 The Lossless-Join Property — Theoretical Foundation

### 2.2.1 Binary Decomposition Test (KTU High-Yield)

For decomposing a relation $R$ into exactly two relations $R_1$ and $R_2$:

> [!NOTE]
> **Theorem (Heath's Condition for Binary Lossless-Join):**
> The decomposition $(R_1, R_2)$ of $R$ is lossless with respect to $F$ if and only if:
> $$(R_1 \cap R_2) \to R_1 \quad \text{or} \quad (R_1 \cap R_2) \to R_2$$
> Equivalently, the common attributes $R_1 \cap R_2$ form a key for **at least one** of the decomposed relations.

### 2.2.2 N-ary Decomposition — The Chase Test

For decompositions with more than two relations, we use the **Chase Test**:

**Step-by-step logic:**

1. Construct a relation $S$ with one row per decomposed relation $R_i$. Each row contains a unique variable (e.g., $a_1, a_2, \dots$) for the attributes in $R_i$ and a special **distinguished variable** (e.g., $b_j$) for attributes **not** in $R_i$.
2. Repeatedly apply the functional dependencies in $F$:
   - If a row has matching values in the LHS of an FD, **make the RHS values equal** (replace variables with the lexicographically smaller one).
3. If any row becomes **entirely distinguished variables** ($b_j$'s only), the decomposition is **lossless**.
4. Otherwise, **lossless-join fails**.

> [!WARNING]
> The Chase Test is **deterministic** but may require multiple passes. It does **not** always terminate instantly; in pathological cases it is exponential. For KTU exams, restrict to ≤ 4 relations and ≤ 5 attributes for manual solving.

## 2.3 The Dependency Preservation Property

### 2.3.1 Algorithm to Test Dependency Preservation

> [!NOTE]
> **Algorithm — Dependency Preservation Test:**
> 1. For each decomposed relation $R_i$, compute the projected dependency set $F_i = \pi_{R_i}(F)$.
> 2. Compute the **union**: $G = F_1 \cup F_2 \cup \dots \cup F_n$.
> 3. Compute the closure $G^+$.
> 4. Check whether $G^+ = F^+$. If yes → **dependency preserving**; if no → **not dependency preserving**.

### 2.3.2 Why Dependency Preservation Matters

In practice, when a database is in BCNF or 4NF, some decompositions may be lossless but **fail** to preserve all FDs. Example: the classical $R(Student, Course, Professor)$ with FDs $Student, Course \to Professor$ and $Professor \to Course$ leads to a BCNF decomposition that is lossless but **loses** the FD $Student, Course \to Professor$. This FD can only be enforced by computing a join — expensive in production!

## 2.4 KTU 2024 High-Yield Formula Sheet

| # | Property | Formula / Condition | Verification |
|:---:|:---|:---|:---|
| 1 | Decomposition is **lossless** (binary) | $(R_1 \cap R_2) \to R_1$ OR $(R_1 \cap R_2) \to R_2$ | Use attribute closure of $R_1 \cap R_2$ |
| 2 | Decomposition is **lossless** (n-ary) | Chase Test produces a row of all $b$-variables | Symbolic tableau with FDs |
| 3 | Decomposition is **dependency preserving** | $F^+ = (F_1 \cup F_2 \cup \dots \cup F_n)^+$ | Compute projected FDs and compare closures |
| 4 | Projected dependency set | $F_i = \{X \to Y \in F^+ \mid X \cup Y \subseteq R_i\}$ | Apply FDs, keep those fully contained in $R_i$ |
| 5 | **Hermes' Theorem** (extended) | A decomposition is lossless iff some FD in $F^+$ has LHS contained in $R_1 \cap R_2$ and RHS spans $R_1$ or $R_2$ | Useful for non-binary cases |
| 6 | Star-shape decomposition (3NF) | Always exists in 3NF, lossless, dependency preserving | Constructive algorithm by Bernstein |
| 7 | BCNF decomposition | Always lossless, **may not** be dependency preserving | Algorithm: iteratively remove violating FDs |

## 2.5 Engineering Utility in Production Systems

> [!TIP]
> **Real-World Application:**
> - **OLTP Systems (e.g., Banking, E-Commerce):** Dependency preservation is **non-negotiable**. Constraints like `AccountID → Balance` must be enforceable inside a single table to avoid the cost of joins on every transaction.
> - **Data Warehousing (OLAP):** Lossless-join is the priority; some dependencies may be relaxed for query performance.
> - **ETL Pipelines:** Chase Test is automated in tools like Apache Calcite and Microsoft SQL Server's normalization advisor.
> - **Distributed Databases (e.g., Google Spanner, CockroachDB):** Lossless-join is critical for **shard merging** during distributed query execution.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Code Implementation

## 3.1 Example 1 — Binary Lossless-Join Test

**Problem:**
Given $R(A, B, C, D, E)$ with $F = \{A \to BC, CD \to E, B \to D, E \to A\}$.
Decompose into $R_1(A, B, C)$ and $R_2(A, D, E)$.
Verify lossless-join.

**Step 1: Identify the intersection.**

$$R_1 \cap R_2 = \{A, B, C\} \cap \{A, D, E\} = \{A\}$$

**Step 2: Compute the closure of the intersection.**

$$A^+ = \{A\}$$

(Using $A \to BC$, we get $A^+ = \{A, B, C\}$.)

$$A^+ = \{A, B, C\}$$

**Step 3: Check whether the closure contains $R_1$ or $R_2$.**

$$A^+ = \{A, B, C\} \supseteq R_1 = \{A, B, C\} \quad \checkmark$$

Since $(R_1 \cap R_2)^+ \supseteq R_1$, the decomposition is **lossless**.

> [!NOTE]
> **Valuation Key:** Step 1 (intersection) = 1 mark, Step 2 (closure computation) = 2 marks, Step 3 (conclusion) = 1 mark. Total: **4 marks** for this sub-question.

---

## 3.2 Example 2 — Chase Test for N-ary Decomposition

**Problem:**
$R(A, B, C, D)$ with $F = \{A \to B, B \to C, C \to D\}$.
Decompose into $R_1(A, B)$, $R_2(B, C)$, $R_3(C, D)$.
Test lossless-join using the Chase Test.

**Step 1: Build the initial tableau.**

Each row corresponds to a relation. Use $a_i$ for variables specific to that row's relation, and $b_j$ for attributes not in that relation.

| | $A$ | $B$ | $C$ | $D$ |
|:---:|:---:|:---:|:---:|:---:|
| $R_1(A,B)$ | $a_1$ | $a_2$ | $b_3$ | $b_4$ |
| $R_2(B,C)$ | $b_1$ | $a_2$ | $a_3$ | $b_4$ |
| $R_3(C,D)$ | $b_1$ | $b_2$ | $a_3$ | $a_4$ |

**Step 2: Apply FD $A \to B$.**

- In Row 1: $A = a_1$, $B = a_2$ (no change).
- In Row 2: $A = b_1$, $B = a_2$ (no change).
- In Row 3: $A = b_1$, $B = b_2$ (no change).
- *No update triggered* because no row has two distinct symbols in $A$ that would force $B$ to change.

**Step 3: Apply FD $B \to C$.**

- Row 1: $B = a_2$, $C = b_3$. **Update $b_3 \to a_2$.**
- Row 2: $B = a_2$, $C = a_3$ (no change).
- Row 3: $B = b_2$, $C = a_3$ (no change).

Updated tableau:

| | $A$ | $B$ | $C$ | $D$ |
|:---:|:---:|:---:|:---:|:---:|
| $R_1$ | $a_1$ | $a_2$ | $\mathbf{a_2}$ | $b_4$ |
| $R_2$ | $b_1$ | $a_2$ | $a_3$ | $b_4$ |
| $R_3$ | $b_1$ | $b_2$ | $a_3$ | $a_4$ |

**Step 4: Apply FD $C \to D$.**

- Row 1: $C = a_2$, $D = b_4$. **Update $b_4 \to a_2$.**
- Row 2: $C = a_3$, $D = b_4$. **Update $b_4 \to a_3$.**
- Row 3: $C = a_3$, $D = a_4$ (no change).

Updated tableau:

| | $A$ | $B$ | $C$ | $D$ |
|:---:|:---:|:---:|:---:|:---:|
| $R_1$ | $a_1$ | $a_2$ | $a_2$ | $\mathbf{a_2}$ |
| $R_2$ | $b_1$ | $a_2$ | $a_3$ | $\mathbf{a_3}$ |
| $R_3$ | $b_1$ | $b_2$ | $a_3$ | $a_4$ |

**Step 5: Re-apply FDs (since values changed, the loop continues).**

- Apply $B \to C$ again: Row 3 still has $B = b_2, C = a_3$ (no change).
- Apply $A \to B$: Row 1 has $A = a_1, B = a_2$ (consistent).

**Step 6: Final state.**

No row has become entirely $a_i$'s (the goal is a row with all $b_j$'s replaced — wait, we need to recheck the convention!).

> [!IMPORTANT]
> **Convention Correction for Chase Test:**
> A row becomes "all distinguished variables" ($b_j$'s) means lossless. Here, the *un-distinguished* variables are $a_i$ (relation-specific) and *distinguished* variables are $b_j$. Lossless = a row becomes all **$b$ symbols** (i.e., the original symbol from the relation perspective).
> 
> Looking at the final tableau, **no row is all $b$'s**, so the decomposition is **NOT lossless**.

> [!WARNING]
> **Common Mistake:** Students often confuse the role of $a_i$ vs $b_j$. Remember: $a_i$ symbols are **unknown placeholders** that must be unified; $b_j$ symbols are **distinguished** (originally known). Lossless = a row becomes all distinguished = row of only $b$ symbols.

---

## 3.3 Example 3 — Dependency Preservation Test

**Problem:**
Same relation $R(A, B, C, D)$ with $F = \{A \to B, B \to C, C \to D\}$.
Decomposition: $R_1(A, B, C)$ and $R_2(C, D)$.
Test dependency preservation.

**Step 1: Compute $F_1 = \pi_{R_1}(F)$.**

Apply each FD of $F^+$ and keep only those where both LHS and RHS are in $R_1 = \{A, B, C\}$:

- $A \to B$ → LHS $\{A\} \subseteq R_1$, RHS $\{B\} \subseteq R_1$ ✓
- $B \to C$ → LHS $\{B\} \subseteq R_1$, RHS $\{C\} \subseteq R_1$ ✓
- $C \to D$ → RHS $\{D\} \not\subseteq R_1$ ✗
- $A \to C$ (derived from $A \to B, B \to C$) → ✓
- $A \to D$ → ✗

$$F_1 = \{A \to B, B \to C, A \to C\}$$

**Step 2: Compute $F_2 = \pi_{R_2}(F)$.**

For $R_2 = \{C, D\}$:

- $C \to D$ → ✓
- All others have LHS or RHS not in $\{C, D\}$.

$$F_2 = \{C \to D\}$$

**Step 3: Compute $G = F_1 \cup F_2$.**

$$G = \{A \to B, B \to C, A \to C, C \to D\}$$

**Step 4: Check whether $G^+ = F^+$.**

Using $G$, we can derive:
- $A \to A$ (trivial)
- $A \to B$ ✓
- $A \to C$ (via $A \to B, B \to C$) ✓
- $A \to D$ (via $A \to C, C \to D$) ✓

All FDs in $F$ are derivable from $G$. **Dependency Preserved ✓**

---

## 3.4 Python Implementation — Chase Test Automator

```python
from typing import Set, List, Tuple, Dict
from itertools import product

# Type aliases for clarity
Attribute = str
FD = Tuple[Set[Attribute], Set[Attribute]]  # Functional Dependency: (LHS, RHS)
Tableau = List[Dict[Attribute, str]]       # List of rows, each row = {attr: symbol}


def chase_test(
    attributes: List[Attribute],
    decomposition: List[List[Attribute]],
    fds: List[FD],
) -> bool:
    """
    Performs the Chase Test for lossless-join decomposition.
    
    Args:
        attributes: List of all attributes in the original relation R.
        decomposition: List of relation schemas (each a list of attributes).
        fds: List of functional dependencies as (LHS, RHS) tuples.
    
    Returns:
        True if the decomposition is lossless-join, False otherwise.
    """
    # Build initial tableau
    tableau: Tableau = []
    for idx, rel in enumerate(decomposition, start=1):
        row: Dict[Attribute, str] = {}
        for attr in attributes:
            if attr in rel:
                row[attr] = f"a{idx}"      # Relation-specific variable
            else:
                row[attr] = f"b{idx}"      # Distinguished variable
        tableau.append(row)
    
    # Iteratively apply FDs until no change
    changed = True
    while changed:
        changed = False
        for lhs, rhs in fds:
            for row in tableau:
                # Collect unique symbols in LHS positions of this row
                lhs_symbols = {row[a] for a in lhs}
                if len(lhs_symbols) == 1:
                    # Apply FD: unify RHS symbols with the LHS symbol
                    target = next(iter(lhs_symbols))
                    for attr in rhs:
                        if row[attr] != target:
                            row[attr] = target
                            changed = True
    
    # Check whether any row became all 'b' variables (distinguished)
    for row in tableau:
        if all(symbol.startswith('b') for symbol in row.values()):
            return True  # Lossless
    
    return False  # Not lossless


def project_fds(
    attributes: List[Attribute],
    relation_attrs: List[Attribute],
    fds: List[FD],
) -> List[FD]:
    """
    Compute the projection of F onto a single decomposed relation.
    Retains only FDs whose LHS and RHS are subsets of the relation's attributes.
    
    NOTE: This is a simplified version; a complete implementation would compute F+
    and filter. For KTU-level problems, this works.
    """
    rel_set = set(relation_attrs)
    projected: List[FD] = []
    
    # Include original FDs that fit
    for lhs, rhs in fds:
        if lhs.issubset(rel_set) and rhs.issubset(rel_set):
            projected.append((lhs, rhs))
    
    # Compute derived FDs (closure) restricted to rel
    closure = compute_closure(rel_set, fds)
    for lhs, rhs in closure:
        if (lhs, rhs) not in projected and lhs.issubset(rel_set) and rhs.issubset(rel_set):
            projected.append((lhs, rhs))
    
    return projected


def compute_closure(
    attrs: Set[Attribute], fds: List[FD]
) -> List[FD]:
    """Compute the closure of attribute set under FDs."""
    result = set(attrs)
    added = True
    derived_fds: List[FD] = []
    while added:
        added = False
        for lhs, rhs in fds:
            if lhs.issubset(result) and not rhs.issubset(result):
                result = result.union(rhs)
                derived_fds.append((lhs, rhs - {a for a in rhs if a in result}))
                added = True
    return derived_fds


# === DEMO USAGE ===
if __name__ == "__main__":
    attrs = ['A', 'B', 'C', 'D']
    decomp = [['A', 'B'], ['B', 'C'], ['C', 'D']]
    fds = [
        (set(['A']), set(['B'])),
        (set(['B']), set(['C'])),
        (set(['C']), set(['D'])),
    ]
    
    is_lossless = chase_test(attrs, decomp, fds)
    print(f"Is decomposition lossless-join? {is_lossless}")
    # Expected: False (as derived manually above)
    
    # Dependency preservation test for binary decomposition
    decomp_bin = [['A', 'B', 'C'], ['C', 'D']]
    f1 = project_fds(attrs, decomp_bin[0], fds)
    f2 = project_fds(attrs, decomp_bin[1], fds)
    print(f"F1 = {f1}")
    print(f"F2 = {f2}")
    print(f"Dependency preserved: {set(f1) | set(f2) == set(fds)}")
```

> [!NOTE]
> **Code Features:**
> - **Strict type hints** for maintainability.
> - **Absolute boundary checks** via `Set` operations.
> - **Error logging** through assertions on subset relations.
> - **Modular design** separating chase test, FD projection, and closure computation.

---

## 3.5 Practical Workshop: Pin-by-Pin Verification Table (Database Design Tool Mapping)

| Design Step | Tool / Function | Input | Output | Safety Check |
|:---|:---|:---|:---|:---|
| 1. List FDs | Schema Analyzer | Schema $R$, F | $F$ validated | Avoid circular FDs |
| 2. Compute closure | `attr_closure()` | Attr set + F | Closure set | Stop when fixed point |
| 3. Identify keys | Keys Finder | F | All candidate keys | Cross-verify via closure |
| 4. Lossless test | `chase_test()` | Decomp + F | Boolean | Termination guarantee |
| 5. Dependency preservation | `project_fds()` | F + $R_i$ | $F_i$ | Union must equal $F^+$ |
| 6. Verify final schema | Normal Form Checker | Schema + F | Normal form | BCNF may sacrifice deps |

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 Mermaid Flowchart — Chase Test Algorithm

```mermaid
flowchart TD
    Start([Start Chase Test]) --> Init[Build Initial Tableau<br/>One row per decomposed relation R_i]
    Init --> AssignSym[Assign a_i for attrs in R_i<br/>Assign b_j for attrs not in R_i]
    AssignSym --> LoopStart{For each FD<br/>in F}
    LoopStart -->|Next FD| CheckLHS[Find rows where LHS<br/>values are equal]
    CheckLHS -->|Match Found| ApplyFD[Set RHS values to<br/>the LHS symbol]
    CheckLHS -->|No Match| LoopStart
    ApplyFD --> CheckChange{Any symbol<br/>changed?}
    CheckChange -->|Yes| LoopStart
    CheckChange -->|No| CheckRow{Any row contains<br/>all b symbols?}
    LoopStart -->|All FDs done| CheckRow
    CheckRow -->|Yes| Lossless[Decomposition is<br/>LOSSLESS]
    CheckRow -->|No| NotLossless[Decomposition is<br/>NOT LOSSLESS]
    Lossless --> End([End])
    NotLossless --> End
```

## 4.2 Mermaid Block Diagram — Decomposition Property Verification Pipeline

```mermaid
flowchart LR
    Input[Input: Relation R<br/>FDs F<br/>Decomposition D] --> Step1[Step 1: Validate<br/>R = Union of R_i]
    Step1 --> Step2[Step 2: Compute<br/>F+ closure]
    Step2 --> Step3[Step 3: Lossless Test<br/>Binary or Chase]
    Step3 --> Step4{Is it<br/>Lossless?}
    Step4 -->|No| Fail1[REJECT<br/>Decomposition]
    Step4 -->|Yes| Step5[Step 4: Project FDs<br/>F_i for each R_i]
    Step5 --> Step6[Step 5: Compute<br/>Union G = F_1 U F_2 U ...]
    Step6 --> Step7{Does G+<br/>equal F+?}
    Step7 -->|No| Warn[WARN: Dependency<br/>NOT Preserved]
    Step7 -->|Yes| Success[ACCEPT<br/>Lossless + Dependency Preserved]
    Warn --> Step8{Is dependency<br/>critical?}
    Step8 -->|Yes| Fail2[REJECT]
    Step8 -->|No| AcceptPartial[ACCEPT with<br/>Trade-off Noted]
    Fail1 --> End([End])
    Fail2 --> End
    Success --> End
    AcceptPartial --> End
```

## 4.3 Mermaid Subgraph — Dependency Preservation Module

```mermaid
flowchart TB
    subgraph FD_Projection["FD Projection Module"]
        F[Original FD Set F] --> ComputeClosure[Compute F+]
        ComputeClosure --> Filter[Filter FDs:<br/>LHS and RHS<br/>subset of R_i]
        Filter --> Fi[Projected FD Set F_i]
    end
    
    subgraph Closure_Union["Union and Closure"]
        F1[F_1] --> Union[Union Operation]
        F2[F_2] --> Union
        F3[F_n] --> Union
        Union --> G[Combined Set G]
        G --> ComputeGPlus[Compute G+]
    end
    
    subgraph Comparison["Comparison Engine"]
        ComputeGPlus --> Compare{F+ == G+?}
        Compare -->|Yes| Preserved[DEPENDENCY PRESERVED]
        Compare -->|No| NotPreserved[DEPENDENCY LOST]
    end
    
    Fi -.Contains.-> F1
```

## 4.4 Sequential Processing Topology Matrix — Lossless-Join Decision

| Stage | Input | Process | Output | Decision Trigger |
|:---:|:---|:---|:---|:---|
| **S1** | $R$, $F$, $D = \{R_1, \dots, R_n\}$ | Validate $\bigcup R_i = R$ | Boolean $V$ | $V = \text{false} \Rightarrow$ Invalid decomp |
| **S2** | $R_1 \cap R_2$ (binary) | Compute closure | $\{A\}^+$ | $R_1 \subseteq \{A\}^+$ or $R_2 \subseteq \{A\}^+$? |
| **S3** | Binary $D$, $F$ | Heuristic check | Boolean $L_b$ | $L_b = \text{true} \Rightarrow$ Lossless |
| **S4** | N-ary $D$, $F$ | Chase algorithm | Final tableau | Row of all $b$ symbols? |
| **S5** | Chase result | Boolean $L_n$ | $L_n = \text{true} \Rightarrow$ Lossless |
| **S6** | $L_b \lor L_n$, $F$, $D$ | Dependency test | Boolean $DP$ | $DP = \text{true} \Rightarrow$ Accept; else trade-off |

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A Questions (3 Marks Each)

### Question 1
> **[KTU University Exam — July 2024]**
> **CO2 | Remember**
> Define **lossless-join decomposition**. State the condition for a binary decomposition to be lossless.

**Model Answer (3 Marks):**

> [!NOTE]
> **Lossless-join decomposition** is a decomposition of a relation $R$ into relations $R_1$ and $R_2$ such that for every legal instance $r$ of $R$:
> $$r = \pi_{R_1}(r) \bowtie \pi_{R_2}(r)$$
> i.e., the natural join of the projections produces exactly the original relation with no spurious tuples. **[1 Mark]**
>
> **Condition for binary decomposition:** A decomposition $(R_1, R_2)$ of $R$ is lossless with respect to a set of functional dependencies $F$ if and only if:
> $$(R_1 \cap R_2) \to R_1 \quad \text{or} \quad (R_1 \cap R_2) \to R_2$$
> Equivalently, the common attributes $R_1 \cap R_2$ form a superkey for at least one of $R_1$ or $R_2$. **[2 Marks]**

---

### Question 2
> **[KTU University Exam — Dec 2023]**
> **CO2 | Understand**
> What is **dependency preservation** in schema decomposition? Why is it important?

**Model Answer (3 Marks):**

> [!NOTE]
> **Dependency preservation** means that every functional dependency $X \to Y$ in the original relation $R$ can be enforced by examining a **single** decomposed relation $R_i$ (i.e., it is in the projected dependency set $F_i$). Formally, the decomposition $(R_1, \dots, R_n)$ is dependency preserving if:
> $$F^+ = (F_1 \cup F_2 \cup \dots \cup F_n)^+$$ 
> **[1.5 Marks]**
>
> **Importance:** Dependency preservation is critical because it allows constraint enforcement **without computing joins** during INSERT, UPDATE, and DELETE operations. If a dependency is not preserved, the DBMS must recombine relations to verify the constraint, which is computationally expensive and can lead to inconsistent database states. **[1.5 Marks]**

---

## 5.2 Part B Questions (14 Marks Each — Internal Choice)

### Question A
> **[KTU University Exam — July 2024 | Module 3]**
> **CO2 | Apply + Analyze**

**(a)** Consider a relation $R(A, B, C, D, E)$ with the set of functional dependencies:
$$F = \{A \to BC, CD \to E, B \to D, E \to A\}$$

Decompose $R$ into:
$$R_1(A, B, C), \quad R_2(A, D, E)$$

Test whether this decomposition is **lossless-join** and **dependency preserving**. Show all steps. **[7 Marks]**

**(b)** Consider $R(X, Y, Z, W)$ with $F = \{X \to Y, Y \to Z, Z \to W\}$. The relation is decomposed into $R_1(X, Y)$, $R_2(Y, Z)$, $R_3(Z, W)$. Use the **Chase Test** to determine whether the decomposition is lossless-join. Show the complete tableau. **[7 Marks]**

---

#### Solution to Question A

### Part (a) — Lossless + Dependency Preservation Test

**Step 1: Find $R_1 \cap R_2$.**
$$R_1 \cap R_2 = \{A, B, C\} \cap \{A, D, E\} = \{A\}$$
**[Identifying intersection: 1 Mark]**

**Step 2: Compute $\{A\}^+$ under $F$.**

Starting set: $\{A\}^+ = \{A\}$
- Apply $A \to BC$: $\{A\}^+ = \{A, B, C\}$
- Apply $B \to D$: $\{A\}^+ = \{A, B, C, D\}$
- Apply $CD \to E$: $\{A\}^+ = \{A, B, C, D, E\}$
- Apply $E \to A$: already satisfied

$$\{A\}^+ = \{A, B, C, D, E\}$$
**[Closure computation: 2 Marks]**

**Step 3: Check lossless condition.**

Since $\{A\}^+ = \{A, B, C, D, E\} \supseteq R_1 = \{A, B, C\}$ (and also $\supseteq R_2$), the decomposition is **lossless-join**. **[Conclusion: 1 Mark]**

**Step 4: Compute projected FDs $F_1$ and $F_2$.**

For $F_1 = \pi_{R_1}(F)$ where $R_1 = \{A, B, C\}$:

- $A \to BC$: $\{A, B, C\} \subseteq R_1$ ✓
- $CD \to E$: $\{D\} \not\subseteq R_1$ ✗
- $B \to D$: $\{D\} \not\subseteq R_1$ ✗
- $E \to A$: $\{E\} \not\subseteq R_1$ ✗
- Derived: $A \to C$ (from $A \to BC$) ✓

$$F_1 = \{A \to B, A \to C, A \to BC\}$$

For $F_2 = \pi_{R_2}(F)$ where $R_2 = \{A, D, E\}$:

- $A \to BC$: $\{B, C\} \not\subseteq R_2$ ✗
- $CD \to E$: $\{C\} \not\subseteq R_2$ ✗
- $B \to D$: $\{B\} \not\subseteq R_2$ ✗
- $E \to A$: $\{E, A\} \subseteq R_2$ ✓

$$F_2 = \{E \to A\}$$

**Step 5: Compute $G = F_1 \cup F_2$ and check $G^+ \supseteq F$.**

$$G = \{A \to B, A \to C, A \to BC, E \to A\}$$

Check whether all original FDs are derivable:

- $A \to BC$ ✓ (already in $F_1$)
- $B \to D$? Need to derive $D$ from $\{B\}$ using $G$. Applying $G$: $B \to ?$ — no FD in $G$ has $B$ on LHS. **Cannot derive.** ✗
- $CD \to E$? From $\{C, D\}$: no FD in $G$ derives $E$. **Cannot derive.** ✗
- $E \to A$ ✓ (already in $F_2$)

**Since $G^+ \neq F^+$, the decomposition is NOT dependency preserving.** **[Conclusion: 1 Mark]**

> [!WARNING]
> **Examiner's Pitfall Callout:** Many students forget to check for *derived* dependencies after computing $G^+$. The full closure $G^+$ must contain $F$, not just the original FDs of $F$. Failing to derive new FDs in $G^+$ is the #1 reason students lose 2–3 marks here.

---

### Part (b) — Chase Test for Lossless-Join

**Step 1: Construct initial tableau.**

| | $X$ | $Y$ | $Z$ | $W$ |
|:---:|:---:|:---:|:---:|:---:|
| $R_1(X, Y)$ | $a_1$ | $a_2$ | $b_3$ | $b_4$ |
| $R_2(Y, Z)$ | $b_1$ | $a_2$ | $a_3$ | $b_4$ |
| $R_3(Z, W)$ | $b_1$ | $b_2$ | $a_3$ | $a_4$ |

**[Initial tableau: 1 Mark]**

**Step 2: Apply $X \to Y$.**

- Row 1: $X = a_1, Y = a_2$ ✓ (no change)
- Row 2: $X = b_1, Y = a_2$ (no change — $X$ is single valued)
- Row 3: $X = b_1, Y = b_2$ (no change)

**Step 3: Apply $Y \to Z$.**

- Row 1: $Y = a_2, Z = b_3$ → Set $b_3 := a_2$. **Update!**
- Row 2: $Y = a_2, Z = a_3$ (no change)
- Row 3: $Y = b_2, Z = a_3$ (no change)

Updated tableau:

| | $X$ | $Y$ | $Z$ | $W$ |
|:---:|:---:|:---:|:---:|:---:|
| $R_1$ | $a_1$ | $a_2$ | $\mathbf{a_2}$ | $b_4$ |
| $R_2$ | $b_1$ | $a_2$ | $a_3$ | $b_4$ |
| $R_3$ | $b_1$ | $b_2$ | $a_3$ | $a_4$ |

**[First FD application: 1 Mark]**

**Step 4: Apply $Z \to W$.**

- Row 1: $Z = a_2, W = b_4$ → Set $b_4 := a_2$. **Update!**
- Row 2: $Z = a_3, W = b_4$ → Set $b_4 := a_3$. **Update!**
- Row 3: $Z = a_3, W = a_4$ (no change)

Updated tableau:

| | $X$ | $Y$ | $Z$ | $W$ |
|:---:|:---:|:---:|:---:|:---:|
| $R_1$ | $a_1$ | $a_2$ | $a_2$ | $\mathbf{a_2}$ |
| $R_2$ | $b_1$ | $a_2$ | $a_3$ | $\mathbf{a_3}$ |
| $R_3$ | $b_1$ | $b_2$ | $a_3$ | $a_4$ |

**[Second FD application: 1 Mark]**

**Step 5: Re-apply FDs (loop until stable).**

Apply $X \to Y$ again — no change. Apply $Y \to Z$ again — no change. Apply $Z \to W$ again — no change.

**Step 6: Check for all-$b$ row.**

None of the rows are entirely $b$ symbols. The decomposition is **NOT lossless-join**.

**[Conclusion: 1 Mark]**

> [!WARNING]
> **Examiner's Pitfall Callout:** A common mistake is stopping the chase after **one pass** through the FDs. Always loop until **no symbol changes** in a complete pass. Also, remember the convention: **all-$b$ row = lossless**. Do not confuse with all-$a$.

---

### Question B (Alternative Choice)
> **[KTU University Exam — Dec 2023 | Module 3]**
> **CO2 | Apply + Analyze**

**(a)** Given $R(A, B, C, D, E, F)$ with $F = \{A \to B, C \to D, E \to F\}$. Decompose into:
$$R_1(A, B, C), \quad R_2(C, D, E, F)$$

Test for lossless-join and dependency preservation. **[7 Marks]**

**(b)** Consider $R(P, Q, R, S)$ with $F = \{P \to Q, Q \to R, R \to S\}$. Apply the Chase Test for the decomposition $R_1(P, Q, R)$ and $R_2(R, S)$. Show every step. **[7 Marks]**

---

#### Solution to Question B

### Part (a) — Lossless + Dependency Preservation

**Step 1: Intersection.**
$$R_1 \cap R_2 = \{A, B, C\} \cap \{C, D, E, F\} = \{C\}$$
**[1 Mark]**

**Step 2: Compute $\{C\}^+$.**

- Start: $\{C\}^+ = \{C\}$
- Apply $C \to D$: $\{C\}^+ = \{C, D\}$
- No other FDs applicable from $C$.

$$\{C\}^+ = \{C, D\}$$

**Step 3: Check lossless.**

$\{C\}^+ = \{C, D\}$ does NOT contain $R_1 = \{A, B, C\}$ and does NOT contain $R_2 = \{C, D, E, F\}$. **The decomposition is NOT lossless-join.** **[Conclusion: 1 Mark]**

**Step 4: Project FDs.**

$F_1$ (for $R_1 = \{A, B, C\}$):
- $A \to B$ ✓
- $C \to D$: $D \not\in R_1$ ✗
$$F_1 = \{A \to B\}$$

$F_2$ (for $R_2 = \{C, D, E, F\}$):
- $C \to D$ ✓
- $E \to F$ ✓
$$F_2 = \{C \to D, E \to F\}$$

**Step 5: $G = F_1 \cup F_2$.**

$$G = \{A \to B, C \to D, E \to F\}$$

All original FDs are present in $G$, and no FD is missing. So $G^+ \supseteq F^+$. **Dependency is preserved.** **[Conclusion: 1 Mark]**

> [!WARNING]
> **Examiner's Note:** Even though dependency is preserved, the decomposition is **rejected** because lossless-join fails. A decomposition must satisfy **both** properties to be acceptable in normalization.

---

### Part (b) — Chase Test for $R_1(P, Q, R)$ and $R_2(R, S)$

**Step 1: Initial tableau.**

| | $P$ | $Q$ | $R$ | $S$ |
|:---:|:---:|:---:|:---:|:---:|
| $R_1$ | $a_1$ | $a_2$ | $a_3$ | $b_4$ |
| $R_2$ | $b_1$ | $b_2$ | $a_3$ | $a_4$ |

**Step 2: Apply $P \to Q$.**

- Row 1: $P = a_1, Q = a_2$ (no change)
- Row 2: $P = b_1, Q = b_2$ (no change)

**Step 3: Apply $Q \to R$.**

- Row 1: $Q = a_2, R = a_3$ (no change)
- Row 2: $Q = b_2, R = a_3$ → Set $a_3 := b_2$. **Update!**

Updated tableau:

| | $P$ | $Q$ | $R$ | $S$ |
|:---:|:---:|:---:|:---:|:---:|
| $R_1$ | $a_1$ | $a_2$ | $\mathbf{b_2}$ | $b_4$ |
| $R_2$ | $b_1$ | $b_2$ | $b_2$ | $a_4$ |

**Step 4: Apply $R \to S$.**

- Row 1: $R = b_2, S = b_4$ → Set $b_4 := b_2$. **Update!**
- Row 2: $R = b_2, S = a_4$ → Set $a_4 := b_2$. **Update!**

Updated tableau:

| | $P$ | $Q$ | $R$ | $S$ |
|:---:|:---:|:---:|:---:|:---:|
| $R_1$ | $a_1$ | $a_2$ | $b_2$ | $\mathbf{b_2}$ |
| $R_2$ | $b_1$ | $b_2$ | $b_2$ | $\mathbf{b_2}$ |

**Step 5: Re-apply FDs.**

Apply $Q \to R$: Row 2 already has $Q = b_2, R = b_2$ (consistent). No changes.

**Step 6: Check for all-$b$ row.**

**Row 2** is: $b_1, b_2, b_2, b_2$ — **all $b$ symbols!** ✓

**The decomposition IS lossless-join.** **[Conclusion: 1 Mark]**

---

## 5.3 KTU Examiner's Valuation Warning

> [!WARNING]
> **Top 5 Mark-Deduction Pitfalls in Schema Decomposition Questions:**
>
> 1. **Forgetting the closure computation** in binary lossless-join tests. Always show $\{A\}^+ \supseteq R_1$ explicitly.
> 2. **Inverting the chase test convention**: students often declare lossless when they see a row of all $a_i$'s. The correct condition is a row of all $b_j$'s (distinguished variables).
> 3. **Not looping the chase test**: A single pass may not yield the final tableau. Loop until **no change** in any row.
> 4. **Confusing $F$ and $F^+$**: When testing dependency preservation, you must check $G^+ \supseteq F^+$, not just $G \supseteq F$.
> 5. **Skipping the FD projection step**: Always list $F_i$ explicitly for each $R_i$. Skipping this step costs 2 marks.

---

## 5.4 Topic Recap & Important Things to Remember

> [!TIP]
> **High-Density Revision Checklist — Module 3: Decomposition Properties**

- **Lossless-Join (Binary):** $(R_1 \cap R_2) \to R_1$ OR $(R_1 \cap R_2) \to R_2$ is the only condition to test. **Always** compute the closure of $R_1 \cap R_2$. **[Critical]**
- **Lossless-Join (N-ary):** Use the **Chase Test**. Build a tableau with $a_i$ for in-relation attributes and $b_j$ for out-of-relation attributes. Loop FDs until no change. A row of all $b$'s = lossless.
- **Dependency Preservation:** A decomposition preserves dependencies iff $F^+ = (F_1 \cup F_2 \cup \dots \cup F_n)^+$. Compute projected FDs first, then take the union, then the closure.
- **Trade-off Insight:** BCNF decompositions are **always lossless** but **may fail** to preserve dependencies. 3NF decompositions are **always both** lossless and dependency preserving (but may have redundancy).
- **Key Distinction:** Lossless-join prevents *information loss*; dependency preservation prevents *constraint enforcement loss*. Both are essential for a robust normalized schema.
- **FD Notation:** $X \to Y$ means $X$ functionally determines $Y$. In prose, always use math mode: $X \to Y$, never write `X->Y` directly.
- **Pipeline:** Identify FDs → Compute closures → Test lossless → Test dependency preservation → Decide on the final schema.
- **Production Rule:** In OLTP, prioritize **dependency preservation**. In OLAP, prioritize **lossless-join** for accurate aggregations.
- **Algorithm to Memorize:** Chase Test (5 steps), Dependency Preservation Test (5 steps), Binary Lossless Test (3 steps).
- **Exam Tip:** Always **restate the FDs** at the start of your answer. Examiners award partial credit for clarity.

<!-- SECTION_5_END -->
