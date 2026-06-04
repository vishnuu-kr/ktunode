---
title: "Generating Functions"
subject: "DISCRETE MATHEMATICS"
module: "Module 3: Induction and Recurrences"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fac"
status: "completed"
scrapedAt: "2026-05-20T16:33:10.089Z"
---
# Module 3: Induction and Recurrences - Generating Functions

Welcome everyone! Today, we're diving into a really powerful tool in discrete mathematics: **Generating Functions**. They might sound a bit abstract at first, but trust me, they’re incredibly useful for solving problems that might otherwise be very tricky. Think of them as a way to encode an entire sequence of numbers into a single mathematical object – a function! This allows us to use the techniques of algebra and calculus to tackle combinatorial problems.

This topic is particularly important as it directly addresses **Course Outcome 5 (CO5)**: "Explain Generating Functions and solve First Order and Second Order Linear Recurrence Relations with Constant Coefficients." We'll see how generating functions are a sophisticated way to approach recurrence relations, and often provide more elegant solutions than direct methods.

Let's get started by understanding what exactly a generating function is.

## What is a Generating Function?

Imagine you have a sequence of numbers, say $a_0, a_1, a_2, a_3, \dots$. We can associate a polynomial (or an infinite power series) with this sequence in a very specific way.

**Definition:** The **ordinary generating function** (OGF) for a sequence of numbers $\{a_n\}_{n=0}^\infty$ is the power series:

$G(x) = a_0 + a_1x + a_2x^2 + a_3x^3 + \dots = \sum_{n=0}^\infty a_n x^n$

Think of $x$ as just a placeholder, a "handle" for the coefficients. The real magic happens when we manipulate this function algebraically. The coefficient of $x^n$ in $G(x)$ is precisely $a_n$, the $n$-th term of our sequence.

### Why are they called "Generating Functions"?

They are called "generating" because they *generate* the terms of the sequence. By looking at the coefficients of the power series, we can recover the original sequence. It’s like having a compact summary of all the numbers in the sequence.

**Example 1: Simple Sequences**

Let's look at some familiar sequences and their generating functions:

*   **The sequence of all ones:** $1, 1, 1, 1, \dots$
    Here, $a_n = 1$ for all $n \ge 0$.
    The generating function is $G(x) = 1 + x + x^2 + x^3 + \dots$
    What is this familiar series? This is a geometric series! If we consider $|x| < 1$, this series converges to $\frac{1}{1-x}$. So, the generating function is $G(x) = \frac{1}{1-x}$.
    *Remember this!* The generating function $\frac{1}{1-x}$ is extremely important and pops up everywhere.

*   **The sequence $0, 1, 0, 0, 0, \dots$**
    Here, $a_0=0, a_1=1,$ and $a_n=0$ for $n \ge 2$.
    The generating function is $G(x) = 0 + 1x + 0x^2 + 0x^3 + \dots = x$. Simple enough!

*   **The sequence $1, 0, 1, 0, 1, 0, \dots$**
    Here, $a_n = 1$ if $n$ is even, and $a_n = 0$ if $n$ is odd.
    The generating function is $G(x) = 1 + 0x + 1x^2 + 0x^3 + 1x^4 + \dots = 1 + x^2 + x^4 + x^6 + \dots$
    This is also a geometric series, but with a common ratio of $x^2$. So, $G(x) = \frac{1}{1-x^2}$ for $|x^2| < 1$.

**Connection to CO5:** As you can see, we are already associating sequences with functions. This is the first step towards using them to solve recurrence relations. If we can express a recurrence relation as an equation involving these generating functions, we can then solve for the generating function and extract the sequence that satisfies the relation.

## Manipulating Generating Functions: The Power of Algebra

The real strength of generating functions lies in the fact that common operations on sequences translate into simple algebraic operations on their generating functions. This is where the "algebraic" part of the description comes in handy.

Let $A(x) = \sum_{n=0}^\infty a_n x^n$ and $B(x) = \sum_{n=0}^\infty b_n x^n$ be the generating functions for sequences $\{a_n\}$ and $\{b_n\}$, respectively.

### 1. Addition of Sequences

If we have a sequence $c_n = a_n + b_n$, then its generating function is simply $C(x) = A(x) + B(x)$.

$C(x) = \sum_{n=0}^\infty (a_n + b_n) x^n = \sum_{n=0}^\infty a_n x^n + \sum_{n=0}^\infty b_n x^n = A(x) + B(x)$

This is straightforward, just like adding polynomials.

### 2. Scalar Multiplication of Sequences

If $c_n = k \cdot a_n$ for some constant $k$, then its generating function is $C(x) = k \cdot A(x)$.

$C(x) = \sum_{n=0}^\infty (k \cdot a_n) x^n = k \sum_{n=0}^\infty a_n x^n = k A(x)$

### 3. Convolution of Sequences

This is a bit more interesting. The convolution of two sequences $\{a_n\}$ and $\{b_n\}$ is a new sequence $\{c_n\}$ defined by:

$c_n = \sum_{k=0}^n a_k b_{n-k}$

This is like a "sum of products" where the indices always add up to $n$.

The generating function for the convolution sequence is the product of the individual generating functions: $C(x) = A(x) \cdot B(x)$.

Let's see why:
$A(x) \cdot B(x) = \left(\sum_{i=0}^\infty a_i x^i\right) \left(\sum_{j=0}^\infty b_j x^j\right)$
When we multiply these two series, we get a new series where the term with $x^n$ is formed by summing all products $a_i x^i \cdot b_j x^j$ such that $i+j=n$.
So, the coefficient of $x^n$ in $A(x)B(x)$ is $\sum_{k=0}^n a_k b_{n-k}$ (by letting $i=k$ and $j=n-k$). This is exactly $c_n$.

