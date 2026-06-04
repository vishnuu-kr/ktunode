---
title: "Combinatorial Pattern Matching"
subject: "BIOINFORMATICS"
module: "Module 3: Combinatorial Pattern Matching (9 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c174"
status: "completed"
scrapedAt: "2026-05-20T17:01:12.776Z"
---
# BIOINFORMATICS - Module 3: Combinatorial Pattern Matching (9 hours)

## Topic: Combinatorial Pattern Matching

### 1. Introduction to Combinatorial Pattern Matching

**Key Concepts & Definitions:**

*   **Pattern Matching:** The process of searching for a specific sequence (pattern) within a larger sequence (text).
*   **Combinatorial Pattern Matching:** This broad field deals with finding occurrences of patterns, often with variations or under specific constraints, within biological sequences (DNA, RNA, proteins). It involves algorithms that leverage combinatorial principles.
*   **Biological Sequences:**
    *   **DNA:** Deoxyribonucleic acid, a double helix molecule that carries the genetic instructions for the development, functioning, growth and reproduction of all known organisms and many viruses. Composed of nucleotides: Adenine (A), Guanine (G), Cytosine (C), Thymine (T).
    *   **RNA:** Ribonucleic acid, a nucleic acid present in all living cells. Its principal role is to act as a messenger carrying instructions from DNA for controlling the synthesis of proteins, although in some viruses RNA rather than DNA carries the genetic information. Composed of nucleotides: Adenine (A), Guanine (G), Cytosine (C), Uracil (U).
    *   **Proteins:** Large biomolecules, or macromolecules, consisting of one or more long chains of amino acid sequences. Their function depends on their 3D structure and their sequence of amino acids.
*   **Alphabet:** The set of characters used in a sequence (e.g., {A, C, G, T} for DNA).
*   **Pattern (P):** The sequence we are searching for.
*   **Text (T):** The sequence within which we are searching.
*   **Occurrences:** Positions in the text where the pattern matches exactly.
*   **Computational Complexity:** Measures how much time and memory an algorithm requires as the input size grows. Important for handling large biological datasets.

**Why is Combinatorial Pattern Matching Important in Bioinformatics?**

*   **Gene Finding:** Identifying coding regions (exons) and non-coding regions (introns) within DNA sequences.
*   **Protein Motif Discovery:** Finding recurring patterns of amino acids that are functionally or structurally important.
*   **Regulatory Element Identification:** Locating DNA sequences that control gene expression (e.g., promoters, enhancers).
*   **Sequence Alignment:** Finding similarities between sequences to infer evolutionary relationships or functional similarities.
*   **Phylogenetic Analysis:** Reconstructing evolutionary trees based on sequence differences.

**Learning Outcome 1: Understand the fundamental concepts of combinatorial pattern matching and its relevance in bioinformatics.**

*   **Fundamental Concepts:** Covered by the definitions above.
*   **Relevance in Bioinformatics:** Explained in the "Why is Combinatorial Pattern Matching Important?" section.

---

### 2. Exact Pattern Matching Algorithms

These algorithms find exact occurrences of a pattern in a text.

#### 2.1 Naive String Matching

**Key Concepts & Definitions:**

*   **Naive Approach:** Simply slides the pattern across the text, one position at a time, and checks for a match at each position.
*   **Brute-force:** It's a straightforward but potentially inefficient method.

**Algorithm:**

1.  Align the pattern `P` with the text `T` at the first possible position (index 0 of `T`).
2.  Compare characters of `P` with the corresponding characters in `T`.
3.  If all characters match, record the starting position of the match in `T`.
4.  If a mismatch occurs, shift the pattern one position to the right in `T`.
5.  Repeat steps 2-4 until the pattern has been shifted across all possible positions in `T`.

**Example:**

Text `T`: `GATTACAGATTACA`
Pattern `P`: `ATTA`

| Position | Text Substring | Match? |
| :------- | :------------- | :----- |
| 0        | `GATT`         | No     |
| 1        | `ATTA`         | Yes    |
| 2        | `TTAC`         | No     |
| 3        | `TACA`         | No     |
| 4        | `ACAG`         | No     |
| 5        | `CAGA`         | No     |
| 6        | `AGAT`         | No     |
| 7        | `GATT`         | No     |
| 8        | `ATTA`         | Yes    |
| 9        | `TTAC`         | No     |
| 10       | `TACA`         | No     |

Occurrences found at positions 1 and 8.

**Computational Complexity:**

