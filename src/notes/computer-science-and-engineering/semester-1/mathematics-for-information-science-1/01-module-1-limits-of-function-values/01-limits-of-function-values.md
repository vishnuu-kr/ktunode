---
title: "Limits of Function Values"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 1: Limits of Function Values"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bbc"
status: "completed"
scrapedAt: "2026-05-20T16:39:40.379Z"
---
# Mathematics for Information Science – 1: Module 1 - Limits of Function Values

Welcome, everyone, to the foundational module of our journey into Mathematics for Information Science! I'm thrilled to guide you through the fascinating world of calculus, starting with a concept that is absolutely crucial for understanding how functions behave, especially in the context of information and data analysis: **Limits of Function Values**.

Think about it: in information science, we're often dealing with data that changes, trends that evolve, and systems that approach certain states. Understanding what happens to a function's output as its input gets closer and closer to a specific value is like understanding the "destination" of a data stream or the "stable point" of a system. This is exactly what limits help us do.

Our goal in this module is to build a solid understanding of limits, not just for functions of a single variable, but eventually for functions of multiple variables, which are incredibly important in areas like machine learning, optimization, and modeling complex systems.

---

## Understanding the Core Idea: What is a Limit?

Before we dive into the formal definitions, let's get a feel for what a limit is all about. Imagine you're walking towards a door. You can get arbitrarily close to the door – 1 meter away, 1 centimeter away, 1 millimeter away, and so on. Even if you never quite touch the door, you are approaching it. The "limit" of your position is the door itself.

In mathematics, a limit of a function is similar. It describes the value that a function "approaches" as its input "approaches" some value. Crucially, the function *doesn't actually have to attain* that value at that exact point. This might sound a bit strange at first, but it's incredibly powerful.

Consider a function $f(x)$. We're interested in what happens to $f(x)$ as $x$ gets "close" to a certain number, say $c$. We write this as:

$$ \lim_{x \to c} f(x) = L $$

This means that as $x$ gets arbitrarily close to $c$ (from both sides – values less than $c$ and values greater than $c$), the value of $f(x)$ gets arbitrarily close to $L$.

---

### Why is this distinction important? (Connecting to Course Outcomes)

This idea of approaching a value without necessarily reaching it is fundamental. For instance, when we talk about **linearization of functions** (CO1), we're often approximating a complex function with a simpler one (like a tangent line) near a specific point. The accuracy of this approximation relies on understanding the function's behavior as we get close to that point, which is precisely what limits describe.

Also, as we move towards **functions of two variables** (CO2), understanding how the function behaves as we approach a point $(a, b)$ in the plane is critical. Does it approach a single value no matter how we get there? This will be key to calculating limits for multivariable functions.

---

### Illustrative Examples to Build Intuition

Let's start with a simple example. Consider the function:

$f(x) = \frac{x^2 - 1}{x - 1}$

What is the limit of $f(x)$ as $x$ approaches 1?
If we try to plug in $x=1$ directly, we get $\frac{1^2 - 1}{1 - 1} = \frac{0}{0}$, which is an **indeterminate form**. This tells us we can't just substitute the value.

However, notice that for $x \neq 1$, we can simplify the expression:
$f(x) = \frac{(x-1)(x+1)}{x-1} = x+1$

So, for all values of $x$ *except* $x=1$, the function $f(x)$ is equal to $x+1$.
Now, what happens as $x$ approaches 1?
If $x$ is 0.9, $f(x) = 0.9 + 1 = 1.9$.
If $x$ is 0.99, $f(x) = 0.99 + 1 = 1.99$.
If $x$ is 1.1, $f(x) = 1.1 + 1 = 2.1$.
If $x$ is 1.01, $f(x) = 1.01 + 1 = 2.01$.

As $x$ gets closer and closer to 1, $f(x)$ gets closer and closer to 2. Even though $f(1)$ is undefined, the limit as $x$ approaches 1 is 2.

**Remember this:** The limit is about what happens *near* the point, not *at* the point itself. This is a fundamental distinction that trips many students up initially.

**Analogy:** Imagine a popular restaurant that is always fully booked. You want to know what the *experience* is like when you dine there. You might not be able to get a table *exactly* at 7:00 PM, but by observing people arriving just before 7:00 PM and just after 7:00 PM, you can still understand what the dining experience is like at that time. The limit is like that observed experience, not the impossibility of getting a seat at that precise moment.

