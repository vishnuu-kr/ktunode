---
title: "Polynomial representation using Linked List"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 2: Linked List and Memory Management"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac34"
status: "completed"
scrapedAt: "2026-05-20T16:22:54.595Z"
---
# DATA STRUCTURES AND ALGORITHMS: Module 2 - Linked List and Memory Management
## Topic: Polynomial Representation using Linked List

**Learning Outcomes:**

*   Understand the limitations of array-based polynomial representation.
*   Describe how a linked list can be used to represent polynomials.
*   Implement a linked list data structure to represent a polynomial.
*   Perform basic polynomial operations (addition, evaluation) using the linked list representation.
*   Analyze the advantages and disadvantages of linked list polynomial representation compared to array-based representation.

### 1. Introduction: The Need for Linked Lists for Polynomial Representation

*   **Polynomials:** Mathematical expressions consisting of variables and coefficients, typically of the form:  *a<sub>n</sub>x<sup>n</sup> + a<sub>n-1</sub>x<sup>n-1</sup> + ... + a<sub>1</sub>x<sup>1</sup> + a<sub>0</sub>* where *a<sub>i</sub>* are coefficients and *n* is the highest degree.

*   **Array-Based Representation (Limitations):**
    *   **Inefficient Memory Usage:** Using an array to store coefficients, we need to allocate memory for the highest degree of the polynomial. If the polynomial is sparse (many zero coefficients), a significant amount of memory is wasted.  For instance, the polynomial *x<sup>1000</sup> + 1* would require an array of size 1001, even though only two coefficients are non-zero.
    *   **Fixed Size:** Array size is fixed at the time of declaration.  Extending the array to accommodate a higher-degree term might require reallocation, leading to overhead.
    *   **Example:** An array representing *3x<sup>2</sup> + 2x + 1* would be `[1, 2, 3]`.  To represent *x<sup>1000</sup> + 1*, we'd need an array `[1, 0, 0, ..., 0, 1]` (1001 elements).

*   **Linked List as a Solution:**
    *   Linked lists provide a dynamic and flexible way to store polynomial terms.  We only create nodes for non-zero terms.
    *   This approach is particularly beneficial for sparse polynomials, saving significant memory.

### 2. Linked List Representation of Polynomials

*   **Node Structure:** Each node in the linked list represents a term of the polynomial.  A typical node will contain:
    *   `coefficient`:  The coefficient of the term (e.g., 3 in 3x<sup>2</sup>).
    *   `exponent`:  The exponent of the term (e.g., 2 in 3x<sup>2</sup>).
    *   `next`:  A pointer (reference) to the next term in the polynomial.

    ```python
    class Node:
        def __init__(self, coefficient, exponent):
            self.coefficient = coefficient
            self.exponent = exponent
            self.next = None

    class Polynomial:
        def __init__(self):
            self.head = None
    ```

*   **Polynomial Structure:** The `Polynomial` class holds the head of the linked list, which is the first term in the polynomial.

*   **Example:** The polynomial *3x<sup>2</sup> + 2x + 1* would be represented by a linked list with three nodes:
    *   Node 1: `coefficient = 1`, `exponent = 0`, `next = Node 2`
    *   Node 2: `coefficient = 2`, `exponent = 1`, `next = Node 3`
    *   Node 3: `coefficient = 3`, `exponent = 2`, `next = None` (the tail node)

*   **Sparse Polynomial Example:** *x<sup>1000</sup> + 1* would be represented by a linked list with two nodes:
    *   Node 1: `coefficient = 1`, `exponent = 0`, `next = Node 2`
    *   Node 2: `coefficient = 1`, `exponent = 1000`, `next = None`

### 3. Implementing a Polynomial Linked List in Python

