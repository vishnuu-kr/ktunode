---
title: "BLAST (Bioconductor, msa, Biostrings etc.)"
subject: "BIOINFORMATICS"
module: "Module 4: R FOR BIOINFORMATICS"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c187"
status: "completed"
scrapedAt: "2026-05-20T17:01:26.179Z"
---
# Module 4: R for Bioinformatics - BLAST

## 1. Introduction to BLAST

**What is BLAST?**

BLAST (Basic Local Alignment Search Tool) is a fundamental algorithm and a suite of programs used for comparing biological sequence information, such as amino acid sequences or nucleotide sequences. It is a heuristic algorithm, meaning it finds "good" alignments but not necessarily the "best" possible ones, making it significantly faster than exhaustive dynamic programming methods like Smith-Waterman.

**Key Uses of BLAST:**

*   **Sequence Similarity Searching:** Identifying sequences in a database that are similar to a query sequence.
*   **Gene Identification:** Finding potential open reading frames (ORFs) or functional regions within a genome.
*   **Evolutionary Relationships:** Inferring evolutionary relationships between sequences based on similarity.
*   **Protein Function Prediction:** Assigning putative functions to newly discovered proteins based on similarity to known proteins.
*   **Primer Design:** Identifying suitable regions for PCR primers.

**Core Principles of BLAST:**

1.  **Word Identification:** BLAST breaks down the query sequence into short, exact matching "words" (typically 3 amino acids or 11 nucleotides).
2.  **Seeding:** It then finds similar words in the database sequences, allowing for mismatches. These word matches act as "seeds" for longer alignments.
3.  **Extension:** The seeds are extended in both directions to find maximal-scoring local alignments (High-scoring Segment Pairs - HSPs).
4.  **Scoring:** Alignments are scored using substitution matrices (e.g., BLOSUM, PAM for proteins) and gap penalties.
5.  **Statistical Significance:** BLAST provides statistical measures (e.g., E-value, bit score) to assess the significance of the alignments, helping to distinguish true homologs from random matches.

---

## 2. BLAST with Bioconductor in R

Bioconductor provides powerful interfaces to perform BLAST searches directly within the R environment, streamlining bioinformatics workflows.

### 2.1. The `blastula` Package (or similar interfaces)

While there isn't a single package universally named `blastula` that exclusively handles all BLAST operations in Bioconductor, several packages offer functionalities for interacting with BLAST, often by wrapping command-line BLAST tools or providing access to NCBI's web services. A common approach is to use packages that can:

*   **Format BLAST databases:** Prepare sequences for searching.
*   **Run BLAST command-line tools:** Execute `blastn`, `blastp`, `blastx`, `tblastn`, `tblastx` directly from R.
*   **Parse BLAST output:** Read and interpret the results from BLAST searches.

**Key Concepts and Functions (Illustrative, package-specific):**

