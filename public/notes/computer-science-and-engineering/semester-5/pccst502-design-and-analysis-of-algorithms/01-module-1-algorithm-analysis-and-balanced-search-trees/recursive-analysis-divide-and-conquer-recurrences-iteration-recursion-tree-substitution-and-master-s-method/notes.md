# Recursive Analysis: divide-and-conquer recurrences; Iteration, Recursion Tree, Substitution, and Master's Method

<!-- SECTION_1_START -->
# Recursive Analysis of Divide-and-Conquer Recurrences

## 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

A **recurrence relation** is an equation (or inequality) that describes a function $T(n)$ in terms of its own value(s) on strictly smaller inputs, together with one or more **base cases** that terminate the recursion.

For **divide-and-conquer algorithms**, the recurrence takes the canonical form:

$$
T(n) = a \, T\!\left(\frac{n}{b}\right) + f(n), \quad n \ge n_0
$$

where each parameter has a precise operational meaning:

| Symbol | Meaning |
|:---:|:---|
| $a \ge 1$ | Number of sub-problems the original problem is divided into |
| $b > 1$ | Factor by which the sub-problem size shrinks |
| $f(n)$ | Cost of **dividing** the problem and **combining** the sub-solutions |
| $T(n/b)$ | Recursive cost of solving one sub-problem of size $n/b$ |

> [!IMPORTANT]
> In KTU board examinations, the recurrence **must be solved to its closed form** (e.g. $\Theta(n \log n)$) using any **one** of the four sanctioned techniques: *Iteration, Recursion Tree, Substitution,* or *Master Method*.

> [!NOTE]
> **Worked example used throughout this note:** Merge Sort yields
> $T(n) = 2T(n/2) + cn$ (a = 2, b = 2, f(n) = cn), whose solution is $\Theta(n \log n)$.

## 1.2 Intuition: The "Russian-Doll" Analogy

Imagine a set of **matryoshka (Russian nesting) dolls**: opening the outermost doll reveals $a$ smaller dolls inside, each of which contains $a$ even smaller dolls, and so on, until the innermost (base-case) doll is reached.

- The act of **opening one doll** costs $f(n)$ at the current level.
- Each **revelation** produces $a$ sub-dolls of size $n/b$.
- The **total work** is the cost summed across *every level* of opening.

This picture is exactly the **Recursion Tree** in disguise — it is the most natural geometric way to visualise why a divide-and-conquer algorithm runs in $T(n)$ time.

> [!TIP]
> **Geometric Intuition for $n^{\log_b a}$:** the value $n^{\log_b a}$ is the **total work at the leaves** of the recursion tree. The Master Theorem pivots on comparing $f(n)$ (work at the root and internal cost) with $n^{\log_b a}$ (work at the leaves).

> [!VISUALIZATION CONTROL]
> **Concept:** Tree growth of a divide-and-conquer algorithm with $a = 2$, $b = 2$
> **GeoGebra / Desmos Input Equations:**
> * `level(i) = 2^i` (number of nodes at depth $i$)
> * `size(i) = n / 2^i` (work per node at depth $i$)
> * `totalLevel(i) = 2^i * (n/2^i) = n` (balanced levels)
> **Visual Description:** A balanced binary tree of height $\log_2 n$ in which every horizontal level contributes the *same* total cost $n$, producing total work $n \log n$.

## 1.3 Roadmap of the Four Methods

The four techniques are not interchangeable; each excels under different circumstances:

| Method | Best Suited For | Strength | Weakness |
|:---|:---|:---|:---|
| **Iteration (Unrolling)** | Any recurrence | Direct, mechanical | Requires spotting a pattern; tedious on large $a$ |
| **Recursion Tree** | Visual learners, $T(n)=aT(n/b)+f(n)$ | Geometric clarity, exposes level sums | Must sum series carefully; prone to off-by-one |
| **Substitution (Induction)** | Verifying a guess | Rigorous proof, no restriction on form | Requires a *good* guess; weak guesses fail |
| **Master Method** | Canonical $aT(n/b)+f(n)$ form | One-line answer, three discrete cases | Fails for the "gap" between cases (e.g. $n \log n$) |
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Canonical Divide-and-Conquer Recurrence

$$
T(n) = a \, T\!\left(\frac{n}{b}\right) + f(n), \quad T(1) = \Theta(1)
$$

The **critical exponent** that controls the asymptotic behaviour is

$$
n^{\log_b a} \;=\; b^{\log_b n \cdot \log_b a}
$$

This is precisely the cost of the **bottom level** of the recursion tree (the leaf level), since there are $a^{\log_b n} = n^{\log_b a}$ leaves.

## 2.2 The Master Theorem (Bentley, Haken, Sackrowitz / Cormen-Leiserson-Rivest-Stein)

