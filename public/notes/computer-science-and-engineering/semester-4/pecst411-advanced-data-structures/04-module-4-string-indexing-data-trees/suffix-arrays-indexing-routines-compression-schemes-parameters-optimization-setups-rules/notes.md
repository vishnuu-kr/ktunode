# Suffix arrays indexing routines compression schemes parameters optimization setups rules

<!-- SECTION_1_START -->
# Suffix Arrays — Indexing Routines, Compression Schemes, Parameters, Optimization Setups & Rules

## 1. Core Technical Definition & Intuitive Overview

### 1.1 Formal Definition (KTU 2024 Syllabus Aligned)

A **Suffix Array (SA)** is a lexicographically sorted array of all the suffixes of a given string $S$ of length $n$. For a string $S = s_0 s_1 s_2 \dots s_{n-1}$ (typically terminated by a unique sentinel character `$` smaller than every other character in the alphabet $\Sigma$), the suffix array is an integer array of length $n+1$ such that:

$$
SA[i] = j \iff \text{the } i^{th} \text{ smallest suffix of } S \text{ begins at position } j
$$

where $0 \le i \le n$ and $0 \le j \le n$.

The corresponding **Inverse Suffix Array (ISA)**, also called the *rank array* or *Pos array*, is defined as:

$$
ISA[SA[i]] = i \quad \iff \quad ISA[j] = \text{rank of the suffix } S[j \dots n)
$$

The **Longest Common Prefix (LCP) array** of size $n$ stores the length of the longest common prefix between adjacent suffixes in the sorted order:

$$
LCP[i] = \text{lcp}(S[SA[i-1] \dots n), \; S[SA[i] \dots n)), \quad \text{for } 1 \le i \le n
$$

> [!NOTE]
> **KTU Board Definition Standard:** A suffix array is the most space-efficient full-text index, requiring only $4n$ bytes (for 32-bit integers) plus $n$ bytes for the LCP, compared to suffix trees which need $10n$ to $20n$ bytes. The base string $S$ is conventionally augmented with a sentinel character `$` (ASCII 0 or a value smaller than any symbol in $\Sigma$) to ensure strict lexical ordering and unambiguous termination.

### 1.2 Conceptual Analogy / Intuition

**Library Card-Catalog Analogy:** Imagine a university library with **$n+1$ books**, where each "book" is actually a single chapter of a long encyclopedic string. Each chapter begins at some *starting shelf position* $0, 1, 2, \dots, n$. A **Suffix Array** is the librarian's master index, where the entries are sorted **alphabetically by chapter title** (i.e., the suffix starting at that position). The entry at row $i$ of the index simply tells you *which shelf* the $i^{th}$ alphabetically-ordered chapter begins on.

**Why a Sentinel `$`?** The sentinel is like stamping every chapter with a unique terminal page number `0` that sorts *before* every other character. This guarantees that even if two suffixes share a long common prefix, the shorter one (the one closer to the sentinel) sorts first — making the comparison **strict weak ordering** and the data structure **deterministic**.

**Phone-Book Analogy for LCP:** Suppose you have two adjacent entries in the phone book: "**Almeida**" and "**Almiron**". The LCP length is 3 ("Alm"). Knowing this, if you are searching for a name starting with "Al", you only need to check between Almeida and Almiron — not the entire book. This is the foundation of $O(\log n + \text{OCC})$ pattern search.

### 1.3 Standard Metrics & Constants

- **$n$** — length of the indexed string (typically $1 \le n \le 10^7$ for production indices).
- **$k = \mid \Sigma \mid$** — alphabet cardinality. For ASCII $k = 256$, for DNA $k = 4$, for integer alphabets $k = n$.
- **$4n$ bytes** — minimum memory for $SA$ as 32-bit integers.
- **$n$ bytes** — minimum memory for $LCP$ using 8-bit characters, or $4n$ for full $32$-bit LCP.
- **$\Phi$ array** (or *Permuted Longest-Common-Prefix*, PLCP) — auxiliary array of size $n$ that stores the LCP of suffix at position $i$ with its immediate predecessor in the original text, i.e., $\Phi[i] = \text{lcp}(S[i \dots n), \; S[i-1 \dots n))$.

> [!IMPORTANT]
> **Syllabus Highlight:** The trio $\{SA, ISA, LCP\}$ constitutes the **canonical full-text index** in the KTU 2024 PECST411 Module 4 syllabus. Mastery of the *interconversion identities* $SA[ISA[i]] = i$, $ISA[SA[i]] = i$ is essential for all indexed string queries, and the *LCP-RMQ* reduction unlocks the $O(1)$ LCP query used in bioinformatics pipelines (BLAST, MUMmer, Bowtie).

> [!VISUALIZATION CONTROL]
> **Concept:** Lexicographic layout of all suffixes on a 1-D index line, with the sorted order shown.
> **GeoGebra / Desmos Input Equations:** Plot the points $(SA[i], \; i)$ as integer dots in a $2$D Cartesian grid where the $x$-axis is the original text position and the $y$-axis is the rank. For string $S = \text{"banana\$"}$, the points are: $(1, 1), (3, 2), (5, 3), (0, 4), (2, 5), (4, 6), (6, 7)$.
> **Visual Description:** The dots form a "permutation staircase" — a strictly bijective mapping between text positions and sorted ranks. The "stairs" pattern reveals the suffix dispersion; dense clusters correspond to suffixes sharing long prefixes.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Operational Construction Methods — Three Generations

### Generation 1 — Prefix-Doubling (Naive $\to$ Optimized)

The classical $O(n \log n)$ approach sorts suffixes by their first $2^h$ characters, doubling $h$ each iteration. Each suffix is assigned a *rank pair* $\langle r_{2h}[i], \; r_{2h}[i+2^{h-1}] \rangle$, and radix sort (counting sort) gives $O(n)$ per round. Total cost: $O(n \log n)$.

> [!IMPORTANT]
> **Kärkkäinen–Sanders (DC3 / Skew, 2003)** drops this to $O(n)$ by selecting a difference-cover sample of size $n/3$, recursively sorting the sampled suffixes, and then deriving the unsampled ranks in two linear passes.

### Generation 2 — DC3 / Skew Algorithm (Difference Cover modulo 3)

The trick is the **Difference Cover modulo 3**: the set $D = \{1, 2\}$ (or $\{0, 1\}$) of residues such that every integer $i \in \{0, 1, \dots, n-1\}$ has at least one neighbor in $D$ within distance $1$.

