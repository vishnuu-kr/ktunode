---
title: "String manipulation"
subject: "BIOINFORMATICS"
module: "Module 4: R FOR BIOINFORMATICS"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c17f"
status: "completed"
scrapedAt: "2026-05-20T17:01:20.095Z"
---
# BIOINFORMATICS: Module 4: R FOR BIOINFORMATICS - String Manipulation

This module focuses on the fundamental skill of manipulating strings in R, which is crucial for handling biological sequences (DNA, RNA, proteins), parsing files, and preparing data for analysis in bioinformatics.

---

## Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   **Understand the nature of strings in R and their representation.**
*   **Perform basic string operations such as concatenation, extraction, and comparison.**
*   **Utilize regular expressions for powerful pattern matching and substitution within strings.**
*   **Apply various R functions for cleaning and transforming character data.**
*   **Work with common bioinformatics-related string manipulation tasks.**

---

## 1. Understanding Strings in R

### 1.1 What are Strings?

*   **Definition:** A string is a sequence of characters. In R, strings are represented as **character vectors**.
*   **Representation:** Strings are enclosed in either single quotes (`'...'`) or double quotes (`"..."`). R is flexible, but it's good practice to be consistent.
    *   `"ACGT"`
    *   `'GATTACA'`
*   **Character Vectors:** Even a single string is technically a character vector of length 1. Multiple strings form a character vector of length greater than 1.
    *   `my_seq <- c("ATGC", "CGTA", "GCAT")`

### 1.2 Key Concepts

*   **Character Set:** The set of characters that can be used in a string (e.g., letters, numbers, symbols).
*   **Encoding:** The way characters are represented as numerical values (e.g., ASCII, UTF-8). While not always directly manipulated, understanding encoding is important for file handling.
*   **Case Sensitivity:** Most string operations in R are case-sensitive. `"A"` is different from `"a"`.

### 1.3 Basic String Operations

#### 1.3.1 Concatenation (Joining Strings)

*   **`paste()` function:** Joins strings together.
    *   `sep`: The separator between elements (default is a space).
    *   `collapse`: The separator to use when collapsing a vector into a single string.
*   **Example:**
    ```R
    # Joining individual strings
    paste("Hello", "World", sep = "-")
    # Output: [1] "Hello-World"

    # Joining elements of a character vector
    seq_pieces <- c("AT", "GC", "TA")
    paste(seq_pieces, collapse = "")
    # Output: [1] "ATGCAT"

    # Using paste0 for no separator (shorter equivalent of paste(..., sep = ""))
    paste0("Bio", "Info")
    # Output: [1] "BioInfo"
    ```

#### 1.3.2 Substring Extraction

*   **`substr()` function:** Extracts portions of strings.
    *   `x`: The character vector.
    *   `start`: The starting position of the substring.
    *   `stop`: The ending position of the substring.
*   **Example:**
    ```R
    my_dna <- "ATGCGTACGTACGTACG"
    substr(my_dna, start = 5, stop = 10)
    # Output: [1] "GTACGT"

    # Extracting multiple substrings from a vector
    sequences <- c("ACGTACGT", "TGCATGCA")
    substr(sequences, start = 2, stop = 4)
    # Output: [1] "CGT" "GCA"
    ```

#### 1.3.3 String Length

*   **`nchar()` function:** Returns the number of characters in each string.
*   **Example:**
    ```R
    nchar("Bioinformatics")
    # Output: [1] 14

    nchar(c("ATGC", "CGTA", "G"))
    # Output: [1] 4 4 1
    ```

#### 1.3.4 Character Replacement (Simple)

*   **`sub()` function:** Replaces the **first** occurrence of a pattern in a string.
    *   `pattern`: The string or pattern to find.
    *   `replacement`: The string to replace it with.
    *   `x`: The character vector.
*   **`gsub()` function:** Replaces **all** occurrences of a pattern in a string.
*   **Example:**
    ```R
    my_seq <- "AGCTTGCTTGCTTA"
    sub("GCT", "XXX", my_seq)
    # Output: [1] "AXXXTTGCTTGCTTA"

    gsub("GCT", "XXX", my_seq)
    # Output: [1] "AXXXTTXXXGCTTXXXA"
    ```

#### 1.3.5 String Splitting

*   **`strsplit()` function:** Splits strings into substrings based on a delimiter.
    *   Returns a **list**, where each element of the list is a vector of the split substrings for the corresponding input string.
