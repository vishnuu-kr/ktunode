---
title: "Using Generating Functions to Solve Recurrence Relations."
subject: "DISCRETE MATHEMATICS"
module: "Module 3: Induction and Recurrences"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fad"
status: "completed"
scrapedAt: "2026-05-20T16:33:10.802Z"
---
# DISCRETE MATHEMATICS: Module 3: Induction and Recurrences

## Topic: Using Generating Functions to Solve Recurrence Relations

Welcome, everyone! Today, we're diving into a truly powerful technique in discrete mathematics: using **generating functions** to solve recurrence relations. This is a concept that, once you grasp it, will open up a whole new way of thinking about sequences and the problems they represent. It's a cornerstone for many areas in computer science, from algorithm analysis to combinatorics.

We've already touched on recurrence relations – those beautiful equations that define a sequence by relating its terms to previous ones. Think of the Fibonacci sequence, where each number is the sum of the two preceding ones. Or how about the number of ways to climb a staircase if you can take one or two steps at a time? These are all recurrence relations. But sometimes, finding a direct formula for the $n$-th term can be a headache. That's where our generating functions come in to save the day!

This topic directly contributes to **Course Outcome 5 (CO5): Explain Generating Functions and solve First Order and Second Order Linear Recurrence Relations with Constant Coefficients (Knowledge Level: K3)**. We'll not only understand *what* generating functions are but also learn how to *apply* them to find explicit formulas for sequences defined by recurrences.

---

### What Exactly *Are* Generating Functions?

Let's start with the fundamental question: what is a generating function?

Imagine you have a sequence of numbers, say $a_0, a_1, a_2, a_3, \dots$. A generating function for this sequence, often denoted as $A(x)$ or $G(a_n; x)$, is simply an infinite polynomial (or power series) where the coefficients are the terms of the sequence.

$$A(x) = a_0 + a_1x + a_2x^2 + a_3x^3 + \dots = \sum_{n=0}^{\infty} a_n x^n$$

Think of it like this: If you have a bag of marbles, and you want to represent the number of red marbles, blue marbles, green marbles, and so on, you could assign a "weight" or "value" to each color. A generating function is like creating a "master catalogue" where the *index* of the term ($x^n$) represents some property or category (like "number of items" or "number of steps"), and the *coefficient* ($a_n$) tells you "how many ways" or "how many items" fit that property.

**Analogy:** Let's say you're at a vending machine that sells apples for $1, bananas for $2, and oranges for $3. How many ways can you spend exactly $N$? We can represent this with generating functions! For apples, we have $1+x+x^2+x^3+\dots$ (if we can buy 0, 1, 2, 3... apples). For bananas, $1+y+y^2+y^3+\dots$. But we want to combine these.

A simpler analogy for sequences: Suppose you're tracking the number of ways to save money each month.
*   Month 0: You have $10 ($a_0 = 10$).
*   Month 1: You save $5 more ($a_1 = 5$).
*   Month 2: You save $8 more ($a_2 = 8$).
Your sequence is $10, 5, 8, \dots$.
Your generating function would be $A(x) = 10 + 5x + 8x^2 + \dots$.

**Why is this useful?** Well, when you multiply generating functions, something magical happens with the coefficients. If $A(x) = \sum_{n=0}^{\infty} a_n x^n$ and $B(x) = \sum_{n=0}^{\infty} b_n x^n$, then their product $C(x) = A(x)B(x)$ is given by:

$$C(x) = \left(\sum_{i=0}^{\infty} a_i x^i\right) \left(\sum_{j=0}^{\infty} b_j x^j\right) = \sum_{n=0}^{\infty} \left(\sum_{k=0}^{n} a_k b_{n-k}\right) x^n$$

Notice the coefficient of $x^n$ in $C(x)$? It's $\sum_{k=0}^{n} a_k b_{n-k}$. This is exactly the **Cauchy product** of the two sequences, and it corresponds to the **convolution** of the sequences. This convolution operation is what allows us to relate generating functions of sequences to recurrence relations.

**Key takeaway from Rosen (8/e):** Generating functions provide a systematic way to encode sequences and manipulate them algebraically. Operations on sequences (like convolution) translate to simple algebraic operations on their generating functions (like multiplication).

---

### The Strategy: From Recurrence to Explicit Formula

The general strategy for solving a linear recurrence relation with constant coefficients using generating functions is a multi-step process:

1.  **Define the Generating Function:** Let $A(x)$ be the generating function for the sequence defined by the recurrence relation.
2.  **Substitute into the Recurrence:** Substitute the generating function $A(x)$ and its related series into the given recurrence relation.
3.  **Solve for A(x):** Manipulate the equation algebraically to isolate $A(x)$. You'll often end up with $A(x)$ expressed as a rational function (a polynomial divided by another polynomial).
4.  **Partial Fraction Decomposition:** Decompose the rational function $A(x)$ into simpler fractions. This is a crucial step that uses techniques from algebra.
5.  **Expand using Geometric Series:** Expand each of the simpler fractions using the formula for the sum of an infinite geometric series: $\frac{1}{1-rx} = 1 + rx + (rx)^2 + (rx)^3 + \dots = \sum_{n=0}^{\infty} (rx)^n$.
6.  **Identify the Coefficients:** Once $A(x)$ is expressed as a power series $\sum_{n=0}^{\infty} a_n x^n$, the coefficient $a_n$ is the explicit formula for the $n$-th term of the sequence.

