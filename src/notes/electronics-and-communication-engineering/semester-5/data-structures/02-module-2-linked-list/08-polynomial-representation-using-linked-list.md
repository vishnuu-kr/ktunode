---
title: "Polynomial representation using Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea0f"
status: "completed"
scrapedAt: "2026-05-23T17:55:07.570Z"
---
# Data Structures: Module 2 - Linked List

## Topic: Polynomial Representation Using Linked List

---

### **Learning Outcomes Covered:**

*   **LO1:** Understand the concept of polynomial representation and its various forms.
*   **LO2:** Explain how a linked list can be used to represent a polynomial.
*   **LO3:** Design and implement operations on polynomials represented by linked lists, such as addition, subtraction, and multiplication.
*   **LO4:** Analyze the time complexity of polynomial operations using linked lists.
*   **LO5:** Compare linked list representation with other representations (e.g., arrays) for polynomials.

---

### **Introduction to Polynomials**

A polynomial is a mathematical expression consisting of variables (also called indeterminates) and coefficients, that involves only the operations of addition, subtraction, multiplication, and non-negative integer exponentiation of variables.

**General form of a polynomial:**

$P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x^1 + a_0 x^0$

Where:
*   $x$ is the variable.
*   $a_i$ are the coefficients (constants).
*   $n$ is the degree of the polynomial (the highest power of $x$).
*   Each term $a_i x^i$ consists of a coefficient ($a_i$) and an exponent ($i$).

**Example:** $3x^5 + 2x^3 - 7x + 4$

This polynomial has terms with exponents 5, 3, 1, and 0. The coefficients are 3, 2, -7, and 4 respectively. Note that terms with exponents 4 and 2 have coefficients of 0, and are not explicitly written.

---

### **Why Use Linked Lists for Polynomial Representation?**

While polynomials can be represented using arrays (especially if the degree is fixed and known beforehand), linked lists offer advantages in certain scenarios:

*   **Sparse Polynomials:** When a polynomial has many terms with zero coefficients (i.e., it's sparse), an array representation would waste a lot of memory storing these zero coefficients. A linked list only stores the non-zero terms, making it memory-efficient for sparse polynomials.
*   **Dynamic Operations:** Operations like polynomial addition and subtraction can result in polynomials of varying degrees. Linked lists are more flexible than arrays in handling dynamic changes in size or structure.
*   **Efficiency of Operations:** Certain operations, like inserting or deleting terms (though less common in standard polynomial operations), can be more efficient with linked lists.

*(Refer to: Fundamentals of Data Structures in C by Horowitz, Sahni, and Anderson-Freed - Chapter on Linked Lists, discussing memory efficiency and dynamic allocation.)*

---

### **Representing a Polynomial using a Linked List**

Each non-zero term of a polynomial can be represented as a node in a linked list. Each node will store:

1.  **Coefficient:** The numerical coefficient of the term.
2.  **Exponent:** The power of the variable for that term.
3.  **Next Pointer:** A pointer to the next term (node) in the polynomial.

The linked list will typically be sorted in descending order of exponents for easier processing of operations.

**Structure of a Node:**

```c
struct Term {
    int coefficient; // The coefficient of the term
    int exponent;    // The exponent of the variable
    struct Term *next; // Pointer to the next term
};
```

**The Polynomial as a Linked List:**

A polynomial can be represented by a pointer to the first term (head) of the linked list. An empty polynomial would be represented by a `NULL` pointer.

**Example: Polynomial $3x^5 + 2x^3 - 7x + 4$**

This can be represented as a linked list:

(Head) -> [coeff: 3, exp: 5] -> [coeff: 2, exp: 3] -> [coeff: -7, exp: 1] -> [coeff: 4, exp: 0] -> NULL

---

### **Operations on Polynomials using Linked Lists**

Let's explore the implementation of common polynomial operations. We'll assume a function `createNode(coeff, exp)` that allocates memory for a new term and initializes its fields.

#### **1. Polynomial Creation/Insertion**

A polynomial can be built by inserting terms one by one. The insertion should maintain the sorted order of exponents (descending).

```c
// Function to insert a term into a polynomial (linked list)
// Assumes terms are inserted in descending order of exponent
struct Term *insertTerm(struct Term *poly, int coeff, int exp) {
    struct Term *newNode = createNode(coeff, exp);
    if (poly == NULL || exp > poly->exponent) {
        // Insert at the beginning
        newNode->next = poly;
        return newNode;
    }

    struct Term *current = poly;
    while (current->next != NULL && current->next->exponent > exp) {
        current = current->next;
    }

    // If a term with the same exponent already exists, add coefficients
    if (current->next != NULL && current->next->exponent == exp) {
        current->next->coefficient += coeff;
        // If coefficient becomes zero, we might optionally remove the node
        // For simplicity here, we'll just update it.
        // If coefficient is 0, we might need to link around it.
    } else {
        // Insert the new node
        newNode->next = current->next;
        current->next = newNode;
    }
    return poly;
}
```

**Important Point:** Handling duplicate exponents during insertion is crucial. If a term with the same exponent already exists, their coefficients should be added. If the resulting coefficient is zero, that term can effectively be removed.

#### **2. Polynomial Addition**

To add two polynomials $P_1(x)$ and $P_2(x)$ represented by linked lists `poly1` and `poly2`, we traverse both lists simultaneously.

**Algorithm:**

1.  Initialize an empty result polynomial `result = NULL`.
2.  Use three pointers: `ptr1` for `poly1`, `ptr2` for `poly2`, and `tail` for `result`.
3.  Iterate while `ptr1` is not NULL or `ptr2` is not NULL:
    *   **Case 1: Both `ptr1` and `ptr2` are not NULL.**
        *   If `ptr1->exponent == ptr2->exponent`:
            *   Add their coefficients: `sum_coeff = ptr1->coefficient + ptr2->coefficient`.
            *   If `sum_coeff != 0`, create a new term with `sum_coeff` and `ptr1->exponent` and append it to `result`.
            *   Move `ptr1` and `ptr2` to their next nodes.
        *   If `ptr1->exponent > ptr2->exponent`:
            *   Append the term from `ptr1` (with `ptr1->coefficient`, `ptr1->exponent`) to `result`.
            *   Move `ptr1` to its next node.
        *   If `ptr1->exponent < ptr2->exponent`:
            *   Append the term from `ptr2` (with `ptr2->coefficient`, `ptr2->exponent`) to `result`.
            *   Move `ptr2` to its next node.
    *   **Case 2: `ptr1` is not NULL, `ptr2` is NULL.**
        *   Append the remaining terms from `poly1` to `result`.
        *   Move `ptr1` to its next node.
    *   **Case 3: `ptr1` is NULL, `ptr2` is not NULL.**
        *   Append the remaining terms from `poly2` to `result`.
        *   Move `ptr2` to its next node.
4.  Return `result`.

*(Refer to: Classic Data Structures by Samanta D - Chapter on Linked Lists, section on applications, might have similar traversal examples.)*
*(Refer to: Data Structures: A Pseudocode Approach with C by Gilberg and Forouzan - Example implementations of list traversals.)*

**Example Addition: ($3x^2 + 2x + 1$) + ($4x^3 + 5x - 3$)**

*   `poly1`: [3, 2] -> [2, 1] -> [1, 0] -> NULL
*   `poly2`: [4, 3] -> [5, 1] -> [-3, 0] -> NULL

**Step-by-step:**

1.  Compare exponents 2 (from poly1) and 3 (from poly2). 3 is greater.
    *   Append [4, 3] to result.
    *   `result`: [4, 3] -> NULL
    *   `ptr1` at [3, 2], `ptr2` at [5, 1]
2.  Compare exponents 2 (from poly1) and 1 (from poly2). 2 is greater.
    *   Append [3, 2] to result.
    *   `result`: [4, 3] -> [3, 2] -> NULL
    *   `ptr1` at [2, 1], `ptr2` at [5, 1]
3.  Compare exponents 1 (from poly1) and 1 (from poly2). Exponents are equal.
    *   Sum coefficients: 2 + 5 = 7.
    *   Append [7, 1] to result.
    *   `result`: [4, 3] -> [3, 2] -> [7, 1] -> NULL
    *   `ptr1` at [1, 0], `ptr2` at [-3, 0]
4.  Compare exponents 0 (from poly1) and 0 (from poly2). Exponents are equal.
    *   Sum coefficients: 1 + (-3) = -2.
    *   Append [-2, 0] to result.
    *   `result`: [4, 3] -> [3, 2] -> [7, 1] -> [-2, 0] -> NULL
    *   `ptr1` is NULL, `ptr2` is NULL.

**Final Result:** $4x^3 + 3x^2 + 7x - 2$

---

#### **3. Polynomial Subtraction**

Subtraction is similar to addition. For $P_1(x) - P_2(x)$, we can add $P_1(x)$ and $(-1) * P_2(x)$. This involves traversing `poly1` and `poly2`, and when taking a term from `poly2`, negating its coefficient.

**Algorithm:**

1.  Create a copy of `poly2` and negate all coefficients in the copy. Let this be `negPoly2`.
2.  Add `poly1` and `negPoly2` using the polynomial addition algorithm.

Alternatively, directly modify the addition logic:

1.  Initialize an empty result polynomial `result = NULL`.
2.  Use three pointers: `ptr1` for `poly1`, `ptr2` for `poly2`, and `tail` for `result`.
3.  Iterate while `ptr1` is not NULL or `ptr2` is not NULL:
    *   **Case 1: Both `ptr1` and `ptr2` are not NULL.**
        *   If `ptr1->exponent == ptr2->exponent`:
            *   Subtract their coefficients: `diff_coeff = ptr1->coefficient - ptr2->coefficient`.
            *   If `diff_coeff != 0`, create a new term with `diff_coeff` and `ptr1->exponent` and append it to `result`.
            *   Move `ptr1` and `ptr2` to their next nodes.
        *   If `ptr1->exponent > ptr2->exponent`:
            *   Append the term from `ptr1` to `result`.
            *   Move `ptr1` to its next node.
        *   If `ptr1->exponent < ptr2->exponent`:
            *   Append a term with negated coefficient from `ptr2` to `result`. (i.e., `(-ptr2->coefficient)`, `ptr2->exponent`).
            *   Move `ptr2` to its next node.
    *   **Case 2: `ptr1` is not NULL, `ptr2` is NULL.**
        *   Append the remaining terms from `poly1` to `result`.
        *   Move `ptr1` to its next node.
    *   **Case 3: `ptr1` is NULL, `ptr2` is not NULL.**
        *   Append terms from `poly2` with negated coefficients to `result`.
        *   Move `ptr2` to its next node.
4.  Return `result`.

*(Note: This operation directly relates to CO2 - solving real-world problems efficiently, as polynomial arithmetic is fundamental in many scientific and engineering applications.)*

---

#### **4. Polynomial Multiplication**

Multiplying two polynomials $P_1(x)$ and $P_2(x)$ is more complex. If $P_1(x)$ has $m$ terms and $P_2(x)$ has $n$ terms, the resulting polynomial can have up to $m \times n$ terms.

**Algorithm:**

1.  Initialize an empty result polynomial `result = NULL`.
2.  Iterate through each term (`term1`) of `poly1`:
    *   Iterate through each term (`term2`) of `poly2`:
        *   Calculate the coefficient of the new term: `new_coeff = term1->coefficient * term2->coefficient`.
        *   Calculate the exponent of the new term: `new_exp = term1->exponent + term2->exponent`.
        *   Insert this new term (`new_coeff`, `new_exp`) into the `result` polynomial. The `insertTerm` function (discussed earlier) handles summing coefficients for duplicate exponents.
3.  Return `result`.

*(Refer to: Fundamentals of Data Structures in C by Horowitz, Sahni, and Anderson-Freed - Chapter on Trees or other advanced structures might offer insights into efficiency of combining elements, though multiplication is more about brute force pairing.)*
*(Refer to: Theory and Problems of Data Structures by Lipschuts S. (Schaum’s Series) - Likely has detailed examples of polynomial operations, including multiplication.)*

**Example Multiplication: ($2x + 3$) * ($x^2 - 1$)**

*   `poly1`: [2, 1] -> [3, 0] -> NULL
*   `poly2`: [1, 2] -> [-1, 0] -> NULL

1.  Take term [2, 1] from `poly1`:
    *   Multiply with [1, 2] from `poly2`: `coeff = 2 * 1 = 2`, `exp = 1 + 2 = 3`. Insert [2, 3] into `result`.
        *   `result`: [2, 3] -> NULL
    *   Multiply with [-1, 0] from `poly2`: `coeff = 2 * -1 = -2`, `exp = 1 + 0 = 1`. Insert [-2, 1] into `result`.
        *   `result`: [2, 3] -> [-2, 1] -> NULL
2.  Take term [3, 0] from `poly1`:
    *   Multiply with [1, 2] from `poly2`: `coeff = 3 * 1 = 3`, `exp = 0 + 2 = 2`. Insert [3, 2] into `result`.
        *   `result`: [2, 3] -> [3, 2] -> [-2, 1] -> NULL
    *   Multiply with [-1, 0] from `poly2`: `coeff = 3 * -1 = -3`, `exp = 0 + 0 = 0`. Insert [-3, 0] into `result`.
        *   `result`: [2, 3] -> [3, 2] -> [-2, 1] -> [-3, 0] -> NULL

**Final Result:** $2x^3 + 3x^2 - 2x - 3$

---

#### **5. Displaying a Polynomial**

A function to print the polynomial in a human-readable format.

```c
void displayPolynomial(struct Term *poly) {
    if (poly == NULL) {
        printf("0\n"); // Or "Empty Polynomial"
        return;
    }
    struct Term *current = poly;
    while (current != NULL) {
        // Print coefficient
        if (current->coefficient >= 0) {
            printf("+ ");
        }
        printf("%d", current->coefficient);

        // Print variable and exponent
        if (current->exponent > 1) {
            printf("x^%d ", current->exponent);
        } else if (current->exponent == 1) {
            printf("x ");
        } else { // exponent == 0
            // If it's the first term and coefficient is 0, handle appropriately
            if (current == poly && current->coefficient == 0) {
                // Skip printing '0' if it's the only term and zero.
            } else if (current->coefficient != 0) {
                 // No 'x' for constant term
            }
        }
        current = current->next;
    }
    printf("\n");
}
```
*(Self-correction: The display logic needs careful handling of signs, coefficients of 1/-1, and exponents of 1/0 for better readability.)*

**Improved Display Logic:**

```c
void displayPolynomial(struct Term *poly) {
    if (poly == NULL) {
        printf("0\n");
        return;
    }
    struct Term *current = poly;
    int first_term = 1; // Flag to handle the very first term's sign

    while (current != NULL) {
        // Handle leading '+' sign for non-first terms
        if (!first_term && current->coefficient > 0) {
            printf(" + ");
        } else if (!first_term && current->coefficient < 0) {
            printf(" - "); // Print " - " and use absolute value for coefficient
        } else if (first_term && current->coefficient < 0) {
             printf("-"); // Negative sign for the very first term
        }

        // Print coefficient (absolute value if it's not the first term or if it's negative)
        if (current->exponent == 0) { // Constant term
            printf("%d", current->coefficient);
        } else { // Terms with x
            if (current->coefficient != 1 && current->coefficient != -1) {
                printf("%d", abs(current->coefficient));
            } else if (current->coefficient == -1) {
                // For -1x, we've already printed the '-' sign
            }
        }


        // Print variable and exponent
        if (current->exponent > 1) {
            printf("x^%d", current->exponent);
        } else if (current->exponent == 1) {
            printf("x");
        }

        current = current->next;
        first_term = 0; // After the first term, set flag to false
    }
    printf("\n");
}
```

---

### **Time Complexity Analysis**

Let $m$ be the number of terms in the first polynomial and $n$ be the number of terms in the second polynomial.

*   **Addition/Subtraction:** The algorithm traverses both lists once. In the worst case, all terms are distinct and all need to be appended. The complexity is **O(m + n)**.
*   **Multiplication:** For each of the $m$ terms in the first polynomial, we iterate through all $n$ terms of the second polynomial. Each multiplication results in a new term that is inserted into the `result` list. If insertion takes $O(k)$ where $k$ is the current number of terms in `result` (up to $m \times n$), the naive insertion approach can lead to a complexity closer to $O(m \cdot n \cdot (m \cdot n))$. However, if `insertTerm` is efficient (e.g., by maintaining sorted order), and we consider the sum of degrees, it's often stated as **O(m * n)** where each term is processed. A more precise analysis considering the insertion into a sorted list would be closer to $O(m \cdot n \cdot \log(mn))$ if a balanced tree is used for `result`, or $O(m \cdot n \cdot k)$ if linear insertion is used for `result` where $k$ is the degree of the result. For a simple linked list with sorted insertion, it's roughly **O(m * n * (m+n))** in the worst case for insertions, but practically **O(m*n)** for performing the multiplications and **O(m*n * degree)** for inserting into the result list. For typical sparse polynomials, it's efficient.

*(Refer to: Advanced Data Structures by Peter Brass - Might discuss complexity of operations on dynamic data structures, potentially relating to polynomial arithmetic complexity.)*

---

### **Comparison with Array Representation**

| Feature                | Linked List Representation                                  | Array Representation                                 |
| :--------------------- | :---------------------------------------------------------- | :--------------------------------------------------- |
| **Memory Usage**       | Efficient for sparse polynomials (only stores non-zero terms). Overhead per term for pointers. | Efficient for dense polynomials. Wastes space for zero coefficients in sparse polynomials. Fixed size required based on max degree. |
| **Dynamic Operations** | Highly flexible; addition/subtraction naturally handle changing degrees. | Less flexible; requires resizing or pre-allocation for potential degree changes, which can be inefficient. |
| **Insertion/Deletion** | Relatively efficient (O(1) to O(n) depending on position). | Inefficient (O(n)) due to shifting elements.         |
| **Addition/Subtraction** | O(m+n) time complexity.                                     | O(max(degree1, degree2)) if dense, or O(m+n) if using only non-zero terms in arrays. |
| **Multiplication**     | O(m*n * k) where k is average list length for insertion.      | O(degree1 * degree2) for dense arrays.             |
| **Ease of Implementation** | Can be more complex to implement due to pointer manipulation. | Simpler to implement, especially for fixed-degree polynomials. |

*(Refer to: Fundamentals of Data Structures in C by Horowitz, Sahni, and Anderson-Freed - Chapter on Arrays and Linked Lists for direct comparison.)*
*(Refer to: Data Structures and Algorithms by Aho, Hopcroft, and Ullman - For a theoretical foundation on data structure performance characteristics.)*

---

### **Practice Questions and Exercises**

1.  **Question:** Represent the polynomial $5x^4 - 3x^2 + 7$ using a linked list.
    **Answer:**
    (Head) -> [coeff: 5, exp: 4] -> [coeff: -3, exp: 2] -> [coeff: 7, exp: 0] -> NULL

2.  **Question:** Write a C function to add two polynomials represented by linked lists. Assume the linked lists are sorted by exponent in descending order.
    **Answer:** (Refer to the "Polynomial Addition" section above for the algorithm and conceptual C code. A full implementation would involve node creation, traversal, and appending logic.)

3.  **Question:** What is the time complexity of multiplying two polynomials where the first has $m$ terms and the second has $n$ terms, using the linked list approach described?
    **Answer:** Approximately O(m * n * k), where $k$ is the average number of terms in the result list during insertion. Often simplified to O(m * n) for the core multiplication logic, but insertion overhead is significant.

4.  **Question:** Explain why a linked list is a suitable data structure for representing sparse polynomials.
    **Answer:** Linked lists are suitable because they only store non-zero terms. This avoids the memory wastage associated with arrays, which would need to allocate space for all possible exponents up to the maximum degree, even if many of those terms have zero coefficients.

5.  **Question:** Implement a function to subtract polynomial $P_2$ from $P_1$, where both are linked lists.

    **Conceptual C Code Snippet (for subtraction):**

    ```c
    struct Term *polynomialSubtract(struct Term *poly1, struct Term *poly2) {
        struct Term *result = NULL;
        struct Term *ptr1 = poly1;
        struct Term *ptr2 = poly2;

        while (ptr1 != NULL || ptr2 != NULL) {
            if (ptr1 != NULL && (ptr2 == NULL || ptr1->exponent > ptr2->exponent)) {
                // Append term from poly1
                result = appendTerm(result, ptr1->coefficient, ptr1->exponent); // Need appendTerm helper
                ptr1 = ptr1->next;
            } else if (ptr2 != NULL && (ptr1 == NULL || ptr2->exponent > ptr1->exponent)) {
                // Append negated term from poly2
                result = appendTerm(result, -ptr2->coefficient, ptr2->exponent); // Negate coefficient
                ptr2 = ptr2->next;
            } else { // exponents are equal or both pointers are null
                if (ptr1 != NULL && ptr2 != NULL) {
                    int diff_coeff = ptr1->coefficient - ptr2->coefficient;
                    if (diff_coeff != 0) {
                        result = appendTerm(result, diff_coeff, ptr1->exponent);
                    }
                    ptr1 = ptr1->next;
                    ptr2 = ptr2->next;
                }
                // If one is null, it's handled by previous cases. If both are null, loop ends.
            }
        }
        return result;
    }

    // Helper function to append a term (simplified for this example)
    struct Term* appendTerm(struct Term *poly, int coeff, int exp) {
        // This would need to handle insertion into result, potentially merging same exponents
        // For this example, let's assume a simple append and later merge/cleanup or direct insert logic
        // The actual insertTerm logic that merges exponents would be better here.
        return insertTerm(poly, coeff, exp); // Using the existing insertTerm function
    }
    ```

---

### **Important Points to Remember**

*   **Node Structure:** Each node must store coefficient, exponent, and a pointer to the next node.
*   **Sorted Order:** Maintaining a sorted order of exponents (descending is common) is crucial for efficient operations.
*   **Zero Coefficients:** Handle terms that become zero after operations (addition, subtraction) by either removing them or not adding them to the result list.
*   **Sparse vs. Dense:** Linked lists are preferred for sparse polynomials, while arrays might be better for dense ones.
*   **Complexity:** Be mindful of the time complexity for each operation, especially multiplication.

---

### **Alignment with Course Outcomes**

*   **CO1 (Asymptotic Notations):** The time complexity analysis of linked list operations (O(m+n), O(m*n)) directly addresses this outcome.
*   **CO2 (Real-world Problems):** Polynomial arithmetic is a fundamental concept in many scientific and engineering applications. Representing and manipulating polynomials using linked lists demonstrates the application of data structures to solve such problems.
*   **CO3 (Nonlinear Data Structures):** While linked lists are linear, they form the basis for understanding more complex nonlinear structures. The operations performed here involve careful management of interconnected data elements.
*   **CO4 (Searching/Sorting):** Insertion into a sorted linked list implicitly involves comparison and placement (similar to insertion sort's concept), and the traversal for operations often mirrors searching-like patterns.
*   **CO5 (Hashing):** Not directly applicable to this specific topic, as polynomial representation using linked lists does not involve hashing.

---

This detailed study note provides a comprehensive overview of polynomial representation using linked lists, covering theoretical concepts, practical implementation considerations, complexity analysis, and comparisons with alternative methods, aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
