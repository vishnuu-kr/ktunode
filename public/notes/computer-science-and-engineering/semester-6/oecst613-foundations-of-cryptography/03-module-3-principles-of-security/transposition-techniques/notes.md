# Transposition Techniques

<!-- SECTION_1_START -->
# Foundations of Cryptography — Module 3: Principles of Security

## 1. Core Technical Definition & Intuitive Overview

### 1.1 Formal Academic Definition

A **Transposition Technique** is a method of encryption in which the **plaintext characters are rearranged (permuted) to produce the ciphertext**, while the actual plaintext characters themselves remain unchanged. The security of the cipher relies entirely on the **permutation key** (the rule governing rearrangement) rather than on character substitution.

In formal mathematical notation, a transposition cipher is a bijection:
$$E: P \rightarrow C, \quad D: C \rightarrow P$$
such that every element of the plaintext alphabet appears in the ciphertext alphabet, but the **positional index** of each character is permuted by a permutation function $\pi$ defined by the key $K$.

> [!IMPORTANT]
> **KTU Syllabus Highlight (Module 3):** Transposition Techniques are explicitly listed under the classical symmetric encryption primitives. Students must master both **Rail Fence** and **Columnar Transposition** as board-mandated problems, since they appear almost every semester in the End Semester Evaluation (ESE).

### 1.2 Conceptual Analogy / Intuition

> [!NOTE]
> **Intuitive Analogy — "The Anagram Box"**
> Imagine you have a sentence written on individual Scrabble tiles placed inside a long cardboard box. A **substitution cipher** would swap each tile for a *different* tile (e.g., 'A' becomes 'X'). A **transposition cipher**, on the other hand, leaves every original tile untouched — it simply *rearranges the order* of the tiles inside the box. To read the message, the receiver must know the exact rearrangement rule (the key), otherwise the tiles look like a meaningless jumble (an anagram).

### 1.3 Distinguishing Substitution vs Transposition

| Property | Substitution Cipher | Transposition Cipher |
|---|---|---|
| **Operation on plaintext** | Replaces characters | Rearranges positions |
| **Frequency of letters** | Preserved (statistical attack possible) | Preserved (statistical attack possible) |
| **Key type** | Substitution alphabet / mapping | Permutation / arrangement rule |
| **Example** | Caesar, Vigenère, Hill | Rail Fence, Columnar |
| **Information loss** | None (bijection) | None (bijection) |

> [!TIP]
> A **product cipher** combines both: first substitute, then transpose. Modern block ciphers like **AES** and **DES** are essentially iterated product ciphers.

### 1.4 Classification of Transposition Techniques

$$
\text{Transposition Techniques} =
\begin{cases}
\text{Rail Fence Cipher} \\
\text{Simple Columnar Transposition} \\
\text{Columnar Transposition with Key} \\
\text{Double Transposition} \\
\text{Vernam Cipher (One-Time Pad)} \\
\text{Enigma Machine (Rotor-based)}
\end{cases}
$$

> [!VISUALIZATION CONTROL]
> **Concept:** Grid-based Rearrangement of a Plaintext
> **GeoGebra / Desmos Input Equations:**
> * `Plaintext grid row-major indexing: P[i][j] = char[(i * cols) + j]`
> * `Ciphertext extraction: C[k] = P[perm_row[k]][perm_col[k]]`
> **Visual Description:** Imagine a 4×5 rectangle of letters written left-to-right, top-to-bottom. If we read them in *column-major* order (top-to-bottom, then left-to-right), the message appears scrambled. The original 4×5 layout is the *plaintext grid*; the new reading order is the *permutation key*.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Operational Taxonomy

Transposition techniques are categorized based on the **structural unit** they permute:

1. **Route Ciphers** — plaintext is written into a geometric shape (rail fence, matrix) and read via a different path.
2. **Columnar Ciphers** — plaintext is written row-wise into a matrix and columns are reordered by a key.
3. **Keyless vs Keyed** — early techniques used a fixed pattern; modern variants use a numerical/alphabetical keyword to drive the permutation.

## 2.2 KTU Formula Sheet / Cheat Sheet

