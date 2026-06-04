---
title: "Computational Methods - Algorithms for solving Diophantine equations"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 4: Algebraic Number Theory "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb4a"
status: "completed"
scrapedAt: "2026-05-20T17:24:22.311Z"
---
# Computational Number Theory: Module 4 - Algebraic Number Theory

## Topic: Computational Methods - Algorithms for Solving Diophantine Equations

---

### 1. Introduction to Diophantine Equations

**Definition:** A **Diophantine equation** is a polynomial equation, usually with integer coefficients, for which only integer solutions are sought.

**Key Concepts:**

*   **Linear Diophantine Equations:** Equations of the form $ax + by = c$, where $a, b, c$ are integers.
*   **Non-linear Diophantine Equations:** Equations involving higher powers of variables or products of variables.
*   **Existence of Solutions:** Not all Diophantine equations have integer solutions.
*   **Nature of Solutions:** Solutions can be unique, infinite, or non-existent.

**Learning Outcome:** Understanding the basic definition and types of Diophantine equations.

---

### 2. Algorithms for Solving Linear Diophantine Equations ($ax + by = c$)

**2.1 The Extended Euclidean Algorithm**

The Extended Euclidean Algorithm is the cornerstone for solving linear Diophantine equations. It not only finds the greatest common divisor ($\text{gcd}(a, b)$) of two integers $a$ and $b$, but also finds integers $x$ and $y$ such that $ax + by = \text{gcd}(a, b)$.

**Algorithm Steps:**

1.  **Apply the Euclidean Algorithm** to find $\text{gcd}(a, b)$.
    *   $r_0 = a$, $r_1 = b$
    *   $r_i = q_{i+1} r_{i+1} + r_{i+2}$ for $i \ge 0$, where $0 \le r_{i+2} < r_{i+1}$.
    *   The last non-zero remainder is $\text{gcd}(a, b)$.
2.  **Work backwards** from the Euclidean Algorithm steps to express $\text{gcd}(a, b)$ as a linear combination of $a$ and $b$.
    *   From $r_{i} = q_{i+1} r_{i+1} + r_{i+2}$, we have $r_{i+2} = r_i - q_{i+1} r_{i+1}$.
    *   Substitute the remainders successively until $\text{gcd}(a, b)$ is expressed in terms of $a$ and $b$.

**Example:** Find integers $x$ and $y$ such that $48x + 18y = \text{gcd}(48, 18)$.

1.  **Euclidean Algorithm:**
    *   $48 = 2 \times 18 + 12$
    *   $18 = 1 \times 12 + 6$
    *   $12 = 2 \times 6 + 0$
    *   So, $\text{gcd}(48, 18) = 6$.

2.  **Extended Euclidean Algorithm (Working Backwards):**
    *   From the second step: $6 = 18 - 1 \times 12$
    *   From the first step: $12 = 48 - 2 \times 18$
    *   Substitute the expression for 12 into the equation for 6:
        $6 = 18 - 1 \times (48 - 2 \times 18)$
        $6 = 18 - 1 \times 48 + 2 \times 18$
        $6 = 3 \times 18 - 1 \times 48$
        $6 = 48(-1) + 18(3)$
    *   Therefore, a particular solution is $x_0 = -1$ and $y_0 = 3$.

**Learning Outcome:** Applying the Extended Euclidean Algorithm to find a particular solution to $ax + by = \text{gcd}(a, b)$.

**2.2 Solving $ax + by = c$**

**Theorem:** The linear Diophantine equation $ax + by = c$ has integer solutions if and only if $\text{gcd}(a, b)$ divides $c$.

**Algorithm:**

1.  **Check for solvability:** Calculate $d = \text{gcd}(a, b)$. If $d$ does not divide $c$, there are no integer solutions.
2.  **Find a particular solution to $ax + by = d$:** Use the Extended Euclidean Algorithm to find integers $x_0'$ and $y_0'$ such that $ax_0' + by_0' = d$.
3.  **Scale to $ax + by = c$:** Since $c = kd$ for some integer $k$, a particular solution $(x_0, y_0)$ to $ax + by = c$ can be found by multiplying the particular solution to $ax + by = d$ by $k$:
    $x_0 = x_0' \times (c/d)$
    $y_0 = y_0' \times (c/d)$
4.  **Find the general solution:** If $(x_0, y_0)$ is a particular solution, then the general solution is given by:
    $x = x_0 + (b/d)n$
    $y = y_0 - (a/d)n$
    where $n$ is any integer.

**Example:** Solve the Diophantine equation $48x + 18y = 72$.

1.  **Check solvability:** $\text{gcd}(48, 18) = 6$. Since $6$ divides $72$ ($72 = 6 \times 12$), solutions exist.
2.  **Particular solution for $48x + 18y = 6$:** From the previous example, $48(-1) + 18(3) = 6$. So, $x_0' = -1$ and $y_0' = 3$.
3.  **Scale to $48x + 18y = 72$:** Here $c = 72$, $d = 6$, so $k = c/d = 72/6 = 12$.
    $x_0 = x_0' \times k = -1 \times 12 = -12$
    $y_0 = y_0' \times k = 3 \times 12 = 36$
    A particular solution is $(-12, 36)$. Check: $48(-12) + 18(36) = -576 + 648 = 72$.