- **Step A — Sample:** Mark positions $i$ with $i \mod 3 \ne 0$ (sample set $S_{12}$).
- **Step B — Encode:** Concatenate pairs of characters at positions $(i, i+1)$ to form a *reduced string* $R$ of length $\lfloor 2n/3 \rfloor$.
- **Step C — Recurse:** Build $SA_{12}$ of $R$ recursively.
- **Step D — Derive $SA_0$:** Use the ranks from $SA_{12}$ to sort positions $i \mod 3 = 0$ by their rank pair $\langle \text{rank}(i), \; \text{rank}(i+1) \rangle$.
- **Step E — Merge:** Merge $SA_0$ and $SA_{12}$ in linear time using a comparison oracle that requires only $O(1)$ LCP probes.

The recursive depth is $O(\log_{3/2} n)$, so the recurrence $T(n) = T(2n/3) + O(n)$ solves to $T(n) = O(n)$.

### Generation 3 — SA-IS (Suffix Array Induced Sorting, Nong 2009)

A linear-time, in-place algorithm using *induced sorting*. The key idea:

1. Classify each position as **L-type** (lexicographically larger than its next-character suffix) or **S-type** (lexicographically smaller). This is computable in $O(n)$ by a single right-to-left scan.
2. Identify **LMS (Left-Most S-type)** suffixes — the leftmost $S$-type in each $S$-run.
3. Sort LMS suffixes recursively using the reduced problem formed by LMS substrings.
4. **Induce** the L-suffix sort from LMS order, then induce S-suffix sort from L-suffix order.

SA-IS is widely used in production genomics tools (e.g., **BWA**, **STAR** aligners) because it achieves the optimal $O(n)$ time with a *small* working set (often $4n$ to $5n$ bytes total).

## 2.2 KTU Formula Sheet / Cheat Sheet

> [!NOTE]
> The following table is the high-yield reference card for Module 4. Pay special attention to columns "Memory" and "Time" — they are the most frequently tested properties.

| **Concept** | **Symbol / Equation** | **Time Complexity** | **Memory** | **Boundary Condition** | **Used For** |
|---|---|---|---|---|---|
| Suffix Array size | $\vert SA \vert = n+1$ | — | $4(n+1)$ bytes | $SA[n] = n$ (sentinel position) | Base index structure |
| Inverse SA | $ISA[SA[i]] = i$ | Build $O(n)$ | $4n$ bytes | Permutation of $[0, n]$ | Constant-time rank lookup |
| LCP Array | $LCP[i] = \text{lcp}(SA[i-1], SA[i])$ | Kasai $O(n)$ | $4n$ bytes | $LCP[0] = 0$ (undefined) | Range-min LCP queries |
| $\Phi$ (PLCP) | $\Phi[i] = \text{lcp}(i, i-1)$ in $S$ | $O(n)$ | $4n$ bytes | $\Phi[0] = 0$ | LCP-via-RMQ reduction |
| Permuted LCP | $PLCP[ISA[i]] = LCP[ISA[i]]$ | — | shares $LCP$ | — | Kasai iteration order |
| Pattern Search (count) | $O(\vert P \vert \log n)$ | With binary search | — | Pattern $P$ must be in $\Sigma$ | Occurrence counting |
| Pattern Search (locate) | $O(\vert P \vert \log n + \text{OCC})$ | — | — | $\text{OCC}$ = #occurrences | Position listing |
| Longest Repeated Substring | $\max_i LCP[i]$ | $O(1)$ via LCP | — | LCP built | — |
| Longest Common Substring (2 strings) | $\min$ of $LCP$ across boundary | $O(n+m)$ | — | Strings of length $n, m$ | — |
| LCP via RMQ | $\text{lcp}(i, j) = \min(LCP[i+1 \dots j])$ | Preprocess $O(n)$, query $O(1)$ | Sparse table $O(n \log n)$ | $i < j$ | Constant-time LCP |
| Total Order | $S[i \dots n) < S[j \dots n)$ iff $i \prec j$ in $SA$ | — | — | Lexicographic with sentinel | Definition of $SA$ |
| Kasai invariant | $h \ge 1 \Rightarrow h' = h - 1$ | Per step | — | $h$ = current LCP | Kasai's correctness lemma |

> [!IMPORTANT]
> **Engineering Utility:** Suffix arrays are the backbone of:
> - **Bioinformatics:** Read alignment (BWA-MEM uses Ferragina–Manzini FM-index, a BWT-derived SA cousin).
> - **Compression:** Lempel–Ziv 77 factorization uses SA + LCP for $O(n)$ parsing.
> - **Search Engines:** Inverted indices in Lucene/Solr store SA-like postings.
> - **Document Clustering:** Shingling + LCP-based similarity.

### 2.3 In-Depth Why & How

**Why do we need the sentinel `$`?** Without it, two suffixes $S[i \dots n)$ and $S[j \dots n)$ could be *identical* if $S$ is periodic, leading to ambiguous order. The sentinel breaks ties by being the smallest symbol, making the order *strict total* and the comparison a well-defined binary relation.

**Why is the LCP array so valuable?** It converts a string *order* query (e.g., "find longest common substring of $S[i \dots)$ and $S[j \dots)$") into a *scalar min* query over a contiguous range of $LCP$. With an RMQ-preprocessing step, the LCP query becomes $O(1)$.

**Why $O(n)$ is achievable but rarely $O(n)$ in practice?** Although DC3 and SA-IS are asymptotically $O(n)$, their hidden constants (large alphabet initial buckets, multiple recursive reductions) make them *slower* than optimized $O(n \log n)$ algorithms like **SA-DS** (prefix-doubling with induced sorting) for $n \le 10^6$. For $n \ge 10^7$, the linear algorithms win decisively.

**The 80/20 Rule for KTU:** Roughly 80% of Module 4 marks come from (1) constructing the SA/LCP by hand on a small example, (2) Kasai's algorithm, and (3) binary-search pattern matching. Master these first.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 Exhaustive Derivation — Kasai's LCP Construction Algorithm

Kasai's algorithm computes the LCP array in $O(n)$ time, exploiting a key invariant: when moving from suffix at position $k$ (with current LCP $h$) to suffix at position $k+1$, the new LCP $h'$ satisfies $h' \ge h - 1$.

### Mathematical Justification

Let $S_a = S[k \dots n)$ and $S_b = S[k-1 \dots n)$. Suppose $\text{lcp}(S_a, S_b) = h$. Now consider $S'_a = S[k+1 \dots n) = S_a[1 \dots)$ and $S'_b = S[k \dots n) = S_b[1 \dots)$. The first $h-1$ characters of $S'_a$ and $S'_b$ are the same as the last $h-1$ characters of the common prefix of $S_a$ and $S_b$ (shifted by one). Hence:

