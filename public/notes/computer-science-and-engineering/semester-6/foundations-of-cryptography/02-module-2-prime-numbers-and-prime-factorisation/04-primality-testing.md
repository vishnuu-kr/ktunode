---
title: "Primality Testing"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 2: Prime numbers and Prime Factorisation "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf0e"
status: "completed"
scrapedAt: "2026-05-20T16:53:33.352Z"
---
# Foundations of Cryptography: Module 2 - Prime Numbers and Prime Factorisation

## Topic: Primality Testing

This topic explores methods for determining whether a given integer is a prime number. Primality testing is a fundamental building block in many cryptographic algorithms, particularly those involving public-key cryptography.

---

### Learning Outcomes Covered:

*   Understand the importance of primality testing in cryptography.
*   Learn about trial division and its limitations.
*   Explore probabilistic primality tests, such as the Fermat primality test and the Miller-Rabin primality test.
*   Understand the concept of pseudoprimes and Carmichael numbers.
*   Learn about deterministic primality tests, such as the AKS primality test.
*   Analyze the time complexity of different primality testing algorithms.
*   Understand the trade-offs between probabilistic and deterministic primality tests.

---

### 1. Importance of Primality Testing in Cryptography

**Key Concept:** Prime numbers are the backbone of many modern cryptographic systems, especially public-key cryptography.

*   **RSA Cryptosystem:** The security of RSA relies on the difficulty of factoring the product of two large prime numbers. The process of generating RSA keys involves finding large prime numbers.
*   **Diffie-Hellman Key Exchange:** This protocol uses modular exponentiation, where the modulus is often a large prime number to ensure security.
*   **Elliptic Curve Cryptography (ECC):** ECC often uses finite fields defined over prime fields, requiring primality testing for the prime defining the field.

**Why are primes important?**

*   **Unique Factorization:** The Fundamental Theorem of Arithmetic states that every integer greater than 1 can be uniquely factored into a product of prime numbers. This property is crucial for cryptographic operations.
*   **Mathematical Properties:** Prime numbers exhibit specific mathematical properties that are exploited in cryptographic algorithms. For example, in modular arithmetic, numbers modulo a prime have desirable properties.
*   **Difficulty of Factoring:** The computational difficulty of factoring large numbers into their prime components is the basis of the security of many cryptosystems.

**Important Point to Remember:** The ability to efficiently find and test large prime numbers is essential for the secure implementation of many cryptographic algorithms.

---

### 2. Trial Division

**Key Concept:** Trial division is the most straightforward method to check if a number $n$ is prime. It involves dividing $n$ by all integers from 2 up to $\sqrt{n}$.

**Algorithm:**

1.  If $n \le 1$, it is not prime.
2.  If $n \le 3$, it is prime.
3.  If $n$ is divisible by 2 or 3, it is not prime.
4.  Iterate through integers $i$ starting from 5, with a step of 6 (i.e., check $i$ and $i+2$):
    *   If $n$ is divisible by $i$ or $i+2$, then $n$ is not prime.
5.  If no divisors are found up to $\sqrt{n}$, then $n$ is prime.

**Example:** Is 29 prime?

1.  $\sqrt{29} \approx 5.38$
2.  Check divisibility by 2: 29 % 2 != 0
3.  Check divisibility by 3: 29 % 3 != 0
4.  Check divisibility by 5: 29 % 5 != 0
5.  Since we've reached $\sqrt{29}$ and found no divisors, 29 is prime.

**Example:** Is 33 prime?

1.  $\sqrt{33} \approx 5.74$
2.  Check divisibility by 2: 33 % 2 != 0
3.  Check divisibility by 3: 33 % 3 == 0. Therefore, 33 is not prime.

**Limitations:**

*   **Efficiency for Large Numbers:** Trial division becomes computationally very expensive for large numbers. If $n$ is a large prime, you would need to perform approximately $\sqrt{n}/ \ln(\sqrt{n})$ divisions, which is infeasible for cryptographic primes (which can have hundreds of digits).

**Important Point to Remember:** Trial division is suitable for small numbers but impractical for cryptographic applications where large primes are used.

---

### 3. Probabilistic Primality Tests

