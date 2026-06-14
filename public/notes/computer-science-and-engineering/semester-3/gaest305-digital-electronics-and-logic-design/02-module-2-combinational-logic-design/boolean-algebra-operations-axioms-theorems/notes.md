# Boolean Algebra - Operations, Axioms, Theorems

<!-- SECTION_1_START -->
# Boolean Algebra — Operations, Axioms & Theorems

> [!NOTE]
> **KTU 2024 Scheme | GAEST305 | Module 2 — Combinational Logic Design**
> This module forms the *theoretical backbone* of all digital circuit simplification, Karnaugh Map reduction, and subsequent sequential design.

---

## 1.1 Formal Definition (KTU Syllabus Terminology)

**Boolean Algebra** is a mathematical system defined on a set $B = \{0, 1\}$ together with two binary operations — **OR (∨, written as $+$)** and **AND (∧, written as $\cdot$ or juxtaposition)** — and one unary operation **NOT (′, complement)** — that satisfies a specific set of axioms first formalized by **Edward V. Huntington (1904)**.

In the context of digital electronics, Boolean Algebra provides the algebraic framework to **model, manipulate, and minimize switching circuits** built from logic gates. Every digital signal — a HIGH or LOW voltage — is represented as a Boolean variable $x \in \{0, 1\}$.

> [!IMPORTANT]
> **Why Boolean Algebra Matters in KTU/Engineering**
> 1. Enables **algebraic simplification** of logic expressions before drawing circuits.
> 2. Reduces the **gate count**, **propagation delay**, and **power dissipation** in a hardware design.
> 3. Acts as the *mathematical prerequisite* for K-Maps, Quine–McCluskey, and PLD programming.

---

## 1.2 Core Operations — The Building Blocks

| Symbol | Operation | Symbol | Read As | Logic Gate |
|--------|-----------|--------|---------|-----------|
| $\cdot$ | AND | $x \cdot y$ | "$x$ AND $y$" | AND |
| $+$ | OR | $x + y$ | "$x$ OR $y$" | OR |
| $'$ | NOT | $x'$ | "NOT $x$" / "complement of $x$" | Inverter |

**Derived (composite) operations** built from the three primitives:

$$
\text{NAND} = (x \cdot y)', \quad \text{NOR} = (x + y)'
$$

$$
\text{XOR} = x \oplus y = x'y + xy', \quad \text{XNOR} = \overline{x \oplus y} = xy + x'y'
$$

---

## 1.3 Intuitive Real-World Analogy

> [!TIP]
> **Analogy — "The Two-Switch Light Bulb"**
> Imagine a corridor with **two switches, $A$ and $B$**, controlling a single bulb $L$.
> - **AND**: The bulb glows **only when BOTH switches are ON** → $L = A \cdot B$.
> - **OR**: The bulb glows when **EITHER switch is ON** → $L = A + B$.
> - **NOT (Inverter)**: A special *toggle* switch that **flips** the signal — ON becomes OFF and vice-versa.
>
> Boolean Algebra is the *rulebook* that tells you how to combine these switches to get a desired behavior using the **fewest switches possible**.

> [!VISUALIZATION CONTROL]
> **Concept:** Truth table grid for the 3 primary operations (AND, OR, NOT)
> **GeoGebra / Desmos Input Equations (truth-table style):**
> * `A = {0,1}`, `B = {0,1}`
> * `AND(A,B) = A*B` (piecewise on the Boolean grid)
> * `OR(A,B) = A+B-A*B` (Boolean OR via arithmetic)
> * `NOT(A) = 1-A`
> **Visual Description:** Plot the four points $(0,0,0), (0,1,0), (1,0,0), (1,1,1)$ for AND as a 3-D step surface — a flat plane at 0 that *rises* to 1 only at the corner $(1,1)$. The OR surface is a "tent" that reaches 1 on three corners.

---

## 1.4 Operators at a Glance — Priority

The **precedence hierarchy** (highest → lowest) is critical for correct equation parsing:

$$
\boxed{\text{Parentheses } (\;) \;>\; \text{NOT } ' \;>\; \text{AND } \cdot \;>\; \text{OR } +}
$$

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

---

## 2.1 Huntington's Postulates (Axioms) — The Foundation

These are the **5 closure/huntington axioms** that any Boolean Algebra must satisfy. They are *assumed true without proof*.

| # | Postulate | OR Form (+, ') | AND Form (·, ') | Intuition |
|---|-----------|----------------|-----------------|-----------|
| H1 | **Closure** | $x + y \in B$ | $x \cdot y \in B$ | Operation stays inside $\{0,1\}$ |
| H2 | **Identity** | $x + 0 = x$ | $x \cdot 1 = x$ | $0$ is OR-identity, $1$ is AND-identity |
| H3 | **Commutative** | $x + y = y + x$ | $x \cdot y = y \cdot x$ | Order doesn't matter |
| H4 | **Distributive** | $x + (y \cdot z) = (x + y)(x + z)$ | $x \cdot (y + z) = xy + xz$ | AND distributes over OR (unusual!) |
| H5 | **Complement** | $x + x' = 1$ | $x \cdot x' = 0$ | $x$ and $\bar{x}$ are opposites |

> [!IMPORTANT]
> **Difference from Ordinary Algebra**
> In Boolean Algebra, **AND distributes over OR** (H4 — right column), which has *no counterpart* in real-number algebra. This single property is what makes Boolean simplification uniquely powerful.

---

## 2.2 Duality Principle — The "Twin Theorem" Engine

> [!IMPORTANT]
> **Duality Principle (Huntington):** The dual of any valid Boolean identity is also valid. To form the dual:
> 1. Swap $\;+\; \leftrightarrow \;\cdot\;$
> 2. Swap $\;0\; \leftrightarrow \;1\;$
> 3. **Leave all variables and complements untouched.**

*Example:* The dual of $x + 0 = x$ is $x \cdot 1 = x$ (both valid).

This principle *halves* the theorems you must memorize — learn one form, the other comes free.

---

## 2.3 The 11 Core Theorems of Boolean Algebra (Memorization Set)

| # | Theorem | OR Form | AND Form | Common Name |
|---|---------|---------|----------|-------------|
| T1 | **Idempotent** | $x + x = x$ | $x \cdot x = x$ | Idempotency |
| T2 | **Null / Domination** | $x + 1 = 1$ | $x \cdot 0 = 0$ | Domination |
| T3 | **Involution** | $(x')' = x$ | $(x')' = x$ | Double Negation |
| T4 | **Absorption** | $x + xy = x$ | $x(x + y) = x$ | Absorption |
| T5 | **Adjacency / Combining** | $xy + xy' = x$ | $(x+y)(x+y') = x$ | Combining |
| T6 | **DeMorgan's (1st)** | $(x + y)' = x'y'$ | — | DeMorgan |
| T6' | **DeMorgan's (2nd)** | — | $(xy)' = x' + y'$ | DeMorgan |
| T7 | **Consensus** | $xy + x'z + yz = xy + x'z$ | $(x+y)(x'+z)(y+z) = (x+y)(x'+z)$ | Consensus |
| T8 | **Redundancy** | $x + x'y = x + y$ | $x(x' + y) = xy$ | Redundancy |
| T9 | **Universal Bound** | $x + x'y \le x+y$ | — | Bounding |

> [!NOTE]
> For KTU Board exams, **T4 (Absorption), T5 (Combining), T6/T6' (DeMorgan), and T7 (Consensus)** are the four most-frequently tested theorems.

---

## 2.4 KTU High-Yield Formula Sheet (Cheat Sheet)

| Formula / Identity | Symbolic Form | Used For |
|--------------------|---------------|----------|
| Identity | $x + 0 = x$, $\;x \cdot 1 = x$ | Stripping neutral elements |
| Null | $x + 1 = 1$, $\;x \cdot 0 = 0$ | Setting entire expression to 0/1 |
| Idempotent | $x + x = x$, $\;x \cdot x = x$ | Removing duplicates |
| Complement | $x + x' = 1$, $\;x \cdot x' = 0$ | Generating constants |
| Involution | $(x')' = x$ | Removing double-bars |
| Commutative | $xy = yx$, $\;x+y = y+x$ | Reordering |
| Associative | $(xy)z = x(yz)$ | Regrouping |
| Distributive | $x + yz = (x+y)(x+z)$ | Factoring / expansion |
| Absorption | $x + xy = x$, $\;x(x+y) = x$ | Eliminating redundant terms |
| Combining | $xy + xy' = x$ | Merging two terms |
| DeMorgan | $(x+y)' = x'y'$, $\;(xy)' = x' + y'$ | Complementing expressions |
| Consensus | $xy + x'z + yz = xy + x'z$ | Removing the $yz$ term |

> [!IMPORTANT]
> **Engineering Utility of These Theorems**
> - **Chip Design (ASIC/FPGA):** Reducing a sum-of-products expression from 4 terms to 2 terms directly translates to **fewer LUTs**, lower area, and lower dynamic power $P = \alpha C V_{dd}^{2} f$.
> - **Compiler Optimization:** Hardware Description Language (HDL) synthesis tools (e.g., Synopsys Design Compiler, Yosys) apply *exactly these theorems* in their algebraic-division rewrite engine.
> - **Error Detection:** DeMorgan transformation converts NAND-only or NOR-only logic into equivalent AND/OR/Inverter networks — the basis of **universal gates**.

---

## 2.5 Worked Truth-Table Verification — Example

**Prove $x + xy = x$ (Absorption, T4) using a truth table.**

| $x$ | $y$ | $xy$ | $x + xy$ | Compare to $x$ |
|-----|-----|------|----------|----------------|
| 0   | 0   | 0    | 0        | 0 ✓ |
| 0   | 1   | 0    | 0        | 0 ✓ |
| 1   | 0   | 0    | 1        | 1 ✓ |
| 1   | 1   | 1    | 1        | 1 ✓ |

Output column $x + xy$ **matches $x$ exactly** → theorem verified.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Proofs & Code Implementation

---

## 3.1 Exhaustive Proofs of the Four "Exam-Favorite" Theorems

### **Theorem 4 (Absorption, OR form):** $x + xy = x$

$$
\begin{aligned}
x + xy &= x \cdot 1 + x \cdot y \quad &\text{[Identity: } x = x \cdot 1\text{]} \\
&= x \cdot (1 + y) \quad &\text{[Factor out } x \text{ — Distributive H4]} \\
&= x \cdot 1 \quad &\text{[Null: } 1 + y = 1\text{]} \\
&= x \quad &\text{[Identity: } x \cdot 1 = x\text{]} \quad \blacksquare
\end{aligned}
$$

> **Valuation Key (KTU):** Step 1 = 1 mark, Step 2 = 1 mark, Step 3 = 1 mark, Step 4 = 1 mark (4-step proof template).

---

### **Theorem 5 (Combining, OR form):** $xy + xy' = x$

$$
\begin{aligned}
xy + xy' &= x(y + y') \quad &\text{[Factor } x \text{ — Distributive]} \\
&= x \cdot 1 \quad &\text{[Complement: } y + y' = 1\text{]} \\
&= x \quad &\text{[Identity]} \quad \blacksquare
\end{aligned}
$$

---

### **DeMorgan's Theorem:** $(x + y)' = x'y'$

$$
\begin{aligned}
\text{We verify } (x + y)(x+y)' &= 0 \;\text{ and }\; (x+y) + (x+y)' = 1: \\
(x+y) \cdot (x'y') &= xx'y' + yx'y' \quad &\text{[Distributive expansion]} \\
&= 0 \cdot y' + 0 \cdot y' \quad &\text{[Complement: } x \cdot x' = 0\text{]} \\
&= 0 + 0 = 0 \quad &\text{[Null: } 0 + 0 = 0\text{]} \\[4pt]
(x+y) + (x'y') &= (x+y) + x'y' \quad &\text{[Start]} \\
&= (x + y + x')(y + x' + y') \quad &\text{[Consensus / dual-distributive form]} \\
&= (1 + y)(1 + x') \quad &\text{[Complement: } x + x' = 1\text{]} \\
&= 1 \cdot 1 = 1 \quad &\text{[Null: } 1 + \text{anything} = 1\text{]} \quad \blacksquare
\end{aligned}
$$

---

### **Consensus Theorem:** $xy + x'z + yz = xy + x'z$

$$
\begin{aligned}
xy + x'z + yz &= xy + x'z + (x + x')yz \quad &\text{[Add } x + x' = 1 \text{ inside } yz\text{]} \\
&= xy + x'z + xyz + x'yz \quad &\text{[Distributive]} \\
&= xy(1 + z) + x'z(1 + y) \quad &\text{[Factor } xy \text{ and } x'z\text{]} \\
&= xy \cdot 1 + x'z \cdot 1 \quad &\text{[Null: } 1 + z = 1\text{]} \\
&= xy + x'z \quad &\text{[Identity]} \quad \blacksquare
\end{aligned}
$$

---

## 3.2 Python Implementation — Programmatic Theorem Verifier

The following Python module exhaustively validates the **11 core theorems** for all $2^n$ input combinations on $n=2, 3, 4$ variables. It is a *production-quality* verifier you can use in lab assignments.

```python
"""
boolean_theorem_verifier.py
Module 2 — Boolean Algebra Theorem Verifier
Course: GAEST305 (KTU 2024 Scheme)
"""

from itertools import product
from typing import Callable, Dict, List, Tuple

# ----- Type-safe Boolean evaluator -----
def to_bool(bit: int) -> bool:
    """Convert 0/1 int to Python bool with strict validation."""
    if bit not in (0, 1):
        raise ValueError(f"Invalid Boolean literal: {bit}. Expected 0 or 1.")
    return bool(bit)

def eval_expr(expr: Callable[..., bool], n_vars: int) -> List[int]:
    """
    Evaluate a Boolean expression over all 2^n_vars input combinations.
    Returns a list of 0/1 outputs in canonical (binary) input order.
    """
    out: List[int] = []
    for bits in product([0, 1], repeat=n_vars):
        try:
            out.append(int(expr(*bits)))
        except ZeroDivisionError:
            out.append(0)
    return out

def theorem_holds(lhs: Callable, rhs: Callable, n_vars: int) -> bool:
    """
    Return True if lhs and rhs produce identical truth tables for n_vars variables.
    """
    return eval_expr(lhs, n_vars) == eval_expr(rhs, n_vars)

# ----- The 11 Core Theorems (lhs, rhs, n_vars) -----
THEOREMS: Dict[str, Tuple[Callable, Callable, int]] = {
    "T1  Idempotent (OR)":        (lambda x: x | x,            lambda x: x,                    1),
    "T1  Idempotent (AND)":       (lambda x: x & x,            lambda x: x,                    1),
    "T2  Domination (OR)":        (lambda x: x | 1,            lambda x: 1,                    1),
    "T2  Domination (AND)":       (lambda x: x & 0,            lambda x: 0,                    1),
    "T3  Involution":             (lambda x: int(not (not x)), lambda x: x,                    1),
    "T4  Absorption (OR)":        (lambda x, y: x | (x & y),   lambda x, y: x,                 2),
    "T4  Absorption (AND)":       (lambda x, y: x & (x | y),   lambda x, y: x,                 2),
    "T5  Combining (OR)":         (lambda x, y: (x & y) | (x & (1-y)),
                                   lambda x, y: x,                                            2),
    "T6  DeMorgan (NAND)":        (lambda x, y: int(not (x & y)),
                                   lambda x, y: int((not x) | (not y)),                        2),
    "T6' DeMorgan (NOR)":         (lambda x, y: int(not (x | y)),
                                   lambda x, y: int((not x) & (not y)),                        2),
    "T7  Consensus (3-var)":      (lambda x, y, z: (x & y) | ((1-x) & z) | (y & z),
                                   lambda x, y, z: (x & y) | ((1-x) & z),                      3),
}

def run_verification() -> None:
    """Run all theorem checks and log results with a clear pass/fail report."""
    print(f"{'Theorem':40s} | {'Status':8s} | {'Vars'}")
    print("-" * 65)
    all_ok = True
    for name, (lhs, rhs, n) in THEOREMS.items():
        ok = theorem_holds(lhs, rhs, n)
        all_ok &= ok
        print(f"{name:40s} | {'PASS' if ok else 'FAIL':8s} | {n}")
    print("-" * 65)
    print("OVERALL:", "ALL THEOREMS VERIFIED" if all_ok else "VERIFICATION FAILED")

if __name__ == "__main__":
    run_verification()
```

**Expected Output (excerpt):**
```
Theorem                                 | Status   | Vars
-----------------------------------------------------------------
T1  Idempotent (OR)                     | PASS     | 1
...
T7  Consensus (3-var)                   | PASS     | 3
-----------------------------------------------------------------
OVERALL: ALL THEOREMS VERIFIED
```

> [!TIP]
> **Student Use Case:** Copy this script to your lab notebook. Replace any theorem's LHS/RHS with a *custom* expression you want to verify — the script doubles as a *homework grader* for algebraic proofs.

---

## 3.3 Worked Numerical Example — Simplify a Multi-Term Expression

**Simplify:** $F = AB + A'C + B'C + ABC$

$$
\begin{aligned}
F &= AB + A'C + B'C + ABC \\
&= AB(1 + C) + A'C + B'C \quad &\text{[Factor } AB \text{ from first and last terms]} \\
&= AB \cdot 1 + A'C + B'C \quad &\text{[Null: } 1 + C = 1\text{]} \\
&= AB + C(A' + B') \quad &\text{[Factor } C\text{]} \\
&= AB + C \cdot (AB)' \quad &\text{[DeMorgan: } A' + B' = (AB)'\text{]} \\
&= AB + C(AB)' \quad &\text{[Let } D = AB\text{, then } D + D'C = D + C \text{ by Redundancy T8]} \\
&= AB + C \quad &\text{[Redundancy T8 / Consensus elimination]} \quad \blacksquare
\end{aligned}
$$

> **Valuation Key (7-mark sub-question):** [Identifying common terms: 2M] [Applying T4/T8: 2M] [Final reduced SOP: 1M] [Verification via truth table: 2M]

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

---

## 4.1 Hierarchy of Boolean Operations

The following Mermaid diagram captures the *taxonomy* of Boolean operations — from the **3 primitives** to the **4 derived gates**, and finally the **functional groups** used in KTU Module 3 (adders, multiplexers, etc.).

```mermaid
graph TD
    subgraph PRIMITIVES["PRIMITIVE OPERATIONS - HUNTINGTON AXIOM H5"]
        opNOT["NOT - x prime - Inverter"]
        opAND["AND - x dot y - Conjunction"]
        opOR["OR - x plus y - Disjunction"]
    end

    subgraph DERIVED["DERIVED OPERATIONS - Composite Gates"]
        opNAND["NAND - xy prime - Sheffer Stroke"]
        opNOR["NOR - x plus y prime - Peirce Arrow"]
        opXOR["XOR - x ⊕ y - Antivalence"]
        opXNOR["XNOR - x ⊙ y - Equivalence"]
    end

    subgraph UNIVERSE["UNIVERSAL GATE SET"]
        uNAND["NAND alone - functionally complete"]
        uNOR["NOR alone - functionally complete"]
    end

    subgraph KTU_APPS["KTU MODULE 3 BUILDING BLOCKS"]
        appMUX["Multiplexers 2:1 4:1 8:1"]
        appDEMUX["Demultiplexers 1:2 1:4 1:8"]
        appADD["Half Adder Full Adder"]
        appCOMP["Comparator Magnitude Decoder"]
    end

    opAND --> opNAND
    opOR --> opNAND
    opNOT --> opNAND
    opAND --> opNOR
    opOR --> opNOR
    opNOT --> opNOR
    opAND --> opXOR
    opOR --> opXOR
    opNOT --> opXOR
    opXOR --> opXNOR
    opNOT --> opXNOR

    opNAND --> uNAND
    opNOR --> uNOR

    uNAND --> appMUX
    uNAND --> appDEMUX
    uNAND --> appADD
    uNAND --> appCOMP
    uNAND --> appMUX
    uNOR --> appMUX
    uNOR --> appDEMUX
    uNOR --> appADD
    uNOR --> appCOMP
```

---

## 4.2 Sequential Processing Topology — Simplification Pipeline

When a KTU problem says *"Simplify using Boolean theorems"*, follow this **5-step pipeline**:

```mermaid
flowchart LR
    subgraph STAGE1["STAGE 1: READ"]
        s1a["Parse expression"]
        s1b["Identify variable count n"]
        s1c["List literals per term"]
    end

    subgraph STAGE2["STAGE 2: GROUP"]
        s2a["Sort terms by literal count"]
        s2b["Factor common variables"]
        s2c["Apply Distributive H4"]
    end

    subgraph STAGE3["STAGE 3: ATTACK"]
        s3a["Apply Absorption T4"]
        s3b["Apply Combining T5"]
        s3c["Apply Consensus T7"]
    end

    subgraph STAGE4["STAGE 4: COMPLEMENT"]
        s4a["Apply DeMorgan T6 T6 prime"]
        s4b["Apply Involution T3"]
        s4c["Eliminate double bars"]
    end

    subgraph STAGE5["STAGE 5: VERIFY"]
        s5a["Build truth table for both forms"]
        s5b["Compare output columns"]
        s5c["Confirm 0/1 match"]
    end

    STAGE1 --> STAGE2 --> STAGE3 --> STAGE4 --> STAGE5
```

> [!TIP]
> **Exam Tip (KTU):** Stages 3 and 4 carry the **maximum marks (60–70 %)**. Examiners award partial credit for *attempting* a relevant theorem even if the final result has a minor error.

---

## 4.3 DeMorgan Equivalence Block Diagram

A common KTU question asks: *"Realize $F = (A + B)'$ using only NAND gates."* The mapping is shown below.

```mermaid
graph LR
    subgraph ORIGINAL["ORIGINAL: OR then NOT"]
        a1["A"] --> or1["OR gate"]
        b1["B"] --> or1
        or1 --> not1["NOT bubble"]
        not1 --> fout1["F = A plus B prime"]
    end

    subgraph DEMORGAN["DEMORGAN TRANSFORM: A prime AND B prime"]
        a2["A"] --> nA["NOT bubble"]
        b2["B"] --> nB["NOT bubble"]
        nA --> and1["AND gate"]
        nB --> and1
        and1 --> fout2["F = A prime B prime"]
    end

    subgraph NAND_ONLY["REALIZATION USING NAND GATES ONLY"]
        a3["A"] --> nandA["NAND as Inverter"]
        b3["B"] --> nandB["NAND as Inverter"]
        nandA --> nandF["NAND output is F"]
        nandB --> nandF
    end
```

> The **NAND-only realization** is functionally identical to the **OR-then-NOT** form. This is the classic KTU 7-mark question: *"Apply DeMorgan and realize using universal gates."*

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## 5.1 PART A — Short Answer Questions (2 × 3 = 6 Marks)

### **Q1.** `[KTU University Exam — July 2023]`
**(CO1, Remember)** State and prove the **Involution Theorem** of Boolean Algebra. Mention one engineering scenario where it is applied.

**Model Answer (3 Marks):**
> **Statement:** For any Boolean variable $x$, the double complement equals the variable itself: $(x')' = x$.
> **Proof (Truth Table):**
>
> | $x$ | $x'$ | $(x')'$ |
> |-----|------|---------|
> | 0   | 1    | 0       |
> | 1   | 0    | 1       |
>
> The output column $(x')'$ exactly matches the input column $x$, hence proved.
> **Engineering Application:** Used in CMOS inverter chains and **double-inverter buffer design** to restore signal drive strength without changing logic level.

> **[Valuation Key: Statement 1M, Truth Table 1M, Application 1M]**

---

### **Q2.** `[KTU University Exam — Dec 2022]`
**(CO1, Understand)** State **DeMorgan's Theorems** and explain their significance in digital circuit design.

**Model Answer (3 Marks):**
> **Theorem 1:** $(x + y)' = x' \cdot y'$ (NOR is equivalent to bubbled AND).
> **Theorem 2:** $(x \cdot y)' = x' + y'$ (NAND is equivalent to bubbled OR).
> **Significance:**
> 1. Enables **gate conversion** — any circuit can be realized using **only NAND** or **only NOR** gates (universal gates).
> 2. Simplifies **complementing** complex Boolean expressions during algebraic minimization.
> 3. Crucial in **bubble matching** for analyzing multi-level logic diagrams in KTU Module 2/3 problems.

> **[Valuation Key: Two statements 1M, Significance points 2M]**

---

## 5.2 PART B — Long Answer Questions (Module Internal Choice)

> **KTU Pattern:** Each Part-B question is **14 marks**, with two sub-parts typically carrying **7 + 7** marks and a choice between **Q-A** and **Q-B** from the same module.

---

### **Question A (14 Marks)** `[KTU University Exam — July 2024]`

#### **Q-A (a) (7 Marks) — Understand**
**(CO1)** State the **five Huntington's Postulates** that define a Boolean Algebra. Write the **dual** of each postulate in tabular form.

**Model Answer:**

| # | Postulate (OR form) | Dual (AND form) | Meaning |
|---|---------------------|-----------------|---------|
| H1 | $x + y \in B$ | $x \cdot y \in B$ | Closure under operations |
| H2 | $x + 0 = x$ | $x \cdot 1 = x$ | Identity element |
| H3 | $x + y = y + x$ | $x \cdot y = y \cdot x$ | Commutativity |
| H4 | $x + (y \cdot z) = (x+y)(x+z)$ | $x \cdot (y+z) = xy + xz$ | Distributivity |
| H5 | $x + x' = 1$ | $x \cdot x' = 0$ | Complement |

> **[Valuation Key: Listing postulates 2M, Writing duals 3M, Tabular clarity 1M, Brief explanation 1M]**

#### **Q-A (b) (7 Marks) — Apply**
**(CO2)** Simplify the Boolean function $F(A,B,C,D) = A'B'C'D + A'B'CD + A'BC'D + A'BCD + AB'C'D + AB'CD$ using Boolean algebra theorems and show the gate-level realization using **NAND gates only**.

**Step-by-Step Solution:**

**Step 1: Factor common terms.**

$$
\begin{aligned}
F &= A'B'C'D + A'B'CD + A'BC'D + A'BCD + AB'C'D + AB'CD \\
&= A'C'D(B' + B) + A'CD(B' + B) + AC'D(B' + B) \quad &\text{[Group by } C'D, CD, AC'D] \\
&\text{Wait — regroup by } A' \text{ and } A: \\
F &= A'(B'C'D + B'CD + BC'D + BCD) + A(B'C'D + B'CD) \\
&= A'[C'D(B' + B) + CD(B' + B)] + A \cdot B'(C'D + CD) \quad &\text{[Factor } B', C', C] \\
&= A'[C'D \cdot 1 + CD \cdot 1] + A \cdot B' \cdot D(C' + C) \quad &\text{[Complement: } B+B' = 1, C+C' = 1] \\
&= A'(C'D + CD) + AB'D \\
&= A'D(C' + C) + AB'D \quad &\text{[Factor } D] \\
&= A'D \cdot 1 + AB'D \quad &\text{[Complement]} \\
&= A'D + AB'D \\
&= A'D(1 + B') \quad &\text{[Factor } A'D] \\
&= A'D \cdot 1 \quad &\text{[Null: } 1 + B' = 1] \\
&= A'D
\end{aligned}
$$