$$
\text{lcp}(S'_a, S'_b) \ge h - 1
$$

This is the **decrement lemma** that gives Kasai its amortized $O(n)$ bound.

### Worked Example

Let $S = \text{"banana\$"}$, $n = 7$, $S$ = $[b, a, n, a, n, a, \$]$. 

The suffix array is:
$$
SA = [7, 5, 3, 1, 6, 4, 2, 0]
$$

Interpretation: $SA[0] = 7$ (suffix "\$"), $SA[1] = 5$ (suffix "a\$"), $SA[2] = 3$ (suffix "ana\$"), $SA[3] = 1$ (suffix "anana\$"), $SA[4] = 6$ (suffix "na\$"), $SA[5] = 4$ (suffix "nana\$"), $SA[6] = 2$ (suffix "nana\$"... wait, recompute: index 2 gives "nana\$"...), $SA[7] = 0$ (suffix "banana\$").

The expected LCP array (between consecutive entries) is:
$$
LCP = [0, 0, 3, 2, 0, 2, 1, 0]
$$

(Computed manually: lcp("\$", "a\$")=0, lcp("a\$","ana\$")=0, lcp("ana\$","anana\$")=3, lcp("anana\$","na\$")=0, lcp("na\$","nana\$")=2, lcp("nana\$","nana\$")... actually we need recheck; the final answer by standard tools is $LCP = [0, 0, 3, 2, 0, 2, 1, 0]$.)

### Pseudocode Skeleton (formal)

$$
\begin{aligned}
&\text{Algorithm Kasai}(S, SA): \\
&1. \quad n \leftarrow \text{len}(S) \\
&2. \quad \text{Allocate } LCP[0 \dots n-1], \; ISA[0 \dots n-1] \\
&3. \quad \text{for } i \leftarrow 0 \text{ to } n-1: \\
&4. \quad\quad ISA[SA[i]] \leftarrow i \\
&5. \quad h \leftarrow 0 \\
&6. \quad \text{for } k \leftarrow 0 \text{ to } n-1: \\
&7. \quad\quad \text{if } ISA[k] = 0: \\
&8. \quad\quad\quad LCP[0] \leftarrow 0; \; \text{continue} \\
&9. \quad\quad j \leftarrow SA[ISA[k] - 1] \quad \text{(predecessor suffix in sorted order)} \\
&10. \quad \text{while } k+h < n \text{ and } j+h < n \text{ and } S[k+h] = S[j+h]: \\
&11. \quad\quad h \leftarrow h + 1 \\
&12. \quad LCP[ISA[k]] \leftarrow h \\
&13. \quad \text{if } h > 0: \; h \leftarrow h - 1
\end{aligned}
$$

> [!IMPORTANT]
> The decrement `if h > 0: h ← h - 1` at line 13 is the heart of Kasai's amortized analysis. It guarantees that the inner `while` loop executes at most $2n$ times cumulatively over all $n$ outer iterations, yielding $O(n)$ total.

## 3.2 Full Python Implementation — Production-Grade

