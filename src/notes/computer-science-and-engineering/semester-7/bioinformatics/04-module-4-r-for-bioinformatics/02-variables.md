---
title: "Variables"
subject: "BIOINFORMATICS"
module: "Module 4: R FOR BIOINFORMATICS"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c17c"
status: "completed"
scrapedAt: "2026-05-20T17:01:17.892Z"
---
# Bioinformatics: Module 4 - R for Bioinformatics

## Topic: Variables

This module introduces the fundamental concept of variables in R, a crucial skill for any bioinformatician working with data analysis and manipulation.

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the role of variables in R programming for bioinformatics.**
*   **Create and assign values to variables in R.**
*   **Identify and understand different data types that variables can hold in R.**
*   **Perform basic operations and manipulations on variables.**
*   **Understand the importance of variable naming conventions.**

---

### 1. Understanding the Role of Variables in R

In R, **variables** act as named containers for storing data. They are essential for:

*   **Storing and retrieving data:** Instead of typing out values repeatedly, you can store them in a variable and refer to it by its name.
*   **Data manipulation:** Variables allow you to transform, modify, and combine data in a structured way.
*   **Readability and organization:** Well-named variables make your R code easier to understand and debug.
*   **Flexibility:** You can easily change the value stored in a variable without having to rewrite entire sections of your code.

**Analogy:** Think of variables like labels on boxes. You put data (e.g., a sequence, a measurement, a list of gene IDs) into a box, and then you attach a label (the variable name) to that box. Later, you can refer to the contents of the box by its label.

---

### 2. Creating and Assigning Values to Variables

In R, you create a variable by assigning a value to a name using the assignment operator.

*   **Assignment Operators:**
    *   `<-` (Leftward assignment operator - most common and recommended)
    *   `=` (Rightward assignment operator - also works but `<-` is preferred for clarity)
    *   `->` (Leftward assignment operator - less common)

*   **Syntax:** `variable_name <- value`

*   **Examples:**

    ```R
    # Storing a single number (integer)
    gene_count <- 15000

    # Storing a decimal number (numeric/double)
    average_expression <- 2.56

    # Storing text (character string)
    gene_name <- "TP53"

    # Storing a logical value (TRUE or FALSE)
    is_significant <- TRUE

    # Storing a vector of values
    read_depths <- c(100, 120, 95, 110)

    # Storing a data frame (will be covered in more detail later)
    # Example: protein_data <- data.frame(ProteinID = c("P001", "P002"), MolecularWeight = c(50.5, 65.2))
    ```

*   **Key Points:**
    *   When you assign a value to a variable that doesn't exist, R creates it.
    *   If you assign a new value to an existing variable, the old value is overwritten.

    ```R
    # Overwriting a variable
    gene_count <- 16000
    print(gene_count) # Output will be 16000
    ```

---

### 3. Data Types in R

Variables in R can hold different types of data. Understanding these data types is crucial for performing the correct operations. Here are the fundamental data types in R:

*   **Numeric:**
    *   **Integer:** Whole numbers. Represented with `1L`, `2L`, etc. (though R often auto-converts if no `L` is specified and the number is whole).
        *   *Example:* `my_integer <- 5L`
    *   **Double/Real:** Numbers with decimal points. This is the default for numbers in R.
        *   *Example:* `my_double <- 3.14159`

*   **Character (or String):** Textual data. Enclosed in double quotes (`"`) or single quotes (`'`).
    *   *Example:* `sample_id <- "Sample_001"`

*   **Logical:** Boolean values, either `TRUE` or `FALSE`.
    *   *Example:* `is_control <- FALSE`

*   **Complex:** Numbers with a real and imaginary part (e.g., `3 + 4i`). Less common in basic bioinformatics but good to be aware of.
    *   *Example:* `my_complex <- 2 + 5i`

*   **Factors:** Used to represent categorical data. Factors have levels, which are the unique categories. They are often used for grouping or as design variables in statistical models.
    *   *Example:*
        ```R
        treatment_group <- factor(c("Control", "TreatmentA", "Control", "TreatmentB"))
        print(treatment_group)
        print(levels(treatment_group)) # Shows the unique categories
        ```

*   **Raw:** Stores bytes of data. Rarely used in typical bioinformatics tasks.

