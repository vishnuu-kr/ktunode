---
title: "Integer Factorization - Prime numbers and factorization"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb35"
status: "completed"
scrapedAt: "2026-05-20T17:24:09.789Z"
---
# COMPUTATIONAL NUMBER THEORY - Module 1: Introduction to Number Theory

## Topic: Integer Factorization - Prime Numbers and Factorization

### 1. Introduction to Number Theory

Number theory is a branch of mathematics that studies the properties of integers. It deals with concepts like divisibility, prime numbers, congruences, and their applications in various fields such as cryptography, computer science, and coding theory. Computational number theory specifically focuses on the algorithmic aspects of number theoretic problems.

### 2. Key Concepts and Definitions

#### 2.1. Integers
Integers are whole numbers, both positive and negative, including zero ($\dots, -3, -2, -1, 0, 1, 2, 3, \dots$).

#### 2.2. Divisibility
For two integers $a$ and $b$, we say that $b$ **divides** $a$ (or $a$ is **divisible** by $b$) if there exists an integer $k$ such that $a = bk$. This is denoted as $b | a$.

*   **Example:** $3 | 12$ because $12 = 3 \times 4$.
*   **Example:** $7 \nmid 15$ because there is no integer $k$ such that $15 = 7k$.

#### 2.3. Factors and Multiples
If $b | a$, then $b$ is a **factor** (or divisor) of $a$, and $a$ is a **multiple** of $b$.

#### 2.4. Prime Numbers
A **prime number** is a natural number greater than 1 that has no positive divisors other than 1 and itself.

*   **Examples:** 2, 3, 5, 7, 11, 13, 17, 19, 23, ...

#### 2.5. Composite Numbers
A **composite number** is a natural number greater than 1 that is not prime. In other words, a composite number has at least one divisor other than 1 and itself.

*   **Examples:** 4, 6, 8, 9, 10, 12, 14, 15, 16, ...
    *   $4 = 2 \times 2$
    *   $6 = 2 \times 3$
    *   $9 = 3 \times 3$

#### 2.6. The Number 1
The number 1 is neither prime nor composite. It has only one positive divisor (itself).

#### 2.7. The Number 0 and Negative Integers
Prime and composite number definitions are typically for natural numbers (positive integers). For convenience in certain contexts, we sometimes extend divisibility to all integers. For instance, $-3 | 6$ because $6 = (-3) \times (-2)$. However, the fundamental definition of prime numbers applies to natural numbers greater than 1.

#### 2.8. Fundamental Theorem of Arithmetic
This is a cornerstone of number theory. It states that every integer greater than 1 can be uniquely represented as a product of prime numbers, up to the order of the factors. This is also known as the **unique prime factorization theorem**.

*   **Formally:** For any integer $n > 1$, there exist unique prime numbers $p_1, p_2, \dots, p_k$ and unique positive integers $e_1, e_2, \dots, e_k$ such that:
    $n = p_1^{e_1} \cdot p_2^{e_2} \cdot \dots \cdot p_k^{e_k}$

#### 2.9. Prime Factorization
The process of finding the prime numbers that multiply together to make the original number is called **prime factorization**.

*   **Example:** Prime factorization of 12:
    $12 = 2 \times 6$
    $12 = 2 \times 2 \times 3$
    $12 = 2^2 \times 3$
    Here, 2 and 3 are prime numbers.

*   **Example:** Prime factorization of 100:
    $100 = 2 \times 50$
    $100 = 2 \times 2 \times 25$
    $100 = 2 \times 2 \times 5 \times 5$
    $100 = 2^2 \times 5^2$

### 3. Learning Outcomes Covered

This section directly addresses the fundamental concepts related to prime numbers and factorization, which are essential for understanding integer factorization in computational number theory.

*   **Understanding the definition of prime and composite numbers:** Covered in sections 2.4 and 2.5.
*   **Understanding the concept of divisibility and factors:** Covered in sections 2.2, 2.3.
*   **Understanding the Fundamental Theorem of Arithmetic:** Covered in section 2.8.
*   **Performing prime factorization:** Demonstrated in section 2.9.

### 4. Algorithms for Prime Factorization (Introduction)

While the fundamental theorem guarantees unique factorization, finding it computationally for large numbers can be very difficult. This is the basis of many cryptographic systems.

#### 4.1. Trial Division
This is the simplest and most intuitive method for factoring a number $n$. We test all integers from 2 up to $\sqrt{n}$ to see if they divide $n$. If a number $d$ divides $n$, then $d$ is a factor. We then divide $n$ by $d$ and repeat the process with the quotient until the number becomes 1.

*   **Algorithm:**
    1.  Start with $d = 2$.
    2.  If $d \times d > n$, then the remaining $n$ is prime. Stop.
    3.  If $d$ divides $n$:
        *   Add $d$ to the list of prime factors.
        *   Divide $n$ by $d$ (i.e., $n = n/d$).
        *   Repeat step 2 with the new $n$ and the same $d$.
    4.  If $d$ does not divide $n$:
        *   Increment $d$ to the next integer (or next potential prime).
        *   Repeat step 2.