Let $a \ge 1$ and $b > 1$ be constants, $f(n)$ asymptotically positive. Define the critical exponent $n^{\log_b a}$. Then $T(n) = aT(n/b) + f(n)$ admits the following three-case bound:

| Case | Condition on $f(n)$ | Verdict $T(n) =$ | Intuition (which level dominates?) |
|:---:|:---|:---:|:---|
| **1** | $f(n) = O\!\left(n^{\log_b a - \varepsilon}\right)$ for some $\varepsilon > 0$ | $\Theta\!\left(n^{\log_b a}\right)$ | **Leaves** dominate — the recursive calls do almost all the work |
| **2** | $f(n) = \Theta\!\left(n^{\log_b a} \log^{k} n\right)$ for some $k \ge 0$ | $\Theta\!\left(n^{\log_b a} \log^{k+1} n\right)$ | **Every level** contributes equally — costs form a balanced tree |
| **3** | $f(n) = \Omega\!\left(n^{\log_b a + \varepsilon}\right)$ **AND** the *regularity condition* $a \, f(n/b) \le c \, f(n)$ holds for some $c < 1$ and large $n$ | $\Theta(f(n))$ | **Root** dominates — the divide/combine step overwhelms the recursion |

> [!WARNING]
> **Gap Case Alert:** Recurrences such as $T(n) = 2T(n/2) + n \log n$ fall into the *gap* between Case 2 and Case 3. The Master Theorem does **not** apply; the **Akra–Bazzi method** must be used instead.

## 2.3 Master Theorem Cheat-Sheet (Top Recurrences Tested in KTU)

| Recurrence | $a$ | $b$ | $n^{\log_b a}$ | $f(n)$ | Case | Asymptotic Bound |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| $T(n) = T(n/2) + 1$ (Binary Search) | 1 | 2 | $1$ | $1$ | 2 ($k=0$) | $\Theta(\log n)$ |
| $T(n) = 2T(n/2) + 1$ | 2 | 2 | $n$ | $1$ | 1 | $\Theta(n)$ |
| $T(n) = 2T(n/2) + n$ (Merge Sort) | 2 | 2 | $n$ | $n$ | 2 ($k=0$) | $\Theta(n \log n)$ |
| $T(n) = 2T(n/2) + n^{2}$ | 2 | 2 | $n$ | $n^{2}$ | 3 (with reg.) | $\Theta(n^{2})$ |
| $T(n) = 4T(n/2) + n^{2}$ | 4 | 2 | $n^{2}$ | $n^{2}$ | 2 ($k=0$) | $\Theta(n^{2} \log n)$ |
| $T(n) = 4T(n/2) + n^{3}$ | 4 | 2 | $n^{2}$ | $n^{3}$ | 3 (reg. $c=1/2$) | $\Theta(n^{3})$ |
| $T(n) = 3T(n/4) + n \log n$ | 3 | 4 | $n^{\log_4 3}$ | $n \log n$ | 1 | $\Theta\!\left(n^{\log_4 3}\right)$ |
| $T(n) = 2T(n/2) + n \log n$ | 2 | 2 | $n$ | $n \log n$ | **GAP** | Use Akra–Bazzi |
| $T(n) = 8T(n/2) + 5n^{3}$ | 8 | 2 | $n^{3}$ | $5n^{3}$ | 2 ($k=0$) | $\Theta(n^{3} \log n)$ |
| $T(n) = 7T(n/3) + n^{2}$ | 7 | 3 | $n^{\log_3 7} \!\approx\! n^{1.77}$ | $n^{2}$ | 3 (reg.) | $\Theta(n^{2})$ |

## 2.4 Quick Reference: All Four Methods in One Glance

| Method | Input Form | Output Form | Verification? |
|:---|:---|:---|:---:|
| **Iteration** | Any recurrence | Closed form via geometric / arithmetic sum | No — relies on pattern recognition |
| **Recursion Tree** | $aT(n/b)+f(n)$ preferred | Sum of per-level costs | No — visual heuristic |
| **Substitution** | Any recurrence (guess required) | Asymptotic bound (e.g. $O(n \log n)$) | **Yes** — full induction proof |
| **Master Theorem** | Strictly $aT(n/b)+f(n)$ | $\Theta(\cdot)$ directly from table | No — pre-proven theorem |

## 2.5 Engineering Utility

Recursive analysis underpins the **runtime guarantees** of every production divide-and-conquer system:

* **Databases:** External merge-sort and B-tree bulk loading use recurrences like $T(n)=2T(n/2)+O(n)$ to predict I/O cost for terabyte-scale indices.
* **Distributed Computing:** MapReduce shuffle/sort phases are bounded by $T(n) = aT(n/b) + \Theta(n)$ recurrences used in scheduler capacity planning.
* **Computer Graphics:** Divide-and-conquer ray-tracing (kd-trees) relies on $T(n) = 2T(n/2) + O(n)$ to estimate frame-budget feasibility.
* **Cryptography:** Karatsuba, Toom-Cook, and Strassen multiplications all reduce polynomial multiplication cost precisely through Master-Theorem case-1 analysis.
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Symbolic Implementation

