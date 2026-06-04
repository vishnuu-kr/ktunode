---
title: "Fermat’s Theorem"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 2: Prime numbers and Prime Factorisation "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf0d"
status: "completed"
scrapedAt: "2026-05-20T16:53:32.636Z"
---
# Foundations of Cryptography: Module 2 - Prime Numbers and Prime Factorisation

## Topic: Fermat's Little Theorem

### Learning Outcomes:

By the end of this topic, you will be able to:

*   State Fermat's Little Theorem.
*   Understand the conditions under which Fermat's Little Theorem applies.
*   Apply Fermat's Little Theorem to simplify modular exponentiation.
*   Recognize the limitations of Fermat's Little Theorem and its implications for primality testing.

---

### 1. Introduction to Fermat's Little Theorem

Fermat's Little Theorem is a fundamental result in number theory with significant applications in cryptography, particularly in modular arithmetic. It provides a relationship between powers of integers modulo a prime number.

**Key Concept:** Modular Arithmetic
Modular arithmetic deals with remainders after division. The expression $a \pmod{n}$ represents the remainder when $a$ is divided by $n$.

**Definition:** Congruence
We say that $a$ is congruent to $b$ modulo $n$, written as $a \equiv b \pmod{n}$, if $a$ and $b$ have the same remainder when divided by $n$. This is equivalent to saying that $n$ divides $(a - b)$.

---

### 2. Statement of Fermat's Little Theorem

**Fermat's Little Theorem states:**

If $p$ is a prime number, then for any integer $a$ not divisible by $p$, we have:

$a^{p-1} \equiv 1 \pmod{p}$

**An alternative, and often more useful, form of the theorem is:**

If $p$ is a prime number, then for any integer $a$, we have:

$a^p \equiv a \pmod{p}$

**Why are these equivalent?**

If $a$ is not divisible by $p$, we can multiply both sides of $a^p \equiv a \pmod{p}$ by the modular multiplicative inverse of $a$ modulo $p$. Since $p$ is prime and $a$ is not divisible by $p$, such an inverse exists. Multiplying by $a^{-1}$ (modulo $p$) gives:

$a^p \cdot a^{-1} \equiv a \cdot a^{-1} \pmod{p}$
$a^{p-1} \equiv 1 \pmod{p}$

This shows that the two forms are equivalent when $p$ does not divide $a$. The second form ($a^p \equiv a \pmod{p}$) holds even when $p$ divides $a$ (because both sides will be $0 \pmod{p}$).

---

### 3. Conditions for Applying Fermat's Little Theorem

The conditions for Fermat's Little Theorem to hold are crucial:

*   **$p$ must be a prime number.** This is the most important condition. If $p$ is composite, the theorem does not necessarily hold.
*   **If using the form $a^{p-1} \equiv 1 \pmod{p}$, then $a$ must not be divisible by $p$.** This means $a \not\equiv 0 \pmod{p}$.

---

### 4. Proof of Fermat's Little Theorem (for the $a^p \equiv a \pmod{p}$ form)

A common and intuitive proof uses the concept of the set of residues.

**Proof using the set of non-zero residues:**

Let $p$ be a prime number. Consider the set of integers $\{1, 2, 3, \dots, p-1\}$. These are the $p-1$ non-zero residues modulo $p$.

Now consider the set of integers $\{1 \cdot a, 2 \cdot a, 3 \cdot a, \dots, (p-1) \cdot a\}$.

**Claim:** The set $\{1 \cdot a, 2 \cdot a, 3 \cdot a, \dots, (p-1) \cdot a\}$ is congruent to the set $\{1, 2, 3, \dots, p-1\}$ modulo $p$, in some order, provided $p$ does not divide $a$.

**Reasoning:**
1.  **No two elements in the second set are congruent modulo $p$:** Suppose $(i \cdot a) \equiv (j \cdot a) \pmod{p}$ for $1 \leq i, j \leq p-1$. Since $p$ is prime and does not divide $a$, we can multiply both sides by $a^{-1} \pmod{p}$ (which exists). This gives $i \equiv j \pmod{p}$. Since $1 \leq i, j \leq p-1$, this implies $i = j$. So, all elements in the second set are distinct modulo $p$.
2.  **None of the elements in the second set are congruent to $0 \pmod{p}$:** Since $p$ is prime and does not divide $a$, and $1 \leq i \leq p-1$, $p$ cannot divide $i \cdot a$. Thus, $i \cdot a \not\equiv 0 \pmod{p}$.

