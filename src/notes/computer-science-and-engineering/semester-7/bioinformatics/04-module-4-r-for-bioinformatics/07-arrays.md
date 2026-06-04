---
title: "arrays"
subject: "BIOINFORMATICS"
module: "Module 4: R FOR BIOINFORMATICS"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c181"
status: "completed"
scrapedAt: "2026-05-20T17:01:21.542Z"
---
# BIOINFORMATICS: Module 4: R FOR BIOINFORMATICS - Arrays

## Introduction to Arrays in R

Arrays are fundamental data structures in R used to store elements of the same data type in multiple dimensions. While vectors store elements in one dimension and matrices in two dimensions, arrays can extend to three or more dimensions. In bioinformatics, arrays are useful for organizing and manipulating complex datasets like gene expression matrices across multiple samples and conditions, or image data from microscopy.

---

## Learning Outcomes

By the end of this module, you will be able to:

*   **Understand the concept of arrays in R and their utility in bioinformatics.**
*   **Create arrays in R with specified dimensions and elements.**
*   **Access and manipulate elements within arrays using indexing.**
*   **Perform operations on arrays, including element-wise calculations and aggregation.**
*   **Reshape and combine arrays.**
*   **Apply array concepts to basic bioinformatics data handling scenarios.**

---

## 1. Creating Arrays in R

### 1.1 The `array()` function

The primary function for creating arrays in R is `array()`. It takes a vector of elements and arguments to define the dimensions.

**Syntax:**

```R
array(data = NULL, dim = NULL, dimnames = NULL)
```

*   `data`: A vector containing the elements to be stored in the array.
*   `dim`: A vector of integers specifying the dimensions of the array. For example, `c(rows, columns, depth)` for a 3D array.
*   `dimnames`: A list of character vectors, where each vector contains the names for the dimensions.

### 1.2 Examples of Creating Arrays

**Example 1: A 2D array (similar to a matrix but explicitly created as an array)**

```R
# Create a vector of numbers
my_vector <- 1:12

# Create a 2D array with 3 rows and 4 columns
my_2d_array <- array(my_vector, dim = c(3, 4))
print(my_2d_array)
```

**Output:**

```
     [,1] [,2] [,3] [,4]
[1,]    1    4    7   10
[2,]    2    5    8   11
[3,]    3    6    9   12
```

**Explanation:** The `array()` function fills the array column-wise by default when creating a 2D structure.

**Example 2: A 3D array**

```R
# Create a vector of characters
my_char_vector <- LETTERS[1:24]

# Create a 3D array with 2 "pages" (dimension 3), each having 3 rows and 4 columns
my_3d_array <- array(my_char_vector, dim = c(3, 4, 2))
print(my_3d_array)
```

**Output:**

```
, , 1

     [,1] [,2] [,3] [,4]
[1,] "A"  "D"  "G"  "J"
[2,] "B"  "E"  "H"  "K"
[3,] "C"  "F"  "I"  "L"

, , 2

     [,1] [,2] [,3] [,4]
[1,] "M"  "P"  "S"  "V"
[2,] "N"  "Q"  "T"  "W"
[3,] "O"  "R"  "U"  "X"
```

**Explanation:** The array is structured into "pages" or "layers" based on the third dimension.

**Example 3: Creating an array with dimension names**

```R
# Create a 3D array with named dimensions
gene_expression_data <- array(
  rnorm(72), # Simulate 72 random gene expression values
  dim = c(6, 4, 3), # 6 genes, 4 samples, 3 conditions
  dimnames = list(
    genes = paste("Gene", 1:6, sep = "_"),
    samples = paste("Sample", 1:4, sep = "_"),
    conditions = paste("Cond", 1:3, sep = "_")
  )
)
print(gene_expression_data)
```

**Key Concept:** `dimnames` allow for more descriptive access to array elements, making your code more readable and less error-prone.

---

## 2. Accessing and Manipulating Array Elements

Arrays can be accessed using indexing, similar to vectors and matrices, but with an index for each dimension.

### 2.1 Indexing Arrays

**Syntax:**

```R
array_name[index_dim1, index_dim2, ..., index_dimN]
```

*   `index_dim1`: Index for the first dimension.
*   `index_dim2`: Index for the second dimension.
*   ...
*   `index_dimN`: Index for the Nth dimension.

