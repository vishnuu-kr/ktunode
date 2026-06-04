---
title: "lists and hashes"
subject: "BIOINFORMATICS"
module: "Module 4: R FOR BIOINFORMATICS"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c182"
status: "completed"
scrapedAt: "2026-05-20T17:01:22.245Z"
---
# Bioinformatics: Module 4 - R for Bioinformatics: Lists and Hashes

This module introduces fundamental data structures in R, specifically **lists** and **hashes** (often referred to as **named vectors** or **associative arrays** in R, with lists being the primary structure for this concept). Understanding these structures is crucial for organizing and manipulating complex biological data efficiently in R.

---

## Learning Outcomes Covered:

*   **Understanding and utilizing lists for organizing diverse data types.**
*   **Creating and manipulating lists in R.**
*   **Accessing elements within lists.**
*   **Understanding the concept of named vectors (hash-like behavior) in R.**
*   **Applying lists and named vectors to common bioinformatics tasks.**

---

## 1. Lists: The Versatile Data Structure

### Key Concepts & Definitions:

*   **List:** A fundamental R data structure that can hold elements of *different data types* and *different lengths*. Think of it as a collection of R objects (vectors, matrices, data frames, other lists, functions, etc.).
*   **Heterogeneous:** Lists are heterogeneous, meaning they can contain a mix of data types (numeric, character, logical, etc.).
*   **Elements:** Each item within a list is called an element.
*   **Named Elements:** List elements can be named, which greatly improves readability and allows for access by name.

### Creating Lists:

*   The `list()` function is used to create lists.
*   Elements can be created inline or assigned from existing R objects.

#### Examples:

**Example 1: Creating a simple list with different data types**

```R
# Creating a list with a character vector, a numeric vector, and a logical value
my_list <- list(
  gene_names = c("BRCA1", "TP53", "EGFR"),
  expression_levels = c(10.5, 25.2, 15.8),
  is_oncogene = c(TRUE, TRUE, FALSE)
)

# Printing the list
print(my_list)
```

**Output:**

```
$gene_names
[1] "BRCA1" "TP53"  "EGFR" 

$expression_levels
[1] 10.5 25.2 15.8

$is_oncogene
[1]  TRUE  TRUE FALSE
```

**Example 2: Creating a list containing other R objects**

```R
# A list containing a vector, a matrix, and another list
complex_list <- list(
  samples = c("SampleA", "SampleB", "SampleC"),
  gene_matrix = matrix(rnorm(9), nrow = 3, dimnames = list(c("G1", "G2", "G3"), c("S1", "S2", "S3"))),
  annotation = list(
    species = "Human",
    tissue = "Brain"
  )
)

print(complex_list)
```

**Output (will vary due to `rnorm`):**

```
$samples
[1] "SampleA" "SampleB" "SampleC"

$gene_matrix
          S1        S2        S3
G1 -0.5604756 -0.2301515  1.5587083
G2  0.0705084  0.1292877 -0.4481996
G3  1.7150650  1.4265276  0.3071323

$annotation
$annotation$species
[1] "Human"

$annotation$tissue
[1] "Brain"
```

### Accessing Elements within Lists:

*   **Double Brackets `[[ ]]`:** Used to extract a *single element* from a list. You can use the index number or the name of the element. This is the preferred method for extracting a single element as it returns the element itself, not a list containing the element.
*   **Single Brackets `[ ]`:** Used to extract *one or more elements* from a list. It always returns a *list* containing the selected elements.
*   **Dollar Sign `$`:** Used to access a *named element* by its name. This is often the most readable way to access elements.

#### Examples:

Using `my_list` from Example 1:

```R
# Accessing by index number (returns a list with the element)
element_1_list <- my_list[1]
print(element_1_list)

# Accessing by index number (returns the element itself)
element_1_single <- my_list[[1]]
print(element_1_single)
print(class(element_1_single)) # Shows it's a character vector

# Accessing by name using $
gene_names <- my_list$gene_names
print(gene_names)

# Accessing by name using [[ ]]
expression_levels <- my_list[["expression_levels"]]
print(expression_levels)

# Accessing multiple elements using [ ]
selected_elements <- my_list[c("gene_names", "is_oncogene")]
print(selected_elements)
```