**Key Concept:** Probabilistic primality tests do not guarantee that a number is prime but rather provide a high probability that it is. They are much faster than trial division for large numbers. If a number fails a probabilistic test, it is definitely composite. If it passes, it is likely prime.

#### 3.1. Fermat Primality Test

**Key Concept:** Based on Fermat's Little Theorem, which states that if $p$ is a prime number, then for any integer $a$ such that $1 < a < p$, the following congruence holds: $a^{p-1} \equiv 1 \pmod{p}$.

**Algorithm (Fermat Test for $n$):**

1.  Choose a random integer $a$ such that $1 < a < n$.
2.  Calculate $a^{n-1} \pmod{n}$.
3.  If $a^{n-1} \not\equiv 1 \pmod{n}$, then $n$ is definitely composite.
4.  If $a^{n-1} \equiv 1 \pmod{n}$, then $n$ is *probably* prime.

**Example:** Test if $n = 7$ is prime using $a = 2$.

*   $2^{7-1} \pmod{7} = 2^6 \pmod{7}$
*   $2^1 \equiv 2 \pmod{7}$
*   $2^2 \equiv 4 \pmod{7}$
*   $2^3 \equiv 8 \equiv 1 \pmod{7}$
*   $2^6 = (2^3)^2 \equiv 1^2 \equiv 1 \pmod{7}$
*   Since the result is 1, 7 is probably prime (and it is).

**Example:** Test if $n = 341$ is prime using $a = 2$.

*   $341 = 11 \times 31$, so it's composite.
*   Calculate $2^{340} \pmod{341}$.
*   Using modular exponentiation, we find $2^{340} \equiv 1 \pmod{341}$.
*   The Fermat test with $a=2$ passes, suggesting 341 is prime. This is where the limitation comes in.

**Pseudoprimes (Fermat Pseudoprimes):**

**Key Concept:** A composite number $n$ that satisfies $a^{n-1} \equiv 1 \pmod{n}$ for a specific base $a$ is called a Fermat pseudoprime to base $a$.

**Limitations of Fermat Test:**

*   **Carmichael Numbers:** There exist composite numbers $n$ (called Carmichael numbers) that satisfy $a^{n-1} \equiv 1 \pmod{n}$ for *all* integers $a$ coprime to $n$. The smallest Carmichael number is 561 ($561 = 3 \times 11 \times 17$). If we use a Fermat test with any base $a$ coprime to 561, it will falsely declare 561 as probably prime.

**Important Point to Remember:** The Fermat test is a good starting point but is susceptible to false positives due to Carmichael numbers. To increase confidence, the test should be repeated with multiple random bases.

#### 3.2. Miller-Rabin Primality Test

**Key Concept:** The Miller-Rabin test is a more robust probabilistic primality test that addresses the shortcomings of the Fermat test. It's based on the properties of quadratic residues modulo a prime.

**Fermat's Little Theorem Extension:** If $p$ is an odd prime, then $p-1$ can be written as $2^s \cdot d$, where $d$ is an odd integer. For any integer $a$ such that $1 < a < p$, either:
    1.  $a^d \equiv 1 \pmod{p}$
    2.  $a^{2^r \cdot d} \equiv -1 \pmod{p}$ for some $0 \le r < s$.
    (Note: $-1 \pmod{p}$ is equivalent to $p-1 \pmod{p}$).

**Algorithm (Miller-Rabin Test for $n$):**

1.  Handle base cases: If $n \le 1$ or $n=4$, return composite. If $n \le 3$, return prime. If $n$ is even, return composite.
2.  Write $n-1$ as $2^s \cdot d$, where $d$ is odd.
3.  Choose a random integer $a$ such that $1 < a < n$.
4.  Calculate $x = a^d \pmod{n}$.
5.  If $x = 1$ or $x = n-1$, then $n$ is probably prime. Return "probably prime".
6.  Otherwise, repeat $s-1$ times:
    *   $x = x^2 \pmod{n}$
    *   If $x = n-1$, then $n$ is probably prime. Return "probably prime".
7.  If the loop finishes and $x$ is not $n-1$, then $n$ is definitely composite. Return "composite".

