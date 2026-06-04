---
title: "Euclidian algorithm"
subject: "SECURE COMMUNICATION"
module: "Module 1: Introduction and Classic Encryption Techniques:"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee75"
status: "completed"
scrapedAt: "2026-05-23T18:02:54.683Z"
---
# SECURE COMMUNICATION
## Module 1: Introduction and Classic Encryption Techniques
## Topic: Euclidean Algorithm

---

### 1. Introduction to the Euclidean Algorithm

The Euclidean Algorithm is a fundamental and efficient method for computing the Greatest Common Divisor (GCD) of two integers. The GCD of two integers is the largest positive integer that divides both numbers without leaving a remainder. This algorithm is crucial in number theory and has widespread applications in cryptography, including key generation for algorithms like RSA.

**Relationship to Course Outcomes:**
*   **CO1:** The Euclidean Algorithm is explicitly mentioned as a concept to be applied, demonstrating its importance in understanding modular arithmetic and foundational cryptographic principles. (Knowledge Level: K3)

**Key Concepts and Definitions:**

*   **Greatest Common Divisor (GCD):** For two non-zero integers $a$ and $b$, the GCD, denoted as $\text{gcd}(a, b)$, is the largest positive integer $d$ such that $d|a$ and $d|b$.
*   **Divisibility:** An integer $a$ divides an integer $b$ (written as $a|b$) if there exists an integer $k$ such that $b = ak$.

**Textbook References:**

*   **Stallings, W. (2006).** *Cryptography and Network Security: Principles and Practice* (4th ed.). Prentice Hall of India. Chapter 1 (Introduction to Cryptography) and Appendix A (Mathematical Background) will cover the basics of number theory including GCD.
*   **Forouzan, B. A. (2008).** *Cryptography and Network Security*. Tata McGraw-Hill. Chapters on Number Theory will likely cover the Euclidean Algorithm.
*   **Koshy, T. (2007).** *Elementary Number Theory with Applications* (2nd ed.). Academic Press. Chapter 3 discusses divisibility and GCD, including the Euclidean Algorithm.

---

### 2. The Euclidean Algorithm: Principle and Steps

The Euclidean Algorithm is based on the principle that the GCD of two numbers does not change if the larger number is replaced by its difference with the smaller number. More efficiently, it can be shown that $\text{gcd}(a, b) = \text{gcd}(b, a \pmod b)$, where $a \pmod b$ is the remainder when $a$ is divided by $b$.

**Steps of the Euclidean Algorithm:**

Let $a$ and $b$ be two non-negative integers with $a \ge b$.

1.  If $b = 0$, then $\text{gcd}(a, b) = a$.
2.  Otherwise, compute the remainder $r$ when $a$ is divided by $b$, i.e., $a = qb + r$, where $0 \le r < b$.
3.  Replace $a$ with $b$ and $b$ with $r$.
4.  Repeat steps 1-3 until the remainder $r$ becomes 0. The last non-zero remainder is the GCD.

**Example 1: Finding gcd(252, 105)**

*   $252 = 2 \times 105 + 42$
*   $105 = 2 \times 42 + 21$
*   $42 = 2 \times 21 + 0$

The last non-zero remainder is 21. Therefore, $\text{gcd}(252, 105) = 21$.

**Example 2: Finding gcd(48, 18)**

*   $48 = 2 \times 18 + 12$
*   $18 = 1 \times 12 + 6$
*   $12 = 2 \times 6 + 0$

The last non-zero remainder is 6. Therefore, $\text{gcd}(48, 18) = 6$.

---

### 3. Extended Euclidean Algorithm

The Extended Euclidean Algorithm not only finds the GCD of two integers $a$ and $b$ but also finds integers $x$ and $y$ such that $ax + by = \text{gcd}(a, b)$. This is known as Bézout's identity.

**Importance in Cryptography:**

The Extended Euclidean Algorithm is vital for:
*   **Modular Inverse Calculation:** In public-key cryptography (like RSA), we often need to find the modular multiplicative inverse of a number. If $\text{gcd}(a, m) = 1$, then the modular inverse of $a$ modulo $m$ exists and can be found using the Extended Euclidean Algorithm, which solves $ax + my = 1$. The value of $x$ is the modular inverse.

