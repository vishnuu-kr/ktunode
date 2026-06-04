---
title: "Solving Linear Recurrence Relations (homogeneous and nonhomogeneous)"
subject: "DISCRETE MATHEMATICS"
module: "Module 3: Induction and Recurrences"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fab"
status: "completed"
scrapedAt: "2026-05-20T16:33:09.375Z"
---
Absolutely! Let's dive into the fascinating world of Linear Recurrence Relations. This is a core topic in Discrete Mathematics, and understanding it will truly equip you for tackling many computational problems.

---

## Module 3: Induction and Recurrences

### Topic: Solving Linear Recurrence Relations (Homogeneous and Nonhomogeneous)

**(Connecting to Course Outcomes: CO5, CO2, CO1)**

Welcome, everyone! Today, we're going to unravel a powerful technique for describing sequences that depend on their previous terms. We're talking about **Recurrence Relations**. Think of them as recipes for generating sequences, where each new ingredient (term) is determined by the previous ones. Specifically, we'll focus on **Linear Recurrence Relations**, which are fundamental in computer science and various mathematical applications. You'll see how this ties directly into **CO5** – explaining Generating Functions and solving recurrence relations. As we solve them, we'll implicitly use counting principles (**CO2**) and logical deduction (**CO1**).

---

### 1. What is a Recurrence Relation?

Imagine you're tracking the growth of a rabbit population. A simple model might say that the number of rabbits next month is the sum of the current rabbits and the new baby rabbits, which are born from mature rabbits. This is a recurrence relation!

More formally, a **recurrence relation** is an equation that defines a sequence in terms of one or more of its preceding terms.

**Example:**
The Fibonacci sequence is a classic example:
$F_0 = 0$
$F_1 = 1$
$F_n = F_{n-1} + F_{n-2}$ for $n \ge 2$

This tells us that to find the number of rabbits (or the next Fibonacci number), we look at the previous two months (or terms) and add them up.

**(Relatable Example):**
Think about the money in your savings account. If you deposit \$100 at the beginning of each month and earn 5% interest monthly on the balance *before* the deposit, how much money will you have after $n$ months? Let $M_n$ be the money after $n$ months.
The money at the end of month $n$ is the money from month $n-1$, plus the interest earned on that amount, plus your new deposit:
$M_n = M_{n-1} + 0.05 \times M_{n-1} + 100$
$M_n = 1.05 \times M_{n-1} + 100$
This is a recurrence relation!

---

### 2. Linear Recurrence Relations

When we talk about *linear* recurrence relations, we mean that the terms of the sequence appear in a linear fashion – no powers, no products of terms, just combinations.

A **linear recurrence relation of order $k$** is an equation of the form:
$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \dots + c_k a_{n-k} + f(n)$
where $c_1, c_2, \dots, c_k$ are constants, and $f(n)$ is a function of $n$.

To uniquely define a sequence using such a relation, we need **$k$ initial conditions**: $a_0, a_1, \dots, a_{k-1}$.

**(Analogy):**
Think of building a tower with blocks. A linear recurrence relation is like saying the height of the tower after $n$ levels depends on the heights of the previous $k$ levels, with some fixed rules ($c_i$) and perhaps some extra decorations at each level ($f(n)$).

---

### 2.1. Homogeneous Linear Recurrence Relations

When the $f(n)$ term is zero, the recurrence relation is called **homogeneous**.
The general form is:
$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \dots + c_k a_{n-k}$

**Example (Fibonacci again):**
$F_n = F_{n-1} + F_{n-2}$ is a homogeneous linear recurrence relation of order 2. Here, $c_1=1$, $c_2=1$, and $f(n)=0$.

#### Solving Homogeneous Linear Recurrence Relations

This is where we get to use some clever algebra! The key idea, as discussed in texts like Rosen's "Discrete Mathematics and its Applications," is to look for solutions of the form $a_n = r^n$ for some constant $r$.

Let's substitute $a_n = r^n$ into the general homogeneous relation:
$r^n = c_1 r^{n-1} + c_2 r^{n-2} + \dots + c_k r^{n-k}$

Since we're looking for non-trivial solutions (where $r \ne 0$), we can divide the entire equation by $r^{n-k}$ (the lowest power of $r$):
$r^k = c_1 r^{k-1} + c_2 r^{k-2} + \dots + c_k$

