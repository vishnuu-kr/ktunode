---
title: "Fermat’s Theorem"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcc3"
status: "completed"
scrapedAt: "2026-05-20T16:53:52.371Z"
---
## FUNDAMENTALS OF CRYPTOGRAPHY: MODULE 1 - INTRODUCTION TO NUMBER THEORY

### Topic: Fermat's Little Theorem

**Learning Outcomes:**

*   Understand the statement of Fermat's Little Theorem.
*   Apply Fermat's Little Theorem to compute modular exponentiations.
*   Recognize the limitations of Fermat's Little Theorem.
*   Use Fermat's Little Theorem to test for primality (though not definitively).

**1. Key Concepts and Definitions**

*   **Prime Number:** A natural number greater than 1 that has no positive divisors other than 1 and itself. Examples: 2, 3, 5, 7, 11, 13, 17, 19,...
*   **Relatively Prime (Coprime):** Two integers *a* and *b* are relatively prime if their greatest common divisor (GCD) is 1.  We denote this as gcd(a, b) = 1. Example: 8 and 15 are relatively prime since gcd(8, 15) = 1.
*   **Modular Arithmetic:** A system of arithmetic for integers, where numbers "wrap around" upon reaching a certain value (the modulus). We say *a* is congruent to *b* modulo *n*, written as  a ≡ b (mod n), if *a* and *b* have the same remainder when divided by *n*. Equivalently, *n* divides (a - b).
*   **Congruence:**  A relationship between two integers that states they leave the same remainder after division by the same modulus.
*   **Exponentiation:** The mathematical operation of raising a number (the base) to a power (the exponent).

**2. Fermat's Little Theorem**

*   **Statement:** If *p* is a prime number, and *a* is any integer not divisible by *p* (i.e., *a* is relatively prime to *p*), then:

    a<sup>p-1</sup> ≡ 1 (mod p)

*   **Alternative Formulation:** If *p* is a prime number and *a* is any integer, then:

    a<sup>p</sup> ≡ a (mod p)

    *Note:* This formulation includes the case where *a* is divisible by *p*. In this case, a<sup>p</sup> ≡ 0 ≡ a (mod p).

**3. Applications of Fermat's Little Theorem**

*   **Modular Exponentiation:**  Calculating the remainder when a large number is raised to a power and then divided by a modulus. Fermat's Little Theorem can greatly simplify these calculations.
*   **Primality Testing:**  A probabilistic primality test. If  a<sup>p-1</sup> ≡ 1 (mod p) for some base *a*, then *p* is likely a prime. However, the converse is not necessarily true. There exist composite numbers called *pseudoprimes* that satisfy this condition for some bases.
*   **Cryptography:**  Used in some cryptographic algorithms, particularly in proving properties related to security.

**4. Examples**

*   **Example 1: Compute 3<sup>10</sup> mod 11**

    *   Since 11 is prime, we can apply Fermat's Little Theorem:  3<sup>11-1</sup> ≡ 1 (mod 11), which means 3<sup>10</sup> ≡ 1 (mod 11).
    *   Therefore, 3<sup>10</sup> mod 11 = 1.

*   **Example 2: Compute 2<sup>12</sup> mod 13**

    *   Since 13 is prime, we can apply Fermat's Little Theorem: 2<sup>13-1</sup> ≡ 1 (mod 13), which means 2<sup>12</sup> ≡ 1 (mod 13).
    *   Therefore, 2<sup>12</sup> mod 13 = 1.

*   **Example 3: Compute 5<sup>22</sup> mod 23**

    *   Since 23 is prime, we can apply Fermat's Little Theorem: 5<sup>23-1</sup> ≡ 1 (mod 23), which means 5<sup>22</sup> ≡ 1 (mod 23).
    *   Therefore, 5<sup>22</sup> mod 23 = 1.

