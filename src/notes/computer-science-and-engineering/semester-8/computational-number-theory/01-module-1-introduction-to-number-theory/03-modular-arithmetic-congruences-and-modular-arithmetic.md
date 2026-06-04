---
title: "Modular Arithmetic - Congruences and modular arithmetic"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb33"
status: "completed"
scrapedAt: "2026-05-20T17:24:08.447Z"
---
# COMPUTATIONAL NUMBER THEORY

## Module 1: Introduction to Number Theory

### Topic: Modular Arithmetic - Congruences and Modular Arithmetic

This module introduces the fundamental concepts of modular arithmetic, which are crucial for many algorithms in computational number theory. We will explore the definition of congruences, their properties, and how they form the basis of modular arithmetic operations.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

1.  **Define congruence modulo n.**
2.  **Understand the properties of congruences.**
3.  **Perform basic arithmetic operations (addition, subtraction, multiplication) within modular arithmetic.**
4.  **Apply the concept of modular arithmetic to solve simple problems.**
5.  **Understand the concept of a complete residue system.**
6.  **Relate modular arithmetic to the division algorithm.**

---

### 1. Definition of Congruence Modulo n

The concept of congruence modulo $n$ provides a way to group integers based on their remainders when divided by a fixed positive integer $n$.

*   **Definition:** Let $a$ and $b$ be integers, and let $n$ be a positive integer. We say that $a$ is **congruent to $b$ modulo $n$** if $n$ divides the difference $a - b$.
    *   This is written as: $a \equiv b \pmod{n}$.
    *   The integer $n$ is called the **modulus**.

*   **Alternative Definition:** $a \equiv b \pmod{n}$ if and only if $a$ and $b$ have the same remainder when divided by $n$.

*   **Equivalence Relation:** Congruence modulo $n$ is an **equivalence relation** on the set of integers. This means it satisfies the following properties:
    *   **Reflexive:** $a \equiv a \pmod{n}$ for all integers $a$.
        *   (Since $a - a = 0$, and $n$ divides $0$ for any $n > 0$.)
    *   **Symmetric:** If $a \equiv b \pmod{n}$, then $b \equiv a \pmod{n}$.
        *   (If $n | (a - b)$, then $n | -(a - b)$, which is $n | (b - a)$.)
    *   **Transitive:** If $a \equiv b \pmod{n}$ and $b \equiv c \pmod{n}$, then $a \equiv c \pmod{n}$.
        *   (If $n | (a - b)$ and $n | (b - c)$, then $n | ((a - b) + (b - c))$, which simplifies to $n | (a - c)$.)

---

### 2. Properties of Congruences

The properties of congruences allow us to manipulate and simplify modular expressions.

*   **Property 1: Congruence with the remainder from the Division Algorithm**
    *   If $a \equiv b \pmod{n}$, then $a = b + kn$ for some integer $k$.
    *   This directly relates to the division algorithm: If $a = qn + r$, where $0 \le r < n$, then $a \equiv r \pmod{n}$.
    *   **Example:** $17 \equiv 2 \pmod{5}$, because $17 = 3 \times 5 + 2$. The remainder is 2.
    *   **Example:** $-10 \equiv 3 \pmod{13}$, because $-10 = -1 \times 13 + 3$. The remainder is 3.

*   **Property 2: Addition and Subtraction**
    *   If $a \equiv b \pmod{n}$ and $c \equiv d \pmod{n}$, then:
        *   $a + c \equiv b + d \pmod{n}$
        *   $a - c \equiv b - d \pmod{n}$
    *   **Intuition:** If $a$ and $b$ have the same remainder, and $c$ and $d$ have the same remainder, then their sums and differences will also have the same remainders.
    *   **Example:** $5 \equiv 2 \pmod{3}$ and $7 \equiv 1 \pmod{3}$.
        *   $5 + 7 \equiv 2 + 1 \pmod{3} \implies 12 \equiv 3 \pmod{3} \implies 12 \equiv 0 \pmod{3}$. (Correct, $12 = 4 \times 3 + 0$)
        *   $5 - 7 \equiv 2 - 1 \pmod{3} \implies -2 \equiv 1 \pmod{3}$. (Correct, $-2 = -1 \times 3 + 1$)