This process, especially steps 4 and 5, requires us to be comfortable with algebraic manipulation and a few standard power series expansions.

---

### Example 1: A Simple First-Order Recurrence

Let's start with a straightforward example. Consider the recurrence relation:

$a_n = 2a_{n-1}$ for $n \ge 1$, with the initial condition $a_0 = 3$.

This is a classic example of geometric growth. We expect $a_n = 3 \cdot 2^n$. Let's see if generating functions can get us there.

**Step 1: Define the Generating Function**
Let $A(x) = \sum_{n=0}^{\infty} a_n x^n = a_0 + a_1x + a_2x^2 + \dots$

**Step 2: Substitute into the Recurrence**
The recurrence is $a_n = 2a_{n-1}$. Let's multiply both sides by $x^n$ and sum over all valid $n$. The recurrence holds for $n \ge 1$.

$$\sum_{n=1}^{\infty} a_n x^n = \sum_{n=1}^{\infty} 2a_{n-1} x^n$$

Now, let's relate these sums to $A(x)$.
The left side is $\sum_{n=1}^{\infty} a_n x^n = (a_0 + a_1x + a_2x^2 + \dots) - a_0 = A(x) - a_0$.
The right side is $2x \sum_{n=1}^{\infty} a_{n-1} x^{n-1}$. Let $k = n-1$. When $n=1$, $k=0$. When $n \to \infty$, $k \to \infty$.
So, $2x \sum_{k=0}^{\infty} a_k x^k = 2x A(x)$.

Putting it together:
$A(x) - a_0 = 2x A(x)$

**Step 3: Solve for A(x)**
We know $a_0 = 3$.
$A(x) - 3 = 2x A(x)$
$A(x) - 2x A(x) = 3$
$A(x) (1 - 2x) = 3$
$A(x) = \frac{3}{1 - 2x}$

**Step 4: Partial Fraction Decomposition**
In this case, $A(x)$ is already in a simple form, which is perfect! It's a constant divided by a linear term.

**Step 5: Expand using Geometric Series**
Recall the geometric series formula: $\frac{1}{1-rx} = \sum_{n=0}^{\infty} (rx)^n$.
Here, our expression is $3 \cdot \frac{1}{1 - 2x}$. So, $r=2$.

$A(x) = 3 \sum_{n=0}^{\infty} (2x)^n = 3 \sum_{n=0}^{\infty} 2^n x^n = \sum_{n=0}^{\infty} (3 \cdot 2^n) x^n$

**Step 6: Identify the Coefficients**
By comparing this to our definition $A(x) = \sum_{n=0}^{\infty} a_n x^n$, we can see that:

$a_n = 3 \cdot 2^n$

And there you have it! We've derived the explicit formula $a_n = 3 \cdot 2^n$ from the recurrence relation using generating functions. This matches our intuition for this simple geometric progression.

**Remember this:** The power lies in translating the recurrence into an equation involving the generating function, and then transforming that equation back into a power series to read off the coefficients.

---

### Example 2: A Second-Order Recurrence (Fibonacci-like)

Let's tackle a slightly more complex example, similar to the Fibonacci sequence, but with different initial conditions.

Consider the recurrence: $a_n = a_{n-1} + a_{n-2}$ for $n \ge 2$, with $a_0 = 1$ and $a_1 = 2$.

This is a homogeneous linear recurrence relation of order 2. The characteristic equation method would also work here, but let's stick to generating functions.

**Step 1: Define the Generating Function**
$A(x) = \sum_{n=0}^{\infty} a_n x^n = a_0 + a_1x + a_2x^2 + a_3x^3 + \dots$

**Step 2: Substitute into the Recurrence**
The recurrence $a_n = a_{n-1} + a_{n-2}$ holds for $n \ge 2$. Let's multiply by $x^n$ and sum from $n=2$ onwards:

$$\sum_{n=2}^{\infty} a_n x^n = \sum_{n=2}^{\infty} a_{n-1} x^n + \sum_{n=2}^{\infty} a_{n-2} x^n$$

Now, let's express each sum in terms of $A(x)$:

*   **Left side:** $\sum_{n=2}^{\infty} a_n x^n = (a_0 + a_1x + a_2x^2 + \dots) - a_0 - a_1x = A(x) - a_0 - a_1x$.
*   **First sum on the right:** $\sum_{n=2}^{\infty} a_{n-1} x^n = x \sum_{n=2}^{\infty} a_{n-1} x^{n-1}$. Let $k = n-1$. When $n=2, k=1$.
    $x \sum_{k=1}^{\infty} a_k x^k = x (a_1x + a_2x^2 + \dots) = x (A(x) - a_0)$.
*   **Second sum on the right:** $\sum_{n=2}^{\infty} a_{n-2} x^n = x^2 \sum_{n=2}^{\infty} a_{n-2} x^{n-2}$. Let $k = n-2$. When $n=2, k=0$.
    $x^2 \sum_{k=0}^{\infty} a_k x^k = x^2 A(x)$.