**Analogy for Convolution:** Think about distributing candies to children. Suppose you have two ways of packaging candies: package A has $a_k$ ways of having exactly $k$ candies, and package B has $b_j$ ways of having exactly $j$ candies. If you pick one package of type A and one of type B, the total number of candies you get is $k+j$. The coefficient $c_n$ represents the total number of ways to get exactly $n$ candies by picking one package of each type.

**Example 2: Binomial Coefficients**

Let's consider the sequence of binomial coefficients. We know from the **Binomial Theorem** that $(1+x)^k = \sum_{n=0}^k \binom{k}{n} x^n$.

What is the generating function for the sequence $\binom{n}{0}, \binom{n}{1}, \binom{n}{2}, \dots, \binom{n}{n}, 0, 0, \dots$ for a fixed $n$? It's $(1+x)^n$.

Now, what about the sequence $a_n = \binom{k+n}{n}$? This is related to combinations with repetition. For example, the number of ways to choose $n$ items from $k$ types with repetition allowed is $\binom{k+n-1}{n}$.

Let's look at the sequence $a_n = \binom{r+n}{n}$ for a fixed $r$.
Consider the function $\frac{1}{(1-x)^{r+1}}$.
We know that $\frac{1}{1-x} = \sum_{n=0}^\infty \binom{r}{r} x^n$ (since $\binom{r}{0}=1$ and $a_n=1$). This is not quite right.

Let's use the generalized binomial theorem:
$(1+y)^\alpha = \sum_{n=0}^\infty \binom{\alpha}{n} y^n$, where $\binom{\alpha}{n} = \frac{\alpha(\alpha-1)\dots(\alpha-n+1)}{n!}$.

Consider $(1-x)^{-k}$ for some integer $k > 0$. Let $\alpha = -k$.
$\binom{-k}{n} = \frac{(-k)(-k-1)\dots(-k-n+1)}{n!} = \frac{(-1)^n k(k+1)\dots(k+n-1)}{n!}$
$= (-1)^n \frac{(k+n-1)!}{(k-1)! n!} = (-1)^n \binom{k+n-1}{n}$

So, $(1-x)^{-k} = \sum_{n=0}^\infty \binom{-k}{n} x^n = \sum_{n=0}^\infty (-1)^n \binom{k+n-1}{n} x^n$.
This isn't quite what we want either. Let's try substituting $y=-x$:

$(1-x)^{-k} = \sum_{n=0}^\infty \binom{-k}{n} (-x)^n = \sum_{n=0}^\infty (-1)^n \binom{k+n-1}{n} (-1)^n x^n$
$= \sum_{n=0}^\infty \binom{k+n-1}{n} x^n$

This is a very important identity!

*Remember this:* The generating function for the sequence $a_n = \binom{k+n-1}{n}$ (which represents the number of ways to choose $n$ items from $k$ categories with repetition allowed) is $\frac{1}{(1-x)^k}$.

**Example 2a (CO2 connection):** How many ways are there to choose 10 donuts from 5 different types?
Here, $n=10$ (number of items to choose) and $k=5$ (number of types).
The number of ways is $\binom{k+n-1}{n} = \binom{5+10-1}{10} = \binom{14}{10}$.
The generating function for the number of ways to choose $n$ donuts from 5 types is $\frac{1}{(1-x)^5} = \sum_{n=0}^\infty \binom{5+n-1}{n} x^n$.
The coefficient of $x^{10}$ in this series is $\binom{5+10-1}{10} = \binom{14}{10}$, which is exactly what we need. This shows how generating functions can directly solve counting problems that involve combinations with repetition, linking to **CO2**.

### 4. Shifting a Sequence (Delaying)

If we have a sequence $a_0, a_1, a_2, \dots$ with generating function $A(x) = \sum_{n=0}^\infty a_n x^n$.
What is the generating function for the sequence $0, a_0, a_1, a_2, \dots$? Let this new sequence be $\{b_n\}$.
$b_0 = 0$, $b_1 = a_0$, $b_2 = a_1$, and in general, $b_n = a_{n-1}$ for $n \ge 1$.

The generating function $B(x) = \sum_{n=0}^\infty b_n x^n = 0 + a_0 x + a_1 x^2 + a_2 x^3 + \dots$
$B(x) = x (a_0 + a_1 x + a_2 x^2 + \dots) = x A(x)$.

This is very useful for dealing with initial conditions or when terms "start" later.

### 5. Differentiation and Integration

*   **Differentiation:** If $A(x) = \sum_{n=0}^\infty a_n x^n$, then $A'(x) = \sum_{n=1}^\infty n a_n x^{n-1}$.
    Notice that the coefficient of $x^{n-1}$ in $A'(x)$ is $n a_n$. If we want a sequence $b_n = n a_n$, its generating function is $A'(x)$.
    This is helpful for sequences like $0, 1, 4, 9, 16, \dots$ ($a_n = n^2$).

*   **Integration:** $\int A(x) dx = \sum_{n=0}^\infty \frac{a_n}{n+1} x^{n+1} + C$.
    If we integrate and then consider the coefficient of $x^n$, it's related to $a_{n-1}/n$. This is less common but can be useful.

**Example 3: Sequence $n^2$**