Since the $p-1$ elements $\{1 \cdot a, 2 \cdot a, \dots, (p-1) \cdot a\}$ are distinct and non-zero modulo $p$, they must be a permutation of the set $\{1, 2, \dots, p-1\}$ modulo $p$.

Therefore, the product of the elements in both sets must be congruent modulo $p$:

$(1 \cdot a) \cdot (2 \cdot a) \cdot (3 \cdot a) \cdot \dots \cdot ((p-1) \cdot a) \equiv 1 \cdot 2 \cdot 3 \cdot \dots \cdot (p-1) \pmod{p}$

$a^{p-1} \cdot (1 \cdot 2 \cdot 3 \cdot \dots \cdot (p-1)) \equiv (1 \cdot 2 \cdot 3 \cdot \dots \cdot (p-1)) \pmod{p}$

Let $X = (p-1)!$. We have $a^{p-1} \cdot X \equiv X \pmod{p}$.

Since $p$ is prime, $p$ does not divide any integer from $1$ to $p-1$. Thus, $p$ does not divide their product $X = (p-1)!$. This means $\gcd(X, p) = 1$, and $X$ has a modular multiplicative inverse modulo $p$.

We can multiply both sides by $X^{-1} \pmod{p}$:

$a^{p-1} \cdot X \cdot X^{-1} \equiv X \cdot X^{-1} \pmod{p}$
$a^{p-1} \equiv 1 \pmod{p}$

This proves the first form of the theorem. The second form $a^p \equiv a \pmod{p}$ follows as shown earlier.

---

### 5. Applications of Fermat's Little Theorem

Fermat's Little Theorem is immensely useful in simplifying calculations involving large exponents in modular arithmetic.

#### 5.1. Simplifying Modular Exponentiation

When calculating $a^k \pmod{p}$ where $p$ is prime, we can use Fermat's Little Theorem to reduce the exponent $k$.

If $a$ is not divisible by $p$, we know $a^{p-1} \equiv 1 \pmod{p}$.
Let $k = q(p-1) + r$, where $q$ is the quotient and $r$ is the remainder when $k$ is divided by $(p-1)$. So, $0 \leq r < p-1$.

Then,
$a^k = a^{q(p-1) + r} = (a^{p-1})^q \cdot a^r$

Taking this modulo $p$:
$a^k \equiv (a^{p-1})^q \cdot a^r \pmod{p}$

Since $a^{p-1} \equiv 1 \pmod{p}$:
$a^k \equiv (1)^q \cdot a^r \pmod{p}$
$a^k \equiv a^r \pmod{p}$

This means we only need to compute $a^r \pmod{p}$, where $r$ is the remainder of $k$ divided by $p-1$. This significantly reduces the size of the exponent.

**Example:** Calculate $3^{100} \pmod{7}$.

Here, $a=3$, $p=7$ (which is prime). $p-1 = 6$.
We need to find the remainder of $100$ when divided by $6$.
$100 = 16 \cdot 6 + 4$. So, $r=4$.

By Fermat's Little Theorem:
$3^{100} \equiv 3^4 \pmod{7}$

Now, calculate $3^4 \pmod{7}$:
$3^1 \equiv 3 \pmod{7}$
$3^2 \equiv 9 \equiv 2 \pmod{7}$
$3^3 \equiv 3 \cdot 2 \equiv 6 \pmod{7}$
$3^4 \equiv 3 \cdot 6 \equiv 18 \equiv 4 \pmod{7}$

So, $3^{100} \equiv 4 \pmod{7}$.

**Example:** Calculate $5^{75} \pmod{11}$.

Here, $a=5$, $p=11$ (prime). $p-1 = 10$.
We need the remainder of $75$ when divided by $10$.
$75 = 7 \cdot 10 + 5$. So, $r=5$.

By Fermat's Little Theorem:
$5^{75} \equiv 5^5 \pmod{11}$

Now, calculate $5^5 \pmod{11}$:
$5^1 \equiv 5 \pmod{11}$
$5^2 \equiv 25 \equiv 3 \pmod{11}$
$5^3 \equiv 5 \cdot 3 \equiv 15 \equiv 4 \pmod{11}$
$5^4 \equiv 5 \cdot 4 \equiv 20 \equiv 9 \pmod{11}$
$5^5 \equiv 5 \cdot 9 \equiv 45 \equiv 1 \pmod{11}$

So, $5^{75} \equiv 1 \pmod{11}$.

#### 5.2. Primality Testing (Fermat Primality Test)

Fermat's Little Theorem can be used as a basis for a probabilistic primality test.