*   **Property 3: Multiplication**
    *   If $a \equiv b \pmod{n}$ and $c \equiv d \pmod{n}$, then:
        *   $ac \equiv bd \pmod{n}$
    *   This can be extended to powers: If $a \equiv b \pmod{n}$, then $a^k \equiv b^k \pmod{n}$ for any non-negative integer $k$.
    *   **Example:** $3 \equiv 1 \pmod{2}$ and $4 \equiv 0 \pmod{2}$.
        *   $3 \times 4 \equiv 1 \times 0 \pmod{2} \implies 12 \equiv 0 \pmod{2}$. (Correct)
    *   **Example:** $2 \equiv -1 \pmod{3}$.
        *   $2^3 \equiv (-1)^3 \pmod{3} \implies 8 \equiv -1 \pmod{3} \implies 8 \equiv 2 \pmod{3}$. (Correct, $8 = 2 \times 3 + 2$)

*   **Property 4: Multiplication by a Constant**
    *   If $a \equiv b \pmod{n}$ and $c$ is any integer, then:
        *   $ac \equiv bc \pmod{n}$
    *   **Example:** $10 \equiv 4 \pmod{6}$. Multiply by 3:
        *   $10 \times 3 \equiv 4 \times 3 \pmod{6} \implies 30 \equiv 12 \pmod{6}$. (Correct, $30 = 5 \times 6 + 0$ and $12 = 2 \times 6 + 0$)

*   **Property 5: Division (with caution!)**
    *   If $ac \equiv bc \pmod{n}$, it does **NOT** necessarily imply $a \equiv b \pmod{n}$.
    *   **Cancellation Law:** We can cancel $c$ from both sides of $ac \equiv bc \pmod{n}$ if and only if $\gcd(c, n) = 1$.
        *   If $\gcd(c, n) = 1$, then $a \equiv b \pmod{n}$.
    *   **General Case:** If $ac \equiv bc \pmod{n}$, then $a \equiv b \pmod{n/\gcd(c, n)}$.
    *   **Example (Failure of cancellation):** $2 \times 3 \equiv 2 \times 6 \pmod{6}$.
        *   $6 \equiv 12 \pmod{6}$. This is true ($0 \equiv 0 \pmod{6}$).
        *   If we try to cancel 2, we get $3 \equiv 6 \pmod{6}$, which is false ($3 \equiv 0 \pmod{6}$).
        *   Using the general rule: $\gcd(2, 6) = 2$. So, $2 \times 3 \equiv 2 \times 6 \pmod{6}$ implies $3 \equiv 6 \pmod{6/\gcd(2,6)}$, which means $3 \equiv 6 \pmod{6/2}$, so $3 \equiv 6 \pmod{3}$. This is true ($0 \equiv 0 \pmod{3}$).
    *   **Example (Successful cancellation):** $2 \times 3 \equiv 2 \times 5 \pmod{7}$.
        *   $6 \equiv 10 \pmod{7}$. This is true ($6 \equiv 3 \pmod{7}$).
        *   Here, $\gcd(2, 7) = 1$. We can cancel 2: $3 \equiv 5 \pmod{7}$. This is false. **Wait, my example is wrong!**
        *   Let's correct the example: $2 \times 3 \equiv 2 \times 5 \pmod{4}$.
            *   $6 \equiv 10 \pmod{4}$. This is true ($2 \equiv 2 \pmod{4}$).
            *   $\gcd(2, 4) = 2$.
            *   Cancelling 2: $3 \equiv 5 \pmod{4}$. This is true ($3 \equiv 1 \pmod{4}$ and $5 \equiv 1 \pmod{4}$).
            *   Using the general rule: $a \equiv b \pmod{n/\gcd(c, n)}$.
            *   $3 \equiv 5 \pmod{4/\gcd(2,4)} \implies 3 \equiv 5 \pmod{4/2} \implies 3 \equiv 5 \pmod{2}$. This is true ($1 \equiv 1 \pmod{2}$).

*   **Property 6: Congruence of Sums and Differences of Powers**
    *   If $a \equiv b \pmod{n}$ and $c \equiv d \pmod{n}$, then $a^k + c^m \equiv b^k + d^m \pmod{n}$ for any non-negative integers $k, m$.

---