*   **Worst Case:** O(m*n), where `n` is the length of the text and `m` is the length of the pattern. This happens when there are many partial matches, like searching for `AAAAAB` in `AAAAAAAAAAAAAAB`.
*   **Best Case:** O(n) when mismatches occur very early.

**Learning Outcome 2: Explain and apply naive string matching algorithm for exact pattern matching.**

*   **Explanation:** Covered above.
*   **Application:** The example demonstrates the application.

---

#### 2.2 Knuth-Morris-Pratt (KMP) Algorithm

**Key Concepts & Definitions:**

*   **Optimization:** KMP improves upon the naive algorithm by avoiding redundant comparisons.
*   **Preprocessing the Pattern:** KMP preprocesses the pattern to create a "failure function" or "prefix function" (often denoted as `pi` or `LPS` - Longest Proper Prefix which is also a Suffix).
*   **Failure Function (pi):** For each position `j` in the pattern `P`, `pi[j]` stores the length of the longest proper prefix of `P[0...j]` that is also a suffix of `P[0...j]`.
    *   A **proper prefix** is a prefix that is not the entire string itself.
    *   A **proper suffix** is a suffix that is not the entire string itself.
*   **Shifting Strategy:** When a mismatch occurs, instead of shifting the pattern by just one position, KMP uses the failure function to determine the optimal shift, effectively skipping unnecessary comparisons.

**Building the Failure Function (pi):**

*   `pi[0]` is always 0.
*   Iterate through the pattern from the second character (`j = 1`).
*   Maintain a variable `k` representing the length of the current prefix match.
*   If `P[j]` matches `P[k]`, increment `k` and set `pi[j] = k`.
*   If `P[j]` does not match `P[k]`:
    *   If `k > 0`, set `k = pi[k-1]` and repeat the comparison. This is the "failure" step, effectively backtracking to a shorter potential prefix-suffix match.
    *   If `k == 0`, set `pi[j] = 0`.

**Example of Building pi for P = `ABABCABAB`:**

| j | P[j] | P[0...j] | Prefixes (Proper) | Suffixes (Proper) | Longest Common | pi[j] |
| :- | :--- | :------- | :---------------- | :---------------- | :------------- | :---- |
| 0 | A    | A        | -                 | -                 | -              | 0     |
| 1 | B    | AB       | A                 | B                 | -              | 0     |
| 2 | A    | ABA      | A, AB             | A, BA             | A              | 1     |
| 3 | B    | ABAB     | A, AB, ABA        | B, AB, BAB        | AB             | 2     |
| 4 | C    | ABABC    | A, AB, ABA, ABAB  | C, BC, ABC, BABC  | -              | 0     |
| 5 | A    | ABABCA   | A, AB, ABA, ABAB, ABABC | A, CA, BCA, ABCA, BABCA | A              | 1     |
| 6 | B    | ABABCAB  | A, AB, ABA, ABAB, ABABC, ABABCA | B, AB, CAB, BCAB, ABCAB, BABCAB | AB             | 2     |
| 7 | A    | ABABCABA | A, AB, ABA, ABAB, ABABC, ABABCA, ABABCAB | A, BA, ABA, CABA, BCABA, ABCABA, BABCABA | ABA            | 3     |
| 8 | B    | ABABCABAB| A, AB, ABA, ABAB, ABABC, ABABCA, ABABCAB, ABABCABA | B, AB, BAB, ABAB, CABAB, BCABAB, ABCABAB, BABCABAB | ABAB           | 4     |

So, `pi` for `ABABCABAB` is `[0, 0, 1, 2, 0, 1, 2, 3, 4]`.

**KMP Matching Algorithm:**

1.  Preprocess pattern `P` to compute its failure function `pi`.
2.  Initialize text index `i = 0` and pattern index `j = 0`.
3.  While `i < n`:
    *   If `P[j] == T[i]`: Increment `i` and `j`.
    *   If `j == m` (pattern found):
        *   Report a match at `T[i-j]`.
        *   Set `j = pi[j-1]` to continue searching for overlapping matches.
    *   Else if `i < n` and `P[j] != T[i]` (mismatch):
        *   If `j != 0`: Set `j = pi[j-1]`. (Shift the pattern using the failure function)
        *   Else (`j == 0`): Increment `i`. (Pattern could not match at this position, move text cursor)

**Example:**

Text `T`: `ABABDABACDABABCABAB`
Pattern `P`: `ABABCABAB`
`pi`: `[0, 0, 1, 2, 0, 1, 2, 3, 4]`

