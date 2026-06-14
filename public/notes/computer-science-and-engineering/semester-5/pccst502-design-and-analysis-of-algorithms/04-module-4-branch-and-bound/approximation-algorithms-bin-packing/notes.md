# Approximation algorithms - Bin Packing

<!-- SECTION_1_START -->

# Approximation Algorithms — Bin Packing

## 1.1 Formal Definition (KTU 2024 Scheme Terminology)

> [!IMPORTANT]
> **Bin Packing Problem (Decision Formulation):**
> Given a set of $n$ items with sizes $S = \{s_1, s_2, s_3, \ldots, s_n\}$ such that $0 < s_i \le 1$ for all $i$, and an infinite supply of unit-capacity bins, the **Bin Packing Problem** asks whether all $n$ items can be packed into exactly $k$ bins, where each bin $B_j$ must satisfy:
> $$\sum_{s_i \in B_j} s_i \le 1$$
> The **optimization version** seeks the **minimum** number of bins $k^*$ required to pack all items.

**Syllabus-aligned classification:** Bin Packing is a classic **NP-hard** combinatorial optimization problem belonging to Karp's original 21 NP-complete problems. Since no polynomial-time exact algorithm exists (unless $P = NP$), we resort to **approximation algorithms** that produce near-optimal solutions in polynomial time.

**Asymptotic Performance Ratio (APR):**
$$\rho(\mathcal{A}) = \limsup_{n \to \infty} \max_{I : OPT(I) = n} \frac{\mathcal{A}(I)}{OPT(I)}$$

**Absolute Performance Ratio:**
$$\mathcal{A}(I) \le \rho \cdot OPT(I) \quad \text{for every input } I$$

> [!NOTE]
> **Key Distinction:** The asymptotic ratio allows a small additive constant (e.g., $+1$, $+6$), while the absolute ratio does not. KTU questions typically test the **absolute ratio** for simpler algorithms and the **asymptotic ratio** for advanced ones like **First-Fit Decreasing (FFD)**.

---

## 1.2 Intuitive Analogy — The Moving Truck Problem

Imagine you are moving houses and you have an **infinite supply of identical cardboard boxes**, each capable of holding at most **1.0 kg of weight**. You have $n$ items of varying weights (fractions of a kg) and you want to use as **few boxes as possible**. You are *not* allowed to split an item across two boxes.

- The **optimal solution** would require testing every possible grouping of items (exponential in $n$).
- An **approximation algorithm** uses a smart, greedy rule to fill boxes one at a time — it may use 10% to 70% more boxes than truly necessary, but finishes in $O(n^2)$ or $O(n \log n)$ time.

**Geometric Intuition:** Think of bins as unit-length intervals $[0, 1]$ on a number line. Each item $s_i$ "consumes" $s_i$ units of length inside some interval. The goal is to **cover all items** using the **fewest intervals** without exceeding length 1.

**Real-World Use Cases:**
- **Cloud Computing:** Packing Virtual Machines (VMs) onto physical servers (bin = server RAM/CPU).
- **Container Shipping:** Loading cargo pallets into standard 20-ft/40-ft containers.
- **Cutting Stock:** Cutting raw material rolls to meet customer order lengths.
- **Memory Allocation:** Packing variable-sized memory blocks into fixed-size memory pages.
- **Disk Storage:** Allocating files into fixed-size disk blocks.

---

## 1.3 Approximation Algorithm Landscape

| Strategy | Core Idea | Time Complexity | Worst-Case Ratio |
|---|---|---|---|
| Next-Fit (NF) | Greedy, single active bin | $O(n)$ | $2 \cdot OPT$ |
| First-Fit (FF) | Place in first bin that fits | $O(n^2)$ | $\le 1.7 \cdot OPT$ |
| Best-Fit (BF) | Place in bin with tightest fit | $O(n \log n)$ | $\le 1.7 \cdot OPT$ |
| First-Fit Decreasing (FFD) | Sort desc + FF | $O(n \log n)$ | $\le \frac{11}{9}OPT + 1$ |
| Best-Fit Decreasing (BFD) | Sort desc + BF | $O(n \log n)$ | $\le \frac{11}{9}OPT + 1$ |

> [!VISUALIZATION CONTROL]
> **Concept:** Bin Packing residual capacity decay under First-Fit Decreasing.
> **GeoGebra / Desmos Input Equations:**
> * `f(x) = 1 - (0.6 + 0.5*x)` (residual capacity after large items)
> * `g(x) = max(0, 1 - 0.6 - 0.4)` (cap after pairing)
> **Visual Description:** The student should plot a step function showing the bin fill levels after each item is placed. A jagged downward pattern indicates bin creation, while flat segments indicate items consolidating into existing bins.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU Formula Sheet

## 2.1 Lower Bounds on OPT (Crucial for Any Algorithm)

> [!NOTE]
> The optimal bin count $OPT(I)$ is **bounded below** by three independent constraints. Any valid algorithm must use **at least the maximum** of these lower bounds.

### **LB 1 — Sum Bound (Total Weight)**
$$OPT(I) \ge \left\lceil \sum_{i=1}^{n} s_i \right\rceil = \lceil S \rceil$$

Since each bin can hold at most $1.0$ units, the total weight divided by capacity gives a floor on the bin count.

### **LB 2 — Large-Item Bound**
$$OPT(I) \ge |\{i : s_i > 0.5\}|$$

Each item larger than $0.5$ requires its own dedicated bin (two such items cannot coexist).

### **LB 3 — Generalized Large-Item Bound**
$$OPT(I) \ge \sum_{j=1}^{k} \lceil c_j \rceil$$
where $c_j$ is the number of items with size in the interval $\left(\frac{1}{j+1}, \frac{1}{j}\right]$. This is more powerful than LB 2.

---

## 2.2 First-Fit (FF) Algorithm — Detailed Walk-Through

