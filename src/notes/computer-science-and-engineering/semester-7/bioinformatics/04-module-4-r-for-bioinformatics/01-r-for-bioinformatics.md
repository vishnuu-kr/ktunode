---
title: "R FOR BIOINFORMATICS"
subject: "BIOINFORMATICS"
module: "Module 4: R FOR BIOINFORMATICS"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c17b"
status: "completed"
scrapedAt: "2026-05-20T17:01:17.200Z"
---
# BIOINFORMATICS: Module 4 - R for Bioinformatics

This module introduces the R programming language and its essential applications in bioinformatics. We will explore R's fundamental data structures, data manipulation techniques, visualization capabilities, and its use in common bioinformatics tasks.

---

## Module Objectives:

Upon successful completion of this module, you will be able to:

*   Understand the basics of the R programming language.
*   Utilize R for fundamental data manipulation and analysis.
*   Create various types of plots and visualizations using R.
*   Apply R to common bioinformatics tasks such as sequence manipulation and functional enrichment analysis.
*   Install and use popular R packages for bioinformatics.

---

## 1. Introduction to R and RStudio

### 1.1 What is R?

*   **Definition:** R is a free and open-source programming language and software environment for statistical computing and graphics.
*   **Key Features:**
    *   Powerful for data analysis, statistical modeling, and visualization.
    *   Vast collection of built-in functions and a massive ecosystem of user-contributed packages.
    *   Cross-platform (Windows, macOS, Linux).
    *   Interpreted language (code is executed line by line).

### 1.2 RStudio: An Integrated Development Environment (IDE)

*   **Definition:** RStudio is a user-friendly IDE that makes working with R much easier. It provides a structured environment for writing code, running it, debugging, and managing projects.
*   **Key Components of RStudio:**
    *   **Source Editor:** Where you write and save your R scripts.
    *   **Console:** Where R commands are executed and output is displayed.
    *   **Environment/History Pane:** Shows currently loaded data, variables, and past commands.
    *   **Files/Plots/Packages/Help Pane:** For managing files, viewing plots, installing/loading packages, and accessing help documentation.

### 1.3 Getting Started with R and RStudio

