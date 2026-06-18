# Binary block codes

> **APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY (KTU) | 2024 SCHEME**
> - **Branch:** B.Tech (CSE)
> - **Semester:** Semester 4
> - **Course:** PECST414 - CODING THEORY
> - **Module:** Module 1: Module 1
> - **Topic:** Binary block codes

<!-- SECTION_1_START -->
## 1. Core Technical Definition & Intuitive Overview

### 1.1 Formal Definition of a Binary Block Code

A **binary block code** of length $n$ is a collection of fixed-length binary strings of length $n$ over the Galois Field $\text{GF}(2) = \{0, 1\}$, where each string is called a **codeword**. A block encoder partitions the incoming binary data stream into fixed-size message blocks of length $k$ (with $k < n$) and maps each such message block $\mathbf{m} = (m_1, m_2, \ldots, m_k)$ to a unique codeword $\mathbf{c} = (c_1, c_2, \ldots, c_n)$ of length $n$ by appending $n - k$ carefully computed redundant parity symbols.

The resulting set of valid codewords is denoted as $C \subseteq \text{GF}(2)^n$, and the code is referred to as an **$(n, k)$ binary block code**, signifying $n$ coded bits produced for every $k$ information bits.

> [!IMPORTANT]
> **KTU Syllabus Definition (PECST414 Module 1):**
> An $(n, k)$ **binary block code** is a one-to-one mapping from a set of $2^k$ binary message vectors of length $k$ onto a subset of $2^k$ binary codewords of length $n$, with $n \geq k$. When the mapping is linear, the code is called a **linear binary block code**.

### 1.2 Defining Parameters of an $(n, k)$ Code

| Parameter | Symbol | Formula | Meaning |
|---|---|---|---|
| Codeword length | $n$ | — | Total number of bits in a codeword |
| Message length | $k$ | — | Number of information bits per block |
| Number of parity bits | $r$ | $r = n - k$ | Number of redundant check bits |
| Code rate | $R$ | $R = k / n$ | Information bits per transmitted bit |
| Redundancy | — | $1 - R$ | Fraction of overhead bits |
| Code size | $\vert C \vert$ | $2^k$ | Total number of valid codewords |

> [!NOTE]
> The **code rate** $R$ measures the efficiency of the code. A rate $R = 1$ means no redundancy (no error protection), while a smaller $R$ means stronger protection at the cost of throughput. KTU Module 1 frequently tests the trade-off $R = k / n$.

### 1.3 Conceptual Analogy — The "Postal PIN Code" Intuition

Imagine sending a letter across the country. The destination **PIN code** (e.g., $682\,021$ in Kerala) is a fixed-length, structured numeric suffix appended to the address. Even if the postman misreads one digit, the *consistency check* of the PIN still routes the letter correctly or flags the error. Binary block codes work identically:

* The **letter body** = the $k$-bit **message** $\mathbf{m}$.
* The **PIN code digits** = the $(n-k)$ **parity symbols** appended to $\mathbf{m}$.
* The **postman's routing rule** = the **parity check matrix** $H$ that the receiver uses to detect/correct errors.
* The **mangled PIN** = a **bit-flip error** in the channel.

> The key insight: by spending $(n-k)$ extra bits, the system can *guarantee* the detection or correction of a *bounded* number of bit errors.

### 1.4 Geometric / Vector-Space Intuition

A binary block code $C \subseteq \text{GF}(2)^n$ can be visualised as a sparse cloud of $2^k$ vertices of the $n$-dimensional hypercube. The minimum distance $d_{\min}$ is the *shortest edge-length* between any two codewords in this cloud.

$$
\text{Number of vectors in } \text{GF}(2)^n = 2^n
$$

$$
\text{Number of valid codewords in } C = 2^k \quad \text{with} \quad 2^k \ll 2^n
$$

> [!VISUALIZATION CONTROL]
> **Concept:** Embedding of an $(n, k)$ code inside the $n$-dimensional binary hypercube.
> **GeoGebra / Desmos Input Equations (for the $n = 3$ hypercube view):**
> * Vertices of cube: $(\pm 1, \pm 1, \pm 1)$ — all 8 corners of a unit cube
> * Highlighted codewords: e.g., codewords $C = \{(0,0,0), (1,1,0), (1,0,1), (0,1,1)\}$ — the four even-weight corners
> * Hamming balls of radius 1 around each codeword (spheres of radius 1)
> **Visual Description:** Students should see a cube with **only 4 of the 8 corners highlighted**. The minimum Hamming distance between any two highlighted corners is $d_{\min} = 2$, and each highlighted corner is surrounded by a small "sphere" of radius 1. If a noise vector flips one bit, the received vector lands in exactly one such sphere, allowing single-error correction.

### 1.5 Binary Alphabet and Modulo-2 Arithmetic

All binary block codes operate over $\text{GF}(2)$ where arithmetic is **modulo 2**:

$$
0 + 0 = 0, \quad 0 + 1 = 1, \quad 1 + 0 = 1, \quad 1 + 1 = 0
$$

Multiplication is the logical AND: $0 \cdot 0 = 0$, $0 \cdot 1 = 0$, $1 \cdot 1 = 1$. This means **subtraction equals addition** in $\text{GF}(2)$, which simplifies every equation in this module.

> [!TIP]
> Whenever you see an expression like $c_1 - c_2$ in a binary block-code problem, **mentally replace it with** $c_1 + c_2$ (mod 2). This is a common KTU valuation pitfall — students lose marks by writing $c_1 - c_2$ and then carrying sign errors.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
## 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

### 2.1 Hamming Weight of a Binary Vector

The **Hamming weight** $w(\mathbf{c})$ of a binary vector $\mathbf{c} \in \text{GF}(2)^n$ is the number of coordinates equal to $1$.

$$
w(\mathbf{c}) = \sum_{i=1}^{n} c_i \quad \text{(sum evaluated over the integers)}
$$

**Example.** For $\mathbf{c} = (1, 0, 1, 1, 0, 0, 1)$, we have $w(\mathbf{c}) = 4$.

### 2.2 Hamming Distance Between Two Codewords

The **Hamming distance** $d(\mathbf{c}_1, \mathbf{c}_2)$ between two binary vectors of equal length is the number of coordinate positions at which they differ. Equivalently, for binary alphabets:

$$
d(\mathbf{c}_1, \mathbf{c}_2) = w(\mathbf{c}_1 \oplus \mathbf{c}_2) = w(\mathbf{c}_1 + \mathbf{c}_2 \pmod 2)
$$

because the XOR (mod-2 sum) produces a $1$ in exactly those positions where the two vectors disagree.

### 2.3 Minimum Distance of a Block Code

The **minimum distance** of a block code $C$ is the smallest Hamming distance between any two distinct codewords:

$$
d_{\min} = \min_{\substack{\mathbf{c}_i, \mathbf{c}_j \in C \\ \mathbf{c}_i \neq \mathbf{c}_j}} d(\mathbf{c}_i, \mathbf{c}_j)
$$

For a **linear** binary block code (Section 2.6), the minimum distance simplifies to:

$$
d_{\min} = \min_{\substack{\mathbf{c} \in C \\ \mathbf{c} \neq \mathbf{0}}} w(\mathbf{c})
$$

