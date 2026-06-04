---
title: "Introduction to Number Theory - Basic concepts and definitions"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb31"
status: "completed"
scrapedAt: "2026-05-20T17:24:07.040Z"
---
# COMPUTATIONAL NUMBER THEORY - Module 1: Introduction to Number Theory

## Topic: Basic Concepts and Definitions

### Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the fundamental objects of study in number theory.
*   Define and distinguish between prime and composite numbers.
*   Explain the concept of divisibility and its properties.
*   Understand the concept of the greatest common divisor (GCD) and its properties.
*   Understand the concept of the least common multiple (LCM) and its properties.
*   Grasp the significance of modular arithmetic.

---

### 1. Introduction to Number Theory

Number theory is a branch of mathematics that studies the properties of **integers** (whole numbers, positive, negative, and zero). It is a surprisingly deep and rich field, with applications in cryptography, computer science, and coding theory.

**Key Objects of Study:**

*   **Integers ($\mathbb{Z}$):** The set of whole numbers, including positive numbers, negative numbers, and zero. $\mathbb{Z} = \{..., -3, -2, -1, 0, 1, 2, 3, ...\}$
*   **Natural Numbers ($\mathbb{N}$):** Typically defined as positive integers. Some definitions include zero, so it's important to clarify the convention used. For this course, we will generally consider $\mathbb{N} = \{1, 2, 3, ...\}$.
*   **Positive Integers ($\mathbb{Z}^+$):** Same as natural numbers.

---

### 2. Divisibility

Divisibility is a foundational concept in number theory.

**Definition:** An integer $a$ **divides** an integer $b$, denoted as $a | b$, if there exists an integer $k$ such that $b = ak$.

*   If $a|b$, then $a$ is called a **divisor** or **factor** of $b$.
*   If $a$ does not divide $b$, we write $a \nmid b$.

**Examples:**

*   $3 | 12$ because $12 = 3 \times 4$, and 4 is an integer.
*   $-5 | 20$ because $20 = (-5) \times (-4)$, and -4 is an integer.
*   $7 \nmid 15$ because there is no integer $k$ such that $15 = 7k$.

**Important Points about Divisibility:**

*   **Any non-zero integer divides zero:** $a | 0$ for any $a \in \mathbb{Z}, a \neq 0$, because $0 = a \times 0$.
*   **Zero does not divide any non-zero integer:** $0 \nmid b$ for any $b \in \mathbb{Z}, b \neq 0$. (Division by zero is undefined).
*   **Zero divides only zero:** $0 | 0$ is sometimes considered true by definition ($0 = 0 \times k$ for any integer $k$), but it's generally avoided to prevent ambiguities.
*   **Every non-zero integer divides itself:** $a | a$ for any $a \in \mathbb{Z}, a \neq 0$, because $a = a \times 1$.
*   **If $a | b$ and $b \neq 0$, then $|a| \le |b|$** (the absolute value of $a$ is less than or equal to the absolute value of $b$).

**Properties of Divisibility:**

Let $a, b, c$ be integers.

1.  **Reflexivity:** If $a \neq 0$, then $a | a$.
2.  **Transitivity:** If $a | b$ and $b | c$, then $a | c$.
    *   *Example:* If $2 | 6$ and $6 | 18$, then $2 | 18$.
3.  **Non-negativity of divisors:** If $a | b$ and $b \neq 0$, then $|a| \le |b|$.
4.  **Divisibility by 1 and -1:** $1 | a$ and $-1 | a$ for all integers $a$.
5.  **If $a | b$ and $b | a$, then $|a| = |b|$** (provided $a, b \neq 0$).
6.  **Linear Combinations:** If $a | b$ and $a | c$, then $a | (xb + yc)$ for any integers $x$ and $y$.
    *   *Example:* If $3 | 12$ and $3 | 18$, then $3 | (2 \times 12 + 5 \times 18)$, which is $3 | (24 + 90) = 114$. Indeed, $114 = 3 \times 38$.

---

### 3. Prime and Composite Numbers

Prime and composite numbers are the building blocks of integers under multiplication.

**Definition:** An integer $p > 1$ is called a **prime number** (or simply prime) if its only positive divisors are 1 and $p$.

**Definition:** An integer $n > 1$ is called a **composite number** if it is not prime. That is, if $n$ has a positive divisor other than 1 and $n$.

