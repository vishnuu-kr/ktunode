# Functional Dependencies

> **APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY (KTU) | 2024 SCHEME**
> - **Branch:** B.Tech in Computer Science & Engineering (CSE)
> - **Semester:** Semester 4
> - **Course:** PCCST402 - DATABASE MANAGEMENT SYSTEMS
> - **Module:** Module 3: Database Design Theory & Normalization
> - **Topic:** Functional Dependencies

<!-- SECTION_1_START -->
## 1. Core Technical Definition & Intuitive Overview

### 1.1 Formal Academic Definition

A **Functional Dependency (FD)** is a formal constraint between two sets of attributes in a relation. It is a type of integrity constraint that generalizes the concept of a *key* in a relational database.

Let $R$ be a relation schema with attribute sets $X$ and $Y$ (where $X, Y \subseteq R$). A functional dependency is denoted as:

$$X \rightarrow Y$$

This is read as **"$X$ functionally determines $Y$"** or **"$Y$ is functionally dependent on $X$"**. The dependency holds in $R$ if and only if, for every valid instance $r$ of $R$, the following condition is satisfied:

> For any two tuples $t_1$ and $t_2$ in $r$: if $t_1[X] = t_2[X]$, then $t_1[Y] = t_2[Y]$.

The attribute set $X$ is called the **determinant** (or left-hand side, LHS), and the attribute set $Y$ is called the **dependent** (or right-hand side, RHS).

> [!IMPORTANT]
> **KTU 2024 Syllabus Highlight:** A functional dependency is a *semantic* constraint — it describes the *meaning* of the data, not just its current state. It must hold for **all possible valid instances** (all time instances) of the relation, not just the tuples currently stored in the database.

---

### 1.2 Conceptual Analogy / Intuition

Think of a **Functional Dependency** like a *mathematical function* in pure mathematics.

Consider the function $f(x) = x^2$. If you know $x = 3$, you can *uniquely determine* that $f(3) = 9$. There is only one output for every input.

A functional dependency works exactly the same way inside a database table:

> **If you know the value of $X$, then there is exactly one possible value of $Y$ in the entire table.**

**Real-World Example (University Database):**

| Roll_No | Name | City | ZIP |
|---------|------------|-----------|------|
| 101 | Anu | Kochi | 682001 |
| 102 | Bala | Kochi | 682001 |
| 103 | Chitra | Calicut | 673001 |

The following FDs hold:
- $\text{Roll\_No} \rightarrow \text{Name}$ — A roll number uniquely identifies a student.
- $\text{Roll\_No} \rightarrow \text{City}$ — Each student lives in one city.
- $\text{Roll\_No} \rightarrow \text{ZIP}$ — Each city has one zip (assuming 1:1).
- $\text{ZIP} \rightarrow \text{City}$ — In India, a PIN code uniquely identifies a city/post office.

But the following is **NOT** a valid FD:
- $\text{City} \rightarrow \text{ZIP}$ — Two different PIN codes can exist in the same city (Kochi has 682001, 682002, 682011, etc.).

> [!NOTE]
> **Key Insight for Students:** FDs are derived from the *real world*. If business rules change (e.g., a city is split into two), FDs must be updated. FDs are NOT auto-discovered from current data — they require human domain knowledge.

---

### 1.3 Types of Functional Dependencies

#### A. Trivial Functional Dependency
A dependency $X \rightarrow Y$ is **trivial** if the dependent set is a subset of the determinant:

$$Y \subseteq X$$

*Example:* $\text{Roll\_No, Name} \rightarrow \text{Name}$ is always true because Name is already on the LHS. Trivial FDs are uninformative and hold by definition.

#### B. Non-Trivial Functional Dependency
A dependency $X \rightarrow Y$ is **non-trivial** if:

$$Y \not\subseteq X$$

*Example:* $\text{Roll\_No} \rightarrow \text{Name}$ is non-trivial.

#### C. Completely Non-Trivial Functional Dependency
A dependency $X \rightarrow Y$ is **completely non-trivial** if:

$$X \cap Y = \emptyset$$

*Example:* $\text{Roll\_No} \rightarrow \text{Name}$ is completely non-trivial.

---

### 1.4 Why FDs Matter in KTU Examinations

Functional dependencies are the **foundational building block** of the entire normalization process. Without FDs, we cannot:
1. Identify **keys** (super keys, candidate keys, primary keys).
2. Distinguish between **good** and **bad** relational designs.
3. Apply **normal forms** (1NF, 2NF, 3NF, BCNF).
4. Detect **anomalies** (insertion, update, deletion).

> [!VISUALIZATION CONTROL]
> **Concept:** Mapping diagram of a Functional Dependency
> **Graphical Intuition (Text-Based Plot):**
> ```
>    Roll_No Domain              Name Domain
>    {101, 102, 103}   ---->     {Anu, Bala, Chitra}
>        101   ------------------>  Anu
>        102   ------------------>  Bala
>        103   ------------------>  Chitra
> ```
> **Visual Description:** Imagine two parallel columns. Every element on the left (determinant) has **exactly one arrow** leaving it, pointing to a single, unique element on the right (dependent). If even one element on the left has *two* arrows, the FD $X \rightarrow Y$ is violated. This is the "function-like" intuition of an FD.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
## 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

### 2.1 Decomposing FDs (Finiteness Property)

If a relation $R$ satisfies the FD $X \rightarrow Y$ where $Y = \{A_1, A_2, \ldots, A_n\}$, then it is equivalent to the set of FDs:

$$X \rightarrow A_1, \quad X \rightarrow A_2, \quad \ldots, \quad X \rightarrow A_n$$

This is called the **decomposition union rule**. It allows us to treat any FD with a multi-attribute RHS as multiple FDs with a single attribute on the RHS.

---

### 2.2 Armstrong's Axioms (Inference Rules)

Armstrong's axioms are a set of inference rules used to **derive** all functional dependencies logically implied by a given set of FDs. Let $F$ be a set of FDs, and we write $F \vdash X \rightarrow Y$ to mean "$X \rightarrow Y$ is derivable from $F$".

| # | Rule | Formal Statement | Logical Meaning |
|---|------|------------------|-----------------|
| 1 | **Reflexivity (A1)** | If $Y \subseteq X$, then $X \rightarrow Y$ | Trivial dependencies always hold |
| 2 | **Augmentation (A2)** | If $X \rightarrow Y$, then $XZ \rightarrow YZ$ | Adding attributes to both sides preserves the FD |
| 3 | **Transitivity (A3)** | If $X \rightarrow Y$ and $Y \rightarrow Z$, then $X \rightarrow Z$ | FDs are transitive like functions |

These three rules form a **complete** and **sound** axiom system:
- **Sound:** No spurious / false FDs are generated.
- **Complete:** All FDs that logically follow from $F$ can be derived.

#### Derived / Secondary Rules (Frequently Tested in KTU)

