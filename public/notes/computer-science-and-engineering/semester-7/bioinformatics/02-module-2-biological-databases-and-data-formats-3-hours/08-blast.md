---
title: "BLAST"
subject: "BIOINFORMATICS"
module: "Module 2: Biological Databases and Data Formats (3 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c169"
status: "completed"
scrapedAt: "2026-05-20T17:01:05.536Z"
---
# BIOINFORMATICS - Module 2: Biological Databases and Data Formats

## Topic: BLAST (Basic Local Alignment Search Tool)

**(3 Hours Study Time Allocation)**

---

### 1. Introduction to BLAST

**Learning Outcome:** Understand the purpose and fundamental principles of BLAST.

*   **What is BLAST?**
    *   BLAST (Basic Local Alignment Search Tool) is a widely used algorithm and software package for comparing nucleotide or protein sequences.
    *   It's designed to quickly find regions of *local similarity* between biological sequences.
    *   Developed by Stephen Altschul, Warren Gish, Webb Miller, Eugene Myers, and David Lipman at the National Institutes of Health (NIH).
*   **Purpose of BLAST:**
    *   **Sequence Similarity Searching:** To find sequences in a database that are similar to a query sequence.
    *   **Gene Identification:** Identifying potential genes or proteins based on similarity to known sequences.
    *   **Functional Annotation:** Inferring the function of a newly discovered sequence by comparing it to sequences with known functions.
    *   **Evolutionary Relationships:** Identifying homologous sequences that may share a common evolutionary origin.
    *   **Primer Design & Probe Identification:** Finding suitable regions for designing primers or probes.
*   **Key Concept: Local Alignment vs. Global Alignment**
    *   **Global Alignment (e.g., Needleman-Wunsch):** Tries to align the *entire length* of two sequences, penalizing gaps at the ends. Suitable for closely related sequences of similar length.
    *   **Local Alignment (BLAST):** Identifies the *best-scoring segment* of similarity between two sequences. It allows for gaps and mismatches within these segments and doesn't penalize end gaps. Ideal for finding conserved domains or motifs within larger sequences, even if the overall sequences are divergent.

---

### 2. BLAST Algorithm: Core Principles

**Learning Outcome:** Explain the fundamental steps and underlying principles of the BLAST algorithm.

*   **The "Seeding" Approach:** BLAST doesn't compare every possible subsequence. It uses a heuristic approach to speed up the search.
*   **Key Steps of BLAST:**
    1.  **Word Generation:**
        *   The query sequence is broken down into short "words" (substrings) of a defined length, called *word size* (T).
        *   Common word sizes: 3 for proteins, 11 for nucleotides.
        *   **Example (Protein):** Query sequence `ARNDCEQGH`. If T=3, words are `ARN`, `RND`, `NDC`, `DCE`, `CEQ`, `EQG`, `QGH`.
    2.  **Word Matching (Seeding):**
        *   These query words are then searched against the database.
        *   Instead of exact matches, BLAST looks for *high-scoring segment pairs (HSPs)* using a scoring matrix (e.g., BLOSUM62 for proteins, simple matches/mismatches for nucleotides).
        *   **Threshold (S):** Matches that score above a certain threshold (S) are considered "seeds".
        *   **Example (Protein):** If a query word is `ARND`, BLAST searches for database words that are similar to `ARND` within a certain scoring threshold. This might include `ARAD` or `ARNF` if they score highly.
    3.  **Extending Seeds (Gaps):**
        *   Once a seed match is found, BLAST extends the alignment in both directions (left and right) from the seed.
        *   It tries to incorporate gaps (insertions/deletions) and mismatches to maximize the alignment score, while keeping the score above a threshold.
        *   **Gapped Extension:** This step is crucial for finding longer regions of similarity beyond the initial short seed.
    4.  **HSP Identification and Scoring:**
        *   BLAST identifies all maximal-scoring segments (High-scoring Segment Pairs - HSPs) that achieve a certain score without falling below a threshold.
        *   **Statistical Significance:** The significance of each HSP is evaluated using statistical methods (E-value).
    5.  **E-value (Expect Value):**
        *   **Definition:** The E-value is the number of *expected* HSPs of at least the same score that could be found by chance in a database of the given size.
        *   **Interpretation:** A low E-value (e.g., < 0.01) indicates that the observed alignment is unlikely to have occurred by chance and suggests true similarity.
        *   **Formula Concept:** `E = K * m * n * exp(-λ * S)` where:
            *   `K` is a database-specific constant.
            *   `m` and `n` are the lengths of the query and database sequences.
            *   `λ` is a constant depending on the scoring system.
            *   `S` is the raw alignment score.