**Steps of the Extended Euclidean Algorithm:**

We can work backwards from the steps of the Euclidean Algorithm. Given $a$ and $b$, we want to find $x, y$ such that $ax + by = \text{gcd}(a, b)$.

Let's use Example 1 again: finding $x, y$ such that $252x + 105y = 21$.

From the Euclidean Algorithm steps:
1.  $252 = 2 \times 105 + 42 \implies 42 = 252 - 2 \times 105$
2.  $105 = 2 \times 42 + 21 \implies 21 = 105 - 2 \times 42$

Now, substitute the expression for 42 from step 1 into step 2:
$21 = 105 - 2 \times (252 - 2 \times 105)$
$21 = 105 - 2 \times 252 + 4 \times 105$
$21 = 5 \times 105 - 2 \times 252$

So, we have $252(-2) + 105(5) = 21$.
Here, $x = -2$ and $y = 5$.

**Textbook References:**

*   **Stallings (2006):** Appendix A will detail the Extended Euclidean Algorithm and its applications in finding modular inverses.
*   **Koshy (2007):** Chapter 3 often includes the Extended Euclidean Algorithm and Bézout's Identity.
*   **Dummit & Foote (2008):** Chapter 1 of *Abstract Algebra* might introduce GCD and Bézout's identity from a more theoretical perspective.

---

### 4. Applications in Secure Communication

As mentioned, the Euclidean Algorithm is fundamental for many cryptographic operations:

*   **Modular Inverse Calculation:**
    *   **RSA Algorithm (CO3):** In RSA, the private key $d$ is the modular multiplicative inverse of the public exponent $e$ modulo $\phi(n)$, where $n=pq$ and $\phi(n)=(p-1)(q-1)$. The Extended Euclidean Algorithm is used to find $d$ such that $ed \equiv 1 \pmod{\phi(n)}$.
    *   **Diffie-Hellman Key Exchange:** While not directly using the Euclidean algorithm, the underlying principles of modular arithmetic are critical, and modular exponentiation is a core component.
*   **Solving Linear Congruences:** The Euclidean algorithm can be used to solve linear congruences of the form $ax \equiv b \pmod m$.

**Example: Finding the Modular Inverse**

Find the modular inverse of 7 modulo 26. This means finding $x$ such that $7x \equiv 1 \pmod{26}$.

We need to find integers $x$ and $y$ such that $7x + 26y = \text{gcd}(7, 26)$. First, we find $\text{gcd}(7, 26)$ using the Euclidean Algorithm:

*   $26 = 3 \times 7 + 5$
*   $7 = 1 \times 5 + 2$
*   $5 = 2 \times 2 + 1$
*   $2 = 2 \times 1 + 0$

So, $\text{gcd}(7, 26) = 1$. Since the GCD is 1, the inverse exists. Now, use the Extended Euclidean Algorithm by working backwards:

1.  $1 = 5 - 2 \times 2$
2.  $2 = 7 - 1 \times 5$
3.  $5 = 26 - 3 \times 7$

Substitute (2) into (1):
$1 = 5 - 2 \times (7 - 1 \times 5)$
$1 = 5 - 2 \times 7 + 2 \times 5$
$1 = 3 \times 5 - 2 \times 7$

Substitute (3) into the above:
$1 = 3 \times (26 - 3 \times 7) - 2 \times 7$
$1 = 3 \times 26 - 9 \times 7 - 2 \times 7$
$1 = 3 \times 26 - 11 \times 7$

Rearranging, we get $7(-11) + 26(3) = 1$.
So, $7(-11) \equiv 1 \pmod{26}$.
The modular inverse is $-11$. To get a positive inverse, we add 26:
$-11 + 26 = 15$.
Therefore, the modular inverse of 7 modulo 26 is 15.

**Check:** $7 \times 15 = 105$. $105 \div 26 = 4$ with a remainder of $1$ ($105 = 4 \times 26 + 1$). So, $7 \times 15 \equiv 1 \pmod{26}$.

