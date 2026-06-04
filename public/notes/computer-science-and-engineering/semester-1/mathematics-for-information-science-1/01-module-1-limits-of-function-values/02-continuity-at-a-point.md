---
title: "Continuity at a point"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 1: Limits of Function Values"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bbd"
status: "completed"
scrapedAt: "2026-05-20T16:39:41.844Z"
---
Alright everyone, settle in! Welcome back to Mathematics for Information Science – 1. Today, we're diving into a fundamental concept that underpins so much of what we'll do in this course: **Continuity at a Point**. This isn't just about drawing smooth lines; it's about understanding the *behavior* of functions, especially around specific input values. And believe me, understanding continuity is absolutely crucial for everything from analyzing data trends to building predictive models. It directly connects to our Course Outcome 1 (CO1), where we aim to linearize and analyze functions – a smooth, continuous function is often a good starting point for linearization.

### Module 1: Limits of Function Values - Topic: Continuity at a Point

Think about a graph of a function. What makes a graph "nice" to look at? Usually, it's a graph you can draw without lifting your pen from the paper, right? No sudden jumps, no holes, no breaks. This intuitive idea is precisely what mathematical continuity captures.

#### What Does it Mean for a Function to be Continuous at a Point?

Let's say we have a function, $f(x)$, and we're interested in its behavior at a specific point, say $x = c$. For $f(x)$ to be continuous at $x = c$, three conditions must be met. These are the pillars of continuity, and if even one of them fails, the function is considered *discontinuous* at that point.

1.  **The function must be defined at the point:** This means that when you plug in $c$ into the function, you must get a valid output. In other words, $f(c)$ must exist.
    *   *Think about it:* If you're trying to find the height of a mountain at a certain coordinate, but that coordinate falls into a deep ravine or a void, the height isn't defined there.

2.  **The limit of the function must exist as $x$ approaches the point:** This is where our previous discussions on limits come into play. As $x$ gets closer and closer to $c$ (from both the left and the right), the function's values must be approaching a single, specific number. We write this as $\lim_{x \to c} f(x)$ exists.
    *   *Analogy:* Imagine you're trying to predict the temperature at noon tomorrow based on data from the morning. If the temperature readings are consistently getting closer and closer to, say, 25 degrees Celsius as noon approaches (regardless of whether it's 11:59:59 AM or just before), then the limit exists. But if it's jumping around wildly, the limit doesn't exist.

3.  **The limit must equal the function's value at the point:** This is the crucial connection! The value the function *approaches* as $x$ gets near $c$ must be the *actual value* of the function *at* $c$. So, $\lim_{x \to c} f(x) = f(c)$.
    *   *Putting it together:* If our temperature prediction from the morning (the limit) is 25 degrees, and the actual recorded temperature at noon is also 25 degrees, then the temperature "behavior" is continuous at noon. If the prediction was 25 degrees, but the actual temperature at noon was 20 degrees, there's a "discontinuity" – a surprise jump or gap.

**So, the formal definition of continuity at a point $c$ is:**

A function $f(x)$ is continuous at a point $x = c$ if and only if:
1.  $f(c)$ is defined.
2.  $\lim_{x \to c} f(x)$ exists.
3.  $\lim_{x \to c} f(x) = f(c)$.

Remember this trifecta! All three must hold.

#### Types of Discontinuities

When a function isn't continuous at a point, we call it a **discontinuity**. There are a few common ways this can happen, and understanding them helps us diagnose problems in our data or models.

