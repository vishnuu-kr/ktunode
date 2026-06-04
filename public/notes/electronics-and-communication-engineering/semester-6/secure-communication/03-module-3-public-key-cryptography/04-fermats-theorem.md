---
title: "Fermat’s theorem"
subject: "SECURE COMMUNICATION"
module: "Module 3: Public Key Cryptography: "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee87"
status: "completed"
scrapedAt: "2026-05-23T18:03:08.549Z"
---
# SECURE COMMUNICATION: Module 3: Public Key Cryptography

## Topic: Fermat's Theorem

---

### 1. Introduction to Number Theory in Cryptography

Public Key Cryptography relies heavily on number theory concepts. Understanding these foundational principles is crucial for grasping how algorithms like RSA work. Modular arithmetic, prime numbers, and number theoretic theorems form the bedrock of this field.

**Key Concepts:**

*   **Modular Arithmetic:** A system of arithmetic for integers, where numbers "wrap around" upon reaching a certain value—the modulus.
    *   **Definition:** $a \equiv b \pmod{n}$ means that $n$ divides $(a-b)$, or equivalently, $a$ and $b$ have the same remainder when divided by $n$.
    *   **Properties:**
        *   $(a + b) \pmod{n} = ((a \pmod{n}) + (b \pmod{n})) \pmod{n}$
        *   $(a \times b) \pmod{n} = ((a \pmod{n}) \times (b \pmod{n})) \pmod{n}$
*   **Prime Number:** A natural number greater than 1 that has no positive divisors other than 1 and itself.
*   **Relatively Prime (Coprime):** Two integers $a$ and $b$ are relatively prime if their greatest common divisor (GCD) is 1, i.e., $\text{gcd}(a, b) = 1$.

**Reference:** *Cryptography and Network Security: Principles and Practice* by William Stallings (Chapter 1, "Introduction to Number Theory"). This chapter provides a solid foundation in the modular arithmetic and number theory concepts essential for cryptography.

---

### 2. Fermat's Little Theorem

Fermat's Little Theorem is a fundamental result in number theory with significant applications in cryptography, particularly in primality testing and within the RSA algorithm.

**Learning Outcome:**

*   Understanding the principles of public key cryptography, which includes the mathematical foundations upon which these systems are built. (Aligns with CO3)

**Key Concepts and Definitions:**

*   **Fermat's Little Theorem:** If $p$ is a prime number, then for any integer $a$ not divisible by $p$, we have:
    $$a^{p-1} \equiv 1 \pmod{p}$$
    Alternatively, for any integer $a$ and prime $p$:
    $$a^p \equiv a \pmod{p}$$

**Explanation:**

The theorem states that if you raise an integer 'a' to the power of a prime number 'p', and then take the result modulo 'p', the answer will be the same as 'a' itself. The first form is more commonly used in cryptographic contexts, highlighting the property of modular exponentiation with prime moduli.

**Example:**

Let $p = 5$ (a prime number) and $a = 3$ (not divisible by 5).
According to Fermat's Little Theorem:
$3^{5-1} \equiv 1 \pmod{5}$
$3^4 \equiv 1 \pmod{5}$

Let's calculate:
$3^1 = 3 \pmod{5}$
$3^2 = 9 \equiv 4 \pmod{5}$
$3^3 = 3 \times 4 = 12 \equiv 2 \pmod{5}$
$3^4 = 3 \times 2 = 6 \equiv 1 \pmod{5}$

The theorem holds true.

Now consider the alternative form: $a^p \equiv a \pmod{p}$
$3^5 \equiv 3 \pmod{5}$
$3^5 = 3^4 \times 3 \equiv 1 \times 3 \equiv 3 \pmod{5}$
This also holds true.

**Important Points to Remember:**

*   The theorem only applies when the modulus $p$ is a **prime number**.
*   The base $a$ must **not be divisible by $p$** for the first form of the theorem ($a^{p-1} \equiv 1 \pmod{p}$). If $a$ is divisible by $p$, then $a \equiv 0 \pmod{p}$, and $a^{p-1} \equiv 0 \pmod{p}$, which is not 1. However, the second form ($a^p \equiv a \pmod{p}$) holds for all integers $a$.

**Reference:** *Cryptography and Network Security* by Behrouz A. Forouzan (Chapter 2, "Number Theory and Cryptography"). Forouzan provides a good introduction to number theoretic concepts and their applications, including Fermat's Little Theorem.

---

### 3. Applications of Fermat's Little Theorem in Cryptography

Fermat's Little Theorem is not just a theoretical curiosity; it has practical applications in secure communication.

**Learning Outcomes:**

*   Applying the concepts of modular arithmetic. (Aligns with CO1)
*   Outlining the concepts of public key cryptography. (Aligns with CO3)