```python
class Node:
    def __init__(self, coefficient, exponent):
        self.coefficient = coefficient
        self.exponent = exponent
        self.next = None

class Polynomial:
    def __init__(self):
        self.head = None

    def insert_term(self, coefficient, exponent):
        """Inserts a new term into the polynomial. Keeps terms sorted by exponent (descending)."""
        new_node = Node(coefficient, exponent)

        if self.head is None:
            self.head = new_node
            return

        if exponent > self.head.exponent:  #Insert at the beginning
            new_node.next = self.head
            self.head = new_node
            return

        current = self.head
        while current.next is not None and exponent < current.next.exponent:
            current = current.next

        new_node.next = current.next
        current.next = new_node

    def display(self):
        """Prints the polynomial."""
        if self.head is None:
            print("0")
            return

        current = self.head
        terms = []
        while current is not None:
            coeff = current.coefficient
            exp = current.exponent

            if exp == 0:
                term = str(coeff)
            elif exp == 1:
                term = f"{coeff}x"
            else:
                term = f"{coeff}x^{exp}"
            terms.append(term)
            current = current.next

        print(" + ".join(terms))

    def evaluate(self, x):
        """Evaluates the polynomial for a given value of x."""
        result = 0
        current = self.head
        while current is not None:
            result += current.coefficient * (x ** current.exponent)
            current = current.next
        return result
```

**Explanation:**

*   **`Node` Class:** Defines the structure of a single term in the polynomial.
*   **`Polynomial` Class:**
    *   `__init__()`: Initializes an empty polynomial (head = None).
    *   `insert_term(coefficient, exponent)`: Inserts a new term into the polynomial, maintaining the terms in descending order of exponent.  This helps with polynomial operations.
    *   `display()`: Prints the polynomial in a human-readable format (e.g., "3x^2 + 2x + 1").
    *   `evaluate(x)`: Evaluates the polynomial at a given value *x*.

### 4. Polynomial Operations

*   **Addition:** Adding two polynomials represented by linked lists involves traversing both lists and combining terms with the same exponent.
    *   If the exponents are the same, add the coefficients and create a new node (or update the coefficient of an existing node).
    *   If the exponents are different, insert the term with the higher exponent into the result polynomial.
    *   The result should be a new polynomial linked list.

    ```python
    def add_polynomials(poly1, poly2):
        """Adds two polynomials represented as linked lists."""
        result = Polynomial()
        current1 = poly1.head
        current2 = poly2.head

        while current1 is not None or current2 is not None:
            if current1 is None:
                result.insert_term(current2.coefficient, current2.exponent)
                current2 = current2.next
            elif current2 is None:
                result.insert_term(current1.coefficient, current1.exponent)
                current1 = current1.next
            elif current1.exponent > current2.exponent:
                result.insert_term(current1.coefficient, current1.exponent)
                current1 = current1.next
            elif current2.exponent > current1.exponent:
                result.insert_term(current2.coefficient, current2.exponent)
                current2 = current2.next
            else:  # Exponents are equal
                sum_coeff = current1.coefficient + current2.coefficient
                if sum_coeff != 0:  # Don't add zero-coefficient terms
                    result.insert_term(sum_coeff, current1.exponent)
                current1 = current1.next
                current2 = current2.next

        return result
    ```

*   **Evaluation:** Evaluating a polynomial at a given value of *x* involves traversing the linked list and calculating the value of each term.  Sum the values of all terms to get the final result.  The `evaluate(x)` function in the implementation above demonstrates this.

### 5. Advantages and Disadvantages

| Feature        | Array-Based Representation | Linked List Representation |
|----------------|-----------------------------|------------------------------|
| Memory Usage   | Inefficient for sparse polynomials. | Efficient for sparse polynomials.  |
| Dynamic Size   | Fixed size (can require reallocation). | Dynamic size.  |
| Insertion/Deletion | Difficult and potentially slow. | Easier to insert and delete terms. |
| Access Time    | Fast (direct access).      | Slower (sequential access).  |
| Complexity     | Lower implementation complexity. | Higher implementation complexity. |

**When to use Linked Lists:**

*   Polynomials are sparse (many zero coefficients).
*   Polynomials are dynamic (terms are frequently added or removed).
*   Memory efficiency is critical.

**When to use Arrays:**

*   Polynomials are dense (few zero coefficients).
*   Random access to coefficients is frequently needed.
*   Implementation simplicity is more important than memory efficiency.

### 6. Important Points to Remember