Let's find the generating function for $0, 1, 4, 9, 16, \dots$, where $a_n = n^2$.
We know $\frac{1}{1-x} = \sum_{n=0}^\infty x^n$.
Differentiating: $\frac{d}{dx} \left(\frac{1}{1-x}\right) = \frac{1}{(1-x)^2} = \sum_{n=1}^\infty n x^{n-1}$.
Let's re-index the sum: let $m = n-1$, so $n=m+1$.
$\frac{1}{(1-x)^2} = \sum_{m=0}^\infty (m+1) x^m$. This is the G.F. for the sequence $1, 2, 3, 4, \dots$.

Now, let's multiply by $x$:
$\frac{x}{(1-x)^2} = \sum_{m=0}^\infty (m+1) x^{m+1}$.
Let $k=m+1$.
$\frac{x}{(1-x)^2} = \sum_{k=1}^\infty k x^k$. This is the G.F. for the sequence $0, 1, 2, 3, 4, \dots$.

Now, differentiate again. Let $F(x) = \frac{x}{(1-x)^2}$.
$F'(x) = \frac{d}{dx} \left(\frac{x}{(1-x)^2}\right) = \frac{1 \cdot (1-x)^2 - x \cdot 2(1-x)(-1)}{(1-x)^4}$
$F'(x) = \frac{(1-x)^2 + 2x(1-x)}{(1-x)^4} = \frac{(1-x)(1-x+2x)}{(1-x)^4} = \frac{1+x}{(1-x)^3}$.

We know that $F'(x) = \sum_{k=1}^\infty k^2 x^{k-1}$.
So, the generating function for the sequence $k^2$ (i.e., $0, 1, 4, 9, \dots$) is $x F'(x)$.

$x F'(x) = x \frac{1+x}{(1-x)^3} = \frac{x+x^2}{(1-x)^3}$.

Let's check this. We know $\frac{1}{(1-x)^3} = \sum_{n=0}^\infty \binom{3+n-1}{n} x^n = \sum_{n=0}^\infty \binom{n+2}{n} x^n = \sum_{n=0}^\infty \binom{n+2}{2} x^n$.
The sequence is $\binom{2}{2}, \binom{3}{2}, \binom{4}{2}, \binom{5}{2}, \dots$ which is $1, 3, 6, 10, \dots$.

So, $\frac{x+x^2}{(1-x)^3} = (x+x^2) \sum_{n=0}^\infty \binom{n+2}{2} x^n$
$= \sum_{n=0}^\infty \binom{n+2}{2} x^{n+1} + \sum_{n=0}^\infty \binom{n+2}{2} x^{n+2}$
Let $m=n+1$ in the first sum: $\sum_{m=1}^\infty \binom{m+1}{2} x^{m}$.
Let $k=n+2$ in the second sum: $\sum_{k=2}^\infty \binom{k}{2} x^{k}$.

So the coefficient of $x^p$ is $\binom{p+1}{2} + \binom{p}{2}$.
$\binom{p+1}{2} + \binom{p}{2} = \frac{(p+1)p}{2} + \frac{p(p-1)}{2} = \frac{p}{2}(p+1 + p-1) = \frac{p}{2}(2p) = p^2$.
This works perfectly! The generating function for $n^2$ is $\frac{x(1+x)}{(1-x)^3}$.

**Connection to CO5:** We've seen how differentiation and multiplication by $x$ can transform sequences. This is a key technique for solving recurrence relations. If a recurrence relation involves terms like $n \cdot a_n$ or $a_{n-k}$, we can translate these into operations on the generating function.

## Using Generating Functions to Solve Recurrence Relations (CO5)

This is where the real power of generating functions shines. We can use them to find closed-form expressions for terms in sequences defined by linear recurrence relations with constant coefficients.

Let's consider a general linear homogeneous recurrence relation with constant coefficients:
$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \dots + c_k a_{n-k}$ for $n \ge k$.
And we have initial conditions, say $a_0, a_1, \dots, a_{k-1}$.

**The Strategy:**

1.  **Define the Generating Function:** Let $A(x) = \sum_{n=0}^\infty a_n x^n$ be the generating function for the sequence $\{a_n\}$.
2.  **Multiply the Recurrence by $x^n$ and Sum:** Multiply the recurrence relation by $x^n$ and sum over all valid $n$ (usually from $n=k$ to $\infty$).
    $\sum_{n=k}^\infty a_n x^n = \sum_{n=k}^\infty (c_1 a_{n-1} + c_2 a_{n-2} + \dots + c_k a_{n-k}) x^n$
3.  **Express Sums in Terms of $A(x)$:** Rewrite each sum in terms of $A(x)$ using the properties we've discussed (shifting, etc.).
4.  **Solve for $A(x)$:** Isolate $A(x)$ algebraically. This will usually result in $A(x)$ being a rational function (a ratio of two polynomials).
5.  **Find the Closed-Form Expression:** Use partial fraction decomposition and known generating functions (like the geometric series $\frac{1}{1-x}$) to find the coefficient $a_n$ in the series expansion of $A(x)$.

**Example 4: Fibonacci Sequence**

The Fibonacci sequence is defined by $F_0 = 0$, $F_1 = 1$, and $F_n = F_{n-1} + F_{n-2}$ for $n \ge 2$.
Let $F(x) = \sum_{n=0}^\infty F_n x^n$ be the generating function for the Fibonacci numbers.

The recurrence is $F_n = F_{n-1} + F_{n-2}$ for $n \ge 2$.
Multiply by $x^n$ and sum from $n=2$ to $\infty$:
$\sum_{n=2}^\infty F_n x^n = \sum_{n=2}^\infty F_{n-1} x^n + \sum_{n=2}^\infty F_{n-2} x^n$