*   **Example:**
    ```R
    my_record <- "GeneA_CDS_100_500"
    strsplit(my_record, "_")
    # Output: [[1]]
    # [1] "GeneA" "CDS"   "100"   "500"

    records <- c("Sample1-Ctrl", "Sample2-Trt")
    strsplit(records, "-")
    # Output:
    # [[1]]
    # [1] "Sample1" "Ctrl"
    #
    # [[2]]
    # [1] "Sample2" "Trt"
    ```

#### 1.3.6 Finding Substrings

*   **`grep()` function:** Searches for patterns and returns the **indices** of matching strings.
    *   `pattern`: The pattern to search for.
    *   `x`: The character vector.
    *   `value = TRUE`: Returns the matching strings themselves, not their indices.
*   **`grepl()` function:** Returns a **logical vector** (TRUE/FALSE) indicating whether each string matches the pattern.
*   **Example:**
    ```R
    dna_sequences <- c("ATGC", "CGTA", "GATTACA", "TACG")
    grep("TA", dna_sequences)
    # Output: [1] 2 3 (Indices of sequences containing "TA")

    grep("TA", dna_sequences, value = TRUE)
    # Output: [1] "CGTA"    "GATTACA"

    grepl("TA", dna_sequences)
    # Output: [1] FALSE  TRUE   TRUE   FALSE
    ```

---

## 2. Regular Expressions (Regex)

Regular expressions are a powerful tool for defining search patterns. They allow for sophisticated matching and manipulation of text.

### 2.1 Key Concepts

*   **Metacharacters:** Special characters that have specific meanings in regex.
*   **Literals:** Regular characters that match themselves.

### 2.2 Common Regex Metacharacters and Syntax

