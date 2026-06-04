---
title: "Properties of Congruences"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcbe"
status: "completed"
scrapedAt: "2026-05-20T16:53:48.847Z"
---
# FUNDAMENTALS OF CRYPTOGRAPHY - Module 1: Introduction to Number Theory - Properties of Congruences

## Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Define congruence modulo *n*.
*   State and apply the properties of congruences.
*   Solve simple congruence equations using congruence properties.
*   Understand and apply the concepts of modular arithmetic.

## 1. Key Concepts and Definitions

*   **Congruence Modulo n:**

    *   Two integers *a* and *b* are said to be *congruent modulo n*, denoted by *a ≡ b (mod n)*, if their difference (*a - b*) is divisible by *n*.  In other words, *n* divides (*a - b*). This can be written as: *n | (a - b)*.
    *   *n* is called the *modulus* of the congruence.
    *   Equivalently, *a ≡ b (mod n)* if *a* and *b* have the same remainder when divided by *n*.  This means *a = kn + b* for some integer *k*.
    *   **Example:** 17 ≡ 2 (mod 5) because 17 - 2 = 15 is divisible by 5. Also, 17 divided by 5 has a remainder of 2.

*   **Residue Classes:**

    *   For a given modulus *n*, the set of all integers congruent to *a* modulo *n* is called the *residue class of a modulo n*, denoted as [a].
    *   The set of all residue classes modulo *n* forms the *complete residue system modulo n*, denoted by Z<sub>n</sub>.  Z<sub>n</sub> = { [0], [1], [2], ..., [n-1] }.
    *   **Example:** Z<sub>5</sub> = { [0], [1], [2], [3], [4] }. Each [i] represents all numbers that have remainder i when divided by 5.  So [2] would be {..., -8, -3, 2, 7, 12, ...}.
*   **Modular Arithmetic:**

    *   Modular arithmetic deals with operations on residue classes.
    *   Addition modulo *n*:  (a + b) mod n = (a mod n + b mod n) mod n
    *   Multiplication modulo *n*: (a * b) mod n = (a mod n * b mod n) mod n

## 2. Properties of Congruences

These properties are crucial for manipulating and simplifying congruences.

*   **Reflexivity:**  *a ≡ a (mod n)*  (Any integer is congruent to itself modulo n)

    *   **Example:** 7 ≡ 7 (mod 3)

*   **Symmetry:** If *a ≡ b (mod n)*, then *b ≡ a (mod n)*

    *   **Example:** If 11 ≡ 2 (mod 3), then 2 ≡ 11 (mod 3)

*   **Transitivity:** If *a ≡ b (mod n)* and *b ≡ c (mod n)*, then *a ≡ c (mod n)*

    *   **Example:** If 13 ≡ 4 (mod 3) and 4 ≡ 1 (mod 3), then 13 ≡ 1 (mod 3)

*   **Addition/Subtraction:** If *a ≡ b (mod n)* and *c ≡ d (mod n)*, then *a + c ≡ b + d (mod n)* and *a - c ≡ b - d (mod n)*

    *   **Example:**  If 7 ≡ 1 (mod 3) and 5 ≡ 2 (mod 3), then 7 + 5 ≡ 1 + 2 (mod 3), which simplifies to 12 ≡ 3 (mod 3), which is true.  Also, 7 - 5 ≡ 1 - 2 (mod 3), which simplifies to 2 ≡ -1 (mod 3), which is also true.

*   **Multiplication:** If *a ≡ b (mod n)* and *c ≡ d (mod n)*, then *ac ≡ bd (mod n)*

    *   **Example:** If 7 ≡ 1 (mod 3) and 5 ≡ 2 (mod 3), then 7 * 5 ≡ 1 * 2 (mod 3), which simplifies to 35 ≡ 2 (mod 3), which is true.

*   **Multiplication by a Constant:** If *a ≡ b (mod n)*, then *ka ≡ kb (mod n)* for any integer *k*.

    *   **Example:** If 11 ≡ 2 (mod 3), then 4 * 11 ≡ 4 * 2 (mod 3), which simplifies to 44 ≡ 8 (mod 3), which is true.

*   **Division by a Common Factor (Important - Requires Condition):** If *ac ≡ bc (mod n)* and *gcd(c, n) = 1*, then *a ≡ b (mod n)*.  In other words, you can only divide if *c* and *n* are relatively prime (their greatest common divisor is 1). If gcd(c, n) = d > 1, then  *a ≡ b (mod n/d)*.

    *   **Example 1 (gcd(c, n) = 1):**  If 6 ≡ 15 (mod 3),  then 2*3 ≡ 5*3 (mod 3). gcd(3,3) = 3 != 1 so we CANNOT simply divide by 3 and get 2≡5 (mod 3) as 2-5 = -3 which is divisible by 3 so 2≡ -1 (mod 1). If we did want to work in mod 3, we can reduce the equation into simplest form. Because 6 ≡ 0 (mod 3) and 15 ≡ 0 (mod 3), then 0 ≡ 0 (mod 3)
    *   **Example 2 (gcd(c, n) > 1):** If 4 ≡ 10 (mod 6), then 2*2 ≡ 5*2 (mod 6).  gcd(2, 6) = 2.  Therefore, *2 ≡ 5 (mod 6/2)*, which simplifies to *2 ≡ 5 (mod 3)*. This is true because 5-2 = 3 which is divisible by 3.

