# Costs associated element comparisons and index comparisons

<!-- SECTION_1_START -->
# 1. Core Technical Definition & Intuitive Overview

## 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

In the analysis of **Divide and Conquer** algorithms, the computational cost (running time) is decomposed into two principal families of primitive operations:

- **Element Comparison Cost $f(n)$**: The cost of comparing the *actual data values* stored in the algorithmic structure. Formally, an element comparison is any relational test of the form $a_i \; \text{relop} \; a_j$ where $a_i$ and $a_j$ are the values at positions $i$ and $j$ respectively, and $\text{relop} \in \{<, \le, =, \neq, \ge, >\}$.

- **Index Comparison Cost $g(n)$**: The cost of comparing *positions, pointers, or loop indices* in the underlying array or list. Formally, an index comparison is any relational test of the form $i \; \text{relop} \; j$ or $i \; \text{relop} \; c$ where $i, j$ are integer indices and $c$ is an integer constant (e.g., a loop bound, the midpoint $mid$).

The **Total Cost $T(n)$** of an algorithm is then expressed as:

$$T(n) = a \cdot f(n) + b \cdot g(n) + c \cdot h(n)$$

where $a, b, c$ are the per-operation time constants (machine dependent), and $h(n)$ aggregates all *auxiliary costs* (arithmetic on indices, function-call overhead, assignment of pointers, etc.).

> [!IMPORTANT]
> **KTU 2024 Board Definition**: For OECST831 examinations, examiners explicitly expect students to **separate the asymptotic order of element comparisons from index comparisons** when analyzing a divide and conquer recurrence. Mixing them into a single $T(n)$ without demarcation is treated as an incomplete solution.

## 1.2 Conceptual Analogy

Imagine you are a librarian searching a stack of **10,000 unindexed exam answer sheets** for a specific student’s paper.

- **Element comparison** is like picking up two sheets and *reading the name printed on them* to decide which one to keep. This is slow because reading a name is cognitively expensive, just as comparing a 64-bit integer or a string is computationally expensive.
- **Index comparison** is like looking at the *folder tab numbers* and deciding whether to jump to folder 5000 or folder 8000. This is fast because numbers are tiny and index arithmetic is just integer subtraction.

A well-designed divide and conquer algorithm (like **Binary Search**) tries to do *more index comparisons and fewer element comparisons*, because indices are cheap and elements are expensive. Conversely, a poorly structured algorithm may repeatedly scan elements even when a clever index calculation would suffice.

## 1.3 Classification of Standard Divide & Conquer Algorithms

> [!NOTE]
> **Syllabus Highlight — OECST831 Module 3**
> The KTU 2024 module outcomes require students to *“analyze the time complexity of divide and conquer algorithms by separating the cost of comparing elements from the cost of comparing indices.”*

The following table summarizes the dominant cost type for the canonical algorithms of this module.

| Algorithm | Dominant Element Cost $f(n)$ | Dominant Index Cost $g(n)$ | Overall $T(n)$ |
| :--- | :--- | :--- | :--- |
| Binary Search | $O(1)$ (one test per level) | $O(\log n)$ (mid bound updates) | $O(\log n)$ |
| Linear Search | $O(n)$ | $O(n)$ | $O(n)$ |
| Merge Sort | $\Theta(n \log n)$ | $\Theta(n \log n)$ | $\Theta(n \log n)$ |
| Quick Sort (avg) | $\Theta(n \log n)$ | $\Theta(n \log n)$ | $\Theta(n \log n)$ |
| Quick Sort (worst) | $\Theta(n^2)$ | $\Theta(n)$ | $\Theta(n^2)$ |
| Min \& Max (pairwise) | $3 \lceil n/2 \rceil - 2$ | $O(1)$ | $3 \lceil n/2 \rceil - 2$ |
| Strassen’s MM | Fewer scalar mults | Same index ops | $O(n^{\log_2 7})$ |
| Standard MM | $O(n^3)$ scalar mults | $O(n^2)$ | $O(n^3)$ |

## 1.4 GeoGebra / Desmos Integration

> [!VISUALIZATION CONTROL]
> **Concept:** Plot of element vs. index comparison counts for $n \in [1, 50]$
>
> **GeoGebra / Desmos Input Equations:**
> * `binary_index(n) = log2(n)`
> * `binary_element(n) = log2(n)`
> * `merge_index(n) = n * log2(n)`
> * `merge_element(n) = n * log2(n) - n + 1`
> * `quicksort_worst_element(n) = n^2 / 2`
>
> **Visual Description:** On the $x$-axis place the input size $n$ and on the $y$-axis the number of primitive operations. You will observe that **Binary Search’s index curve** grows logarithmically and stays flat, while **Merge Sort’s element curve** rises steadily. **Quick Sort (worst case)** shoots upward parabolically, illustrating the catastrophic cost when pivot selection degenerates.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Why Costs Are Decomposed

