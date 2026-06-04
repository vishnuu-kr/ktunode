---
title: "Testing for Primality : Miller–Rabin Algorithm"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcc6"
status: "completed"
scrapedAt: "2026-05-20T16:53:54.496Z"
---
## FUNDAMENTALS OF CRYPTOGRAPHY: Module 1 - Introduction to Number Theory
### Topic: Testing for Primality - Miller-Rabin Algorithm

**Learning Outcomes:**

*   Understand the concept of primality testing and its importance in cryptography.
*   Explain the underlying principles of the Miller-Rabin primality test.
*   Implement the Miller-Rabin algorithm.
*   Apply the Miller-Rabin algorithm to determine the primality of a given number.
*   Understand the probabilistic nature of the Miller-Rabin test and its limitations.

**1. Introduction to Primality Testing**

*   **Definition of a Prime Number:** A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*   **Importance in Cryptography:** Prime numbers are fundamental to many cryptographic algorithms, including RSA and Diffie-Hellman. The security of these algorithms relies on the difficulty of factoring large numbers into their prime factors.
*   **Primality Testing vs. Factorization:**
    *   **Primality Testing:** Determining whether a number is prime or composite (not prime).
    *   **Factorization:** Finding the prime factors of a composite number.
    *   Primality testing is generally easier than factorization.
*   **Challenges of Primality Testing:** Testing large numbers for primality can be computationally expensive, especially with simple trial division methods.

**2. Fermat's Little Theorem (Foundation for Miller-Rabin)**

*   **Statement:** If *p* is a prime number, then for any integer *a* not divisible by *p*,  a<sup>(p-1)</sup> ≡ 1 (mod *p*).
*   **Pseudo-primes:** A composite number *n* which satisfies a<sup>(n-1)</sup> ≡ 1 (mod *n*) for some *a* is called a Fermat pseudo-prime to base *a*.
*   **Limitation of Fermat's Test:** Fermat's test is not a reliable primality test because some composite numbers, called Carmichael numbers, satisfy Fermat's theorem for all bases *a* relatively prime to *n*. Example: 561.

**3. Miller-Rabin Algorithm: A Probabilistic Primality Test**

*   **Key Idea:** Exploits a refinement of Fermat's Little Theorem along with the properties of square roots of 1 modulo a prime.
*   **Rabin-Miller Witness:** If 'n' is composite, there is a high probability that a randomly chosen 'a' will be a Miller-Rabin witness for the compositeness of 'n'.
*   **Underlying Principle:**  If *n* is prime, then the only solutions to the equation x<sup>2</sup> ≡ 1 (mod *n*) are x ≡ 1 (mod *n*) and x ≡ -1 (mod *n*).  If we find a solution other than 1 and -1, then *n* is composite.
*   **Algorithm Steps:**

    1.  **Input:** An odd integer *n* > 2 to be tested for primality; a parameter *k* that determines the number of tests performed (accuracy).
    2.  **Write *n* - 1 as 2<sup>s</sup> * r*, where *r* is odd.**  This involves finding the largest power of 2 that divides *n* - 1.
    3.  **Repeat *k* times:** (for *i* = 1 to *k*)
        1.  **Choose a random integer *a* in the range [2, *n* - 2].**
        2.  **Compute *y* = a<sup>r</sup> mod *n*.**
        3.  **If *y* ≠ 1 and *y* ≠ *n* - 1, then:**
            1.  **For *j* = 1 to *s* - 1:**
                1.  ***y* = *y*<sup>2</sup> mod *n*.**
                2.  **If *y* = 1, then return "composite".**
                3.  **If *y* = *n* - 1, then go to the next iteration of the outer loop (next *i*).**  (This means *a* is *not* a witness)
            2.  **If *y* ≠ *n* - 1, then return "composite".**  (If the loop completes without *y* becoming 1 or *n* - 1, then *a* is a witness)
        4.  **If the loop finishes without returning "composite", then return "probably prime".**

*   **Probabilistic Nature:**
    *   The Miller-Rabin test is a *probabilistic* test.  It does not guarantee primality.
    *   If the algorithm returns "composite," then *n* is definitely composite.
    *   If the algorithm returns "probably prime," then *n* is prime with a high probability.
    *   The probability of error (declaring a composite number prime) is at most (1/4)<sup>k</sup>, where *k* is the number of iterations.  Increasing *k* reduces the probability of error.

**4. Example: Miller-Rabin Test for n = 561 (Carmichael Number) with a = 2**

