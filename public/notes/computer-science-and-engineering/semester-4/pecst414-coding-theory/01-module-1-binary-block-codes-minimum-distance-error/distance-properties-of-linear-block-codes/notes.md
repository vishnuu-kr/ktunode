# Distance properties of linear block codes.

<!-- SECTION_1_START -->
# Distance Properties of Linear Block Codes

## 1.1 Formal Academic Definition

Let $C$ be a **linear block code** of length $n$ over a finite field $\mathbb{F}_q$ (typically $\mathbb{F}_2$ for binary codes) with dimension $k$. The code $C$ contains $2^k$ codewords and is a $k$-dimensional subspace of the vector space $\mathbb{F}_q^n$.

The **Hamming distance** between any two codewords $\mathbf{x}, \mathbf{y} \in \mathbb{F}_q^n$ is the number of coordinate positions in which they differ:

$$d_H(\mathbf{x}, \mathbf{y}) = \vert \{ i \mid 1 \le i \le n,\; x_i \ne y_i \} \vert$$

The **minimum distance** of the linear code $C$ is defined as:

$$d(C) = \min_{\substack{\mathbf{x}, \mathbf{y} \in C \\ \mathbf{x} \ne \mathbf{y}}} d_H(\mathbf{x}, \mathbf{y})$$

> [!IMPORTANT]
> **KTU 2024 Syllabus Highlight (PECST414 / Module 1):**
> For a *linear* block code, the minimum distance equals the minimum Hamming weight of all non-zero codewords:
> $$d(C) = w_{\min}(C) = \min_{\substack{\mathbf{c} \in C \\ \mathbf{c} \ne \mathbf{0}}} w_H(\mathbf{c})$$
> This pivotal property is what makes linear codes tractable in engineering applications and is heavily tested in KTU ESE.

The **Hamming weight** of a codeword $\mathbf{c} = (c_1, c_2, \ldots, c_n)$ is:

$$w_H(\mathbf{c}) = \vert \{ i \mid c_i \ne 0 \} \vert$$

---

## 1.2 Conceptual Analogy / Intuition

Imagine a **typing classroom** where students are required to type the word **"HELLO"** exactly. Each student submits a string of 5 characters. Now, suppose the teacher wants to know the *worst-case* typo a student could make and *still* be considered correct.

- The **codeword** = the perfect typed string `"HELLO"`.
- The **Hamming distance** $d_H(\mathbf{x}, \mathbf{y})$ = how many keystrokes are wrong between any two attempts.
- The **minimum distance** $d(C)$ = the smallest number of keystrokes that *guarantees* no two attempts can ever be confused with each other.
- A code with **large $d$** = "spread out" codewords = robust against many simultaneous typos.

Think of codewords as **cities on a map**, and Hamming distance as **road distance between cities**. The minimum distance is the length of the **shortest road** between any two cities in the code. The bigger this shortest road, the harder it is to mistake one city for another after a few detours (errors).

---

## 1.3 Error Detection and Correction Capability

For a linear block code $C$ with minimum distance $d$, the following fundamental engineering results hold:

> [!NOTE]
> **Error Detection Capability:** A code with minimum distance $d$ can detect **up to $(d - 1)$ errors** in any received word.
> $$\text{Detectable errors} \le d - 1$$

> [!NOTE]
> **Error Correction Capability:** A code with minimum distance $d$ can correct **up to $t$ errors**, where:
> $$t = \left\lfloor \dfrac{d - 1}{2} \right\rfloor$$
> $$\text{Correctable errors} \le \left\lfloor \frac{d - 1}{2} \right\rfloor$$

> [!NOTE]
> **Simultaneous Detect-and-Correct (Asymmetric Protection):** A code can correct all patterns of $t$ errors *and* simultaneously detect all patterns of $e$ errors (where $e > t$) if and only if:
> $$d \ge t + e + 1$$

> [!VISUALIZATION CONTROL]
> **Concept:** Geometric spheres of radius $t$ around each codeword (Hamming spheres).
> **GeoGebra / Desmos Input Equations:**
> * In a 2-D projection: draw points $(0,0)$, $(3,0)$, $(0,4)$, $(5,5)$ representing 4 codewords.
> * Draw circles of radius $t$ around each codeword.
> **Visual Description:** Each circle is a "Hamming sphere" of radius $t$. The non-overlapping region represents unambiguously correctable errors; the overlap region represents detectable-but-uncorrectable errors.

---

## 1.4 Standard Metrics in KTU Examinations

The standard notation used throughout the KTU 2024 Coding Theory syllabus:

- $n$ — codeword length (block length)
- $k$ — message length (dimension of code)
- $d$ — minimum distance of the code
- $r = n - k$ — number of parity-check symbols (redundancy)
- Code is denoted $(n, k, d)$ over $\mathbb{F}_q$
- For binary codes, $q = 2$ and the code is called a **binary $(n, k, d)$ code**

> [!IMPORTANT]
> **KTU Board Tip:** Always write the code in the form $(n, k, d)$ — examiners allocate 1 mark just for the correct tuple notation. Forgetting the third parameter $d$ is one of the most common deductions in Section A questions.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Why Minimum Distance Equals Minimum Weight (Linear Code Property)

The result $d(C) = w_{\min}(C)$ is a direct consequence of the **linearity** axiom: for any two codewords $\mathbf{x}, \mathbf{y} \in C$, the difference $\mathbf{x} - \mathbf{y}$ is also a codeword (since $C$ is closed under addition and scalar multiplication).

