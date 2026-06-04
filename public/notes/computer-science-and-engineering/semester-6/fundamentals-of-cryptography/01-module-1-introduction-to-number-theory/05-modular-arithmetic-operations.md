---
title: "Modular Arithmetic Operations"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcbf"
status: "completed"
scrapedAt: "2026-05-20T16:53:49.555Z"
---
## FUNDAMENTALS OF CRYPTOGRAPHY - Module 1: Introduction to Number Theory - Modular Arithmetic Operations

**Learning Outcomes:**

*   Understand the concept of modular arithmetic.
*   Perform addition, subtraction, multiplication, and exponentiation modulo a given number.
*   Compute modular inverses using the Extended Euclidean Algorithm.
*   Solve simple modular equations.
*   Apply modular arithmetic to basic cryptographic applications.

---

### 1. Introduction to Modular Arithmetic

*   **Definition:** Modular arithmetic deals with the remainders of integer division. Instead of concerning ourselves with the actual quotient of the division, we only focus on the remainder.

*   **Congruence Relation:** We say that two integers `a` and `b` are *congruent modulo n* (written `a ≡ b (mod n)`) if they have the same remainder when divided by `n`.  Mathematically, `a ≡ b (mod n)` if and only if `n` divides `(a - b)`, i.e., `a - b = kn` for some integer `k`.

*   **Modulo Operator (%):** The modulo operator `%` returns the remainder of a division.  `a % n` represents the remainder when `a` is divided by `n`.

*   **Example:**
    *   `17 ≡ 2 (mod 5)` because 17 divided by 5 leaves a remainder of 2.  Also, `17 - 2 = 15`, which is divisible by 5.
    *   `25 ≡ 1 (mod 8)` because 25 divided by 8 leaves a remainder of 1.

*   **Important Point:** The modulus `n` must be a positive integer greater than 1.

### 2. Basic Modular Arithmetic Operations

#### 2.1. Modular Addition

*   **Definition:**  `(a + b) mod n = (a mod n + b mod n) mod n`
*   **Example:**
    *   `(15 + 8) mod 7 = (15 mod 7 + 8 mod 7) mod 7 = (1 + 1) mod 7 = 2`
    *   Verification: `(15 + 8) mod 7 = 23 mod 7 = 2`

#### 2.2. Modular Subtraction

*   **Definition:**  `(a - b) mod n = (a mod n - b mod n) mod n`
*   **Important:**  If `(a mod n - b mod n)` is negative, add `n` to the result to make it positive.
*   **Example:**
    *   `(8 - 15) mod 7 = (8 mod 7 - 15 mod 7) mod 7 = (1 - 1) mod 7 = -6 mod 7 = 1` (Adding 7 to -6 gives 1)
    *   Verification: `(8 - 15) mod 7 = -7 mod 7 = 0` (Since we are considering remainders in range [0, n-1], -7 is equivalent to 0 modulo 7 because -7+7=0 which is congruent to 0 (mod 7)). However, it is important to note that for cryptographic applications, ensuring the intermediate result is within the [0, n-1] range is crucial for consistency. Therefore, adding `n` if the result is negative is a good practice.

#### 2.3. Modular Multiplication

*   **Definition:** `(a * b) mod n = (a mod n * b mod n) mod n`
*   **Example:**
    *   `(12 * 5) mod 7 = (12 mod 7 * 5 mod 7) mod 7 = (5 * 5) mod 7 = 25 mod 7 = 4`
    *   Verification: `(12 * 5) mod 7 = 60 mod 7 = 4`

#### 2.4. Modular Exponentiation

*   **Definition:**  `a^b mod n` can be efficiently computed using the *square-and-multiply* algorithm (also known as exponentiation by squaring).  This avoids calculating `a^b` directly, which can become very large.