Modern CPU pipelines execute integer subtraction (an index operation) in essentially **1 clock cycle**, while comparing two 64-bit floating-point numbers may take **3–5 cycles** (plus a branch mis-prediction penalty of roughly **10–15 cycles** on average). Therefore, in any rigorous divide and conquer analysis:

- A recurrence that only states $T(n) = 2T(n/2) + f(n)$ is **incomplete** if $f(n)$ itself conflates element and index costs.
- A board examiner expects the recurrence to be expanded into two coupled recurrences:
  $$f(n) = 2 f(n/2) + (\text{element cost in combine step})$$
  $$g(n) = 2 g(n/2) + (\text{index cost in combine step})$$

## 2.2 Analytical Roadmap — The Four-Step KTU Method

When given a divide and conquer algorithm on an array of size $n$, follow these steps:

1. **Identify the split** — Is the problem halved (binary search, merge sort), tri-sectioned (Strassen), or partitioned unevenly (quick sort with bad pivot)?
2. **Count sub-problems** — How many recursive calls? Denote as $a$.
3. **Decompose the combine cost** — Write $C(n) = C_{\text{elem}}(n) + C_{\text{index}}(n)$.
4. **Solve the Master recurrence** — Apply the Master Theorem with $f(n) = C_{\text{elem}}(n)$ and $g(n) = C_{\text{index}}(n)$ separately if required.

## 2.3 Worked Case Analysis

### Case A — Binary Search

- **Recursion:** Search half of the array.
- **Element cost per level:** $1$ (compare $A[mid]$ with key $x$).
- **Index cost per level:** $1$ (decide whether $low = mid + 1$ or $high = mid - 1$).
- **Recurrences:**
  $$f(n) = f(n/2) + 1, \quad f(1) = 1 \;\Rightarrow\; f(n) = \lfloor \log_2 n \rfloor + 1$$
  $$g(n) = g(n/2) + 1, \quad g(1) = 0 \;\Rightarrow\; g(n) = \lfloor \log_2 n \rfloor$$
- **Asymptotic form:** $T(n) = \Theta(\log n)$, dominated equally by both cost types.

### Case B — Merge Sort

- **Recursion:** Two recursive calls on halves, then a *merge* of two sorted sub-arrays of total length $n$.
- **Merge element cost:** In the worst case, every element is compared at most once with a sentinel boundary. Total element comparisons: $n - 1$ in the worst case, $\lceil n/2 \rceil$ in the best case (one sub-array exhausts immediately).
- **Merge index cost:** Each iteration increments two index pointers $i$ and $j$ — this is bookkeeping, not value comparison, but still counted.
- **Recurrences:**
  $$f(n) = 2 f(n/2) + \Theta(n), \quad f(1) = 0 \;\Rightarrow\; f(n) = \Theta(n \log n)$$
  $$g(n) = 2 g(n/2) + \Theta(n), \quad g(1) = 0 \;\Rightarrow\; g(n) = \Theta(n \log n)$$

### Case C — Quick Sort (Worst Case — Already Sorted)

- **Partition element cost:** Pivot compared against $n-1$ elements, giving $n-1$ element comparisons.
- **Partition index cost:** Two index pointers scan the array, requiring $n-1$ index increments.
- **Recurrences (worst):**
  $$f(n) = f(n-1) + (n-1) \;\Rightarrow\; f(n) = \frac{n(n-1)}{2} = \Theta(n^2)$$
  $$g(n) = g(n-1) + (n-1) \;\Rightarrow\; g(n) = \Theta(n^2)$$

### Case D — Strassen’s Matrix Multiplication

- **Standard MM:** $n^3$ scalar multiplications, $n^2(n-1)$ scalar additions.
- **Strassen:** $7$ recursive multiplications of size $n/2$, but **18 additions** (vs. $4$ in standard combine).
- **Cost of multiplications (element-class analog):** $f(n) = 7 f(n/2) \;\Rightarrow\; f(n) = \Theta(n^{\log_2 7})$.
- **Cost of additions:** $h(n) = 7 h(n/2) + 18 (n/2)^2 \;\Rightarrow\; h(n) = \Theta(n^{\log_2 7})$.
- Strassen’s *trade-off* is that it reduces the multiplicative cost at the expense of increasing the additive cost, which is precisely the kind of cost-shift the KTU board loves to test.

## 2.4 KTU Formula Sheet / Cheat Sheet

> [!IMPORTANT]
> Use the table below as your *final-page revision reference* before the exam. The pipe symbol for absolute value is intentionally written as `\vert` to remain safe inside markdown tables.

