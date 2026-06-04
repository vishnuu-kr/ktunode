---
title: "edit distance"
subject: "BIOINFORMATICS"
module: "Module 1: Molecular Biology Primer (3 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c15d"
status: "completed"
scrapedAt: "2026-05-20T17:00:57.302Z"
---
# BIOINFORMATICS - Module 1: Molecular Biology Primer (3 hours)

## Topic: Edit Distance

### Learning Outcomes:

*   **Understand the concept of edit distance and its relevance in bioinformatics.**
*   **Identify the basic operations involved in calculating edit distance.**
*   **Explain the difference between global and local alignment in the context of edit distance.**
*   **Describe the dynamic programming approach to calculating edit distance.**
*   **Apply edit distance algorithms to biological sequences.**

---

### 1. Introduction to Edit Distance

**What is Edit Distance?**

*   Edit distance is a metric that quantifies the **dissimilarity** between two sequences.
*   It measures the **minimum number of single-character edits** (insertions, deletions, or substitutions) required to change one sequence into the other.
*   In bioinformatics, sequences typically refer to **DNA, RNA, or protein sequences**.

**Relevance in Bioinformatics:**

*   **Sequence Alignment:** Edit distance forms the foundation for sequence alignment algorithms, which are crucial for identifying similarities and evolutionary relationships between biological sequences.
*   **Genome Analysis:** Comparing DNA sequences to identify mutations, gene variations, and evolutionary changes.
*   **Protein Analysis:** Comparing protein sequences to understand functional domains, evolutionary conservation, and potential drug targets.
*   **Database Searching:** Finding similar sequences within large biological databases.
*   **Error Correction:** Identifying and correcting errors in sequencing data.

---

### 2. Basic Edit Operations

To calculate the edit distance, we consider three fundamental operations:

*   **Insertion:** Adding a character to a sequence.
    *   *Example:* Transforming "CAT" to "CART" requires an insertion of 'R'.
*   **Deletion:** Removing a character from a sequence.
    *   *Example:* Transforming "CART" to "CAT" requires a deletion of 'R'.
*   **Substitution (or Mismatch):** Replacing one character with another.
    *   *Example:* Transforming "CAT" to "COT" requires a substitution of 'A' with 'O'.

**Note:** Often, a **match** (where characters are the same) is also considered, with a cost of 0.

---

### 3. Types of Sequence Alignment and Edit Distance

The way we define "distance" depends on whether we are comparing entire sequences or parts of them.

#### 3.1. Global Alignment (Needleman-Wunsch Algorithm)

*   **Concept:** Aligns two sequences from beginning to end, forcing a global alignment. It aims to find the best possible alignment across the *entire length* of both sequences.
*   **Edit Distance Implication:** The calculated edit distance represents the minimum number of operations to transform one *entire sequence* into the other.
*   **Characteristics:**
    *   Suitable for sequences that are expected to be similar overall.
    *   Can be sensitive to insertions or deletions at the ends of sequences.
*   **Scoring:** Typically uses a scoring system where:
    *   Match: Positive score (e.g., +1)
    *   Mismatch: Negative score (e.g., -1)
    *   Gap (Insertion/Deletion): Negative score (e.g., -2)
*   **Edit Distance vs. Alignment Score:** While edit distance aims to minimize edits (cost), alignment scores aim to maximize similarity. They are inversely related. A higher alignment score generally implies a lower edit distance.

#### 3.2. Local Alignment (Smith-Waterman Algorithm)

*   **Concept:** Identifies the *most similar subsequences* within two larger sequences. It finds regions of high similarity, even if the overall sequences are quite different.
*   **Edit Distance Implication:** The edit distance here is calculated for the *best matching substrings*, not the entire sequences. The goal is to find the pair of subsequences that requires the fewest edits to transform one into the other.
*   **Characteristics:**
    *   Excellent for finding conserved domains or motifs within proteins or genes.
    *   Less sensitive to regions of low similarity.
*   **Scoring:** Similar scoring system as global alignment, but with a crucial difference:
    *   **If the score for a cell becomes negative, it is reset to 0.** This allows the algorithm to "start over" and find new local alignments.