1.  **Removable Discontinuity (Hole):** This happens when conditions 1 and 2 are met, but condition 3 fails. Specifically, the limit exists, and the function is defined at $c$, but $\lim_{x \to c} f(x) \neq f(c)$.
    *   *Example:* Consider the function $f(x) = \frac{x^2 - 4}{x - 2}$.
        *   Is $f(2)$ defined? No, because plugging in $x=2$ results in division by zero. So, condition 1 fails.
        *   What about the limit? We can simplify: $f(x) = \frac{(x-2)(x+2)}{x-2} = x+2$ for $x \neq 2$.
        *   So, $\lim_{x \to 2} f(x) = \lim_{x \to 2} (x+2) = 2+2 = 4$. The limit exists.
        *   Since $f(2)$ is undefined, the function is discontinuous at $x=2$. However, if we *could* define $f(2) = 4$, the function would become continuous. This is why it's called "removable" – we can "fill the hole" by defining the function value appropriately.
    *   *Relatable scenario:* Imagine you're tracking a user's activity on a website. At a specific moment, there might be a brief glitch where the system doesn't record an action, but all surrounding actions were recorded. The "gap" in the record is like a removable discontinuity.

2.  **Jump Discontinuity:** This occurs when the limit from the left and the limit from the right exist, but they are not equal. That is, $\lim_{x \to c^-} f(x) \neq \lim_{x \to c^+} f(x)$. Condition 2 (that the overall limit exists) fails.
    *   *Example:* Consider a piecewise function like:
        $g(x) = \begin{cases} x+1 & \text{if } x \le 0 \\ x^2 & \text{if } x > 0 \end{cases}$
        Let's check continuity at $x=0$.
        *   Condition 1: $g(0) = 0+1 = 1$. So, $g(0)$ is defined.
        *   Condition 2: Let's check the limits.
            *   Limit from the left: $\lim_{x \to 0^-} g(x) = \lim_{x \to 0^-} (x+1) = 0+1 = 1$.
            *   Limit from the right: $\lim_{x \to 0^+} g(x) = \lim_{x \to 0^+} (x^2) = 0^2 = 0$.
        *   Since $1 \neq 0$, the overall limit $\lim_{x \to 0} g(x)$ does not exist. Condition 2 fails.
        *   *Visualize this:* The graph comes up to the point (0,1) from the left, and then at $x=0$, it suddenly "jumps" down to start from (0,0) and goes up following $x^2$. There's a clear break.
    *   *Relatable scenario:* Think about electricity pricing. You might have one rate up to a certain usage threshold, and then a completely different, higher rate once you cross that threshold. The price "jumps" at that specific usage point.

3.  **Infinite Discontinuity:** This happens when at least one of the one-sided limits is infinite (either $+\infty$ or $-\infty$). This often occurs when a function has a vertical asymptote at $x=c$.
    *   *Example:* Consider $h(x) = \frac{1}{x^2}$.
        *   Is $h(0)$ defined? No, division by zero. Condition 1 fails.
        *   What about the limits?
            *   $\lim_{x \to 0^-} \frac{1}{x^2} = +\infty$ (as $x$ approaches 0 from the left, $x^2$ is small and positive, so $1/x^2$ is very large positive).
            *   $\lim_{x \to 0^+} \frac{1}{x^2} = +\infty$ (as $x$ approaches 0 from the right, $x^2$ is also small and positive).
        *   Even though the one-sided limits are the same (both $+\infty$), the overall limit $\lim_{x \to 0} \frac{1}{x^2}$ is not a finite number, so condition 2 fails.
    *   *Relatable scenario:* Imagine the intensity of light from a bulb. As you get infinitely close to the filament (the source), the intensity would theoretically become infinite. In reality, there are physical limits, but the mathematical model might show an infinite discontinuity at the source.

#### Continuity on an Interval

Just as we talk about limits on an interval, we can talk about a function being continuous on an interval.

*   A function is **continuous on an open interval (a, b)** if it is continuous at every point within that interval.
*   A function is **continuous on a closed interval [a, b]** if it is continuous on the open interval (a, b), AND it is continuous from the right at $a$ (meaning $\lim_{x \to a^+} f(x) = f(a)$) and continuous from the left at $b$ (meaning $\lim_{x \to b^-} f(x) = f(b)$).

Think about our smooth graph analogy. If you can trace the entire curve of the graph between two points without lifting your pen, and the endpoints themselves are part of the curve, then the function is continuous on that closed interval.

#### Properties of Continuous Functions

One of the most powerful aspects of continuity is that continuous functions behave predictably and nicely. Many fundamental theorems in calculus, which allow us to do amazing things like find optimization (CO3, CO4) or understand rates of change (CO1), rely on functions being continuous.

