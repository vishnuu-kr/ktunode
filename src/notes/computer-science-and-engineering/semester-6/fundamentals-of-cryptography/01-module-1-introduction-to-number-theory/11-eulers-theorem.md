---
title: "Euler’s Theorem"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcc5"
status: "completed"
scrapedAt: "2026-05-20T16:53:53.787Z"
---
# FUNDAMENTALS OF CRYPTOGRAPHY: Module 1 - Introduction to Number Theory - Euler's Theorem

## Learning Outcomes:

*   Understand the concept of the totient function (Euler's phi function).
*   Learn and apply Euler's Theorem.
*   Apply Euler's Theorem to modular exponentiation.
*   Solve problems involving Euler's Theorem.
*   Understand the relationship between Euler's Theorem and Fermat's Little Theorem.

## 1. Key Concepts and Definitions:

*   **Number Theory:** A branch of mathematics dealing with the properties and relationships of integers.
*   **Relatively Prime (Coprime):** Two integers a and b are relatively prime (or coprime) if their greatest common divisor (GCD) is 1. Denoted as gcd(a, b) = 1.
*   **Modular Arithmetic:** A system of arithmetic for integers, where numbers "wrap around" upon reaching a certain value, called the modulus.  Written as  a ≡ b (mod m), meaning a and b have the same remainder when divided by m.
*   **Euler's Totient Function (φ(n)):**  Also known as Euler's phi function, it counts the number of positive integers less than or equal to n that are relatively prime to n. Formally: φ(n) = |{a : 1 ≤ a ≤ n, gcd(a, n) = 1}|.

    *   Example: φ(8) = 4 because the numbers 1, 3, 5, and 7 are relatively prime to 8.
*   **Euler's Theorem:** If *a* and *n* are relatively prime positive integers, then a<sup>φ(n)</sup> ≡ 1 (mod n).
*   **Modular Exponentiation:** Calculating *b<sup>e</sup> mod m*, where *b* is the base, *e* is the exponent, and *m* is the modulus. This is a fundamental operation in many cryptographic algorithms.
*   **Fermat's Little Theorem:** A special case of Euler's Theorem. If *p* is a prime number and *a* is an integer not divisible by *p*, then a<sup>(p-1)</sup> ≡ 1 (mod p).

## 2. Euler's Totient Function (φ(n)):

### 2.1 Calculating φ(n):

*   **If n is prime:** If *p* is a prime number, then φ(p) = p - 1. Because all numbers less than *p* are relatively prime to *p*.
    *   Example: φ(7) = 6.
*   **If n is a product of two distinct primes:** If n = p * q, where p and q are distinct prime numbers, then φ(n) = (p - 1)(q - 1).
    *   Example: φ(15) = φ(3 * 5) = (3 - 1)(5 - 1) = 2 * 4 = 8.
*   **If n is a power of a prime:**  If n = p<sup>k</sup>, where p is prime and k is a positive integer, then φ(n) = p<sup>k</sup> - p<sup>k-1</sup> = p<sup>k-1</sup>(p - 1).
    *   Example: φ(9) = φ(3<sup>2</sup>) = 3<sup>2</sup> - 3<sup>1</sup> = 9 - 3 = 6.
*   **General Formula:** If n = p<sub>1</sub><sup>k<sub>1</sub></sup> * p<sub>2</sub><sup>k<sub>2</sub></sup> * ... * p<sub>r</sub><sup>k<sub>r</sub></sup>, then
    φ(n) = n * (1 - 1/p<sub>1</sub>) * (1 - 1/p<sub>2</sub>) * ... * (1 - 1/p<sub>r</sub>).

    *   Example: φ(12) = φ(2<sup>2</sup> * 3) = 12 * (1 - 1/2) * (1 - 1/3) = 12 * (1/2) * (2/3) = 4.

### 2.2 Properties of φ(n):

*   φ(1) = 1.
*   If gcd(m, n) = 1, then φ(m * n) = φ(m) * φ(n). (This is called the multiplicative property).

## 3. Euler's Theorem Explained:

Euler's Theorem provides a powerful tool for simplifying modular exponentiation.  It states that if *a* and *n* are relatively prime positive integers, then a<sup>φ(n)</sup> ≡ 1 (mod n).

**Importance:** Euler's Theorem allows us to reduce the exponent in modular exponentiation. Instead of calculating *a<sup>e</sup> mod n*, we can reduce *e* modulo φ(n).

**Application:**  To calculate a<sup>e</sup> mod n, where gcd(a, n) = 1, we can do the following:

1.  Calculate φ(n).
2.  Find e' such that e' ≡ e (mod φ(n)).  This means e' is the remainder when e is divided by φ(n).
3.  Calculate a<sup>e'</sup> mod n.  This is equivalent to a<sup>e</sup> mod n and is usually much easier to compute.

## 4. Examples of Euler's Theorem in Action:

**Example 1:**

Calculate 3<sup>100</sup> mod 11.

1.  gcd(3, 11) = 1.
2.  φ(11) = 10 (since 11 is prime).
3.  100 ≡ 0 (mod 10).  So, e' = 0.
4.  Therefore, 3<sup>100</sup> ≡ 3<sup>0</sup> ≡ 1 (mod 11).

**Example 2:**

Calculate 7<sup>222</sup> mod 10.

1.  gcd(7, 10) = 1.
2.  φ(10) = φ(2 * 5) = (2 - 1)(5 - 1) = 1 * 4 = 4.
3.  222 ≡ 2 (mod 4).  So, e' = 2.
4.  Therefore, 7<sup>222</sup> ≡ 7<sup>2</sup> ≡ 49 ≡ 9 (mod 10).

**Example 3:**

Calculate 2<sup>1000</sup> mod 15

1.  gcd(2,15) = 1
2.  φ(15) = φ(3 * 5) = (3-1)*(5-1) = 2 * 4 = 8
3.  1000 ≡ 0 (mod 8). So, e' = 0
4.  Therefore, 2<sup>1000</sup> ≡ 2<sup>0</sup> ≡ 1 (mod 15).

## 5. Relationship Between Euler's Theorem and Fermat's Little Theorem:

Fermat's Little Theorem is a special case of Euler's Theorem where *n* is a prime number (*p*).

*   If *p* is prime and gcd(a, p) = 1, then φ(p) = p - 1.
*   Therefore, by Euler's Theorem, a<sup>φ(p)</sup> ≡ a<sup>(p-1)</sup> ≡ 1 (mod p), which is Fermat's Little Theorem.

In essence, Fermat's Little Theorem provides a shortcut when the modulus is a prime number.

## 6. Practice Questions and Exercises:

**Question 1:** Calculate φ(20).

**Answer:** φ(20) = φ(2<sup>2</sup> * 5) = 20 * (1 - 1/2) * (1 - 1/5) = 20 * (1/2) * (4/5) = 8.

**Question 2:** Calculate 5<sup>36</sup> mod 11.

**Answer:**

1. gcd(5,11) = 1
2. φ(11) = 10
3. 36 ≡ 6 (mod 10)
4.  Therefore, 5<sup>36</sup> ≡ 5<sup>6</sup> ≡ 15625 ≡ 4 (mod 11). (Note: You can reduce along the way: 5<sup>2</sup> ≡ 25 ≡ 3 (mod 11); 5<sup>3</sup> ≡ 3*5 ≡ 15 ≡ 4 (mod 11); 5<sup>6</sup> ≡ 4*4*4 ≡ 64 ≡ 9 (mod 11)).

**Question 3:** Calculate 2<sup>100</sup> mod 7.

**Answer:**

1.  gcd(2, 7) = 1.
2.  φ(7) = 6.
3.  100 ≡ 4 (mod 6).
4.  Therefore, 2<sup>100</sup> ≡ 2<sup>4</sup> ≡ 16 ≡ 2 (mod 7).

**Question 4:** Find the last digit of 7<sup>100</sup>.  (Hint: This is equivalent to calculating 7<sup>100</sup> mod 10).

**Answer:**

1. gcd(7,10) = 1
2. φ(10) = 4
3. 100 ≡ 0 (mod 4)
4. Therefore, 7<sup>100</sup> ≡ 7<sup>0</sup> ≡ 1 (mod 10). The last digit is 1.

**Question 5:** Explain the difference between Euler's Theorem and Fermat's Little Theorem.

**Answer:** Fermat's Little Theorem is a specific case of Euler's Theorem that applies only when the modulus is a prime number. Euler's Theorem applies to any modulus *n* as long as the base *a* is relatively prime to *n*.

## 7. Important Points to Remember:

*   Euler's Theorem only works when gcd(a, n) = 1. If *a* and *n* are not relatively prime, the theorem does not hold.
*   Understanding how to calculate φ(n) is crucial.
*   Modular exponentiation is frequently used in cryptography, so understanding Euler's Theorem to simplify these calculations is very important.
*   Always reduce the exponent modulo φ(n) before performing the modular exponentiation.
*   Fermat's Little Theorem is a handy shortcut when the modulus is prime.
*   When performing manual calculations, reduce the base modulo n at each step to keep the numbers manageable.