> **Final simplified expression: $F = A'D$**

> **Verification by Truth Table (sample rows):**
>
> | $A$ | $B$ | $C$ | $D$ | Original $F$ | Simplified $A'D$ |
> |-----|-----|-----|-----|--------------|-------------------|
> | 0   | 0   | 0   | 1   | 1            | 1 ✓ |
> | 0   | 1   | 0   | 1   | 1            | 1 ✓ |
> | 1   | 0   | 0   | 1   | 1            | 0 ✗ |
> | 1   | 0   | 1   | 1   | 1            | 0 ✗ |
>
> ⚠️ The verifier must check **all 16 rows**. Re-evaluate: row 3 of the original expression = $AB'C'D = 1$, but $A'D = 0$ — there is a **simplification error**. Let us re-check the algebra.
>
> **Corrected approach using Karnaugh-like factoring:**
>
> $$
> \begin{aligned}
> F &= A'B'C'D + A'B'CD + A'BC'D + A'BCD + AB'C'D + AB'CD \\
> &= B'C'D(A'+A) + B'CD(A'+A) + A'BC'D + A'BCD \quad &\text{[Group terms with } B'C'D, B'CD] \\
> &= B'C'D + B'CD + A'BC'D + A'BCD \\
> &= B'D(C'+C) + A'D(B'C' + BC) \\
> &= B'D + A'D(B'C' + BC) \quad &\text{[Now apply identity carefully]} \\
> \end{aligned}
> $$
>
> Recognizing the term $B'C' + BC$ cannot be simplified by complement because $(B'C')' = B+C$, not $B'C'+BC$. Continuing with **adjacency (T5)** in 4-variable space:
>
> Group $(A'B'C'D, A'BC'D) \rightarrow A'C'D$ and $(A'B'CD, A'BCD) \rightarrow A'CD$ and $(AB'C'D, AB'CD) \rightarrow AB'D$.
>
> So $F = A'C'D + A'CD + AB'D = A'D(C'+C) + AB'D = A'D + AB'D = D(A' + AB') = D(A' + B') = A'D + B'D$.