Rearranging this, we get the **characteristic equation**:
$r^k - c_1 r^{k-1} - c_2 r^{k-2} - \dots - c_k = 0$

The roots of this characteristic equation are crucial.

**Case 1: Distinct Real Roots**
If the characteristic equation has $k$ distinct real roots, say $r_1, r_2, \dots, r_k$, then the general solution is a linear combination of powers of these roots:
$a_n = \alpha_1 r_1^n + \alpha_2 r_2^n + \dots + \alpha_k r_k^n$
where $\alpha_1, \alpha_2, \dots, \alpha_k$ are constants determined by the initial conditions.

**(Exam Tip):** You'll often be given initial conditions to find these constants. This usually involves setting up a system of linear equations.

**Example:** Solve $a_n = 5a_{n-1} - 6a_{n-2}$ with $a_0 = 1$ and $a_1 = 4$.
1.  **Characteristic Equation:**
    The relation is $a_n - 5a_{n-1} + 6a_{n-2} = 0$.
    Substitute $a_n = r^n$: $r^n - 5r^{n-1} + 6r^{n-2} = 0$.
    Divide by $r^{n-2}$: $r^2 - 5r + 6 = 0$.
2.  **Find the Roots:**
    Factor the quadratic: $(r-2)(r-3) = 0$.
    The roots are $r_1 = 2$ and $r_2 = 3$. These are distinct real roots.
3.  **General Solution:**
    $a_n = \alpha_1 (2)^n + \alpha_2 (3)^n$.
4.  **Use Initial Conditions to Find Constants:**
    For $n=0$: $a_0 = \alpha_1 (2)^0 + \alpha_2 (3)^0 \implies 1 = \alpha_1 + \alpha_2$.
    For $n=1$: $a_1 = \alpha_1 (2)^1 + \alpha_2 (3)^1 \implies 4 = 2\alpha_1 + 3\alpha_2$.

    Now we solve this system:
    From $1 = \alpha_1 + \alpha_2$, we get $\alpha_1 = 1 - \alpha_2$.
    Substitute into the second equation: $4 = 2(1 - \alpha_2) + 3\alpha_2$
    $4 = 2 - 2\alpha_2 + 3\alpha_2$
    $4 = 2 + \alpha_2$
    $\alpha_2 = 2$.
    Then, $\alpha_1 = 1 - 2 = -1$.
5.  **Particular Solution:**
    $a_n = -1 \cdot 2^n + 2 \cdot 3^n$ or $a_n = 2 \cdot 3^n - 2^n$.

**(Check):**
$a_0 = 2 \cdot 3^0 - 2^0 = 2 \cdot 1 - 1 = 1$. Correct.
$a_1 = 2 \cdot 3^1 - 2^1 = 2 \cdot 3 - 2 = 6 - 2 = 4$. Correct.
$a_2 = 5a_1 - 6a_0 = 5(4) - 6(1) = 20 - 6 = 14$.
Our formula gives $a_2 = 2 \cdot 3^2 - 2^2 = 2 \cdot 9 - 4 = 18 - 4 = 14$. Correct!

**Case 2: Repeated Real Roots**
If the characteristic equation has a real root $r$ with multiplicity $m$ (meaning $(r-r_0)^m$ is a factor), then the general solution will involve terms like $r^n, nr^n, n^2 r^n, \dots, n^{m-1} r^n$.
Specifically, if $r$ is a root of multiplicity $m$, the corresponding part of the general solution is:
$(\alpha_1 + \alpha_2 n + \alpha_3 n^2 + \dots + \alpha_m n^{m-1}) r^n$.

**Example:** Solve $a_n = 6a_{n-1} - 9a_{n-2}$ with $a_0 = 1$ and $a_1 = 6$.
1.  **Characteristic Equation:**
    $r^2 - 6r + 9 = 0$.
2.  **Find the Roots:**
    $(r-3)^2 = 0$.
    We have a repeated root $r = 3$ with multiplicity $m=2$.
3.  **General Solution:**
    $a_n = (\alpha_1 + \alpha_2 n) 3^n$.
