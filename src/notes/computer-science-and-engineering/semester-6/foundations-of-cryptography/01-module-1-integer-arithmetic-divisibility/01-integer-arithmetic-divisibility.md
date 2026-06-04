---
title: "Integer Arithmetic – Divisibility"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 1: Integer Arithmetic – Divisibility"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf05"
status: "completed"
scrapedAt: "2026-05-20T16:53:27.609Z"
---
# Foundations of Cryptography: Module 1 - Integer Arithmetic - Divisibility

This module introduces fundamental concepts of integer arithmetic, which form the bedrock for many cryptographic algorithms. Understanding divisibility, prime numbers, and related concepts is crucial for grasping how encryption and decryption processes work.

---

## 1. Introduction to Integer Arithmetic in Cryptography

Cryptography heavily relies on properties of integers. Operations like modular arithmetic, prime factorization, and the distribution of primes are fundamental building blocks for secure communication.

*   **Why Integers?**
    *   **Discrete Nature:** Integers are discrete, meaning they are whole numbers. This makes them suitable for representing finite sets of states or values, which is essential in digital systems.
    *   **Well-Defined Operations:** Arithmetic operations on integers are well-defined and predictable, providing a stable foundation for algorithms.
    *   **Number Theory:** The study of number theory, which deals with integers, provides powerful tools and properties that are directly applicable to cryptography.

*   **Key Areas:**
    *   Divisibility
    *   Prime Numbers and Factorization
    *   Modular Arithmetic (covered in subsequent modules)

---

## 2. Divisibility

Divisibility is the most basic concept in number theory and a cornerstone for understanding more complex cryptographic ideas.

### 2.1. Definition of Divisibility

**Definition:** An integer `a` is said to be **divisible** by an integer `b` (where `b` is not zero) if there exists an integer `k` such that `a = bk`.
We denote this as `b | a`.

*   If `b` divides `a`, then `b` is called a **divisor** or **factor** of `a`.
*   If `b` does not divide `a`, we write `b <binary data, 1 bytes><binary data, 1 bytes><binary data, 1 bytes><binary data, 1 bytes> a`.

### 2.2. Properties of Divisibility

Let `a`, `b`, and `c` be integers.

1.  **Reflexivity:** `a | a` (Every integer divides itself).
    *   *Example:* `5 | 5` because `5 = 5 * 1`.

2.  **Transitivity:** If `a | b` and `b | c`, then `a | c`.
    *   *Example:* If `2 | 6` (since `6 = 2 * 3`) and `6 | 18` (since `18 = 6 * 3`), then `2 | 18` (since `18 = 2 * 9`).

3.  **If `a | b` and `a | c`, then `a | (bx + cy)` for any integers `x` and `y`.** This is the **Linear Combination Property**.
    *   *Example:* If `3 | 12` and `3 | 15`, then `3` must divide any linear combination of `12` and `15`.
        *   Let `x = 2`, `y = 1`: `3 | (12*2 + 15*1)` which is `3 | (24 + 15)` or `3 | 39`. (True, `39 = 3 * 13`).
        *   Let `x = 1`, `y = -1`: `3 | (12*1 + 15*(-1))` which is `3 | (12 - 15)` or `3 | -3`. (True, `-3 = 3 * -1`).

4.  **If `a | b` and `b ≠ 0`, then `|a| ≤ |b|`.**
    *   *Example:* If `4 | 12`, then `|4| ≤ |12|` (4 ≤ 12). If `4 | -12`, then `|4| ≤ |-12|` (4 ≤ 12).

5.  **If `a | b` and `b | a`, then `|a| = |b|`.** (This means `a = b` or `a = -b`).
    *   *Example:* If `5 | -5` and `-5 | 5`, then `|5| = |-5|`.

6.  **`a | 0` for any non-zero integer `a`.**
    *   *Example:* `7 | 0` because `0 = 7 * 0`.