Let's analyze each term:
*   Left side: $\sum_{n=2}^\infty F_n x^n = (F_0 + F_1 x + F_2 x^2 + \dots) - F_0 - F_1 x = F(x) - 0 - 1x = F(x) - x$.
*   First term on the right: $\sum_{n=2}^\infty F_{n-1} x^n = x \sum_{n=2}^\infty F_{n-1} x^{n-1}$. Let $m = n-1$. When $n=2, m=1$.
    $x \sum_{m=1}^\infty F_m x^m = x (F_1 x + F_2 x^2 + F_3 x^3 + \dots)$
    $= x ( (F_0 + F_1 x + F_2 x^2 + \dots) - F_0 ) = x (F(x) - F_0) = x F(x)$ (since $F_0=0$).
*   Second term on the right: $\sum_{n=2}^\infty F_{n-2} x^n = x^2 \sum_{n=2}^\infty F_{n-2} x^{n-2}$. Let $m = n-2$. When $n=2, m=0$.
    $x^2 \sum_{m=0}^\infty F_m x^m = x^2 F(x)$.

Putting it all together:
$F(x) - x = x F(x) + x^2 F(x)$

Now, solve for $F(x)$:
$F(x) - x F(x) - x^2 F(x) = x$
$F(x) (1 - x - x^2) = x$
$F(x) = \frac{x}{1 - x - x^2}$

This is the generating function for the Fibonacci numbers. To find the closed-form for $F_n$, we need to decompose this. We can use partial fractions by finding the roots of the denominator $1 - x - x^2 = 0$.
The roots are $x = \frac{-1 \pm \sqrt{1 - 4(1)(-1)}}{2(-1)} = \frac{-1 \pm \sqrt{5}}{-2}$, which are $\phi = \frac{1+\sqrt{5}}{2}$ and $1-\phi = \frac{1-\sqrt{5}}{2}$.
So, $1 - x - x^2 = -(x - \phi)(x - (1-\phi))$. Wait, the roots of $1-x-x^2=0$ are $-1/\phi$ and $-1/(1-\phi)$. Let's use the roots of $x^2+x-1=0$, which are $x = \frac{-1 \pm \sqrt{1+4}}{2} = \frac{-1 \pm \sqrt{5}}{2}$. Let $\alpha = \frac{1+\sqrt{5}}{2}$ and $\beta = \frac{1-\sqrt{5}}{2}$. Then $x^2+x-1 = (x-\alpha)(x-\beta)$. So $1-x-x^2 = -x^2(\frac{1}{x^2} - \frac{1}{x} - 1) = -x^2(\frac{1}{x}-\alpha)(\frac{1}{x}-\beta) = -x^2 \frac{1-\alpha x}{x} \frac{1-\beta x}{x} = -(1-\alpha x)(1-\beta x)$.
Ah, the roots of $1 - x - x^2 = 0$ are indeed $x_1 = \frac{-1+\sqrt{5}}{2}$ and $x_2 = \frac{-1-\sqrt{5}}{2}$. Let $r_1 = \frac{1+\sqrt{5}}{2}$ and $r_2 = \frac{1-\sqrt{5}}{2}$. Then $1-x-x^2 = -(x-r_1)(x-r_2)$.
No, let's go back to $1-x-x^2$. Its roots are $x = \frac{-1 \pm \sqrt{1-4(-1)}}{2(-1)} = \frac{-1 \pm \sqrt{5}}{-2}$. Let these roots be $\rho_1 = \frac{1-\sqrt{5}}{2}$ and $\rho_2 = \frac{1+\sqrt{5}}{2}$.
So $1-x-x^2 = -(x - \rho_1)(x - \rho_2)$. This is not directly helpful for partial fractions of the form $\frac{A}{1-rx}$.

Let's consider the roots of $y^2 - y - 1 = 0$, which are $\phi = \frac{1+\sqrt{5}}{2}$ and $1-\phi = \frac{1-\sqrt{5}}{2}$.
Then $1-x-x^2 = (1 - \phi x)(1 - (1-\phi)x)$.
So, $F(x) = \frac{x}{(1 - \phi x)(1 - (1-\phi)x)}$.

Now, we use partial fraction decomposition:
$\frac{x}{(1 - \phi x)(1 - (1-\phi)x)} = \frac{A}{1 - \phi x} + \frac{B}{1 - (1-\phi)x}$
$x = A(1 - (1-\phi)x) + B(1 - \phi x)$

If $x = 1/\phi$, then $1 - \phi x = 0$.
$1/\phi = A(1 - (1-\phi)/\phi) = A(\frac{\phi - (1-\phi)}{\phi}) = A(\frac{2\phi - 1}{\phi})$.
Since $\phi^2 = \phi+1$, $2\phi-1 = \phi+\phi-1 = \phi+(\phi-1) = \phi + 1/\phi$.
$1/\phi = A(\frac{\phi+1/\phi}{\phi})$. Hmm, calculation error somewhere.

Let's use the known identity for Fibonacci: $F_n = \frac{\phi^n - (1-\phi)^n}{\sqrt{5}}$.
The generating function for $\phi^n$ is $\sum_{n=0}^\infty \phi^n x^n = \frac{1}{1-\phi x}$.
The generating function for $(1-\phi)^n$ is $\sum_{n=0}^\infty (1-\phi)^n x^n = \frac{1}{1-(1-\phi)x}$.
So, the generating function for $F_n = \frac{1}{\sqrt{5}} (\phi^n - (1-\phi)^n)$ is:
$F(x) = \frac{1}{\sqrt{5}} \left( \frac{1}{1-\phi x} - \frac{1}{1-(1-\phi)x} \right)$
$F(x) = \frac{1}{\sqrt{5}} \left( \frac{1-(1-\phi)x - (1-\phi x)}{(1-\phi x)(1-(1-\phi)x)} \right)$
$F(x) = \frac{1}{\sqrt{5}} \left( \frac{1 - (1-\phi)x - 1 + \phi x}{1 - (\phi + 1 - \phi)x + \phi(1-\phi)x^2} \right)$
$F(x) = \frac{1}{\sqrt{5}} \left( \frac{(\phi - (1-\phi))x}{1 - x - (\phi-1)x^2} \right)$
Note that $\phi(1-\phi) = \frac{1+\sqrt{5}}{2} \frac{1-\sqrt{5}}{2} = \frac{1-5}{4} = -1$.
So the denominator is $1 - x - (-1)x^2 = 1 - x + x^2$. This is not our denominator $1-x-x^2$.