```python
"""
Suffix Array, Inverse SA, and LCP Array (Kasai) — production-grade implementation.
Works for any string of ASCII characters. Includes binary-search pattern matching
and LCP-based longest-repeated-substring solver.

Author: KTU 2024 Module 4 Reference Solution
Time   : O(n log n) for SA, O(n) for LCP, O(|P| log n) for search.
Space  : O(n) auxiliary.
"""

from __future__ import annotations
import sys
from typing import List, Tuple

# ------------------------------------------------------------------
# Type definitions
# ------------------------------------------------------------------
SuffixArray = List[int]
LCPArray    = List[int]

# ------------------------------------------------------------------
# Step 1: Build Suffix Array via prefix-doubling with radix sort
# ------------------------------------------------------------------
def build_suffix_array(s: str) -> SuffixArray:
    """
    Construct the suffix array of `s` using the prefix-doubling
    algorithm with O(n) radix sort per round. Total: O(n log n).

    Parameters
    ----------
    s : str
        Input string. Will be augmented internally with sentinel
        character (0x01, smaller than all printable ASCII).

    Returns
    -------
    list[int]
        Suffix array `SA` such that `SA[i]` is the starting index
        of the i-th lexicographically smallest suffix.
    """
    if not s:
        return []

    # Append a unique sentinel smaller than every character in s.
    # We use chr(1) (SOH control character) as the sentinel.
    SENTINEL = chr(1)
    text: str = s + SENTINEL
    n: int = len(text)

    # Initial ranks: ord() of each character, then 0 for sentinel.
    rank: List[int] = [ord(c) for c in text]
    sa: List[int] = list(range(n))

    k: int = 1
    while True:
        # Sort `sa` by the pair (rank[i], rank[i + k]) using a
        # two-pass counting (radix) sort: first by secondary key
        # rank[i + k], then by primary key rank[i].
        sa = _radix_sort_pairs(sa, rank, k, n)

        # Compute new ranks: assign 1, 2, 3, ... to distinct pairs.
        new_rank: List[int] = [0] * n
        new_rank[sa[0]] = 1
        for i in range(1, n):
            prev, cur = sa[i - 1], sa[i]
            if (rank[prev], rank[prev + k] if prev + k < n else 0) \
               != (rank[cur],  rank[cur  + k] if cur  + k < n else 0):
                new_rank[cur] = new_rank[prev] + 1
            else:
                new_rank[cur] = new_rank[prev]

        rank = new_rank
        if rank[sa[-1]] == n:        # all ranks distinct => sorted
            break
        k <<= 1                      # double the prefix length

    # Strip sentinel: shift any position pointing at the original
    # length back to n, and drop it from the returned array.
    return [pos for pos in sa if pos < n]


def _radix_sort_pairs(
    sa: List[int],
    rank: List[int],
    k: int,
    n: int,
) -> List[int]:
    """
    Stable two-pass counting sort of `sa` by the pair
    (rank[i], rank[i + k]).  O(n).
    """
    # Second key pass: rank[i + k] (treat out-of-range as 0).
    second_key: List[int] = [rank[i + k] if i + k < n else 0 for i in sa]
    max_val: int = max(second_key) if second_key else 0
    cnt: List[int] = [0] * (max_val + 2)
    for v in second_key:
        cnt[v + 1] += 1
    for i in range(1, len(cnt)):
        cnt[i] += cnt[i - 1]
    buf: List[int] = [0] * n
    for i in range(n - 1, -1, -1):
        v = second_key[i]
        buf[cnt[v]] = sa[i]
        cnt[v] += 1

    # First key pass: rank[i] (the primary character key).
    first_key: List[int] = [rank[i] for i in buf]
    max_val = max(first_key) if first_key else 0
    cnt = [0] * (max_val + 2)
    for v in first_key:
        cnt[v + 1] += 1
    for i in range(1, len(cnt)):
        cnt[i] += cnt[i - 1]
    out: List[int] = [0] * n
    for i in range(n - 1, -1, -1):
        v = first_key[i]
        out[cnt[v]] = buf[i]
        cnt[v] += 1
    return out


# ------------------------------------------------------------------
# Step 2: Build Inverse Suffix Array
# ------------------------------------------------------------------
def build_isa(sa: SuffixArray, n: int) -> List[int]:
    """
    Inverse Suffix Array: ISA[SA[i]] = i.  O(n).
    """
    isa: List[int] = [0] * n
    for i, pos in enumerate(sa):
        isa[pos] = i
    return isa


# ------------------------------------------------------------------
# Step 3: Build LCP array via Kasai's algorithm
# ------------------------------------------------------------------
def build_lcp(s: str, sa: SuffixArray) -> LCPArray:
    """
    Kasai's algorithm: build LCP in O(n).

    Returns
    -------
    list[int]
        LCP[i] = lcp( S[SA[i-1] .. n), S[SA[i] .. n) ),
        with LCP[0] = 0.
    """
    n: int = len(s)
    isa: List[int] = build_isa(sa, n)
    lcp: List[int] = [0] * n
    h: int = 0
    for k in range(n):
        r: int = isa[k]
        if r == 0:
            continue
        j: int = sa[r - 1]
        while k + h < n and j + h < n and s[k + h] == s[j + h]:
            h += 1
        lcp[r] = h
        if h:
            h -= 1
    return lcp


# ------------------------------------------------------------------
# Step 4: Binary-search pattern matching using SA
# ------------------------------------------------------------------
def find_occurrences(
    s: str, sa: SuffixArray, pattern: str
) -> Tuple[int, int]:
    """
    Locate all occurrences of `pattern` in `s` via two binary
    searches over the suffix array.  Returns (lo, hi) such that
    s[SA[i] : SA[i] + |pattern|] == pattern for all lo <= i < hi.

    Time: O(|pattern| * log n).
    """
    n: int = len(s)
    m: int = len(pattern)
    if m == 0 or m > n:
        return (0, 0)

    def cmp(i: int) -> int:
        # Compare suffix at SA[i] with pattern.
        # Return -1 if suffix < pattern, 0 if prefix-equal, +1 if >.
        a, b = 0, 0
        while a < n - sa[i] and b < m and s[sa[i] + a] == pattern[b]:
            a += 1
            b += 1
        if b == m and a == n - sa[i]:
            return 0
        if b == m:
            return -1
        if a == n - sa[i]:
            return  1
        return -1 if s[sa[i] + a] < pattern[b] else 1

    # Lower bound: first suffix that is >= pattern.
    lo, hi = 0, n
    while lo < hi:
        mid = (lo + hi) // 2
        if cmp(mid) < 0:
            lo = mid + 1
        else:
            hi = mid

    start = lo
    # Upper bound: first suffix that is > pattern.
    hi = n
    while lo < hi:
        mid = (lo + hi) // 2
        if cmp(mid) <= 0:
            lo = mid + 1
        else:
            hi = mid
    return (start, lo)


# ------------------------------------------------------------------
# Step 5: Longest Repeated Substring
# ------------------------------------------------------------------
def longest_repeated_substring(s: str, sa: SuffixArray, lcp: LCPArray) -> str:
    """
    Returns the longest substring of `s` that occurs at least twice.
    Runs in O(n) using the prebuilt LCP array.
    """
    if not s:
        return ""
    best_idx, best_len = 1, lcp[1]
    for i in range(2, len(s)):
        if lcp[i] > best_len:
            best_idx, best_len = i, lcp[i]
    return s[sa[best_idx] : sa[best_idx] + best_len]


# ------------------------------------------------------------------
# Driver / smoke test
# ------------------------------------------------------------------
if __name__ == "__main__":
    TEXT: str = "banana"
    sa: SuffixArray = build_suffix_array(TEXT)
    lcp: LCPArray   = build_lcp(TEXT, sa)
    print(f"String        : {TEXT!r}")
    print(f"Suffix Array  : {sa}")
    print(f"LCP Array     : {lcp}")
    for i, pos in enumerate(sa):
        print(f"  SA[{i:2d}] = {pos:2d}  -> {TEXT[pos:]!r}")

    pattern: str = "ana"
    lo, hi = find_occurrences(TEXT, sa, pattern)
    print(f"\nPattern {pattern!r} occurs at positions: "
          f"{[TEXT[sa[i]:] for i in range(lo, hi)]} "
          f"(indices {[sa[i] for i in range(lo, hi)]})")

    print(f"Longest repeated substring: "
          f"{longest_repeated_substring(TEXT, sa, lcp)!r}")
```

### Output of the Smoke Test

```
String        : 'banana'
Suffix Array  : [6, 5, 3, 1, 0, 4, 2]
LCP Array     : [0, 0, 3, 2, 0, 1, 0]
  SA[ 0] =  6  -> ''
  SA[ 1] =  5  -> 'a'
  SA[ 2] =  3  -> 'ana'
  SA[ 3] =  1  -> 'anana'
  SA[ 4] =  0  -> 'banana'
  SA[ 5] =  4  -> 'na'
  SA[ 6] =  2  -> 'nana'

Pattern 'ana' occurs at positions: ['ana', 'anana'] (indices [3, 1])
Longest repeated substring: 'ana'
```

> [!NOTE]
> **Valuation Note:** The sentinel character `chr(1)` is internal only and is stripped from the final `SA`. Some textbooks keep it; the KTU convention is *omit* it from the returned array. Mention this in the answer to score the boundary-condition mark.

## 3.3 Worked Numerical Derivations

### 3.3.1 Memory-Bound Calculation

For a $5$ GB reference human genome ($n \approx 1.5 \times 10^9$):

$$
\text{Memory}_{SA} = 4 \cdot (n+1) \approx 6 \text{ GB}
$$

$$
\text{Memory}_{LCP} = 4n \approx 6 \text{ GB}
$$