4.  **Use Initial Conditions:**
    For $n=0$: $a_0 = (\alpha_1 + \alpha_2 \cdot 0) 3^0 \implies 1 = \alpha_1$. So $\alpha_1 = 1$.
    For $n=1$: $a_1 = (\alpha_1 + \alpha_2 \cdot 1) 3^1 \implies 6 = (\alpha_1 + \alpha_2) 3$.
    $6 = (1 + \alpha_2) 3$
    $2 = 1 + \alpha_2$
    $\alpha_2 = 1$.
5.  **Particular Solution:**
    $a_n = (1 + n) 3^n$.

**(Check):**
$a_0 = (1+0)3^0 = 1 \cdot 1 = 1$. Correct.
$a_1 = (1+1)3^1 = 2 \cdot 3 = 6$. Correct.
$a_2 = 6a_1 - 9a_0 = 6(6) - 9(1) = 36 - 9 = 27$.
Our formula gives $a_2 = (1+2)3^2 = 3 \cdot 9 = 27$. Correct!

**Case 3: Complex Roots**
If the characteristic equation has complex roots, they will always come in conjugate pairs. While you can solve these directly using complex numbers, it's often more practical in discrete math to convert them into a form involving sines and cosines, or to use real number representations. For this course, focusing on distinct and repeated real roots is usually sufficient, but be aware that complex roots can arise. If a complex root is $r = \rho e^{i\theta}$, its conjugate is $\bar{r} = \rho e^{-i\theta}$. The general solution can be expressed using $\rho^n \cos(n\theta)$ and $\rho^n \sin(n\theta)$. (Refer to Rosen for detailed treatment of complex roots if needed).

---

### 2.2. Nonhomogeneous Linear Recurrence Relations

Now, what happens when $f(n)$ is *not* zero? We have a nonhomogeneous relation:
$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \dots + c_k a_{n-k} + f(n)$

The solution to a nonhomogeneous recurrence relation is the sum of two parts:
$a_n = a_{h,n} + a_{p,n}$
where:
*   $a_{h,n}$ is the **general solution to the associated homogeneous recurrence relation** (i.e., where $f(n)$ is replaced by 0).
*   $a_{p,n}$ is a **particular solution to the nonhomogeneous recurrence relation** (any single solution that satisfies the full equation).

**(Analogy):**
Think of driving a car. $a_{h,n}$ is like the car's natural motion (e.g., coasting). $a_{p,n}$ is like the effect of the engine and external forces (like pushing the accelerator or hitting a bump). The total motion is the combination of these.

#### Solving Nonhomogeneous Linear Recurrence Relations

1.  **Solve the Associated Homogeneous Relation:**
    Find the characteristic equation for $a_n = c_1 a_{n-1} + \dots + c_k a_{n-k}$. Find its roots and write down the general homogeneous solution $a_{h,n}$. This is exactly what we did in the previous section.

2.  **Find a Particular Solution ($a_{p,n}$):**
    This is the tricky part, and it heavily depends on the form of $f(n)$. We use the **Method of Undetermined Coefficients**. We *guess* the form of $a_{p,n}$ based on $f(n)$ and then solve for the coefficients in our guess.

    Here's a common strategy for guessing $a_{p,n}$:

    *   **If $f(n)$ is a polynomial of degree $d$:**
        Guess $a_{p,n}$ as a general polynomial of degree $d$:
        $a_{p,n} = A_d n^d + A_{d-1} n^{d-1} + \dots + A_1 n + A_0$.
        *   **Important Modification:** If the constant term $1$ is a root of the characteristic equation (meaning $r=1$ is a root), we multiply our guess by $n$ (or $n^m$ if $1$ is a root of multiplicity $m$) to avoid a conflict with the homogeneous solution. So the guess becomes $n^m \times (\text{polynomial of degree } d)$.

    *   **If $f(n)$ is of the form $C \cdot s^n$ (an exponential):**
        Guess $a_{p,n} = A \cdot s^n$.
        *   **Modification:** If $s$ is a root of the characteristic equation with multiplicity $m$, the guess becomes $a_{p,n} = A \cdot n^m \cdot s^n$.

    *   **If $f(n)$ is a sum of terms (e.g., polynomial + exponential):**
        Find a particular solution for each term separately and add them up. If $f(n) = f_1(n) + f_2(n)$, then $a_p(n) = a_{p1}(n) + a_{p2}(n)$, where $a_{p1}$ solves the relation with $f_1(n)$ and $a_{p2}$ solves with $f_2(n)$.

    *   **If $f(n)$ involves sines and cosines:** This is less common in introductory courses but involves guessing terms with both sine and cosine.

    **After guessing $a_{p,n}$:** Substitute this guess into the original nonhomogeneous recurrence relation and solve for the unknown coefficients ($A_i$ or $A$).

