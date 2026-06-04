---
title: "Modular arithmetic"
subject: "SECURE COMMUNICATION"
module: "Module 1: Introduction and Classic Encryption Techniques:"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee74"
status: "completed"
scrapedAt: "2026-05-23T18:02:53.901Z"
---
# SECURE COMMUNICATION: Module 1: Introduction and Classic Encryption Techniques

## Topic: Modular Arithmetic

This module introduces the fundamental mathematical concepts that underpin cryptography. Modular arithmetic is a cornerstone of many cryptographic algorithms, enabling operations within a finite set of numbers.

### Learning Outcomes:

*   Understand the basic principles of modular arithmetic.
*   Perform operations (addition, subtraction, multiplication) in modular arithmetic.
*   Understand the concept of modular inverse and its importance.
*   Relate modular arithmetic to the principles of modern symmetric ciphers (implicitly, as it's a foundational concept).
*   Apply concepts of modular arithmetic in cryptographic contexts (as per CO1).

### Course Outcomes Addressed:

*   **CO1:** Explain network security services and mechanisms and the types of attacks they are designed for and apply the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic. (Knowledge Level: K3)
    *   This topic directly contributes to applying modular arithmetic.

### Key Concepts and Definitions:

#### 1. Integers and Divisibility

*   **Integer:** A whole number (positive, negative, or zero). Examples: ..., -3, -2, -1, 0, 1, 2, 3, ...
*   **Divisibility:** An integer 'a' divides an integer 'b' (written as $a|b$) if there exists an integer 'c' such that $b = ac$.
    *   *Example:* $3|12$ because $12 = 3 \times 4$.
    *   *Example:* $5$ does not divide $12$.

#### 2. Modular Arithmetic

Modular arithmetic is a system of arithmetic for integers, where numbers "wrap around" when they reach a certain value—the modulus.

*   **Definition:** For integers $a$ and $n$ with $n > 0$, we say that $a$ is **congruent to** $b$ **modulo** $n$ if $(a-b)$ is divisible by $n$. This is written as:
    $$a \equiv b \pmod{n}$$
    *   This means that $a$ and $b$ have the same remainder when divided by $n$.
    *   The modulus $n$ is a positive integer.

*   **Equivalent Forms:**
    *   $a \equiv b \pmod{n}$
    *   $a - b = kn$ for some integer $k$.
    *   $a = b + kn$ for some integer $k$.
    *   $a \pmod{n} = b \pmod{n}$ (where $a \pmod{n}$ denotes the remainder of $a$ divided by $n$).

*   **Remainders (Residues):**
    *   The **least non-negative residue** of $a$ modulo $n$ is the remainder when $a$ is divided by $n$. This value will be in the range $[0, n-1]$.
    *   The set of all possible remainders modulo $n$ is $\{0, 1, 2, \dots, n-1\}$. This set is often called the **residue system** modulo $n$.

*   **Example:**
    *   $17 \equiv 2 \pmod{5}$ because $17 - 2 = 15$, and $5|15$.
    *   $17 \div 5 = 3$ with a remainder of $2$. So, $17 \pmod{5} = 2$.
    *   $2 \pmod{5} = 2$.
    *   $22 \equiv 2 \pmod{5}$ because $22 - 2 = 20$, and $5|20$. ($22 \div 5 = 4$ with a remainder of $2$).
    *   $-3 \equiv 2 \pmod{5}$ because $-3 - 2 = -5$, and $5|-5$. ($-3 \div 5 = -1$ with a remainder of $2$, if we consider the definition carefully).

#### 3. Properties of Modular Arithmetic

If $a \equiv b \pmod{n}$ and $c \equiv d \pmod{n}$, then:

*   **Addition:** $a+c \equiv b+d \pmod{n}$
*   **Subtraction:** $a-c \equiv b-d \pmod{n}$
*   **Multiplication:** $ac \equiv bd \pmod{n}$

These properties allow us to perform arithmetic operations on remainders.

#### 4. Modular Arithmetic Operations

We often work with the set of residues $\{0, 1, 2, \dots, n-1\}$.

*   **Modular Addition:** To find $(a+b) \pmod{n}$, we can add $a$ and $b$ as usual and then find the remainder when divided by $n$.
    *   *Example:* $(13 + 19) \pmod{5}$
        *   $13 \equiv 3 \pmod{5}$
        *   $19 \equiv 4 \pmod{5}$
        *   $(13 + 19) \equiv (3 + 4) \pmod{5}$
        *   $32 \equiv 7 \pmod{5}$
        *   $7 \equiv 2 \pmod{5}$
        *   So, $(13 + 19) \pmod{5} = 2$.

*   **Modular Subtraction:** To find $(a-b) \pmod{n}$, we can subtract $b$ from $a$ as usual and then find the remainder when divided by $n$. Be careful with negative results – always ensure the final answer is the least non-negative residue.
    *   *Example:* $(13 - 19) \pmod{5}$
        *   $13 \equiv 3 \pmod{5}$
        *   $19 \equiv 4 \pmod{5}$
        *   $(13 - 19) \equiv (3 - 4) \pmod{5}$
        *   $-6 \equiv -1 \pmod{5}$
        *   To get the least non-negative residue for $-1 \pmod{5}$, we can add multiples of 5: $-1 + 5 = 4$.
        *   So, $(13 - 19) \pmod{5} = 4$.

*   **Modular Multiplication:** To find $(a \times b) \pmod{n}$, we can multiply $a$ and $b$ as usual and then find the remainder when divided by $n$.
    *   *Example:* $(13 \times 19) \pmod{5}$
        *   $13 \equiv 3 \pmod{5}$
        *   $19 \equiv 4 \pmod{5}$
        *   $(13 \times 19) \equiv (3 \times 4) \pmod{5}$
        *   $247 \equiv 12 \pmod{5}$
        *   $12 \equiv 2 \pmod{5}$
        *   So, $(13 \times 19) \pmod{5} = 2$.

*   **Modular Exponentiation:** Calculating $a^b \pmod{n}$ is crucial in cryptography. Direct calculation of $a^b$ can result in very large numbers. We use the property $(a \times b) \pmod{n} = ((a \pmod{n}) \times (b \pmod{n})) \pmod{n}$ repeatedly. The **square-and-multiply** algorithm (also known as binary exponentiation) is an efficient method for this.
    *   *Example:* Calculate $3^6 \pmod{7}$.
        *   $3^1 \equiv 3 \pmod{7}$
        *   $3^2 \equiv (3 \times 3) \equiv 9 \equiv 2 \pmod{7}$
        *   $3^3 \equiv (3^2 \times 3) \equiv (2 \times 3) \equiv 6 \pmod{7}$
        *   $3^4 \equiv (3^2 \times 3^2) \equiv (2 \times 2) \equiv 4 \pmod{7}$
        *   $3^5 \equiv (3^4 \times 3) \equiv (4 \times 3) \equiv 12 \equiv 5 \pmod{7}$
        *   $3^6 \equiv (3^3 \times 3^3) \equiv (6 \times 6) \equiv 36 \equiv 1 \pmod{7}$
        *   Alternatively, using square-and-multiply: $6 = 110_2$ (binary)
            *   $3^{2^0} = 3^1 \equiv 3 \pmod{7}$
            *   $3^{2^1} = (3^1)^2 \equiv 3^2 \equiv 9 \equiv 2 \pmod{7}$
            *   $3^{2^2} = (3^2)^2 \equiv 2^2 \equiv 4 \pmod{7}$
            *   $3^6 = 3^{4} \times 3^{2}$ (from the binary representation of 6: $1 \times 2^2 + 1 \times 2^1 + 0 \times 2^0$)
            *   $3^6 \equiv 3^{2^2} \times 3^{2^1} \pmod{7}$
            *   $3^6 \equiv 4 \times 2 \pmod{7}$
            *   $3^6 \equiv 8 \equiv 1 \pmod{7}$

#### 5. Modular Inverse

*   **Definition:** The **multiplicative inverse** of an integer $a$ modulo $n$ is an integer $x$ such that:
    $$ax \equiv 1 \pmod{n}$$
    This inverse $x$ is often denoted as $a^{-1} \pmod{n}$.

*   **Existence:** A modular inverse $a^{-1} \pmod{n}$ exists if and only if $a$ and $n$ are **relatively prime**, meaning their greatest common divisor (GCD) is 1.
    *   $\text{gcd}(a, n) = 1 \iff a^{-1} \pmod{n}$ exists.

*   **Finding the Modular Inverse:**
    *   **Brute Force (for small moduli):** Test values of $x$ from $1$ to $n-1$ until $ax \equiv 1 \pmod{n}$.
        *   *Example:* Find the inverse of $3 \pmod{7}$.
            *   $3 \times 1 \equiv 3 \pmod{7}$
            *   $3 \times 2 \equiv 6 \pmod{7}$
            *   $3 \times 3 \equiv 9 \equiv 2 \pmod{7}$
            *   $3 \times 4 \equiv 12 \equiv 5 \pmod{7}$
            *   $3 \times 5 \equiv 15 \equiv 1 \pmod{7}$. So, $3^{-1} \equiv 5 \pmod{7}$.

    *   **Extended Euclidean Algorithm (EEA):** This is the standard and efficient method for finding modular inverses. The EEA finds integers $x$ and $y$ such that $ax + ny = \text{gcd}(a, n)$. If $\text{gcd}(a, n) = 1$, then $ax + ny = 1$. Taking this equation modulo $n$:
        $$ax + ny \equiv 1 \pmod{n}$$
        $$ax + 0 \equiv 1 \pmod{n}$$
        $$ax \equiv 1 \pmod{n}$$
        Thus, $x$ is the modular inverse of $a$ modulo $n$.

    *   *Example using EEA:* Find the inverse of $7 \pmod{26}$ (used in affine cipher).
        *   We want to find $x$ such that $7x \equiv 1 \pmod{26}$.
        *   Use the Euclidean Algorithm to find gcd(26, 7):
            *   $26 = 3 \times 7 + 5$
            *   $7 = 1 \times 5 + 2$
            *   $5 = 2 \times 2 + 1$
            *   $2 = 2 \times 1 + 0$.
            *   So, $\text{gcd}(26, 7) = 1$. An inverse exists.
        *   Now, work backwards to express 1 in the form $7x + 26y$:
            *   From $5 = 2 \times 2 + 1 \implies 1 = 5 - 2 \times 2$
            *   Substitute $2$ from $7 = 1 \times 5 + 2 \implies 2 = 7 - 1 \times 5$:
                $1 = 5 - 2 \times (7 - 1 \times 5)$
                $1 = 5 - 2 \times 7 + 2 \times 5$
                $1 = 3 \times 5 - 2 \times 7$
            *   Substitute $5$ from $26 = 3 \times 7 + 5 \implies 5 = 26 - 3 \times 7$:
                $1 = 3 \times (26 - 3 \times 7) - 2 \times 7$
                $1 = 3 \times 26 - 9 \times 7 - 2 \times 7$
                $1 = 3 \times 26 - 11 \times 7$
        *   We have $1 = (-11) \times 7 + 3 \times 26$.
        *   So, $7 \times (-11) \equiv 1 \pmod{26}$.
        *   The inverse is $-11 \pmod{26}$. To find the least non-negative residue: $-11 + 26 = 15$.
        *   Therefore, $7^{-1} \equiv 15 \pmod{26}$.
        *   Check: $7 \times 15 = 105$. $105 \div 26 = 4$ with remainder $1$. $105 \equiv 1 \pmod{26}$. Correct.

#### 6. Fermat's Little Theorem

*   **Statement:** If $p$ is a prime number, then for any integer $a$ not divisible by $p$, the following congruence holds:
    $$a^{p-1} \equiv 1 \pmod{p}$$
*   **Consequence:** For any integer $a$ and prime $p$, $a^p \equiv a \pmod{p}$.
*   **Application:** This theorem can be used to simplify modular exponentiation. If we need to compute $a^b \pmod{p}$, and $b$ is large, we can reduce the exponent modulo $p-1$.
    *   If $b = q(p-1) + r$, then $a^b = a^{q(p-1) + r} = (a^{p-1})^q \times a^r \equiv 1^q \times a^r \equiv a^r \pmod{p}$.
    *   *Example:* Calculate $3^{10} \pmod{7}$. Here $p=7$.
        *   We can write $10$ in terms of $p-1 = 6$: $10 = 1 \times 6 + 4$.
        *   So, $3^{10} \equiv 3^4 \pmod{7}$.
        *   $3^4 = 81$. $81 \div 7 = 11$ with remainder $4$.
        *   $81 \equiv 4 \pmod{7}$.
        *   Thus, $3^{10} \equiv 4 \pmod{7}$.

#### 7. Euler's Totient Theorem (Generalization of Fermat's Little Theorem)

*   **Euler's Totient Function ($\phi(n)$):** For a positive integer $n$, $\phi(n)$ is the count of positive integers less than or equal to $n$ that are relatively prime to $n$.
    *   If $p$ is prime, $\phi(p) = p-1$.
    *   If $p$ is prime and $k \ge 1$, $\phi(p^k) = p^k - p^{k-1} = p^k(1 - 1/p)$.
    *   If $\text{gcd}(m, n) = 1$, then $\phi(mn) = \phi(m)\phi(n)$ (multiplicative property).

*   **Statement:** If $a$ and $n$ are relatively prime integers (i.e., $\text{gcd}(a, n) = 1$), then:
    $$a^{\phi(n)} \equiv 1 \pmod{n}$$

*   **Application:** Similar to Fermat's Little Theorem, it allows reducing exponents in modular exponentiation. If $\text{gcd}(a, n) = 1$, then $a^b \equiv a^{b \pmod{\phi(n)}} \pmod{n}$.
    *   *Example:* Calculate $3^{10} \pmod{10}$.
        *   Here $n=10$. We need $\phi(10)$.
        *   $10 = 2 \times 5$. $\phi(10) = \phi(2) \times \phi(5) = (2-1) \times (5-1) = 1 \times 4 = 4$.
        *   We can reduce the exponent $10$ modulo $\phi(10)=4$.
        *   $10 \equiv 2 \pmod{4}$.
        *   So, $3^{10} \equiv 3^2 \pmod{10}$.
        *   $3^2 = 9$.
        *   $9 \equiv 9 \pmod{10}$.
        *   Thus, $3^{10} \equiv 9 \pmod{10}$.

### Relation to Cryptography (CO1):

Modular arithmetic is fundamental to many classical and modern cryptographic algorithms.

*   **Classic Ciphers:**
    *   **Caesar Cipher:** While simple substitution, the shift amount can be thought of modulo 26.
    *   **Affine Cipher:** Uses operations like $E(x) = (ax+b) \pmod{m}$ and $D(y) = a^{-1}(y-b) \pmod{m}$, where $m$ is the size of the alphabet (e.g., 26) and $a^{-1}$ is the modular multiplicative inverse.
*   **Modern Ciphers:**
    *   **RSA Algorithm (Public Key Cryptography):** Relies heavily on modular exponentiation ($m^e \pmod{n}$ and $c^d \pmod{n}$), modular inverse, and properties derived from number theory, particularly concerning large prime moduli.
    *   **Advanced Encryption Standard (AES):** Although primarily a symmetric cipher, operations within AES, such as the `MixColumns` transformation, involve arithmetic over a finite field (Galois Field $GF(2^8)$), which has properties analogous to modular arithmetic with polynomials.
    *   **Diffie-Hellman Key Exchange:** Uses modular exponentiation: $g^a \pmod{p}$ and $g^b \pmod{p}$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Textbook and Reference Material Integration:

*   **Stallings (Chapter 3):** Discusses number theory concepts essential for cryptography, including modular arithmetic, GCD, Euclidean algorithm, modular inverse, Fermat's Little Theorem, and Euler's Totient Theorem. The text emphasizes their application in algorithms like RSA.
*   **Forouzan (Chapter 10):** Covers number theory basics and modular arithmetic, explaining congruences, modular operations, modular inverse, and the Extended Euclidean Algorithm. It sets the stage for understanding public-key cryptography.
*   **Dummit & Foote:** Provides a rigorous mathematical foundation for abstract algebra, including rings and fields, of which $\mathbb{Z}_n$ (integers modulo $n$) is a prime example. This is more theoretical but deeply underpins the concepts.
*   **Stinson (Chapter 2):** Introduces the mathematical background, including basic number theory, modular arithmetic, prime numbers, and the Euclidean algorithm, as prerequisites for understanding modern cryptographic systems.
*   **Koshy (Chapter 4):** Focuses on divisibility and modular arithmetic, providing detailed explanations and numerous examples of congruences, properties, and applications, including modular inverse and Euclidean algorithm.

### Practice Questions:

1.  Calculate:
    a.  $25 \pmod{7}$
    b.  $100 \pmod{13}$
    c.  $-15 \pmod{8}$
    d.  $345 \pmod{19}$

2.  Given $a \equiv 5 \pmod{11}$ and $b \equiv 8 \pmod{11}$, calculate:
    a.  $(a+b) \pmod{11}$
    b.  $(a-b) \pmod{11}$
    c.  $(a \times b) \pmod{11}$

3.  Calculate $5^{10} \pmod{13}$.

4.  Find the modular inverse of $9 \pmod{14}$.

5.  Find the modular inverse of $11 \pmod{26}$ using the Extended Euclidean Algorithm.

6.  Using Fermat's Little Theorem, calculate $2^{20} \pmod{11}$.

7.  Using Euler's Totient Theorem, calculate $7^{30} \pmod{24}$.

### Answers to Practice Questions:

1.  a. $25 \equiv 4 \pmod{7}$ (since $25 = 3 \times 7 + 4$)
    b. $100 \equiv 9 \pmod{13}$ (since $100 = 7 \times 13 + 9$)
    c. $-15 \equiv 1 \pmod{8}$ (since $-15 = -2 \times 8 + 1$, or $-15 + 2 \times 8 = -15 + 16 = 1$)
    d. $345 \pmod{19}$
        $345 = 190 + 155 = 10 \times 19 + 155$
        $155 = 19 \times 8 + 3$ (since $19 \times 8 = 152$)
        $345 = 10 \times 19 + 8 \times 19 + 3 = 18 \times 19 + 3$
        So, $345 \equiv 3 \pmod{19}$.

2.  Given $a \equiv 5 \pmod{11}$ and $b \equiv 8 \pmod{11}$:
    a.  $(a+b) \equiv (5+8) \equiv 13 \equiv 2 \pmod{11}$
    b.  $(a-b) \equiv (5-8) \equiv -3 \equiv 8 \pmod{11}$ (since $-3 + 11 = 8$)
    c.  $(a \times b) \equiv (5 \times 8) \equiv 40 \equiv 7 \pmod{11}$ (since $40 = 3 \times 11 + 7$)

3.  Calculate $5^{10} \pmod{13}$.
    *   $5^1 \equiv 5 \pmod{13}$
    *   $5^2 \equiv 25 \equiv 12 \equiv -1 \pmod{13}$
    *   $5^4 \equiv (-1)^2 \equiv 1 \pmod{13}$
    *   $5^{10} = 5^{4 \times 2 + 2} = (5^4)^2 \times 5^2 \equiv 1^2 \times (-1) \equiv -1 \equiv 12 \pmod{13}$.

4.  Find the modular inverse of $9 \pmod{14}$.
    *   We need $9x \equiv 1 \pmod{14}$.
    *   Check $\text{gcd}(9, 14)$:
        *   $14 = 1 \times 9 + 5$
        *   $9 = 1 \times 5 + 4$
        *   $5 = 1 \times 4 + 1$. $\text{gcd}(9, 14) = 1$. Inverse exists.
    *   Using brute force (or EEA):
        *   $9 \times 1 = 9 \pmod{14}$
        *   $9 \times 2 = 18 \equiv 4 \pmod{14}$
        *   $9 \times 3 = 27 \equiv 13 \pmod{14}$
        *   $9 \times 4 = 36 \equiv 8 \pmod{14}$
        *   $9 \times 5 = 45 \equiv 3 \pmod{14}$
        *   $9 \times 6 = 54 \equiv 12 \pmod{14}$
        *   $9 \times 7 = 63 \equiv 7 \pmod{14}$
        *   $9 \times 8 = 72 \equiv 2 \pmod{14}$
        *   $9 \times 9 = 81 \equiv 11 \pmod{14}$
        *   $9 \times 10 = 90 \equiv 6 \pmod{14}$
        *   $9 \times 11 = 99 \equiv 1 \pmod{14}$.
    *   So, $9^{-1} \equiv 11 \pmod{14}$.

5.  Find the modular inverse of $11 \pmod{26}$ using the Extended Euclidean Algorithm.
    *   We want $11x \equiv 1 \pmod{26}$.
    *   Euclidean Algorithm for $\text{gcd}(26, 11)$:
        *   $26 = 2 \times 11 + 4$
        *   $11 = 2 \times 4 + 3$
        *   $4 = 1 \times 3 + 1$
        *   $3 = 3 \times 1 + 0$. $\text{gcd}(26, 11) = 1$.
    *   Work backwards:
        *   $1 = 4 - 1 \times 3$
        *   $1 = 4 - 1 \times (11 - 2 \times 4) = 4 - 11 + 2 \times 4 = 3 \times 4 - 11$
        *   $1 = 3 \times (26 - 2 \times 11) - 11 = 3 \times 26 - 6 \times 11 - 11$
        *   $1 = 3 \times 26 - 7 \times 11$
    *   So, $11 \times (-7) \equiv 1 \pmod{26}$.
    *   The inverse is $-7 \pmod{26}$.
    *   Least non-negative residue: $-7 + 26 = 19$.
    *   $11^{-1} \equiv 19 \pmod{26}$.
    *   Check: $11 \times 19 = 209$. $209 \div 26 = 8$ with remainder $1$. ($26 \times 8 = 208$). $209 \equiv 1 \pmod{26}$.

6.  Using Fermat's Little Theorem, calculate $2^{20} \pmod{11}$.
    *   $p=11$ is prime. $a=2$ is not divisible by $11$.
    *   By Fermat's Little Theorem, $2^{11-1} \equiv 2^{10} \equiv 1 \pmod{11}$.
    *   We want $2^{20} \pmod{11}$.
    *   $2^{20} = (2^{10})^2 \equiv 1^2 \equiv 1 \pmod{11}$.

7.  Using Euler's Totient Theorem, calculate $7^{30} \pmod{24}$.
    *   We need $\phi(24)$. $24 = 2^3 \times 3$.
    *   $\phi(24) = \phi(2^3) \times \phi(3) = (2^3 - 2^2) \times (3-1) = (8-4) \times 2 = 4 \times 2 = 8$.
    *   $\text{gcd}(7, 24) = 1$, so Euler's Totient Theorem applies.
    *   $7^{\phi(24)} \equiv 7^8 \equiv 1 \pmod{24}$.
    *   We want $7^{30} \pmod{24}$.
    *   Reduce the exponent $30$ modulo $\phi(24)=8$: $30 = 3 \times 8 + 6$.
    *   $7^{30} \equiv 7^6 \pmod{24}$.
    *   Calculate $7^6 \pmod{24}$:
        *   $7^1 \equiv 7 \pmod{24}$
        *   $7^2 \equiv 49 \equiv 1 \pmod{24}$ (since $49 = 2 \times 24 + 1$)
        *   $7^6 = (7^2)^3 \equiv 1^3 \equiv 1 \pmod{24}$.

### Important Points to Remember:

*   **Modulus is Key:** The modulus $n$ is always a positive integer.
*   **Residue Range:** The standard residue system is $\{0, 1, \dots, n-1\}$. Always return the result in this range.
*   **Negative Numbers:** When dealing with negative numbers modulo $n$, add multiples of $n$ until you get a non-negative result.
*   **Modular Inverse Existence:** An inverse of $a$ modulo $n$ exists only if $\text{gcd}(a, n) = 1$.
*   **Extended Euclidean Algorithm:** The most efficient way to find modular inverses.
*   **Fermat's Little Theorem and Euler's Totient Theorem:** Powerful tools for simplifying modular exponentiation, especially with large exponents. The latter is a generalization of the former.
*   **Foundation:** Modular arithmetic is not just an academic exercise; it's the bedrock of modern cryptography, enabling operations within finite sets that are crucial for security.

---