**Fermat Primality Test:**
To test if an integer $n$ is prime, choose a random integer $a$ such that $1 < a < n$.
Calculate $a^{n-1} \pmod{n}$.
*   If $a^{n-1} \not\equiv 1 \pmod{n}$, then $n$ is definitely **composite**.
*   If $a^{n-1} \equiv 1 \pmod{n}$, then $n$ is **probably prime**.

**Explanation:** If $n$ were prime, then Fermat's Little Theorem guarantees that $a^{n-1} \equiv 1 \pmod{n}$ for any $a$ not divisible by $n$. If we find an $a$ for which this congruence does not hold, we have proven $n$ is composite.

However, if the congruence *does* hold, it doesn't definitively prove primality. There exist composite numbers called **Carmichael numbers** for which $a^{n-1} \equiv 1 \pmod{n}$ holds for all integers $a$ coprime to $n$.

**Example:** Test if $n=7$ is prime using $a=2$.
Calculate $2^{7-1} \pmod{7} = 2^6 \pmod{7}$.
$2^1 \equiv 2 \pmod{7}$
$2^2 \equiv 4 \pmod{7}$
$2^3 \equiv 8 \equiv 1 \pmod{7}$
$2^6 \equiv (2^3)^2 \equiv 1^2 \equiv 1 \pmod{7}$.
Since $2^6 \equiv 1 \pmod{7}$, $7$ is probably prime (and we know it is).

**Example:** Test if $n=9$ is prime using $a=2$.
Calculate $2^{9-1} \pmod{9} = 2^8 \pmod{9}$.
$2^1 \equiv 2 \pmod{9}$
$2^2 \equiv 4 \pmod{9}$
$2^3 \equiv 8 \pmod{9}$
$2^4 \equiv 16 \equiv 7 \pmod{9}$
$2^8 \equiv (2^4)^2 \equiv 7^2 \equiv 49 \equiv 4 \pmod{9}$.
Since $2^8 \not\equiv 1 \pmod{9}$, $9$ is definitely composite.

**Important Note on Fermat Primality Test:**
To increase confidence, the test is usually repeated with multiple random choices of $a$. If $n$ passes the test for many different values of $a$, it is highly likely to be prime. However, Carmichael numbers will still fool this test for all coprime $a$. For stronger primality tests, algorithms like Miller-Rabin are used.

---

### 6. Limitations and Important Points to Remember

*   **Primality of $p$ is essential:** The theorem *only* works if $p$ is prime. If $p$ is composite, the congruence may or may not hold.
    *   **Example:** Consider $n=4$ (composite) and $a=3$.
        $a^{n-1} \equiv 3^{4-1} \equiv 3^3 \equiv 27 \equiv 3 \pmod{4}$.
        Here, $3 \not\equiv 1 \pmod{4}$, so the theorem fails.
    *   **Example:** Consider $n=6$ (composite) and $a=5$.
        $a^{n-1} \equiv 5^{6-1} \equiv 5^5 \pmod{6}$.
        $5 \equiv -1 \pmod{6}$.
        $5^5 \equiv (-1)^5 \equiv -1 \equiv 5 \pmod{6}$.
        Here, $5 \not\equiv 1 \pmod{6}$, so the theorem fails.