*   **Key Concept: Heuristic Approach**
    *   BLAST uses approximations and shortcuts (like word seeding) to achieve high speed. It doesn't guarantee finding the absolute best alignment but is very good at finding significant alignments quickly.
    *   **Trade-off:** Speed vs. Sensitivity. BLAST is fast but might miss very distant homologs.

---

### 3. Types of BLAST Programs

**Learning Outcome:** Differentiate between the various BLAST programs available and their typical applications.

*   **BLAST is not a single program; it's a suite of programs.**
*   **Primary Distinction: Nucleotide vs. Protein Sequences**

    | Program        | Query Sequence | Database Sequence | Description                                                                                                  | Typical Use Cases                                                                                                                                                                      |
    | :------------- | :------------- | :---------------- | :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **blastn**     | Nucleotide     | Nucleotide        | Nucleotide-nucleotide BLAST. Simplest, fastest. Uses simple match/mismatch scoring.                          | Finding identical or highly similar DNA/RNA sequences, gene prediction, primer matching, finding repetitive elements.                                                                   |
    | **blastp**     | Protein        | Protein           | Protein-protein BLAST. Compares protein sequences using substitution matrices (e.g., BLOSUM, PAM).           | Identifying functionally related proteins, finding homologs, predicting protein function.                                                                                              |
    | **blastx**     | Nucleotide     | Protein           | Translated nucleotide-protein BLAST. Translates a nucleotide query in all six reading frames and compares to protein databases. | Finding potential protein products from nucleotide sequences (e.g., unknown genes), identifying coding regions.                                                                    |
    | **tblastn**    | Protein        | Nucleotide        | Translated nucleotide-nucleotide BLAST. Compares a protein query against all six reading frames of nucleotide databases. | Finding protein homologs in genomic or transcriptomic datasets where the nucleotide sequence is known but the protein product is not yet identified.                               |
    | **tblastx**    | Nucleotide     | Nucleotide        | Translated nucleotide-translated nucleotide BLAST. Compares all six reading frames of a nucleotide query against all six reading frames of nucleotide databases. | Finding homologous genes between organisms with very different codon usage or genome organization. Most computationally intensive.                                                     |

*   **Example Scenario:**
    *   You have a newly discovered protein sequence and want to know if it's similar to any known proteins. You would use **blastp**.
    *   You have a DNA sequence from an unknown organism and want to see if it contains any known genes. You would translate it (conceptually) and use **blastx** against a protein database.

---

### 4. Performing a BLAST Search (Practical Aspects)

**Learning Outcome:** Describe how to perform a BLAST search using online tools and interpret the results.

