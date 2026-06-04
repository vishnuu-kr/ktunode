---
title: "Polynomial representation using Arrays"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac27"
status: "completed"
scrapedAt: "2026-05-20T16:22:45.461Z"
---
# DATA STRUCTURES AND ALGORITHMS - MODULE 1: Basic Concepts of Data Structures - Polynomial Representation using Arrays

## Introduction

This module covers the fundamental concepts of representing polynomials using arrays. We'll explore different array-based approaches, their advantages, disadvantages, and learn how to perform basic operations on polynomials represented in this manner.

## Learning Outcomes

By the end of this module, you will be able to:

*   Understand the concept of a polynomial and its representation.
*   Represent polynomials using arrays (both dense and sparse representations).
*   Analyze the advantages and disadvantages of each representation.
*   Implement basic polynomial operations (addition, multiplication) using arrays.
*   Evaluate the space and time complexity of each approach.

## 1. Key Concepts and Definitions

*   **Polynomial:** A polynomial is an expression consisting of variables (also called indeterminates) and coefficients, that involves only the operations of addition, subtraction, multiplication, and non-negative integer exponents of variables.  Example: `3x^2 + 2x + 1`

*   **Term:** A term in a polynomial is a single expression of the form `coefficient * x^exponent`.

*   **Coefficient:**  The numerical factor of a term.

*   **Exponent:** The power to which the variable `x` is raised in a term. Also known as degree.

*   **Degree of a Polynomial:**  The highest exponent (power) of the variable in the polynomial.

*   **Dense Polynomial:** A polynomial where most of the coefficients are non-zero.

*   **Sparse Polynomial:** A polynomial where most of the coefficients are zero.

## 2. Polynomial Representation using Arrays

### 2.1 Dense Representation

*   **Concept:**  A dense representation uses an array where each index corresponds to an exponent and the value at that index represents the coefficient of that exponent.  The index 0 stores the coefficient of x^0 (the constant term), index 1 stores the coefficient of x^1, and so on.

*   **Implementation:**
    *   The array's size is equal to the degree of the polynomial + 1.
    *   `polynomial[i]` stores the coefficient of the term `x^i`.

*   **Example:**
    *   Polynomial: `5x^4 + 0x^3 + 2x^2 + 0x + 1`
    *   Array Representation: `[1, 0, 2, 0, 5]`  (where `polynomial[0] = 1`, `polynomial[1] = 0`, `polynomial[2] = 2`, `polynomial[3] = 0`, `polynomial[4] = 5`)

*   **Advantages:**
    *   Simple to implement.
    *   Efficient for polynomials with most non-zero coefficients (dense polynomials).
    *   Easy to access the coefficient of any term given its exponent.

*   **Disadvantages:**
    *   Wasteful for sparse polynomials (polynomials with many zero coefficients). Significant memory is used for storing zero coefficients.
    *   Memory usage increases significantly with the degree of the polynomial, even if it is sparse.

*   **C/C++ Example:**

```c++
#include <iostream>
#include <vector>

using namespace std;

int main() {
  // Represents 5x^4 + 0x^3 + 2x^2 + 0x + 1
  vector<int> polynomial = {1, 0, 2, 0, 5};
  int degree = polynomial.size() - 1;

  cout << "Polynomial Degree: " << degree << endl;

  cout << "Polynomial: ";
  for (int i = degree; i >= 0; --i) {
    if (polynomial[i] != 0) {
      cout << polynomial[i] << "x^" << i;
      if (i > 0) {
        cout << " + ";
      }
    }
  }
  cout << endl;

  return 0;
}
```

### 2.2 Sparse Representation

*   **Concept:**  A sparse representation uses an array (or a linked list) to store only the non-zero terms of the polynomial.  Each element in the array typically stores both the coefficient and the exponent of the term.

*   **Implementation:**
    *   Use an array of structures (or pairs) where each element represents a non-zero term.
    *   Each structure/pair contains two fields: `coefficient` and `exponent`.

*   **Example:**
    *   Polynomial: `5x^4 + 2x^2 + 1`
    *   Array Representation: `[(5, 4), (2, 2), (1, 0)]`

*   **Advantages:**
    *   Memory-efficient for sparse polynomials.  Only stores the non-zero terms.

*   **Disadvantages:**
    *   More complex to implement than the dense representation.
    *   Accessing the coefficient of a particular exponent requires searching the array.
    *   Arithmetic operations (addition, multiplication) are more complex to implement.

*   **C/C++ Example:**

```c++
#include <iostream>
#include <vector>

using namespace std;

struct Term {
  int coefficient;
  int exponent;
};

int main() {
  // Represents 5x^4 + 2x^2 + 1
  vector<Term> polynomial = {{5, 4}, {2, 2}, {1, 0}};

  cout << "Polynomial: ";
  for (const auto& term : polynomial) {
    cout << term.coefficient << "x^" << term.exponent;
    if (&term != &polynomial.back()) {
      cout << " + ";
    }
  }
  cout << endl;

  return 0;
}
```

## 3. Polynomial Operations

### 3.1 Polynomial Addition

**a. Dense Representation:**

*   **Algorithm:**
    1.  Create a new array to store the sum of the two polynomials.
    2.  Iterate through both polynomial arrays up to the maximum degree.
    3.  Add the coefficients at corresponding indices and store the result in the new array.
    4.  If the polynomials have different degrees, copy the remaining terms from the polynomial with the higher degree.

*   **Time Complexity:** O(n), where n is the maximum degree of the two polynomials.
*   **Space Complexity:** O(n), for the new polynomial array.

**b. Sparse Representation:**