*   **Square-and-Multiply Algorithm (Example: Calculate 5^13 mod 7):**

    1.  Express the exponent (13) in binary: `13 = 1101_2`
    2.  Initialize `result = 1`
    3.  Iterate through the binary representation from left to right:
        *   If the current bit is 1, `result = (result * base) mod n`
        *   `base = (base * base) mod n`

    *   **Iteration 1 (Bit 1):**
        *   `result = (1 * 5) mod 7 = 5`
        *   `base = (5 * 5) mod 7 = 25 mod 7 = 4`

    *   **Iteration 2 (Bit 1):**
        *   `result = (5 * 4) mod 7 = 20 mod 7 = 6`
        *   `base = (4 * 4) mod 7 = 16 mod 7 = 2`

    *   **Iteration 3 (Bit 0):**
        *   `result = 6` (No change because the bit is 0)
        *   `base = (2 * 2) mod 7 = 4`

    *   **Iteration 4 (Bit 1):**
        *   `result = (6 * 4) mod 7 = 24 mod 7 = 3`
        *   `base = (4 * 4) mod 7 = 16 mod 7 = 2`

    *   Therefore, `5^13 mod 7 = 3`

*   **Example:**  `3^4 mod 5 = (3 * 3 * 3 * 3) mod 5 = 81 mod 5 = 1`
*   **Important Point:** Square-and-multiply is essential for efficiency in cryptography.

### 3. Modular Inverses

*   **Definition:** The *modular inverse* of an integer `a` modulo `n` is an integer `x` such that `(a * x) ≡ 1 (mod n)`.  It only exists if `a` and `n` are *coprime* (i.e., their greatest common divisor (GCD) is 1).

*   **Finding Modular Inverses using the Extended Euclidean Algorithm (EEA):**

    1.  **Apply the Euclidean Algorithm to find the GCD of `a` and `n`.** If `GCD(a, n) != 1`, the modular inverse does not exist.
    2.  **Use the Extended Euclidean Algorithm to express the GCD as a linear combination of `a` and `n`:**  `GCD(a, n) = s * a + t * n`  where `s` and `t` are integers.
    3.  **If `GCD(a, n) = 1`, then `s * a + t * n = 1`.** Taking this equation modulo `n`, we get `(s * a) ≡ 1 (mod n)`.  Therefore, `s` is the modular inverse of `a` modulo `n`.
    4.  **If `s` is negative, add `n` to it to obtain a positive integer in the range `[0, n-1]` representing the modular inverse.**

*   **Example: Find the modular inverse of 5 modulo 7:**

    1.  **Euclidean Algorithm:**
        *   `7 = 1 * 5 + 2`
        *   `5 = 2 * 2 + 1`
        *   `2 = 2 * 1 + 0`
        *   `GCD(5, 7) = 1` (The modular inverse exists)

    2.  **Extended Euclidean Algorithm (Backwards):**
        *   `1 = 5 - 2 * 2`
        *   Substitute `2 = 7 - 1 * 5`:
            *   `1 = 5 - 2 * (7 - 1 * 5)`
            *   `1 = 5 - 2 * 7 + 2 * 5`
            *   `1 = 3 * 5 - 2 * 7`

    3.  **Identify the coefficients:** `s = 3`, `t = -2`
    4.  **Therefore, the modular inverse of 5 modulo 7 is 3.**  (Because `3 * 5 ≡ 1 (mod 7)`)

*   **Verification:**  `5 * 3 = 15 ≡ 1 (mod 7)`

### 4. Solving Simple Modular Equations

*   **Type 1:  `ax ≡ b (mod n)`**

    1.  **Find the modular inverse of `a` modulo `n` (if it exists).** Let's call it `a^-1`.
    2.  **Multiply both sides of the equation by `a^-1`:** `a^-1 * ax ≡ a^-1 * b (mod n)`
    3.  **Simplify:** `x ≡ a^-1 * b (mod n)`

*   **Example: Solve `5x ≡ 3 (mod 7)`**

    1.  We already know from the previous example that the modular inverse of 5 modulo 7 is 3.
    2.  Multiply both sides by 3: `3 * 5x ≡ 3 * 3 (mod 7)`
    3.  Simplify: `15x ≡ 9 (mod 7)`  =>  `x ≡ 2 (mod 7)`
    4.  Therefore, `x = 2` is a solution.  All solutions are of the form `x = 2 + 7k` for any integer `k`.