Here are some key properties:

*   **Sum, Difference, Product, and Quotient of Continuous Functions are Continuous:** If $f(x)$ and $g(x)$ are continuous at $x=c$, then $(f+g)(x)$, $(f-g)(x)$, and $(f \cdot g)(x)$ are also continuous at $x=c$.
    *   For quotients, $(f/g)(x)$ is continuous at $x=c$ *provided that* $g(c) \neq 0$. This is important! If the denominator is zero, we might introduce a discontinuity.
*   **A Constant Multiple of a Continuous Function is Continuous:** If $f(x)$ is continuous at $x=c$, then $k \cdot f(x)$ is also continuous at $x=c$ for any constant $k$.
*   **A Polynomial is Continuous Everywhere:** All polynomials, like $P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0$, are continuous for all real numbers. This is a huge simplification! It means you don't have to worry about discontinuities within the domain of any polynomial.
*   **Rational Functions are Continuous on Their Domain:** A rational function, being a ratio of two polynomials, is continuous everywhere *except* where the denominator is zero. So, if $f(x) = P(x)/Q(x)$, it's continuous for all $x$ where $Q(x) \neq 0$.
*   **Composition of Continuous Functions is Continuous:** If $g(x)$ is continuous at $x=c$ and $f(x)$ is continuous at $g(c)$, then the composite function $(f \circ g)(x) = f(g(x))$ is continuous at $x=c$.
    *   *Think about it:* If you have a process that smoothly transforms input $x$ into an intermediate value $y=g(x)$, and then another process smoothly transforms $y$ into the final output $z=f(y)$, the overall transformation from $x$ to $z$ will also be smooth.

#### Examples in Action

Let's solidify these ideas with a few more examples, paying attention to how these properties help us.

**Example 1: Polynomial Continuity**
Consider $f(x) = 3x^3 - 2x^2 + 5x - 1$. Is this function continuous at $x=4$?
*   We know polynomials are continuous everywhere. Therefore, $f(x)$ is continuous at $x=4$.
*   This means $\lim_{x \to 4} f(x) = f(4)$. We can just plug in 4:
    $f(4) = 3(4)^3 - 2(4)^2 + 5(4) - 1 = 3(64) - 2(16) + 20 - 1 = 192 - 32 + 20 - 1 = 180 + 19 = 199$.
    So, $\lim_{x \to 4} (3x^3 - 2x^2 + 5x - 1) = 199$.

**Example 2: Rational Function Continuity**
Consider $g(x) = \frac{x+1}{x-3}$. Is $g(x)$ continuous at $x=5$? What about $x=3$?
*   At $x=5$: The denominator is $5-3 = 2$, which is not zero. Since $g(x)$ is a rational function and the denominator is non-zero at $x=5$, $g(x)$ is continuous at $x=5$.
    Therefore, $\lim_{x \to 5} \frac{x+1}{x-3} = g(5) = \frac{5+1}{5-3} = \frac{6}{2} = 3$.
*   At $x=3$: The denominator is $3-3 = 0$. Division by zero is undefined.
    *   Condition 1 fails: $g(3)$ is undefined.
    *   Let's check the limit: $\lim_{x \to 3} \frac{x+1}{x-3}$. As $x \to 3^+$, the numerator approaches 4, and the denominator approaches 0 from the positive side, so the limit is $+\infty$. As $x \to 3^-$, the numerator approaches 4, and the denominator approaches 0 from the negative side, so the limit is $-\infty$.
    *   Since the limit is infinite, there is an infinite discontinuity at $x=3$ (a vertical asymptote).