So, the equation becomes:
$A(x) - a_0 - a_1x = x(A(x) - a_0) + x^2 A(x)$

**Step 3: Solve for A(x)**
Substitute $a_0 = 1$ and $a_1 = 2$:
$A(x) - 1 - 2x = x(A(x) - 1) + x^2 A(x)$
$A(x) - 1 - 2x = xA(x) - x + x^2 A(x)$
$A(x) - xA(x) - x^2 A(x) = 1 + 2x - x$
$A(x)(1 - x - x^2) = 1 + x$
$A(x) = \frac{1+x}{1 - x - x^2}$

This is our rational function for $A(x)$. Now comes the harder part: partial fraction decomposition.

**Step 4: Partial Fraction Decomposition**
To decompose $\frac{1+x}{1 - x - x^2}$, we first need to find the roots of the denominator $1 - x - x^2$. This is the reciprocal of the characteristic polynomial of the recurrence ($r^2 - r - 1 = 0$).
Let the roots of $1 - x - x^2 = 0$ be $r_1$ and $r_2$.
$x^2 + x - 1 = 0$. Using the quadratic formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$x = \frac{-1 \pm \sqrt{1^2 - 4(1)(-1)}}{2(1)} = \frac{-1 \pm \sqrt{1+4}}{2} = \frac{-1 \pm \sqrt{5}}{2}$.

Let $\phi = \frac{1+\sqrt{5}}{2}$ (the golden ratio) and $\psi = \frac{1-\sqrt{5}}{2}$ (its conjugate).
The roots of $1 - x - x^2 = 0$ are $1/\phi = \frac{\sqrt{5}-1}{2}$ and $1/\psi = \frac{-\sqrt{5}-1}{2}$.
Let's check: $(\frac{-1+\sqrt{5}}{2}) (\frac{-1-\sqrt{5}}{2}) = \frac{(-1)^2 - (\sqrt{5})^2}{4} = \frac{1-5}{4} = -1$.
So the denominator $1 - x - x^2$ can be factored as $-(x - \frac{-1+\sqrt{5}}{2})(x - \frac{-1-\sqrt{5}}{2})$.
Ah, wait. The factorization should be $(1 - r_1 x)(1 - r_2 x)$ where $r_1, r_2$ are the roots of $x^2-x-1=0$.
The roots of $x^2 - x - 1 = 0$ are $\phi$ and $\psi$.
So $1 - x - x^2 = (1 - \phi x)(1 - \psi x)$.

Let's set up the partial fraction decomposition:
$$\frac{1+x}{1 - x - x^2} = \frac{A}{1 - \phi x} + \frac{B}{1 - \psi x}$$
Multiply both sides by $(1 - x - x^2)$:
$1+x = A(1-\psi x) + B(1-\phi x)$
$1+x = A - A\psi x + B - B\phi x$
$1+x = (A+B) + (-A\psi - B\phi)x$

Equating coefficients of powers of $x$:
For $x^1$: $1 = -A\psi - B\phi$
For $x^0$: $1 = A+B$

From $1 = A+B$, we get $B = 1-A$. Substitute into the first equation:
$1 = -A\psi - (1-A)\phi$
$1 = -A\psi - \phi + A\phi$
$1 + \phi = A(\phi - \psi)$

We know $\phi - \psi = \frac{1+\sqrt{5}}{2} - \frac{1-\sqrt{5}}{2} = \frac{2\sqrt{5}}{2} = \sqrt{5}$.
So, $1 + \phi = A\sqrt{5}$.
$A = \frac{1+\phi}{\sqrt{5}} = \frac{1 + \frac{1+\sqrt{5}}{2}}{\sqrt{5}} = \frac{\frac{2+1+\sqrt{5}}{2}}{\sqrt{5}} = \frac{3+\sqrt{5}}{2\sqrt{5}}$. This is getting complicated with $\phi$ and $\psi$.

**A More Direct Approach for Known Sequences:**

Often, for recurrence relations like Fibonacci, we know the final form involves powers of $\phi$ and $\psi$. The generating function for the standard Fibonacci sequence ($F_0=0, F_1=1, F_n = F_{n-1} + F_{n-2}$) is $\frac{x}{1-x-x^2}$.

Let's use the fact that $1-x-x^2 = (1-\phi x)(1-\psi x)$.
So, $A(x) = \frac{1+x}{(1-\phi x)(1-\psi x)}$.
Let's decompose:
$\frac{1+x}{(1-\phi x)(1-\psi x)} = \frac{A}{1-\phi x} + \frac{B}{1-\psi x}$
$1+x = A(1-\psi x) + B(1-\phi x)$

