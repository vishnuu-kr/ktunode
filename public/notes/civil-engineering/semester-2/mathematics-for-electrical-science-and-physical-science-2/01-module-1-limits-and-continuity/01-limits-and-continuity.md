---
title: "Limits and continuity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 1: Limits and continuity"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912cc0"
status: "completed"
scrapedAt: "2026-05-20T18:36:45.402Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2

## Module 1: Limits and Continuity

### Topic: Limits and Continuity

Welcome, everyone, to our first module in Mathematics for Electrical Science and Physical Science – 2! This is where we lay a crucial foundation for understanding how quantities change, how systems behave, and how we can model them mathematically. Today, we dive into the fundamental concepts of **Limits** and **Continuity**. These ideas are absolutely essential, forming the bedrock for calculus, which you'll find is indispensable in electrical engineering, physics, and many other scientific disciplines.

Think about it: in electrical circuits, how does current change when you flip a switch? In physics, how does a particle's velocity behave as time approaches zero? These are questions about *approaching* a value, about what happens *near* a point, not necessarily *at* the point itself. That's where the concept of a limit comes in. And once we understand limits, we can talk about whether a function is "smooth" or "well-behaved" at a point – that's continuity.

Our journey through this module will equip us to understand and apply these concepts, directly supporting our Course Outcomes. For instance, understanding how functions behave near specific points is vital for analyzing the rate of change, which links directly to **CO1 (derivatives)** and **CO3 (derivatives of vector functions)**. We'll see how these seemingly abstract ideas have very practical implications in engineering problems.

Let's start with the star of the show: **Limits**.

### 1. Understanding Limits: What Does It Mean to "Approach" a Value?

Imagine you're trying to reach a destination, say, a specific point on a map. You get closer and closer, but maybe there's a small obstacle, a tiny island in the middle of a lake, that you can't actually land on. But you can get infinitely close to its shore. The limit is like asking, "What point are you *approaching* as you get closer and closer to that obstacle?"

In mathematics, we're not talking about physical distance, but about the *value* of a function as its *input* gets closer and closer to a certain number.

Let's consider a function, say $f(x) = \frac{x^2 - 1}{x - 1}$. We want to know what happens to the value of $f(x)$ as $x$ gets close to 1.

Now, if we try to plug in $x=1$ directly, we get $\frac{1^2 - 1}{1 - 1} = \frac{0}{0}$. This is an **indeterminate form**. It doesn't tell us anything about the value of the function *at* $x=1$. But the limit is about what happens *near* $x=1$.

What if we try values of $x$ that are *just slightly less than* 1?
Let $x = 0.9$. Then $f(0.9) = \frac{(0.9)^2 - 1}{0.9 - 1} = \frac{0.81 - 1}{-0.1} = \frac{-0.19}{-0.1} = 1.9$.
Let $x = 0.99$. Then $f(0.99) = \frac{(0.99)^2 - 1}{0.99 - 1} = \frac{0.9801 - 1}{-0.01} = \frac{-0.0199}{-0.01} = 1.99$.
Let $x = 0.999$. Then $f(0.999) = \frac{(0.999)^2 - 1}{0.999 - 1} = \frac{0.998001 - 1}{-0.001} = \frac{-0.001999}{-0.001} = 1.999$.

See a pattern? As $x$ approaches 1 from the left (values less than 1), $f(x)$ seems to be approaching 2.

Now, let's try values of $x$ that are *just slightly greater than* 1:
Let $x = 1.1$. Then $f(1.1) = \frac{(1.1)^2 - 1}{1.1 - 1} = \frac{1.21 - 1}{0.1} = \frac{0.21}{0.1} = 2.1$.
Let $x = 1.01$. Then $f(1.01) = \frac{(1.01)^2 - 1}{1.01 - 1} = \frac{1.0201 - 1}{0.01} = \frac{0.0201}{0.01} = 2.01$.
Let $x = 1.001$. Then $f(1.001) = \frac{(1.001)^2 - 1}{1.001 - 1} = \frac{1.002001 - 1}{0.001} = \frac{0.002001}{0.001} = 2.001$.

Again, we see a pattern! As $x$ approaches 1 from the right (values greater than 1), $f(x)$ also seems to be approaching 2.

Since $f(x)$ approaches the same value (2) as $x$ approaches 1 from both the left and the right, we say that the **limit of $f(x)$ as $x$ approaches 1 is 2**.