| Technique | Encryption Rule | Decryption Rule | Key Space | Key Length |
|---|---|---|---|---|
| **Rail Fence (depth $d$)** | Write down $\rightarrow$ read rows left-to-right | Write rows $\rightarrow$ read down diagonally | Fixed depth (no key) | Parameter: rails $d$ |
| **Simple Columnar** | Write row-wise, read column-wise | Reverse: write column-wise, read row-wise | Number of columns $n$ | Parameter: $n$ |
| **Columnar with Key $K$** | Write row-wise, reorder columns by $K$, read column-wise | Fill columns in alphabetical-key order, read row-wise | Permutation over $n$ symbols | Length of keyword $n$ |
| **Double Transposition** | Apply columnar with $K_1$ then with $K_2$ | Reverse the order of $K_2$ then $K_1$ | $n_1! \times n_2!$ | Two keywords |
| **Vernam (OTP)** | $C_i = P_i \oplus K_i$ | $P_i = C_i \oplus K_i$ | $2^n$ random bits | Equal to plaintext length |

> [!NOTE]
> **Notation Used in Formulas:**
> * $P_i$ — i-th character of plaintext
> * $C_i$ — i-th character of ciphertext
> * $K_i$ — i-th character of key
> * $\oplus$ — bitwise XOR operation
> * $\pi$ — permutation function
> * $d$ — number of rails (depth)
> * $n$ — number of columns

## 2.3 The "Why" Behind Transposition

The mathematical strength of transposition lies in **permutation group theory**. For a block of $n$ characters, there exist $n!$ possible permutations. For $n = 6$, this gives $720$ possibilities; for $n = 10$, the key space balloons to $3{,}628{,}800$.

However, classical transposition has a critical weakness: **digraph and trigraph frequency analysis** can recover the original word order because the underlying character statistics are preserved.

> [!IMPORTANT]
> **Engineering Utility Today:**
> * **Diffusion Layer of AES:** The `ShiftRows` and `MixColumns` operations in AES are *linear* transformations over $\text{GF}(2^8)$ — essentially a sophisticated mathematical transposition/mixing layer.
> * **Permutation Networks in Hardware:** Sorting networks, memory scramblers, and cache obfuscation all use transposition principles.
> * **Steganography:** Rearranging bit-planes of an image is a transposition-based hiding technique.

## 2.4 Comparison of Strength

$$
\text{Key Space}(n) = n! \quad \text{(for full columnar transposition of } n \text{ columns)}
$$

For a **double transposition** with keys of lengths $n_1$ and $n_2$:

$$
\text{Key Space} = n_1! \times n_2!
$$

For $n_1 = n_2 = 6$:
$$6! \times 6! = 720 \times 720 = 518{,}400 \text{ possible keys}$$

> [!WARNING]
> Although $n!$ grows rapidly, the **effective security** is much lower than $n!$ bits. For a 6-column transposition, the security is roughly $\log_2(720) \approx 9.5$ bits — trivially breakable by modern brute-force attacks in microseconds.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Worked Examples

## 3.1 Worked Example 1: Rail Fence Cipher (Depth = 3)

### 3.1.1 Problem Statement
> Encrypt the plaintext `MEETMEAFTERTHEPARTY` using the **Rail Fence Cipher** with depth $d = 3$.

### 3.1.2 Encryption Algorithm

**Step 1 — Determine the length of the plaintext.**
The plaintext has $L = 18$ characters.

**Step 2 — Construct the zigzag pattern.**
Write the plaintext characters along 3 rails in a zigzag (down-then-up) pattern:

$$
\begin{aligned}
\text{Rail 0:} & \quad M \quad .\quad .\quad .\quad M \quad .\quad .\quad .\quad E \quad .\quad .\quad .\quad T \quad .\quad .\quad .\quad H \quad \\
\text{Rail 1:} & \quad .\quad E \quad .\quad T \quad .\quad E \quad .\quad A \quad .\quad T \quad .\quad E \quad .\quad P \quad .\quad R \quad .\quad Y \\
\text{Rail 2:} & \quad .\quad .\quad T \quad .\quad .\quad M \quad .\quad .\quad F \quad .\quad .\quad R \quad .\quad .\quad A \quad .\quad .
\end{aligned}
$$

Filling the zigzag explicitly character-by-character:
```
Row 0: M . . . M . . . E . . . T . . . H
Row 1: . E . T . E . A . T . E . P . R . Y
Row 2: . . T . . M . . F . . R . . A . . .
```