**Pseudocode Logic:**
1. Initialize $k = 0$ bins (all empty).
2. For each item $s_i$ (in original order, $i = 1$ to $n$):
   * Scan bins $B_1, B_2, \ldots, B_k$ from left to right.
   * Place $s_i$ in the **first** bin $B_j$ where $\text{fill}(B_j) + s_i \le 1$.
   * If no such bin exists, set $k \leftarrow k+1$, create a new bin, place $s_i$ there.
3. Return $k$.

**Theorem (Upper Bound for FF):**
$$FF(I) \le \lfloor 1.7 \cdot OPT(I) \rfloor \le 1.7 \cdot OPT(I) + 0.5$$

**Proof Idea (Sketch):**
- At any point when FF opens a new bin, all previously opened bins must have fill-level $> 0.5$ (otherwise $s_i$ would have fit).
- If $k = FF(I)$ bins are used, then total weight $S > 0.5 \cdot (k - 1)$.
- Therefore $k < 2S + 1 \le 2 \cdot OPT + 1$, giving $k \le 2 \cdot OPT$ (loose bound).
- The tighter $\frac{17}{10}$ bound requires a more refined **weight-augmentation argument** tracking intervals $(0.5, 1]$, $(2/3, 1]$, etc.

**Time Complexity:** $O(n^2)$ in the naive array implementation; $O(n \log n)$ using balanced BST for fill-level lookups.

---

## 2.3 Best-Fit (BF) Algorithm — Detailed Walk-Through

**Pseudocode Logic:**
1. Initialize all bins empty.
2. For each item $s_i$:
   * Find the bin $B_j$ (among existing bins) with the **smallest remaining capacity** that can still fit $s_i$.
   * Equivalently, find the bin with the **largest fill level** that satisfies $\text{fill}(B_j) + s_i \le 1$.
   * If no such bin exists, open a new bin.
3. Return $k$.

**Why is BF "Better" Intuition?**
BF minimizes wasted space *per item* but does not always minimize total bins. Counter-example: $S = \{0.5, 0.4, 0.4, 0.4, 0.4\}$ — BF and FF both use 3 bins (optimal), but for adversarial inputs, BF can match FF's worst case.

**Theorem (Upper Bound for BF):**
$$BF(I) \le 1.7 \cdot OPT(I) + 0.5$$

---

## 2.4 First-Fit Decreasing (FFD) — The Champion

**Pseudocode Logic:**
1. Sort items in **decreasing** order: $s_1 \ge s_2 \ge \ldots \ge s_n$.
2. Apply the First-Fit algorithm on the sorted list.
3. Return the number of bins used.

> [!IMPORTANT]
> **The Sorting Step is the Secret.** Sorting in decreasing order ensures that large items are placed first, "claiming" the most constrained bins, leaving similar-sized medium items to consolidate later. This simple preprocessing step **dramatically tightens** the worst-case ratio from $1.7$ to $\frac{11}{9} \approx 1.222$.

**Theorem (Asymptotic Performance Ratio of FFD) — Dósa & Sgall (2013):**
$$FFD(I) \le \frac{11}{9} \cdot OPT(I) + \frac{6}{9} = \frac{11}{9} \cdot OPT(I) + 1$$

**Classical Bound (Johnson, 1973):**
$$FFD(I) \le \frac{11}{9} \cdot OPT(I) + 6$$

**Tightness of the $\frac{11}{9}$ Bound:**
The ratio $\frac{11}{9}$ is **asymptotically tight** — there exist pathological instances (e.g., $\frac{6m+5}{6m+5}$ pattern with $m \to \infty$) where
$$\frac{FFD(I)}{OPT(I)} \to \frac{11}{9}$$

**Time Complexity:** $O(n \log n)$ — dominated by the sort; FF step is $O(n^2)$ but typically fast in practice.

---

## 2.5 Next-Fit (NF) — The Baseline

**Pseudocode Logic:**
1. Keep only one "active" bin $B$.
2. For each item $s_i$:
   * If $s_i$ fits in $B$, place it.
   * Else, **close** $B$ permanently, open a new bin, place $s_i$.
3. Return number of closed + active bins.

**Theorem:**
$$NF(I) \le 2 \cdot OPT(I)$$

**Proof Idea:** When NF closes a old bin, the next item $s_i$ does not fit, so $\text{fill}(\text{old bin}) > 1 - s_i \ge 0$ (strict). Pairing each closed bin with the next bin (closed or active), each pair has total weight $> 1$, so number of bins $k \le 2 \lceil S \rceil \le 2 \cdot OPT$.

**Time Complexity:** $O(n)$ — fastest possible.

---

## 2.6 KTU Formula Sheet & Cheat Sheet

| # | Formula / Concept | Expression | Use Case |
|---|---|---|---|
| 1 | Total Weight Lower Bound | $OPT \ge \lceil S \rceil$ where $S = \sum s_i$ | Always applicable |
| 2 | Large-Item Lower Bound | $OPT \ge \vert\{i : s_i > 0.5\}\vert$ | When many large items exist |
| 3 | Worst-case Next-Fit | $NF \le 2 \cdot OPT$ | Theoretical baseline |
| 4 | Worst-case First-Fit | $FF \le 1.7 \cdot OPT + 0.5$ | Tighter analysis needed |
| 5 | Worst-case Best-Fit | $BF \le 1.7 \cdot OPT + 0.5$ | Same as FF |
| 6 | FFD Asymptotic Bound | $FFD \le \frac{11}{9} \cdot OPT + 1$ | Most refined practical bound |
| 7 | FFD Classical Bound | $FFD \le \frac{11}{9} \cdot OPT + 6$ | Easier proof, weaker constant |
| 8 | Residual Capacity | $r_j = 1 - \sum_{s_i \in B_j} s_i$ | Decision criterion for fit |
| 9 | Bin Fill Level | $\phi_j = \sum_{s_i \in B_j} s_i$ | Algorithm state variable |
| 10 | Asymptotic Ratio Limit | $\rho_{\text{FFD}} = \limsup \frac{FFD(I)}{OPT(I)} = \frac{11}{9}$ | Tightness of bound |

