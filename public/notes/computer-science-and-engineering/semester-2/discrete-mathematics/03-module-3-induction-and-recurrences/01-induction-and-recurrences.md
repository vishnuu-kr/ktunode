---
title: "Induction and Recurrences"
subject: "DISCRETE MATHEMATICS"
module: "Module 3: Induction and Recurrences"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fa6"
status: "completed"
scrapedAt: "2026-05-20T16:33:05.788Z"
---
Absolutely! Let's dive into Module 3: Induction and Recurrences in Discrete Mathematics. This module is absolutely crucial, not just for passing your exams, but for building a solid foundation for many areas in computer science. Think of it as learning the building blocks for proving how algorithms work and understanding patterns in sequences.

---

## Module 3: Induction and Recurrences

Welcome everyone! Today, we're embarking on a journey into two powerful tools in discrete mathematics: **Mathematical Induction** and **Recurrence Relations**. These concepts are fundamental to proving properties about programs, analyzing the efficiency of algorithms, and even understanding how certain data structures grow.

Let's get started by understanding what each of these is all about.

### 1. Mathematical Induction: Proving Things Are Always True

Have you ever encountered a statement that you believe is true for all natural numbers (1, 2, 3, and so on)? For example, "the sum of the first *n* odd numbers is *n* squared." How do you actually *prove* that this is true, not just for the first few numbers you test, but for *every single one*? That's where Mathematical Induction comes in. It's like a domino effect for proofs!

#### 1.1 The Core Idea: The Domino Analogy

Imagine you have an infinite line of dominoes, all set up perfectly to knock each other over. How can you be sure that *all* of them will fall? You need two conditions:

1.  **The first domino falls.** (You push it over).
2.  **If any domino falls, the next one also falls.** (They are spaced correctly, and each has enough momentum).

If both these conditions are met, you can be absolutely certain that the entire infinite line of dominoes will topple. Mathematical Induction works on the exact same principle.

#### 1.2 The Principle of Mathematical Induction

To prove a statement $P(n)$ is true for all integers $n \geq b$ (where $b$ is some starting integer, often 0 or 1), we follow these two steps:

*   **Base Case (or Basis Step):** Show that the statement $P(b)$ is true. This is like pushing the first domino. We need a concrete starting point.
    *   *Think of it as:* "Okay, for the very first case (n=1, or n=0), our statement holds."

*   **Inductive Step:** Show that if $P(k)$ is true for some arbitrary integer $k \geq b$, then $P(k+1)$ must also be true. This is the crucial step where we establish the chain reaction – if one domino falls, the next one will too.
    *   This is often stated as: **Assume $P(k)$ is true (this is called the Inductive Hypothesis) and prove that $P(k+1)$ is true.**

If you can successfully demonstrate both the Base Case and the Inductive Step, then by the Principle of Mathematical Induction, $P(n)$ is true for all integers $n \geq b$.

**Connection to Course Outcomes:**
This directly addresses **CO1: Check the validity of predicates in Propositional and Quantified Propositional Logic using truth tables, deductive reasoning and inference theory on Propositional Logic**. Induction is a powerful form of deductive reasoning used to prove statements about all natural numbers. It's a method to establish the truth of a quantified statement ($\forall n P(n)$).

#### 1.3 Let's See it in Action: An Example

**Example 1: Sum of the First *n* Positive Integers**

Let's prove the statement $P(n)$: The sum of the first $n$ positive integers is given by the formula $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$.

*   **Base Case:** We need to check for the smallest value of $n$, which is $n=1$.
    *   Left-hand side (LHS): $\sum_{i=1}^{1} i = 1$
    *   Right-hand side (RHS): $\frac{1(1+1)}{2} = \frac{1(2)}{2} = 1$.
    *   Since LHS = RHS, the statement $P(1)$ is true. The first domino falls!