If an index is omitted, all elements along that dimension are selected.

### 2.2 Examples of Indexing Arrays

**Example 1: Accessing a specific element**

```R
# From gene_expression_data (created above)
# Get the expression value for Gene_3 in Sample_2 under Cond_1
gene_expression_data["Gene_3", "Sample_2", "Cond_1"]

# Using numerical indices (remembering R's 1-based indexing)
gene_expression_data[3, 2, 1]
```

**Example 2: Accessing a row, column, or "page"**

```R
# Get all expression values for Gene_5 across all samples and conditions
gene_expression_data["Gene_5", , ]

# Get all expression values for Sample_3 in Cond_2 across all genes
gene_expression_data[, "Sample_3", "Cond_2"]

# Get the entire "page" for Cond_3
gene_expression_data[, , "Cond_3"]
```

**Example 3: Subsetting an array**

```R
# Get expression values for Gene_1 and Gene_2 from Sample_1 and Sample_2 in Cond_1
subset_array <- gene_expression_data[c("Gene_1", "Gene_2"), c("Sample_1", "Sample_2"), "Cond_1"]
print(subset_array)
```

### 2.3 Modifying Array Elements

You can modify elements by assigning new values using the same indexing methods.

```R
# Change the expression value for Gene_2 in Sample_4 under Cond_3
gene_expression_data["Gene_2", "Sample_4", "Cond_3"] <- 99.9
print(gene_expression_data["Gene_2", "Sample_4", "Cond_3"])
```

---

## 3. Performing Operations on Arrays

Arrays support element-wise operations, similar to vectors and matrices. Functions like `apply()` are crucial for performing operations across specific dimensions.

### 3.1 Element-wise Operations

Arithmetic operations (`+`, `-`, `*`, `/`, `^`, etc.) are applied element by element.

```R
# Multiply the entire gene_expression_data by 2
scaled_expression <- gene_expression_data * 2
print(head(scaled_expression)) # Print first few elements
```

### 3.2 Using `apply()`

The `apply()` function is powerful for applying a function to the margins (dimensions) of an array.

**Syntax:**

```R
apply(X, MARGIN, FUN, ...)
```

*   `X`: The array.
*   `MARGIN`: A vector indicating which dimensions to apply the function over.
    *   `1`: Apply to rows (the first dimension).
    *   `2`: Apply to columns (the second dimension).
    *   `3`: Apply to the third dimension (the "pages").
    *   `c(1, 2)`: Apply to slices defined by rows and columns (across the third dimension).
*   `FUN`: The function to be applied.

### 3.3 Examples of Using `apply()`

**Example 1: Calculating the mean expression for each gene across all samples and conditions**

```R
# Calculate the mean for each gene (dimension 1)
mean_per_gene <- apply(gene_expression_data, 1, mean, na.rm = TRUE)
print(mean_per_gene)
```

**Example 2: Calculating the standard deviation for each sample across all genes and conditions**

```R
# Calculate the standard deviation for each sample (dimension 2)
sd_per_sample <- apply(gene_expression_data, 2, sd, na.rm = TRUE)
print(sd_per_sample)
```

**Example 3: Finding the maximum value within each condition (across all genes and samples)**

```R
# Find the max for each condition (dimension 3)
max_per_condition <- apply(gene_expression_data, 3, max, na.rm = TRUE)
print(max_per_condition)
```

**Example 4: Calculating the mean expression for each gene *within each sample***

```R
# Apply mean to each gene (dim 1) for each sample (dim 2), across all conditions (dim 3)
mean_gene_sample <- apply(gene_expression_data, c(1, 2), mean, na.rm = TRUE)
print(mean_gene_sample)
```

**Key Concept:** Understanding which `MARGIN` to use is crucial for `apply()`. For a 3D array, `MARGIN = 1` operates on the first dimension (genes), `MARGIN = 2` on the second (samples), and `MARGIN = 3` on the third (conditions).

### 3.4 Other Useful Array Functions

*   `sum()`: Calculates the sum of elements. Can be applied with `apply()`.
*   `sd()`: Calculates the standard deviation. Can be applied with `apply()`.
*   `colMeans()`, `rowMeans()`: More specific functions for matrices, but can be used on the 2D slices of an array.
*   `sweep()`: Useful for subtracting or dividing array margins by a vector or array.