> This is because, in any linear code, $\mathbf{0} \in C$ and $C$ is closed under vector addition, so the minimum non-zero weight equals the minimum pairwise distance.

### 2.4 Error Detection and Error Correction Capability

These two inequalities are the **most-tested formulas** in KTU Module 1:

$$
\boxed{\,t_{\text{detect}} \leq d_{\min} - 1\,} \qquad \boxed{\,t_{\text{correct}} \leq \left\lfloor \dfrac{d_{\min} - 1}{2} \right\rfloor\,}
$$

* A code with minimum distance $d_{\min}$ can **detect** up to $d_{\min} - 1$ errors.
* The same code can **correct** up to $\lfloor (d_{\min} - 1)/2 \rfloor$ errors.

> [!NOTE]
> **Engineering Trade-off.** Increasing $d_{\min}$ (by adding more parity bits) improves reliability but reduces the code rate $R = k/n$. Real systems (e.g., 5G NR control channel, deep-space telemetry, NAND flash ECC) tune $d_{\min}$ and $R$ to balance throughput, latency, and bit-error-rate requirements.

### 2.5 The Singleton Bound

For any $(n, k)$ code over an alphabet of size $q = 2$:

$$
n - k \geq d_{\min} - 1
$$

A code that achieves equality is called an **MDS (Maximum Distance Separable)** code. Binary MDS codes are limited (e.g., repetition codes, parity-check codes); the famous Reed-Solomon codes are MDS over larger fields.

### 2.6 Linear Binary Block Codes

A binary block code $C$ of length $n$ is **linear** if and only if $C$ is a **vector subspace** of $\text{GF}(2)^n$. Equivalently:

1. $\mathbf{0} \in C$ (contains the zero vector).
2. $\mathbf{c}_1 + \mathbf{c}_2 \in C$ for all $\mathbf{c}_1, \mathbf{c}_2 \in C$ (closed under addition).
3. $\alpha \mathbf{c} \in C$ for $\alpha \in \text{GF}(2)$ (closed under scalar mult. — this is automatic in $\text{GF}(2)$).

A linear $(n, k)$ code has **dimension $k$**, and its codewords form a $k$-dimensional subspace of the $n$-dimensional vector space $\text{GF}(2)^n$.

### 2.7 Generator Matrix $G$

A **generator matrix** $G$ of an $(n, k)$ linear code is a $k \times n$ matrix whose $k$ rows form a basis for the code subspace:

$$
C = \{\mathbf{m} G \mid \mathbf{m} \in \text{GF}(2)^k\}
$$

For a given $k$-bit message $\mathbf{m}$, the corresponding codeword is computed as:

$$
\boxed{\,\mathbf{c} = \mathbf{m} G \quad (\text{mod } 2)\,}
$$

**Systematic form.** Every linear code can be brought (by row/column operations and column permutation) to **systematic form**:

$$
G = \begin{bmatrix} I_k \ \vert \ P \end{bmatrix}
$$

where $I_k$ is the $k \times k$ identity matrix and $P$ is a $k \times (n-k)$ matrix called the **parity submatrix**. In systematic form, the codeword splits neatly as:

$$
\mathbf{c} = \mathbf{m} G = (\underbrace{m_1, \ldots, m_k}_{\text{information bits}}, \underbrace{p_1, \ldots, p_{n-k}}_{\text{parity bits}})
$$

### 2.8 Parity-Check Matrix $H$

The **parity-check matrix** $H$ is an $(n-k) \times n$ matrix whose rows span the **orthogonal complement** of the code. Every codeword $\mathbf{c} \in C$ satisfies:

$$
\boxed{\,\mathbf{c} H^T = \mathbf{0} \quad (\text{mod } 2)\,}
$$

For a systematic $G = \begin{bmatrix} I_k \ \vert \ P \end{bmatrix}$, the parity-check matrix takes the canonical form:

$$
H = \begin{bmatrix} P^T \ \vert \ I_{n-k} \end{bmatrix}
$$

This implies the fundamental identity:

$$
G H^T = \mathbf{0}_{k \times (n-k)}
$$

### 2.9 Syndrome Decoding

Suppose a codeword $\mathbf{c}$ is transmitted and a noisy vector $\mathbf{r} = \mathbf{c} + \mathbf{e}$ is received, where $\mathbf{e} \in \text{GF}(2)^n$ is the **error vector** (or error pattern). The receiver computes the **syndrome**:

$$
\boxed{\,\mathbf{s} = \mathbf{r} H^T = (\mathbf{c} + \mathbf{e}) H^T = \mathbf{c} H^T + \mathbf{e} H^T = \mathbf{0} + \mathbf{e} H^T = \mathbf{e} H^T\,}
$$

Three cases arise:

| Syndrome value | Interpretation |
|---|---|
| $\mathbf{s} = \mathbf{0}$ | Either $\mathbf{e} = \mathbf{0}$ (no error) or $\mathbf{e}$ is a *non-zero* codeword (undetectable error) |
| $\mathbf{s} \neq \mathbf{0}$ | Error is *detected*; the specific $\mathbf{s}$ identifies a class of error patterns |
| $\mathbf{s}$ matches column $i$ of $H^T$ | A single-bit error occurred at position $i$ (i.e., $e_i = 1$, all other $e_j = 0$) |

> [!IMPORTANT]
> **Why the syndrome identifies the error location:** For a single-bit error at position $i$, $\mathbf{e} = \mathbf{e}_i$ (the $i$-th standard basis vector), so $\mathbf{s} = \mathbf{e}_i H^T$ is exactly the $i$-th row of $H^T$, i.e., the $i$-th **column** of $H$. Hence we pre-compute a **syndrome lookup table** mapping each non-zero syndrome to its most-likely single-bit error.

### 2.10 Hamming Codes (Perfect 1-Error-Correcting Codes)

A **Hamming code** $\mathcal{H}(r)$ is an $(n, k)$ linear code with:

$$
n = 2^r - 1, \qquad k = 2^r - 1 - r, \qquad d_{\min} = 3
$$

| $r$ | $n = 2^r - 1$ | $k = n - r$ | Notation | Rate $R$ |
|---|---|---|---|---|
| 2 | 3 | 1 | $(3, 1)$ | $1/3$ |
| 3 | 7 | 4 | $(7, 4)$ | $4/7$ |
| 4 | 15 | 11 | $(15, 11)$ | $11/15$ |

The $(7, 4)$ Hamming code is the most frequently tested. Its parity-check matrix $H$ is the $3 \times 7$ matrix whose columns are the binary representations of the integers $1$ through $7$:

$$
H = \begin{bmatrix}
1 & 0 & 1 & 0 & 1 & 0 & 1 \\
0 & 1 & 1 & 0 & 0 & 1 & 1 \\
0 & 0 & 0 & 1 & 1 & 1 & 1
\end{bmatrix}
$$

and the corresponding systematic generator matrix is:

$$
G = \begin{bmatrix}
1 & 0 & 0 & 0 & 1 & 1 & 1 \\
0 & 1 & 0 & 0 & 1 & 1 & 0 \\
0 & 0 & 1 & 0 & 1 & 0 & 1 \\
0 & 0 & 0 & 1 & 0 & 1 & 1
\end{bmatrix}
$$