*   **Algorithm:**
    1.  Create a new array (or vector) to store the sum of the two polynomials.
    2.  Use two pointers, one for each polynomial array.
    3.  Compare the exponents of the terms pointed to by the pointers.
        *   If the exponents are equal, add the coefficients. If the sum is non-zero, add the term to the result. Advance both pointers.
        *   If the exponent of the first polynomial is greater, add the term from the first polynomial to the result. Advance the first pointer.
        *   If the exponent of the second polynomial is greater, add the term from the second polynomial to the result. Advance the second pointer.
    4.  After one of the polynomials is exhausted, copy the remaining terms from the other polynomial to the result.

*   **Time Complexity:** O(m + n), where m and n are the number of non-zero terms in the two polynomials.
*   **Space Complexity:** O(m + n) in the worst case (when all terms are distinct).

**Example (Dense Representation):**

```
Polynomial 1: 2x^3 + x^2 + 5
Polynomial 2: x^2 + 3x + 2

Array 1: [5, 0, 1, 2]
Array 2: [2, 3, 1, 0]

Sum: 2x^3 + 2x^2 + 3x + 7

Array Sum: [7, 3, 2, 2]
```

**Example (Sparse Representation):**

```
Polynomial 1: 5x^4 + 2x^2 + 1
Polynomial 2: 3x^3 + x^2 + 4x

Array 1: [(5, 4), (2, 2), (1, 0)]
Array 2: [(3, 3), (1, 2), (4, 1)]

Sum: 5x^4 + 3x^3 + 3x^2 + 4x + 1

Array Sum: [(5, 4), (3, 3), (3, 2), (4, 1), (1, 0)]
```

### 3.2 Polynomial Multiplication

**a. Dense Representation:**

*   **Algorithm:**
    1.  Create a new array to store the product of the two polynomials. Initialize all elements to 0.
    2.  Iterate through each term of the first polynomial.
    3.  For each term in the first polynomial, iterate through each term of the second polynomial.
    4.  Multiply the coefficients and add the exponents of the two terms.
    5.  Add the product of the coefficients to the corresponding index (sum of exponents) in the product array.

*   **Time Complexity:** O(m*n), where m and n are the degrees of the two polynomials.
*   **Space Complexity:** O(m + n), for the new polynomial array.

**b. Sparse Representation:**

*   **Algorithm:**
    1.  Create a new array (or vector) to store the product of the two polynomials.
    2.  Iterate through each term of the first polynomial.
    3.  For each term in the first polynomial, iterate through each term of the second polynomial.
    4.  Multiply the coefficients and add the exponents of the two terms to create a new term.
    5.  Check if a term with the same exponent already exists in the product array.
        *   If it exists, add the new coefficient to the existing coefficient.
        *   If it doesn't exist, insert the new term into the product array (maintaining sorted order by exponent).

*   **Time Complexity:** O(m*n) in the worst case, where m and n are the number of non-zero terms in the two polynomials. Sorting the product polynomial can add extra overhead depending on the sorting algorithm used (typically O((m*n) log(m*n))).
*   **Space Complexity:** O(m*n) in the worst case (when all terms have different exponents).

**Example (Dense Representation):**

```
Polynomial 1: x + 1
Polynomial 2: x + 1

Array 1: [1, 1]
Array 2: [1, 1]

Product: x^2 + 2x + 1

Array Product: [1, 2, 1]
```

**Example (Sparse Representation):**

```
Polynomial 1: 2x^2 + 1
Polynomial 2: x + 3

Array 1: [(2, 2), (1, 0)]
Array 2: [(1, 1), (3, 0)]

Product: 2x^3 + 6x^2 + x + 3

Array Product: [(2, 3), (6, 2), (1, 1), (3, 0)]
```

## 4. Practice Questions/Exercises

1.  **Question:**  Represent the polynomial `7x^5 - 3x^2 + 2` using both dense and sparse array representations.
    *   **Answer (Dense):**  `[2, 0, -3, 0, 0, 7]`
    *   **Answer (Sparse):** `[(7, 5), (-3, 2), (2, 0)]`

2.  **Question:** Given two polynomials represented in dense arrays: `A = [1, 2, 3]` and `B = [4, 5]`. What is the sum of the two polynomials represented as a dense array?  Remember to handle different polynomial lengths.
    *   **Answer:** `[5, 7, 3]`

3.  **Question:** Given two polynomials represented in sparse arrays: `A = [(3, 2), (1, 0)]` and `B = [(2, 1), (4, 0)]`. What is the sum of the two polynomials represented as a sparse array?
    *   **Answer:** `[(3, 2), (2, 1), (5, 0)]`

4.  **Question:**  What are the advantages and disadvantages of using a sparse representation for polynomials?
    *   **Answer:**
        *   **Advantages:** Memory-efficient for sparse polynomials.
        *   **Disadvantages:** More complex to implement, accessing coefficients requires searching, and arithmetic operations are more complex.

5. **Question:** Which representation is better for a polynomial 𝑥¹⁰⁰⁰ + 1 and why?
    * **Answer:** Sparse representation. Because only two terms have non-zero coefficients, the dense representation would require an array of size 1001, wasting significant memory. The sparse representation would only need to store two terms and their coefficients.

## 5. Important Points to Remember

*   Choose the appropriate representation (dense or sparse) based on the characteristics of the polynomials you are working with. Dense representation is efficient for dense polynomials, while sparse representation is efficient for sparse polynomials.
*   Understand the time and space complexity of different operations for each representation.
*   Consider using more advanced data structures like linked lists or hash tables for representing polynomials, especially for very large or very sparse polynomials, as they can provide more efficient storage and manipulation capabilities.
*   Always consider memory usage, particularly when dealing with high-degree polynomials.