*   **Example 4: Compute 7<sup>102</sup> mod 5**

    *   5 is prime, so by Fermat's Little Theorem, 7<sup>4</sup> ≡ 1 (mod 5).
    *   We can write 102 as 4 * 25 + 2.
    *   Therefore, 7<sup>102</sup> ≡ 7<sup>(4*25 + 2)</sup> ≡ (7<sup>4</sup>)<sup>25</sup> * 7<sup>2</sup> ≡ (1)<sup>25</sup> * 49 ≡ 1 * 49 ≡ 49 (mod 5).
    *   Since 49 ≡ 4 (mod 5), 7<sup>102</sup> mod 5 = 4.

**5. Limitations of Fermat's Little Theorem**

*   **Not a Primality Test:** While if  a<sup>p-1</sup> ≡ 1 (mod p) for some *a*, it *suggests* *p* is prime, it doesn't guarantee it.  There are composite numbers (Carmichael numbers) that satisfy this congruence for all *a* relatively prime to *p*.  This makes Fermat's Little Theorem a probabilistic, rather than deterministic, primality test.
*   **Only applicable for prime modulus:** Fermat's Little Theorem is specifically defined for prime moduli. It doesn't hold true for composite moduli.

**6. Primality Testing using Fermat's Little Theorem**

*   **Process:**
    1.  Choose a random integer *a* between 1 and *p*-1.
    2.  Compute a<sup>p-1</sup> mod p.
    3.  If a<sup>p-1</sup> ≡ 1 (mod p), then *p* is likely prime.  If not, then *p* is composite.
    4.  Repeat steps 1-3 with different values of *a* to increase confidence.

*   **Important:** A number that passes the Fermat test for several values of *a* is *likely* prime, but not guaranteed.

**7. Practice Questions/Exercises**

1.  **Calculate 4<sup>16</sup> mod 17 using Fermat's Little Theorem.**
    *   **Answer:** Since 17 is prime, 4<sup>16</sup> ≡ 1 (mod 17). So, 4<sup>16</sup> mod 17 = 1.

2.  **Calculate 2<sup>100</sup> mod 101 using Fermat's Little Theorem.**
    *   **Answer:** Since 101 is prime, 2<sup>100</sup> ≡ 1 (mod 101). So, 2<sup>100</sup> mod 101 = 1.

3.  **Calculate 3<sup>200</sup> mod 7. Hint: Use Fermat's Little Theorem to simplify.**
    *   **Answer:** Since 7 is prime, 3<sup>6</sup> ≡ 1 (mod 7). 200 = 6 * 33 + 2. Therefore, 3<sup>200</sup> ≡ (3<sup>6</sup>)<sup>33</sup> * 3<sup>2</sup> ≡ 1<sup>33</sup> * 9 ≡ 9 (mod 7).  Since 9 ≡ 2 (mod 7), 3<sup>200</sup> mod 7 = 2.

4.  **Is 91 likely to be prime if 2<sup>90</sup> ≡ 64 (mod 91)?**
    *   **Answer:**  Fermat's Little Theorem states if 91 is prime, then 2<sup>90</sup> ≡ 1 (mod 91).  Since 2<sup>90</sup> ≡ 64 (mod 91) and 64 is not congruent to 1 modulo 91, 91 is composite.  So 91 is NOT likely to be prime. This is a definite conclusion, not a probabilistic one.

5.  **Explain why Fermat's Little Theorem is useful in cryptography.**
    *   **Answer:** Fermat's Little Theorem is useful because it provides a shortcut for modular exponentiation, which is a fundamental operation in many cryptographic algorithms. It allows simplification of calculations making computations faster and feasible with larger numbers, without significantly affecting the integrity of the computation.

**8. Important Points to Remember**

*   Fermat's Little Theorem ONLY applies when the modulus is a prime number.
*   It's a powerful tool for simplifying modular exponentiation.
*   The theorem can be used for primality testing, but it is not a definitive test due to the existence of pseudoprimes. Always be cautious when using it solely for primality testing.
*   Understanding the conditions of the theorem is crucial to its correct application. Misapplying it to composite numbers will lead to incorrect results.
