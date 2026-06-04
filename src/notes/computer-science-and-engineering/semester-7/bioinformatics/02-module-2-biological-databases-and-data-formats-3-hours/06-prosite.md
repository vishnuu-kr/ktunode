---
title: "PROSITE"
subject: "BIOINFORMATICS"
module: "Module 2: Biological Databases and Data Formats (3 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c167"
status: "completed"
scrapedAt: "2026-05-20T17:01:04.146Z"
---
# BIOINFORMATICS: Module 2 - Biological Databases and Data Formats
## Topic: PROSITE
**Duration:** 3 hours

---

### 1. Introduction to PROSITE

**Key Concept:** PROSITE is a database of biologically significant patterns and profiles that are associated with protein families and domains. It serves as a valuable resource for identifying protein families, predicting protein function, and classifying protein sequences.

**What is PROSITE?**
*   A curated database of protein families, domains, and functional sites.
*   Contains patterns and profiles that are characteristic of specific protein families or functional regions.
*   Primarily focuses on short, conserved regions (patterns) and more generalized profiles (multiple sequence alignments).
*   Aims to provide a structured way to annotate protein sequences with functional and evolutionary information.

**Why is PROSITE important?**
*   **Protein Identification:** Helps identify known protein families and domains within unknown sequences.
*   **Functional Prediction:** Predicts potential functions of proteins based on the presence of identified patterns/profiles.
*   **Sequence Classification:** Aids in the classification of proteins into families and superfamilies.
*   **Understanding Protein Evolution:** Conserved patterns and profiles reflect evolutionary relationships.

---

### 2. PROSITE Patterns

**Key Concept:** PROSITE patterns are regular expressions that describe conserved amino acid subsequences found in specific protein families or functional sites.

**Characteristics of PROSITE Patterns:**
*   **Regular Expressions:** Use a specific syntax to define patterns, allowing for variations in amino acid residues at certain positions.
*   **Short Length:** Typically represent short, highly conserved stretches of amino acids (e.g., 5-20 residues).
*   **High Specificity:** Designed to be highly specific to a particular protein family or functional site, minimizing false positives.
*   **Biologically Significant:** Represent residues crucial for protein function, structure, or post-translational modification.

**PROSITE Pattern Syntax:**
*   **Amino Acid Codes:** Standard IUPAC single-letter codes (e.g., A, R, N, D, C, Q, E, G, H, I, L, K, M, F, P, S, T, W, Y, V).
*   **"X" (Any Amino Acid):** Represents any single amino acid.
*   **"[]" (Amino Acid Set):** Encloses a set of amino acids that can occur at a position (e.g., [AC] means Alanine or Cysteine).
*   **"{}" (Excluded Amino Acid Set):** Encloses a set of amino acids that are *not* allowed at a position (e.g., {P} means any amino acid except Proline).
*   **"-" (Gap):** Represents a gap in the alignment (usually not used in PROSITE patterns, but part of general regular expression syntax).
*   **"*":** Typically represents the end of the pattern or a variable length tail in some contexts.
*   **"." (Arbitrary Gap):** Represents any number of amino acids (often used to represent variable length regions between conserved elements). **Note:** PROSITE patterns themselves usually specify exact lengths or specific amino acids for conserved positions, not variable gaps like '.' in general regex. The concept of variable lengths is often handled implicitly by the fact that patterns are identified within longer sequences.
*   **"()":** Grouping (less common in basic PROSITE patterns).
*   **"=":** Identical to the preceding character.
*   **"~":** Similar amino acids.

**Examples of PROSITE Patterns:**

*   **ATP-binding site (P-loop) pattern:**
    *   **Pattern:** `[AG]-x-[ST]-x(4)-[GAS]`
    *   **Description:** This pattern identifies a conserved motif involved in ATP binding.
        *   `[AG]` means Alanine or Glycine.
        *   `-` means the next residue.
        *   `x` means any amino acid.
        *   `[ST]` means Serine or Threonine.
        *   `x(4)` means any four amino acids.
        *   `[GAS]` means Glycine, Alanine, or Serine.
    *   **Found in:** Many ATPases, kinases, and other nucleotide-binding proteins.

*   **Zinc finger motif (C2H2 type):**
    *   **Pattern:** `C-x(2)-C-x(9)-C-x(2)-C`
    *   **Description:** This pattern represents the conserved cysteine residues that coordinate a zinc ion in C2H2 zinc fingers.
        *   `C` means Cysteine.
        *   `x(2)` means any two amino acids.
        *   `x(9)` means any nine amino acids.
    *   **Found in:** Transcription factors and other DNA-binding proteins.

*   **N-myristoylation site:**
    *   **Pattern:** `[AG]-G-[LIVMFYWC]-x-[STAGC]`
    *   **Description:** Identifies a consensus sequence for N-myristoylation (attachment of a fatty acid).
        *   `[AG]` means Alanine or Glycine.
        *   `G` means Glycine.
        *   `[LIVMFYWC]` means Leucine, Isoleucine, Valine, Methionine, Phenylalanine, Tyrosine, Cysteine, or Tryptophan.
        *   `x` means any amino acid.
        *   `[STAGC]` means Serine, Threonine, Alanine, Glycine, or Cysteine.
    *   **Found in:** Proteins that are myristoylated.

