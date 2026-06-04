---
title: "Polynomial representation using Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List and Memory Management"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be9b"
status: "completed"
scrapedAt: "2026-05-20T16:51:56.893Z"
---
# Data Structures: Module 2 - Linked Lists and Memory Management

## Topic: Polynomial Representation Using Linked Lists

---

### **Learning Outcomes Covered:**

*   Understanding the challenges of representing polynomials using arrays.
*   Designing and implementing a linked list structure to represent polynomials.
*   Performing common polynomial operations (addition, subtraction, multiplication) using linked lists.
*   Understanding the memory management aspects related to polynomial representation with linked lists.

---

### **1. Introduction: Why Linked Lists for Polynomials?**

Polynomials are mathematical expressions of the form:

$P(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x^1 + a_0 x^0$

where:
*   $a_i$ are the coefficients.
*   $x^i$ are the terms.
*   $n$ is the degree of the polynomial.

#### **1.1 Challenges with Array Representation**

*   **Fixed Size:** If we use an array to store coefficients, we need to pre-allocate a size large enough to accommodate the highest possible degree.
    *   **Waste of Memory:** For sparse polynomials (many zero coefficients), most of the array will be unused. For example, representing $x^{1000} + 1$ using an array would require 1001 elements, with 999 of them being zero.
    *   **Inefficient for Dynamic Degrees:** If the degree of the polynomial changes or is unknown beforehand, resizing arrays can be costly.
*   **Sparse Polynomials:** Storing many zero coefficients is highly inefficient in terms of memory usage.

#### **1.2 Advantages of Linked List Representation**

Linked lists offer a more dynamic and memory-efficient way to represent polynomials, especially sparse ones:

*   **Dynamic Memory Allocation:** Nodes are created only when a non-zero term exists, saving memory.
*   **Flexibility:** Easily handles polynomials of varying degrees without pre-allocation issues.
*   **Efficient Operations:** Operations like addition and subtraction can be performed efficiently by traversing and comparing nodes.

---

### **2. Designing the Linked List Structure for Polynomials**

Each term of the polynomial can be represented as a node in the linked list. A node should contain:

*   **Coefficient:** The numerical coefficient of the term.
*   **Exponent:** The power of the variable (e.g., the exponent of 'x').
*   **Next Pointer:** A pointer to the next node in the list, representing the next term.

#### **2.1 Node Structure (Conceptual)**

```
Node {
    coefficient: float or int
    exponent: int
    next: Pointer to Node
}
```

#### **2.2 Representing a Polynomial**

A polynomial is represented by a linked list. It's common to maintain a pointer to the **head** of the list, which ideally points to the term with the highest exponent (or simply the first term encountered). For convenience, we can sort the terms by exponent in descending order.

#### **2.3 Example: Representing $3x^2 + 5x^1 + 2x^0$**

The linked list could look like this:

**(Head) --> [Coefficient: 3, Exponent: 2] --> [Coefficient: 5, Exponent: 1] --> [Coefficient: 2, Exponent: 0] --> NULL**

#### **2.4 Example: Representing $7x^4 + 3x^1$**

**(Head) --> [Coefficient: 7, Exponent: 4] --> [Coefficient: 3, Exponent: 1] --> NULL**

Notice how the zero terms ($6x^3$, $2x^2$, $1x^0$) are omitted.

---

### **3. Polynomial Operations Using Linked Lists**

Let's explore how to perform common polynomial operations. We'll assume the linked lists representing the polynomials are sorted in descending order of exponents.

#### **3.1 Polynomial Addition**

To add two polynomials, $P_1(x)$ and $P_2(x)$, represented by linked lists $L_1$ and $L_2$, we traverse both lists simultaneously.

**Algorithm:**

1.  Initialize an empty linked list, $L_{result}$, to store the sum.
2.  Initialize pointers: `ptr1` to the head of $L_1$, `ptr2` to the head of $L_2$, and `ptr_res` to the head of $L_{result}$.
3.  **While** `ptr1` is not NULL **and** `ptr2` is not NULL:
    *   **If** `ptr1.exponent == ptr2.exponent`:
        *   Create a new node for $L_{result}$ with `coefficient = ptr1.coefficient + ptr2.coefficient` and `exponent = ptr1.exponent`.
        *   Move `ptr1` and `ptr2` to their next nodes.
    *   **Else if** `ptr1.exponent > ptr2.exponent`:
        *   Create a new node for $L_{result}$ with `coefficient = ptr1.coefficient` and `exponent = ptr1.exponent`.
        *   Move `ptr1` to its next node.
    *   **Else** (`ptr1.exponent < ptr2.exponent`):
        *   Create a new node for $L_{result}$ with `coefficient = ptr2.coefficient` and `exponent = ptr2.exponent`.
        *   Move `ptr2` to its next node.
    *   Append the newly created node to $L_{result}$ (or link it to `ptr_res`). Update `ptr_res`.
4.  **After the loop:**
    *   If `ptr1` is not NULL, append all remaining nodes from $L_1$ to $L_{result}$.
    *   If `ptr2` is not NULL, append all remaining nodes from $L_2$ to $L_{result}$.
5.  **Important Cleanup:** If any resulting coefficient is zero, that node should be omitted from $L_{result}$ (or not added in the first place).

**Example:**

$P_1(x) = 3x^2 + 5x^1 + 2x^0$
$P_2(x) = 4x^2 + 2x^1 + 7x^0$

$L_1$: [3, 2] -> [5, 1] -> [2, 0] -> NULL
$L_2$: [4, 2] -> [2, 1] -> [7, 0] -> NULL

**Step-by-step Addition:**

| `ptr1` | `ptr2` | Exponents Match? | Operation                                      | Result Node       | $L_{result}$               |
| :----- | :----- | :--------------- | :--------------------------------------------- | :---------------- | :------------------------- |
| [3, 2] | [4, 2] | Yes              | Coeff = 3+4 = 7; Exp = 2                       | [7, 2]            | [7, 2] -> NULL             |
| [5, 1] | [2, 1] | Yes              | Coeff = 5+2 = 7; Exp = 1                       | [7, 1]            | [7, 2] -> [7, 1] -> NULL   |
| [2, 0] | [7, 0] | Yes              | Coeff = 2+7 = 9; Exp = 0                       | [9, 0]            | [7, 2] -> [7, 1] -> [9, 0] -> NULL |
| NULL   | NULL   | -                | Both pointers are NULL, loop ends.             | -                 |                            |

**Resulting Polynomial:** $7x^2 + 7x^1 + 9x^0$

**Example with Different Degrees:**

$P_1(x) = 3x^2 + 5x^1$
$P_2(x) = 4x^3 + 2x^1 + 7x^0$

$L_1$: [3, 2] -> [5, 1] -> NULL
$L_2$: [4, 3] -> [2, 1] -> [7, 0] -> NULL

**Step-by-step Addition:**

| `ptr1` | `ptr2` | Exponents Match? | Operation                                      | Result Node       | $L_{result}$               |
| :----- | :----- | :--------------- | :--------------------------------------------- | :---------------- | :------------------------- |
| [3, 2] | [4, 3] | No (3 > 2)       | Take from $L_2$ (Exp 3)                        | [4, 3]            | [4, 3] -> NULL             |
| [3, 2] | [2, 1] | No (2 > 1)       | Take from $L_1$ (Exp 2)                        | [3, 2]            | [4, 3] -> [3, 2] -> NULL   |
| [5, 1] | [2, 1] | Yes              | Coeff = 5+2 = 7; Exp = 1                       | [7, 1]            | [4, 3] -> [3, 2] -> [7, 1] -> NULL |
| NULL   | [7, 0] | No               | Take from $L_2$ (Exp 0)                        | [7, 0]            | [4, 3] -> [3, 2] -> [7, 1] -> [7, 0] -> NULL |
| NULL   | NULL   | -                | Both pointers are NULL, loop ends.             | -                 |                            |

**Resulting Polynomial:** $4x^3 + 3x^2 + 7x^1 + 7x^0$

#### **3.2 Polynomial Subtraction**

Subtraction is similar to addition. $P_1(x) - P_2(x)$ is equivalent to $P_1(x) + (-1) \cdot P_2(x)$.

**Algorithm:**

1.  Create a new linked list, $L_{negated\_P2}$, by traversing $L_2$ and negating the coefficient of each node.
2.  Add $L_1$ and $L_{negated\_P2}$ using the same algorithm as polynomial addition.

**Alternatively (Direct Subtraction):**

**Algorithm:**

1.  Initialize an empty linked list, $L_{result}$.
2.  Initialize pointers: `ptr1` to the head of $L_1$, `ptr2` to the head of $L_2$, and `ptr_res` to the head of $L_{result}$.
3.  **While** `ptr1` is not NULL **and** `ptr2` is not NULL:
    *   **If** `ptr1.exponent == ptr2.exponent`:
        *   Create a new node for $L_{result}$ with `coefficient = ptr1.coefficient - ptr2.coefficient` and `exponent = ptr1.exponent`.
        *   Move `ptr1` and `ptr2` to their next nodes.
    *   **Else if** `ptr1.exponent > ptr2.exponent`:
        *   Create a new node for $L_{result}$ with `coefficient = ptr1.coefficient` and `exponent = ptr1.exponent`.
        *   Move `ptr1` to its next node.
    *   **Else** (`ptr1.exponent < ptr2.exponent`):
        *   Create a new node for $L_{result}$ with `coefficient = -ptr2.coefficient` (note the negation) and `exponent = ptr2.exponent`.
        *   Move `ptr2` to its next node.
    *   Append the newly created node to $L_{result}$. Update `ptr_res`.
4.  **After the loop:**
    *   If `ptr1` is not NULL, append all remaining nodes from $L_1$ to $L_{result}$.
    *   If `ptr2` is not NULL, append all remaining nodes from $L_2$ to $L_{result}$ with negated coefficients.
5.  **Important Cleanup:** Remove any resulting nodes with a coefficient of zero.

**Example:**

$P_1(x) = 3x^2 + 5x^1 + 2x^0$
$P_2(x) = 1x^2 + 2x^1 + 7x^0$

$L_1$: [3, 2] -> [5, 1] -> [2, 0] -> NULL
$L_2$: [1, 2] -> [2, 1] -> [7, 0] -> NULL

**Step-by-step Subtraction:**

| `ptr1` | `ptr2` | Exponents Match? | Operation                                      | Result Node       | $L_{result}$               |
| :----- | :----- | :--------------- | :--------------------------------------------- | :---------------- | :------------------------- |
| [3, 2] | [1, 2] | Yes              | Coeff = 3-1 = 2; Exp = 2                       | [2, 2]            | [2, 2] -> NULL             |
| [5, 1] | [2, 1] | Yes              | Coeff = 5-2 = 3; Exp = 1                       | [3, 1]            | [2, 2] -> [3, 1] -> NULL   |
| [2, 0] | [7, 0] | Yes              | Coeff = 2-7 = -5; Exp = 0                      | [-5, 0]           | [2, 2] -> [3, 1] -> [-5, 0] -> NULL |
| NULL   | NULL   | -                | Both pointers are NULL, loop ends.             | -                 |                            |

**Resulting Polynomial:** $2x^2 + 3x^1 - 5x^0$

#### **3.3 Polynomial Multiplication**

Multiplying two polynomials, $P_1(x)$ and $P_2(x)$, is more complex. Each term in $P_1(x)$ must be multiplied by each term in $P_2(x)$.

$P_1(x) = a_m x^m + ... + a_0$
$P_2(x) = b_n x^n + ... + b_0$

$P_1(x) \cdot P_2(x) = (a_m x^m + ... + a_0) \cdot (b_n x^n + ... + b_0)$

This results in a new polynomial where terms have exponents ranging from 0 up to $m+n$.

**Algorithm:**

1.  Initialize an empty linked list, $L_{result}$, to store the product.
2.  Use nested loops:
    *   Outer loop iterates through each term (`term1`) of $L_1$.
    *   Inner loop iterates through each term (`term2`) of $L_2$.
3.  For each pair of `term1` and `term2`:
    *   Calculate the new coefficient: `new_coeff = term1.coefficient * term2.coefficient`
    *   Calculate the new exponent: `new_exp = term1.exponent + term2.exponent`
    *   Create a new node with `new_coeff` and `new_exp`.
    *   **This is crucial:** We need to *add* this new term to $L_{result}$. This involves finding the correct position for the new term (based on its exponent) and either:
        *   If a term with the same exponent already exists in $L_{result}$, add `new_coeff` to its coefficient.
        *   If no term with that exponent exists, insert the new node at the correct position (maintaining sorted order by exponent). This is essentially performing an "insert-and-add" operation.
4.  **After processing all pairs:** Ensure that $L_{result}$ is properly formed and contains all terms with non-zero coefficients.

**Helper Function:** `insert_and_add_term(result_list, coeff, exp)`:
This function takes the `result_list`, `coeff`, and `exp`. It traverses `result_list` to find if a term with `exp` exists. If it does, it adds `coeff` to that term's coefficient. If not, it inserts a new node with `coeff` and `exp` at the correct sorted position.

**Example:**

$P_1(x) = 2x^1 + 3x^0$
$P_2(x) = 3x^2 + 1x^1$

$L_1$: [2, 1] -> [3, 0] -> NULL
$L_2$: [3, 2] -> [1, 1] -> NULL

**Multiplication Steps:**

*   **Term [2, 1] from $L_1$:**
    *   Multiply by [3, 2] from $L_2$: Coeff = 2*3 = 6, Exp = 1+2 = 3. Result: Add [6, 3] to $L_{result}$.
        $L_{result}$: [6, 3] -> NULL
    *   Multiply by [1, 1] from $L_2$: Coeff = 2*1 = 2, Exp = 1+1 = 2. Result: Add [2, 2] to $L_{result}$.
        $L_{result}$: [6, 3] -> [2, 2] -> NULL (assuming sorted insertion)

*   **Term [3, 0] from $L_1$:**
    *   Multiply by [3, 2] from $L_2$: Coeff = 3*3 = 9, Exp = 0+2 = 2. Result: Add [9, 2] to $L_{result}$.
        Since [2, 2] already exists, add 9 to its coefficient: 2 + 9 = 11.
        $L_{result}$: [6, 3] -> [11, 2] -> NULL
    *   Multiply by [1, 1] from $L_2$: Coeff = 3*1 = 3, Exp = 0+1 = 1. Result: Add [3, 1] to $L_{result}$.
        $L_{result}$: [6, 3] -> [11, 2] -> [3, 1] -> NULL

**Final Resulting Polynomial:** $6x^3 + 11x^2 + 3x^1$

---

### **4. Memory Management Aspects**

*   **Dynamic Allocation:** Linked lists use `malloc` (or equivalent) to allocate memory for each node as needed. This is in contrast to static array allocation.
*   **Deallocation (`free`):** When a polynomial is no longer needed, or when terms are modified or removed, the memory occupied by the nodes must be deallocated using `free` to prevent memory leaks.
    *   A function `destroy_polynomial(head)` that traverses the list and `free`s each node is essential.
*   **Garbage Collection:** In languages with automatic garbage collection (like Java or Python), explicit deallocation is often handled automatically. However, understanding the underlying concept of memory management is still important.
*   **Overhead:** Each node in a linked list has overhead due to the pointer(s). For very dense polynomials with few zero coefficients, an array might be more memory-efficient.

---

### **5. Practice Questions & Exercises**

#### **Question 1:**

Represent the polynomial $5x^3 - 2x^1 + 7x^0$ using a linked list. Draw the structure of the linked list.

**Answer:**

The linked list would have three nodes:
*   Node 1: Coefficient = 5, Exponent = 3, Next = Pointer to Node 2
*   Node 2: Coefficient = -2, Exponent = 1, Next = Pointer to Node 3
*   Node 3: Coefficient = 7, Exponent = 0, Next = NULL

**(Head) --> [5, 3] --> [-2, 1] --> [7, 0] --> NULL**

#### **Question 2:**

Write a pseudo-code function to add two polynomials represented by linked lists $L_1$ and $L_2$, where both lists are sorted by decreasing exponent.

**Answer:** (See the detailed algorithm in Section 3.1)

```pseudo
function add_polynomials(L1_head, L2_head):
    result_head = NULL
    current_result_node = NULL
    ptr1 = L1_head
    ptr2 = L2_head

    while ptr1 is not NULL and ptr2 is not NULL:
        new_node = create_node()
        if ptr1.exponent == ptr2.exponent:
            new_node.coefficient = ptr1.coefficient + ptr2.coefficient
            new_node.exponent = ptr1.exponent
            ptr1 = ptr1.next
            ptr2 = ptr2.next
        else if ptr1.exponent > ptr2.exponent:
            new_node.coefficient = ptr1.coefficient
            new_node.exponent = ptr1.exponent
            ptr1 = ptr1.next
        else: # ptr2.exponent > ptr1.exponent
            new_node.coefficient = ptr2.coefficient
            new_node.exponent = ptr2.exponent
            ptr2 = ptr2.next

        if new_node.coefficient != 0: # Only add if coefficient is non-zero
            if result_head is NULL:
                result_head = new_node
                current_result_node = new_node
            else:
                current_result_node.next = new_node
                current_result_node = new_node

    # Append remaining nodes
    while ptr1 is not NULL:
        new_node = create_node()
        new_node.coefficient = ptr1.coefficient
        new_node.exponent = ptr1.exponent
        ptr1 = ptr1.next
        if new_node.coefficient != 0:
            if result_head is NULL:
                result_head = new_node
                current_result_node = new_node
            else:
                current_result_node.next = new_node
                current_result_node = new_node

    while ptr2 is not NULL:
        new_node = create_node()
        new_node.coefficient = ptr2.coefficient
        new_node.exponent = ptr2.exponent
        ptr2 = ptr2.next
        if new_node.coefficient != 0:
            if result_head is NULL:
                result_head = new_node
                current_result_node = new_node
            else:
                current_result_node.next = new_node
                current_result_node = new_node

    return result_head

# Helper to create a node
function create_node():
    node = allocate memory for Node
    node.next = NULL
    return node
```

#### **Question 3:**

Consider two polynomials: $P_1(x) = 3x^2 + 5x^1$ and $P_2(x) = 4x^3 + 2x^1 + 7x^0$.
What is $P_1(x) + P_2(x)$?

**Answer:**

$P_1(x) = 3x^2 + 5x^1$
$P_2(x) = 4x^3 + 2x^1 + 7x^0$

Adding them:
$P_1(x) + P_2(x) = (3x^2 + 5x^1) + (4x^3 + 2x^1 + 7x^0)$
Group terms by exponent:
$4x^3 + 3x^2 + (5x^1 + 2x^1) + 7x^0$
$4x^3 + 3x^2 + 7x^1 + 7x^0$

The linked list representation would be:
**(Head) --> [4, 3] --> [3, 2] --> [7, 1] --> [7, 0] --> NULL**

#### **Question 4:**

Why is linked list representation generally preferred for sparse polynomials over an array representation?

**Answer:**

Linked list representation is preferred for sparse polynomials because it only stores the non-zero terms. An array representation would require a fixed size large enough for the highest possible degree, leading to significant memory wastage if many coefficients are zero (i.e., the polynomial is sparse). Linked lists use dynamic memory allocation, creating nodes only when a non-zero term exists, making them much more memory-efficient for sparse polynomials.

---

### **6. Important Points to Remember**

*   **Node Structure:** Always include coefficient, exponent, and a next pointer.
*   **Sorted Lists:** For efficient addition/subtraction, maintain lists sorted by exponent (usually descending).
*   **Sparse Representation:** The primary advantage of linked lists for polynomials is their ability to represent sparse polynomials efficiently by omitting zero-coefficient terms.
*   **Zero Coefficient Check:** After operations like addition or subtraction, ensure that any resulting terms with a zero coefficient are not added to the final polynomial list.
*   **Memory Management:** Always remember to deallocate memory for nodes when they are no longer needed to prevent memory leaks.
*   **Multiplication Complexity:** Polynomial multiplication requires careful handling of creating new terms and aggregating coefficients for terms with the same exponent.

---