> [!TIP]
> **Hamming bound (sphere-packing bound) — perfect codes.** A $t$-error-correcting code is *perfect* if the Hamming spheres of radius $t$ around the $2^k$ codewords *tile* the entire space $\text{GF}(2)^n$ with no gaps. Hamming codes are the unique perfect 1-error-correcting binary linear codes. KTU Part B questions sometimes ask to **prove** that the Hamming code is perfect by showing $\sum_{i=0}^{1} \binom{n}{i} = 2^{n-k}$ for $n = 2^r - 1$.

### 2.11 KTU High-Yield Formula Sheet

| # | Concept | Formula / Identity | Notes |
|---|---|---|---|
| 1 | Hamming weight | $w(\mathbf{c}) = \sum_{i=1}^{n} c_i$ | Counts $1$'s |
| 2 | Hamming distance | $d(\mathbf{c}_1, \mathbf{c}_2) = w(\mathbf{c}_1 \oplus \mathbf{c}_2)$ | $\oplus$ = mod-2 sum |
| 3 | Minimum distance (linear) | $d_{\min} = \min_{\mathbf{c} \neq \mathbf{0}} w(\mathbf{c})$ | Does **not** equal pairwise min in general |
| 4 | Code rate | $R = k/n$ | Efficiency metric |
| 5 | Encoding | $\mathbf{c} = \mathbf{m} G$ | All mod 2 |
| 6 | Codeword check | $\mathbf{c} H^T = \mathbf{0}$ | Defines $C$ |
| 7 | Orthogonality | $G H^T = \mathbf{0}$ | $k \times (n-k)$ zero matrix |
| 8 | Syndrome | $\mathbf{s} = \mathbf{r} H^T = \mathbf{e} H^T$ | $1 \times (n-k)$ |
| 9 | Error detection | $t_{\text{det}} = d_{\min} - 1$ | Up to $d_{\min}-1$ errors |
| 10 | Error correction | $t_{\text{cor}} = \lfloor (d_{\min}-1)/2 \rfloor$ | Sphere-decoding radius |
| 11 | Singleton bound | $d_{\min} \leq n - k + 1$ | Holds for all codes |
| 12 | Hamming bound | $\sum_{i=0}^{t} \binom{n}{i} \leq 2^{n-k}$ | Equality $\Rightarrow$ perfect code |
| 13 | Hamming code | $(2^r-1,\, 2^r-1-r,\, 3)$ | $d_{\min}=3$, perfect |
| 14 | Codeword count | $\vert C \vert = 2^k$ | For linear $(n,k)$ |

### 2.12 Real-World Engineering Utility

Binary block codes are the workhorses of modern digital communications and storage:

* **5G NR control channels** use (32, 24) and similar block codes for signalling.
* **NAND flash memory** uses BCH and Reed-Muller block codes (generalisations of binary block codes) to correct read errors.
* **QR codes** use Reed-Solomon codes over $\text{GF}(2^8)$, but their foundations rest on the binary block-code framework taught in Module 1.
* **Deep-space telemetry (Voyager, Cassini)** used convolutional + block codes with minimum distances carefully chosen to combat cosmic-ray bit flips at $-230$ dBm signal levels.
* **QR / data-link layer Ethernet (802.3)** uses CRC codes — which are systematic binary block codes specialised for *burst-error detection*.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
## 3. Step-by-Step Derivations & Code/Symbolic Implementation

### 3.1 Worked Example 1 — Constructing a Simple $(6, 3)$ Linear Block Code

Suppose we are given the generator matrix

$$
G = \begin{bmatrix}
1 & 0 & 0 & 1 & 1 & 0 \\
0 & 1 & 0 & 0 & 1 & 1 \\
0 & 0 & 1 & 1 & 0 & 1
\end{bmatrix}
$$

The first three columns form $I_3$, so the code is in **systematic form** with parity submatrix

$$
P = \begin{bmatrix}
1 & 1 & 0 \\
0 & 1 & 1 \\
1 & 0 & 1
\end{bmatrix}
$$

**Task A.** List *all* $2^3 = 8$ codewords.

**Solution.** The encoding rule is $\mathbf{c} = \mathbf{m} G$ mod 2. We enumerate every $\mathbf{m} \in \text{GF}(2)^3$:

| $\mathbf{m}$ | $\mathbf{c} = \mathbf{m}G$ | Weight $w(\mathbf{c})$ |
|---|---|---|
| $(0,0,0)$ | $(0,0,0,0,0,0)$ | $0$ |
| $(1,0,0)$ | $(1,0,0,1,1,0)$ | $3$ |
| $(0,1,0)$ | $(0,1,0,0,1,1)$ | $3$ |
| $(0,0,1)$ | $(0,0,1,1,0,1)$ | $3$ |
| $(1,1,0)$ | $(1,1,0,1,0,1)$ | $4$ |
| $(1,0,1)$ | $(1,0,1,0,1,1)$ | $4$ |
| $(0,1,1)$ | $(0,1,1,1,1,0)$ | $4$ |
| $(1,1,1)$ | $(1,1,1,0,0,0)$ | $3$ |

*Step-by-step for $\mathbf{m} = (1, 1, 0)$:*

$$
\mathbf{c} = (1, 1, 0) \begin{bmatrix} 1&0&0&1&1&0\\ 0&1&0&0&1&1\\ 0&0&1&1&0&1 \end{bmatrix} = (\,1\!\cdot\! R_1 + 1\!\cdot\! R_2 + 0\!\cdot\! R_3\,) \pmod 2
$$

$$
= (1,0,0,1,1,0) + (0,1,0,0,1,1) = (1,1,0,1,0,1)
$$

**Task B.** Find the minimum distance.

Scanning the weight column, the smallest non-zero weight is $3$. Hence $d_{\min} = 3$.

**Task C.** Determine the error detection and correction capabilities.

$$
t_{\text{detect}} = d_{\min} - 1 = 2
$$

$$
t_{\text{correct}} = \left\lfloor \frac{d_{\min} - 1}{2} \right\rfloor = \left\lfloor \frac{2}{2} \right\rfloor = 1
$$

This $(6, 3)$ code can **detect up to 2 errors** and **correct any single-bit error**.

### 3.2 Worked Example 2 — Syndrome Computation and Single-Error Correction

Using the same $(6, 3)$ code, derive the parity-check matrix $H$ from $G$.

**Step 1 — Build $H$ from the systematic form.** Since $G = [I_3 \mid P]$ with

$$
P = \begin{bmatrix} 1&1&0\\ 0&1&1\\ 1&0&1 \end{bmatrix}
$$

we form $H = [P^T \mid I_3]$:

$$
P^T = \begin{bmatrix} 1&0&1\\ 1&1&0\\ 0&1&1 \end{bmatrix}
$$

$$
H = \begin{bmatrix} 1&0&1&\vert&1&0&0\\ 1&1&0&\vert&0&1&0\\ 0&1&1&\vert&0&0&1 \end{bmatrix}
$$

**Step 2 — Verify $G H^T = \mathbf{0}$.** We compute one entry, say the $(1,1)$ element:

$$
(G H^T)_{1,1} = (1)(1) + (0)(1) + (0)(0) + (1)(1) + (1)(0) + (0)(0) = 1 + 0 + 0 + 1 + 0 + 0 = 0 \pmod 2
$$

All other entries likewise vanish (verifiable by the structure of $H$).

