---
title: "Heuristic similarity search algorithms"
subject: "BIOINFORMATICS"
module: "Module 3: Combinatorial Pattern Matching (9 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c178"
status: "completed"
scrapedAt: "2026-05-20T17:01:15.678Z"
---
# Bioinformatics: Module 3 - Combinatorial Pattern Matching

## Topic: Heuristic Similarity Search Algorithms (9 hours)

---

### 1. Introduction to Similarity Search in Bioinformatics

**1.1 What is Similarity Search?**

*   **Definition:** Similarity search in bioinformatics refers to the process of finding sequences (DNA, RNA, protein) in a database that are similar to a query sequence.
*   **Importance:**
    *   **Evolutionary Relationships:** Similar sequences often indicate shared ancestry and functional similarity.
    *   **Gene/Protein Function Prediction:** If a query sequence is similar to a known protein, its function can be inferred.
    *   **Drug Discovery:** Identifying similar drug targets or binding sites.
    *   **Genome Annotation:** Identifying genes and their functions within a genome.

**1.2 Exact vs. Heuristic Search**

*   **Exact String Matching:** Finds occurrences of a pattern that match *exactly* character by character. Algorithms like Knuth-Morris-Pratt (KMP) and Boyer-Moore are examples.
    *   *Limitation:* Biological sequences are rarely identical due to mutations, insertions, and deletions.
*   **Heuristic Similarity Search:** Aims to find sequences that are *similar*, not necessarily identical. It uses approximations and shortcuts to speed up the search, especially for large databases.
    *   **Trade-off:** Sacrifices some accuracy for significant speed gains.
    *   **Focus:** Identifying sequences with high probability of biological relevance.

**1.3 The Need for Heuristic Approaches**

*   **Database Size:** Biological databases (e.g., GenBank, UniProt) contain billions of sequences. Exhaustive, exact matching is computationally infeasible for similarity.
*   **Sequence Variation:** Biological sequences evolve, leading to mutations, insertions, and deletions, making exact matches rare.
*   **Speed Requirements:** Researchers need to quickly identify potential homologs or functional relationships.

---

### 2. Key Concepts in Heuristic Similarity Search

**2.1 Sequence Alignment**

*   **Definition:** The process of arranging sequences to identify regions of similarity that may be a consequence of functional, structural, or evolutionary relationships.
*   **Types of Similarity:**
    *   **Global Alignment:** Attempts to align the entire length of two sequences. (e.g., Needleman-Wunsch algorithm - typically exact, but foundation for understanding scoring).
    *   **Local Alignment:** Identifies the most similar *regions* within two sequences, regardless of their overall length. This is the primary focus of heuristic search.
*   **Scoring Systems:**
    *   **Match:** Awarded for identical characters.
    *   **Mismatch:** Penalized for different characters.
    *   **Gap Penalty:** Penalized for insertions or deletions (gaps) introduced to improve alignment.
        *   **Affine Gap Penalty:** A penalty for opening a gap and a different penalty for extending an existing gap. More biologically realistic.

**2.2 Basic Local Alignment Search Tool (BLAST)**

*   **Overview:** BLAST is the most widely used heuristic algorithm for sequence similarity searching. It is designed to be fast and sensitive for finding local alignments.
*   **Core Idea:** Instead of comparing the entire query sequence to every database sequence, BLAST focuses on finding short, high-scoring "seed" alignments.
*   **Steps of BLAST:**
    1.  **Word Generation:**
        *   The query sequence is broken down into short "words" (typically 3 amino acids for proteins, 11 nucleotides for DNA).
        *   **High-Scoring Pairs (HSPs):** BLAST identifies neighboring words in the query that, when aligned with database words, produce high alignment scores (above a certain threshold). This is often done by considering matches or allowing a few mismatches in the words.
        *   **D-values:** For protein sequences, BLAST uses a scoring matrix (e.g., BLOSUM) to assess the likelihood of a match between words, even if they are not identical.
    2.  **Seeding:**
        *   BLAST then searches the database for occurrences of these "seed" words. This is done very efficiently.
    3.  **Extension:**
        *   Once a seed match is found, BLAST extends the alignment in both directions from the seed (left and right) as long as the alignment score improves or remains above a certain threshold. This process is known as **gapped extension** or **Ungapped Extension**.
        *   **Two-hit seeding:** To improve sensitivity, BLAST often requires *two* seed matches within a certain distance of each other before extending. This significantly reduces the number of spurious alignments.
    4.  **Scoring and Significance:**
        *   The extended local alignments (HSPs) are scored using a substitution matrix (e.g., BLOSUM, PAM for proteins; simple match/mismatch for DNA).
        *   **E-value (Expectation Value):** This is the crucial metric for assessing the statistical significance of an alignment. It represents the number of alignments with a score equal to or greater than the observed score that are expected to occur by chance in a database of a given size.
            *   **Lower E-value:** Indicates a more significant alignment (less likely to be due to random chance).
            *   **High E-value:** Suggests the observed similarity might be coincidental.