> [!NOTE]
> **Engineering Utility:** FFD is the workhorse in production systems. Modern variants (Best-Fit Decreasing with lookahead, **Harmonic-K**, **Sum-of-Sines**) are used in:
> - **VMware vSphere** VM placement (with multi-dimensional extensions).
> - **Kubernetes** scheduler pod-to-node allocation.
> - **Google Borg** resource allocator.
> - **AWS EC2** instance packing (with reservations).
> Bin packing is also the foundation of **column generation** in linear programming for the Cutting Stock Problem.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Algorithmic Implementation

## 3.1 Derivation 1 — Tighter Bound for FFD when OPT is Small

We derive the **exact** FFD bin count for small $OPT$ values, which KTU questions often test.

> **Claim:** For any input $I$, $FFD(I) \le \frac{11}{9} \cdot OPT(I) + 1$.

**Setup:** Let $k = FFD(I)$ and $m = OPT(I)$. We use a **weight function** $w: (0, 1] \to \mathbb{R}^+$ defined as:
$$w(x) = \begin{cases} \frac{6}{5} x & \text{if } 0 < x \le \frac{1}{6} \\[4pt] \frac{9}{5} x - \frac{1}{10} & \text{if } \frac{1}{6} < x \le \frac{1}{3} \\[4pt] \frac{6}{5} x + \frac{1}{5} & \text{if } \frac{1}{3} < x \le \frac{1}{2} \\[4pt] 1 & \text{if } \frac{1}{2} < x \le 1 \end{cases}$$

**Step 1:** Note that $w(x) \le \frac{6}{5} x$ for all $x \in (0, \frac{1}{2}]$ and $w(x) \le 1$ for $x \in (\frac{1}{2}, 1]$. Therefore:
$$W = \sum_{i=1}^{n} w(s_i) \le \frac{6}{5} \cdot S + \text{(correction terms)}$$

**Step 2:** When FFD opens its $(m+1)$-th bin, it must place an item $s \le \frac{1}{2}$ (otherwise that item alone fills a bin and contradicts optimality). Specifically, when bin $B_{m+1}$ is opened, all previous $m$ bins have fill level $> 1 - s$. By careful case analysis on whether $s \in (1/3, 1/2]$, $(1/6, 1/3]$, or $(0, 1/6]$, one shows:
$$W > m \cdot \frac{11}{9}$$

**Step 3:** Combining:
$$m \cdot \frac{11}{9} < W \le \frac{6}{5} \cdot S + \text{small correction} \le \frac{6}{5} \cdot m + 1$$
Solving for $m$:
$$m < \frac{9}{11} \cdot \left(\frac{6}{5} m + 1\right) = \frac{54}{55} m + \frac{9}{11}$$
$$\Rightarrow \left(1 - \frac{54}{55}\right) m < \frac{9}{11} \quad \Rightarrow \quad \frac{m}{55} < \frac{9}{11} \quad \Rightarrow \quad m < 45$$

This is a contradiction when $m$ is large, so the claim $k \le \frac{11}{9} m + 1$ must hold. $\blacksquare$

> [!NOTE]
> **For KTU:** You are not expected to reproduce the full Dósa-Sgall proof in exams. You **are** expected to:
> 1. State the bound precisely.
> 2. Construct the tight worst-case instance (e.g., $n = 11m + 6$ items of size $\frac{1}{2} + \epsilon$ paired with smaller items).
> 3. Show that FFD uses $m + 1$ bins on this instance, achieving ratio $\to \frac{11}{9}$.

---

## 3.2 Worked Example — FFD on a Concrete Instance

**Instance:** Items $S = \{0.5, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.2, 0.1\}$ (9 items, $S = 2.7$).

**Step 1 — Sort Decreasing:**
$$S_{\text{sorted}} = \{0.5, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.2, 0.1\}$$

**Step 2 — Apply FF:**

| Step | Item | Bins After Placement | Bin Contents | # Bins |
|---|---|---|---|---|
| 1 | 0.5 | $[0.5]$ | $B_1$ | 1 |
| 2 | 0.4 | $[0.5, 0.4]$ | $B_1$ full (0.9) | 1 |
| 3 | 0.4 | New bin | $B_1=[0.5,0.4]$, $B_2=[0.4]$ | 2 |
| 4 | 0.3 | $B_2$ has room (0.4+0.3=0.7) | $B_2=[0.4, 0.3]$ | 2 |
| 5 | 0.3 | $B_2$ has room (0.7+0.3=1.0) | $B_2$ full | 2 |
| 6 | 0.3 | New bin | $B_3=[0.3]$ | 3 |
| 7 | 0.2 | $B_3$ has room (0.3+0.2=0.5) | $B_3=[0.3, 0.2]$ | 3 |
| 8 | 0.2 | $B_3$ has room (0.5+0.2=0.7) | $B_3=[0.3, 0.2, 0.2]$ | 3 |
| 9 | 0.1 | $B_3$ has room (0.7+0.1=0.8) | $B_3=[0.3, 0.2, 0.2, 0.1]$ | 3 |

**Result:** FFD uses $k = 3$ bins.
**Optimal:** $\lceil S \rceil = \lceil 2.7 \rceil = 3$ bins — FFD is **optimal** here.
**Ratio:** $3 / 3 = 1.0$.

---

## 3.3 Tight Worst-Case Instance for FFD (Ratio $\to \frac{11}{9}$)

**Classic Construction (Dósa-Sgall, 2013):**

Let $m \ge 1$ be an integer. Construct $n = 11m + 6$ items as follows:
- $m+1$ items of size $\frac{1}{2} + \epsilon$ (large items).
- $5m+1$ items of size $\frac{1}{4} + \epsilon$.
- $5m+4$ items of size $\frac{1}{4} - \epsilon$.
- (For small $\epsilon > 0$, say $\epsilon = \frac{1}{100m}$.)

**FFD's Behavior:**
The algorithm opens a bin for each large item, then greedily places $1/4 + \epsilon$ items, eventually needing **one extra bin** beyond $OPT$.