If $x = 1/\phi$:
$1 + 1/\phi = A(1 - \psi/\phi)$
$1 + \phi = A(1 - \psi/\phi) = A(\frac{\phi-\psi}{\phi}) = A(\frac{\sqrt{5}}{\phi})$
$A = \frac{\phi(1+\phi)}{\sqrt{5}} = \frac{\phi + \phi^2}{\sqrt{5}}$
Since $\phi^2 = \phi + 1$,
$A = \frac{\phi + (\phi+1)}{\sqrt{5}} = \frac{2\phi+1}{\sqrt{5}} = \frac{2(\frac{1+\sqrt{5}}{2})+1}{\sqrt{5}} = \frac{1+\sqrt{5}+1}{\sqrt{5}} = \frac{2+\sqrt{5}}{\sqrt{5}}$. Still not clean.

Let's try plugging in specific values for x to solve for A and B directly.
$1+x = A(1-\psi x) + B(1-\phi x)$

Set $x = 1/\phi$.
$1 + 1/\phi = A(1 - \psi/\phi) + B(0) = A(\frac{\phi-\psi}{\phi}) = A(\frac{\sqrt{5}}{\phi})$
$1+\phi = A(\frac{\sqrt{5}}{\phi})$
$A = \frac{\phi(1+\phi)}{\sqrt{5}} = \frac{\phi( \phi^2)}{\sqrt{5}} = \frac{\phi^3}{\sqrt{5}}$.
We know $\phi^3 = 2\phi+1$. So $A = \frac{2\phi+1}{\sqrt{5}} = \frac{2+\sqrt{5}}{\sqrt{5}}$.

Set $x = 1/\psi$.
$1 + 1/\psi = A(0) + B(1 - \phi/\psi)$
$1+\psi = B(\frac{\psi-\phi}{\psi}) = B(\frac{-\sqrt{5}}{\psi})$
$B = \frac{\psi(1+\psi)}{-\sqrt{5}} = \frac{\psi(\psi^2)}{-\sqrt{5}} = \frac{\psi^3}{-\sqrt{5}}$.
$\psi^3 = 2\psi+1$. So $B = \frac{2\psi+1}{-\sqrt{5}} = \frac{2(\frac{1-\sqrt{5}}{2})+1}{-\sqrt{5}} = \frac{1-\sqrt{5}+1}{-\sqrt{5}} = \frac{2-\sqrt{5}}{-\sqrt{5}} = \frac{\sqrt{5}-2}{\sqrt{5}}$.

This is tedious and error-prone. Let's re-examine the structure of the coefficients for a sequence like this.

**Let's use the property that $a_0, a_1$ are often tied to the numerator.**

For the standard Fibonacci sequence $F_n$ with $F_0=0, F_1=1$, the generating function is $\frac{x}{1-x-x^2}$.
For $a_n = a_{n-1} + a_{n-2}$, the general form of the solution is $a_n = c_1 \phi^n + c_2 \psi^n$.
The generating function $A(x)$ can be written as $\frac{P(x)}{1-x-x^2}$, where $P(x)$ is a polynomial of degree at most 1.

$A(x) = \frac{a_0 + (a_1-a_0)x}{1-x-x^2}$ for $a_n = a_{n-1} + a_{n-2}$ with $a_0, a_1$. Let's verify this.
$A(x) = \frac{1 + (2-1)x}{1-x-x^2} = \frac{1+x}{1-x-x^2}$. This matches what we found.

So, the general form of the numerator for $a_n = c_1 a_{n-1} + c_2 a_{n-2}$ is related to the initial conditions.
The decomposition of $\frac{a_0 + (a_1-a_0)x}{1-x-x^2}$ gives:
$\frac{a_0 + (a_1-a_0)x}{(1-\phi x)(1-\psi x)} = \frac{A}{1-\phi x} + \frac{B}{1-\psi x}$
$a_0 + (a_1-a_0)x = A(1-\psi x) + B(1-\phi x)$

Set $x = 1/\phi$:
$a_0 + (a_1-a_0)/\phi = A(1-\psi/\phi) = A(\frac{\sqrt{5}}{\phi})$
$A = \frac{\phi(a_0 + (a_1-a_0)/\phi)}{\sqrt{5}} = \frac{a_0\phi + a_1 - a_0}{\sqrt{5}} = \frac{a_1 - a_0 + a_0\phi}{\sqrt{5}}$

Set $x = 1/\psi$:
$a_0 + (a_1-a_0)/\psi = B(1-\phi/\psi) = B(\frac{-\sqrt{5}}{\psi})$
$B = \frac{\psi(a_0 + (a_1-a_0)/\psi)}{-\sqrt{5}} = \frac{a_0\psi + a_1 - a_0}{-\sqrt{5}} = \frac{a_0 - a_1 - a_0\psi}{\sqrt{5}}$

So, $A(x) = \frac{A}{1-\phi x} + \frac{B}{1-\psi x}$.
Using $\frac{1}{1-rx} = \sum_{n=0}^{\infty} (rx)^n$:
$A(x) = A \sum_{n=0}^{\infty} (\phi x)^n + B \sum_{n=0}^{\infty} (\psi x)^n = \sum_{n=0}^{\infty} (A\phi^n + B\psi^n) x^n$

Therefore, $a_n = A\phi^n + B\psi^n$.

