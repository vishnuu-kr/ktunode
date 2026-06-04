---
title: "Continuous Functions"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 1: Limits of Function Values"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bbe"
status: "completed"
scrapedAt: "2026-05-20T16:39:44.089Z"
---
## Mathematics for Information Science – 1

### Module 1: Limits of Function Values

#### Topic: Continuous Functions

Hello everyone, and welcome back! Today, we're diving into a fundamental concept in calculus and a cornerstone for much of what we'll do in information science: **Continuous Functions**. Think of continuity as the absence of surprises, gaps, or sudden jumps in a function's graph. If you can draw a function's graph without lifting your pen, it's continuous. This intuitive idea has a precise mathematical definition, and understanding it is crucial for analyzing systems, building models, and ensuring the reliability of our algorithms.

This topic directly relates to our course objectives. When we talk about modeling real-world phenomena, especially in information science where data can be vast and varied, we often assume underlying continuous processes. Understanding continuity helps us justify these assumptions, and later, when we look at optimization (CO3, CO4) or analyze the behavior of systems (CO1), the smoothness and predictability offered by continuous functions become invaluable.

Let's start by building upon our understanding of limits, which we've already explored. Remember, a limit describes what value a function *approaches* as its input gets closer and closer to a certain point.

### The Intuitive Idea of Continuity

Imagine you're walking along a path. If that path is continuous, you can walk from any point to any other point without encountering a hole, a sudden drop, or a leap to a different location. You can always take a small step to get closer to your destination. A discontinuous path, on the other hand, would have breaks.

In terms of a function, say $f(x)$, being continuous at a point $x=c$ means that as $x$ gets arbitrarily close to $c$, the function value $f(x)$ gets arbitrarily close to $f(c)$. This sounds a lot like our definition of a limit, doesn't it? And that's exactly where the mathematical rigor comes from.

### The Formal Definition of Continuity at a Point

To make this rigorous, we combine the idea of limits with the actual value of the function at that point. A function $f(x)$ is **continuous at a point $x=c$** if and only if three conditions are met:

1.  **The function is defined at $c$.** This means $f(c)$ exists. If there's a hole or a missing point at $x=c$, the function can't be continuous there.
2.  **The limit of the function as $x$ approaches $c$ exists.** This means $\lim_{x \to c} f(x)$ exists. As we get closer to $c$ from either side, the function values are approaching a specific, single value.
3.  **The limit equals the function's value at $c$.** This is the crucial link: $\lim_{x \to c} f(x) = f(c)$. The value the function *approaches* must be exactly the value the function *is* at that point.

Think of it like this: if you’re checking the temperature at a specific time, say noon, continuity means that as noon approaches from 11:59 AM and from 12:01 PM, the temperature is heading towards the *actual* temperature reading at noon. There isn't a sudden jump or a missing reading precisely at noon.

This definition is elegantly presented in **Thomas' Calculus** (15th ed., Section 2.6). It’s the bedrock of our understanding.

**A Quick Example:**

Let's consider the function $f(x) = x^2$. Is it continuous at $x=2$?

1.  Is $f(2)$ defined? Yes, $f(2) = 2^2 = 4$.
2.  Does $\lim_{x \to 2} f(x)$ exist? Yes, $\lim_{x \to 2} x^2 = 2^2 = 4$.
3.  Does the limit equal the function value? Yes, $4 = 4$.

Since all three conditions are met, $f(x) = x^2$ is continuous at $x=2$. In fact, this function is continuous everywhere.

**A Non-Example:**

Consider the function:
$g(x) = \begin{cases} x+1 & \text{if } x \neq 1 \\ 0 & \text{if } x = 1 \end{cases}$

Let's check for continuity at $x=1$:

1.  Is $g(1)$ defined? Yes, $g(1) = 0$.
2.  Does $\lim_{x \to 1} g(x)$ exist? To find this, we look at values of $x$ *near* 1, but not equal to 1. For $x \neq 1$, $g(x) = x+1$. So, $\lim_{x \to 1} g(x) = \lim_{x \to 1} (x+1) = 1+1 = 2$. Yes, the limit exists and is 2.
3.  Does $\lim_{x \to 1} g(x) = g(1)$? Here we have $2 \neq 0$.

Since the third condition fails, $g(x)$ is **not continuous** at $x=1$. It has a "removable discontinuity" because if we redefine $g(1)$ to be 2, it would become continuous.

### Types of Discontinuities

