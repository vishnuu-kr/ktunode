---
title: "Algorithms for integer factorization"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb36"
status: "completed"
scrapedAt: "2026-05-20T17:24:10.494Z"
---
# Computational Number Theory: Module 1 - Introduction to Number Theory
## Topic: Algorithms for Integer Factorization

---

### Learning Outcomes:

*   Understand the fundamental problem of integer factorization and its importance.
*   Be familiar with basic trial division methods and their limitations.
*   Learn about the Pollard's Rho algorithm and its underlying principles.
*   Understand Fermat's factorization method and its applicability.
*   Gain an overview of more advanced algorithms like the Quadratic Sieve and the General Number Field Sieve (GNFS).
*   Appreciate the probabilistic nature of some factorization algorithms.

---

## 1. Introduction to Integer Factorization

### 1.1 What is Integer Factorization?

*   **Definition:** Integer factorization is the process of finding the prime numbers that multiply together to give the original number.
*   **Fundamental Theorem of Arithmetic:** Every integer greater than 1 is either a prime number itself or can be represented as the product of prime numbers, and this representation is unique, up to the order of the factors.
*   **Example:** The prime factorization of 12 is $2 \times 2 \times 3$ or $2^2 \times 3$.

### 1.2 Why is Integer Factorization Important?

*   **Cryptography:** The security of many public-key cryptosystems, most notably RSA, relies on the computational difficulty of factoring large integers. Factoring a large number $N$ given its two large prime factors $p$ and $q$ is computationally infeasible for current algorithms, making RSA secure.
*   **Number Theory Research:** Factorization is a fundamental problem in number theory, and advancements in factorization algorithms often lead to new theoretical insights.
*   **Other Applications:** Used in computational algebra, coding theory, and certain optimization problems.

### 1.3 The Challenge of Integer Factorization

*   **Difficulty:** Factoring very large numbers is computationally very expensive. There is no known efficient (polynomial-time) deterministic algorithm for factoring arbitrary integers.
*   **Complexity:** The time required to factor a number generally grows exponentially with the size of the number (number of digits).

---

## 2. Basic Trial Division Methods

### 2.1 Naive Trial Division

*   **Concept:** To factor a number $N$, we try dividing it by every integer from 2 up to $\sqrt{N}$. If any integer $d$ divides $N$, then $d$ is a factor. If $N/d$ is also prime, we have found the prime factorization. If $N/d$ is composite, we repeat the process for $N/d$.
*   **Algorithm:**
    1.  Start with $d = 2$.
    2.  If $N$ is divisible by $d$, add $d$ to the list of factors and replace $N$ with $N/d$. Repeat step 2.
    3.  If $N$ is not divisible by $d$, increment $d$ to $d+1$.
    4.  Continue until $d > \sqrt{N}$. If $N > 1$ at this point, the remaining $N$ is a prime factor.
*   **Optimization:** We only need to check prime divisors up to $\sqrt{N}$. We can also optimize by checking 2, then all odd numbers.
*   **Example:** Factorize 105.
    *   $105$ is not divisible by 2.
    *   $105$ is divisible by 3: $105 / 3 = 35$. Factors: [3]. Remaining number: 35.
    *   $35$ is not divisible by 3.
    *   $35$ is divisible by 5: $35 / 5 = 7$. Factors: [3, 5]. Remaining number: 7.
    *   $\sqrt{7} \approx 2.6$. The next potential divisor to check is 7.
    *   $7$ is divisible by 7: $7 / 7 = 1$. Factors: [3, 5, 7]. Remaining number: 1.
    *   Prime factorization of 105 is $3 \times 5 \times 7$.

*   **Limitations:**
    *   **Inefficiency for Large Numbers:** The time complexity is roughly $O(\sqrt{N})$, which is very slow for large $N$. For a number with 100 digits, $\sqrt{N}$ would have around 50 digits, making this method impractical.

### 2.2 Trial Division with Precomputed Primes

