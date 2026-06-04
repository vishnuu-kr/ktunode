---
title: "Continuity for functions of two variables"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 2: Functions of Several Variables: Domains and Ranges"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bcc"
status: "completed"
scrapedAt: "2026-05-20T16:40:04.361Z"
---
# Mathematics for Information Science – 1: Module 2 – Functions of Several Variables

## Topic: Continuity for Functions of Two Variables

Welcome, everyone! Today, we're diving into a fundamental concept that underpins much of what we do in calculus and, by extension, in Information Science: **Continuity for Functions of Two Variables**. Think of it as the mathematical equivalent of a smooth, unbroken path. In our previous discussions, we've explored domains and ranges, and now we're going to build on that by understanding what it means for a function to be "well-behaved" across its input space. This is crucial for many applications, from data modeling to algorithm analysis, and it directly relates to our course objective of **applying calculus concepts to analyze functions (CO1)**. Specifically, understanding continuity is a prerequisite for analyzing function behavior, which is a core part of **CO1**. It also lays the groundwork for understanding limits, which we'll see is intimately connected to continuity (CO2).

### What Does Continuity Mean, Intuitively?

Before we get formal, let's get a feel for it. Imagine you're hiking on a landscape represented by a function $z = f(x, y)$. If the landscape is continuous, it means you can walk from one point to another without encountering any sudden drops, jumps, or holes. You can move smoothly. If there's a hole at a certain spot, or a cliff edge where the ground suddenly drops away, that's a point of discontinuity.

In the context of functions of two variables, continuity at a point $(a, b)$ means a few things intuitively:

1.  **The function must be defined at that point:** You can't have a hole where the function isn't even defined.
2.  **The limit of the function must exist at that point:** As you approach the point from *any* direction, the function's value must be heading towards a single, specific value. This is the tricky part for functions of two variables – there are infinitely many ways to approach a point!
3.  **The limit must equal the function's actual value at that point:** The value the function approaches as you get closer and closer must be exactly the value the function *is* at that point.

This intuitive understanding is precisely what our formal definition captures.

### The Formal Definition of Continuity at a Point $(a, b)$

A function $f(x, y)$ is **continuous at a point $(a, b)$** if and only if all three of the following conditions are met:

1.  **$f(a, b)$ is defined.** (The point $(a, b)$ must be in the domain of $f$.)
2.  **$\lim_{(x, y) \to (a, b)} f(x, y)$ exists.** (The function approaches a specific value as $(x, y)$ gets arbitrarily close to $(a, b)$.)
3.  **$\lim_{(x, y) \to (a, b)} f(x, y) = f(a, b)$.** (The value the function approaches is equal to the function's value at that point.)

If any one of these conditions fails, the function is said to be **discontinuous at $(a, b)$**.

This definition is a direct extension of continuity for functions of a single variable. Remember how for $f(x)$, continuity at $a$ meant $\lim_{x \to a} f(x) = f(a)$? It's the same idea, just extended to two dimensions.

### Continuity Over a Domain (Continuity on a Set)

We often talk about functions being continuous not just at a single point, but over an entire region.

A function $f(x, y)$ is **continuous on an open region $D$** if it is continuous at every point $(a, b)$ in $D$.

What about closed regions or regions with boundaries? If a function is continuous on an open region and also "behaves nicely" at the boundary (meaning the limit as you approach the boundary from within the region equals the function's value at the boundary), we can say it's continuous on the closed region. This is important when we're dealing with optimization problems where we want to find maximum or minimum values on closed, bounded sets (think of the Extreme Value Theorem).

### How Do We Check for Continuity? Connecting to Limits!

The crucial link here is the limit. If we can evaluate the limit $\lim_{(x, y) \to (a, b)} f(x, y)$, we can then check if it equals $f(a, b)$.

Remember from our previous lessons how challenging it can be to evaluate limits for functions of two variables? We often use various paths (lines, parabolas) to show that if the limits along different paths are different, then the overall limit *does not exist*. If the limits along several paths are the same, it *suggests* the limit might exist, but it's not proof.

**Connecting to Course Outcome CO2:** This is where **CO2** really comes into play. The ability to calculate limits for functions of two variables is *essential* for determining continuity. If you can't find the limit, you can't prove continuity.

**When is Continuity Easy to Determine?**

Many familiar functions are continuous wherever they are defined. These are often called **elementary functions**, and combinations of them also tend to be continuous.

*   **Polynomials:** Functions like $f(x, y) = x^2 + y^2$ or $f(x, y) = 3x^2y - 5y^3 + 2$ are continuous everywhere. This is a *huge* convenience. Their domain is all of $\mathbb{R}^2$, and they are continuous on $\mathbb{R}^2$.
*   **Rational Functions:** Functions that are ratios of polynomials, like $f(x, y) = \frac{x^2 + y^2}{x^2 - y^2}$, are continuous everywhere *except* where the denominator is zero. So, for this example, it's continuous everywhere except on the lines $y = x$ and $y = -x$.
*   **Trigonometric, Exponential, and Logarithmic Functions:** When used in combinations, these also maintain continuity within their respective domains. For instance, $f(x, y) = e^{x^2+y^2} \sin(xy)$ is continuous everywhere because $x^2+y^2$ is continuous everywhere, $e^u$ is continuous for all $u$, $xy$ is continuous everywhere, and $\sin(v)$ is continuous for all $v$. The composition of continuous functions is continuous.

**Textbook Insight:** Thomas' Calculus and Kreyszig's Advanced Engineering Mathematics both dedicate sections to the continuity of combinations of elementary functions. They emphasize that if $f$ and $g$ are continuous at $(a,b)$, then so are $f+g$, $f-g$, $fg$, $f/g$ (provided $g(a,b) \neq 0$), and $f \circ g$ (if $f$ is continuous at $g(a,b)$). This is a powerful shortcut!

### Examples to Illustrate

Let's work through some examples.

**Example 1: A Polynomial Function**

Consider $f(x, y) = x^2 + 2xy - y^3$.

Is $f$ continuous at $(1, 2)$?

1.  **Is $f(1, 2)$ defined?** Yes, $f(1, 2) = 1^2 + 2(1)(2) - 2^3 = 1 + 4 - 8 = -3$.
2.  **Does $\lim_{(x, y) \to (1, 2)} f(x, y)$ exist?** Since $f(x, y)$ is a polynomial, we know it's continuous everywhere. Therefore, the limit exists and is equal to the function's value at the point. We can find it by direct substitution: $\lim_{(x, y) \to (1, 2)} (x^2 + 2xy - y^3) = 1^2 + 2(1)(2) - 2^3 = -3$.
3.  **Does the limit equal $f(1, 2)$?** Yes, $-3 = -3$.

Since all three conditions are met, $f(x, y) = x^2 + 2xy - y^3$ is continuous at $(1, 2)$. In fact, because it's a polynomial, it's continuous *everywhere*.

**Example 2: A Rational Function**

Consider $f(x, y) = \frac{x^2 - y^2}{x - y}$.

Is $f$ continuous at $(2, 2)$?

1.  **Is $f(2, 2)$ defined?** If we plug in $(2, 2)$, we get $\frac{2^2 - 2^2}{2 - 2} = \frac{0}{0}$. This is an indeterminate form, and importantly, the function is **not defined** at $(2, 2)$.

Since the first condition fails, $f(x, y)$ is discontinuous at $(2, 2)$.

**What if we tried to simplify?**

For $(x, y) \neq (2, 2)$ and $x \neq y$, we can simplify:
$f(x, y) = \frac{(x - y)(x + y)}{x - y} = x + y$.

So, $f(x, y)$ behaves like $x + y$ everywhere *except* on the line $y = x$. On the line $y=x$, the original function is undefined.

Now, let's consider the limit as $(x, y) \to (2, 2)$:
$\lim_{(x, y) \to (2, 2)} \frac{x^2 - y^2}{x - y} = \lim_{(x, y) \to (2, 2)} (x + y)$ (since we are approaching $(2,2)$, $x-y$ is not zero near $(2,2)$ unless $x=y$, but $x=y$ is a line, not a point, so we can approach from directions where $x \neq y$).
This limit is $2 + 2 = 4$.

So, the limit exists and is 4. However, $f(2, 2)$ is undefined. Therefore, the function is discontinuous at $(2, 2)$.

**What if we redefined $f$ to fill the hole?**

Let's define a new function $g(x, y)$ as:
$$
g(x, y) = \begin{cases}
\frac{x^2 - y^2}{x - y} & \text{if } x \neq y \\
4 & \text{if } x = y
\end{cases}
$$
For $x \neq y$, $g(x, y) = x+y$. So,
$$
g(x, y) = \begin{cases}
x + y & \text{if } x \neq y \\
4 & \text{if } x = y
\end{cases}
$$
Is $g$ continuous at $(2, 2)$?

1.  **Is $g(2, 2)$ defined?** Yes, $g(2, 2) = 4$ (from the second case).
2.  **Does $\lim_{(x, y) \to (2, 2)} g(x, y)$ exist?** As we saw, $\lim_{(x, y) \to (2, 2)} g(x, y) = \lim_{(x, y) \to (2, 2)} (x + y) = 4$. (The limit doesn't care about the value *at* the point, only near it).
3.  **Does the limit equal $g(2, 2)$?** Yes, $4 = 4$.

So, this redefined function $g(x, y)$ is continuous at $(2, 2)$. This is a **removable discontinuity**.

**Example 3: A Discontinuity Where the Limit Doesn't Exist**

Consider $f(x, y) = \frac{xy}{x^2 + y^2}$ at $(0, 0)$.

1.  **Is $f(0, 0)$ defined?** Plugging in $(0, 0)$ gives $\frac{0 \cdot 0}{0^2 + 0^2} = \frac{0}{0}$, which is indeterminate. The function is **not defined** at $(0, 0)$. Thus, it's discontinuous at $(0, 0)$.

Let's explore the limit to see *why* it's discontinuous.

*   **Path 1: Along the x-axis** (where $y = 0$, and $x \neq 0$)
    $\lim_{x \to 0} f(x, 0) = \lim_{x \to 0} \frac{x \cdot 0}{x^2 + 0^2} = \lim_{x \to 0} \frac{0}{x^2} = 0$.

*   **Path 2: Along the line $y = x$** (where $x \neq 0$)
    $\lim_{x \to 0} f(x, x) = \lim_{x \to 0} \frac{x \cdot x}{x^2 + x^2} = \lim_{x \to 0} \frac{x^2}{2x^2} = \frac{1}{2}$.

Since the limit along the x-axis is 0, and the limit along the line $y=x$ is $1/2$, the overall limit $\lim_{(x, y) \to (0, 0)} f(x, y)$ **does not exist**.

This is a **non-removable discontinuity** of the essential type (because the limit doesn't exist).

**Relatable Analogy:** Imagine you're trying to find the temperature at a specific location $(a, b)$ on a weather map.

*   If the sensor at $(a, b)$ is broken ($f(a, b)$ is undefined), you can't directly read the temperature there. This is a discontinuity.
*   Even if the sensor is working, you might find that as you move slightly north of $(a, b)$, the temperature is 20°C, but as you move slightly west, the temperature is 25°C. If the temperature doesn't settle on a single value as you approach $(a, b)$ from different directions (the limit doesn't exist), then the temperature is not smoothly defined at $(a, b)$. This is another type of discontinuity.
*   Finally, if the sensor at $(a, b)$ reads 22°C, but as you approach $(a, b)$ from all directions, the temperature readings from nearby points consistently approach 25°C (the limit is 25°C), then there's a jump or discontinuity. The reported value isn't what the surrounding area suggests.

### Connecting Continuity to Other Course Outcomes

*   **CO1: Apply various concepts in calculus to linearize functions and to analyze concavity.**
    Continuity is a fundamental property that allows us to perform linearization (using tangent planes) and analyze concavity. If a function is discontinuous, its tangent plane might not be well-defined at that point, and its curvature can behave erratically. Smooth, continuous functions are what we typically linearize and analyze for concavity. Think of fitting a flat plane to a curved surface – if the surface has a sharp edge or a hole, that process becomes problematic.

*   **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions.**
    The existence of directional derivatives implies a certain degree of "smoothness" or local linearity, which is closely related to continuity. Furthermore, if we want to guarantee that a continuous function on a closed, bounded set attains its maximum and minimum values (as per the Extreme Value Theorem), continuity is a prerequisite. Without continuity, a function could approach a supremum or infimum without ever reaching it, or jump to arbitrarily high or low values.

### Important Points to Remember

*   **Continuity is about the local behavior of a function.** It tells us how the function behaves "around" a point.
*   **The limit is the key.** If the limit exists and equals the function's value at the point, the function is continuous there.
*   **Polynomials are your best friends:** They are continuous everywhere. Rational functions are continuous except where the denominator is zero.
*   **Check all three conditions:** Don't forget to ensure the function is defined at the point and that the limit equals the function's value.
*   **Many discontinuities can be "fixed"** if the limit exists but doesn't equal the function's value (removable discontinuity).
*   **If the limit doesn't exist, the discontinuity is usually more fundamental.**

### Common Pitfalls in Exams

1.  **Assuming continuity:** Just because a function looks "nice" doesn't mean it's continuous everywhere. Always check the points where the denominator is zero or where piecewise definitions might switch.
2.  **Forgetting to check all three conditions:** Students might find the limit and forget to check if the function is defined at the point, or if the limit equals the function's value.
3.  **Incorrectly evaluating limits:** Forgetting to test multiple paths when trying to prove a limit *doesn't* exist can lead to incorrect conclusions about continuity.
4.  **Confusing continuity with differentiability:** While differentiability implies continuity, the converse is not always true. A function can be continuous but not differentiable (e.g., $|x|$ at $x=0$ for a single-variable function, or surfaces with sharp creases). We'll delve into differentiability later, but it's good to keep in mind they are distinct.

### Sample Questions with Answers

**Question 1 (Conceptual):**
State the three conditions required for a function $f(x, y)$ to be continuous at a point $(a, b)$.
**Answer:**
A function $f(x, y)$ is continuous at $(a, b)$ if:
1.  $f(a, b)$ is defined.
2.  $\lim_{(x, y) \to (a, b)} f(x, y)$ exists.
3.  $\lim_{(x, y) \to (a, b)} f(x, y) = f(a, b)$.

**Question 2 (Application):**
Determine if the function $f(x, y) = \frac{x^2 y}{x^2 + y^2}$ is continuous at the origin $(0, 0)$.
**Answer:**
1.  **Is $f(0, 0)$ defined?** $f(0, 0) = \frac{0^2 \cdot 0}{0^2 + 0^2} = \frac{0}{0}$, which is undefined.
    Since the function is not defined at $(0, 0)$, it is **discontinuous** at $(0, 0)$.

    *(Self-check: Even if it were defined, let's check the limit to be thorough)*
    *   *Path $y=mx$ (for $x\neq 0$):* $\lim_{x\to 0} \frac{x^2(mx)}{x^2 + (mx)^2} = \lim_{x\to 0} \frac{mx^3}{x^2(1+m^2)} = \lim_{x\to 0} \frac{mx}{1+m^2} = 0$.
    *   *The limit appears to be 0. However, this function is not continuous because the first condition (being defined) fails.*

**Question 3 (Exam-Oriented - Removable Discontinuity):**
Consider the function:
$$
f(x, y) = \begin{cases}
\frac{\sin(xy)}{xy} & \text{if } xy \neq 0 \\
1 & \text{if } xy = 0
\end{cases}
$$
Is $f(x, y)$ continuous at $(0, 1)$? Explain your reasoning.
**Answer:**
Let's check the three conditions for continuity at $(0, 1)$.

1.  **Is $f(0, 1)$ defined?** Yes. For $(0, 1)$, $xy = 0 \cdot 1 = 0$. According to the definition, $f(0, 1) = 1$.
2.  **Does $\lim_{(x, y) \to (0, 1)} f(x, y)$ exist?**
    As $(x, y) \to (0, 1)$, $xy \to 0 \cdot 1 = 0$.
    We need to evaluate $\lim_{(x, y) \to (0, 1)} \frac{\sin(xy)}{xy}$.
    Let $u = xy$. As $(x, y) \to (0, 1)$, $u \to 0$.
    So, the limit becomes $\lim_{u \to 0} \frac{\sin(u)}{u}$.
    This is a standard limit from single-variable calculus, which is equal to 1.
    Therefore, $\lim_{(x, y) \to (0, 1)} f(x, y) = 1$.
3.  **Does $\lim_{(x, y) \to (0, 1)} f(x, y) = f(0, 1)$?**
    Yes, $1 = 1$.

Since all three conditions are satisfied, the function $f(x, y)$ is **continuous** at $(0, 1)$.

---

This concludes our exploration of continuity for functions of two variables. Remember, this is a building block for more advanced topics, so solidifying your understanding here is key to success in the rest of the course and in your future applications in Information Science. Keep practicing those limit evaluations and checking those three conditions!