We write this mathematically as:
$$ \lim_{x \to 1} f(x) = 2 $$
or
$$ \lim_{x \to 1} \frac{x^2 - 1}{x - 1} = 2 $$

This is a powerful idea because it allows us to analyze functions even at points where they might be undefined.

**A More Formal Look: The Epsilon-Delta Definition (Just a Peek!)**

While our intuitive approach using tables of values is great for building understanding, mathematicians like to be precise. The formal definition of a limit, often called the epsilon-delta (ε-δ) definition, is key. It’s attributed to Cauchy and is detailed in our textbooks like Anton et al. (12th ed.) and Weir et al. (Thomas’ Calculus, 15th ed.).

It states: The limit of $f(x)$ as $x$ approaches $c$ is $L$, written $\lim_{x \to c} f(x) = L$, if for every number $\epsilon > 0$, there exists a number $\delta > 0$ such that if $0 < |x - c| < \delta$, then $|f(x) - L| < \epsilon$.

What does this really mean?
*   **$\epsilon$ (epsilon)**: This is a small positive number representing how close we want $f(x)$ to be to $L$. Think of it as our "tolerance" for the output value.
*   **$\delta$ (delta)**: This is another small positive number representing how close we need $x$ to be to $c$. Think of it as our "tolerance" for the input value.

The definition says that for *any* desired closeness to $L$ (any $\epsilon$), we can find a corresponding closeness to $c$ (a $\delta$) such that if $x$ is within $\delta$ of $c$ (but not equal to $c$), then $f(x)$ will be within $\epsilon$ of $L$.

This definition is crucial for proving theorems about limits, and it’s a concept that’s revisited often in advanced mathematics. It's the rigorous foundation upon which everything else is built.

### 2. Properties of Limits: Shortcuts to Calculation

Testing values can be tedious, especially for complex functions. Fortunately, limits obey several useful algebraic properties. These are like the rules of arithmetic for limits, allowing us to compute limits of combinations of functions. These properties are fundamental and you'll see them used constantly, like in **CO1** when we analyze how functions change.

Let's assume $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$.

1.  **The Sum Rule:** The limit of a sum is the sum of the limits.
    $$ \lim_{x \to c} [f(x) + g(x)] = \lim_{x \to c} f(x) + \lim_{x \to c} g(x) = L + M $$
    *Analogy:* If two engineers are each getting closer to a specific target value for their measurements, the sum of their measurements will get closer to the sum of the target values.

2.  **The Difference Rule:** The limit of a difference is the difference of the limits.
    $$ \lim_{x \to c} [f(x) - g(x)] = \lim_{x \to c} f(x) - \lim_{x \to c} g(x) = L - M $$

3.  **The Constant Multiple Rule:** The limit of a constant times a function is the constant times the limit of the function.
    $$ \lim_{x \to c} [k \cdot f(x)] = k \cdot \lim_{x \to c} f(x) = k \cdot L $$
    where $k$ is a constant.
    *Example:* If one measurement is consistently $5$ units, and another measurement is approaching $3$, the first measurement plus twice the second measurement will approach $5 + 2(3) = 11$.

4.  **The Product Rule:** The limit of a product is the product of the limits.
    $$ \lim_{x \to c} [f(x) \cdot g(x)] = \left(\lim_{x \to c} f(x)\right) \cdot \left(\lim_{x \to c} g(x)\right) = L \cdot M $$
    *Analogy:* If you're approaching a certain speed and a certain time interval, the distance you cover (speed times time) will approach the product of those values.

5.  **The Quotient Rule:** The limit of a quotient is the quotient of the limits, provided the limit of the denominator is not zero.
    $$ \lim_{x \to c} \frac{f(x)}{g(x)} = \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)} = \frac{L}{M}, \quad \text{if } M \neq 0 $$
    This is super important for our earlier example $\frac{x^2 - 1}{x - 1}$!

6.  **The Power Rule:** If $n$ is a positive integer, then:
    $$ \lim_{x \to c} [f(x)]^n = \left(\lim_{x \to c} f(x)\right)^n = L^n $$

7.  **The Limit of a Polynomial:** For a polynomial $P(x) = a_n x^n + \dots + a_1 x + a_0$,
    $$ \lim_{x \to c} P(x) = P(c) = a_n c^n + \dots + a_1 c + a_0 $$
    This is fantastic! For polynomials, you can just plug in the value. This is why we can directly substitute for many functions.