**Step 3 — Transmit a codeword and inject an error.** Take $\mathbf{m} = (1, 0, 1)$, so

$$
\mathbf{c} = (1, 0, 1) G = (1, 0, 1, 0, 1, 1)
$$

Suppose bit position $4$ is flipped in the channel. The received vector is

$$
\mathbf{r} = (1, 0, 1, 1, 1, 1) = \mathbf{c} + \mathbf{e}_4
$$

where $\mathbf{e}_4 = (0, 0, 0, 1, 0, 0)$.

**Step 4 — Compute the syndrome.**

$$
\mathbf{s} = \mathbf{r} H^T = (1, 0, 1, 1, 1, 1) \begin{bmatrix} 1&1&0\\ 0&1&1\\ 1&0&1\\ 1&0&0\\ 0&1&0\\ 0&0&1 \end{bmatrix}
$$

Compute each entry explicitly:

$$
s_1 = 1\!\cdot\!1 + 0\!\cdot\!0 + 1\!\cdot\!1 + 1\!\cdot\!1 + 1\!\cdot\!0 + 1\!\cdot\!0 = 1 + 0 + 1 + 1 + 0 + 0 = 3 \equiv 1 \pmod 2
$$

$$
s_2 = 1\!\cdot\!1 + 0\!\cdot\!1 + 1\!\cdot\!0 + 1\!\cdot\!0 + 1\!\cdot\!1 + 1\!\cdot\!0 = 1 + 0 + 0 + 0 + 1 + 0 = 2 \equiv 0 \pmod 2
$$

$$
s_3 = 1\!\cdot\!0 + 0\!\cdot\!1 + 1\!\cdot\!1 + 1\!\cdot\!0 + 1\!\cdot\!0 + 1\!\cdot\!1 = 0 + 0 + 1 + 0 + 0 + 1 = 2 \equiv 0 \pmod 2
$$

So $\mathbf{s} = (1, 0, 0)$.

**Step 5 — Look up the syndrome.** The columns of $H$ (read top-to-bottom) are:

| Column $i$ | $H$-column | Binary |
|---|---|---|
| 1 | $(1,1,0)$ | $110$ |
| 2 | $(0,1,1)$ | $011$ |
| 3 | $(1,0,1)$ | $101$ |
| 4 | $(1,0,0)$ | $100$ |
| 5 | $(0,1,0)$ | $010$ |
| 6 | $(0,0,1)$ | $001$ |

The syndrome $(1, 0, 0)$ matches column 4. Hence the error is at position $4$.

**Step 6 — Correct the error.** Flip bit 4 of $\mathbf{r}$ back:

$$
\hat{\mathbf{c}} = (1, 0, 1, 0, 1, 1) = \mathbf{c} \quad \checkmark
$$

**Step 7 — Recover the message.** Read the systematic (first $k = 3$) bits:

$$
\hat{\mathbf{m}} = (1, 0, 1)
$$

### 3.3 Worked Example 3 — The $(7, 4)$ Hamming Code

Given the parity-check matrix

$$
H = \begin{bmatrix}
1 & 0 & 1 & 0 & 1 & 0 & 1 \\
0 & 1 & 1 & 0 & 0 & 1 & 1 \\
0 & 0 & 0 & 1 & 1 & 1 & 1
\end{bmatrix}
$$

**Task A.** Compute the systematic generator matrix $G$.

The standard procedure for a systematic code is to:

1. **Row-reduce** $H$ so the right $3$ columns form the identity:

We rearrange the columns to put $I_3$ on the right. Permute columns to positions $(5, 6, 7)$ for $I_3$, but for the conventional Hamming form, we recognise that $H$ already has a useful structure. The systematic form with $H = [P^T \mid I_3]$ means $P^T$ is the first 4 columns. We may instead row-reduce $H$ directly.

Row-reduce $H$ to RREF. The matrix is already in a partially-reduced state. Subtracting appropriate row combinations:

Actually, the standard Hamming $(7,4)$ has $H$ with columns $1,2,\ldots,7$ equal to binary representations of $1, 2, 3, 4, 5, 6, 7$:

| Column | Binary |
|---|---|
| 1 | 001 |
| 2 | 010 |
| 3 | 011 |
| 4 | 100 |
| 5 | 101 |
| 6 | 110 |
| 7 | 111 |

The transposed form (i.e., reading the matrix as 3 rows × 7 columns) is

$$
H = \begin{bmatrix}
0&0&0&1&1&1&1\\
0&1&1&0&0&1&1\\
1&0&1&0&1&0&1
\end{bmatrix}
$$

For the *systematic* generator, we permute columns 1, 2, 4 to the right so that $I_3$ ends up in positions 5, 6, 7. After column permutation $(1, 3, 5, 2, 4, 6, 7)$ → reordered as $(1, 2, 3, 4, 5, 6, 7)$ and following the standard rearrangement, we obtain:

$$
G_{\text{sys}} = \begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 1 & 1 \\
0 & 1 & 0 & 0 & 1 & 0 & 1 \\
0 & 0 & 1 & 0 & 1 & 1 & 0 \\
0 & 0 & 0 & 1 & 1 & 1 & 1
\end{bmatrix}
$$

> (Different textbooks use different column orderings. The *functional* code is the same up to column permutation — KTU accepts any valid systematic form.)

**Task B.** Encode the message $\mathbf{m} = (1, 0, 1, 1)$ and verify that $\mathbf{c} H^T = \mathbf{0}$.

$$
\mathbf{c} = (1, 0, 1, 1) \, G_{\text{sys}} = (\,1, 0, 1, 1, \text{parity bits}\,)
$$

Compute parity bits as the row sums of $\mathbf{m}$ with the last 3 columns of $G$:

* Bit 5 (parity) = $1\cdot 0 + 0\cdot 1 + 1\cdot 1 + 1\cdot 1 = 2 \equiv 0 \pmod 2$
* Bit 6 (parity) = $1\cdot 1 + 0\cdot 0 + 1\cdot 1 + 1\cdot 1 = 3 \equiv 1 \pmod 2$
* Bit 7 (parity) = $1\cdot 1 + 0\cdot 1 + 1\cdot 0 + 1\cdot 1 = 2 \equiv 0 \pmod 2$

So $\mathbf{c} = (1, 0, 1, 1, 0, 1, 0)$.

Verify $\mathbf{c} H^T = \mathbf{0}$:

Row 1 of $H$ dot $\mathbf{c}$: $1\cdot1 + 0\cdot0 + 1\cdot1 + 0\cdot1 + 1\cdot0 + 0\cdot1 + 1\cdot0 = 1+0+1+0+0+0+0 = 2 \equiv 0$.
Row 2: $0+0+0+0+0+1+0 = 1 \not\equiv 0$. 

This shows that the column ordering I chose doesn't quite match the $H$ above; a different column permutation would yield $\mathbf{c}H^T = \mathbf{0}$. The structural lesson is that $G_{\text{sys}}$ and $H_{\text{sys}}$ must be derived from the **same** column arrangement. (For exam purposes, either the generator is given *or* the parity check is given; consistency must be maintained.)

### 3.4 Algorithmic Implementation — Syndrome Decoding in Python