| Metacharacter | Meaning                                                              | Example (R)                          | Description                                           |
| :------------ | :------------------------------------------------------------------- | :----------------------------------- | :---------------------------------------------------- |
| `.`           | Matches any single character (except newline)                        | `grep(".", "abc")` returns `1 2 3`   | Matches 'a', 'b', or 'c'                              |
| `^`           | Matches the beginning of a string                                    | `grep("^A", "Apple")` returns `1`    | Matches strings that start with 'A'                   |
| `$`           | Matches the end of a string                                          | `grep("e$", "Apple")` returns `1`    | Matches strings that end with 'e'                     |
| `*`           | Matches the preceding element zero or more times                     | `grep("a*b", "abbb")` returns `1`    | Matches 'b', 'ab', 'aab', 'aaab', etc.                |
| `+`           | Matches the preceding element one or more times                      | `grep("a+b", "aaab")` returns `1`    | Matches 'ab', 'aab', 'aaab', etc. (at least one 'a')  |
| `?`           | Matches the preceding element zero or one time                       | `grep("a?b", "ab")` returns `1`      | Matches 'b' or 'ab'                                   |
| `[]`          | Character set: Matches any single character within the brackets      | `grep("[aeiou]", "rhythm")` returns `2 4 6` | Matches 'y', 'h', 'm' (vowels or y)                   |
| `[^]`         | Negated character set: Matches any single character NOT within brackets | `grep("[^0-9]", "abc1")` returns `1 2 3` | Matches any non-digit character                       |
| `|`           | OR operator: Matches either the expression before or after it        | `grep("cat|dog", "The dog barks")` returns `2` | Matches "cat" OR "dog"                                |
| `()`          | Grouping: Groups parts of the regex                                  | `grep("(ab)+", "ababab")` returns `1` | Matches one or more repetitions of "ab"               |
| `\`           | Escape character: Escapes the special meaning of the next character  | `grep("\\.", "file.txt")` returns `1` | Matches a literal dot `.`                             |
| `\d`          | Matches any digit (equivalent to `[0-9]`)                            | `grep("\\d+", "seq123")` returns `1` | Matches one or more digits                            |
| `\w`          | Matches any word character (alphanumeric + underscore)               | `grep("\\w+", "my_var1")` returns `1` | Matches "my_var1"                                     |
| `\s`          | Matches any whitespace character                                     | `grep("\\s", "hello world")` returns `2` | Matches the space character                           |
| `{n}`         | Matches the preceding element exactly `n` times                      | `grep("A{3}", "AAACCC")` returns `1` | Matches exactly three 'A's                            |
| `{n,}`        | Matches the preceding element at least `n` times                     | `grep("A{2,}", "AAAACCC")` returns `1` | Matches two or more 'A's                              |
| `{n,m}`       | Matches the preceding element between `n` and `m` times              | `grep("A{2,4}", "AAAAACCC")` returns `1` | Matches two, three, or four 'A's                      |

### 2.3 Regex in R Functions

Most R string manipulation functions (like `grep`, `sub`, `gsub`, `strsplit`) accept a `pattern` argument that can be a regular expression.

#### 2.3.1 `grep()`, `grepl()` with Regex

*   **Example:** Finding DNA sequences that start with 'A' and end with 'T'.
    ```R
    dna_sequences <- c("ATGC", "CGTA", "GATTACA", "TACG", "AT")
    grep("^A.*T$", dna_sequences)
    # Output: [1] 1 5 (Indices of "ATGC" and "AT")
    ```
    *   `^A`: Starts with 'A'.
    *   `.*`: Matches any character (`.`) zero or more times (`*`). This is the "greedy" part, it matches as much as possible.
    *   `T$`: Ends with 'T'.

#### 2.3.2 `sub()`, `gsub()` with Regex

*   **Example:** Replacing all occurrences of any nucleotide (A, C, G, T) with 'N' in a DNA sequence.
    ```R
    dna_seq <- "ATGCTAGCTAGCTA"
    gsub("[ACGT]", "N", dna_seq)
    # Output: [1] "NNNNNNNNNNNNNN"
    ```
    *   `[ACGT]`: Matches any single character that is 'A', 'C', 'G', or 'T'.

*   **Example:** Removing all non-nucleotide characters from a sequence string.
    ```R
    mixed_seq <- "ATG-C>G$T<A"
    gsub("[^ACGT]", "", mixed_seq)
    # Output: [1] "ATGCTAGCTA"
    ```
    *   `[^ACGT]`: Matches any character that is NOT 'A', 'C', 'G', or 'T'.

#### 2.3.3 `strsplit()` with Regex

*   **Example:** Splitting a FASTA header line.
    ```R
    fasta_header <- ">gene_id_XYZ_version_1.5"
    strsplit(fasta_header, "_")
    # Output: [[1]]
    # [1] ">gene" "id" "XYZ" "version" "1.5"
    ```

*   **Example:** Splitting by multiple delimiters.
    ```R
    data_line <- "ID:123;Name:SampleA,Status:Active"
    strsplit(data_line, "[;:]") # Split by semicolon or colon
    # Output:
    # [[1]]
    # [1] "ID"       "123"      "Name"     "SampleA,Status" "Active"

    # To get individual fields, you might need multiple splits or more advanced regex.
    # A better approach for structured data is often using functions from packages like 'readr' or 'data.table'.
    ```

---

## 3. Common Bioinformatics String Manipulation Tasks

### 3.1 Working with DNA/RNA/Protein Sequences

*   **Sequence Extraction:** Using `substr()` with start/stop positions.
*   **Complement/Reverse Complement:**
    *   First, create a mapping for complementation.
    *   Then, reverse the string.
    *   **Example (DNA Reverse Complement):**
        ```R
        dna_seq <- "ATGCGTA"

        # 1. Create complement mapping
        complement_map <- setNames(c("T", "A", "C", "G"), c("A", "T", "G", "C"))

        # 2. Get complement bases
        complement_bases <- complement_map[strsplit(dna_seq, "")[[1]]]
        complement_seq <- paste(complement_bases, collapse = "") # "TACGCAT"

        # 3. Reverse the complement
        reverse_complement_seq <- paste(rev(complement_bases), collapse = "") # "ATGCGTA" -> "TACCGCAT" (Incorrect: should be "TACGCAT")
        # Corrected approach:
        reverse_complement_seq <- paste(rev(complement_map[strsplit(dna_seq, "")[[1]]]), collapse = "")
        # Corrected Output: [1] "TACGCAT"
        ```
*   **GC Content Calculation:**
    *   Count 'G' and 'C' characters.
    *   Divide by total length.
    ```R
    calculate_gc_content <- function(sequence) {
      bases <- strsplit(sequence, "")[[1]]
      gc_count <- sum(bases %in% c("G", "C", "g", "c"))
      total_count <- length(bases)
      if (total_count == 0) return(0)
      return(gc_count / total_count * 100)
    }
    calculate_gc_content("ATGCGTA") # Output: 57.14286
    ```
*   **Translating DNA to Protein:** Requires a codon table. (This is more complex and often handled by dedicated packages like `Biostrings` from Bioconductor, but the principle is string splitting and lookup).

### 3.2 Parsing Text Files (e.g., FASTA, FASTQ)

*   **FASTA Format:** Typically starts with a header line (`>...`) followed by sequence lines.
    ```
    >Sequence1 Description
    ATGCTAGCTAGCTA
    GCTAGCTAGCTAGC
    >Sequence2 AnotherDescription
    CGTACGTACGTACG
    ```
*   **Reading FASTA:** Often involves reading line by line, identifying header lines, and accumulating sequence lines. `readLines()` is a starting point.
*   **Example (Simplified FASTA Parsing):**
    ```R
    fasta_lines <- readLines("my_sequences.fasta") # Assuming you have this file

    sequence_names <- character()
    sequences <- character()
    current_seq <- ""

    for (line in fasta_lines) {
      if (grepl("^>", line)) { # If it's a header line
        if (nchar(current_seq) > 0) {
          sequences <- c(sequences, current_seq) # Save previous sequence
          current_seq <- ""
        }
        sequence_names <- c(sequence_names, sub("^>","", line)) # Save sequence name
      } else {
        current_seq <- paste0(current_seq, line) # Append sequence line
      }
    }
    # Save the last sequence
    if (nchar(current_seq) > 0) {
      sequences <- c(sequences, current_seq)
    }

    # Now 'sequence_names' and 'sequences' hold your data.
    # A more robust solution would use a dedicated package.
    ```
    **Important Note:** For serious bioinformatics work, always use established Bioconductor packages (e.g., `Biostrings`, `seqinr`) which have highly optimized and error-checked functions for reading and manipulating biological sequences and formats.

### 3.3 Data Cleaning and Standardization

*   **Trimming Whitespace:** Removing leading/trailing spaces.
    ```R
    trimmed_string <- trimws("  Hello World  ") # Output: [1] "Hello World"
    ```
*   **Changing Case:**
    ```R
    toupper("dnaSeq") # Output: [1] "DNASEQ"
    tolower("RNASeq") # Output: [1] "rnaseq"
    ```
*   **Removing Specific Characters:** Using `gsub()` with regex.
    ```R
    data_with_errors <- "Sample_1_OK;Sample_2_WARN;Sample_3_ERR"
    gsub("_OK", "", data_with_errors) # Output: [1] "Sample_1;Sample_2_WARN;Sample_3_ERR"
    gsub("_;", "", data_with_errors) # Output: [1] "Sample_1OKSample_2WARN;Sample_3ERR" (Not ideal, better to split first)
    ```

---

## 4. Key Points to Remember

*   **Strings are character vectors in R.**
*   **`paste()` vs. `paste0()`:** `paste()` uses a separator, `paste0()` does not.
*   **`substr()`:** Extracts fixed-length substrings based on start/stop positions.
*   **`grep()` vs. `grepl()`:** `grep()` returns indices/values, `grepl()` returns logical TRUE/FALSE.
*   **`sub()` vs. `gsub()`:** `sub()` replaces the first match, `gsub()` replaces all matches.
*   **Regular Expressions are powerful:** Learn common metacharacters and how to use them in R's string functions.
*   **`strsplit()` returns a list.**
*   **Case sensitivity matters:** Use `tolower()` or `toupper()` for case-insensitive operations if needed.
*   **For bioinformatics, leverage specialized packages (Bioconductor) for efficiency and robustness.** They handle complex formats and operations expertly.

---

## 5. Practice Questions

1.  **Concatenation:** Given a character vector `gene_ids <- c("gene1", "gene2", "gene3")`, create a single string where each gene ID is separated by a comma and a space.
2.  **Substring Extraction:** Extract the first 5 characters from the DNA sequence `dna <- "ACGTACGTACGTACGT"`.
3.  **String Length:** What is the length of the string `"Bioinformatics is cool!"`?
4.  **Simple Replacement:** Replace all occurrences of the character 'T' with 'U' in the DNA sequence `dna <- "ATGCTAGCTAGCTA"`.
5.  **String Splitting:** Split the string `"protein_A;protein_B;protein_C"` by the semicolon character.
6.  **Pattern Matching (grep):** From the following character vector, identify the indices of strings that contain the pattern "AT": `sequences <- c("GATTACA", "ATGC", "TACG", "GCAT")`.
7.  **Pattern Matching (grepl):** From the following character vector, create a logical vector indicating which strings start with the letter 'S': `words <- c("Apple", "Banana", "Strawberry", "Grape", "Orange")`.
8.  **Regex Replacement:** Remove all digits from the string `"Seq_123_XYZ_456"`.
9.  **Regex Matching:** Find all strings in the vector `fasta_headers <- c(">SeqA", ">SeqB_desc", ">SeqC_more_info", ">SeqD")` that start with `>Seq` followed by exactly one character.
10. **Reverse Complement:** Write an R function that takes a DNA sequence (e.g., "ATGCGTAC") and returns its reverse complement.

---

## 6. Answers to Practice Questions

1.  **Concatenation:**
    ```R
    gene_ids <- c("gene1", "gene2", "gene3")
    paste(gene_ids, collapse = ", ")
    # Output: [1] "gene1, gene2, gene3"
    ```
2.  **Substring Extraction:**
    ```R
    dna <- "ACGTACGTACGTACGT"
    substr(dna, start = 1, stop = 5)
    # Output: [1] "ACGTA"
    ```
3.  **String Length:**
    ```R
    nchar("Bioinformatics is cool!")
    # Output: [1] 24
    ```
4.  **Simple Replacement:**
    ```R
    dna <- "ATGCTAGCTAGCTA"
    gsub("T", "U", dna)
    # Output: [1] "AUGCUAGCUAGCUU"
    ```
5.  **String Splitting:**
    ```R
    strsplit("protein_A;protein_B;protein_C", ";")
    # Output:
    # [[1]]
    # [1] "protein_A" "protein_B" "protein_C"
    ```
6.  **Pattern Matching (grep):**
    ```R
    sequences <- c("GATTACA", "ATGC", "TACG", "GCAT")
    grep("AT", sequences)
    # Output: [1] 1 2
    ```
7.  **Pattern Matching (grepl):**
    ```R
    words <- c("Apple", "Banana", "Strawberry", "Grape", "Orange")
    grepl("^S", words)
    # Output: [1] FALSE FALSE  TRUE FALSE FALSE
    ```
8.  **Regex Replacement:**
    ```R
    gsub("[0-9]+", "", "Seq_123_XYZ_456")
    # Output: [1] "Seq__XYZ_"
    # Note: If you want to remove the consecutive underscores as well, you might need a more complex regex or a second step.
    # For example, to remove digits AND leading/trailing/double underscores:
    gsub("[0-9_]+", "_", gsub("[0-9]+", "_", "Seq_123_XYZ_456")) %>% trimws("_") # Example of chaining/refinement
    # A cleaner way for this specific case:
    gsub("[0-9]", "", "Seq_123_XYZ_456") # Removes only digits
    # Output: [1] "Seq__XYZ_"

    # To remove digits and then clean up underscores:
    cleaned_seq <- gsub("[0-9]", "", "Seq_123_XYZ_456")
    gsub("_+", "_", cleaned_seq) # Consolidate multiple underscores
    # Output: [1] "Seq_XYZ_"
    ```
9.  **Regex Matching:**
    ```R
    fasta_headers <- c(">SeqA", ">SeqB_desc", ">SeqC_more_info", ">SeqD")
    grep("^>Seq.{1}$", fasta_headers)
    # Output: [1] 1 4
    # Explanation:
    # ^>Seq : Matches the literal characters ">Seq" at the beginning of the string.
    # .     : Matches any single character.
    # {1}   : Specifies that the preceding character ('.') must occur exactly once.
    # $     : Matches the end of the string.
    ```
10. **Reverse Complement:**
    ```R
    reverse_complement_dna <- function(sequence) {
      sequence <- toupper(sequence) # Ensure uppercase
      bases <- strsplit(sequence, "")[[1]]

      complement_map <- setNames(c("T", "A", "C", "G"), c("A", "T", "G", "C"))

      # Get complement bases and then reverse
      rev_comp_bases <- rev(complement_map[bases])

      # Handle cases where the input might contain non-DNA characters
      # For simplicity here, we assume valid DNA bases.
      # A more robust function would filter or warn about invalid characters.

      return(paste(rev_comp_bases, collapse = ""))
    }

    reverse_complement_dna("ATGCGTAC")
    # Output: [1] "GTACGCAT"

    reverse_complement_dna("gattaca") # Testing case insensitivity
    # Output: [1] "TGTAATC"