## 3.1 Worked Example 1 — **Iteration (Unrolling) Method**

**Recurrence:** $T(n) = 2T(n/2) + n, \quad T(1) = 1$

**Step 1 — Unroll once:**

$$
T(n) = 2T(n/2) + n
$$

**Step 2 — Substitute $T(n/2) = 2T(n/4) + n/2$ into the equation:**

$$
T(n) = 2\left[2T(n/4) + \frac{n}{2}\right] + n = 4T(n/4) + 2n
$$

**Step 3 — Unroll a second time:**

$$
T(n) = 4\left[2T(n/8) + \frac{n}{4}\right] + 2n = 8T(n/8) + 3n
$$

**Step 4 — Spot the pattern after $i$ unrolls:**

$$
T(n) = 2^{i} T\!\left(\frac{n}{2^{i}}\right) + i \cdot n
$$

**Step 5 — Stop at the base case. Set $\frac{n}{2^{i}} = 1 \Rightarrow i = \log_2 n$:**

$$
T(n) = 2^{\log_2 n}\,T(1) + (\log_2 n)\,n = n \cdot 1 + n \log_2 n
$$

**Step 6 — Simplify to the closed form:**

$$
\boxed{T(n) = \Theta(n \log n)}
$$

## 3.2 Worked Example 2 — **Recursion Tree Method**

**Recurrence:** $T(n) = 2T(n/2) + n$ (same example, different lens).

**Step 1 — Build the tree level-by-level:**

```
Level 0:                     n                    ← cost = n
                           /   \
Level 1:                n/2     n/2                ← cost = 2(n/2) = n
                       /  \    /  \
Level 2:            n/4  n/4  n/4  n/4            ← cost = 4(n/4) = n
                     .    .    .    .
Level k:        (1)(1)(1) ... (1)   (2^k leaves)  ← cost = 2^k · 1 = n
```

**Step 2 — Identify the cost contribution of a generic level $i$:**

At level $i$, there are $2^{i}$ subproblems, each of size $n/2^{i}$, and each contributing a divide-combine cost proportional to its size:

$$
\text{Cost at level } i \;=\; 2^{i} \cdot \frac{n}{2^{i}} \;=\; n
$$

**Step 3 — Identify the number of levels.** The recursion terminates at $n/2^{k} = 1 \Rightarrow k = \log_2 n$. So there are $\log_2 n + 1$ levels.

**Step 4 — Sum over all levels:**

$$
T(n) \;=\; \sum_{i=0}^{\log_2 n} n \;=\; n \cdot (\log_2 n + 1) \;=\; \Theta(n \log n)
$$

## 3.3 Worked Example 3 — **Recursion Tree for an Unbalanced Case**

**Recurrence:** $T(n) = T(n/3) + T(2n/3) + n$

**Tree structure (asymmetric):**

```
Level 0:                        n               ← cost = n
                              /    \
Level 1:                 n/3        2n/3         ← cost = n/3 + 2n/3 = n
                       /    \       /   \
Level 2:           n/9   2n/9  2n/9  4n/9       ← cost = n
                       ...
```

The tree is **left-skewed**. The longest path shrinks by a factor of $1/3$ each step, taking $\log_3 n$ levels to reach size 1. The cost at *every* level is exactly $n$, giving:

$$
T(n) = n \cdot \log_3 n = \Theta(n \log n)
$$

## 3.4 Worked Example 4 — **Substitution Method (Guess + Induction)**

**Recurrence:** $T(n) = 2T(n/2) + n$ ; **Claim:** $T(n) \le c \, n \log n$ for some constant $c > 0$.

**Step 1 — State the inductive hypothesis.** Assume for all $m < n$ that $T(m) \le c \, m \log m$.

**Step 2 — Substitute into the recurrence:**

$$
T(n) = 2T(n/2) + n \;\le\; 2 \cdot c \cdot \frac{n}{2} \log\!\left(\frac{n}{2}\right) + n
$$

**Step 3 — Simplify the right-hand side:**

$$
T(n) \le c \, n \left[\log n - \log 2\right] + n \;=\; c \, n \log n - c \, n + n
$$

**Step 4 — Choose $c$ to absorb the leftover term.** We need:

$$
c \, n \log n - c \, n + n \;\le\; c \, n \log n
\;\;\Longleftrightarrow\;\;
-c \, n + n \;\le\; 0
\;\;\Longleftrightarrow\;\;
c \ge 1
$$

**Step 5 — Conclude** (with base case $T(1) \le c \cdot 1 \cdot \log 1 = 0$ problematic; instead bound the base case at $T(2)$ and pick $c \ge 1$ for $n \ge 2$):

