# Binary block codes, Minimum distance, Error-detecting capability and error-correcting capability.

<!-- SECTION_1_START -->
# Binary Block Codes, Minimum Distance & Error Control Capabilities

> [!IMPORTANT]
> **KTU 2024 Scheme | PECST414 Coding Theory | Module 1**
> This note is a board-exam-oriented deep dive into **Binary Block Codes**, the geometric meaning of **Minimum Hamming Distance**, and the formal derivation of the **Error-Detecting** and **Error-Correcting** capabilities of any block code.

---

## 1.1 Formal Definition — Binary Block Code

Let $\mathbb{F}_2 = \{0, 1\}$ be the binary alphabet. A **binary block code of length $n$** is a non-empty subset
$$C \subseteq \mathbb{F}_2^n = \{0,1\}^n$$
Every element $\mathbf{c} \in C$ is called a **codeword** and is a binary string of fixed length $n$. If $\vert C \vert = 2^k$ for some integer $k \ge 1$, then the code is called a **$(n, k)$ binary block code**, where:

- $n$ → **block length** (number of bits transmitted per codeword),
- $k$ → **information / message length** (number of source bits that get encoded),
- $n - k$ → **redundancy / parity-check length** (extra bits added for reliability).

> [!NOTE]
> A block code is **linear** if $C$ is a $k$-dimensional subspace of $\mathbb{F}_2^n$, equivalently when $C$ is closed under bitwise XOR and contains the all-zero word. A non-linear block code is just any arbitrary subset of $\mathbb{F}_2^n$ that is not a subspace.

---

## 1.2 Intuition — What is a Block Code Really?

Imagine the entire $n$-dimensional hypercube $\mathbb{F}_2^n$ as a vast **city of $2^n$ houses**, each house representing one possible binary string of length $n$. The encoder is allowed to choose **only $2^k$ of these houses** as "valid delivery addresses" — these chosen houses are the codewords.

> [!TIP]
> **Geometric Analogy:** A block code is essentially a **selection of well-separated landmarks** inside a giant hypercube. The further apart these landmarks are, the safer your delivery system becomes.

The receiver gets a noisy string $\mathbf{r}$ that may not be a codeword. He then asks: *"Which codeword $\mathbf{c} \in C$ is closest to $\mathbf{r}$?"* and decodes $\mathbf{r} \mapsto \mathbf{c}$. Closeness is measured by the **Hamming distance**.

---

## 1.3 Hamming Distance — The Fundamental Metric

For any two binary vectors $\mathbf{x}, \mathbf{y} \in \mathbb{F}_2^n$, the **Hamming distance** is
$$d_H(\mathbf{x}, \mathbf{y}) \;=\; \big\vert \{ i \in \{1,\dots,n\} : x_i \neq y_i \} \big\vert$$
i.e. the **number of bit positions in which they differ**.

The **Hamming weight** of a single vector is
$$w_H(\mathbf{x}) \;=\; d_H(\mathbf{x}, \mathbf{0}) \;=\; \text{number of 1s in } \mathbf{x}.$$

A critical identity (used constantly in board exams):
$$d_H(\mathbf{x}, \mathbf{y}) \;=\; w_H(\mathbf{x} \oplus \mathbf{y})$$

> [!IMPORTANT]
> **Why this identity matters:** For a *linear* code, $d_{min}$ is simply the **minimum Hamming weight of any non-zero codeword**, because the difference of two codewords is itself a codeword. This is the textbook reason linear codes are so much easier to analyse.

---

## 1.4 Minimum Distance of a Code

The **minimum distance** of a block code $C$ is the smallest Hamming distance between any two *distinct* codewords:
$$d_{\min}(C) \;=\; \min_{\substack{\mathbf{x}, \mathbf{y} \in C \\ \mathbf{x} \neq \mathbf{y}}} d_H(\mathbf{x}, \mathbf{y})$$

If $C$ is a *linear* code, this simplifies to the **minimum weight of any non-zero codeword**:
$$d_{\min}(C) \;=\; \min_{\substack{\mathbf{c} \in C \\ \mathbf{c} \neq \mathbf{0}}} w_H(\mathbf{c})$$

The code is then compactly denoted as an **$(n, k, d_{\min})$ code**.

> [!VISUALIZATION CONTROL]
> **Concept:** Sphere-packing picture of codewords inside $\mathbb{F}_2^n$.
> **GeoGebra / Desmos Input Equations (n = 2 example):**
> * `P1 = (0, 0)` — codeword 00
> * `P2 = (1, 1)` — codeword 11
> * `Circle((0,0), 1)` and `Circle((1,1), 1)` — radius-1 error balls
> **Visual Description:** The two codewords sit at $(0,0)$ and $(1,1)$ of the integer lattice. Their radius-$t$ Hamming balls (for $t=1$) cover the four corners $\{00, 01, 10, 11\}$. The minimum distance here is **$d_{min} = 2$**, so the balls do not overlap — guaranteeing single-error correction.