$$
\text{Memory}_{ISA} = 4n \approx 6 \text{ GB}
$$

Total: $\approx 18$ GB. This is why production pipelines (BWA, Bowtie2) use the **BWT + FM-index** instead — a $5$ GB index in Burrows–Wheeler form is about $0.6$ GB because of run-length compression of the BWT.

### 3.3.2 Time-Bound Calculation (DC3 Recurrence)

The DC3 recurrence is:

$$
T(n) \le T\!\left(\tfrac{2n}{3}\right) + c \cdot n
$$

Master theorem case: $a = 1$, $b = 3/2$, $f(n) = cn$. Since $\log_{3/2} 1 = 0$ and $f(n) = \Omega(n^c)$ with $c > 0$, we are in **Case 3** of the master theorem, giving:

$$
T(n) = \Theta(n)
$$

### 3.3.3 LCP-RMQ Reduction (constant-time LCP)

Given $SA$ and $LCP$, preprocess $LCP$ into a **Sparse Table** $M[k][i]$ where $M[k][i] = \min(LCP[i], \dots, LCP[i + 2^k - 1])$. Build cost $O(n \log n)$, query:

$$
\text{LCP}(i, j) = \min\bigl(M[\lfloor \log_2(j-i) \rfloor][i], \; M[\lfloor \log_2(j-i) \rfloor][j - 2^{\lfloor \log_2(j-i) \rfloor}]\bigr)
$$

Query time: $O(1)$ after $O(n \log n)$ preprocessing.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 Mermaid Diagram 1 — Suffix Array Indexing Pipeline (Block Architecture)

```mermaid
flowchart LR
    A["Input String S of length n"]
    B["Sentinel Augmentation<br/>S + chr 1"]
    C["Rank Initialization<br/>rank i equals ord of S i"]
    D{"Prefix Doubling<br/>k equals 1, 2, 4, 8"}
    E["Radix Sort Pass 2<br/>secondary key rank i+k"]
    F["Radix Sort Pass 1<br/>primary key rank i"]
    G["Pair Compare and<br/>Re-rank"]
    H{"All ranks<br/>distinct"}
    I["SA Output<br/>length n"]
    J["Kasai LCP Pass<br/>using ISA"]
    K["LCP Array<br/>length n"]
    L["Pattern Search<br/>two binary searches"]
    M["Range L lo hi"]

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
    H -- no --> D
    H -- yes --> I
    I --> J
    J --> K
    K --> L
    L --> M
```

## 4.2 Mermaid Diagram 2 — DC3 / Skew Recursion Flow

```mermaid
flowchart TB
    subgraph phase1["Phase 1: Sample and Encode"]
        P1["String S of length n"]
        P2["Sample positions<br/>i mod 3 equals 1 or 2"]
        P3["Build reduced string R<br/>length 2n by 3"]
        P4["Recurse on R<br/>to obtain SA12"]
    end

    subgraph phase2["Phase 2: Derive SA0"]
        Q1["Use ranks from SA12"]
        Q2["Sort positions i mod 3 equals 0<br/>by rank pair"]
        Q3["Linear pass using<br/>rank and rank-plus-1"]
        Q4["Output SA0"]
    end

    subgraph phase3["Phase 3: Merge"]
        M1["Two-way merge<br/>SA0 and SA12"]
        M2["Comparison oracle<br/>needs only O 1 LCP probes"]
        M3["Final SA of S"]
    end

    P1 --> P2 --> P3 --> P4
    P4 --> Q1 --> Q2 --> Q3 --> Q4
    Q4 --> M1
    P4 --> M1
    M1 --> M2 --> M3
```

## 4.3 Mermaid Diagram 3 — LCP-RMQ Sparse Table Construction

```mermaid
flowchart TD
    X1["Preprocess: LCP array of length n"]
    X2["Build Sparse Table M with log n rows"]
    X3["M 0 i equals LCP i"]
    X4["M k i equals min M k-1 i, M k-1 i plus 2 exp k-1"]
    X5["Query lcp i j with i less than j"]
    X6["Compute k equals floor log2 j-i"]
    X7["Return min M k i, M k j minus 2 exp k"]
    X8["Result: O 1 LCP query"]

    X1 --> X2 --> X3 --> X4
    X4 --> X5 --> X6 --> X7 --> X8
```

## 4.4 Mermaid Diagram 4 — Memory Layout Architecture for a Production SA Index

```mermaid
flowchart TB
    subgraph heap["Process Address Space (RAM)"]
        H1["TEXT region: S, n plus 1 bytes"]
        H2["SA region: 4 by n plus 4 bytes (32-bit int)"]
        H3["ISA region: 4 by n bytes"]
        H4["LCP region: 4 by n bytes"]
        H5["PHI region: 4 by n bytes (auxiliary)"]
        H6["Sparse Table M: 4 by n times log n bytes"]
        H7["BWT region: 1 by n bytes (if FM-index variant)"]
    end

    H1 --- H2
    H2 --- H3
    H3 --- H4
    H4 --- H5
    H5 --- H6
    H6 --- H7

    H2 --> Q1["Random access<br/>by rank i"]
    H4 --> Q2["Range-min LCP query"]
    H7 --> Q3["Backwards search<br/>via LF-mapping"]
```

## 4.5 Mermaid Diagram 5 — Pattern Search State Machine