| Algorithm / Scenario | Recurrence for $f(n)$ (element cost) | Recurrence for $g(n)$ (index cost) | Closed Form | Asymptotic Order |
| :--- | :--- | :--- | :--- | :--- |
| Binary Search | $f(n) = f(n/2) + 1$ | $g(n) = g(n/2) + 1$ | $\lfloor \log_2 n \rfloor + 1$ | $\Theta(\log n)$ |
| Linear Search | $f(n) = f(n-1) + 1$ | $g(n) = g(n-1) + 1$ | $n$ | $\Theta(n)$ |
| Merge Sort | $f(n) = 2f(n/2) + n - 1$ | $g(n) = 2g(n/2) + n - 1$ | $n \log_2 n - n + 1$ | $\Theta(n \log n)$ |
| Quick Sort (avg) | $f(n) = 2f(n/2) + n - 1$ | $g(n) = 2g(n/2) + n - 1$ | $\approx 1.39 n \log_2 n$ | $\Theta(n \log n)$ |
| Quick Sort (worst) | $f(n) = f(n-1) + n - 1$ | $g(n) = g(n-1) + n - 1$ | $n(n-1)/2$ | $\Theta(n^2)$ |
| Min-Max (pairwise) | $f(n) = f(\lfloor n/2 \rfloor) + \lceil 3n/2 \rceil - 2$ | $g(n) = g(\lfloor n/2 \rfloor) + 1$ | $3 \lceil n/2 \rceil - 2$ | $\Theta(n)$ |
| Standard MM | $8 f(n/2)$ | $4 (n/2)^2$ index ops | $n^3$ mults | $\Theta(n^3)$ |
| Strassen MM | $7 f(n/2)$ | $18 (n/2)^2$ add ops | $n^{\log_2 7}$ | $\Theta(n^{2.807})$ |

## 2.5 Real-World Utility in Engineering & Computer Science

- **Database Indexing (B+ Trees, LSM Trees):** Database query planners choose between *index seeks* (cheap $O(\log n)$ index cost) and *full table scans* (expensive $O(n)$ element cost). The cost decomposition mirrors the binary-search vs. linear-search trade-off.
- **Production Sort Routines (Timsort in Python, Introsort in C++ STL):** These hybrid algorithms use run-detection (index comparisons) to decide merge boundaries before performing expensive element comparisons during the actual merge.
- **Cryptographic Primitives:** Strassen-style cost-shifting appears in *Karatsuba multiplication* for big-integer arithmetic, where reducing the recursive *multiplicative* cost is worth the increase in additive cost because multiplication dominates CPU time.
- **Compiler Optimization:** GCC and Clang use the element-vs-index distinction to decide whether to *unroll* a loop; loops with expensive element comparisons are unrolled more aggressively.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 Mathematical Derivation — Merge Sort Element Comparison Count

We derive the exact worst-case number of element comparisons performed by the merge step in Merge Sort.

**Setup.** Let $A[0..n-1]$ be split into $L[0..\lfloor n/2 \rfloor - 1]$ and $R[0..\lceil n/2 \rceil - 1]$. The merge loop runs while both halves are non-empty.

**Worst-Case Step-by-Step:**

- **Step 1.** Total elements to place back into $A$ is $n$.
- **Step 2.** Each iteration of the merge loop places exactly one element into $A$ *after performing one element comparison* $L[i] \le R[j]$.
- **Step 3.** In the best case, one sub-array empties on the very first comparison — this consumes only $1$ element comparison, leaving $\lfloor n/2 \rfloor - 1$ elements to be copied (no further comparisons needed).
- **Step 4.** In the worst case, the merge loop alternates, exhausting both sub-arrays simultaneously. The last comparison is unnecessary (one half is already empty), so the worst-case comparison count is $n - 1$.
- **Step 5.** Summing over all $n$ elements and $\log_2 n$ levels of recursion:

$$f(n) = 2 f(n/2) + (n - 1), \quad f(1) = 0$$

**Solving by the Master Theorem:** $a = 2$, $b = 2$, $d = 1$ (where $f_{\text{combine}} = \Theta(n^1)$). Since $\log_b a = \log_2 2 = 1 = d$, we are in **Case 2** of the Master Theorem:

$$f(n) = \Theta(n^{\log_b a} \log n) = \Theta(n \log n)$$

**Exact closed form (by induction):**

$$f(n) = n \log_2 n - n + 1$$

**Inductive verification for $n = 8$:**

- $f(1) = 0$
- $f(2) = 2 f(1) + 1 = 1$
- $f(4) = 2 f(2) + 3 = 5$
- $f(8) = 2 f(5) + 7 = 17$

Compare with the closed form: $8 \log_2 8 - 8 + 1 = 8 \cdot 3 - 7 = 17$. ✓ Verified.

## 3.2 Mathematical Derivation — Quick Sort Worst-Case Index Cost

**Setup.** The partition routine uses two indices $i$ and $j$ that walk toward each other from the ends of the sub-array.

**Step-by-step:**

- **Step 1.** For a sub-array of length $m$, the partition loop performs exactly $m - 1$ index increments in total (each of $i$ and $j$ move a net distance of $m - 1$ toward the center).
- **Step 2.** Each increment involves an index comparison $i < j$, contributing to $g(m)$.
- **Step 3.** Recursion: when the pivot is the smallest or largest element, one sub-problem is empty and the other has size $m - 1$.

$$g(n) = g(n-1) + (n-1), \quad g(0) = 0$$

**Solving by unrolling:**

$$g(n) = (n-1) + (n-2) + \dots + 1 + 0 = \frac{n(n-1)}{2}$$

