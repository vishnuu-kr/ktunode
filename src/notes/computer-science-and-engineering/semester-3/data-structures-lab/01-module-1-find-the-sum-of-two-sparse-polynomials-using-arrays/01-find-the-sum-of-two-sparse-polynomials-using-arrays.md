---
title: "Find the sum of two sparse polynomials using arrays"
subject: "DATA STRUCTURES LAB"
module: "Module 1: Find the sum of two sparse polynomials using arrays"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae66"
status: "completed"
scrapedAt: "2026-05-20T16:23:17.039Z"
---
# DATA STRUCTURES LAB: Module 1 - Sparse Polynomial Addition Using Arrays

## Topic: Find the Sum of Two Sparse Polynomials Using Arrays

### Description: This module focuses on representing and adding sparse polynomials using arrays in a memory-efficient manner.  Sparse polynomials are polynomials with a significant number of zero coefficients.

### Learning Outcomes:

*   Understand the concept of a sparse polynomial.
*   Represent a sparse polynomial using arrays (typically 2D arrays or parallel arrays).
*   Implement an algorithm to add two sparse polynomials represented in array format.
*   Analyze the time and space complexity of the sparse polynomial addition algorithm.

---

## 1. Key Concepts and Definitions

*   **Polynomial:** An expression consisting of variables (also called indeterminates) and coefficients, that involves only the operations of addition, subtraction, multiplication, and non-negative integer exponents of variables.  Example: 3x^2 + 2x + 1
*   **Sparse Polynomial:** A polynomial where most of the coefficients are zero.  Example: 5x^100 + 2x^5 + 1 (Many terms between x^100 and x^5 and x^5 and x^0 are missing with coefficients of zero).
*   **Dense Polynomial:** A polynomial where most of the coefficients are non-zero. Example: x^3 + 2x^2 + 3x + 4
*   **Coefficient:**  The numerical or constant quantity placed before and multiplying the variable in an algebraic term.  Example: In 3x^2, 3 is the coefficient.
*   **Exponent:** The power to which a variable is raised. Example: In 3x^2, 2 is the exponent.
*   **Term:** A single expression formed by the product of coefficients and variables raised to exponents.  Example: 3x^2, 2x, 1 are terms in the polynomial 3x^2 + 2x + 1.
*   **Array Representation:** Storing the non-zero terms of a sparse polynomial in an array to save memory.
*   **Parallel Arrays:** Using multiple arrays to store related data. For sparse polynomials, one array typically stores coefficients and another stores corresponding exponents.
*   **2D Array (or Matrix) Representation:**  Using a two-dimensional array to store coefficients and exponents.  Each row represents a term of the polynomial.

---

## 2. Representing Sparse Polynomials Using Arrays

There are two common methods for representing sparse polynomials using arrays:

### 2.1 Parallel Arrays

*   Create two separate arrays: `coefficients` and `exponents`.
*   The `i`-th element of `coefficients` stores the coefficient of a term, and the `i`-th element of `exponents` stores the corresponding exponent.
*   The length of both arrays will be equal to the number of non-zero terms in the polynomial.

**Example:**

Polynomial: 5x^100 + 2x^5 + 1

*   `coefficients = [5, 2, 1]`
*   `exponents = [100, 5, 0]`

**Advantages:**

*   Simple to understand and implement.

**Disadvantages:**

*   Requires managing two separate arrays.

### 2.2 2D Array (Matrix)

*   Create a 2D array (matrix) where each row represents a non-zero term.
*   The first element of the row stores the coefficient, and the second element stores the exponent.

**Example:**

Polynomial: 5x^100 + 2x^5 + 1

```
polynomial = [
    [5, 100],
    [2, 5],
    [1, 0]
]
```

**Advantages:**

*   Data for each term is grouped together in a single row.

**Disadvantages:**

*   Can be slightly less efficient in some languages compared to parallel arrays, especially if memory allocation is not optimized.

---

## 3. Algorithm for Adding Two Sparse Polynomials

The core idea is to iterate through the terms of both polynomials and perform the following steps:

1.  **Compare Exponents:** Compare the exponents of the current terms from both polynomials.
2.  **Equal Exponents:** If the exponents are equal, add the coefficients and store the result in the result polynomial.  If the sum of coefficients is zero, the term is skipped. Increment the pointers for both polynomials.
3.  **First Exponent Greater:** If the exponent of the first polynomial is greater, add the term from the first polynomial to the result polynomial and increment the pointer for the first polynomial.
4.  **Second Exponent Greater:** If the exponent of the second polynomial is greater, add the term from the second polynomial to the result polynomial and increment the pointer for the second polynomial.
5.  **Handle Remaining Terms:** After one of the polynomials is exhausted, add any remaining terms from the other polynomial to the result polynomial.