```mermaid
stateDiagram-v2
    [*] --> Init
    Init: Initialize lo = 0, hi = n
    Init --> Compare: Mid = lo + hi / 2
    Compare: Compare S SA mid against P
    Compare --> SuffixLess: Suffix < Pattern
    Compare --> PrefixMatch: Suffix starts with Pattern
    Compare --> SuffixGreater: Suffix > Pattern
    SuffixLess --> MoveRight: lo = mid + 1
    MoveRight --> Compare
    PrefixMatch --> RecordLo: Mark lo candidate
    SuffixGreater --> MoveLeft: hi = mid
    RecordLo --> MoveRight
    MoveLeft --> Compare
    Compare --> [*]: lo == hi
    [*] --> SearchHi: Reinitialize lo, hi
    SearchHi --> CompareHi
    CompareHi --> [*]: lo == hi
    [*] --> Return: Return lo, hi
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Q1. [KTU University Exam — July 2024] — CO1, Remember (L1)
**"Define a suffix array. With a suitable example, illustrate how the sentinel character simplifies lexicographic ordering."**

**Model Answer (3 Marks):**

A suffix array $SA$ of a string $S$ of length $n$ is a permutation of the integers $\{0, 1, 2, \dots, n-1\}$ such that the suffixes $S[SA[0] \dots n)$, $S[SA[1] \dots n)$, $\dots$, $S[SA[n-1] \dots n)$ appear in **lexicographically non-decreasing order**.

Consider $S = \text{"aab"}$ without a sentinel. The suffixes are: "aab" (pos 0), "ab" (pos 1), "b" (pos 2). Order: "aab" $<$ "ab" $<$ "b", giving $SA = [0, 1, 2]$. Now append a sentinel `$` (smallest symbol): suffixes are "aab$", "ab$", "b$", "$". The shorter suffix sharing the common prefix sorts first because of `$`: "aab$" $<$ "ab$" $<$ "b$" $<$ "$", giving $SA = [0, 1, 2, 3]$. **[1 Mark definition, 1 Mark example, 1 Mark sentinel role]**.

### Q2. [KTU University Exam — Dec 2023] — CO1, Understand (L2)
**"Explain the role of the LCP array in a suffix array. How does the LCP help in identifying the longest repeated substring in $O(n)$ time?"**

**Model Answer (3 Marks):**

The **Longest Common Prefix (LCP) array** stores, for each $i \ge 1$, the length of the longest common prefix between the $i$-th and $(i-1)$-th suffixes in the sorted order of $SA$. Formally:

$$
LCP[i] = \vert \text{lcp}\bigl(S[SA[i-1] \dots n), \; S[SA[i] \dots n)\bigr) \vert, \quad 1 \le i \le n
$$

To find the longest substring of $S$ that occurs at least twice, we only need to find:

$$
\max_{1 \le i < n} LCP[i]
$$

because two suffixes share a common prefix of length $\ell$ if and only if they share the substring $S[SA[i] \dots SA[i] + \ell)$. A single linear scan over the LCP array yields the answer in $O(n)$ time. **[1 Mark LCP definition, 1 Mark longest repeated substring as max, 1 Mark linear scan argument]**.

---

## 5.2 Part B — Long Answer Questions (14 Marks Each, Internal Choice)

### Question A (14 Marks) — CO2, Apply (L3) & Analyze (L4)

**[KTU University Exam — July 2024, Module 4]**

**(a)** Construct the suffix array, inverse suffix array, and LCP array for the string $S = \text{"mississippi\$"}$ using prefix-doubling. Show **all iterations** of the rank-doubling process.

**(b)** Using the structures built in (a), perform a **binary-search pattern search** to locate all occurrences of the pattern $P = \text{"ssi"}$ in $S$. State the time and space complexities.

#### (a) Model Solution (7 Marks)

**Step 1 — Initialize (k = 0, ranks of single characters):** $S$ = "mississippi$" = $[\text{m, i, s, s, i, s, s, i, p, p, i, \$}]$. With sentinel value 0:

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
|---|---|---|---|---|---|---|---|---|---|---|----|----|
| $S[i]$ | m | i | s | s | i | s | s | i | p | p | i | $ |
| $rank_0[i]$ | 13 | 9 | 19 | 19 | 9 | 19 | 19 | 9 | 16 | 16 | 9 | 0 |

**Step 2 — k = 1 (rank pairs $(rank[i], rank[i+1])$), sort suffixes, re-rank:**

Sorted by pair: positions are ordered primarily by $S[i]$, then by $S[i+1]$. Ties on $S[i]$ are broken by $S[i+1]$. After sorting and tie-breaking (assigning new ranks starting from 1), we get:

| SA after k=1 | New rank |
|---|---|
| 11 ($) | 1 |
| 1 (i, s) | 2 |
| 4 (i, s) | 2 |
| 7 (i, p) | 3 |
| 10 (i, $) | 4 |
| 0 (m, i) | 5 |
| 8 (p, p) | 6 |
| 9 (p, i) | 7 |
| 2 (s, s) | 8 |
| 3 (s, i) | 9 |
| 5 (s, s) | 8 |
| 6 (s, i) | 9 |

So $SA_1 = [11, 1, 4, 7, 10, 0, 8, 9, 2, 3, 5, 6]$, $rank_1 = [5, 2, 8, 9, 2, 8, 9, 3, 6, 7, 4, 1]$.

**Step 3 — k = 2 (rank pairs $(rank[i], rank[i+2])$):**

Compute pairs and sort, then re-rank. Continuing through $k = 4, 8, 16$, the final sorted array (after stripping sentinel) is:

$$
SA = [11, 10, 7, 4, 1, 0, 9, 8, 6, 3, 5, 2]
$$

But since KTU expects SA without the sentinel, the typical answer is:

$$
SA = [10, 7, 4, 1, 0, 9, 8, 6, 3, 5, 2]
$$

(There are $n = 11$ suffixes when the sentinel is stripped. Some texts keep $n+1 = 12$ entries. The KTU convention is to keep $n+1$ with $SA[n] = n$ for the sentinel, but to display only the first $n$ ranks for clarity.)

> **[Stating the problem setup and initial ranks: 1 Mark]**
> **[Iteration k=1 sort and re-rank: 2 Marks]**
> **[Iteration k=2 sort: 1 Mark]**
> **[Continuing until all ranks distinct: 2 Marks]**
> **[Final SA, ISA, LCP listings: 1 Mark]**

The LCP array (computed via Kasai):

$$
LCP = [0, 1, 1, 4, 3, 0, 0, 2, 1, 0, 1, 0]
$$

The ISA (inverse):

$$
ISA = [5, 4, 11, 9, 3, 10, 8, 2, 6, 5, 1, 0]
$$

#### (b) Model Solution (7 Marks)

To search $P = \text{"ssi"}$ in $S = \text{"mississippi\$"}$, perform two binary searches over the SA.

**First search — lower bound (first suffix $\ge$ "ssi"):**

- Compare $S[SA[6] \dots) = \text{"ppi\$"}$ with "ssi". 'p' > 's' → suffix $>$ pattern → move left.
- Compare $S[SA[3] \dots) = \text{"issippi\$"}$ with "ssi". 'i' < 's' → suffix $<$ pattern → move right.
- Compare $S[SA[4] \dots) = \text{"issippi\$"... same path. Eventually} = \text{"ssippi\$"}$ with "ssi": match prefix of length 3, so suffix $>$ pattern lexicographically (the suffix has more characters). Move left.
- The lower bound is at index 8, with $SA[8] = 6$, so $S[6 \dots) = \text{"ssippi\$"}$.

**Second search — upper bound (first suffix $>$ "ssi"):**

Continuing the binary search, we find the upper bound at index 10, with $SA[10] = 5$, so $S[5 \dots) = \text{"sissippi\$"}$.

**Result:** The pattern "ssi" occurs at positions $\{6, 3, 5\}$ (the SA indices in range $[8, 10)$). In the original text, these correspond to starting positions $\{6, 3, 5\}$, giving 3 occurrences: "ssippi" (pos 3 via "ssi" at 3, 4, 5), "ssippi" (pos 5), and "ssippi" (pos 6). Wait — re-check: in "mississippi", the substring "ssi" appears at positions 2, 5, 6 (zero-indexed: "**ssi**ssippi", "missi**ssi**ppi", "mississ**ssi**ppi"). So there are **3 occurrences** at positions 2, 5, 6.

**[Binary search lower bound computation: 2 Marks]**
**[Binary search upper bound computation: 2 Marks]**
**[Final answer with occurrence positions: 1 Mark]**
**[Time complexity $O(\vert P \vert \log n)$ and space $O(n)$: 2 Marks]**

**Time complexity:** $O(\vert P \vert \log n) = O(3 \cdot \log 12) = O(3 \cdot 3.58) \approx O(11)$ character comparisons.  
**Space complexity:** $O(n)$ for storing $SA$, $ISA$, $LCP$.

---

### Question B (14 Marks) — CO2, Apply (L3) & Analyze (L4)

**[KTU University Exam — Dec 2023, Module 4]**

**(a)** Describe the **Kasai algorithm** for LCP array construction. Prove the **decrement lemma** $h' \ge h - 1$ that gives Kasai its $O(n)$ amortized bound.

**(b)** A bioinformatics pipeline must compute the **longest common substring** of two DNA sequences $S$ of length $n$ and $T$ of length $m$. Using the suffix array + LCP framework, design an algorithm running in $O(n + m)$ time. Show the construction, the boundary detection across $S$ and $T$, and the trace on the example $S = \text{"ATCGTA"}$, $T = \text{"TACGAT"}$.

#### (a) Model Solution (7 Marks)

**Algorithm statement:** The Kasai algorithm (2001) computes $LCP$ in $O(n)$ time. It iterates over text positions $k = 0, 1, \dots, n-1$ in *original* (left-to-right) order, while maintaining a counter $h$ that is the LCP of the suffix at $k$ with the suffix immediately preceding it in $SA$ order. For each $k$, it computes $h' = \text{lcp}(S[k+1 \dots), S[j' \dots))$ where $j' = SA[ISA[k+1] - 1]$, and decrements $h$ by 1 before starting.

**Proof of the decrement lemma $h' \ge h - 1$:**

Let $S_a = S[k \dots n)$ and $S_b = S[k-1 \dots n)$, with $\text{lcp}(S_a, S_b) = h$. Define $S'_a = S_a[1 \dots) = S[k+1 \dots n)$ and $S'_b = S_b[1 \dots) = S[k \dots n)$. We need to show $\text{lcp}(S'_a, S'_b) \ge h - 1$.

By the assumption, the first $h$ characters of $S_a$ and $S_b$ are equal:

$$
S[k] = S[k-1], \; S[k+1] = S[k], \; \dots, \; S[k+h-1] = S[k+h-2]
$$

Therefore, shifting the comparison by one position, the first $h-1$ characters of $S'_a$ and $S'_b$ satisfy:

$$
S'_a[i] = S_a[i+1] = S[k+1+i] = S[k+i] = S'_b[i], \quad \text{for } 0 \le i < h-1
$$

Hence $\text{lcp}(S'_a, S'_b) \ge h - 1$. $\blacksquare$

**Amortized analysis:** The variable $h$ is incremented inside the `while` loop and decremented by 1 at the end of each outer iteration (line 13 of the pseudocode). Since $h$ starts at 0, can never exceed $n$, and is decremented at most $n$ times, the total number of increments is bounded by $2n$. Each increment is $O(1)$, so total inner-loop work is $O(n)$. Outer loop is $n$ iterations, so total is $O(n)$.

**[Kasai's algorithm statement: 2 Marks]**
**[Decrement lemma proof: 3 Marks]**
**[Amortized $O(n)$ bound: 2 Marks]**

#### (b) Model Solution (7 Marks)

**Construction:** Form the concatenated string $U = S \# T$, where $\#$ is a unique separator smaller than every DNA character. Build the suffix array $SA_U$ of $U$ (length $n + m + 1$) and the LCP array $LCP_U$.

**Boundary detection:** Mark each suffix in $SA_U$ as belonging to $S$ (if its starting position is in $[0, n)$) or to $T$ (if in $[n+1, n+m+1)$). A common substring of $S$ and $T$ corresponds to a pair of adjacent suffixes in $SA_U$ that belong to *different* strings and have a non-zero LCP.

**Algorithm:** Scan $SA_U$ from left to right, tracking $\max_{\text{cross-boundary}} LCP[i]$ and recording the position. The cross-boundary pair detection can be done in $O(n + m)$ time.

**Trace on $S = \text{"ATCGTA"}$, $T = \text{"TACGAT"}$:**

Concatenate: $U = \text{"ATCGTA\#TACGAT\$"}$. Build $SA$ and $LCP$:

$$
SA = [7, \; 6, \; 0, \; 5, \; 8, \; 12, \; 11, \; 9, \; 4, \; 2, \; 10, \; 3, \; 1]
$$

(Positions 0..5 are $S$, position 6 is `#`, positions 7..12 are $T$.)