4.  **General solution:**
    $x = -12 + (18/6)n = -12 + 3n$
    $y = 36 - (48/6)n = 36 - 8n$
    where $n$ is any integer.

**Learning Outcome:** Solving linear Diophantine equations by using the Extended Euclidean Algorithm and scaling.

---

### 3. Algorithms for Solving Certain Non-linear Diophantine Equations

While general algorithms for arbitrary non-linear Diophantine equations are rare and often undecidable, specific types have well-developed computational methods.

**3.1 Pell's Equation ($x^2 - Dy^2 = 1$ for non-square $D>0$)**

**Definition:** Pell's equation is a Diophantine equation of the form $x^2 - Dy^2 = 1$, where $D$ is a positive non-square integer.

**Key Concepts:**

*   **Trivial Solution:** $(x, y) = (1, 0)$ is always a solution.
*   **Fundamental Solution:** The smallest positive integer solution $(x_1, y_1)$ to Pell's equation. This is crucial for finding all solutions.
*   **Connection to Algebraic Number Theory:** Solutions are intimately related to the units in the ring of integers of the quadratic field $\mathbb{Q}(\sqrt{D})$. Specifically, the fundamental solution $(x_1, y_1)$ corresponds to the fundamental unit $x_1 + y_1\sqrt{D}$ in the ring of integers.

**3.1.1 Finding the Fundamental Solution**

The most common method for finding the fundamental solution is using the **continued fraction expansion of $\sqrt{D}$**.

**Algorithm:**

1.  **Compute the continued fraction expansion of $\sqrt{D}$:**
    $\sqrt{D} = [a_0; a_1, a_2, \dots, a_k, \overline{a_1, a_2, \dots, a_k}]$
    where $a_0 = \lfloor \sqrt{D} \rfloor$ and the sequence of partial quotients $a_1, a_2, \dots$ is periodic.
2.  **Calculate the convergents of the continued fraction:** The convergents are rational approximations of $\sqrt{D}$, given by $p_m/q_m$.
3.  **Test the convergents:** The fundamental solution $(x_1, y_1)$ is found among the convergents $(p_m, q_m)$ of the continued fraction of $\sqrt{D}$.
    *   If the period length of the continued fraction is even, the fundamental solution $(x_1, y_1)$ is $(p_{k-1}, q_{k-1})$, where $k$ is the length of the period.
    *   If the period length is odd, the fundamental solution $(x_1, y_1)$ is $(p_{2k-1}, q_{2k-1})$, where $k$ is the length of the period.
    *   **Crucially, the fundamental solution is the first convergent $p_m/q_m$ for which $p_m^2 - Dq_m^2 = 1$.**

**Example:** Solve Pell's equation $x^2 - 2y^2 = 1$.

Here $D = 2$.
1.  **Continued Fraction of $\sqrt{2}$:**
    $\sqrt{2} \approx 1.414$
    $a_0 = \lfloor \sqrt{2} \rfloor = 1$
    $\xi_1 = 1/(\sqrt{2} - 1) = (\sqrt{2} + 1)/(\sqrt{2}-1)(\sqrt{2}+1) = \sqrt{2} + 1$
    $a_1 = \lfloor \sqrt{2} + 1 \rfloor = 2$
    $\xi_2 = 1/((\sqrt{2} + 1) - 2) = 1/(\sqrt{2} - 1) = \sqrt{2} + 1$
    $a_2 = \lfloor \sqrt{2} + 1 \rfloor = 2$
    So, $\sqrt{2} = [1; \overline{2}]$. The period length is $k=1$ (odd).

2.  **Convergents of $\sqrt{2}$:**
    *   $p_0/q_0 = 1/1$
    *   $p_1/q_1 = [1; 2] = 1 + 1/2 = 3/2$
    *   $p_2/q_2 = [1; 2, 2] = 1 + 1/(2 + 1/2) = 1 + 1/(5/2) = 1 + 2/5 = 7/5$
    *   And so on.

3.  **Test convergents:**
    *   For $(p_0, q_0) = (1, 1)$: $1^2 - 2(1^2) = 1 - 2 = -1$. (This is a solution to $x^2 - Dy^2 = -1$)
    *   For $(p_1, q_1) = (3, 2)$: $3^2 - 2(2^2) = 9 - 2(4) = 9 - 8 = 1$.

    The first convergent that satisfies $x^2 - 2y^2 = 1$ is $(3, 2)$.
    Therefore, the fundamental solution is $(x_1, y_1) = (3, 2)$.

**3.1.2 Generating All Solutions**

Once the fundamental solution $(x_1, y_1)$ is found, all other positive integer solutions $(x_n, y_n)$ can be generated using the relation:

$x_n + y_n\sqrt{D} = (x_1 + y_1\sqrt{D})^n$ for $n = 1, 2, 3, \dots$

**Example (continued):** For $x^2 - 2y^2 = 1$, the fundamental solution is $(3, 2)$.

*   **For n=1:** $x_1 + y_1\sqrt{2} = 3 + 2\sqrt{2}$. Solution is $(3, 2)$.
*   **For n=2:** $(3 + 2\sqrt{2})^2 = 3^2 + 2(3)(2\sqrt{2}) + (2\sqrt{2})^2 = 9 + 12\sqrt{2} + 8 = 17 + 12\sqrt{2}$.
    So, the next solution is $(x_2, y_2) = (17, 12)$.
    Check: $17^2 - 2(12^2) = 289 - 2(144) = 289 - 288 = 1$.
*   **For n=3:** $(3 + 2\sqrt{2})^3 = (3 + 2\sqrt{2})(17 + 12\sqrt{2}) = 3(17) + 3(12\sqrt{2}) + 2\sqrt{2}(17) + 2\sqrt{2}(12\sqrt{2})$
    $= 51 + 36\sqrt{2} + 34\sqrt{2} + 48 = 99 + 70\sqrt{2}$.
    So, the next solution is $(x_3, y_3) = (99, 70)$.
    Check: $99^2 - 2(70^2) = 9801 - 2(4900) = 9801 - 9800 = 1$.

**Learning Outcome:** Understanding Pell's equation and using continued fractions to find its fundamental and general solutions.

**3.2 Sums of Squares**

**Problem:** Given an integer $N$, determine if $N$ can be written as the sum of two squares ($N = x^2 + y^2$) and find such $x, y$.