We encountered a "removable discontinuity" in the example above. These occur when the limit exists, but either the function isn't defined at that point, or the function's value at that point doesn't match the limit. We can often "remove" this type of discontinuity by redefining the function's value at that single point.

Another common type is a **jump discontinuity**. This happens when the left-hand limit and the right-hand limit exist, but they are not equal.

For instance, consider a function representing the cost of postage. If you send a letter weighing up to 1 ounce, it costs a certain amount. If it weighs even slightly more (say, 1.1 ounces), the cost jumps to a higher price. This jump is a discontinuity.

Mathematically, for a jump discontinuity at $x=c$:
$\lim_{x \to c^-} f(x) \neq \lim_{x \to c^+} f(x)$

A third type is an **infinite discontinuity**. This occurs when one or both of the one-sided limits approach infinity or negative infinity. A classic example is the function $h(x) = 1/x$ at $x=0$. As $x$ approaches 0 from the right ($x \to 0^+$), $1/x$ goes to $+\infty$. As $x$ approaches 0 from the left ($x \to 0^-$), $1/x$ goes to $-\infty$. The function is not defined at $x=0$, and the limit does not exist in the finite sense. This is what happens when you have a vertical asymptote.

Kreyszig’s *Advanced Engineering Mathematics* (10th ed., Chapter 1, Section 1.7 on continuity) also provides a thorough treatment of these concepts.

### Continuity on an Interval

Now, a function is said to be **continuous on an interval** if it is continuous at every point within that interval.

*   **Open Interval (a, b):** A function $f$ is continuous on $(a, b)$ if it's continuous at every point $c$ in $(a, b)$.
*   **Closed Interval [a, b]:** A function $f$ is continuous on $[a, b]$ if it's continuous on the open interval $(a, b)$, *and* it is continuous from the right at $a$ (meaning $\lim_{x \to a^+} f(x) = f(a)$) *and* continuous from the left at $b$ (meaning $\lim_{x \to b^-} f(x) = f(b)$).

This is important when we deal with functions defined over a specific range, like a time period or a physical domain.

### Properties of Continuous Functions

The real power of continuous functions lies in their predictable behavior. They allow us to make powerful deductions and apply theorems that are fundamental to mathematics and its applications. Here are some key properties, often discussed in **Thomas' Calculus** and **Calculus & Its Applications** (14th ed., Chapter 2, Section 2.8):

1.  **Sum, Difference, and Product:** If $f(x)$ and $g(x)$ are continuous at $x=c$, then so are $f(x) + g(x)$, $f(x) - g(x)$, and $f(x) \cdot g(x)$.
    *   *Analogy:* If your data streaming speed is stable (continuous) and your internet connection speed is also stable (continuous), then the combined download speed or difference in speeds will also be stable.
2.  **Quotient:** If $f(x)$ and $g(x)$ are continuous at $x=c$, and $g(c) \neq 0$, then the quotient $f(x)/g(x)$ is also continuous at $x=c$.
    *   *Caveat:* The denominator cannot be zero at the point of continuity. This is why $1/x$ is discontinuous at $x=0$.
3.  **Constant Multiple:** If $f(x)$ is continuous at $x=c$ and $k$ is a constant, then $k \cdot f(x)$ is continuous at $x=c$.
4.  **Composition of Functions:** If $g(x)$ is continuous at $x=c$ and $f(u)$ is continuous at $u=g(c)$, then the composite function $(f \circ g)(x) = f(g(x))$ is continuous at $x=c$.
    *   This is a really important property! It means if you have a sequence of continuous operations, the final result is also continuous. Think about a pipeline of data processing modules. If each module operates continuously on the data, the overall process will be continuous.

### Examples of Functions That Are Always Continuous

Many familiar functions are continuous everywhere on their domains. This is good news because it means we can trust their behavior.

*   **Polynomials:** Functions like $f(x) = ax^n + bx^{n-1} + \dots + c$ are continuous everywhere. Their graphs are smooth, unbroken curves.
    *   *Relatability:* If you're modeling something with a polynomial, like the trajectory of a projectile or a simplified economic model, you can be confident in its continuity.
*   **Rational Functions:** These are ratios of polynomials, like $R(x) = P(x)/Q(x)$. They are continuous everywhere *except* where the denominator $Q(x)$ is zero.
    *   *Information Science Link:* When you analyze algorithms with computational complexity, say $O(n^2 / (n-5))$, you know it's continuous everywhere except $n=5$. This might indicate a bottleneck or a special case in your algorithm's performance.