Let's re-evaluate the partial fraction step for $F(x) = \frac{x}{1 - x - x^2}$.
The roots of $1-x-x^2=0$ are $x = \frac{-1 \pm \sqrt{5}}{-2}$.
Let $\alpha = \frac{1+\sqrt{5}}{2}$ and $\beta = \frac{1-\sqrt{5}}{2}$.
Then $1-x-x^2 = -(x - \frac{1+\sqrt{5}}{2})(x - \frac{1-\sqrt{5}}{2})$. This is still incorrect.

Let's use the standard roots of $1-x-x^2=0$. Let $r_1$ and $r_2$ be the roots.
$1-x-x^2 = (1-r_1 x)(1-r_2 x)$ where $r_1 = \phi$ and $r_2 = 1-\phi$ are the roots of $y^2-y-1=0$.
So $1-x-x^2 = (1-\phi x)(1-(1-\phi)x)$. This is correct.

$F(x) = \frac{x}{(1-\phi x)(1-(1-\phi)x)} = \frac{A}{1-\phi x} + \frac{B}{1-(1-\phi)x}$
$x = A(1-(1-\phi)x) + B(1-\phi x)$
Let $x=1/\phi$: $1/\phi = A(1 - (1-\phi)/\phi) = A(\frac{\phi - (1-\phi)}{\phi}) = A(\frac{2\phi-1}{\phi})$.
$1 = A(2\phi-1)$. Since $2\phi-1 = 2(\frac{1+\sqrt{5}}{2})-1 = 1+\sqrt{5}-1 = \sqrt{5}$.
So, $1 = A \sqrt{5} \implies A = 1/\sqrt{5}$.

Let $x=1/(1-\phi)$: $1/(1-\phi) = B(1 - \phi/(1-\phi)) = B(\frac{1-\phi-\phi}{1-\phi}) = B(\frac{1-2\phi}{1-\phi})$.
$1/(1-\phi) = B(\frac{1-2\phi}{1-\phi})$.
$1 = B(1-2\phi)$. Since $1-2\phi = 1-2(\frac{1+\sqrt{5}}{2}) = 1-(1+\sqrt{5}) = -\sqrt{5}$.
So, $1 = B(-\sqrt{5}) \implies B = -1/\sqrt{5}$.

Thus, $F(x) = \frac{1/\sqrt{5}}{1-\phi x} - \frac{1/\sqrt{5}}{1-(1-\phi)x}$
$F(x) = \frac{1}{\sqrt{5}} \sum_{n=0}^\infty \phi^n x^n - \frac{1}{\sqrt{5}} \sum_{n=0}^\infty (1-\phi)^n x^n$
$F(x) = \sum_{n=0}^\infty \frac{1}{\sqrt{5}} (\phi^n - (1-\phi)^n) x^n$

The coefficient of $x^n$ is $F_n = \frac{1}{\sqrt{5}} (\phi^n - (1-\phi)^n)$, which is Binet's formula. This is a beautiful confirmation!

**Connection to CO5:** This example clearly demonstrates how to derive the closed-form solution for a recurrence relation. The steps involve algebraic manipulation of the generating function, leading to a rational function whose partial fraction decomposition reveals the coefficients.

### Example 5: Non-homogeneous Recurrence Relation

Let's solve $a_n = 2a_{n-1} + 1$ for $n \ge 1$, with $a_0 = 0$.
Let $A(x) = \sum_{n=0}^\infty a_n x^n$.

Multiply the recurrence by $x^n$ and sum from $n=1$ to $\infty$:
$\sum_{n=1}^\infty a_n x^n = \sum_{n=1}^\infty 2a_{n-1} x^n + \sum_{n=1}^\infty 1 \cdot x^n$

Analyze each term:
*   Left side: $\sum_{n=1}^\infty a_n x^n = (a_0 + a_1 x + a_2 x^2 + \dots) - a_0 = A(x) - 0 = A(x)$.
*   First term on the right: $\sum_{n=1}^\infty 2a_{n-1} x^n = 2x \sum_{n=1}^\infty a_{n-1} x^{n-1}$. Let $m=n-1$.
    $2x \sum_{m=0}^\infty a_m x^m = 2x A(x)$.
*   Second term on the right: $\sum_{n=1}^\infty x^n = x + x^2 + x^3 + \dots$. This is a geometric series starting from $x$, so it's $\frac{x}{1-x}$.

Putting it together:
$A(x) = 2x A(x) + \frac{x}{1-x}$

Solve for $A(x)$:
$A(x) - 2x A(x) = \frac{x}{1-x}$
$A(x)(1 - 2x) = \frac{x}{1-x}$
$A(x) = \frac{x}{(1-x)(1-2x)}$

Now, we decompose this using partial fractions:
$\frac{x}{(1-x)(1-2x)} = \frac{A}{1-x} + \frac{B}{1-2x}$
$x = A(1-2x) + B(1-x)$