*   `i=0, j=0`: `T[0](A) == P[0](A)`. `i=1, j=1`.
*   `i=1, j=1`: `T[1](B) == P[1](B)`. `i=2, j=2`.
*   ...
*   `i=8, j=8`: `T[8](B) == P[8](B)`. `i=9, j=9`.
*   `j == m (9)`. Match found at `T[9-9] = T[0]`. Report match at index 0. Set `j = pi[8] = 4`.
*   `i=9, j=4`: `T[9](A) != P[4](C)`. Mismatch. `j != 0`, so set `j = pi[3] = 2`.
*   `i=9, j=2`: `T[9](A) == P[2](A)`. `i=10, j=3`.
*   `i=10, j=3`: `T[10](C) != P[3](B)`. Mismatch. `j != 0`, so set `j = pi[2] = 1`.
*   `i=10, j=1`: `T[10](C) != P[1](B)`. Mismatch. `j != 0`, so set `j = pi[0] = 0`.
*   `i=10, j=0`: `T[10](C) != P[0](A)`. Mismatch. `j == 0`, so increment `i` to 11.
*   `i=11, j=0`: `T[11](D) != P[0](A)`. Mismatch. `j == 0`, so increment `i` to 12.
*   `i=12, j=0`: `T[12](A) == P[0](A)`. `i=13, j=1`.
*   ... eventually finds the match at index 10.

**Computational Complexity:**

*   **Preprocessing:** O(m) to build the failure function.
*   **Matching:** O(n) because each character in the text is examined at most twice (once by incrementing `i`, and once when `j` is reset by `pi` in a mismatch).
*   **Overall:** O(n + m). This is significantly better than the naive O(n*m) in the worst case.

**Learning Outcome 3: Describe the Knuth-Morris-Pratt (KMP) algorithm, including its preprocessing step and the matching phase.**

*   **KMP Description:** Covered above with the explanation of the failure function and the matching process.
*   **Preprocessing Step:** Explained the calculation of the `pi` array.
*   **Matching Phase:** Detailed the step-by-step comparison and shifting logic.

**Practice Question 1:**

Compute the failure function (pi array) for the pattern `AAAA`.
*   **Answer:** `[0, 1, 2, 3]`

**Practice Question 2:**

Compute the failure function (pi array) for the pattern `ABABABCA`.
*   **Answer:** `[0, 0, 1, 2, 3, 4, 0, 1]`

---

#### 2.3 Rabin-Karp Algorithm

**Key Concepts & Definitions:**

*   **Hashing:** Rabin-Karp uses hashing to quickly compare substrings of the text with the pattern.
*   **Rolling Hash:** A key feature is its ability to compute the hash of the next substring efficiently from the hash of the current substring, avoiding recomputing the entire hash each time.
*   **Hash Function:** A function that maps a string to a number. A common choice is a polynomial rolling hash:
    `hash(S) = (s_0 * b^(m-1) + s_1 * b^(m-2) + ... + s_{m-1} * b^0) mod q`
    where:
        *   `S` is the string of length `m`.
        *   `s_i` is the numerical representation of the character `S[i]` (e.g., A=1, C=2, G=3, T=4).
        *   `b` is a base (e.g., alphabet size, often larger).
        *   `q` is a prime number (to minimize collisions).
*   **Collisions:** When two different strings produce the same hash value. Rabin-Karp handles collisions by performing a direct character-by-character comparison when a hash match occurs.
*   **Spurious Hits:** Occurrences where the hashes match but the strings do not.

**Rolling Hash Calculation:**

Let `h_i` be the hash of the substring `T[i...i+m-1]`.
To compute `h_{i+1}` from `h_i`:

`h_{i+1} = ( (h_i - T[i] * b^(m-1)) * b + T[i+m] ) mod q`

*   `T[i] * b^(m-1)`: This term removes the contribution of the leftmost character `T[i]`.
*   `(...) * b`: This shifts the remaining hash value to the left.
*   `+ T[i+m]`: This adds the contribution of the new rightmost character `T[i+m]`.
*   `mod q`: Keeps the hash value within a manageable range.

**Rabin-Karp Matching Algorithm:**