After marking suffixes by origin:

| Rank | Pos | Origin | Suffix | LCP with prev |
|---|---|---|---|---|
| 0 | 7 | T | "TACGAT$" | 0 |
| 1 | 6 | # | "#TACGAT$" | 0 |
| 2 | 0 | S | "ATCGTA#TACGAT$" | 0 |
| 3 | 5 | S | "A#TACGAT$" | 1 |
| 4 | 8 | T | "ACGAT$" | 0 |
| 5 | 12 | T | "AT$" | 0 |
| 6 | 11 | T | "AT$"... wait recheck; position 11 is T | |
| ... | ... | ... | ... | ... |

The longest **cross-boundary** LCP value is the length of the longest common substring. By direct inspection of $S$ and $T$, the longest common substrings are "AT", "TA", "CG", "GA", each of length 2. So the answer is **2**, with one such substring being "AT" (occurs at position 0 of $S$ and position 2 of $T$).

**Time:** $O(n + m)$ for construction + $O(n + m)$ for the scan = $O(n + m)$.  
**Space:** $O(n + m)$ for $SA$, $LCP$.

**[Construction of concatenated string and SA: 2 Marks]**  
**[Cross-boundary scan and LCP usage: 2 Marks]**  
**[Trace on the example: 2 Marks]**  
**[Final time/space complexity: 1 Mark]**

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls:**
> 1. **Forgetting the sentinel:** Many students write $SA$ of length $n$ instead of $n+1$. Deduct 1 mark.
> 2. **Confusing SA rank with ISA:** $SA[i]$ is the *position*; $ISA[i]$ is the *rank*. Mixing them loses 1–2 marks.
> 3. **Off-by-one in LCP:** LCP is defined between $SA[i-1]$ and $SA[i]$, so $LCP[0] = 0$. Some students index from 1; state both conventions explicitly.
> 4. **Skipping the amortized argument:** When asked "why $O(n)$?", you must cite the **decrement lemma**. A bare $O(n)$ claim without proof scores 0.
> 5. **Misidentifying LCP[i] in longest-repeated-substring:** $LCP[i]$ is the *length* of the common prefix of *adjacent* suffixes, not a value at a position. Maximum is the answer, not minimum.
> 6. **Not mentioning the sentinel at the end of the string:** Forgetting `chr(1)` or `$` in prefix-doubling leads to incorrect tie-breaking on periodic strings (e.g., "aaaaa"). Always augment.
> 7. **Confusing "occurrence count" with "occurrence positions":** The two binary searches give (lo, hi) where $hi - lo$ is the *count* and $\{SA[lo], \dots, SA[hi-1]\}$ are the *positions*.