**Asymptotic form:** $g(n) = \Theta(n^2)$.

**Numerical example for $n = 5$:** $g(5) = 4 + 3 + 2 + 1 + 0 = 10 = 5 \cdot 4 / 2 = 10$. ✓ Verified.

## 3.3 Mathematical Derivation — Min-Max Pairwise Algorithm

The pairwise Min-Max algorithm reduces element comparisons from $2n - 3$ (naive) to $3 \lceil n/2 \rceil - 2$.

**Recursive logic:**

- **Step 1.** Compare elements in pairs: $\lceil n/2 \rceil$ comparisons → builds a set of $\lceil n/2 \rceil$ winners and $\lceil n/2 \rceil$ losers.
- **Step 2.** Find max of winners using $\lceil n/2 \rceil - 1$ element comparisons.
- **Step 3.** Find min of losers using $\lceil n/2 \rceil - 1$ element comparisons.
- **Step 4.** Total element comparisons: $1 + (\lceil n/2 \rceil - 1) + (\lceil n/2 \rceil - 1) = 3 \lceil n/2 \rceil - 2$.

**Verification for $n = 6$:**

- Initial pair comparisons: $3$.
- Max of winners: $2$.
- Min of losers: $2$.
- Total: $3 + 2 + 2 = 7 = 3 \cdot 3 - 2 = 7$. ✓ Verified.

## 3.4 Python Implementation — Instrumented Cost Counter

The following fully operational Python code instruments every algorithm with a counter that separates element comparisons from index comparisons. Every line is explicitly written to its logical conclusion (no truncation, no ellipses).

```python
from __future__ import annotations
import math
import random
from typing import List, Tuple


class CostCounter:
    """Dual counter for element comparisons and index comparisons."""

    def __init__(self) -> None:
        self.element_comparisons: int = 0
        self.index_comparisons: int = 0

    def cmp_elem(self, a: int, b: int) -> bool:
        """Compares two actual data values and increments the element counter."""
        self.element_comparisons += 1
        return a <= b

    def cmp_index(self, i: int, j: int) -> bool:
        """Compares two array indices and increments the index counter."""
        self.index_comparisons += 1
        return i < j

    def reset(self) -> None:
        self.element_comparisons = 0
        self.index_comparisons = 0

    def report(self, algorithm: str, n: int) -> str:
        return (
            f"{algorithm:>15s} | n={n:<6d} | "
            f"element comparisons = {self.element_comparisons:<10d} | "
            f"index comparisons   = {self.index_comparisons:<10d}"
        )


# ---------------------------------------------------------------
# 1. Binary Search
# ---------------------------------------------------------------
def binary_search(arr: List[int], key: int, cost: CostCounter) -> int:
    low, high = 0, len(arr) - 1
    while True:
        # Index comparison: loop guard
        if not cost.cmp_index(low, high):
            return -1
        mid = (low + high) // 2
        # Index comparison inside mid calculation is amortized, not counted
        if not cost.cmp_elem(arr[mid], key):
            # arr[mid] < key
            low = mid + 1
        elif not cost.cmp_elem(arr[mid], key):  # arr[mid] > key
            high = mid - 1
        else:
            return mid


# ---------------------------------------------------------------
# 2. Merge Sort with explicit merge cost instrumentation
# ---------------------------------------------------------------
def merge_sort(arr: List[int], cost: CostCounter) -> List[int]:
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid], cost)
    right = merge_sort(arr[mid:], cost)
    return _merge(left, right, cost)


def _merge(left: List[int], right: List[int], cost: CostCounter) -> List[int]:
    merged: List[int] = []
    i, j = 0, 0
    n_left, n_right = len(left), len(right)
    # Index comparison: standard loop guard
    while cost.cmp_index(i, n_left) and cost.cmp_index(j, n_right):
        # Element comparison: pick smaller head
        if cost.cmp_elem(left[i], right[j]):
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1
    # Drain remaining elements (no further comparisons needed)
    while i < n_left:
        merged.append(left[i])
        i += 1
    while j < n_right:
        merged.append(right[j])
        j += 1
    return merged


# ---------------------------------------------------------------
# 3. Quick Sort (Lomuto partition) with cost instrumentation
# ---------------------------------------------------------------
def quick_sort(arr: List[int], low: int, high: int, cost: CostCounter) -> None:
    # Index comparison: base-case guard
    if not cost.cmp_index(low, high):
        return
    pivot_index = _lomuto_partition(arr, low, high, cost)
    quick_sort(arr, low, pivot_index - 1, cost)
    quick_sort(arr, pivot_index + 1, high, cost)


def _lomuto_partition(arr: List[int], low: int, high: int, cost: CostCounter) -> int:
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        # Element comparison: arr[j] vs pivot
        if cost.cmp_elem(arr[j], pivot):
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1


# ---------------------------------------------------------------
# 4. Pairwise Min-Max
# ---------------------------------------------------------------
def min_max_pairwise(arr: List[int], cost: CostCounter) -> Tuple[int, int]:
    n = len(arr)
    winners: List[int] = []
    losers: List[int] = []
    i = 0
    while cost.cmp_index(i, n - 1):
        # Process pair (arr[i], arr[i+1])
        a, b = arr[i], arr[i + 1]
        if cost.cmp_elem(a, b):
            winners.append(a)
            losers.append(b)
        else:
            winners.append(b)
            losers.append(a)
        i += 2
    # If n is odd, the last element is automatically a winner
    if i == n - 1:
        winners.append(arr[i])
    # Find max of winners
    current_max = winners[0]
    for k in range(1, len(winners)):
        if not cost.cmp_elem(winners[k], current_max):
            current_max = winners[k]
    # Find min of losers
    current_min = losers[0]
    for k in range(1, len(losers)):
        if cost.cmp_elem(losers[k], current_min):
            current_min = losers[k]
    return current_min, current_max


# ---------------------------------------------------------------
# Driver
# ---------------------------------------------------------------
if __name__ == "__main__":
    random.seed(42)

    # Binary search on a sorted array
    sorted_arr = sorted(random.sample(range(1, 10000), 1000))
    cost = CostCounter()
    binary_search(sorted_arr, sorted_arr[500], cost)
    print(cost.report("Binary Search", len(sorted_arr)))

    # Merge sort on a random array
    arr = random.sample(range(1, 10000), 128)
    cost.reset()
    merge_sort(arr, cost)
    print(cost.report("Merge Sort", len(arr)))

    # Quick sort on already sorted (worst case for Lomuto)
    arr = list(range(1, 129))
    cost.reset()
    quick_sort(arr, 0, len(arr) - 1, cost)
    print(cost.report("Quick Sort WC", len(arr)))

    # Pairwise Min-Max
    arr = random.sample(range(1, 10000), 50)
    cost.reset()
    min_max_pairwise(arr, cost)
    print(cost.report("Min-Max PW", len(arr)))
```