Let's calculate $A$ and $B$ for our specific case $a_0=1, a_1=2$:
$A = \frac{2 - 1 + 1\phi}{\sqrt{5}} = \frac{1+\phi}{\sqrt{5}} = \frac{1 + \frac{1+\sqrt{5}}{2}}{\sqrt{5}} = \frac{\frac{3+\sqrt{5}}{2}}{\sqrt{5}} = \frac{3+\sqrt{5}}{2\sqrt{5}}$
$B = \frac{1 - 2 - 1\psi}{\sqrt{5}} = \frac{-1-\psi}{\sqrt{5}} = \frac{-1 - \frac{1-\sqrt{5}}{2}}{\sqrt{5}} = \frac{\frac{-2-1+\sqrt{5}}{2}}{\sqrt{5}} = \frac{-3+\sqrt{5}}{2\sqrt{5}}$

Let's re-check the $A$ and $B$ coefficients based on the standard Fibonacci formula derivation.
For $F_n$, we have $F_0=0, F_1=1$. The generating function is $\frac{x}{1-x-x^2}$.
$\frac{x}{1-x-x^2} = \frac{A}{1-\phi x} + \frac{B}{1-\psi x}$.
$x = A(1-\psi x) + B(1-\phi x)$.
Set $x=1/\phi$: $1/\phi = A(1-\psi/\phi) = A(\sqrt{5}/\phi) \implies A=1/\sqrt{5}$.
Set $x=1/\psi$: $1/\psi = B(1-\phi/\psi) = B(-\sqrt{5}/\psi) \implies B=-1/\sqrt{5}$.
So $F_n = \frac{1}{\sqrt{5}} \phi^n - \frac{1}{\sqrt{5}} \psi^n = \frac{\phi^n - \psi^n}{\sqrt{5}}$. This is the Binet formula for Fibonacci numbers.

Now, for our sequence $a_n$: $a_0=1, a_1=2$.
The numerator $1+x$ suggests a shift or different initial terms.
$A(x) = \frac{1+x}{1-x-x^2}$.
Let's decompose it into known generating functions.
We know $\frac{x}{1-x-x^2} = \sum_{n=0}^{\infty} F_n x^n$.
We know $\frac{1}{1-x-x^2}$ is related to Lucas numbers ($L_n$).
$L_0=2, L_1=1, L_n = L_{n-1} + L_{n-2}$. Generating function for $L_n$ is $\frac{2-x}{1-x-x^2}$.

Let's try to express $\frac{1+x}{1-x-x^2}$ in terms of $\frac{x}{1-x-x^2}$ and $\frac{1}{1-x-x^2}$.
$\frac{1+x}{1-x-x^2} = \frac{1}{1-x-x^2} + \frac{x}{1-x-x^2}$.
So $A(x) = (\text{GF for } L_n \text{ if numerator was } 2-x) + (\text{GF for } F_n)$.
This suggests $a_n$ is a combination of $F_n$ and something else.

Let's use the general form $a_n = c_1 \phi^n + c_2 \psi^n$.
$a_0 = c_1 + c_2 = 1$
$a_1 = c_1 \phi + c_2 \psi = 2$
From $c_1+c_2=1$, $c_2 = 1-c_1$.
$c_1 \phi + (1-c_1)\psi = 2$
$c_1 \phi + \psi - c_1\psi = 2$
$c_1(\phi - \psi) = 2 - \psi$
$c_1 \sqrt{5} = 2 - \frac{1-\sqrt{5}}{2} = \frac{4 - (1-\sqrt{5})}{2} = \frac{3+\sqrt{5}}{2}$
$c_1 = \frac{3+\sqrt{5}}{2\sqrt{5}}$

$c_2 = 1 - c_1 = 1 - \frac{3+\sqrt{5}}{2\sqrt{5}} = \frac{2\sqrt{5} - 3 - \sqrt{5}}{2\sqrt{5}} = \frac{\sqrt{5}-3}{2\sqrt{5}}$

So, $a_n = \frac{3+\sqrt{5}}{2\sqrt{5}} \phi^n + \frac{\sqrt{5}-3}{2\sqrt{5}} \psi^n$.

Let's simplify $A$ and $B$ coefficients we found from partial fractions:
$A = \frac{3+\sqrt{5}}{2\sqrt{5}}$. This matches $c_1$.
$B = \frac{\sqrt{5}-3}{2\sqrt{5}} = - \frac{3-\sqrt{5}}{2\sqrt{5}}$. This matches $c_2$.

So, $a_n = A \phi^n + B \psi^n$.
$A(x) = \frac{A}{1-\phi x} + \frac{B}{1-\psi x} = A \sum (\phi x)^n + B \sum (\psi x)^n = \sum (A\phi^n + B\psi^n) x^n$.
The coefficient $a_n = A\phi^n + B\psi^n$.

This confirms our $A$ and $B$ calculation using partial fractions.

**Step 5: Expand using Geometric Series**
$A(x) = \frac{A}{1-\phi x} + \frac{B}{1-\psi x}$
$A(x) = A \sum_{n=0}^{\infty} (\phi x)^n + B \sum_{n=0}^{\infty} (\psi x)^n$
$A(x) = \sum_{n=0}^{\infty} (A \phi^n + B \psi^n) x^n$