**Example 3: Piecewise Function Continuity**
Let's revisit a piecewise function, but this time, let's make it continuous.
$h(x) = \begin{cases} x^2 & \text{if } x \le 1 \\ ax+b & \text{if } x > 1 \end{cases}$
Find values of $a$ and $b$ such that $h(x)$ is continuous at $x=1$.
*   Condition 1: Is $h(1)$ defined? Yes, $h(1) = 1^2 = 1$.
*   Condition 2: Does $\lim_{x \to 1} h(x)$ exist? For this, the left and right limits must be equal.
    *   Limit from the left: $\lim_{x \to 1^-} h(x) = \lim_{x \to 1^-} x^2 = 1^2 = 1$.
    *   Limit from the right: $\lim_{x \to 1^+} h(x) = \lim_{x \to 1^+} (ax+b) = a(1)+b = a+b$.
    *   For the overall limit to exist, $1 = a+b$.
*   Condition 3: $\lim_{x \to 1} h(x) = h(1)$. Since we found $h(1)=1$ and the limit must be 1, this means $a+b = 1$.

So, any values of $a$ and $b$ that satisfy $a+b=1$ will make $h(x)$ continuous at $x=1$. For instance, if $a=2$ and $b=-1$, then $h(x) = \begin{cases} x^2 & \text{if } x \le 1 \\ 2x-1 & \text{if } x > 1 \end{cases}$ is continuous at $x=1$.

**Connection to Course Outcomes:**

*   **CO1: Apply various concepts in calculus to linearize functions and to analyze concavity.** Continuity is the bedrock upon which linearization (e.g., Taylor series approximations) is built. If a function has a jump or a hole, linearizing it around that point might be very misleading. Understanding continuity helps us know *when* and *where* linearization is a reasonable approach. Analyzing concavity also often assumes the function is at least twice differentiable, which implies continuity.
*   **CO2: Calculate the limits for functions of two variables and partial derivatives of multivariable functions.** While this topic focuses on single-variable functions, the *concept* of continuity extends to multivariable functions. For a multivariable function to be continuous at a point, the limit must exist and equal the function value, and this limit must be the same regardless of the path taken to approach the point. This is a more complex but fundamental idea in multivariable calculus, and single-variable continuity is its essential precursor.
*   **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions.** Many optimization techniques, like gradient descent, rely on the function being smooth and continuous. If a function has discontinuities, it can lead to unexpected behavior or failures in the optimization algorithm.
*   **CO4: Solve constrained maxima and minima, LPP and understand the method of Steepest Descent.** Similar to CO3, the underlying mathematical functions in optimization problems often need to be continuous to guarantee the effectiveness of algorithms like steepest descent or to ensure that solutions found using calculus-based methods are indeed global or local extrema.

### Common Pitfalls and Exam Tips

*   **Don't forget to check all three conditions!** Students often focus only on the limit or only on the function value. All three must be true.
*   **Be careful with piecewise functions.** Always check the "boundary" points where the definition of the function changes. Pay close attention to whether the boundary point itself is included in a piece (e.g., $\le$ or $\ge$) or excluded (e.g., $<$ or $>$). This determines which piece to use for $f(c)$ and which piece to use for the one-sided limits.
*   **Holes vs. Jumps vs. Asymptotes:** Clearly distinguish between these types of discontinuities. A hole is removable, a jump means the limit doesn't exist (but one-sided limits are finite), and an asymptote means the limit is infinite.
*   **Domain matters!** For rational functions, the points where the denominator is zero are automatically candidates for discontinuity.

### Sample Questions with Answers

**Question 1 (Conceptual):**
State the three conditions that must be met for a function $f(x)$ to be continuous at a point $x=c$.

**Answer:**
For a function $f(x)$ to be continuous at a point $x=c$, the following three conditions must be satisfied:
1.  $f(c)$ must be defined.
2.  The limit of $f(x)$ as $x$ approaches $c$, $\lim_{x \to c} f(x)$, must exist.
3.  The limit of $f(x)$ as $x$ approaches $c$ must be equal to the function's value at $c$, i.e., $\lim_{x \to c} f(x) = f(c)$.

**Question 2 (Application):**
Determine if the function $f(x) = \begin{cases} \frac{x^2 - 9}{x-3} & \text{if } x \neq 3 \\ 6 & \text{if } x = 3 \end{cases}$ is continuous at $x=3$.

**Answer:**
We need to check the three conditions for continuity at $c=3$.