*   **Memory Efficiency:** Linked lists are significantly more memory-efficient for sparse polynomials.
*   **Dynamic Nature:**  Linked lists can easily handle polynomials with dynamically changing terms.
*   **Polynomial Operations:**  The `insert_term` function should maintain a sorted order of exponents for efficient addition.
*   **Sparse vs. Dense:**  Choose the representation based on the characteristics of the polynomials you're dealing with.

### 7. Practice Questions/Exercises

1.  **Implement Polynomial Subtraction:** Write a function `subtract_polynomials(poly1, poly2)` that subtracts `poly2` from `poly1`.
2.  **Implement Polynomial Multiplication:** Write a function `multiply_polynomials(poly1, poly2)` that multiplies `poly1` by `poly2`.
3.  **Implement Simplification:** Write a function `simplify(poly)` that combines terms with the same exponent in a polynomial.
4.  **Analyze Time Complexity:** Determine the time complexity of the `insert_term`, `evaluate`, `add_polynomials`, `subtract_polynomials`, and `multiply_polynomials` functions.

**Answers/Hints:**

1.  **Polynomial Subtraction:** Similar to addition, but subtract the coefficients instead of adding. Handle the cases where exponents are different.

    ```python
    def subtract_polynomials(poly1, poly2):
        """Subtracts poly2 from poly1."""
        result = Polynomial()
        current1 = poly1.head
        current2 = poly2.head

        while current1 is not None or current2 is not None:
            if current1 is None:  # Effectively -poly2
                result.insert_term(-current2.coefficient, current2.exponent)
                current2 = current2.next
            elif current2 is None:
                result.insert_term(current1.coefficient, current1.exponent)
                current1 = current1.next
            elif current1.exponent > current2.exponent:
                result.insert_term(current1.coefficient, current1.exponent)
                current1 = current1.next
            elif current2.exponent > current1.exponent:
                result.insert_term(-current2.coefficient, current2.exponent)
                current2 = current2.next
            else:  # Exponents are equal
                diff_coeff = current1.coefficient - current2.coefficient
                if diff_coeff != 0:
                    result.insert_term(diff_coeff, current1.exponent)
                current1 = current1.next
                current2 = current2.next

        return result
    ```

2.  **Polynomial Multiplication:**
    *   For each term in `poly1`, multiply it by each term in `poly2`.
    *   The exponent of the resulting term is the sum of the exponents of the two terms being multiplied.
    *   The coefficient of the resulting term is the product of the coefficients of the two terms being multiplied.
    *   Add all the resulting terms to a new polynomial (use the `add_polynomials` function to combine terms with the same exponent).

    ```python
    def multiply_polynomials(poly1, poly2):
        """Multiplies two polynomials."""
        result = Polynomial()
        current1 = poly1.head

        while current1 is not None:
            current2 = poly2.head
            while current2 is not None:
                new_coeff = current1.coefficient * current2.coefficient
                new_exp = current1.exponent + current2.exponent
                # Temp polynomial to store the newly generated term
                temp_poly = Polynomial()
                temp_poly.insert_term(new_coeff, new_exp)

                # Add the new term to the result polynomial
                result = add_polynomials(result, temp_poly)

                current2 = current2.next
            current1 = current1.next

        return result
    ```

3.  **Polynomial Simplification:** Traverse the linked list and combine terms with the same exponent. This can be done by creating a new linked list that stores the simplified polynomial.

4.  **Time Complexity Analysis:**
    *   `insert_term`: O(n) in the worst case (inserting at the end).  O(1) in the best case (inserting at the beginning)
    *   `evaluate`: O(n)
    *   `add_polynomials`: O(m + n), where m and n are the number of terms in the two polynomials.
    *   `subtract_polynomials`: O(m + n), where m and n are the number of terms in the two polynomials.
    *   `multiply_polynomials`: O(m*n*(m+n)) in the worst case because it needs to call add_polynomials, which itself is O(m+n)

This comprehensive guide covers the learning outcomes and provides a solid foundation for understanding polynomial representation using linked lists. Remember to practice implementing the functions and analyzing their time complexities to solidify your understanding.