*   **Concept:** Instead of checking every number, we only check prime numbers up to $\sqrt{N}$. This requires a precomputed list of primes.
*   **Algorithm:** Similar to naive trial division, but the increment step only considers the next prime number.
*   **Advantage:** Faster than naive trial division, but still exponential in the number of digits.

---

## 3. Pollard's Rho Algorithm

### 3.1 Overview

*   **Type:** Probabilistic factorization algorithm.
*   **Idea:** Based on Floyd's cycle-finding algorithm. It seeks to find a non-trivial factor of $N$ by looking for a collision in a sequence of numbers modulo a prime factor $p$ of $N$.
*   **Key Principle:** If $x \equiv y \pmod{p}$, then $\text{gcd}(|x-y|, N)$ is likely to be a non-trivial factor of $N$.
*   **Cycle Detection:** A sequence $x_{i+1} = f(x_i) \pmod{N}$ is generated. If $p$ is a prime factor of $N$, this sequence will eventually become periodic modulo $p$. The cycle-finding algorithm detects when $x_i \equiv x_j \pmod{p}$ for $i \neq j$.

### 3.2 The Algorithm

1.  **Choose a function:** A common choice is $f(x) = (x^2 + c) \pmod{N}$, where $c$ is a small constant (e.g., 1).
2.  **Initialize:** Choose a starting value $x_0$ (e.g., 2).
3.  **Generate sequence:**
    *   $x_1 = f(x_0) \pmod{N}$
    *   $x_2 = f(x_1) \pmod{N}$
    *   ...
    *   $x_{i+1} = f(x_i) \pmod{N}$