*   **Exponentiation:** If *a ≡ b (mod n)*, then *a<sup>k</sup> ≡ b<sup>k</sup> (mod n)* for any positive integer *k*.

    *   **Example:** If 5 ≡ 2 (mod 3), then 5<sup>2</sup> ≡ 2<sup>2</sup> (mod 3), which simplifies to 25 ≡ 4 (mod 3), which is true. Also, 25≡ 1 (mod 3) and 4 ≡ 1 (mod 3) so 1 ≡ 1 (mod 3)

## 3. Solving Congruence Equations

We can use the properties of congruences to solve equations of the form *ax ≡ b (mod n)*.

*   **Example 1: Simple Case**
    *   Solve for *x*: *2x ≡ 1 (mod 5)*
    *   We want to find a number that, when multiplied by 2, leaves a remainder of 1 when divided by 5.  We can try different values for x (1, 2, 3, 4) as we are working mod 5.

        *   2 * 1 = 2 ≡ 2 (mod 5)
        *   2 * 2 = 4 ≡ 4 (mod 5)
        *   2 * 3 = 6 ≡ 1 (mod 5)
        *   2 * 4 = 8 ≡ 3 (mod 5)

    *   Therefore, *x ≡ 3 (mod 5)* is the solution. This means x = 3 + 5k where k is some constant.

*   **Example 2: Using Properties**

    *   Solve for *x*: *3x ≡ 7 (mod 10)*

    *   We can't directly divide by 3 because gcd(3, 10) = 1, and there isn't an integer inverse for 3 mod 10 immediately apparent. We need to find a multiple of 3 that is congruent to 1 modulo 10 (or simplify 7 mod 10).

    *   Multiply both sides by 7:  (3 * 7)x ≡ 7 * 7 (mod 10) which gives us 21x ≡ 49 (mod 10)

    *   Simplify: x ≡ 9 (mod 10).  Thus, x = 9 is a solution (9 + 10k for any integer k).

    *   **Check:**  3 * 9 = 27 ≡ 7 (mod 10).

## 4. Important Points to Remember

*   Congruence is an equivalence relation.
*   Modular arithmetic provides a powerful framework for studying divisibility and remainders.
*   You can only divide in congruences if the common factor and the modulus are relatively prime.
*   Understanding the properties of congruences is essential for simplifying expressions and solving equations.
*   When working with modular arithmetic, always reduce your answers to the smallest non-negative residue.

## 5. Practice Questions and Exercises

1.  **Determine if the following congruences are true or false:**

    a.  25 ≡ 1 (mod 4)
    b.  12 ≡ 3 (mod 5)
    c.  -7 ≡ 5 (mod 6)

2.  **Simplify the following expressions:**

    a.  (17 + 23) mod 5
    b.  (8 * 12) mod 7
    c.  (5<sup>3</sup>) mod 11

3.  **Solve the following congruence equations:**

    a.  4x ≡ 3 (mod 5)
    b.  2x ≡ 6 (mod 8)
    c.  5x ≡ 2 (mod 11)

4.  **What are the residue classes of modulo 4?**

## 6. Answers to Practice Questions

1.  **True/False:**

    a.  True (25 - 1 = 24 is divisible by 4)
    b.  False (12 - 3 = 9 is not divisible by 5)
    c.  True (-7 - 5 = -12 is divisible by 6)

2.  **Simplify:**

    a.  (17 + 23) mod 5 = 40 mod 5 = 0
    b.  (8 * 12) mod 7 = 96 mod 7 = 5
    c.  (5<sup>3</sup>) mod 11 = 125 mod 11 = 4

3.  **Solve:**

    a.  4x ≡ 3 (mod 5)  Multiply by 4: 16x ≡ 12 (mod 5).  x ≡ 2 (mod 5)
    b.  2x ≡ 6 (mod 8)  gcd(2, 8) = 2. Divide by 2: x ≡ 3 (mod 4). This means x = 3, 7, 11 etc. or 3 + 4k. Therefore, x ≡ 3 (mod 8) and x ≡ 7 (mod 8) are the solutions.
    c.  5x ≡ 2 (mod 11) Multiply by 9: 45x ≡ 18 (mod 11). x ≡ 7 (mod 11)

4.  **Residue Classes of Modulo 4:**

    Z<sub>4</sub> = { [0], [1], [2], [3] }. Where [0] is all integers that are divisible by 4, [1] is all integers with a remainder of 1 when divided by 4, [2] is all integers with a remainder of 2 when divided by 4, and [3] is all integers with a remainder of 3 when divided by 4.