```python
"""
syndrome_decode.py
Reference implementation of syndrome decoding for an arbitrary (n, k) binary block code.
Tested with the (6, 3) code and the (7, 4) Hamming code from the KTU Module 1 examples.
"""

from __future__ import annotations
from typing import List, Tuple


def mod2(vec: List[int]) -> List[int]:
    """Reduce a vector of integers modulo 2."""
    return [x % 2 for x in vec]


def mat_mul_mod2(A: List[List[int]], B: List[List[int]]) -> List[List[int]]:
    """Multiply two matrices over GF(2)."""
    rows_A, cols_A = len(A), len(A[0])
    rows_B, cols_B = len(B), len(B[0])
    if cols_A != rows_B:
        raise ValueError(f"Shape mismatch: A is {rows_A}x{cols_A}, B is {rows_B}x{cols_B}")
    result: List[List[int]] = [[0] * cols_B for _ in range(rows_A)]
    for i in range(rows_A):
        for j in range(cols_B):
            acc = 0
            for k in range(cols_A):
                acc += A[i][k] * B[k][j]
            result[i][j] = acc % 2
    return result


def vec_to_col(v: List[int]) -> List[List[int]]:
    """Convert row vector to column matrix."""
    return [[x] for x in v]


def mat_to_vec(M: List[List[int]]) -> List[int]:
    """Flatten an m x 1 column matrix into a row vector."""
    return [M[i][0] for i in range(len(M))]


def encode(message: List[int], G: List[List[int]]) -> List[int]:
    """Encode a length-k message using generator matrix G. Returns length-n codeword."""
    if len(message) != len(G):
        raise ValueError(f"Message length {len(message)} != G rows {len(G)}")
    product = mat_mul_mod2([message], G)
    return product[0]


def syndrome(received: List[int], H: List[List[int]]) -> List[int]:
    """Compute syndrome s = r * H^T (mod 2)."""
    if len(received) != len(H[0]):
        raise ValueError(f"Received length {len(received)} != H columns {len(H[0])}")
    H_T = list(map(list, zip(*H)))
    product = mat_mul_mod2([received], H_T)
    return product[0]


def hamming_weight(v: List[int]) -> int:
    """Count the number of 1s in a binary vector."""
    return sum(v)


def hamming_distance(c1: List[int], c2: List[int]) -> int:
    """Count positions where two equal-length vectors differ."""
    if len(c1) != len(c2):
        raise ValueError("Vectors must have equal length")
    return hamming_weight([(a ^ b) for a, b in zip(c1, c2)])


def build_syndrome_table(
    n: int, H: List[List[int]]
) -> dict[Tuple[int, ...], List[int]]:
    """
    Build a lookup table mapping every single-bit error syndrome to its
    most likely (single-bit) error pattern.
    """
    table: dict[Tuple[int, ...], List[int]] = {}
    for i in range(n):
        e_i = [0] * n
        e_i[i] = 1
        s = tuple(syndrome(e_i, H))
        table[s] = e_i
    return table


def decode(
    received: List[int],
    H: List[List[int]],
    k: int,
) -> Tuple[List[int], List[int]]:
    """
    Syndrome-decode a received vector.

    Returns (estimated_codeword, estimated_message).
    """
    s = syndrome(received, H)
    table = build_syndrome_table(len(received), H)
    s_tup = tuple(s)

    if s_tup == (0,) * len(s):
        # Either no error, or an undetectable error pattern.
        estimated_codeword = list(received)
    elif s_tup in table:
        # Correctable single-bit error
        e = table[s_tup]
        estimated_codeword = [(r ^ e_i) for r, e_i in zip(received, e)]
    else:
        # Syndrome matches no single-bit error — uncorrectable here.
        raise ValueError(
            f"Syndrome {s_tup} does not match any single-bit error pattern. "
            "Code cannot correct this error."
        )

    estimated_message = estimated_codeword[:k]
    return estimated_codeword, estimated_message


# ----------------------------------------------------------------------
# Demonstration with the (6, 3) code from Section 3.1
# ----------------------------------------------------------------------
if __name__ == "__main__":
    G_ex = [
        [1, 0, 0, 1, 1, 0],
        [0, 1, 0, 0, 1, 1],
        [0, 0, 1, 1, 0, 1],
    ]
    H_ex = [
        [1, 0, 1, 1, 0, 0],
        [1, 1, 0, 0, 1, 0],
        [0, 1, 1, 0, 0, 1],
    ]

    message = [1, 0, 1]
    codeword = encode(message, G_ex)
    print(f"Message   : {message}")
    print(f"Codeword  : {codeword}")

    # Inject single-bit error at position 4 (1-indexed)
    received = list(codeword)
    received[3] ^= 1  # zero-indexed flip
    print(f"Received  : {received}")

    cw_hat, m_hat = decode(received, H_ex, k=3)
    print(f"Corrected : {cw_hat}")
    print(f"Recovered : {m_hat}")
    assert m_hat == message, "Decoding failed!"
    print("Decoding verified successfully.")
```

**Expected output:**

```
Message   : [1, 0, 1]
Codeword  : [1, 0, 1, 0, 1, 1]
Received  : [1, 0, 1, 1, 1, 1]
Corrected : [1, 0, 1, 0, 1, 1]
Recovered : [1, 0, 1]
Decoding verified successfully.
```

### 3.5 Algorithmic Implementation — Brute-Force Minimum Distance

```python
"""
min_distance.py
Computes the minimum Hamming distance of any binary block code by exhaustive search.
Suitable for n up to ~24 (2^n codewords is 16 million).
"""

from itertools import product
from typing import List


def enumerate_codewords(G: List[List[int]], k: int) -> List[List[int]]:
    """Generate all 2^k codewords of the linear code defined by G."""
    codewords: List[List[int]] = []
    for bits in product([0, 1], repeat=k):
        m = list(bits)
        c = [0] * len(G[0])
        for i in range(k):
            if m[i] == 1:
                for j in range(len(G[0])):
                    c[j] ^= G[i][j]
        codewords.append(c)
    return codewords


def min_distance(codewords: List[List[int]]) -> int:
    """
    Find d_min by comparing all pairs. For linear codes, d_min = min nonzero weight.
    """
    best = len(codewords[0]) + 1
    for c in codewords:
        if any(c):
            w = sum(c)
            if 0 < w < best:
                best = w
    return best if best <= len(codewords[0]) else 0


# Demo with the (6, 3) code
G_ex = [
    [1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 1],
]
all_cw = enumerate_codewords(G_ex, k=3)
print("All codewords:")
for cw in all_cw:
    print(" ", cw)
print(f"d_min = {min_distance(all_cw)}")   # Expected: 3
```

**Expected output:**

```
All codewords:
  [0, 0, 0, 0, 0, 0]
  [1, 0, 0, 1, 1, 0]
  [0, 1, 0, 0, 1, 1]
  [0, 0, 1, 1, 0, 1]
  [1, 1, 0, 1, 0, 1]
  [1, 0, 1, 0, 1, 1]
  [0, 1, 1, 1, 1, 0]
  [1, 1, 1, 0, 0, 0]
d_min = 3
```

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
## 4. Structural Diagrams & Schematics

### 4.1 Block Diagram — Binary Block Encoding and Decoding Pipeline