**Output:**

```
$gene_names
[1] "BRCA1" "TP53"  "EGFR" 

# This is the preferred way to get the element itself
[1] "BRCA1" "TP53"  "EGFR" 
[1] "character"
[1] "BRCA1" "TP53"  "EGFR" 
[1] 10.5 25.2 15.8
$gene_names
[1] "BRCA1" "TP53"  "EGFR" 

$is_oncogene
[1]  TRUE  TRUE FALSE
```

### Modifying Lists:

*   You can assign new values to existing elements or add new named elements.

#### Examples:

```R
# Add a new element
my_list$chromosome <- c(17, 17, 7)
print(my_list)

# Modify an existing element
my_list$expression_levels[2] <- 30.0
print(my_list)
```

**Output:**

```
$gene_names
[1] "BRCA1" "TP53"  "EGFR" 

$expression_levels
[1] 10.5 25.2 15.8

$is_oncogene
[1]  TRUE  TRUE FALSE

$chromosome
[1] 17 17  7

$gene_names
[1] "BRCA1" "TP53"  "EGFR" 

$expression_levels
[1] 10.5 30.0 15.8

$is_oncogene
[1]  TRUE  TRUE FALSE

$chromosome
[1] 17 17  7
```

### Iterating through Lists:

*   Commonly done using `lapply()` and `sapply()`.
    *   `lapply()` applies a function to each element of a list and returns a list.
    *   `sapply()` is similar to `lapply()` but tries to simplify the output to a vector or matrix if possible.

#### Examples:

```R
# Calculate the length of each character vector in my_list (if it were longer)
# Here, we'll just demonstrate the principle with the gene names
lengths_list <- lapply(my_list, length)
print(lengths_list)

# Convert expression levels to log2
log_expression <- lapply(my_list$expression_levels, log2)
print(log_expression)

# Using sapply to get a vector output for log expression
log_expression_sapply <- sapply(my_list$expression_levels, log2)
print(log_expression_sapply)
print(class(log_expression_sapply))
```

**Output:**

```
$gene_names
[1] 3

$expression_levels
[1] 3

$is_oncogene
[1] 3

$chromosome
[1] 3

# This will be a list of list elements, which is not very useful here as the elements are not vectors of different lengths
[[1]]
[1] 3.392317

[[2]]
[1] 4.653967

[[3]]
[1] 4.005755

[1] 3.392317 4.653967 4.005755
[1] "numeric"
```

---

## 2. Hashes (Named Vectors / Associative Arrays in R)

### Key Concepts & Definitions:

*   **Hash/Associative Array:** A data structure that stores key-value pairs. You use a "key" (which is usually a string) to look up an associated "value".
*   **Named Vectors in R:** While R doesn't have a direct "hash" data type like Python dictionaries, **named vectors** serve a very similar purpose. A named vector is simply a vector where each element has an associated name.
*   **`named_vector <- c("key1" = value1, "key2" = value2, ...)`:** This is how you create a named vector.
*   **Lists as "hash-like" structures:** Importantly, **lists with named elements** can also be used in a hash-like manner, where the names act as keys. This is often more powerful than named vectors because lists can hold values of different types.

### Creating Named Vectors:

*   Directly assign names during vector creation.

#### Examples:

**Example 1: Simple named vector**

```R
# A named vector mapping gene IDs to their common names
gene_mapping <- c(
  "ENSG00000139618" = "TP53",
  "ENSG00000126714" = "BRCA1",
  "ENSG00000146647" = "EGFR"
)

print(gene_mapping)
```

**Output:**

```
ENSG00000139618 ENSG00000126714 ENSG00000146647 
           "TP53"           "BRCA1"           "EGFR" 
```

**Example 2: Using a named vector to store gene expression summary statistics**

```R
gene_expression_stats <- c(
  "mean_expression" = 22.5,
  "median_expression" = 18.0,
  "std_dev" = 5.1,
  "is_highly_expressed" = TRUE
)

print(gene_expression_stats)
```

**Output:**

```
    mean_expression   median_expression             std_dev is_highly_expressed 
           22.50000            18.00000             5.10000             1.00000 
```
*(Note: `TRUE` is coerced to `1` in a numeric context)*