**Step 6: Identify the Coefficients**
$a_n = A \phi^n + B \psi^n$
where $A = \frac{3+\sqrt{5}}{2\sqrt{5}}$ and $B = \frac{\sqrt{5}-3}{2\sqrt{5}}$.

We can simplify $A$ and $B$ further using $\phi$ and $\psi$.
$A = \frac{1}{\sqrt{5}} \frac{3+\sqrt{5}}{2} = \frac{1}{\sqrt{5}} (\frac{1+\sqrt{5}}{2} + 1) = \frac{1}{\sqrt{5}}(\phi+1) = \frac{\phi^2}{\sqrt{5}}$.
$B = \frac{1}{\sqrt{5}} \frac{\sqrt{5}-3}{2} = \frac{1}{\sqrt{5}} (\frac{1-\sqrt{5}}{2} - 1) = \frac{1}{\sqrt{5}}(\psi-1) = \frac{1}{\sqrt{5}}(\psi - (\phi - \psi)\text{no...})$
Let's use $c_2 = 1-c_1$.
$c_2 = 1 - \frac{3+\sqrt{5}}{2\sqrt{5}} = \frac{2\sqrt{5}-3-\sqrt{5}}{2\sqrt{5}} = \frac{\sqrt{5}-3}{2\sqrt{5}}$
$a_n = \frac{3+\sqrt{5}}{2\sqrt{5}} \phi^n + \frac{\sqrt{5}-3}{2\sqrt{5}} \psi^n$.

Let's test for small values:
$a_0 = A+B = \frac{3+\sqrt{5} + \sqrt{5}-3}{2\sqrt{5}} = \frac{2\sqrt{5}}{2\sqrt{5}} = 1$. Correct.
$a_1 = A\phi + B\psi = \frac{3+\sqrt{5}}{2\sqrt{5}} \frac{1+\sqrt{5}}{2} + \frac{\sqrt{5}-3}{2\sqrt{5}} \frac{1-\sqrt{5}}{2}$
$a_1 = \frac{1}{4\sqrt{5}} [(3+\sqrt{5})(1+\sqrt{5}) + (\sqrt{5}-3)(1-\sqrt{5})]$
$a_1 = \frac{1}{4\sqrt{5}} [(3+3\sqrt{5}+\sqrt{5}+5) + (\sqrt{5}-5-3+3\sqrt{5})]$
$a_1 = \frac{1}{4\sqrt{5}} [(8+4\sqrt{5}) + (-8+4\sqrt{5})]$
$a_1 = \frac{1}{4\sqrt{5}} [8\sqrt{5}] = 2$. Correct.

So, the formula $a_n = \frac{3+\sqrt{5}}{2\sqrt{5}} \phi^n + \frac{\sqrt{5}-3}{2\sqrt{5}} \psi^n$ is the explicit solution.

This process for higher-order recurrences can be algebraically intensive, especially the partial fraction decomposition. But it's a systematic way to arrive at the solution.

**Important Note on Partial Fractions:** While we used $\phi$ and $\psi$ here, you'd often use symbolic constants for the roots. For instance, if the denominator is $(1-r_1 x)(1-r_2 x)$, you'd write $\frac{C}{1-r_1 x} + \frac{D}{1-r_2 x}$ and solve for $C$ and $D$. Then use the geometric series expansion.

---

### Example 3: Non-Homogeneous Recurrence

What if the recurrence has a term that doesn't involve $a_n$?
Consider $a_n = 3a_{n-1} + 2$ for $n \ge 1$, with $a_0 = 1$.

This is a non-homogeneous recurrence.

**Step 1: Define the Generating Function**
$A(x) = \sum_{n=0}^{\infty} a_n x^n$

**Step 2: Substitute into the Recurrence**
$a_n = 3a_{n-1} + 2$ for $n \ge 1$.
Multiply by $x^n$ and sum from $n=1$:
$\sum_{n=1}^{\infty} a_n x^n = \sum_{n=1}^{\infty} 3a_{n-1} x^n + \sum_{n=1}^{\infty} 2 x^n$

Rewrite in terms of $A(x)$:
$A(x) - a_0 = 3x \sum_{n=1}^{\infty} a_{n-1} x^{n-1} + 2 \sum_{n=1}^{\infty} x^n$
$A(x) - 1 = 3x A(x) + 2 \left(\frac{1}{1-x} - 1\right)$  (Sum of geometric series $x+x^2+...$)
$A(x) - 1 = 3x A(x) + 2 \left(\frac{1 - (1-x)}{1-x}\right)$
$A(x) - 1 = 3x A(x) + \frac{2x}{1-x}$

**Step 3: Solve for A(x)**
$A(x) - 3x A(x) = 1 + \frac{2x}{1-x}$
$A(x) (1 - 3x) = \frac{1-x + 2x}{1-x} = \frac{1+x}{1-x}$
$A(x) = \frac{1+x}{(1-x)(1-3x)}$

**Step 4: Partial Fraction Decomposition**
We need to decompose $\frac{1+x}{(1-x)(1-3x)}$.
$$\frac{1+x}{(1-x)(1-3x)} = \frac{A}{1-x} + \frac{B}{1-3x}$$
$1+x = A(1-3x) + B(1-x)$