8.  **The Limit of a Rational Function:** For a rational function $R(x) = \frac{P(x)}{Q(x)}$ (where $P$ and $Q$ are polynomials),
    $$ \lim_{x \to c} R(x) = \frac{P(c)}{Q(c)}, \quad \text{if } Q(c) \neq 0 $$
    This brings us back to our $\frac{x^2 - 1}{x - 1}$ example. While $Q(1) = 1-1=0$, we could simplify the function first:
    $$ \frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} $$
    For $x \neq 1$, we can cancel the $(x-1)$ terms, leaving $x+1$.
    So, $\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} (x+1)$.
    Now, $x+1$ is a polynomial. So, we can just plug in $x=1$: $1+1=2$. This confirms our earlier result!

**Key Takeaway:** Whenever you can plug in the value directly without getting an indeterminate form ($\frac{0}{0}, \frac{\infty}{\infty}$, etc.), that value is the limit. This is extremely common for polynomials and rational functions where the denominator isn't zero at the point.

### 3. One-Sided Limits: Approaching from a Specific Direction

Sometimes, a function might behave differently depending on whether you approach a point from the left or the right. This is common with functions involving square roots or piecewise definitions.

*   **Limit from the Left:** The limit of $f(x)$ as $x$ approaches $c$ from values less than $c$. We denote this as $\lim_{x \to c^-} f(x)$.
*   **Limit from the Right:** The limit of $f(x)$ as $x$ approaches $c$ from values greater than $c$. We denote this as $\lim_{x \to c^+} f(x)$.

**Crucial Relationship:** The two-sided limit $\lim_{x \to c} f(x)$ exists and is equal to $L$ *if and only if* both the one-sided limits exist and are equal to $L$.
$$ \lim_{x \to c} f(x) = L \quad \iff \quad \lim_{x \to c^-} f(x) = L \quad \text{and} \quad \lim_{x \to c^+} f(x) = L $$

**Example:** Consider the function $f(x) = \sqrt{x}$ at $c=0$.
The domain of $\sqrt{x}$ is $x \ge 0$. So, we can only approach 0 from the right side.
$$ \lim_{x \to 0^+} \sqrt{x} = 0 $$
We cannot talk about the limit from the left, as the function is not defined for $x < 0$. Therefore, the two-sided limit $\lim_{x \to 0} \sqrt{x}$ does not exist in the conventional sense, though the right-sided limit is 0.

**Example 2: Piecewise Function**
Let $f(x) = \begin{cases} x^2, & x < 2 \\ 2x, & x \ge 2 \end{cases}$

What is $\lim_{x \to 2} f(x)$?
We need to check the one-sided limits at $x=2$.

*   **Limit from the left ($x \to 2^-$):** For $x < 2$, $f(x) = x^2$.
    $$ \lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} x^2 = 2^2 = 4 $$
*   **Limit from the right ($x \to 2^+$):** For $x \ge 2$, $f(x) = 2x$.
    $$ \lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} 2x = 2(2) = 4 $$

Since $\lim_{x \to 2^-} f(x) = 4$ and $\lim_{x \to 2^+} f(x) = 4$, both are equal. Therefore, the two-sided limit exists:
$$ \lim_{x \to 2} f(x) = 4 $$

This type of analysis is fundamental for understanding systems that switch between different modes of operation, very common in electrical engineering.

### 4. Limits Involving Infinity: Behavior at the Edges

What happens to a function's value as its input grows without bound (approaches infinity)? Or what happens when the function's output grows without bound?

*   **Limits at Infinity:** We examine what happens to $f(x)$ as $x \to \infty$ or $x \to -\infty$.
    $$ \lim_{x \to \infty} f(x) = L \quad \text{or} \quad \lim_{x \to -\infty} f(x) = L $$
    This tells us about the **horizontal asymptotes** of the function.

    **Example:** Consider $f(x) = \frac{1}{x}$.
    As $x$ gets very large positive ($x \to \infty$), $\frac{1}{x}$ gets closer and closer to 0.
    As $x$ gets very large negative ($x \to -\infty$), $\frac{1}{x}$ also gets closer and closer to 0.
    $$ \lim_{x \to \infty} \frac{1}{x} = 0 \quad \text{and} \quad \lim_{x \to -\infty} \frac{1}{x} = 0 $$
    The line $y=0$ (the x-axis) is a horizontal asymptote for $f(x) = \frac{1}{x}$.

    **Example 2: Rational Functions**
    For rational functions $\frac{P(x)}{Q(x)}$, the behavior as $x \to \pm \infty$ often depends on the degrees of the polynomials. If $\text{deg}(P) < \text{deg}(Q)$, the limit is 0. If $\text{deg}(P) = \text{deg}(Q)$, the limit is the ratio of the leading coefficients. If $\text{deg}(P) > \text{deg}(Q)$, the limit is $\pm \infty$. These are important for analyzing signal attenuation or growth.