7.  **`1 | a` for any integer `a`.**
    *   *Example:* `1 | 100` because `100 = 1 * 100`.

8.  **If `a | b` and `b ≠ 0`, then `b/a` is an integer.** (This is just a restatement of the definition).

### 2.3. Common Divisors and the Greatest Common Divisor (GCD)

**Definition:** A common divisor of two integers `a` and `b` is an integer `d` that divides both `a` and `b`.

**Definition:** The **Greatest Common Divisor (GCD)** of two non-zero integers `a` and `b`, denoted as `gcd(a, b)` or `(a, b)`, is the largest positive integer that divides both `a` and `b`.

*   **Properties of GCD:**
    *   `gcd(a, b) = gcd(b, a)` (Commutative)
    *   `gcd(a, b) = gcd(|a|, |b|)`
    *   `gcd(a, 0) = |a|` for `a ≠ 0`.
    *   `gcd(a, a) = |a|`
    *   `gcd(a, b) = gcd(a, b - ka)` for any integer `k`. This property is the basis for the Euclidean Algorithm.
    *   If `d = gcd(a, b)`, then `gcd(a/d, b/d) = 1`.

### 2.4. Coprime (Relatively Prime) Numbers

**Definition:** Two integers `a` and `b` are said to be **coprime** or **relatively prime** if their greatest common divisor is 1, i.e., `gcd(a, b) = 1`.

*   **Importance in Cryptography:** Coprime numbers are crucial in many cryptographic algorithms, especially those involving modular inverses and the Chinese Remainder Theorem.

---

## 3. Prime Numbers and Factorization

Prime numbers are the multiplicative building blocks of integers, and their properties are central to modern cryptography.

### 3.1. Definitions

**Definition:** A **prime number** is a natural number greater than 1 that has no positive divisors other than 1 and itself.

*   *Examples:* 2, 3, 5, 7, 11, 13, 17, 19...

**Definition:** A **composite number** is a natural number greater than 1 that is not prime. It has at least one divisor other than 1 and itself.

*   *Examples:* 4, 6, 8, 9, 10, 12, 14, 15...

**Definition:** The number **1** is neither prime nor composite.

**Definition:** The **Fundamental Theorem of Arithmetic** states that every integer greater than 1 can be uniquely represented as a product of prime numbers (ignoring the order of the factors).

*   *Example:* `12 = 2 * 2 * 3` or `2² * 3`. `30 = 2 * 3 * 5`.

### 3.2. Properties of Prime Numbers

1.  **Infinitude of Primes:** There are infinitely many prime numbers. This was proven by Euclid.
2.  **Smallest Prime:** The only even prime number is 2. All other prime numbers are odd.
3.  **Divisibility by Primes:** If a prime number `p` divides a product `ab`, then `p` must divide `a` or `p` must divide `b` (or both). This is a direct consequence of the Fundamental Theorem of Arithmetic.

### 3.3. Primality Testing

Determining if a number is prime is a computationally intensive task, especially for large numbers. Many cryptographic algorithms rely on the difficulty of factoring large composite numbers into their prime factors.

*   **Trial Division:** The simplest method. To test if a number `n` is prime, check for divisibility by all integers from 2 up to `sqrt(n)`. If no divisors are found, `n` is prime.
    *   *Optimization:* Only need to check divisibility by prime numbers up to `sqrt(n)`.

### 3.4. Integer Factorization

**Definition:** **Integer factorization** is the process of finding the prime numbers that multiply together to give the original number.

*   *Example:* Factoring 30: `30 = 2 * 3 * 5`.
*   *Example:* Factoring 100: `100 = 2 * 2 * 5 * 5 = 2² * 5²`.

**Importance in Cryptography:** The security of many widely used public-key cryptosystems, such as RSA, relies on the presumed difficulty of factoring large numbers. If an efficient algorithm for factoring large numbers were discovered, these cryptosystems would be broken.

---

