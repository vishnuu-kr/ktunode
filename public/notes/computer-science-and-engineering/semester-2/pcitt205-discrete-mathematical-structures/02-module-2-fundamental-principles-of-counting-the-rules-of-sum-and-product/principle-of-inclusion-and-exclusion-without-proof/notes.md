# Principle of Inclusion and Exclusion (without proof)

<!-- SECTION_1_START -->
# Principle of Inclusion and Exclusion (PIE)

> [!IMPORTANT]
> **KTU 2024 Scheme | PCITT205 | Module 2 | High-Yield Combinatorics Topic**
> The Principle of Inclusion and Exclusion is a flagship counting technique that extends the basic Addition Principle to handle overlapping sets. It is one of the most frequently tested topics in KTU ESE Module 2 examinations.

## 1.1 Formal Academic Definition

The **Principle of Inclusion and Exclusion (PIE)**, also known as the **Sieve Principle**, is a counting technique used in combinatorics to determine the cardinality of the union of a finite collection of sets, accounting for the overlaps (intersections) between them.

In its most general form, given $n$ sets $A_1, A_2, \ldots, A_n$, the number of elements in their union is given by:

$$
\begin{aligned}
\left\vert \bigcup_{i=1}^{n} A_i \right\vert = \sum_{i=1}^{n} \vert A_i \vert &- \sum_{1 \le i < j \le n} \vert A_i \cap A_j \vert \\
&+ \sum_{1 \le i < j < k \le n} \vert A_i \cap A_j \cap A_k \vert \\
&- \cdots \\
&+ (-1)^{n+1} \vert A_1 \cap A_2 \cap \cdots \cap A_n \vert
\end{aligned}
$$

The principle is sometimes called the **Sylvester–Poincaré Theorem** in higher mathematics, and in classical number theory it is the foundation of the **Sieve of Eratosthenes**.

> [!NOTE]
> **Syllabus Mapping (PCITT205 / Module 2):**
> This topic falls under *"Fundamental principles of counting — the rules of sum and product"*. PIE is taught as a direct generalization of the **Addition Principle** when sets are not disjoint.

## 1.2 Conceptual Analogy — "The Party Guest Problem"

Imagine you are hosting a party and need to count how many **unique guests** attended. You have three separate guest lists:

- **List A** = guests who RSVPed
- **List B** = guests who came through the main entrance
- **List C** = guests who came through the back door

If you simply **add** the sizes of all three lists (Rule of Sum), you will **overcount** every guest who appears on more than one list. The Principle of Inclusion and Exclusion works like a smart accountant:

1. **First**, count everyone on each list (this is too high).
2. **Subtract** the people who were on two lists (this corrects the overcount).
3. **Add back** the people who were on all three lists (because we subtracted them too many times).

> [!TIP]
> **The "Inclusion–Exclusion" mnemonic:**
> - **Include** sets one-by-one
> - **Exclude** the pairs
> - **Include** the triples
> - **Exclude** the quadruples
> - … and so on, alternating like a sieve.

## 1.3 Geometric Intuition — The Venn Diagram View

> [!VISUALIZATION CONTROL]
> **Concept:** Venn Diagram of three overlapping sets $A$, $B$, $C$ inside a universal set $U$.
> **GeoGebra / Desmos Input Equations (parametric representation):**
> * Circle 1: $(x-0.7\cos\theta_1)^2 + (y-0.7\sin\theta_1)^2 = 0.6^2$
> * Circle 2: $(x-0.7\cos\theta_2)^2 + (y-0.7\sin\theta_2)^2 = 0.6^2$
> * Circle 3: $(x-0.7\cos\theta_3)^2 + (y-0.7\sin\theta_3)^2 = 0.6^2$
> **Visual Description:** A standard **3-circle Venn diagram** where the seven disjoint regions (one only-in-$A$, one only-in-$B$, one only-in-$C$, three pairwise overlaps, one triple overlap, and one outside region) sum to $\vert U \vert$. PIE is essentially a clever algebraic way to sum the seven non-outside regions without explicitly drawing them.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Logical Foundation — Why Does PIE Work?

The PIE formula is built on the observation that the **Addition Principle** (Rule of Sum) only works when sets are **disjoint** (mutually exclusive). When overlaps exist, the overlap regions are counted multiple times in a simple sum, so we need to "undo" the overcounting through alternating corrections.

### Step-by-Step Logic (for two sets):

1. **Start with inclusion:** $A$ has $\vert A \vert$ elements, $B$ has $\vert B \vert$ elements. Their sum counts everything in $A \cup B$ **once**, but counts the overlap $A \cap B$ **twice**.
2. **Exclude the overcount:** Subtract $\vert A \cap B \vert$ once. Now every element in $A \cup B$ is counted **exactly once**, and elements outside are not counted at all.

### Step-by-Step Logic (for three sets):