Set $x=1$:
$1+1 = A(1-3) + B(0)$
$2 = -2A \implies A = -1$.

Set $x=1/3$:
$1+1/3 = A(0) + B(1-1/3)$
$4/3 = B(2/3) \implies B = 2$.

So, $A(x) = \frac{-1}{1-x} + \frac{2}{1-3x}$.

**Step 5: Expand using Geometric Series**
$A(x) = -1 \sum_{n=0}^{\infty} x^n + 2 \sum_{n=0}^{\infty} (3x)^n$
$A(x) = \sum_{n=0}^{\infty} (-1)x^n + \sum_{n=0}^{\infty} (2 \cdot 3^n) x^n$
$A(x) = \sum_{n=0}^{\infty} (-1 + 2 \cdot 3^n) x^n$

**Step 6: Identify the Coefficients**
$a_n = 2 \cdot 3^n - 1$.

Let's check this formula for our recurrence $a_n = 3a_{n-1} + 2$, $a_0 = 1$.
$a_0 = 2 \cdot 3^0 - 1 = 2 \cdot 1 - 1 = 1$. Correct.
$a_1 = 3a_0 + 2 = 3(1) + 2 = 5$.
Formula: $a_1 = 2 \cdot 3^1 - 1 = 2 \cdot 3 - 1 = 6 - 1 = 5$. Correct.
$a_2 = 3a_1 + 2 = 3(5) + 2 = 17$.
Formula: $a_2 = 2 \cdot 3^2 - 1 = 2 \cdot 9 - 1 = 18 - 1 = 17$. Correct.

This method works very nicely for non-homogeneous recurrences as well.

---

### Connection to Course Outcomes and Learning

This topic directly addresses **CO5: Explain Generating Functions and solve First Order and Second Order Linear Recurrence Relations with Constant Coefficients (Knowledge Level: K3)**.

*   **Explaining Generating Functions:** We've defined what they are (power series representation of sequences), explored their structure, and seen how coefficients carry information.
*   **Solving Recurrence Relations:** We've applied the entire methodology:
    *   Setting up the generating function.
    *   Manipulating the recurrence to get an equation for $A(x)$.
    *   Solving for $A(x)$ as a rational function.
    *   Using partial fraction decomposition (a key algebraic skill).
    *   Expanding using geometric series (a fundamental power series).
    *   Identifying the explicit formula for $a_n$.

This process solidifies your understanding of **sequences** and how they can be manipulated. It connects to **induction** because many recurrence relations are proven using induction, and generating functions provide a different lens to derive those same formulas.

Furthermore, the algebraic manipulations involved, particularly partial fraction decomposition, rely on skills that are foundational in mathematics and directly support the **K3 (Application)** knowledge level. You are *applying* a powerful tool to solve a specific type of problem.

**Example to Visualize Connection to CO2 (Counting Problems):**
Generating functions are incredibly useful for solving counting problems, which falls under **CO2**. For example, if you want to find the number of ways to make change for $N$ cents using pennies (1 cent), nickels (5 cents), and dimes (10 cents), you can construct a generating function:
*   For pennies: $1 + x + x^2 + x^3 + \dots = \frac{1}{1-x}$ (where $x^k$ means $k$ cents from pennies)
*   For nickels: $1 + y + y^2 + y^3 + \dots = \frac{1}{1-y}$ (where $y^k$ means $k$ nickels)
*   For dimes: $1 + z + z^2 + z^3 + \dots = \frac{1}{1-z}$ (where $z^k$ means $k$ dimes)

If we use a single variable $x$ where the exponent represents the total value, we can construct:
$(1+x+x^2+\dots)(1+x^5+x^{10}+\dots)(1+x^{10}+x^{20}+\dots)$
$= \frac{1}{1-x} \cdot \frac{1}{1-x^5} \cdot \frac{1}{1-x^{10}}$
The coefficient of $x^N$ in this product will be the number of ways to make change for $N$ cents. This is a direct application of generating functions to a counting problem.

---

### Practical Tips and Common Pitfalls

*   **Initial Conditions are Crucial:** Always double-check your initial conditions ($a_0, a_1$, etc.) and how they are incorporated into the generating function equation. A misplaced initial term is a common error.
*   **Summation Limits:** Pay close attention to the limits of your summations when manipulating the recurrence. Starting from $n=0$ or $n=1$ or $n=2$ can change the resulting expressions.
*   **Algebraic Errors:** Partial fraction decomposition and algebraic simplification are prime areas for mistakes. Work slowly and methodically.
*   **Geometric Series Formula:** Have $\frac{1}{1-rx} = \sum_{n=0}^{\infty} (rx)^n$ and $\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n$ memorized. Also, be ready for variations like $\frac{1}{1+x}$ or $\frac{1}{1-x^2}$.
*   **Recognizing Known Series:** Sometimes, your $A(x)$ might simplify to a form whose generating function you already know (like the Fibonacci or Lucas number generating functions). This can save a lot of decomposition work.
*   **Practice, Practice, Practice:** The more recurrence relations you solve using generating functions, the more comfortable you will become with the process and the faster you will be at recognizing patterns.