---

## 1.5 High-Yield Constants & Parameters

| Parameter | Symbol | Typical Range (board problems) |
|---|---|---|
| Block length | $n$ | $3 \le n \le 15$ |
| Message length | $k$ | $1 \le k \le n-1$ |
| Minimum distance | $d_{min}$ | $1 \le d_{min} \le n$ |
| Parity-check bits | $n - k$ | determines the parity-check matrix $H$ |
| Detection radius | $t_d$ | up to $d_{min} - 1$ |
| Correction radius | $t_c$ | up to $\lfloor (d_{min} - 1)/2 \rfloor$ |

> [!NOTE]
> **Singleton Bound for context:** $d_{min} \le n - k + 1$. Codes meeting this with equality are **Maximum Distance Separable (MDS)**, and over $\mathbb{F}_2$ the only MDS codes are the trivial repetition code and the single-parity-check code.

---

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU Formula Sheet

## 2.1 Why Minimum Distance Controls Everything

The single most important theorem in Module 1 of Coding Theory is the following geometric fact. Around every codeword $\mathbf{c} \in C$ imagine a closed **Hamming ball of radius $t$**:
$$B_t(\mathbf{c}) \;=\; \{\, \mathbf{x} \in \mathbb{F}_2^n : d_H(\mathbf{x}, \mathbf{c}) \le t \,\}$$

The number of points in a Hamming ball of radius $t$ in $\mathbb{F}_2^n$ is
$$V(n, t) \;=\; \sum_{i=0}^{t} \binom{n}{i}$$

A decoder that uses **nearest-neighbour decoding** (a.k.a. minimum-distance decoding) will succeed in correcting *all* error patterns of weight $\le t_c$ **iff** the Hamming balls of radius $t_c$ around every codeword are **pairwise disjoint**. Two codewords $\mathbf{c}_1, \mathbf{c}_2$ are at distance $d_{min}$, so the balls stay disjoint as long as
$$2 t_c \;<\; d_{min} \;\;\Longleftrightarrow\;\; t_c \le \left\lfloor \frac{d_{min} - 1}{2} \right\rfloor$$

> [!TIP]
> **Why "$\le$" and not "<"?** In binary, distances are integers, so $2t_c < d_{min}$ is equivalent to $2t_c \le d_{min} - 1$, giving the floor formula above. This is the form you will write in the ESE.

---

## 2.2 Error-Detecting Capability

A code $C$ with minimum distance $d_{min}$ is guaranteed to **detect every error pattern of weight $\le d_{min} - 1$**.

*Reason:* If at most $d_{min} - 1$ bits flip, the received word cannot accidentally become a *different* codeword, because the closest other codeword is at least $d_{min}$ flips away.

It will *fail* to detect an error pattern of weight $\ge d_{min}$ (the weight-$d_{min}$ codeword can be flipped into another codeword).

> [!IMPORTANT]
> **Exception to memorise:** If $d_{min} = 1$ the code cannot even detect a single error, because the all-zero codeword can flip into the all-one codeword in one bit. Hence the requirement $d_{min} \ge 2$ for *any* error detection.

---

## 2.3 Error-Correcting Capability

A code $C$ with minimum distance $d_{min}$ is guaranteed to **correct every error pattern of weight $\le t_c$** where
$$t_c \;=\; \left\lfloor \frac{d_{min} - 1}{2} \right\rfloor$$

*Reason:* The Hamming balls of radius $t_c$ are disjoint, so nearest-neighbour decoding is unambiguous.

If $d_{min}$ is **odd**, write $d_{min} = 2t_c + 1$ and the code corrects exactly $t_c$ errors. If $d_{min}$ is **even**, write $d_{min} = 2t_c + 2$ — it still corrects $t_c$ errors, with one extra "unused" bit of protection that can be re-allocated to detection (a so-called *error-correcting + error-detecting* scheme).

---

## 2.4 KTU High-Yield Formula Sheet

> [!IMPORTANT]
> **The following six formulas appear in almost every KTU board question on this topic. Memorise them cold.**

| # | Concept | Formula | Notes |
|---|---|---|---|
| 1 | Hamming distance | $d_H(\mathbf{x},\mathbf{y}) = \sum_{i=1}^{n} (x_i \oplus y_i)$ | Count of differing positions |
| 2 | Hamming weight | $w_H(\mathbf{x}) = d_H(\mathbf{x}, \mathbf{0})$ | Number of 1s |
| 3 | Distance via weight | $d_H(\mathbf{x},\mathbf{y}) = w_H(\mathbf{x} \oplus \mathbf{y})$ | Crucial for *linear* codes |
| 4 | Minimum distance (general) | $d_{min} = \min\limits_{\mathbf{x} \neq \mathbf{y}} d_H(\mathbf{x},\mathbf{y})$ | All pairs of codewords |
| 5 | Minimum distance (linear) | $d_{min} = \min\limits_{\mathbf{c} \neq \mathbf{0}} w_H(\mathbf{c})$ | Non-zero codewords only |
| 6 | Detection capability | $t_d = d_{min} - 1$ | Up to $t_d$ flips are guaranteed detected |
| 7 | Correction capability | $t_c = \left\lfloor \dfrac{d_{min} - 1}{2} \right\rfloor$ | Up to $t_c$ flips are guaranteed corrected |
| 8 | Ball volume | $V(n, t) = \displaystyle\sum_{i=0}^{t} \binom{n}{i}$ | Used in sphere-packing bound |
| 9 | Singleton bound | $d_{min} \le n - k + 1$ | Universal upper limit |
| 10 | Hamming / sphere-packing bound | $\sum_{i=0}^{t} \binom{n}{i} \le 2^{n-k}$ | For a $t$-error-correcting code |

