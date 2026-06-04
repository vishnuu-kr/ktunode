---
title: "Modular Arithmetic : The Modulus"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcbd"
status: "completed"
scrapedAt: "2026-05-20T16:53:48.131Z"
---
## FUNDAMENTALS OF CRYPTOGRAPHY - MODULE 1: INTRODUCTION TO NUMBER THEORY
## Topic: Modular Arithmetic: The Modulus

**Learning Outcomes:**

*   Understand the concept of the modulus in modular arithmetic.
*   Perform basic modular arithmetic operations.
*   Calculate the remainder of a division.
*   Apply the modulus operation in simple examples.

---

### 1. Introduction to Modular Arithmetic

Modular arithmetic is a system of arithmetic for integers, where numbers "wrap around" upon reaching a certain value – the *modulus*.  It's like clock arithmetic (e.g., 13:00 is the same as 1:00 pm on a 12-hour clock). Modular arithmetic is crucial to many cryptographic algorithms.

### 2. The Modulus: Definition and Key Concepts

*   **Definition:**  The *modulus*, denoted by `n`, is a positive integer that defines the range within which numbers "wrap around."  We say that two integers, *a* and *b*, are *congruent modulo n* if their difference (*a* - *b*) is divisible by *n*. This is written as:

    `a ≡ b (mod n)`

*   **Congruence:** The symbol `≡` means "is congruent to." Congruence is an equivalence relation, meaning it's reflexive, symmetric, and transitive.

    *   **Reflexive:** `a ≡ a (mod n)`
    *   **Symmetric:** If `a ≡ b (mod n)`, then `b ≡ a (mod n)`
    *   **Transitive:** If `a ≡ b (mod n)` and `b ≡ c (mod n)`, then `a ≡ c (mod n)`

*   **Remainder:**  When an integer *a* is divided by the modulus *n*, the remainder *r* is such that `0 ≤ r < n`. The modulus operation effectively finds this remainder.

*   **The Modulo Operator:** The modulo operator is often denoted as `mod` or `%` (in many programming languages). The expression `a mod n` or `a % n` gives the remainder when *a* is divided by *n*. This remainder is the smallest non-negative integer *r* such that `a = q * n + r`, where *q* is the quotient and *r* is the remainder.

### 3. Calculating the Remainder

The process of calculating the remainder involves dividing the integer *a* by the modulus *n*. The remainder is the amount "left over" after the division.

*   **Example 1:**  `17 mod 5`

    *   Divide 17 by 5:  `17 / 5 = 3` with a remainder of `2`.
    *   Therefore, `17 mod 5 = 2`.  We can write `17 ≡ 2 (mod 5)`.

*   **Example 2:** `31 mod 7`

    *   Divide 31 by 7: `31 / 7 = 4` with a remainder of `3`.
    *   Therefore, `31 mod 7 = 3`. We can write `31 ≡ 3 (mod 7)`.

*   **Example 3 (Negative Numbers):** `-11 mod 3`

    *   When dealing with negative numbers, we need to find the smallest *non-negative* remainder.
    *   Divide -11 by 3: `-11 / 3 = -3.666...`
    *   The integer closest to -3.666... but less than it is -4.
    *   So, `-11 = (-4 * 3) + 1`. The remainder is `1`.
    *   Therefore, `-11 mod 3 = 1`. We can write `-11 ≡ 1 (mod 3)`.
    *   Alternatively, add multiples of the modulus until you get a non-negative number: -11 + 3 = -8; -8 + 3 = -5; -5 + 3 = -2; -2 + 3 = 1.  Therefore `-11 ≡ 1 (mod 3)`.

### 4. Modular Arithmetic Operations

Modular arithmetic supports the basic arithmetic operations (addition, subtraction, multiplication).

*   **Modular Addition:** `(a + b) mod n  ≡ (a mod n + b mod n) mod n`

    *   Example: `(17 + 13) mod 5 ≡ (17 mod 5 + 13 mod 5) mod 5  ≡ (2 + 3) mod 5 ≡ 5 mod 5 ≡ 0`

*   **Modular Subtraction:** `(a - b) mod n ≡ (a mod n - b mod n) mod n`

    *   Example: `(17 - 13) mod 5 ≡ (17 mod 5 - 13 mod 5) mod 5 ≡ (2 - 3) mod 5 ≡ -1 mod 5 ≡ 4`

*   **Modular Multiplication:** `(a * b) mod n ≡ (a mod n * b mod n) mod n`

    *   Example: `(17 * 13) mod 5 ≡ (17 mod 5 * 13 mod 5) mod 5 ≡ (2 * 3) mod 5 ≡ 6 mod 5 ≡ 1`

### 5. Application in Simple Examples

*   **Clock Arithmetic:**  A 24-hour clock uses modulo 24. If it's currently 18:00 (6 PM), what time will it be in 10 hours?

    *   `(18 + 10) mod 24 = 28 mod 24 = 4`
    *   It will be 04:00 (4 AM).

*   **Even/Odd Determination:** An integer *a* is even if `a mod 2 = 0` and odd if `a mod 2 = 1`.

### 6. Practice Questions/Exercises

1.  Calculate `25 mod 7`.
2.  Calculate `-15 mod 4`.
3.  Calculate `(12 + 18) mod 5`.
4.  Calculate `(7 * 9) mod 11`.
5.  If today is Wednesday (represented by the number 3, where Sunday is 0), what day will it be in 20 days?

**Answers:**

1.  `25 mod 7 = 4` (25 / 7 = 3 with a remainder of 4)
2.  `-15 mod 4 = 1` (-15 = -4 * 4 + 1)
3.  `(12 + 18) mod 5 = 30 mod 5 = 0`
4.  `(7 * 9) mod 11 = 63 mod 11 = 8`
5.  `(3 + 20) mod 7 = 23 mod 7 = 2`.  Therefore, it will be Tuesday (Sunday=0, Monday=1, Tuesday=2, etc.).

### 7. Important Points to Remember

*   The modulus *n* is always a positive integer.
*   The remainder obtained from the modulo operation is always non-negative and less than *n*. (0 ≤ r < n)
*   When dealing with negative numbers, ensure the final remainder is non-negative.
*   Modular arithmetic simplifies calculations by working within a finite range of values.
*   Modular arithmetic is fundamental to many cryptographic algorithms, including those used in encryption and digital signatures.  Understanding it is crucial for future study in cryptography.

---