*   **Backtracking:** The alignment is constructed by backtracking from the highest scoring cell in the dynamic programming matrix back to a cell with a score of 0.

---

### 4. Dynamic Programming Approach to Edit Distance Calculation

Dynamic programming is the core algorithmic technique used to efficiently calculate edit distance. It breaks down a complex problem into smaller, overlapping subproblems and stores their solutions to avoid redundant computations.

#### 4.1. The Dynamic Programming Matrix

*   We construct a matrix (or table) where the dimensions are (length of sequence 1 + 1) x (length of sequence 2 + 1).
*   Let sequence 1 be $S_1$ of length $m$, and sequence 2 be $S_2$ of length $n$. The matrix will be $(m+1) \times (n+1)$.
*   The rows represent prefixes of $S_1$ (including the empty prefix), and columns represent prefixes of $S_2$ (including the empty prefix).
*   `D[i][j]` stores the edit distance between the first `i` characters of $S_1$ and the first `j` characters of $S_2$.

#### 4.2. Initialization

*   **`D[0][0] = 0`**: The edit distance between two empty sequences is 0.
*   **First Row (`D[0][j]`)**: Represents the cost of transforming an empty sequence into the first `j` characters of $S_2$. This requires `j` insertions.
    *   `D[0][j] = j` (cost of `j` insertions).
*   **First Column (`D[i][0]`)**: Represents the cost of transforming the first `i` characters of $S_1$ into an empty sequence. This requires `i` deletions.
    *   `D[i][0] = i` (cost of `i` deletions).

#### 4.3. Recurrence Relation (for calculating `D[i][j]` for `i > 0` and `j > 0`)

To calculate `D[i][j]`, we consider the last characters of the prefixes, $S_1[i]$ and $S_2[j]$, and the three possible operations that could lead to this state:

1.  **Match/Mismatch (Substitution):**
    *   We align $S_1[i]$ with $S_2[j]$.
    *   The cost is `D[i-1][j-1]` (edit distance of previous prefixes) plus the cost of aligning $S_1[i]$ and $S_2[j]$.
    *   Cost of match = 0
    *   Cost of mismatch = 1 (for standard Levenshtein distance)
    *   Let `cost(S1[i], S2[j])` be the cost of aligning these characters.

2.  **Deletion (from $S_1$):**
    *   We align $S_1[i]$ with a gap in $S_2$. This is equivalent to deleting $S_1[i]$.
    *   The cost is `D[i-1][j]` (edit distance of $S_1[1..i-1]$ and $S_2[1..j]$) plus the cost of deletion (1).

3.  **Insertion (into $S_1$):**
    *   We align $S_2[j]$ with a gap in $S_1$. This is equivalent to inserting $S_2[j]$ into $S_1$.
    *   The cost is `D[i][j-1]` (edit distance of $S_1[1..i]$ and $S_2[1..j-1]$) plus the cost of insertion (1).

The recurrence relation for the minimum edit distance is:

```
D[i][j] = min(
    D[i-1][j-1] + cost(S1[i], S2[j]),  // Match/Mismatch
    D[i-1][j] + 1,                     // Deletion
    D[i][j-1] + 1                      // Insertion
)
```

Where `cost(S1[i], S2[j])` is 0 if $S_1[i] == S_2[j]$ and 1 otherwise.

#### 4.4. Backtracking (to find the actual alignment)

*   Once the matrix is filled, the final edit distance is found at `D[m][n]`.
*   To reconstruct the actual alignment, we start from `D[m][n]` and trace back to `D[0][0]`.
*   At each cell `D[i][j]`, we determine which of the three possibilities (match/mismatch, deletion, insertion) led to the minimum value:
    *   If `D[i][j]` came from `D[i-1][j-1]`: Align $S_1[i]$ with $S_2[j]$. Move diagonally up-left.
    *   If `D[i][j]` came from `D[i-1][j]`: Align $S_1[i]$ with a gap. Move up.
    *   If `D[i][j]` came from `D[i][j-1]`: Align $S_2[j]$ with a gap. Move left.
*   The path taken reveals the sequence of edit operations.