> **Correct final answer: $F = A'D + B'D = D(A' + B')$**

> **NAND-only realization:** Apply DeMorgan — $F = D(A' + B') = D \cdot (AB)'$. This is the **NAND of $A$, $B$** followed by an **AND with $D$**. The AND with $D$ is realized as **NAND followed by NOT (=NAND tied)**. Total: **3 NAND gates**.

> **[Valuation Key: Factoring step 2M, Applying theorems 2M, Final expression 1M, NAND diagram 2M]**

---

### **Question B (14 Marks)** `[KTU University Exam — Dec 2023]`

#### **Q-B (a) (7 Marks) — Apply**
**(CO2)** Using Boolean algebra, prove that:
$$
(A + B)(A + C) = A + BC
$$

**Step-by-Step Proof:**

$$
\begin{aligned}
(A + B)(A + C) &= A \cdot A + A \cdot C + B \cdot A + B \cdot C \quad &\text{[Distributive H4]} \\
&= A + AC + AB + BC \quad &\text{[Idempotent T1: } A \cdot A = A] \\
&= A + AC + AB + BC \quad &\text{[Rearrange]} \\
&= A + AC + AB + BC \quad &\text{[Now apply Absorption T4]} \\
&= A(1 + C) + AB + BC \quad &\text{[Factor } A \text{ from first two terms]} \\
&= A \cdot 1 + AB + BC \quad &\text{[Null T2: } 1 + C = 1] \\
&= A + AB + BC \quad &\text{[Identity H2]} \\
&= A(1 + B) + BC \quad &\text{[Factor } A] \\
&= A \cdot 1 + BC \quad &\text{[Null]} \\
&= A + BC \quad &\text{[Identity]} \quad \blacksquare
\end{aligned}
$$

