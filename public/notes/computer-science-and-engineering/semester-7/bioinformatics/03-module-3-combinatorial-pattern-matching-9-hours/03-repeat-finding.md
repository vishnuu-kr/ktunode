---
title: "Repeat finding"
subject: "BIOINFORMATICS"
module: "Module 3: Combinatorial Pattern Matching (9 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c175"
status: "completed"
scrapedAt: "2026-05-20T17:01:13.462Z"
---
# Bioinformatics: Module 3 - Combinatorial Pattern Matching

## Topic: Repeat Finding

This module focuses on identifying repetitive patterns within biological sequences, a fundamental task in bioinformatics with applications ranging from understanding genome organization to detecting disease-causing mutations.

---

### 1. Introduction to Repeat Finding

**Definition:** Repeat finding is the process of identifying instances of recurring subsequences within a larger biological sequence (DNA, RNA, or protein). These repeats can be:

*   **Exact repeats:** Identical sequences appearing multiple times.
*   **Approximate repeats:** Sequences with minor variations (e.g., point mutations, insertions, deletions) that are still recognizable as repetitions.

**Why is Repeat Finding Important?**

*   **Genome Annotation:** Identifying structural elements like genes, regulatory regions, and transposable elements.
*   **Evolutionary Studies:** Understanding genome evolution and the mechanisms of genome expansion.
*   **Disease Diagnosis:** Identifying repeats associated with genetic disorders (e.g., Huntington's disease, fragile X syndrome).
*   **Gene Regulation:** Repeats can play roles in gene expression control.
*   **Protein Structure and Function:** Repetitive protein domains can indicate specific functional units or structural motifs.

**Types of Repeats:**

*   **Tandem Repeats (Satellite DNA):** Identical or similar sequences repeated consecutively in a block.
    *   **Minisatellites:** Longer repeat units (10-100 bp), with copy numbers varying between individuals.
    *   **Microsatellites (Short Tandem Repeats - STRs):** Short repeat units (1-6 bp), highly variable in copy number and often used in DNA fingerprinting.
*   **Interspersed Repeats:** Copies of the same sequence scattered throughout the genome.
    *   **Transposable Elements (TEs):** "Jumping genes" that can move from one location to another in the genome. Examples include LINEs, SINEs, LTR retrotransposons, and DNA transposons.
    *   **Non-autonomous elements:** TEs that require the machinery of other TEs to transpose.
*   **Low-Complexity Regions (LCRs):** Regions with a high proportion of a few types of nucleotides or amino acids (e.g., runs of A's, G's, or simple amino acid motifs). Can be due to mutational bias or selection.

---

### 2. Algorithms for Repeat Finding

The choice of algorithm depends on the type of repeat being sought and the acceptable level of variation.

#### 2.1. Finding Tandem Repeats

**Problem Statement:** Given a sequence $S$, find all substrings of the form $W^k$, where $W$ is a "word" (substring) and $k > 1$ is the number of repetitions. This includes exact and approximate tandem repeats.

**A. Exact Tandem Repeats**

*   **Brute-Force Approach:**
    *   Iterate through all possible substring lengths $L$ for the word $W$.
    *   For each $L$, iterate through all possible starting positions $i$ for the first occurrence of $W$.
    *   Check if the substring $S[i..i+L-1]$ is immediately followed by an identical substring $S[i+L..i+2L-1]$, $S[i+2L..i+3L-1]$, and so on.
    *   **Complexity:** $O(n^3)$ where $n$ is the length of the sequence. Inefficient for large genomes.

*   **Suffix Array/Suffix Tree Based Approaches:** These structures allow for efficient searching of substrings and their occurrences.
    *   **Concept:** A suffix array (or tree) stores all suffixes of a string in lexicographical order. Common prefixes of suffixes correspond to repeated substrings.
    *   **How it works for tandem repeats:**
        1.  Construct a suffix array for the sequence $S$.
        2.  Calculate the Longest Common Prefix (LCP) array. The LCP array stores the length of the longest common prefix between adjacent suffixes in the sorted suffix array.
        3.  A tandem repeat $W^k$ starting at position $i$ means that the suffix starting at $i$ and the suffix starting at $i+L$ share a common prefix of length at least $L$. This can be detected by looking for pairs of suffixes $i$ and $j$ in the suffix array such that $j = i+L$ and $LCP(i, j) \ge L$.
    *   **More sophisticated algorithms (e.g., Landau-Vishkin algorithm for approximate string matching) can be adapted for approximate tandem repeats.**

**Example (Conceptual):**
Sequence $S = ATGCATGCATGC$
Suffixes:
ATGCATGCATGC
TGCATGCATGC
GCATGCATGC
CATGCATGC
ATGCATGC
TGCATGC
GCATGC
CATGC
ATGC
TGC
GC
C

Sorted Suffixes (simplified):
...
ATGC
ATGCATGC
ATGCATGCATGC
...

If we find that suffix starting at index 0 (ATGC...) and suffix starting at index 4 (ATGC...) are adjacent in the sorted suffix array, and their LCP is 4, it indicates a repeat of ATGC of length 4. If the next occurrence is at index 8, and LCP between suffix 0 and 8 is 8, it suggests ATGCATGC.

#### 2.2. Finding Interspersed Repeats

**Problem Statement:** Find all occurrences of a specific repeat pattern (e.g., a known transposable element) or any pattern that appears multiple times with variations.

*   **Database Searching (for known repeats):**
    *   **Tools:** BLAST, FASTA.
    *   **Process:** Compare the query sequence against a database of known repeat sequences (e.g., Repbase).
    *   **Limitations:** Only finds known repeat families.

*   **De Novo Repeat Finding (for unknown repeats):**
    *   **Goal:** Identify repetitive elements that are not in existing databases.
    *   **Approaches:**
        1.  **K-mer based methods:**
            *   Count the occurrences of all substrings of length $k$ (k-mers) in the sequence.
            *   k-mers that appear frequently are potential candidates for repeat units.
            *   These candidates can then be extended to identify longer repeat sequences.
            *   **Example:** In sequence "ABABABAB", the k-mer "AB" (for k=2) appears 4 times. "ABA" (k=3) appears 3 times.
        2.  **Self-alignment methods:**
            *   Align the sequence against itself to find regions that are similar.
            *   Can be computationally intensive but effective for finding related repeat copies.
        3.  **Statistical methods:**
            *   Model the sequence composition and identify regions that deviate significantly, suggesting repetitive elements.

**Specific Tools for Repeat Finding:**

*   **REPEATMASKER:** A widely used tool that identifies and masks repetitive elements in eukaryotic genomes. It uses a combination of database searching (using libraries of known repeats) and de novo repeat finding.
*   **TRF (Tandem Repeats Finder):** Specifically designed for identifying tandem repeats, including approximate ones. It uses a combination of statistical methods and alignment.
*   **MISA (MIcroSAtellite identification):** Identifies microsatellites.
*   **RepeatScout:** A de novo repeat identification tool that clusters k-mers to build consensus sequences of potential repeats.

---

### 3. Challenges in Repeat Finding

*   **Approximate Repeats:** Detecting repeats with mutations, insertions, and deletions is more complex than exact repeats. Standard exact string matching algorithms are insufficient.
*   **Varying Copy Numbers:** Tandem repeats can have varying numbers of copies, making it hard to define a single pattern.
*   **Overlapping Repeats:** Repeats can overlap with each other, complicating identification.
*   **Short Repeats:** Identifying very short repeats (like microsatellites) requires careful handling of statistical significance to avoid false positives.
*   **Genome Size:** The sheer size of genomes (especially eukaryotic ones) demands highly efficient algorithms.
*   **Defining "Repeat":** For de novo methods, deciding what constitutes a "repeat" (e.g., minimum copy number, similarity threshold) is crucial and can influence results.

---

### 4. Applications of Repeat Finding

*   **Genome Annotation:**
    *   Identifying transposable elements that can disrupt genes or regulatory regions.
    *   Locating centromeres and telomeres, which are often rich in satellite DNA.
*   **Understanding Genome Structure and Dynamics:**
    *   Tandem repeats can influence chromosome structure and function.
    *   The distribution and activity of transposable elements provide insights into genome evolution and plasticity.
*   **Medical Diagnostics and Forensics:**
    *   Microsatellite instability is a hallmark of certain cancers.
    *   Variable number of tandem repeats (VNTRs) and STRs are used in DNA fingerprinting for identification and paternity testing.
*   **Comparative Genomics:**
    *   Identifying conserved repeat families across species can reveal evolutionary relationships.
    *   Differences in repeat content can explain variations in genome size and organization between species.

---

### 5. Practice Questions and Exercises

**Question 1:**
Define tandem repeats and interspersed repeats. Provide one example of each and explain their potential biological significance.

**Answer 1:**
*   **Tandem Repeats:** Identical or similar sequences repeated consecutively.
    *   **Example:** Microsatellites (e.g., `CAGCAGCAG`)
    *   **Significance:** Highly polymorphic, used in DNA fingerprinting; instability can be linked to diseases like Huntington's disease.
*   **Interspersed Repeats:** Copies of a sequence scattered throughout the genome.
    *   **Example:** Transposable elements like LINEs or SINEs.
    *   **Significance:** Can lead to genomic rearrangements, alter gene expression, and contribute to genome evolution.

**Question 2:**
What is the primary challenge in finding *approximate* tandem repeats compared to *exact* tandem repeats?

**Answer 2:**
The primary challenge is the presence of variations (mutations, insertions, deletions) within the repeat units. Exact string matching algorithms are not sufficient, and more sophisticated sequence alignment or pattern matching techniques are required to account for these differences.

**Question 3:**
Imagine you are given a DNA sequence and you suspect it contains a novel, unknown repeat. Which category of repeat finding method would you primarily employ, and why?

**Answer 3:**
You would primarily employ **de novo repeat finding methods**. These methods are designed to identify repetitive elements that are not present in existing databases. This is crucial when searching for novel repeats. Techniques like k-mer counting or self-alignment would be suitable starting points.

**Question 4:**
Briefly explain how suffix arrays can be used to find *exact* tandem repeats.

**Answer 4:**
Suffix arrays, along with the Longest Common Prefix (LCP) array, help identify exact tandem repeats. If a sequence has a tandem repeat $W^k$ starting at position $i$ with word length $L$, then the suffix starting at $i$ and the suffix starting at $i+L$ will share a common prefix of length at least $L$. By examining adjacent entries in the sorted suffix array and their LCP values, we can detect such relationships where the LCP value is equal to the distance between the starting positions of the two suffixes.

**Question 5 (Conceptual):**
Consider the sequence: `AGAGAGATAGAGAG`
What is a likely tandem repeat present in this sequence? Describe its pattern and location.

**Answer 5:**
A likely tandem repeat is `AGAGAG`.
*   **Pattern:** `AGAGAG`
*   **Location:** The sequence starts with `AGAGAG` at index 0, followed by `AT`, and then another `AGAGAG` starting at index 7. This suggests a repeat of `AGAGAG` with a single base difference (`T` instead of `A` or `G`) or a disrupted repeat. A more precise analysis would be needed to confirm if it's an approximate repeat or two separate occurrences. However, the pattern `AGAGAG` is clearly evident.

---

### Important Points to Remember:

*   **Repeat finding is a spectrum:** From exact matches to highly divergent sequences.
*   **Suffix arrays and LCP arrays** are powerful tools for finding exact repeats.
*   **De novo repeat finding** is essential for discovering new repetitive elements.
*   **Approximate string matching algorithms** are critical for handling variations in repeats.
*   **Databases like Repbase** are vital for identifying known repeat families.
*   **Tools like RepeatMasker and TRF** are widely used in practice.
*   **Understanding the biological significance** of repeats is as important as finding them.
*   **The choice of algorithm depends heavily on the type of repeat** you are looking for and the acceptable level of variation.
