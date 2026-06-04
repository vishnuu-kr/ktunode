---
title: "Polynomial representation using Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List: Self"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363e7"
status: "completed"
scrapedAt: "2026-05-23T16:20:42.435Z"
---
# Data Structures: Module 2: Linked List: Polynomial Representation using Linked List

## 1. Introduction to Polynomials and Their Representation

A polynomial is an expression consisting of variables and coefficients, that involves only the operations of addition, subtraction, multiplication, and non-negative integer exponents of variables. A general polynomial can be written as:

$P(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x^1 + a_0 x^0$

where:
*   $x$ is the variable.
*   $a_i$ are the coefficients.
*   $n$ is the degree of the polynomial (the highest power of the variable).

**Key Concepts:**

*   **Term:** A product of a coefficient and one or more variables raised to a non-negative integer power. (e.g., $3x^2$)
*   **Coefficient:** The numerical factor of a term. (e.g., 3 in $3x^2$)
*   **Degree of a Term:** The sum of the exponents of the variables in a term. (e.g., 2 for $3x^2$)
*   **Degree of a Polynomial:** The highest degree of its terms. (e.g., $n$ for $P(x)$ above).
*   **Monomial:** A polynomial with only one term.
*   **Binomial:** A polynomial with two terms.
*   **Trinomial:** A polynomial with three terms.

### Why Use Linked Lists for Polynomial Representation?

While arrays can represent polynomials (e.g., an array where the index represents the power and the value at that index is the coefficient), linked lists offer advantages, especially for **sparse polynomials** (polynomials with many zero coefficients).

*   **Space Efficiency for Sparse Polynomials:** In an array representation, even if many coefficients are zero, memory is allocated for those zero coefficients. A linked list only stores the terms with non-zero coefficients, making it space-efficient for sparse polynomials.
*   **Dynamic Sizing:** Linked lists can dynamically grow or shrink as terms are added or removed, which is beneficial if the degree of the polynomial is not known in advance.

**Reference:**
*   *Fundamentals of Data Structures in C* by Horowitz, Sahni, and Freed discusses various ways to represent mathematical objects, including polynomials, and highlights the efficiency of linked lists for sparse representations.

## 2. Linked List Structure for Polynomials

A common approach is to use a linked list where each node represents a term of the polynomial. Each node typically contains:

*   **Coefficient:** The numerical value of the term.
*   **Exponent:** The power of the variable for that term.
*   **Next Pointer:** A pointer to the next node in the list.

The list is usually maintained in **decreasing order of exponents** for easier manipulation (addition, subtraction, printing).

**Node Structure (Conceptual):**

```
struct TermNode {
    int coefficient;
    int exponent;
    struct TermNode *next;
};
```

The entire polynomial can be represented by a pointer to the head of this linked list. An empty polynomial would be represented by a `NULL` head pointer.

**Example:**

Consider the polynomial $P(x) = 5x^3 - 2x^2 + 7$

This can be represented by a linked list:

```
Head -> [coeff: 5, exp: 3, next] -> [coeff: -2, exp: 2, next] -> [coeff: 7, exp: 0, next] -> NULL
```

**Important Points to Remember:**

*   The list should ideally be sorted by exponent in descending order.
*   Terms with a coefficient of 0 are typically not stored in the linked list to maintain space efficiency.

**Course Outcome Alignment:**

*   **CO2 (K3):** This topic directly addresses solving real-world problems (polynomial manipulation) using an appropriate data structure (linked list). Understanding how to represent polynomials using linked lists is a fundamental step.

## 3. Operations on Polynomials Using Linked Lists

Several operations can be performed on polynomials represented by linked lists. The most common ones include:

*   **Insertion of a Term:** Adding a new term to the polynomial.
*   **Addition of Two Polynomials:** Computing the sum of two polynomials.
*   **Subtraction of Two Polynomials:** Computing the difference of two polynomials.
*   **Multiplication of Two Polynomials:** Computing the product of two polynomials.
*   **Printing a Polynomial:** Displaying the polynomial in a readable format.

### 3.1. Insertion of a Term

To insert a new term (coefficient, exponent) into a polynomial represented by a linked list:

1.  **Create a new node** for the term.
2.  **Handle the case of an empty list:** If the list is empty, the new node becomes the head.
3.  **Handle insertion at the beginning:** If the new term's exponent is greater than the head's exponent, insert the new node before the head.
4.  **Traverse the list:** Find the correct position to insert the new node. The list should remain sorted by exponent in descending order. Iterate through the list until you find a node whose exponent is less than or equal to the new term's exponent.
5.  **Insert the node:** Link the new node between the current node and the next node.
6.  **Handle duplicate exponents:** If a term with the same exponent already exists, either update the coefficient of the existing term or decide on a specific policy (e.g., disallow duplicates, combine them). A common approach is to update the coefficient. If the coefficient becomes zero after addition/subtraction, the term can be removed.

**Example Insertion:**

Polynomial: $3x^2 + 1$ (represented as `[3, 2] -> [1, 0]`)
Insert term: $2x^1$

The list becomes: `[3, 2] -> [2, 1] -> [1, 0]`

**Reference:**
*   *Classic Data Structures* by Samanta D provides detailed algorithms for insertion and other operations on linked lists, which can be adapted for polynomial representation.

### 3.2. Addition of Two Polynomials

To add two polynomials, $P_1(x)$ and $P_2(x)$, represented by linked lists:

1.  **Initialize a new linked list** for the result polynomial, `Result`.
2.  **Use two pointers**, `ptr1` and `ptr2`, to traverse $P_1$ and $P_2$ respectively.
3.  **Iterate while both `ptr1` and `ptr2` are not NULL:**
    *   **If `ptr1->exponent > ptr2->exponent`:** The term from $P_1$ has a higher exponent. Copy the term from `ptr1` to `Result` and advance `ptr1`.
    *   **If `ptr1->exponent < ptr2->exponent`:** The term from $P_2$ has a higher exponent. Copy the term from `ptr2` to `Result` and advance `ptr2`.
    *   **If `ptr1->exponent == ptr2->exponent`:** The exponents are equal. Add their coefficients. Create a new term in `Result` with the sum of coefficients and the common exponent. Advance both `ptr1` and `ptr2`. If the sum of coefficients is 0, do not add this term to `Result`.
4.  **Append remaining terms:** After one list is exhausted, copy all remaining terms from the other list to `Result`.

**Example Addition:**

$P_1(x) = 5x^3 - 2x^2 + 7$
$P_2(x) = 3x^2 + 4x - 1$

$P_1$: `[5, 3] -> [-2, 2] -> [7, 0]`
$P_2$: `[3, 2] -> [4, 1] -> [-1, 0]`

**Steps:**

1.  Compare exponents 3 and 2. `3 > 2`. Copy `[5, 3]` to Result. `Result`: `[5, 3]`. Advance $P_1$.
2.  Compare exponents 2 and 2. Exponents are equal. Sum coefficients: `-2 + 3 = 1`. Copy `[1, 2]` to Result. `Result`: `[5, 3] -> [1, 2]`. Advance both $P_1$ and $P_2$.
3.  Compare exponents 0 and 1. `0 < 1`. Copy `[4, 1]` to Result. `Result`: `[5, 3] -> [1, 2] -> [4, 1]`. Advance $P_2$.
4.  Compare exponents 0 and 0. Exponents are equal. Sum coefficients: `7 + (-1) = 6`. Copy `[6, 0]` to Result. `Result`: `[5, 3] -> [1, 2] -> [4, 1] -> [6, 0]`. Advance both $P_1$ and $P_2$.
5.  Both $P_1$ and $P_2$ are exhausted.

Resultant Polynomial: $5x^3 + 1x^2 + 4x + 6$

**Reference:**
*   *Data Structures: A Pseudocode Approach with C* by Gilberg and Forouzan often uses linked lists to demonstrate polynomial arithmetic, providing clear pseudocode that can be translated into C.

### 3.3. Subtraction of Two Polynomials

Subtraction is similar to addition. $P_1(x) - P_2(x)$ is equivalent to $P_1(x) + (-P_2(x))$.

1.  **Negate $P_2(x)$:** For each term in $P_2$, change the sign of its coefficient.
2.  **Add $P_1(x)$ and the negated $P_2(x)$** using the same algorithm as polynomial addition.

**Example Subtraction:**

$P_1(x) = 5x^3 - 2x^2 + 7$
$P_2(x) = 3x^2 + 4x - 1$

Negate $P_2(x)$: $-P_2(x) = -3x^2 - 4x + 1$
$-P_2$: `[-3, 2] -> [-4, 1] -> [1, 0]`

Now add $P_1$ and $-P_2$:

$P_1$: `[5, 3] -> [-2, 2] -> [7, 0]`
$-P_2$: `[-3, 2] -> [-4, 1] -> [1, 0]`

**Steps:**

1.  Compare exponents 3 and 2. `3 > 2`. Copy `[5, 3]` to Result. `Result`: `[5, 3]`. Advance $P_1$.
2.  Compare exponents 2 and 2. Exponents equal. Sum coefficients: `-2 + (-3) = -5`. Copy `[-5, 2]` to Result. `Result`: `[5, 3] -> [-5, 2]`. Advance both.
3.  Compare exponents 0 and 1. `0 < 1`. Copy `[-4, 1]` to Result. `Result`: `[5, 3] -> [-5, 2] -> [-4, 1]`. Advance $-P_2$.
4.  Compare exponents 0 and 0. Exponents equal. Sum coefficients: `7 + 1 = 8`. Copy `[8, 0]` to Result. `Result`: `[5, 3] -> [-5, 2] -> [-4, 1] -> [8, 0]`. Advance both.
5.  Both lists exhausted.

Resultant Polynomial: $5x^3 - 5x^2 - 4x + 8$

### 3.4. Multiplication of Two Polynomials

Multiplication is more complex. For each term in $P_1$, you multiply it with every term in $P_2$.

1.  **Initialize a new linked list** `Result` to be empty.
2.  **Iterate through each term `term1` in $P_1$**:
    *   **Iterate through each term `term2` in $P_2$**:
        *   Calculate the product term:
            *   New Coefficient = `term1->coefficient * term2->coefficient`
            *   New Exponent = `term1->exponent + term2->exponent`
        *   **Insert this new product term** into the `Result` linked list. This insertion needs to handle combining terms with the same exponent. If a term with the calculated exponent already exists in `Result`, add the new coefficient to the existing coefficient. If the resulting coefficient is zero, remove that term from `Result`.

**Example Multiplication:**

$P_1(x) = 2x + 1$
$P_2(x) = 3x + 4$

$P_1$: `[2, 1] -> [1, 0]`
$P_2$: `[3, 1] -> [4, 0]`

**Steps:**

*   **Term [2, 1] from $P_1$:**
    *   Multiply by `[3, 1]` from $P_2$: Coefficient = `2 * 3 = 6`, Exponent = `1 + 1 = 2`. Insert `[6, 2]` into `Result`.
        `Result`: `[6, 2]`
    *   Multiply by `[4, 0]` from $P_2$: Coefficient = `2 * 4 = 8`, Exponent = `1 + 0 = 1`. Insert `[8, 1]` into `Result`.
        `Result`: `[6, 2] -> [8, 1]`

*   **Term [1, 0] from $P_1$:**
    *   Multiply by `[3, 1]` from $P_2$: Coefficient = `1 * 3 = 3`, Exponent = `0 + 1 = 1`. Insert `[3, 1]` into `Result`. The exponent 1 already exists with coefficient 8. Add: `8 + 3 = 11`. Update to `[11, 1]`.
        `Result`: `[6, 2] -> [11, 1]`
    *   Multiply by `[4, 0]` from $P_2$: Coefficient = `1 * 4 = 4`, Exponent = `0 + 0 = 0`. Insert `[4, 0]` into `Result`.
        `Result`: `[6, 2] -> [11, 1] -> [4, 0]`

Resultant Polynomial: $6x^2 + 11x + 4$

**Reference:**
*   *Theory and Problems of Data Structures* by Lipschutz (Schaum's Series) provides a good theoretical foundation and examples for algorithmic operations on data structures.

### 3.5. Printing a Polynomial

To print a polynomial represented by a linked list:

1.  **Traverse the list** from the head.
2.  For each node:
    *   Print the coefficient.
    *   If the exponent is greater than 1, print "x^" followed by the exponent.
    *   If the exponent is 1, print "x".
    *   If the exponent is 0, print nothing (the coefficient is the constant term).
    *   If it's not the last term and the next term's coefficient is positive, print " + ".
    *   If it's not the last term and the next term's coefficient is negative, print " - " (and adjust printing of the negative coefficient itself).

**Example Printing:**

List: `[5, 3] -> [-2, 2] -> [7, 0]`

Output: `5x^3 - 2x^2 + 7`

**Important Considerations for Printing:**

*   Handle the case of a zero polynomial (empty list).
*   Properly format signs (+/-) between terms.
*   Handle cases where coefficient is 1 or -1 (e.g., `x` instead of `1x`, `-x` instead of `-1x`).
*   Handle cases where exponent is 0 or 1.

**Reference:**
*   All textbooks mentioned will cover basic traversal and printing of linked lists, which is directly applicable here.

## 4. Advanced Operations and Considerations

*   **Division:** Polynomial division using linked lists is possible but significantly more complex. It involves comparing leading terms and performing subtractions, similar to long division.
*   **Evaluation:** To evaluate a polynomial $P(x)$ at a specific value of $x$, you can traverse the linked list, compute each term ($coefficient \times x^{exponent}$), and sum them up. Horner's method can also be adapted if terms are ordered appropriately or by restructuring the list.
*   **Efficiency Analysis (CO1):**
    *   **Insertion:** If the list is sorted, insertion takes $O(N)$ time in the worst case, where $N$ is the number of terms in the polynomial.
    *   **Addition/Subtraction:** These operations involve traversing both lists once. If $N_1$ and $N_2$ are the number of terms in the two polynomials, the time complexity is $O(N_1 + N_2)$.
    *   **Multiplication:** For each of $N_1$ terms in $P_1$, we iterate through $N_2$ terms in $P_2$. Each insertion into the result list can take $O(N_3)$ where $N_3$ is the number of terms in the result. In the worst case, the degree of the product polynomial can be the sum of the degrees of the original polynomials, and the number of terms can be up to $N_1 \times N_2$. Thus, the worst-case time complexity can be around $O(N_1 \times N_2 \times (N_1+N_2))$. Using more optimized insertion strategies or auxiliary data structures could improve this.

**Reference:**
*   *Advanced Data Structures* by Peter Brass might touch upon more complex data structure applications and optimizations relevant to computational algebra.
*   *Data Structures and Algorithms* by Aho, Hopcroft, and Ullman provides foundational algorithms and complexity analysis, which is crucial for understanding the performance of these operations (CO1).

## 5. Practice Questions and Exercises

**Question 1:**
Represent the polynomial $P(x) = 3x^5 - 2x^3 + 7x + 10$ using a linked list. Draw the linked list structure.

**Answer 1:**
The linked list would contain nodes representing each non-zero term:
`[3, 5] -> [-2, 3] -> [7, 1] -> [10, 0]`

**Question 2:**
Given two polynomials represented by linked lists:
$P_1(x) = 4x^4 - 3x^2 + 5$
$P_2(x) = 2x^3 + x^2 - 8$

Find their sum, $P_1(x) + P_2(x)$, using linked lists. Show the linked list representations of $P_1$, $P_2$, and the resulting sum.

**Answer 2:**

$P_1$: `[4, 4] -> [-3, 2] -> [5, 0]`
$P_2$: `[2, 3] -> [1, 2] -> [-8, 0]`

**Addition Steps:**
1. Compare 4 and 3. `4 > 3`. Copy `[4, 4]` to Result. `Result`: `[4, 4]`. Advance $P_1$.
2. Compare 2 and 3. `2 < 3`. Copy `[2, 3]` to Result. `Result`: `[4, 4] -> [2, 3]`. Advance $P_2$.
3. Compare 2 and 2. Equal. Sum coeffs: `-3 + 1 = -2`. Copy `[-2, 2]` to Result. `Result`: `[4, 4] -> [2, 3] -> [-2, 2]`. Advance both.
4. Compare 0 and 0. Equal. Sum coeffs: `5 + (-8) = -3`. Copy `[-3, 0]` to Result. `Result`: `[4, 4] -> [2, 3] -> [-2, 2] -> [-3, 0]`. Advance both.

Resultant Sum $P_1(x) + P_2(x)$: $4x^4 + 2x^3 - 2x^2 - 3$

Result List: `[4, 4] -> [2, 3] -> [-2, 2] -> [-3, 0]`

**Question 3:**
Implement a function (in pseudocode or C) to print a polynomial represented by a linked list, handling signs and exponents correctly.

**Answer 3:**

**(Pseudocode)**

```
function printPolynomial(head):
    if head is NULL:
        print "0"
        return

    current = head
    firstTerm = true

    while current is not NULL:
        // Handle sign
        if not firstTerm:
            if current.coefficient >= 0:
                print " + "
            else:
                print " - "
        else: // For the very first term
            if current.coefficient < 0:
                print "-"

        // Print coefficient (skip if 1 and not the constant term)
        abs_coeff = absolute_value(current.coefficient)
        if abs_coeff != 1 or current.exponent == 0:
            print abs_coeff

        // Print variable and exponent
        if current.exponent > 0:
            print "x"
            if current.exponent > 1:
                print "^"
                print current.exponent

        current = current.next
        firstTerm = false
```

**Question 4:**
Consider the multiplication of two polynomials:
$P_1(x) = x + 2$
$P_2(x) = x - 3$

Show the step-by-step process of multiplying them using linked list representation.

**Answer 4:**

$P_1$: `[1, 1] -> [2, 0]`
$P_2$: `[1, 1] -> [-3, 0]`

**Multiplication Steps:**

*   **Term [1, 1] from $P_1$:**
    *   Multiply by `[1, 1]` from $P_2$: Coeff = `1*1 = 1`, Exp = `1+1 = 2`. Insert `[1, 2]` into Result.
        `Result`: `[1, 2]`
    *   Multiply by `[-3, 0]` from $P_2$: Coeff = `1*(-3) = -3`, Exp = `1+0 = 1`. Insert `[-3, 1]` into Result.
        `Result`: `[1, 2] -> [-3, 1]`

*   **Term [2, 0] from $P_1$:**
    *   Multiply by `[1, 1]` from $P_2$: Coeff = `2*1 = 2`, Exp = `0+1 = 1`. Insert `[2, 1]` into Result. Exponent 1 exists with coeff -3. Add: `-3 + 2 = -1`. Update to `[-1, 1]`.
        `Result`: `[1, 2] -> [-1, 1]`
    *   Multiply by `[-3, 0]` from $P_2$: Coeff = `2*(-3) = -6`, Exp = `0+0 = 0`. Insert `[-6, 0]` into Result.
        `Result`: `[1, 2] -> [-1, 1] -> [-6, 0]`

Resultant Product: $x^2 - x - 6$

**Question 5 (Conceptual):**
When would you prefer a linked list representation for polynomials over an array representation? Explain with respect to space efficiency and time efficiency for specific operations. (Relates to CO2 and CO1)

**Answer 5:**
Linked lists are preferred for polynomials that are **sparse** (have many terms with zero coefficients).

*   **Space Efficiency:** An array representation would allocate space for every possible exponent up to the maximum degree, even if the coefficient is zero. A linked list only stores nodes for terms with non-zero coefficients. For a polynomial like $10^{100}x^{100} + 1$, an array would need $101$ elements, while a linked list only needs 1 node.
*   **Time Efficiency:**
    *   **Insertion:** For dense polynomials, an array insertion (if the array is pre-allocated to the maximum degree) might be $O(1)$ if the insertion point is known or $O(\text{degree})$ if shifting is needed. For sparse polynomials, a linked list insertion is $O(N)$ (where $N$ is the number of terms), which is generally better than allocating a large array.
    *   **Addition/Subtraction:** Both representations are similar, typically $O(N_1 + N_2)$ if using arrays with dynamic sizing or linked lists. However, if array indexing is used directly for sparse polynomials, it can be inefficient if the indices are far apart.
    *   **Multiplication:** Linked list multiplication can be $O(N_1 \times N_2 \times (N_1+N_2))$ in the naive approach. Array multiplication can be more efficient if the degree is manageable, but the space overhead for sparse polynomials remains a concern.

## 6. Summary and Key Takeaways

*   Linked lists are an effective data structure for representing polynomials, particularly **sparse** ones, due to their space efficiency.
*   Each node in the linked list typically stores the **coefficient** and **exponent** of a term.
*   Maintaining the list in **descending order of exponents** simplifies polynomial operations.
*   Key operations include **insertion, addition, subtraction, multiplication, and printing**.
*   The time complexity of these operations depends on the number of terms in the polynomials and the efficiency of the linked list manipulation.
*   Understanding these operations is crucial for solving real-world problems involving algebraic expressions (CO2).

---

**Learning Outcome Checklist:**

*   [x] Understanding the concept of polynomials and their representation.
*   [x] Why linked lists are suitable for polynomial representation.
*   [x] Designing the linked list structure for polynomial terms.
*   [x] Implementing insertion of terms.
*   [x] Implementing polynomial addition.
*   [x] Implementing polynomial subtraction.
*   [x] Implementing polynomial multiplication.
*   [x] Implementing printing of polynomials.
*   [x] Discussing efficiency and performance considerations (CO1).
*   [x] Aligning with course outcomes (CO2).

---