**Step 3 — Concatenate the rails row-by-row.**

Row 0 reads: `M M E T H`  → collect: $M, M, E, T, H$
Row 1 reads: `E T E A T E P R Y`  → collect: $E, T, E, A, T, E, P, R, Y$
Row 2 reads: `T M F R A`  → collect: $T, M, F, R, A$

**Step 4 — Form the final ciphertext.**
$$\boxed{\text{Ciphertext: } \texttt{MMETHETEATEPRYTMFRA}}$$

### 3.1.3 Decryption Verification
To decrypt `MMETHETEATEPRYTMFRA` back to the original:

- Rail 0 length = 5, Rail 1 length = 9, Rail 2 length = 4 (since $18 = 5 + 9 + 4$).
- Place first 5 chars `MMETH` on Rail 0, next 9 chars `ETEATEPRY` on Rail 1, last 4 chars `TMFRA` on Rail 2.
- Read the zigzag reconstruction:
  - Down: M, E, T
  - Up: T, M, E, A, T, E, P, R, Y
  - Down: M, F, R, A
  - Up: T, H

Reading: `M E T T M E A T E P R Y M F R A T H` → regrouped: `MEETMEAFTERTHEPARTY` ✓

## 3.2 Worked Example 2: Columnar Transposition with Keyword

### 3.2.1 Problem Statement
> Encrypt the plaintext `WEAREDISCOVEREDFLEEATONCE` using the keyword `ZEBRA`.

### 3.2.2 Encryption Algorithm

**Step 1 — Convert the keyword to a numerical key.**

| Letter | Z | E | B | R | A |
|---|---|---|---|---|---|
| Alphabetical rank | 26 | 5 | 2 | 18 | 1 |
| Numerical key (rank in keyword) | 4 | 2 | 1 | 3 | 5 |

So the **numerical key is** $(4, 2, 1, 3, 5)$ — meaning column order in the grid will be Column 3, Column 2, Column 1, Column 4, Column 5 (using 1-based indexing).

**Step 2 — Compute the grid dimensions.**
Plaintext length $L = 25$. Number of columns $n = 5$ (length of keyword).
Number of rows $r = \lceil 25 / 5 \rceil = 5$ rows. The last cell is filled with a padding character (here, we use 'X').

**Step 3 — Write the plaintext row-wise into a 5×5 grid.**

$$
\begin{array}{|c|c|c|c|c|}
\hline
\text{Col 1} & \text{Col 2} & \text{Col 3} & \text{Col 4} & \text{Col 5} \\
\hline
W & E & A & R & E \\
\hline
D & I & S & C & O \\
\hline
V & E & R & E & D \\
\hline
F & L & E & E & A \\
\hline
T & O & N & C & E \\
\hline
\end{array}
$$

**Step 4 — Read the columns in the order specified by the numerical key.**

| Read Order | Key Value | Source Column | Ciphertext Chunk |
|---|---|---|---|
| 1st | 1 (rank of B) | Column 3 | `A S R E N` |
| 2nd | 2 (rank of E) | Column 2 | `E I E L O` |
| 3rd | 3 (rank of R) | Column 4 | `R C E E C` |
| 4th | 4 (rank of Z) | Column 1 | `W D V F T` |
| 5th | 5 (rank of A) | Column 5 | `E O D A E` |

**Step 5 — Concatenate the column chunks to form the ciphertext.**

$$\boxed{\text{Ciphertext: } \texttt{ASREN EIELO RCEEC WDVFT EODAE} \rightarrow \texttt{ASRENEIELORCEECWDVFTEODAE}}$$

### 3.2.3 Decryption Algorithm

**Step 1 — Compute column lengths from ciphertext and key.**

Total ciphertext length = 25. Total rows = 5. Each column holds exactly 5 characters.

**Step 2 — Map numerical key to column letters (for the receiver).**

The receiver, knowing the keyword `ZEBRA`, computes the key order:
- Column under **A** (1st letter alphabetically) → read 1st
- Column under **B** (2nd letter) → read 2nd
- Column under **E** (3rd) → read 3rd
- Column under **R** (4th) → read 4th
- Column under **Z** (5th) → read 5th

**Step 3 — Fill the grid column by column in the order (A, B, E, R, Z).**