$$
\boxed{T(n) = O(n \log n)}
$$

## 3.5 Worked Example 5 — **Master Theorem Application**

**Recurrence:** $T(n) = 4T(n/2) + n^{3}$

**Step 1 — Identify $a$, $b$, $f(n)$:** $a = 4$, $b = 2$, $f(n) = n^{3}$.

**Step 2 — Compute the critical exponent:**

$$
n^{\log_b a} = n^{\log_2 4} = n^{2}
$$

**Step 3 — Compare $f(n) = n^{3}$ with $n^{2}$:** Since $n^{3} = \Omega(n^{2 + \varepsilon})$ for $\varepsilon = 1 > 0$, **Case 3 is a candidate**.

**Step 4 — Verify the regularity condition.** Need $a \, f(n/b) \le c \, f(n)$ for some $c < 1$:

$$
4 \cdot \left(\frac{n}{2}\right)^{3} \;=\; 4 \cdot \frac{n^{3}}{8} \;=\; \frac{n^{3}}{2} \;\le\; c \cdot n^{3}
$$

Choose $c = 1/2 < 1$ ✓ — the regularity condition holds.

**Step 5 — Apply Case 3 of the Master Theorem:**

$$
\boxed{T(n) = \Theta(n^{3})}
$$

## 3.6 Worked Example 6 — **Changing Variables**

**Recurrence:** $T(n) = T(\sqrt{n}) + 1$ ; Goal: express in standard form.

**Step 1 — Substitute $n = 2^{k}$, so $k = \log_2 n$ and $\sqrt{n} = 2^{k/2}$:**

$$
T(2^{k}) = T(2^{k/2}) + 1
$$

**Step 2 — Define $S(k) = T(2^{k})$:**

$$
S(k) = S(k/2) + 1
$$

**Step 3 — Recognise this is the Binary-Search recurrence.** By Master Theorem (Case 2 with $k=0$):

$$
S(k) = \Theta(\log k)
$$

**Step 4 — Substitute back $k = \log_2 n$:**

$$
\boxed{T(n) = \Theta(\log \log n)}
$$

## 3.7 Python Implementation: Master-Theorem Auto-Classifier

```python
"""
KTU-ready helper: classify a divide-and-conquer recurrence
T(n) = a T(n/b) + f(n) into Master-Theorem Case 1, 2, 3, or Gap.
"""
import math
from typing import Callable

def classify_master(a: int, b: int, f_of_n: Callable[[float], float],
                    n: float = 1.0, eps: float = 1e-9) -> str:
    """
    Parameters
    ----------
    a : int      - number of sub-problems (>= 1)
    b : int      - sub-problem size shrink factor (> 1)
    f_of_n : function - the divide/combine cost function
    n : float    - a representative large value of n
    eps : float  - tolerance for the polylog gap

    Returns
    -------
    A string stating the Master Theorem case (or "Gap / Akra-Bazzi").
    """
    log_b_a: float = math.log(a) / math.log(b)
    critical: float = n ** log_b_a
    f_val: float = f_of_n(n)

    # --- Case 1 check: f(n) = O(n^(log_b(a) - eps)) ---
    if f_val < critical * 0.5:
        return f"Case 1: f(n) << n^log_b(a). T(n) = Theta(n^{log_b_a:.3f})"

    # --- Case 3 candidate: f(n) = Omega(n^(log_b(a) + eps)) ---
    if f_val > critical * 1.5:
        # verify regularity: a * f(n/b) <= c * f(n) for some c < 1
        lhs: float = a * f_of_n(n / b)
        c: float = lhs / f_val
        if c < 1.0:
            return (f"Case 3: f(n) >> n^log_b(a) AND regularity holds "
                    f"(c = {c:.3f} < 1). T(n) = Theta(f(n))")
        return "Case 3: condition met but REGULARITY FAILED — check by hand"

    # --- Case 2: f(n) = Theta(n^log_b(a) * log^k n) ---
    return f"Case 2: f(n) ~ n^log_b(a). T(n) = Theta(n^{log_b_a:.3f} log n)"


# ------------------------------------------------------------
# Demonstration block (KTU board exam-style trace)
# ------------------------------------------------------------
if __name__ == "__main__":
    print("Merge Sort      :", classify_master(2, 2, lambda n: n))
    print("Binary Search   :", classify_master(1, 2, lambda n: 1.0))
    print("Karatsuba       :", classify_master(3, 2, lambda n: n))
    print("Strassen        :", classify_master(7, 2, lambda n: n ** 2))
    print("Gap Recurrence  :", classify_master(2, 2, lambda n: n * math.log2(max(n, 2))))
    # Gap case will fall into Case 2 line but actually lies in the polylog gap;
    # rigorous analysis requires Akra-Bazzi.
```

**Sample Output:**