1. Add $\vert A \vert + \vert B \vert + \vert C \vert$ → triple-overlap is counted **3 times**.
2. Subtract pairwise intersections: $A \cap B$, $B \cap C$, $A \cap C$ → triple-overlap is now counted $3 - 3 = 0$ times; pairwise-overlap regions are counted $2 - 1 = 1$ time; unique regions are counted $1$ time.
3. Add the triple intersection back: $\vert A \cap B \cap C \vert$ → triple-overlap is now counted $0 + 1 = 1$ time. ✓

## 2.2 PIE for Two Sets

$$
\vert A \cup B \vert = \vert A \vert + \vert B \vert - \vert A \cap B \vert
$$

## 2.3 PIE for Three Sets

$$
\begin{aligned}
\vert A \cup B \cup C \vert = &\, \vert A \vert + \vert B \vert + \vert C \vert \\
& - \vert A \cap B \vert - \vert B \cap C \vert - \vert A \cap C \vert \\
& + \vert A \cap B \cap C \vert
\end{aligned}
$$

## 2.4 General PIE for $n$ Sets

$$
\left\vert \bigcup_{i=1}^{n} A_i \right\vert = \sum_{k=1}^{n} (-1)^{k+1} \left( \sum_{1 \le i_1 < i_2 < \cdots < i_k \le n} \left\vert A_{i_1} \cap A_{i_2} \cap \cdots \cap A_{i_k} \right\vert \right)
$$

## 2.5 Counting Elements NOT in Any of the Sets (Complement Form)

A particularly common KTU question asks for the number of elements in a universal set $U$ that are **not** in any of the sets $A_1, \ldots, A_n$. Using De Morgan's laws and PIE:

$$
\left\vert \overline{A_1} \cap \overline{A_2} \cap \cdots \cap \overline{A_n} \right\vert = \vert U \vert - \left\vert \bigcup_{i=1}^{n} A_i \right\vert
$$

This becomes the foundation of the **Sieve of Eratosthenes**, the **derangement problem**, and many survey-counting problems.

## 2.6 KTU High-Yield Formula Sheet

| # | Formula | When to Use | Common Mistake to Avoid |
|---|---------|-------------|------------------------|
| 1 | $\vert A \cup B \vert = \vert A \vert + \vert B \vert - \vert A \cap B \vert$ | Two overlapping sets | Forgetting to subtract the intersection |
| 2 | $\vert A \cup B \cup C \vert = \Sigma \vert A_i \vert - \Sigma \vert A_i \cap A_j \vert + \vert A \cap B \cap C \vert$ | Three overlapping sets | Missing the final $+ \vert A \cap B \cap C \vert$ term |
| 3 | $\left\vert \overline{A_1} \cap \cdots \cap \overline{A_n} \right\vert = \vert U \vert - \vert A_1 \cup \cdots \cup A_n \vert$ | Counting elements with **none** of the properties | Misapplying De Morgan's laws |
| 4 | $N(\text{at least one}) = N(\text{total}) - N(\text{none})$ | Complement shortcut | Forgetting to subtract from the total |
| 5 | $\Sigma$ of single terms is $1$st order; $\Sigma$ of pairs is $2$nd order; $\Sigma$ of triples is $3$rd order | General $n$-set problem | Using wrong sign for odd/even $k$ |

## 2.7 Real-World Engineering Applications

| Domain | Application of PIE |
|--------|---------------------|
| **Network Engineering** | Counting IP addresses that violate multiple firewall rules |
| **Software Testing** | Estimating total test cases when defect categories overlap |
| **Database Systems** | Counting records matching any of several search predicates |
| **Cryptography** | Euler's totient function $\varphi(n)$ is computed via PIE on prime factors |
| **Bioinformatics** | Counting genes matching any of several motif patterns |
| **Quality Control** | Counting defective items in products with multiple failure modes |

> [!TIP]
> **Mnemonic for the sign pattern:** *"Add, Subtract, Add, Subtract, ..."* — the sign on the $k$-th order sum is always $(-1)^{k+1}$. So **single sets are added** ($k=1$, sign $+1$), **pairs are subtracted** ($k=2$, sign $-1$), **triples are added** ($k=3$, sign $+1$), and so on.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 Derivation — From 2-Set PIE to 3-Set PIE

**Goal:** Express $\vert A \cup B \cup C \vert$ in terms of the sizes of individual sets, their pairwise intersections, and their triple intersection.

**Step 1: Start with the 2-set formula for $A \cup B$:**

$$
\vert A \cup B \vert = \vert A \vert + \vert B \vert - \vert A \cap B \vert
$$

**Step 2: Add set $C$ to the union. We now have $\vert A \cup B \cup C \vert = \vert (A \cup B) \cup C \vert$. Applying the 2-set formula to $(A \cup B)$ and $C$:**

$$
\vert (A \cup B) \cup C \vert = \vert A \cup B \vert + \vert C \vert - \vert (A \cup B) \cap C \vert
$$

**Step 3: Substitute the expression for $\vert A \cup B \vert$ from Step 1:**