*   **Installation:**
    *   Download and install R from the official CRAN website (Comprehensive R Archive Network): [https://cran.r-project.org/](https://cran.r-project.org/)
    *   Download and install RStudio Desktop from the RStudio website: [https://posit.co/download/rstudio-desktop/](https://posit.co/download/rstudio-desktop/)
*   **Launching RStudio:** Open RStudio. You'll typically see the Console pane first.
*   **Basic Commands:**
    *   `print("Hello, Bioinformatics!")` - Displays text.
    *   `2 + 2` - Performs arithmetic operations.
    *   `?command` - Opens help documentation for a specific command (e.g., `?print`).
    *   `ls()` - Lists all objects (variables, functions) in the current environment.
    *   `rm(object_name)` - Removes an object from the environment.

---

## 2. R Data Structures

R has several fundamental data structures that are crucial for organizing and manipulating data.

### 2.1 Vectors

*   **Definition:** A one-dimensional array of elements of the same data type.
*   **Data Types:**
    *   **Numeric:** Real numbers (e.g., `10`, `3.14`).
    *   **Integer:** Whole numbers (e.g., `5L`).
    *   **Character (or String):** Text (e.g., `"hello"`).
    *   **Logical:** Boolean values (`TRUE`, `FALSE`).
    *   **Complex:** Complex numbers (e.g., `1+2i`).
*   **Creating Vectors:**
    *   `c()` function: Combines elements into a vector.
    *   `:` operator: Creates a sequence of integers (e.g., `1:5` becomes `1 2 3 4 5`).
    *   `seq()` function: Creates sequences with custom steps or lengths.
    *   `rep()` function: Repeats elements.
*   **Examples:**
    ```R
    # Numeric vector
    temperatures <- c(37.5, 38.1, 37.0, 39.5)

    # Character vector
    gene_names <- c("TP53", "BRCA1", "EGFR")

    # Logical vector
    is_expressed <- c(TRUE, FALSE, TRUE, TRUE)

    # Sequence
    nucleotides <- c("A", "T", "G", "C")
    rna_seq <- paste0(sample(nucleotides, 20, replace = TRUE), collapse = "")
    print(rna_seq)

    # Repetition
    amino_acids <- rep("A", 5)
    print(amino_acids)
    ```
*   **Vector Operations:** R performs element-wise operations on vectors.
    ```R
    x <- c(1, 2, 3)
    y <- c(4, 5, 6)
    print(x + y) # [1] 5 7 9
    print(x * 2) # [1] 2 4 6
    ```
*   **Vector Indexing:** Accessing elements using their position.
    *   `vector[index]`
    *   `vector[c(index1, index2)]` (multiple elements)
    *   `vector[-index]` (exclude element)
    *   `vector[start:end]` (range)
*   **Examples:**
    ```R
    gene_names[1]      # "TP53"
    gene_names[c(1, 3)] # "TP53", "EGFR"
    gene_names[-2]     # "TP53", "EGFR"
    temperatures[2:4]  # 38.1, 37.0, 39.5
    ```

### 2.2 Matrices

*   **Definition:** A two-dimensional array of elements of the same data type. Rows and columns.
*   **Creating Matrices:**
    *   `matrix(data, nrow, ncol, byrow)`: `data` is the vector of elements, `nrow` is the number of rows, `ncol` is the number of columns, `byrow` is a logical value indicating if elements should be filled by row (default is column-wise).
*   **Examples:**
    ```R
    # Matrix filled by column (default)
    data_matrix <- matrix(1:12, nrow = 4, ncol = 3)
    print(data_matrix)

    # Matrix filled by row
    data_matrix_row <- matrix(1:12, nrow = 4, ncol = 3, byrow = TRUE)
    print(data_matrix_row)

    # Assigning row and column names
    rownames(data_matrix) <- c("Gene1", "Gene2", "Gene3", "Gene4")
    colnames(data_matrix) <- c("SampleA", "SampleB", "SampleC")
    print(data_matrix)
    ```
*   **Matrix Indexing:**
    *   `matrix[row_index, column_index]`
    *   `matrix[row_index, ]` (entire row)
    *   `matrix[, column_index]` (entire column)
    *   `matrix[c(row1, row2), c(col1, col2)]` (subset)
*   **Examples:**
    ```R
    data_matrix[2, 3]        # Element in row 2, column 3
    data_matrix[1, ]         # First row
    data_matrix[, "SampleB"] # Column "SampleB"
    data_matrix[c(1, 3), c(1, 2)] # Subset of rows 1 & 3, columns 1 & 2
    ```

### 2.3 Arrays

*   **Definition:** Multi-dimensional generalization of matrices (can have more than two dimensions).
*   **Creating Arrays:**
    *   `array(data, dim)`: `dim` is a vector specifying the dimensions (e.g., `c(rows, columns, depth)`).
*   **Example:**
    ```R
    # Array with 2 matrices of 3x4 dimensions
    my_array <- array(1:24, dim = c(3, 4, 2))
    print(my_array)

    # Accessing elements
    my_array[1, 2, 1] # Element in 1st row, 2nd col, 1st matrix
    ```

### 2.4 Lists

*   **Definition:** A generic vector that can hold elements of different data types and structures (vectors, matrices, other lists, functions, etc.).
*   **Creating Lists:**
    *   `list(name1 = element1, name2 = element2, ...)`
*   **Examples:**
    ```R
    # List containing different data types
    bio_info <- list(
      gene_id = "TP53",
      expression_levels = c(100, 150, 120),
      is_mutated = FALSE,
      parameters = list(threshold = 0.5, method = "logFC")
    )
    print(bio_info)
    ```
*   **List Indexing:**
    *   `list$name` or `list[["name"]]` (access elements by name)
    *   `list[[index]]` (access elements by position)
*   **Examples:**
    ```R
    bio_info$gene_id
    bio_info[["expression_levels"]]
    bio_info[[2]] # Accesses the expression_levels vector
    ```

### 2.5 Data Frames

*   **Definition:** The most common data structure in R for data analysis. It's like a table or spreadsheet where columns can have different data types, but all elements within a column must be of the same type.
*   **Creating Data Frames:**
    *   `data.frame(col1 = vector1, col2 = vector2, ...)`
    *   `read.csv("file.csv")`, `read.table("file.txt")`
*   **Examples:**
    ```R
    # Creating a data frame
    gene_expression_data <- data.frame(
      GeneID = c("TP53", "BRCA1", "EGFR", "MYC"),
      SampleA = c(10.5, 5.2, 8.9, 15.1),
      SampleB = c(12.1, 4.8, 9.5, 14.5),
      SampleC = c(9.8, 5.5, 8.2, 16.0),
      stringsAsFactors = FALSE # Important for text data
    )
    print(gene_expression_data)
    ```
*   **Data Frame Indexing:** Similar to matrices, but can also access columns by name.
    *   `dataframe[row_index, column_index]`
    *   `dataframe$column_name`
    *   `dataframe[["column_name"]]`
    *   `dataframe[row_index, ]`
    *   `dataframe[, column_index]`
*   **Examples:**
    ```R
    gene_expression_data[1, 2]        # Expression of TP53 in SampleA
    gene_expression_data$GeneID       # Get the GeneID column
    gene_expression_data[["SampleB"]] # Get the SampleB column as a data frame
    gene_expression_data[1:2, c("SampleA", "SampleC")] # Subset rows 1-2, cols SampleA & SampleC
    ```
*   **Inspecting Data Frames:**
    *   `head(dataframe)`: Shows the first few rows.
    *   `tail(dataframe)`: Shows the last few rows.
    *   `str(dataframe)`: Shows the structure of the data frame (column types, number of observations).
    *   `summary(dataframe)`: Provides a statistical summary of each column.
    *   `dim(dataframe)`: Returns the dimensions (rows, columns).
    *   `colnames(dataframe)`: Returns the column names.
    *   `rownames(dataframe)`: Returns the row names.

---

## 3. Data Manipulation in R

### 3.1 Basic Operations

*   **Assignment Operator:** `<-` or `=` (assigns values to variables).
*   **Arithmetic Operators:** `+`, `-`, `*`, `/`, `^` (exponentiation), `%%` (modulo), `%/%` (integer division).
*   **Logical Operators:** `==` (equal to), `!=` (not equal to), `>`, `<`, `>=`, `<=`, `!` (not), `&` (and), `|` (or).

### 3.2 Working with Packages: `dplyr` and `tidyr`

These packages, part of the `tidyverse`, provide a powerful and intuitive grammar for data manipulation.

*   **Installation:** `install.packages("tidyverse")`
*   **Loading:** `library(tidyverse)`

#### 3.2.1 `dplyr`: Data Manipulation Verbs

*   `select()`: Select columns.
    ```R
    # Select GeneID and SampleA columns
    gene_expression_data %>%
      select(GeneID, SampleA)
    ```
*   `filter()`: Filter rows based on conditions.
    ```R
    # Filter genes with expression > 10 in SampleA
    gene_expression_data %>%
      filter(SampleA > 10)
    ```
*   `mutate()`: Create new columns or modify existing ones.
    ```R
    # Calculate average expression across samples
    gene_expression_data %>%
      mutate(AverageExpression = (SampleA + SampleB + SampleC) / 3)
    ```
*   `arrange()`: Sort rows.
    ```R
    # Sort by SampleB expression in descending order
    gene_expression_data %>%
      arrange(desc(SampleB))
    ```
*   `summarise()` (or `summarize()`): Summarize data using aggregation functions (e.g., `mean()`, `median()`, `sd()`, `min()`, `max()`, `n()`). Often used with `group_by()`.
    ```R
    # Calculate average expression for each gene
    gene_expression_data %>%
      rowwise() %>% # Apply function to each row
      mutate(AverageExpression = mean(c(SampleA, SampleB, SampleC))) %>%
      select(GeneID, AverageExpression)
    ```
    *   **`group_by()` and `summarise()`:** For grouped summaries.
        ```R
        # Example with a longer dataset (imagine more genes and samples)
        # group by gene and calculate mean expression across all samples for that gene
        # (requires reshaping the data first, see tidyr)
        ```
*   `%>%` (Pipe Operator): Passes the output of the left-hand side as the first argument to the function on the right-hand side. Makes code more readable.

#### 3.2.2 `tidyr`: Data Tidying

*   `gather()`: Converts data from wide format to long format (e.g., one row per observation per gene).
    *   `gather(key = "Sample", value = "Expression", SampleA:SampleC)`
*   `spread()`: Converts data from long format to wide format.
    *   `spread(key = "Sample", value = "Expression")`
*   `separate()`: Splits one column into multiple columns.
*   `unite()`: Joins multiple columns into one.

*   **Example of Tidying:**
    ```R
    # Convert gene_expression_data to long format
    gene_expression_long <- gene_expression_data %>%
      gather(key = "Sample", value = "Expression", SampleA:SampleC)
    print(gene_expression_long)

    # Now we can easily calculate average expression per gene using dplyr
    gene_expression_long %>%
      group_by(GeneID) %>%
      summarise(AverageExpression = mean(Expression))
    ```

### 3.3 Data Loading and Saving

*   **Reading Data:**
    *   `read.csv("path/to/your/file.csv")`
    *   `read.delim("path/to/your/file.txt")` (for tab-separated files)
    *   `read.table("path/to/your/file.txt", header = TRUE, sep = "\t")` (more general)
*   **Writing Data:**
    *   `write.csv(your_dataframe, "path/to/save/file.csv", row.names = FALSE)`
    *   `write.table(your_dataframe, "path/to/save/file.txt", sep = "\t", row.names = FALSE)`

---

## 4. Data Visualization in R

R excels at creating static and interactive plots.

### 4.1 Base R Plotting

*   **`plot()` function:** Versatile for creating scatter plots, line plots, etc.
    ```R
    # Scatter plot of expression in SampleA vs SampleB
    plot(gene_expression_data$SampleA, gene_expression_data$SampleB,
         xlab = "Sample A Expression", ylab = "Sample B Expression",
         main = "Sample A vs Sample B Expression")
    abline(0, 1, col = "red", lty = 2) # Add y=x line for reference
    ```
*   **`hist()`:** Histograms.
    ```R
    hist(gene_expression_data$SampleA, main = "Distribution of Sample A Expression", xlab = "Expression")
    ```
*   **`boxplot()`:** Box plots.
    ```R
    boxplot(gene_expression_data[, c("SampleA", "SampleB", "SampleC")],
            main = "Expression Levels Across Samples", ylab = "Expression")
    ```
*   **`barplot()`:** Bar plots.
*   **`pairs()`:** Matrix of scatter plots for multiple variables.

### 4.2 `ggplot2` Package (Part of `tidyverse`)

`ggplot2` uses the "Grammar of Graphics" to build complex plots layer by layer. It's highly flexible and produces aesthetically pleasing plots.

*   **Installation & Loading:** `install.packages("ggplot2")`, `library(ggplot2)`
*   **Core Components:**
    *   **Data:** The data frame containing your data.
    *   **Aesthetics (`aes()`):** Maps variables in your data to visual properties (e.g., x-axis, y-axis, color, size).
    *   **Geometries (`geom_...()`):** The visual elements used to represent data (e.g., points, lines, bars).
    *   **Facets:** Used to create subplots based on categorical variables.
    *   **Stats:** Statistical transformations applied to data.
    *   **Coordinates:** Coordinate systems.
    *   **Theme:** Controls the non-data elements of the plot (e.g., background, gridlines).

*   **Basic `ggplot2` Structure:**
    ```R
    ggplot(data = <DATA_FRAME>, aes(x = <X_VARIABLE>, y = <Y_VARIABLE>)) +
      geom_<GEOMETRY>() +
      labs(title = "...", x = "...", y = "...") +
      theme_minimal() # Or other themes
    ```

*   **Examples:**
    ```R
    # Scatter plot of SampleA vs SampleB
    ggplot(gene_expression_data, aes(x = SampleA, y = SampleB)) +
      geom_point() +
      labs(title = "Sample A vs Sample B Expression",
           x = "Sample A Expression",
           y = "Sample B Expression") +
      theme_minimal()

    # Scatter plot with color based on GeneID
    ggplot(gene_expression_data, aes(x = SampleA, y = SampleB, color = GeneID)) +
      geom_point(size = 3) + # Larger points
      labs(title = "Sample A vs Sample B Expression by Gene",
           x = "Sample A Expression",
           y = "Sample B Expression",
           color = "Gene") +
      theme_bw() # Black and white theme

    # Box plot of expression across samples
    ggplot(gene_expression_long, aes(x = Sample, y = Expression, fill = Sample)) +
      geom_boxplot() +
      labs(title = "Expression Levels Across Samples",
           x = "Sample",
           y = "Expression") +
      theme_classic()

    # Bar plot of average expression per gene (using the tidied data)
    avg_expression_per_gene <- gene_expression_long %>%
      group_by(GeneID) %>%
      summarise(AverageExpression = mean(Expression))

    ggplot(avg_expression_per_gene, aes(x = GeneID, y = AverageExpression, fill = GeneID)) +
      geom_bar(stat = "identity") + # 'identity' means use the y-value as is
      labs(title = "Average Gene Expression",
           x = "Gene",
           y = "Average Expression") +
      theme(axis.text.x = element_text(angle = 45, hjust = 1)) # Rotate labels if needed
    ```

### 4.3 Common Plot Types in Bioinformatics

*   **Volcano Plots:** Visualize differential gene expression (log2 fold change vs. -log10 p-value).
*   **Heatmaps:** Visualize gene expression patterns across samples.
*   **Manhattan Plots:** Visualize genome-wide association study (GWAS) results.
*   **PCA Plots:** Visualize dimensionality reduction of gene expression data.

---

## 5. R Packages for Bioinformatics

R has a rich ecosystem of packages tailored for bioinformatics.

### 5.1 Popular Packages

*   **`Biostrings` (Bioconductor):** For manipulating DNA, RNA, and protein sequences.
*   **`GenomicRanges` (Bioconductor):** For representing and manipulating genomic intervals.
*   **`DESeq2` / `edgeR`:** For differential gene expression analysis of RNA-Seq data.
*   **`limma`:** For differential expression analysis and microarrays.
*   **`clusterProfiler`:** For functional enrichment analysis (GO, KEGG).
*   **`ggplot2` / `ggrepel`:** For advanced visualization.
*   **`RCy3`:** For interacting with Cytoscape for network visualization.
*   **`seqinr`:** For basic sequence analysis.
*   **`rtracklayer`:** For importing and exporting genomic data formats (e.g., BED, GFF).

### 5.2 Installing Bioconductor Packages

Bioconductor packages are not installed via `install.packages()`. You need to use the `BiocManager` package.

```R
# Install BiocManager if you haven't already
if (!requireNamespace("BiocManager", quietly = TRUE))
    install.packages("BiocManager")

# Install a Bioconductor package (e.g., DESeq2)
BiocManager::install("DESeq2")

# Load the package
library(DESeq2)
```

### 5.3 Example: Sequence Manipulation with `Biostrings`

```R
# Install and load Biostrings
# BiocManager::install("Biostrings")
library(Biostrings)

# Create DNA sequences
dna1 <- DNAString("ATGCGTACGTACGTACG")
dna2 <- DNAString("TACGTACGTAGCTAGCT")

# Sequence alignment (simple example)
# A more robust alignment would use functions like pairwiseAlignment
align <- pairwiseAlignment(dna1, dna2, type="global")
print(align)

# DNA to RNA
rna1 <- RNAString(dna1)
print(rna1)

# Reverse Complement
rev_comp_dna1 <- reverseComplement(dna1)
print(rev_comp_dna1)

# GC Content
gc_content <- GC(dna1)
print(paste("GC content:", gc_content, "%"))

# Subsequences
sub_dna <- subseq(dna1, start = 5, end = 10)
print(sub_dna)
```

### 5.4 Example: Functional Enrichment Analysis with `clusterProfiler`

This is a conceptual example; real analysis requires pre-defined gene lists and relevant databases.

```R
# Install and load clusterProfiler
# BiocManager::install("clusterProfiler")
# BiocManager::install("org.Hs.eg.db") # For human gene annotations
library(clusterProfiler)
library(org.Hs.eg.db)

# Assume 'my_gene_list' is a vector of gene symbols or IDs
# For demonstration, let's create a dummy list
my_gene_list <- c("TP53", "BRCA1", "EGFR", "MYC", "KRAS", "PIK3CA")

# Perform Gene Ontology (GO) enrichment analysis
# First, convert gene symbols to Entrez IDs (if needed)
entrez_ids <- bitr(my_gene_list, fromType="SYMBOL", toType="ENTREZID", OrgDb="org.Hs.eg.db")

# Run GO enrichment
# Use 'BP' for Biological Process, 'MF' for Molecular Function, 'CC' for Cellular Component
go_enrich <- enrichGO(gene          = entrez_ids$ENTREZID,
                      OrgDb         = org.Hs.eg.db,
                      keyType       = 'ENTREZID',
                      ont           = "BP",
                      pAdjustMethod = "BH",
                      qvalueCutoff  = 0.05,
                      readable      = TRUE) # Make output gene symbols readable

# View results
head(go_enrich)

# Plot results (e.g., dotplot)
if (!is.null(go_enrich)) {
  dotplot(go_enrich, showCategory=10) + ggtitle("GO Enrichment Analysis (Biological Process)")
}
```

---

## 6. Key Concepts and Important Points to Remember

*   **Case Sensitivity:** R is case-sensitive. `gene` is different from `Gene`.
*   **Comments:** Use `#` to add comments to your code.
*   **Environment:** Objects you create (variables, data frames) live in your R environment. Use `ls()` to see them and `rm()` to remove them.
*   **Packages:** Extend R's functionality. Install with `install.packages()` (CRAN) or `BiocManager::install()` (Bioconductor) and load with `library()`.
*   **Data Structures:** Understand vectors, matrices, lists, and data frames. Data frames are crucial for tabular data.
*   **Vectorization:** R is highly vectorized. Operations are applied element-wise to vectors, making code efficient. Avoid explicit loops where possible.
*   **Tidy Data:** Data organized such that each variable is a column, each observation is a row, and each type of observational unit is a table. `tidyr` helps achieve this.
*   **`ggplot2` Grammar:** Think about data, aesthetics, and geometric objects to build plots.
*   **`%>%` (Pipe):** Enhances code readability by chaining operations.
*   **Bioconductor:** A repository of R packages for the analysis of genomic data.
*   **Help System:** `?function_name` is your best friend for understanding functions.

---

## 7. Practice Questions and Exercises

**Exercise 1: R Basics and Data Structures**

1.  Create a numeric vector named `gene_lengths` containing the values `1500, 2100, 850, 4500`.
2.  Create a character vector named `gene_names` containing `"TP53", "BRCA1", "EGFR", "MYC"`.
3.  Combine these two vectors into a list called `gene_info`.
4.  Create a data frame `gene_data` with `GeneName` (from `gene_names`) and `Length` (from `gene_lengths`) as columns.
5.  Print the second gene's name from the `gene_names` vector.
6.  Print the length of the third gene from the `gene_data` data frame using `$` notation.

**Exercise 2: Data Manipulation with `dplyr`**

Using the `gene_data` data frame created in Exercise 1 (assume it has an additional column `Expression` with values `10.5, 5.2, 8.9, 15.1`):

1.  Add a new column `Length_kb` which is `Length` divided by 1000.
2.  Filter the data frame to show only genes with `Length` greater than 1000.
3.  Select only the `GeneName` and `Length_kb` columns.

**Exercise 3: Data Visualization with `ggplot2`**

1.  Using the `gene_data` data frame (with the `Expression` column added), create a scatter plot of `Length` (x-axis) vs `Expression` (y-axis).
2.  Modify the scatter plot to color the points by `GeneName`.
3.  Create a histogram of the `Expression` column.

**Exercise 4: Bioconductor Package (Conceptual)**

Imagine you have a list of differentially expressed genes from an RNA-Seq experiment. Which Bioconductor package would you likely use for differential expression analysis? Briefly explain why.

---

## Answers to Practice Questions

**Exercise 1: R Basics and Data Structures**

```R
# 1.
gene_lengths <- c(1500, 2100, 850, 4500)

# 2.
gene_names <- c("TP53", "BRCA1", "EGFR", "MYC")

# 3.
gene_info <- list(GeneNames = gene_names, GeneLengths = gene_lengths)
print(gene_info)

# 4.
gene_data <- data.frame(
  GeneName = gene_names,
  Length = gene_lengths,
  stringsAsFactors = FALSE
)
print(gene_data)

# 5.
print(gene_names[2]) # Or print(gene_info$GeneNames[2])

# 6.
print(gene_data$Length[3]) # Or print(gene_data[3, "Length"])
```

**Exercise 2: Data Manipulation with `dplyr`**

```R
# Assuming gene_data from Exercise 1, and adding Expression column:
gene_data$Expression <- c(10.5, 5.2, 8.9, 15.1)

library(dplyr)

# 1. Add Length_kb
gene_data_modified <- gene_data %>%
  mutate(Length_kb = Length / 1000)
print(gene_data_modified)

# 2. Filter for Length > 1000
filtered_genes <- gene_data_modified %>%
  filter(Length > 1000)
print(filtered_genes)

# 3. Select specific columns
selected_columns <- gene_data_modified %>%
  select(GeneName, Length_kb)
print(selected_columns)
```

**Exercise 3: Data Visualization with `ggplot2`**

```R
library(ggplot2)

# 1. Scatter plot of Length vs Expression
ggplot(gene_data, aes(x = Length, y = Expression)) +
  geom_point() +
  labs(title = "Gene Length vs. Expression", x = "Gene Length (bp)", y = "Expression Level") +
  theme_minimal()

# 2. Scatter plot with color by GeneName
ggplot(gene_data, aes(x = Length, y = Expression, color = GeneName)) +
  geom_point(size = 3) +
  labs(title = "Gene Length vs. Expression (Colored by Gene)", x = "Gene Length (bp)", y = "Expression Level", color = "Gene") +
  theme_bw()

# 3. Histogram of Expression
ggplot(gene_data, aes(x = Expression)) +
  geom_histogram(binwidth = 2, fill = "skyblue", color = "black") + # Adjust binwidth as needed
  labs(title = "Distribution of Gene Expression", x = "Expression Level", y = "Frequency") +
  theme_classic()
```

**Exercise 4: Bioconductor Package (Conceptual)**

For differential gene expression analysis of RNA-Seq data, you would likely use packages like **`DESeq2`** or **`edgeR`**. These packages are specifically designed to handle the count-based nature of RNA-Seq data, account for library size differences and technical variability, and perform robust statistical tests to identify genes that are significantly up- or down-regulated between experimental conditions.