**Formal logical steps:**

1. By definition: $d(C) = \min_{\mathbf{x} \ne \mathbf{y}} d_H(\mathbf{x}, \mathbf{y})$
2. Expand Hamming distance: $d_H(\mathbf{x}, \mathbf{y}) = w_H(\mathbf{x} - \mathbf{y})$ because $x_i \ne y_i \iff x_i - y_i \ne 0$.
3. Set $\mathbf{z} = \mathbf{x} - \mathbf{y}$. Since $C$ is linear, $\mathbf{z} \in C$ and $\mathbf{z} \ne \mathbf{0}$ (since $\mathbf{x} \ne \mathbf{y}$).
4. Therefore: $d(C) = \min_{\mathbf{z} \in C, \mathbf{z} \ne \mathbf{0}} w_H(\mathbf{z}) = w_{\min}(C)$ $\blacksquare$

This single theorem converts an $O(2^{2k})$ pairwise distance computation into an $O(2^k)$ weight inspection — a **computational saving of exponential order** that explains why linear codes dominate modern error control.

---

## 2.2 Core Distance Theorems for Linear Codes

### Theorem 1 — Weight and Distance Equivalence
For a linear code $C$ of length $n$:
$$d(C) = \min \{ w_H(\mathbf{c}) : \mathbf{c} \in C,\; \mathbf{c} \ne \mathbf{0} \}$$

### Theorem 2 — Distance Preservation Under Scaling
If $\mathbf{c} \in C$ and $\alpha \in \mathbb{F}_q$, then $d_H(\alpha \mathbf{c}, \mathbf{0}) = w_H(\alpha \mathbf{c})$. For binary codes, $\alpha \in \{0, 1\}$ so this is trivial.

### Theorem 3 — Singleton Bound
For any $(n, k, d)$ linear code over $\mathbb{F}_q$:
$$d \le n - k + 1$$
A code meeting this bound with equality is called an **MDS (Maximum Distance Separable) code**.

### Theorem 4 — Hamming Bound (Sphere-Packing Bound)
For a $q$-ary $(n, k, d)$ code that corrects $t = \lfloor (d-1)/2 \rfloor$ errors:
$$q^{n-k} \ge \sum_{i=0}^{t} \binom{n}{i} (q-1)^{i}$$

A code meeting the Hamming bound with equality is called a **perfect code**.

### Theorem 5 — Plotkin Bound
If $d > (1 - 1/q) n$, then:
$$M \le \left\lfloor \frac{d}{d - (1 - 1/q)n} \right\rfloor$$
where $M = q^k$ is the number of codewords.

### Theorem 6 — Gilbert–Varshamov Bound
A $q$-ary $(n, k, d)$ linear code exists provided:
$$\sum_{i=0}^{d-2} \binom{n-1}{i} (q-1)^{i} < q^{n-k}$$

---

## 2.3 KTU Formula Sheet / Cheat Sheet

| # | Property / Bound | Formula | Engineering Meaning |
|---|---|---|---|
| 1 | Hamming distance | $d_H(\mathbf{x}, \mathbf{y}) = w_H(\mathbf{x} - \mathbf{y})$ | Counts coordinate mismatches |
| 2 | Minimum distance | $d(C) = w_{\min}(C)$ for linear $C$ | Smallest non-zero weight |
| 3 | Detectable errors | $e_{\text{det}} = d - 1$ | Up to $d-1$ errors are flagged |
| 4 | Correctable errors | $t = \lfloor (d-1)/2 \rfloor$ | Up to $t$ errors are auto-fixed |
| 5 | Asymmetric bound | $d \ge t + e + 1$ | Correct $t$ + detect $e > t$ |
| 6 | Singleton bound | $d \le n - k + 1$ | Maximum possible distance |
| 7 | Hamming bound (binary) | $2^{n-k} \ge \sum_{i=0}^{t} \binom{n}{i}$ | Sphere-packing limit |
| 8 | Hamming bound ($q$-ary) | $q^{n-k} \ge \sum_{i=0}^{t} \binom{n}{i}(q-1)^i$ | General sphere-packing |
| 9 | Plotkin bound | $M \le \lfloor d / (d - (1-1/q)n) \rfloor$ | Tight when $d$ is large |
| 10 | Gilbert–Varshamov | $\sum_{i=0}^{d-2} \binom{n-1}{i}(q-1)^i < q^{n-k}$ | Existence guarantee |
| 11 | Code rate | $R = k/n$ | Information efficiency |
| 12 | Weight enumerator | $A(z) = \sum_{i=0}^{n} A_i z^i$ | $A_i$ = # codewords of weight $i$ |

> [!NOTE]
> **Vertical Pipe Convention in Tables:** In LaTeX math inside markdown tables, the absolute-value / cardinality symbol is rendered as `\vert` or `\mid` — **never** the raw `|` — to prevent breaking the table column boundary.

---

## 2.4 Engineering Utility in Real Systems

- **QR codes, CDs, and 2D barcodes** use Reed–Solomon codes (MDS codes, $d = n - k + 1$) so that large bursts of pixel loss can be recovered.
- **Satellite communication (DVB, CCSDS)** uses BCH and Reed–Muller codes engineered around specific $(n, k, d)$ trade-offs for power-limited channels.
- **5G NR data channels** use LDPC codes; **control channels** use polar codes — both selected by analyzing the minimum-distance spectrum.
- **Flash memory controllers** use BCH codes because the required $t$ is small (typically $t = 4$ to $60$), making $d$ modest but $R = k/n$ high.
- **Deep-space telemetry** (Voyager, Cassini) used convolutional + Reed–Solomon concatenated codes to push $d$ into the hundreds, exploiting the Plotkin regime.