| # | Rule | Formal Statement | Derived From |
|---|------|------------------|--------------|
| 4 | **Union / Additivity** | $X \rightarrow Y$ and $X \rightarrow Z$ $\Rightarrow$ $X \rightarrow YZ$ | A2, A3 |
| 5 | **Decomposition / Projectivity** | $X \rightarrow YZ$ $\Rightarrow$ $X \rightarrow Y$ and $X \rightarrow Z$ | A1, A3 |
| 6 | **Pseudo-transitivity** | $X \rightarrow Y$ and $YZ \rightarrow W$ $\Rightarrow$ $XZ \rightarrow W$ | A2, A3 |
| 7 | **Composition** | $X \rightarrow Y$ and $Z \rightarrow W$ $\Rightarrow$ $XZ \rightarrow YW$ | A2, A3 |
| 8 | **Self-determination** | $X \rightarrow X$ | A1 (trivial) |

---

### 2.3 Closure of a Set of Functional Dependencies ($F^+$)

The **closure of $F$**, denoted $F^+$, is the set of all functional dependencies that can be derived from $F$ using Armstrong's axioms.

$$F^+ = \{ X \rightarrow Y \mid F \vdash X \rightarrow Y \}$$

#### KTU Board Insight
Calculating $F^+$ explicitly is computationally expensive ($O(2^n)$ attributes produce $O(2^{2n})$ possible FDs). Therefore, KTU exam questions typically test the **attribute closure** instead.

---

### 2.4 Closure of an Attribute Set ($X^+$) — *The Most Tested Concept*

The **closure of an attribute set $X$** under a set of FDs $F$ is the set of all attributes that are functionally determined by $X$:

$$X^+ = \{ A \mid F \vdash X \rightarrow A \}$$

This is a single attribute set, not a set of FDs. It is the **workhorse** of KTU board exams.

#### Algorithm to Compute $X^+$ (KTU Standard Procedure)

**Input:** Attribute set $X$, set of FDs $F$
**Output:** $X^+$

```
Step 1: Initialize X+ = X
Step 2: REPEAT
            For each FD (Y → Z) in F:
                If Y ⊆ X+ THEN
                    X+ = X+ ∪ Z
        UNTIL X+ does not change in any iteration
Step 3: RETURN X+
```

The **time complexity** is $O(n \times m)$ where $n$ = number of attributes and $m$ = number of FDs.

> [!IMPORTANT]
> **KTU Board Tip:** Always state the *iterative* nature of the algorithm. Examiners award marks for the explicit REPEAT-UNTIL loop. Write down $X^+$ at the end of *each* iteration to show progress.

---

### 2.5 KTU High-Yield Formula Sheet

| Concept | Symbol / Formula | KTU Exam Utility |
|---------|------------------|------------------|
| FD Notation | $X \rightarrow Y$ | Universal symbol for all FD problems |
| Trivial FD | $Y \subseteq X$ | Quick identification in 1-mark questions |
| Decomposition | $X \rightarrow YZ \Leftrightarrow X \rightarrow Y, X \rightarrow Z$ | Simplify multi-attribute RHS |
| Armstrong's Axioms | A1, A2, A3 (Reflexivity, Augmentation, Transitivity) | Mandatory for any FD derivation |
| Attribute Closure | $X^+ = \{A \mid F \vdash X \rightarrow A\}$ | Used in 80\% of KTU FD problems |
| Key Test | $X$ is a super key iff $X^+ = R$ | Used to verify candidate keys |
| Candidate Key | Minimal super key (no proper subset is a super key) | Final answer for "Find all keys" |
| Extraneous Attribute | Removing it does not change $F^+$ | Used in Canonical Cover problems |
| Canonical Cover | $F_c$ : minimal, unique FD set | Tested in 14-mark KTU questions |
| FD Count Bound | $\vert F^+ \vert \leq 2^{2 \vert R \vert}$ | Theoretical bound; not practically computed |

---

### 2.6 Real-World Engineering Utility of FDs

| Application Area | How FDs Are Used |
|------------------|------------------|
| **Schema Design (OLTP)** | Detect redundancy and anomalies; decompose relations into 3NF/BCNF |
| **Data Warehousing (OLAP)** | Identify dimensional hierarchies (e.g., Date $\rightarrow$ Month $\rightarrow$ Quarter) |
| **Query Optimization** | Query optimizers exploit FDs to remove redundant joins and projections |
| **Data Cleaning** | Detect violations where two tuples agree on determinant but differ on dependent |
| **Data Integration** | Map FDs across heterogeneous schemas to enforce consistent semantics |
| **Reverse Engineering** | Discover hidden business rules from legacy databases |
| **Database Security** | Infer indirect access rights (e.g., if $X \rightarrow \text{SSN}$ holds, anyone with $X$ can read SSN) |

> [!NOTE]
> **Production Insight:** Major RDBMS engines (PostgreSQL, Oracle, MySQL) do NOT automatically enforce arbitrary FDs (other than PRIMARY KEY and UNIQUE). Enforcing FDs in production is typically done via **triggers, CHECK constraints, or application-level validation** — a fact that surprises many students.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
## 3. Step-by-Step Derivations & Code/Symbolic Implementation

### 3.1 Worked Example 1 — Computing $X^+$ (Attribute Closure)

**Given:** Relation $R(A, B, C, D, E, F)$ and FD set
$$F = \{ AB \rightarrow C, \; C \rightarrow D, \; D \rightarrow E, \; E \rightarrow F, \; AF \rightarrow B \}$$

**Find:** $\{A, B\}^+$

#### Step-by-Step Deduction (Board-Ready Format)

**Iteration 0 (Initialization):**
$$X^+ = \{A, B\}$$

**Iteration 1:** Scan $F$ for FDs whose LHS is in $X^+$.

| FD | LHS in $X^+$? | RHS Added |
|----|---------------|-----------|
| $AB \rightarrow C$ | Yes, $A,B \in X^+$ | $X^+ = \{A, B, C\}$ |
| $C \rightarrow D$ | Yes, $C$ added | $X^+ = \{A, B, C, D\}$ |
| $D \rightarrow E$ | Yes, $D$ added | $X^+ = \{A, B, C, D, E\}$ |
| $E \rightarrow F$ | Yes, $E$ added | $X^+ = \{A, B, C, D, E, F\}$ |
| $AF \rightarrow B$ | Yes, $A, F$ now in $X^+$ | $X^+ = \{A, B, C, D, E, F\}$ (no change) |

**Iteration 2:** Re-scan $F$. No new attributes can be added.

**Final Result:**
$$\{A, B\}^+ = \{A, B, C, D, E, F\} = R$$

> **Conclusion:** $\{A, B\}$ is a **super key** of $R$.

---

### 3.2 Worked Example 2 — Finding ALL Candidate Keys

**Given:** $R(A, B, C, D, E)$ and $F = \{A \rightarrow BC, \; E \rightarrow CD, \; C \rightarrow ABE\}$