4.  **Cycle Detection (Floyd's):**
    *   Use two pointers: a "tortoise" ($t$) and a "hare" ($h$).
    *   Initialize $t = x_0$, $h = x_0$.
    *   In each step:
        *   $t = f(t) \pmod{N}$ (tortoise moves one step)
        *   $h = f(f(h)) \pmod{N}$ (hare moves two steps)
    *   Calculate $d = \text{gcd}(|t-h|, N)$.
5.  **Check GCD:**
    *   If $d = 1$, continue to the next iteration.
    *   If $d = N$, the algorithm has failed (likely due to choice of $f$ or $x_0$ leading to a cycle modulo $N$ itself). Restart with a different $c$ or $x_0$.
    *   If $1 < d < N$, then $d$ is a non-trivial factor. Return $d$.

### 3.3 Example: Factorize 10403

Let $N = 10403$. Let $f(x) = (x^2 + 1) \pmod{10403}$. $x_0 = 2$.

| Step | Tortoise (t) | Hare (h)     | $|t-h|$ | gcd(|t-h|, 10403) | Notes                                     |
| :--- | :----------- | :----------- | :------ | :---------------- | :---------------------------------------- |
| 0    | 2            | 2            | 0       | 10403             | Initial                                   |
| 1    | $f(2)=5$     | $f(f(2))=26$ | 21      | 1                 | $5 = 2^2+1 \pmod{10403}$, $26 = 5^2+1 \pmod{10403}$ |
| 2    | $f(5)=26$    | $f(26)=677$  | 651     | 1                 | $677 = 26^2+1 \pmod{10403}$               |
| 3    | $f(26)=677$  | $f(677)=f(458329)=5989$ | 5312 | 1                 | $458329 = 677^2+1$. $458329 \pmod{10403} = 4406 \times 10403 + 458329 - 458329 \pmod{10403} = 4406 \times 10403 + 458329 - 458329$ |
|      |              |              |         |                   | Calculation error in previous step explanation. Let's recalculate: |
|      |              |              |         |                   | $677^2 = 458329$. $458329 \pmod{10403} = 44.059 \times 10403 \approx 458329.2$. $458329 = 44 \times 10403 + 458329 - 458329 \pmod{10403} = 44 \times 10403 + 458329 - 458329 \pmod{10403}$ is wrong. |
|      |              |              |         |                   | $458329 \div 10403 = 44.059...$. So $458329 = 44 \times 10403 + R$. $R = 458329 - 44 \times 10403 = 458329 - 457732 = 597$.  So $f(677) = 597$. |
| 3    | $f(26)=677$  | $f(677)=597$ | 740     | 1                 | $f(677) = (677^2+1) \pmod{10403} = 597$. |
| 4    | $f(677)=597$ | $f(597) = f(356409+1) \pmod{10403} = f(356410) = 356410$. $356410 \pmod{10403} = 34.26 \times 10403 \approx 356410$. | 2317 | 1                 | $f(597) = (597^2+1) \pmod{10403} = 356409+1 \pmod{10403} = 356410 \pmod{10403}$. $356410 = 34 \times 10403 + 356410 - 34 \times 10403 = 34 \times 10403 + 356410 - 353702 = 34 \times 10403 + 2708$. So $f(597)=2708$. |
| 4    | $f(677)=597$ | $f(597)=2708$ | 2111    | 1                 |                                           |
| 5    | $f(597)=2708$ | $f(2708) = f(7333264+1) \pmod{10403} = f(7333265) \pmod{10403}$. $7333265 \pmod{10403} = 704.9 \times 10403 \approx 7333265$. | 4053 | 1                 | $f(2708) = (2708^2+1) \pmod{10403} = 7333264+1 \pmod{10403} = 7333265 \pmod{10403}$. $7333265 = 704 \times 10403 + 7333265 - 704 \times 10403 = 704 \times 10403 + 7333265 - 7330012 = 704 \times 10403 + 3253$. So $f(2708)=3253$. |
| 5    | $f(597)=2708$ | $f(2708)=3253$ | 545     | 101               | $10403 = 101 \times 103$. Found a factor! |

*   The algorithm found the factor 101. We can then factor the remaining number $10403 / 101 = 103$. Since 103 is prime, the factorization is $101 \times 103$.

### 3.4 Complexity and Limitations

*   **Average Time Complexity:** $O(N^{1/4})$ (for finding a prime factor $p$, it's $O(p^{1/2})$). This is significantly better than trial division.
*   **Limitations:**
    *   **Failure Case:** If $d=N$, the algorithm fails and needs to be restarted with different parameters. This can happen if the cycle length modulo $p$ is related to the cycle length modulo $N$.
    *   **Performance on Small Factors:** It's most effective when $N$ has small prime factors. For numbers with only large prime factors, it's less efficient than algorithms like Quadratic Sieve.

---

## 4. Fermat's Factorization Method

### 4.1 Overview

*   **Idea:** Based on the observation that if $N$ is an odd composite number that can be written as the product of two factors $p$ and $q$, $N = pq$, then $N$ can be expressed as a difference of two squares: $N = a^2 - b^2$.
*   **Derivation:** If $N = pq$, let $a = (p+q)/2$ and $b = (p-q)/2$. Then $a$ and $b$ are integers if $p$ and $q$ are both odd.
    $a^2 - b^2 = ((p+q)/2)^2 - ((p-q)/2)^2$
    $= (p^2 + 2pq + q^2)/4 - (p^2 - 2pq + q^2)/4$
    $= (4pq)/4 = pq = N$.
*   **Algorithm:** The algorithm searches for an integer $a \ge \sqrt{N}$ such that $a^2 - N$ is a perfect square, say $b^2$. Then $N = a^2 - b^2 = (a-b)(a+b)$.

### 4.2 The Algorithm

1.  Start with $a = \lceil \sqrt{N} \rceil$.
2.  Calculate $b^2 = a^2 - N$.
3.  Check if $b^2$ is a perfect square.
    *   If it is, then $b = \sqrt{b^2}$ is an integer. The factors are $(a-b)$ and $(a+b)$. Stop.
    *   If it is not, increment $a$ by 1 and repeat step 2.

### 4.3 Example: Factorize 10403

Let $N = 10403$.
*   $\sqrt{10403} \approx 101.99$. So, start with $a = 102$.

| a   | $a^2$   | $a^2 - N$ | Perfect Square? | b   | Factors      |
| :-- | :------ | :-------- | :-------------- | :-- | :----------- |
| 102 | 10404   | 1         | Yes             | 1   | $(102-1)(102+1) = 101 \times 103$ |

*   The algorithm found the factors 101 and 103 immediately.

### 4.4 Example: Factorize 2021

Let $N = 2021$.
*   $\sqrt{2021} \approx 44.95$. So, start with $a = 45$.

| a   | $a^2$   | $a^2 - N$ | Perfect Square? | b   | Factors      |
| :-- | :------ | :-------- | :-------------- | :-- | :----------- |
| 45  | 2025    | 4         | Yes             | 2   | $(45-2)(45+2) = 43 \times 47$ |

*   The algorithm found the factors 43 and 47.

### 4.5 Complexity and Limitations

*   **Time Complexity:** The number of steps depends on how "close" $N$ is to a perfect square. If $N = pq$ and $p$ and $q$ are close to $\sqrt{N}$, the method is very fast. If $p$ is very small and $q$ is very large (e.g., $N = 3 \times \text{large prime}$), then $a$ will be close to $q/2$, and $b$ will be close to $q/2$. The difference $a-b = p$ will be small. The number of steps is roughly $(q-p)/2$. In the worst case, if $p=3$ and $q$ is large, the number of steps can be large. The complexity can be roughly $O(\frac{p+q}{2})$, which is $O(N^{1/2})$ in the worst case where $p \approx \sqrt{N}$.
*   **Limitations:**
    *   **Ineffective for Numbers with Small Factors:** If $N$ has a small prime factor, $p$, then $q = N/p$ will be large. The value of $a$ will be close to $q/2$, and $b$ will be close to $q/2$. The difference $a-b$ will be close to $p$. Finding this small difference $p$ takes many steps.
    *   **Only for Odd Numbers:** The method assumes $N$ is odd.

---

## 5. Advanced Factorization Algorithms

### 5.1 Quadratic Sieve (QS)

*   **Concept:** An improvement over Fermat's method. It looks for congruences of the form $x^2 \equiv y^2 \pmod{N}$ where $x \not\equiv \pm y \pmod{N}$. Such congruences lead to factors of $N$ via $\text{gcd}(x-y, N)$ and $\text{gcd}(x+y, N)$.
*   **How it works:**
    1.  **Factor Base:** Select a set of small prime numbers called the factor base.
    2.  **Smooth Numbers:** Search for numbers $z_i$ such that $z_i^2 \pmod{N}$ is "smooth" (i.e., all its prime factors are in the factor base). These numbers $z_i$ are usually of the form $(a+i)^2 - N$ or $(a+i)$.
    3.  **Linear Algebra:** Collect enough such smooth numbers to form a system of linear equations modulo 2. The exponents of the prime factors in the smooth numbers are used. If the product of some $z_i$ has even exponents for all primes in the factor base, then $z_i^2 \pmod{N}$ is a perfect square modulo $N$. This yields a congruence $x^2 \equiv y^2 \pmod{N}$.
*   **Complexity:** Sub-exponential time complexity, approximately $L(1/2, \sqrt{e})$, which is better than Pollard's Rho for numbers with large prime factors.
*   **Usefulness:** Effective for numbers up to about 50-60 digits.

### 5.2 General Number Field Sieve (GNFS)

*   **Concept:** The most powerful known general-purpose integer factorization algorithm. It's a generalization of the Quadratic Sieve.
*   **How it works:** It involves working with number fields and algebraic integers. It still seeks congruences of the form $x^2 \equiv y^2 \pmod{N}$, but it uses more sophisticated techniques to find smooth numbers in these number fields.
*   **Complexity:** Sub-exponential time complexity, approximately $L(1/3, \sqrt[3]{e})$. This makes it feasible to factor numbers much larger than what QS can handle.
*   **Usefulness:** The state-of-the-art for factoring large numbers, used for breaking RSA challenges. It can factor numbers with hundreds of digits.

---

## 6. Practice Questions and Exercises

**Question 1:**
What is the main security principle behind the RSA cryptosystem?

**Question 2:**
Explain why trial division is impractical for factoring very large numbers.

**Question 3:**
Describe the core idea behind Pollard's Rho algorithm. What mathematical concept does it rely on for finding factors?

**Question 4:**
Factorize the number 77 using Fermat's factorization method. Show your steps.

**Question 5:**
If Pollard's Rho algorithm with $f(x) = (x^2+1) \pmod{N}$ and $x_0=2$ results in $\text{gcd}(|t-h|, N) = N$, what does this indicate, and what should be done?

**Question 6:**
Which factorization algorithm is generally considered the most efficient for factoring very large numbers (hundreds of digits)?

---

## 7. Answers to Practice Questions

**Answer 1:**
The security of RSA relies on the computational difficulty of factoring a large composite number (the public modulus $N$) into its two large prime factors ($p$ and $q$). If the prime factors can be found easily, the private key can be derived from the public key.

**Answer 2:**
Trial division involves checking divisibility by all numbers up to the square root of the number being factored. For a large number with, say, 100 digits, its square root would have approximately 50 digits. This number of checks is computationally infeasible, making trial division impractical for large numbers.

**Answer 3:**
Pollard's Rho algorithm's core idea is to find a non-trivial factor of a composite number $N$ by exploiting the cycle detection in a pseudorandom sequence modulo $N$. It uses Floyd's cycle-finding algorithm to detect when two elements in the sequence become congruent modulo a prime factor $p$ of $N$. The greatest common divisor ($\text{gcd}$) of the difference between these elements and $N$ is then likely to be a factor of $N$.

**Answer 4:**
To factorize 77 using Fermat's factorization method:
*   $\sqrt{77} \approx 8.77$. Start with $a = 9$.
*   **a = 9:** $a^2 = 81$. $a^2 - N = 81 - 77 = 4$.
*   Is 4 a perfect square? Yes, $4 = 2^2$.
*   So, $b=2$.
*   The factors are $(a-b)$ and $(a+b)$: $(9-2)$ and $(9+2)$.
*   Factors are $7$ and $11$.

**Answer 5:**
If $\text{gcd}(|t-h|, N) = N$, it means that the "tortoise" and "hare" pointers have met in a cycle modulo $N$ itself, or that the chosen function $f(x)$ and starting point $x_0$ are not suitable for finding a factor of $N$. The algorithm has failed to find a non-trivial factor. To resolve this, the algorithm should be restarted with a different starting value $x_0$ or a different constant $c$ in the function $f(x) = (x^2 + c) \pmod{N}$.

**Answer 6:**
The General Number Field Sieve (GNFS) is generally considered the most efficient algorithm for factoring very large numbers (hundreds of digits).

---

### Important Points to Remember:

*   **Prime factorization is the reverse of multiplication.** It's easy to multiply primes to get a large number, but very hard to factor the large number back into its primes.
*   **RSA's security is directly tied to the difficulty of factoring.**
*   **Trial division** is simple but only effective for small numbers.
*   **Pollard's Rho algorithm** is a probabilistic improvement over trial division, particularly good for numbers with small prime factors. It relies on cycle detection.
*   **Fermat's factorization method** works by finding a difference of squares, but is inefficient if one factor is much smaller than the other.
*   **Quadratic Sieve and General Number Field Sieve** are more advanced algorithms with sub-exponential time complexity, making them suitable for factoring larger numbers. GNFS is the current state-of-the-art.
*   The choice of algorithm depends on the size of the number to be factored and the expected size of its prime factors.