---

### 5. Applying Edit Distance to Biological Sequences: Examples

Let's calculate the edit distance between two short DNA sequences using the standard Levenshtein distance (cost of 1 for mismatch, insertion, deletion).

**Example 1: Global Alignment (Levenshtein Distance)**

Sequences: $S_1$ = "AGTC" ($m=4$), $S_2$ = "AGGC" ($n=4$)

**Scoring:**
*   Match: 0
*   Mismatch: 1
*   Insertion: 1
*   Deletion: 1

**1. Initialization:**

|       |   | A | G | G | C |
| :---- | :-: | :-: | :-: | :-: | :-: |
| **""** | 0 | 1 | 2 | 3 | 4 |
| **A** | 1 |   |   |   |   |
| **G** | 2 |   |   |   |   |
| **T** | 3 |   |   |   |   |
| **C** | 4 |   |   |   |   |

**2. Fill the Matrix using the recurrence:**

*   `D[1][1]` ($S_1[1]$='A', $S_2[1]$='A'):
    `min(D[0][0] + 0, D[0][1] + 1, D[1][0] + 1)`
    `min(0 + 0, 1 + 1, 1 + 1)` = `min(0, 2, 2)` = **0**

*   `D[1][2]` ($S_1[1]$='A', $S_2[2]$='G'):
    `min(D[0][1] + 1, D[0][2] + 1, D[1][1] + 1)`
    `min(1 + 1, 2 + 1, 0 + 1)` = `min(2, 3, 1)` = **1**

*   ...and so on.

**Completed Matrix:**

|       |   | A | G | G | C |
| :---- | :-: | :-: | :-: | :-: | :-: |
| **""** | 0 | 1 | 2 | 3 | 4 |
| **A** | 1 | 0 | 1 | 2 | 3 |
| **G** | 2 | 1 | 0 | 1 | 2 |
| **T** | 3 | 2 | 1 | 1 | 2 |
| **C** | 4 | 3 | 2 | 2 | 1 |

**Result:**
The edit distance between "AGTC" and "AGGC" is **1**.

**Backtracking:**
*   Start at `D[4][4] = 1`. It came from `D[3][3]` + 0 (match C with C). Align C-C.
*   `D[3][3] = 1`. It came from `D[3][2]` + 1 (mismatch T with G). Align T-G.
*   `D[3][2] = 1`. It came from `D[2][1]` + 0 (match G with G). Align G-G.
*   `D[2][1] = 1`. It came from `D[1][0]` + 1 (mismatch A with G, but this is wrong - must check which path yields the value).
    *   Let's re-examine `D[2][2]` ($S_1[2]$='G', $S_2[2]$='G'): `min(D[1][1]+0, D[1][2]+1, D[2][1]+1)` = `min(0+0, 1+1, 1+1)` = 0. So `D[2][2]=0`.
    *   Let's re-examine `D[3][3]` ($S_1[3]$='T', $S_2[3]$='G'): `min(D[2][2]+1, D[2][3]+1, D[3][2]+1)` = `min(0+1, 1+1, 1+1)` = 1. So `D[3][3]=1`.
    *   Let's re-examine `D[4][4]` ($S_1[4]$='C', $S_2[4]$='C'): `min(D[3][3]+0, D[3][4]+1, D[4][3]+1)` = `min(1+0, 2+1, 2+1)` = 1. So `D[4][4]=1`.

**Corrected Backtracking:**
*   `D[4][4]=1` from `D[3][3]+0` (C-C match). Align C-C. Current: C-C
*   `D[3][3]=1` from `D[2][3]+1` (deletion of T from S1). Align T-gap. Current: T-gap, C-C
*   `D[2][3]=1` from `D[2][2]+1` (insertion of G into S1). Align G-G. Current: G-G, T-gap, C-C
*   `D[2][2]=0` from `D[1][1]+0` (G-G match). Align A-A. Current: A-A, G-G, T-gap, C-C. This is incorrect.

Let's re-trace carefully using pointers or highlighting which operation was chosen.