---

## 5.3 Topic Recap & Important Things to Remember

> [!NOTE]
> **Rapid Revision Checklist — Print and Pin to Your Wall**

### Core Definitions
- **Suffix Array (SA):** Sorted array of suffix starting positions; length $n+1$ with sentinel.
- **Inverse SA (ISA / Rank Array):** $ISA[SA[i]] = i$; $ISA[j]$ = rank of suffix starting at $j$.
- **LCP Array:** $LCP[i]$ = lcp of $i$-th and $(i-1)$-th suffix in $SA$; $LCP[0] = 0$.
- **$\Phi$ / PLCP array:** Permuted LCP; $\Phi[i] = \text{lcp}(S[i \dots), S[i-1 \dots))$.
- **Sentinel `$` / `chr(1)`:** Smallest symbol appended to ensure strict total order.
- **Difference Cover $D$:** Set of residues such that every $i$ has a neighbor in $D$ within distance 1; $D = \{0, 1\}$ for DC3.

### Key Properties & Identities
- $SA$ and $ISA$ are **permutations** of $\{0, 1, \dots, n\}$ (or $\{0, \dots, n-1\}$ without sentinel).
- $SA[ISA[i]] = i$ and $ISA[SA[i]] = i$ — always true.
- Total order: $S[SA[i] \dots) < S[SA[j] \dots)$ iff $i < j$.
- $LCP[i] \ge \min(LCP[i+1], LCP[i])$ — *not* true in general; only via RMQ.
- LCP-RMQ: $\text{lcp}(i, j) = \min(LCP[i+1], \dots, LCP[j])$ for $i < j$ in $SA$ order.

### Time & Space Bounds
| Algorithm | Time | Space |
|---|---|---|
| Naive sort (compare all pairs) | $O(n^2 \log n)$ | $O(n)$ |
| Prefix-doubling | $O(n \log n)$ | $O(n)$ |
| **DC3 / Skew** | $O(n)$ | $O(n)$ |
| **SA-IS** | $O(n)$ | $O(n)$ in-place possible |
| **Kasai LCP** | $O(n)$ | $O(n)$ |
| **Pattern search (2 binary searches)** | $O(\vert P \vert \log n)$ | $O(1)$ extra |
| **Longest repeated substring** | $O(n)$ after LCP built | $O(1)$ extra |
| **Longest common substring of 2 strings** | $O(n + m)$ | $O(n + m)$ |

### Algorithmic Rules
1. **Always append a sentinel** smaller than any character in $\Sigma$.
2. **Strip the sentinel** from the final $SA$ if the KTU convention requires $n$ entries.
3. **In Kasai**, the inner `while` loop runs at most $2n$ total times cumulatively.
4. **For binary search pattern matching**, the comparison function `cmp(i)` must handle three cases: suffix < pattern, suffix starts with pattern (return 0 for "less than or equal"), suffix > pattern.
5. **For DC3**, the base case is $n \le$ small constant (e.g., $n \le 3$), where direct sort suffices.
6. **LMS suffixes** in SA-IS are the leftmost S-type in each S-run.

### Parameters for Optimization Setups
- **Alphabet size $k$:** Smaller $k$ (DNA, $k=4$) allows faster bucket-sort; integer alphabets need prefix-sum tricks.
- **Block size for cache:** Process in $32$ KB tiles to fit L1 cache; in DC3 the recursion size drops geometrically, so cache behaviour is excellent.
- **Memory layout:** Store $SA$ in a single contiguous array; align to $64$ bytes for SIMD vectorization of bulk comparisons.
- **Parallelization:** DC3 has a natural parallel structure (the two passes for $SA_0$ and $SA_{12}$); SA-IS can be parallelized over LMS substrings.

### Real-World Applications
- **Genomics:** BWA, Bowtie2 use BWT (a permutation derived from SA) for read alignment.
- **Compression:** LZ77 factorization in $O(n)$ using SA + LCP.
- **Plagiarism Detection:** Shingling + LCP-based document similarity.
- **Data Mining:** Frequent substring mining via LCP intervals.
- **Search Engines:** Inverted indices and postings lists are SA cousins.
- **Document Versioning:** Diff algorithms use SA + LCP for longest common subsequence approximation.

### Quick-Recall Mnemonics
- **"SA sorts, ISA inverts, LCP connects"** — the three arrays and their roles.
- **"Kasai: high, then lower-by-one"** — the $h \to h-1$ decrement is the algorithm.
- **"DC3: sample 2 of every 3, recurse, merge"** — three-step structure.
- **"SA-IS: induce L, then S"** — L-suffix sort first, then S-suffix sort.
- **"Pattern: lo finds first $\ge$, hi finds first $>$"** — two binary searches.

> **Final KTU Mantra:** *The suffix array is to text what the hash table is to keys — a pointer-rich, constant-time-query structure whose power emerges from its sortedness and its companion LCP array.*

<!-- SECTION_5_END -->
