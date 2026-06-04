---
title: "The Euclidean Algorithm"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcbc"
status: "completed"
scrapedAt: "2026-05-20T16:53:47.486Z"
---
## FUNDAMENTALS OF CRYPTOGRAPHY: Module 1 - Introduction to Number Theory
### Topic: The Euclidean Algorithm

**Learning Outcomes:**

*   Understand the concept of the greatest common divisor (GCD) of two integers.
*   Learn the Euclidean Algorithm and its application for finding the GCD.
*   Apply the Extended Euclidean Algorithm to find the Bezout coefficients.
*   Understand the relationship between the GCD and linear combinations of integers.
*   Be able to implement the Euclidean Algorithm in code.

**1. Greatest Common Divisor (GCD)**

*   **Definition:** The greatest common divisor (GCD) of two integers, *a* and *b*, is the largest positive integer that divides both *a* and *b* without leaving a remainder. It's denoted as gcd(*a*, *b*).

*   **Key Concepts:**
    *   A divisor of an integer *a* is an integer *d* such that *a* = *d* *q* for some integer *q*.
    *   If *a* and *b* are both zero, then the GCD is undefined.  However, it's often defined as gcd(0,0) = 0 for completeness.
    *   gcd(*a*, *b*) = gcd(*b*, *a*)
    *   gcd(*a*, 0) = |*a*| if *a* ≠ 0 (the absolute value of a).
    *   If *d* divides both *a* and *b*, then *d* also divides any linear combination of *a* and *b*, i.e., *d* divides *ax + by* for any integers *x* and *y*.

*   **Example:**
    *   The divisors of 12 are: 1, 2, 3, 4, 6, 12
    *   The divisors of 18 are: 1, 2, 3, 6, 9, 18
    *   The common divisors of 12 and 18 are: 1, 2, 3, 6
    *   Therefore, gcd(12, 18) = 6

**2. The Euclidean Algorithm**

*   **Principle:**  The Euclidean Algorithm is an efficient method for computing the GCD of two integers. It's based on the property that gcd(*a*, *b*) = gcd(*b*, *a* mod *b*).

*   **Algorithm:**
    1.  Given two integers *a* and *b*, where *a* ≥ *b* ≥ 0.  If *b* = 0, then gcd(*a*, *b*) = *a*.
    2.  Otherwise, divide *a* by *b* and find the remainder *r*.  So, *a* = *b* *q* + *r*, where 0 ≤ *r* < *b*.
    3.  Replace *a* with *b* and *b* with *r*.
    4.  Repeat steps 2 and 3 until *b* = 0. The GCD is then the value of *a*.

*   **Example:**  Find gcd(48, 18)

    1.  48 = 18 * 2 + 12
    2.  18 = 12 * 1 + 6
    3.  12 = 6 * 2 + 0
    4.  Since the remainder is 0, gcd(48, 18) = 6

*   **Why it works:**  The key is that the GCD of the original two numbers is the same as the GCD of the divisor and the remainder at each step.  Formally: gcd(a, b) = gcd(b, r)  This reduces the problem to smaller and smaller numbers until we reach a base case where the GCD is obvious.

**3. The Extended Euclidean Algorithm**

*   **Principle:** The Extended Euclidean Algorithm not only computes the GCD of two integers *a* and *b*, but also finds integers *x* and *y* such that *ax + by* = gcd(*a*, *b*).  The integers *x* and *y* are called Bezout coefficients.  This is known as Bezout's identity.

*   **Algorithm:**

    1.  Start with the equations:
        *   *a* = *a* * 1 + *b* * 0
        *   *b* = *a* * 0 + *b* * 1

    2.  Apply the Euclidean Algorithm as before, but at each step, update the coefficients *x* and *y*.

        *   If *a* = *b* *q* + *r*, then *r* = *a* - *b* *q*
        *   Suppose we have *a* = *ax₁ + by₁* and *b = ax₂ + by₂*.  Then:
            *   *r* = (ax₁ + by₁) - q(ax₂ + by₂) = a(x₁ - qx₂) + b(y₁ - qy₂)

        *   So, the new coefficients for *r* are *x₃ = x₁ - qx₂* and *y₃ = y₁ - qy₂*.

    3.  Continue until *b* = 0.  Then, gcd(*a*, *b*) = *a*, and the coefficients *x* and *y* corresponding to *a* are the Bezout coefficients.

*   **Example:** Find gcd(48, 18) and the Bezout coefficients.

    1.  **Initialization:**
        *   48 = 48 * 1 + 18 * 0  (x₁ = 1, y₁ = 0)
        *   18 = 48 * 0 + 18 * 1  (x₂ = 0, y₂ = 1)

    2.  **Iteration 1:** 48 = 18 * 2 + 12.  q = 2
        *   12 = 48 * (1 - 2 * 0) + 18 * (0 - 2 * 1) = 48 * 1 + 18 * (-2)  (x₃ = 1, y₃ = -2)

    3.  **Iteration 2:** 18 = 12 * 1 + 6.  q = 1
        *   6 = 48 * (0 - 1 * 1) + 18 * (1 - 1 * (-2)) = 48 * (-1) + 18 * 3  (x₄ = -1, y₄ = 3)

    4.  **Iteration 3:** 12 = 6 * 2 + 0.  q = 2
        *   The algorithm terminates.

    5.  **Result:** gcd(48, 18) = 6. The Bezout coefficients are *x* = -1 and *y* = 3.  Therefore, 48 * (-1) + 18 * 3 = 6.