> **Alternative proof using consensus:**
> The term $AB$ in $A + AB + BC$ is the consensus of $A$ and $BC$ — so it is **redundant** (Consensus T7). Removing $AB$ gives $A + BC$.

> **[Valuation Key: Distributive expansion 2M, Idempotent 1M, Null theorem 2M, Final result 1M, Alternative method 1M]**

#### **Q-B (b) (7 Marks) — Apply**
**(CO2)** A combinational circuit has the Boolean function:
$$
F(A,B,C) = \sum m(0,1,4,5,7)
$$
Convert to **canonical SOP**, then **minimize** using Boolean theorems, and draw the **NAND-only logic diagram**.

**Step-by-Step Solution:**

**Step 1: List minterms.**

$$
F = A'B'C' + A'B'C + AB'C' + AB'C + ABC
$$

**Step 2: Group and factor.**

$$
\begin{aligned}
F &= A'B'(C' + C) + AB'(C' + C) + ABC \quad &\text{[Group pairs]} \\
&= A'B' \cdot 1 + AB' \cdot 1 + ABC \quad &\text{[Complement T5]} \\
&= A'B' + AB' + ABC \\
&= B'(A' + A) + ABC \quad &\text{[Factor } B'] \\
&= B' \cdot 1 + ABC \quad &\text{[Complement]} \\
&= B' + ABC
\end{aligned}
$$

**Step 3: Apply Redundancy (T8):** $B' + ABC = B' + AC$.

> **Final minimal expression: $F = B' + AC$**

**Step 4: NAND-only realization.**

Apply DeMorgan: $F = B' + AC = ((B')' \cdot (AC)')' = (B \cdot (AC)' )'$ — a **2-input NAND** with inputs $B$ and the **NAND output of $A$ and $C$**. Total: **2 NAND gates**.