*   **Carmichael Numbers:** These are composite numbers $n$ that satisfy $a^{n-1} \equiv 1 \pmod{n}$ for all integers $a$ such that $\gcd(a, n) = 1$. The smallest Carmichael number is $561 = 3 \times 11 \times 17$. This is why the Fermat Primality Test is probabilistic.
*   **Generalization (Euler's Totient Theorem):** Fermat's Little Theorem is a special case of Euler's Totient Theorem. Euler's theorem states that if $\gcd(a, n) = 1$, then $a^{\phi(n)} \equiv 1 \pmod{n}$, where $\phi(n)$ is Euler's totient function (the number of positive integers less than or equal to $n$ that are relatively prime to $n$). If $n=p$ is prime, then $\phi(p) = p-1$, and Euler's theorem reduces to Fermat's Little Theorem.

---

### 7. Practice Questions

1.  State Fermat's Little Theorem in its two common forms.
2.  For which of the following congruences can you directly apply Fermat's Little Theorem to simplify the left side?
    *   $3^{10} \pmod{11}$
    *   $5^{12} \pmod{13}$
    *   $7^{15} \pmod{10}$
    *   $2^{16} \pmod{17}$
3.  Calculate $2^{100} \pmod{5}$.
4.  Calculate $7^{30} \pmod{29}$.
5.  Use Fermat's Little Theorem to determine if $n=221$ is prime by testing $a=5$. Show your calculation.
6.  Explain why $a^{n-1} \equiv 1 \pmod{n}$ holding for a single value of $a$ does not prove that $n$ is prime.

---

### 8. Answers to Practice Questions

1.  **Fermat's Little Theorem states:**
    *   If $p$ is a prime number, then for any integer $a$ not divisible by $p$, $a^{p-1} \equiv 1 \pmod{p}$.
    *   If $p$ is a prime number, then for any integer $a$, $a^p \equiv a \pmod{p}$.

2.  You can directly apply Fermat's Little Theorem to simplify:
    *   $3^{10} \pmod{11}$: Here $p=11$ (prime) and $p-1=10$. $3^{10} \equiv 1 \pmod{11}$.
    *   $5^{12} \pmod{13}$: Here $p=13$ (prime) and $p-1=12$. $5^{12} \equiv 1 \pmod{13}$.
    *   $2^{16} \pmod{17}$: Here $p=17$ (prime) and $p-1=16$. $2^{16} \equiv 1 \pmod{17}$.

    You **cannot** directly apply it to:
    *   $7^{15} \pmod{10}$: Here $n=10$ is not prime.

3.  Calculate $2^{100} \pmod{5}$.
    $p=5$ (prime), $p-1=4$.
    We need the remainder of $100$ when divided by $4$. $100 = 25 \times 4 + 0$. So, $r=0$.
    $2^{100} \equiv 2^0 \equiv 1 \pmod{5}$.
    (Alternatively, since $2^4 \equiv 1 \pmod{5}$, $2^{100} = (2^4)^{25} \equiv 1^{25} \equiv 1 \pmod{5}$).

4.  Calculate $7^{30} \pmod{29}$.
    $p=29$ (prime), $p-1=28$.
    We need the remainder of $30$ when divided by $28$. $30 = 1 \times 28 + 2$. So, $r=2$.
    $7^{30} \equiv 7^2 \pmod{29}$.
    $7^2 = 49$.
    $49 \equiv 20 \pmod{29}$.
    So, $7^{30} \equiv 20 \pmod{29}$.

5.  Use Fermat's Little Theorem to determine if $n=221$ is prime by testing $a=5$.
    We need to calculate $5^{221-1} \pmod{221} = 5^{220} \pmod{221}$.
    If $221$ were prime, this should be $1$.

    We can use the Chinese Remainder Theorem here, as $221 = 13 \times 17$.
    *   Modulo 13: $5^{220} \pmod{13}$.
        $p=13$, $p-1=12$.
        $220 = 18 \times 12 + 4$.
        $5^{220} \equiv 5^4 \pmod{13}$.
        $5^2 \equiv 25 \equiv -1 \pmod{13}$.
        $5^4 \equiv (-1)^2 \equiv 1 \pmod{13}$.

    *   Modulo 17: $5^{220} \pmod{17}$.
        $p=17$, $p-1=16$.
        $220 = 13 \times 16 + 12$.
        $5^{220} \equiv 5^{12} \pmod{17}$.
        $5^2 \equiv 25 \equiv 8 \pmod{17}$.
        $5^4 \equiv 8^2 \equiv 64 \equiv 13 \equiv -4 \pmod{17}$.
        $5^8 \equiv (-4)^2 \equiv 16 \equiv -1 \pmod{17}$.
        $5^{12} = 5^8 \cdot 5^4 \equiv (-1) \cdot (-4) \equiv 4 \pmod{17}$.

    Since $5^{220} \equiv 1 \pmod{13}$ and $5^{220} \equiv 4 \pmod{17}$, by the Chinese Remainder Theorem, there is no single residue modulo $221$ that satisfies both.
    More simply, since $5^{220} \not\equiv 1 \pmod{17}$, $221$ is definitely **composite**.

6.  Explain why $a^{n-1} \equiv 1 \pmod{n}$ holding for a single value of $a$ does not prove that $n$ is prime.
    Fermat's Little Theorem states that *if* $n$ is prime, *then* $a^{n-1} \equiv 1 \pmod{n}$ for all $a$ not divisible by $n$. The converse is not necessarily true. There exist composite numbers, called Carmichael numbers, for which $a^{n-1} \equiv 1 \pmod{n}$ holds for all $a$ coprime to $n$. Therefore, observing this congruence for a single value of $a$ only suggests that $n$ *might* be prime. To definitively prove $n$ is composite, one needs to find even one value of $a$ for which $a^{n-1} \not\equiv 1 \pmod{n}$.

---
This concludes the notes for Fermat's Little Theorem. Remember to practice these concepts to solidify your understanding.