*   **Infinite Limits:** What happens when the function's value grows without bound, even if $x$ approaches a finite number?
    $$ \lim_{x \to c} f(x) = \infty \quad \text{or} \quad \lim_{x \to c} f(x) = -\infty $$
    This usually indicates a **vertical asymptote** at $x=c$.

    **Example:** Consider $f(x) = \frac{1}{x^2}$ at $c=0$.
    As $x$ approaches 0 from the left or right, $x^2$ is always positive and gets very close to 0. Thus, $\frac{1}{x^2}$ becomes very large positive.
    $$ \lim_{x \to 0} \frac{1}{x^2} = \infty $$
    The line $x=0$ (the y-axis) is a vertical asymptote for $f(x) = \frac{1}{x^2}$.

    **Example 2:** Consider $f(x) = \frac{1}{x}$ at $c=0$.
    We saw before that $\lim_{x \to 0^+} \frac{1}{x} = \infty$ and $\lim_{x \to 0^-} \frac{1}{x} = -\infty$. Since the one-sided limits are different infinities, the two-sided limit does not exist.

These infinite limits and asymptotes are crucial for understanding the behavior of systems, like the voltage across a capacitor as current approaches zero, or the field strength near a point charge.

### 5. The Squeeze Theorem: Trapping the Limit

Sometimes, a function is too tricky to evaluate directly, and it's hard to see its behavior. The Squeeze Theorem (also known as the Sandwich Theorem or Pinching Theorem) provides a way to find a limit by "squeezing" the function between two other functions whose limits are known. This theorem is a cornerstone for proving limits of more complex functions and is thoroughly covered in texts like Kreyszig and Stewart.

**The Squeeze Theorem:** Suppose that $g(x) \le f(x) \le h(x)$ for all $x$ in an open interval containing $c$, except possibly at $c$ itself. If $\lim_{x \to c} g(x) = L$ and $\lim_{x \to c} h(x) = L$, then $\lim_{x \to c} f(x) = L$.

**Analogy:** Imagine you're trying to guess the exact position of a very tiny, fast-moving speck of dust. You can't see it directly. But you can see two larger, slower-moving pebbles that are always on either side of the speck. If both pebbles are moving towards the same exact point, and the speck is always between them, then the speck must also be moving towards that same point.

**Example:** Let's find the limit of $f(x) = x^2 \sin(\frac{1}{x})$ as $x \to 0$.
We know that $-1 \le \sin(\theta) \le 1$ for any angle $\theta$.
So, for $x \neq 0$, we have $-1 \le \sin(\frac{1}{x}) \le 1$.

Now, multiply all parts of the inequality by $x^2$. Since $x^2$ is always non-negative, the inequality signs don't change.
$$ -x^2 \le x^2 \sin(\frac{1}{x}) \le x^2 $$
Here, $g(x) = -x^2$ and $h(x) = x^2$.

Let's find the limits of $g(x)$ and $h(x)$ as $x \to 0$:
$$ \lim_{x \to 0} (-x^2) = -(0)^2 = 0 $$
$$ \lim_{x \to 0} (x^2) = (0)^2 = 0 $$

Since $g(x) \le f(x) \le h(x)$ and $\lim_{x \to 0} g(x) = 0$ and $\lim_{x \to 0} h(x) = 0$, by the Squeeze Theorem, we can conclude:
$$ \lim_{x \to 0} x^2 \sin(\frac{1}{x}) = 0 $$

This is a very common type of problem for the Squeeze Theorem. It’s elegant because it avoids direct evaluation and relies on the bounded nature of trigonometric functions. This is useful for understanding oscillations in physical systems, like the response of a damped oscillator.

### 6. Continuity: "Unbroken" Functions

Now that we understand limits, we can talk about **continuity**. A function is continuous at a point if its graph can be drawn through that point without lifting your pen. This means there are no jumps, holes, or breaks.