**Example:** Test if $n = 29$ is prime using $a = 2$.

1.  $n=29$. $n-1 = 28$.
2.  $28 = 2^2 \cdot 7$. So $s=2$, $d=7$.
3.  Calculate $x = a^d \pmod{n} = 2^7 \pmod{29}$.
    *   $2^7 = 128$.
    *   $128 = 4 \times 29 + 12$. So $x = 12 \pmod{29}$.
4.  $x$ is not 1 or 28.
5.  Now repeat $s-1 = 2-1 = 1$ time:
    *   $x = x^2 \pmod{29} = 12^2 \pmod{29} = 144 \pmod{29}$.
    *   $144 = 4 \times 29 + 28$. So $x = 28 \pmod{29}$.
6.  Since $x = n-1$, $n=29$ is probably prime. (And it is).

**Example:** Test if $n = 341$ is prime using $a = 2$.

1.  $n=341$. $n-1 = 340$.
2.  $340 = 2^2 \cdot 85$. So $s=2$, $d=85$.
3.  Calculate $x = a^d \pmod{n} = 2^{85} \pmod{341}$.
    *   Using modular exponentiation, $2^{85} \equiv 32 \pmod{341}$.
4.  $x$ is not 1 or 340.
5.  Repeat $s-1 = 2-1 = 1$ time:
    *   $x = x^2 \pmod{341} = 32^2 \pmod{341} = 1024 \pmod{341}$.
    *   $1024 = 3 \times 341 + 1$. So $x = 1 \pmod{341}$.
6.  The loop finished, and $x$ is 1 (not $n-1$). Therefore, $n=341$ is definitely composite.

**Number of Rounds (k):**

*   To achieve a high probability of correctness, the Miller-Rabin test is repeated $k$ times with different random bases $a$.
*   If $n$ is composite, the probability that the Miller-Rabin test declares it as "probably prime" for a single random base $a$ is at most $1/4$.
*   After $k$ independent tests, the probability that a composite number $n$ is falsely declared as "probably prime" is at most $(1/4)^k$.
*   For cryptographic applications, $k$ is typically chosen to be large enough (e.g., 40 or more) to make the probability of error negligibly small.

**Advantages of Miller-Rabin:**

*   **No Carmichael Numbers:** It correctly identifies Carmichael numbers as composite.
*   **High Probability:** Provides a very high probability of correctness with a sufficient number of rounds.
*   **Efficiency:** Faster than trial division for large numbers.

**Important Point to Remember:** The Miller-Rabin test is the de facto standard for probabilistic primality testing in cryptography due to its efficiency and high accuracy.

---

### 4. Pseudoprimes and Carmichael Numbers

**Key Concepts:**

*   **Pseudoprime:** A composite number that satisfies a particular primality test that is usually only satisfied by primes.
    *   **Fermat Pseudoprime:** A composite $n$ such that $a^{n-1} \equiv 1 \pmod{n}$ for some base $a$.
*   **Carmichael Number:** A composite number $n$ that satisfies $a^{n-1} \equiv 1 \pmod{n}$ for *all* integers $a$ such that $\gcd(a, n) = 1$. Carmichael numbers are "Fermat pseudoprimes to every base coprime to them".

**Properties of Carmichael Numbers:**

*   They are square-free (not divisible by $p^2$ for any prime $p$).
*   If $p$ is a prime factor of a Carmichael number $n$, then $p-1$ must divide $n-1$.

**Example:** 561 is the smallest Carmichael number ($561 = 3 \times 11 \times 17$).

*   For any $a$ with $\gcd(a, 561)=1$: $a^{560} \equiv 1 \pmod{561}$.
*   Try $a=2$: $2^{560} \pmod{561} = 1$.
*   Try $a=5$: $5^{560} \pmod{561} = 1$.

**Importance:** The existence of Carmichael numbers makes the Fermat test alone unreliable for cryptographic purposes. The Miller-Rabin test is designed to overcome this.

**Important Point to Remember:** Carmichael numbers are a critical reason why probabilistic tests need to be carefully chosen and their limitations understood.

---

### 5. Deterministic Primality Tests

