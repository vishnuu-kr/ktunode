---
title: "Implement addition and multiplication of polynomials using singly linked lists."
subject: "DATA STRUCTURES LAB"
module: "Module 6: Implement addition and multiplication of polynomials using singly linked lists."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae70"
status: "completed"
scrapedAt: "2026-05-20T16:23:20.639Z"
---
# DATA STRUCTURES LAB - MODULE 6: POLYNOMIAL ADDITION & MULTIPLICATION USING SINGLY LINKED LISTS

## Introduction

This module focuses on implementing polynomial addition and multiplication using singly linked lists. This is a practical application of linked lists and demonstrates how they can be used to represent and manipulate mathematical expressions efficiently.

## Learning Outcomes

By the end of this module, you should be able to:

*   Understand how to represent polynomials using singly linked lists.
*   Implement an algorithm for adding two polynomials represented as linked lists.
*   Implement an algorithm for multiplying two polynomials represented as linked lists.
*   Analyze the time and space complexity of polynomial addition and multiplication operations using linked lists.

## 1. Key Concepts and Definitions

*   **Polynomial:** A mathematical expression consisting of variables and coefficients, involving only the operations of addition, subtraction, multiplication, and non-negative integer exponents of variables.  Example: 3x^2 + 2x + 1.
*   **Term:** A single component of a polynomial, consisting of a coefficient and a variable raised to a power.  Example: 3x^2 is a term with coefficient 3 and exponent 2.
*   **Coefficient:** The numerical factor of a term.  Example: 3 in the term 3x^2.
*   **Exponent:** The power to which a variable is raised. Example: 2 in the term 3x^2.
*   **Singly Linked List:** A linear data structure where each element (node) contains data and a pointer (or link) to the next node in the sequence.
*   **Node:**  A basic unit of a linked list, typically containing the coefficient, exponent, and a pointer to the next node.

## 2. Representing Polynomials using Singly Linked Lists

Each term of the polynomial is represented as a node in the linked list.  Each node contains:

*   **Coefficient (coeff):** Stores the numerical value of the coefficient.
*   **Exponent (exp):** Stores the power of the variable.
*   **Next (next):** A pointer to the next term (node) in the polynomial.

**Example:**

Polynomial:  5x^3 + 2x^1 + 1

Linked List Representation:

```
+-------+-------+-------+     +-------+-------+-------+     +-------+-------+-------+
| coeff |  exp  | next  | --> | coeff |  exp  | next  | --> | coeff |  exp  | next  | --> NULL
|   5   |   3   |   *   |     |   2   |   1   |   *   |     |   1   |   0   |   *   |
+-------+-------+-------+     +-------+-------+-------+     +-------+-------+-------+
```

**Python Code Example:**

```python
class Node:
    def __init__(self, coeff, exp, next=None):
        self.coeff = coeff
        self.exp = exp
        self.next = next

class Polynomial:
    def __init__(self):
        self.head = None

    def display(self):
        """Displays the polynomial."""
        if self.head is None:
            print("0")
            return

        current = self.head
        terms = []
        while current:
            coeff = current.coeff
            exp = current.exp

            if exp == 0:
                term = str(coeff)
            elif exp == 1:
                term = f"{coeff}x"
            else:
                term = f"{coeff}x^{exp}"

            terms.append(term)
            current = current.next

        print(" + ".join(terms))


    def insert_term(self, coeff, exp):
        """Inserts a new term into the polynomial, maintaining exponent order (descending)."""
        new_node = Node(coeff, exp)

        if self.head is None:
            self.head = new_node
            return

        if exp > self.head.exp:
            new_node.next = self.head
            self.head = new_node
            return

        current = self.head
        while current.next and current.next.exp > exp:
            current = current.next

        if current.next and current.next.exp == exp: # handle same exponent
           current.next.coeff += coeff
        else:
           new_node.next = current.next
           current.next = new_node



# Example usage
poly1 = Polynomial()
poly1.insert_term(5, 3)
poly1.insert_term(2, 1)
poly1.insert_term(1, 0)
poly1.display()  # Output: 5x^3 + 2x + 1

poly2 = Polynomial()
poly2.insert_term(3,2)
poly2.insert_term(4,1)
poly2.display() # Output: 3x^2 + 4x
```

