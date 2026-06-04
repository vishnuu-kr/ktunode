---
title: "The Extended Euclidean Algorithm"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcc0"
status: "completed"
scrapedAt: "2026-05-20T16:53:50.261Z"
---
# FUNDAMENTALS OF CRYPTOGRAPHY - Module 1: Introduction to Number Theory - The Extended Euclidean Algorithm

## Introduction

This module focuses on the Extended Euclidean Algorithm (EEA), a powerful tool in number theory and cryptography. The EEA not only calculates the Greatest Common Divisor (GCD) of two integers, like the standard Euclidean Algorithm, but also finds coefficients that express the GCD as a linear combination of the two integers. This is essential for tasks like finding modular inverses, which are crucial in many cryptographic applications.

## Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the concept of the Greatest Common Divisor (GCD).
*   Perform the Euclidean Algorithm to find the GCD of two integers.
*   Apply the Extended Euclidean Algorithm to find the GCD and the coefficients *x* and *y* in the equation *ax + by = gcd(a, b)*.
*   Understand the significance of the EEA in finding modular inverses.
*   Solve problems related to finding GCDs and modular inverses using the EEA.

## 1. Key Concepts and Definitions

*   **Greatest Common Divisor (GCD):** The largest positive integer that divides two or more integers without leaving a remainder. Also known as the Highest Common Factor (HCF).  We denote the GCD of *a* and *b* as *gcd(a, b)*.

*   **Euclidean Algorithm:** An efficient method for computing the GCD of two integers. It relies on the property that *gcd(a, b) = gcd(b, a mod b)*.

*   **Bézout's Identity:** For any two integers *a* and *b*, there exist integers *x* and *y* such that *ax + by = gcd(a, b)*.  The EEA finds these *x* and *y*.

*   **Modular Inverse:** Given an integer *a* and a modulus *m*, the modular inverse of *a* modulo *m* is an integer *x* such that *ax ≡ 1 (mod m)*. The modular inverse exists if and only if *gcd(a, m) = 1*.

*   **Linear Combination:** An expression of the form *ax + by*, where *a*, *b*, *x*, and *y* are constants.

## 2. The Euclidean Algorithm (Review)

Before diving into the Extended version, let's recap the standard Euclidean Algorithm.

**Algorithm:**

1.  Given integers *a* and *b* (where *a > b ≥ 0*),
2.  While *b ≠ 0*:
    *   *r = a mod b*
    *   *a = b*
    *   *b = r*
3.  The GCD is the final value of *a*.

**Example:**  Find *gcd(48, 18)*

*   *48 = 18 * 2 + 12*
*   *18 = 12 * 1 + 6*
*   *12 = 6 * 2 + 0*

Therefore, *gcd(48, 18) = 6*.

## 3. The Extended Euclidean Algorithm

The Extended Euclidean Algorithm builds upon the standard algorithm.  It maintains extra information during each step to calculate the coefficients *x* and *y* in Bézout's Identity.

**Algorithm:**

Given integers *a* and *b* (where *a > b ≥ 0*), we want to find *x* and *y* such that *ax + by = gcd(a, b)*.

1.  Initialize:
    *   *x₀ = 1*,  *y₀ = 0*
    *   *x₁ = 0*,  *y₁ = 1*
2.  While *b ≠ 0*:
    *   *q = a // b* (integer division)
    *   *r = a mod b*
    *   *x = x₀ - q * x₁*
    *   *y = y₀ - q * y₁*
    *   *a = b*
    *   *b = r*
    *   *x₀ = x₁*
    *   *y₀ = y₁*
    *   *x₁ = x*
    *   *y₁ = y*
3.  The GCD is the final value of *a*. The coefficients are *x₀* and *y₀*.  So, *gcd(a, b) = ax₀ + by₀*.

**Explanation:**

*   We initialize *x₀, y₀, x₁, y₁* to represent the equations *a = 1*a + *0*b and *b = 0*a + *1*b.
*   In each iteration, we use the quotient (*q*) from the division *a // b* to update the coefficients *x* and *y*. This effectively tracks how to express the remainder *r* as a linear combination of *a* and *b*.

**Example:**  Find *gcd(48, 18)* and coefficients *x* and *y* such that *48x + 18y = gcd(48, 18)*.

| a  | b  | q    | r    | x₀   | y₀   | x₁   | y₁   |
| -- | -- | ---- | ---- | ---- | ---- | ---- | ---- |
| 48 | 18 | -    | -    | 1    | 0    | 0    | 1    |
| 18 | 12 | 2    | 12   | 0    | 1    | 1    | -2   |
| 12 | 6  | 1    | 6    | 1    | -2   | -1   | 3    |
| 6  | 0  | 2    | 0    | -1   | 3    | -    | -    |

Therefore, *gcd(48, 18) = 6* and *48(-1) + 18(3) = 6*.  So, *x = -1* and *y = 3*.

## 4. Finding Modular Inverses using the EEA

The EEA is crucial for finding modular inverses.  If *gcd(a, m) = 1*, then *a* has a modular inverse modulo *m*.  From the EEA, we know there exist integers *x* and *y* such that *ax + my = 1*.  Taking this equation modulo *m*, we get:

*ax + my ≡ 1 (mod m)*
*ax ≡ 1 (mod m)*  (since *my ≡ 0 (mod m)*)

Therefore, *x* is the modular inverse of *a* modulo *m*. If *x* is negative, add *m* to *x* until it becomes positive and within the range [0, m-1].

**Example:** Find the modular inverse of 17 modulo 31.  That is, find *x* such that *17x ≡ 1 (mod 31)*.

Apply the EEA to *a = 31* and *b = 17*:

| a  | b  | q    | r    | x₀   | y₀   | x₁   | y₁   |
| -- | -- | ---- | ---- | ---- | ---- | ---- | ---- |
| 31 | 17 | -    | -    | 1    | 0    | 0    | 1    |
| 17 | 14 | 1    | 14   | 0    | 1    | 1    | -1   |
| 14 | 3  | 1    | 3    | 1    | -1   | -1   | 2    |
| 3  | 2  | 4    | 2    | -1   | 2    | 5    | -9   |
| 2  | 1  | 1    | 1    | 5    | -9   | -6   | 11  |
| 1  | 0  | 2    | 0    | -6   | 11  | -    | -    |

Thus, *gcd(31, 17) = 1*, and we have *31(-6) + 17(11) = 1*.  Therefore, *17(11) ≡ 1 (mod 31)*.

So, the modular inverse of 17 modulo 31 is 11.

## 5. Practice Questions / Exercises

1.  Find *gcd(56, 35)* using the Euclidean Algorithm.
2.  Find *gcd(84, 30)* and the coefficients *x* and *y* such that *84x + 30y = gcd(84, 30)* using the Extended Euclidean Algorithm.
3.  Find the modular inverse of 7 modulo 26.
4.  Find the modular inverse of 11 modulo 35.

## 6. Solutions to Practice Questions

1.  *gcd(56, 35)*:
    *   *56 = 35 * 1 + 21*
    *   *35 = 21 * 1 + 14*
    *   *21 = 14 * 1 + 7*
    *   *14 = 7 * 2 + 0*
    Therefore, *gcd(56, 35) = 7*.

2.  *gcd(84, 30)*:
    *   *84 = 30 * 2 + 24*
    *   *30 = 24 * 1 + 6*
    *   *24 = 6 * 4 + 0*
    Therefore, *gcd(84, 30) = 6*.

    | a  | b  | q    | r    | x₀   | y₀   | x₁   | y₁   |
    | -- | -- | ---- | ---- | ---- | ---- | ---- | ---- |
    | 84 | 30 | -    | -    | 1    | 0    | 0    | 1    |
    | 30 | 24 | 2    | 24   | 0    | 1    | 1    | -2   |
    | 24 | 6  | 1    | 6    | 1    | -2   | -1   | 3    |
    | 6  | 0  | 4    | 0    | -1   | 3    |      |      |

    Therefore, *84(-1) + 30(3) = 6*. So, *x = -1* and *y = 3*.

3.  Modular inverse of 7 modulo 26:
    Applying the EEA to 26 and 7:

    | a  | b  | q    | r    | x₀   | y₀   | x₁   | y₁   |
    | -- | -- | ---- | ---- | ---- | ---- | ---- | ---- |
    | 26 | 7  | -    | -    | 1    | 0    | 0    | 1    |
    | 7  | 5  | 3    | 5    | 0    | 1    | 1    | -3   |
    | 5  | 2  | 1    | 2    | 1    | -3   | -1   | 4    |
    | 2  | 1  | 2    | 1    | -1   | 4    | 3    | -11  |
    | 1  | 0  | 2    | 0    | 3    | -11  |      |      |

    So, *26(3) + 7(-11) = 1*. Therefore, *7(-11) ≡ 1 (mod 26)*. Since -11 is negative, add 26: -11 + 26 = 15.

    Thus, the modular inverse of 7 modulo 26 is 15.

4.  Modular inverse of 11 modulo 35:
    Applying the EEA to 35 and 11:

    | a  | b  | q    | r    | x₀   | y₀   | x₁   | y₁   |
    | -- | -- | ---- | ---- | ---- | ---- | ---- | ---- |
    | 35 | 11 | -    | -    | 1    | 0    | 0    | 1    |
    | 11 | 2  | 3    | 2    | 0    | 1    | 1    | -3   |
    | 2  | 1  | 5    | 1    | 1    | -3   | -5   | 16   |
    | 1  | 0  | 2    | 0    | -5   | 16   |      |      |

    So, *35(-5) + 11(16) = 1*. Therefore, *11(16) ≡ 1 (mod 35)*.

    Thus, the modular inverse of 11 modulo 35 is 16.

## 7. Important Points to Remember

*   The Extended Euclidean Algorithm finds not only the GCD but also coefficients *x* and *y* that satisfy Bézout's Identity.
*   The EEA is essential for finding modular inverses, which are widely used in cryptography, particularly in RSA.
*   If *gcd(a, m) ≠ 1*, then *a* does not have a modular inverse modulo *m*.
*   When calculating modular inverses, ensure the result is within the range [0, m-1] by adding or subtracting multiples of *m* if necessary.

This comprehensive overview should provide a strong foundation for understanding and applying the Extended Euclidean Algorithm in the context of cryptography. Remember to practice with various examples to solidify your understanding.