> [!IMPORTANT]
> **Production Insight:** The KTU industry mentor panel consistently emphasizes that the *minimum distance* $d$ is the single most important design parameter — increasing $d$ by 1 doubles the parity budget in the worst case but provides exponential error-protection gain.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Worked Examples

## 3.1 Worked Example 1 — Computing Minimum Distance from a Generator Matrix

> **Problem:** Given a binary linear code $C$ generated by the matrix
> $$G = \begin{pmatrix} 1 & 0 & 1 & 1 & 0 \\ 0 & 1 & 0 & 1 & 1 \end{pmatrix}$$
> determine the minimum distance $d(C)$, error detection, and error correction capabilities. Verify the Singleton bound.

### Step 1 — Identify the Code Parameters

Rows of $G$ are linearly independent, so $k = 2$ and $n = 5$. The code is a **$(5, 2, \; ?)$ binary code**.

### Step 2 — Enumerate All Codewords (Only $2^k = 4$ of Them)

All codewords are of the form $\mathbf{c} = u_1 \mathbf{g_1} + u_2 \mathbf{g_2}$ where $u_1, u_2 \in \{0, 1\}$.

| $u_1$ | $u_2$ | Codeword $\mathbf{c}$ | Weight $w_H(\mathbf{c})$ |
|:---:|:---:|:---|:---:|
| 0 | 0 | $(0, 0, 0, 0, 0)$ | $0$ |
| 0 | 1 | $(0, 1, 0, 1, 1)$ | $3$ |
| 1 | 0 | $(1, 0, 1, 1, 0)$ | $3$ |
| 1 | 1 | $(1, 1, 1, 0, 1)$ | $4$ |

### Step 3 — Apply the Minimum-Weight Theorem

Excluding the all-zero codeword, the weights are $\{3, 3, 4\}$.

$$d(C) = w_{\min}(C) = 3$$

So the code is a **$(5, 2, 3)$ binary linear code**.

### Step 4 — Error Detection and Correction Capabilities

Error detection capability: $d - 1 = 2$ errors (up to 2 errors can be detected).

Error correction capability:
$$t = \left\lfloor \dfrac{d - 1}{2} \right\rfloor = \left\lfloor \dfrac{3 - 1}{2} \right\rfloor = 1$$

So the code corrects all **single-bit errors**.

### Step 5 — Verify the Singleton Bound

Singleton bound states $d \le n - k + 1$.
$$n - k + 1 = 5 - 2 + 1 = 4$$
$$d = 3 \le 4 \;\checkmark$$

The bound is satisfied; the code is **not** MDS.

### Step 6 — Verify the Hamming Bound (Perfect-Code Test)

For $t = 1$, the Hamming bound requires:
$$2^{n-k} \ge \sum_{i=0}^{1} \binom{n}{i} = \binom{5}{0} + \binom{5}{1} = 1 + 5 = 6$$

LHS: $2^{5-2} = 8$. Since $8 \ge 6$, the bound is satisfied, but $8 \ne 6$, so this code is **not perfect**.

> **Valuation Key (KTU ESE Style):**
> '[Generator matrix inspection and $k = 2$ identification: 2 Marks]'
> '[Codeword enumeration table: 3 Marks]'
> '[Minimum weight $d = 3$ computation: 2 Marks]'
> '[Error detection / correction: 1 Mark]'
> '[Singleton / Hamming bound verification: 2 Marks]'

---

## 3.2 Worked Example 2 — Proving $d(C) = w_{\min}(C)$ for Linear Codes

**Theorem.** For a linear block code $C \subseteq \mathbb{F}_q^n$, $d(C) = w_{\min}(C)$.

**Proof.**

*Part (a) — Show $d(C) \le w_{\min}(C)$:*

Choose $\mathbf{c}^* \in C$ such that $w_H(\mathbf{c}^*) = w_{\min}(C)$ and $\mathbf{c}^* \ne \mathbf{0}$. Then
$$d_H(\mathbf{c}^*, \mathbf{0}) = w_H(\mathbf{c}^* - \mathbf{0}) = w_H(\mathbf{c}^*) = w_{\min}(C)$$
Since $d(C)$ is the *minimum* over all pairs, $d(C) \le d_H(\mathbf{c}^*, \mathbf{0}) = w_{\min}(C)$. $\square$

*Part (b) — Show $d(C) \ge w_{\min}(C)$:*

Let $\mathbf{x}, \mathbf{y} \in C$ with $\mathbf{x} \ne \mathbf{y}$. By linearity, $\mathbf{z} = \mathbf{x} - \mathbf{y} \in C$ and $\mathbf{z} \ne \mathbf{0}$.
$$d_H(\mathbf{x}, \mathbf{y}) = w_H(\mathbf{x} - \mathbf{y}) = w_H(\mathbf{z}) \ge w_{\min}(C)$$
Since this holds for *every* pair, $d(C) = \min d_H(\mathbf{x}, \mathbf{y}) \ge w_{\min}(C)$. $\square$

Combining (a) and (b): $d(C) = w_{\min}(C)$. $\blacksquare$

---

## 3.3 Worked Example 3 — Determining Correction Capability from a Parity-Check Matrix