For a function $f$ to be continuous at a point $c$, three conditions must be met:

1.  **$f(c)$ must be defined:** The function must actually have a value at $c$.
2.  **$\lim_{x \to c} f(x)$ must exist:** The function must approach a single value as $x$ gets close to $c$ (from both sides).
3.  **$\lim_{x \to c} f(x) = f(c)$:** The value the function approaches (the limit) must be equal to the actual value of the function at $c$.

If any of these conditions fail, the function is said to be **discontinuous** at $c$.

**Visualizing Discontinuities:**

*   **Removable Discontinuity (Hole):** Occurs when $\lim_{x \to c} f(x)$ exists, but either $f(c)$ is undefined or $\lim_{x \to c} f(x) \neq f(c)$. Our first example, $f(x) = \frac{x^2-1}{x-1}$, had a removable discontinuity at $x=1$. We could "remove" it by defining $f(1)=2$.

*   **Jump Discontinuity:** Occurs when the one-sided limits exist but are not equal. This is common in piecewise functions where the pieces don't meet at the boundary.

*   **Infinite Discontinuity (Vertical Asymptote):** Occurs when at least one of the one-sided limits is $\infty$ or $-\infty$.

**Example:** Consider the piecewise function again: $f(x) = \begin{cases} x^2, & x < 2 \\ 2x, & x \ge 2 \end{cases}$
We found $\lim_{x \to 2} f(x) = 4$.
Let's check the conditions for continuity at $c=2$:
1.  Is $f(2)$ defined? Yes, for $x \ge 2$, $f(x)=2x$, so $f(2) = 2(2) = 4$.
2.  Does $\lim_{x \to 2} f(x)$ exist? Yes, we found it to be 4.
3.  Is $\lim_{x \to 2} f(x) = f(2)$? Yes, $4 = 4$.

Therefore, this function is **continuous at $x=2$**.

**Example 2: Discontinuity**
Let $g(x) = \begin{cases} x^2, & x < 2 \\ 3, & x = 2 \\ 2x, & x > 2 \end{cases}$

Let's check continuity at $c=2$:
1.  Is $g(2)$ defined? Yes, $g(2)=3$.
2.  Does $\lim_{x \to 2} g(x)$ exist? We check one-sided limits:
    $\lim_{x \to 2^-} g(x) = \lim_{x \to 2^-} x^2 = 4$
    $\lim_{x \to 2^+} g(x) = \lim_{x \to 2^+} 2x = 4$
    So, $\lim_{x \to 2} g(x) = 4$.
3.  Is $\lim_{x \to 2} g(x) = g(2)$? No, because $4 \neq 3$.

Since condition 3 fails, $g(x)$ is **discontinuous at $x=2$**. This is a removable discontinuity because if we changed the value of $g(2)$ to 4, the function would become continuous.

**Continuity on an Interval:**

A function is **continuous on an open interval $(a, b)$** if it is continuous at every point within that interval.
A function is **continuous on a closed interval $[a, b]$** if it is continuous on $(a, b)$, and also:
*   $\lim_{x \to a^+} f(x) = f(a)$ (continuous from the right at $a$)
*   $\lim_{x \to b^-} f(x) = f(b)$ (continuous from the left at $b$)

**Why is Continuity Important for Engineering and Physics?**

*   **Predictability:** Continuous functions represent systems where changes are gradual and predictable. If a system's behavior is described by a continuous function, small changes in input lead to small changes in output. This is vital for control systems and signal processing.
*   **Intermediate Value Theorem (IVT):** A fundamental theorem for continuous functions. It states that if $f$ is continuous on $[a, b]$ and $k$ is any number between $f(a)$ and $f(b)$, then there is at least one number $c$ in $(a, b)$ such that $f(c) = k$.
    *Analogy:* If you are climbing a mountain and reach an altitude of 1000 meters and later reach 2000 meters, you must have passed through every altitude in between (1500 meters, 1750 meters, etc.). This is key for solving equations (finding roots) and analyzing system states. If a system's state variable (like voltage or position) is described by a continuous function, it must take on all intermediate values. This supports **CO1** and **CO2** in analyzing system behavior.
