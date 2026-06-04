---
title: "similarity"
subject: "BIOINFORMATICS"
module: "Module 1: Molecular Biology Primer (3 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c15e"
status: "completed"
scrapedAt: "2026-05-20T17:00:58.002Z"
---
# Bioinformatics: Module 1 - Molecular Biology Primer (3 hours) - Topic: Similarity

## Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental importance of molecular similarity in bioinformatics.
*   Differentiate between sequence similarity and functional similarity.
*   Identify and describe key metrics used to quantify sequence similarity (e.g., identity, similarity scores).
*   Explain the concept of homology and its relationship to similarity.
*   Recognize common algorithms and approaches used to detect and measure sequence similarity.
*   Appreciate the applications of similarity analysis in biological research.

---

## 1. Introduction to Molecular Similarity in Bioinformatics

### 1.1 What is Molecular Similarity?

Molecular similarity refers to the degree to which molecules (especially biomolecules like DNA, RNA, and proteins) share common features, structures, or functions. In bioinformatics, this concept is central to understanding biological relationships and inferring functional roles.

### 1.2 Why is Similarity Important in Bioinformatics?

*   **Inferring Function:** If two sequences are similar, they are likely to have similar functions or roles in the cell. This is the core principle of **homology-based inference**.
*   **Evolutionary Relationships:** Similar sequences often indicate a shared evolutionary ancestor (**homology**). By comparing sequences, we can reconstruct evolutionary histories (phylogeny).
*   **Identifying Genes and Proteins:** Similarity searches can help identify known genes or proteins within newly sequenced genomes or datasets.
*   **Drug Discovery:** Similarities in protein structures or binding sites can guide the design of drugs that target specific molecules.
*   **Database Searching:** Similarity is the basis for searching large biological databases (like GenBank, UniProt) to find related sequences.

---

## 2. Types of Similarity

It's crucial to distinguish between different types of similarity:

### 2.1 Sequence Similarity

*   **Definition:** Refers to the degree of agreement between two biological sequences (DNA, RNA, or protein) at the character level. This is typically measured by the number of matching characters (identity) or matches considering conservative substitutions (similarity).
*   **Focus:** The linear arrangement of nucleotides or amino acids.

### 2.2 Structural Similarity

*   **Definition:** Refers to the similarity in the three-dimensional (3D) arrangement of atoms in a molecule, particularly for proteins.
*   **Focus:** The folded structure of a protein, which is often more conserved than the primary sequence during evolution.
*   **Relationship to Sequence Similarity:** Similar sequences can lead to similar structures, but structural similarity can also exist between sequences with low similarity (due to convergent evolution or different evolutionary paths).

### 2.3 Functional Similarity

*   **Definition:** Refers to the similarity in the biological role or activity of molecules.
*   **Focus:** The biochemical or cellular process a molecule participates in.
*   **Relationship to Sequence and Structural Similarity:** Functional similarity is often a consequence of sequence and structural similarity. However, molecules with different sequences and structures can sometimes perform similar functions (e.g., different enzymes catalyzing the same reaction).

---

## 3. Quantifying Sequence Similarity

### 3.1 Sequence Identity

*   **Definition:** The percentage of positions in two aligned sequences that have identical characters.
*   **Calculation:**
    $$ \text{Identity} = \frac{\text{Number of identical positions}}{\text{Total number of aligned positions}} \times 100\% $$
*   **Example:**
    *   Sequence A: `ATGCGTAC`
    *   Sequence B: `ATGCGTTC`
    *   Alignment:
        ```
        ATGCGTAC
        ATGCGTTC
        |||||| |
        ```
    *   Number of identical positions = 7
    *   Total aligned positions = 8
    *   Identity = (7/8) * 100% = 87.5%

### 3.2 Sequence Similarity Scores

*   **Definition:** A more nuanced measure that considers not only exact matches but also conservative substitutions (where amino acids with similar chemical properties are replaced) and mismatches.
*   **Key Components:**
    *   **Substitution Matrices:** These matrices assign scores to the replacement of one amino acid by another.
        *   **PAM (Point Accepted Mutation) Matrices:** Developed based on observed mutations in closely related proteins. PAM1 represents a low amount of evolutionary change, while higher PAM numbers represent more divergence.
        *   **BLOSUM (Blocks Substitution Matrix) Matrices:** Developed from blocks of conserved regions in multiple protein alignments. BLOSUM62 is a commonly used matrix.
    *   **Gap Penalties:** Scores assigned to insertions or deletions (gaps) in one sequence relative to the other.
        *   **Gap Opening Penalty:** A penalty for introducing a gap.
        *   **Gap Extension Penalty:** A penalty for extending an existing gap.