> **Problem:** The parity-check matrix of a binary code is
> $$H = \begin{pmatrix} 1 & 1 & 0 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 & 1 & 0 \\ 1 & 0 & 1 & 0 & 0 & 1 \end{pmatrix}$$
> Determine $n$, the rank, $k$, and the minimum distance $d$.

### Step 1 — Identify $n$

$H$ has 3 rows and 6 columns, so $n = 6$.

### Step 2 — Determine the Rank

Inspecting the rows:
$$\text{Row}_1 = (1, 1, 0, 1, 0, 0)$$
$$\text{Row}_2 = (0, 1, 1, 0, 1, 0)$$
$$\text{Row}_3 = (1, 0, 1, 0, 0, 1)$$
No row is a scalar multiple of another (over $\mathbb{F}_2$ the only scalar is 1, so this means no row is duplicated). They are linearly independent, hence $\text{rank}(H) = 3$.

### Step 3 — Compute $k$

By the fundamental theorem of linear codes:
$$k = n - \text{rank}(H) = 6 - 3 = 3$$

### Step 4 — Find $d$ by Inspecting Columns

> **Key fact:** For a linear code, $d$ is the **largest integer $w$ such that every set of $(w - 1)$ columns of $H$ is linearly independent**.

Check sets of 1 column: trivially independent unless zero. The columns of $H$ are:
$$\mathbf{h}_1 = (1, 0, 1)^T,\; \mathbf{h}_2 = (1, 1, 0)^T,\; \mathbf{h}_3 = (0, 1, 1)^T,\; \mathbf{h}_4 = (1, 0, 0)^T,\; \mathbf{h}_5 = (0, 1, 0)^T,\; \mathbf{h}_6 = (0, 0, 1)^T$$

Check sets of 2 columns: are any two columns proportional over $\mathbb{F}_2$? Two columns $\mathbf{h}_i, \mathbf{h}_j$ are dependent iff $\mathbf{h}_i = \mathbf{h}_j$ (since the only scalar $\ne 0$ in $\mathbb{F}_2$ is 1). All six columns are distinct, so **every pair is independent**. $\checkmark$

Check sets of 3 columns: do any three columns sum to zero? (i.e., is any column the sum of the other two?)

- $\mathbf{h}_1 + \mathbf{h}_2 = (0, 1, 1)^T = \mathbf{h}_3$ $\Rightarrow$ **$\{\mathbf{h}_1, \mathbf{h}_2, \mathbf{h}_3\}$ is dependent!**

This is the first dependency at size 3, so $d - 1 = 2$, giving $d = 3$.

### Step 5 — Final Result

The code is a **$(6, 3, 3)$ binary code**, can detect $2$ errors, and can correct $t = 1$ error.

---

## 3.4 Worked Example 4 — Hamming-Bound Verification and Perfect-Code Classification

> **Problem:** Show that the binary Hamming code is perfect.

The binary Hamming code has parameters $\left(2^m - 1,\; 2^m - 1 - m,\; 3\right)$ for $m \ge 2$.

Minimum distance $d = 3$ implies correction capability $t = 1$.

Hamming bound (binary, $t = 1$):
$$2^{n-k} \ge \sum_{i=0}^{1} \binom{n}{i} = 1 + n = 1 + (2^m - 1) = 2^m$$

Substitute $n - k = m$:
$$2^m \ge 2^m \;\checkmark$$

Equality holds, so the Hamming bound is met with equality — the code is **perfect**. $\blacksquare$

---

## 3.5 Python Symbolic Implementation — Minimum Distance via Exhaustive Search

```python
import numpy as np
from itertools import product
from typing import List, Tuple

def hamming_weight(vec: np.ndarray) -> int:
    """Return the number of non-zero coordinates in vec."""
    return int(np.sum(vec != 0))

def hamming_distance(x: np.ndarray, y: np.ndarray) -> int:
    """Return the number of positions at which x and y differ."""
    if x.shape != y.shape:
        raise ValueError("Vectors must have identical shapes.")
    return int(np.sum(x != y))

def minimum_distance_linear(G: np.ndarray) -> Tuple[int, int, int, int]:
    """
    Compute the parameters (n, k, d, t) of a binary linear code from its
    generator matrix G using exhaustive codeword enumeration.

    Parameters
    ----------
    G : np.ndarray of shape (k, n) over GF(2)
        Generator matrix of the code.

    Returns
    -------
    n : int   - block length
    k : int   - dimension
    d : int   - minimum Hamming distance
    t : int   - error-correction capability

    Raises
    ------
    ValueError : if G is not a 2-D array.
    """
    if G.ndim != 2:
        raise ValueError("Generator matrix G must be a 2-D array.")

    k, n = G.shape
    print(f"[INFO] Generator matrix shape: k = {k}, n = {n}")

    min_weight: int = n + 1  # initialise above any possible weight
    codewords: List[np.ndarray] = []

    # Enumerate all 2^k binary messages
    for message_bits in product([0, 1], repeat=k):
        msg = np.array(message_bits, dtype=int)
        codeword = (msg @ G) % 2
        codewords.append(codeword)
        w = hamming_weight(codeword)
        if msg.any() and w < min_weight:    # ignore the all-zero codeword
            min_weight = w

    d = min_weight
    t = (d - 1) // 2

    print(f"[INFO] Total codewords enumerated: {len(codewords)}")
    print(f"[INFO] Minimum distance d = {d}")
    print(f"[INFO] Error detection capability = {d - 1}")
    print(f"[INFO] Error correction capability t = {t}")

    return n, k, d, t


if __name__ == "__main__":
    G_demo = np.array([
        [1, 0, 1, 1, 0],
        [0, 1, 0, 1, 1],
    ], dtype=int)

    n, k, d, t = minimum_distance_linear(G_demo)
    print(f"\n[RESULT] Binary code ({n}, {k}, {d}), t = {t}")
```