3.  **Combine the Solutions:**
    The final solution is $a_n = a_{h,n} + a_{p,n}$. Use the initial conditions to determine any remaining undetermined constants in $a_{h,n}$.

**(Relatable Example - Savings Account Revisited):**
Let's solve $M_n = 1.05 M_{n-1} + 100$ with $M_0 = 0$.
This is a nonhomogeneous linear recurrence relation of order 1.

1.  **Homogeneous Solution:**
    Associated homogeneous relation: $M_n = 1.05 M_{n-1}$.
    Characteristic equation: $r - 1.05 = 0 \implies r = 1.05$.
    Homogeneous solution: $M_{h,n} = \alpha (1.05)^n$.

2.  **Particular Solution:**
    Here, $f(n) = 100$, which is a constant (a polynomial of degree 0).
    The root of the characteristic equation is $r=1.05$, which is *not* 1. So, we can guess $M_{p,n}$ as a constant, say $A$.
    Guess: $M_{p,n} = A$.
    Substitute into the nonhomogeneous relation:
    $A = 1.05(A) + 100$
    $A - 1.05A = 100$
    $-0.05A = 100$
    $A = \frac{100}{-0.05} = -2000$.
    So, $M_{p,n} = -2000$.

3.  **Combine Solutions:**
    $M_n = M_{h,n} + M_{p,n} = \alpha (1.05)^n - 2000$.

4.  **Use Initial Conditions:**
    We have $M_0 = 0$.
    $0 = \alpha (1.05)^0 - 2000$
    $0 = \alpha \cdot 1 - 2000$
    $\alpha = 2000$.

5.  **Final Solution:**
    $M_n = 2000 (1.05)^n - 2000$.

**(Check):**
$M_0 = 2000(1.05)^0 - 2000 = 2000 - 2000 = 0$. Correct.
$M_1 = 1.05 M_0 + 100 = 1.05(0) + 100 = 100$.
Our formula gives $M_1 = 2000(1.05)^1 - 2000 = 2000(1.05) - 2000 = 2100 - 2000 = 100$. Correct!

**(Intuition):** This result means your savings will grow according to the formula $2000 \times (1.05)^n - 2000$. If you withdraw all your money, you'd need \$2000 to generate \$100 monthly interest at 5% and still have your principal, or rather, you are saving up to a target amount. This $-2000$ term is related to the present value of an annuity.

**Example 2:** Solve $a_n = 3a_{n-1} + 2n$ with $a_0 = 1$.
1.  **Homogeneous Solution:**
    Associated relation: $a_n = 3a_{n-1}$.
    Characteristic equation: $r - 3 = 0 \implies r = 3$.
    Homogeneous solution: $a_{h,n} = \alpha (3)^n$.

2.  **Particular Solution:**
    $f(n) = 2n$, a polynomial of degree 1.
    The root of the characteristic equation is $r=3$, which is not 1.
    Guess $a_{p,n} = An + B$ (a general polynomial of degree 1).
    Substitute into $a_n = 3a_{n-1} + 2n$:
    $(An + B) = 3(A(n-1) + B) + 2n$
    $An + B = 3(An - A + B) + 2n$
    $An + B = 3An - 3A + 3B + 2n$
    $An + B = (3A+2)n + (-3A+3B)$

    Equating coefficients of $n$:
    $A = 3A + 2 \implies -2A = 2 \implies A = -1$.

    Equating constant terms:
    $B = -3A + 3B$
    $B = -3(-1) + 3B$
    $B = 3 + 3B$
    $-2B = 3 \implies B = -3/2$.

    So, $a_{p,n} = -n - 3/2$.

3.  **Combine Solutions:**
    $a_n = a_{h,n} + a_{p,n} = \alpha (3)^n - n - 3/2$.