**Key Concept:** Deterministic primality tests guarantee whether a number is prime or composite.

#### 5.1. AKS Primality Test (Agrawal-Kayal-Saxena)

**Key Concept:** The AKS primality test is a polynomial-time deterministic primality test. It was a breakthrough in number theory and cryptography as it provided the first general-purpose deterministic primality test that was proven to run in polynomial time.

**The Main Theorem:** An integer $n > 1$ is prime if and only if the polynomial congruence $(x+a)^{n} \equiv x^{n} + a \pmod{n}$ holds for all integers $a$ coprime to $n$.

**The AKS Algorithm (Simplified Idea):**

The AKS test ingeniously uses a refined version of this theorem with a specific polynomial and a bounded range of bases. It's based on the concept that if $n$ is prime, the polynomial $P(x) = (x+1)^n - (x^n+1)$ has a specific structure when considered modulo $n$.

The AKS algorithm proves that if $n$ is prime, then for a suitably chosen small integer $r$ and for all $a$ in the range $[1, r]$, the congruence $(x+a)^n \equiv x^n+a \pmod{n, x^r-1}$ holds. Conversely, if this congruence holds for a sufficiently large $r$ and all $a$ in the range $[1, r]$, then $n$ must be prime.

**Time Complexity:** The initial version of AKS had a time complexity of $O((\log n)^{12})$ and later improved to $O((\log n)^6)$. While deterministic and polynomial-time, it is generally slower than the Miller-Rabin test for practical cryptographic key sizes.

**Significance:**

*   **Theoretical Breakthrough:** Proved that primality testing is in P (i.e., can be solved in polynomial time).
*   **Not Practically Preferred for Cryptography:** Due to its complexity, it is not typically used for generating cryptographic keys where Miller-Rabin is sufficiently accurate and much faster.

**Important Point to Remember:** The AKS test is a significant theoretical achievement, proving that primality testing is efficiently solvable deterministically, but it's not the practical choice for most cryptographic applications.

---

### 6. Time Complexity Analysis

Understanding the time complexity of primality testing algorithms is crucial for choosing the right algorithm for cryptographic applications.

*   **Trial Division:**
    *   Time complexity: $O(\sqrt{n})$. This is exponential in the number of digits of $n$ (which is proportional to $\log n$). For example, if $n$ has $d$ digits, then $n \approx 10^d$, and $\sqrt{n} \approx 10^{d/2} = (10^{1/2})^d \approx 3.16^d$. This is clearly infeasible for cryptographic primes.

*   **Fermat Test:**
    *   Time complexity (per base): Dominated by modular exponentiation, which is $O((\log n)^3)$ using standard algorithms.
    *   To reduce error probability to $\epsilon$, we need roughly $\log(1/\epsilon)$ rounds. So, $O(\log(1/\epsilon) (\log n)^3)$.
    *   However, due to Carmichael numbers, it's not reliably secure on its own.

*   **Miller-Rabin Test:**
    *   Time complexity (per base): Similar to Fermat, $O((\log n)^3)$ using standard modular exponentiation.
    *   To achieve a probability of error $\epsilon$, we need $k \approx \log_4(1/\epsilon)$ rounds.
    *   Total time complexity for $k$ rounds: $O(k (\log n)^3)$.
    *   For cryptographic purposes, $k$ is a small constant (e.g., 40), making the overall complexity effectively $O((\log n)^3)$. This is considered efficient.

*   **AKS Primality Test:**
    *   Time complexity: Initially $O((\log n)^{12})$, later improved to $O((\log n)^6)$.
    *   This is polynomial time, but the constant factors are larger than for Miller-Rabin, making it slower in practice for typical cryptographic key sizes.

**Important Point to Remember:** For cryptographic applications, the Miller-Rabin test offers the best balance between speed and reliability, with a complexity that is polynomial in the logarithm of the number being tested.

---

### 7. Trade-offs between Probabilistic and Deterministic Primality Tests

