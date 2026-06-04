---
title: "Polynomial representation using Arrays"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be91"
status: "completed"
scrapedAt: "2026-05-20T16:51:50.506Z"
---
# Data Structures: Module 1 - Basic Concepts

## Topic: Polynomial Representation Using Arrays

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the concept of a polynomial and its mathematical representation.
*   Explain how to represent a polynomial using an array.
*   Identify the advantages and disadvantages of using arrays for polynomial representation.
*   Perform basic operations on polynomials represented by arrays (e.g., addition, subtraction, evaluation).
*   Analyze the time complexity of these operations.

---

### 1. What is a Polynomial?

A polynomial is a mathematical expression consisting of variables (also called indeterminates) and coefficients, that involves only the operations of addition, subtraction, multiplication, and non-negative integer exponentiation of variables.

**General Form of a Polynomial:**

A polynomial in a single variable, say 'x', can be written as:

$P(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x^1 + a_0 x^0$

Where:
*   $x$ is the variable.
*   $a_n, a_{n-1}, ..., a_1, a_0$ are the **coefficients** (real numbers, typically).
*   $n$ is the **degree** of the polynomial (the highest power of the variable).
*   $a_n$ is the **leading coefficient** (if $a_n \neq 0$).
*   $a_0$ is the **constant term**.

**Examples:**
*   $5x^3 + 2x^2 - 7x + 1$ (Degree 3)
*   $4x^2 - 9$ (Degree 2)
*   $6x$ (Degree 1)
*   $10$ (Degree 0, a constant polynomial)
*   $0$ (The zero polynomial)

---

### 2. Representing Polynomials Using Arrays

An array is a contiguous block of memory that stores elements of the same data type. We can leverage arrays to represent polynomials efficiently.

**The Core Idea:**

We can use an array where the **index** of the array corresponds to the **exponent** of the variable, and the **value** at that index corresponds to the **coefficient** of that term.

**Array Representation:**

Let's consider a polynomial $P(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x^1 + a_0 x^0$.
We can represent this polynomial using an array `A` of size `n+1` such that:

*   `A[i]` stores the coefficient of $x^i$.
*   The size of the array will be `degree + 1`.

**Example:**

Consider the polynomial: $P(x) = 3x^4 + 0x^3 - 2x^2 + 5x^1 + 7x^0$

In array representation, this would be an array of size 5 (degree 4 + 1):

`A = [7, 5, -2, 0, 3]`

Where:
*   `A[0] = 7` (coefficient of $x^0$)
*   `A[1] = 5` (coefficient of $x^1$)
*   `A[2] = -2` (coefficient of $x^2$)
*   `A[3] = 0` (coefficient of $x^3$)
*   `A[4] = 3` (coefficient of $x^4$)

**Handling Sparse Polynomials:**

A polynomial is considered **sparse** if most of its coefficients are zero. For example, $P(x) = 5x^{100} + 2x^2$.
Representing such a polynomial with a large array of size 101 would be inefficient, as most of the array elements would be zero.

*   **Dense Representation (Using a fixed-size array):** This is the method described above. It's efficient for polynomials where coefficients are non-zero for most powers up to the degree.
*   **Sparse Representation (Using linked lists or other structures):** While not the primary focus of this topic, it's important to be aware that for very sparse polynomials, other data structures (like linked lists storing only non-zero terms) are more memory-efficient. This topic focuses on the **dense array representation**.

---

### 3. Advantages and Disadvantages of Array Representation

**Advantages:**

*   **Simplicity:** Easy to understand and implement.
*   **Direct Access:** Coefficients can be accessed directly using their corresponding exponent as an index (e.g., `A[i]` for the coefficient of $x^i$). This makes polynomial evaluation very efficient.
*   **Efficiency for Dense Polynomials:** For polynomials with many non-zero terms up to their degree, this is a space-efficient representation.

**Disadvantages:**

*   **Wasted Space for Sparse Polynomials:** If a polynomial has many zero coefficients, a significant portion of the array will be unused, leading to memory inefficiency.
*   **Fixed Size:** The size of the array needs to be determined beforehand based on the maximum possible degree. If the actual degree of a polynomial is much smaller than the allocated array size, space is wasted. If the degree exceeds the allocated size, you'll need to resize the array, which can be costly.

---

### 4. Basic Operations on Polynomials Using Arrays

Let's assume we have two polynomials, $P_1(x)$ and $P_2(x)$, represented by arrays `A1` and `A2` respectively.

**A. Polynomial Addition:**

To add two polynomials, we add their corresponding coefficients for each power of $x$.

$P_1(x) = a_m x^m + ... + a_0$
$P_2(x) = b_k x^k + ... + b_0$

$P_3(x) = P_1(x) + P_2(x)$

The coefficient of $x^i$ in $P_3(x)$ will be the sum of the coefficients of $x^i$ in $P_1(x)$ and $P_2(x)$.

**Algorithm:**

1.  Determine the maximum degree (`max_degree`) of the two polynomials.
2.  Create a new array `A3` of size `max_degree + 1`.
3.  Iterate from `i = 0` to `max_degree`:
    *   `A3[i] = (coefficient of x^i in P1) + (coefficient of x^i in P2)`
    *   If a polynomial doesn't have a term for $x^i$, its coefficient is considered 0.

**Example:**

$P_1(x) = 2x^2 + 3x + 1$  (Array `A1 = [1, 3, 2]`)
$P_2(x) = 4x + 5$      (Array `A2 = [5, 4]`)

*   `max_degree` = 2.
*   `A3` will be of size 3.

| i | Coeff of $x^i$ in $P_1$ (A1[i]) | Coeff of $x^i$ in $P_2$ (A2[i]) | Sum (A3[i]) | Term in $P_3$ |
|---|--------------------------------|--------------------------------|-------------|---------------|
| 0 | 1                              | 5                              | 6           | 6$x^0$        |
| 1 | 3                              | 4                              | 7           | 7$x^1$        |
| 2 | 2                              | 0 (implicit)                   | 2           | 2$x^2$        |

$P_3(x) = 2x^2 + 7x + 6$ (Array `A3 = [6, 7, 2]`)

**Time Complexity:** O(max(degree(P1), degree(P2))) - we iterate up to the maximum degree.

**B. Polynomial Subtraction:**

To subtract two polynomials, we subtract their corresponding coefficients for each power of $x$.

$P_3(x) = P_1(x) - P_2(x)$

The coefficient of $x^i$ in $P_3(x)$ will be the difference of the coefficients of $x^i$ in $P_1(x)$ and $P_2(x)$.

**Algorithm:**

1.  Determine the maximum degree (`max_degree`) of the two polynomials.
2.  Create a new array `A3` of size `max_degree + 1`.
3.  Iterate from `i = 0` to `max_degree`:
    *   `A3[i] = (coefficient of x^i in P1) - (coefficient of x^i in P2)`
    *   If a polynomial doesn't have a term for $x^i$, its coefficient is considered 0.

**Example:**

$P_1(x) = 2x^2 + 3x + 1$  (Array `A1 = [1, 3, 2]`)
$P_2(x) = 4x + 5$      (Array `A2 = [5, 4]`)

*   `max_degree` = 2.
*   `A3` will be of size 3.

| i | Coeff of $x^i$ in $P_1$ (A1[i]) | Coeff of $x^i$ in $P_2$ (A2[i]) | Difference (A3[i]) | Term in $P_3$ |
|---|--------------------------------|--------------------------------|--------------------|---------------|
| 0 | 1                              | 5                              | -4                 | -4$x^0$       |
| 1 | 3                              | 4                              | -1                 | -1$x^1$       |
| 2 | 2                              | 0 (implicit)                   | 2                  | 2$x^2$        |

$P_3(x) = 2x^2 - x - 4$ (Array `A3 = [-4, -1, 2]`)

**Time Complexity:** O(max(degree(P1), degree(P2)))

**C. Polynomial Evaluation:**

To evaluate a polynomial $P(x)$ at a specific value `val`, we substitute `val` for `x` in the polynomial expression.

$P(val) = a_n (val)^n + a_{n-1} (val)^{n-1} + ... + a_1 (val)^1 + a_0 (val)^0$

**Algorithm (Naive Approach):**

1.  Initialize `result = 0`.
2.  Iterate from `i = 0` to `degree`:
    *   Calculate `(val)^i`.
    *   Multiply the result by the coefficient `A[i]`.
    *   Add this product to `result`.

**Example:**

$P(x) = 3x^2 + 2x + 1$ (Array `A = [1, 2, 3]`)
Evaluate at `val = 2`.

*   $i = 0$: `val^0 = 1`, `term = A[0] * 1 = 1 * 1 = 1`. `result = 1`.
*   $i = 1$: `val^1 = 2`, `term = A[1] * 2 = 2 * 2 = 4`. `result = 1 + 4 = 5`.
*   $i = 2$: `val^2 = 4`, `term = A[2] * 4 = 3 * 4 = 12`. `result = 5 + 12 = 17`.

$P(2) = 17$.

**Time Complexity (Naive Approach):**
For each term, we calculate `val^i`. This typically involves `i-1` multiplications. The total number of multiplications would be approximately $O(n^2)$, where `n` is the degree.

**Algorithm (Horner's Method - More Efficient):**

Horner's method is a more efficient way to evaluate polynomials. It rewrites the polynomial as:

$P(x) = (...((a_n x + a_{n-1})x + a_{n-2})x + ... + a_1)x + a_0$

**Algorithm:**

1.  Initialize `result = A[degree]` (the leading coefficient).
2.  Iterate from `i = degree - 1` down to `0`:
    *   `result = result * val + A[i]`

**Example (using Horner's Method):**

$P(x) = 3x^2 + 2x + 1$ (Array `A = [1, 2, 3]`, degree = 2)
Evaluate at `val = 2`.

1.  Initialize `result = A[2] = 3`.
2.  `i = 1`:
    *   `result = result * val + A[1] = 3 * 2 + 2 = 6 + 2 = 8`.
3.  `i = 0`:
    *   `result = result * val + A[0] = 8 * 2 + 1 = 16 + 1 = 17`.

$P(2) = 17$.

**Time Complexity (Horner's Method):** O(degree) - This is significantly better than the naive approach.

---

### 5. Practice Questions and Exercises

**Question 1:**

Represent the polynomial $P(x) = 5x^5 - 2x^3 + 4x + 9$ using an array.

**Answer:**
The degree of the polynomial is 5. We need an array of size 6.
The terms are:
*   $x^0$: 9
*   $x^1$: 4
*   $x^2$: 0
*   $x^3$: -2
*   $x^4$: 0
*   $x^5$: 5

The array representation is `[9, 4, 0, -2, 0, 5]`.

**Question 2:**

Given $P_1(x) = 3x^3 + 2x - 5$ (Array `A1 = [-5, 2, 0, 3]`) and $P_2(x) = 2x^2 + 4x + 1$ (Array `A2 = [1, 4, 2]`).
Calculate $P_3(x) = P_1(x) + P_2(x)$ and represent it as an array.

**Answer:**
*   $P_1(x)$ degree is 3, array size 4.
*   $P_2(x)$ degree is 2, array size 3.
*   Maximum degree is 3, so $P_3(x)$ array size will be 4.

| i | Coeff of $x^i$ in $P_1$ (A1[i]) | Coeff of $x^i$ in $P_2$ (A2[i]) | Sum (A3[i]) | Term in $P_3$ |
|---|--------------------------------|--------------------------------|-------------|---------------|
| 0 | -5                             | 1                              | -4          | -4$x^0$       |
| 1 | 2                              | 4                              | 6           | 6$x^1$        |
| 2 | 0                              | 2                              | 2           | 2$x^2$        |
| 3 | 3                              | 0                              | 3           | 3$x^3$        |

$P_3(x) = 3x^3 + 2x^2 + 6x - 4$.
Array representation `A3 = [-4, 6, 2, 3]`.

**Question 3:**

Evaluate the polynomial $P(x) = x^3 - 2x^2 + 3x - 4$ (represented by array `A = [-4, 3, -2, 1]`) at `val = 3` using Horner's method.

**Answer:**
Degree = 3.
Array `A = [-4, 3, -2, 1]`.
`val = 3`.

1.  Initialize `result = A[3] = 1`.
2.  `i = 2`: `result = result * val + A[2] = 1 * 3 + (-2) = 3 - 2 = 1`.
3.  `i = 1`: `result = result * val + A[1] = 1 * 3 + 3 = 3 + 3 = 6`.
4.  `i = 0`: `result = result * val + A[0] = 6 * 3 + (-4) = 18 - 4 = 14`.

$P(3) = 14$.

---

### 6. Important Points to Remember:

*   **Array Index = Exponent:** The key to array representation of polynomials is mapping the array index to the exponent of the variable.
*   **Array Size = Degree + 1:** The array must be large enough to accommodate all terms up to the highest power (degree).
*   **Zero Coefficients:** Explicitly store zero coefficients for terms that are not present in the polynomial to maintain the index-exponent mapping.
*   **Horner's Method:** Use Horner's method for efficient polynomial evaluation (O(degree)).
*   **Sparse Polynomials:** Be mindful of memory inefficiency when using arrays for sparse polynomials. Alternative representations might be better in such cases.
*   **Operations:** Addition and subtraction involve element-wise operations on the corresponding coefficients.

---