*   **Online BLAST Tools (NCBI BLAST):**
    *   The most common way to perform BLAST searches is through the NCBI BLAST web interface.
    *   **Website:** [https://blast.ncbi.nlm.nih.gov/Blast.cgi](https://blast.ncbi.nlm.nih.gov/Blast.cgi)
*   **Steps for an Online BLAST Search:**
    1.  **Select Program:** Choose the appropriate BLAST program (e.g., blastp, blastn).
    2.  **Enter Query Sequence:** Paste your sequence (in FASTA format is best) into the query box.
    3.  **Choose Database:** Select the database to search against (e.g., nr, swissprot, nt, pdb).
        *   **nr (non-redundant protein database):** Comprehensive collection of protein sequences.
        *   **nt (non-redundant nucleotide database):** Comprehensive collection of nucleotide sequences.
        *   **Swiss-Prot/UniProtKB/Swiss-Prot:** Manually curated, high-quality protein sequences.
        *   **RefSeq:** Curated, non-redundant set of sequences.
        *   **PDB:** Protein Data Bank, structural information.
    4.  **Adjust Parameters (Optional but Recommended):**
        *   **Word Size (T):** Can be adjusted for sensitivity vs. speed.
        *   **Matrix:** For protein searches (BLOSUM62 is default).
        *   **Gap Penalties:** Affects how gaps are scored.
        *   **Expect Threshold (E-value):** Filter results to only show those with an E-value below this threshold.
        *   **Low Complexity Filter:** Filters out regions rich in certain amino acids or nucleotides that can cause spurious high scores.
        *   **Program Selection:** BLAST-Short, Longer, etc.
    5.  **Run BLAST:** Click the "BLAST" button.
    6.  **View Results:** The results page will display matching sequences.

*   **Interpreting BLAST Results:**
    *   **Alignment List:** A list of database sequences that match your query.
    *   **Each Hit Represents an HSP:**
        *   **Description:** Name and brief description of the matching database sequence.
        *   **Accession Number:** Unique identifier for the database entry.
        *   **Database:** The database the hit came from.
        *   **Max Score:** The highest alignment score for this specific hit.
        *   **Total Score:** Sum of scores for all HSPs for this hit.
        *   **Query Cover:** Percentage of the query sequence that is covered by the alignment.
        *   **E-value:** The statistical significance of the match. **Lower is better.**
        *   **Percent Identity:** Percentage of identical residues in the alignment.
        *   **Positive:** Percentage of residues that are similar (based on scoring matrix).
    *   **Graphical Summary:** A visual representation of the matches along the query sequence.
    *   **Expectation Value (E-value):** The most important metric for assessing statistical significance. An E-value of 0.001 means you'd expect one match of this score or better by chance in 1000 searches.
    *   **Alignment Viewer:** Allows you to see the detailed pairwise alignment between your query and the database hit, highlighting matches, mismatches, and gaps.

*   **Example Interpretation:**
    *   If you search your protein against nr and get a hit with an E-value of `1e-50`, a Query Cover of `95%`, and `90%` identity, it strongly suggests your protein is highly similar to the database protein and likely shares a similar function.
    *   If you get a hit with an E-value of `0.5` and `20%` identity, it's likely a random match and not biologically significant.

---

### 5. BLAST Variants and Advanced Features

**Learning Outcome:** Discuss advanced BLAST features and related tools.

*   **PSI-BLAST (Position-Specific Iterated BLAST):**
    *   **Purpose:** More sensitive than regular BLAST for detecting distant evolutionary relationships.
    *   **How it works:**
        1.  Performs a regular protein-protein BLAST (blastp).
        2.  Constructs a *position-specific scoring matrix (PSSM)* based on the significant alignments found in the first round.
        3.  Uses this PSSM to search the database again, making it more sensitive to conserved positions.
        4.  Iterates this process multiple times.
    *   **Use Case:** Finding proteins with low sequence identity but conserved functional motifs.
*   **DELTABLAST (Position-Specific Scoring Matrix BLAST):**
    *   Similar to PSI-BLAST but uses pre-computed PSSMs from other sources.
*   **BLAST Score Matrix Selection:**
    *   **BLOSUM (Blocking Amino Acid Substitution Matrices):** Based on observed substitutions in highly conserved protein families. BLOSUM62 is a common default. Higher numbers (e.g., BLOSUM80) indicate more stringent matches.
    *   **PAM (Point Accepted Mutation):** Based on evolutionary distances. PAM1 is for closely related sequences, PAM250 for more distant ones.
*   **Nucleotide Scoring:**
    *   Typically uses a simple match/mismatch score (e.g., +1 for match, -2 for mismatch).
    *   Gap opening and extension penalties can be adjusted.
*   **Expectation Value (E-value) Threshold Customization:**
    *   Lowering the threshold increases stringency (fewer, more significant hits).
    *   Increasing the threshold increases sensitivity (more hits, potentially including less significant ones).
*   **Output Formats:** BLAST can produce output in various formats (e.g., plain text, HTML, XML, FASTA) for further processing.
*   **Command-Line BLAST:** For batch processing or integration into scripts, BLAST can be run from the command line. This requires downloading the BLAST software and databases.

---

### 6. Best Practices and Considerations

**Learning Outcome:** Identify best practices for using BLAST and interpret results critically.

*   **Choose the Right BLAST Program:** Always select the program that matches your query and database sequence types.
*   **Select Appropriate Databases:** Searching against specific databases (e.g., UniProtKB/Swiss-Prot) can be more informative than searching a general database if you have a specific question.
*   **Understand E-values:** Don't solely rely on percent identity. E-value is crucial for statistical significance.
*   **Consider Query Cover:** A high percent identity over a small region might be less significant than lower identity over a larger region.
*   **Low Complexity Regions:** Be aware that low complexity regions can lead to spurious alignments. Use filters judiciously.
*   **Context is Key:** Interpret BLAST results in the context of your biological question. A significant match doesn't automatically mean identical function.
*   **Verify Results:** For critical applications, consider using other tools or experimental validation to confirm findings.
*   **Keep Software Updated:** BLAST algorithms and databases are constantly updated.

---

### Practice Questions & Exercises

**Instructions:** Answer the following questions to test your understanding.

**Question 1:**
You have a newly discovered DNA sequence and want to find homologous genes in the *E. coli* genome. Which BLAST program would you use?
a) blastp
b) blastn
c) blastx
d) tblastn