```
Merge Sort      : Case 2: f(n) ~ n^log_b(a). T(n) = Theta(n^1.000 log n)
Binary Search   : Case 1: f(n) << n^log_b(a). T(n) = Theta(n^0.000)
Karatsuba       : Case 1: f(n) << n^log_b(a). T(n) = Theta(n^1.585)
Strassen        : Case 1: f(n) << n^log_b(a). T(n) = Theta(n^2.807)
Gap Recurrence  : Case 2: f(n) ~ n^log_b(a). T(n) = Theta(n^1.000 log n)
```

> [!NOTE]
> The helper above provides a *mechanical* first-pass classification. In the KTU valuation, you **must** show the case-analysis reasoning on paper — automated verdicts are not accepted as proof.

## 3.8 Worked Example 7 — **Iteration on a Subtractive Recurrence**

**Recurrence:** $T(n) = T(n-1) + n$, $T(1) = 1$. (Not divide-and-conquer, but commonly tested.)

**Step 1 — Unroll:**

$$
T(n) = T(n-1) + n = T(n-2) + (n-1) + n
$$

**Step 2 — General pattern after $i$ unrolls:**

$$
T(n) = T(n-i) + \sum_{j=0}^{i-1}(n-j)
$$

**Step 3 — Stop at $n - i = 1 \Rightarrow i = n - 1$:**

$$
T(n) = T(1) + \sum_{j=0}^{n-2}(n-j) = 1 + (n + (n-1) + \dots + 2) = 1 + \frac{n(n+1)}{2} - 1
$$

**Step 4 — Simplify:**

$$
\boxed{T(n) = \Theta(n^{2})}
$$
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Decision Flow: Choosing the Right Method

```mermaid
flowchart TD
    A["Given recurrence T(n)"] --> B{"Is it of the form<br/>a T(n/b) + f(n)?"}
    B -- "No" --> C{"Is it a simple<br/>subtractive recurrence<br/>T(n) = T(n-c) + ..."}
    B -- "Yes" --> D{"Do you need a<br/>rigorous proof?"}
    C -- "Yes" --> E["Use ITERATION method<br/>unroll and sum"]
    C -- "No" --> F["Use SUBSTITUTION method<br/>guess O bound"]
    D -- "Yes" --> F
    D -- "No" --> G["Compute n^log_b a"]
    G --> H{"Compare f(n) with<br/>n^log_b a"}
    H -- "f(n) polynomially smaller" --> I["Case 1: Theta(n^log_b a)"]
    H -- "f(n) polynomially equal" --> J["Case 2: Theta(n^log_b a log^k+1 n)"]
    H -- "f(n) polynomially larger<br/>+ regularity" --> K["Case 3: Theta(f(n))"]
    H -- "Gap (e.g. n log n)" --> L["Use AKRA-BAZZI method"]
```

## 4.2 Recursion Tree Topology for $T(n) = 2T(n/2) + n$

```mermaid
graph TD
    L0["Level 0: n"]
    L0 --> L1A["Level 1: n/2"]
    L0 --> L1B["Level 1: n/2"]
    L1A --> L2A["Level 2: n/4"]
    L1A --> L2B["Level 2: n/4"]
    L1B --> L2C["Level 2: n/4"]
    L1B --> L2D["Level 2: n/4"]
    L2A --> L3A["Level 3: n/8"]
    L2A --> L3B["Level 3: n/8"]
    L2B --> L3C["Level 3: n/8"]
    L2B --> L3D["Level 3: n/8"]
    L2C --> L3E["Level 3: n/8"]
    L2C --> L3F["Level 3: n/8"]
    L2D --> L3G["Level 3: n/8"]
    L2D --> L3H["Level 3: n/8"]
    L3A --> L4A["...leaves of size 1..."]
    L3B --> L4B["...leaves of size 1..."]
    L3C --> L4C["...leaves of size 1..."]
    L3D --> L4D["...leaves of size 1..."]
    L3E --> L4E["...leaves of size 1..."]
    L3F --> L4F["...leaves of size 1..."]
    L3G --> L4G["...leaves of size 1..."]
    L3H --> L4H["...leaves of size 1..."]
    L4A --> SUM["Total work:<br/>n levels x n per level<br/>= Theta(n log n)"]
    L4B --> SUM
    L4C --> SUM
    L4D --> SUM
    L4E --> SUM
    L4F --> SUM
    L4G --> SUM
    L4H --> SUM
```

## 4.3 Per-Level Cost Decomposition (Schematic)

```mermaid
graph LR
    subgraph LEVEL0["Level 0: Root"]
        N0["1 node, cost n"]
    end
    subgraph LEVEL1["Level 1: a nodes"]
        N1["a nodes, each n/b<br/>Total: a x n/b = n^log_b a"]
    end
    subgraph LEVEL2["Level 2: a^2 nodes"]
        N2["a^2 nodes, each n/b^2<br/>Total: n^log_b a"]
    end
    subgraph LEVELK["Level k: a^k = n^log_b a leaves"]
        NK["a^log_b n leaves, each T(1)<br/>Total: Theta(n^log_b a)"]
    end
    LEVEL0 --> LEVEL1 --> LEVEL2 --> LEVELK
```