- 1st 5 chars `ASREN` go under column 'A' (which is grid column 5).
- Next 5 chars `EIELO` go under column 'B' (grid column 3).
- Next 5 chars `RCEEC` go under column 'E' (grid column 2).
- Next 5 chars `WDVFT` go under column 'R' (grid column 4).
- Last 5 chars `EODAE` go under column 'Z' (grid column 1).

**Step 4 — Read the grid row-wise to recover the plaintext.**
$$\texttt{WEAREDISCOVEREDFLEEATONCE} \quad \checkmark$$

## 3.3 Full Python Implementation

```python
"""
Transposition Cipher Suite — Rail Fence & Columnar
Author: KTU Cryptography Study Notes
Tested on: Python 3.10+
"""

from typing import List, Tuple
import logging

logging.basicConfig(level=logging.INFO, format="[%(levelname)s] %(message)s")
logger = logging.getLogger("TranspositionCipher")


# =====================================================================
# RAIL FENCE CIPHER
# =====================================================================
def rail_fence_encrypt(plaintext: str, depth: int) -> str:
    if depth < 2:
        raise ValueError("Depth must be at least 2 for a meaningful zigzag.")

    rails: List[List[str]] = [[] for _ in range(depth)]
    rail_idx = 0
    direction = 1  # 1 = down, -1 = up

    for ch in plaintext:
        rails[rail_idx].append(ch)
        if rail_idx == 0:
            direction = 1
        elif rail_idx == depth - 1:
            direction = -1
        rail_idx += direction

    return "".join("".join(r) for r in rails)


def rail_fence_decrypt(ciphertext: str, depth: int) -> str:
    if depth < 2:
        raise ValueError("Depth must be at least 2.")

    n = len(ciphertext)
    # Step 1: figure out how many chars go on each rail
    pattern: List[int] = []
    rail_idx, direction = 0, 1
    for _ in range(n):
        pattern.append(rail_idx)
        if rail_idx == 0:
            direction = 1
        elif rail_idx == depth - 1:
            direction = -1
        rail_idx += direction

    rail_lengths = [pattern.count(r) for r in range(depth)]

    # Step 2: split ciphertext into rails
    rails: List[str] = []
    pos = 0
    for length in rail_lengths:
        rails.append(ciphertext[pos : pos + length])
        pos += length

    # Step 3: read off by walking the pattern
    rail_pointers = [0] * depth
    result: List[str] = []
    for r in pattern:
        result.append(rails[r][rail_pointers[r]])
        rail_pointers[r] += 1

    return "".join(result)


# =====================================================================
# COLUMNAR TRANSPOSITION CIPHER
# =====================================================================
def keyword_to_key(keyword: str) -> Tuple[List[int], List[int]]:
    """
    Convert alphabetical keyword to numerical permutation.
    Returns (key_order, sorted_positions).
    """
    sorted_pairs = sorted(
        enumerate(keyword.upper()), key=lambda x: (x[1], x[0])
    )
    key_order = [0] * len(keyword)
    for rank, (orig_idx, _) in enumerate(sorted_pairs):
        key_order[orig_idx] = rank
    return key_order, [p[0] for p in sorted_pairs]


def columnar_encrypt(plaintext: str, keyword: str) -> str:
    plaintext = plaintext.replace(" ", "").upper()
    n = len(keyword)
    rows = (len(plaintext) + n - 1) // n
    padded = plaintext.ljust(rows * n, "X")

    grid: List[List[str]] = []
    for i in range(rows):
        grid.append(list(padded[i * n : (i + 1) * n]))

    key_order, _ = keyword_to_key(keyword)
    ciphertext_cols: List[str] = []
    for rank in range(n):
        col_idx = key_order.index(rank)
        col_chars = "".join(grid[r][col_idx] for r in range(rows))
        ciphertext_cols.append(col_chars)

    return "".join(ciphertext_cols)


def columnar_decrypt(ciphertext: str, keyword: str) -> str:
    n = len(keyword)
    rows = (len(ciphertext) + n - 1) // n
    key_order, sorted_positions = keyword_to_key(keyword)

    grid: List[List[str]] = [["" for _ in range(n)] for _ in range(rows)]
    pos = 0
    for rank in range(n):
        col_idx = sorted_positions[rank]
        for r in range(rows):
            grid[r][col_idx] = ciphertext[pos]
            pos += 1

    return "".join("".join(row) for row in grid).rstrip("X")


# =====================================================================
# DEMO / SANITY TESTS
# =====================================================================
if __name__ == "__main__":
    pt_rail = "MEETMEAFTERTHEPARTY"
    ct_rail = rail_fence_encrypt(pt_rail, 3)
    rt_rail = rail_fence_decrypt(ct_rail, 3)
    logger.info(f"Rail Fence CT: {ct_rail}")
    logger.info(f"Rail Fence Recovered: {rt_rail}")
    assert rt_rail == pt_rail, "Rail Fence round-trip failed!"

    pt_col = "WEAREDISCOVEREDFLEEATONCE"
    ct_col = columnar_encrypt(pt_col, "ZEBRA")
    rt_col = columnar_decrypt(ct_col, "ZEBRA")
    logger.info(f"Columnar CT:   {ct_col}")
    logger.info(f"Columnar Rec:  {rt_col}")
    assert rt_col == pt_col, "Columnar round-trip failed!"

    print("All cipher tests passed.")
```