*   **Inductive Step:** Assume that $P(k)$ is true for some arbitrary integer $k \geq 1$. This is our Inductive Hypothesis:
    *   **Inductive Hypothesis (IH):** $\sum_{i=1}^{k} i = \frac{k(k+1)}{2}$ is true.

    Now, we need to show that $P(k+1)$ is true. That is, we need to show:
    *   **To Prove:** $\sum_{i=1}^{k+1} i = \frac{(k+1)((k+1)+1)}{2} = \frac{(k+1)(k+2)}{2}$.

    Let's start with the LHS of $P(k+1)$ and use our IH:
    $$ \sum_{i=1}^{k+1} i = \left(\sum_{i=1}^{k} i\right) + (k+1) $$
    By our Inductive Hypothesis, we can substitute the sum of the first *k* integers:
    $$ = \frac{k(k+1)}{2} + (k+1) $$
    Now, we need to do some algebraic manipulation to make this look like the RHS of $P(k+1)$:
    $$ = \frac{k(k+1)}{2} + \frac{2(k+1)}{2} $$
    $$ = \frac{k(k+1) + 2(k+1)}{2} $$
    We can factor out $(k+1)$ from the numerator:
    $$ = \frac{(k+1)(k+2)}{2} $$
    This is exactly the RHS of $P(k+1)$! So, we've shown that if $P(k)$ is true, then $P(k+1)$ is also true.

**Conclusion:** Since both the base case and the inductive step are true, by the Principle of Mathematical Induction, the formula $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$ is true for all positive integers $n$.

**Remember this:** The key in the inductive step is always to use the Inductive Hypothesis to simplify or transform the expression for $P(k+1)$ into the desired form.

#### 1.4 Variations of Induction

Sometimes, the inductive step needs a little more power.