*   **Extreme Value Theorem (EVT):** If $f$ is continuous on a closed interval $[a, b]$, then $f$ must attain an absolute maximum value and an absolute minimum value on $[a, b]$. These extreme values occur either at the endpoints ($a$ or $b$) or at critical points within the interval. This theorem is crucial for optimization problems – finding maximum power transfer, minimum energy states, etc., directly relating to **CO1**.
*   **Differential Calculus Foundation:** As mentioned, derivatives are defined using limits. The concept of a derivative (rate of change) only makes sense for functions that are "locally" continuous. We'll explore this in more detail in future modules, directly linking to **CO1** and **CO3**.
*   **Integral Calculus Foundation:** Continuity is also essential for Riemann integration, allowing us to calculate areas and volumes (**CO2**, **CO4**). A function must be continuous (or have only a finite number of "nice" discontinuities) to be integrable in the standard sense.

**Types of Functions that are Generally Continuous:**

*   Polynomials are continuous everywhere.
*   Rational functions are continuous wherever their denominators are non-zero.
*   Trigonometric functions (sin, cos) are continuous everywhere.
*   Exponential and logarithmic functions are continuous on their domains.
*   Sums, differences, products, quotients (where denominator $\neq$ 0), and compositions of continuous functions are also continuous.

This means most of the functions you'll encounter in basic engineering and physics are continuous, making the analysis much more straightforward. However, understanding where discontinuities *can* occur and what they signify is equally important.

### 7. Important Limits to Remember (and How to Recall Them)

While we use limit properties and theorems, there are a few fundamental limits that often appear or are used to derive other results.

*   **The Limit of $\frac{\sin x}{x}$ as $x \to 0$:**
    $$ \lim_{x \to 0} \frac{\sin x}{x} = 1 $$
    This is a *very* important limit, often proven using the Squeeze Theorem and geometric arguments (see Anton et al., Chapter 2). It's foundational for finding the derivative of $\sin x$.

*   **The Limit defining 'e':**
    $$ \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e $$
    And also:
    $$ \lim_{h \to 0} (1 + h)^{1/h} = e $$
    The number $e$ (approximately 2.71828) is the base of the natural logarithm and appears ubiquitously in growth, decay, and probability. Understanding its limit definition is key to analyzing exponential processes.

**Exam Tip:** When faced with limits, always try direct substitution first. If that yields an indeterminate form, try algebraic simplification (factoring, conjugates). If that doesn't work, consider trigonometric identities or the Squeeze Theorem. For limits at infinity, focus on the highest degree terms.

### Connecting Back to Course Outcomes:

*   **CO1 (Derivatives, Maxima/Minima):** Limits are the foundation of derivatives. Derivatives measure instantaneous rates of change, which are defined as limits of average rates of change. Understanding limits allows us to find where the slope is zero (for maxima/minima) and analyze how functions behave to find optimal solutions in engineering.
*   **CO2 (Multiple Integrals):** While this module focuses on single-variable limits, the concept extends to multiple variables. Limits are essential for defining multiple integrals, which are used to calculate areas and volumes. The continuity of functions plays a role in determining the existence and properties of these integrals.
*   **CO3 (Vector Functions):** Limits of vector functions are found by taking the limit of each component function separately. This allows us to define derivatives of vector functions, which describe velocity and acceleration in motion, critical for analyzing the path of particles or the trajectory of signals.
*   **CO4 (Surface and Volume Integrals):** Similar to CO2, the understanding of limits of functions of multiple variables is crucial for defining surface and volume integrals. Continuity ensures these integrals are well-behaved and can be used to calculate physical quantities like flux or mass.

### Summary:

We've covered the core ideas of limits and continuity. Remember:
*   **Limits** describe the value a function approaches as its input approaches a certain value, even if the function isn't defined at that exact point.
*   We can approach limits from the left, right, or use **one-sided limits** to understand behavior at points where functions change definition.
*   **Limits at infinity** and **infinite limits** describe the end behavior and the presence of asymptotes.
*   The **Squeeze Theorem** is a powerful tool for finding limits of complex functions.
*   **Continuity** at a point $c$ means $f(c)$ is defined, $\lim_{x \to c} f(x)$ exists, and they are equal.
*   Continuous functions are "well-behaved" and guarantee important properties like the IVT and EVT, essential for analyzing engineering and physical systems.

This module sets the stage for all the calculus you’ll do. Master these concepts, and the rest will follow much more smoothly!

---

## Sample Questions with Answers