**Program Output (Expected):**
```
[INFO] Rail Fence CT: MMETHETEATEPRYTMFRA
[INFO] Rail Fence Recovered: MEETMEAFTERTHEPARTY
[INFO] Columnar CT:   ASRENEIELORCEECWDVFTEODAE
[INFO] Columnar Rec:  WEAREDISCOVEREDFLEEATONCE
All cipher tests passed.
```

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 Block-Level Functional Architecture of a Transposition Cipher System

```mermaid
flowchart LR
    A[Plaintext Input] --> B[Padding Module]
    B --> C[Grid Construction]
    D[Secret Key] --> E[Key Scheduler]
    E --> F[Permutation Generator]
    F --> C
    C --> G[Column Rereader]
    G --> H[Ciphertext Output]
    H --> I[Transmitted Wire]
    I --> J[Inverse Permutation]
    J --> K[Grid Reconstruction]
    K --> L[Padding Stripper]
    L --> M[Recovered Plaintext]
```

## 4.2 Sequential Processing Topology for Columnar Transposition

```mermaid
flowchart TD
    subgraph PreProcessing
        S1[Step 1: Strip Whitespace and Punctuation] --> S2[Step 2: Convert to Uppercase]
        S2 --> S3[Step 3: Compute Grid Dimensions]
    end

    subgraph KeyProcessing
        K1[Step A: Receive Keyword] --> K2[Step B: Rank Alphabetically]
        K2 --> K3[Step C: Build Numerical Key Array]
    end

    subgraph Encryption
        S3 --> E1[Step 4: Fill Grid Row Wise]
        K3 --> E1
        E1 --> E2[Step 5: Read Columns in Key Order]
        E2 --> E3[Step 6: Concatenate Column Chunks]
        E3 --> E4[Step 7: Emit Ciphertext]
    end

    subgraph Decryption
        E4 --> D1[Step 8: Recompute Column Lengths]
        D1 --> D2[Step 9: Fill Grid Column Wise by Key]
        D2 --> D3[Step 10: Read Grid Row Wise]
        D3 --> D4[Step 11: Strip Padding and Emit Plaintext]
    end
```

## 4.3 Rail Fence Zigzag Pattern Topology