**2.3 FASTA**

*   **Overview:** Another influential heuristic algorithm that predates BLAST. It also uses a "word" or "k-tuple" based approach.
*   **Steps of FASTA:**
    1.  **K-tuple Identification:** Similar to BLAST, FASTA breaks the query into k-tuples (words).
    2.  **Initial Matches:** It finds initial matches between k-tuples of the query and database sequences.
    3.  **Diagonal Scan:** FASTA looks for diagonals of matches on a matrix where the x-axis is the query and the y-axis is the database sequence. These diagonals represent regions of potential similarity.
    4.  **Joining Diagonals:** Short diagonals are joined into longer, contiguous regions of similarity (initially ungapped).
    5.  **Refinement (Gapped Alignment):** The highest-scoring initial regions are then refined using a local alignment algorithm (like Smith-Waterman, but often with optimizations) to introduce gaps and produce a gapped alignment.
*   **Key Difference from BLAST:** FASTA initially identifies longer initial matches (typically k=2 or 3 for proteins) and then looks for regions where these matches are close together before doing a gapped alignment. BLAST focuses on finding many short matches and extending them.

**2.4 Smith-Waterman Algorithm (for context on how BLAST/FASTA are speedups)**

*   **Overview:** A dynamic programming algorithm that finds the best *local* alignment between two sequences.
*   **Key Features:**
    *   **Guaranteed Optimality:** It finds the mathematically optimal local alignment.
    *   **Computational Cost:** It has a time complexity of O(mn), where m and n are the lengths of the two sequences. This is too slow for searching large databases.
*   **How Heuristics Speed it Up:** BLAST and FASTA achieve speed by:
    *   **Focusing on Seeds:** They don't perform a full Smith-Waterman on the entire query against every database sequence.
    *   **Reducing Search Space:** They use short, high-scoring word matches to identify promising regions, effectively narrowing down the search space.
    *   **Approximations:** They might use ungapped extensions or simplified gap penalties in the initial stages.

---

### 3. Practical Considerations and Variations

**3.1 BLAST Variants**

*   **blastn:** Nucleotide-nucleotide BLAST.
*   **blastp:** Protein-protein BLAST.
*   **blastx:** Translates nucleotide query into all six reading frames and compares against a protein database.
*   **xtblast:** Translates nucleotide query into all six reading frames and compares against a nucleotide database (also translated into all six reading frames).
*   **psi-blast (Position-Specific Iterated BLAST):**
    *   **Concept:** Iteratively builds a profile (Position-Specific Scoring Matrix - PSSM) from the initial high-scoring matches.
    *   **Process:**
        1.  Run standard BLAST.
        2.  Use the HSPs to build a PSSM.
        3.  Search the database again using the PSSM, which is more sensitive to conserved regions and subtle similarities.
    *   **Advantage:** Can detect more distant evolutionary relationships than standard BLAST.
    *   **Disadvantage:** Computationally more intensive and can be prone to "query seeding" if the initial matches are misleading.

**3.2 Interpreting BLAST Results**