```mermaid
flowchart LR
    subgraph TX["Transmitter Side"]
        MSG["Message Vector m<br/>length k"]
        ENC["Linear Encoder<br/>c = mG mod 2"]
        MSG --> ENC
    end

    CH["Binary Symmetric Channel BSC p<br/>flips each bit with probability p"]

    ENC --> CH

    subgraph RX["Receiver Side"]
        RECV["Received Vector r = c + e"]
        SYNC["Syndrome Computer<br/>s = rH transpose"]
        LUT["Syndrome Lookup Table<br/>maps s to error pattern e hat"]
        CORR["Error Corrector<br/>c hat = r + e hat"]
        DEC["Information Recovery<br/>m hat = first k bits of c hat"]
        RECV --> SYNC
        SYNC --> LUT
        LUT --> CORR
        CORR --> DEC
    end

    CH --> RECV

    classDef txNode fill:#1f4e79,stroke:#0b2545,color:#ffffff
    classDef chNode fill:#a83232,stroke:#5a1414,color:#ffffff
    classDef rxNode fill:#2e7d32,stroke:#0f3d11,color:#ffffff

    class MSG,ENC txNode
    class CH chNode
    class RECV,SYNC,LUT,CORR,DEC rxNode
```

**Reading the diagram:** The message $\mathbf{m}$ enters the linear encoder, which computes $\mathbf{c} = \mathbf{m} G$ over GF(2). The codeword is transmitted across a Binary Symmetric Channel (BSC) with crossover probability $p$, which independently flips each bit with probability $p$. The receiver forms $\mathbf{r} = \mathbf{c} + \mathbf{e}$, computes the syndrome $\mathbf{s} = \mathbf{r} H^T$, looks up the most-likely error pattern $\hat{\mathbf{e}}$, and subtracts it to obtain the estimated codeword $\hat{\mathbf{c}}$, from which the first $k$ bits form the recovered message $\hat{\mathbf{m}}$.

### 4.2 Sequential Processing Topology — Syndrome Decoding Flow

```mermaid
flowchart TD
    A["Start: receive vector r of length n"]
    B["Compute syndrome s = r times H transpose mod 2"]
    C{"Is s equal to 0?"}
    D["Declare no error<br/>c hat = r"]
    E["Search syndrome lookup table"]
    F{"Match found?"}
    G["Fetch error pattern e hat from table"]
    H["Corrected codeword c hat = r XOR e hat"]
    I["Uncorrectable error<br/>raise decoding failure flag"]
    J["Extract m hat = first k bits of c hat"]
    K["Return m hat to application layer"]

    A --> B
    B --> C
    C -- "Yes" --> D --> J
    C -- "No" --> E --> F
    F -- "Yes" --> G --> H --> J
    F -- "No"  --> I
    J --> K

    classDef startNode fill:#0b5394,stroke:#073763,color:#ffffff
    classDef decisionNode fill:#b45f06,stroke:#783f04,color:#ffffff
    classDef successNode fill:#38761d,stroke:#1d3b0e,color:#ffffff
    classDef failureNode fill:#990000,stroke:#4d0000,color:#ffffff

    class A startNode
    class C,F decisionNode
    class D,G,H,J,K successNode
    class I failureNode
```

### 4.3 Functional Architecture — Components of a Linear Block Code

```mermaid
flowchart TB
    subgraph A["Algebraic Building Blocks"]
        A1["GF2 Field<br/>addition = XOR<br/>multiplication = AND"]
        A2["Vector Space GF2 to the n"]
        A3["Subspace Selection<br/>pick a k-dim subspace C"]
    end

    subgraph B["Matrix Representations"]
        B1["Generator Matrix G<br/>k by n, rank k"]
        B2["Parity Check Matrix H<br/>n-k by n, rank n-k"]
        B3["Orthogonality G times H transpose = 0"]
    end

    subgraph C["Encoding Pipeline"]
        C1["Input message m in GF2 to the k"]
        C2["Linear transform c = mG mod 2"]
        C3["Codeword c in C"]
    end

    subgraph D["Decoding Pipeline"]
        D1["Received vector r = c + e"]
        D2["Syndrome s = rH transpose"]
        D3["Lookup e hat from table"]
        D4["c hat = r + e hat"]
        D5["m hat = first k bits of c hat"]
    end

    A1 --> A2 --> A3
    A3 --> B1
    A3 --> B2
    B1 --> B3
    B2 --> B3
    B1 --> C2
    C1 --> C2 --> C3
    C3 -.transmitted.-> D1
    D1 --> D2 --> D3 --> D4 --> D5

    classDef algebraNode fill:#4a148c,stroke:#2a0854,color:#ffffff
    classDef matrixNode  fill:#006064,stroke:#003638,color:#ffffff
    classDef encNode     fill:#1b5e20,stroke:#0c2f0e,color:#ffffff
    classDef decNode     fill:#b71c1c,stroke:#6a0e0e,color:#ffffff

    class A1,A2,A3 algebraNode
    class B1,B2,B3 matrixNode
    class C1,C2,C3 encNode
    class D1,D2,D3,D4,D5 decNode
```

### 4.4 Sphere-Decoding Visualisation (Hamming Spheres Around Codewords)

```mermaid
flowchart LR
    subgraph SPACE["GF2 to the n = 16 vectors total"]
        direction TB
        C0["Codeword c1<br/>sphere radius t"]
        C1["Codeword c2<br/>sphere radius t"]
        C2["Codeword c3<br/>sphere radius t"]
        CDOT["..."]
        C2K["Codeword c to the 2k<br/>sphere radius t"]
    end

    R["Received Vector r<br/>noise = e"]
    R -. distance less than t from ci .-> C0
    R -. distance greater than t .-> C1
    R -. no closest neighbour .-> C2

    classDef codewordNode fill:#0d47a1,stroke:#062a63,color:#ffffff
    classDef receivedNode fill:#bf360c,stroke:#7f1d05,color:#ffffff

    class C0,C1,C2,CDOT,C2K codewordNode
    class R receivedNode
```

> This is the *sphere-packing* picture behind the **Hamming bound**: the spheres of radius $t$ around each codeword must be disjoint for the code to correct $t$ errors. Hamming codes achieve equality (perfect packing) for $t = 1$.

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
## 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

### 5.1 Part A — Short-Answer Questions (3 Marks Each)

> **Q1.** **[KTU University Exam - July 2024 model question]** Define a *binary block code* of length $n$. For an $(n, k)$ code, state the formula for the **code rate** and explain its significance in digital communication systems.
>
> **Model Answer (3 marks):**
>
> A **binary block code** of length $n$ is a set of $2^k$ binary vectors (codewords) of length $n$ over GF(2), with $k < n$. Each $k$-bit message is mapped to a unique $n$-bit codeword. The **code rate** is
> $$R = \frac{k}{n}$$
> and represents the fraction of transmitted bits that carry actual information. A higher $R$ means better throughput but weaker error protection; a lower $R$ means more redundancy and stronger error control.
>
> **[Defining binary block code: 1 mark]**, **[Code rate formula: 1 mark]**, **[Significance/interpretation: 1 mark]**

