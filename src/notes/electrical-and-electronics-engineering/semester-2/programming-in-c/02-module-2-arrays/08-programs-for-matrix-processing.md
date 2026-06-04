---
title: "Programs for matrix processing"
subject: "PROGRAMMING IN C"
module: "Module 2: Arrays "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f98f5"
status: "completed"
scrapedAt: "2026-05-23T16:09:14.227Z"
---
# PROGRAMMING IN C: Module 2: Arrays - Programs for Matrix Processing

Welcome, everyone, to our journey into the fascinating world of arrays in C! Today, we're going to build upon our understanding of arrays by diving into a very practical and widely used application: **Matrix Processing**.

You might be thinking, "Matrices? That sounds like advanced math!" But in programming, matrices are simply two-dimensional arrays, and handling them is a fundamental skill. Think about it like organizing information in a grid – like a spreadsheet, a chessboard, or even seating arrangements in an auditorium. That's precisely what matrices allow us to do in our programs.

This topic is absolutely crucial as it directly addresses **Course Outcome 2 (CO2): Develop C programs using arrays, matrices, and strings.** By mastering matrix processing, you'll gain the practical skills to manage and manipulate data in a structured, two-dimensional format, which is a cornerstone of many algorithms and real-world applications. It also helps us achieve **Course Outcome 1 (CO1)** by requiring us to infer computational problems and translate them into C code using control statements, which are indispensable for iterating through matrices.

Let's get started by understanding what a matrix is in the context of C programming.

## Understanding Matrices in C

A matrix, in programming terms, is essentially an array of arrays. When we talk about a 2D array (or a matrix), we're picturing data arranged in rows and columns.

For instance, consider a simple 2x3 matrix:

```
[ 1  2  3 ]
[ 4  5  6 ]
```

This matrix has 2 rows and 3 columns. In C, we declare a 2D array like this:

```c
int matrix[rows][columns];
```

So, for our 2x3 example, we'd declare it as:

```c
int matrix[2][3];
```

**Key Concept: Indexing**
Remember, C uses zero-based indexing. So, for our `matrix[2][3]`:
*   The first row is accessed using index `0` (e.g., `matrix[0]`).
*   The second row is accessed using index `1` (e.g., `matrix[1]`).
*   Within a row, the first column is `0`, the second is `1`, and so on.
*   Therefore, the element `4` in our example would be at `matrix[1][0]`.

This concept of indexing is vital. As Brian Kernighan and Dennis Ritchie eloquently put it in "The C Programming Language," arrays are contiguous blocks of memory, and accessing elements involves calculating the memory address based on the base address and the index. Understanding this helps avoid many common errors.

### Representing Matrices in Memory

It's worth noting how these 2D arrays are stored in memory. C typically stores them in **row-major order**. This means that all elements of the first row are stored contiguously, followed by all elements of the second row, and so on.

For our `matrix[2][3]`:
Memory would look something like: `[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] [ 6 ]`

This row-major order is important when you start working with pointers and dynamic memory allocation, but for basic matrix processing, it's good to have this awareness.

## Core Matrix Operations

Now that we understand what a matrix is in C, let's explore some fundamental operations we can perform on them. These operations are the building blocks for more complex matrix algorithms.

### 1. Reading a Matrix (Input)

The first step in processing a matrix is usually to get the data into it. This involves reading values from the user or from a file. We'll focus on user input for now.

To read a matrix, we need to iterate through each element. This is where our good old `for` loops come into play, often nested.

```c
#include <stdio.h>

// Assuming matrix dimensions are MAX_ROWS and MAX_COLS

#define MAX_ROWS 10
#define MAX_COLS 10

int main() {
    int matrix[MAX_ROWS][MAX_COLS];
    int rows, cols;

    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    printf("Enter the number of columns: ");
    scanf("%d", &cols);

    printf("Enter the matrix elements:\n");

    // Loop through each row
    for (int i = 0; i < rows; i++) {
        // Loop through each column in the current row
        for (int j = 0; j < cols; j++) {
            printf("Enter element [%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]); // Read element at row i, column j
        }
    }

    printf("\nMatrix entered successfully!\n");

    // We can add code here to display the matrix to verify input
    return 0;
}
```