*   **Calculation:** The total similarity score is calculated by summing the scores for matches, mismatches (using substitution matrices), and gaps.
*   **Example (Conceptual with BLOSUM62):**
    *   Sequence X: `GATTACA`
    *   Sequence Y: `GATTACT`
    *   Alignment:
        ```
        GATTACA
        GATTACT
        ||||| |
        ```
    *   Matches: G, A, T, T, A, C (6 matches)
    *   Mismatch: A vs. T
    *   If we use a substitution matrix where:
        *   Match score = +5
        *   Score(A, T) = -1 (example value)
    *   Total Score = (6 * 5) + (-1) = 29

### 3.3 E-value (Expectation Value)

*   **Definition:** The number of alignments with a score equal to or greater than the observed score that is expected to occur by chance in a database of a given size.
*   **Interpretation:**
    *   A low E-value (e.g., < 0.01) indicates that the observed similarity is statistically significant and unlikely to be due to random chance.
    *   A high E-value suggests the similarity could be random.
*   **Importance:** Crucial for filtering out spurious matches when searching large databases.

---

## 4. Homology vs. Similarity

### 4.1 Definition of Homology

*   **Definition:** Homology is an evolutionary concept. Two sequences (or structures, or genes) are homologous if they are derived from a common ancestral sequence.
*   **Key Point:** Homology is a binary concept – either two things are homologous, or they are not. It's about shared ancestry.

### 4.2 Relationship to Similarity

*   **Similarity as an Indicator of Homology:** High sequence similarity is often interpreted as strong evidence for homology.
*   **Caveats:**
    *   **Convergent Evolution (Analogy):** Similarities can arise independently in unrelated organisms due to similar selective pressures (e.g., developing wings for flight). These are analogous, not homologous.
    *   **Low Similarity, High Homology:** In cases of very distant evolutionary relationships, homologous sequences may have diverged significantly, resulting in low sequence similarity. Functional or structural similarity might still be present.
    *   **High Similarity, No Homology (Rare):** Extremely rare, but theoretically possible due to chance mutations coincidentally creating similar patterns.

### 4.3 Types of Homology

*   **Orthologs:** Homologous genes in different species that evolved from a common ancestral gene by speciation. Orthologs usually retain the same or very similar function.
    *   **Example:** The gene for hemoglobin in humans and the gene for hemoglobin in chimpanzees.
*   **Paralogs:** Homologous genes within the same species that arose from gene duplication events followed by divergence. Paralogs can evolve new functions or retain similar functions.
    *   **Example:** The different globin genes (alpha-globin, beta-globin) in humans, which arose from duplication of an ancestral globin gene.

---

## 5. Algorithms and Approaches for Similarity Detection

### 5.1 Pairwise Sequence Alignment

*   **Definition:** Compares two sequences to find the optimal alignment that maximizes a similarity score.
*   **Algorithms:**
    *   **Needleman-Wunsch Algorithm:** A global alignment algorithm. It aligns two sequences from end to end, assuming they are homologous across their entire length.
    *   **Smith-Waterman Algorithm:** A local alignment algorithm. It finds the best-matching subsequences between two sequences, allowing for gaps and mismatches. This is more sensitive for detecting similarity between distantly related sequences or within longer sequences.

### 5.2 Database Searching (Similarity Searches)

*   **Definition:** Compares a query sequence against a large database of sequences to find similar sequences.
*   **Key Tools:**
    *   **BLAST (Basic Local Alignment Search Tool):** A heuristic algorithm that is significantly faster than Smith-Waterman while providing comparable results for most practical purposes. It works by finding short high-scoring segment pairs (HSPs) and extending them.
        *   **BLASTp:** Protein vs. Protein database.
        *   **BLASTn:** Nucleotide vs. Nucleotide database.
        *   **BLASTx:** Translated nucleotide query vs. Protein database.
        *   **tBLASTn:** Nucleotide database vs. Translated protein query.
        *   **tBLASTx:** Translated nucleotide query vs. Translated nucleotide database.
    *   **FASTA:** Another heuristic algorithm, an older but still relevant tool for sequence similarity searching.