### 3. Performing Basic Arithmetic Operations in Modular Arithmetic

Modular arithmetic allows us to perform addition, subtraction, and multiplication efficiently by working with smaller numbers (remainders).

*   **Addition:** To find $(a + b) \pmod{n}$, we can compute $a \pmod{n}$ and $b \pmod{n}$ first, and then add them, taking the modulus again.
    *   $(a + b) \pmod{n} = ((a \pmod{n}) + (b \pmod{n})) \pmod{n}$.
    *   **Example:** Calculate $(15 + 23) \pmod{7}$.
        *   $15 \equiv 1 \pmod{7}$
        *   $23 \equiv 2 \pmod{7}$
        *   $(15 + 23) \pmod{7} \equiv (1 + 2) \pmod{7} \equiv 3 \pmod{7}$.
        *   Check: $15 + 23 = 38$. $38 = 5 \times 7 + 3$. So $38 \equiv 3 \pmod{7}$.

*   **Subtraction:** To find $(a - b) \pmod{n}$, we can compute $a \pmod{n}$ and $b \pmod{n}$ first, and then subtract them, taking the modulus again. Remember that remainders must be non-negative.
    *   $(a - b) \pmod{n} = ((a \pmod{n}) - (b \pmod{n})) \pmod{n}$.
    *   **Example:** Calculate $(15 - 23) \pmod{7}$.
        *   $15 \equiv 1 \pmod{7}$
        *   $23 \equiv 2 \pmod{7}$
        *   $(15 - 23) \pmod{7} \equiv (1 - 2) \pmod{7} \equiv -1 \pmod{7}$.
        *   To get a positive remainder, we add the modulus: $-1 + 7 = 6$.
        *   So, $(15 - 23) \pmod{7} \equiv 6 \pmod{7}$.
        *   Check: $15 - 23 = -8$. $-8 = -2 \times 7 + 6$. So $-8 \equiv 6 \pmod{7}$.

*   **Multiplication:** To find $(a \times b) \pmod{n}$, we can compute $a \pmod{n}$ and $b \pmod{n}$ first, and then multiply them, taking the modulus again.
    *   $(a \times b) \pmod{n} = ((a \pmod{n}) \times (b \pmod{n})) \pmod{n}$.
    *   **Example:** Calculate $(15 \times 23) \pmod{7}$.
        *   $15 \equiv 1 \pmod{7}$
        *   $23 \equiv 2 \pmod{7}$
        *   $(15 \times 23) \pmod{7} \equiv (1 \times 2) \pmod{7} \equiv 2 \pmod{7}$.
        *   Check: $15 \times 23 = 345$. $345 = 49 \times 7 + 2$. So $345 \equiv 2 \pmod{7}$.

---

### 4. Applying Modular Arithmetic to Solve Simple Problems

Modular arithmetic is useful for problems involving cycles, repetitive patterns, or large numbers where only the remainder matters.

*   **Finding the day of the week:** If today is Monday, what day will it be in 100 days?
    *   There are 7 days in a week. We are interested in the remainder when 100 is divided by 7.
    *   $100 \div 7 = 14$ with a remainder of $2$.
    *   So, $100 \equiv 2 \pmod{7}$.
    *   If Monday is day 0, then 100 days from now will be day $0 + 2 \equiv 2 \pmod{7}$.
    *   Day 0: Monday, Day 1: Tuesday, Day 2: Wednesday.
    *   It will be a Wednesday.

*   **Calculating with large exponents:** What is the last digit of $7^{100}$?
    *   The last digit of a number is its remainder when divided by 10. We need to calculate $7^{100} \pmod{10}$.
    *   Let's look at the powers of 7 modulo 10:
        *   $7^1 \equiv 7 \pmod{10}$
        *   $7^2 = 49 \equiv 9 \pmod{10}$
        *   $7^3 = 7 \times 9 = 63 \equiv 3 \pmod{10}$
        *   $7^4 = 7 \times 3 = 21 \equiv 1 \pmod{10}$
        *   $7^5 = 7 \times 1 = 7 \equiv 7 \pmod{10}$
    *   The pattern of remainders is $7, 9, 3, 1$, which repeats every 4 powers.
    *   We need to find the position in this cycle for $7^{100}$. We do this by finding $100 \pmod{4}$.
    *   $100 \div 4 = 25$ with a remainder of $0$.
    *   So, $100 \equiv 0 \pmod{4}$.
    *   When the exponent is $0 \pmod{4}$ (or equivalent to the last term in the cycle, which is $4$ in this case), the remainder is 1.
    *   Therefore, $7^{100} \equiv 1 \pmod{10}$.
    *   The last digit of $7^{100}$ is 1.