**4. Relationship Between GCD and Linear Combinations**

*   **Bezout's Identity:** For any two integers *a* and *b*, there exist integers *x* and *y* such that *ax + by* = gcd(*a*, *b*).  The Extended Euclidean Algorithm provides a method for finding these integers *x* and *y*.

*   **Key Implication:**  The GCD of *a* and *b* is the *smallest positive integer* that can be written as a linear combination of *a* and *b*.

*   **Relatively Prime Numbers:** Two integers *a* and *b* are said to be relatively prime (or coprime) if their GCD is 1.  In this case, Bezout's Identity states that there exist integers *x* and *y* such that *ax + by* = 1.

**5. Implementation (Python Example)**

```python
def euclidean_algorithm(a, b):
  """Computes the GCD of two integers using the Euclidean Algorithm."""
  while(b):
    a, b = b, a % b
  return a

def extended_euclidean_algorithm(a, b):
  """Computes the GCD and Bezout coefficients using the Extended Euclidean Algorithm."""
  if a == 0:
    return (b, 0, 1)

  x1, y1 = 1, 0
  x2, y2 = 0, 1

  while b:
    q = a // b
    a, b = b, a % b
    x1, x2 = x2, x1 - q * x2
    y1, y2 = y2, y1 - q * y2

  return (a, x1, y1)

# Example Usage
a = 48
b = 18

gcd_val = euclidean_algorithm(a, b)
print(f"GCD({a}, {b}) = {gcd_val}")

gcd_val, x, y = extended_euclidean_algorithm(a, b)
print(f"GCD({a}, {b}) = {gcd_val}")
print(f"Bezout coefficients: x = {x}, y = {y}")
print(f"{a} * {x} + {b} * {y} = {a*x + b*y}")
```

**6. Practice Questions/Exercises**

1.  **Question:**  Find gcd(56, 35) using the Euclidean Algorithm.
    *   **Answer:**
        *   56 = 35 * 1 + 21
        *   35 = 21 * 1 + 14
        *   21 = 14 * 1 + 7
        *   14 = 7 * 2 + 0
        *   gcd(56, 35) = 7

2.  **Question:** Find gcd(120, 84) using the Euclidean Algorithm.
    *   **Answer:**
        *   120 = 84 * 1 + 36
        *   84 = 36 * 2 + 12
        *   36 = 12 * 3 + 0
        *   gcd(120, 84) = 12

3.  **Question:** Find gcd(252, 105) and the Bezout coefficients using the Extended Euclidean Algorithm.
    *   **Answer:**  gcd(252, 105) = 21. Bezout coefficients are x = 2, y = -4.  Therefore, 252 * 2 + 105 * (-4) = 21. (Verify this result using the code provided above or manual calculation).

4.  **Question:**  Are 15 and 28 relatively prime?  Explain your answer.
    *   **Answer:** Yes, 15 and 28 are relatively prime because gcd(15, 28) = 1.
        *   28 = 15 * 1 + 13
        *   15 = 13 * 1 + 2
        *   13 = 2 * 6 + 1
        *   2 = 1 * 2 + 0

5.  **Question:** Find the Bezout coefficients *x* and *y* for *a* = 17 and *b* = 11.  Then verify that 17x + 11y = gcd(17, 11).
    *   **Answer:** gcd(17, 11) = 1. Using the Extended Euclidean Algorithm (or the code example), we find *x* = -3 and *y* = 5.  Verify: 17 * (-3) + 11 * 5 = -51 + 55 = 4.  Hmm, this is incorrect. Let's carefully execute the Extended Euclidean Algorithm:

        * 17 = 11 * 1 + 6   (x1 = 1, y1 = 0, x2 = 0, y2 = 1, q = 1) => 6 = 17 * 1 + 11 * (-1)
        * 11 = 6 * 1 + 5    (x3 = 1, y3 = -1, x2 = 0, y2 = 1, q = 1) => 5 = 17 * (-1) + 11 * (2)
        * 6 = 5 * 1 + 1    (x3 = -1, y3 = 2, x2 = 1, y2 = -1, q = 1) => 1 = 17 * (2) + 11 * (-3)
        * 5 = 1 * 5 + 0

        Thus gcd(17, 11) = 1.  x = 2, y = -3. Verify 17(2) + 11(-3) = 34 - 33 = 1. The original attempt produced 4, indicating an error in the manual calculation.

**7. Important Points to Remember:**

*   The Euclidean Algorithm is an efficient method for finding the GCD.
*   The Extended Euclidean Algorithm finds both the GCD and the Bezout coefficients.
*   Bezout's Identity is fundamental in number theory and cryptography.
*   Relatively prime numbers have a GCD of 1.
*   The Bezout coefficients are *not* unique.  If *ax + by = gcd(a, b)*, then *a(x + kb) + b(y - ka) = gcd(a,b)* for any integer *k*.  Therefore, there are infinitely many possible pairs (*x*, *y*) that satisfy Bezout's identity.

This comprehensive set of notes covers the Euclidean Algorithm, its extended version, and its significance in number theory, providing a solid foundation for further studies in cryptography.  Make sure to practice with different examples to solidify your understanding.  Pay close attention to the Extended Euclidean Algorithm, as it's critical for later topics such as modular inverses.