**Checking Data Types:**
You can use the `class()` function to check the data type of a variable.

```R
gene_count <- 15000
average_expression <- 2.56
gene_name <- "TP53"
is_significant <- TRUE
read_depths <- c(100, 120, 95, 110)
treatment_group <- factor(c("Control", "TreatmentA", "Control", "TreatmentB"))

print(class(gene_count))        # Output: "numeric" (R often defaults integers to numeric)
print(class(average_expression)) # Output: "numeric"
print(class(gene_name))        # Output: "character"
print(class(is_significant))   # Output: "logical"
print(class(read_depths))      # Output: "numeric" (for vectors of numbers)
print(class(treatment_group))  # Output: "factor"
```

**Important Note on Data Type Coercion:**
R will often try to automatically convert (coerce) data types when performing operations. For example, if you try to add a character string to a number, R will usually throw an error. However, if you mix data types within a vector, R will coerce all elements to the most general type that can accommodate all values (e.g., numbers and characters in a vector will become characters).

```R
mixed_vector <- c(1, "geneA", 3)
print(mixed_vector)
print(class(mixed_vector)) # Output: "character"
```

---

### 4. Performing Basic Operations and Manipulations

Once you have variables, you can perform various operations on them.

*   **Arithmetic Operations:**
    *   Addition: `+`
    *   Subtraction: `-`
    *   Multiplication: `*`
    *   Division: `/`
    *   Exponentiation: `^` or `**`
    *   Modulo (remainder): `%%`

    ```R
    # Example with numeric variables
    coverage_depth <- 50
    read_length <- 150

    total_bases <- coverage_depth * read_length
    print(total_bases) # Output: 7500

    error_rate <- 0.01
    num_errors <- total_bases * error_rate
    print(num_errors) # Output: 75
    ```

*   **String Operations:**
    *   Concatenation (joining strings): `paste()` or `paste0()`
        *   `paste()`: Adds a separator by default (e.g., a space).
        *   `paste0()`: Concatenates without any separator.

    ```R
    sample_prefix <- "Exp"
    sample_number <- 5
    sample_suffix <- "R1"

    full_sample_name_spaced <- paste(sample_prefix, sample_number, sample_suffix, sep = "_")
    print(full_sample_name_spaced) # Output: "Exp_5_R1"

    full_sample_name_no_space <- paste0(sample_prefix, sample_number, sample_suffix)
    print(full_sample_name_no_space) # Output: "Exp5R1"
    ```

*   **Logical Operations:**
    *   Greater than: `>`
    *   Less than: `<`
    *   Greater than or equal to: `>=`
    *   Less than or equal to: `<=`
    *   Equal to: `==` (crucial to use double equals for comparison!)
    *   Not equal to: `!=`
    *   Logical AND: `&`
    *   Logical OR: `|`
    *   Logical NOT: `!`

    ```R
    # Example with numeric and logical variables
    gene_expression_level <- 10.5
    significant_threshold <- 5.0

    is_high_expression <- gene_expression_level > significant_threshold
    print(is_high_expression) # Output: TRUE

    is_control_sample <- FALSE
    is_treatment_sample <- TRUE

    is_primary_analysis <- is_control_sample | is_treatment_sample
    print(is_primary_analysis) # Output: TRUE

    is_meaningful <- is_high_expression & is_primary_analysis
    print(is_meaningful) # Output: TRUE
    ```

*   **Vectorized Operations:** R is highly optimized for **vectorized operations**. This means that operations applied to vectors are performed element-wise without needing explicit loops in many cases, making R very efficient for data analysis.

    ```R
    read_counts <- c(200, 350, 180, 400)
    normalization_factor <- 1e6 # To convert to Reads Per Million (RPM)

    rpm_values <- (read_counts / sum(read_counts)) * normalization_factor
    print(rpm_values)
    # Output: [1] 163.9344 286.8750 147.5410 327.8689 (approx)
    ```
    Notice how `sum(read_counts)` and the division/multiplication were applied to the entire `read_counts` vector at once.

---

### 5. Importance of Variable Naming Conventions

Good variable naming is essential for writing clean, readable, and maintainable R code.