*   **Example:** Factorize 72 using trial division.
    *   $n = 72$, $d = 2$. $2 \times 2 \le 72$. $72 \% 2 == 0$. Factors: {2}. $n = 72/2 = 36$.
    *   $n = 36$, $d = 2$. $2 \times 2 \le 36$. $36 \% 2 == 0$. Factors: {2, 2}. $n = 36/2 = 18$.
    *   $n = 18$, $d = 2$. $2 \times 2 \le 18$. $18 \% 2 == 0$. Factors: {2, 2, 2}. $n = 18/2 = 9$.
    *   $n = 9$, $d = 2$. $2 \times 2 \le 9$. $9 \% 2 \ne 0$.
    *   $n = 9$, $d = 3$. $3 \times 3 \le 9$. $9 \% 3 == 0$. Factors: {2, 2, 2, 3}. $n = 9/3 = 3$.
    *   $n = 3$, $d = 3$. $3 \times 3 > 3$. The remaining $n=3$ is prime. Factors: {2, 2, 2, 3, 3}.
    *   Prime factorization of 72 is $2^3 \times 3^2$.

*   **Optimization for Trial Division:** We only need to test prime numbers as divisors. After checking for 2, we only need to check odd numbers (3, 5, 7, ...).

#### 4.2. Limitations of Trial Division
Trial division is efficient for small numbers, but its complexity grows significantly with the size of the number being factored. For very large numbers (hundreds of digits), it becomes computationally infeasible.

### 5. Practice Questions and Exercises

1.  **Define:**
    *   Prime number
    *   Composite number
    *   Factor

2.  **Determine if the following numbers are prime or composite:**
    *   29
    *   33
    *   47
    *   51
    *   71

3.  **Find the prime factorization of the following numbers:**
    *   60
    *   144
    *   210
    *   972

4.  **Which of the following statements are true?**
    *   Every even number greater than 2 is composite.
    *   The number 1 is prime.
    *   The only even prime number is 2.
    *   If a number is not divisible by 3, it must be prime.

### 6. Answers to Practice Questions

1.  **Definitions:**
    *   **Prime number:** A natural number greater than 1 that has no positive divisors other than 1 and itself.
    *   **Composite number:** A natural number greater than 1 that is not prime.
    *   **Factor:** An integer $b$ is a factor of an integer $a$ if $b$ divides $a$ with no remainder.

2.  **Prime/Composite:**
    *   29: **Prime** (divisors are 1 and 29)
    *   33: **Composite** ($33 = 3 \times 11$)
    *   47: **Prime** (divisors are 1 and 47)
    *   51: **Composite** ($51 = 3 \times 17$)
    *   71: **Prime** (divisors are 1 and 71)

3.  **Prime Factorization:**
    *   60: $60 = 2 \times 30 = 2 \times 2 \times 15 = 2 \times 2 \times 3 \times 5 = 2^2 \times 3 \times 5$
    *   144: $144 = 2 \times 72 = 2 \times 2 \times 36 = 2 \times 2 \times 2 \times 18 = 2 \times 2 \times 2 \times 2 \times 9 = 2 \times 2 \times 2 \times 2 \times 3 \times 3 = 2^4 \times 3^2$
    *   210: $210 = 2 \times 105 = 2 \times 3 \times 35 = 2 \times 3 \times 5 \times 7 = 2 \times 3 \times 5 \times 7$
    *   972: $972 = 2 \times 486 = 2 \times 2 \times 243 = 2 \times 2 \times 3 \times 81 = 2 \times 2 \times 3 \times 3 \times 27 = 2 \times 2 \times 3 \times 3 \times 3 \times 9 = 2 \times 2 \times 3 \times 3 \times 3 \times 3 \times 3 = 2^2 \times 3^5$

4.  **True Statements:**
    *   **True.** Every even number greater than 2 is divisible by 2, in addition to 1 and itself, making it composite.
    *   **False.** The number 1 is neither prime nor composite by definition.
    *   **True.** The definition of a prime number applies to natural numbers greater than 1. Since 2 is the only even number in this range and it is divisible only by 1 and 2, it is prime. All other even numbers greater than 2 are divisible by 2.
    *   **False.** For example, 9 is not divisible by 3, but it is composite ($9 = 3 \times 3$).

### 7. Important Points to Remember

*   **Primes are the building blocks:** The Fundamental Theorem of Arithmetic highlights that prime numbers are the fundamental units for multiplication of integers.
*   **Uniqueness is key:** The prime factorization of any integer greater than 1 is unique, irrespective of the order of the prime factors.
*   **The boundary of 1:** Remember that 1 is neither prime nor composite.
*   **Trial division limit:** For trial division, you only need to check for divisors up to the square root of the number being factored. If no factor is found up to $\sqrt{n}$, and $n > 1$, then $n$ itself is prime.
*   **Computational difficulty:** Factoring large numbers is a computationally hard problem, which is crucial for modern cryptography.

This concludes Module 1's introduction to prime numbers and factorization. The next modules will build upon these foundational concepts to explore more advanced topics in computational number theory.