1.  *n* = 561. *n* - 1 = 560 = 2<sup>4</sup> * 35. So, *s* = 4 and *r* = 35.
2.  Choose *a* = 2 (randomly).
3.  *y* = 2<sup>35</sup> mod 561 = 263.  Since 263 ≠ 1 and 263 ≠ 560.
4.  Loop for *j* = 1 to 3:
    *   *j* = 1: *y* = 263<sup>2</sup> mod 561 = 166.  166 ≠ 1 and 166 ≠ 560.
    *   *j* = 2: *y* = 166<sup>2</sup> mod 561 = 67.   67 ≠ 1 and 67 ≠ 560.
    *   *j* = 3: *y* = 67<sup>2</sup> mod 561 = 1. Return "composite".
    *Although 561 is a Carmichael number, it fails the Miller-Rabin test with a=2, proving it is composite.*

**5. Python Implementation:**

```python
import random

def power(x, y, p):
    """Calculates (x^y) % p efficiently using modular exponentiation."""
    res = 1
    x = x % p
    while y > 0:
        if y & 1:
            res = (res * x) % p
        y = y >> 1  # y = y // 2
        x = (x * x) % p
    return res

def miller_rabin(n, k):
    """Performs the Miller-Rabin primality test on n with k iterations."""
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0:
        return False

    # Find r and s such that n-1 = 2^s * r with r odd
    s = 0
    r = n - 1
    while r % 2 == 0:
        s += 1
        r //= 2

    # Do k iterations
    for _ in range(k):
        a = random.randrange(2, n - 1)
        x = power(a, r, n)

        if x == 1 or x == n - 1:
            continue

        for _ in range(s - 1):
            x = power(x, 2, n)
            if x == 1:
                return False  # Composite
            if x == n - 1:
                break
        else:
            return False  # Composite

    return True  # Probably prime


# Example usage
number_to_test = 97  # Try a prime
k_iterations = 5 # Number of iterations for increased accuracy

if miller_rabin(number_to_test, k_iterations):
    print(f"{number_to_test} is probably prime.")
else:
    print(f"{number_to_test} is composite.")

number_to_test = 561 # Try Carmichael number
if miller_rabin(number_to_test, k_iterations):
    print(f"{number_to_test} is probably prime.")
else:
    print(f"{number_to_test} is composite.")

```

**6. Practice Questions/Exercises**

1.  **Manually perform the Miller-Rabin test on *n* = 25 with *a* = 2 and a single iteration. Show all steps.**
    *   *n* - 1 = 24 = 2<sup>3</sup> * 3.  So, *s* = 3 and *r* = 3.
    *   *y* = 2<sup>3</sup> mod 25 = 8.  Since 8 ≠ 1 and 8 ≠ 24.
    *   Loop for *j* = 1 to 2:
        *   *j* = 1: *y* = 8<sup>2</sup> mod 25 = 64 mod 25 = 14. 14 ≠ 1 and 14 ≠ 24.
        *   *j* = 2: *y* = 14<sup>2</sup> mod 25 = 196 mod 25 = -4 mod 25 = 21. 21≠ 1 and 21 ≠ 24
    *   Loop finishes and *y*=21 != 24, Therefore declare 25 to be composite.

2.  **Explain why the Miller-Rabin test is a probabilistic test, and how the probability of error can be reduced.**
    *   The Miller-Rabin test is probabilistic because it relies on randomly choosing bases 'a' to test against the conditions of the algorithm.  A composite number might pass the test for some values of 'a', leading to a false positive.
    *   The probability of error can be reduced by increasing the number of iterations (*k*). Each iteration uses a different random base *a*, and the more iterations performed, the lower the probability that a composite number will consistently pass the test and be declared "probably prime".

3.  **What is a Miller-Rabin witness?  Give an example (you can reuse the example above).**
    *   A Miller-Rabin witness is a number *a* for which the Miller-Rabin test correctly identifies a composite number *n*. In other words, *a* "witnesses" or proves that *n* is composite.
     In example 1, `a=2` is a witness for the compositeness of n=25.

4.  **Why is the Miller-Rabin test preferred over Fermat's primality test in cryptography?**
    *   The Miller-Rabin test is preferred because Fermat's test can be fooled by Carmichael numbers, which are composite numbers that satisfy Fermat's Little Theorem for all bases relatively prime to them. The Miller-Rabin test is less likely to be fooled by Carmichael numbers and provides a higher level of confidence in its results.

5.  **Implement the Miller-Rabin test in your preferred programming language.** (See Python example above)

**7. Important Points to Remember:**

*   Miller-Rabin is a *probabilistic* primality test, *not* a deterministic one.
*   Increase the number of iterations (*k*) to improve the accuracy of the test.
*   If the test returns "composite," the number is definitively composite.
*   If the test returns "probably prime," the number is likely prime, but there's a small chance it's composite.
*   The Miller-Rabin test is used extensively in cryptography due to its efficiency and relatively high accuracy for large numbers.