---

### Summary: The Generating Function Workflow

1.  **Setup:** Write $A(x) = \sum_{n=0}^{\infty} a_n x^n$.
2.  **Substitute:** Plug $A(x)$ into the recurrence, multiply by $x^n$ and sum over appropriate indices.
3.  **Isolate $A(x)$:** Algebraically solve for $A(x)$, typically resulting in a rational function.
4.  **Decompose:** Use partial fractions to break down $A(x)$ into simpler fractions.
5.  **Expand:** Use the geometric series formula to convert each fraction back into a power series.
6.  **Conclude:** The coefficient of $x^n$ in the final sum is your explicit formula $a_n$.

---

### Sample Questions and Answers

**Question 1 (Conceptual):** Explain the core idea behind using generating functions to solve recurrence relations. How does the algebraic manipulation of the generating function relate to the properties of the sequence?

**Answer:** The core idea is to represent a sequence $a_0, a_1, a_2, \dots$ as a power series $A(x) = a_0 + a_1x + a_2x^2 + \dots$. When a recurrence relation defines the sequence, this relation can be translated into an algebraic equation involving $A(x)$. By solving this equation for $A(x)$, we typically obtain a rational function. This rational function, when expanded back into a power series using techniques like partial fractions and the geometric series formula, reveals the explicit formula for the terms $a_n$ as the coefficients of $x^n$. The algebraic operations on $A(x)$ (like multiplication and division) correspond to operations on the sequence like convolution, effectively "unraveling" the recurrence.

**Question 2 (Application):** Solve the recurrence relation $a_n = 5a_{n-1}$ for $n \ge 1$, with initial condition $a_0 = 2$, using generating functions.

**Answer:**
Let $A(x) = \sum_{n=0}^{\infty} a_n x^n$.
The recurrence is $a_n = 5a_{n-1}$. Multiply by $x^n$ and sum from $n=1$:
$\sum_{n=1}^{\infty} a_n x^n = \sum_{n=1}^{\infty} 5a_{n-1} x^n$
$A(x) - a_0 = 5x \sum_{n=1}^{\infty} a_{n-1} x^{n-1}$
$A(x) - 2 = 5x A(x)$
$A(x) - 5x A(x) = 2$
$A(x)(1 - 5x) = 2$
$A(x) = \frac{2}{1 - 5x}$

Using the geometric series formula $\frac{1}{1-rx} = \sum_{n=0}^{\infty} (rx)^n$:
$A(x) = 2 \sum_{n=0}^{\infty} (5x)^n = 2 \sum_{n=0}^{\infty} 5^n x^n = \sum_{n=0}^{\infty} (2 \cdot 5^n) x^n$

Thus, the explicit formula is $a_n = 2 \cdot 5^n$.

**Question 3 (Analysis/Deeper Understanding):** For the recurrence $a_n = a_{n-1} + a_{n-2}$ with $a_0=1, a_1=2$, we found $A(x) = \frac{1+x}{1-x-x^2}$. Show how this can be written as a combination of the generating functions for Fibonacci ($F_n$) and Lucas ($L_n$) numbers. (Recall: GF of $F_n$ ($0,1,1,2,\dots$) is $\frac{x}{1-x-x^2}$, GF of $L_n$ ($2,1,3,4,\dots$) is $\frac{2-x}{1-x-x^2}$).

**Answer:**
We have $A(x) = \frac{1+x}{1-x-x^2}$.
We want to express this as $c_1 \frac{x}{1-x-x^2} + c_2 \frac{2-x}{1-x-x^2}$.
Let's try to find $c_1$ and $c_2$ such that:
$\frac{1+x}{1-x-x^2} = \frac{c_1 x + c_2(2-x)}{1-x-x^2}$
$1+x = c_1 x + 2c_2 - c_2 x$
$1+x = (2c_2) + (c_1 - c_2)x$

Equating coefficients:
Constant term: $1 = 2c_2 \implies c_2 = 1/2$.
Coefficient of $x$: $1 = c_1 - c_2$.
$1 = c_1 - 1/2 \implies c_1 = 3/2$.

So, $A(x) = \frac{3}{2} \left(\frac{x}{1-x-x^2}\right) + \frac{1}{2} \left(\frac{2-x}{1-x-x^2}\right)$.
This means $a_n = \frac{3}{2} F_n + \frac{1}{2} L_n$.

Let's check for $n=0$:
$a_0 = \frac{3}{2} F_0 + \frac{1}{2} L_0 = \frac{3}{2}(0) + \frac{1}{2}(2) = 1$. Correct.
Let's check for $n=1$:
$a_1 = \frac{3}{2} F_1 + \frac{1}{2} L_1 = \frac{3}{2}(1) + \frac{1}{2}(1) = \frac{3}{2} + \frac{1}{2} = \frac{4}{2} = 2$. Correct.

This demonstrates how different sequences with the same recurrence can be related through their generating functions and expressed as linear combinations of basis sequences.

---

That concludes our exploration of generating functions for solving recurrence relations. This is a rich and powerful technique that will serve you well in many areas of discrete mathematics and computer science. Keep practicing, and don't hesitate to revisit these examples!