## 3. Polynomial Addition

**Algorithm:**

1.  Initialize a new polynomial (resultant linked list).
2.  Iterate through both linked lists (polynomials) simultaneously.
3.  Compare the exponents of the current terms in both polynomials.
    *   **If exponents are equal:**  Add the coefficients and insert a new node with the same exponent and the sum of coefficients into the resultant polynomial.  Advance both pointers.
    *   **If exponent of polynomial A > exponent of polynomial B:** Insert a node with the coefficient and exponent from polynomial A into the resultant polynomial. Advance the pointer of polynomial A.
    *   **If exponent of polynomial A < exponent of polynomial B:** Insert a node with the coefficient and exponent from polynomial B into the resultant polynomial. Advance the pointer of polynomial B.
4.  After one of the linked lists is exhausted, append the remaining terms of the other linked list to the resultant polynomial.

**Python Code Example (using the `Node` and `Polynomial` classes from above):**

```python
    def add(self, other_poly):
        """Adds two polynomials and returns the result as a new Polynomial object."""
        result = Polynomial()
        ptr1 = self.head
        ptr2 = other_poly.head

        while ptr1 and ptr2:
            if ptr1.exp == ptr2.exp:
                sum_coeff = ptr1.coeff + ptr2.coeff
                if sum_coeff != 0: # Avoid inserting terms with zero coefficients
                    result.insert_term(sum_coeff, ptr1.exp)
                ptr1 = ptr1.next
                ptr2 = ptr2.next
            elif ptr1.exp > ptr2.exp:
                result.insert_term(ptr1.coeff, ptr1.exp)
                ptr1 = ptr1.next
            else:
                result.insert_term(ptr2.coeff, ptr2.exp)
                ptr2 = ptr2.next

        # Append remaining terms from the first polynomial
        while ptr1:
            result.insert_term(ptr1.coeff, ptr1.exp)
            ptr1 = ptr1.next

        # Append remaining terms from the second polynomial
        while ptr2:
            result.insert_term(ptr2.coeff, ptr2.exp)
            ptr2 = ptr2.next

        return result

# Example usage
poly1 = Polynomial()
poly1.insert_term(5, 3)
poly1.insert_term(2, 1)
poly1.insert_term(1, 0)

poly2 = Polynomial()
poly2.insert_term(3, 2)
poly2.insert_term(4, 1)

sum_poly = poly1.add(poly2)
print("Polynomial 1: ", end="")
poly1.display()
print("Polynomial 2: ", end="")
poly2.display()
print("Sum: ", end="")
sum_poly.display() # Output: 5x^3 + 3x^2 + 6x + 1
```

## 4. Polynomial Multiplication

**Algorithm:**

1.  Initialize a new polynomial (resultant linked list).
2.  Iterate through each term of the first polynomial.
3.  For each term in the first polynomial, iterate through each term of the second polynomial.
4.  Multiply the coefficients and add the exponents of the two terms.
5.  Insert the resulting term (with the multiplied coefficient and added exponent) into the resultant polynomial. If the exponent already exists in the resultant polynomial, add the current coefficient to the existing coefficient of that exponent.
6.  After iterating through all terms, the resultant polynomial will contain the product of the two polynomials.

**Python Code Example (using the `Node` and `Polynomial` classes from above):**

```python
    def multiply(self, other_poly):
        """Multiplies two polynomials and returns the result as a new Polynomial object."""
        result = Polynomial()
        ptr1 = self.head

        while ptr1:
            ptr2 = other_poly.head
            while ptr2:
                new_coeff = ptr1.coeff * ptr2.coeff
                new_exp = ptr1.exp + ptr2.exp
                result.insert_term(new_coeff, new_exp)
                ptr2 = ptr2.next
            ptr1 = ptr1.next

        return result

# Example usage
poly1 = Polynomial()
poly1.insert_term(5, 2)
poly1.insert_term(2, 0)

poly2 = Polynomial()
poly2.insert_term(3, 1)
poly2.insert_term(4, 0)

product_poly = poly1.multiply(poly2)
print("Polynomial 1: ", end="")
poly1.display()
print("Polynomial 2: ", end="")
poly2.display()
print("Product: ", end="")
product_poly.display()  # Output: 15x^3 + 20x^2 + 6x + 8
```