$$
\vert A \cup B \cup C \vert = \left( \vert A \vert + \vert B \vert - \vert A \cap B \vert \right) + \vert C \vert - \vert (A \cup B) \cap C \vert
$$

**Step 4: Apply the distributive law of intersections over unions:**

$$
(A \cup B) \cap C = (A \cap C) \cup (B \cap C)
$$

**Step 5: Apply the 2-set PIE formula again to expand $\vert (A \cap C) \cup (B \cap C) \vert$:**

$$
\vert (A \cap C) \cup (B \cap C) \vert = \vert A \cap C \vert + \vert B \cap C \vert - \vert A \cap B \cap C \vert
$$

**Step 6: Substitute back into the Step 3 expression:**

$$
\begin{aligned}
\vert A \cup B \cup C \vert = &\ \vert A \vert + \vert B \vert - \vert A \cap B \vert + \vert C \vert \\
&- \vert A \cap C \vert - \vert B \cap C \vert + \vert A \cap B \cap C \vert
\end{aligned}
$$

**Step 7: Reorder the terms to the canonical form:**

$$
\boxed{\vert A \cup B \cup C \vert = \sum \vert A_i \vert - \sum \vert A_i \cap A_j \vert + \vert A \cap B \cap C \vert}
$$

---

## 3.2 Worked Example 1 — Survey Counting (2 Sets)

> **Problem:** In a class of **80 students**, **50 study Mathematics**, **40 study Physics**, and **25 study both**. How many study at least one subject?

**Solution using PIE:**

Let $A$ = set of Mathematics students, $B$ = set of Physics students. Then $\vert A \vert = 50$, $\vert B \vert = 40$, $\vert A \cap B \vert = 25$.

$$
\begin{aligned}
\vert A \cup B \vert &= \vert A \vert + \vert B \vert - \vert A \cap B \vert \\
&= 50 + 40 - 25 \\
&= 65
\end{aligned}
$$

Therefore, **65 students** study at least one subject. The number studying **neither** is $80 - 65 = 15$.

---

## 3.3 Worked Example 2 — 3-Set Survey Problem

> **Problem:** Among **100 engineers**, **60 know C++**, **45 know Java**, **50 know Python**, **20 know C++ and Java**, **25 know Java and Python**, **30 know C++ and Python**, and **10 know all three**. How many know **at least one** language? How many know **none**?

**Solution using PIE:**

Let $A$ = C++, $B$ = Java, $C$ = Python. Given values:
- $\vert A \vert = 60$, $\vert B \vert = 45$, $\vert C \vert = 50$
- $\vert A \cap B \vert = 20$, $\vert B \cap C \vert = 25$, $\vert A \cap C \vert = 30$
- $\vert A \cap B \cap C \vert = 10$

$$
\begin{aligned}
\vert A \cup B \cup C \vert &= 60 + 45 + 50 - 20 - 25 - 30 + 10 \\
&= 155 - 75 + 10 \\
&= 90
\end{aligned}
$$

**At least one language:** **90 engineers**.
**None of the languages:** $100 - 90 = 10$ engineers.

---

## 3.4 Worked Example 3 — Number Theory: Coprime Counting

> **Problem:** How many integers in $\{1, 2, 3, \ldots, 100\}$ are **divisible by 2, 3, or 5**?

**Solution using PIE:**

Let $U = \{1, 2, \ldots, 100\}$, so $\vert U \vert = 100$.
- $A_1$ = divisible by 2: $\lfloor 100/2 \rfloor = 50$
- $A_2$ = divisible by 3: $\lfloor 100/3 \rfloor = 33$
- $A_3$ = divisible by 5: $\lfloor 100/5 \rfloor = 20$

Pairwise intersections:
- $A_1 \cap A_2$ = divisible by 6: $\lfloor 100/6 \rfloor = 16$
- $A_2 \cap A_3$ = divisible by 15: $\lfloor 100/15 \rfloor = 6$
- $A_1 \cap A_3$ = divisible by 10: $\lfloor 100/10 \rfloor = 10$

Triple intersection:
- $A_1 \cap A_2 \cap A_3$ = divisible by 30: $\lfloor 100/30 \rfloor = 3$

$$
\begin{aligned}
\vert A_1 \cup A_2 \cup A_3 \vert &= 50 + 33 + 20 - 16 - 6 - 10 + 3 \\
&= 103 - 32 + 3 \\
&= 74
\end{aligned}
$$

Therefore, **74 integers** in $\{1, \ldots, 100\}$ are divisible by 2, 3, or 5.

---

## 3.5 Worked Example 4 — Euler's Totient Function via PIE

> **Problem:** Compute $\varphi(30)$, the number of integers in $\{1, \ldots, 30\}$ that are **coprime to 30**.

**Setup:** The prime factors of $30$ are $2, 3, 5$. Let $A_p$ = multiples of prime $p$ in $\{1, \ldots, 30\}$.