|       |   | A | G | G | C |
| :---- | :-: | :-: | :-: | :-: | :-: |
| **""** | 0 | 1 | 2 | 3 | 4 |
| **A** | 1 | **0** | 1 | 2 | 3 |
| **G** | 2 | 1 | **0** | 1 | 2 |
| **T** | 3 | 2 | 1 | **1** | 2 |
| **C** | 4 | 3 | 2 | 2 | **1** |

*   `D[4][4]=1` comes from `D[3][3]=1` + `cost('C','C')=0`. Move to `D[3][3]`. Alignment: C-C.
*   `D[3][3]=1` comes from `D[2][3]=1` + `cost('T','G')=1`. Move to `D[2][3]`. Alignment: T-G.
*   `D[2][3]=1` comes from `D[2][2]=0` + `cost_ins=1`. Move to `D[2][2]`. Alignment: G-gap.
*   `D[2][2]=0` comes from `D[1][1]=0` + `cost('G','G')=0`. Move to `D[1][1]`. Alignment: G-G.
*   `D[1][1]=0` comes from `D[0][0]=0` + `cost('A','A')=0`. Move to `D[0][0]`. Alignment: A-A.

Reversed alignment:
Seq1: A G T C
Seq2: A G G C

Wait, this alignment has 1 mismatch and 1 insertion, total 2 edits. The edit distance is 1. What's wrong?

The problem is often in the backtracking logic or interpretation. Let's re-think the `D[3][3]=1` step.

`D[3][3]` ($S_1[3]$='T', $S_2[3]$='G'):
*   `D[2][2] + cost('T','G')` = `0 + 1 = 1` (Substitution)
*   `D[2][3] + 1` = `1 + 1 = 2` (Deletion)
*   `D[3][2] + 1` = `1 + 1 = 2` (Insertion)

So, `D[3][3]` came from the substitution path.

Let's re-trace:
1.  `D[4][4]=1` from `D[3][3]=1` + `cost('C','C')=0` (Match). Align C-C. Move to `D[3][3]`.
2.  `D[3][3]=1` from `D[2][2]=0` + `cost('T','G')=1` (Mismatch). Align T-G. Move to `D[2][2]`.
3.  `D[2][2]=0` from `D[1][1]=0` + `cost('G','G')=0` (Match). Align G-G. Move to `D[1][1]`.
4.  `D[1][1]=0` from `D[0][0]=0` + `cost('A','A')=0` (Match). Align A-A. Move to `D[0][0]`.

This gives an alignment with 1 mismatch and 3 matches:
AGTC
AGGC

This is an edit distance of 1 (the mismatch). This is correct! The example was to transform "AGTC" to "AGGC" by changing 'T' to 'G'.

**Example 2: Local Alignment (using Smith-Waterman idea conceptually)**

Sequences: $S_1$ = "ACGTACGT" ($m=8$), $S_2$ = "CGTAC" ($n=5$)

If we were to find local similarity, we might expect the "CGTAC" substring to match well within "ACGTACGT". The edit distance would then be calculated on these matching substrings.

Let's consider a simpler local example:
$S_1$ = "ABCDEFG"
$S_2$ = "XBCYDEFG"

Here, "BCDEFG" is a highly similar substring in both. If we only cared about local similarity, we'd align "BCDEFG" and "BCYDEFG".

*   Edit operations to transform "BCDEFG" to "BCYDEFG":
    *   B-B (match)
    *   C-C (match)
    *   D-Y (mismatch)
    *   E-D (mismatch)
    *   F-E (mismatch)
    *   G-F (mismatch)
    *   gap-G (insertion)

This is getting complicated. The key takeaway for local alignment is that the dynamic programming algorithm resets negative scores to zero, allowing it to find the best *segments* of similarity. The edit distance is then the minimum number of operations to transform the *identified best matching subsequences*.

---

### 6. Practice Questions

**Question 1:**
Calculate the Levenshtein edit distance between the sequences "kitten" and "sitting".

**Question 2:**
What is the main difference between global and local alignment in terms of their objective?

**Question 3:**
Explain why dynamic programming is a suitable approach for calculating edit distance.