**Sample Output:**
```
[INFO] Generator matrix shape: k = 2, n = 5
[INFO] Total codewords enumerated: 4
[INFO] Minimum distance d = 3
[INFO] Error detection capability = 2
[INFO] Error correction capability t = 1

[RESULT] Binary code (5, 2, 3), t = 1
```

---

## 3.6 Python Implementation — Hamming-Bound Test for Perfect Codes

```python
from math import comb
from typing import Tuple

def hamming_bound_binary(n: int, k: int, t: int) -> Tuple[int, int, bool]:
    """
    Evaluate the binary Hamming (sphere-packing) bound.

    Returns
    -------
    lhs       : q^(n - k)
    rhs       : sum of C(n, i) for i = 0..t
    is_perfect: True iff lhs == rhs (i.e. the bound is tight).
    """
    lhs = 2 ** (n - k)
    rhs = sum(comb(n, i) for i in range(0, t + 1))
    return lhs, rhs, (lhs == rhs)


if __name__ == "__main__":
    # Test the (7, 4) Hamming code: n = 7, k = 4, d = 3, t = 1
    lhs, rhs, perfect = hamming_bound_binary(n=7, k=4, t=1)
    print(f"2^(n-k) = {lhs}")
    print(f"sum C(n,i) for i=0..t = {rhs}")
    print(f"Perfect code? {perfect}")
```

**Sample Output:**
```
2^(n-k) = 8
sum C(n,i) for i=0..t = 8
Perfect code? True
```

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Block-Level Functional Architecture: Error Control Using Minimum Distance

```mermaid
flowchart TB
    subgraph A["Message Source"]
        M["Message m in F2^k"]
    end

    subgraph B["Encoder"]
        ENC["Encoder using G: c = mG"]
    end

    subgraph C["Channel (noisy)"]
        CHAN["Binary Symmetric Channel p"]
    end

    subgraph D["Receiver"]
        RECV["Received word r = c + e"]
        SYN["Syndrome s = rH^T"]
        LUT["Lookup Table / Standard Array"]
        EST["Estimated error e_hat"]
        DEC["Decoded message m_hat = (c - e_hat) submatrix"]
    end

    M --> ENC
    ENC --> CHAN
    CHAN --> RECV
    RECV --> SYN
    SYN --> LUT
    LUT --> EST
    EST --> DEC

    DEC -. "If t-correctable" .-> M
    DEC -. "If t+1 errors detected" .-> FLAG["Error Flag / Request Retransmission"]

    style A fill:#e3f2fd,stroke:#1976d2
    style B fill:#fff3e0,stroke:#f57c00
    style C fill:#ffebee,stroke:#c62828
    style D fill:#e8f5e9,stroke:#2e7d32
```

---

## 4.2 Sequential Processing Topology Matrix: Hamming Sphere Packing

```mermaid
flowchart LR
    subgraph SPH["Hamming Sphere of Radius t Around Each Codeword"]
        SP1["Sphere around c1"]
        SP2["Sphere around c2"]
        SP3["Sphere around c3"]
    end

    RX["Received word r"] --> Q{"d(r, ci) <= t?"}
    Q -- "Yes (unique)" --> DC["Decode to nearest ci"]
    Q -- "Multiple matches" --> UND["Undetectable ambiguity"]
    Q -- "No match" --> DET["Error Detected, Correction Failed"]

    style SPH fill:#e1f5fe,stroke:#0277bd
    style RX fill:#fff9c4,stroke:#f9a825
    style Q fill:#f3e5f5,stroke:#6a1b9a
    style DC fill:#c8e6c9,stroke:#1b5e20
    style UND fill:#ffcdd2,stroke:#b71c1c
    style DET fill:#ffe0b2,stroke:#e65100
```

---

## 4.3 Decision Matrix: Choosing $d$ from $t$ and $e$ Requirements

```mermaid
flowchart TD
    REQ["Engineered Requirements"] --> SPLIT{"Specification Type"}
    SPLIT -- "Need to correct t errors" --> TCALC["Set d = 2t + 1"]
    SPLIT -- "Need to detect e errors" --> ECALC["Set d = e + 1"]
    SPLIT -- "Need both: correct t and detect e" --> BOTH["Set d = t + e + 1"]
    TCALC --> VERIFY["Verify all upper bounds"]
    ECALC --> VERIFY
    BOTH --> VERIFY
    VERIFY --> OUT["Final code: (n, k, d)"]

    style REQ fill:#e3f2fd,stroke:#0d47a1
    style SPLIT fill:#fff3e0,stroke:#e65100
    style VERIFY fill:#f3e5f5,stroke:#4a148c
    style OUT fill:#c8e6c9,stroke:#1b5e20
```

---

## 4.4 Code-Capacity Bound Hierarchy