*   **Strong Induction (or The Principle of Strong Induction):**
    In strong induction, instead of assuming just $P(k)$ is true, we assume that $P(i)$ is true for *all* integers $i$ such that $b \leq i \leq k$.
    *   **Base Case:** Show $P(b)$ is true. (Or sometimes, a few base cases are needed).
    *   **Inductive Step:** Assume that for some integer $k \geq b$, $P(i)$ is true for all integers $i$ with $b \leq i \leq k$. Then, prove that $P(k+1)$ is true.

    **Why use Strong Induction?** It's helpful when proving a statement $P(k+1)$ requires knowledge about *multiple* preceding cases, not just the immediately preceding one.

    **Example:** Proving that every integer greater than 1 can be written as a product of primes. To show that $k+1$ can be written as a product of primes, you might need to use the fact that numbers smaller than $k+1$ (like $k+1$'s factors) can be written as products of primes.

    **Connection to Course Outcomes:** Again, this ties into **CO1** as a more powerful proof technique for predicates.

#### 1.5 What Can Induction Prove?

Induction is excellent for proving properties related to:

*   **Summations and Products:** Like the example we just did.
*   **Inequalities:** E.g., proving $2^n > n$ for all $n \geq 1$.
*   **Divisibility:** E.g., proving $n^3 - n$ is divisible by 3 for all $n \geq 1$.
*   **Properties of Algorithms:** For example, proving a loop invariant, or that a recursive function terminates and returns the correct value. This is where it gets really practical for computer science!
*   **Properties of Sets and Structures:** Like proving properties of trees or graphs.

**Exam Tip:** When you see a statement involving "for all $n \geq \text{some number}$," your first thought should be "Can I prove this by induction?" Always clearly state your base case and your inductive hypothesis. The algebra in the inductive step is often where marks are lost, so be meticulous!

### 2. Recurrence Relations: Defining Sequences Step-by-Step

Now, let's switch gears to **Recurrence Relations**. What are they? Think of them as recipes for generating a sequence of numbers. Instead of giving you a direct formula for the $n$-th term, a recurrence relation tells you how to compute a term based on previous terms.

#### 2.1 The Core Idea: Building Blocks for Sequences

Imagine you're saving money in a bank. You start with $100. Every month, you add $20. How much money do you have after $n$ months?

You could write a direct formula: Money after $n$ months = $100 + 20n$.

But what if the interest rate changed? Or you made different deposits? A recurrence relation is more flexible.

Let $M_n$ be the amount of money you have after $n$ months.

*   **Initial Condition (or Base Case):** $M_0 = 100$ (This is how much you start with).
*   **Recurrence Relation:** $M_n = M_{n-1} + 20$ for $n \geq 1$. (The amount this month is the amount last month plus $20).

This relation tells you how to get $M_1$ from $M_0$, $M_2$ from $M_1$, and so on.

**Definition:** A **recurrence relation** for a sequence $\{a_n\}$ is an equation that expresses $a_n$ in terms of one or more preceding terms ($a_{n-1}, a_{n-2}, \dots$).

**Initial conditions** (or base cases) are required to uniquely define the sequence.

**Connection to Course Outcomes:** This is precisely what **CO5: Explain Generating Functions and solve First Order and Second Order Linear Recurrence Relations with Constant Coefficients** is all about. We'll learn to describe sequences this way and then, importantly, find closed-form solutions (direct formulas) for them.

#### 2.2 Types of Recurrence Relations

Recurrence relations can be classified in several ways. The most important for our purposes are **linear recurrence relations with constant coefficients**.

*   **Linear:** The terms $a_n, a_{n-1}, \dots$ appear only to the first power, and there are no products of terms. For example, $a_n = 2a_{n-1} + 3a_{n-2}$ is linear, but $a_n = a_{n-1}^2$ or $a_n = a_{n-1} a_{n-2}$ are not.
*   **Constant Coefficients:** The coefficients multiplying the preceding terms are constants, not depending on $n$. For example, in $a_n = 2a_{n-1} + 3a_{n-2}$, the coefficients are 2 and 3. If it were $a_n = n a_{n-1}$, it would not have constant coefficients.
*   **Order:** The order of a recurrence relation is the difference between the highest and lowest indices of the terms involved. For $a_n = 2a_{n-1} + 3a_{n-2}$, the highest index is $n$ and the lowest is $n-2$, so the order is $n - (n-2) = 2$. This is a second-order relation.

**Example of a first-order linear recurrence relation with constant coefficients:**
$a_n = 5a_{n-1}$ for $n \geq 1$, with $a_0 = 3$.
Let's compute a few terms:
$a_0 = 3$
$a_1 = 5a_0 = 5(3) = 15$
$a_2 = 5a_1 = 5(15) = 75$
$a_3 = 5a_2 = 5(75) = 375$
Notice a pattern: $3, 15, 75, 375, \dots$. This looks like $3 \times 5^0, 3 \times 5^1, 3 \times 5^2, 3 \times 5^3, \dots$.
So, the closed-form solution appears to be $a_n = 3 \cdot 5^n$.

**Example of a second-order linear recurrence relation with constant coefficients:**
$a_n = a_{n-1} + 2a_{n-2}$ for $n \geq 2$, with $a_0 = 2, a_1 = 7$.
Let's compute a few terms:
$a_0 = 2$
$a_1 = 7$
$a_2 = a_1 + 2a_0 = 7 + 2(2) = 7 + 4 = 11$
$a_3 = a_2 + 2a_1 = 11 + 2(7) = 11 + 14 = 25$
$a_4 = a_3 + 2a_2 = 25 + 2(11) = 25 + 22 = 47$
The sequence is $2, 7, 11, 25, 47, \dots$. Finding a direct formula for this isn't immediately obvious, and that's where our techniques will come in handy.

#### 2.3 Solving Linear Recurrence Relations with Constant Coefficients

This is a core part of **CO5**. The general approach for solving a recurrence relation like $c_n a_n + c_{n-1} a_{n-1} + \dots + c_{n-k} a_{n-k} = f(n)$ involves finding a **homogeneous solution** ($a_n^{(h)}$) and a **particular solution** ($a_n^{(p)}$), such that $a_n = a_n^{(h)} + a_n^{(p)}$.

**1. Solving the Homogeneous Part**

For a homogeneous relation of the form $a_n + c_{n-1}a_{n-1} + \dots + c_{n-k}a_{n-k} = 0$, we use the **characteristic equation**.

For a relation $a_n = c_1 a_{n-1} + c_2 a_{n-2} + \dots + c_k a_{n-k}$:
The **characteristic equation** is $r^k - c_1 r^{k-1} - c_2 r^{k-2} - \dots - c_k = 0$.

The roots of this characteristic equation determine the form of the homogeneous solution.

*   **Case 1: Distinct Real Roots**
    If the characteristic equation has $k$ distinct real roots $r_1, r_2, \dots, r_k$, then the homogeneous solution is of the form:
    $a_n^{(h)} = C_1 r_1^n + C_2 r_2^n + \dots + C_k r_k^n$
    where $C_1, C_2, \dots, C_k$ are constants determined by the initial conditions.

    **Example:** $a_n = 3a_{n-1} - 2a_{n-2}$, with $a_0 = 1, a_1 = 4$.
    1.  Rewrite: $a_n - 3a_{n-1} + 2a_{n-2} = 0$.
    2.  Characteristic Equation: $r^2 - 3r + 2 = 0$.
    3.  Factor: $(r-1)(r-2) = 0$.
    4.  Roots: $r_1 = 1, r_2 = 2$ (distinct real roots).
    5.  Homogeneous Solution Form: $a_n^{(h)} = C_1 (1)^n + C_2 (2)^n = C_1 + C_2 2^n$.
    6.  Use initial conditions to find $C_1, C_2$:
        *   For $n=0$: $a_0 = C_1 + C_2 2^0 = C_1 + C_2 = 1$.
        *   For $n=1$: $a_1 = C_1 + C_2 2^1 = C_1 + 2C_2 = 4$.
    7.  Solve the system of equations:
        $(C_1 + 2C_2) - (C_1 + C_2) = 4 - 1 \implies C_2 = 3$.
        Substitute $C_2=3$ into $C_1 + C_2 = 1 \implies C_1 + 3 = 1 \implies C_1 = -2$.
    8.  So, the solution is $a_n = -2 + 3 \cdot 2^n$.

*   **Case 2: Repeated Real Roots**
    If a root $r$ has multiplicity $m$ (i.e., it appears $m$ times), then the corresponding part of the homogeneous solution is:
    $C_1 r^n + C_2 n r^n + C_3 n^2 r^n + \dots + C_m n^{m-1} r^n$.

    **Example:** $a_n = 4a_{n-1} - 4a_{n-2}$, with $a_0 = 1, a_1 = 4$.
    1.  Rewrite: $a_n - 4a_{n-1} + 4a_{n-2} = 0$.
    2.  Characteristic Equation: $r^2 - 4r + 4 = 0$.
    3.  Factor: $(r-2)^2 = 0$.
    4.  Root: $r = 2$ with multiplicity $m=2$.
    5.  Homogeneous Solution Form: $a_n^{(h)} = C_1 (2)^n + C_2 n (2)^n$.
    6.  Use initial conditions:
        *   For $n=0$: $a_0 = C_1 (2)^0 + C_2 (0) (2)^0 = C_1 = 1$.
        *   For $n=1$: $a_1 = C_1 (2)^1 + C_2 (1) (2)^1 = 2C_1 + 2C_2 = 4$.
    7.  Solve: Since $C_1 = 1$, we have $2(1) + 2C_2 = 4 \implies 2 + 2C_2 = 4 \implies 2C_2 = 2 \implies C_2 = 1$.
    8.  Solution: $a_n = 1 \cdot 2^n + 1 \cdot n \cdot 2^n = 2^n (1+n)$.

*   **Case 3: Complex Roots**
    If the characteristic equation has complex roots, they will come in conjugate pairs. The form of the solution involves trigonometric functions or can be expressed using powers of the modulus and argument of the complex roots. For typical introductory courses, complex roots might be less emphasized, but the principle is the same: express the solution based on the root's form.

**2. Solving the Non-Homogeneous Part (Particular Solution $a_n^{(p)}$)**

If the recurrence relation is not homogeneous (i.e., $f(n) \neq 0$), we need to find a particular solution. The method depends on the form of $f(n)$.

*   **If $f(n)$ is a polynomial of degree $d$:** Guess a polynomial of the same degree for $a_n^{(p)}$.
    *   E.g., if $f(n) = 3n^2 + 5$, guess $a_n^{(p)} = An^2 + Bn + C$.
*   **If $f(n)$ is of the form $c \cdot s^n$:** Guess $a_n^{(p)} = A \cdot s^n$.
    *   **Important Caveat:** If $s$ is also a root of the characteristic equation (for the homogeneous part), then you need to multiply your guess by $n^m$, where $m$ is the multiplicity of $s$ as a root. So, guess $a_n^{(p)} = A \cdot n^m \cdot s^n$.
*   **If $f(n)$ is a combination of polynomials and exponentials:** Use a combination of the above.

After guessing the form of $a_n^{(p)}$, substitute it into the original non-homogeneous recurrence relation to solve for the coefficients (A, B, C, etc.).

**Example:** $a_n = 3a_{n-1} + 2$ with $a_0 = 1$.
1.  Homogeneous part: $a_n = 3a_{n-1}$. Characteristic equation $r-3=0 \implies r=3$. So $a_n^{(h)} = C \cdot 3^n$.
2.  Particular solution: $f(n) = 2$ (a constant, polynomial of degree 0). Since 2 is not related to the root $r=3$, guess $a_n^{(p)} = A$.
3.  Substitute guess into the original relation: $A = 3(A) + 2$.
4.  Solve for A: $A = 3A + 2 \implies -2A = 2 \implies A = -1$.
    So, $a_n^{(p)} = -1$.
5.  General solution: $a_n = a_n^{(h)} + a_n^{(p)} = C \cdot 3^n - 1$.
6.  Use initial condition $a_0 = 1$: $1 = C \cdot 3^0 - 1 \implies 1 = C - 1 \implies C = 2$.
7.  Final solution: $a_n = 2 \cdot 3^n - 1$.

**Common Pitfalls:**
*   Forgetting to check if $s$ is a root of the characteristic equation when $f(n)$ is of the form $c \cdot s^n$.
*   Errors in solving the system of linear equations for the constants.

**Connection to Course Outcomes:** This entire section is dedicated to **CO5**. Understanding these methods allows us to find closed-form solutions, which are much more useful than the recursive definition for analyzing algorithm behavior. For example, if an algorithm's runtime follows a recurrence relation, finding its closed-form solution tells us its efficiency (e.g., $O(n^2)$, $O(\log n)$).

#### 2.4 Generating Functions (Brief Introduction)

The other key part of **CO5** is Generating Functions. While the full deep dive into generating functions is a topic in itself, the basic idea is to represent a sequence $\{a_n\}$ as a power series $G(x) = \sum_{n=0}^{\infty} a_n x^n$. This transforms a recurrence relation problem into an algebraic problem in the domain of power series.

**Example:** For $a_n = a_{n-1} + 2a_{n-2}$ with $a_0 = 1, a_1 = 2$.
Let $G(x) = \sum_{n=0}^{\infty} a_n x^n$.
Multiply the recurrence by $x^n$ and sum from $n=2$ to $\infty$:
$\sum_{n=2}^{\infty} a_n x^n = \sum_{n=2}^{\infty} a_{n-1} x^n + 2 \sum_{n=2}^{\infty} a_{n-2} x^n$.

The left side is $G(x) - a_0 - a_1 x$.
The first term on the right is $x \sum_{n=2}^{\infty} a_{n-1} x^{n-1} = x (G(x) - a_0)$.
The second term on the right is $2x^2 \sum_{n=2}^{\infty} a_{n-2} x^{n-2} = 2x^2 G(x)$.

Substituting these in and solving for $G(x)$:
$G(x) - a_0 - a_1 x = x(G(x) - a_0) + 2x^2 G(x)$
$G(x) - 1 - 2x = xG(x) - x + 2x^2 G(x)$
$G(x) - xG(x) - 2x^2 G(x) = 1 + 2x - x$
$G(x)(1 - x - 2x^2) = 1 + x$
$G(x) = \frac{1+x}{1 - x - 2x^2}$.

From here, using partial fraction decomposition and known series expansions (like $\frac{1}{1-rx} = \sum r^n x^n$), we can extract the coefficients $a_n$ to get the closed-form solution. This method is powerful for complex recurrences and solving sums.

### 3. Connecting Induction and Recurrences

You might wonder, how do these two concepts connect?

1.  **Proving Recurrence Solutions:** Induction is the standard way to *prove* that a closed-form solution you found for a recurrence relation is indeed correct. You'd use the base case(s) provided and then the inductive step would show that if the formula works for $k$ terms, it also works for $k+1$ terms according to the recurrence.

2.  **Defining Sequences for Induction:** Sometimes, a sequence is *defined* by a recurrence relation, and then we use induction to prove a property about that sequence. For example, proving that terms generated by a specific recurrence relation are always even.

**Analogy:** Think of recurrence relations as creating a set of building instructions for a complex structure (a sequence). Mathematical induction is the tool you use to prove that the structure, when built according to those instructions, will always have a certain property (e.g., it will be stable, it will reach a certain height).

### 4. Other Course Outcomes and How They Relate (Implicitly)

While Induction and Recurrences primarily target **CO5**, they touch upon others:

*   **CO1 (Logic):** The rigorous step-by-step deduction in induction mirrors logical inference. Proving a statement about all natural numbers $\forall n P(n)$ is a core logical task.
*   **CO2 (Counting):** Many combinatorial problems (counting) can be formulated as recurrence relations. For example, the number of ways to tile a $2 \times n$ strip with dominoes often leads to a recurrence relation. Solving that recurrence gives you the count. If $a_n$ is the number of ways, you might find $a_n = a_{n-1} + a_{n-2}$, which is the Fibonacci sequence! So, understanding recurrences is crucial for many counting problems that don't fit simple permutation/combination formulas directly.

---

### Sample Questions and Answers

Here are a few questions to test your understanding:

**Q1 (Conceptual - Induction):** What are the two essential steps in a proof by mathematical induction? Explain why both are necessary.

**Answer:**
The two essential steps are:
1.  **Base Case:** Prove the statement is true for the smallest integer in the set (e.g., $n=1$ or $n=0$).
2.  **Inductive Step:** Assume the statement is true for an arbitrary integer $k \geq \text{base value}$ (the Inductive Hypothesis) and then prove it is true for $k+1$.

Both are necessary because:
*   The **Base Case** anchors the proof. Without it, we have no starting point to initiate the chain reaction.
*   The **Inductive Step** establishes the "domino effect." It shows that if one case holds, the next must also hold. Without it, even if the first domino falls, we can't guarantee the second will.

**Q2 (Application - Induction):** Prove by mathematical induction that for all integers $n \geq 1$, the sum of the first $n$ positive odd integers is $n^2$.
That is, prove $\sum_{i=1}^{n} (2i-1) = n^2$.

**Answer:**
Let $P(n)$ be the statement $\sum_{i=1}^{n} (2i-1) = n^2$.

*   **Base Case (n=1):**
    LHS: $\sum_{i=1}^{1} (2i-1) = 2(1)-1 = 1$.
    RHS: $1^2 = 1$.
    Since LHS = RHS, $P(1)$ is true.

*   **Inductive Step:**
    Assume $P(k)$ is true for some arbitrary integer $k \geq 1$.
    **Inductive Hypothesis (IH):** $\sum_{i=1}^{k} (2i-1) = k^2$.

    We need to prove $P(k+1)$ is true, i.e., $\sum_{i=1}^{k+1} (2i-1) = (k+1)^2$.

    Start with the LHS of $P(k+1)$:
    $$ \sum_{i=1}^{k+1} (2i-1) = \left(\sum_{i=1}^{k} (2i-1)\right) + (2(k+1)-1) $$
    Using the IH, substitute $k^2$ for the sum:
    $$ = k^2 + (2k+2-1) $$
    $$ = k^2 + 2k + 1 $$
    This is a perfect square:
    $$ = (k+1)^2 $$
    This is the RHS of $P(k+1)$.

*   **Conclusion:** By the Principle of Mathematical Induction, $P(n)$ is true for all integers $n \geq 1$.

**Q3 (Application - Recurrence Relation Solving):** Find a closed-form solution for the recurrence relation $a_n = 2a_{n-1} + 3a_{n-2}$ with initial conditions $a_0 = 1$ and $a_1 = 5$.

**Answer:**
This is a second-order linear homogeneous recurrence relation with constant coefficients.

1.  **Characteristic Equation:**
    The relation is $a_n - 2a_{n-1} - 3a_{n-2} = 0$.
    The characteristic equation is $r^2 - 2r - 3 = 0$.

2.  **Find the Roots:**
    Factor the quadratic equation: $(r-3)(r+1) = 0$.
    The roots are $r_1 = 3$ and $r_2 = -1$. These are distinct real roots.

3.  **Form of the Homogeneous Solution:**
    Since the roots are distinct, the solution is of the form $a_n^{(h)} = C_1 r_1^n + C_2 r_2^n$.
    So, $a_n = C_1 (3)^n + C_2 (-1)^n$.

4.  **Use Initial Conditions to Find Constants $C_1$ and $C_2$:**
    *   For $n=0$: $a_0 = C_1 (3)^0 + C_2 (-1)^0 = C_1 + C_2$. We are given $a_0 = 1$.
        So, $C_1 + C_2 = 1$.
    *   For $n=1$: $a_1 = C_1 (3)^1 + C_2 (-1)^1 = 3C_1 - C_2$. We are given $a_1 = 5$.
        So, $3C_1 - C_2 = 5$.

5.  **Solve the System of Equations:**
    We have:
    (1) $C_1 + C_2 = 1$
    (2) $3C_1 - C_2 = 5$

    Add (1) and (2):
    $(C_1 + C_2) + (3C_1 - C_2) = 1 + 5$
    $4C_1 = 6$
    $C_1 = \frac{6}{4} = \frac{3}{2}$.

    Substitute $C_1 = \frac{3}{2}$ into (1):
    $\frac{3}{2} + C_2 = 1$
    $C_2 = 1 - \frac{3}{2} = -\frac{1}{2}$.

6.  **Write the Closed-Form Solution:**
    Substitute the values of $C_1$ and $C_2$ back into the general form:
    $a_n = \frac{3}{2} (3)^n - \frac{1}{2} (-1)^n$.

    This can also be written as $a_n = \frac{3^{n+1} - (-1)^n}{2}$.

**Q4 (Conceptual - Recurrences):** What is the difference between a homogeneous and a non-homogeneous recurrence relation?

**Answer:**
A recurrence relation is **homogeneous** if all terms involve the sequence terms themselves, and the right-hand side (or the constant term) is zero. For example, $a_n = 2a_{n-1} + 3a_{n-2}$.

A recurrence relation is **non-homogeneous** if there is a term on the right-hand side that does not depend on any of the sequence terms. This term is often a function of $n$, like a constant, a polynomial in $n$, or an exponential function. For example, $a_n = 2a_{n-1} + 3a_{n-2} + 5$, or $a_n = 2a_{n-1} + n^2$.

The solution to a non-homogeneous recurrence relation is the sum of the homogeneous solution and a particular solution that accounts for the non-homogeneous part.

---

This concludes our exploration of Induction and Recurrences! These are powerful tools, and with practice, you'll become very adept at using them. Keep reviewing the steps for induction and the methods for solving recurrences. They are fundamental to much of what we do in discrete mathematics and computer science.

Happy studying!