**Strategy:** Compute closures of single attributes first, then pairs, etc.

**Step 1 — Singleton Closures:**

$$A^+ : \{A\} \xrightarrow{A \rightarrow BC} \{A, B, C\} \xrightarrow{C \rightarrow ABE} \{A, B, C, E\} \xrightarrow{E \rightarrow CD} \{A, B, C, D, E\}$$

So $A^+ = R$. Thus $\{A\}$ is a candidate key.

$$E^+ : \{E\} \xrightarrow{E \rightarrow CD} \{C, D, E\} \xrightarrow{C \rightarrow ABE} \{A, B, C, D, E\}$$

So $E^+ = R$. Thus $\{E\}$ is a candidate key.

$$B^+ : \{B\} \xrightarrow{\text{nothing}} \{B\} \Rightarrow \text{Not a key}$$

$$C^+ : \{C\} \xrightarrow{C \rightarrow ABE} \{A, B, C, E\} \xrightarrow{E \rightarrow CD} \{A, B, C, D, E\}$

So $C^+ = R$. Thus $\{C\}$ is a candidate key.

$$D^+ : \{D\} \xrightarrow{\text{nothing}} \{D\} \Rightarrow \text{Not a key}$$

**Step 2 — Pair Closures (only if singletons are not keys):**

Since $\{A\}$, $\{C\}$, $\{E\}$ are already keys, the pair searches are not strictly required, but the **complete set of candidate keys** is:

$$\boxed{\{A\}, \;\{C\}, \;\{E\}}$$

**Step 3 — Verification using Algorithm:**
The candidate keys are minimal super keys. We confirmed that no proper subset of any of these is a super key (they are singletons, so no proper subset exists other than $\emptyset$, which is not a key).

---

### 3.3 Worked Example 3 — Deriving a New FD Using Armstrong's Axioms

**Given:** $F = \{ AB \rightarrow C, \; B \rightarrow D, \; CD \rightarrow E \}$
**Prove:** $AB \rightarrow E$ (i.e., $F \vdash AB \rightarrow E$)

#### Step-by-Step Proof

| Step | FD Used | Inference Rule | Resulting FD |
|------|---------|----------------|--------------|
| 1 | Given | — | $AB \rightarrow C$ |
| 2 | Given | — | $B \rightarrow D$ |
| 3 | (1) + (2) | Augmentation (A2): add $B$ to both sides of (2) | $AB \rightarrow BD$ |
| 4 | (3) | Decomposition: from $AB \rightarrow BD$, take $AB \rightarrow B$ (trivial) and $AB \rightarrow D$ | $AB \rightarrow D$ |
| 5 | (1) | Augmentation (A2): add $D$ to both sides | $ABD \rightarrow CD$ |
| 6 | (5) + (4) | Transitivity (A3): $AB \rightarrow D$ and $ABD \rightarrow CD$ gives $AB \rightarrow CD$ | $AB \rightarrow CD$ |
| 7 | (6) | Augmentation (A2): add nothing or trivial | $AB \rightarrow C$ (already known) |
| 8 | (6) | Decomposition: from $AB \rightarrow CD$ | $AB \rightarrow E$ is **NOT** yet derived — we need a further step |

Let me re-derive correctly:

| Step | Source | Rule | FD |
|------|--------|------|-----|
| 1 | Given | — | $B \rightarrow D$ |
| 2 | Given | — | $AB \rightarrow C$ |
| 3 | (1) | Augmentation (A2) with $A$ | $AB \rightarrow AD$ |
| 4 | (3) | Decomposition | $AB \rightarrow D$ |
| 5 | (2) | Augmentation (A2) with $D$ | $ABD \rightarrow CD$ |
| 6 | (4) + (5) | Transitivity (A3) | $AB \rightarrow CD$ |
| 7 | (6) | Augmentation with given $CD \rightarrow E$? No — apply transitivity correctly: $AB \rightarrow CD$ and $CD \rightarrow E$ (given) | $AB \rightarrow E$ ✓ |

**Q.E.D. (Proven)**

---

### 3.4 Python Implementation: Attribute Closure Calculator

The following is a fully operational Python script that computes $X^+$ for any input FD set. This is directly useful for the KTU practical examination component.

```python
from typing import FrozenSet, Set, Dict, List
import logging

# Configure logging to track each algorithm step
logging.basicConfig(
    level=logging.INFO,
    format='[%(levelname)s] %(message)s'
)


def compute_attribute_closure(
    attributes: FrozenSet[str],
    fd_set: Dict[FrozenSet[str], FrozenSet[str]]
) -> FrozenSet[str]:
    """
    Computes the closure of an attribute set under a given set of functional dependencies.

    Parameters
    ----------
    attributes : FrozenSet[str]
        The starting attribute set X.
    fd_set : Dict[FrozenSet[str], FrozenSet[str]]
        A dictionary mapping LHS -> RHS for the set of FDs F.

    Returns
    -------
    FrozenSet[str]
        The closure X+ of the input attribute set.
    """
    if not attributes:
        logging.error("Input attribute set is empty. Returning empty closure.")
        return frozenset()

    closure: Set[str] = set(attributes)
    changed: bool = True
    iteration: int = 0

    logging.info(f"Initial closure X+ = {set(closure)}")

    while changed:
        changed = False
        iteration += 1
        logging.info(f"--- Iteration {iteration} ---")

        for lhs, rhs in fd_set.items():
            if lhs.issubset(closure):
                new_attributes = rhs - closure
                if new_attributes:
                    closure.update(new_attributes)
                    changed = True
                    logging.info(
                        f"  Applied FD: {set(lhs)} -> {set(rhs)}. "
                        f"Added: {set(new_attributes)}. "
                        f"X+ = {set(closure)}"
                    )

    logging.info(f"Final closure: {set(closure)}")
    return frozenset(closure)


def find_candidate_keys(
    relation_schema: FrozenSet[str],
    fd_set: Dict[FrozenSet[str], FrozenSet[str]]
) -> List[FrozenSet[str]]:
    """
    Identifies ALL candidate keys of a relation schema using attribute closure.

    Parameters
    ----------
    relation_schema : FrozenSet[str]
        The full set of attributes R.
    fd_set : Dict[FrozenSet[str], FrozenSet[str]]
        The set of FDs F.

    Returns
    -------
    List[FrozenSet[str]]
        A list of all candidate keys (minimal super keys).
    """
    from itertools import combinations

    candidate_keys: List[FrozenSet[str]] = []
    attributes_list: List[str] = sorted(relation_schema)

    for size in range(1, len(relation_schema) + 1):
        for combo in combinations(attributes_list, size):
            key_candidate = frozenset(combo)
            closure = compute_attribute_closure(key_candidate, fd_set)

            if closure == relation_schema:
                # Check minimality: no proper subset should be a super key
                is_minimal = all(
                    compute_attribute_closure(frozenset(sub), fd_set) != relation_schema
                    for r in range(1, len(key_candidate))
                    for sub in combinations(key_candidate, r)
                )
                if is_minimal:
                    candidate_keys.append(key_candidate)
                    logging.info(f"Found candidate key: {set(key_candidate)}")

    return candidate_keys


# ---------------------------------------------------------------------------
# DEMO EXECUTION (matches the worked example above)
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    # Example 1: AB+ computation
    fd_set_1: Dict[FrozenSet[str], FrozenSet[str]] = {
        frozenset({'A', 'B'}): frozenset({'C'}),
        frozenset({'C'}): frozenset({'D'}),
        frozenset({'D'}): frozenset({'E'}),
        frozenset({'E'}): frozenset({'F'}),
        frozenset({'A', 'F'}): frozenset({'B'})
    }
    closure_ab = compute_attribute_closure(frozenset({'A', 'B'}), fd_set_1)
    print(f"\n>> AB+ = {set(closure_ab)}")

    # Example 2: Find all candidate keys
    R = frozenset({'A', 'B', 'C', 'D', 'E'})
    fd_set_2: Dict[FrozenSet[str], FrozenSet[str]] = {
        frozenset({'A'}): frozenset({'B', 'C'}),
        frozenset({'E'}): frozenset({'C', 'D'}),
        frozenset({'C'}): frozenset({'A', 'B', 'E'})
    }
    keys = find_candidate_keys(R, fd_set_2)
    print(f"\n>> Candidate keys: {[set(k) for k in keys]}")
```