## 5. Time and Space Complexity

*   **Polynomial Addition:**

    *   **Time Complexity:** O(m + n), where m and n are the number of terms in the two polynomials.  This is because, in the worst case, we need to traverse both linked lists once.
    *   **Space Complexity:** O(m + n) in the worst case, as the resultant polynomial might have a number of terms equal to the sum of the terms in the two input polynomials. However, if significant terms cancel out, the space complexity can be less.

*   **Polynomial Multiplication:**

    *   **Time Complexity:** O(m * n), where m and n are the number of terms in the two polynomials.  This is because we have a nested loop structure.
    *   **Space Complexity:**  O(m * n) in the worst case.  The product polynomial can have up to m*n terms if there are no like-terms to combine.

## 6. Important Points to Remember

*   **Exponent Order:**  Maintaining the polynomial linked list in descending order of exponents simplifies the addition and multiplication operations.
*   **Zero Coefficients:**  Avoid inserting terms with zero coefficients into the resultant polynomial, as they do not contribute to the polynomial's value and can increase space usage.
*   **Memory Management:** In languages like C/C++, remember to deallocate the memory used by the linked list nodes after the polynomial is no longer needed to prevent memory leaks.  Python handles garbage collection automatically.
*   **Handling Duplicate Exponents:**  Make sure your `insert_term` method handles cases where a term with a particular exponent already exists in the polynomial. In this case, you should *add* the coefficients rather than creating a new node.

## 7. Practice Questions and Exercises

**Question 1:**

Write a function to evaluate a polynomial at a given value of x.

**Answer:**

```python
    def evaluate(self, x_value):
        """Evaluates the polynomial at a given x value."""
        result = 0
        current = self.head
        while current:
            result += current.coeff * (x_value ** current.exp)
            current = current.next
        return result

# Example Usage:
poly = Polynomial()
poly.insert_term(3, 2)
poly.insert_term(2, 1)
poly.insert_term(1, 0)
print(f"Polynomial: ", end="")
poly.display()
x = 2
result = poly.evaluate(x)
print(f"Value at x = {x}: {result}") # Output: Value at x = 2: 17
```

**Question 2:**

Implement a function to delete a term from the polynomial given its exponent.

**Answer:**

```python
    def delete_term(self, exponent):
        """Deletes a term from the polynomial with the given exponent."""
        if self.head is None:
            return

        if self.head.exp == exponent:
            self.head = self.head.next
            return

        current = self.head
        while current.next:
            if current.next.exp == exponent:
                current.next = current.next.next
                return  # Term found and deleted
            current = current.next
```

**Question 3:**

How would you modify the code to handle polynomials with multiple variables (e.g., x, y, z)?

**Answer:**

You would need to modify the `Node` class to store exponents for each variable. For example, instead of just `exp`, you could have `exp_x`, `exp_y`, `exp_z`.  The comparison logic in addition and the multiplication logic would need to be updated to compare and combine exponents for *all* variables. The `display` function would also require modification to represent the terms correctly with multiple variables and their exponents.

**Question 4:**

What are the advantages and disadvantages of using linked lists to represent polynomials compared to using arrays?

**Answer:**

*   **Advantages:**
    *   **Dynamic Size:** Linked lists can easily grow or shrink as needed, which is useful if the number of terms in a polynomial is not known in advance.
    *   **Efficient Insertion/Deletion:** Inserting or deleting terms in a linked list is generally more efficient than in an array (especially in the middle).
*   **Disadvantages:**
    *   **Space Overhead:** Linked lists require extra memory to store the pointers.
    *   **Random Access:** Accessing a specific term in a linked list requires traversing the list from the beginning, making random access slower than in an array (which can access elements directly using their index).

These study notes cover the core concepts and implementation details required to understand and implement polynomial addition and multiplication using singly linked lists in a Data Structures Lab setting.  Remember to practice writing and testing the code to solidify your understanding.