**Examples:**

*   **Prime Numbers:** 2, 3, 5, 7, 11, 13, 17, 19, 23, ...
    *   **Why 2 is prime:** Its only positive divisors are 1 and 2.
    *   **Why 7 is prime:** Its only positive divisors are 1 and 7.
*   **Composite Numbers:** 4, 6, 8, 9, 10, 12, 14, 15, 16, ...
    *   **Why 4 is composite:** Its positive divisors are 1, 2, and 4.
    *   **Why 9 is composite:** Its positive divisors are 1, 3, and 9.

**Important Points:**

*   **1 is neither prime nor composite.** By definition, primes must be greater than 1.
*   **2 is the only even prime number.** All other even numbers greater than 2 are divisible by 2 and are therefore composite.
*   **The Fundamental Theorem of Arithmetic:** Every integer greater than 1 can be uniquely expressed as a product of prime numbers (up to the order of the factors).
    *   *Example:* $12 = 2^2 \times 3$
    *   *Example:* $30 = 2 \times 3 \times 5$
    *   *Example:* $100 = 2^2 \times 5^2$

**Numbers less than or equal to 1:**

*   **1:** Neither prime nor composite.
*   **0:** Divisible by all integers except itself.
*   **Negative Integers:** The concept of prime and composite is typically applied to positive integers. However, if we consider divisibility in general, for $n < -1$, its divisors include those of $|n|$. For instance, the divisors of -6 are $\{-6, -3, -2, -1, 1, 2, 3, 6\}$. The prime factorization of an integer $n$ is often stated for its absolute value $|n|$.

---

### 4. Greatest Common Divisor (GCD)

The GCD is the largest positive integer that divides two or more integers.

**Definition:** The **greatest common divisor (GCD)** of two non-zero integers $a$ and $b$, denoted as $\gcd(a, b)$ or $(a, b)$, is the largest positive integer $d$ such that $d | a$ and $d | b$.

**Examples:**

*   $\gcd(12, 18)$:
    *   Divisors of 12: $\{1, 2, 3, 4, 6, 12\}$
    *   Divisors of 18: $\{1, 2, 3, 6, 9, 18\}$
    *   Common divisors: $\{1, 2, 3, 6\}$
    *   The greatest common divisor is 6. So, $\gcd(12, 18) = 6$.

*   $\gcd(7, 5)$:
    *   Divisors of 7: $\{1, 7\}$
    *   Divisors of 5: $\{1, 5\}$
    *   Common divisors: $\{1\}$
    *   $\gcd(7, 5) = 1$. When $\gcd(a, b) = 1$, $a$ and $b$ are called **relatively prime** or **coprime**.

*   $\gcd(24, 0)$:
    *   Divisors of 24: $\{1, 2, 3, 4, 6, 8, 12, 24\}$
    *   Divisors of 0: All non-zero integers.
    *   The common divisors are the divisors of 24.
    *   $\gcd(24, 0) = 24$. In general, $\gcd(a, 0) = |a|$ for $a \neq 0$.

**Properties of GCD:**

Let $a, b, c$ be integers.

1.  **Commutativity:** $\gcd(a, b) = \gcd(b, a)$.
2.  **Associativity:** $\gcd(a, b, c) = \gcd(\gcd(a, b), c) = \gcd(a, \gcd(b, c))$.
3.  **Identity Element:** $\gcd(a, 0) = |a|$ (for $a \neq 0$).
4.  **GCD with itself:** $\gcd(a, a) = |a|$ (for $a \neq 0$).
5.  **Scaling Property:** $\gcd(ka, kb) = |k|\gcd(a, b)$ for any non-zero integer $k$.
    *   *Example:* $\gcd(12, 18) = 6$. Then $\gcd(2 \times 12, 2 \times 18) = \gcd(24, 36) = 12$, and $2 \times \gcd(12, 18) = 2 \times 6 = 12$.
6.  **If $d = \gcd(a, b)$, then $\gcd(a/d, b/d) = 1$.**
7.  **Linear Combination Property:** $\gcd(a, b)$ is the smallest positive integer that can be expressed as a linear combination $ax + by$, where $x$ and $y$ are integers. This is Bezout's Identity.
    *   *Example:* For $\gcd(12, 18) = 6$, we can find $x, y$ such that $12x + 18y = 6$. For instance, $12(2) + 18(-1) = 24 - 18 = 6$.