---

### Formalizing the Concept: The Epsilon-Delta Definition

While the intuitive idea is useful, mathematicians need a precise definition. This is where the famous **epsilon-delta ($\epsilon$-$\delta$) definition** comes in. It's a cornerstone of calculus, as found in textbooks like Thomas' Calculus and Kreyszig's Advanced Engineering Mathematics.

**Definition:** We say that the limit of $f(x)$ as $x$ approaches $c$ is $L$, written as $\lim_{x \to c} f(x) = L$, if for every number $\epsilon > 0$, there exists a number $\delta > 0$ such that if $0 < |x - c| < \delta$, then $|f(x) - L| < \epsilon$.

Let's break this down:

*   **For every number $\epsilon > 0$**: Epsilon ($\epsilon$) represents a small, positive tolerance or distance around the limit value $L$. It's like saying, "I want to be within a distance of $\epsilon$ from $L$."
*   **There exists a number $\delta > 0$**: Delta ($\delta$) represents a small, positive distance around the input value $c$. It's like saying, "I need to find an interval of width $2\delta$ around $c$."
*   **Such that if $0 < |x - c| < \delta$**: This is the condition on $x$. It means that $x$ is "close" to $c$. The $|x - c| < \delta$ part means $c - \delta < x < c + \delta$. The "$0 <$" part is important – it means $x$ is not *equal* to $c$. We are focusing on $x$ values *near* $c$, but not $c$ itself.
*   **Then $|f(x) - L| < \epsilon$**: This is the consequence. If $x$ is close enough to $c$ (within $\delta$), then $f(x)$ must be close enough to $L$ (within $\epsilon$).

**In simpler terms:** No matter how small a target range ($\epsilon$) you set around the limit value $L$, you can always find an input range ($\delta$) around $c$ such that all inputs $x$ in that range (except possibly $c$ itself) will produce outputs $f(x)$ within your target range.

---

### Why do we need $\epsilon$ and $\delta$? (Connecting to CO1 and Understanding)

This rigorous definition is essential for proving theorems about limits. When we talk about **linearizing functions** (CO1), we often use approximations. The $\epsilon$-$\delta$ definition provides the framework to quantify how good that approximation is. For example, if we approximate a function $f(x)$ by its tangent line $T(x)$ near $x=c$, we need to know how close $f(x)$ is to $T(x)$ as $x$ approaches $c$. The $\epsilon$-$\delta$ definition gives us the language to talk about this "closeness" mathematically. It allows us to analyze the *behavior* of functions, which is vital for understanding trends and predicting outcomes in data.

---

### Properties of Limits: The Tools of the Trade

Working with limits directly using the $\epsilon$-$\delta$ definition can be cumbersome for complex functions. Fortunately, there are several properties (or laws) of limits that simplify calculations. These are standard in any introductory calculus text, including Thomas' Calculus and Anton's Calculus.

Let $f(x)$ and $g(x)$ be functions, and let $c$ be a real number. If $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$, then:

1.  **Constant Rule:** $\lim_{x \to c} k = k$ (for any constant $k$)
    *   The limit of a constant function is just the constant itself. Seems obvious, right?
2.  **Identity Rule:** $\lim_{x \to c} x = c$
    *   As $x$ approaches $c$, $x$ approaches $c$. Again, straightforward.
3.  **Sum Rule:** $\lim_{x \to c} [f(x) + g(x)] = L + M$
    *   The limit of a sum is the sum of the limits.
4.  **Difference Rule:** $\lim_{x \to c} [f(x) - g(x)] = L - M$
    *   The limit of a difference is the difference of the limits.
5.  **Constant Multiple Rule:** $\lim_{x \to c} [k \cdot f(x)] = k \cdot L$
    *   A constant factor can be pulled out of the limit.
6.  **Product Rule:** $\lim_{x \to c} [f(x) \cdot g(x)] = L \cdot M$
    *   The limit of a product is the product of the limits.
7.  **Quotient Rule:** $\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{L}{M}$, provided $M \neq 0$.
    *   The limit of a quotient is the quotient of the limits, as long as the denominator's limit is not zero. This is important! If the denominator approaches zero, we have a potential for the limit to be infinite or to not exist.