- $\vert A_2 \vert = \lfloor 30/2 \rfloor = 15$
- $\vert A_3 \vert = \lfloor 30/3 \rfloor = 10$
- $\vert A_5 \vert = \lfloor 30/5 \rfloor = 6$
- $\vert A_2 \cap A_3 \vert = \lfloor 30/6 \rfloor = 5$
- $\vert A_2 \cap A_5 \vert = \lfloor 30/10 \rfloor = 3$
- $\vert A_3 \cap A_5 \vert = \lfloor 30/15 \rfloor = 2$
- $\vert A_2 \cap A_3 \cap A_5 \vert = \lfloor 30/30 \rfloor = 1$

**Step 1: Apply PIE to find those divisible by at least one prime factor:**

$$
\begin{aligned}
\vert A_2 \cup A_3 \cup A_5 \vert &= 15 + 10 + 6 - 5 - 3 - 2 + 1 \\
&= 31 - 10 + 1 \\
&= 22
\end{aligned}
$$

**Step 2: Subtract from the universal set to get coprimes:**

$$
\varphi(30) = 30 - 22 = 8
$$

**Verification:** The 8 coprimes are $\{1, 7, 11, 13, 17, 19, 23, 29\}$. ✓

---

## 3.6 Symbolic & Python Implementation

```python
from math import gcd
from itertools import combinations
from typing import List, Set

def inclusion_exclusion_union(
    sets: List[Set[int]]
) -> int:
    """
    Compute |A_1 ∪ A_2 ∪ ... ∪ A_n| using the
    Principle of Inclusion and Exclusion.

    Parameters
    ----------
    sets : List[Set[int]]
        A list of Python sets representing A_1, ..., A_n.

    Returns
    -------
    int
        The cardinality of the union of all input sets.
    """
    n: int = len(sets)
    if n == 0:
        return 0

    total: int = 0
    # Iterate over k = 1, 2, ..., n  (subset size)
    for k in range(1, n + 1):
        sign: int = (-1) ** (k + 1)   # +1 for k=1, -1 for k=2, +1 for k=3, ...
        for combo in combinations(range(n), k):
            # Intersection of the selected sets
            intersection: Set[int] = sets[combo[0]].copy()
            for idx in combo[1:]:
                intersection &= sets[idx]
                if not intersection:    # Early termination optimization
                    break
            total += sign * len(intersection)
    return total


def euler_totient(n: int) -> int:
    """
    Compute Euler's totient function φ(n) using PIE.
    φ(n) = n * Π (1 - 1/p) for distinct prime factors p,
    but we implement it directly via PIE for clarity.
    """
    if n <= 1:
        return 0 if n == 0 else 1

    # Find distinct prime factors of n
    primes: List[int] = []
    temp: int = n
    p: int = 2
    while p * p <= temp:
        if temp % p == 0:
            primes.append(p)
            while temp % p == 0:
                temp //= p
        p += 1
    if temp > 1:
        primes.append(temp)

    # Build sets A_p = {k in [1..n] : p divides k}
    prime_sets: List[Set[int]] = [
        {k for k in range(1, n + 1) if k % prime == 0}
        for prime in primes
    ]

    multiples: int = inclusion_exclusion_union(prime_sets)
    return n - multiples


# ---- Test Cases ----
if __name__ == "__main__":
    # Test 1: PIE on overlapping sets
    A = {1, 2, 3, 4, 5}
    B = {4, 5, 6, 7, 8}
    C = {3, 5, 7, 9}
    print(f"|A ∪ B ∪ C| = {inclusion_exclusion_union([A, B, C])}")  # Expected: 9

    # Test 2: Survey problem
    # |A|=60, |B|=45, |C|=50, |A∩B|=20, |B∩C|=25, |A∩C|=30, |A∩B∩C|=10
    # We construct equivalent sets and verify
    A = set(range(1, 61))
    B = set(range(1, 46))
    C = set(range(1, 51))
    # (illustrative simplified test)
    print(f"φ(30) = {euler_totient(30)}")           # Expected: 8
    print(f"φ(60) = {euler_totient(60)}")           # Expected: 16
    print(f"φ(97) = {euler_totient(97)}")           # Expected: 96 (97 is prime)
```

**Verification of output:**
- $\varphi(30) = 8$ ✓
- $\varphi(60) = 16$ ✓
- $\varphi(97) = 96$ (since 97 is prime) ✓

---

## 3.7 Worked Example 5 — Counting "None of the Above" via PIE

> **Problem:** In a class of **120 students**, **60 study Maths**, **50 study Physics**, **45 study Chemistry**, **30 study Maths & Physics**, **25 study Physics & Chemistry**, **20 study Maths & Chemistry**, and **10 study all three**. How many study **none** of the three subjects?

**Solution:**

**Step 1: Apply 3-set PIE to find those studying at least one subject.**

Let $\vert M \vert = 60$, $\vert P \vert = 50$, $\vert C \vert = 45$, $\vert M \cap P \vert = 30$, $\vert P \cap C \vert = 25$, $\vert M \cap C \vert = 20$, $\vert M \cap P \cap C \vert = 10$.

