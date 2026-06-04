---
title: "Chinese Remainder Theorem."
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcc9"
status: "completed"
scrapedAt: "2026-05-20T16:53:56.627Z"
---
## Fundamentals of Cryptography: Module 1 - Introduction to Number Theory: Chinese Remainder Theorem

**Learning Outcomes:**

*   Understand the statement of the Chinese Remainder Theorem (CRT).
*   Apply the CRT to solve systems of linear congruences.
*   Compute solutions using various methods (e.g., back-substitution, modular inverses).
*   Understand the importance of coprime moduli for the CRT to work.
*   Recognize applications of the CRT in cryptography and other fields.

**1. Introduction to the Chinese Remainder Theorem (CRT)**

*   **What is it?**  The Chinese Remainder Theorem (CRT) is a powerful theorem in number theory that provides a way to solve systems of linear congruences.  Specifically, it states that if you know the remainders of an integer *x* when divided by several pairwise coprime integers, you can uniquely determine *x* modulo the product of those integers.

*   **Why is it important?**  The CRT has various applications in computer science, cryptography, and mathematics. In cryptography, it's used in RSA decryption for performance optimization and in secret sharing schemes.

**2.  Key Concepts and Definitions**

*   **Congruence:**  *a ≡ b (mod m)* means that *m* divides *a - b*. In other words, *a* and *b* have the same remainder when divided by *m*.

*   **Linear Congruence:** An equation of the form *ax ≡ b (mod m)*, where *a*, *b*, and *m* are integers and *x* is the unknown.

*   **System of Linear Congruences:**  A set of linear congruences with the same unknown, for example:
    *   *x ≡ a<sub>1</sub> (mod m<sub>1</sub>)*
    *   *x ≡ a<sub>2</sub> (mod m<sub>2</sub>)*
    *   ...
    *   *x ≡ a<sub>k</sub> (mod m<sub>k</sub>)*

*   **Pairwise Coprime (Relatively Prime):**  A set of integers {m<sub>1</sub>, m<sub>2</sub>, ..., m<sub>k</sub>} is pairwise coprime if *gcd(m<sub>i</sub>, m<sub>j</sub>) = 1* for all *i ≠ j*, where *gcd* stands for the greatest common divisor. This is *crucial* for the CRT to work.

*   **Theorem Statement:** Let *m<sub>1</sub>, m<sub>2</sub>, ..., m<sub>k</sub>* be pairwise coprime positive integers greater than 1. Then, for any integers *a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>k</sub>*, the system of congruences

    *   *x ≡ a<sub>1</sub> (mod m<sub>1</sub>)*
    *   *x ≡ a<sub>2</sub> (mod m<sub>2</sub>)*
    *   ...
    *   *x ≡ a<sub>k</sub> (mod m<sub>k</sub>)*

    has a unique solution modulo *M = m<sub>1</sub>m<sub>2</sub>...m<sub>k</sub>*.  In other words, there exists an integer *x* such that *0 ≤ x < M* that satisfies all the congruences simultaneously.  Furthermore, all solutions are congruent modulo M.

**3. Methods for Solving Systems of Congruences using CRT**