8.  **Power Rule:** $\lim_{x \to c} [f(x)]^n = L^n$, for any positive integer $n$.
9.  **Root Rule:** $\lim_{x \to c} \sqrt[n]{f(x)} = \sqrt[n]{L}$, provided $L \ge 0$ for even $n$.

These rules are like our mathematical toolkit. They allow us to break down complicated limit problems into simpler ones.

---

### Applying the Limit Properties: Practice Makes Perfect

Let's use these properties to evaluate limits.

**Example 1:** Find $\lim_{x \to 2} (3x^2 - 5x + 1)$

We can apply the rules step-by-step:
*   Using the Sum/Difference Rules, we can look at each term separately:
    $\lim_{x \to 2} (3x^2 - 5x + 1) = \lim_{x \to 2} 3x^2 - \lim_{x \to 2} 5x + \lim_{x \to 2} 1$
*   Using the Constant Multiple Rule:
    $= 3 \lim_{x \to 2} x^2 - 5 \lim_{x \to 2} x + \lim_{x \to 2} 1$
*   Using the Power Rule (for $x^2$) and the Identity Rule (for $x$) and the Constant Rule:
    $= 3 (2^2) - 5 (2) + 1$
    $= 3(4) - 10 + 1$
    $= 12 - 10 + 1 = 3$

So, $\lim_{x \to 2} (3x^2 - 5x + 1) = 3$.
This is a polynomial function, and for polynomials, the limit as $x$ approaches $c$ is simply the function's value at $c$, i.e., $P(c)$. This is a consequence of the limit properties.

**Example 2:** Find $\lim_{x \to 3} \frac{x^2 - 9}{x - 3}$

Here, direct substitution gives $\frac{3^2 - 9}{3 - 3} = \frac{0}{0}$, an indeterminate form.
We can use the simplification technique from before, which essentially leverages algebraic manipulation and the limit properties.
For $x \neq 3$, $\frac{x^2 - 9}{x - 3} = \frac{(x-3)(x+3)}{x-3} = x+3$.

Now we can find the limit of the simplified expression:
$\lim_{x \to 3} (x+3)$
Using the Sum Rule and Identity Rule:
$= \lim_{x \to 3} x + \lim_{x \to 3} 3$
$= 3 + 3 = 6$.

So, $\lim_{x \to 3} \frac{x^2 - 9}{x - 3} = 6$.

**Example 3:** Find $\lim_{x \to 0} \frac{\sin x}{x}$

This is a classic limit that is fundamental in calculus, especially when deriving derivatives of trigonometric functions. If you try to substitute $x=0$, you get $\frac{\sin 0}{0} = \frac{0}{0}$.