*   **Trigonometric Functions:** $\sin(x)$, $\cos(x)$ are continuous everywhere. $\tan(x)$, $\cot(x)$, $\sec(x)$, $\csc(x)$ are continuous on their respective domains, but have discontinuities where their denominators are zero (e.g., $\tan(x)$ is discontinuous at $x = \frac{\pi}{2} + n\pi$).
*   **Exponential and Logarithmic Functions:** $e^x$, $a^x$ are continuous everywhere. $\ln(x)$ and $\log_a(x)$ are continuous on their domains ($x>0$).
*   **Radical Functions:** $\sqrt{x}$ is continuous on $[0, \infty)$. $\sqrt[3]{x}$ is continuous everywhere.

The text **Higher Engineering Mathematics** by B. V. Ramana (39th ed.) and John Bird's **Bird’s Higher Engineering Mathematics** (9th ed.) cover these classes of functions extensively and are great references for their properties.

### The Intermediate Value Theorem (IVT)

This is one of the most powerful consequences of continuity. The **Intermediate Value Theorem** states:

*   If a function $f$ is **continuous** on a closed interval $[a, b]$, and $N$ is any number between $f(a)$ and $f(b)$ (inclusive), then there exists at least one number $c$ in $[a, b]$ such that $f(c) = N$.

*   *Intuitive Explanation:* If you travel from point A to point B without any jumps, you must pass through every intermediate altitude between A and B.
*   *Real-World Application:* Imagine you're monitoring the server load over an hour. If the load was 10% at the start of the hour and 50% at the end, and the load function is continuous (no sudden infinite spikes or drops), then at some point during that hour, the server load *must* have been exactly 30%.

**Why is this important for Information Science?**

The IVT is crucial for:
*   **Root Finding:** If $f(a)$ and $f(b)$ have opposite signs, then there must be a root (a value of $c$ where $f(c)=0$) between $a$ and $b$. This is the basis for methods like the bisection method, a simple yet robust way to find solutions to equations numerically. This relates to CO1 where we analyze function behavior.
*   **Existence Proofs:** Proving that a solution exists without necessarily finding it.

This theorem is a prime example of how continuity translates to predictable behavior, a property we rely on heavily.

### Continuity and Derivatives (CO1 Connection)

For our course outcome CO1, which involves linearizing functions and analyzing concavity, continuity is a prerequisite.

*   **Differentiability implies Continuity:** If a function $f$ is differentiable at $x=c$, then it *must* be continuous at $x=c$.
    *   Think about it: for a derivative to exist, the function must be smooth enough at that point – no holes, no jumps, no sharp corners. A sharp corner is a point of continuity but not differentiability. A hole or jump is a point of discontinuity.
    *   This means that if we are considering linearization (finding the tangent line, which is the derivative), we first need to ensure the function is continuous at the point of linearization.

*   **Continuity does NOT imply Differentiability:** As mentioned, functions like $|x|$ are continuous at $x=0$, but they have a sharp corner there, so they are not differentiable at $x=0$.

When we analyze concavity later, we'll be looking at the second derivative. For the second derivative to exist, the function must first be continuous and then its first derivative must also be continuous. This builds a chain of requirements.

### How to Test for Continuity (Exam Focus)

When asked to determine if a function is continuous at a specific point, systematically go through the three formal conditions:

1.  **Check if $f(c)$ is defined.**
2.  **Check if $\lim_{x \to c} f(x)$ exists.** This might involve calculating the left-hand limit ($\lim_{x \to c^-} f(x)$) and the right-hand limit ($\lim_{x \to c^+} f(x)$). If they are equal, the limit exists.
3.  **Check if $\lim_{x \to c} f(x) = f(c)$.**

If any of these steps fail, the function is discontinuous at $c$.

**Common Pitfalls:**

*   Forgetting to check if $f(c)$ is defined.
*   Assuming the limit exists without checking both one-sided limits, especially for piecewise functions.
*   Confusing continuity with differentiability.

**Quick Recall Tip:** The three conditions for continuity at $c$ are: $f(c)$ exists, $\lim_{x \to c} f(x)$ exists, and they are equal.

### Sample Questions and Answers

Let's solidify our understanding with some practice.

**Question 1 (Conceptual):**
Explain in your own words why the condition $\lim_{x \to c} f(x) = f(c)$ is essential for a function to be continuous at $x=c$.