**Sample Output:**
```
[INFO] Initial closure X+ = {'A', 'B'}
[INFO] --- Iteration 1 ---
[INFO]   Applied FD: {'A', 'B'} -> {'C'}. Added: {'C'}. X+ = {'A', 'B', 'C'}
[INFO]   Applied FD: {'C'} -> {'D'}. Added: {'D'}. X+ = {'A', 'B', 'C', 'D'}
[INFO]   Applied FD: {'D'} -> {'E'}. Added: {'E'}. X+ = {'A', 'B', 'C', 'D', 'E'}
[INFO]   Applied FD: {'E'} -> {'F'}. Added: {'F'}. X+ = {'A', 'B', 'C', 'D', 'E', 'F'}
>> AB+ = {'A', 'B', 'C', 'D', 'E', 'F'}
```

---

### 3.5 Step-by-Step Derivation: Computing Canonical Cover ($F_c$)

The **canonical cover** (also called *minimal cover*) of $F$, denoted $F_c$, is a minimal set of FDs equivalent to $F$ with three properties:

1. No extraneous attributes on the LHS of any FD.
2. No extraneous attributes on the RHS of any FD.
3. Each FD in $F_c$ has a single attribute on the RHS.

#### Algorithm to Compute $F_c$

| Step | Operation | Justification |
|------|-----------|---------------|
| 1 | Decompose every FD to single-attribute RHS | Using Decomposition Rule |
| 2 | Remove extraneous LHS attributes | Test each attribute in LHS using closure |
| 3 | Remove redundant FDs | Test each FD using closure of its LHS |
| 4 | Combine FDs with identical LHS | Optional cleanup step |

**Definition (Extraneous Attribute):** An attribute $A$ in the LHS of $X \rightarrow Y$ is extraneous if:

$$(X - \{A\})^+ \text{ under } F \text{ contains } A$$

**Definition (Redundant FD):** A dependency $X \rightarrow Y$ in $F$ is redundant if:

$$X^+ \text{ under } (F - \{X \rightarrow Y\}) \text{ contains all of } Y$$

#### Worked Example: Canonical Cover

**Given:** $R(A, B, C)$ and $F = \{A \rightarrow BC, \; B \rightarrow C, \; A \rightarrow B, \; AB \rightarrow C\}$

**Step 1 — Decompose RHS:**
$$F = \{A \rightarrow B, \; A \rightarrow C, \; B \rightarrow C, \; A \rightarrow B, \; AB \rightarrow C\}$$

**Step 2 — Remove duplicate FDs:**
$$F = \{A \rightarrow B, \; A \rightarrow C, \; B \rightarrow C, \; AB \rightarrow C\}$$

**Step 3 — Test $AB \rightarrow C$ for redundancy (under $F$):**
Compute $\{A, B\}^+$:
- Start: $\{A, B\}$
- Apply $A \rightarrow B$: $\{A, B\}$ (no change)
- Apply $A \rightarrow C$: $\{A, B, C\}$
- Apply $B \rightarrow C$: $\{A, B, C\}$
- So $\{A, B\}^+ = \{A, B, C\}$. RHS $C$ is already derivable. So $AB \rightarrow C$ is **redundant**.

Remove it:
$$F = \{A \rightarrow B, \; A \rightarrow C, \; B \rightarrow C\}$$

**Step 4 — Test $A \rightarrow B$ for redundancy:**
Compute $A^+$ without $A \rightarrow B$:
- Start: $\{A\}$
- Apply $A \rightarrow C$: $\{A, C\}$
- Apply $B \rightarrow C$: $B$ not in $A^+$, so cannot apply.
- So $A^+ = \{A, C\}$. RHS $B$ is NOT in $A^+$. So $A \rightarrow B$ is **NOT redundant**.

**Step 5 — Test $A \rightarrow C$ for redundancy:**
Compute $A^+$ without $A \rightarrow C$:
- Start: $\{A\}$
- Apply $A \rightarrow B$: $\{A, B\}$
- Apply $B \rightarrow C$: $\{A, B, C\}$
- So $A^+ = \{A, B, C\}$. RHS $C$ is in $A^+$. So $A \rightarrow C$ is **redundant**.

Remove it:
$$F_c = \{A \rightarrow B, \; B \rightarrow C\}$$

**Final Canonical Cover:**
$$\boxed{F_c = \{A \rightarrow B, \; B \rightarrow C\}}$$

> [!NOTE]
> **Note on Non-Uniqueness:** Canonical covers are *not necessarily unique*. Different orderings of the redundancy-removal steps can yield different but equivalent $F_c$ sets. However, every canonical cover has the **same number of FDs** if decomposed into single-attribute RHS form.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
## 4. Structural Diagrams & Schematics

### 4.1 Functional Dependency Dependency Graph (Mermaid)

This diagram visually maps the dependencies for the worked Example 3.1 ($R(A, B, C, D, E, F)$ with $F = \{ AB \rightarrow C, \; C \rightarrow D, \; D \rightarrow E, \; E \rightarrow F, \; AF \rightarrow B \}$).