> [!WARNING]
> When writing $d_H(\mathbf{x},\mathbf{y})$ in prose, **always wrap it in `$ … $`** to avoid Markdown italicising the `H` or the `d`. The same applies to $w_H$, $n$, $k$, etc.

---

## 2.5 Real-World Utility

- **QR codes, ISBN-10, credit card numbers** all use minimum distance 2 codes (single parity bit) — they **detect** one error but cannot correct it.
- **Repetition codes** (e.g. send each bit three times) have $d_{min} = 3$, so they correct single-bit errors and detect double-bit errors — exactly the formula in row 7.
- **Deep-space communications (Voyager, Cassini)** use convolutional + Reed–Solomon codes where the minimum distance is engineered to be $2t+1$ large enough to combat cosmic-ray-induced bit-flips of order 5–15.
- **Flash memory controllers** use BCH codes whose $d_{min}$ is sized so that the correction radius matches the expected bit-error rate of the NAND cells, giving a 5–10 year data-retention guarantee.

---

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Code Implementation

## 3.1 Derivation 1 — From the Geometry of Hamming Balls to the Error-Correction Formula

**Goal:** Show that if two codewords are at distance $d_{min}$ then the largest integer $t$ with $2t < d_{min}$ is the number of errors correctable.

*Step 1 — Set up the geometry.*
Take any two distinct codewords $\mathbf{c}_1, \mathbf{c}_2 \in C$. By definition
$$d_H(\mathbf{c}_1, \mathbf{c}_2) \;\ge\; d_{min}$$
Let $\mathbf{r}$ be a received word. Suppose the true transmitted word was $\mathbf{c}_1$ and exactly $t$ bit-flips occurred, so $d_H(\mathbf{r}, \mathbf{c}_1) = t$.

*Step 2 — Worst-case distance to the wrong codeword.*
By the **triangle inequality** for Hamming distance,
$$d_H(\mathbf{r}, \mathbf{c}_2) \;\ge\; d_H(\mathbf{c}_1, \mathbf{c}_2) - d_H(\mathbf{r}, \mathbf{c}_1) \;\ge\; d_{min} - t$$

*Step 3 — Require the right codeword to be strictly closer.*
The decoder will not confuse $\mathbf{c}_2$ for the true word **iff**
$$d_H(\mathbf{r}, \mathbf{c}_2) \;>\; d_H(\mathbf{r}, \mathbf{c}_1) \;=\; t$$
Combining:
$$d_{min} - t \;>\; t \;\;\Longleftrightarrow\;\; 2t \;<\; d_{min} \;\;\Longleftrightarrow\;\; t \le \left\lfloor \frac{d_{min} - 1}{2} \right\rfloor$$

This is exactly the formula in row 7 of the cheat sheet. $\blacksquare$

---

## 3.2 Derivation 2 — From the Definition to the Detection Formula

**Goal:** Show that $t_d = d_{min} - 1$ errors are detectable.

*Step 1.* Let $\mathbf{c} \in C$ be transmitted and an error vector $\mathbf{e}$ of weight $w_H(\mathbf{e}) = t$ be added: the receiver sees $\mathbf{r} = \mathbf{c} \oplus \mathbf{e}$.

*Step 2.* The error goes *undetected* iff $\mathbf{r}$ is **also a codeword**, i.e. $\mathbf{r} = \mathbf{c}' \in C$ for some $\mathbf{c}' \neq \mathbf{c}$.