**Answer:**
This condition ensures that the function's behavior *approaching* a point ($c$) matches its actual value *at* that point ($f(c)$). If the limit does not equal the function's value, it means there's a "mismatch" or a "jump" precisely at $c$. Either the function "misses" its target value (limit exists, $f(c)$ is different) or it's not even defined at the target (limit exists, but $f(c)$ is undefined), breaking the idea of a smooth, connected path. This ensures predictability, which is vital for analysis and modeling in information science.

**Question 2 (Procedural):**
Determine if the function $f(x) = \frac{x^2 - 4}{x - 2}$ is continuous at $x=2$.

**Answer:**
Let's check the three conditions at $c=2$:

1.  **Is $f(2)$ defined?**
    $f(2) = \frac{2^2 - 4}{2 - 2} = \frac{4 - 4}{0} = \frac{0}{0}$. This is an indeterminate form, meaning $f(2)$ is **undefined**.

Since the first condition (function must be defined at the point) fails, $f(x)$ is **not continuous** at $x=2$.

*   **Further Analysis (Removable Discontinuity):** Even though it's discontinuous, let's see what happens near $x=2$.
    For $x \neq 2$, we can simplify: $f(x) = \frac{(x-2)(x+2)}{x-2} = x+2$.
    So, $\lim_{x \to 2} f(x) = \lim_{x \to 2} (x+2) = 2+2 = 4$.
    The limit exists and is 4, but the function is undefined at $x=2$. This is a removable discontinuity. If we defined $f(2) = 4$, the function would become continuous.

**Question 3 (Piecewise Function):**
Consider the function:
$h(x) = \begin{cases} 3x - 1 & \text{if } x < 1 \\ 5 & \text{if } x = 1 \\ 2x + 1 & \text{if } x > 1 \end{cases}$
Is $h(x)$ continuous at $x=1$?

**Answer:**
Let's check the three conditions at $c=1$:

1.  **Is $h(1)$ defined?**
    Yes, from the definition, $h(1) = 5$.

2.  **Does $\lim_{x \to 1} h(x)$ exist?**
    We need to check the one-sided limits:
    *   Left-hand limit: $\lim_{x \to 1^-} h(x)$. For $x < 1$, $h(x) = 3x - 1$.
        So, $\lim_{x \to 1^-} (3x - 1) = 3(1) - 1 = 3 - 1 = 2$.
    *   Right-hand limit: $\lim_{x \to 1^+} h(x)$. For $x > 1$, $h(x) = 2x + 1$.
        So, $\lim_{x \to 1^+} (2x + 1) = 2(1) + 1 = 2 + 1 = 3$.

    Since $\lim_{x \to 1^-} h(x) = 2$ and $\lim_{x \to 1^+} h(x) = 3$, and $2 \neq 3$, the **limit $\lim_{x \to 1} h(x)$ does not exist**.

Since the second condition fails, $h(x)$ is **not continuous** at $x=1$. This is a jump discontinuity.

**Question 4 (Interpreting IVT, CO1 Link):**
A biologist is studying the population of a bacteria colony. They measure the population at time $t=0$ hours to be 100 bacteria and at $t=5$ hours to be 1000 bacteria. If the population growth can be modeled by a continuous function, can they conclude that the population reached exactly 500 bacteria at some point between $t=0$ and $t=5$? Explain using the concept of continuity.

**Answer:**
Yes, they can conclude this. The problem states that the population growth can be modeled by a **continuous function**, let's call it $P(t)$. We are given $P(0) = 100$ and $P(5) = 1000$. The number $N=500$ is between $P(0)$ and $P(5)$. According to the **Intermediate Value Theorem (IVT)**, if a function is continuous on a closed interval $[a, b]$, then for any value $N$ between $f(a)$ and $f(b)$, there exists at least one $c$ in $[a, b]$ such that $f(c) = N$.

In this case, $a=0$, $b=5$, $f(a)=P(0)=100$, $f(b)=P(5)=1000$, and $N=500$. Since $P(t)$ is continuous on $[0, 5]$ and $100 < 500 < 1000$, the IVT guarantees that there exists at least one time $c$ in the interval $[0, 5]$ such that $P(c) = 500$. This directly supports our understanding of continuous functions and their predictable behavior, linking to CO1's goal of analyzing function behavior.

---

This covers the core concepts of continuity. Remember, continuity is about predictability and smoothness, and it's a foundational building block for many advanced topics we'll explore. Keep these definitions and properties in mind as we move forward!