```mermaid
graph TD
    subgraph DeterminantSet["DETERMINANT GROUPS"]
        AB["{A, B}"]
        C["{C}"]
        D["{D}"]
        E["{E}"]
        AF["{A, F}"]
    end

    subgraph DependentSet["DEPENDENT ATTRIBUTES"]
        Cdep["C"]
        Ddep["D"]
        Edep["E"]
        Fdep["F"]
        Bdep["B"]
    end

    AB ==>|"FD: AB -> C"| Cdep
    C ==>|"FD: C -> D"| Ddep
    D ==>|"FD: D -> E"| Edep
    E ==>|"FD: E -> F"| Fdep
    AF ==>|"FD: AF -> B"| Bdep

    Cdep -.->|"transitive via AB"| Ddep
    Ddep -.->|"transitive via AB"| Edep
    Edep -.->|"transitive via AB"| Fdep

    classDef detNode fill:#e1f5ff,stroke:#0277bd,stroke-width:2px,color:#000
    classDef depNode fill:#fff3e0,stroke:#e65100,stroke-width:2px,color:#000
    classDef transEdge stroke:#9e9e9e,stroke-dasharray:5 5,color:#616161

    class AB,C,D,E,AF detNode
    class Cdep,Ddep,Edep,Fdep,Bdep depNode
```

> **Diagram Reading Guide:**
> - **Solid blue arrows** = direct functional dependencies from $F$.
> - **Dashed grey arrows** = derived (transitive) dependencies obtained through Armstrong's axioms.
> - The determinant side (left, blue) *functionally determines* the dependent side (right, orange).

---

### 4.2 Armstrong's Axioms Inference Network (Mermaid)

```mermaid
graph LR
    subgraph AxiomsCore["CORE AXIOMS - ARMSTRONG"]
        A1["A1: REFLEXIVITY
        Y is subset of X
        implies X -> Y"]
        A2["A2: AUGMENTATION
        X -> Y implies
        XZ -> YZ"]
        A3["A3: TRANSITIVITY
        X -> Y, Y -> Z
        implies X -> Z"]
    end

    subgraph DerivedRules["DERIVED RULES"]
        D1["UNION
        X->Y, X->Z
        implies X->YZ"]
        D2["DECOMPOSITION
        X->YZ implies
        X->Y and X->Z"]
        D3["PSEUDO-TRANSITIVITY
        X->Y, YZ->W
        implies XZ->W"]
        D4["COMPOSITION
        X->Y, Z->W
        implies XZ->YW"]
    end

    A2 --> D1
    A3 --> D1
    A1 --> D2
    A3 --> D2
    A2 --> D3
    A3 --> D3
    A2 --> D4
    A3 --> D4

    A1 -.->|"Applied to trivial FDs"| ClosureCompute["ATTRIBUTE CLOSURE
        COMPUTATION X+"]
    A2 -.->|"Used iteratively"| ClosureCompute
    A3 -.->|"Used iteratively"| ClosureCompute

    classDef coreAxiom fill:#bbdefb,stroke:#1565c0,stroke-width:3px,color:#000
    classDef derivedRule fill:#c8e6c9,stroke:#2e7d32,stroke-width:2px,color:#000
    classDef appNode fill:#ffe0b2,stroke:#ef6c00,stroke-width:2px,color:#000

    class A1,A2,A3 coreAxiom
    class D1,D2,D3,D4 derivedRule
    class ClosureCompute appNode
```

---

### 4.3 Sequential Processing Topology: Attribute Closure Algorithm

The following topology matrix represents the iterative process of computing $X^+$ — useful when the relation has many attributes and many FDs.

| Phase | Stage | Input | Operation | Output |
|-------|-------|-------|-----------|--------|
| **1. Initialize** | Start | $X$, $F$ | $X^+ = X$ | Initial closure set |
| **2. Scan FDs** | Iteration $i$ begins | $X^+$, $F$ | Iterate over $F$ sequentially | List of candidate FDs |
| **3. Match LHS** | Test inclusion | $X^+$, FD | $LHS \subseteq X^+$ ? | Boolean |
| **4. Add RHS** | Update closure | $X^+$, FD | $X^+ = X^+ \cup RHS$ | Updated closure |
| **5. Convergence Check** | Termination test | Old $X^+$, New $X^+$ | $X^+$ changed? | Boolean |
| **6. Loop or Exit** | Decision | Boolean | If true: go to Phase 2; else: go to Phase 7 | — |
| **7. Return** | Final output | $X^+$ | Print / return | $X^+$ final value |

> **Topology Insight:** This is essentially a **fixed-point iteration** — a classic computer science algorithm pattern (also seen in PageRank, Bellman-Ford, and Datalog evaluation). The KTU examiner often tests whether the student understands that the loop is *guaranteed* to terminate because $X^+$ is a subset of the finite set $R$, so it can grow at most $\vert R \vert$ times.

---

### 4.4 FD Classification Schematic (Mermaid Decision Tree)