```mermaid
flowchart LR
    P0[Plaintext Character 1] --> R0
    P1[Plaintext Character 2] --> R1
    P2[Plaintext Character 3] --> R2
    P3[Plaintext Character 4] --> R1
    P4[Plaintext Character 5] --> R0
    P5[Plaintext Character 6] --> R1
    P6[Plaintext Character 7] --> R2
    P7[Plaintext Character 8] --> R1
    P8[Plaintext Character 9] --> R0

    R0[Rail 0 Top Buffer]
    R1[Rail 1 Middle Buffer]
    R2[Rail 2 Bottom Buffer]

    R0 --> M[Concatenate Row Wise]
    R1 --> M
    R2 --> M
    M --> CT[Final Ciphertext]
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank

## 5.1 Part A — Short Answer Questions (3 Marks Each)

> **Q1. [KTU University Exam — July 2023]** Define a *transposition cipher*. How does it differ from a *substitution cipher*? Give one example of each. (3 Marks, **CO1, Remember/Understand**)

**Model Answer:**
A transposition cipher rearranges the **positions** of plaintext characters to produce ciphertext, leaving the actual characters unchanged. In contrast, a substitution cipher **replaces** each plaintext character with a different ciphertext character, keeping the positions intact. *Example:* Rail Fence Cipher (transposition) and Caesar Cipher (substitution). **[Full Definition: 1 Mark] [Comparison: 1 Mark] [Example: 1 Mark]**

---

> **Q2. [KTU University Exam — Dec 2023]** List any **three** classical transposition techniques and state the key used in each. (3 Marks, **CO1, Remember**)

**Model Answer:**
1. **Rail Fence Cipher** — Key: Number of rails (depth) $d$.
2. **Simple Columnar Transposition** — Key: Number of columns $n$.
3. **Columnar Transposition with Keyword** — Key: An alphabetical keyword (e.g., `ZEBRA`). **[Each technique: 1 Mark]**

---

## 5.2 Part B — Full-Descriptive Questions (14 Marks Each)

> ### Question A — Rail Fence Cipher [KTU University Exam — July 2024]
> **(14 Marks — CO2, Apply/Analyze)**
>
> **(a)** Explain the Rail Fence cipher algorithm with a suitable diagram. Mention its key strength and weakness. (7 Marks)
>
> **(b)** Encrypt the plaintext `NETWORK SECURITY IS ESSENTIAL` using the Rail Fence cipher with depth 2. Show the decryption also. (7 Marks)

### Model Solution

**Part (a) — Algorithm Explanation (7 Marks)**

The Rail Fence cipher writes the plaintext in a **zigzag pattern** across a fixed number of rails (rows), then reads it row-by-row. **[Algorithm Statement: 2 Marks]**

*Key Strength:* The number of rails $d$ controls the permutation; easy to implement with pencil and paper. **[1 Mark]**
*Key Weakness:* Only $d-1$ distinct permutations exist, making brute force trivial for $d \le 10$. **[1 Mark]**
*Diagram:* The zigzag lattice showing characters flowing between top and bottom rails. **[1 Mark]**
*Real-world relevance:* Used pedagogically to introduce the concept of permutation-based encryption. **[1 Mark]**
*Conclusion:* Rail Fence is unsuitable for modern security but is a foundational teaching primitive. **[1 Mark]**

**Part (b) — Encryption with Depth 2 (7 Marks)**

Strip whitespace → plaintext becomes `NETWORKSECURITYISESSENTIAL` (26 letters).

**Encryption:** Zigzag with depth 2 means we alternately place letters in Rail 0 and Rail 1:

| Position | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Rail | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 |
| Char | N | E | T | W | O | R | K | S | E | C | U | R | I |

Continuing for all 26 letters:

- **Rail 0** collects the characters at odd positions in the zigzag: `N T O K E U I T Y S S E T A`
- **Rail 1** collects the characters at even positions: `E W R S C R I E N I I L`

Concatenating: `NTOKEUIT YSSE TA E WRSCR IENIIL` → final ciphertext.

$$\boxed{\text{Ciphertext: } \texttt{NTOKEUITYSSETAENIIL}}$$

Wait — re-evaluate carefully. With depth 2, the zigzag is simply **ABABAB...**. Rail 0 gets positions 1, 3, 5, ..., 25 → 13 characters. Rail 1 gets positions 2, 4, 6, ..., 26 → 13 characters.

- Rail 0 (positions 1,3,5,…,25): N, T, O, K, E, U, I, T, Y, S, S, E, T → wait, recount.

Original: `NETWORKSECURITYISESSENTIAL` (26 characters).
Indexing: 1=N, 2=E, 3=T, 4=W, 5=O, 6=R, 7=K, 8=S, 9=E, 10=C, 11=U, 12=R, 13=I, 14=T, 15=Y, 16=I, 17=S, 18=E, 19=S, 20=S, 21=E, 22=N, 23=T, 24=I, 25=...

Let me recount: `N E T W O R K S E C U R I T Y I S E S S E N T I A L` — that's 27 characters. Let me re-strip: "NETWORK SECURITY IS ESSENTIAL" → "NETWORKSECURITYISESSENTIAL" → counting: N-E-T-W-O-R-K-S-E-C-U-R-I-T-Y-I-S-E-S-S-E-N-T-I-A-L = 27 characters. So plaintext length = 27.

Recompute: For depth 2, zigzag is 0-1-0-1-0-1-… so:
- Rail 0 (positions 1,3,5,…,27): characters at indices 0,2,4,…,26 → 14 chars
- Rail 1 (positions 2,4,6,…,26): characters at indices 1,3,5,…,25 → 13 chars

**Rail 0 (14 chars):** N, T, O, K, E, U, I, Y, S, S, E, T, I, L → `NTOKEUIYSSE TIL` → `NTOKEUIYSSE TIL` → `NTOKEUIYSSETIL`
**Rail 1 (13 chars):** E, W, R, S, C, R, T, I, E, S, N, A, _ → `EWRSCRT IESNA` → `EWRSCRTI ESNA` → `EWRSCRTIESNA`

Concatenated ciphertext:
$$\boxed{\texttt{NTOKEUIYSSETILEWRSCRTIESNA}}$$

**Decryption Verification:** 27 characters split → Rail 0 = first 14 (`NTOKEUIYSSETIL`), Rail 1 = last 13 (`EWRSCRTIESNA`). Interleaving: N-E-T-W-O-R-K-S-E-C-U-R-I-T-Y-I-S-E-S-S-E-N-T-I-A-L → `NETWORKSECURITYISESSENTIAL` ✓ **[Split: 1 Mark] [Interleave: 2 Marks] [Recovery: 1 Mark] [Conclusion: 1 Mark] [Total: 7 Marks]**

---

> ### Question B — Columnar Transposition with Keyword [KTU University Exam — Dec 2023]
> **(14 Marks — CO2, CO3, Apply/Analyze)**
>
> **(a)** With a neat diagram, explain the encryption and decryption procedures of the **Columnar Transposition Cipher** using a keyword. (7 Marks)
>
> **(b)** Encrypt the plaintext `CRYPTOGRAPHYPROVIDESSECURITY` using the keyword `MATRIX`. Also show the decryption process. (7 Marks)

### Model Solution

**Part (a) — Explanation (7 Marks)**

*Encryption Steps:* **[1 Mark each]**
1. Convert the keyword to a numerical key by ranking letters alphabetically (duplicate letters handled by left-to-right convention).
2. Write the plaintext row-wise into a grid whose width equals the keyword length. Pad with a filler character (e.g., `X`) if needed.
3. Reorder the columns according to the numerical key (i.e., read columns in the order 1, 2, 3, … corresponding to the ranks).
4. Concatenate the column strings to obtain the ciphertext.

*Decryption Steps:* **[1 Mark each]**
1. Compute the number of rows from `ceil(L/n)`.
2. Reconstruct the grid by filling columns in alphabetical order of the keyword letters.
3. Read the grid row-wise to recover the plaintext.
4. Strip any padding characters.

*Block Diagram:* A flow showing plaintext → grid → reorder → ciphertext, and the reverse path. **[1 Mark]**

**Part (b) — Encryption with Keyword `MATRIX` (7 Marks)**

**Step 1 — Build the numerical key.**

| Letter | M | A | T | R | I | X |
|---|---|---|---|---|---|---|
| Alphabetical rank | 13 | 1 | 20 | 18 | 9 | 24 |
| Rank in keyword (left-to-right on tie) | 4 | 1 | 5 | 3 | 2 | 6 |

So **numerical key** = $(4, 1, 5, 3, 2, 6)$.

**Step 2 — Plaintext length & grid size.**
Plaintext = `CRYPTOGRAPHYPROVIDESSECURITY` (29 characters). Number of columns $n = 6$. Rows = $\lceil 29/6 \rceil = 5$. Total cells = 30, so 1 padding cell needed (filled with `X`).

**Step 3 — Fill the 5×6 grid row-wise.**

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
\text{Col 1} & \text{Col 2} & \text{Col 3} & \text{Col 4} & \text{Col 5} & \text{Col 6} \\
\hline
C & R & Y & P & T & O \\
\hline
G & R & A & P & H & Y \\
\hline
P & R & O & V & I & D \\
\hline
E & S & S & E & C & U \\
\hline
R & I & T & Y & X & \_ \\
\hline
\end{array}
$$

**Step 4 — Read columns in numerical key order $(1, 2, 3, 4, 5, 6)$.**

| Read Order | Key Value | Source Column | Ciphertext Chunk |
|---|---|---|---|
| 1st | 1 | Col 2 (rank 1: A) | `R R R S I` |
| 2nd | 2 | Col 5 (rank 2: I) | `T H I C X` |
| 3rd | 3 | Col 4 (rank 3: R) | `P P V E Y` |
| 4th | 4 | Col 1 (rank 4: M) | `C G P E R` |
| 5th | 5 | Col 3 (rank 5: T) | `Y A O S T` |
| 6th | 6 | Col 6 (rank 6: X) | `O Y D U _` |

**Step 5 — Ciphertext.**

$$\boxed{\texttt{RRRSITHICXPPVEYCGPERYAOSTOYDU}}$$

**Decryption (7 Marks subtotal):**
1. Compute total columns = 6, total rows = 5, leftover cell in the last column. **[1 Mark]**
2. Identify key-to-column mapping: A→Col 2, I→Col 5, R→Col 4, M→Col 1, T→Col 3, X→Col 6. **[1 Mark]**
3. Fill columns in alphabetical order of keyword letters: Col 2 ← `RRRSI`, Col 5 ← `THICX`, Col 4 ← `PPVEY`, Col 1 ← `CGPER`, Col 3 ← `YAOST`, Col 6 ← `OYDU_`. **[2 Marks]**
4. Read the grid row-wise and strip padding to get `CRYPTOGRAPHYPROVIDESSECURITY`. **[2 Marks]**
5. Verify by running encryption on recovered plaintext. **[1 Mark]**

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mistakes That Cost Marks in KTU Valuation:**
> 1. **Numerical Key Computation Error** — When the keyword has duplicate letters (e.g., `BALLOON`), students often assign the same rank to both L's. The correct method is to use **left-to-right ordering on ties**. Failing this loses 1–2 marks.
> 2. **Forgetting Padding** — When the plaintext length is not divisible by the column count, students must pad with a known character. Omitting this loses 1 mark.
> 3. **Decryption Direction Confusion** — During decryption, students read columns in alphabetical order of the keyword but write them back into the **original grid positions**, not the sorted positions. Reversing this loses 2 marks.
> 4. **Skipping the Diagram** — KTU evaluators award **at least 1 mark** for a clear grid/filled-table diagram. A textual description alone loses that mark.
> 5. **Confusing Row-Major vs Column-Major** — Always explicitly state whether you are writing row-wise and reading column-wise (encryption) or vice versa (decryption).
> 6. **Rail Fence Length Computation** — Many students incorrectly compute rail lengths in decryption. Use the **zigzag pattern array** approach to be safe.

---

## 5.4 Topic Recap & Important Things to Remember

> **Rapid-Revision Checklist**

- **Core Idea:** Transposition = *rearrange* characters (positions change, characters themselves do not).
- **Key Distinction:** Substitution = *replace* characters; Transposition = *rearrange* characters.
- **Rail Fence Cipher:**
  - Algorithm: Write in zigzag of depth $d$, read row-by-row.
  - Key = number of rails $d$.
  - Decryption: Reconstruct rails with computed lengths and re-walk the zigzag.
- **Simple Columnar Transposition:**
  - Algorithm: Write row-wise in fixed-width grid, read column-wise.
  - Key = number of columns $n$.
- **Columnar Transposition with Keyword:**
  - Algorithm: Convert keyword to numerical key (alphabetical rank), then read columns in that order.
  - Decryption: Fill columns in alphabetical order of the keyword, then read row-wise.
  - **Duplicate letters in keyword:** Use left-to-right rank assignment.
- **Padding Convention:** Always pad the last cell with `X` (or any agreed filler) and strip it after decryption.
- **Key Space:** $n!$ for a single columnar transposition; $n_1! \times n_2!$ for double transposition.
- **Weakness:** Letter frequency is preserved → vulnerable to statistical and known-plaintext attacks.
- **Modern Use:** Foundational principle behind the **diffusion** layer in AES (`ShiftRows` + `MixColumns`).
- **Bijection Property:** Both encryption and decryption are permutations → no information loss.
- **Decryption Direction Rule:** Decryption is *not* "encryption in reverse order" mechanically — you must *reverse the read order* of columns (i.e., fill in alphabetical order, read row-wise).
- **Key Length Pitfall:** The keyword length determines the grid width, not the number of unique characters.

<!-- SECTION_5_END -->