1.  Choose a base `b` and a prime modulus `q`.
2.  Precompute `b^(m-1) mod q`.
3.  Compute the hash of the pattern `P` (let's call it `p_hash`).
4.  Compute the hash of the first `m` characters of the text `T` (let's call it `t_hash`).
5.  For `i` from 0 to `n-m`:
    *   If `p_hash == t_hash`:
        *   Perform a character-by-character comparison between `P` and `T[i...i+m-1]`.
        *   If they match, report an occurrence at `T[i]`.
    *   If `i < n-m`:
        *   Compute the rolling hash for the next substring `T[i+1...i+m]`.

**Example:**

Text `T`: `GEEKSFORGEEKS`
Pattern `P`: `GEEK`
Alphabet size `b = 256` (for ASCII)
Prime modulus `q = 101` (a small prime for demonstration)

Numerical representation: G=71, E=69, K=75, S=83, F=70, O=79, R=82

`m = 4`

**1. Precompute `b^(m-1) mod q`:**
`b^(m-1) = 256^(4-1) = 256^3`
`256 mod 101 = 54`
`256^2 mod 101 = 54^2 mod 101 = 2916 mod 101 = 88`
`256^3 mod 101 = 88 * 54 mod 101 = 4752 mod 101 = 5`
So, `h = b^(m-1) mod q = 5`.

**2. Compute hash of Pattern `P = GEEK`:**
`p_hash = (G*b^3 + E*b^2 + E*b^1 + K*b^0) mod q`
`p_hash = (71*256^3 + 69*256^2 + 69*256 + 75) mod 101`
`p_hash = (71*5 + 69*88 + 69*54 + 75) mod 101` (using precomputed powers mod 101)
`p_hash = (355 + 6072 + 3726 + 75) mod 101`
`p_hash = (52 + 12 + 89 + 75) mod 101` (taking mod 101 for each term)
`p_hash = 228 mod 101 = 26`

**3. Compute hash of first `m` characters of Text `T = GEEKSFORGEEKS` (substring `GEEK`):**
`t_hash` for `GEEK` is also 26.

**4. Matching:**
*   `i = 0`: `p_hash (26) == t_hash (26)`.
    *   Compare `GEEK` with `GEEK`. Match! Report occurrence at index 0.
    *   Calculate rolling hash for next substring `EEKS`.
    *   `t_hash_new = ((t_hash - G*h) * b + S) mod q`
    *   `t_hash_new = ((26 - 71*5) * 256 + 83) mod 101`
    *   `t_hash_new = ((26 - 355) * 256 + 83) mod 101`
    *   `t_hash_new = ((26 - 52) * 54 + 83) mod 101` (using mod 101)
    *   `t_hash_new = (-26 * 54 + 83) mod 101`
    *   `t_hash_new = (-1404 + 83) mod 101`
    *   `t_hash_new = (-47 + 83) mod 101` (since -1404 = -14*101 + 47, so -1404 mod 101 = 47. Or (-1404 + 15*101) mod 101 = (-1404 + 1515) mod 101 = 111 mod 101 = 10. Wait, mistake in calculation. -1404 mod 101. -1404 = -13 * 101 - 91. So -91 mod 101 = 10. Let's recheck: -1404 = -14 * 101 + 10. So mod 101 is 10.
    *   Correct calculation: `-1404 mod 101`. `1404 / 101 = 13.9`. `13 * 101 = 1313`. `1404 - 1313 = 91`. So `1404 = 13*101 + 91`. So `-1404 mod 101` is `-(13*101 + 91) mod 101` which is `-91 mod 101` which is `10`. Let's use a calculator: -1404 % 101 = 10.
    *   `t_hash_new = (10 + 83) mod 101 = 93 mod 101 = 93`.
    *   So, hash for `EEKS` is 93.

*   `i = 1`: `p_hash (26) != t_hash (93)`. No match.
    *   Calculate rolling hash for next substring `EKSF`.
    *   `t_hash_new = ((93 - E*h) * b + F) mod q`
    *   `t_hash_new = ((93 - 69*5) * 256 + 70) mod 101`
    *   `t_hash_new = ((93 - 345) * 54 + 70) mod 101`
    *   `t_hash_new = ((93 - 42) * 54 + 70) mod 101` (since 345 mod 101 = 42)
    *   `t_hash_new = (51 * 54 + 70) mod 101`
    *   `t_hash_new = (2754 + 70) mod 101`
    *   `t_hash_new = (27 + 70) mod 101` (since 2754 mod 101 = 27)
    *   `t_hash_new = 97 mod 101 = 97`.
    *   So, hash for `EKSF` is 97.

*   ... Continue until end of text.

**Computational Complexity:**

*   **Preprocessing (hash calculation):** O(m)
*   **Matching:**
    *   **Average Case:** O(n + m). This occurs when hash collisions are infrequent.
    *   **Worst Case:** O(n*m). This happens when there are many hash collisions (spurious hits), forcing character-by-character comparisons at almost every position. This is rare with good hash function design (large prime `q` and suitable base `b`).

**Learning Outcome 4: Explain the Rabin-Karp algorithm, including its use of hashing and the rolling hash technique.**

*   **Rabin-Karp Explanation:** Covered the core idea of using hashing.
*   **Hashing:** Defined polynomial rolling hash and its components.
*   **Rolling Hash Technique:** Explained how to efficiently update the hash for subsequent substrings.

**Practice Question 3:**

Consider the pattern `AC` and text `ACGTAC`. Use base `b=4` (for DNA alphabet A=0, C=1, G=2, T=3) and modulus `q=7`.
1.  Calculate the hash of the pattern `AC`.
2.  Calculate the hash of the first substring of the text of length 2 (`AC`).
3.  Calculate the rolling hash for the next substring (`CG`).
    *   **Answer:**
        *   `m=2`, `b=4`, `q=7`.
        *   `b^(m-1) mod q = 4^(2-1) mod 7 = 4^1 mod 7 = 4`.
        *   Pattern `AC`: A=0, C=1.
        *   `p_hash = (0*4^1 + 1*4^0) mod 7 = (0*4 + 1*1) mod 7 = 1 mod 7 = 1`.
        *   Text `ACGTAC`. First substring `AC`:
        *   `t_hash = (0*4^1 + 1*4^0) mod 7 = 1`.
        *   Hashes match, strings match. Match at index 0.
        *   Rolling hash for `CG`: C=1, G=2.
        *   `t_hash_new = ((t_hash - A*b^(m-1)) * b + G) mod q`
        *   `t_hash_new = ((1 - 0*4) * 4 + 2) mod 7`
        *   `t_hash_new = ((1 - 0) * 4 + 2) mod 7`
        *   `t_hash_new = (1 * 4 + 2) mod 7 = (4 + 2) mod 7 = 6 mod 7 = 6`.
        *   Hash for `CG` is 6.

---

### 3. Approximate Pattern Matching

This section deals with finding patterns that are *similar* to a given pattern, allowing for some differences (mismatches).

**Key Concepts & Definitions:**

*   **Edit Distance:** A measure of how dissimilar two strings are, based on the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into the other.
    *   **Hamming Distance:** Number of positions at which the corresponding characters are different. Applicable only for strings of the same length.
    *   **Levenshtein Distance:** Minimum number of insertions, deletions, and substitutions to transform one string into another.
*   **k-mismatch Problem:** Find occurrences of a pattern `P` in a text `T` where there are at most `k` mismatches.
*   **Approximate Pattern Matching Goal:** Find substrings in `T` that are "close" to `P` according to some distance metric, typically within a given threshold (e.g., `k` mismatches).

#### 3.1 Hamming Distance

**Key Concepts & Definitions:**

*   **Hamming Distance:** For two strings of equal length, the number of positions at which the corresponding characters are different.
*   **Algorithm:** To find substrings of `T` with Hamming distance at most `k` from `P`:
    1.  Slide `P` across `T`.
    2.  At each alignment, calculate the Hamming distance between `P` and the current substring of `T`.
    3.  If the distance is `≤ k`, report a match.

**Example:**

Text `T`: `AGCTTGAGC`
Pattern `P`: `AGTT` (length 4)
`k = 1`

| Position | Text Substring | Hamming Distance from `AGTT` | Match? |
| :------- | :------------- | :--------------------------- | :----- |
| 0        | `AGCT`         | 1 (C vs T)                   | Yes    |
| 1        | `GCTT`         | 2 (G vs A, C vs T)           | No     |
| 2        | `CTTG`         | 3 (C vs A, T vs G, G vs T)   | No     |
| 3        | `TTGA`         | 3 (T vs A, T vs G, A vs T)   | No     |
| 4        | `TGAG`         | 2 (T vs A, A vs T)           | No     |
| 5        | `GAGC`         | 3 (G vs A, A vs T, C vs T)   | No     |

An occurrence with at most 1 mismatch is found at position 0.

**Computational Complexity:**

*   Naive approach: O(m*n). For each of the `n-m+1` possible starting positions, we compute the Hamming distance which takes O(m) time.
*   More advanced algorithms (e.g., using bit parallelism or FFT) can achieve O(n * k) or O(n log m).

**Learning Outcome 5: Define Hamming distance and explain how it is used in approximate pattern matching.**

*   **Hamming Distance Definition:** Covered above.
*   **Usage:** Explained the process of sliding and comparing with Hamming distance.

---

#### 3.2 Levenshtein Distance (Edit Distance)

**Key Concepts & Definitions:**

*   **Levenshtein Distance:** Minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into the other.
*   **Dynamic Programming:** Levenshtein distance is typically computed using dynamic programming.
*   **Edit Distance Matrix (DP Table):** A matrix `D` where `D[i][j]` stores the Levenshtein distance between the first `i` characters of string `S1` and the first `j` characters of string `S2`.

**DP Recurrence Relation:**

`D[i][j] = min(`
`    D[i-1][j] + 1,      // Deletion from S1`
`    D[i][j-1] + 1,      // Insertion into S1`
`    D[i-1][j-1] + cost  // Substitution/Match`
`)`
where `cost = 0` if `S1[i] == S2[j]` (match), and `cost = 1` if `S1[i] != S2[j]` (substitution).

**Base Cases:**
*   `D[0][j] = j` (inserting `j` characters to transform an empty string to `S2[0...j-1]`)
*   `D[i][0] = i` (deleting `i` characters to transform `S1[0...i-1]` to an empty string)

**Algorithm for Approximate Pattern Matching (k-mismatches using Levenshtein):**

This is more complex than simple Hamming distance. A common approach for finding occurrences with edit distance at most `k` is to use a modified DP approach.

1.  **Cellular Automata / Bit Parallelism:** For small `k`, bit-parallel algorithms can efficiently compute edit distance.
2.  **Band Alignment:** The DP table can be viewed as a band around the main diagonal if the edit distance is small. This can speed up computation.
3.  **Simplified Goal:** Often in bioinformatics, we look for substrings of `T` that have edit distance `≤ k` from `P`. This involves computing the edit distance of `P` with all substrings of `T`. A common optimization is to notice that we only need the last row of the DP table to determine matches.

**Example of Levenshtein Distance Calculation (for two strings):**

S1: `kitten`
S2: `sitting`

Initialize DP table `D` of size `(len(S1)+1) x (len(S2)+1)`

|       |   | s | i | t | t | i | n | g |
| :---- | :- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|       | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| **k** | 1 |   |   |   |   |   |   |   |
| **i** | 2 |   |   |   |   |   |   |   |
| **t** | 3 |   |   |   |   |   |   |   |
| **t** | 4 |   |   |   |   |   |   |   |
| **e** | 5 |   |   |   |   |   |   |   |
| **n** | 6 |   |   |   |   |   |   |   |

**Fill Base Cases:**
`D[0][j] = j` for `j = 0..7`
`D[i][0] = i` for `i = 0..6`

|       |   | s | i | t | t | i | n | g |
| :---- | :- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|       | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| **k** | 1 |   |   |   |   |   |   |   |
| **i** | 2 |   |   |   |   |   |   |   |
| **t** | 3 |   |   |   |   |   |   |   |
| **t** | 4 |   |   |   |   |   |   |   |
| **e** | 5 |   |   |   |   |   |   |   |
| **n** | 6 |   |   |   |   |   |   |   |

**Fill DP Table:**

*   `D[1][1]` (k vs s): `min(D[0][1]+1, D[1][0]+1, D[0][0]+1)` = `min(1+1, 1+1, 0+1)` = `1` (substitution k->s)
*   `D[1][2]` (k vs si): `min(D[0][2]+1, D[1][1]+1, D[0][1]+1)` = `min(2+1, 1+1, 1+1)` = `2` (insert i)
*   ... and so on.

**Resulting DP Table:**

|       |   | s | i | t | t | i | n | g |
| :---- | :- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|       | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| **k** | 1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| **i** | 2 | 2 | 1 | 2 | 3 | 4 | 5 | 6 |
| **t** | 3 | 3 | 2 | 1 | 2 | 3 | 4 | 5 |
| **t** | 4 | 4 | 3 | 2 | 1 | 2 | 3 | 4 |
| **e** | 5 | 5 | 4 | 3 | 2 | 2 | 3 | 4 |
| **n** | 6 | 6 | 5 | 4 | 3 | 3 | 2 | 3 |

The Levenshtein distance between `kitten` and `sitting` is `D[6][7] = 3`.
(k->s, i->i, t->t, t->t, e->i, n->n, +g -> insert g).
Steps:
1. kitten -> sitten (substitute k with s)
2. sitten -> sittin (substitute e with i)
3. sittin -> sitting (insert g)

**Applying to Text:** To find occurrences in a text `T` with edit distance `k` from pattern `P`, one might adapt this DP. For each potential starting position in `T`, you'd essentially compute the edit distance between `P` and the substring of `T`. If the last value in the computed row (or column, depending on implementation) is `≤ k`, then a match is found.

**Computational Complexity:**

*   Computing Levenshtein distance between two strings of length `m` and `n` is O(m*n).
*   For approximate pattern matching where we find occurrences in a text `T` (length `N`) with a pattern `P` (length `m`) allowing `k` edits:
    *   Naive DP approach: O(N * m * m) or O(N * m) if optimized to only store necessary DP states.
    *   Faster algorithms can achieve O(N*k) or O(N log m).

**Learning Outcome 6: Understand the concept of edit distance (Levenshtein distance) and its application in approximate pattern matching.**

*   **Edit Distance Concept:** Defined and illustrated with DP.
*   **Application:** Explained how it can be used to find similar substrings in a text.

**Practice Question 4:**

Calculate the Levenshtein distance between `ACT` and `CAT`.
*   **Answer:**
    *   `m=3`, `n=3`.
    *   DP Table initialization:
        |   |   | C | A | T |
        | :- | :- | :-: | :-: | :-: |
        |   | 0 | 1 | 2 | 3 |
        | A | 1 |   |   |   |
        | C | 2 |   |   |   |
        | T | 3 |   |   |   |

    *   `D[1][1]` (A vs C): `min(1+1, 1+1, 0+1)` = `1` (subst A->C)
    *   `D[1][2]` (A vs CA): `min(2+1, 1+1, 1+0)` = `1` (match A)
    *   `D[1][3]` (A vs CAT): `min(3+1, 1+1, 1+1)` = `2` (insert T)

    *   `D[2][1]` (AC vs C): `min(1+1, 2+1, 1+0)` = `1` (match C)
    *   `D[2][2]` (AC vs CA): `min(1+1, 1+1, 1+1)` = `2` (subst C->A or insert A and delete C)
    *   `D[2][3]` (AC vs CAT): `min(2+1, 2+1, 1+1)` = `2` (subst C->T or insert T)

    *   `D[3][1]` (ACT vs C): `min(1+1, 3+1, 2+1)` = `2`
    *   `D[3][2]` (ACT vs CA): `min(1+1, 2+1, 2+1)` = `2`
    *   `D[3][3]` (ACT vs CAT): `min(2+1, 2+1, 2+0)` = `2` (match T)

    *   Final DP Table:
        |   |   | C | A | T |
        | :- | :- | :-: | :-: | :-: |
        |   | 0 | 1 | 2 | 3 |
        | A | 1 | 1 | 1 | 2 |
        | C | 2 | 1 | 2 | 2 |
        | T | 3 | 2 | 2 | 2 |

    *   Levenshtein Distance is 2.
        (ACT -> CCT (subst A->C) -> CAT (subst C->A))
        (ACT -> CT (delete A) -> CAT (insert C))

---

### 4. Suffix Trees and Suffix Arrays

These are advanced data structures that enable very efficient pattern matching.

**Key Concepts & Definitions:**

*   **Suffix:** A substring that starts from a particular position and goes to the end of the string.
*   **Suffix Tree:** A compressed trie (prefix tree) that stores all suffixes of a given text. Each edge is labeled with a substring, and each leaf represents a starting position of a suffix.
*   **Suffix Array:** A sorted array of all suffixes of a string. Each element in the array is the starting index of a suffix. It's often accompanied by an LCP (Longest Common Prefix) array.

**How they aid Pattern Matching:**

*   **Suffix Tree:** To search for a pattern `P`, you can traverse the suffix tree. If the path corresponding to `P` exists, then `P` is a substring of the text. All leaves in the subtree rooted at the end of the path for `P` correspond to occurrences of `P`.
    *   **Complexity:** O(m) for searching after O(n) construction (using Ukkonen's algorithm).
*   **Suffix Array:** Patterns can be found using binary search on the sorted suffixes.
    *   **Complexity:** O(m log n) for searching after O(n log n) or O(n) construction. The LCP array can further speed up searching to O(m + log n).

**Relevance in Bioinformatics:**

*   **Genome-wide searches:** Extremely fast for searching for short sequences (e.g., primer binding sites, motifs) across entire genomes.
*   **Longest Common Substring problems:** Efficiently finding the longest shared sequence between two or more strings.
*   **Read Mapping:** Aligning short DNA sequencing reads to a reference genome.

**Learning Outcome 7: Briefly describe suffix trees and suffix arrays and their role in efficient pattern matching.**

*   **Suffix Trees:** Explained as compressed tries storing suffixes, allowing O(m) search.
*   **Suffix Arrays:** Explained as sorted arrays of suffixes, enabling binary search.
*   **Role:** Highlighted their efficiency for genome-wide searches and other complex bioinformatics tasks.

---

### 5. Practical Considerations and Tools in Bioinformatics

**Key Concepts & Definitions:**

*   **Biological Databases:** Large repositories of biological sequences (e.g., GenBank, EMBL-EBI, UniProt).
*   **Sequence Alignment Tools:**
    *   **BLAST (Basic Local Alignment Search Tool):** A widely used algorithm for finding regions of similarity between biological sequences. It uses heuristic approaches to quickly find short "seeds" of similarity and then extends them. It's very effective for finding homologous sequences.
    *   **FASTA:** Another early sequence similarity search tool.
    *   **Smith-Waterman:** A dynamic programming algorithm for local alignment, guaranteeing optimal local alignments but is computationally more expensive than BLAST.
    *   **Needleman-Wunsch:** A dynamic programming algorithm for global alignment.
*   **Pattern Discovery Tools:** Tools that identify recurring patterns (motifs) in sets of sequences.
    *   **MEME (Multiple Em for Motif Elicitation):** A popular tool for discovering ungapped motifs.
    *   **MEME Suite:** A collection of tools for motif discovery and analysis.
*   **Regular Expressions:** A powerful way to specify complex patterns with wildcards, character classes, and repetitions. Often used in bioinformatics for pattern searching.
    *   **Example:** `[ACGT]{10,20}` could represent a DNA sequence of length between 10 and 20.

**Importance:**

*   **Data Management:** Efficiently searching and retrieving data from large biological databases.
*   **Hypothesis Generation:** Discovering potential functional or evolutionary relationships between sequences.
*   **Experimental Design:** Designing primers for PCR or probes for hybridization.

**Learning Outcome 8: Discuss practical considerations in combinatorial pattern matching in bioinformatics, including relevant tools and databases.**

*   **Practical Considerations:** Mentioned the challenges of large datasets.
*   **Tools and Databases:**
    *   Databases: GenBank, EMBL-EBI, UniProt.
    *   Tools: BLAST, FASTA, Smith-Waterman, Needleman-Wunsch, MEME.
    *   Regular Expressions as a pattern specification language.

---

### Important Points to Remember:

*   **Algorithm Choice:** The choice of algorithm depends on whether you need exact or approximate matching, the size of the data, and the acceptable computational complexity.
*   **KMP:** Excellent for exact matching with O(n+m) complexity due to pattern preprocessing.
*   **Rabin-Karp:** Uses hashing and rolling hashes, efficient on average but susceptible to worst-case performance with many collisions.
*   **Approximate Matching:** Crucial for biological sequences due to variations, mutations, and errors. Hamming distance and Levenshtein distance are key metrics.
*   **Suffix Structures (Trees/Arrays):** Offer very high performance for repetitive searches and large datasets but have higher construction costs.
*   **Bioinformatics Tools:** BLAST is a workhorse for similarity searching, while other tools address specific problems like motif discovery and precise alignment.
*   **Alphabet Size:** The alphabet of biological sequences is small ({A, C, G, T, N} for DNA), which influences the choice of parameters for algorithms like Rabin-Karp.

---

### Final Practice Questions:

1.  **Scenario:** You need to find all occurrences of a short DNA motif (length 15 bp) within a large genome (3 billion bp). Which algorithm would you likely choose and why?
    *   **Answer:** For exact matching of a short pattern in a very large text, KMP or a suffix array/tree based approach would be highly efficient. KMP offers a good balance of preprocessing and search time. Suffix arrays/trees would be even faster for repeated searches or if the pattern length is larger, but their construction is more complex. Naive matching would be too slow.

2.  **Problem:** You are given two protein sequences of equal length, and you want to quantify how many amino acids differ at corresponding positions. What metric would you use?
    *   **Answer:** Hamming distance.

3.  **Problem:** A gene promoter sequence might have slight variations while still retaining its function. If you are looking for such variations, allowing for a few insertions, deletions, or substitutions, what type of pattern matching would you employ?
    *   **Answer:** Approximate pattern matching, likely using an algorithm that considers edit distance (like Levenshtein distance) or a specific k-mismatch algorithm.

4.  **Concept Check:** What is the primary advantage of using a rolling hash in the Rabin-Karp algorithm compared to recomputing the hash for each substring from scratch?
    *   **Answer:** The rolling hash allows for O(1) computation of the next substring's hash from the current one, significantly speeding up the process compared to the O(m) cost of recomputing each hash.

---