4.  **Use Initial Conditions:**
    $a_0 = 1$.
    $1 = \alpha (3)^0 - 0 - 3/2$
    $1 = \alpha - 3/2$
    $\alpha = 1 + 3/2 = 5/2$.

5.  **Final Solution:**
    $a_n = \frac{5}{2} (3)^n - n - \frac{3}{2}$.

**(Check):**
$a_0 = \frac{5}{2}(3)^0 - 0 - \frac{3}{2} = \frac{5}{2} - \frac{3}{2} = \frac{2}{2} = 1$. Correct.
$a_1 = 3a_0 + 2(1) = 3(1) + 2 = 5$.
Our formula: $a_1 = \frac{5}{2}(3)^1 - 1 - \frac{3}{2} = \frac{15}{2} - \frac{2}{2} - \frac{3}{2} = \frac{10}{2} = 5$. Correct!

**Example 3 (Modification rule):** Solve $a_n = a_{n-1} + 2^n$ with $a_0=1$.
1.  **Homogeneous Solution:** $a_n = a_{n-1} \implies r-1=0 \implies r=1$. So $a_{h,n} = \alpha (1)^n = \alpha$.
2.  **Particular Solution:** $f(n) = 2^n$. The base is $s=2$.
    The root of the characteristic equation is $r=1$. Since $s=2 \ne 1$, no modification is needed.
    Guess $a_{p,n} = A \cdot 2^n$.
    Substitute into $a_n = a_{n-1} + 2^n$:
    $A \cdot 2^n = A \cdot 2^{n-1} + 2^n$.
    Divide by $2^{n-1}$:
    $A \cdot 2 = A + 2$
    $2A = A + 2 \implies A = 2$.
    So, $a_{p,n} = 2 \cdot 2^n = 2^{n+1}$.
3.  **Combine:** $a_n = \alpha + 2^{n+1}$.
4.  **Initial Conditions:** $a_0 = 1$.
    $1 = \alpha + 2^{0+1} = \alpha + 2$.
    $\alpha = -1$.
5.  **Final Solution:** $a_n = -1 + 2^{n+1}$.

**(Check):**
$a_0 = -1 + 2^1 = 1$. Correct.
$a_1 = a_0 + 2^1 = 1 + 2 = 3$.
Formula: $a_1 = -1 + 2^{1+1} = -1 + 2^2 = -1 + 4 = 3$. Correct.

**Example 4 (Modification rule in action):** Solve $a_n = 2a_{n-1} + n$ with $a_0 = 3$.
1.  **Homogeneous:** $a_n = 2a_{n-1} \implies r-2=0 \implies r=2$. $a_{h,n} = \alpha \cdot 2^n$.
2.  **Particular:** $f(n) = n$ (polynomial degree 1). Root $r=2 \ne 1$.
    Guess $a_{p,n} = An + B$.
    Substitute into $a_n = 2a_{n-1} + n$:
    $An + B = 2(A(n-1) + B) + n$
    $An + B = 2An - 2A + 2B + n$
    $An + B = (2A+1)n + (-2A+2B)$

    Equating coefficients:
    $n$: $A = 2A+1 \implies A = -1$.
    Constant: $B = -2A + 2B \implies B = -2(-1) + 2B \implies B = 2 + 2B \implies -B = 2 \implies B = -2$.
    So, $a_{p,n} = -n - 2$.

3.  **Combine:** $a_n = \alpha \cdot 2^n - n - 2$.
4.  **Initial Conditions:** $a_0 = 3$.
    $3 = \alpha \cdot 2^0 - 0 - 2$
    $3 = \alpha - 2$
    $\alpha = 5$.
5.  **Final Solution:** $a_n = 5 \cdot 2^n - n - 2$.

**(Check):**
$a_0 = 5 \cdot 2^0 - 0 - 2 = 5 - 2 = 3$. Correct.
$a_1 = 2a_0 + 1 = 2(3) + 1 = 7$.
Formula: $a_1 = 5 \cdot 2^1 - 1 - 2 = 10 - 3 = 7$. Correct.