**Example with `sweep()`:** Center the gene expression data by subtracting the mean of each gene.

```R
# Calculate the mean expression for each gene
gene_means <- apply(gene_expression_data, 1, mean, na.rm = TRUE)

# Center the data by subtracting gene means
centered_expression <- sweep(gene_expression_data, 1, gene_means, FUN = "-")
print(head(centered_expression))
```

---

## 4. Reshaping and Combining Arrays

### 4.1 `dim()` and `as.vector()`

You can change the dimensions of an array using the `dim()` function or convert it back to a vector.

```R
# Convert the 3D array to a 2D matrix (reshaping)
# This might not always be biologically meaningful without care
my_reshaped_matrix <- matrix(as.vector(my_3d_array), nrow = 12, ncol = 2)
print(my_reshaped_matrix)

# Convert back to a vector
my_vector_from_array <- as.vector(gene_expression_data)
```

### 4.2 `abind()` and `c()`

The `abind()` package (or `abind` function from the `abind` package) is a more flexible way to combine arrays along new or existing dimensions. Using `c()` can also combine arrays but often flattens them or combines them in ways that might not be desired for multi-dimensional data.

**Installation (if needed):**

```R
# install.packages("abind")
library(abind)
```

**Example: Combining two arrays along a new dimension**

```R
array1 <- array(1:6, dim = c(2, 3))
array2 <- array(7:12, dim = c(2, 3))

# Combine along a new 3rd dimension
combined_array_dim3 <- abind(array1, array2, along = 3)
print(combined_array_dim3)

# Combine side-by-side (along the 2nd dimension)
combined_array_dim2 <- abind(array1, array2, along = 2)
print(combined_array_dim2)
```

**Output:**

```
, , 1

     [,1] [,2] [,3]
[1,]    1    3    5
[2,]    2    4    6

, , 2

     [,1] [,2] [,3]
[1,]    7    9   11
[2,]    8   10   12

, , 1

     [,1] [,2] [,3] [,4] [,5] [,6]
[1,]    1    3    5    7    9   11
[2,]    2    4    6    8   10   12
```

---

## 5. Arrays in Bioinformatics

Arrays are implicitly used in many bioinformatics tasks involving multi-dimensional data.

*   **Gene Expression Data:** A common representation is an array where dimensions represent genes, samples, conditions, time points, etc. For example, a 3D array could store expression levels for thousands of genes across multiple experimental conditions and biological replicates.
*   **Genomic Data:** Storing coverage information across genomic regions for different sequencing runs or experimental conditions.
*   **Proteomics Data:** Analyzing protein abundance across different samples and treatments.
*   **Image Analysis:** Storing pixel data from microscopy images, where dimensions could represent pixel coordinates (x, y), color channels (e.g., RGB), and z-stacks for 3D imaging.

**Example Scenario:** Imagine you have RNA-Seq data from three different cell lines, each with two replicates, and you want to store the expression of 1000 genes.

```R
# Number of genes, cell lines, replicates
n_genes <- 1000
n_cell_lines <- 3
n_replicates <- 2

# Simulate RNA-Seq counts (using random numbers for demonstration)
# Imagine these are normalized counts
simulated_counts <- array(
  rpois(n_genes * n_cell_lines * n_replicates, lambda = 100), # Poisson distribution for counts
  dim = c(n_genes, n_cell_lines, n_replicates),
  dimnames = list(
    genes = paste("Gene", 1:n_genes, sep = "_"),
    cell_lines = paste("CellLine", 1:n_cell_lines, sep = "_"),
    replicates = paste("Rep", 1:n_replicates, sep = "_")
  )
)

# Get the average count for Gene_500 across all replicates of all cell lines
mean_gene500_overall <- mean(simulated_counts["Gene_500", , ], na.rm = TRUE)
print(paste("Average count for Gene_500:", mean_gene500_overall))

# Get counts for Gene_100 in CellLine_2 across its replicates
counts_gene100_cellline2 <- simulated_counts["Gene_100", "CellLine_2", ]
print(paste("Counts for Gene_100 in CellLine_2:", paste(counts_gene100_cellline2, collapse = ", ")))
```

---

## Important Points to Remember

