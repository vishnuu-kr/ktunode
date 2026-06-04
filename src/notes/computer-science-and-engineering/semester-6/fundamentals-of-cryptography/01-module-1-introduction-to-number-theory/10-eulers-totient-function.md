---
title: "Euler’s Totient Function"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcc4"
status: "completed"
scrapedAt: "2026-05-20T16:53:53.078Z"
---
## FUNDAMENTALS OF CRYPTOGRAPHY
### Module 1: Introduction to Number Theory
### Topic: Euler’s Totient Function

**Learning Outcomes:**

*   Understand the definition of Euler's Totient Function (φ(n)).
*   Calculate φ(n) for small values of n.
*   Understand and apply the formula for calculating φ(n) when the prime factorization of n is known.
*   Recognize the properties of Euler's Totient Function.
*   Apply Euler's Totient Function in cryptographic contexts, specifically in relation to Euler's Theorem.

**1. Definition of Euler's Totient Function (φ(n))**

*   **Definition:** Euler's totient function, denoted by φ(n), counts the number of positive integers less than or equal to *n* that are relatively prime (coprime) to *n*.  Two integers are relatively prime if their greatest common divisor (GCD) is 1.

*   **Mathematical Notation:** φ(n) = |{a ∈ ℤ : 1 ≤ a ≤ n, gcd(a, n) = 1}|

*   **Example:**  Let n = 8. The positive integers less than or equal to 8 are {1, 2, 3, 4, 5, 6, 7, 8}.
    *   gcd(1, 8) = 1
    *   gcd(2, 8) = 2
    *   gcd(3, 8) = 1
    *   gcd(4, 8) = 4
    *   gcd(5, 8) = 1
    *   gcd(6, 8) = 2
    *   gcd(7, 8) = 1
    *   gcd(8, 8) = 8

    Therefore, φ(8) = 4, because there are four numbers (1, 3, 5, and 7) less than or equal to 8 that are relatively prime to 8.

**2. Calculating φ(n) for Small Values of n**

*   **Direct Application of the Definition:**  For small values of *n*, you can directly apply the definition by listing the integers from 1 to *n* and determining which ones are coprime to *n*.

*   **Examples:**
    *   φ(1) = 1 (Only 1 is less than or equal to 1, and gcd(1, 1) = 1)
    *   φ(2) = 1 (Only 1 is less than or equal to 2, and gcd(1, 2) = 1)
    *   φ(3) = 2 (1 and 2 are coprime to 3)
    *   φ(4) = 2 (1 and 3 are coprime to 4)
    *   φ(5) = 4 (1, 2, 3, and 4 are coprime to 5)
    *   φ(6) = 2 (1 and 5 are coprime to 6)
    *   φ(7) = 6 (1, 2, 3, 4, 5, and 6 are coprime to 7)
    *   φ(9) = 6 (1, 2, 4, 5, 7, and 8 are coprime to 9)
    *   φ(10) = 4 (1, 3, 7, and 9 are coprime to 10)

**3. Formula for Calculating φ(n) when the Prime Factorization of n is Known**

*   **Formula:** If the prime factorization of *n* is  n = p<sub>1</sub><sup>k<sub>1</sub></sup> * p<sub>2</sub><sup>k<sub>2</sub></sup> * ... * p<sub>r</sub><sup>k<sub>r</sub></sup>, where p<sub>i</sub> are distinct prime numbers and k<sub>i</sub> are positive integers, then:

    φ(n) = n * (1 - 1/p<sub>1</sub>) * (1 - 1/p<sub>2</sub>) * ... * (1 - 1/p<sub>r</sub>)

*   **Explanation:** This formula accounts for the numbers that are *not* relatively prime to *n*. Each (1 - 1/p<sub>i</sub>) term represents the proportion of numbers not divisible by the prime p<sub>i</sub>.

*   **Special Case (n is prime):** If *n* is prime (n = p), then φ(p) = p - 1. This is because all numbers less than a prime number are relatively prime to it.

*   **Examples:**

    *   **n = 8 = 2<sup>3</sup>:**  φ(8) = 8 * (1 - 1/2) = 8 * (1/2) = 4
    *   **n = 12 = 2<sup>2</sup> * 3<sup>1</sup>:** φ(12) = 12 * (1 - 1/2) * (1 - 1/3) = 12 * (1/2) * (2/3) = 4
    *   **n = 35 = 5<sup>1</sup> * 7<sup>1</sup>:** φ(35) = 35 * (1 - 1/5) * (1 - 1/7) = 35 * (4/5) * (6/7) = 24
    *   **n = 100 = 2<sup>2</sup> * 5<sup>2</sup>:** φ(100) = 100 * (1 - 1/2) * (1 - 1/5) = 100 * (1/2) * (4/5) = 40
    *   **n = 13 (prime):** φ(13) = 13 - 1 = 12