**Algorithm (using parallel arrays):**

```
function addSparsePolynomials(coeffs1, exps1, coeffs2, exps2):
    resultCoeffs = []
    resultExps = []
    i = 0  // Index for polynomial 1
    j = 0  // Index for polynomial 2

    while i < length(coeffs1) and j < length(coeffs2):
        if exps1[i] == exps2[j]:
            sumCoeff = coeffs1[i] + coeffs2[j]
            if sumCoeff != 0:
                resultCoeffs.append(sumCoeff)
                resultExps.append(exps1[i])
            i = i + 1
            j = j + 1
        else if exps1[i] > exps2[j]:
            resultCoeffs.append(coeffs1[i])
            resultExps.append(exps1[i])
            i = i + 1
        else:  // exps1[i] < exps2[j]
            resultCoeffs.append(coeffs2[j])
            resultExps.append(exps2[j])
            j = j + 1

    // Add remaining terms from polynomial 1
    while i < length(coeffs1):
        resultCoeffs.append(coeffs1[i])
        resultExps.append(exps1[i])
        i = i + 1

    // Add remaining terms from polynomial 2
    while j < length(coeffs2):
        resultCoeffs.append(coeffs2[j])
        resultExps.append(exps2[j])
        j = j + 1

    return resultCoeffs, resultExps
```

**Example:**

Polynomial 1: 5x^100 + 2x^5 + 1
Polynomial 2: 3x^50 + 4x^5 + 7

*   coeffs1 = [5, 2, 1]
*   exps1 = [100, 5, 0]
*   coeffs2 = [3, 4, 7]
*   exps2 = [50, 5, 0]

Result: 5x^100 + 3x^50 + 6x^5 + 8

*   resultCoeffs = [5, 3, 6, 8]
*   resultExps = [100, 50, 5, 0]

**Algorithm (using 2D Array):**

```python
def add_sparse_polynomials_2d(poly1, poly2):
    """
    Adds two sparse polynomials represented as 2D arrays.

    Args:
    poly1: A 2D array representing the first polynomial (e.g., [[5, 100], [2, 5], [1, 0]]).
    poly2: A 2D array representing the second polynomial.

    Returns:
    A 2D array representing the sum of the two polynomials.
    """
    result = []
    i = 0
    j = 0

    while i < len(poly1) and j < len(poly2):
        if poly1[i][1] == poly2[j][1]:  # Compare exponents
            sum_coeff = poly1[i][0] + poly2[j][0]
            if sum_coeff != 0:
                result.append([sum_coeff, poly1[i][1]])
            i += 1
            j += 1
        elif poly1[i][1] > poly2[j][1]:  # poly1's exponent is greater
            result.append(poly1[i])
            i += 1
        else:  # poly2's exponent is greater
            result.append(poly2[j])
            j += 1

    # Add remaining terms from poly1
    while i < len(poly1):
        result.append(poly1[i])
        i += 1

    # Add remaining terms from poly2
    while j < len(poly2):
        result.append(poly2[j])
        j += 1

    return result

# Example usage:
poly1 = [[5, 100], [2, 5], [1, 0]]
poly2 = [[3, 50], [4, 5], [7, 0]]
sum_poly = add_sparse_polynomials_2d(poly1, poly2)
print(sum_poly)  # Output: [[5, 100], [3, 50], [6, 5], [8, 0]]
```

---

## 4. Time and Space Complexity Analysis

*   **Time Complexity:**  O(m + n), where 'm' is the number of non-zero terms in the first polynomial and 'n' is the number of non-zero terms in the second polynomial. This is because we iterate through both polynomials at most once.
*   **Space Complexity:** O(m + n) in the worst case, where 'm' is the number of non-zero terms in the first polynomial and 'n' is the number of non-zero terms in the second polynomial. This is because, in the worst case, the resulting polynomial might contain all the terms from both input polynomials (e.g., if all exponents are distinct).

---

## 5. Practice Questions/Exercises