*   **Query:** The sequence you searched with.
*   **Subject/Hit:** A sequence in the database that matched your query.
*   **Alignment Score:** The raw score of the alignment. Higher is better.
*   **E-value:** The statistical significance of the alignment. Lower is better (closer to 0).
*   **Percent Identity:** The percentage of identical residues in the aligned regions.
*   **Positives:** The percentage of residues that are similar (according to the scoring matrix) in the aligned regions.
*   **Query Cover:** The percentage of the query sequence that is included in the alignment.
*   **Subject Cover:** The percentage of the database sequence that is included in the alignment.

**3.3 Choosing the Right Tool**

*   **Nucleotide vs. Protein:** Use `blastn` for DNA/RNA, `blastp` for proteins.
*   **Query Type:** If you have a DNA sequence and want to find a protein homolog, use `blastx`.
*   **Sensitivity vs. Speed:**
    *   **Standard BLAST/FASTA:** Good balance for finding relatively close homologs.
    *   **PSI-BLAST:** For finding more distant homologs, but takes longer.
    *   **Smith-Waterman (or optimized versions like SSEARCH):** For highly sensitive local alignment of two sequences, but not for database searching.

---

### 4. Practice Questions and Exercises

**4.1 Questions**

1.  What is the primary limitation of exact string matching algorithms when searching biological sequence databases?
2.  Explain the concept of "seeding" in BLAST. Why is it important for heuristic search?
3.  What is an E-value, and how is it used to assess the significance of a BLAST hit?
4.  Describe the main difference in strategy between BLAST and FASTA for identifying initial regions of similarity.
5.  What is the advantage of using PSI-BLAST over standard BLAST? What is a potential drawback?
6.  You have a short DNA sequence and want to find similar genes in a human genome database. Which BLAST program would you use, and why?
7.  Your BLAST search returns a hit with an E-value of 0.005. What does this number represent? Is this a highly significant hit?

**4.2 Exercises**

1.  **Simulated BLAST Search:** Imagine you have a query protein sequence "MLKIFG" and a database sequence "MLKAFG".
    *   If you are using a word size of 3, what are the initial "words" from your query?
    *   If your E-value threshold for accepting a word match is 0.1, and you find a match of "MLK" in the database sequence, would you consider this a seed? (Assume simple match/mismatch for this simplified example).
    *   If you extend this match and find "MLKIFG" aligns with "MLKAFG", what is the approximate percent identity? What kind of substitution might be occurring?
2.  **Interpreting E-values:** Rank the following E-values from most significant to least significant: 1e-50, 0.1, 1e-5, 0.001.
3.  **BLAST practical:** (Requires internet access and a BLAST tool, e.g., NCBI BLAST)
    *   Go to the NCBI BLAST website.
    *   Choose `blastp` (Protein-protein BLAST).
    *   Paste the following protein sequence into the query box:
        `MAGWMRLLPLLALLALWGPDPAAAFSTPVVSKLLQPGAQGLLGLEAVLRYLKKATLYFVCAYISRVDAGL
        RDLLLLRGGPEVDGALPVLGPRALLVRAAPQLALAGVLSATPPGQVRPLAPLGAPLALPRSLSPGLAL
        PPGCVLALLLGPALAGPPPALPPPPPAPAPAPAPAPAPAALPPSPSAAP`
    *   Choose the "nr" (non-redundant protein sequences) database.
    *   Run the search.
    *   Examine the top 5 hits. For each hit, note:
        *   The accession number/ID of the hit.
        *   The E-value.
        *   The percent identity.
        *   The query cover.
    *   Briefly describe the type of organism or protein family the top hits belong to. Based on the E-values, how confident are you in these matches?

---

### 5. Answers to Practice Questions

**5.1 Answers**