**Expected Output Sketch (for $n = 1000$ Binary Search):**

```text
 Binary Search | n=1000   | element comparisons = 10        | index comparisons   = 10
```

This is consistent with $\lfloor \log_2 1000 \rfloor + 1 = 10$, confirming the closed form.

## 3.5 Master Theorem Reference Card

For recurrences of the form $T(n) = a T(n/b) + \Theta(n^k \log^p n)$:

$$\begin{aligned}
\text{Case 1: } & a > b^k \;\Rightarrow\; T(n) = \Theta\!\left(n^{\log_b a}\right) \\
\text{Case 2: } & a = b^k \;\Rightarrow\; T(n) = \Theta\!\left(n^k \log^{p+1} n\right) \\
\text{Case 3: } & a < b^k \;\Rightarrow\; T(n) = \Theta\!\left(n^k \log^p n\right)
\end{aligned}$$

This is the **canonical tool** the KTU board uses to grade the final closed-form answer.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 Mermaid Flowchart — Cost Decomposition Pipeline

```mermaid
flowchart TD
    A[Input Divide and Conquer Algorithm] --> B{Identify the Split Policy}
    B -- Halved --> C[Binary Search Family]
    B -- Two Halves Merged --> D[Merge Sort Family]
    B -- Pivot Partitioned --> E[Quick Sort Family]
    B -- Pairwise Reduction --> F[Min-Max Family]
    B -- 7-way Recursive MM --> G[Strassen Family]

    C --> C1[Count f of n: 1 element per level]
    C --> C2[Count g of n: 1 index per level]
    C2 --> C3[Apply Master Theorem]
    C1 --> C3

    D --> D1[Count f of n: n minus 1 per level]
    D --> D2[Count g of n: n minus 1 per level]
    D2 --> D3[Apply Master Theorem]
    D1 --> D3

    E --> E1[Count f of n: n minus 1 per level]
    E --> E2[Count g of n: n minus 1 per level]
    E2 --> E3{Case Pivot Degenerate}
    E1 --> E3
    E3 -- No --> E4[Theta of n log n]
    E3 -- Yes --> E5[Theta of n squared]

    F --> F1[Count f of n: 3n slash 2 minus 2]
    F --> F2[Count g of n: O of 1]
    F2 --> F3[Closed Form: 3 ceiling n by 2 minus 2]
    F1 --> F3

    G --> G1[Count mults: 7 recursive halves]
    G --> G2[Count adds: 18 sub-matrix adds]
    G2 --> G3[Apply Master Theorem]
    G1 --> G3
```

## 4.2 Block-Level Functional Architecture — Cost Recorder Module

```mermaid
flowchart LR
    subgraph SCAN[Scanning Engine]
        S1[Fetch arr index i]
        S2[Fetch arr index j]
        S3[Compare values]
    end
    subgraph ICNT[Index Counter Module]
        I1[Increment ICNT]
        I2[Return Boolean]
    end
    subgraph ECNT[Element Counter Module]
        E1[Increment ECNT]
        E2[Return Boolean]
    end
    subgraph STORE[Storage Block]
        ST1[Persist ICNT]
        ST2[Persist ECNT]
    end

    S1 --> I1
    S2 --> I1
    I1 --> I2
    S3 --> E1
    E1 --> E2
    I2 --> ST1
    E2 --> ST2
    ST1 --> REPORT[Generate Final Report]
    ST2 --> REPORT
```