**Textbook References:**

*   **Stallings (2006):** Chapter 1 and Appendix A will extensively cover modular arithmetic and its applications in cryptography.
*   **Forouzan (2008):** Chapters on number theory and public-key cryptography will link the Euclidean algorithm to practical cryptographic functions.
*   **Stinson (2005):** Chapter 2 or 3 would likely cover number theoretic foundations for cryptography, including modular inverses.

---

### 5. Practice Questions and Exercises

**Question 1:**
Compute the GCD of 550 and 176 using the Euclidean Algorithm.

**Question 2:**
Using the Extended Euclidean Algorithm, find integers $x$ and $y$ such that $270x + 192y = \text{gcd}(270, 192)$. What is the GCD?

**Question 3:**
Find the modular multiplicative inverse of 19 modulo 31.

**Question 4:**
Why is the Extended Euclidean Algorithm essential for the RSA algorithm?

**Question 5:**
Consider the linear congruence $12x \equiv 8 \pmod{20}$. Can you use the Euclidean algorithm to help solve this? (Hint: Consider the condition for solvability and how GCD is involved).

---

### 6. Answers to Practice Questions

**Answer 1:**
Using the Euclidean Algorithm for $\text{gcd}(550, 176)$:
*   $550 = 3 \times 176 + 22$
*   $176 = 8 \times 22 + 0$
The GCD is **22**.

**Answer 2:**
Using the Euclidean Algorithm for $\text{gcd}(270, 192)$:
*   $270 = 1 \times 192 + 78$
*   $192 = 2 \times 78 + 36$
*   $78 = 2 \times 36 + 6$
*   $36 = 6 \times 6 + 0$
The GCD is **6**.

Now, using the Extended Euclidean Algorithm backwards:
1.  $6 = 78 - 2 \times 36$
2.  $36 = 192 - 2 \times 78$
3.  $78 = 270 - 1 \times 192$

Substitute (2) into (1):
$6 = 78 - 2 \times (192 - 2 \times 78)$
$6 = 78 - 2 \times 192 + 4 \times 78$
$6 = 5 \times 78 - 2 \times 192$

Substitute (3) into the above:
$6 = 5 \times (270 - 1 \times 192) - 2 \times 192$
$6 = 5 \times 270 - 5 \times 192 - 2 \times 192$
$6 = 5 \times 270 - 7 \times 192$

So, $x = 5$ and $y = -7$.
The equation is $270(5) + 192(-7) = 6$.

**Answer 3:**
Find the modular inverse of 19 modulo 31. We need to solve $19x \equiv 1 \pmod{31}$.
Using the Euclidean Algorithm for $\text{gcd}(31, 19)$:
*   $31 = 1 \times 19 + 12$
*   $19 = 1 \times 12 + 7$
*   $12 = 1 \times 7 + 5$
*   $7 = 1 \times 5 + 2$
*   $5 = 2 \times 2 + 1$
*   $2 = 2 \times 1 + 0$
GCD is 1.

Working backwards:
1.  $1 = 5 - 2 \times 2$
2.  $2 = 7 - 1 \times 5$
3.  $5 = 12 - 1 \times 7$
4.  $7 = 19 - 1 \times 12$
5.  $12 = 31 - 1 \times 19$

Substitute (2) into (1): $1 = 5 - 2(7 - 1 \times 5) = 5 - 2 \times 7 + 2 \times 5 = 3 \times 5 - 2 \times 7$
Substitute (3) into the above: $1 = 3(12 - 1 \times 7) - 2 \times 7 = 3 \times 12 - 3 \times 7 - 2 \times 7 = 3 \times 12 - 5 \times 7$
Substitute (4) into the above: $1 = 3 \times 12 - 5(19 - 1 \times 12) = 3 \times 12 - 5 \times 19 + 5 \times 12 = 8 \times 12 - 5 \times 19$
Substitute (5) into the above: $1 = 8(31 - 1 \times 19) - 5 \times 19 = 8 \times 31 - 8 \times 19 - 5 \times 19 = 8 \times 31 - 13 \times 19$