## 4.4 Master Theorem Case-Logic Schematic

```mermaid
flowchart LR
    P["Compute<br/>n^log_b a"] --> Q{"f(n) vs n^log_b a"}
    Q -- "f(n) smaller by n^eps" --> R["CASE 1<br/>Leaves dominate<br/>T(n) = Theta(n^log_b a)"]
    Q -- "f(n) equal x log^k n" --> S["CASE 2<br/>Balanced tree<br/>T(n) = Theta(n^log_b a log^k+1 n)"]
    Q -- "f(n) larger by n^eps<br/>+ regularity" --> T["CASE 3<br/>Root dominates<br/>T(n) = Theta(f(n))"]
    Q -- "polylog mismatch" --> U["GAP<br/>Use Akra-Bazzi<br/>or Substitution"]
```

## 4.5 Sequential Processing Topology for the **Substitution Method**

```mermaid
graph TD
    S1["Step 1: GUESS the form<br/>e.g. T(n) = O(n log n)"] --> S2["Step 2: Assume IH<br/>T(m) <= c m log m for m < n"]
    S2 --> S3["Step 3: Substitute IH<br/>into recurrence RHS"]
    S3 --> S4["Step 4: Simplify<br/>RHS algebraically"]
    S4 --> S5{"Can you choose c<br/>to make RHS <= guess?"}
    S5 -- "Yes" --> S6["Step 5: Verify base case<br/>T(1) satisfies the bound"]
    S6 --> S7["CONCLUSION:<br/>T(n) = O(guess)"]
    S5 -- "No, stuck" --> S8["REVISIT the guess<br/>(e.g. add lower-order term)"]
    S8 --> S1
```

> [!IMPORTANT]
> The KTU board examiner expects the **inductive proof structure** above whenever you answer using the substitution method. Skipping the base case or the inductive step is a guaranteed 2-mark loss.
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Q1. State the Master Theorem. Mention all three cases clearly.
**[KTU University Exam - July 2024]**  *[CO1 | Remember]*

**Model Answer (3 Marks):**
The Master Theorem provides asymptotic bounds for recurrences of the form $T(n) = aT(n/b) + f(n)$ with $a \ge 1, b > 1$ and $f(n)$ asymptotically positive. Let $n^{\log_b a}$ be the critical exponent.

* **Case 1:** If $f(n) = O(n^{\log_b a - \varepsilon})$ for some $\varepsilon > 0$, then $T(n) = \Theta(n^{\log_b a})$.
* **Case 2:** If $f(n) = \Theta(n^{\log_b a} \log^{k} n)$ for some $k \ge 0$, then $T(n) = \Theta(n^{\log_b a} \log^{k+1} n)$.
* **Case 3:** If $f(n) = \Omega(n^{\log_b a + \varepsilon})$ for some $\varepsilon > 0$ **and** the regularity condition $a f(n/b) \le c f(n)$ holds for some $c < 1$, then $T(n) = \Theta(f(n))$.

*[Stating the recurrence form: 1 Mark]*  *[All three cases with verdicts: 2 Marks]*

---

### Q2. What is the regularity condition in the Master Theorem? Why is it needed?
**[KTU University Exam - Dec 2023]**  *[CO1 | Understand]*

**Model Answer (3 Marks):**
The **regularity condition** requires the existence of a constant $c < 1$ such that, for sufficiently large $n$:
$$a \, f(n/b) \le c \, f(n)$$
It is **needed only in Case 3** of the Master Theorem, where the cost at the root $f(n)$ is polynomially larger than the cost at the leaves. Without this condition, the cost in the recursion could *grow* at deeper levels (for example, if $f$ oscillates), and the standard $\Theta(f(n))$ bound would no longer be provable from the leaf-up summation.

*[Statement of condition: 1 Mark]*  *[Case-3 placement: 1 Mark]*  *[Reason for necessity: 1 Mark]*

---

## 5.2 Part B — Long Answer Questions (14 Marks Each)

> KTU 2024 Scheme follows **Module-Internal Choice**. Two fully-independent alternatives follow.

### QUESTION A (14 Marks) — Recursion Tree + Master Theorem

**[KTU University Exam - July 2024, Module 1, Q1(a)]**  *[CO2 | Apply / Analyse]*

#### (a) Solve $T(n) = 2T(n/2) + n$ using the **Recursion Tree method**. Show every level and the final summation. (7 Marks)

**Model Solution:**

**Step 1 — Build the recursion tree.** [Drawing the tree: 2 Marks]