The limit $\lim_{x \to 0} \frac{\sin x}{x} = 1$ is often established geometrically or using the Squeeze Theorem (which we'll touch upon later). It's a foundational result you'll see frequently in textbooks like Thomas' Calculus and Kreyszig. For exam purposes, memorizing this specific limit is very useful.

**Example 4:** Find $\lim_{x \to 1} \frac{\sqrt{x} - 1}{x - 1}$

Again, direct substitution yields $\frac{\sqrt{1} - 1}{1 - 1} = \frac{0}{0}$.
Here, we can use a technique called **rationalizing the numerator** or recognizing it as a difference of squares in disguise.
We can write $x - 1$ as $(\sqrt{x})^2 - 1^2 = (\sqrt{x} - 1)(\sqrt{x} + 1)$.

So, for $x \neq 1$:
$\frac{\sqrt{x} - 1}{x - 1} = \frac{\sqrt{x} - 1}{(\sqrt{x} - 1)(\sqrt{x} + 1)} = \frac{1}{\sqrt{x} + 1}$

Now, we can find the limit of the simplified expression:
$\lim_{x \to 1} \frac{1}{\sqrt{x} + 1}$
Using the Quotient Rule and the Root Rule:
$= \frac{\lim_{x \to 1} 1}{\lim_{x \to 1} (\sqrt{x} + 1)}$
$= \frac{1}{\lim_{x \to 1} \sqrt{x} + \lim_{x \to 1} 1}$ (Sum Rule)
$= \frac{1}{\sqrt{1} + 1}$ (Root Rule and Constant Rule)
$= \frac{1}{1 + 1} = \frac{1}{2}$

So, $\lim_{x \to 1} \frac{\sqrt{x} - 1}{x - 1} = \frac{1}{2}$.

---

### Limits at Infinity and Infinite Limits

So far, we've discussed limits as $x$ approaches a finite number $c$. But what happens when $x$ gets arbitrarily large (approaches infinity, $\infty$) or when the function's value grows without bound (an infinite limit)?

#### Limits at Infinity

We write $\lim_{x \to \infty} f(x) = L$ if the values of $f(x)$ get arbitrarily close to $L$ as $x$ becomes arbitrarily large.
Similarly, $\lim_{x \to -\infty} f(x) = L$ if the values of $f(x)$ get arbitrarily close to $L$ as $x$ becomes arbitrarily large negatively.

**Example:** Consider $f(x) = \frac{1}{x}$.
As $x$ gets larger and larger (e.g., 10, 100, 1000, 1,000,000), $f(x)$ gets smaller and smaller, approaching 0.
So, $\lim_{x \to \infty} \frac{1}{x} = 0$.
This is a crucial concept when analyzing the long-term behavior of systems or the convergence of sequences, highly relevant in data analysis.

**For rational functions** (ratios of polynomials), the limit at infinity is determined by the highest degree terms in the numerator and denominator.
If $f(x) = \frac{P(x)}{Q(x)}$, where $P(x) = a_n x^n + \dots$ and $Q(x) = b_m x^m + \dots$:
*   If $n < m$ (degree of numerator < degree of denominator), then $\lim_{x \to \pm\infty} f(x) = 0$.
*   If $n = m$ (degrees are equal), then $\lim_{x \to \pm\infty} f(x) = \frac{a_n}{b_m}$ (ratio of leading coefficients).
*   If $n > m$ (degree of numerator > degree of denominator), then the limit is $\pm\infty$ (or does not exist).

**Example:** $\lim_{x \to \infty} \frac{3x^2 + 2x - 1}{5x^2 - x + 4}$
Here, the degree of the numerator (2) equals the degree of the denominator (2). So, the limit is the ratio of the leading coefficients: $\frac{3}{5}$.

**Example:** $\lim_{x \to \infty} \frac{x + 5}{x^2 - 3}$
Here, the degree of the numerator (1) is less than the degree of the denominator (2). So, the limit is 0.

#### Infinite Limits

We write $\lim_{x \to c} f(x) = \infty$ if the values of $f(x)$ become arbitrarily large positive as $x$ approaches $c$.
Similarly, $\lim_{x \to c} f(x) = -\infty$ if the values of $f(x)$ become arbitrarily large negative as $x$ approaches $c$.

**Example:** $\lim_{x \to 0} \frac{1}{x^2}$
As $x$ approaches 0 from either the positive side (e.g., 0.1, 0.01) or the negative side (e.g., -0.1, -0.01), $x^2$ is always positive and gets very close to 0. Thus, $\frac{1}{x^2}$ becomes very large and positive.
So, $\lim_{x \to 0} \frac{1}{x^2} = \infty$.
Notice that the limit doesn't exist as a finite number, but we can describe its behavior as "approaching infinity."

This concept is important when we study **asymptotes** (lines that a curve approaches) and the behavior of functions near points where they are undefined.

---

### Continuity: A Bridge to Further Concepts

A function is called **continuous** at a point $c$ if three conditions are met:
1.  $f(c)$ is defined.
2.  $\lim_{x \to c} f(x)$ exists.
3.  $\lim_{x \to c} f(x) = f(c)$.

In essence, a function is continuous at a point if you can draw its graph through that point without lifting your pen. The limit existing and being equal to the function's value at that point ensures there are no jumps, holes, or breaks.

Continuity is a prerequisite for many other calculus concepts, including the Intermediate Value Theorem and the Extreme Value Theorem, which are crucial for understanding function behavior, optimization (CO3, CO4), and error analysis.

---

### The Squeeze Theorem (or Sandwich Theorem)

Sometimes, finding a limit directly is hard, but we can bound the function between two other functions whose limits we know. This is where the Squeeze Theorem comes in, a powerful tool mentioned in many calculus texts.

**The Squeeze Theorem:** If $g(x) \le f(x) \le h(x)$ for all $x$ in an open interval containing $c$ (except possibly at $c$ itself), and if $\lim_{x \to c} g(x) = L$ and $\lim_{x \to c} h(x) = L$, then $\lim_{x \to c} f(x) = L$.

**Analogy:** Imagine you're trying to track a fast-moving drone (your function $f(x)$). You can't see it directly, but you can see two planes, one flying at a high altitude (function $h(x)$) and one flying at a low altitude (function $g(x)$). If both planes are flying towards the same point in the sky (limit $L$), and your drone is always between them, then your drone must also be heading towards that same point.

**Example:** We can use the Squeeze Theorem to prove $\lim_{x \to 0} \frac{\sin x}{x} = 1$. This involves comparing areas of sectors and triangles in a unit circle, a detailed proof found in most calculus textbooks. The result is critical for differentiating trigonometric functions.

---

## Connecting to Course Outcomes and Future Topics

Let's explicitly link what we've learned about limits to our course outcomes:

*   **CO1: Apply various concepts in calculus to linearize functions and to analyze concavity.**
    *   **Linearization:** The concept of a limit is foundational to linearization. When we approximate a function $f(x)$ by its tangent line $T(x) = f(a) + f'(a)(x-a)$ at $x=a$, the slope $f'(a)$ is *defined* as a limit: $f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$. Understanding limits allows us to understand how well the tangent line approximates the function near the point of tangency. The $\epsilon$-$\delta$ definition provides the rigor to analyze this approximation's accuracy.
    *   **Concavity:** While concavity is more directly related to the second derivative, the derivative itself is a limit. Understanding the behavior of the slope (the first derivative) as we move along the curve, which is governed by limits, helps us grasp concepts like concavity.

*   **CO2: Calculate the limits for functions of two variables and partial derivatives of multivariable functions.**
    *   This module is our essential groundwork for CO2. The principles of limits for single-variable functions extend to functions of two (or more) variables. For a function $f(x, y)$, we'll be interested in what happens as $(x, y)$ approaches a point $(a, b)$. The key difference is that $(x, y)$ can approach $(a, b)$ from infinitely many directions in the plane, not just from the left and right. We'll need to ensure the limit is the same regardless of the path taken. This will directly lead to the definition of continuity for multivariable functions and subsequently to partial derivatives.

*   **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions.**
    *   The concepts of partial derivatives and directional derivatives are extensions of the single-variable derivative, which is defined using limits. The rate of change of a multivariable function in a specific direction (directional derivative) is a limit of the change in the function's value divided by the change in position along that direction. Similarly, finding maxima and minima often involves setting derivatives to zero, and derivatives are fundamentally limits.

*   **CO4: Solve constrained maxima and minima, LPP and understand the method of Steepest Descent.**
    *   Optimization techniques, including Lagrange multipliers (for constrained optimization) and the method of steepest descent, rely heavily on understanding gradients and the behavior of functions in multiple dimensions. The gradient is a vector of partial derivatives, and understanding how functions change locally (which is what derivatives tell us) is a direct application of limit concepts. Steepest descent, for example, iteratively moves in the direction of the negative gradient to find minima, a process rooted in understanding local function behavior via derivatives.

---

## Exam Preparation and Common Pitfalls

*   **Indeterminate Forms ($\frac{0}{0}$, $\frac{\infty}{\infty}$):** Be prepared to handle these. Techniques like algebraic simplification (factoring, rationalizing), L'Hôpital's Rule (which is a powerful tool for indeterminate forms, though sometimes introduced later), and recognizing standard limits are key.
*   **Limits at a Point vs. Limits at Infinity:** Understand the difference and how to approach each. For rational functions at infinity, focus on the leading terms.
*   **The Distinction Between a Limit and a Function Value:** Remember that $\lim_{x \to c} f(x)$ can exist even if $f(c)$ is undefined or different from the limit. This is crucial for understanding continuity and removable discontinuities (holes in graphs).
*   **Directional Limits:** When we get to multivariable calculus, you’ll need to check if the limit is the same from all directions. If you find two different paths that yield different limits, then the overall limit does not exist.
*   **Memorize Key Limits:** Limits like $\lim_{x \to 0} \frac{\sin x}{x} = 1$ and $\lim_{x \to 0} \frac{1 - \cos x}{x} = 0$ are very useful.

---

## Sample Questions and Answers

Here are a few questions to test your understanding.

**1. Conceptual Question:**
Explain in your own words why the limit of a function as $x$ approaches a value $c$ does not depend on the value of the function at $c$ itself. Use an analogy to illustrate your point.

**Answer:** The limit of a function $f(x)$ as $x$ approaches $c$ describes the value that $f(x)$ gets arbitrarily close to as $x$ gets arbitrarily close to $c$, *but not equal to* $c$. It's about the behavior of the function *in the neighborhood* of $c$. The actual value at $c$, $f(c)$, can be undefined, or it can be different from the limit, creating a "hole" or a "jump" at that point.
**Analogy:** Imagine you're trying to predict the temperature in a city at exactly noon tomorrow. You look at the temperatures recorded at 11:55 AM, 11:58 AM, 11:59 AM, and then 12:01 PM, 12:03 PM, and 12:05 PM. By observing these values around noon, you can make a good prediction for the temperature *at* noon. The actual temperature recorded *at* noon might be slightly different due to a sudden gust of wind or a cloud passing by, but your prediction based on the surrounding data (the limit) is still very reliable.

---

**2. Calculation Question:**
Evaluate the limit: $\lim_{x \to -1} \frac{x^3 + 1}{x + 1}$

**Answer:**
When we substitute $x = -1$, we get $\frac{(-1)^3 + 1}{-1 + 1} = \frac{-1 + 1}{0} = \frac{0}{0}$, which is an indeterminate form.
We can factor the numerator, which is a sum of cubes: $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$.
Here, $a=x$ and $b=1$.
So, $x^3 + 1 = (x+1)(x^2 - x + 1)$.

Now, rewrite the limit expression:
$\lim_{x \to -1} \frac{(x+1)(x^2 - x + 1)}{x + 1}$

For $x \neq -1$, we can cancel out the $(x+1)$ term:
$= \lim_{x \to -1} (x^2 - x + 1)$

Now, substitute $x = -1$ into the simplified expression:
$= (-1)^2 - (-1) + 1$
$= 1 + 1 + 1 = 3$

Therefore, $\lim_{x \to -1} \frac{x^3 + 1}{x + 1} = 3$.

---

**3. Conceptual and Calculation Question:**
Consider the function $f(x) = \begin{cases} x^2 & \text{if } x < 0 \\ x + 1 & \text{if } x \ge 0 \end{cases}$.
Does $\lim_{x \to 0} f(x)$ exist? If yes, what is its value? Is the function continuous at $x=0$? Explain.

**Answer:**
To determine if $\lim_{x \to 0} f(x)$ exists, we need to check the left-hand limit and the right-hand limit.

*   **Left-hand limit:** As $x$ approaches 0 from the left ($x < 0$), $f(x) = x^2$.
    $\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} x^2 = 0^2 = 0$.

*   **Right-hand limit:** As $x$ approaches 0 from the right ($x \ge 0$), $f(x) = x + 1$.
    $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (x + 1) = 0 + 1 = 1$.

Since the left-hand limit (0) is not equal to the right-hand limit (1), the overall limit $\lim_{x \to 0} f(x)$ **does not exist**.

For the function to be continuous at $x=0$, three conditions must be met:
1.  $f(0)$ must be defined.
2.  $\lim_{x \to 0} f(x)$ must exist.
3.  $\lim_{x \to 0} f(x) = f(0)$.

From our analysis:
*   $f(0)$ is defined by the second case: $f(0) = 0 + 1 = 1$.
*   $\lim_{x \to 0} f(x)$ does not exist.

Since the second condition for continuity is not met, the function $f(x)$ is **not continuous** at $x=0$. There is a jump discontinuity at $x=0$.

---

This covers our introduction to limits of function values. It's a crucial starting point for everything we'll do in this course. Keep practicing these concepts, and don't hesitate to ask questions! Your understanding of limits will pave the way for deeper insights into the behavior of functions, which is at the heart of so much in information science.