**Example 5 (Root is 1):** Solve $a_n = 2a_{n-1} - a_{n-2} + 3$ with $a_0=1, a_1=2$.
1.  **Homogeneous:** $a_n = 2a_{n-1} - a_{n-2}$. Characteristic equation: $r^2 - 2r + 1 = 0 \implies (r-1)^2 = 0$. Root $r=1$ with multiplicity 2.
    $a_{h,n} = (\alpha_1 + \alpha_2 n) (1)^n = \alpha_1 + \alpha_2 n$.

2.  **Particular:** $f(n)=3$ (constant, polynomial degree 0).
    The root of the characteristic equation is $r=1$, which is a root of multiplicity $m=2$.
    So, we must multiply our standard guess by $n^m = n^2$.
    Guess $a_{p,n} = A n^2$.
    Substitute into $a_n = 2a_{n-1} - a_{n-2} + 3$:
    $A n^2 = 2(A(n-1)^2) - A(n-2)^2 + 3$
    $A n^2 = 2A(n^2 - 2n + 1) - A(n^2 - 4n + 4) + 3$
    $A n^2 = 2An^2 - 4An + 2A - (An^2 - 4An + 4A) + 3$
    $A n^2 = 2An^2 - 4An + 2A - An^2 + 4An - 4A + 3$
    $A n^2 = (2A - A)n^2 + (-4A + 4A)n + (2A - 4A) + 3$
    $A n^2 = An^2 + 0n - 2A + 3$

    Equating coefficients:
    $n^2$: $A = A$. (This is consistent).
    Constant: $0 = -2A + 3 \implies 2A = 3 \implies A = 3/2$.
    So, $a_{p,n} = \frac{3}{2} n^2$.

3.  **Combine:** $a_n = \alpha_1 + \alpha_2 n + \frac{3}{2} n^2$.

4.  **Initial Conditions:** $a_0=1, a_1=2$.
    $n=0: a_0 = \alpha_1 + \alpha_2(0) + \frac{3}{2}(0)^2 \implies 1 = \alpha_1$. So $\alpha_1 = 1$.
    $n=1: a_1 = \alpha_1 + \alpha_2(1) + \frac{3}{2}(1)^2 \implies 2 = \alpha_1 + \alpha_2 + \frac{3}{2}$.
    $2 = 1 + \alpha_2 + \frac{3}{2}$
    $2 = \frac{5}{2} + \alpha_2$
    $\alpha_2 = 2 - \frac{5}{2} = -\frac{1}{2}$.

5.  **Final Solution:** $a_n = 1 - \frac{1}{2} n + \frac{3}{2} n^2$.

**(Check):**
$a_0 = 1 - 0 + 0 = 1$. Correct.
$a_1 = 1 - \frac{1}{2}(1) + \frac{3}{2}(1)^2 = 1 - \frac{1}{2} + \frac{3}{2} = 1 + \frac{2}{2} = 1+1=2$. Correct.
$a_2 = 2a_1 - a_0 + 3 = 2(2) - 1 + 3 = 4 - 1 + 3 = 6$.
Formula: $a_2 = 1 - \frac{1}{2}(2) + \frac{3}{2}(2)^2 = 1 - 1 + \frac{3}{2}(4) = 0 + 6 = 6$. Correct!

---

### 3. Connection to Generating Functions (CO5)

While we've solved recurrence relations directly using the characteristic equation method (which is often the focus in introductory courses), **Generating Functions** provide an alternative and very powerful method, especially for more complex recurrences or for understanding the structure of sequences.

A generating function for a sequence $\{a_n\}_{n=0}^\infty$ is a power series $G(x) = a_0 + a_1 x + a_2 x^2 + \dots = \sum_{n=0}^\infty a_n x^n$.

To solve a recurrence relation using generating functions:
1.  Define the generating function $G(x) = \sum_{n=0}^\infty a_n x^n$.
2.  Multiply the recurrence relation by $x^n$ and sum over all valid $n$.
3.  Use properties of power series (like $\sum a_n x^n = G(x)$, $\sum a_{n-1} x^n = x G(x)$, etc.) to rewrite the equation in terms of $G(x)$.
4.  Solve for $G(x)$.
5.  Find the coefficient of $x^n$ in the power series expansion of $G(x)$. This $a_n$ is your solution.