**1. Conceptual Question:** Explain why the limit of $f(x) = \frac{x^2 - 4}{x - 2}$ as $x$ approaches 2 exists, even though $f(2)$ is undefined.

    **Answer:** The limit describes the behavior of the function *near* $x=2$, not *at* $x=2$. For $x \neq 2$, we can simplify $f(x)$:
    $f(x) = \frac{(x-2)(x+2)}{x-2} = x+2$.
    The function $f(x)$ behaves exactly like the function $g(x) = x+2$ for all values of $x$ except at $x=2$. As $x$ gets arbitrarily close to 2, the value of $x+2$ gets arbitrarily close to $2+2=4$. Therefore, the limit as $x$ approaches 2 is 4, even though the original function has a "hole" at $x=2$.

**2. Calculation Question:** Evaluate the following limit:
$$ \lim_{x \to 3} \frac{x^2 - x - 6}{x - 3} $$

    **Answer:**
    First, try direct substitution: $\frac{3^2 - 3 - 6}{3 - 3} = \frac{9 - 3 - 6}{0} = \frac{0}{0}$. This is an indeterminate form, so we need to simplify.
    Factor the numerator: $x^2 - x - 6 = (x-3)(x+2)$.
    Now, rewrite the limit:
    $$ \lim_{x \to 3} \frac{(x-3)(x+2)}{x-3} $$
    Since $x \to 3$, $x \neq 3$, so we can cancel out the $(x-3)$ term:
    $$ \lim_{x \to 3} (x+2) $$
    Now, substitute $x=3$ into the simplified expression:
    $$ 3 + 2 = 5 $$
    So, $\lim_{x \to 3} \frac{x^2 - x - 6}{x - 3} = 5$.

**3. Continuity Question:** Determine if the function $f(x) = \begin{cases} 2x + 1, & x < 1 \\ 4, & x = 1 \\ x^2 + 3, & x > 1 \end{cases}$ is continuous at $x=1$. Justify your answer.

    **Answer:**
    To check for continuity at $x=1$, we must verify the three conditions:
    1.  **Is $f(1)$ defined?** Yes, according to the definition, $f(1) = 4$.
    2.  **Does $\lim_{x \to 1} f(x)$ exist?** We need to check the one-sided limits:
        *   Limit from the left ($x \to 1^-$): For $x < 1$, $f(x) = 2x + 1$.
            $$ \lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} (2x + 1) = 2(1) + 1 = 3 $$
        *   Limit from the right ($x \to 1^+$): For $x > 1$, $f(x) = x^2 + 3$.
            $$ \lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (x^2 + 3) = (1)^2 + 3 = 1 + 3 = 4 $$
        Since the left-sided limit (3) is not equal to the right-sided limit (4), the two-sided limit $\lim_{x \to 1} f(x)$ **does not exist**.
    3.  **If the limit existed, would it equal $f(1)$?** This condition is irrelevant since the limit does not exist.

    **Conclusion:** The function $f(x)$ is **not continuous** at $x=1$ because the limit as $x$ approaches 1 does not exist. It has a jump discontinuity at $x=1$.

**4. Limit involving Infinity Question:** Evaluate:
$$ \lim_{x \to \infty} \frac{3x^2 + 5x - 1}{2x^2 - x + 7} $$

    **Answer:**
    As $x \to \infty$, both the numerator and denominator approach infinity, leading to an indeterminate form $\frac{\infty}{\infty}$. To evaluate this, we can divide both the numerator and the denominator by the highest power of $x$ in the denominator, which is $x^2$:
    $$ \lim_{x \to \infty} \frac{\frac{3x^2}{x^2} + \frac{5x}{x^2} - \frac{1}{x^2}}{\frac{2x^2}{x^2} - \frac{x}{x^2} + \frac{7}{x^2}} $$
    Simplify each term:
    $$ \lim_{x \to \infty} \frac{3 + \frac{5}{x} - \frac{1}{x^2}}{2 - \frac{1}{x} + \frac{7}{x^2}} $$
    Now, consider what happens as $x \to \infty$. Terms like $\frac{5}{x}$, $\frac{1}{x^2}$, $\frac{1}{x}$, and $\frac{7}{x^2}$ all approach 0.
    $$ \frac{3 + 0 - 0}{2 - 0 + 0} = \frac{3}{2} $$
    So, $\lim_{x \to \infty} \frac{3x^2 + 5x - 1}{2x^2 - x + 7} = \frac{3}{2}$. This indicates a horizontal asymptote at $y = \frac{3}{2}$.