**Question 4:**
Given sequences $S_1$ = "ATCG" and $S_2$ = "ATGC", construct the dynamic programming matrix and determine the edit distance. Then, describe one possible alignment.

---

### 7. Answers to Practice Questions

**Answer 1:**
The edit distance between "kitten" and "sitting" is 3.
*   k -> s (substitution)
*   e -> i (substitution)
*   n -> g (substitution)

Alignment:
sitting
kitten

**Answer 2:**
*   **Global Alignment:** Aims to align the *entirety* of two sequences, from beginning to end. It seeks the minimum number of edits to transform one entire sequence into the other.
*   **Local Alignment:** Aims to find the *most similar subsequences* within two larger sequences. It identifies regions of high similarity, even if the overall sequences are dissimilar.

**Answer 3:**
Dynamic programming is suitable for calculating edit distance because:
*   **Optimal Substructure:** The edit distance between two sequences can be determined from the edit distances of their smaller prefixes.
*   **Overlapping Subproblems:** The calculation of edit distances for various prefixes are reused multiple times. Dynamic programming stores these intermediate results (in the matrix) to avoid redundant calculations, making the process efficient (typically O(mn) time complexity, where m and n are sequence lengths).

**Answer 4:**
Sequences: $S_1$ = "ATCG" ($m=4$), $S_2$ = "ATGC" ($n=4$)

**Scoring:**
*   Match: 0
*   Mismatch: 1
*   Insertion: 1
*   Deletion: 1

**Dynamic Programming Matrix:**

|       |   | A | T | G | C |
| :---- | :-: | :-: | :-: | :-: | :-: |
| **""** | 0 | 1 | 2 | 3 | 4 |
| **A** | 1 | 0 | 1 | 2 | 3 |
| **T** | 2 | 1 | 0 | 1 | 2 |
| **C** | 3 | 2 | 1 | 1 | 1 |
| **G** | 4 | 3 | 2 | 1 | 2 |

**Edit Distance:** The edit distance is **2**.

**One Possible Alignment (from backtracking):**
*   `D[4][4]=2` comes from `D[3][4]+1` (deletion of G from S1, move left). Align G-gap.
*   `D[3][4]=1` comes from `D[3][3]+0` (match C-C, move diagonally). Align C-C.
*   `D[3][3]=1` comes from `D[2][2]+1` (mismatch G-T, move diagonally). Align T-G.
*   `D[2][2]=0` comes from `D[1][1]+0` (match T-T, move diagonally). Align A-A.
*   `D[1][1]=0` comes from `D[0][0]+0` (match A-A, move diagonally). Align A-A.

Reversed alignment:
Seq1: A T C G
Seq2: A T G C

This alignment has one mismatch (T vs G) and one deletion (G in S1 vs gap in S2), resulting in 2 edits.

Alternatively, consider another path for `D[4][4]=2`:
*   `D[4][4]=2` from `D[4][3]+1` (insertion of C into S1, move up). Align gap-C.
*   `D[4][3]=1` from `D[3][2]+0` (match G-G, move diagonally). Align C-T. This is wrong, `D[3][2]` is 1, `cost('C','T')` is 1, `1+1 = 2` which is not the value for `D[4][3]`.

Let's re-check the matrix calculation.

$S_1$ = "ATCG", $S_2$ = "ATGC"

|       |   | A | T | G | C |
| :---- | :-: | :-: | :-: | :-: | :-: |
| **""** | 0 | 1 | 2 | 3 | 4 |
| **A** | 1 | 0 | 1 | 2 | 3 |
| **T** | 2 | 1 | 0 | 1 | 2 |
| **C** | 3 | 2 | 1 | 1 | **1**  (min(D[2][2]+1, D[2][3]+1, D[3][2]+1) = min(0+1, 1+1, 1+1) = 1. C-G mismatch)
| **G** | 4 | 3 | 2 | **1**  (min(D[3][2]+0, D[3][3]+1, D[4][2]+1) = min(1+0, 1+1, 2+1) = 1. G-G match) | **2** (min(D[3][3]+1, D[3][4]+1, D[4][3]+1) = min(1+1, 1+1, 1+1) = 2. G-C mismatch or deletion/insertion) |