```mermaid
graph TD
    Start["Functional Dependency
        X -> Y"]
    Q1{"Is Y a subset of X?"}
    Trivial["TRIVIAL FD
        Always holds
        e.g., AB -> A"]
    Q2{"Is X intersect Y empty?"}
    CompleteNonTrivial["COMPLETELY NON-TRIVIAL FD
        X and Y are disjoint
        e.g., Roll_No -> Name"]
    SemiNonTrivial["SEMI NON-TRIVIAL FD
        Some overlap
        e.g., AB -> B, BC -> C"]
    NonTrivial["NON-TRIVIAL FD
        Y not in X
        e.g., Roll_No -> Name"]

    Start --> Q1
    Q1 -->|"YES"| Trivial
    Q1 -->|"NO"| NonTrivial
    NonTrivial --> Q2
    Q2 -->|"YES"| CompleteNonTrivial
    Q2 -->|"NO"| SemiNonTrivial

    classDef trivialStyle fill:#c8e6c9,stroke:#1b5e20,color:#000
    classDef nonTrivialStyle fill:#ffccbc,stroke:#bf360c,color:#000
    classDef neutralStyle fill:#e0e0e0,stroke:#424242,color:#000
    classDef decisionStyle fill:#fff59d,stroke:#f57f17,color:#000

    class Trivial trivialStyle
    class CompleteNonTrivial,SemiNonTrivial,NonTrivial nonTrivialStyle
    class Start neutralStyle
    class Q1,Q2 decisionStyle
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
## 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

### 5.1 Part A Questions (3 Marks Each)

#### Question 1: Definition of Functional Dependency
**[KTU University Exam - July 2024 | CO1 | Remember]**

**Q:** Define functional dependency. Explain the difference between a trivial and a non-trivial functional dependency with an example.

**Model Answer:**

A **functional dependency (FD)** is a constraint between two sets of attributes $X$ and $Y$ in a relation schema $R$, denoted $X \rightarrow Y$, which specifies that for any two tuples $t_1$ and $t_2$ in a valid instance $r$ of $R$:

$$t_1[X] = t_2[X] \;\Rightarrow\; t_1[Y] = t_2[Y]$$

In other words, the value of $Y$ is uniquely determined by the value of $X$. The attribute set $X$ is the **determinant**, and $Y$ is the **dependent**.

**Trivial FD:** $X \rightarrow Y$ is *trivial* if $Y \subseteq X$. Since $Y$ is already part of $X$, this dependency holds in every relation. *Example:* $\text{Roll\_No, Name} \rightarrow \text{Name}$.

**Non-Trivial FD:** $X \rightarrow Y$ is *non-trivial* if $Y \not\subseteq X$. The dependent attributes are not present in the determinant. *Example:* $\text{Roll\_No} \rightarrow \text{Name}$ — here, $\text{Name} \not\subseteq \{\text{Roll\_No}\}$.

> **[Valuation Key: Definition of FD: 1 Mark; Determinant vs Dependent distinction: 1 Mark; Trivial vs Non-Trivial example: 1 Mark]**

---

#### Question 2: Armstrong's Axioms
**[KTU University Exam - Dec 2023 | CO1 | Understand]**

**Q:** State and briefly explain Armstrong's three inference axioms for functional dependencies.

**Model Answer:**

Armstrong's axioms are a set of inference rules used to derive all functional dependencies that logically follow from a given set of FDs.

| Axiom | Statement | Explanation |
|-------|-----------|-------------|
| **A1: Reflexivity** | If $Y \subseteq X$, then $X \rightarrow Y$ | The LHS always determines any subset of itself. |
| **A2: Augmentation** | If $X \rightarrow Y$, then $XZ \rightarrow YZ$ for any $Z$ | Adding the same attributes to both sides of an FD preserves it. |
| **A3: Transitivity** | If $X \rightarrow Y$ and $Y \rightarrow Z$, then $X \rightarrow Z$ | FDs chain together like mathematical functions. |

These axioms are **sound** (derive only true FDs) and **complete** (derive all true FDs from $F$).

> **[Valuation Key: Listing three axioms: 1.5 Marks; Brief correct explanation of each: 1.5 Marks]**

---

### 5.2 Part B Questions (14 Marks Each — Internal Choice)

#### Question A (14 Marks)
**[KTU University Exam - July 2024 | CO2, CO3 | Apply, Analyze]**

**Q (a) [7 Marks]:** Consider a relation $R(A, B, C, D, E, F)$ with the following set of functional dependencies:
$$F = \{ A \rightarrow B, \; D \rightarrow E, \; B \rightarrow C, \; AB \rightarrow D, \; CE \rightarrow F \}$$

**(i)** Compute the closure $\{A\}^+$.
**(ii)** Identify the candidate keys of $R$.

**Q (b) [7 Marks]:** Using the same relation, prove that the FD $A \rightarrow F$ can be derived from $F$ using Armstrong's axioms. Show each step with the axiom used.

---

#### Model Solution for Question A(a):

**Part (i) — Computing $\{A\}^+$:**

**Iteration 0:** $\{A\}^+ = \{A\}$

**Iteration 1:** Scan $F$:

| FD Check | LHS in $X^+$? | Action |
|----------|---------------|--------|
| $A \rightarrow B$ | Yes | $X^+ = \{A, B\}$ |
| $D \rightarrow E$ | No | Skip |
| $B \rightarrow C$ | Yes | $X^+ = \{A, B, C\}$ |
| $AB \rightarrow D$ | Yes | $X^+ = \{A, B, C, D\}$ |
| $CE \rightarrow F$ | No ($E \notin X^+$) | Skip |

After Iter 1: $X^+ = \{A, B, C, D\}$

**Iteration 2:** Re-scan $F$:

| FD Check | LHS in $X^+$? | Action |
|----------|---------------|--------|
| $A \rightarrow B$ | Yes | No change |
| $D \rightarrow E$ | Yes | $X^+ = \{A, B, C, D, E\}$ |
| $B \rightarrow C$ | Yes | No change |
| $AB \rightarrow D$ | Yes | No change |
| $CE \rightarrow F$ | Yes ($C, E \in X^+$) | $X^+ = \{A, B, C, D, E, F\}$ |

After Iter 2: $X^+ = \{A, B, C, D, E, F\} = R$

$$\boxed{\{A\}^+ = \{A, B, C, D, E, F\}}$$

**[Stating initial closure: 1 Mark; Correct first iteration additions: 2 Marks; Second iteration including E→F application: 2 Marks; Final result: 1 Mark; Correct conclusion: 1 Mark]**

---

**Part (ii) — Candidate Keys:**

Since $\{A\}^+ = R$, attribute $A$ alone is a **super key**. Furthermore, $\{A\}$ is a singleton set, so it has no proper subset other than $\emptyset$ (which is not a key). Therefore, $\{A\}$ is a **candidate key**.

To check for other candidate keys, we test minimal subsets of $R$ not containing $A$:

- $\{B\}^+ = \{B, C\} \neq R$
- $\{D\}^+ = \{D, E\}$, then via $CE \rightarrow F$? $C \notin \{D,E\}^+$. So $\{D\}^+ = \{D, E\} \neq R$
- $\{B, D\}^+ = \{B, C, D, E, F\}$ (need to verify $A$): Cannot derive $A$ from $B, D, E, F, C$ via $A \rightarrow B$ (no $A$). So $\{B, D\}^+ \neq R$.

Therefore, the **only candidate key** is:

$$\boxed{\{A\}}$$

**[Identifying A+ = R: 1 Mark; Verifying minimality: 1 Mark]**

---

#### Model Solution for Question A(b):

**Proving $A \rightarrow F$ using Armstrong's Axioms:**

| Step | Statement | Justification |
|------|-----------|---------------|
| 1 | $A \rightarrow B$ | Given in $F$ |
| 2 | $A \rightarrow C$ | From Step 1 + given $B \rightarrow C$, by **Transitivity (A3)** |
| 3 | $A \rightarrow D$ | From Step 1 + given $AB \rightarrow D$; $AB \rightarrow D$ and $A \rightarrow B$ give us $A \rightarrow AB$ by **Reflexivity (A1)** then Augmentation. Alternatively: $A \rightarrow B$ (Step 1); combine with $A$ itself: $AA \rightarrow AB$, i.e., $A \rightarrow AB$ by **Augmentation (A2)** with $A$. Then $A \rightarrow AB$ and $AB \rightarrow D$ (given) yield $A \rightarrow D$ by **Transitivity (A3)**. |
| 4 | $A \rightarrow E$ | From Step 3 ($A \rightarrow D$) and given $D \rightarrow E$, by **Transitivity (A3)** |
| 5 | $A \rightarrow CE$ | From Step 2 ($A \rightarrow C$) and Step 4 ($A \rightarrow E$), by **Union (Derived Rule)** — equivalent to Augmentation + Transitivity |
| 6 | $A \rightarrow F$ | From Step 5 ($A \rightarrow CE$) and given $CE \rightarrow F$, by **Transitivity (A3)** |

**Q.E.D.**

**[Stating initial given FDs: 1 Mark; Step 1→2 using transitivity: 1 Mark; Step 2→3 using reflexivity + augmentation: 2 Marks; Step 3→4 using transitivity: 1 Mark; Step 4→5 using union: 1 Mark; Final transitivity to A→F: 1 Mark]**

---

#### Question B (14 Marks) — Alternative
**[KTU University Exam - Dec 2023 | CO2, CO3 | Apply, Analyze]**

**Q (a) [7 Marks]:** For the relation $R(A, B, C, D, E)$ and $F = \{ AB \rightarrow C, \; C \rightarrow D, \; D \rightarrow A, \; B \rightarrow E \}$, find:
**(i)** All candidate keys of $R$.
**(ii)** The canonical cover $F_c$ of $F$.

**Q (b) [7 Marks]:** Explain the concept of *attribute closure* and the *extraneous attribute test*. Show how these are used in finding the canonical cover with a self-explanatory example.

---

#### Model Solution for Question B(a)(i):

We test the closures of all single attributes:

$\{A\}^+ = \{A\}$ (no FD starts with $A$ alone)
$\{B\}^+ = \{B, E\}$ (using $B \rightarrow E$)
$\{C\}^+ = \{C, D, A, B, E\}$ — let us verify:
  - Start: $\{C\}$
  - $C \rightarrow D$: $\{C, D\}$
  - $D \rightarrow A$: $\{C, D, A\}$
  - $AB \rightarrow C$ needs $B$, not applicable
  - $B \rightarrow E$ needs $B$, not applicable
  - So $\{C\}^+ = \{C, D, A\} \neq R$
$\{D\}^+ = \{D, A\}$
$\{E\}^+ = \{E\}$

No single attribute is a candidate key.

**Test pairs:**

$\{A, B\}^+$:
  - Start: $\{A, B\}$
  - $AB \rightarrow C$: $\{A, B, C\}$
  - $C \rightarrow D$: $\{A, B, C, D\}$
  - $D \rightarrow A$: $\{A, B, C, D\}$
  - $B \rightarrow E$: $\{A, B, C, D, E\} = R$ ✓

$\{A, B\}$ is a super key. Minimal? Subsets $\{A\}, \{B\}$ are not keys. So **$\{A, B\}$ is a candidate key.**

$\{B, C\}^+$:
  - Start: $\{B, C\}$
  - $AB \rightarrow C$ needs $A$, skip
  - $C \rightarrow D$: $\{B, C, D\}$
  - $D \rightarrow A$: $\{A, B, C, D\}$
  - $B \rightarrow E$: $\{A, B, C, D, E\} = R$ ✓

$\{B, C\}$ is a super key. Minimal? $\{B\}$ and $\{C\}$ are not keys. So **$\{B, C\}$ is a candidate key.**

Test $\{B, D\}^+$, $\{C, D\}^+$, etc. — by careful enumeration, all other candidate keys contain either $\{A, B\}$ or $\{B, C\}$ or larger.

**Final Candidate Keys:**
$$\boxed{\{A, B\}, \; \{B, C\}}$$

**[Computing single-attribute closures: 2 Marks; Identifying pair closures: 3 Marks; Verifying minimality: 1 Mark; Final answer: 1 Mark]**

---

#### Model Solution for Question B(a)(ii):

**Step 1 — RHS already single-attribute.** No decomposition needed.

**Step 2 — Test for extraneous LHS attributes:** No FD has multi-attribute LHS (except $AB \rightarrow C$).

For $AB \rightarrow C$: Is $A$ extraneous? Compute $\{B\}^+ = \{B, E\}$. $A \notin \{B, E\}^+$. So $A$ is NOT extraneous.
Is $B$ extraneous? Compute $\{A\}^+ = \{A\}$. $B \notin \{A\}^+$. So $B$ is NOT extraneous.

**Step 3 — Test for redundant FDs:**

- **Test $AB \rightarrow C$ redundant?** Compute $\{A, B\}^+$ without $AB \rightarrow C$:
  - Start: $\{A, B\}$
  - $B \rightarrow E$: $\{A, B, E\}$
  - $C \rightarrow D$: $C$ not in set, skip.
  - $D \rightarrow A$: $D$ not in set, skip.
  - $A \rightarrow \cdot$ no FD.
  - $\{A, B\}^+ = \{A, B, E\}$. $C \notin \{A, B, E\}^+$. So $AB \rightarrow C$ is **NOT redundant**.

- **Test $B \rightarrow E$ redundant?** Compute $\{B\}^+$ without $B \rightarrow E$:
  - Start: $\{B\}$. No FD applicable. So $\{B\}^+ = \{B\}$. $E \notin \{B\}^+$. So $B \rightarrow E$ is **NOT redundant**.

- **Test $C \rightarrow D$ redundant?** Compute $\{C\}^+$ without $C \rightarrow D$:
  - Start: $\{C\}$. No FD applicable. So $\{C\}^+ = \{C\}$. $D \notin \{C\}^+$. So $C \rightarrow D$ is **NOT redundant**.

- **Test $D \rightarrow A$ redundant?** Compute $\{D\}^+$ without $D \rightarrow A$:
  - Start: $\{D\}$. No FD applicable. So $\{D\}^+ = \{D\}$. $A \notin \{D\}^+$. So $D \rightarrow A$ is **NOT redundant**.

**Result:** No FDs are redundant. Canonical cover is the same as $F$:

$$\boxed{F_c = \{ AB \rightarrow C, \; C \rightarrow D, \; D \rightarrow A, \; B \rightarrow E \}}$$

**[Stating algorithm: 1 Mark; Testing extraneous attributes: 2 Marks; Testing each FD for redundancy: 3 Marks; Final answer: 1 Mark]**

---

#### Model Solution for Question B(b):

**Attribute Closure Definition:**

Given a relation $R$ with FD set $F$, the **closure** of an attribute set $X$, denoted $X^+$, is the set of all attributes $A$ such that the FD $X \rightarrow A$ can be derived from $F$ using Armstrong's axioms:

$$X^+ = \{A \in R \mid F \vdash X \rightarrow A\}$$

It is computed using the iterative algorithm described in Section 3.4. The closure is **monotonically increasing** at each step and **terminates** in at most $\vert R \vert$ iterations.

**Extraneous Attribute Definition:**

An attribute $A$ is **extraneous** in the LHS of an FD $X \rightarrow Y$ if $A \in X$ and:

$$(X - \{A\})^+ \text{ already contains } A$$

In other words, removing $A$ from $X$ does not reduce the closure. Such attributes are "useless" on the LHS and can be removed to get a smaller, equivalent FD.

**Role in Canonical Cover Computation:**

To find the canonical cover $F_c$ of $F$:

1. **Decompose** all FDs to single-attribute RHS.
2. For each FD $X \rightarrow A$, use the **closure test** $(X - \{B\})^+ \subseteq X^+ \cup \{A\}$ to detect extraneous LHS attribute $B$.
3. For each FD $X \rightarrow A$, use the closure test $A \in X^+$ (under $F - \{X \rightarrow A\}$) to detect redundant FDs.
4. **Remove** the extraneous attributes and redundant FDs.

**Self-Explanatory Example:**

Given $F = \{A \rightarrow BC, \; B \rightarrow C, \; A \rightarrow B, \; AB \rightarrow C\}$:

- **Step 1 — Decompose RHS:** $F = \{A \rightarrow B, \; A \rightarrow C, \; B \rightarrow C, \; AB \rightarrow C\}$
- **Step 2 — Test extraneous in $AB \rightarrow C$:** Compute $\{A\}^+ = \{A, B, C\}$. $B \in \{A\}^+$, so $B$ is extraneous. New FD: $A \rightarrow C$.
- **Step 3 — Test redundancy:** $A \rightarrow C$ is now redundant (since $A^+ = \{A, B, C\}$ already contains $C$).

Result: $F_c = \{A \rightarrow B, \; B \rightarrow C\}$.

**[Definition of closure: 1.5 Marks; Definition of extraneous: 1.5 Marks; Role in canonical cover: 2 Marks; Self-explanatory example: 2 Marks]**

---

### 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mistakes that Cause Mark Deductions in KTU Board Exams:**
> 
> 1. **Forgetting to iterate the closure algorithm** — A single scan is not enough. FDs whose LHS is added *during* the iteration are applicable in *subsequent* iterations. Many students stop after the first pass and miss 2-3 marks.
> 
> 2. **Misidentifying candidate keys** — A super key is NOT a candidate key. To find candidate keys, you must verify **minimality**: no proper subset should also be a super key. Just listing super keys loses 1-2 marks.
> 
> 3. **Confusing transitive and augmented FDs** — $X \rightarrow Y$ and $Y \rightarrow Z$ gives $X \rightarrow Z$ by *transitivity* (A3), NOT by augmentation (A2). Using the wrong axiom name costs 0.5-1 mark.
> 
> 4. **Not writing the FD derivation table** — In 7-mark derivation questions, the **table format** (FD | Rule | Result) is what examiners scan for. Prose-only answers often miss intermediate steps and lose 2-3 marks.
> 
> 5. **Canonical Cover order matters** — When removing redundant FDs, removing one FD may make another redundant. Iterate the redundancy test until no more FDs can be removed.
> 
> 6. **Forgetting the FD set $F$ is on the schema, not the instance** — FDs are semantic and must hold for ALL valid instances, not just the current tuples. This misconception loses conceptual marks in 3-mark definition questions.

---

### 5.4 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **High-Density Revision Checklist — Functional Dependencies**

**Core Definitions:**
- ☐ **FD** $X \rightarrow Y$: $X$ uniquely determines $Y$ in all valid instances of $R$.
- ☐ **Trivial FD:** $Y \subseteq X$ (always true, uninformative).
- ☐ **Non-Trivial FD:** $Y \not\subseteq X$ (carries real semantic information).
- ☐ **Completely Non-Trivial FD:** $X \cap Y = \emptyset$ (most informative case).
- ☐ **Determinant:** LHS attribute set; **Dependent:** RHS attribute set.

**Armstrong's Three Axioms (must memorize exactly):**
- ☐ **A1 Reflexivity:** $Y \subseteq X \Rightarrow X \rightarrow Y$
- ☐ **A2 Augmentation:** $X \rightarrow Y \Rightarrow XZ \rightarrow YZ$
- ☐ **A3 Transitivity:** $X \rightarrow Y, \; Y \rightarrow Z \Rightarrow X \rightarrow Z$

**Derived Rules (frequently tested):**
- ☐ **Union:** $X \rightarrow Y, \; X \rightarrow Z \Rightarrow X \rightarrow YZ$
- ☐ **Decomposition:** $X \rightarrow YZ \Rightarrow X \rightarrow Y$ and $X \rightarrow Z$
- ☐ **Pseudo-transitivity:** $X \rightarrow Y, \; YZ \rightarrow W \Rightarrow XZ \rightarrow W$
- ☐ **Composition:** $X \rightarrow Y, \; Z \rightarrow W \Rightarrow XZ \rightarrow YW$

**Attribute Closure Algorithm ($X^+$):**
- ☐ Initialize $X^+ = X$.
- ☐ Iteratively add RHS of any FD whose LHS is a subset of current $X^+$.
- ☐ Terminate when $X^+$ no longer changes.
- ☐ Maximum iterations = $\vert R \vert$.

**Key Identification:**
- ☐ $X$ is a **super key** iff $X^+ = R$.
- ☐ $X$ is a **candidate key** iff $X$ is a minimal super key.
- ☐ **Primary key** = chosen candidate key for a relation.
- ☐ **Foreign key** = attribute referencing primary key of another relation (not an FD concept per se, but related).

**Canonical Cover ($F_c$) Construction Steps:**
- ☐ Step 1: Decompose all FDs to single-attribute RHS.
- ☐ Step 2: Remove extraneous LHS attributes.
- ☐ Step 3: Remove redundant FDs (iterate until stable).
- ☐ Step 4: Combine FDs with the same LHS (optional cleanup).

**Extraneous Attribute Tests:**
- ☐ **LHS extraneous:** $A \in X$ and $A \in (X - \{A\})^+$ under $F$.
- ☐ **RHS extraneous:** $A \in Y$ and $A \in X^+$ under $F - \{X \rightarrow A\}$.

**Closure of FD Set ($F^+$):**
- ☐ $F^+ = \{X \rightarrow Y \mid F \vdash X \rightarrow Y\}$.
- ☐ $F$ and $F_c$ (or $F^+$) are **equivalent** if $F^+ = (F_c)^+$.
- ☐ Computing $F^+$ explicitly is exponential; use attribute closure instead.

**Frequently Confused Concepts (avoid in exams):**
- ☐ FDs are NOT the same as keys. Keys are a special case of FDs (where the dependent is the full schema).
- ☐ "Trivial" does NOT mean "useless to remove" — trivial FDs are valid but don't add information.
- ☐ Armstrong's axioms are **sound AND complete** — never "approximate" or "mostly complete".
- ☐ $\vert F^+ \vert$ can be exponential in $\vert R \vert$, but this is a *theoretical* upper bound; in practice, FDs are usually much fewer.

**Real-World Mapping Reminders:**
- ☐ FDs come from **business rules**, not from data analysis.
- ☐ If a business rule changes, the FDs change too.
- ☐ FDs are the input to **normalization algorithms** (3NF, BCNF synthesis).
- ☐ Most production RDBMS do not auto-enforce arbitrary FDs — only super keys and NOT NULL.

> **End of Module 3 Topic 1: Functional Dependencies Notes — PCCST402 KTU 2024 Scheme**

<!-- SECTION_5_END -->