1.  **Implement the `addSparsePolynomials` function in your preferred programming language using parallel arrays.**  Test it with various sparse polynomials to ensure it works correctly.

    **Example Input:**

    *   Polynomial 1: 2x^10 + 3x^2 + 1
    *   Polynomial 2: 5x^5 + 4x^2 + 2x + 3

    **Expected Output:**

    *   7x^10 + 5x^5 + 7x^2 + 2x + 4 (represented as arrays)

    **Answer (Python):**

    ```python
    def add_sparse_polynomials(coeffs1, exps1, coeffs2, exps2):
        result_coeffs = []
        result_exps = []
        i = 0
        j = 0

        while i < len(coeffs1) and j < len(coeffs2):
            if exps1[i] == exps2[j]:
                sum_coeff = coeffs1[i] + coeffs2[j]
                if sum_coeff != 0:
                    result_coeffs.append(sum_coeff)
                    result_exps.append(exps1[i])
                i += 1
                j += 1
            elif exps1[i] > exps2[j]:
                result_coeffs.append(coeffs1[i])
                result_exps.append(exps1[i])
                i += 1
            else:
                result_coeffs.append(coeffs2[j])
                result_exps.append(exps2[j])
                j += 1

        while i < len(coeffs1):
            result_coeffs.append(coeffs1[i])
            result_exps.append(exps1[i])
            i += 1

        while j < len(coeffs2):
            result_coeffs.append(coeffs2[j])
            result_exps.append(exps2[j])
            j += 1

        return result_coeffs, result_exps

    # Example Usage
    coeffs1 = [2, 3, 1]
    exps1 = [10, 2, 0]
    coeffs2 = [5, 4, 2, 3]
    exps2 = [5, 2, 1, 0]

    result_coeffs, result_exps = add_sparse_polynomials(coeffs1, exps1, coeffs2, exps2)
    print("Coefficients:", result_coeffs) # Output: Coefficients: [2, 5, 7, 2, 4]
    print("Exponents:", result_exps)       # Output: Exponents: [10, 5, 2, 1, 0]
    ```

2.  **Implement the `addSparsePolynomials` function using a 2D array.**  Test it with the same sparse polynomials as in question 1.

    **Answer (Python):**

    ```python
    def add_sparse_polynomials_2d(poly1, poly2):
        result = []
        i = 0
        j = 0

        while i < len(poly1) and j < len(poly2):
            if poly1[i][1] == poly2[j][1]:
                sum_coeff = poly1[i][0] + poly2[j][0]
                if sum_coeff != 0:
                    result.append([sum_coeff, poly1[i][1]])
                i += 1
                j += 1
            elif poly1[i][1] > poly2[j][1]:
                result.append(poly1[i])
                i += 1
            else:
                result.append(poly2[j])
                j += 1

        while i < len(poly1):
            result.append(poly1[i])
            i += 1

        while j < len(poly2):
            result.append(poly2[j])
            j += 1

        return result

    # Example Usage
    poly1 = [[2, 10], [3, 2], [1, 0]]
    poly2 = [[5, 5], [4, 2], [2, 1], [3, 0]]

    result_poly = add_sparse_polynomials_2d(poly1, poly2)
    print(result_poly)  # Output: [[2, 10], [5, 5], [7, 2], [2, 1], [4, 0]]
    ```

3.  **Consider the polynomials: P1 = 7x^5 - 2x^3 + 1, and P2 = -7x^5 + 2x^3 -1. What will be the result of P1 + P2 using the sparse polynomial addition algorithm?**

    **Answer:**

    P1 + P2 = 0. Since all the corresponding terms cancel out when added, the result is zero.  The algorithm should handle this and return an empty polynomial (an empty list or array).

4.  **Modify the provided code (using either parallel arrays or 2D arrays) to handle negative exponents.**  (This will require some changes to the algorithm logic.)

5.  **How would you represent the polynomial `0x^10 + 0x^5 + 0x^0` using the array representation for sparse polynomials?  How would this affect the addition algorithm?**

    **Answer:**

    This polynomial is simply zero. Ideally, it would be represented by empty arrays or a completely empty polynomial structure (e.g., `coeffs = []`, `exps = []`). The addition algorithm needs to be able to handle empty input polynomials without crashing.  If non-zero values are mistakenly included (even very small values instead of true zeroes), those terms will be treated as part of the polynomial.

---

## 6. Important Points to Remember

*   Sparse polynomials are polynomials with many zero coefficients, and efficient representation is crucial for memory usage.
*   Parallel arrays and 2D arrays are common methods for representing sparse polynomials.
*   The time complexity of adding sparse polynomials is primarily determined by the number of non-zero terms.
*   The algorithm needs to handle cases where exponents are equal, one exponent is greater than the other, and when one polynomial has more terms than the other.
*   Pay attention to edge cases such as empty polynomials or polynomials that result in zero after addition.
*   Always test your implementation thoroughly with various examples to ensure correctness.  Consider edge cases such as negative coefficients, duplicate exponents, and polynomials that sum to zero.