**Key Applications:**

*   **Primality Testing:**
    *   Fermat's Little Theorem can be used to probabilistically test if a number is prime. If we pick a random integer $a$ and find that $a^{n-1} \not\equiv 1 \pmod{n}$ for a composite number $n$, then $n$ is definitely composite.
    *   However, there are composite numbers (Carmichael numbers) for which $a^{n-1} \equiv 1 \pmod{n}$ holds for all $a$ coprime to $n$. This means Fermat's Little Theorem alone is not a foolproof primality test. More sophisticated tests like Miller-Rabin are required.

*   **Modular Inverse Calculation:**
    *   If $p$ is prime, and $a$ is not divisible by $p$, then $a^{p-1} \equiv 1 \pmod{p}$.
    *   Multiplying both sides by $a^{-1}$ (the modular multiplicative inverse of $a$ modulo $p$), we get:
        $a^{p-2} \times a \times a^{-1} \equiv 1 \times a^{-1} \pmod{p}$
        $a^{p-2} \equiv a^{-1} \pmod{p}$
    *   This means $a^{p-2} \pmod{p}$ is the modular multiplicative inverse of $a$ modulo $p$. This is useful in many cryptographic algorithms.

*   **Foundation for RSA:**
    *   While not directly used in the core encryption/decryption steps of RSA, the mathematical principles behind RSA, especially Euler's Totient Theorem (a generalization of Fermat's Little Theorem), rely on similar number theoretic properties. Understanding Fermat's Little Theorem is a stepping stone to understanding these more general theorems.

**Example (Modular Inverse):**

Find the modular inverse of $a = 3$ modulo $p = 7$.
Using Fermat's Little Theorem, the inverse should be $a^{p-2} \pmod{p} = 3^{7-2} \pmod{7} = 3^5 \pmod{7}$.

Let's calculate:
$3^1 = 3 \pmod{7}$
$3^2 = 9 \equiv 2 \pmod{7}$
$3^3 = 3 \times 2 = 6 \pmod{7}$
$3^4 = 3 \times 6 = 18 \equiv 4 \pmod{7}$
$3^5 = 3 \times 4 = 12 \equiv 5 \pmod{7}$

So, $3^{-1} \equiv 5 \pmod{7}$.
Let's verify: $3 \times 5 = 15 \equiv 1 \pmod{7}$. It works.

**Reference:** *Cryptography and Network Security: Principles and Practice* by William Stallings (Chapter 14, "Public-Key Cryptography and RSA"). Stallings' text often elaborates on how number theory underpins public-key systems.

---

### 4. Fermat's Theorem and Euler's Totient Theorem

Fermat's Little Theorem is a special case of Euler's Totient Theorem.

**Learning Outcomes:**

*   Applying the concepts of modular arithmetic. (Aligns with CO1)
*   Outlining the concepts of public key cryptography. (Aligns with CO3)

**Key Concepts and Definitions:**

*   **Euler's Totient Function ($\phi(n)$):** For a positive integer $n$, $\phi(n)$ is the number of positive integers less than or equal to $n$ that are relatively prime to $n$.
*   **Euler's Totient Theorem:** If $a$ and $n$ are relatively prime integers (i.e., $\text{gcd}(a, n) = 1$), then:
    $$a^{\phi(n)} \equiv 1 \pmod{n}$$

**Relationship between Fermat's Little Theorem and Euler's Totient Theorem:**

If $n$ is a prime number $p$, then $\phi(p) = p-1$ (since all numbers from 1 to $p-1$ are relatively prime to $p$).
Substituting $n=p$ into Euler's Totient Theorem, we get:
$a^{\phi(p)} \equiv 1 \pmod{p}$
$a^{p-1} \equiv 1 \pmod{p}$
This is exactly Fermat's Little Theorem.

**Example:**

Let $n = 10$. We need to find $\phi(10)$.
The numbers less than or equal to 10 and relatively prime to 10 are: 1, 3, 7, 9.
So, $\phi(10) = 4$.
Euler's Totient Theorem states that if $\text{gcd}(a, 10) = 1$, then $a^4 \equiv 1 \pmod{10}$.

Let's test with $a = 3$ (since $\text{gcd}(3, 10) = 1$):
$3^1 = 3 \pmod{10}$
$3^2 = 9 \pmod{10}$
$3^3 = 27 \equiv 7 \pmod{10}$
$3^4 = 3 \times 7 = 21 \equiv 1 \pmod{10}$
The theorem holds.

**Reference:** *Abstract Algebra* by David S. Dummit & Richard M Foote, or *A course in Number Theory and Cryptography* by N. Koeblitz. These advanced texts provide rigorous proofs and deeper insights into Euler's Totient Theorem and its relationship to group theory. *Elementary Number Theory with Applications* by Thomas Koshy is also an excellent resource for understanding these concepts.