**Methods to find GCD:**

*   **Listing Divisors:** (as shown in examples above) - practical for small numbers.
*   **Prime Factorization:**
    *   Find the prime factorization of each number.
    *   For each common prime factor, take the lowest power.
    *   Multiply these lowest powers together.
    *   *Example:* $\gcd(72, 120)$
        *   $72 = 2^3 \times 3^2$
        *   $120 = 2^3 \times 3^1 \times 5^1$
        *   Common primes are 2 and 3.
        *   Lowest power of 2 is $2^3$.
        *   Lowest power of 3 is $3^1$.
        *   $\gcd(72, 120) = 2^3 \times 3^1 = 8 \times 3 = 24$.
*   **Euclidean Algorithm:** (This is a very efficient method and will be covered in detail in a later module).

---

### 5. Least Common Multiple (LCM)

The LCM is the smallest positive integer that is a multiple of two or more integers.

**Definition:** The **least common multiple (LCM)** of two non-zero integers $a$ and $b$, denoted as $\operatorname{lcm}(a, b)$ or $[a, b]$, is the smallest positive integer $m$ such that $a | m$ and $b | m$.

**Examples:**

*   $\operatorname{lcm}(12, 18)$:
    *   Multiples of 12: $\{12, 24, 36, 48, 60, 72, ...\}$
    *   Multiples of 18: $\{18, 36, 54, 72, ...\}$
    *   Common multiples: $\{36, 72, ...\}$
    *   The least common multiple is 36. So, $\operatorname{lcm}(12, 18) = 36$.

*   $\operatorname{lcm}(7, 5)$:
    *   Multiples of 7: $\{7, 14, 21, 28, 35, 42, ...\}$
    *   Multiples of 5: $\{5, 10, 15, 20, 25, 30, 35, 40, ...\}$
    *   Common multiples: $\{35, 70, ...\}$
    *   $\operatorname{lcm}(7, 5) = 35$.

**Relationship between GCD and LCM:**

For any two non-zero integers $a$ and $b$:
$$ |a \times b| = \gcd(a, b) \times \operatorname{lcm}(a, b) $$

This is a very useful formula.

**Examples using the formula:**

*   For $a=12, b=18$:
    *   $\gcd(12, 18) = 6$
    *   $|12 \times 18| = 216$
    *   $216 = 6 \times \operatorname{lcm}(12, 18)$
    *   $\operatorname{lcm}(12, 18) = 216 / 6 = 36$. (Matches our earlier calculation).

*   For $a=7, b=5$:
    *   $\gcd(7, 5) = 1$
    *   $|7 \times 5| = 35$
    *   $35 = 1 \times \operatorname{lcm}(7, 5)$
    *   $\operatorname{lcm}(7, 5) = 35$. (Matches our earlier calculation).

**Methods to find LCM:**

*   **Listing Multiples:** (as shown in examples above) - practical for small numbers.
*   **Prime Factorization:**
    *   Find the prime factorization of each number.
    *   For every prime factor that appears in *either* factorization, take the highest power.
    *   Multiply these highest powers together.
    *   *Example:* $\operatorname{lcm}(72, 120)$
        *   $72 = 2^3 \times 3^2$
        *   $120 = 2^3 \times 3^1 \times 5^1$
        *   Primes appearing are 2, 3, and 5.
        *   Highest power of 2 is $2^3$.
        *   Highest power of 3 is $3^2$.
        *   Highest power of 5 is $5^1$.
        *   $\operatorname{lcm}(72, 120) = 2^3 \times 3^2 \times 5^1 = 8 \times 9 \times 5 = 360$.
*   **Using the GCD formula:** $\operatorname{lcm}(a, b) = \frac{|a \times b|}{\gcd(a, b)}$.

---

### 6. Modular Arithmetic

Modular arithmetic deals with remainders of division. It is extremely important in computational number theory and cryptography.

**Definition:** For integers $a$ and $n$ with $n > 0$, we say $a$ is **congruent to $b$ modulo $n$**, denoted as $a \equiv b \pmod{n}$, if $n$ divides the difference $a-b$. That is, $a-b = kn$ for some integer $k$.

This is equivalent to saying that $a$ and $b$ have the same remainder when divided by $n$.

**Examples:**