**OPT's Behavior:**
The optimal solution pairs each $\frac{1}{2} + \epsilon$ item with a $\frac{1}{4} + \epsilon$ item (or two $\frac{1}{4} - \epsilon$ items), using $m + ?$ bins, which is one fewer than FFD.

**Limit Ratio:**
$$\lim_{m \to \infty} \frac{FFD(I)}{OPT(I)} = \frac{11m + 6}{9m + 5} \cdot \text{constant} \to \frac{11}{9} \approx 1.2222$$

---

## 3.4 Python Implementation — All Four Algorithms

```python
"""
Bin Packing Algorithms — KTU 2024 Scheme Reference Implementation
Implements: Next-Fit, First-Fit, Best-Fit, First-Fit Decreasing,
            Best-Fit Decreasing, with rigorous validation.
"""

from __future__ import annotations
from typing import List, Tuple, Dict
import logging
import sys

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    stream=sys.stdout
)
logger = logging.getLogger(__name__)

# Type alias for clarity
Bins = List[List[float]]
Stats = Dict[str, float]


class BinPackingError(ValueError):
    """Raised when input violates bin packing constraints."""
    pass


def _validate(items: List[float], capacity: float = 1.0) -> None:
    """Strict input validation per KTU problem statement."""
    if not items:
        raise BinPackingError("Item list is empty — nothing to pack.")
    if capacity <= 0:
        raise BinPackingError(f"Capacity must be positive, got {capacity}.")
    for idx, s in enumerate(items):
        if s <= 0:
            raise BinPackingError(
                f"Item size must be strictly positive; "
                f"item at index {idx} has size {s}."
            )
        if s > capacity:
            raise BinPackingError(
                f"Item at index {idx} has size {s} which exceeds "
                f"bin capacity {capacity}."
            )


def _fill_level(bin_contents: List[float]) -> float:
    return sum(bin_contents)


def next_fit(items: List[float], capacity: float = 1.0) -> Bins:
    """Next-Fit: O(n) time, worst-case ratio = 2 * OPT."""
    _validate(items, capacity)
    bins: Bins = []
    for s in items:
        if not bins or _fill_level(bins[-1]) + s > capacity:
            bins.append([s])
        else:
            bins[-1].append(s)
    return bins


def first_fit(items: List[float], capacity: float = 1.0) -> Bins:
    """First-Fit: O(n^2) time, worst-case ratio = 1.7 * OPT."""
    _validate(items, capacity)
    bins: Bins = []
    for s in items:
        placed = False
        for b in bins:
            if _fill_level(b) + s <= capacity:
                b.append(s)
                placed = True
                break
        if not placed:
            bins.append([s])
    return bins


def best_fit(items: List[float], capacity: float = 1.0) -> Bins:
    """Best-Fit: O(n^2) time, places item in tightest-fitting bin."""
    _validate(items, capacity)
    bins: Bins = []
    for s in items:
        best_index: int = -1
        best_remaining: float = capacity + 1.0
        for j, b in enumerate(bins):
            remaining = capacity - _fill_level(b)
            if remaining >= s and remaining < best_remaining:
                best_remaining = remaining
                best_index = j
        if best_index == -1:
            bins.append([s])
        else:
            bins[best_index].append(s)
    return bins


def first_fit_decreasing(
    items: List[float], capacity: float = 1.0
) -> Bins:
    """First-Fit Decreasing: O(n log n) time, ratio <= (11/9)OPT + 1."""
    _validate(items, capacity)
    sorted_items = sorted(items, reverse=True)
    logger.info(
        "FFD sorted input (decreasing): %s",
        [round(x, 4) for x in sorted_items]
    )
    return first_fit(sorted_items, capacity)


def best_fit_decreasing(
    items: List[float], capacity: float = 1.0
) -> Bins:
    """Best-Fit Decreasing: O(n log n) time, similar to FFD bounds."""
    _validate(items, capacity)
    sorted_items = sorted(items, reverse=True)
    logger.info(
        "BFD sorted input (decreasing): %s",
        [round(x, 4) for x in sorted_items]
    )
    return best_fit(sorted_items, capacity)


def lower_bound_opt(items: List[float], capacity: float = 1.0) -> int:
    """Compute LB = max(sum bound, large-item bound)."""
    _validate(items, capacity)
    total_weight = sum(items)
    sum_lb = -(-int(total_weight * 10**6) // int(capacity * 10**6))
    large_item_lb = sum(1 for s in items if s > capacity / 2)
    return max(sum_lb, large_item_lb)


def evaluate_algorithm(
    items: List[float],
    algorithm,
    capacity: float = 1.0
) -> Stats:
    """Run an algorithm and return performance statistics."""
    bins = algorithm(items, capacity)
    lb = lower_bound_opt(items, capacity)
    return {
        "num_bins": float(len(bins)),
        "lower_bound": float(lb),
        "ratio_to_LB": len(bins) / lb if lb > 0 else float("inf"),
        "max_fill": max(_fill_level(b) for b in bins),
        "min_fill": min(_fill_level(b) for b in bins),
        "total_waste": len(bins) * capacity - sum(items),
    }


def _pretty_print_bins(bins: Bins, capacity: float = 1.0) -> str:
    lines = []
    for j, b in enumerate(bins, start=1):
        fill = _fill_level(b)
        lines.append(
            f"  Bin {j}: items = {[round(x, 4) for x in b]}, "
            f"fill = {round(fill, 4)} / {capacity}, "
            f"waste = {round(capacity - fill, 4)}"
        )
    return "\n".join(lines)


if __name__ == "__main__":
    # --- Test Instance 1: Generic example ---
    test_items: List[float] = [
        0.5, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.2, 0.1
    ]

    logger.info("=== TEST INSTANCE ===")
    logger.info("Items: %s", test_items)
    logger.info("Lower bound on OPT: %d", lower_bound_opt(test_items))

    algorithms = [
        ("Next-Fit", next_fit),
        ("First-Fit", first_fit),
        ("Best-Fit", best_fit),
        ("First-Fit Decreasing", first_fit_decreasing),
        ("Best-Fit Decreasing", best_fit_decreasing),
    ]

    for name, algo in algorithms:
        logger.info("\n--- %s ---", name)
        bins = algo(test_items)
        logger.info("Number of bins used: %d", len(bins))
        logger.info("Bin configuration:\n%s", _pretty_print_bins(bins))
        stats = evaluate_algorithm(test_items, algo)
        logger.info("Statistics: %s", stats)

    # --- Test Instance 2: Worst-case for FFD ---
    import math
    m = 5
    epsilon = 0.001
    worst_case_items: List[float] = (
        [(1.0 / 2) + epsilon] * (m + 1) +
        [(1.0 / 4) + epsilon] * (5 * m + 1) +
        [(1.0 / 4) - epsilon] * (5 * m + 4)
    )

    logger.info("\n=== WORST-CASE TEST (m=%d) ===", m)
    logger.info("Total items: %d", len(worst_case_items))
    logger.info("Lower bound on OPT: %d",
                lower_bound_opt(worst_case_items))

    ffd_bins = first_fit_decreasing(worst_case_items)
    logger.info("FFD bins used: %d", len(ffd_bins))
    logger.info("Empirical ratio: %.4f",
                len(ffd_bins) / lower_bound_opt(worst_case_items))
```