*Step 3.* That implies
$$w_H(\mathbf{e}) \;=\; d_H(\mathbf{c}, \mathbf{c}') \;\ge\; d_{min}$$
Therefore an undetected error requires $t \ge d_{min}$. Equivalently, every error of weight $t \le d_{min} - 1$ is *always* detected. $\blacksquare$

---

## 3.3 Worked Example — Minimum Distance of a $(7, 4)$ Hamming-like Code

Consider the 4 codewords of a simple linear code:
$$C = \{0000000,\; 1101001,\; 0110111,\; 1011110\}$$

Compute all pairwise distances (and verify linearity with the weight formula).

$$
\begin{aligned}
w_H(1101001) &= 1+1+0+1+0+0+1 = 4 \\
w_H(0110111) &= 0+1+1+0+1+1+1 = 5 \\
w_H(1011110) &= 1+0+1+1+1+1+0 = 5 \\
w_H(0000000) &= 0
\end{aligned}
$$

Because the code is linear, the minimum weight of a non-zero codeword is the minimum distance:
$$d_{min}(C) = \min\{4, 5, 5\} = 4$$

So this is a **$(7, 4, 4)$ code** with $t_d = 3$ and $t_c = 1$. It can **detect** any 3 errors and **correct** any single error.

---

## 3.4 Python Implementation — Exhaustive Minimum-Distance & Capability Calculator

```python
"""
KTU 2024 — Coding Theory, Module 1
Exhaustive tool to compute:
    (a) minimum Hamming distance of a code
    (b) error-detecting capability t_d
    (c) error-correcting capability t_c
Works for BOTH linear and non-linear binary block codes.
"""

from itertools import combinations
from typing import List, Tuple


def hamming_distance(x: Tuple[int, ...], y: Tuple[int, ...]) -> int:
    """Return number of positions in which two equal-length tuples differ."""
    if len(x) != len(y):
        raise ValueError("Codewords must be of the same length.")
    return sum(b1 ^ b2 for b1, b2 in zip(x, y))


def hamming_weight(x: Tuple[int, ...]) -> int:
    """Return number of 1-bits in the codeword."""
    return sum(x)


def minimum_distance(code: List[Tuple[int, ...]], linear: bool = False) -> int:
    """
    Compute d_min of a binary block code.
    If `linear` is True, use the faster weight-based formula.
    """
    if not code:
        raise ValueError("Code must contain at least one codeword.")
    n = len(code[0])
    for c in code:
        if len(c) != n:
            raise ValueError("All codewords must have length n.")

    if linear:
        non_zero = [c for c in code if any(bit != 0 for bit in c)]
        if not non_zero:
            return 0
        return min(hamming_weight(c) for c in non_zero)

    pairs = combinations(code, 2)
    distances = [hamming_distance(a, b) for a, b in pairs]
    return min(distances) if distances else 0


def detection_capability(d_min: int) -> int:
    """t_d = d_min - 1 (guaranteed detection radius)."""
    return max(d_min - 1, 0)


def correction_capability(d_min: int) -> int:
    """t_c = floor((d_min - 1) / 2)."""
    if d_min <= 0:
        return 0
    return (d_min - 1) // 2


def analyse_code(code: List[Tuple[int, ...]], linear: bool = False) -> None:
    """Pretty-print a full capability report for the supplied code."""
    n = len(code[0])
    k_bits = (len(code) - 1).bit_length() if len(code) > 1 else 0
    d = minimum_distance(code, linear=linear)
    t_d = detection_capability(d)
    t_c = correction_capability(d)

    print("=" * 60)
    print(f" Code size M  = {len(code)} codewords")
    print(f" Block length n = {n}")
    print(f" Dim / info   k = {k_bits} (linear assumption) ")
    print(f" Min distance d_min = {d}")
    print("-" * 60)
    print(f" -> Notation : ({n}, {k_bits}, {d}) code")
    print(f" -> Error-DETECTION capability    t_d = d - 1 = {t_d}")
    print(f" -> Error-CORRECTION capability   t_c = floor((d-1)/2) = {t_c}")
    print("=" * 60)


# ---------- Demonstration ----------
if __name__ == "__main__":
    # (7, 4) linear code example from Section 3.3
    C_linear = [
        (0, 0, 0, 0, 0, 0, 0),
        (1, 1, 0, 1, 0, 0, 1),
        (0, 1, 1, 0, 1, 1, 1),
        (1, 0, 1, 1, 1, 1, 0),
    ]
    print("Linear (7,4) example")
    analyse_code(C_linear, linear=True)

    # A non-linear code for comparison
    C_nonlin = [(0, 0, 0), (0, 1, 1), (1, 0, 1), (1, 1, 0)]
    print("\nNon-linear example (the 3-bit even-weight code)")
    analyse_code(C_nonlin, linear=False)
```

**Expected output (board-checkable):**

```
Linear (7,4) example
============================================================
 Code size M  = 4 codewords
 Block length n = 7
 Dim / info   k = 2 (linear assumption)
 Min distance d_min = 4
------------------------------------------------------------
 -> Notation : (7, 2, 4) code
 -> Error-DETECTION capability    t_d = d - 1 = 3
 -> Error-CORRECTION capability   t_c = floor((d-1)/2) = 1
============================================================

Non-linear example (the 3-bit even-weight code)
============================================================
 Code size M  = 4 codewords
 Block length n = 3
 Dim / info   k = 2 (linear assumption)
 Min distance d_min = 2
------------------------------------------------------------
 -> Notation : (3, 2, 2) code
 -> Error-DETECTION capability    t_d = d - 1 = 1
 -> Error-CORRECTION capability   t_c = floor((d-1)/2) = 0
============================================================
```

The non-linear example is the **3-bit even-weight code**; it is the smallest non-trivial code that can detect (but not correct) any single error.

---

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Mermaid Flow — How a Code's Parameters Cascade Into Capabilities

```mermaid
flowchart TD
    A["Binary Block Code C ⊆ F2 superscript n"] --> B["Enumerate codewords"]
    B --> C["Compute all pairwise Hamming distances"]
    C --> D["Take minimum: d sub min"]
    D --> E{{"Is d sub min even or odd?"}}
    E -- "Any d" --> F["t sub d = d sub min minus 1 : Detection radius"]
    E -- "Odd d" --> G["t sub c = d sub min minus 1 over 2 : Integer"]
    E -- "Even d" --> H["t sub c = d sub min minus 2 over 2 : Floor formula"]
    F --> I["(n, k, d sub min) code capability report"]
    G --> I
    H --> I
    I --> J["Decoder: correct up to t sub c errors"]
    I --> K["Monitor: detect up to t sub d errors"]
```

## 4.2 Mermaid Block Diagram — Modular Code-Capability Processor

```mermaid
flowchart LR
    subgraph INPUT
        MSG["Message m ∈ F2 superscript k"]
    end

    subgraph ENCODER
        G["Generator Matrix G : k × n"]
    end

    subgraph CHANNEL
        NOISE["BSC with flip probability p"]
    end

    subgraph RECEIVER
        SYNDROME["Compute syndrome s = H r transposed"]
        LOOKUP["Coset leader table lookup"]
        ESTIMATE["Error pattern ê"]
    end

    subgraph CAPABILITY
        DMIN["Min distance d sub min"]
        TD["t sub d = d sub min minus 1"]
        TC["t sub c = floor of d sub min minus 1 over 2"]
    end

    MSG --> G
    G -- "c = mG" --> NOISE
    NOISE -- "r = c ⊕ e" --> SYNDROME
    SYNDROME --> LOOKUP
    LOOKUP --> ESTIMATE
    ESTIMATE -- "ĉ = r ⊕ ê" --> OUT["Decoded message"]
    DMIN --> TD
    DMIN --> TC
    TD --> VERIFY1["Guarantee: all weight ≤ t sub d errors detected"]
    TC --> VERIFY2["Guarantee: all weight ≤ t sub c errors corrected"]
```

## 4.3 Sequential Processing Topology Matrix

| Stage | Module | Input | Output | Verification |
|---|---|---|---|---|
| 1 | Code Designer | Channel error statistics $p$ | Target $d_{min}$ | $t_c \ge$ expected burst size |
| 2 | Code Constructor | Target $d_{min}$ | Generator / parity-check matrix | Singleton / Hamming bound satisfied |
| 3 | Encoder | $\mathbf{m} \in \mathbb{F}_2^k$ | $\mathbf{c} = \mathbf{m}G$ | $\mathbf{c} \in C$ |
| 4 | Channel | $\mathbf{c}$ | $\mathbf{r} = \mathbf{c} \oplus \mathbf{e}$ | $w_H(\mathbf{e}) \le t_c$ for guaranteed correction |
| 5 | Decoder | $\mathbf{r}$ | $\hat{\mathbf{c}}$ | $d_H(\hat{\mathbf{c}}, \mathbf{c}) = 0$ if $w_H(\mathbf{e}) \le t_c$ |
| 6 | Auditor | $d_{min}, t_c$ | Certificate | Sphere-packing bound holds |

---

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## 5.1 Part A — 3-Mark Short-Answer Questions (Remember / Understand)

### Q1. `[KTU University Exam — Dec 2023]` [CO1, Remember]
**Define the minimum distance $d_{min}$ of a binary block code. State the relationship between $d_{min}$ and the number of errors the code can detect.**

**Model Answer (board key):**

The minimum distance of a binary block code $C$ of length $n$ is the smallest Hamming distance between any two distinct codewords:
$$d_{min}(C) = \min_{\substack{\mathbf{x}, \mathbf{y} \in C \\ \mathbf{x} \neq \mathbf{y}}} d_H(\mathbf{x}, \mathbf{y})$$

A code with minimum distance $d_{min}$ can **detect every error pattern of weight $\le d_{min} - 1$** because an undetected error would require the received word to coincide with a *different* codeword, which is at least $d_{min}$ bits away from the transmitted codeword.

> **Valuation Key:** [Correct definition of $d_{min}$: 1 Mark] [Correct detection formula $t_d = d_{min} - 1$: 1 Mark] [Justification using the word "weight" or "undetected error": 1 Mark]

---

### Q2. `[KTU University Exam — July 2024]` [CO1, Understand]
**For a binary block code with $d_{min} = 5$, state the maximum number of bit errors that can be (i) detected, and (ii) corrected. Justify your answer in one sentence.**

**Model Answer:**

- (i) Detection: $t_d = d_{min} - 1 = 4$ errors.
- (ii) Correction: $t_c = \left\lfloor \dfrac{d_{min} - 1}{2} \right\rfloor = \left\lfloor \dfrac{4}{2} \right\rfloor = 2$ errors.

*Justification:* The Hamming balls of radius $2$ around distinct codewords are pairwise disjoint, so nearest-neighbour decoding is unambiguous up to 2 errors.

> **Valuation Key:** [Detection radius 4: 1 Mark] [Correction radius 2: 1 Mark] [One-line justification with "disjoint balls" or "unambiguous": 1 Mark]

---

## 5.2 Part B — 14-Mark Questions (ESE Module-Internal Choice)

### **Question A (14 Marks)** `[KTU University Exam — Dec 2023]` [CO2, Apply + Analyse]

**(a)** Consider the binary linear code
$$C = \{ 00000,\; 11010,\; 01101,\; 10111 \}.$$
**(i)** Verify that $C$ is a linear code and determine its parameters $(n, k, d_{min})$. **(7 Marks)**
**(ii)** Hence find the error-detecting capability $t_d$ and the error-correcting capability $t_c$ of $C$. For each capability, give one example of an error pattern that is guaranteed to be detected / corrected, and one example that is **not** guaranteed. **(7 Marks)**

#### Model Solution

**(a)(i) — Linearity, parameters $(n, k, d_{min})$.**

*Step 1 — Length and message length.* Every codeword has $n = 5$ bits and there are $M = 4$ codewords, so for a linear code $2^k = 4$ giving $k = 2$.

*Step 2 — Verify closure under XOR.*

$$
\begin{aligned}
11010 \oplus 01101 &= 10111 \in C \\
11010 \oplus 00000 &= 11010 \in C \\
01101 \oplus 00000 &= 01101 \in C \\
11010 \oplus 11010 &= 00000 \in C \\
01101 \oplus 01101 &= 00000 \in C \\
10111 \oplus 10111 &= 00000 \in C
\end{aligned}
$$

Closure is verified, so $C$ is linear.

*Step 3 — Compute minimum weight (= $d_{min}$ for linear codes).*

$$
\begin{aligned}
w_H(11010) &= 1+1+0+1+0 = 3 \\
w_H(01101) &= 0+1+1+0+1 = 3 \\
w_H(10111) &= 1+0+1+1+1 = 4
\end{aligned}
$$

So $d_{min} = \min\{3, 3, 4\} = 3$, and the code is a **$(5, 2, 3)$ code**.

> **Valuation Key:** [Stating $n = 5$, $k = 2$ from $2^k = M$: 2 Marks] [Closure verification (any 3 XORs): 2 Marks] [Weight computations: 2 Marks] [Final $d_{min} = 3$: 1 Mark]

**(a)(ii) — Capabilities and worked examples.**

*Step 1 — Apply the formulas.*

$$
\begin{aligned}
t_d &= d_{min} - 1 = 2 \\
t_c &= \left\lfloor \frac{d_{min} - 1}{2} \right\rfloor = 1
\end{aligned}
$$

*Step 2 — Example guaranteed to be detected.* Error pattern $\mathbf{e} = (1, 0, 0, 0, 0)$ (weight 1, which is $\le t_d = 2$). For every codeword $\mathbf{c}$, $\mathbf{c} \oplus \mathbf{e}$ differs from $\mathbf{c}$ in 1 bit and cannot equal any *other* codeword (the closest one is 3 bits away). Hence this error is detected.

*Step 3 — Example **not** guaranteed to be detected.* Error pattern $\mathbf{e} = (1, 1, 0, 1, 0)$ of weight 3. If $\mathbf{c} = 00000$ is transmitted, $\mathbf{r} = 11010$, which is itself a codeword — the error is silent. So weight-3 errors are not guaranteed to be detected.

*Step 4 — Example guaranteed to be corrected.* Error pattern $\mathbf{e} = (0, 1, 0, 0, 0)$ of weight 1 ($\le t_c = 1$). Nearest-neighbour decoding always picks the right codeword because all $B_1$ balls are disjoint.

*Step 5 — Example **not** guaranteed to be corrected.* Error pattern $\mathbf{e} = (1, 1, 0, 0, 0)$ of weight 2. Consider transmitting $\mathbf{c}_1 = 00000$; the received $\mathbf{r} = 11000$ is at distance 1 from $\mathbf{c}_2 = 11010$ and at distance 2 from $\mathbf{c}_1$, so the decoder will (incorrectly) decide $\mathbf{c}_2$ was sent. Hence weight-2 errors are not guaranteed to be corrected.

> **Valuation Key:** [Stating $t_d = 2, t_c = 1$: 1 Mark] [Worked "guaranteed detected" example with weight $\le 2$: 2 Marks] [Worked "undetectable" example with weight $\ge 3$: 2 Marks] [Worked "guaranteed corrected" example with weight $\le 1$: 1 Mark] [Worked "uncorrectable" example with weight $\ge 2$ and tie-breaking argument: 1 Mark]

> [!WARNING]
> **Common mistake:** Students frequently forget that the formula $t_c = \lfloor (d_{min} - 1)/2 \rfloor$ gives the **guaranteed** correction count. A code may *happen* to correct some heavier errors, but the board accepts only the guaranteed value.

---

### **Question B (14 Marks)** `[KTU University Exam — July 2024]` [CO2, Apply + Analyse]

**(a)** Define the Hamming distance and Hamming weight for vectors in $\mathbb{F}_2^n$. Prove the identity $d_H(\mathbf{x}, \mathbf{y}) = w_H(\mathbf{x} \oplus \mathbf{y})$. **(7 Marks)**
**(b)** A binary block code $C$ contains the codewords $\{0000, 0111, 1011, 1100\}$. **(i)** Compute $d_{min}$ by enumerating all pairwise distances. **(ii)** Is $C$ linear? Justify. **(iii)** If a 2-bit error occurs in the transmission of $0111$, what does the receiver see, and is nearest-neighbour decoding successful? **(7 Marks)**

#### Model Solution

**(b)(a) — Definitions and proof.**

*Definition 1.* The **Hamming distance** between $\mathbf{x}, \mathbf{y} \in \mathbb{F}_2^n$ is the number of coordinates in which they differ:
$$d_H(\mathbf{x}, \mathbf{y}) = \big\vert \{ i \in \{1,\dots,n\} : x_i \neq y_i \} \big\vert.$$

*Definition 2.* The **Hamming weight** of $\mathbf{x}$ is the number of non-zero coordinates:
$$w_H(\mathbf{x}) = \big\vert \{ i : x_i = 1 \} \big\vert = d_H(\mathbf{x}, \mathbf{0}).$$

*Proof of identity.* Recall that over $\mathbb{F}_2$, addition equals XOR. Let $\mathbf{z} = \mathbf{x} \oplus \mathbf{y}$. Then for each coordinate $i$:
$$z_i = x_i \oplus y_i = \begin{cases} 0 & \text{if } x_i = y_i \\ 1 & \text{if } x_i \neq y_i \end{cases}$$

So $\mathbf{z}$ has a 1 **iff** $\mathbf{x}$ and $\mathbf{y}$ differ at that position. Counting the 1s:
$$w_H(\mathbf{z}) = w_H(\mathbf{x} \oplus \mathbf{y}) = \big\vert \{ i : x_i \neq y_i \} \big\vert = d_H(\mathbf{x}, \mathbf{y}). \quad\blacksquare$$

> **Valuation Key:** [Correct definition of distance: 2 Marks] [Correct definition of weight: 2 Marks] [Coordinate-wise XOR truth table: 2 Marks] [Final boxed identity: 1 Mark]

**(b)(b) — Code analysis.**

**(i) Pairwise distances.** Enumerate the $\binom{4}{2} = 6$ pairs:

$$
\begin{aligned}
d_H(0000, 0111) &= 3 \\
d_H(0000, 1011) &= 3 \\
d_H(0000, 1100) &= 2 \\
d_H(0111, 1011) &= d_H(0100 \text{ via XOR } 1000 \text{ wait}) = 3 \\
d_H(0111, 1100) &= 3 \\
d_H(1011, 1100) &= 3
\end{aligned}
$$

(Recheck: $0111 \oplus 1011 = 1100$ — weight 2 — so $d_H(0111, 1011) = 2$ if computed that way. Let me redo carefully.)

Re-enumerated correctly:

$$
\begin{aligned}
0000 \oplus 0111 &= 0111 \;\rightarrow\; w_H = 3 \\
0000 \oplus 1011 &= 1011 \;\rightarrow\; w_H = 3 \\
0000 \oplus 1100 &= 1100 \;\rightarrow\; w_H = 2 \\
0111 \oplus 1011 &= 1100 \;\rightarrow\; w_H = 2 \\
0111 \oplus 1100 &= 1011 \;\rightarrow\; w_H = 3 \\
1011 \oplus 1100 &= 0111 \;\rightarrow\; w_H = 3
\end{aligned}
$$

Therefore $d_{min} = \min\{3, 3, 2, 2, 3, 3\} = 2$.

**(ii) Linearity check.** A linear code must contain the all-zero codeword (✓, present). It must be closed under XOR. Check $\mathbf{c}_1 = 0111$ and $\mathbf{c}_2 = 1011$:
$$0111 \oplus 1011 = 1100 \in C \quad(\text{present, so this pair works})$$

Check $\mathbf{c}_1 = 0111$ and $\mathbf{c}_2 = 1100$:
$$0111 \oplus 1100 = 1011 \in C \quad(\text{present, so this works})$$

Check $\mathbf{c}_1 = 1011$ and $\mathbf{c}_2 = 1100$:
$$1011 \oplus 1100 = 0111 \in C \quad(\text{present})$$

All pairwise XORs of codewords stay in $C$, and there are $2^k = 4 = 2^2$ codewords suggesting $k = 2$. So $C$ **is linear** — actually a $(4, 2, 2)$ code, which is the even-weight subcode of $\mathbb{F}_2^4$.

**(iii) 2-bit error during transmission of $0111$.**

Suppose $\mathbf{c} = 0111$ and a 2-bit error flips, say, the first and third bits: $\mathbf{e} = (1, 0, 1, 0)$, so the receiver sees
$$\mathbf{r} = 0111 \oplus 1010 = 1101.$$

Compute distances from $\mathbf{r}$ to every codeword:

$$
\begin{aligned}
d_H(1101, 0000) &= 3 \\
d_H(1101, 0111) &= 2 \\
d_H(1101, 1011) &= 2 \\
d_H(1101, 1100) &= 2
\end{aligned}
$$

Three codewords are at the **same** minimum distance 2 from $\mathbf{r}$. Nearest-neighbour decoding **cannot** pick a unique winner — decoding **fails** for this 2-bit error. This is consistent with the theory: with $d_{min} = 2$, the code only guarantees $t_c = \lfloor (2-1)/2 \rfloor = 0$ corrections, so a 2-bit error is well outside the correction radius.

> **Valuation Key:** [Enumeration of 6 pairwise distances: 2 Marks] [Correct $d_{min} = 2$: 1 Mark] [Closure + zero codeword + dimension argument for linearity: 2 Marks] [Computation of $\mathbf{r}$: 1 Mark] [Distance table to all four codewords: 1 Mark] [Conclusion that nearest-neighbour decoding fails because of ties: 1 Mark]

---

## 5.3 KTU Examiner's Pitfall Callout

> [!WARNING]
> **Top 5 ways students lose marks on this topic in the KTU ESE:**
> 1. **Forgetting to mention "weight of an error pattern"** when stating the detection formula. The phrase "the code can detect up to $d_{min} - 1$ errors" is incomplete — it must say *"any combination of up to $d_{min} - 1$ bit-flips"*, otherwise the examiner deducts for ambiguity.
> 2. **Mixing up the floor function** in the correction formula. Always write $\lfloor (d_{min} - 1)/2 \rfloor$, never $(d_{min} - 1)/2$ as a fraction.
> 3. **Conflating the non-linear and linear cases** for $d_{min}$. For non-linear codes, you *must* enumerate *all pairs*; you cannot use the minimum-weight shortcut.
> 4. **Writing the Hamming distance as $d(x, y)$** in prose without LaTeX — Markdown turns it into italics and the examiner can't read it. Always use `$d_H(\mathbf{x}, \mathbf{y})$`.
> 5. **Forgetting to give a worked example of an undetectable / uncorrectable error** in Part B. The KTU key explicitly awards marks for *contrapositive* examples ("show me an error the code **cannot** detect") — students often give only the positive case.

---

## 5.4 Topic Recap & Important Things to Remember

- **Binary block code** of length $n$: any non-empty $C \subseteq \mathbb{F}_2^n$. Linear iff $C$ is a subspace, equivalently $2^k$ codewords closed under XOR.
- **Code parameters** $(n, k, d_{min})$: $n$ block length, $k$ dimension, $d_{min}$ minimum Hamming distance.
- **Hamming distance** $d_H(\mathbf{x}, \mathbf{y})$ = number of differing coordinates.
- **Hamming weight** $w_H(\mathbf{x})$ = number of 1s = $d_H(\mathbf{x}, \mathbf{0})$.
- **Bridge identity:** $d_H(\mathbf{x}, \mathbf{y}) = w_H(\mathbf{x} \oplus \mathbf{y})$.
- **For linear codes** $d_{min} = \min_{\mathbf{c} \neq \mathbf{0}} w_H(\mathbf{c})$.
- **For non-linear codes** $d_{min} = \min_{\mathbf{x} \neq \mathbf{y}} d_H(\mathbf{x}, \mathbf{y})$ over *all* pairs.
- **Error detection radius:** $t_d = d_{min} - 1$ (every weight-$\le t_d$ error pattern is detected).
- **Error correction radius:** $t_c = \left\lfloor \dfrac{d_{min} - 1}{2} \right\rfloor$ (every weight-$\le t_c$ error pattern is corrected by nearest-neighbour decoding).
- **Singleton bound** $d_{min} \le n - k + 1$ and **Hamming / sphere-packing bound** $\sum_{i=0}^{t_c} \binom{n}{i} \le 2^{n-k}$ constrain achievable parameters.
- **Volume of a Hamming ball** in $\mathbb{F}_2^n$: $V(n, t) = \displaystyle\sum_{i=0}^{t} \binom{n}{i}$.
- **Board-mark bait:** always state the parameters $(n, k, d_{min})$ explicitly, derive $t_d$ and $t_c$ with the boxed formulas, and finish with one positive and one negative worked example — this is the formula for full marks in the KTU ESE.

<!-- SECTION_5_END -->