*   $17 \equiv 2 \pmod{5}$ because $17 - 2 = 15$, and $5 | 15$ (since $15 = 3 \times 5$).
    *   Alternatively, $17$ divided by $5$ gives a remainder of $2$ ($17 = 3 \times 5 + 2$).
    *   $2$ divided by $5$ gives a remainder of $2$ ($2 = 0 \times 5 + 2$).

*   $23 \equiv -7 \pmod{10}$ because $23 - (-7) = 23 + 7 = 30$, and $10 | 30$ (since $30 = 3 \times 10$).
    *   $23$ divided by $10$ gives a remainder of $3$ ($23 = 2 \times 10 + 3$).
    *   $-7$ divided by $10$ gives a remainder of $3$ ($-7 = -1 \times 10 + 3$).

*   $10 \equiv 0 \pmod{2}$ because $10 - 0 = 10$, and $2 | 10$.

**The Modulus:** The integer $n$ is called the **modulus** of the congruence.

**Properties of Congruences:**

If $a \equiv b \pmod{n}$ and $c \equiv d \pmod{n}$, then:

1.  **Addition:** $a+c \equiv b+d \pmod{n}$
    *   *Example:* If $17 \equiv 2 \pmod{5}$ and $10 \equiv 0 \pmod{5}$, then $17+10 \equiv 2+0 \pmod{5}$, which means $27 \equiv 2 \pmod{5}$. (Indeed, $27 = 5 \times 5 + 2$).

2.  **Subtraction:** $a-c \equiv b-d \pmod{n}$
    *   *Example:* If $17 \equiv 2 \pmod{5}$ and $10 \equiv 0 \pmod{5}$, then $17-10 \equiv 2-0 \pmod{5}$, which means $7 \equiv 2 \pmod{5}$. (Indeed, $7 = 1 \times 5 + 2$).

3.  **Multiplication:** $ac \equiv bd \pmod{n}$
    *   *Example:* If $17 \equiv 2 \pmod{5}$ and $10 \equiv 0 \pmod{5}$, then $17 \times 10 \equiv 2 \times 0 \pmod{5}$, which means $170 \equiv 0 \pmod{5}$. (Indeed, $170 = 34 \times 5 + 0$).

4.  **Powers:** If $a \equiv b \pmod{n}$, then $a^k \equiv b^k \pmod{n}$ for any positive integer $k$.
    *   *Example:* Since $3 \equiv -2 \pmod{5}$, then $3^2 \equiv (-2)^2 \pmod{5}$, which means $9 \equiv 4 \pmod{5}$. (Indeed, $9 = 1 \times 5 + 4$).

**Important Note:** Division in modular arithmetic is trickier and requires the concept of modular inverses (to be covered later). You cannot simply divide both sides of a congruence by a number unless that number is coprime to the modulus.

*   **Example of invalid division:** $10 \equiv 4 \pmod 6$. If we try to divide by 2, we get $5 \equiv 2 \pmod 6$, which is false ($5-2=3$, and $6 \nmid 3$).

**The set of residues modulo n:** The set of all possible remainders when dividing by $n$ is $\{0, 1, 2, ..., n-1\}$. This set, along with the operations of addition and multiplication modulo $n$, forms a structure called a **complete residue system modulo $n$**.

---

### Practice Questions/Exercises

1.  **Divisibility:**
    *   Which of the following are true?
        *   $5 | 25$
        *   $7 | 0$
        *   $0 | 10$
        *   $-3 | 18$
        *   $15 | 5$
    *   If $a | b$ and $b | c$, what can you say about the relationship between $a$ and $c$?

2.  **Prime and Composite Numbers:**
    *   List the first 10 prime numbers.
    *   Is 1 prime or composite? Explain.
    *   Is 2 prime or composite? Explain.
    *   Determine if the following numbers are prime or composite: 29, 33, 41, 51.

3.  **GCD and LCM:**
    *   Calculate $\gcd(36, 48)$.
    *   Calculate $\operatorname{lcm}(36, 48)$.
    *   Calculate $\gcd(15, 25, 40)$.
    *   Calculate $\operatorname{lcm}(15, 25, 40)$.
    *   Use the GCD-LCM relationship to find $\operatorname{lcm}(28, 35)$ after finding $\gcd(28, 35)$.