---

### 5. Practice Questions and Exercises

**Question 1:**
State Fermat's Little Theorem.

**Answer:**
If $p$ is a prime number, then for any integer $a$ not divisible by $p$, $a^{p-1} \equiv 1 \pmod{p}$.

**Question 2:**
Verify Fermat's Little Theorem for $p=7$ and $a=2$.

**Answer:**
We need to check if $2^{7-1} \equiv 1 \pmod{7}$, which means $2^6 \equiv 1 \pmod{7}$.
$2^1 = 2 \pmod{7}$
$2^2 = 4 \pmod{7}$
$2^3 = 8 \equiv 1 \pmod{7}$
$2^6 = (2^3)^2 \equiv 1^2 \equiv 1 \pmod{7}$.
The theorem holds.

**Question 3:**
Using Fermat's Little Theorem, find the modular inverse of $a=5$ modulo $p=11$.

**Answer:**
According to Fermat's Little Theorem, $a^{p-2} \equiv a^{-1} \pmod{p}$.
Here, $a=5$ and $p=11$.
So, $5^{-1} \equiv 5^{11-2} \pmod{11} \equiv 5^9 \pmod{11}$.
Let's calculate $5^9 \pmod{11}$:
$5^1 = 5 \pmod{11}$
$5^2 = 25 \equiv 3 \pmod{11}$
$5^3 = 5 \times 3 = 15 \equiv 4 \pmod{11}$
$5^4 = 5 \times 4 = 20 \equiv 9 \pmod{11}$
$5^5 = 5 \times 9 = 45 \equiv 1 \pmod{11}$ (Note: $5^{\phi(11)} = 5^{10} \equiv 1 \pmod{11}$, so $5^5$ is its own inverse and also $5^{10} = (5^5)^2 \equiv 1^2 \equiv 1 \pmod{11}$)
$5^9 = 5^5 \times 5^4 \equiv 1 \times 9 \equiv 9 \pmod{11}$.
Therefore, $5^{-1} \equiv 9 \pmod{11}$.
Verification: $5 \times 9 = 45 = 4 \times 11 + 1 \equiv 1 \pmod{11}$.

**Question 4:**
If $p$ is a prime number, what is the value of $a^p \pmod{p}$ for any integer $a$?

**Answer:**
According to the alternative form of Fermat's Little Theorem, $a^p \equiv a \pmod{p}$ for any integer $a$ and prime $p$.

**Question 5:**
Consider the number $n=9$. Is $2^{n-1} \equiv 1 \pmod{n}$ true? What does this tell us about $n=9$ regarding Fermat's Little Theorem?

**Answer:**
We need to check if $2^{9-1} \equiv 1 \pmod{9}$, which is $2^8 \equiv 1 \pmod{9}$.
$2^1 = 2 \pmod{9}$
$2^2 = 4 \pmod{9}$
$2^3 = 8 \pmod{9}$
$2^4 = 16 \equiv 7 \pmod{9}$
$2^5 = 2 \times 7 = 14 \equiv 5 \pmod{9}$
$2^6 = 2 \times 5 = 10 \equiv 1 \pmod{9}$
$2^8 = 2^6 \times 2^2 \equiv 1 \times 4 \equiv 4 \pmod{9}$.
So, $2^8 \not\equiv 1 \pmod{9}$.
This tells us that since $2^{n-1} \not\equiv 1 \pmod{n}$, $n=9$ is definitely a composite number. Fermat's Little Theorem's first form fails for $n=9$ with $a=2$ because $n$ is not prime.

---

### 6. Summary and Key Takeaways

*   **Fermat's Little Theorem** is a foundational theorem in number theory with practical applications in cryptography.
*   It states that for a **prime** $p$ and an integer $a$ not divisible by $p$, $a^{p-1} \equiv 1 \pmod{p}$.
*   An equivalent form is $a^p \equiv a \pmod{p}$ for any integer $a$ and prime $p$.
*   Crucially, the theorem's validity relies on the modulus being **prime**.
*   It can be used to **calculate modular inverses** ($a^{-1} \equiv a^{p-2} \pmod{p}$ for prime $p$).
*   It forms the basis for **probabilistic primality testing**, though it's not sufficient on its own due to Carmichael numbers.
*   It is a special case of **Euler's Totient Theorem**, where $n$ is a prime number $p$.
*   Understanding Fermat's Little Theorem is an important step towards understanding more complex public-key cryptosystems like RSA, which are built upon modular arithmetic and number theoretic properties.

---
This concludes the study notes on Fermat's Theorem for Module 3 of Secure Communication.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