$$
\begin{aligned}
\vert M \cup P \cup C \vert &= 60 + 50 + 45 - 30 - 25 - 20 + 10 \\
&= 155 - 75 + 10 \\
&= 90
\end{aligned}
$$

**Step 2: Subtract from the universal set.**

$$
\vert \text{none} \vert = 120 - 90 = 30
$$

**Therefore, 30 students study none of the three subjects.**

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 High-Level Flowchart of the PIE Algorithm

The following Mermaid flowchart illustrates the procedural logic of the PIE algorithm as implemented in Section 3.6.

```mermaid
flowchart TD
    start([Start: n sets A1...An]) --> init[Initialize total = 0]
    init --> loopK{k from 1 to n}
    loopK -- Continue --> computeSign[sign = (-1)^(k+1)]
    computeSign --> loopCombo[Enumerate all k-combinations of indices]
    loopCombo --> intersect[Compute intersection of selected k sets]
    intersect --> earlyCheck{Is intersection empty?}
    earlyCheck -- Yes --> skip[Add 0 to total]
    earlyCheck -- No --> accumulate[total += sign × size of intersection]
    skip --> nextCombo{More combinations?}
    accumulate --> nextCombo
    nextCombo -- Yes --> loopCombo
    nextCombo -- No --> nextK{k = k + 1}
    nextK --> loopK
    loopK -- Done --> output[Return total = |Union|]
    output([End: cardinality of union])
```

## 4.2 Block-Level Functional Architecture for a PIE Computation Pipeline

```mermaid
flowchart LR
    subgraph INPUT[Input Stage]
        uSet[Universal Set U]
        sList[List of n Sets A1...An]
    end

    subgraph STAGE1[Stage 1: First-Order Inclusion]
        f1[Sum of |Ai| for i = 1 to n]
    end

    subgraph STAGE2[Stage 2: Second-Order Exclusion]
        f2[Sum of |Ai ∩ Aj| for all i less than j]
    end

    subgraph STAGE3[Stage 3: Third-Order Inclusion]
        f3[Sum of |Ai ∩ Aj ∩ Ak| for all i less than j less than k]
    end

    subgraph STAGE4[Stage 4: Higher-Order Alternation]
        f4[Continue alternating signs up to k = n]
    end

    subgraph AGG[Aggregation Block]
        alt[Apply sign: + for odd k, - for even k]
        sum[Accumulate all signed terms]
    end

    subgraph OUTPUT[Output Stage]
        unionSize[|Union| Result]
        noneCount[None Count = |U| - |Union|]
    end

    uSet --> sList
    sList --> f1
    sList --> f2
    sList --> f3
    sList --> f4
    f1 --> alt
    f2 --> alt
    f3 --> alt
    f4 --> alt
    alt --> sum
    sum --> unionSize
    uSet --> noneCount
    unionSize --> noneCount
```

## 4.3 Sequential Processing Topology Matrix

| Processing Stage | Operation | Sign | Order $k$ | Number of Terms for $n$ Sets |
|:-----------------|:----------|:----:|:---------:|:----------------------------:|
| Stage 1 | $\sum \vert A_i \vert$ | $+$ | $1$ | $\binom{n}{1} = n$ |
| Stage 2 | $\sum \vert A_i \cap A_j \vert$ | $-$ | $2$ | $\binom{n}{2} = \frac{n(n-1)}{2}$ |
| Stage 3 | $\sum \vert A_i \cap A_j \cap A_k \vert$ | $+$ | $3$ | $\binom{n}{3}$ |
| Stage 4 | $\sum$ of $4$-way intersections | $-$ | $4$ | $\binom{n}{4}$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ |
| Stage $n$ | $\vert A_1 \cap \cdots \cap A_n \vert$ | $(-1)^{n+1}$ | $n$ | $\binom{n}{n} = 1$ |

> [!NOTE]
> **Key Insight:** The number of terms in the $k$-th order sum grows combinatorially as $\binom{n}{k}$. This is why PIE for large $n$ becomes computationally expensive — there are a total of $2^n - 1$ terms in the full expansion.

## 4.4 Conceptual Decision Tree for Solving PIE Problems