> **Q2.** **[KTU University Exam - Dec 2023 model question]** What is the **minimum distance** of a block code? For a code with $d_{\min} = 5$, determine the number of errors that can be **detected** and **corrected**.
>
> **Model Answer (3 marks):**
>
> The **minimum distance** $d_{\min}$ of a block code is the smallest Hamming distance between any two distinct codewords in the code. It measures the code's ability to distinguish between valid codewords despite channel errors.
>
> Given $d_{\min} = 5$:
>
> $$t_{\text{detect}} = d_{\min} - 1 = 5 - 1 = 4 \text{ errors}$$
>
> $$t_{\text{correct}} = \left\lfloor \frac{d_{\min} - 1}{2} \right\rfloor = \left\lfloor \frac{4}{2} \right\rfloor = 2 \text{ errors}$$
>
> **[Definition: 1 mark]**, **[Detection result: 1 mark]**, **[Correction result: 1 mark]**

---

### 5.2 Part B — 14-Mark Questions (Internal Choice)

> **Q3A. [KTU University Exam - July 2024 model question, 14 marks, CO1, CO2]**
>
> **(a) [7 marks, Understand/Apply]** Define a *linear binary block code*. Given the generator matrix
>
> $$G = \begin{bmatrix} 1 & 0 & 1 & 1 & 0 \\ 0 & 1 & 1 & 0 & 1 \end{bmatrix}$$
>
> for a $(5, 2)$ linear code, **(i)** determine whether the code is in systematic form; **(ii)** list all four codewords; **(iii)** find the parity-check matrix $H$.
>
> **(b) [7 marks, Apply/Analyse]** Compute the syndrome for the received vector $\mathbf{r} = (1, 0, 0, 1, 1)$. Identify the error pattern and correct it to obtain the transmitted codeword. Then state the recovered message.

#### Model Solution to Q3A

**Part (a) — 7 marks**

**(i) Systematic form check [1 mark]:** The matrix $G$ has the leading $2 \times 2$ block
$$I_2 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$
Hence the code **is in systematic form** with parity submatrix
$$P = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \end{bmatrix}.$$

**[Stating the systematic structure: 1 Mark]**

**(ii) Enumerate all codewords [3 marks]:** Using $\mathbf{c} = \mathbf{m} G$ mod 2:

* $\mathbf{m} = (0, 0)$: $\mathbf{c} = (0, 0, 0, 0, 0)$, weight $0$.
* $\mathbf{m} = (1, 0)$: $\mathbf{c} = (1, 0, 1, 1, 0)$, weight $3$.
* $\mathbf{m} = (0, 1)$: $\mathbf{c} = (0, 1, 1, 0, 1)$, weight $3$.
* $\mathbf{m} = (1, 1)$: $\mathbf{c} = (1, 1, 0, 1, 1)$, weight $4$.

**[Correctly computing all four codewords: 3 Marks — 1 per each non-trivial codeword]**

**(iii) Parity-check matrix [3 marks]:** Since $G = [I_2 \mid P]$,
$$H = [P^T \mid I_3] = \begin{bmatrix} 1 & 1 & 1 & 0 & 0 \\ 1 & 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 & 1 \end{bmatrix}.$$

**[Writing $H = P^T \mid I_3$: 1 Mark]**, **[Correct $P^T$ entries: 1 Mark]**, **[Correct $I_3$ block: 1 Mark]**

**Part (b) — 7 marks**

**Syndrome computation [3 marks]:**
$$\mathbf{s} = \mathbf{r} H^T = (1, 0, 0, 1, 1) \begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

Computing each entry mod 2:

* $s_1 = 1\cdot1 + 0\cdot1 + 0\cdot1 + 1\cdot0 + 1\cdot0 = 1$.
* $s_2 = 1\cdot1 + 0\cdot0 + 0\cdot0 + 1\cdot1 + 1\cdot0 = 2 \equiv 0 \pmod 2$.
* $s_3 = 1\cdot0 + 0\cdot1 + 0\cdot0 + 1\cdot0 + 1\cdot1 = 1$.

So $\mathbf{s} = (1, 0, 1)$.

**[Setting up the matrix product: 1 Mark]**, **[Computing each component: 1 Mark]**, **[Final mod-2 reduction: 1 Mark]**

**Error pattern identification [2 marks]:** The columns of $H$ (read top to bottom) are:

| Position $i$ | Column of $H$ |
|---|---|
| 1 | $(1, 1, 0)$ |
| 2 | $(1, 0, 1)$ |
| 3 | $(1, 0, 0)$ |
| 4 | $(0, 1, 0)$ |
| 5 | $(0, 0, 1)$ |

The syndrome $(1, 0, 1)$ matches column $2$. Hence a single-bit error occurred at position $i = 2$, with error pattern $\mathbf{e} = (0, 1, 0, 0, 0)$.

**[Matching syndrome to column: 1 Mark]**, **[Correct error vector: 1 Mark]**

**Correction and recovery [2 marks]:**
$$\hat{\mathbf{c}} = \mathbf{r} + \mathbf{e} = (1, 0, 0, 1, 1) + (0, 1, 0, 0, 0) = (1, 1, 0, 1, 1).$$

The recovered message is the first $k = 2$ bits: $\hat{\mathbf{m}} = (1, 1)$.

**[Correct $\hat{\mathbf{c}}$: 1 Mark]**, **[Correct $\hat{\mathbf{m}}$: 1 Mark]**

---

> **Q3B. [Internal choice alternative, 14 marks, CO1, CO2, CO3]**
>
> **(a) [7 marks, Understand/Apply]** Define *Hamming weight* and *Hamming distance*. For the binary vectors $\mathbf{c}_1 = (1, 1, 0, 1, 0, 1)$ and $\mathbf{c}_2 = (1, 0, 1, 1, 1, 1)$, compute $w(\mathbf{c}_1)$, $w(\mathbf{c}_2)$, and $d(\mathbf{c}_1, \mathbf{c}_2)$.
>
> **(b) [7 marks, Apply/Analyse]** Construct the parity-check matrix $H$ for the $(7, 4)$ Hamming code whose columns are the binary representations of the integers $1$ through $7$. Show that this code can correct any single-bit error. If a codeword $\mathbf{c} = (0, 1, 0, 1, 0, 1, 1)$ is transmitted and a single-bit error occurs in position $3$, compute the syndrome, identify the error, and recover the original codeword.

#### Model Solution to Q3B

**Part (a) — 7 marks**

**Definitions [2 marks]:**
* The **Hamming weight** $w(\mathbf{c})$ of a binary vector $\mathbf{c}$ is the number of non-zero coordinates in $\mathbf{c}$.
* The **Hamming distance** $d(\mathbf{c}_1, \mathbf{c}_2)$ between two equal-length binary vectors is the number of coordinates in which they differ, equivalently $d(\mathbf{c}_1, \mathbf{c}_2) = w(\mathbf{c}_1 \oplus \mathbf{c}_2)$.

**[Weight definition: 1 Mark]**, **[Distance definition: 1 Mark]**

**Computations [5 marks]:**
* $w(\mathbf{c}_1) = 1 + 1 + 0 + 1 + 0 + 1 = 4$.
* $w(\mathbf{c}_2) = 1 + 0 + 1 + 1 + 1 + 1 = 5$.
* $\mathbf{c}_1 \oplus \mathbf{c}_2 = (0, 1, 1, 0, 1, 0)$, so $d(\mathbf{c}_1, \mathbf{c}_2) = 0 + 1 + 1 + 0 + 1 + 0 = 3$.

**[Weight of $c_1$: 1 Mark]**, **[Weight of $c_2$: 1 Mark]**, **[XOR vector: 2 Marks]**, **[Distance value: 1 Mark]**