Let $x=1$: $1 = A(1-2) + B(0) \implies 1 = -A \implies A = -1$.
Let $x=1/2$: $1/2 = A(0) + B(1-1/2) \implies 1/2 = B(1/2) \implies B = 1$.

So, $A(x) = \frac{-1}{1-x} + \frac{1}{1-2x}$.
We know $\frac{1}{1-x} = \sum_{n=0}^\infty x^n$ and $\frac{1}{1-2x} = \sum_{n=0}^\infty (2x)^n = \sum_{n=0}^\infty 2^n x^n$.

$A(x) = - \sum_{n=0}^\infty x^n + \sum_{n=0}^\infty 2^n x^n = \sum_{n=0}^\infty (2^n - 1) x^n$.

The coefficient of $x^n$ is $a_n = 2^n - 1$.
Let's check this: $a_0 = 2^0 - 1 = 0$ (correct).
$a_1 = 2^1 - 1 = 1$. From recurrence: $a_1 = 2a_0 + 1 = 2(0) + 1 = 1$ (correct).
$a_2 = 2^2 - 1 = 3$. From recurrence: $a_2 = 2a_1 + 1 = 2(1) + 1 = 3$ (correct).
This is fantastic! The generating function method worked.

**Connection to CO5:** This is a direct application of solving a first-order non-homogeneous linear recurrence relation with constant coefficients. The method shown here is generally applicable.

## Other Types of Generating Functions

While the Ordinary Generating Function (OGF) is the most common, there are others that are useful in specific contexts.

### 1. Exponential Generating Functions (EGF)

The exponential generating function for a sequence $\{a_n\}$ is defined as:

$G_E(x) = \sum_{n=0}^\infty a_n \frac{x^n}{n!}$

EGFs are particularly useful for sequences that involve permutations, such as counting arrangements of objects where the order matters.

**Key Property:** If $A(x)$ is the EGF for $\{a_n\}$ and $B(x)$ is the EGF for $\{b_n\}$, and $c_n = \sum_{k=0}^n \binom{n}{k} a_k b_{n-k}$, then the EGF for $\{c_n\}$ is $A(x) B(x)$. The $\binom{n}{k}$ factor arises because we are partitioning $n$ positions into $k$ for one sequence and $n-k$ for the other, and order matters.

**Example 6: Permutations**

Let $a_n = n!$ (number of permutations of $n$ distinct items).
The EGF is $G_E(x) = \sum_{n=0}^\infty n! \frac{x^n}{n!} = \sum_{n=0}^\infty x^n = \frac{1}{1-x}$.
This is a very compact representation for the sequence of factorials.

If you want to count ways to arrange a certain number of boys and girls into a committee where the order matters, you might use EGFs.

**Example 7: Derangements**

The number of derangements of $n$ elements, denoted $D_n$ or $!n$, is the number of permutations where no element appears in its original position. The EGF for derangements is $D(x) = \frac{e^{-x}}{1-x}$.