*   **Descriptive Names:** Choose names that clearly indicate the purpose or content of the variable.
    *   *Good:* `gene_expression_levels`, `patient_ids`, `sample_metadata`
    *   *Bad:* `x`, `y`, `data1`, `temp`

*   **Avoid Reserved Words:** Do not use R's built-in keywords or function names as variable names (e.g., `if`, `for`, `while`, `mean`, `sum`).
    *   If you accidentally overwrite a built-in function, you might get unexpected behavior. You can check if a name is reserved by typing it into the console.

*   **Consistency:** Maintain a consistent naming style throughout your project. Common styles include:
    *   **Snake Case:** Words separated by underscores (e.g., `gene_count`). This is very common in R.
    *   **Camel Case:** First word lowercase, subsequent words capitalized (e.g., `geneCount`).
    *   **Pascal Case:** All words capitalized (e.g., `GeneCount`).

    **Recommendation for R:** Snake case (`gene_count`) is widely adopted and easy to read.

*   **Start with a Letter:** Variable names must begin with a letter. They can contain letters, numbers, periods (`.`), and underscores (`_`).
    *   *Valid:* `my.variable`, `sample_1`, `data.frame_123`
    *   *Invalid:* `1variable`, `.variable` (though starting with `.` can be special in some R contexts, it's best avoided for general variables).

*   **Case Sensitivity:** R is case-sensitive. `geneCount` is different from `genecount`.

*   **Use Meaningful Abbreviations Sparingly:** If you must abbreviate, make sure the abbreviation is universally understood in your context (e.g., `exp` for expression).

---

### 6. Practice Questions and Exercises

**Question 1:**
You are analyzing RNA-Seq data. You want to store the number of reads mapped to a specific gene, which is 12,545. You also want to store the gene's Ensembl ID, which is "ENSG00000139710". Finally, you want to store a logical variable indicating if this gene is considered "highly expressed" (let's say, if its read count is greater than 10,000).

Write R code to create three variables:
a) `mapped_reads`
b) `ensembl_id`
c) `is_highly_expressed`

```R
# Your code here
```

**Answer 1:**

```R
mapped_reads <- 12545
ensembl_id <- "ENSG00000139710"
is_highly_expressed <- mapped_reads > 10000
```

**Question 2:**
You have a vector of gene expression values: `expression_values <- c(0.8, 1.2, 0.9, 1.5, 1.1)`. You want to create a new variable, `expression_log`, which stores the logarithm (base 10) of each value in `expression_values`.

Write R code to achieve this.

```R
# Your code here
```

**Answer 2:**

```R
expression_values <- c(0.8, 1.2, 0.9, 1.5, 1.1)
expression_log <- log10(expression_values)
print(expression_log)
# Expected Output: [1] -0.09691001  0.07918125 -0.04575749  0.17609126  0.04139269
```

**Question 3:**
Consider the following R code snippet:

```R
sample_name <- "PatientA"
visit_number <- 1
analysis_type <- "RNA-Seq"

result_file_base <- paste0(sample_name, "_", visit_number, "_", analysis_type, "_results")
print(result_file_base)
```
What will be the output of this code?

```
# Your answer here
```

**Answer 3:**

```
[1] "PatientA_1_RNA-Seq_results"
```

**Question 4:**
What is the data type of the variable `my_variable` in the following code? Explain why.

```R
my_variable <- c("GeneX", 100, TRUE)
```

```R
# Your answer here
```

**Answer 4:**
The data type of `my_variable` will be **character**. This is because R **coerces** all elements in a vector to the most general data type that can accommodate all of them. In this case, a vector containing a character string (`"GeneX"`), a number (`100`), and a logical value (`TRUE`) will have all its elements converted to character strings.

---

### Important Points to Remember:

*   **Variables are named containers for data.**
*   Use the `<-` assignment operator to create and assign values to variables.
*   R has several fundamental data types: **numeric** (integer, double), **character**, **logical**, and **factor**.
*   Use `class()` to check the data type of a variable.
*   R operations are often **vectorized**, meaning they apply element-wise to vectors automatically.
*   Choose **descriptive, consistent, and valid** variable names to make your code readable and maintainable.
*   Be mindful of **data type coercion**, especially when mixing data types.
*   R is **case-sensitive**.

---