## 4. Practice Questions and Exercises

**Instructions:** Attempt to solve the following problems. The answers are provided below.

### Questions

1.  Is 15 divisible by 3? If so, what is the integer `k` such that `15 = 3k`?
2.  Is 20 divisible by 6?
3.  If `a | b` and `b | c`, and `a = 4`, `b = 12`, what are possible values for `c`?
4.  Find `gcd(48, 18)`.
5.  Find `gcd(17, 5)`. What does this tell you about 17 and 5?
6.  List all the divisors of 24.
7.  Is 29 a prime number? Justify your answer.
8.  Is 91 a prime number? Justify your answer.
9.  Factorize the number 72 into its prime factors.
10. State the Fundamental Theorem of Arithmetic.

### Answers

1.  Yes, 15 is divisible by 3. Here, `k = 5` because `15 = 3 * 5`.
2.  No, 20 is not divisible by 6. There is no integer `k` such that `20 = 6k`.
3.  Since `a | b` and `b | c`, by transitivity, `a | c`. So, 4 must divide `c`. Possible values for `c` are any multiple of 4, such as 4, 8, 12, 16, 20, 24, etc.
4.  Divisors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48.
    Divisors of 18: 1, 2, 3, 6, 9, 18.
    Common divisors: 1, 2, 3, 6.
    `gcd(48, 18) = 6`.
5.  Divisors of 17: 1, 17.
    Divisors of 5: 1, 5.
    Common divisor: 1.
    `gcd(17, 5) = 1`. This tells us that 17 and 5 are coprime (or relatively prime).
6.  The divisors of 24 are: 1, 2, 3, 4, 6, 8, 12, 24.
7.  Yes, 29 is a prime number. To check, we test divisibility by primes up to `sqrt(29)` which is approximately 5.4. We check 2, 3, and 5.
    *   29 is not divisible by 2 (it's odd).
    *   29 is not divisible by 3 (sum of digits 2+9=11, not divisible by 3).
    *   29 is not divisible by 5 (does not end in 0 or 5).
    Since no primes up to `sqrt(29)` divide 29, it is prime.
8.  No, 91 is not a prime number. We test divisibility by primes up to `sqrt(91)` which is approximately 9.5. We check 2, 3, 5, 7.
    *   91 is not divisible by 2 (odd).
    *   91 is not divisible by 3 (9+1=10, not divisible by 3).
    *   91 is not divisible by 5 (does not end in 0 or 5).
    *   91 is divisible by 7: `91 = 7 * 13`.
    Since 91 has divisors other than 1 and itself (7 and 13), it is composite.
9.  The prime factorization of 72 is:
    `72 = 2 * 36`
    `36 = 2 * 18`
    `18 = 2 * 9`
    `9 = 3 * 3`
    So, `72 = 2 * 2 * 2 * 3 * 3 = 2³ * 3²`.
10. **The Fundamental Theorem of Arithmetic** states that every integer greater than 1 either is a prime number itself or can be represented as the product of prime numbers, and that, moreover, this representation is unique, apart from the order of the factors.

---

## 5. Important Points to Remember

*   **Divisibility:** `b | a` means `a = bk` for some integer `k`.
*   **Linear Combination Property:** If `a | b` and `a | c`, then `a | (xb + yc)` for any integers `x, y`. This is fundamental for algorithms like the Euclidean Algorithm.
*   **GCD:** The largest positive integer dividing two numbers. `gcd(a, b) = gcd(a, b-ka)`.
*   **Coprime:** `gcd(a, b) = 1`. This is crucial for modular inverses.
*   **Prime Numbers:** The building blocks of integers. Their properties, especially the difficulty of factorization, are the basis of modern cryptography.
*   **Fundamental Theorem of Arithmetic:** Unique prime factorization is a key concept.
*   **Primality Testing:** The difficulty of determining primality for large numbers is a computational challenge that underpins cryptographic security.

---