---

## 6. Applications of Similarity Analysis

*   **Gene Identification and Annotation:** Identifying new genes and predicting their functions by comparing them to known genes in databases.
*   **Protein Function Prediction:** Inferring the biochemical function of a protein based on its similarity to proteins with known functions.
*   **Phylogenetic Analysis:** Constructing evolutionary trees (phylogenies) by comparing sequences of related organisms.
*   **Drug Target Identification:** Finding proteins with similar functions or structures to known drug targets.
*   **Protein Engineering:** Identifying conserved regions that are important for protein stability or activity.
*   **Identifying Regulatory Elements:** Finding conserved non-coding DNA sequences that may be involved in gene regulation.

---

## 7. Important Points to Remember

*   **Similarity is a measure, homology is an inference.** High similarity suggests homology, but it's not a direct proof.
*   **Substitution matrices (PAM, BLOSUM) are crucial for scoring protein similarity** as they account for evolutionary changes in amino acid sequences.
*   **E-value is vital for assessing the statistical significance of database search results.** Always consider the E-value when interpreting similarity.
*   **Needleman-Wunsch (global) vs. Smith-Waterman (local) alignment** have different applications depending on the research question.
*   **BLAST is the go-to tool for rapid similarity searches in large biological databases.**
*   **Understanding orthologs and paralogs is important for inferring functional relationships and evolutionary history.**

---

## Practice Questions and Exercises

**Question 1:**
What is the primary difference between sequence similarity and homology?

**Answer 1:**
Sequence similarity is a quantifiable measure of shared characters or scores between two sequences. Homology is an evolutionary concept, meaning the sequences are derived from a common ancestor. High similarity often *suggests* homology, but it is not proof of it.

---

**Question 2:**
Consider two protein sequences, A and B. Sequence A has the amino acid sequence: `MVHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFASFGNLSSPTAILGNPMVRAHGKKVLGAFSDGLAHLDNLKGTFATLSELHCDKLHVDPENFRLLGNVLVCVLARNFGKEFTPPVQAAYQKVVAGVANALAHKYH`. Sequence B has the sequence: `MVHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFASFGNLSSPTAILGNPMVRAHGKKVLGAFSDGLAHLDNLKGTFATLSELHCDKLHVDPENFRLLGNVLVCVLARNFGKEFTPPVQAAYQKVVAGVANALAHKYH`.

What is the sequence identity between Sequence A and Sequence B?

**Answer 2:**
The two sequences are identical. Therefore, the sequence identity is 100%.

---

**Question 3:**
Why is a substitution matrix used in protein sequence alignment rather than just counting identical amino acids?

**Answer 3:**
Amino acid substitutions are not all equal in their evolutionary impact. Some amino acid changes are more likely to occur and have less impact on protein function due to similar chemical properties (e.g., Leucine to Isoleucine). Substitution matrices (like BLOSUM or PAM) assign scores that reflect the likelihood of these substitutions occurring during evolution, providing a more biologically meaningful measure of similarity than simple identity.

---

**Question 4:**
You perform a BLAST search with a novel protein sequence and get a hit with an E-value of 1e-50. What does this E-value suggest about the identified hit?

**Answer 4:**
An E-value of 1e-50 is extremely low. This indicates that the similarity observed between your query sequence and the hit sequence is highly statistically significant and very unlikely to have occurred by random chance. It strongly suggests that the hit sequence is related to your query sequence (likely homologous).

---

**Question 5:**
Explain the difference between orthologs and paralogs. Provide a biological example for each.

**Answer 5:**
*   **Orthologs:** Homologous genes in *different species* that originated from a common ancestral gene through speciation. They generally retain similar functions.
    *   **Example:** The gene encoding insulin in humans and the gene encoding insulin in mice.
*   **Paralogs:** Homologous genes that arose from gene duplication *within the same species* and subsequently diverged. They may evolve new functions or retain similar ones.
    *   **Example:** The alpha-globin and beta-globin genes in humans, which both evolved from an ancestral globin gene through duplication events.

---
**End of Module 1 - Topic: Similarity**