---

### 3. PROSITE Profiles

**Key Concept:** PROSITE profiles are position-specific scoring matrices (PSSMs) derived from multiple sequence alignments of protein families. They capture more subtle variations in amino acid conservation than simple patterns.

**Characteristics of PROSITE Profiles:**
*   **Position-Specific Scoring Matrices (PSSMs):** Represent the probability of each amino acid occurring at each position in a multiple sequence alignment.
*   **More Sensitive:** Can detect weaker similarities and identify more distantly related proteins compared to patterns.
*   **Capture Variation:** Account for conservative substitutions (e.g., hydrophobic to hydrophobic) and the degree of conservation at each position.
*   **Derived from MSAs:** Built from curated multiple sequence alignments of known protein family members.
*   **Scoring:** A query sequence is compared against the profile, and a score is calculated based on the match.

**How PROSITE Profiles Work:**
1.  A multiple sequence alignment (MSA) of a protein family is created.
2.  For each position in the alignment, a PSSM is generated, where each entry represents the score for aligning a specific amino acid at that position. Higher scores indicate a better match.
3.  A query sequence is scanned against the PSSM. The score for each amino acid in the query sequence at each position is summed up.
4.  Significant scores indicate potential membership in the protein family represented by the profile.

**Example of a Simplified Profile Concept (not a real PSSM table):**

Consider a simplified profile for a 3-residue motif:
*   **Position 1:** High preference for Alanine (A)
*   **Position 2:** Any amino acid (X)
*   **Position 3:** High preference for Glycine (G)

A pattern might represent this as `A-x-G`.

A profile would look more like:

| Position | A   | R   | N   | D   | C   | ... | G   | ... | V   | W   | Y   |
| :------- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| **1**    | +5  | -2  | -1  | 0   | -3  | ... | -1  | ... | 1   | -2  | -1  |  *(High score for A)*
| **2**    | 0   | 0   | 0   | 0   | 0   | ... | 0   | ... | 0   | 0   | 0   |  *(Neutral score for all amino acids)*
| **3**    | -2  | -1  | 0   | 0   | -3  | ... | +6  | ... | 1   | -2  | -1  |  *(High score for G)*

*Note: The actual PSSM values are log-odds scores derived from frequencies.*

---

### 4. PROSITE Tools and Databases

**Key Concepts:**
*   **PROSITE Database:** The curated collection of patterns and profiles.
*   **Online Tools:** Web-based interfaces for searching PROSITE.
*   **ScanProsite:** The primary tool for searching sequences against PROSITE patterns and profiles.

**PROSITE Database Structure:**
*   Each entry in PROSITE typically contains:
    *   A unique accession number (e.g., `PSXXXXX` for patterns, `SDXXXXX` for profiles).
    *   A descriptive name for the pattern/profile.
    *   The pattern or profile itself.
    *   References to relevant scientific literature.
    *   Information about the protein family or functional site.
    *   Examples of proteins containing the pattern/profile.
    *   Cross-references to other databases (e.g., UniProt).

**ScanProsite:**
*   **Functionality:** Allows users to submit a protein sequence (e.g., in FASTA format) and search it against the PROSITE database.
*   **Output:** Reports the PROSITE patterns and profiles that are found in the submitted sequence, along with their positions and relevance.
*   **Levels of Significance:** ScanProsite provides statistical significance values (e.g., E-values) to help users assess the reliability of matches.

**How to Use ScanProsite (Conceptual Workflow):**
1.  Go to the PROSITE website (e.g., via ExPASy).
2.  Select the "ScanProsite" tool.
3.  Paste your protein sequence into the input box.
4.  Choose whether to search against patterns only, profiles only, or both.
5.  Submit the job.
6.  Analyze the results: identify matches to known PROSITE entries, noting the accession numbers, positions, and scores.

---

### 5. Learning Outcomes Covered

Let's map the content to the stated learning outcomes:

*   **(Implicit Learning Outcome 1: Understand the purpose and scope of the PROSITE database.)**
    *   Covered in Section 1: Introduction to PROSITE, discussing its role in protein identification, function prediction, and classification.

*   **(Implicit Learning Outcome 2: Differentiate between PROSITE patterns and PROSITE profiles.)**
    *   Covered in Section 2 (PROSITE Patterns) and Section 3 (PROSITE Profiles), highlighting their distinct characteristics, representation, and sensitivity.

*   **(Implicit Learning Outcome 3: Understand the syntax and application of PROSITE patterns.)**
    *   Covered extensively in Section 2, including explanations of the syntax and providing multiple examples.

*   **(Implicit Learning Outcome 4: Comprehend the basis of PROSITE profiles (PSSMs) and their advantages.)**
    *   Covered in Section 3, explaining PSSMs and their use in capturing more detailed conservation information.

*   **(Implicit Learning Outcome 5: Be aware of the tools available for accessing and utilizing PROSITE data.)**
    *   Covered in Section 4, focusing on the PROSITE database itself and the ScanProsite tool.

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the primary difference between a PROSITE pattern and a PROSITE profile?