*   **Database Preparation:**
    *   `makeblastdb`: A command-line tool (often accessed via R's `system()` function) to create BLAST databases from FASTA files.
        ```R
        # Example of how you might call makeblastdb from R (requires blast+ installed)
        # system("makeblastdb -in my_sequences.fasta -dbtype nucl -out my_nucl_db")
        # system("makeblastdb -in my_proteins.fasta -dbtype prot -out my_prot_db")
        ```
        *   `-in`: Input FASTA file.
        *   `-dbtype`: Type of database (`nucl` for nucleotide, `prot` for protein).
        *   `-out`: Name of the output database.

*   **Running BLAST Searches:**
    *   `system("blastn -query query.fasta -db my_nucl_db -out blast_results.txt -outfmt 6")`
    *   `system("blastp -query query.fasta -db my_prot_db -out blast_results.txt -outfmt 6")`
        *   `-query`: Input FASTA file for the query sequence(s).
        *   `-db`: The BLAST database to search against.
        *   `-out`: Output file name.
        *   `-outfmt`: Specifies the output format. Common formats include:
            *   `0`: Default pairwise output.
            *   `6`: Tabular format (compact, easy to parse).
            *   `7`: Tabular format with comments.
            *   `5`: XML format.

*   **Parsing BLAST Results:**
    *   Bioconductor often leverages packages like `Biostrings` to handle sequence data and potentially `readr` or base R `read.table` for tabular output.

### 2.2. Using Biostrings for Sequence Handling

The `Biostrings` package is fundamental for working with biological sequences in R. It provides S4 classes to represent sequences and efficient functions for manipulation and analysis, including reading FASTA files.

**Key Concepts and Functions:**

*   **Sequence Classes:**
    *   `DNAString`: For DNA sequences.
    *   `RNAString`: For RNA sequences.
    *   `AAString`: For amino acid sequences.
    *   `XString`: Generic character string.

*   **Reading Sequence Files:**
    *   `readDNAStringSet()`, `readRNAStringSet()`, `readAAStringSet()`: Functions to read sequences from FASTA files into `XStringSet` objects.
        ```R
        # Install and load Biostrings if not already done
        # if (!requireNamespace("BiocManager", quietly = TRUE))
        #     install.packages("BiocManager")
        # BiocManager::install("Biostrings")
        library(Biostrings)

        # Assuming you have a FASTA file named 'my_sequences.fasta'
        seqs <- readDNAStringSet("my_sequences.fasta")
        print(seqs) # Displays the sequences and their names
        ```

*   **Sequence Manipulation:**
    *   Subsetting, concatenation, reversing, complementing, translating sequences.
    *   `reverseComplement()`
    *   `translate()`

*   **Comparing Sequences (Local and Global Alignment):**
    *   `pairwiseAlignment()`: Performs global or local alignments using algorithms like Needleman-Wunsch (global) or Smith-Waterman (local). While not BLAST itself, it's a related alignment tool.
        ```R
        # Example of pairwise alignment
        seq1 <- DNAString("ATGCGTACG")
        seq2 <- DNAString("TGCGTA")

        # Local alignment (Smith-Waterman implicitly used by default for local=TRUE)
        local_align <- pairwiseAlignment(seq1, seq2, type = "local")
        print(local_align)

        # Global alignment (Needleman-Wunsch implicitly used by default for global=TRUE)
        global_align <- pairwiseAlignment(seq1, seq2, type = "global")
        print(global_align)
        ```

---

## 3. Multiple Sequence Alignment (MSA) with Bioconductor

While BLAST is primarily for *pairwise* similarity searching, Multiple Sequence Alignment (MSA) is crucial for identifying conserved regions and evolutionary patterns across several sequences. Bioconductor offers excellent tools for MSA.

### 3.1. The `msa` Package

The `msa` package is a key Bioconductor package for performing multiple sequence alignments. It can utilize various alignment algorithms, often wrapping external tools like Clustal Omega, MAFFT, and MUSCLE.

**Key Concepts and Functions:**

*   **MSA Algorithms:** The package supports different underlying alignment engines.
    *   Clustal Omega
    *   MAFFT
    *   MUSCLE
    *   ClustalW (older)

*   **Performing MSA:**
    *   `msa()`: The main function to perform the alignment.
        ```R
        # Install and load msa if not already done
        # BiocManager::install("msa")
        library(msa)
        library(Biostrings)

        # Load sequences using Biostrings
        seqs_to_align <- readAAStringSet(system.file("samples/amino.fasta", package="msa")) # Example from msa package

        # Perform Multiple Sequence Alignment using Clustal Omega (default if available)
        # You might need to specify the 'method' depending on what's installed and preferred.
        # Common methods: "ClustalOmega", "MAFFT", "MUSCLE"
        # If you don't have Clustal Omega installed, you might need to download and set its path.
        # The 'msa' package often tries to find them.
        msa_result <- msa(seqs_to_align, method="ClustalOmega")
        print(msa_result)

        # To view the alignment as a Biostrings object
        aligned_sequences <- msa_result@unaligned

        # Print the aligned sequences
        print(aligned_sequences)

        # Access individual aligned sequences
        # aligned_sequences[[1]]
        ```

*   **Interpreting MSA Results:**
    *   The output is typically an `Msa` object, which can be converted to an `XStringSet` for viewing or further processing.
    *   Conservation scores can often be derived from the alignment.

---

## 4. Other Relevant Bioconductor Packages

Beyond `Biostrings` and `msa`, several other packages can complement BLAST and sequence analysis workflows.

### 4.1. `seqinr`

While not strictly a Bioconductor package, `seqinr` is a popular R package for bioinformatics that provides functions for sequence analysis, reading/writing various sequence formats, and basic statistical analyses of sequences. It can be used in conjunction with Bioconductor.

**Key Concepts and Functions:**

*   `read.fasta()`: Reads sequences from FASTA files.
*   `getSequence()`: Extracts the sequence string from a `SeqFastadna` or `SeqFastaAA` object.
*   `translate()`: Translates DNA to protein.
*   GC content calculation, codon usage analysis.

```R
# Install seqinr if not already done
# install.packages("seqinr")
library(seqinr)

# Load sequences
seq_obj <- read.fasta(file = "my_sequences.fasta")
seq_string <- getSequence(seq_obj[[1]]) # Get the sequence string of the first entry
print(seq_string)
```

### 4.2. NCBI Direct Access (e.g., `rentrez`)

For directly querying NCBI databases without downloading local BLAST databases, packages like `rentrez` allow you to fetch data from Entrez databases and potentially use NCBI's web-based BLAST services.

**Key Concepts and Functions:**

*   `entrez_search()`: Searches NCBI databases (e.g., `pubmed`, `nucleotide`, `protein`).
*   `entrez_fetch()`: Retrieves records from NCBI.
*   `ncbi_blast()` (if a specific package provides this): Wraps NCBI BLAST web services.

```R
# Install rentrez if not already done
# BiocManager::install("rentrez")
library(rentrez)

# Search for a gene in the nucleotide database
search_results <- entrez_search(db = "nucleotide", term = "BRCA1 human[Organism]")
print(search_results$ids)

# Fetch the record for the first result
# fetched_record <- entrez_fetch(db = "nucleotide", id = search_results$ids[1], rettype = "fasta", retmode = "text")
# print(fetched_record)

# Note: Direct NCBI BLAST web service calls might be handled by other specialized packages or require manual HTTP requests.
```

---

## 5. Learning Outcomes Checklist & Practice Questions

Let's ensure we've covered the essential learning outcomes and test your understanding.

**Learning Outcomes Covered:**

*   **Understanding of BLAST:** Core principles, uses, and heuristic nature. (Covered in Section 1)
*   **Bioconductor for BLAST:** How Bioconductor facilitates BLAST operations, including database preparation and search execution. (Covered in Section 2.1)
*   **Using `Biostrings`:** Handling sequence data, reading FASTA, and basic sequence operations. (Covered in Section 2.2)
*   **Multiple Sequence Alignment (MSA):** Introduction to MSA and using the `msa` package with its underlying engines. (Covered in Section 3)
*   **Other Relevant Packages:** Awareness of `seqinr` and `rentrez` for broader bioinformatics tasks. (Covered in Section 4)

---

### Practice Questions:

**Question 1: Core BLAST Concepts**

What are the main steps involved in the BLAST algorithm? Briefly explain the purpose of "seeds" and "HSPs" in BLAST.

**Question 2: Biostrings**

You have a FASTA file named `my_dna.fasta` containing multiple DNA sequences. How would you load these sequences into R using the `Biostrings` package? What class would they be stored in?

**Question 3: Running BLAST (Conceptual)**

Imagine you want to perform a BLASTp search against a local protein database named `my_protein_db` using a query protein sequence in `my_query.fasta`. How would you conceptually call the `blastp` command-line tool from within R? What output format would be most convenient for parsing in R?

**Question 4: Multiple Sequence Alignment**

You have a set of protein sequences loaded into an `AAStringSet` object called `protein_set`. How would you perform a multiple sequence alignment using the `msa` package, specifying MAFFT as the alignment method?

**Question 5: Interpretation of BLAST Results (E-value)**

What does the E-value (Expect value) in BLAST results represent? Why is a lower E-value generally considered more significant?

---

### Practice Questions Answers:

**Answer 1: Core BLAST Concepts**

The main steps of BLAST are:
1.  **Word Identification:** Breaking the query sequence into short, exact matching "words."
2.  **Seeding:** Finding similar words (allowing mismatches) in the database, which act as starting points or "seeds" for longer alignments.
3.  **Extension:** Extending these seeds in both directions to find maximal-scoring local alignments, known as High-scoring Segment Pairs (HSPs).
4.  **Scoring and Statistical Significance:** Assigning scores to alignments using matrices and gap penalties, and calculating the statistical significance (e.g., E-value) of the matches.

"Seeds" are short, exact matches between the query and database sequences. They are critical because they are computationally cheap to find and serve as anchor points from which longer, more significant alignments can be built. HSPs are the actual local alignments found by BLAST, representing regions of similarity between the query and a database sequence.

**Answer 2: Biostrings**

You would load the sequences using:

```R
library(Biostrings)
my_dna_sequences <- readDNAStringSet("my_dna.fasta")
```

They would be stored in an object of class `DNAStringSet`.

**Answer 3: Running BLAST (Conceptual)**

You would use the `system()` function in R to call the command-line `blastp` tool. A convenient output format for parsing in R is tabular format (`-outfmt 6`).

```R
# Conceptual R code
# Assuming blastp executable is in your PATH
# system("blastp -query my_query.fasta -db my_protein_db -out blast_results.tab -outfmt 6")
```

**Answer 4: Multiple Sequence Alignment**

```R
# Assuming you have loaded protein_set as an AAStringSet
# and have the msa package installed
library(msa)
# Ensure the msa package can find the MAFFT executable
msa_alignment <- msa(protein_set, method = "MAFFT")
print(msa_alignment)
```

**Answer 5: Interpretation of BLAST Results (E-value)**

The E-value represents the expected number of random matches with a score as good as or better than the score of the current alignment, that you would expect to find in a database of the same size.

A lower E-value indicates a more statistically significant match. For example, an E-value of 0.01 means that you would expect to find one such match by chance alone in 100 database searches of similar size. An E-value of 1e-100 indicates an extremely unlikely random match, strongly suggesting homology.

---

## 6. Important Points to Remember

*   **BLAST is Heuristic:** It's fast but doesn't guarantee the absolute best alignment.
*   **Bioconductor Integration:** R and Bioconductor provide powerful ways to automate and integrate BLAST into your analyses, especially for handling input/output and chaining with other tools.
*   **`Biostrings` is Key:** Master `Biostrings` for efficient sequence manipulation in R.
*   **Output Formats Matter:** Use tabular output (`-outfmt 6`) for easy parsing in R.
*   **MSA vs. BLAST:** BLAST is primarily for pairwise comparison; MSA is for aligning multiple sequences to find conserved regions and evolutionary relationships.
*   **External Tools:** Many Bioconductor MSA packages (and potentially BLAST interfaces) rely on external command-line tools (like Clustal Omega, MAFFT, MUSCLE, blast+). Ensure these are installed and accessible to R.
*   **E-value is Crucial:** Always consider the E-value to assess the biological significance of BLAST hits. Low E-values indicate true homology.