**Explanation and Insight:**
See how we use two nested loops? The outer loop (`i`) controls the rows, and the inner loop (`j`) controls the columns. This structure ensures we visit every single cell in our grid. We prompt the user for each element, using `scanf` to store it at the correct `matrix[i][j]` location.

This directly relates to **CO1 (K2)**, as we're using control statements (`for` loops) to infer the structure of the input and process it element by element.

### 2. Displaying a Matrix (Output)

Once we have data in a matrix, we often want to see it. Displaying a matrix is very similar to reading it – again, nested loops are our best friends!

```c
// Continuing from the previous example, after reading the matrix

    printf("\nDisplaying the matrix:\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%d\t", matrix[i][j]); // Print element followed by a tab
        }
        printf("\n"); // Move to the next line after printing all columns of a row
    }
```

**Explanation and Insight:**
The logic is almost identical to reading. We iterate through rows (`i`) and columns (`j`). The key difference is `printf` instead of `scanf`. We use `"%d\t"` to print the integer element followed by a tab (`\t`) for better spacing. After each row is printed, `printf("\n");` moves the cursor to the next line, ensuring our matrix output looks like a grid.

This is another excellent example of **CO1 (K2)** in action – using control flow to present data in a structured manner.

**Example Scenario:** Imagine you're helping a restaurant manage their table reservations. Each table is like a cell in a matrix, and you need to input the number of people seated at each table, then display the seating arrangement. You'd use the reading and displaying logic to manage this data.

### 3. Matrix Addition

Let's say you have two matrices, `A` and `B`, and you want to create a new matrix `C` where each element `C[i][j]` is the sum of `A[i][j]` and `B[i][j]`.

**Important Rule for Addition:** For matrix addition to be possible, both matrices must have the exact same dimensions (same number of rows and same number of columns).

```c
#include <stdio.h>

#define MAX_ROWS 10
#define MAX_COLS 10

int main() {
    int matrixA[MAX_ROWS][MAX_COLS];
    int matrixB[MAX_ROWS][MAX_COLS];
    int resultMatrix[MAX_ROWS][MAX_COLS];
    int rows, cols;

    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    printf("Enter the number of columns: ");
    scanf("%d", &cols);

    // --- Read Matrix A ---
    printf("\nEnter elements for Matrix A:\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("Enter element A[%d][%d]: ", i, j);
            scanf("%d", &matrixA[i][j]);
        }
    }

    // --- Read Matrix B ---
    printf("\nEnter elements for Matrix B:\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("Enter element B[%d][%d]: ", i, j);
            scanf("%d", &matrixB[i][j]);
        }
    }

    // --- Perform Matrix Addition ---
    printf("\nPerforming Matrix Addition...\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    // --- Display Result Matrix ---
    printf("\nResultant Matrix (A + B):\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%d\t", resultMatrix[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

**Explanation and Insight:**
We read two matrices, `matrixA` and `matrixB`, using the familiar nested loop structure. The critical part is the addition loop: `resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j];`. For each corresponding position `(i, j)` in the input matrices, we sum their values and store the result in the same position in `resultMatrix`.

This is a great example of **CO2 (K3)** – applying array operations. We are essentially demonstrating the *application* of array concepts to solve a specific problem. It also reinforces **CO1 (K2)** as we are heavily relying on control statements.

**Relatable Example:** Think about comparing the scores of two student groups in different subjects. If `matrixA` stores scores for Group 1 and `matrixB` stores scores for Group 2, matrix addition would give you a `resultMatrix` showing the combined scores for each subject, assuming both groups were tested on the same subjects in the same order.

### 4. Matrix Multiplication

Matrix multiplication is a bit more involved than addition. It's not as simple as multiplying corresponding elements.

**Rule for Multiplication:** For matrices `A` and `B`, multiplication `A * B` is only possible if the **number of columns in matrix A is equal to the number of rows in matrix B**. If `A` is an `m x n` matrix and `B` is an `n x p` matrix, the resulting matrix `C` will be an `m x p` matrix.

To calculate `C[i][j]`, you take the dot product of the `i`-th row of `A` and the `j`-th column of `B`. This means:
`C[i][j] = A[i][0]*B[0][j] + A[i][1]*B[1][j] + ... + A[i][n-1]*B[n-1][j]`

This summation requires a third, inner loop.

```c
#include <stdio.h>