**Question 2:**
Given the PROSITE pattern `C-x(2)-C-x(9)-C-x(2)-C`, what amino acid is expected at the first position, and how many arbitrary amino acids can occur between the first and second cysteine?

**Question 3:**
A protein sequence contains the motif `AGGAASGG`. Which PROSITE pattern, if any, from the examples provided in this module might match this motif?
*   `[AG]-x-[ST]-x(4)-[GAS]`
*   `C-x(2)-C-x(9)-C-x(2)-C`
*   `[AG]-G-[LIVMFYWC]-x-[STAGC]`

**Question 4:**
Why are PROSITE profiles generally considered more sensitive than PROSITE patterns for detecting distant protein relationships?

**Question 5:**
Imagine you have a newly sequenced protein and want to see if it belongs to any known protein families with conserved functional sites. Which PROSITE tool would you use, and what kind of information would you expect to obtain from it?

---

### 7. Answers to Practice Questions

**Answer 1:**
A PROSITE pattern is a regular expression representing a short, highly conserved subsequence of amino acids, defined by a specific syntax. A PROSITE profile is a position-specific scoring matrix (PSSM) derived from a multiple sequence alignment of a protein family, capturing more nuanced conservation information and allowing for variations at each position. Patterns are more specific and shorter, while profiles are more sensitive and capture a wider range of variations.

**Answer 2:**
The first position of the pattern `C-x(2)-C-x(9)-C-x(2)-C` is expected to be Cysteine (C). There can be exactly two arbitrary amino acids (`x(2)`) between the first and second cysteine.

**Answer 3:**
The PROSITE pattern `[AG]-G-[LIVMFYWC]-x-[STAGC]` might match the motif `AGGAASGG`. Let's break it down:
*   **Pattern Position 1:** `[AG]` - Matches 'A' in `AGGAASGG`.
*   **Pattern Position 2:** `G` - Matches 'G' in `AGGAASGG`.
*   **Pattern Position 3:** `[LIVMFYWC]` - Matches 'G' in `AGGAASGG` (G is not in this set, so this wouldn't match exactly as written. However, if the motif was `AGVG...`, it would match V. This highlights the importance of exact matches in pattern definitions.)
*   **Pattern Position 4:** `x` - Matches 'A' in `AGGAASGG`.
*   **Pattern Position 5:** `[STAGC]` - Matches 'A' in `AGGAASGG`.
*   **Remaining part of motif `SGG`:** This part of the motif `AGGAASGG` is not covered by the example patterns.

**Re-evaluation of Answer 3 based on strict pattern matching:**
None of the provided patterns *fully* match the motif `AGGAASGG` as presented.
*   The P-loop pattern `[AG]-x-[ST]-x(4)-[GAS]` requires a specific arrangement not present.
*   The Zinc finger pattern `C-x(2)-C-x(9)-C-x(2)-C` requires cysteines and gaps that are not present.
*   The Myristoylation pattern `[AG]-G-[LIVMFYWC]-x-[STAGC]` might match the first few residues (`AGGA`) if the third residue of the motif was a hydrophobic amino acid (which it is not, it's G), and the fifth residue was in the specified set.

**Corrected Answer 3:**
None of the example PROSITE patterns provided (`[AG]-x-[ST]-x(4)-[GAS]`, `C-x(2)-C-x(9)-C-x(2)-C`, `[AG]-G-[LIVMFYWC]-x-[STAGC]`) would strictly match the motif `AGGAASGG` in its entirety. The closest potential partial match might be the beginning of the myristoylation site pattern if the third 'G' was replaced by a hydrophobic residue.

**Answer 4:**
PROSITE profiles are more sensitive because they are based on PSSMs. PSSMs capture the probability of *any* amino acid occurring at each position in an alignment, not just the presence or absence of specific amino acids or sets. This allows them to detect conserved patterns involving conservative amino acid substitutions (e.g., a leucine being replaced by an isoleucine, both being hydrophobic) which might be missed by a strict pattern. They also account for the varying degrees of conservation across different positions within a motif.

**Answer 5:**
You would use the **ScanProsite** tool. You would submit your protein sequence to ScanProsite. The tool would then search this sequence against the PROSITE database of patterns and profiles. You would expect to receive a report listing any PROSITE entries (patterns or profiles) that match your protein sequence. This report would indicate potential protein families or functional sites your protein might be involved in, based on the presence of these conserved motifs.

---

### 8. Important Points to Remember

*   **PROSITE = Patterns + Profiles:** It's a combined resource.
*   **Patterns:** Rule-based, short, specific subsequences (like regular expressions).
*   **Profiles:** Statistical, derived from alignments, more sensitive to variations.
*   **ScanProsite:** The primary tool for searching sequences against PROSITE.
*   **Syntax is Key:** Understand PROSITE pattern syntax for accurate interpretation.
*   **Context Matters:** PROSITE annotations are predictive and should be validated with other evidence when possible.
*   **Curated Resource:** PROSITE entries are manually curated, indicating a level of reliability.

---