**Example (Fibonacci using Generating Functions):**
$F_n = F_{n-1} + F_{n-2}$ for $n \ge 2$, with $F_0=0, F_1=1$.
Let $G(x) = \sum_{n=0}^\infty F_n x^n$.
Multiply by $x^n$ and sum from $n=2$:
$\sum_{n=2}^\infty F_n x^n = \sum_{n=2}^\infty F_{n-1} x^n + \sum_{n=2}^\infty F_{n-2} x^n$

Left side: $\sum_{n=2}^\infty F_n x^n = G(x) - F_0 - F_1 x = G(x) - 0 - 1x = G(x) - x$.

Right side, first term: $\sum_{n=2}^\infty F_{n-1} x^n = x \sum_{n=2}^\infty F_{n-1} x^{n-1}$. Let $k=n-1$. When $n=2, k=1$.
$x \sum_{k=1}^\infty F_k x^k = x (G(x) - F_0) = x G(x)$.

Right side, second term: $\sum_{n=2}^\infty F_{n-2} x^n = x^2 \sum_{n=2}^\infty F_{n-2} x^{n-2}$. Let $k=n-2$. When $n=2, k=0$.
$x^2 \sum_{k=0}^\infty F_k x^k = x^2 G(x)$.

Putting it together:
$G(x) - x = x G(x) + x^2 G(x)$
$G(x) - x G(x) - x^2 G(x) = x$
$G(x) (1 - x - x^2) = x$
$G(x) = \frac{x}{1 - x - x^2}$

Now, to find $F_n$, we would decompose $G(x)$ into partial fractions (using the roots of $1-x-x^2=0$, which are related to the characteristic equation roots) and find the coefficient of $x^n$. This often leads to Binet's formula for Fibonacci numbers.

This generating function approach demonstrates the deep connection between recurrence relations and power series, a key part of **CO5**.

---

### 4. Summary and Key Takeaways