#define MAX_ROWS 10
#define MAX_COLS 10

int main() {
    int matrixA[MAX_ROWS][MAX_COLS];
    int matrixB[MAX_ROWS][MAX_COLS];
    int resultMatrix[MAX_ROWS][MAX_COLS];
    int rowsA, colsA, rowsB, colsB;

    // --- Read Matrix A ---
    printf("Enter dimensions for Matrix A (rows cols): ");
    scanf("%d %d", &rowsA, &colsA);
    printf("Enter elements for Matrix A:\n");
    for (int i = 0; i < rowsA; i++) {
        for (int j = 0; j < colsA; j++) {
            printf("Enter element A[%d][%d]: ", i, j);
            scanf("%d", &matrixA[i][j]);
        }
    }

    // --- Read Matrix B ---
    printf("\nEnter dimensions for Matrix B (rows cols): ");
    scanf("%d %d", &rowsB, &colsB);
    printf("Enter elements for Matrix B:\n");
    for (int i = 0; i < rowsB; i++) {
        for (int j = 0; j < colsB; j++) {
            printf("Enter element B[%d][%d]: ", i, j);
            scanf("%d", &matrixB[i][j]);
        }
    }

    // --- Check Compatibility for Multiplication ---
    if (colsA != rowsB) {
        printf("\nMatrix multiplication not possible!\n");
        printf("Number of columns in Matrix A must be equal to the number of rows in Matrix B.\n");
        return 1; // Indicate an error
    }

    // --- Initialize Result Matrix ---
    // The result matrix will have dimensions rowsA x colsB
    // It's good practice to initialize result matrix elements to 0
    for (int i = 0; i < rowsA; i++) {
        for (int j = 0; j < colsB; j++) {
            resultMatrix[i][j] = 0;
        }
    }

    // --- Perform Matrix Multiplication ---
    printf("\nPerforming Matrix Multiplication...\n");
    // Outer loops iterate through each element of the result matrix
    for (int i = 0; i < rowsA; i++) {       // Row of result matrix
        for (int j = 0; j < colsB; j++) {     // Column of result matrix
            // Inner loop calculates the dot product for resultMatrix[i][j]
            for (int k = 0; k < colsA; k++) { // Or k < rowsB, since colsA == rowsB
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    // --- Display Result Matrix ---
    printf("\nResultant Matrix (A * B):\n");
    for (int i = 0; i < rowsA; i++) { // Result has rowsA rows
        for (int j = 0; j < colsB; j++) { // Result has colsB columns
            printf("%d\t", resultMatrix[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

**Explanation and Insight:**
1.  **Dimension Check:** We first ask for dimensions of both matrices and crucially check `if (colsA != rowsB)`. If they don't match, we can't multiply. This is a vital error-handling step.
2.  **Initialization:** The `resultMatrix` is initialized to all zeros. This is extremely important because the multiplication process involves summing products, and if the initial values aren't zero, our sum will be incorrect. Herbert Schildt, in "C The Complete Reference," often emphasizes the importance of initializing variables, especially when they are used in accumulation processes.
3.  **Triple Nested Loops:**
    *   The outer two loops (`i` and `j`) iterate through each position of the `resultMatrix`.
    *   The innermost loop (`k`) performs the actual dot product calculation. It iterates through the columns of `matrixA` (which correspond to the rows of `matrixB`). For each `resultMatrix[i][j]`, we sum up `matrixA[i][k] * matrixB[k][j]` for all valid `k`.

This is a more complex demonstration of **CO2 (K3)** and also touches upon **CO1 (K2)** due to the intricate use of nested control statements. Analyzing the logic here can also help with **CO3 (K3)** if you were to break this down into a function later.

**Analogy:** Think of a recipe. To make a complex dish, you combine ingredients based on specific proportions and methods. Matrix multiplication is similar; each element in the result is a 'combination' of a row from the first matrix and a column from the second, following a precise "recipe" (the summation of products).

### 5. Transposing a Matrix

Transposing a matrix means swapping its rows and columns. If `A` is an `m x n` matrix, its transpose `A^T` will be an `n x m` matrix where `A^T[i][j] = A[j][i]`.

```c
#include <stdio.h>

#define MAX_ROWS 10
#define MAX_COLS 10

int main() {
    int matrix[MAX_ROWS][MAX_COLS];
    int transposeMatrix[MAX_COLS][MAX_ROWS]; // Note the swapped dimensions
    int rows, cols;

    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    printf("Enter the number of columns: ");
    scanf("%d", &cols);

    printf("Enter the matrix elements:\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("Enter element [%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
        }
    }

    // --- Transpose the Matrix ---
    printf("\nTransposing the matrix...\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            transposeMatrix[j][i] = matrix[i][j]; // The core of transposition!
        }
    }

    // --- Display Original Matrix ---
    printf("\nOriginal Matrix:\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%d\t", matrix[i][j]);
        }
        printf("\n");
    }

    // --- Display Transposed Matrix ---
    printf("\nTransposed Matrix:\n");
    for (int i = 0; i < cols; i++) { // Note: Iterate cols for rows of transpose
        for (int j = 0; j < rows; j++) { // Note: Iterate rows for cols of transpose
            printf("%d\t", transposeMatrix[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

**Explanation and Insight:**
The magic happens in the line `transposeMatrix[j][i] = matrix[i][j];`. We're taking an element from `matrix[i][j]` and placing it into `transposeMatrix[j][i]`. This effectively swaps the row and column indices.

**Important Note on Dimensions:** If the original matrix is `rows x cols`, the transposed matrix will be `cols x rows`. You must declare `transposeMatrix` with these swapped dimensions. This is a common pitfall; forgetting to swap dimensions can lead to buffer overflows or incorrect results. This highlights the importance of understanding array indexing and memory layout, as mentioned by Gottfried in "Programming with C."

This operation is again a solid example for **CO2 (K3)**.

**Everyday Analogy:** Imagine you have a stack of photos organized by 'event' (rows) and 'person' (columns). Transposing the matrix is like reorganizing them by 'person' (rows) and then by 'event' (columns). You're just re-labeling the axes of your organization.

## Connecting to Course Outcomes

Let's explicitly link what we've learned back to our Course Outcomes:

*   **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.**
    *   All the examples we've seen (reading, displaying, addition, multiplication, transpose) require careful use of `for` loops, `if` statements (for multiplication compatibility), and `scanf`/`printf`. We infer the problem (e.g., "add these two matrices") and then use control structures to implement the solution. This is a fundamental application of CO1.

*   **CO2: Develop C programs using arrays, matrices, and strings.**
    *   This entire topic is dedicated to **matrices**, which are 2D arrays. We've shown how to declare, access, and perform operations on them. This directly fulfills CO2.

*   **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.**
    *   While our examples are in `main`, you can easily see how each operation (addition, multiplication, transpose) could be encapsulated into its own function (e.g., `void addMatrices(int A[][MAX_COLS], int B[][MAX_COLS], int C[][MAX_COLS], int rows, int cols);`). This modular approach is key to CO3, making your code reusable and organized. Imagine having separate functions for `readMatrix`, `displayMatrix`, `addMatrices`, `multiplyMatrices`, `transposeMatrix`. This makes complex programs manageable, just as Yashavant Kanetkar suggests in "Let us C" for breaking down larger problems.

*   **CO4: Develop C programs using pointers for dynamic data handling.**
    *   Although not directly shown in the basic examples, when dealing with matrices where dimensions are not known at compile time, you'd use dynamic memory allocation (`malloc`, `calloc`) with pointers. This would allow you to create matrices of any size at runtime. This is where pointer knowledge becomes essential for flexible matrix processing, as emphasized in books like "Programming in C" by Kamthane.

*   **CO5: Use files in C to permanently store and manipulate data.**
    *   Instead of reading matrix elements from the user every time, we could modify our `readMatrix` function to read from a file. Similarly, we could write the resulting matrices to a file for later use. This would directly link matrix processing with file I/O, fulfilling CO5.

## Exam Preparation Tips

*   **Understand the Dimensions:** Always pay attention to the dimensions of matrices involved in operations like multiplication. Mismatched dimensions are a classic source of errors and exam questions.
*   **Nested Loops are Key:** Most matrix operations rely on nested loops. Be comfortable with how `i`, `j`, and sometimes `k` are used to navigate the matrix elements.
*   **Initialization Matters:** Especially for accumulation (like in matrix multiplication or summing elements), always initialize your result variables or matrices to zero.
*   **Transposition Pitfalls:** Remember to swap the row and column counts when declaring the transposed matrix, and be careful with the `[j][i] = [i][j]` assignment.
*   **Function Design:** Think about how you would turn each operation into a separate function. What parameters would it need? What would it return? This is crucial for CO3.

Remember, practice is everything! Try implementing these operations yourself, perhaps with different matrix sizes. Experiment, debug, and solidify your understanding.

---

## Sample Questions and Answers

**Q1. Conceptual:** What is the main difference between accessing an element in a 1D array `arr[i]` and a 2D array `matrix[i][j]` in C?

**Answer:** In a 1D array, `arr[i]` directly accesses the `i`-th element after the base address. In a 2D array, `matrix[i][j]` involves a calculation: `base_address + (i * number_of_columns + j) * sizeof(element_type)`. This is because the memory is laid out in contiguous blocks representing rows, and the column index `j` is added within the context of a specific row `i`. This calculation is implicitly handled by the compiler but understanding it helps grasp how 2D arrays work.

**Q2. Exam-Oriented:** Write a C program to find the sum of the diagonal elements of a square matrix.

**Reasoning:** A square matrix has an equal number of rows and columns. The main diagonal elements are those where the row index is equal to the column index (i.e., `matrix[i][i]`). We need to read a square matrix, then iterate through it, adding `matrix[i][i]` to a sum variable whenever `i` equals `j`. However, a simpler approach is to just iterate from `i = 0` to `rows - 1` and add `matrix[i][i]`.

```c
#include <stdio.h>

#define MAX_SIZE 10

int main() {
    int matrix[MAX_SIZE][MAX_SIZE];
    int size;
    int diagonalSum = 0;

    printf("Enter the size of the square matrix (e.g., 3 for 3x3): ");
    scanf("%d", &size);

    if (size > MAX_SIZE || size <= 0) {
        printf("Invalid size.\n");
        return 1;
    }

    printf("Enter the matrix elements:\n");
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            printf("Enter element [%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
        }
    }

    // Calculate the sum of diagonal elements
    for (int i = 0; i < size; i++) {
        diagonalSum += matrix[i][i]; // Add element where row index == column index
    }

    printf("\nOriginal Matrix:\n");
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            printf("%d\t", matrix[i][j]);
        }
        printf("\n");
    }

    printf("\nSum of diagonal elements: %d\n", diagonalSum);

    return 0;
}
```

**Q3. Conceptual/Exam-Oriented:** If matrix `A` is of dimensions `3x4` and matrix `B` is of dimensions `4x2`, what will be the dimensions of the resulting matrix if we perform matrix multiplication `A * B`? Explain why.

**Answer:** The dimensions of the resulting matrix will be `3x2`. Matrix multiplication `A * B` is possible if the number of columns in `A` equals the number of rows in `B`. Here, `A` is `3x4` (4 columns) and `B` is `4x2` (4 rows). The condition (4 == 4) is met. The resulting matrix's dimensions are determined by the number of rows in `A` and the number of columns in `B`. Therefore, the result is `(rows of A) x (columns of B)`, which is `3x2`. This aligns with the rules discussed for matrix multiplication.