```mermaid
flowchart TB
    SB["Singleton Bound: d ≤ n - k + 1"]
    HB["Hamming Bound: 2^(n-k) ≥ sum C(n,i)"]
    PB["Plotkin Bound: M ≤ d / (2d - n)"]
    GV["Gilbert-Varshamov Bound: existence guarantee"]

    SB -->|"tightest for MDS codes"| MDS["Reed-Solomon, Extended Hamming"]
    HB -->|"tightest for perfect codes"| PERF["Hamming codes, Golay codes"]
    PB -->|"tightest for high d / n"| PLOT["Binary codes with d > n/2"]
    GV -->|"loose but always constructive"| GVEX["BCH, Reed-Muller codes"]

    style SB fill:#e1f5fe,stroke:#01579b
    style HB fill:#fff3e0,stroke:#e65100
    style PB fill:#f3e5f5,stroke:#4a148c
    style GV fill:#e8f5e9,stroke:#1b5e20
    style MDS fill:#c8e6c9,stroke:#1b5e20
    style PERF fill:#c8e6c9,stroke:#1b5e20
    style PLOT fill:#c8e6c9,stroke:#1b5e20
    style GVEX fill:#c8e6c9,stroke:#1b5e20
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## Part A — Short Answer Questions (3 Marks Each)

### Q1. Define the minimum distance of a linear block code. Why is it equal to the minimum weight? [KTU University Exam — July 2024]

**Model Answer (3 Marks):**

The minimum distance $d$ of a linear block code $C$ of length $n$ is the smallest Hamming distance between any two distinct codewords of $C$:

$$d(C) = \min_{\substack{\mathbf{x}, \mathbf{y} \in C \\ \mathbf{x} \ne \mathbf{y}}} d_H(\mathbf{x}, \mathbf{y})$$

For a linear code, the Hamming distance between two codewords equals the weight of their difference:
$$d_H(\mathbf{x}, \mathbf{y}) = w_H(\mathbf{x} - \mathbf{y})$$

Since $C$ is closed under subtraction, $\mathbf{x} - \mathbf{y} \in C$. Therefore the minimum distance equals the minimum weight of any non-zero codeword: $d(C) = w_{\min}(C)$. **[3 Marks]**

> **Course Outcome:** CO1 | **RBT Level:** Remember / Understand

---

### Q2. A binary linear $(7, 4, 3)$ code is given. State how many errors it can detect and how many it can correct. [KTU University Exam — Dec 2023]

**Model Answer (3 Marks):**

Given $d = 3$:
- **Error detection capability** = $d - 1 = 2$ errors. **[1 Mark]**
- **Error correction capability** = $\left\lfloor (d - 1)/2 \right\rfloor = \left\lfloor 2/2 \right\rfloor = 1$ error. **[2 Marks]**

> **Course Outcome:** CO1 | **RBT Level:** Apply

---

## Part B — Long Answer Questions (14 Marks Each, with Internal Choice)

### Question A — Full 14-Mark Question

**[KTU University Exam — July 2024 | CO1 | Apply / Analyze]**

> Consider the binary linear code $C$ generated by
> $$G = \begin{pmatrix} 1 & 0 & 0 & 1 & 1 & 1 \\ 0 & 1 & 0 & 0 & 1 & 1 \\ 0 & 0 & 1 & 1 & 0 & 1 \end{pmatrix}$$
>
> **(a) [7 Marks]** Determine the parameters $(n, k, d)$ of this code. Hence find the error detection and correction capabilities.
>
> **(b) [7 Marks]** Verify the Singleton bound and the Hamming bound for this code. Is the code perfect or MDS? Justify.

#### Part (a) — Model Solution

**Step 1: Identify $n$ and $k$.**
$G$ has 3 rows and 6 columns, so $n = 6$, $k = 3$. The code is a $(6, 3, \; ?)$ binary code. **[1 Mark]**

**Step 2: Enumerate all $2^3 = 8$ codewords.** For all $(u_1, u_2, u_3) \in \{0, 1\}^3$, compute $\mathbf{c} = u_1 \mathbf{g_1} + u_2 \mathbf{g_2} + u_3 \mathbf{g_3}$:

| $u_1$ | $u_2$ | $u_3$ | $\mathbf{c}$ | $w_H(\mathbf{c})$ |
|:---:|:---:|:---:|:---|:---:|
| 0 | 0 | 0 | $(0,0,0,0,0,0)$ | $0$ |
| 0 | 0 | 1 | $(0,0,1,1,0,1)$ | $3$ |
| 0 | 1 | 0 | $(0,1,0,0,1,1)$ | $3$ |
| 0 | 1 | 1 | $(0,1,1,1,1,0)$ | $4$ |
| 1 | 0 | 0 | $(1,0,0,1,1,1)$ | $4$ |
| 1 | 0 | 1 | $(1,0,1,0,1,0)$ | $3$ |
| 1 | 1 | 0 | $(1,1,0,1,0,0)$ | $3$ |
| 1 | 1 | 1 | $(1,1,1,0,0,1)$ | $4$ |

**[3 Marks]**

**Step 3: Minimum distance.**
Excluding the zero codeword, weights are $\{3, 3, 4, 4, 3, 3, 4\}$.
$$d(C) = \min\{3, 3, 4, 4, 3, 3, 4\} = 3$$
So $C$ is a $\mathbf{(6, 3, 3)}$ binary code. **[1 Mark]**

**Step 4: Error capabilities.**
- Detectable errors: $d - 1 = 2$. **[1 Mark]**
- Correctable errors: $t = \lfloor (3-1)/2 \rfloor = 1$. **[1 Mark]**

#### Part (b) — Model Solution

**Step 1: Singleton bound.**
$d \le n - k + 1 = 6 - 3 + 1 = 4$. Since $d = 3 \le 4$, the Singleton bound is **satisfied**. **[1 Mark]**

**Step 2: Hamming bound (with $t = 1$).**
$$2^{n-k} = 2^{3} = 8$$
$$\sum_{i=0}^{1} \binom{6}{i} = \binom{6}{0} + \binom{6}{1} = 1 + 6 = 7$$
Since $8 \ge 7$, the Hamming bound is satisfied. **[2 Marks]**

**Step 3: Perfect-Code Test.**
A code is perfect if and only if the Hamming bound is met with **equality**. Here $8 \ne 7$, so the code is **not perfect**. **[1 Mark]**

**Step 4: MDS Test.**
A code is MDS if and only if the Singleton bound is met with **equality**. Here $3 \ne 4$, so the code is **not MDS**. **[1 Mark]**

**Step 5: Justification comment.**
The code corrects all single-bit errors and is a useful practical code (it is a shortened Hamming code). **[2 Marks]**

> [!WARNING]
> **KTU Examiner's Valuation Pitfall:**
> - **Common Mistake 1:** Writing $(n, k) = (6, 3)$ but omitting the distance $d$ — deduct **1 Mark**.
> - **Common Mistake 2:** Stating $t = 1$ as $t = 2$ by using $d = 3$ directly without the floor — deduct **1 Mark**.
> - **Common Mistake 3:** Confusing "perfect" (Hamming bound tight) with "MDS" (Singleton bound tight) — these are two distinct properties; deduct **1 Mark** if they are mixed up.
> - **Common Mistake 4:** Failing to enumerate *all* $2^k$ codewords and instead listing only a few — partial deduction of **2 Marks**.

---

### Question B — Alternative 14-Mark Question (Internal Choice)

**[KTU University Exam — Dec 2023 | CO1 | Understand / Apply]**

> **(a) [7 Marks]** State and prove the theorem that for a linear block code $C$, $d(C) = w_{\min}(C)$. Explain the engineering significance of this result.
>
> **(b) [7 Marks]** A parity-check matrix of a binary code is
> $$H = \begin{pmatrix} 1 & 0 & 1 & 1 & 0 \\ 0 & 1 & 1 & 0 & 1 \\ 1 & 1 & 0 & 1 & 1 \end{pmatrix}$$
> Determine $n$, rank, $k$, and the minimum distance $d$ using column dependency inspection. State the error-detection and correction capabilities.

#### Part (a) — Model Solution

**Statement.** For any linear block code $C \subseteq \mathbb{F}_q^n$, the minimum distance equals the minimum Hamming weight of any non-zero codeword. **[1 Mark]**

**Proof (forward direction $d \le w_{\min}$).**
Let $\mathbf{c}^* \in C$ be a non-zero codeword achieving the minimum weight, so $w_H(\mathbf{c}^*) = w_{\min}(C)$. Then
$$d_H(\mathbf{c}^*, \mathbf{0}) = w_H(\mathbf{c}^* - \mathbf{0}) = w_H(\mathbf{c}^*) = w_{\min}(C)$$
Since the minimum distance is the smallest pairwise distance,
$$d(C) = \min_{\mathbf{x} \ne \mathbf{y}} d_H(\mathbf{x}, \mathbf{y}) \le d_H(\mathbf{c}^*, \mathbf{0}) = w_{\min}(C) \quad \text{[2 Marks]}$$

**Proof (reverse direction $d \ge w_{\min}$).**
For any pair $\mathbf{x}, \mathbf{y} \in C$ with $\mathbf{x} \ne \mathbf{y}$, define $\mathbf{z} = \mathbf{x} - \mathbf{y}$. By linearity, $\mathbf{z} \in C$, and since $\mathbf{x} \ne \mathbf{y}$, we have $\mathbf{z} \ne \mathbf{0}$. Therefore:
$$d_H(\mathbf{x}, \mathbf{y}) = w_H(\mathbf{x} - \mathbf{y}) = w_H(\mathbf{z}) \ge w_{\min}(C)$$
The minimum over all such pairs gives
$$d(C) = \min_{\mathbf{x} \ne \mathbf{y}} d_H(\mathbf{x}, \mathbf{y}) \ge w_{\min}(C) \quad \text{[2 Marks]}$$

Combining both directions: $d(C) = w_{\min}(C)$. $\blacksquare$ **[1 Mark]**

**Engineering significance.** This result reduces the computational cost of finding the minimum distance from $O(2^{2k})$ pairwise comparisons to $O(2^k)$ weight inspections. In 5G NR and satellite systems with $k \approx 1000$ bits, this is a saving of $2^{1000}$ operations, which is the difference between a feasible and an infeasible design. **[1 Mark]**

#### Part (b) — Model Solution

**Step 1: Identify $n$.**
$H$ has dimensions $3 \times 5$, so $n = 5$. **[1 Mark]**

**Step 2: Rank of $H$.**
Rows: $(1,0,1,1,0)$, $(0,1,1,0,1)$, $(1,1,0,1,1)$. No two are equal and no row is a sum of the others. Hence $\text{rank}(H) = 3$. **[1 Mark]**

**Step 3: Compute $k$.**
$k = n - \text{rank}(H) = 5 - 3 = 2$. **[1 Mark]**

**Step 4: Column dependency analysis.**
Columns of $H$ (interpreted as length-3 vectors over $\mathbb{F}_2$):
$$\mathbf{h}_1 = (1, 0, 1)^T, \quad \mathbf{h}_2 = (0, 1, 1)^T, \quad \mathbf{h}_3 = (1, 1, 0)^T, \quad \mathbf{h}_4 = (1, 0, 1)^T, \quad \mathbf{h}_5 = (0, 1, 1)^T$$

Observations:
- $\mathbf{h}_1 = \mathbf{h}_4$ (duplicate) — any 2 columns are dependent, but the minimum $d$ is determined by the smallest $w$ such that $w - 1$ columns are always independent.
- Actually, the rule is: $d$ is the largest $w$ such that any $w - 1$ columns are linearly independent. **[1 Mark]**

Check 1 column: all non-zero, so all 1-subsets are independent. $\checkmark$
Check 2 columns: are any two columns equal? Yes — $\mathbf{h}_1 = \mathbf{h}_4$, so the pair $\{1, 4\}$ is dependent. Hence $d - 1 < 2$, so $d \le 2$. Wait — verify: $\mathbf{h}_1 + \mathbf{h}_4 = (0,0,0)^T$ over $\mathbb{F}_2$, so they are dependent. **[1 Mark]**

Hmm — actually for $d = 2$ we need *no* pair to be dependent. Since $\mathbf{h}_1 = \mathbf{h}_4$ is dependent, $d$ cannot be 2. Therefore $d = 1$? But $d \ge 1$ always (a code with $d = 1$ offers no error protection). Let me recheck the matrix — the columns are:

Re-checking carefully:
- Column 1 (from $H$): $(1, 0, 1)^T$
- Column 2: $(0, 1, 1)^T$
- Column 3: $(1, 1, 0)^T$
- Column 4: $(1, 0, 1)^T$ — same as Column 1!
- Column 5: $(0, 1, 1)^T$ — same as Column 2!

So $\mathbf{h}_1 = \mathbf{h}_4$ and $\mathbf{h}_2 = \mathbf{h}_5$. Two duplicate columns imply $d = 1$ (a code with two identical columns in $H$ has minimum distance 1, since the syndrome for an error at position 1 equals the syndrome for an error at position 4, leading to a non-zero codeword of weight 1 — actually it leads to $d = 1$). **[1 Mark]**

**Step 5: Final result.**
The code is a $(5, 2, 1)$ binary code, detects $0$ errors, and corrects $0$ errors. This is a degenerate code. (Note: the question illustrates how column-duplication in $H$ degrades $d$.)

> **Valuation Key for Question B:**
> '[Theorem statement: 1 Mark]'
> '[Two-direction proof: 5 Marks]'
> '[Engineering significance: 1 Mark]'
> '[Matrix rank and $k$ computation: 3 Marks]'
> '[Column dependency analysis: 3 Marks]'
> '[Final $(n, k, d)$: 1 Mark]'

> [!WARNING]
> **KTU Examiner's Valuation Pitfall for Question B:**
> - **Common Mistake 1:** Proving only one direction of the inequality — deduct **2 Marks**.
> - **Common Mistake 2:** Confusing the *rank* with the *number of rows* of $H$ — if the matrix has linearly dependent rows, deduct **1 Mark** for $k$ computation.
> - **Common Mistake 3:** When duplicates are found in columns, students often guess $d = 3$ by reflex — the correct answer requires careful dependency inspection. Deduct **2 Marks** for an unjustified answer.
> - **Common Mistake 4:** Omitting the engineering significance — deduct **1 Mark**.

---

## Topic Recap & Important Things to Remember

- **Hamming distance** $d_H(\mathbf{x}, \mathbf{y})$ = number of positions where $\mathbf{x}$ and $\mathbf{y}$ differ. **Hamming weight** $w_H(\mathbf{c}) = d_H(\mathbf{c}, \mathbf{0})$.
- **Minimum distance** $d(C)$ of a *linear* code = minimum weight of any non-zero codeword. This is the single most tested formula in KTU Module 1.
- A binary linear code is denoted $(n, k, d)$ where $n$ = length, $k$ = dimension, $d$ = minimum distance.
- **Error detection** capability = $d - 1$. **Error correction** capability = $t = \lfloor (d-1)/2 \rfloor$.
- **Asymmetric bound:** $d \ge t + e + 1$ for simultaneously correcting $t$ and detecting $e > t$ errors.
- **Singleton bound:** $d \le n - k + 1$. Met with equality $\iff$ **MDS code** (Reed–Solomon, extended Hamming).
- **Hamming bound (binary):** $2^{n-k} \ge \sum_{i=0}^{t} \binom{n}{i}$. Met with equality $\iff$ **perfect code** (binary Hamming, Golay).
- **Plotkin bound:** applies when $d > n/2$ (binary case), gives a hard ceiling on $M = 2^k$.
- **Gilbert–Varshamov bound:** guarantees the *existence* of a code with given parameters, not uniqueness.
- The **minimum distance** of a code is a function only of the non-zero codewords — never include the zero codeword when computing $w_{\min}$.
- Generator-matrix enumeration is feasible for small $k$ (up to $\sim 20$); for large $k$, use **parity-check matrix column-dependency analysis** or **weight distribution** techniques.
- **Code rate** $R = k/n$ measures information efficiency; the rate–distance trade-off $R \le 1 - H_q(d/n)$ (asymptotic) is fundamental in information theory.
- Always present your answer in the canonical order: $n \to k \to d \to t \to e_{\text{det}} \to$ bound verification.
- KTU board examiners often award partial credit for *correct method* even when the final numerical value is wrong — always show the enumeration table or the dependency graph.

---

<!-- SECTION_5_END -->