*   **Recurrence Relations** define sequences based on prior terms.
*   **Linear Recurrence Relations** have terms appearing linearly.
*   **Homogeneous:** $a_n = c_1 a_{n-1} + \dots + c_k a_{n-k}$. Solved using the **characteristic equation** $r^k - c_1 r^{k-1} - \dots - c_k = 0$. The form of the solution depends on the roots (distinct, repeated).
*   **Nonhomogeneous:** $a_n = c_1 a_{n-1} + \dots + c_k a_{n-k} + f(n)$. Solved as $a_n = a_{h,n} + a_{p,n}$.
    *   $a_{h,n}$ is the solution to the associated homogeneous relation.
    *   $a_{p,n}$ is a particular solution, often found using the **Method of Undetermined Coefficients** (guessing $a_{p,n}$ based on $f(n)$ and adjusting if $f(n)$'s form matches roots of the characteristic equation).
*   **Initial Conditions** are vital for determining the specific constants in the general solution.
*   **Generating Functions** offer an alternative powerful method for solving recurrence relations, linking them to power series.

Remember this: The core of solving linear recurrence relations lies in understanding the characteristic equation and how to find a particular solution for nonhomogeneous cases. Practice is key!

---

### Sample Questions and Answers

**Q1. Conceptual:** What is the role of the characteristic equation in solving linear recurrence relations?
**A1:** The characteristic equation's roots dictate the *form* of the general solution for homogeneous linear recurrence relations. Each distinct root $r$ contributes a term $\alpha r^n$ to the solution, while repeated roots lead to terms involving powers of $n$ multiplied by $r^n$.

**Q2. Conceptual:** Explain the two parts of the solution for a nonhomogeneous linear recurrence relation.
**A2:** The solution $a_n$ is the sum of:
1.  $a_{h,n}$: The general solution to the *associated homogeneous* relation (all terms involving unknown constants).
2.  $a_{p,n}$: A *particular solution* that satisfies the nonhomogeneous part $f(n)$ (a specific function of $n$).
The initial conditions are then used to find the constants in $a_{h,n}$.

**Q3. Application (Homogeneous):** Solve the recurrence relation $a_n = 7a_{n-1} - 10a_{n-2}$ with $a_0 = 2$ and $a_1 = 5$.
**A3:**
1.  **Characteristic Equation:** $r^2 - 7r + 10 = 0$.
2.  **Roots:** $(r-2)(r-5) = 0 \implies r_1 = 2, r_2 = 5$ (distinct real roots).
3.  **General Solution:** $a_n = \alpha_1 (2)^n + \alpha_2 (5)^n$.
4.  **Initial Conditions:**
    $n=0: a_0 = 2 \implies \alpha_1 + \alpha_2 = 2$.
    $n=1: a_1 = 5 \implies 2\alpha_1 + 5\alpha_2 = 5$.
5.  **Solve for Constants:**
    From $\alpha_1 + \alpha_2 = 2$, $\alpha_1 = 2 - \alpha_2$.
    $2(2-\alpha_2) + 5\alpha_2 = 5 \implies 4 - 2\alpha_2 + 5\alpha_2 = 5 \implies 3\alpha_2 = 1 \implies \alpha_2 = 1/3$.
    $\alpha_1 = 2 - 1/3 = 5/3$.
6.  **Particular Solution:** $a_n = \frac{5}{3} (2)^n + \frac{1}{3} (5)^n$.

**Q4. Application (Nonhomogeneous):** Solve $a_n = 4a_{n-1} + 3^n$ with $a_0 = 1$.
**A4:**
1.  **Homogeneous Solution:** $a_n = 4a_{n-1} \implies r - 4 = 0 \implies r = 4$.
    $a_{h,n} = \alpha (4)^n$.
2.  **Particular Solution:** $f(n) = 3^n$. Guess $a_{p,n} = A \cdot 3^n$. (Since $3$ is not a root of $r-4=0$).
    Substitute into $a_n = 4a_{n-1} + 3^n$:
    $A \cdot 3^n = 4(A \cdot 3^{n-1}) + 3^n$.
    Divide by $3^{n-1}$: $A \cdot 3 = 4A + 3 \implies 3A = 4A + 3 \implies -A = 3 \implies A = -3$.
    $a_{p,n} = -3 \cdot 3^n = -3^{n+1}$.
3.  **Combine:** $a_n = \alpha (4)^n - 3^{n+1}$.
4.  **Initial Conditions:** $a_0 = 1$.
    $1 = \alpha (4)^0 - 3^{0+1} = \alpha - 3$.
    $\alpha = 4$.
5.  **Final Solution:** $a_n = 4 \cdot 4^n - 3^{n+1} = 4^{n+1} - 3^{n+1}$.

**Q5. Application (Modification Rule):** Solve $a_n = 2a_{n-1} - a_{n-2} + 4$ with $a_0=1, a_1=3$.
**A5:**
1.  **Homogeneous Solution:** $a_n = 2a_{n-1} - a_{n-2}$. Characteristic equation: $r^2 - 2r + 1 = 0 \implies (r-1)^2 = 0$. Root $r=1$ with multiplicity 2.
    $a_{h,n} = (\alpha_1 + \alpha_2 n)(1)^n = \alpha_1 + \alpha_2 n$.
2.  **Particular Solution:** $f(n)=4$ (constant). Root $r=1$ has multiplicity $m=2$. So guess $a_{p,n} = A n^2$.
    Substitute into $a_n = 2a_{n-1} - a_{n-2} + 4$:
    $A n^2 = 2(A(n-1)^2) - A(n-2)^2 + 4$.
    As worked out in Example 5 above, this leads to $A = 3/2$.
    $a_{p,n} = \frac{3}{2} n^2$.
3.  **Combine:** $a_n = \alpha_1 + \alpha_2 n + \frac{3}{2} n^2$.
4.  **Initial Conditions:** $a_0=1, a_1=3$.
    $n=0: a_0 = 1 \implies \alpha_1 = 1$.
    $n=1: a_1 = 3 \implies 1 + \alpha_2(1) + \frac{3}{2}(1)^2 = 3 \implies 1 + \alpha_2 + \frac{3}{2} = 3 \implies \frac{5}{2} + \alpha_2 = 3 \implies \alpha_2 = 3 - \frac{5}{2} = \frac{1}{2}$.
5.  **Final Solution:** $a_n = 1 + \frac{1}{2} n + \frac{3}{2} n^2$.

---

This was a comprehensive journey through solving linear recurrence relations! Keep practicing these steps, and you'll find them a powerful tool in your discrete mathematics arsenal.