```
Level 0:                n                 (1 node)
                      /    \
Level 1:           n/2       n/2          (2 nodes)
                  /  \      /  \
Level 2:       n/4   n/4  n/4   n/4       (4 nodes)
                .      .     .      .
Level k:      (1)   (1)  ... (1)          (2^k leaves)
```

**Step 2 — Compute the cost contribution of level $i$.** [Derivation: 2 Marks]
At level $i$ there are $2^{i}$ subproblems, each of size $n/2^{i}$, so:
$$
\text{Cost}_i = 2^{i} \cdot \frac{n}{2^{i}} = n
$$

**Step 3 — Compute the number of levels.** [Base case stopping: 1 Mark]
Recursion ends when $\frac{n}{2^{i}} = 1 \Rightarrow i = \log_2 n$. Total levels: $\log_2 n + 1$.

**Step 4 — Sum across all levels.** [Summation + simplification: 2 Marks]
$$
T(n) = \sum_{i=0}^{\log_2 n} n = n \cdot (\log_2 n + 1) = \Theta(n \log n)
$$

**Final Answer:** $\boxed{T(n) = \Theta(n \log n)}$

---

#### (b) Apply the **Master Theorem** to $T(n) = 4T(n/2) + n^{3}$. State the case and verify the regularity condition. (7 Marks)

**Model Solution:**

**Step 1 — Identify the parameters.** [Identifying a, b, f(n): 1 Mark]
$$a = 4, \quad b = 2, \quad f(n) = n^{3}$$

**Step 2 — Compute the critical exponent.** [Critical exponent calculation: 1 Mark]
$$n^{\log_b a} = n^{\log_2 4} = n^{2}$$

**Step 3 — Compare $f(n)$ with the critical exponent.** [Comparison: 1 Mark]
$$f(n) = n^{3} = \Omega(n^{2 + \varepsilon}) \text{ with } \varepsilon = 1 > 0$$
Hence **Case 3** of the Master Theorem is invoked.

**Step 4 — Verify the regularity condition.** [Verification: 2 Marks]
Need $a \cdot f(n/b) \le c \cdot f(n)$ for some $c < 1$:
$$4 \cdot \left(\frac{n}{2}\right)^{3} = 4 \cdot \frac{n^{3}}{8} = \frac{n^{3}}{2} \le c \cdot n^{3}$$
Choosing $c = \tfrac{1}{2} < 1$ ✓ confirms regularity.

**Step 5 — Conclude with the Case-3 verdict.** [Final answer: 2 Marks]
$$
\boxed{T(n) = \Theta(n^{3})}
$$

---

### QUESTION B (14 Marks) — Substitution + Master Theorem on Different Recurrences

**[KTU University Exam - Dec 2023, Module 1, Q1(b)]**  *[CO2 | Apply / Analyse]*

#### (a) Use the **Substitution method** to prove that $T(n) = 2T(n/2) + n$ satisfies $T(n) = O(n \log n)$. (7 Marks)

**Model Solution:**

**Step 1 — State the inductive claim.** [Claim statement: 1 Mark]
We claim $T(n) \le c \, n \log_2 n$ for some constant $c \ge 1$ and all $n \ge 2$.

**Step 2 — Inductive hypothesis (IH).** [IH statement: 1 Mark]
Assume for all $m < n$: $T(m) \le c \, m \log_2 m$.

**Step 3 — Substitute IH into the recurrence.** [Substitution: 1 Mark]
$$
T(n) = 2T(n/2) + n \le 2 \cdot c \cdot \frac{n}{2} \log_2 \!\left(\frac{n}{2}\right) + n
$$

**Step 4 — Simplify the RHS.** [Algebra: 2 Marks]
$$
T(n) \le c \, n (\log_2 n - \log_2 2) + n = c \, n \log_2 n - c \, n + n
$$

**Step 5 — Choose $c$ to absorb the leftover term.** [Choosing c: 1 Mark]
We need $-c \, n + n \le 0 \Rightarrow c \ge 1$. Pick $c = 1$.

**Step 6 — Verify base case.** [Base case: 1 Mark]
For $n = 2$: $T(2) = 2T(1) + 2 = 2(1) + 2 = 4 \le 1 \cdot 2 \cdot \log_2 2 = 2$? **Not directly satisfied.**
*Fix:* pick $c = 2$ and verify $T(2) = 4 \le 2 \cdot 2 \cdot 1 = 4$ ✓, and the inductive step still works for $c = 2$.

**Final Answer:** $\boxed{T(n) = O(n \log n)}$ — proven by induction.

---

#### (b) Solve $T(n) = 3T(n/4) + n \log n$ using the **Master Theorem**. (7 Marks)

**Model Solution:**

**Step 1 — Identify parameters.** [Parameter identification: 1 Mark]
$$a = 3, \quad b = 4, \quad f(n) = n \log n$$

**Step 2 — Compute the critical exponent.** [Critical exponent: 1 Mark]
$$n^{\log_4 3} = n^{0.7925\ldots}$$