### Accessing Elements in Named Vectors:

*   Access is similar to lists: use the `$` operator or double brackets `[[ ]]` with the name.

#### Examples:

Using `gene_mapping`:

```R
# Accessing by name using $
tp53_name <- gene_mapping$ENSG00000139618
print(tp53_name)

# Accessing by name using [[ ]]
brca1_name <- gene_mapping[["ENSG00000126714"]]
print(brca1_name)
```

**Output:**

```
[1] "TP53"
[1] "BRCA1"
```

### When to Use Lists vs. Named Vectors:

*   **Named Vectors:** Ideal for storing a collection of values of the *same data type*, where you need to associate a string label (key) with each value. Think of mapping IDs to names, or storing simple configurations.
*   **Lists (with named elements):** More powerful and flexible. Use them when you need to store a collection of values that can be of *different data types* or *different structures* (vectors, matrices, other lists) under named keys. This is often the case for representing complex biological records or experiment parameters.

---

## 3. Applying Lists and Named Vectors to Bioinformatics Tasks

### Key Concepts & Definitions:

*   **Data Organization:** Crucial for managing outputs from different analyses (e.g., gene lists, expression matrices, variant calls).
*   **Configuration Files:** Storing parameters for scripts or analyses.
*   **Experimental Metadata:** Keeping track of sample information, experimental conditions, etc.
*   **Complex Data Structures:** Representing hierarchical biological data (e.g., gene annotations with multiple attributes).

### Examples:

**Example 1: Storing results of a differential gene expression analysis**

```R
diff_expression_results <- list(
  up_regulated_genes = c("GENE1", "GENE5", "GENE10"),
  down_regulated_genes = c("GENE2", "GENE7"),
  logFC = c(2.5, 3.1, 1.9, -2.1, -1.5), # Note: Order matters for alignment
  p_values = c(0.001, 0.005, 0.01, 0.008, 0.015)
)

# Accessing up-regulated genes
print(diff_expression_results$up_regulated_genes)

# Accessing p-values
print(diff_expression_results[["p_values"]])

# Combining gene names and their logFC (assuming alignment)
# This is where you might need to be careful with order or use a data frame
gene_logfc <- setNames(diff_expression_results$logFC, diff_expression_results$up_regulated_genes)
print(gene_logfc)
```

**Output:**

```
[1] "GENE1"  "GENE5"  "GENE10"
[1] 0.001 0.005 0.010 0.008 0.015
GENE1  GENE5 GENE10 
  2.5    3.1    1.9 
```

**Example 2: Representing sample metadata**

```R
sample_metadata <- list(
  sample_id = c("S1", "S2", "S3"),
  treatment_group = c("Control", "Treated", "Treated"),
  age_years = c(45, 62, 55),
  tissue_type = c("Liver", "Brain", "Liver")
)

# Accessing treatment group for sample 2
print(sample_metadata$treatment_group[2])

# Finding samples from Liver tissue
liver_samples <- sample_metadata$sample_id[sample_metadata$tissue_type == "Liver"]
print(liver_samples)
```

**Output:**

```
[1] "Treated"
[1] "S1" "S3"
```

---

## Practice Questions & Exercises

**Question 1:**
Create a list named `protein_info` that stores:
*   A character vector named `protein_names` containing "Actin", "Myosin", "Tubulin".
*   A numeric vector named `molecular_weight` containing `42`, `220`, `50`.
*   A logical vector named `is_cytoskeletal` containing `TRUE`, `TRUE`, `TRUE`.

**Question 2:**
From the `protein_info` list created in Question 1, access and print:
a) Only the `protein_names`.
b) The molecular weight of "Myosin".
c) A new list containing only "Myosin" and "Tubulin" and their `is_cytoskeletal` status.

**Question 3:**
Create a named vector called `gene_aliases` where the keys are gene symbols ("TP53", "BRCA1", "EGFR") and the values are their full names ("Tumor Protein p53", "Breast Cancer Gene 1", "Epidermal Growth Factor Receptor").

**Question 4:**
Using the `gene_aliases` named vector, retrieve the full name for "BRCA1".