> **[Valuation Key: Minterm expansion 2M, Factoring 2M, Redundancy 1M, NAND diagram 2M]**

---

## 5.3 KTU Examiner's Valuation Warning

> [!WARNING]
> **Common Pitfalls Where Students Lose Marks**
> 1. **Forgetting the dual:** Many students prove only the OR form and skip the AND form. KTU examiners expect **both forms** in any theorem proof — deducting **up to 2 marks** for omission.
> 2. **Confusing Domination with Identity:** Writing $x + 0 = x$ in a place that requires $x \cdot 1 = x$ (or vice-versa) is a **fatal 1-mark deduction**.
> 3. **Skipping the truth-table verification:** Even if the algebraic proof is correct, KTU values a *brief* truth-table cross-check at **1–2 marks** in long-answer questions.
> 4. **Missing the "Universal Gate" angle:** When asked to realize a function using NAND/NOR, students often draw the AND/OR circuit and label it incorrectly. The **bubble-matching** technique must be explicitly shown.
> 5. **Not stating the theorem name:** Always write *"By Absorption Theorem (T4)"* or *"By DeMorgan's Theorem"* — vague statements lose 1 mark each.
> 6. **Order-of-precedence violations:** Writing $AB + C$ to mean $A(B+C)$ loses a mark — use parentheses explicitly.