**Question 2:**
What does the E-value in BLAST results represent?
a) The percentage of identical residues in the alignment.
b) The score of the best alignment.
c) The number of alignments expected by chance with a similar or better score.
d) The length of the query sequence.

**Question 3:**
Explain the primary difference between BLAST and a global alignment algorithm like Needleman-Wunsch.

**Question 4:**
Describe the purpose of PSI-BLAST and how it differs from standard BLAST.

**Question 5:**
You perform a blastp search with your query protein. You obtain several hits with E-values ranging from `1e-100` to `0.05`. Which hit is likely the most biologically significant? Explain your reasoning.

---

### Answers to Practice Questions

**Answer 1:**
b) blastn
*   **Explanation:** You have a DNA sequence (query) and want to search against a DNA database (*E. coli* genome). `blastn` is designed for nucleotide-nucleotide comparisons.

**Answer 2:**
c) The number of alignments expected by chance with a similar or better score.
*   **Explanation:** The E-value is a statistical measure of significance. A lower E-value indicates a more statistically significant match, meaning it's less likely to have occurred by random chance.

**Answer 3:**
The primary difference is that **BLAST performs local alignments**, focusing on identifying the best-scoring segments of similarity between sequences, allowing for gaps and mismatches within these segments. **Global alignment algorithms (like Needleman-Wunsch) attempt to align the entire length of two sequences**, penalizing gaps at the ends, and are best suited for comparing sequences that are expected to be similar across their entire length.

**Answer 4:**
**PSI-BLAST (Position-Specific Iterated BLAST)** is designed to be more sensitive than standard BLAST in detecting **distant evolutionary relationships**. It achieves this by:
1.  Performing an initial protein-protein BLAST.
2.  Constructing a **position-specific scoring matrix (PSSM)** based on the conserved patterns observed in the significant alignments from the first round.
3.  Iteratively re-searching the database using this PSSM, which allows it to identify homologous sequences that might have low sequence identity but conserved functional motifs.

**Answer 5:**
The hit with the E-value of `1e-100` is likely the most biologically significant.
*   **Reasoning:** E-value quantifies the statistical significance of a match. An E-value of `1e-100` is extremely small, indicating that this match is highly unlikely to be due to random chance. Conversely, an E-value of `0.05` is much higher, suggesting that a match of this quality or better could occur by chance roughly 5 times out of 100 searches. Therefore, the lower the E-value, the stronger the evidence for a true biological relationship between the query and the database sequence.

---

### **Important Points to Remember:**

*   **BLAST is a heuristic algorithm designed for speed and efficiency.**
*   **Local alignment is key to BLAST's utility**, allowing it to find conserved domains.
*   **E-value is the most critical metric for assessing the statistical significance of a BLAST hit.**
*   **Always choose the correct BLAST program** based on your query and database sequence types.
*   **Interpret results critically**, considering E-value, query cover, and percent identity in conjunction with biological context.
*   **PSI-BLAST offers increased sensitivity** for detecting distant homologs.