**When to use OGF vs. EGF:**
*   Use OGFs for problems involving combinations (order doesn't matter), sums of values, and coin problems.
*   Use EGFs for problems involving permutations, arrangements, and situations where order is important.

**Connection to CO5 and CO2:** While CO5 focuses on recurrence relations typically solved with OGFs, understanding EGFs expands our toolkit for combinatorial problems. Problems involving permutations, which are crucial for counting (CO2), are often best tackled with EGFs.

## Applications in Computer Science

Generating functions are not just abstract mathematical concepts; they have very real applications in computer science.

*   **Algorithm Analysis:** Analyzing the average-case or worst-case behavior of algorithms. For example, finding the average number of comparisons in a sorting algorithm or the height of a binary tree. The coefficients of the generating function can represent the number of operations or complexity.
    *   **Example:** The generating function for the number of binary trees with $n$ nodes is related to the Catalan numbers. Catalan numbers appear in many CS problems (e.g., balanced parentheses, Dyck paths, number of expression trees). The OGF for Catalan numbers $C_n$ is $C(x) = \frac{1-\sqrt{1-4x}}{2x}$, and $C_n = \binom{2n}{n} \frac{1}{n+1}$.
*   **Data Structures:** Understanding the properties of data structures like trees, heaps, and hash tables.
*   **Combinatorial Optimization:** Finding optimal solutions in problems with many possible arrangements.
*   **Probability Theory:** Generating functions can be used to find probability distributions and their properties (like expected value and variance). The probability generating function is a related concept.

**Connection to CO3 & CO4:** While CO3 and CO4 deal with relations and posets, generating functions can sometimes be used to analyze algorithms or structures related to these concepts. For instance, if you're analyzing the complexity of algorithms that operate on relations or ordered sets, generating functions might appear in the analysis.

## Key Takeaways and Exam Tips

*   **Understand the Definition:** A generating function $G(x) = \sum_{n=0}^\infty a_n x^n$ is a polynomial or power series where $a_n$ is the $n$-th term of a sequence.
*   **Memorize Key Generating Functions:**
    *   $\frac{1}{1-x} \leftrightarrow 1, 1, 1, \dots$
    *   $\frac{1}{(1-x)^k} \leftrightarrow \binom{n+k-1}{n}, \text{ for } k \ge 1$ (combinations with repetition)
    *   $\frac{1}{1-cx} \leftrightarrow c^n$
    *   $\frac{x}{(1-x)^2} \leftrightarrow n$
    *   $\frac{x(1+x)}{(1-x)^3} \leftrightarrow n^2$
    *   $\frac{1}{1-x-x^2} \leftrightarrow \text{Lucas numbers? No, it's related to Fibonacci. Fibonacci G.F. is } \frac{x}{1-x-x^2}$
    *   $e^x \leftrightarrow \frac{1}{n!}$
*   **Practice Manipulations:** Be comfortable with how shifts, multiplication by $x$, differentiation, and multiplication of series affect the generating functions and the sequences they represent.
*   **Recurrence Relation Strategy:** This is a major exam topic. Remember the 5-step strategy. The key is to express the sums in terms of $A(x)$ by carefully handling the initial terms and indices.
*   **Partial Fractions:** A crucial skill for finding the closed-form from $A(x)$. Make sure you can decompose rational functions into simpler fractions.
*   **Context Matters (OGF vs. EGF):** Know when to use each. OGFs for combinations, EGFs for permutations.

**Common Pitfalls:**
*   **Index Errors:** When shifting sums (e.g., $\sum_{n=k}^\infty a_{n-1} x^n$), be careful with the starting index of the new sum.
*   **Initial Terms:** Properly account for the terms involving $a_0, a_1, \dots, a_{k-1}$ when transforming sums like $\sum_{n=k}^\infty a_n x^n$.
*   **Algebraic Mistakes:** Double-check your algebra when solving for $A(x)$ and performing partial fraction decomposition.

Generating functions are a versatile tool. Once you get the hang of them, they can simplify complex counting and recurrence relation problems significantly.

---

## Sample Questions with Answers

**Question 1 (Conceptual - CO5):**
What is the generating function for the sequence $a_n = 3^n$?

**Answer:**
The generating function for a sequence $a_n = c^n$ is $\frac{1}{1-cx}$.
Here, $c=3$.
So, the generating function for $a_n = 3^n$ is $\frac{1}{1-3x}$.

**Question 2 (Application - CO5):**
Use generating functions to find a closed-form expression for the sequence defined by $a_n = a_{n-1} + 2$ for $n \ge 1$, with $a_0 = 1$.

**Answer:**
Let $A(x) = \sum_{n=0}^\infty a_n x^n$ be the generating function for the sequence.
The recurrence relation is $a_n = a_{n-1} + 2$ for $n \ge 1$.
Multiply by $x^n$ and sum from $n=1$ to $\infty$:
$\sum_{n=1}^\infty a_n x^n = \sum_{n=1}^\infty a_{n-1} x^n + \sum_{n=1}^\infty 2 x^n$

*   $\sum_{n=1}^\infty a_n x^n = A(x) - a_0 = A(x) - 1$.
*   $\sum_{n=1}^\infty a_{n-1} x^n = x \sum_{n=1}^\infty a_{n-1} x^{n-1} = x \sum_{m=0}^\infty a_m x^m = x A(x)$.
*   $\sum_{n=1}^\infty 2 x^n = 2 (x + x^2 + x^3 + \dots) = 2 \frac{x}{1-x} = \frac{2x}{1-x}$.

Putting it together:
$A(x) - 1 = x A(x) + \frac{2x}{1-x}$

Solve for $A(x)$:
$A(x) - x A(x) = 1 + \frac{2x}{1-x}$
$A(x)(1-x) = \frac{1-x + 2x}{1-x} = \frac{1+x}{1-x}$
$A(x) = \frac{1+x}{(1-x)^2}$

Now, decompose $A(x)$ using partial fractions:
$\frac{1+x}{(1-x)^2} = \frac{A}{1-x} + \frac{B}{(1-x)^2}$
$1+x = A(1-x) + B$

Let $x=1$: $1+1 = A(0) + B \implies 2 = B$.
Differentiate with respect to $x$: $1 = -A$. So, $A = -1$.

$A(x) = \frac{-1}{1-x} + \frac{2}{(1-x)^2}$

We know:
*   $\frac{1}{1-x} = \sum_{n=0}^\infty x^n$
*   $\frac{1}{(1-x)^2} = \sum_{n=0}^\infty (n+1) x^n$ (This comes from differentiating $\frac{1}{1-x}$)

So, $A(x) = - \sum_{n=0}^\infty x^n + 2 \sum_{n=0}^\infty (n+1) x^n$
$A(x) = \sum_{n=0}^\infty (-1 + 2(n+1)) x^n$
$A(x) = \sum_{n=0}^\infty (-1 + 2n + 2) x^n$
$A(x) = \sum_{n=0}^\infty (2n + 1) x^n$

The closed-form expression for $a_n$ is $a_n = 2n+1$.

Let's check:
$a_0 = 2(0)+1 = 1$ (Correct)
$a_1 = 2(1)+1 = 3$. From recurrence: $a_1 = a_0 + 2 = 1 + 2 = 3$ (Correct)
$a_2 = 2(2)+1 = 5$. From recurrence: $a_2 = a_1 + 2 = 3 + 2 = 5$ (Correct)

**Question 3 (Combinatorial - CO2, CO5):**
Using generating functions, find the number of ways to distribute 15 identical balls into 4 distinct boxes, where each box must have at least 2 balls.

**Answer:**
Let $x_i$ be the number of balls in box $i$, for $i=1, 2, 3, 4$.
We want to find the number of integer solutions to $x_1 + x_2 + x_3 + x_4 = 15$ with $x_i \ge 2$ for all $i$.

Let $y_i = x_i - 2$. Then $y_i \ge 0$.
Substituting $x_i = y_i + 2$ into the equation:
$(y_1+2) + (y_2+2) + (y_3+2) + (y_4+2) = 15$
$y_1 + y_2 + y_3 + y_4 + 8 = 15$
$y_1 + y_2 + y_3 + y_4 = 7$, with $y_i \ge 0$.

The generating function for the number of ways to put $k$ balls into one box (with $y_i \ge 0$) is $1 + x + x^2 + x^3 + \dots = \frac{1}{1-x}$.
For 4 boxes, the generating function is $(\frac{1}{1-x})^4 = \frac{1}{(1-x)^4}$.

We need to find the coefficient of $x^7$ in the expansion of $\frac{1}{(1-x)^4}$.
Using the generalized binomial theorem: $\frac{1}{(1-x)^k} = \sum_{n=0}^\infty \binom{n+k-1}{n} x^n$.
Here, $k=4$ and $n=7$.
The coefficient is $\binom{7+4-1}{7} = \binom{10}{7}$.
$\binom{10}{7} = \binom{10}{3} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 10 \times 3 \times 4 = 120$.

So, there are 120 ways to distribute the balls.

**Question 4 (Conceptual - CO5):**
Differentiate the generating function for the sequence $a_n = 1$ to find the generating function for the sequence $b_n = n$.

**Answer:**
The generating function for $a_n=1$ is $A(x) = \sum_{n=0}^\infty 1 \cdot x^n = \frac{1}{1-x}$.
Differentiating $A(x)$ with respect to $x$:
$\frac{d}{dx} A(x) = \frac{d}{dx} \left(\frac{1}{1-x}\right) = \frac{-( -1 )}{(1-x)^2} = \frac{1}{(1-x)^2}$.

Let's look at the derivative of the series:
$\frac{d}{dx} \left(\sum_{n=0}^\infty x^n\right) = \frac{d}{dx} (1 + x + x^2 + x^3 + \dots)$
$= 0 + 1 + 2x + 3x^2 + \dots = \sum_{n=1}^\infty n x^{n-1}$.

This series has coefficients $0, 1, 2, 3, \dots$, where the coefficient of $x^{n-1}$ is $n$.
To get the sequence $b_n = n$ (i.e., $0, 1, 2, 3, \dots$), we need the coefficient of $x^n$ to be $n$.
Let $m = n-1$, so $n = m+1$. The sum is $\sum_{m=0}^\infty (m+1) x^m$.
This means the generating function for the sequence $0, 1, 2, 3, \dots$ is $\frac{1}{(1-x)^2}$.

Wait, the question asked for the generating function for $b_n=n$. The series $\sum_{n=1}^\infty n x^{n-1}$ has coefficients $n$ for $x^{n-1}$.
If we want the GF for $b_n=n$ where $n$ is the exponent of $x$, we need to multiply by $x$:
$x \cdot \frac{1}{(1-x)^2} = x \sum_{n=1}^\infty n x^{n-1} = \sum_{n=1}^\infty n x^n$.
This is the GF for $0, 1, 2, 3, \dots$ where $a_n = n$ for $n \ge 0$.

Let's reconfirm:
GF for $1,1,1,\dots$ is $\frac{1}{1-x} = 1 + x + x^2 + x^3 + \dots$
Derivative gives $1, 2, 3, 4, \dots$ as coefficients of $x^0, x^1, x^2, x^3, \dots$ NO.
Derivative is $1 + 2x + 3x^2 + 4x^3 + \dots = \sum_{n=0}^\infty (n+1)x^n$.
This is the GF for $1, 2, 3, 4, \dots$.

To get the GF for $0, 1, 2, 3, \dots$ (i.e., $b_n=n$), we need $\sum_{n=0}^\infty n x^n$.
This is $x \cdot (\sum_{n=0}^\infty n x^{n-1})$.
The derivative of $\frac{1}{1-x}$ is $\frac{1}{(1-x)^2} = \sum_{n=1}^\infty n x^{n-1}$.
So, the GF for $b_n = n$ is $x \frac{1}{(1-x)^2} = \frac{x}{(1-x)^2}$.

The question asks to *find* the GF for $b_n=n$ by differentiating the GF for $a_n=1$.
The GF for $a_n=1$ is $\frac{1}{1-x}$.
Its derivative is $\frac{1}{(1-x)^2}$. This is the generating function for the sequence whose $n$-th term is $(n+1)$ if we consider $n$ as the index for the term, i.e., $1, 2, 3, 4, \dots$.
So, differentiating $\frac{1}{1-x}$ yields $\sum_{n=0}^{\infty} (n+1)x^n$, which represents the sequence $1, 2, 3, \dots$.

If the question meant to ask for the GF of $n \cdot 1$, then it would be the derivative.
If the question means $b_n = n \times a_n$ where $a_n=1$, then $b_n = n$.
The GF for $a_n=1$ is $A(x) = \sum_{n=0}^\infty 1 \cdot x^n$.
If we want the GF for $b_n = n \cdot a_n$, then $b_n = n$.
The GF for $b_n = n \cdot a_n$ is $x \frac{d}{dx} A(x)$.
$x \frac{d}{dx} \left(\frac{1}{1-x}\right) = x \frac{1}{(1-x)^2} = \frac{x}{(1-x)^2}$.

The question wording is slightly ambiguous. Assuming it implies multiplying the sequence $a_n=1$ by $n$ to get $b_n=n$, the GF is $\frac{x}{(1-x)^2}$. If it literally means differentiating the GF of $a_n=1$, then the result is $\frac{1}{(1-x)^2}$ (GF for $n+1$). Given the usual context of such questions, it's likely asking for the GF of the sequence $n$.

Final Answer: The generating function for the sequence $a_n=1$ is $A(x) = \frac{1}{1-x}$. Differentiating $A(x)$ gives $\frac{1}{(1-x)^2}$, which is the generating function for the sequence $(n+1)$. To obtain the generating function for the sequence $b_n=n$, we multiply the derivative by $x$, resulting in $\frac{x}{(1-x)^2}$.

---