The matrix calculation looks correct. The edit distance is indeed 2.

**One Possible Alignment (Corrected Backtracking):**
1.  `D[4][4]=2`. Possible paths:
    *   `D[3][3] + cost('G','C')` = `1 + 1 = 2` (Mismatch G-C)
    *   `D[3][4] + 1` = `1 + 1 = 2` (Deletion G from S1)
    *   `D[4][3] + 1` = `1 + 1 = 2` (Insertion C into S1)

Let's choose the mismatch path for simplicity:
1.  From `D[4][4]=2` to `D[3][3]=1` (Mismatch G-C). Align G-C.
2.  From `D[3][3]=1` to `D[2][2]=0` (Match C-G or Mismatch C-G, this is wrong path).
    Let's re-trace using the values:
    *   `D[3][3]=1`. Came from `D[2][2]+cost('C','G')` = `0 + 1 = 1`. Align C-G. Move to `D[2][2]`.
    *   `D[2][2]=0`. Came from `D[1][1]+cost('T','T')` = `0 + 0 = 0`. Align T-T. Move to `D[1][1]`.
    *   `D[1][1]=0`. Came from `D[0][0]+cost('A','A')` = `0 + 0 = 0`. Align A-A. Move to `D[0][0]`.

This results in an alignment:
ATCG
ATGC

This alignment has 0 edits. This is not right. The edit distance is 2.

The problem is that `D[3][3]` value calculation:
$S_1$="ATC", $S_2$="ATG"
`D[3][3]` = min( `D[2][2]+cost('C','G')`, `D[2][3]+1`, `D[3][2]+1` )
`D[2][2]` (AT vs AT) = 0
`D[2][3]` (AT vs ATG) = 1 (insertion of G)
`D[3][2]` (ATC vs AT) = 1 (deletion of C)
`D[3][3]` = min( `0+1`, `1+1`, `1+1` ) = min(1, 2, 2) = 1. This means 'C' vs 'G' is a mismatch.

Ok, let's do the backtracking again, carefully choosing the path that leads to the value.

*   `D[4][4] = 2`. Possible predecessors: `D[3][3] (1) + cost(G,C)=1 = 2`, `D[3][4] (1) + 1 = 2`, `D[4][3] (1) + 1 = 2`.
    Let's pick `D[3][3]` (G-C mismatch): Align G-C. Move to `D[3][3]`.
*   `D[3][3] = 1`. Possible predecessors: `D[2][2] (0) + cost(C,G)=1 = 1`. Align C-G. Move to `D[2][2]`.
*   `D[2][2] = 0`. Possible predecessors: `D[1][1] (0) + cost(T,T)=0 = 0`. Align T-T. Move to `D[1][1]`.
*   `D[1][1] = 0`. Possible predecessors: `D[0][0] (0) + cost(A,A)=0 = 0`. Align A-A. Move to `D[0][0]`.

This gives:
A T C G
A T G C

This alignment has 2 mismatches (C-G and G-C). The edit distance is 2. This seems correct.

Let's try another path from `D[4][4] = 2`: `D[3][4] + 1` (deletion of G from S1):
1.  From `D[4][4]=2` to `D[3][4]=1` (Deletion of G). Align G-gap. Move to `D[3][4]`.
2.  `D[3][4] = 1`. Possible predecessors: `D[2][3] (1) + cost(C,C)=0 = 1`. Align C-C. Move to `D[2][3]`.
3.  `D[2][3] = 1`. Possible predecessors: `D[1][2] (1) + cost(T,G)=1 = 2` (wrong), `D[2][2] (0) + 1 = 1`. Align T-gap. Move to `D[2][2]`.
4.  `D[2][2] = 0`. Came from `D[1][1]=0`. Align T-T. Move to `D[1][1]`.
5.  `D[1][1] = 0`. Came from `D[0][0]=0`. Align A-A. Move to `D[0][0]`.

This gives:
A T C G
A T - C

With a G at the end of S1. So it would be:
A T C G
A T G C