So, $19(-13) + 31(8) = 1$.
The modular inverse is $-13$.
$-13 \pmod{31} = -13 + 31 = 18$.
The modular inverse of 19 modulo 31 is **18**.

**Check:** $19 \times 18 = 342$. $342 \div 31 = 11$ with remainder $1$ ($342 = 11 \times 31 + 1$). So, $19 \times 18 \equiv 1 \pmod{31}$.

**Answer 4:**
The Extended Euclidean Algorithm is essential for the RSA algorithm because it is used to calculate the private key exponent, $d$. In RSA, the public key is $(e, n)$ and the private key is $(d, n)$. To ensure decryption works correctly, $d$ must be the modular multiplicative inverse of $e$ modulo $\phi(n)$, where $\phi(n)$ is Euler's totient function of $n$. That is, $ed \equiv 1 \pmod{\phi(n)}$. The Extended Euclidean Algorithm efficiently finds this value of $d$, given $e$ and $\phi(n)$. Without it, generating the private key would be computationally infeasible.

**Answer 5:**
Yes, the Euclidean algorithm can help. First, for the congruence $ax \equiv b \pmod m$ to have solutions, it is necessary that $\text{gcd}(a, m)$ divides $b$.
Let's find $\text{gcd}(12, 20)$:
*   $20 = 1 \times 12 + 8$
*   $12 = 1 \times 8 + 4$
*   $8 = 2 \times 4 + 0$
So, $\text{gcd}(12, 20) = 4$.
Since $4$ divides $8$, solutions exist.
To solve $12x \equiv 8 \pmod{20}$, we can divide the entire congruence by $\text{gcd}(a, m) = 4$:
$3x \equiv 2 \pmod 5$.
Now, we need to find the modular inverse of 3 modulo 5.
Using Euclidean Algorithm: $\text{gcd}(5, 3)$:
*   $5 = 1 \times 3 + 2$
*   $3 = 1 \times 2 + 1$
*   $2 = 2 \times 1 + 0$
GCD is 1.
Working backwards: $1 = 3 - 1 \times 2 = 3 - 1 \times (5 - 1 \times 3) = 3 - 5 + 3 = 2 \times 3 - 1 \times 5$.
So, $3(2) + 5(-1) = 1$, which means $3 \times 2 \equiv 1 \pmod 5$. The inverse of 3 mod 5 is 2.
Now, multiply the simplified congruence by the inverse:
$2 \times (3x) \equiv 2 \times 2 \pmod 5$
$6x \equiv 4 \pmod 5$
$x \equiv 4 \pmod 5$.
The solutions for $x$ are of the form $x = 4 + 5k$. The original modulus was 20. So the solutions are:
For $k=0$: $x=4$.
For $k=1$: $x=9$.
For $k=2$: $x=14$.
For $k=3$: $x=19$.
These are the 4 solutions modulo 20.

---

### 7. Important Points to Remember

*   The Euclidean Algorithm finds the GCD of two integers by repeatedly applying the division algorithm and using the property $\text{gcd}(a, b) = \text{gcd}(b, a \pmod b)$.
*   The algorithm terminates because the remainders are strictly decreasing and non-negative.
*   The last non-zero remainder is the GCD.
*   The Extended Euclidean Algorithm finds integers $x$ and $y$ satisfying Bézout's identity: $ax + by = \text{gcd}(a, b)$.
*   The Extended Euclidean Algorithm is critical for finding modular multiplicative inverses, which are fundamental to many public-key cryptosystems like RSA.
*   A modular inverse of $a$ modulo $m$ exists if and only if $\text{gcd}(a, m) = 1$.

---

### 8. Alignment with Course Outcomes

*   **CO1:** This topic directly addresses the requirement to "apply the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic." The Euclidean algorithm is a core tool for modular arithmetic. (Knowledge Level: K3)

---

This concludes the study notes for the Euclidean Algorithm in Module 1. Understanding this algorithm is a critical first step in grasping the mathematical underpinnings of modern cryptography.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