---

### 5. Complete Residue System

A complete residue system modulo $n$ is a set of integers such that every integer is congruent to exactly one element in the set.

*   **Definition:** A set of $n$ integers $\{r_1, r_2, \dots, r_n\}$ is called a **complete residue system modulo $n$** if for every integer $a$, there is a unique $i$ such that $a \equiv r_i \pmod{n}$.

*   **Common Complete Residue Systems:**
    *   **The Standard Complete Residue System:** $\{0, 1, 2, \dots, n-1\}$. This is the set of remainders from the division algorithm.
        *   **Example (n=5):** $\{0, 1, 2, 3, 4\}$
            *   $7 \equiv 2 \pmod{5}$ (2 is in the set)
            *   $-3 \equiv 2 \pmod{5}$ (2 is in the set)
            *   $5 \equiv 0 \pmod{5}$ (0 is in the set)
    *   **Other Complete Residue Systems:** Any set of $n$ integers where no two are congruent modulo $n$ will form a complete residue system.
        *   **Example (n=5):** $\{1, 2, 3, 4, 5\}$. Here, $5 \equiv 0 \pmod{5}$, so this is also a complete residue system.
        *   **Example (n=5):** $\{-2, -1, 0, 1, 2\}$. Here, $-2 \equiv 3 \pmod{5}$, $-1 \equiv 4 \pmod{5}$, $0 \equiv 0 \pmod{5}$, $1 \equiv 1 \pmod{5}$, $2 \equiv 2 \pmod{5}$. This covers all remainders modulo 5.

*   **The set of integers modulo $n$ is denoted by $\mathbb{Z}_n$ or $\mathbb{Z}/n\mathbb{Z}$.** This set consists of the equivalence classes of integers modulo $n$. The standard complete residue system is often used to represent these equivalence classes.

---

### 6. Relation to the Division Algorithm

The division algorithm is the bedrock upon which the definition of congruence and modular arithmetic is built.

*   **Division Algorithm:** For any integers $a$ and $n$ with $n > 0$, there exist unique integers $q$ (quotient) and $r$ (remainder) such that $a = qn + r$ and $0 \le r < n$.

*   **Connection:**
    *   The definition $a \equiv b \pmod{n}$ means $a - b = kn$ for some integer $k$. This can be rewritten as $a = b + kn$.
    *   If we consider $b$ to be the remainder $r$ from the division algorithm ($a = qn + r$), then $a = r + qn$. This fits the form $a = b + kn$, with $b=r$ and $k=q$.
    *   Therefore, $a \equiv r \pmod{n}$, where $r$ is the unique remainder when $a$ is divided by $n$, and $0 \le r < n$.
    *   This shows that the remainder $r$ is the representative of the congruence class of $a$ modulo $n$ within the standard complete residue system.

---

### Important Points to Remember:

*   **$a \equiv b \pmod{n}$ means $n$ divides $a-b$.**
*   **Remainders are crucial.** Always keep your results within the desired range (usually $0$ to $n-1$).
*   **Cancellation is tricky.** You can only cancel a factor $c$ from $ac \equiv bc \pmod{n}$ if $\gcd(c, n) = 1$. Otherwise, you divide the modulus by $\gcd(c, n)$.
*   **Modular arithmetic is closed under addition, subtraction, and multiplication.** This means performing these operations on numbers modulo $n$ will result in a number that is also congruent to some value modulo $n$.
*   **The set $\{0, 1, \dots, n-1\}$ is the most common complete residue system.**

---

### Practice Questions/Exercises:

1.  **Is $25 \equiv 7 \pmod{6}$?** Explain why or why not.
2.  **Find the remainder when $12345$ is divided by $11$.**
3.  **Calculate $(56 + 87) \pmod{12}$.**
4.  **Calculate $(92 - 45) \pmod{8}$.**
5.  **Calculate $(17 \times 23) \pmod{10}$.**
6.  **Find the last digit of $3^{10}$.**
7.  **What day of the week will it be 200 days from a Friday?**
8.  **If $a \equiv 3 \pmod{7}$ and $b \equiv 5 \pmod{7}$, find $a \times b \pmod{7}$.**
9.  **Solve for $x$: $4x \equiv 8 \pmod{12}$.** (Hint: Consider Property 5 carefully).

---

### Answers to Practice Questions:

1.  **Yes.** $25 - 7 = 18$. Since $6$ divides $18$, $25 \equiv 7 \pmod{6}$.
2.  $12345 \pmod{11}$.
    *   $12345 = 11000 + 1345$
    *   $1345 = 1100 + 245$
    *   $245 = 220 + 25$
    *   $25 = 22 + 3$
    *   So, $12345 \equiv 3 \pmod{11}$.
    *   Alternatively, using alternating sum of digits for divisibility by 11: $5 - 4 + 3 - 2 + 1 = 3$. So, $12345 \equiv 3 \pmod{11}$.
3.  $56 \equiv 8 \pmod{12}$.
    $87 \equiv 3 \pmod{12}$ ($87 = 7 \times 12 + 3$).
    $(56 + 87) \pmod{12} \equiv (8 + 3) \pmod{12} \equiv 11 \pmod{12}$.
4.  $92 \equiv 4 \pmod{8}$ ($92 = 11 \times 8 + 4$).
    $45 \equiv 5 \pmod{8}$ ($45 = 5 \times 8 + 5$).
    $(92 - 45) \pmod{8} \equiv (4 - 5) \pmod{8} \equiv -1 \pmod{8} \equiv 7 \pmod{8}$.
5.  $17 \equiv 7 \pmod{10}$.
    $23 \equiv 3 \pmod{10}$.
    $(17 \times 23) \pmod{10} \equiv (7 \times 3) \pmod{10} \equiv 21 \pmod{10} \equiv 1 \pmod{10}$.
6.  We need $3^{10} \pmod{10}$.
    $3^1 \equiv 3 \pmod{10}$
    $3^2 \equiv 9 \pmod{10}$
    $3^3 \equiv 27 \equiv 7 \pmod{10}$
    $3^4 \equiv 3 \times 7 = 21 \equiv 1 \pmod{10}$
    The cycle length is 4.
    We need $10 \pmod{4}$. $10 = 2 \times 4 + 2$, so $10 \equiv 2 \pmod{4}$.
    $3^{10} \equiv 3^2 \pmod{10} \equiv 9 \pmod{10}$.
    The last digit is 9.
7.  Friday is day 5 (if Sunday=0).
    We need to find $200 \pmod{7}$.
    $200 = 28 \times 7 + 4$. So $200 \equiv 4 \pmod{7}$.
    The day will be $5 + 4 = 9$.
    $9 \equiv 2 \pmod{7}$.
    Day 0: Sunday, Day 1: Monday, Day 2: Tuesday.
    It will be a Tuesday.
8.  $a \times b \pmod{7} \equiv (a \pmod{7}) \times (b \pmod{7}) \pmod{7} \equiv 3 \times 5 \pmod{7} \equiv 15 \pmod{7} \equiv 1 \pmod{7}$.
9.  $4x \equiv 8 \pmod{12}$.
    We can divide by 4, but we must also divide the modulus by $\gcd(4, 12) = 4$.
    So, $x \equiv 8/4 \pmod{12/4}$
    $x \equiv 2 \pmod{3}$.
    This means $x$ can be $2, 5, 8, 11, \dots$.
    Let's check these in the original congruence:
    If $x=2$: $4(2) = 8 \equiv 8 \pmod{12}$ (True)
    If $x=5$: $4(5) = 20 \equiv 8 \pmod{12}$ (True, $20 = 1 \times 12 + 8$)
    If $x=8$: $4(8) = 32 \equiv 8 \pmod{12}$ (True, $32 = 2 \times 12 + 8$)
    If $x=11$: $4(11) = 44 \equiv 8 \pmod{12}$ (True, $44 = 3 \times 12 + 8$)
    The solutions are all integers $x$ such that $x \equiv 2 \pmod{3}$.