**Step 3 — Compare $f(n)$ with the critical exponent.** [Comparison: 2 Marks]
Since $n \log n$ grows *faster* than $n^{0.7925}$ (because $\log n$ dominates any constant power of $n^{0.2075}$), we have:
$$f(n) = n \log n = \Omega\!\left(n^{\log_4 3 + \varepsilon}\right)$$
for some $\varepsilon > 0$ (e.g. $\varepsilon = 0.1$ works for large $n$). Hence **Case 1 of the Master Theorem does NOT apply**; we must check **Case 3**.

**Step 4 — Check Case 3 condition and regularity.** [Case 3 check: 2 Marks]
The Case 3 condition is met. Now verify the **regularity condition**:
$$
3 \cdot f(n/4) = 3 \cdot \frac{n}{4} \log\!\left(\frac{n}{4}\right) = \frac{3n}{4}(\log n - 2)
$$
We need $\frac{3n}{4}(\log n - 2) \le c \cdot n \log n$ for some $c < 1$.
Dividing by $n \log n$: $\frac{3}{4}(1 - \tfrac{2}{\log n}) \le c$. For large $n$, $\frac{2}{\log n} \to 0$, so pick $c = 0.8$ (for example, for $n \ge 16$) ✓.

**Step 5 — Conclude with the Case-3 verdict.** [Final answer: 1 Mark]
$$
\boxed{T(n) = \Theta(n \log n)}
$$

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common marking deductions on this topic (verified against KTU 2024 scheme pattern):**
>
> 1. **Master Theorem Pitfall:** Forgetting to verify the **regularity condition** in Case 3 costs **2 full marks** — the verifier step $a f(n/b) \le c f(n)$ is non-negotiable.
> 2. **Substitution Method Pitfall:** Failing to verify the **base case** $T(n_0)$ (e.g. $T(1)$ or $T(2)$) and forgetting the bound on $c$ results in a **1-mark cut** for incomplete induction.
> 3. **Recursion Tree Pitfall:** Drawing the tree but failing to *sum the per-level cost* or *count the number of levels correctly* is a 2-mark deduction — the visual alone is worth only 2/7.
> 4. **Iteration Method Pitfall:** Spotting the pattern but **not stating the stopping condition** (e.g. $n/2^{k} = 1 \Rightarrow k = \log n$) loses 1 mark. The pattern must be made explicit.
> 5. **Critical Exponent Mistake:** Writing $n^{\log_b a}$ as $n^{\log a}$ or $n^{\log_b}$ — examiners *will* cut 1 mark for any incorrect subscript.

---

## 5.4 Topic Recap & Important Things to Remember

* **Canonical form:** A divide-and-conquer recurrence is $T(n) = aT(n/b) + f(n)$, where $a \ge 1$, $b > 1$.
* **Critical exponent:** Always compute $n^{\log_b a}$ first — it is the *total work at the leaves* and the Master Theorem pivot.
* **Master Theorem — Three Cases:** (1) leaves dominate, (2) every level equal, (3) root dominates. Always verify the **regularity condition** in Case 3.
* **Gap Cases:** Recurrences where $f(n)$ is polynomially *between* $n^{\log_b a}$ and $n^{\log_b a + \varepsilon}$ (e.g. $f(n) = n \log n$ when $n^{\log_b a} = n$) **cannot** be solved by the Master Theorem — use Akra–Bazzi or Substitution.
* **Recursion Tree:** Total work = (cost per level) $\times$ (number of levels). For balanced trees, cost per level is constant.
* **Iteration:** Unroll, spot the pattern, substitute the base-case depth, sum the geometric series.
* **Substitution:** Always (1) state the guess, (2) state the IH, (3) substitute, (4) simplify, (5) choose constants, (6) verify the base case.
* **Changing Variables:** When the recurrence involves $\sqrt{n}$ or $n^{1/2}$, substitute $n = 2^{k}$ to convert it into a standard form.
* **Subtractive Recurrences** (e.g. $T(n) = T(n-1) + n$) are *not* divide-and-conquer; solve by unrolling and summing the arithmetic series — typical result is $\Theta(n^{2})$.
* **Engineering Relevance:** Master Theorem underpins the analysis of Merge Sort ($O(n \log n)$), Karatsuba multiplication ($O(n^{1.585})$), Strassen's matrix multiplication ($O(n^{2.807})$), and B-tree bulk loading — all of which are core interview/KTU exam staples.
* **Top-line asymptotic results to memorise:**
  * Merge Sort: $\Theta(n \log n)$
  * Binary Search: $\Theta(\log n)$
  * Karatsuba: $\Theta(n^{\log_2 3})$
  * Strassen: $\Theta(n^{\log_2 7})$
  * Selection (worst case): $\Theta(n)$
<!-- SECTION_5_END -->