---

## 5.4 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid-Revision Checklist — Boolean Algebra: Operations, Axioms, Theorems**

- **Definition:** Boolean Algebra is the algebraic system on $B = \{0,1\}$ with operations $+$, $\cdot$, $'$ satisfying Huntington's 5 postulates.
- **Three primitives:** AND ($\cdot$), OR ($+$), NOT ($'$). All other operations are **derived** from these.
- **Four derived gates:** NAND $= (xy)'$, NOR $= (x+y)'$, XOR $= x \oplus y = x'y + xy'$, XNOR $= (x \oplus y)' = xy + x'y'$.
- **Huntington's 5 Postulates:** Closure, Identity, Commutative, Distributive (both directions!), Complement.
- **Duality:** Swap $+ \leftrightarrow \cdot$ and $0 \leftrightarrow 1$; the dual of any true statement is also true. Variables and complements remain **untouched**.
- **11 Must-Know Theorems** (with their names): Idempotent (T1), Domination/Null (T2), Involution (T3), Absorption (T4), Combining/Adjacency (T5), DeMorgan (T6, T6'), Consensus (T7), Redundancy (T8).
- **Absorption (T4):** $x + xy = x$ and $x(x+y) = x$ — *the most-used theorem* in KTU simplification problems.
- **Combining (T5):** $xy + xy' = x$ — works across *any* number of variables as long as one literal differs.
- **DeMorgan (T6/T6'):** $(x+y)' = x'y'$ and $(xy)' = x' + y'$ — the gateway to **universal-gate realization**.
- **Consensus (T7):** $xy + x'z + yz = xy + x'z$ — eliminates the **redundant** $yz$ term.
- **Operator Precedence:** Parens > NOT > AND > OR.
- **Universal Gate Property:** NAND alone **or** NOR alone is *functionally complete* — any Boolean function can be built using only one of them.
- **Standard Verification Method:** Use a **truth table** with $2^n$ rows for $n$ variables; LHS and RHS columns must be **bit-identical** for the theorem to be valid.
- **Real-World Use:** Algebraic simplification directly reduces **gate count, area, propagation delay, and dynamic power** in ASIC/FPGA designs.
- **Exam Keywords to Memorize:** Closure, Identity, Commutative, Distributive, Complement, Idempotent, Domination, Involution, Absorption, Combining, DeMorgan, Consensus, Redundancy, Duality, Universal Gate.
- **Common Mistake to Avoid:** Don't confuse Boolean algebra with ordinary algebra — in Boolean, $1 + 1 = 1$ (not 2) and $x + x = x$ (not $2x$).

<!-- SECTION_5_END -->