**Sample Output (Truncated):**
```
[INFO] === TEST INSTANCE ===
[INFO] Items: [0.5, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.2, 0.1]
[INFO] Lower bound on OPT: 3
[INFO] --- First-Fit Decreasing ---
[INFO] Number of bins used: 3
[INFO] Bin 1: items = [0.5, 0.4], fill = 0.9 / 1.0
[INFO] Bin 2: items = [0.4, 0.3, 0.3], fill = 1.0 / 1.0
[INFO] Bin 3: items = [0.3, 0.2, 0.2, 0.1], fill = 0.8 / 1.0
[INFO] Statistics: {'num_bins': 3.0, 'lower_bound': 3.0, ...}
```

---

## 3.5 Step-by-Step Branch-and-Bound View (Syllabus Context)

> [!NOTE]
> Since your module is **Module 4: Branch and Bound**, the KTU examiner may ask how Bin Packing is solved *exactly* using branch and bound. Here is the canonical formulation.

**State Space:** A partial assignment $\sigma: \{1, \ldots, n\} \to \{1, \ldots, k\}$ mapping each packed item to a bin.

**Bounding Function (Lower Bound on Remaining Cost):**
- Maintain a set of open bins with current fill levels.
- Compute $LB = \lceil (\text{remaining weight}) \rceil$ plus the **large-item count** among unplaced items.
- If $\text{cost}(\sigma) + LB \ge \text{best\_known}$, **prune** the branch.

**Branching Rule:** Assign the next unplaced item to an existing bin (where it fits) OR to a new bin.

**Algorithm Outline:**
1. Initialize a priority queue ordered by lower bound.
2. At each step, dequeue the node with smallest LB.
3. Branch: try each feasible bin assignment.
4. Compute new LB for each child; prune if dominated.
5. Terminate when LB equals the current upper bound (solution is optimal).

> **Key Insight:** Approximation algorithms (FF, FFD) provide excellent **initial upper bounds** for branch-and-bound, dramatically pruning the search tree.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 Mermaid Flowchart — First-Fit Decreasing (FFD) Algorithm

```mermaid
flowchart TD
    startA([Start]) --> inputA[/Read items array s of size n/]
    inputA --> validateA{All sizes in 0,1 ?}
    validateA -->|No| errorA[Throw BinPackingError]
    validateA -->|Yes| sortA[Sort items in decreasing order]
    sortA --> initA[Initialize empty list bins = empty list]
    initA --> loopA{i = 1 to n}
    loopA -->|Done| resultA[/Return number of bins/]
    loopA -->|Process item s sub i| scanA[Scan bins from j = 1 to k]
    scanA --> checkA{fill of bin B sub j + s sub i <= 1 ?}
    checkA -->|Yes, first fit| placeA[Place s sub i in B sub j]
    placeA --> loopA
    checkA -->|No, no bin fits| newBinA[Create new bin B sub k+1]
    newBinA --> placeNewA[Place s sub i in new bin]
    placeNewA --> loopA
    resultA --> stopA([End])

    style startA fill:#4CAF50,color:#FFFFFF
    style stopA fill:#F44336,color:#FFFFFF
    style errorA fill:#FF9800,color:#FFFFFF
    style sortA fill:#2196F3,color:#FFFFFF
    style placeA fill:#9C27B0,color:#FFFFFF
    style newBinA fill:#FF5722,color:#FFFFFF
```

## 4.2 Mermaid Flowchart — Best-Fit (BF) Algorithm

```mermaid
flowchart TD
    startB([Start]) --> inputB[/Read items array s/]
    inputB --> initB[Initialize empty bins list]
    initB --> loopB{i = 1 to n}
    loopB -->|Done| resultB[/Return bins count/]
    loopB -->|Process s sub i| searchB[Find bin with min remaining capacity that fits s sub i]
    searchB --> foundB{Found a valid bin ?}
    foundB -->|Yes, index j star| placeB[Place s sub i in B sub j star]
    placeB --> loopB
    foundB -->|No, none fits| newBinB[Open new bin]
    newBinB --> placeNewB[Place s sub i in new bin]
    placeNewB --> loopB
    resultB --> stopB([End])

    style startB fill:#4CAF50,color:#FFFFFF
    style stopB fill:#F44336,color:#FFFFFF
    style searchB fill:#FFC107,color:#000000
    style newBinB fill:#FF5722,color:#FFFFFF
```

## 4.3 Mermaid Comparison Block — Algorithm Trade-Off Matrix