1.  **Is $f(3)$ defined?** Yes, the definition of the function explicitly states that $f(3) = 6$. So, the first condition is met.

2.  **Does $\lim_{x \to 3} f(x)$ exist?** For $x \neq 3$, $f(x) = \frac{x^2 - 9}{x-3}$. We can simplify this expression:
    $\frac{x^2 - 9}{x-3} = \frac{(x-3)(x+3)}{x-3} = x+3$ (for $x \neq 3$).
    Now, we can find the limit:
    $\lim_{x \to 3} f(x) = \lim_{x \to 3} (x+3) = 3+3 = 6$.
    The limit exists and is equal to 6. So, the second condition is met.

3.  **Is $\lim_{x \to 3} f(x) = f(3)$?** We found that $\lim_{x \to 3} f(x) = 6$ and $f(3) = 6$. Since these values are equal, the third condition is met.

**Conclusion:** All three conditions are satisfied, so the function $f(x)$ is continuous at $x=3$.

**Question 3 (Analysis/Identifying Discontinuities):**
Identify the type of discontinuity (if any) for the function $g(x) = \frac{x+2}{x^2 - 4}$ at $x=-2$ and $x=2$.

**Answer:**

Let's analyze $g(x) = \frac{x+2}{x^2 - 4}$ at $x=-2$ and $x=2$. We can factor the denominator: $g(x) = \frac{x+2}{(x-2)(x+2)}$.

**At $x = -2$:**

1.  **Is $g(-2)$ defined?** Plugging in $x=-2$ results in $\frac{-2+2}{(-2)^2-4} = \frac{0}{4-4} = \frac{0}{0}$. This is an indeterminate form, and the function is **undefined** at $x=-2$. Condition 1 fails.

2.  **Does $\lim_{x \to -2} g(x)$ exist?** For $x \neq -2$, we can simplify $g(x)$:
    $g(x) = \frac{x+2}{(x-2)(x+2)} = \frac{1}{x-2}$ (for $x \neq -2$).
    Now, let's find the limit:
    $\lim_{x \to -2} g(x) = \lim_{x \to -2} \frac{1}{x-2} = \frac{1}{-2-2} = \frac{1}{-4} = -\frac{1}{4}$.
    The limit exists.

3.  **Is $\lim_{x \to -2} g(x) = g(-2)$?** Since $g(-2)$ is undefined, condition 3 cannot be met.

**Conclusion for $x=-2$:** Because the limit exists but the function is undefined at $x=-2$, there is a **removable discontinuity** (a hole) at $x=-2$. If we were to define $g(-2) = -1/4$, the function would be continuous there.

**At $x = 2$:**

1.  **Is $g(2)$ defined?** Plugging in $x=2$ results in $\frac{2+2}{2^2-4} = \frac{4}{4-4} = \frac{4}{0}$. The function is **undefined** at $x=2$. Condition 1 fails.

2.  **Does $\lim_{x \to 2} g(x)$ exist?** We use the simplified form $g(x) = \frac{1}{x-2}$ (for $x \neq -2$, which is true as we approach 2).
    Let's check the one-sided limits:
    *   $\lim_{x \to 2^+} g(x) = \lim_{x \to 2^+} \frac{1}{x-2}$. As $x$ approaches 2 from the right, $x-2$ approaches 0 from the positive side. So, the limit is $+\infty$.
    *   $\lim_{x \to 2^-} g(x) = \lim_{x \to 2^-} \frac{1}{x-2}$. As $x$ approaches 2 from the left, $x-2$ approaches 0 from the negative side. So, the limit is $-\infty$.
    Since the one-sided limits are not equal (and are infinite), the overall limit $\lim_{x \to 2} g(x)$ does not exist as a finite number. Condition 2 fails.

**Conclusion for $x=2$:** Since the limit does not exist (it's infinite), there is an **infinite discontinuity** at $x=2$. This corresponds to a vertical asymptote.

This covers our essential understanding of continuity at a point. Remember these concepts as we move forward, as they are foundational for everything we will do in this course!