*   **Data Type:** Arrays can only store elements of the **same** data type.
*   **Dimensions:** The `dim` argument is crucial for defining the shape of the array. If the total number of elements in `data` is not perfectly divisible by the product of the dimensions, R will recycle elements or throw an error.
*   **Column-Major Filling:** By default, R fills arrays column by column within each "page" or higher dimension.
*   **Indexing:** Use commas to separate indices for each dimension. Omitting an index selects all elements along that dimension.
*   **`apply()`:** Master `apply()` for performing calculations across specific dimensions. Understanding `MARGIN` is key.
*   **`dimnames`:** Use `dimnames` to add clarity and make your code self-documenting.
*   **`abind`:** For more complex array combining, consider the `abind` package.

---

## Practice Questions & Exercises

**Instructions:** Use the provided R code snippets to answer the questions.

**Scenario:**
Let's create a sample array to work with.

```R
# Create a 3D array representing experimental data
experimental_data <- array(
  1:48,
  dim = c(4, 3, 4), # 4 features, 3 samples, 4 time points
  dimnames = list(
    features = paste("F", 1:4, sep = "_"),
    samples = paste("S", 1:3, sep = "_"),
    time_points = paste("T", 1:4, sep = "_")
  )
)
```

**Questions:**

1.  **Creating Arrays:**
    *   What is the total number of elements in `experimental_data`?
    *   How many dimensions does `experimental_data` have?
    *   If you wanted to create a 4D array with dimensions 2, 3, 4, and 2, what would be the total number of elements?

2.  **Accessing Elements:**
    *   Retrieve the value of Feature `F_2` for Sample `S_1` at Time Point `T_3`.
    *   Retrieve all values for Feature `F_4` across all samples and time points.
    *   Retrieve all values for Sample `S_2` at Time Point `T_1` for all features.
    *   Retrieve the entire "slice" corresponding to Time Point `T_4`.

3.  **Modifying Elements:**
    *   Change the value of Feature `F_1` for Sample `S_3` at Time Point `T_2` to `100`. What is the new value?

4.  **Performing Operations with `apply()`:**
    *   Calculate the mean of each feature across all samples and time points.
    *   Calculate the standard deviation for each sample across all features and time points.
    *   Find the maximum value for each time point across all features and samples.
    *   Calculate the mean value for each feature *within each sample* (across time points).

5.  **Reshaping and Combining:**
    *   Convert `experimental_data` into a single vector.
    *   Imagine you have another array `another_data` with dimensions `c(4, 3, 4)` containing values 49:96. Combine `experimental_data` and `another_data` by stacking them along a new dimension (e.g., dimension 4).

---

**Answers:**

1.  **Creating Arrays:**
    *   Total elements: `4 * 3 * 4 = 48`.
    *   Number of dimensions: 3.
    *   Total elements for a 4D array `c(2, 3, 4, 2)`: `2 * 3 * 4 * 2 = 48`.

2.  **Accessing Elements:**
    *   `experimental_data["F_2", "S_1", "T_3"]` or `experimental_data[2, 1, 3]`
    *   `experimental_data["F_4", , ]` or `experimental_data[4, , ]`
    *   `experimental_data[, "S_2", "T_1"]` or `experimental_data[, 2, 1]`
    *   `experimental_data[, , "T_4"]` or `experimental_data[, , 4]`

3.  **Modifying Elements:**
    *   `experimental_data["F_1", "S_3", "T_2"] <- 100`
    *   The new value is `100`.

4.  **Performing Operations with `apply()`:**
    *   Mean of each feature: `apply(experimental_data, 1, mean)`
    *   Standard deviation for each sample: `apply(experimental_data, 2, sd)`
    *   Maximum value for each time point: `apply(experimental_data, 3, max)`
    *   Mean value for each feature within each sample: `apply(experimental_data, c(1, 2), mean)`

5.  **Reshaping and Combining:**
    *   Vector: `as.vector(experimental_data)`
    *   Combining:
        ```R
        another_data <- array(49:96, dim = c(4, 3, 4))
        library(abind)
        combined_4d <- abind(experimental_data, another_data, along = 4)
        # The dimensions of combined_4d will be c(4, 3, 4, 2)
        ```

---
This concludes Module 4 on Arrays in R for Bioinformatics. Understanding these concepts will be crucial for working with more complex biological datasets.