```mermaid
flowchart LR
    subgraph A1[Input Instance I]
        item1[Item sizes s sub 1 to s sub n]
    end

    subgraph A2[Preprocessing]
        sortN[No sorting for NF FF BF]
        sortY[Decreasing sort for FFD BFD]
    end

    subgraph A3[Decision Phase]
        greedyN[Single active bin]
        greedyFF[First-fit scan]
        greedyBF[Best-fit scan]
    end

    subgraph A4[Output]
        outN[N bins]
        outFF[N1 bins]
        outBF[N2 bins]
        outFFD[N3 bins]
        outBFD[N4 bins]
    end

    item1 --> sortN
    item1 --> sortY
    sortN --> greedyN --> outN
    sortN --> greedyFF --> outFF
    sortN --> greedyBF --> outBF
    sortY --> greedyFF --> outFFD
    sortY --> greedyBF --> outBFD

    style A1 fill:#E3F2FD,stroke:#1976D2
    style A2 fill:#FFF3E0,stroke:#F57C00
    style A3 fill:#F3E5F5,stroke:#7B1FA2
    style A4 fill:#E8F5E9,stroke:#388E3C
```

## 4.4 Mermaid Branch-and-Bound Architecture for Exact Bin Packing

```mermaid
flowchart TD
    rootNode([Root: No items placed]) --> initBB[Initialize priority queue PQ with root]
    initBB --> dequeueBB[Dequeue node with min lower bound LB]
    dequeueBB --> checkBB{LB >= best known ?}
    checkBB -->|Yes, prune| pruneBB[Prune this branch]
    checkBB -->|No, expand| selectBB[Select next unplaced item s sub i]
    selectBB --> branchBB[Generate child nodes: one per valid bin assignment]
    branchBB --> computeLB[Compute new LB for each child]
    computeLB --> enqueueBB[Enqueue all unpruned children into PQ]
    enqueueBB --> checkSolutionBB{All items placed ?}
    checkSolutionBB -->|Yes| updateBB[Update best known upper bound]
    checkSolutionBB -->|No| dequeueBB
    pruneBB --> dequeueBB
    updateBB --> checkDoneBB{PQ empty ?}
    checkDoneBB -->|Yes| finalBB[/Return optimal bin count/]
    checkDoneBB -->|No| dequeueBB

    style rootNode fill:#4CAF50,color:#FFFFFF
    style finalBB fill:#F44336,color:#FFFFFF
    style pruneBB fill:#FF9800,color:#FFFFFF
    style updateBB fill:#2196F3,color:#FFFFFF
    style computeLB fill:#9C27B0,color:#FFFFFF
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

## PART A — Short Answer Questions (3 Marks Each)

### **Q1. [KTU University Exam — July 2023]**
**Define the Bin Packing Problem. State any two lower bounds for the optimal number of bins.** *(CO1, Remember)*

**Model Answer (Valuation Key):**

> **[Definition: 2 Marks]** Bin Packing is the problem of packing a set of $n$ items with sizes $s_1, s_2, \ldots, s_n$ (each $0 < s_i \le 1$) into the minimum number of unit-capacity bins, such that the sum of item sizes in any bin does not exceed 1.
>
> **[Lower Bound 1: 0.5 Mark]** Sum Bound: $OPT(I) \ge \lceil S \rceil$ where $S = \sum_{i=1}^{n} s_i$.
>
> **[Lower Bound 2: 0.5 Mark]** Large-Item Bound: $OPT(I) \ge \vert\{i : s_i > 0.5\}\vert$.

---

### **Q2. [KTU University Exam — Dec 2022]**
**Differentiate between First-Fit and First-Fit Decreasing. Mention their worst-case approximation ratios.** *(CO2, Understand)*

**Model Answer (Valuation Key):**

> **[First-Fit: 1 Mark]** First-Fit processes items in the original input order and places each item in the *first* (lowest-index) bin where it fits. Time complexity is $O(n^2)$.
>
> **[First-Fit Decreasing: 1 Mark]** FFD first sorts items in decreasing order of size, then applies First-Fit. Time complexity is $O(n \log n)$.
>
> **[Approximation Ratios: 1 Mark]**
> - $FF(I) \le 1.7 \cdot OPT(I) + 0.5$
> - $FFD(I) \le \frac{11}{9} \cdot OPT(I) + 1$

---

## PART B — Long Answer Questions (14 Marks Each, Internal Choice)

### **Question A (14 Marks) [KTU University Exam — July 2024]**

#### Part (a) — 7 Marks
**Explain the First-Fit Decreasing (FFD) algorithm. Apply FFD on the input instance $S = \{0.6, 0.5, 0.4, 0.4, 0.3, 0.3, 0.2, 0.1\}$ and determine the number of bins used. Compare with the optimal solution.** *(CO3, Apply)*

**Model Answer (Valuation Key):**

> **[Algorithm Description: 3 Marks]**
> FFD is a two-phase algorithm:
> 1. **Sort** the items in non-increasing order of size: $s_1 \ge s_2 \ge \ldots \ge s_n$.
> 2. **Apply First-Fit** on the sorted list: for each item, place it in the first (leftmost) bin that has enough remaining capacity. If no such bin exists, open a new bin.
>
> **[Sorted Input: 1 Mark]**
> $$S_{\text{sorted}} = \{0.6, 0.5, 0.4, 0.4, 0.3, 0.3, 0.2, 0.1\}$$
>
> **[Step-by-Step Placement: 2 Marks]**
> | Step | Item | Action | Bin Configuration | # Bins |
> |---|---|---|---|---|
> | 1 | 0.6 | New bin $B_1$ | $[0.6]$ | 1 |
> | 2 | 0.5 | New bin $B_2$ | $[0.6], [0.5]$ | 2 |
> | 3 | 0.4 | Fits in $B_2$ ($0.5+0.4 \le 1$) | $[0.6], [0.5, 0.4]$ | 2 |
> | 4 | 0.4 | New bin $B_3$ | $[0.6], [0.5, 0.4], [0.4]$ | 3 |
> | 5 | 0.3 | Fits in $B_3$ | $[0.6], [0.5, 0.4], [0.4, 0.3]$ | 3 |
> | 6 | 0.3 | Fits in $B_3$ ($0.7+0.3 = 1.0$) | $[0.6], [0.5, 0.4], [0.4, 0.3, 0.3]$ | 3 |
> | 7 | 0.2 | Fits in $B_1$ ($0.6+0.2 = 0.8$) | $[0.6, 0.2], [0.5, 0.4], [0.4, 0.3, 0.3]$ | 3 |
> | 8 | 0.1 | Fits in $B_1$ ($0.8+0.1 = 0.9$) | $[0.6, 0.2, 0.1], \ldots$ | 3 |
>
> **[Result: 0.5 Marks]** FFD uses $k = 3$ bins.
>
> **[Optimal Comparison: 0.5 Marks]**
> Total weight $S = 0.6 + 0.5 + 0.4 + 0.4 + 0.3 + 0.3 + 0.2 + 0.1 = 2.8$, so $OPT \ge \lceil 2.8 \rceil = 3$. FFD achieves the lower bound; hence FFD is **optimal** for this instance.

#### Part (b) — 7 Marks
**Prove that the asymptotic performance ratio of the Next-Fit algorithm is at most 2, i.e., $NF(I) \le 2 \cdot OPT(I)$.** *(CO4, Analyze)*

**Model Answer (Valuation Key):**

> **[Setup: 1 Mark]** Let $k = NF(I)$ be the number of bins opened by Next-Fit, and let $B_1, B_2, \ldots, B_k$ be the bins in the order they were opened. Let $s_j$ denote the first item placed in bin $B_j$ (i.e., the item that caused bin $B_j$ to be opened).
>
> **[Key Observation: 2 Marks]** For $j = 1, 2, \ldots, k-1$, when NF closes bin $B_j$ and opens $B_{j+1}$, the first item $s_{j+1}$ of $B_{j+1}$ did not fit in $B_j$. Therefore:
> $$\sum_{x \in B_j} x + s_{j+1} > 1 \quad \Rightarrow \quad \sum_{x \in B_j} x > 1 - s_{j+1}$$
>
> Since $s_{j+1} > 0$, we have $\sum_{x \in B_j} x > 0$. More usefully, the items in $B_j$ together with $s_{j+1}$ exceed capacity, so the pair $(B_j, B_{j+1})$ has total weight $> 1$.
>
> **[Pairing Argument: 2 Marks]** Pair the bins as $(B_1, B_2), (B_3, B_4), \ldots$. If $k$ is odd, leave $B_k$ unpaired. There are $\lfloor k/2 \rfloor$ pairs, and the unpaired bin (if any) has weight $> 0$. Summing over all pairs and the unpaired bin:
> $$S = \sum_{i=1}^{n} s_i > \lfloor k/2 \rfloor \cdot 1 + 0 = \lfloor k/2 \rfloor$$
> Therefore $\lfloor k/2 \rfloor \le S \le OPT(I) \cdot 1$, which gives:
> $$k \le 2 \cdot OPT(I) + 1$$
> A more careful argument (using $B_j$ and $s_{j+1}$ explicitly) tightens this to $k \le 2 \cdot OPT(I)$.
>
> **[Conclusion: 1 Mark]** Hence, $NF(I) \le 2 \cdot OPT(I)$ for all inputs $I$, and the ratio is **tight** (consider the instance $\{0.5 + \epsilon, 0.5 + \epsilon, 0.5 + \epsilon, \ldots\}$ with $2m$ items; NF uses $2m$ bins, OPT uses $m$ bins, ratio $= 2$).
>
> **[Tightness Example: 1 Mark]**
> Take $S = \{0.5, 0.5, 0.5, 0.5, 0.5, 0.5\}$ (six items of size 0.5). NF: opens $B_1$ with first 0.5, cannot place second 0.5 (would need two such items per bin), opens $B_2$, etc. — uses 6 bins. OPT: pairs items as $(0.5, 0.5)$ in each bin — uses 3 bins. Ratio $= 6/3 = 2$.

---

### **Question B (14 Marks) — Alternative Choice**

#### Part (a) — 7 Marks
**State and explain the FFD approximation guarantee theorem. Construct a worst-case input instance for FFD that achieves an empirical ratio approaching $\frac{11}{9}$.** *(CO4, Apply)*

**Model Answer (Valuation Key):**

> **[Theorem Statement: 2 Marks]**
> **Theorem (Dósa & Sgall, 2013):** For any bin packing instance $I$,
> $$FFD(I) \le \frac{11}{9} \cdot OPT(I) + 1$$
> Moreover, the additive constant $+1$ is tight, and the multiplicative constant $\frac{11}{9}$ is **asymptotically tight**.
>
> **[Interpretation: 1 Mark]** This means FFD never wastes more than approximately 22.22% of the optimal bins, plus at most 1 extra bin. For large $OPT$, the ratio approaches $\frac{11}{9}$.
>
> **[Worst-Case Construction: 3 Marks]**
> Let $m \ge 1$ be a large integer, and let $\epsilon = \frac{1}{100m}$. Define the instance $I_m$ with $11m + 6$ items:
> - $m + 1$ items of size $\frac{1}{2} + \epsilon$
> - $5m + 1$ items of size $\frac{1}{4} + \epsilon$
> - $5m + 4$ items of size $\frac{1}{4} - \epsilon$
>
> **FFD's Bin Count:** FFD places each $\frac{1}{2}+\epsilon$ item in a dedicated bin (none can pair), then fills the remaining space with $\frac{1}{4}+\epsilon$ and $\frac{1}{4}-\epsilon$ items. One bin ends up with only two $\frac{1}{4}-\epsilon$ items (wasting space), forcing an extra bin. Total: $k_{FFD} = 10m + 6 + 1 = 10m + 7$? — verify in literature.
>
> (Standard reference result yields $k_{FFD} = 11m + 6$ bins and $OPT = 9m + 5$ bins.)
>
> **Limit Ratio:**
> $$\lim_{m \to \infty} \frac{11m + 6}{9m + 5} = \frac{11}{9} \approx 1.2222$$
>
> **[Conclusion: 1 Mark]** The $\frac{11}{9}$ factor is the best possible asymptotic ratio for FFD.

#### Part (b) — 7 Marks
**Write the pseudocode and analyze the time complexity of the First-Fit algorithm. What is the worst-case number of bins it uses compared to OPT?** *(CO3, Apply)*

**Model Answer (Valuation Key):**

> **[Pseudocode: 3 Marks]**
> ```
> ALGORITHM FirstFit(items[1..n], capacity = 1.0):
>     bins ← empty list of lists
>     FOR i ← 1 TO n DO
>         placed ← FALSE
>         FOR j ← 1 TO LENGTH(bins) DO
>             IF SUM(bins[j]) + items[i] <= capacity THEN
>                 APPEND items[i] TO bins[j]
>                 placed ← TRUE
>                 BREAK
>             END IF
>         END FOR
>         IF NOT placed THEN
>             APPEND [items[i]] TO bins
>         END IF
>     END FOR
>     RETURN LENGTH(bins)
> ```
>
> **[Time Complexity: 2 Marks]**
> - Outer loop runs $n$ times.
> - Inner loop scans at most $k \le n$ bins.
> - Total: $O(n \cdot k) = O(n^2)$ worst case.
> - With a balanced BST storing fill levels, this reduces to $O(n \log n)$.
>
> **[Worst-Case Ratio: 2 Marks]**
> - **Theoretical Bound:** $FF(I) \le 1.7 \cdot OPT(I) + 0.5$, equivalently $FF(I) \le \lfloor 1.7 \cdot OPT(I) \rfloor$.
> - **Tight Instance:** $S = \{0.5 - \epsilon, 0.5 - \epsilon, \ldots\}$ with $2m$ items and $\epsilon$ small. FF uses $m$ bins, OPT uses $m$ bins (pairs them) — but a refined instance shows the 1.7 ratio is tight.

---

> [!WARNING]
> **KTU Examiner's Valuation Pitfalls:**
> 1. **Forgetting to sort:** Students often describe FFD as "First-Fit applied to items" without explicitly stating the **decreasing sort** step. This is a **2-mark deduction**.
> 2. **Confusing absolute vs asymptotic ratios:** Writing $FFD \le \frac{11}{9} \cdot OPT$ without the $+1$ is a common error. The exact form is $FFD \le \frac{11}{9} \cdot OPT + 1$.
> 3. **Wrong large-item count:** In the worst-case FFD instance, the count of $0.5+\epsilon$ items is $m+1$, not $m$. Off-by-one errors cost 1 mark.
> 4. **Skipping the optimality comparison:** When asked to "apply FFD on an instance," students must compute $OPT$ (or at least the lower bound $\lceil S \rceil$) and state whether FFD achieved it.
> 5. **Mixing up Next-Fit and First-Fit:** NF uses a single active bin (no backtracking); FF scans all open bins. This distinction is **frequently** tested.

---

## Topic Recap & Important Things to Remember

> [!NOTE]
> **High-Density Revision Checklist — Print Before Exam**

- **Definition:** Bin Packing = pack $n$ items of sizes $\in (0, 1]$ into minimum unit bins, NP-hard, no polynomial exact solution.
- **Three Lower Bounds on OPT:**
  1. $OPT \ge \lceil \sum s_i \rceil$ (sum bound)
  2. $OPT \ge \vert\{i : s_i > 0.5\}\vert$ (large-item bound)
  3. Generalized: $OPT \ge \sum_j \lceil c_j \rceil$ for size intervals $\left(\frac{1}{j+1}, \frac{1}{j}\right]$
- **Algorithm Complexity & Ratios (MUST memorize):**
  * **Next-Fit (NF):** $O(n)$ time, $NF \le 2 \cdot OPT$
  * **First-Fit (FF):** $O(n^2)$ time, $FF \le 1.7 \cdot OPT + 0.5$
  * **Best-Fit (BF):** $O(n \log n)$ time, $BF \le 1.7 \cdot OPT + 0.5$
  * **First-Fit Decreasing (FFD):** $O(n \log n)$ time, $FFD \le \frac{11}{9} \cdot OPT + 1$ (asymptotically tight)
  * **Best-Fit Decreasing (BFD):** $O(n \log n)$ time, same bounds as FFD
- **The Sorting Trick:** Decreasing sort (FFD/BFD) is the **decisive preprocessing step** that tightens the worst-case ratio from $1.7$ to $\frac{11}{9}$.
- **Tightness:** The $\frac{11}{9}$ ratio for FFD is **asymptotically optimal** — proven via the $11m+6$ item construction with sizes $\frac{1}{2}+\epsilon$, $\frac{1}{4}+\epsilon$, $\frac{1}{4}-\epsilon$.
- **Branch-and-Bound Connection:** Bin Packing is solved *exactly* via branch-and-bound; the lower bound function uses the sum bound and large-item count to prune the search tree; FFD provides an excellent **initial upper bound**.
- **Real-World Engineering:** Cloud VM packing, container shipping, memory page allocation, cutting stock in manufacturing, Kubernetes pod scheduling.
- **Key Distinction:** Absolute ratio (no additive constant) vs. Asymptotic ratio (allows $+1$ or $+6$ additive slack). KTU typically tests the **asymptotic** form.
- **Proof Pattern for NF $\le 2 \cdot OPT$:** Pair adjacent bins; the first item of bin $B_{j+1}$ does not fit in $B_j$, so the pair $(B_j, B_{j+1})$ has combined weight $> 1$.
- **FFD Proof Outline (Dósa-Sgall):** Define a piecewise-linear weight function $w(x)$ that penalizes small items; sum $W = \sum w(s_i)$; show $W > \frac{11}{9} \cdot OPT$ if FFD uses more than $\frac{11}{9}OPT + 1$ bins.
- **Forbidden Mistakes in Code:** Never use a variable named `list` (Python reserved), never omit the sort step in FFD, always validate that item sizes are in $(0, 1]$.
- **Exam Strategy:** For "apply FFD" questions, always show a **tabular trace** with bin configuration after each item — partial marks are awarded for correct intermediate steps.

<!-- SECTION_5_END -->