**Question 5:**
Imagine you're analyzing RNA-Seq data. Create a list called `rnaseq_results` containing:
*   `counts`: A matrix of raw gene counts (you can simulate this with random numbers, e.g., `matrix(sample(10:1000, 100), nrow = 10, dimnames = list(paste0("Gene", 1:10), paste0("Sample", 1:10)))`).
*   `genes_of_interest`: A character vector of 5 gene IDs.
*   `parameters`: Another list containing `normalization_method = "TPM"` and `min_reads_per_gene = 50`.

**Question 6 (Bonus):**
From the `rnaseq_results` list, extract the `counts` matrix. Then, create a named vector from the first column of the `counts` matrix, where the names are the gene IDs and the values are the raw counts for "Sample1".

---

## Answers to Practice Questions

**Answer 1:**

```R
protein_info <- list(
  protein_names = c("Actin", "Myosin", "Tubulin"),
  molecular_weight = c(42, 220, 50),
  is_cytoskeletal = c(TRUE, TRUE, TRUE)
)
print(protein_info)
```

**Answer 2:**

a)
```R
print(protein_info$protein_names)
# OR
print(protein_info[["protein_names"]])
```

b)
```R
print(protein_info$molecular_weight[2])
# OR
print(protein_info$molecular_weight[protein_info$protein_names == "Myosin"])
# OR
print(protein_info[["molecular_weight"]][2])
```

c)
```R
selected_protein_data <- protein_info[c("protein_names", "is_cytoskeletal")]
print(selected_protein_data[c(2, 3)]) # Select only Myosin and Tubulin rows from the inner vectors
# A more robust way to select specific elements if they were not in the same position:
# You would need to find the index of Myosin and Tubulin first.
# For simplicity here, assuming index 2 for Myosin and 3 for Tubulin:
selected_protein_data_specific <- list(
  protein_names = protein_info$protein_names[c(2, 3)],
  is_cytoskeletal = protein_info$is_cytoskeletal[c(2, 3)]
)
print(selected_protein_data_specific)
```

**Answer 3:**

```R
gene_aliases <- c(
  "TP53" = "Tumor Protein p53",
  "BRCA1" = "Breast Cancer Gene 1",
  "EGFR" = "Epidermal Growth Factor Receptor"
)
print(gene_aliases)
```

**Answer 4:**

```R
print(gene_aliases["BRCA1"])
# OR
print(gene_aliases[["BRCA1"]])
```

**Answer 5:**

```R
# Simulating counts matrix
set.seed(123) # for reproducibility
rnaseq_results <- list(
  counts = matrix(sample(10:1000, 100), nrow = 10, dimnames = list(paste0("Gene", 1:10), paste0("Sample", 1:10))),
  genes_of_interest = c("Gene1", "Gene3", "Gene5", "Gene7", "Gene9"),
  parameters = list(
    normalization_method = "TPM",
    min_reads_per_gene = 50
  )
)
print(rnaseq_results)
```

**Answer 6:**

```R
# Extract the counts matrix
raw_counts_matrix <- rnaseq_results$counts

# Create a named vector from the first column (Sample1)
# Get gene names
gene_names_for_sample1 <- rownames(raw_counts_matrix)

# Get counts for Sample1
counts_for_sample1 <- raw_counts_matrix[, "Sample1"]

# Create the named vector
sample1_counts_named <- setNames(counts_for_sample1, gene_names_for_sample1)

print(sample1_counts_named)
```

---

## Important Points to Remember:

*   **Lists are extremely flexible:** They can hold anything! This makes them powerful for organizing diverse bioinformatics data.
*   **`[[ ]]` vs. `[ ]` for lists:** `[[ ]]` extracts a single element as its original type. `[ ]` extracts a subset of elements and always returns a list.
*   **`$` is syntactic sugar for `[[ ]]` for named elements:** Use it for clarity when accessing named list elements.
*   **Named vectors are essentially single-type lists with string names:** Useful for simpler key-value mappings.
*   **Use names to make your code readable and understandable.**
*   **Be mindful of element order** when using `lapply`/`sapply` or when combining data from different list components. If order is critical, consider using `data.frame` or `tibble` instead of lists for tabular data.