1.  The primary limitation is that biological sequences evolve and accumulate mutations, insertions, and deletions, meaning exact matches are rare. Heuristic algorithms account for this variability by searching for similarity rather than exact identity.
2.  "Seeding" in BLAST involves identifying short, exact or near-exact matches (called "seeds" or "words") between the query and database sequences. These seeds act as starting points. They are important because performing a full alignment for every possible substring is computationally prohibitive. By focusing on high-scoring seeds, BLAST significantly reduces the number of alignments that need to be extended, thereby speeding up the search.
3.  An E-value (Expectation Value) represents the number of alignments with a score equal to or greater than the observed score that are expected to occur by chance in a database of a given size and composition. A lower E-value indicates a more statistically significant alignment, meaning it's less likely to be a random occurrence.
4.  BLAST identifies many short, high-scoring word matches (seeds) and then extends them. FASTA initially identifies longer initial matches (k-tuples) and then looks for regions where these matches are close together (diagonals) before performing a more computationally intensive gapped alignment on these promising regions.
5.  **Advantage of PSI-BLAST:** It can detect more distant evolutionary relationships because it builds a position-specific scoring matrix (PSSM) that captures conserved patterns more effectively than a simple substitution matrix. This increases sensitivity.
    **Potential Drawback:** It is computationally more intensive than standard BLAST. Also, if the initial BLAST hits are misleading or due to chance, the PSSM can become corrupted, leading to incorrect results or a loss of sensitivity (a phenomenon called "query seeding").
6.  You would use `blastn` (Nucleotide-nucleotide BLAST) because your query is DNA and you are searching a DNA database (the human genome).
7.  An E-value of 0.005 means that you would expect to find about 5 alignments with a score equal to or higher than the observed score purely by chance in a database of that size. This is generally considered a moderately significant hit, but not as highly significant as E-values closer to zero (e.g., 1e-10 or lower). The biological context and the percent identity/query cover would also be important to consider.

**5.2 Answers to Exercises**

1.  *   **Query words (k=3):** MLK, LKI, KIF, IFG
    *   **Seed:** Yes, "MLK" is an exact match to a word in the database sequence, and assuming your threshold allows for exact matches, it would be considered a seed.
    *   **Percent Identity:** The alignment is "MLKIFG" vs. "MLKAFG".
        *   MLK: 3 identical
        *   I vs. A: 1 mismatch
        *   FG: 2 identical
        *   Total aligned: 6
        *   Identical: 5
        *   Percent Identity = (5/6) * 100% ≈ 83.3%
        *   The substitution is likely I -> A.
2.  **Most significant to least significant:**
    1.  1e-50 (very small number, very significant)
    2.  1e-5 (still very significant)
    3.  0.001 (less significant than 1e-5)
    4.  0.1 (least significant, highest probability of occurring by chance)
3.  *(Answers will vary based on current NCBI database content. Below is a typical example of what might be seen)*
    *   **Example Top Hits might be for a sequence related to human serum albumin (e.g., if the query was a fragment of albumin):**
        *   **Hit 1:** Human serum albumin (e.g., accession P02768). E-value: 0.0. Percent Identity: 98-100%. Query Cover: 90-100%.
        *   **Hit 2:** Bovine serum albumin. E-value: 1e-150. Percent Identity: 95%. Query Cover: 95%.
        *   **Hit 3:** Rat serum albumin. E-value: 5e-130. Percent Identity: 92%. Query Cover: 98%.
        *   **Hit 4:** Albumin-like protein from another mammal. E-value: 1e-100. Percent Identity: 88%. Query Cover: 85%.
        *   **Hit 5:** A protein with some conserved albumin domains but different overall function. E-value: 1e-40. Percent Identity: 60%. Query Cover: 70%.
    *   **Interpretation:** The top hits likely belong to the serum albumin family, found in various species. The very low (or zero) E-values and high percent identity/query cover for the first few hits indicate very strong statistical confidence in these matches, suggesting the query sequence is very similar to these known proteins. The later hits might represent more distant relatives or proteins with shared structural motifs.

---

### 6. Important Points to Remember

*   **Heuristics Trade Speed for Accuracy:** They are approximations that make searching large databases feasible.
*   **BLAST is the Dominant Tool:** Understand its core principles (word generation, seeding, extension).
*   **E-value is Key for Significance:** Always check the E-value when interpreting search results. Lower is better.
*   **Sequence Similarity ≠ Identicality:** Biological sequences evolve; look for high percent identity and positives, not just exact matches.
*   **Choose the Right BLAST Variant:** Match the query and database types (DNA vs. protein).
*   **PSI-BLAST for Distant Homologs:** Use it when standard BLAST doesn't find weak but potentially important similarities.
*   **Understand the Metrics:** Percent identity, positives, query cover, and subject cover provide context for the alignment.

---