*   **Method 1: Back-Substitution** (Simple for small systems)

    1.  Solve the first congruence *x ≡ a<sub>1</sub> (mod m<sub>1</sub>)* for *x*.  This gives *x = a<sub>1</sub> + m<sub>1</sub>k* for some integer *k*.
    2.  Substitute this expression for *x* into the second congruence *x ≡ a<sub>2</sub> (mod m<sub>2</sub>)*, giving *a<sub>1</sub> + m<sub>1</sub>k ≡ a<sub>2</sub> (mod m<sub>2</sub>)*.
    3.  Solve this new congruence for *k*.  This will give *k ≡ k' (mod m<sub>2</sub>)*.
    4.  Substitute *k = k' + m<sub>2</sub>j* back into the expression for *x*: *x = a<sub>1</sub> + m<sub>1</sub>(k' + m<sub>2</sub>j) = a<sub>1</sub> + m<sub>1</sub>k' + m<sub>1</sub>m<sub>2</sub>j*.
    5.  Thus, *x ≡ (a<sub>1</sub> + m<sub>1</sub>k') (mod m<sub>1</sub>m<sub>2</sub>)*.  This gives a solution modulo *m<sub>1</sub>m<sub>2</sub>*.
    6.  Repeat the process with the next congruence until all congruences are satisfied.

*   **Method 2: Using Modular Inverses (More Efficient for larger systems)**

    1.  Calculate *M = m<sub>1</sub>m<sub>2</sub>...m<sub>k</sub>*.
    2.  For each *i* from 1 to *k*, calculate *M<sub>i</sub> = M / m<sub>i</sub>*.
    3.  Find the modular inverse of *M<sub>i</sub>* modulo *m<sub>i</sub>*.  That is, find an integer *y<sub>i</sub>* such that *M<sub>i</sub>y<sub>i</sub> ≡ 1 (mod m<sub>i</sub>)*.  You can use the Extended Euclidean Algorithm to find this.
    4.  The solution *x* is then given by:

        *   *x ≡ a<sub>1</sub>M<sub>1</sub>y<sub>1</sub> + a<sub>2</sub>M<sub>2</sub>y<sub>2</sub> + ... + a<sub>k</sub>M<sub>k</sub>y<sub>k</sub> (mod M)*

        Where:
            * a<sub>i</sub> are the remainders
            * M<sub>i</sub> = M/m<sub>i</sub>
            * y<sub>i</sub> are the modular inverses of M<sub>i</sub> mod m<sub>i</sub>

**4. Example Problems**

*   **Example 1 (Back-Substitution):**

    Solve the system:

    *   *x ≡ 2 (mod 3)*
    *   *x ≡ 3 (mod 5)*
    *   *x ≡ 2 (mod 7)*

    1.  From the first congruence, *x = 2 + 3k*.
    2.  Substituting into the second: *2 + 3k ≡ 3 (mod 5)*  =>  *3k ≡ 1 (mod 5)*.
    3.  Multiplying by 2 (the inverse of 3 mod 5): *k ≡ 2 (mod 5)*  =>  *k = 2 + 5j*.
    4.  Substituting back: *x = 2 + 3(2 + 5j) = 8 + 15j*.
    5.  Substituting into the third: *8 + 15j ≡ 2 (mod 7)*  =>  *15j ≡ -6 ≡ 1 (mod 7)*  =>  *j ≡ 1 (mod 7)*.
    6.  So, *j = 1 + 7l*.  Substituting back: *x = 8 + 15(1 + 7l) = 23 + 105l*.
    7.  Therefore, *x ≡ 23 (mod 105)*.

    *Answer: x = 23*

*   **Example 2 (Modular Inverses):**

    Solve the system:

    *   *x ≡ 1 (mod 5)*
    *   *x ≡ 2 (mod 7)*
    *   *x ≡ 3 (mod 9)*

    1.  *M = 5 * 7 * 9 = 315*
    2.  *M<sub>1</sub> = 315 / 5 = 63*
    3.  *M<sub>2</sub> = 315 / 7 = 45*
    4.  *M<sub>3</sub> = 315 / 9 = 35*
    5.  Find the inverses:
        *   *63y<sub>1</sub> ≡ 1 (mod 5)*  => *3y<sub>1</sub> ≡ 1 (mod 5)* => *y<sub>1</sub> = 2* (because 3*2 = 6 ≡ 1 (mod 5)).
        *   *45y<sub>2</sub> ≡ 1 (mod 7)*  => *3y<sub>2</sub> ≡ 1 (mod 7)* => *y<sub>2</sub> = 5* (because 3*5 = 15 ≡ 1 (mod 7)).
        *   *35y<sub>3</sub> ≡ 1 (mod 9)*  => *8y<sub>3</sub> ≡ 1 (mod 9)* => *y<sub>3</sub> = 8* (because 8*8 = 64 ≡ 1 (mod 9)).
    6.  *x ≡ (1 * 63 * 2) + (2 * 45 * 5) + (3 * 35 * 8) (mod 315)*
    7.  *x ≡ 126 + 450 + 840 (mod 315)*
    8.  *x ≡ 1416 (mod 315)*
    9.  *x ≡ 171 (mod 315)*

    *Answer: x = 171*

**5. Importance of Coprime Moduli**

*   The CRT guarantees a unique solution (modulo *M*) only when the moduli *m<sub>1</sub>, m<sub>2</sub>, ..., m<sub>k</sub>* are pairwise coprime.
*   If the moduli are not coprime, the system may have no solution, or it may have multiple solutions that are not congruent modulo *M*.

    *   **Example (No Solution):** Consider the system:

        *   *x ≡ 1 (mod 2)*
        *   *x ≡ 0 (mod 4)*

        The first congruence implies that *x* is odd, while the second implies that *x* is divisible by 4 (hence even). This is a contradiction, so there is no solution.

**6. Applications of the CRT**

*   **RSA Decryption:** The CRT can speed up RSA decryption significantly, especially when dealing with large numbers.  The decryption exponent *d* is split into smaller exponents modulo the factors of the modulus *n* (which is the product of two large primes, *p* and *q*).  The calculations are then performed modulo *p* and *q*, and the results are combined using the CRT to obtain the final result modulo *n*.  Since computations with smaller numbers are faster, this approach can improve performance.

*   **Secret Sharing Schemes (e.g., Shamir's Secret Sharing):** The CRT is used to reconstruct a secret that has been divided into shares and distributed among multiple parties. Each party holds a share, and only a certain number of shares are needed to reconstruct the secret.  The CRT is used to interpolate a polynomial that represents the secret.

*   **Computer Arithmetic:**  The CRT can be used to perform arithmetic operations on large integers by performing the operations modulo several smaller integers and then combining the results using the CRT.

*   **Solving Diophantine Equations:** The CRT can be helpful in finding integer solutions to certain Diophantine equations (equations with integer coefficients).

**7. Practice Questions/Exercises**

1.  Solve the following system of congruences:
    *   *x ≡ 2 (mod 5)*
    *   *x ≡ 3 (mod 7)*

2.  Solve the following system of congruences:
    *   *x ≡ 1 (mod 3)*
    *   *x ≡ 2 (mod 4)*
    *   *x ≡ 3 (mod 5)*

3.  Explain why the following system of congruences has no solution:
    *   *x ≡ 1 (mod 2)*
    *   *x ≡ 2 (mod 4)*

4.  Let *n = pq* where p = 11 and q = 13. Further assume that x ≡ 5 (mod 11) and x ≡ 9 (mod 13). Use the CRT to find x.

**8.  Answers to Practice Questions/Exercises**

1.  *M = 5 * 7 = 35*
    *   *M<sub>1</sub> = 35 / 5 = 7*
    *   *M<sub>2</sub> = 35 / 7 = 5*
    *   *7y<sub>1</sub> ≡ 1 (mod 5)* => *2y<sub>1</sub> ≡ 1 (mod 5)* => *y<sub>1</sub> = 3*
    *   *5y<sub>2</sub> ≡ 1 (mod 7)* => *y<sub>2</sub> = 3*
    *   *x ≡ (2 * 7 * 3) + (3 * 5 * 3) (mod 35)*
    *   *x ≡ 42 + 45 (mod 35)*
    *   *x ≡ 87 (mod 35)*
    *   *x ≡ 17 (mod 35)*

    *Answer: x = 17*

2.  *M = 3 * 4 * 5 = 60*
    *   *M<sub>1</sub> = 60 / 3 = 20*
    *   *M<sub>2</sub> = 60 / 4 = 15*
    *   *M<sub>3</sub> = 60 / 5 = 12*
    *   *20y<sub>1</sub> ≡ 1 (mod 3)* => *2y<sub>1</sub> ≡ 1 (mod 3)* => *y<sub>1</sub> = 2*
    *   *15y<sub>2</sub> ≡ 1 (mod 4)* => *3y<sub>2</sub> ≡ 1 (mod 4)* => *y<sub>2</sub> = 3*
    *   *12y<sub>3</sub> ≡ 1 (mod 5)* => *2y<sub>3</sub> ≡ 1 (mod 5)* => *y<sub>3</sub> = 3*
    *   *x ≡ (1 * 20 * 2) + (2 * 15 * 3) + (3 * 12 * 3) (mod 60)*
    *   *x ≡ 40 + 90 + 108 (mod 60)*
    *   *x ≡ 238 (mod 60)*
    *   *x ≡ 58 (mod 60)*

    *Answer: x = 58*

3.  The system has no solution because the congruences are inconsistent. The first congruence implies that *x* is odd, while the second congruence implies that *x = 2 + 4k* which means *x* must be even.  This is a contradiction. The moduli are also not coprime, which is another indicator that a solution may not exist.

4. *n = 11 * 13 = 143*
    *M = 143*
    *M<sub>1</sub> = 143/11 = 13*
    *M<sub>2</sub> = 143/13 = 11*

    *13y<sub>1</sub> ≡ 1 (mod 11)* => *2y<sub>1</sub> ≡ 1 (mod 11)* => *y<sub>1</sub> = 6*
    *11y<sub>2</sub> ≡ 1 (mod 13)* => *(-2)y<sub>2</sub> ≡ 1 (mod 13)* => *y<sub>2</sub> = -7 ≡ 6 (mod 13)*

    *x ≡ (5 * 13 * 6) + (9 * 11 * 6) (mod 143)*
    *x ≡ 390 + 594 (mod 143)*
    *x ≡ 984 (mod 143)*
    *x ≡ 122 (mod 143)*

    *Answer: x = 122*

**9. Important Points to Remember**

*   The moduli *must* be pairwise coprime for the CRT to guarantee a unique solution.
*   There are multiple methods to solve systems of congruences using the CRT. Choose the method that is most efficient for the given problem.  Modular inverses are often more efficient for larger systems.
*   The solution *x* obtained from the CRT is unique only modulo *M*, where *M* is the product of the moduli.
*   The CRT has important applications in cryptography, particularly in speeding up RSA decryption.