### 5. Applications in Cryptography

*   **Affine Cipher:** Uses modular arithmetic for encryption and decryption.
*   **RSA Encryption:**  Heavily relies on modular exponentiation for key generation, encryption, and decryption.  Finding modular inverses is crucial in this algorithm.
*   **Diffie-Hellman Key Exchange:**  Uses modular exponentiation to securely exchange cryptographic keys.
*   **Hashing Algorithms:** Modular arithmetic is sometimes used in hashing functions for distributing data uniformly.

### 6. Practice Questions/Exercises

1.  **Calculate `(23 + 17) mod 11`**
2.  **Calculate `(12 - 30) mod 7`**
3.  **Calculate `(8 * 9) mod 13`**
4.  **Calculate `2^10 mod 11` using the square-and-multiply algorithm.**
5.  **Find the modular inverse of 7 modulo 15.**
6.  **Solve the equation `3x ≡ 5 (mod 8)`**

### 7. Answers to Practice Questions/Exercises

1.  `(23 + 17) mod 11 = 40 mod 11 = 7`
2.  `(12 - 30) mod 7 = -18 mod 7 = 3` (because -18+21=3)
3.  `(8 * 9) mod 13 = 72 mod 13 = 7`
4.  `2^10 mod 11` (using square and multiply)
    * 10 = 1010 in binary
    * result = 1
    * base = 2

    * Bit 1:
        * result = (1 * 2) mod 11 = 2
        * base = (2 * 2) mod 11 = 4

    * Bit 0:
        * result = 2
        * base = (4*4) mod 11 = 5

    * Bit 1:
        * result = (2 * 5) mod 11 = 10
        * base = (5*5) mod 11 = 3

    * Bit 0
        * result = 10
        * base = (3*3) mod 11 = 9
    * So,  `2^10 mod 11 = 10`
5.  Modular inverse of 7 modulo 15:
    *   Euclidean Algorithm:
        *   `15 = 2 * 7 + 1`
        *   `7 = 7 * 1 + 0`
        *   GCD(7, 15) = 1
    *   Extended Euclidean Algorithm:
        *   `1 = 15 - 2 * 7`
        *   s = -2, t = 1
    *   Therefore, the modular inverse of 7 modulo 15 is -2. We need a positive integer, therefore: -2 + 15 = 13.
    *   The modular inverse of 7 modulo 15 is 13.
    *   Verification:  `7 * 13 = 91 ≡ 1 (mod 15)`
6.  Solving `3x ≡ 5 (mod 8)`:
    *   Find the modular inverse of 3 modulo 8.
        *   `8 = 2 * 3 + 2`
        *   `3 = 1 * 2 + 1`
        *   `2 = 2 * 1 + 0`
        *   GCD(3, 8) = 1
        *   Extended Euclidean Algorithm:
            *   `1 = 3 - 1 * 2`
            *   Substitute `2 = 8 - 2 * 3`:
                *   `1 = 3 - 1 * (8 - 2 * 3)`
                *   `1 = 3 - 8 + 2 * 3`
                *   `1 = 3 * 3 - 1 * 8`
        *   s = 3, t = -1
        *   The modular inverse of 3 modulo 8 is 3.
    *   Multiply both sides by 3:  `3 * 3x ≡ 3 * 5 (mod 8)`
    *   Simplify: `9x ≡ 15 (mod 8)` => `x ≡ 7 (mod 8)`
    *   Therefore, x = 7 is a solution.

### 8. Important Points to Remember

*   Modular arithmetic deals with remainders after division.
*   `a ≡ b (mod n)` means `a` and `b` have the same remainder when divided by `n`.
*   Modular addition, subtraction, and multiplication are performed by applying the modulo operator after each operation.
*   Modular exponentiation is efficiently calculated using the square-and-multiply algorithm.
*   A modular inverse exists only if the number and the modulus are coprime.
*   The Extended Euclidean Algorithm is used to find modular inverses.
*   Modular arithmetic is fundamental to many cryptographic algorithms. Understanding it is key to understanding cryptography.