4.  **Modular Arithmetic:**
    *   Is $37 \equiv 5 \pmod{8}$? Explain.
    *   Find an integer $x$ such that $x \equiv 15 \pmod{7}$ and $0 \le x < 7$.
    *   Given $a \equiv 3 \pmod{11}$ and $b \equiv 5 \pmod{11}$, find the remainder of $a+b$ and $a \times b$ when divided by 11.
        *   $a+b \pmod{11}$
        *   $a \times b \pmod{11}$

---

### Answers to Practice Questions

1.  **Divisibility:**
    *   True: $5 | 25$, $7 | 0$, $-3 | 18$.
    *   False: $0 | 10$ (division by zero is undefined), $15 | 5$ (the divisor must be less than or equal to the absolute value of the dividend if the dividend is non-zero).
    *   If $a | b$ and $b | c$, then $a | c$ (Transitivity property).

2.  **Prime and Composite Numbers:**
    *   First 10 primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.
    *   1 is neither prime nor composite by definition (primes must be greater than 1).
    *   2 is prime because its only positive divisors are 1 and 2.
    *   29: Prime (divisors are 1 and 29).
    *   33: Composite ($33 = 3 \times 11$).
    *   41: Prime (divisors are 1 and 41).
    *   51: Composite ($51 = 3 \times 17$).

3.  **GCD and LCM:**
    *   $\gcd(36, 48)$:
        *   $36 = 2^2 \times 3^2$
        *   $48 = 2^4 \times 3^1$
        *   $\gcd(36, 48) = 2^2 \times 3^1 = 4 \times 3 = 12$.
    *   $\operatorname{lcm}(36, 48)$:
        *   $\operatorname{lcm}(36, 48) = 2^4 \times 3^2 = 16 \times 9 = 144$.
        *   Alternatively, $\operatorname{lcm}(36, 48) = (36 \times 48) / 12 = 1728 / 12 = 144$.
    *   $\gcd(15, 25, 40)$:
        *   $15 = 3 \times 5$
        *   $25 = 5^2$
        *   $40 = 2^3 \times 5$
        *   $\gcd(15, 25, 40) = 5$.
    *   $\operatorname{lcm}(15, 25, 40)$:
        *   $\operatorname{lcm}(15, 25, 40) = 2^3 \times 3 \times 5^2 = 8 \times 3 \times 25 = 600$.
    *   $\gcd(28, 35)$:
        *   $28 = 2^2 \times 7$
        *   $35 = 5 \times 7$
        *   $\gcd(28, 35) = 7$.
        *   $\operatorname{lcm}(28, 35) = (28 \times 35) / 7 = 980 / 7 = 140$.

4.  **Modular Arithmetic:**
    *   Is $37 \equiv 5 \pmod{8}$? Yes, because $37 - 5 = 32$, and $8 | 32$. (Also, $37 = 4 \times 8 + 5$, so 37 has remainder 5 when divided by 8).
    *   Find an integer $x$ such that $x \equiv 15 \pmod{7}$ and $0 \le x < 7$.
        *   $15 = 2 \times 7 + 1$. So, $15 \equiv 1 \pmod{7}$.
        *   Therefore, $x = 1$.
    *   Given $a \equiv 3 \pmod{11}$ and $b \equiv 5 \pmod{11}$:
        *   $a+b \pmod{11}$: $3+5 = 8$. So, $a+b \equiv 8 \pmod{11}$.
        *   $a \times b \pmod{11}$: $3 \times 5 = 15$. $15 = 1 \times 11 + 4$. So, $a \times b \equiv 4 \pmod{11}$.

---

### Important Points to Remember

*   **Integers** are the core of number theory.
*   **Divisibility** is defined as $a|b$ if $b = ak$ for some integer $k$.
*   **Prime numbers** are integers greater than 1 with only two positive divisors: 1 and themselves.
*   **Composite numbers** are integers greater than 1 that are not prime.
*   The **Fundamental Theorem of Arithmetic** guarantees unique prime factorization for integers greater than 1.
*   The **GCD** is the largest common positive divisor.
*   The **LCM** is the smallest common positive multiple.
*   The relationship $|a \times b| = \gcd(a, b) \times \operatorname{lcm}(a, b)$ is crucial.
*   **Modular arithmetic** ($a \equiv b \pmod{n}$) is about remainders.
*   Congruences can be added, subtracted, and multiplied. Division requires careful handling (modular inverses).

---