| Feature          | Probabilistic Tests (e.g., Miller-Rabin)                       | Deterministic Tests (e.g., AKS)                                  |
| :--------------- | :------------------------------------------------------------- | :--------------------------------------------------------------- |
| **Guarantee**    | High probability of correctness. A composite may pass (falsely). | Guaranteed correctness. Always determines prime or composite.     |
| **Speed**        | Generally faster for practical cryptographic key sizes.        | Generally slower for practical cryptographic key sizes.          |
| **Implementation** | Simpler to implement and widely used in practice.             | More complex to implement and understand.                         |
| **Error Rate**   | Can be made arbitrarily small by increasing the number of rounds. | Zero error rate.                                                 |
| **Use in Crypto** | Primary choice for generating cryptographic primes.            | Not typically used for key generation due to performance.        |
| **Theoretical**  | Does not prove membership in P.                                | Proves membership in P.                                          |

**Key Takeaway:**

In cryptography, the slight theoretical risk of a probabilistic test failing is overwhelmingly outweighed by its practical speed advantage. The number of rounds in Miller-Rabin is chosen such that the probability of a composite passing is astronomically small, making it secure for all practical purposes.

---

### Practice Questions

1.  Why is primality testing crucial for the RSA cryptosystem?
2.  Explain the basic principle behind the Fermat primality test. What is a Fermat pseudoprime?
3.  What are Carmichael numbers, and why do they pose a problem for the Fermat primality test?
4.  Describe the Miller-Rabin primality test. How does it improve upon the Fermat test?
5.  If you need to generate a 2048-bit prime number for a cryptographic application, which type of primality test would you most likely use, and why?
6.  What is the time complexity of trial division for a number $n$? How does this compare to the time complexity of the Miller-Rabin test with $k$ rounds?
7.  What was the significance of the AKS primality test?

---

### Answers to Practice Questions

1.  **RSA:** The security of RSA relies on the difficulty of factoring the product of two large prime numbers ($n = p \times q$). Generating RSA keys requires finding these large prime numbers $p$ and $q$. Therefore, efficient primality testing is essential for key generation.
2.  **Fermat Primality Test:** It's based on Fermat's Little Theorem: if $p$ is prime, then $a^{p-1} \equiv 1 \pmod{p}$ for $1 < a < p$. The test picks a random $a$ and checks this congruence. If it fails, $n$ is composite. If it passes, $n$ is probably prime.
    **Fermat Pseudoprime:** A composite number $n$ that satisfies $a^{n-1} \equiv 1 \pmod{n}$ for a specific base $a$ is a Fermat pseudoprime to base $a$.
3.  **Carmichael Numbers:** These are composite numbers $n$ that satisfy $a^{n-1} \equiv 1 \pmod{n}$ for *all* integers $a$ coprime to $n$. They are problematic because a Fermat test using any valid base will incorrectly identify them as probably prime, undermining the test's reliability.
4.  **Miller-Rabin Test:** It's a refinement of Fermat's Little Theorem. It writes $n-1 = 2^s \cdot d$ (where $d$ is odd) and checks the conditions $a^d \equiv 1 \pmod{n}$ or $a^{2^r \cdot d} \equiv -1 \pmod{n}$ for some $0 \le r < s$. This test correctly identifies Carmichael numbers as composite, making it much more reliable.
5.  **Choice of Test for 2048-bit prime:** You would use the **Miller-Rabin primality test**. It's fast enough for large numbers and provides a sufficiently high probability of correctness by running multiple rounds. Trial division is too slow, and AKS, while deterministic, is typically slower than Miller-Rabin for cryptographic key sizes.
6.  **Time Complexity Comparison:**
    *   Trial Division: $O(\sqrt{n})$. This is exponential in the number of digits of $n$.
    *   Miller-Rabin (k rounds): $O(k (\log n)^3)$. This is polynomial in the number of digits of $n$ (which is $\log n$). For a fixed $k$, it's $O((\log n)^3)$. For cryptographic purposes, $k$ is a constant, making it much more efficient than trial division for large $n$.
7.  **Significance of AKS:** The AKS primality test was significant because it was the first *deterministic* primality test proven to run in *polynomial time*. This was a major theoretical breakthrough, confirming that primality testing belongs to the complexity class P. However, it is not the preferred practical choice for cryptography due to its higher computational cost compared to Miller-Rabin.