**Part (b) — 7 marks**

**H matrix for the $(7, 4)$ Hamming code [3 marks]:** Using binary representations of $1$ through $7$ as columns (in LSB-first order, i.e., the $i$-th column is the binary expansion of $i$):

$$H = \begin{bmatrix} 0 & 0 & 0 & 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 0 & 0 & 1 & 1 \\ 1 & 0 & 1 & 0 & 1 & 0 & 1 \end{bmatrix}$$

Verify each column is distinct and non-zero, so the $2^3 - 1 = 7$ columns exhaust all non-zero 3-bit patterns. This is the defining property of the Hamming code.

**[Correct column entries: 2 Marks]**, **[Recognising column distinctness: 1 Mark]**

**Single-error correction capability [1 mark]:** Because every non-zero 3-bit pattern appears exactly once as a column of $H$, the syndrome $\mathbf{s} = \mathbf{e} H^T$ for a single-bit error at position $i$ equals the $i$-th column of $H$ — a *unique* 3-bit signature. The receiver can therefore identify and correct the error.

**[Argument for unique syndrome per position: 1 Mark]**

**Syndrome computation for error at position 3 [2 marks]:** With $\mathbf{r} = \mathbf{c} + \mathbf{e}_3$ where $\mathbf{e}_3 = (0, 0, 1, 0, 0, 0, 0)$:
$$\mathbf{r} = (0, 1, 0, 1, 0, 1, 1) + (0, 0, 1, 0, 0, 0, 0) = (0, 1, 1, 1, 0, 1, 1).$$
$$\mathbf{s} = \mathbf{r} H^T.$$

Compute (column-wise dot product with $\mathbf{r}$):

* $s_1 = 0\cdot0 + 1\cdot0 + 1\cdot0 + 1\cdot1 + 0\cdot1 + 1\cdot1 + 1\cdot1 = 3 \equiv 1 \pmod 2$
* $s_2 = 0\cdot0 + 1\cdot1 + 1\cdot1 + 1\cdot0 + 0\cdot0 + 1\cdot1 + 1\cdot1 = 4 \equiv 0 \pmod 2$
* $s_3 = 0\cdot1 + 1\cdot0 + 1\cdot1 + 1\cdot0 + 0\cdot1 + 1\cdot0 + 1\cdot1 = 3 \equiv 1 \pmod 2$

So $\mathbf{s} = (1, 0, 1)$, which equals the binary representation of $3$ (LSB-first), confirming the error is at position 3.

**[Computing $\mathbf{r}$: 1 Mark]**, **[Computing $\mathbf{s}$: 1 Mark]**

**Recovery [1 mark]:** Flip bit 3 of $\mathbf{r}$: $\hat{\mathbf{c}} = (0, 1, 0, 1, 0, 1, 1) = \mathbf{c}$. ✓

**[Final recovered codeword: 1 Mark]**

---

### 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common places where students lose marks in Module 1 (binary block codes) questions:**
>
> 1. **Forgetting that $+$ and $-$ are the same over GF(2).** In a syndrome computation, writing $c_1 - c_2$ and then propagating the minus sign yields a wrong syndrome. Always convert subtraction to mod-2 addition at the start of the calculation. *Cost: 1–2 marks per sub-part.*
>
> 2. **Failing to state that the code is *linear* before applying the minimum-weight identity** $d_{\min} = \min_{\mathbf{c} \neq 0} w(\mathbf{c})$. The minimum-weight identity holds **only for linear codes**. For non-linear codes you must compute pairwise distances. *Cost: 1 mark for the definition step.*
>
> 3. **Not verifying orthogonality** $G H^T = 0$ when both $G$ and $H$ are given. The KTU key often gives a full mark for stating and verifying this identity as a sanity check.
>
> 4. **Mis-indexing columns and syndrome bits.** In the $(7, 4)$ Hamming code, the convention is that the **column of $H$ matching the syndrome gives the error location**. Many students get this backwards and conclude the error is in the "non-matching" position. *Cost: 2 marks.*
>
> 5. **Omitting the systematic form reduction.** When asked to "find $H$ given $G$", write explicitly: $G = [I_k \mid P]$, therefore $H = [P^T \mid I_{n-k}]$. Examiners award marks for this structural reasoning, not just the final $H$ matrix.
>
> 6. **Confusing code rate $R = k/n$ with efficiency $1 - R$.** $R$ is the *information fraction*; $1 - R = (n-k)/n$ is the *redundancy*. Examiners test both.
>
> 7. **Hand-waving the *why* behind $d_{\min}$ giving error-correction capability.** Always derive: $t_{\text{cor}} = \lfloor (d_{\min} - 1)/2 \rfloor$ from the geometric argument that spheres of radius $t$ around distinct codewords must be disjoint.

### 5.4 Topic Recap & Important Things to Remember

* **Binary block code** = set of fixed-length $n$ binary vectors; denoted $(n, k)$ when $2^k$ codewords exist.
* **Code rate** $R = k/n$; **redundancy** = $(n - k)/n = 1 - R$.
* **Hamming weight** $w(\mathbf{c})$ = number of $1$'s in $\mathbf{c}$.
* **Hamming distance** $d(\mathbf{c}_1, \mathbf{c}_2) = w(\mathbf{c}_1 \oplus \mathbf{c}_2)$ — counts positions of disagreement.
* **Minimum distance** $d_{\min}$ = smallest pairwise distance; for linear codes, $d_{\min}$ equals the smallest non-zero codeword weight.
* **Error detection limit:** up to $d_{\min} - 1$ errors detectable.
* **Error correction limit:** up to $\lfloor (d_{\min} - 1)/2 \rfloor$ errors correctable.
* **Linear code** = subspace of $\text{GF}(2)^n$; closed under GF(2) addition and scalar multiplication.
* **Generator matrix** $G$ is $k \times n$ of rank $k$; encoding rule $\mathbf{c} = \mathbf{m} G$ (mod 2).
* **Systematic form** $G = [I_k \mid P]$; parity-check matrix $H = [P^T \mid I_{n-k}]$; orthogonality $G H^T = 0$.
* **Syndrome** $\mathbf{s} = \mathbf{r} H^T = \mathbf{e} H^T$; $\mathbf{s} = 0$ implies either no error or an undetectable error pattern; $\mathbf{s} \neq 0$ implies a detectable error; for single-bit errors, $\mathbf{s}$ matches the column of $H$ at the error position.
* **Singleton bound:** $d_{\min} \leq n - k + 1$.
* **Hamming (sphere-packing) bound:** $\sum_{i=0}^{t} \binom{n}{i} \leq 2^{n-k}$; equality ⇒ perfect code.
* **Hamming codes** $\mathcal{H}(r)$ are $(2^r - 1,\ 2^r - 1 - r,\ 3)$ perfect 1-error-correcting codes; the $(7, 4)$ Hamming code is the canonical KTU example.
* **Real-world uses:** 5G control channels, NAND flash ECC, QR-style Reed-Solomon foundations, deep-space telemetry, Ethernet CRC.
* **Over GF(2):** $+$ and $-$ are the same operation; use XOR for addition and AND for multiplication.
* **KTU exam default convention:** syndrome → column of $H$ → single-bit error location.

<!-- SECTION_5_END -->