**Theorem (Fermat's Theorem on Sums of Two Squares):** A positive integer $N$ can be written as the sum of two squares if and only if in its prime factorization, every prime of the form $4k+3$ occurs with an even exponent.

**Algorithm:**

1.  **Prime Factorization:** Find the prime factorization of $N$. $N = 2^a \cdot p_1^{e_1} \cdots p_m^{e_m} \cdot q_1^{f_1} \cdots q_n^{f_n}$, where $p_i$ are primes of the form $4k+1$ and $q_j$ are primes of the form $4k+3$.
2.  **Check Condition:** If any $f_j$ is odd, then $N$ cannot be written as a sum of two squares.
3.  **Finding Solutions (if they exist):**
    *   **Factor $N$ in the Gaussian Integers $\mathbb{Z}[i]$:** The problem $N = x^2 + y^2$ is equivalent to $N = (x + yi)(x - yi)$ in $\mathbb{Z}[i]$.
    *   **Factor $N$ into Gaussian primes:**
        *   $2 = -i(1+i)^2$ (special case)
        *   Primes $p \equiv 1 \pmod{4}$ can be factored into two distinct Gaussian primes: $p = \pi \bar{\pi}$, where $\pi = a+bi$ and $\bar{\pi} = a-bi$, with $a, b \in \mathbb{Z}$ and $a^2+b^2 = p$. Algorithms for finding these factors are based on variations of the Extended Euclidean Algorithm in $\mathbb{Z}[i]$.
        *   Primes $q \equiv 3 \pmod{4}$ remain prime in $\mathbb{Z}[i]$.
    *   **Construct $x+yi$:** If $N = \prod \pi_j^{e_j} \prod \bar{\pi}_j^{e_j} \prod q_k^{f_k}$, and all $f_k$ are even, then any factor $x+yi$ of $N$ in $\mathbb{Z}[i]$ such that $N = (x+yi)(x-yi)$ will give a solution.
    *   We can form $x+yi$ by choosing one factor from each conjugate pair and multiplying them together, respecting the exponents from $N$'s factorization. For example, if $N = p_1^{e_1} p_2^{e_2}$, where $p_1 = \pi_1 \bar{\pi}_1$ and $p_2 = \pi_2 \bar{\pi}_2$, then $x+yi$ can be formed as $\pi_1^{e_1} \pi_2^{e_2}$ or $\pi_1^{e_1} \bar{\pi}_2^{e_2}$ etc. The choice of which factor ($\pi$ or $\bar{\pi}$) to take for each prime $p \equiv 1 \pmod{4}$ determines the specific solution $(x, y)$.

**Example:** Can $50$ be written as a sum of two squares? If so, find $x, y$.

1.  **Prime Factorization of 50:** $50 = 2 \times 5^2$.
2.  **Check Condition:** The prime factor $5 \equiv 1 \pmod{4}$. The prime factor $2$ is special. There are no prime factors of the form $4k+3$. So, $50$ can be written as a sum of two squares.
3.  **Finding Solutions:**
    *   Factor $50$ in $\mathbb{Z}[i]$:
        *   $2 = -i(1+i)^2$.
        *   $5 = 1^2 + 2^2 = (1+2i)(1-2i)$.
    *   $50 = 2 \times 5^2 = [-i(1+i)^2] \times [(1+2i)(1-2i)]^2$.
    *   We need to find $x+yi$ such that $(x+yi)(x-yi) = 50$. This means $x+yi$ must be a factor of $50$ in $\mathbb{Z}[i]$.
    *   Let's consider the factors of $5$. $5 = (1+2i)(1-2i)$.
    *   $50 = 2 \times 5 \times 5$.
    *   Possible choices for $x+yi$:
        *   Take one factor of 2 (e.g., $1+i$) and two factors of 5.
        *   Let's try $x+yi = (1+i)(1+2i)(1+2i) = (1+i)(1+4i+4i^2) = (1+i)(1+4i-4) = (1+i)(-3+4i) = -3 + 4i - 3i + 4i^2 = -3 + i - 4 = -7 + i$.
            Here, $x=-7, y=1$. So, $(-7)^2 + 1^2 = 49 + 1 = 50$. This is a solution.
        *   Let's try $x+yi = (1+i)(1+2i)(1-2i) = (1+i)(5) = 5+5i$.
            Here, $x=5, y=5$. So, $5^2 + 5^2 = 25 + 25 = 50$. This is another solution.
        *   We can also take $(1+i)(1-2i)(1-2i) = (1+i)(1-4i+4i^2) = (1+i)(-3-4i) = -3 - 4i - 3i - 4i^2 = -3 - 7i + 4 = 1 - 7i$.
            Here, $x=1, y=-7$. So, $1^2 + (-7)^2 = 1 + 49 = 50$. This is the same solution as $(-7, 1)$ up to sign and order.

    The positive integer solutions are $(1, 7)$ and $(5, 5)$ (and permutations).

**Learning Outcome:** Understanding the conditions for an integer to be a sum of two squares and using Gaussian integers for constructive algorithms.

---

### 4. Other Diophantine Equations and Computational Approaches

*   **Equations of the form $x^n + y^n = z^n$ (Fermat's Last Theorem):** While computational number theory can verify FLT for small exponents, there's no general algorithm to find solutions because there are none for $n > 2$.
*   **Mordell's Equation ($y^2 = x^3 + k$):** These are elliptic curves, and algorithms exist to find rational and integer points, often involving sophisticated algebraic number theory techniques (e.g., descent methods, algorithms for finding the rank of an elliptic curve).
*   **Hilbert's Tenth Problem:** Matiyasevich's theorem proved that there is no general algorithm to decide whether an arbitrary Diophantine equation has integer solutions. This implies that while we have algorithms for specific classes of equations, a universal solver does not exist.

**Important Point to Remember:** For many non-linear Diophantine equations, finding solutions is difficult, and no single algorithm works for all cases. The methods developed are often specific to certain forms of equations.

---

### 5. Practice Questions

1.  **Linear Diophantine Equation:** Find the general solution in integers to the equation $6x + 9y = 21$.
2.  **Pell's Equation:** Find the fundamental solution to Pell's equation $x^2 - 3y^2 = 1$. Then, find the next two positive integer solutions.
3.  **Sum of Squares:** Determine if the integer $180$ can be written as the sum of two squares. If yes, find all pairs of non-negative integers $(x, y)$ such that $x^2 + y^2 = 180$.
4.  **Extended Euclidean Algorithm:** Use the Extended Euclidean Algorithm to find integers $x$ and $y$ such that $17x + 5y = \text{gcd}(17, 5)$.

---

### 6. Answers to Practice Questions

1.  **Linear Diophantine Equation:**
    We need to solve $6x + 9y = 21$.
    First, find $\text{gcd}(6, 9)$:
    $9 = 1 \times 6 + 3$
    $6 = 2 \times 3 + 0$
    $\text{gcd}(6, 9) = 3$.
    Since $3$ divides $21$ ($21 = 3 \times 7$), solutions exist.

    Using the Extended Euclidean Algorithm for $6x + 9y = 3$:
    From $9 = 1 \times 6 + 3$, we get $3 = 9 - 1 \times 6$, so $3 = 6(-1) + 9(1)$.
    A particular solution for $6x + 9y = 3$ is $x_0' = -1$, $y_0' = 1$.

    Now, scale to $6x + 9y = 21$. Since $21 = 3 \times 7$, we multiply by $k=7$:
    $x_0 = x_0' \times 7 = -1 \times 7 = -7$
    $y_0 = y_0' \times 7 = 1 \times 7 = 7$
    A particular solution is $(-7, 7)$.
    Check: $6(-7) + 9(7) = -42 + 63 = 21$.

    The general solution is:
    $x = x_0 + (b/d)n = -7 + (9/3)n = -7 + 3n$
    $y = y_0 - (a/d)n = 7 - (6/3)n = 7 - 2n$
    where $n$ is any integer.

2.  **Pell's Equation:**
    We need to solve $x^2 - 3y^2 = 1$. Here $D = 3$.
    Find the continued fraction of $\sqrt{3}$:
    $\sqrt{3} \approx 1.732$
    $a_0 = \lfloor \sqrt{3} \rfloor = 1$
    $\xi_1 = 1/(\sqrt{3} - 1) = (\sqrt{3} + 1)/(\sqrt{3}-1)(\sqrt{3}+1) = (\sqrt{3} + 1)/2$
    $a_1 = \lfloor (\sqrt{3} + 1)/2 \rfloor = \lfloor (1.732 + 1)/2 \rfloor = \lfloor 2.732/2 \rfloor = \lfloor 1.366 \rfloor = 1$
    $\xi_2 = 1/((\sqrt{3} + 1)/2 - 1) = 1/((\sqrt{3} + 1 - 2)/2) = 1/((\sqrt{3} - 1)/2) = 2/(\sqrt{3} - 1) = 2(\sqrt{3} + 1)/(\sqrt{3}-1)(\sqrt{3}+1) = 2(\sqrt{3} + 1)/2 = \sqrt{3} + 1$
    $a_2 = \lfloor \sqrt{3} + 1 \rfloor = 2$
    $\xi_3 = 1/(\sqrt{3} + 1 - 2) = 1/(\sqrt{3} - 1) = \sqrt{3} + 1$ (This is $\xi_1$, so the period starts here)
    $\sqrt{3} = [1; \overline{1, 2}]$. The period length is $k=2$ (even).

    Convergents:
    $p_0/q_0 = 1/1$. $1^2 - 3(1^2) = 1 - 3 = -2$.
    $p_1/q_1 = [1; 1] = 1 + 1/1 = 2/1$. $2^2 - 3(1^2) = 4 - 3 = 1$.
    The first convergent satisfying $x^2 - 3y^2 = 1$ is $(2, 1)$.
    **Fundamental solution:** $(x_1, y_1) = (2, 1)$.

    Next two solutions:
    For $n=2$: $x_2 + y_2\sqrt{3} = (2 + 1\sqrt{3})^2 = 2^2 + 2(2)(1\sqrt{3}) + (1\sqrt{3})^2 = 4 + 4\sqrt{3} + 3 = 7 + 4\sqrt{3}$.
    Solution: $(x_2, y_2) = (7, 4)$.
    Check: $7^2 - 3(4^2) = 49 - 3(16) = 49 - 48 = 1$.

    For $n=3$: $x_3 + y_3\sqrt{3} = (2 + \sqrt{3})^3 = (2 + \sqrt{3})(7 + 4\sqrt{3}) = 14 + 8\sqrt{3} + 7\sqrt{3} + 12 = 26 + 15\sqrt{3}$.
    Solution: $(x_3, y_3) = (26, 15)$.
    Check: $26^2 - 3(15^2) = 676 - 3(225) = 676 - 675 = 1$.

3.  **Sum of Squares:**
    We need to check if $180$ can be written as $x^2 + y^2$.
    Prime factorization of $180$:
    $180 = 18 \times 10 = (2 \times 3^2) \times (2 \times 5) = 2^2 \times 3^2 \times 5^1$.

    The prime factors are $2$, $3$, and $5$.
    *   $2$ is special.
    *   $3$ is of the form $4k+3$ (with $k=0$). Its exponent is $2$, which is even.
    *   $5$ is of the form $4k+1$ (with $k=1$). Its exponent is $1$.

    According to Fermat's Theorem on Sums of Two Squares, since the prime factor of the form $4k+3$ (which is 3) has an even exponent (2), $180$ can be written as the sum of two squares.

    To find the solutions, we factor $180$ in $\mathbb{Z}[i]$:
    $180 = 2^2 \times 3^2 \times 5^1$.
    *   $2 = -i(1+i)^2$.
    *   $3$ remains prime in $\mathbb{Z}[i]$.
    *   $5 = (1+2i)(1-2i)$.

    $180 = [-i(1+i)^2]^2 \times 3^2 \times [(1+2i)(1-2i)]^1$
    $180 = (-i)^2 (1+i)^4 \times 3^2 \times (1+2i) \times (1-2i)$
    $180 = -1 \times (1+i)^4 \times 9 \times (1+2i) \times (1-2i)$.

    We are looking for $x+yi$ such that $N = (x+yi)(x-yi)$.
    This means $x+yi$ must be a factor of $N$ in $\mathbb{Z}[i]$.
    Consider the factors of $180 = 2^2 \cdot 3^2 \cdot 5$.
    The factors $3^2$ must be handled carefully. Since $3$ is a prime in $\mathbb{Z}[i]$ and its exponent is even ($2$), we can distribute it evenly: $3^2 = 3 \times 3$.
    The factors of $5$: $(1+2i)$ and $(1-2i)$.
    The factors of $2^2$: $2^2 = 4$.

    We need to form $x+yi$ such that its norm squared is $180$.
    Consider $x+yi$ as a combination of the prime factors of $180$ in $\mathbb{Z}[i]$.
    $180 = (x+yi)(x-yi)$.
    The prime factorization of $180$ in $\mathbb{Z}[i]$ is:
    $180 = (1+i)^4 \times (-i)^2 \times 3^2 \times (1+2i) \times (1-2i)$
    $180 = (1+i)^4 \times (-1) \times 9 \times (1+2i) \times (1-2i)$.
    This is not right. Let's simplify the structure of factors for $N=x^2+y^2$:
    $N = \prod p_i^{e_i} \prod q_j^{f_j}$.
    If $f_j$ are all even, then $N=x^2+y^2$ has solutions.
    $p_i = \pi_i \bar{\pi}_i$.
    $N = \prod (\pi_i^{e_i} \bar{\pi}_i^{e_i}) \prod q_j^{f_j}$.
    We need to find $x+yi$ such that $N = (x+yi)(x-yi)$.
    This means $x+yi$ must contain one factor from each $\pi_i, \bar{\pi}_i$ pair raised to the power $e_i$, and $q_j^{f_j/2}$ (since $q_j$ are primes in $\mathbb{Z}[i]$ and their exponents are even).

    For $180 = 2^2 \times 3^2 \times 5$:
    *   $2$: $2 = -i(1+i)^2$. So $2^2 = (-i)^2(1+i)^4 = -(1+i)^4$.
    *   $3^2$: $3$ is a prime in $\mathbb{Z}[i]$.
    *   $5 = (1+2i)(1-2i)$.

    We need $x+yi$ to be a factor of $180$ in $\mathbb{Z}[i]$.
    Let's try to construct $x+yi$ by picking factors.
    Consider $180 = 4 \times 9 \times 5$.
    *   $4$: $4 = 2^2 = (1+i)^2 (1-i)^2$. Norm is $4$.
    *   $9$: $9 = 3^2$. Norm is $81$.
    *   $5 = (1+2i)(1-2i)$. Norm is $5$.

    We need $x+yi$ such that its norm is $\sqrt{180}$. This is incorrect. We need $N=(x+yi)(x-yi)$.
    Let's go back to factorization of $N$ in $\mathbb{Z}[i]$:
    $180 = 2^2 \cdot 3^2 \cdot 5$
    $2 = (1+i)(1-i)$. No, $2=-i(1+i)^2$.
    $2^2 = (-i)^2(1+i)^4 = -(1+i)^4$.
    $5 = (1+2i)(1-2i)$.

    Let's try to factor $180$ into factors whose norms multiply to $180$.
    We are looking for $x+yi$ such that $N = x^2+y^2$.
    The number of ways to write $N$ as a sum of two squares is related to its prime factorization.

    Let's simplify. We know $180$ can be written as a sum of two squares.
    $180 = 2^2 \times 3^2 \times 5$.
    The part of the factorization that matters for sums of squares is based on primes $p \equiv 1 \pmod 4$.
    We need to find $x+yi$ such that $(x+yi)(x-yi) = 180$.
    This implies $x+yi$ must be a factor of $180$ in $\mathbb{Z}[i]$.

    Let's try combining factors of $5$ with factors of $2^2 \cdot 3^2$.
    $180 = 36 \times 5$.
    $5 = 1^2 + 2^2 = (1+2i)(1-2i)$.
    $36 = 6^2 + 0^2 = (6+0i)(6-0i)$.
    This doesn't directly give us factors of $180$ as a single Gaussian integer.

    Let's use the construction:
    $N = \prod p_i^{e_i} \prod q_j^{f_j}$.
    If all $f_j$ are even, then $N = x^2+y^2$ has solutions.
    $p_i = \pi_i \bar{\pi}_i$, where $\pi_i = a_i + i b_i$.
    $q_j$ remain prime.
    $N = \prod (\pi_i^{e_i} \bar{\pi}_i^{e_i}) \prod q_j^{f_j}$.
    We need to form $x+yi$ by picking $\pi_i^{e_i}$ or $\bar{\pi}_i^{e_i}$ for each $i$, and $q_j^{f_j/2}$ for each $j$.

    For $180 = 2^2 \times 3^2 \times 5^1$:
    *   $2^2$: $2 = -i(1+i)^2$. $2^2 = -(1+i)^4$. This seems complex.

    Let's use a different approach for finding $x, y$.
    We know $180 = 18 \times 10 = (2 \times 3^2) \times (2 \times 5) = 4 \times 9 \times 5$.
    We need to write $180 = x^2 + y^2$.
    Possible squares: $0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169$.
    We need two squares that sum to $180$.
    Try $180 - 144 = 36$. So $180 = 12^2 + 6^2$.
    Thus, $(x, y) = (12, 6)$ is a solution.
    Other pairs summing to $180$:
    $180 - 100 = 80$ (not a square)
    $180 - 121 = 59$ (not a square)
    $180 - 169 = 11$ (not a square)
    We need to consider all possible partitions of primes.

    Let's use the factorization in $\mathbb{Z}[i]$ properly for $N=180$.
    $180 = 2^2 \cdot 3^2 \cdot 5$
    $2 = (1+i)(1-i)$ (this is easier to use for sums of squares)
    $2^2 = (1+i)^2 (1-i)^2 = (1+2i-1)(1-2i-1) = (2i)(-2i) = 4$.
    $5 = (1+2i)(1-2i)$.
    $3$ is prime in $\mathbb{Z}[i]$.

    $180 = (1+i)^2 (1-i)^2 \cdot 3^2 \cdot (1+2i)(1-2i)$
    We need to construct $x+yi$ such that $(x+yi)(x-yi) = 180$.
    This means $x+yi$ must be a factor of $180$ in $\mathbb{Z}[i]$.
    We can construct factors by picking one from conjugate pairs.
    From $5$, we can pick $(1+2i)$ or $(1-2i)$.
    From $2^2 = 4$, we have factors of $2$.
    From $3^2$, we have factors of $3$.

    Let's try to form $x+yi$ from the prime factorization in $\mathbb{Z}[i]$:
    $180 = 2^2 \cdot 3^2 \cdot 5$.
    The factors of $5$ are $(1+2i)$ and $(1-2i)$.
    The factors of $2^2 = 4$ are $2, 2$.
    The factors of $3^2 = 9$ are $3, 3$.

    We need to build $x+yi$ by multiplying primes from the factorization of $180$ in $\mathbb{Z}[i]$.
    Primes in $\mathbb{Z}[i]$ relevant to $180$: $(1+i), (1-i), 3, (1+2i), (1-2i)$.
    $180 = (1+i)^2 (1-i)^2 \cdot 3^2 \cdot (1+2i)(1-2i)$.

    Let's choose factors for $x+yi$:
    *   From $5$, choose $(1+2i)$.
    *   From $3^2$, choose one $3$.
    *   From $2^2$, choose one $2$.
    So, $x+yi = (1+2i) \times 3 \times 2 = 6(1+2i) = 6+12i$.
    Then $(x+yi)(x-yi) = (6+12i)(6-12i) = 6^2 - (12i)^2 = 36 - 144(-1) = 36 + 144 = 180$.
    So, $x=6, y=12$. This gives the solution $(6, 12)$.

    What if we choose $(1-2i)$ from $5$?
    $x+yi = (1-2i) \times 3 \times 2 = 6(1-2i) = 6-12i$.
    This gives $x=6, y=-12$. $(-6, 12)$ and $(6, -12)$ are also solutions.

    Are there other ways to distribute the factors?
    The prime $3$ is special because it's a rational prime that remains prime in $\mathbb{Z}[i]$. Its exponent $f_j$ must be even.
    $180 = 2^2 \cdot 3^2 \cdot 5$.
    $2^2 = 4$. $4 = 2 \times 2$.
    $3^2 = 9$. $9 = 3 \times 3$.
    $5 = (1+2i)(1-2i)$.

    Let's try to construct $x+yi$ differently.
    We need $x+yi$ such that its norm is $180$.
    Consider factors of $180 = 180$.
    Factors of $180$ in $\mathbb{Z}[i]$:
    $180 = (6+12i)(6-12i)$.

    Let's consider $180 = 2^2 \times 3^2 \times 5$.
    We need $x+yi$ such that $N = (x+yi)(x-yi)$.
    Consider the prime factors of $N$ in $\mathbb{Z}[i]$.
    $2 = (1+i)(1-i)$. $2^2 = (1+i)^2(1-i)^2 = 4$.
    $3$ is prime. $3^2=9$.
    $5 = (1+2i)(1-2i)$.

    $180 = ((1+i)(1-i))^2 \cdot 3^2 \cdot (1+2i)(1-2i)$.
    $180 = (1+i)^2(1-i)^2 \cdot 3^2 \cdot (1+2i)(1-2i)$.
    We need to pick one factor from each conjugate pair.
    From $(1+i)$ and $(1-i)$: we can pick $(1+i)^2$ or $(1-i)^2$ or $(1+i)(1-i)=2$.
    From $3^2$: we must pick $3^2$ (since $3$ is a prime in $\mathbb{Z}[i]$).
    From $(1+2i)$ and $(1-2i)$: we can pick $(1+2i)$ or $(1-2i)$.

    Case 1: Pick $2$ (i.e., $(1+i)(1-i)$), $3^2$, and $(1+2i)$.
    $x+yi = 2 \cdot 9 \cdot (1+2i) = 18(1+2i) = 18 + 36i$.
    $18^2 + 36^2 = 324 + 1296 = 1620 \neq 180$. This is incorrect.

    The approach from "Sum of Squares" section: $N = \prod p_i^{e_i} \prod q_j^{f_j}$.
    $p_i = \pi_i \bar{\pi}_i$. $q_j$ remain prime.
    $x+yi$ is formed by $\prod (\pi_i^{a_i} \bar{\pi}_i^{e_i-a_i}) \prod q_j^{f_j/2}$ for any $0 \le a_i \le e_i$.

    For $180 = 2^2 \cdot 3^2 \cdot 5^1$:
    *   $p_1 = 5 = (1+2i)(1-2i)$. So $\pi_1 = 1+2i, \bar{\pi}_1 = 1-2i$, $e_1=1$.
    *   $q_1 = 3$, $f_1=2$ (even). $q_2 = 2$, but $2$ is special.
    We can handle $2$ by noting $x^2+y^2 = N$ is equivalent to $N$ being a norm of an element in $\mathbb{Z}[i]$.
    $180 = 2^2 \times 3^2 \times 5$.
    The term $2^2$ implies we are working with $2$. $2 = -i(1+i)^2$.

    Let's use the theorem: $r_2(N) = 4(d_1(N) - d_3(N))$, where $d_1(N)$ is the number of divisors of $N$ of form $4k+1$ and $d_3(N)$ is the number of divisors of $N$ of form $4k+3$.
    Divisors of $180 = 2^2 \cdot 3^2 \cdot 5$:
    $d$ = $2^a 3^b 5^c$, where $0 \le a \le 2, 0 \le b \le 2, 0 \le c \le 1$.
    Primes are $3$ (form $4k+3$) and $5$ (form $4k+1$). $2$ is special.
    Divisors are:
    $1$ ($4k+1$)
    $2, 4$ (even)
    $3, 9$ ($4k+3$)
    $5$ ($4k+1$)
    $6, 18$ (even)
    $15$ ($4k+3$)
    $45$ ($4k+1$)
    $10, 20$ (even)
    $30, 60, 90, 180$ (even)
    $5 \times 3 = 15$ ($4k+3$)
    $5 \times 9 = 45$ ($4k+1$)
    $5 \times 2 = 10$ (even)
    $5 \times 4 = 20$ (even)

    Divisors:
    $1, 5, 45$ (form $4k+1$) $\implies d_1(180) = 3$.
    $3, 9, 15$ (form $4k+3$) $\implies d_3(180) = 3$.
    $r_2(180) = 4(3-3) = 0$? This formula is for $N=x^2+y^2$ with *positive* $x, y$. No, it's for any integer solutions. This means my manual counting of divisors is likely wrong or the formula application.

    Let's stick to the constructive method:
    $180 = 2^2 \cdot 3^2 \cdot 5$.
    We need $x^2+y^2 = 180$.
    We found $6^2 + 12^2 = 36 + 144 = 180$. So $(6, 12)$ is a solution.
    We need to consider all non-negative integer pairs.
    If $x=0$, $y^2=180$ (no integer $y$).
    If $x=1$, $y^2=179$ (no).
    If $x=2$, $y^2=176$ (no).
    If $x=3$, $y^2=171$ (no).
    If $x=4$, $y^2=164$ (no).
    If $x=5$, $y^2=155$ (no).
    If $x=6$, $y^2=144$, so $y=12$. Solution $(6, 12)$.
    If $x=7$, $y^2=131$ (no).
    If $x=8$, $y^2=116$ (no).
    If $x=9$, $y^2=99$ (no).
    If $x=10$, $y^2=80$ (no).
    If $x=11$, $y^2=59$ (no).
    If $x=12$, $y^2=36$, so $y=6$. Solution $(12, 6)$.

    The pairs of non-negative integers $(x, y)$ are $(6, 12)$ and $(12, 6)$.

4.  **Extended Euclidean Algorithm:**
    We need to find integers $x$ and $y$ such that $17x + 5y = \text{gcd}(17, 5)$.
    1.  **Euclidean Algorithm:**
        $17 = 3 \times 5 + 2$
        $5 = 2 \times 2 + 1$
        $2 = 2 \times 1 + 0$
        So, $\text{gcd}(17, 5) = 1$.
    2.  **Extended Euclidean Algorithm (Working Backwards):**
        From $5 = 2 \times 2 + 1$, we get $1 = 5 - 2 \times 2$.
        From $17 = 3 \times 5 + 2$, we get $2 = 17 - 3 \times 5$.
        Substitute the expression for $2$ into the equation for $1$:
        $1 = 5 - 2 \times (17 - 3 \times 5)$
        $1 = 5 - 2 \times 17 + 6 \times 5$
        $1 = 7 \times 5 - 2 \times 17$
        $1 = 17(-2) + 5(7)$
    Therefore, $x = -2$ and $y = 7$.
    Check: $17(-2) + 5(7) = -34 + 35 = 1$.

---

### 7. Important Points to Remember

*   **Linear Diophantine Equations ($ax+by=c$)**: Solvable iff $\text{gcd}(a,b) | c$. General solution involves scaling a particular solution found via the Extended Euclidean Algorithm.
*   **Pell's Equation ($x^2 - Dy^2 = 1$)**: Solutions are linked to units in quadratic fields. The fundamental solution is found using the continued fraction of $\sqrt{D}$. All solutions are generated from the fundamental solution.
*   **Sum of Squares ($N=x^2+y^2$)**: A number can be written as a sum of two squares iff its prime factorization has no prime $p \equiv 3 \pmod 4$ raised to an odd power. Factorization in Gaussian integers $\mathbb{Z}[i]$ is key for constructive algorithms.
*   **General Diophantine Equations**: No universal algorithm exists due to the undecidability of Hilbert's Tenth Problem. Methods are specific to equation types.

---