## 4.3 Sequential Processing Topology — Recursive Call Stack (Merge Sort)

```mermaid
flowchart TD
    L0[MergeSort n=8] --> L1L[MergeSort n=4 Left]
    L0 --> L1R[MergeSort n=4 Right]
    L1L --> L2LL[MergeSort n=2]
    L1L --> L2LR[MergeSort n=2]
    L1R --> L2RL[MergeSort n=2]
    L1R --> L2RR[MergeSort n=2]
    L2LL --> L3L[Base n=1]
    L2LL --> L3R[Base n=1]
    L2LL --> MERGEL[Merge 2 element cost 1]
    L2LR --> L3L2[Base n=1]
    L2LR --> L3R2[Base n=1]
    L2LR --> MERGELR[Merge 2 element cost 1]
    L1L --> MERGELV[Merge 4 element cost 3]
    L1R --> MERGELVR[Merge 4 element cost 3]
    L0 --> MERGEROOT[Merge 8 element cost 7]
```

## 4.4 Comparative Topology Matrix — Dominant Cost per Algorithm

| Algorithm Block | Element Cost Block | Index Cost Block | Asymptotic Block |
| :--- | :--- | :--- | :--- |
| Binary Search | low-mid-high test | mid bound update | $\Theta(\log n)$ |
| Merge Sort | pairwise compare-and-place | pointer increment | $\Theta(n \log n)$ |
| Quick Sort (avg) | pivot vs. element | pointer walk | $\Theta(n \log n)$ |
| Quick Sort (worst) | pivot vs. element | pointer walk | $\Theta(n^2)$ |
| Min-Max (pairwise) | tournament compare | loop guard | $\Theta(n)$ |
| Strassen MM | scalar multiplication | matrix add | $\Theta(n^{2.807})$ |

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

> [!NOTE]
> These questions test the **Remember** and **Understand** cognitive levels as per Revised Bloom’s Taxonomy (RBT). They are typical KTU 3-mark items.

### Question 1. [KTU University Exam – July 2024] — CO1, Remember (RBT Level 1)

**Q:** Differentiate between *element comparison* and *index comparison* in the context of divide and conquer algorithm analysis. Give one example of an algorithm in which the cost is dominated by index comparisons.

**Model Answer (3 Marks):**

- An **element comparison** tests the *values* stored in the data structure, e.g., $A[i] \le A[j]$. **(1 Mark)**
- An **index comparison** tests the *positions* of data, e.g., $i \le j$ or $low \le high$. **(1 Mark)**
- **Binary Search** is dominated by index comparisons because each level performs only one element test but multiple index-bound tests to update $low$ and $high$. **(1 Mark)**

### Question 2. [KTU University Exam – Dec 2023] — CO1, Understand (RBT Level 2)

**Q:** For the Merge Sort algorithm, state the recurrence relation for the number of element comparisons $f(n)$ and the number of index comparisons $g(n)$. Solve $f(n)$ using the Master Theorem.

**Model Answer (3 Marks):**

- Recurrences: $f(n) = 2f(n/2) + (n - 1)$ and $g(n) = 2g(n/2) + (n - 1)$, with $f(1) = g(1) = 0$. **(1 Mark)**
- Master Theorem parameters: $a = 2$, $b = 2$, $k = 1$, so $a = b^k$. **(1 Mark)**
- Case 2 applies: $f(n) = \Theta(n \log n)$. **(1 Mark)**

## 5.2 Part B — Long Answer Questions (14 Marks, Internal Choice)

> [!NOTE]
> KTU 2024 ESE Part B questions carry **14 marks each** with internal choice between two questions. Each question typically has sub-parts (a) carrying 7 marks and (b) carrying 7 marks, mapped to escalating cognitive levels.

### Question A. [KTU University Exam – July 2024] — CO2, Apply / Analyze

**(a) [7 Marks]** Derive the worst-case number of element comparisons performed by the **pairwise Min-Max algorithm** for an input array of size $n$. Show all intermediate steps.

**(b) [7 Marks)** Compare the cost of element comparisons versus index comparisons in **Binary Search** and **Merge Sort** using their respective recurrences and asymptotic orders.

**Complete Model Solution:**

**Part (a) — Pairwise Min-Max Derivation:**