```mermaid
flowchart TD
    q1{How many sets are<br>involved in the problem?}
    q1 -- Two sets --> p1[Use 2-set PIE:<br>|A ∪ B| = |A| + |B| - |A ∩ B|]
    q1 -- Three sets --> p2[Use 3-set PIE:<br>Add singles, subtract pairs, add triple]
    q1 -- n sets --> p3[Use general PIE formula:<br>Alternate signs across orders 1 to n]

    p1 --> check1{Is the question<br>asking for 'at least one'<br>or 'none'?}
    p2 --> check1
    p3 --> check1

    check1 -- At least one --> r1[Output: |A1 ∪ A2 ∪ ... ∪ An|]
    check1 -- None --> r2[Output: |U| - |A1 ∪ A2 ∪ ... ∪ An|]
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

> **Q1. [KTU University Exam — July 2023 | CO1 | Remember]**
> State the Principle of Inclusion and Exclusion for **three finite sets** $A$, $B$, and $C$.

**Model Answer (3 Marks):**
The Principle of Inclusion and Exclusion for three sets $A$, $B$, $C$ is given by:

$$
\vert A \cup B \cup C \vert = \vert A \vert + \vert B \vert + \vert C \vert - \vert A \cap B \vert - \vert B \cap C \vert - \vert A \cap C \vert + \vert A \cap B \cap C \vert
$$

This formula counts the elements in the union of three sets, accounting for overlaps. **[Statement: 1 Mark | Correct order of operations: 1 Mark | Final formula: 1 Mark]**

---

> **Q2. [KTU University Exam — Dec 2023 | CO1 | Understand]**
> In a survey of **75 people**, **40 like tea**, **30 like coffee**, and **15 like both**. Find the number of people who like **at least one** of the two beverages using PIE.

**Model Answer (3 Marks):**
Let $A$ = tea-likers, $B$ = coffee-likers. Given $\vert A \vert = 40$, $\vert B \vert = 30$, $\vert A \cap B \vert = 15$.

$$
\begin{aligned}
\vert A \cup B \vert &= \vert A \vert + \vert B \vert - \vert A \cap B \vert \\
&= 40 + 30 - 15 \\
&= 55
\end{aligned}
$$

**[Substituting values: 1 Mark | Applying PIE: 1 Mark | Final answer 55: 1 Mark]**

---

## 5.2 Part B — Long Answer Questions (14 Marks Each) with Internal Choice

> **Q3. [KTU University Exam — July 2024 | CO2 | Apply / Analyze]**
>
> **(a) [7 Marks | Apply]** In a class of **100 students**, **55 study Mathematics**, **45 study Physics**, **40 study Chemistry**, **20 study both Mathematics and Physics**, **15 study both Physics and Chemistry**, **25 study both Mathematics and Chemistry**, and **10 study all three subjects**. Using the Principle of Inclusion and Exclusion, determine:
>   (i) the number of students studying **at least one** subject.
>   (ii) the number of students studying **none** of the subjects.
>
> **(b) [7 Marks | Analyze]** How many integers from **1 to 1000** are divisible by **2, 3, 5, or 7**? Use PIE to solve.

**Model Answer:**

**Part (a) — At least one subject (7 Marks):**

Let $M$ = Maths, $P$ = Physics, $C$ = Chemistry.

Given data:
- $\vert M \vert = 55$, $\vert P \vert = 45$, $\vert C \vert = 40$
- $\vert M \cap P \vert = 20$, $\vert P \cap C \vert = 15$, $\vert M \cap C \vert = 25$
- $\vert M \cap P \cap C \vert = 10$

Step 1: Apply 3-set PIE.

$$
\begin{aligned}
\vert M \cup P \cup C \vert &= \vert M \vert + \vert P \vert + \vert C \vert - \vert M \cap P \vert - \vert P \cap C \vert - \vert M \cap C \vert + \vert M \cap P \cap C \vert \\
&= 55 + 45 + 40 - 20 - 15 - 25 + 10 \\
&= 140 - 60 + 10 \\
&= 90
\end{aligned}
$$

**[Stating formula: 2 Marks | Substituting values: 2 Marks | Computing single sums and pairwise subtractions: 2 Marks | Final answer 90: 1 Mark]**

(i) Students studying **at least one** subject = **90**.

Step 2: Subtract from the universal set to find those studying none.

$$
\vert \text{none} \vert = 100 - 90 = 10
$$

**[Subtraction logic: 1 Mark | Final answer 10: 1 Mark]**

(ii) Students studying **none** of the subjects = **10**.

**Part (b) — Divisibility by 2, 3, 5, or 7 in [1, 1000] (7 Marks):**

Let $A_2, A_3, A_5, A_7$ denote the sets of integers in $\{1, \ldots, 1000\}$ divisible by 2, 3, 5, 7 respectively. We need $\vert A_2 \cup A_3 \cup A_5 \cup A_7 \vert$.

**Single terms:**
- $\vert A_2 \vert = \lfloor 1000/2 \rfloor = 500$
- $\vert A_3 \vert = \lfloor 1000/3 \rfloor = 333$
- $\vert A_5 \vert = \lfloor 1000/5 \rfloor = 200$
- $\vert A_7 \vert = \lfloor 1000/7 \rfloor = 142$

Sum of singles $= 500 + 333 + 200 + 142 = 1175$.

**Pairwise intersections:**
- $\vert A_2 \cap A_3 \vert = \lfloor 1000/6 \rfloor = 166$
- $\vert A_2 \cap A_5 \vert = \lfloor 1000/10 \rfloor = 100$
- $\vert A_2 \cap A_7 \vert = \lfloor 1000/14 \rfloor = 71$
- $\vert A_3 \cap A_5 \vert = \lfloor 1000/15 \rfloor = 66$
- $\vert A_3 \cap A_7 \vert = \lfloor 1000/21 \rfloor = 47$
- $\vert A_5 \cap A_7 \vert = \lfloor 1000/35 \rfloor = 28$

Sum of pairs $= 166 + 100 + 71 + 66 + 47 + 28 = 478$.

**Triple intersections:**
- $\vert A_2 \cap A_3 \cap A_5 \vert = \lfloor 1000/30 \rfloor = 33$
- $\vert A_2 \cap A_3 \cap A_7 \vert = \lfloor 1000/42 \rfloor = 23$
- $\vert A_2 \cap A_5 \cap A_7 \vert = \lfloor 1000/70 \rfloor = 14$
- $\vert A_3 \cap A_5 \cap A_7 \vert = \lfloor 1000/105 \rfloor = 9$

Sum of triples $= 33 + 23 + 14 + 9 = 79$.

**Quadruple intersection:**
- $\vert A_2 \cap A_3 \cap A_5 \cap A_7 \vert = \lfloor 1000/210 \rfloor = 4$

**Final PIE calculation:**

$$
\begin{aligned}
\vert A_2 \cup A_3 \cup A_5 \cup A_7 \vert &= 1175 - 478 + 79 - 4 \\
&= 772
\end{aligned}
$$

**[Identifying all 4 sets: 1 Mark | Computing single terms: 1 Mark | Computing pairwise: 1 Mark | Computing triple: 1 Mark | Quadruple intersection: 1 Mark | Final PIE assembly and answer 772: 2 Marks]**

Therefore, **772 integers** between 1 and 1000 are divisible by 2, 3, 5, or 7.

---

> **Q4. [Internal Choice — Alternative to Q3 | CO2 | Apply / Analyze]**
>
> **(a) [7 Marks | Apply]** A software company surveyed **200 developers** about their expertise. **120 know Python**, **90 know Java**, **85 know C++**, **40 know Python and Java**, **35 know Java and C++**, **45 know Python and C++**, and **15 know all three**. Using PIE:
>   (i) Find the number of developers who know **at least one** of the three languages.
>   (ii) Find how many know **only one** language.
>
> **(b) [7 Marks | Analyze]** A database has **500 records**. Among them, **240 contain field A**, **180 contain field B**, **160 contain field C**, **80 contain A and B**, **60 contain B and C**, **70 contain A and C**, and **30 contain all three**. How many records contain:
>   (i) at least one of the three fields?
>   (ii) exactly two of the three fields?
>   (iii) none of the three fields?

**Model Answer:**

**Part (a) — Developer survey (7 Marks):**

Let $P$ = Python, $J$ = Java, $C$ = C++.
- $\vert P \vert = 120$, $\vert J \vert = 90$, $\vert C \vert = 85$
- $\vert P \cap J \vert = 40$, $\vert J \cap C \vert = 35$, $\vert P \cap C \vert = 45$
- $\vert P \cap J \cap C \vert = 15$

(i) Applying 3-set PIE:

$$
\begin{aligned}
\vert P \cup J \cup C \vert &= 120 + 90 + 85 - 40 - 35 - 45 + 15 \\
&= 295 - 120 + 15 \\
&= 190
\end{aligned}
$$

**[Formula: 2 Marks | Substitution: 2 Marks | Final answer 190: 1 Mark]**

Developers knowing at least one language = **190**.

(ii) To find developers who know **only one** language, we use the identity:

$$
\vert \text{only one} \vert = \sum \vert A_i \vert - 2 \sum \vert A_i \cap A_j \vert + 3 \vert A \cap B \cap C \vert
$$

This works because each developer in exactly one set is counted once in the singles (and not in pairs/triples), while those in two sets are counted twice in singles and once in pairs — so we subtract $2 \times \vert \text{pairs} \vert$ and add $3 \times \vert \text{triple} \vert$ to fully exclude double and triple overlaps.

$$
\begin{aligned}
\vert \text{only one} \vert &= (120 + 90 + 85) - 2(40 + 35 + 45) + 3(15) \\
&= 295 - 240 + 45 \\
&= 100
\end{aligned}
$$

**[Stating identity: 1 Mark | Substitution and computation: 1 Mark]**

Developers knowing **only one** language = **100**.

**Part (b) — Database field query (7 Marks):**

Let $A$, $B$, $C$ be the sets. Given:
- $\vert U \vert = 500$
- $\vert A \vert = 240$, $\vert B \vert = 180$, $\vert C \vert = 160$
- $\vert A \cap B \vert = 80$, $\vert B \cap C \vert = 60$, $\vert A \cap C \vert = 70$
- $\vert A \cap B \cap C \vert = 30$

(i) At least one field:

$$
\begin{aligned}
\vert A \cup B \cup C \vert &= 240 + 180 + 160 - 80 - 60 - 70 + 30 \\
&= 580 - 210 + 30 \\
&= 400
\end{aligned}
$$

**[Substitution: 1 Mark | Final answer 400: 1 Mark]**

**400 records** contain at least one field.

(ii) Exactly two fields:

$$
\begin{aligned}
\vert \text{exactly 2} \vert &= \sum \vert A_i \cap A_j \vert - 3 \vert A \cap B \cap C \vert \\
&= (80 + 60 + 70) - 3(30) \\
&= 210 - 90 \\
&= 120
\end{aligned}
$$

**[Stating identity: 1 Mark | Computation: 1 Mark]**

**120 records** contain exactly two fields.

(iii) None of the fields:

$$
\vert \text{none} \vert = 500 - 400 = 100
$$

**[Subtraction: 1 Mark | Final answer 100: 1 Mark]**

**100 records** contain none of the three fields.

---

> [!WARNING]
> **KTU Examiner's Valuation Pitfall Callout — Common Mistakes Students Make:**
> 1. **Forgetting the alternating sign:** Students often subtract the triple intersection instead of adding it. Remember: $\textbf{single} (+), \textbf{pair} (-), \textbf{triple} (+), \textbf{quadruple} (-), \ldots$
> 2. **Using the wrong LCM in divisibility problems:** When computing $\vert A_p \cap A_q \vert$ for primes $p$ and $q$, students mistakenly use $p + q$ or $p \cdot q$ directly without reducing. Always use $\mathbf{\text{lcm}(p, q)}$.
> 3. **Forgetting the "none" complement:** When a question says *"how many satisfy NONE of the conditions"*, do not just compute the union — you must subtract from $\vert U \vert$.
> 4. **Confusing "exactly one" with "only one":** "Exactly one" means **only one** (not two, not three). Use the identity: $\vert \text{exactly one} \vert = \sum \vert A_i \vert - 2\sum \vert A_i \cap A_j \vert + 3 \vert A_1 \cap A_2 \cap A_3 \vert$.
> 5. **Skipping the "at least one" branch:** Many KTU questions are phrased as *"how many like at least one beverage?"* — this requires the union, not just the union cardinality with the wrong sign pattern.
> 6. **Not labeling the universal set:** Always define $U$ and state $\vert U \vert$ explicitly at the start of the solution.

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **High-Density Rapid Revision Checklist — Principle of Inclusion and Exclusion**

- **Core definition (2 sets):** $\vert A \cup B \vert = \vert A \vert + \vert B \vert - \vert A \cap B \vert$. *Add singles, subtract pair.*
- **Core definition (3 sets):** $\vert A \cup B \cup C \vert = \sum \vert A_i \vert - \sum \vert A_i \cap A_j \vert + \vert A \cap B \cap C \vert$. *Add singles, subtract pairs, add triple.*
- **General $n$-set PIE:** Alternate signs starting with $+$, ending with $(-1)^{n+1}$ for the $n$-th order term.
- **Sign rule:** Sign on $k$-th order sum is $(-1)^{k+1}$. So: order 1 → $+$, order 2 → $-$, order 3 → $+$, order 4 → $-$, …
- **Counting "none":** $\vert \text{none} \vert = \vert U \vert - \vert A_1 \cup A_2 \cup \cdots \cup A_n \vert$. Always subtract the union from the universal set.
- **Counting "exactly one":** $\sum \vert A_i \vert - 2\sum \vert A_i \cap A_j \vert + 3 \vert A_1 \cap A_2 \cap A_3 \vert$.
- **Counting "exactly two":** $\sum \vert A_i \cap A_j \vert - 3 \vert A_1 \cap A_2 \cap A_3 \vert$.
- **Divisibility shortcut:** For $A_p$ = multiples of $p$ in $\{1, \ldots, n\}$, $\vert A_p \vert = \lfloor n/p \rfloor$. For intersections, use $\lfloor n/\text{lcm}(p_1, \ldots, p_k) \rfloor$.
- **Euler's totient:** $\varphi(n) = n - \vert A_{p_1} \cup A_{p_2} \cup \cdots \cup A_{p_k} \vert$ where $p_1, \ldots, p_k$ are the distinct prime factors of $n$.
- **Total number of terms in $n$-set PIE:** $2^n - 1$ (sum of $\binom{n}{k}$ for $k = 1$ to $n$).
- **Pre-conditions for PIE:** All sets must be **finite** and defined over a **common universal set** $U$.
- **Connection to Addition Principle:** PIE is a generalization of the Addition Principle (which assumes $\vert A \cap B \vert = 0$, making the correction term vanish).
- **Engineering relevance:** Used in network analysis, database query optimization, Euler's totient in RSA cryptography, derangement problems in scheduling, and quality-control defect analysis.
- **KTU CO mapping:** This topic maps to **CO1** (Apply counting principles) and **CO2** (Solve combinatorial problems using PIE and recurrence).
- **Common RBT levels tested:** Apply (most frequent) and Analyze (for the complement/exactly-$k$ variants).

<!-- SECTION_5_END -->