**4. Properties of Euler's Totient Function**

*   **Multiplicativity:** If gcd(m, n) = 1 (m and n are coprime), then φ(m * n) = φ(m) * φ(n).
    *   **Example:** m = 3, n = 5. gcd(3, 5) = 1.
        *   φ(3) = 2
        *   φ(5) = 4
        *   φ(3 * 5) = φ(15) = 15 * (1 - 1/3) * (1 - 1/5) = 15 * (2/3) * (4/5) = 8
        *   φ(3) * φ(5) = 2 * 4 = 8.  Therefore, φ(3 * 5) = φ(3) * φ(5)
*   **For a Prime Power:**  If p is a prime number and k is a positive integer, then φ(p<sup>k</sup>) = p<sup>k</sup> - p<sup>k-1</sup> = p<sup>k-1</sup>(p - 1).
    *   **Example:** p = 2, k = 3.  φ(2<sup>3</sup>) = φ(8) = 2<sup>3</sup> - 2<sup>2</sup> = 8 - 4 = 4

**5. Application of Euler's Totient Function in Cryptography**

*   **Euler's Theorem:** If *a* and *n* are coprime positive integers, then a<sup>φ(n)</sup> ≡ 1 (mod n).  This theorem is fundamental to many cryptographic algorithms.

*   **RSA Cryptography:**  Euler's totient function plays a crucial role in RSA (Rivest–Shamir–Adleman) encryption.  In RSA, the public and private keys are derived using φ(n), where n is the product of two large prime numbers.  The security of RSA relies on the difficulty of factoring large numbers and calculating φ(n) without knowing the prime factors of n.

*   **Example:** Let a = 3, n = 10.  gcd(3, 10) = 1.  φ(10) = 4.
    *   Euler's Theorem states: 3<sup>4</sup> ≡ 1 (mod 10)
    *   3<sup>4</sup> = 81
    *   81 mod 10 = 1

**6. Important Points to Remember**

*   φ(n) represents the number of integers less than or equal to n that are relatively prime to n.
*   The formula for calculating φ(n) when the prime factorization of n is known is essential for efficient computation.
*   Euler's Theorem, which utilizes φ(n), is a cornerstone of many public-key cryptographic systems.
*   The multiplicative property of φ(n) simplifies calculations when dealing with coprime numbers.

**7. Practice Questions/Exercises with Answers**

1.  **Calculate φ(15) using the definition and the prime factorization formula.**

    *   **Solution (Definition):**  Numbers coprime to 15 (1, 2, 4, 7, 8, 11, 13, 14).  φ(15) = 8.
    *   **Solution (Formula):** 15 = 3 * 5.  φ(15) = 15 * (1 - 1/3) * (1 - 1/5) = 15 * (2/3) * (4/5) = 8.

2.  **Calculate φ(49).**

    *   **Solution:** 49 = 7<sup>2</sup>. φ(49) = 49 * (1 - 1/7) = 49 * (6/7) = 42.  Alternatively, φ(7<sup>2</sup>) = 7<sup>2</sup> - 7<sup>1</sup> = 49 - 7 = 42

3.  **Calculate φ(180).**

    *   **Solution:** 180 = 2<sup>2</sup> * 3<sup>2</sup> * 5<sup>1</sup>. φ(180) = 180 * (1 - 1/2) * (1 - 1/3) * (1 - 1/5) = 180 * (1/2) * (2/3) * (4/5) = 48

4.  **Verify Euler's Theorem for a = 2 and n = 9.**

    *   **Solution:** gcd(2, 9) = 1. φ(9) = 9 * (1 - 1/3) = 9 * (2/3) = 6.
    *   Euler's Theorem: 2<sup>6</sup> ≡ 1 (mod 9)
    *   2<sup>6</sup> = 64
    *   64 mod 9 = 1.  Therefore, Euler's Theorem holds.

5.  **If φ(n) = 6, what is a possible value for n?**

    *   **Solution:** There are multiple possibilities.
        *   If n is prime, then n = 7 because φ(7) = 6.
        *   If n = 9, φ(9) = 6.
        *   If n = 14, φ(14) = 6 (14 = 2 * 7, φ(14) = 14 * (1/2)*(6/7) = 6).
        *   There are many possible solutions, showcasing how inverting the totient function is not always easy.