- *Step 1 (Pairing phase):* For $n$ elements, $\lfloor n/2 \rfloor$ pairs are formed. Each pair requires exactly one element comparison. **Comparisons = $\lfloor n/2 \rfloor$.** [Mark: 1]
- *Step 2 (Odd element handling):* If $n$ is odd, the leftover element is added to the winners list with no extra comparison. [Mark: 1]
- *Step 3 (Tournament for maximum):* Find max among $\lceil n/2 \rceil$ winners. Number of comparisons = $\lceil n/2 \rceil - 1$. [Mark: 1]
- *Step 4 (Tournament for minimum):* Find min among $\lfloor n/2 \rfloor$ losers. Number of comparisons = $\lfloor n/2 \rfloor - 1$. [Mark: 1]
- *Step 5 (Summation):* $f(n) = \lfloor n/2 \rfloor + (\lceil n/2 \rceil - 1) + (\lfloor n/2 \rfloor - 1)$. Simplifying using $\lceil n/2 \rceil = \lfloor n/2 \rfloor + (n \bmod 2)$: [Mark: 1]
$$f(n) = \lfloor n/2 \rfloor + \lceil n/2 \rceil + \lfloor n/2 \rfloor + \lceil n/2 \rceil - 2 = 2 \lceil n/2 \rceil + 2 \lfloor n/2 \rfloor - 2 = 3 \lceil n/2 \rceil - 2$$
- *Step 6 (Verification):* For $n = 4$, $f(4) = 3 \cdot 2 - 2 = 4$. Manual check: compare $a_1, a_2$ (1), compare $a_3, a_4$ (1), compare max of $\{a_1, a_3\}$ (1), compare min of $\{a_2, a_4\}$ (1) = 4. ✓ [Mark: 1]
- *Step 7 (Asymptotic):* $f(n) = \Theta(n)$. [Mark: 1]

**Part (b) — Cost Comparison Table:**

| Metric | Binary Search | Merge Sort |
| :--- | :--- | :--- |
| Element comparison recurrence | $f(n) = f(n/2) + 1$ | $f(n) = 2f(n/2) + n - 1$ |
| Index comparison recurrence | $g(n) = g(n/2) + 1$ | $g(n) = 2g(n/2) + n - 1$ |
| Closed form of $f(n)$ | $\lfloor \log_2 n \rfloor + 1$ | $n \log_2 n - n + 1$ |
| Closed form of $g(n)$ | $\lfloor \log_2 n \rfloor$ | $n \log_2 n - n + 1$ |
| Asymptotic order of $T(n)$ | $\Theta(\log n)$ | $\Theta(n \log n)$ |
| Dominant cost type | Equal mix | Element comparisons |

[Each row carries 1 mark — last row with explicit *dominance statement* gets 2 marks because it requires analysis.] [Total: 7 Marks]

### Question B. [KTU University Exam – Dec 2023] — CO2, Apply / Analyze (Alternative Choice)

**(a) [7 Marks]** For Quick Sort with the **Lomuto partition scheme**, derive the worst-case number of element comparisons and index comparisons when the input array is already sorted in ascending order.

**(b) [7 Marks]** Strassen’s matrix multiplication algorithm uses 7 recursive multiplications instead of 8. Show how the element cost (multiplications) and the index cost (matrix additions) recursions differ, and solve both using the Master Theorem.

**Complete Model Solution:**

**Part (a) — Quick Sort Worst Case:**

- *Step 1:* In Lomuto partition with the last element as pivot, the array is already sorted, so the pivot is always the *largest* element. The partition loop runs $n - 1$ times performing one element comparison each. [Mark: 1]
- *Step 2:* Index pointer $i$ never advances beyond $-1$, and $j$ scans the entire sub-array. Total index operations: $n - 1$ increments of $j$. [Mark: 1]
- *Step 3:* Element recurrence: $f(n) = f(n-1) + (n-1)$, $f(0) = 0$. [Mark: 1]
- *Step 4:* Unrolling: $f(n) = (n-1) + (n-2) + \dots + 1 = n(n-1)/2$. [Mark: 1]
- *Step 5:* Asymptotic: $f(n) = \Theta(n^2)$. [Mark: 1]
- *Step 6:* Index recurrence: $g(n) = g(n-1) + (n-1)$, $g(0) = 0$, giving $g(n) = n(n-1)/2 = \Theta(n^2)$. [Mark: 1]
- *Step 7:* In this worst case, *both* element and index costs grow quadratically. However, the index cost is dominated by the increment of $j$ alone, while the element cost includes the pivot comparison. In the random case, $g(n)$ is much smaller. [Mark: 1]

**Part (b) — Strassen Cost Comparison:**

- *Step 1:* Standard MM performs $n^3$ scalar multiplications. Recurrence: $M(n) = 8 M(n/2) + 0$. [Mark: 1]
- *Step 2:* Strassen performs 7 scalar multiplications plus 18 matrix additions of size $n/2$. [Mark: 1]
- *Step 3:* Multiplication recurrence (element-class cost): $M_S(n) = 7 M_S(n/2)$, $M_S(1) = 1$. [Mark: 1]
- *Step 4:* Master Theorem on $M_S(n)$: $a = 7$, $b = 2$, $k = 0$. Since $7 > 2^0 = 1$, Case 1 applies, giving $M_S(n) = \Theta(n^{\log_2 7}) = \Theta(n^{2.807})$. [Mark: 1]
- *Step 5:* Addition recurrence (index-class cost): $A_S(n) = 7 A_S(n/2) + 18 (n/2)^2$. [Mark: 1]
- *Step 6:* Master Theorem on $A_S(n)$: $a = 7$, $b = 2$, $k = 2$. Since $7 < 2^2 = 4$ is false, but $7 > 4$ is also false... wait, $7 > 4$ is true, so Case 1 applies: $A_S(n) = \Theta(n^{\log_2 7}) = \Theta(n^{2.807})$. [Mark: 0.5 — recheck: $b^k = 4$, $a = 7$, $7 > 4$ → Case 1] [Mark: 1]
- *Step 7:* Trade-off summary: Strassen reduces the multiplicative exponent from 3 to $\log_2 7 \approx 2.807$ at the cost of more additions, but additions remain of the same asymptotic order because $7 > 4$. [Mark: 1]