Let's re-evaluate the paths at `D[3][4] = 1`.
$S_1[3]$ = 'C', $S_2[4]$ = 'C'.
`D[3][4] = min( D[2][3]+cost(C,C)=0, D[2][4]+1, D[3][3]+1 )`
`D[2][3]` (AT vs ATG) = 1
`D[2][4]` (AT vs ATGC) = 2
`D[3][3]` (ATC vs ATG) = 1

`D[3][4] = min( 1+0, 2+1, 1+1 ) = min(1, 3, 2) = 1`. This came from `D[2][3] + 0` (match C-C).

So, from `D[4][4]=2`, we can go to `D[3][4]=1` (Deletion of G from S1, G-gap), then from `D[3][4]=1` to `D[2][3]=1` (Match C-C), etc.

One alignment:
Seq1: A T C G
Seq2: A T G C

This indeed has 2 mismatches (T-G and C-C) or something is off.
Let's think about the simplest edits:
ATCG -> ATGC
1. ATCG -> ATGC (Substitution T -> G): 1 edit. But this is wrong, original sequences are ATCG and ATGC.
The sequences are:
S1: A T C G
S2: A T G C

Simple edits:
1.  Change C to G in S1: ATGC. This matches S2. 1 edit.
2.  Change G to C in S2: ATCC. This doesn't match S1.

Let's re-calculate the matrix.
S1 = "ATCG", S2 = "ATGC"

|       |   | A | T | G | C |
| :---- | :-: | :-: | :-: | :-: | :-: |
| **""** | 0 | 1 | 2 | 3 | 4 |
| **A** | 1 | 0 | 1 | 2 | 3 |
| **T** | 2 | 1 | 0 | 1 | 2 |
| **C** | 3 | 2 | 1 | 1 | **1** (min(D[2][2]+1, D[2][3]+1, D[3][2]+1) = min(0+1, 1+1, 1+1) = 1. C vs G mismatch) |
| **G** | 4 | 3 | 2 | **1** (min(D[3][2]+0, D[3][3]+1, D[4][2]+1) = min(1+0, 1+1, 2+1) = 1. G vs G match) | **2** (min(D[3][3]+1, D[3][4]+1, D[4][3]+1) = min(1+1, 1+1, 1+1) = 2. G vs C mismatch OR G-gap OR gap-C) |

The matrix is correct. The edit distance is 2.

Let's try to achieve it with 2 edits:
ATCG
ATGC

1.  Change C to G: ATGG (1 edit)
2.  Change G to C: ATGC (1 edit)
Total = 2 edits.

Alignment for 2 edits:
ATCG
ATGC

*   A-A (match)
*   T-T (match)
*   C-G (mismatch)
*   G-C (mismatch)

This is two mismatches.

Backtracking from `D[4][4]=2`:
1.  From `D[4][4]=2` to `D[3][3]=1` (Mismatch G-C). Align G-C. Move to `D[3][3]`.
2.  From `D[3][3]=1` to `D[2][2]=0` (Mismatch C-G). Align C-G. Move to `D[2][2]`.
3.  From `D[2][2]=0` to `D[1][1]=0` (Match T-T). Align T-T. Move to `D[1][1]`.
4.  From `D[1][1]=0` to `D[0][0]=0` (Match A-A). Align A-A. Move to `D[0][0]`.

Alignment:
ATCG
ATGC

This yields two mismatches, giving an edit distance of 2. This is a valid alignment and correct answer.

---

### 8. Important Points to Remember

*   **Edit distance quantifies sequence dissimilarity.**
*   **Key operations are insertion, deletion, and substitution.**
*   **Global alignment (Needleman-Wunsch) compares entire sequences.**
*   **Local alignment (Smith-Waterman) finds best matching subsequences.**
*   **Dynamic programming is essential for efficient calculation.**
*   **The DP matrix stores edit distances of prefixes.**
*   **Initialization of the first row and column is crucial.**
*   **The recurrence relation defines how to fill the matrix.**
*   **Backtracking reconstructs the alignment from the filled matrix.**
*   **Costs for match, mismatch, insertion, and deletion can vary based on the application.**
*   **Edit distance is inversely related to alignment score.**