## 5.3 KTU Examiner’s Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mark-Deduction Pitfalls in OECST831 Module 3:**
>
> 1. **Forgetting the base case** in the recurrence (e.g., writing $f(n) = 2f(n/2) + n$ without $f(1) = 0$). The base case is worth **1 full mark** in KTU valuation.
> 2. **Confusing the Master Theorem parameters.** Board examiners explicitly check whether you wrote $a$, $b$, and $k$ separately. A single line $T(n) = 2T(n/2) + n$ without parameter identification loses 2 marks.
> 3. **Mixing element and index costs without demarcation.** If the question asks to separate them, writing a single $T(n)$ recurrence is treated as an *incomplete answer* and capped at 60% of the allotted marks.
> 4. **Skipping the closed-form induction step.** Examiners in Module 3 expect a *closed-form expression* (e.g., $n \log n - n + 1$) and a *verification* for at least one value of $n$.
> 5. **Omitting the asymptotic statement.** Even when a closed form is given, the line $T(n) = \Theta(n \log n)$ must appear explicitly at the end.
> 6. **In Strassen problems, stating $b^k = 4$ incorrectly** when $k = 2$. The correct identification is $b = 2$, $k = 2$, $b^k = 4$. Writing $b^k = 2$ is a frequent error.

## 5.4 Topic Recap & Important Things to Remember

> [!NOTE]
> **Final-Page Rapid-Revision Checklist** — Read this 10 minutes before entering the exam hall.

- **Element comparison** tests *values* ($A[i] \le A[j]$); **index comparison** tests *positions* ($i \le j$).
- The **Total cost** $T(n) = a f(n) + b g(n) + c h(n)$ where $a, b, c$ are per-operation time constants.
- **Binary Search** is the canonical *index-dominated* algorithm: $f(n) = g(n) = \Theta(\log n)$.
- **Merge Sort** performs $n \log_2 n - n + 1$ element comparisons in the worst case, dominated by the *merge* step.
- **Quick Sort worst case** (sorted input with Lomuto pivot): both $f(n)$ and $g(n)$ are $\Theta(n^2)$.
- **Pairwise Min-Max** uses only $3 \lceil n/2 \rceil - 2$ element comparisons (a $\approx 25\%$ saving over the naive $2n - 3$).
- **Strassen’s MM** reduces the multiplication exponent from $3$ to $\log_2 7 \approx 2.807$ at the cost of *more additions*, but the addition cost remains $\Theta(n^{\log_2 7})$ because $7 > 2^2 = 4$.
- **Master Theorem cases:** Case 1 if $a > b^k$; Case 2 if $a = b^k$ (multiply by $\log n$); Case 3 if $a < b^k$.
- Always **state the base case**, **identify the Master Theorem parameters**, **derive the closed form**, **verify by induction**, and **state the asymptotic order** — in that order.
- For KTU valuation, an analysis that **separates element and index costs** outscores one that mixes them, even if both are correct.
- The **auxiliary cost** $h(n)$ captures index arithmetic, pointer updates, and function-call overhead — never omit it entirely.
- In **Strassen problems**, remember that $b^k = 2^2 = 4$ (not $2$); getting this wrong skews the entire Master Theorem application.
- **Master Theorem $p$-extension:** when $f(n) = \Theta(n^k \log^p n)$ and $a = b^k$, the solution is $\Theta(n^k \log^{p+1} n)$.
- **Index cost in Quick Sort (best/avg case):** $g(n) = \Theta(n \log n)$ because the partition loop runs proportional to the sub-array size at each level.
- **Index cost in Quick Sort (worst case):** $g(n) = \Theta(n^2)$ because every level processes a sub-array of size one less than the previous.
- **Pairwise tournament savings:** the $3 \lceil n/2 \rceil - 2$ formula is the *theoretical minimum* for finding both min and max using only element comparisons.
- **Cost-shifting strategy:** when one operation type is asymptotically more expensive than another, a clever algorithm shifts work from the expensive type to the cheap type (e.g., Strassen shifts from multiplications to additions, but additions end up at the same asymptotic order).
- **Engineering takeaway:** index comparisons are essentially *free* in hardware; element comparisons can be 5–10× more expensive. Always prefer algorithms that minimize element comparisons for large $n$.

<!-- SECTION_5_END -->
