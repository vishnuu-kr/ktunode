---
title: "Maxima and minima of functions of two variables - relative maxima and minima"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 1: Limits and continuity"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da1cb"
status: "completed"
scrapedAt: "2026-05-23T17:40:37.205Z"
---
# Mathematics for Electrical Science and Physical Science - 2

## Module 1: Limits and Continuity

### Topic: Maxima and Minima of Functions of Two Variables - Relative Maxima and Minima

Welcome back, everyone! In our journey through multivariable calculus, we've already laid the groundwork with limits and continuity. Now, we're going to leverage that understanding to tackle a really important concept in both electrical and physical sciences: finding the "peak" and "valley" points of functions with two inputs. Think about trying to find the highest point on a topographical map or the point of lowest energy in a physical system. That's exactly what we're going to learn how to do with functions of two variables, focusing specifically on **relative maxima and minima**.

This topic directly ties into **Course Outcome 1 (CO1)**, where we aim to "Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems." Understanding these extrema is fundamental to optimizing designs, analyzing system behavior, and solving a vast array of practical problems in your fields.

### Understanding Peaks and Valleys: The Intuition

Imagine you're hiking in the mountains. You're standing at a certain spot, and you can look around you.
*   If every direction you look, you're looking downhill, then you're at a **peak** (a **relative maximum**).
*   If every direction you look, you're looking uphill, then you're at a **valley** (a **relative minimum**).

These "peaks" and "valleys" are what we call **relative** or **local** extrema. They're not necessarily the absolute highest or lowest points in the entire mountain range, but they are the highest or lowest points in their immediate neighborhood.

For a function of two variables, $z = f(x, y)$, a relative maximum occurs at a point $(a, b)$ if $f(a, b) \ge f(x, y)$ for all $(x, y)$ in some open disk centered at $(a, b)$. Similarly, a relative minimum occurs at $(a, b)$ if $f(a, b) \le f(x, y)$ for all $(x, y)$ in an open disk centered at $(a, b)$.

### The Crucial Role of Derivatives: Where the Ground is Flat

How do we find these points mathematically? Think back to functions of a single variable, say $y = f(x)$. Where do relative maxima and minima occur? They happen at points where the tangent line is horizontal, meaning the derivative, $f'(x)$, is zero. These are often called **critical points**.

For functions of two variables, $z = f(x, y)$, the idea is similar, but instead of a single derivative, we have **partial derivatives**. At a relative maximum or minimum, not only is the slope in the x-direction zero, but the slope in the y-direction is also zero.

This leads us to the first and most fundamental idea for finding relative extrema:

**First Derivative Test (or Stationary Point Test):**
If $f(x, y)$ has a relative maximum or minimum at $(a, b)$ and the first partial derivatives $f_x(a, b)$ and $f_y(a, b)$ exist, then $f_x(a, b) = 0$ and $f_y(a, b) = 0$.

So, our first step in finding relative extrema is to find the points where *both* partial derivatives are simultaneously zero. These points are called **critical points** or **stationary points** of the function $f(x, y)$.

**Analogy:** Imagine you're trying to find the highest point on a gently sloping hill. You can't just look at the slope in one direction. You have to check the slope going north-south and east-west. If the ground is flat in both directions at a particular spot, that's a potential candidate for a peak or a valley.

### Finding Critical Points: A Practical Approach

To find critical points $(a, b)$ for a function $f(x, y)$:

1.  **Calculate the first partial derivatives:** Find $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$.
2.  **Set the partial derivatives to zero:** Solve the system of equations:
    $\frac{\partial f}{\partial x} = 0$
    $\frac{\partial f}{\partial y} = 0$
3.  **Identify the solutions:** The solutions $(x, y)$ to this system are your critical points.

**Important Note:** Just like with single-variable calculus, it's possible for a function to have a relative extremum at a point where the derivative does not exist (e.g., the vertex of a "V" shape). However, for the functions we typically encounter in physical and electrical sciences, which are often smooth and differentiable everywhere, the critical points found by setting partial derivatives to zero are our primary candidates.

**Example 1: A Simple Paraboloid**
Let's find the critical points of $f(x, y) = x^2 + y^2$.
1.  Partial derivatives:
    $\frac{\partial f}{\partial x} = 2x$
    $\frac{\partial f}{\partial y} = 2y$
2.  Set to zero:
    $2x = 0 \implies x = 0$
    $2y = 0 \implies y = 0$
3.  Critical point: $(0, 0)$.

This function represents a bowl-shaped surface opening upwards. Intuitively, the lowest point (the bottom of the bowl) should be at $(0, 0)$. The value of the function there is $f(0, 0) = 0$. For any other point $(x, y)$, $x^2+y^2$ is positive, so $(0,0)$ is indeed a minimum.

### Classifying Critical Points: The Second Derivative Test

Now, we've found our candidate points. But how do we know if a critical point is a relative maximum, a relative minimum, or neither? For single-variable functions, we used the Second Derivative Test: if $f'(c)=0$ and $f''(c) > 0$, it's a local minimum; if $f''(c) < 0$, it's a local maximum; if $f''(c)=0$, the test is inconclusive.

For functions of two variables, we need to consider *all* the second partial derivatives. This is where the **Second Derivative Test** comes in. It's a bit more involved, but it gives us a definitive answer.

Let $(a, b)$ be a critical point of $f(x, y)$ (meaning $f_x(a, b) = 0$ and $f_y(a, b) = 0$). We need to calculate the following quantities:

*   $f_{xx}(x, y) = \frac{\partial^2 f}{\partial x^2}$
*   $f_{yy}(x, y) = \frac{\partial^2 f}{\partial y^2}$
*   $f_{xy}(x, y) = \frac{\partial^2 f}{\partial y \partial x}$
*   $f_{yx}(x, y) = \frac{\partial^2 f}{\partial x \partial y}$

A crucial result from Clairaut's Theorem (or the symmetry of second partial derivatives) states that if $f_{xy}$ and $f_{yx}$ are continuous in an open disk around $(a, b)$, then $f_{xy}(a, b) = f_{yx}(a, b)$. This simplifies things for most of the functions we'll deal with.

We define the **discriminant** or **Hessian determinant** $D$ at $(x, y)$ as:
$D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$

Now, the **Second Derivative Test for Two Variables** states, for a critical point $(a, b)$:

1.  **If $D(a, b) > 0$ AND $f_{xx}(a, b) > 0$**: Then $f$ has a **relative minimum** at $(a, b)$.
    *   *Think:* If the "curvature" is positive in all directions (indicated by $D>0$) and the curvature in the x-direction is also positive ($f_{xx}>0$), it's like a valley bottom.
2.  **If $D(a, b) > 0$ AND $f_{xx}(a, b) < 0$**: Then $f$ has a **relative maximum** at $(a, b)$.
    *   *Think:* If the curvature is positive overall ($D>0$) but the curvature in the x-direction is negative ($f_{xx}<0$), it's like a peak.
3.  **If $D(a, b) < 0$**: Then $f$ has **neither** a relative maximum nor a relative minimum at $(a, b)$. This point is called a **saddle point**.
    *   *Think:* If the overall curvature is negative ($D<0$), it means the curvature in one direction is positive (like a valley) and in another direction is negative (like a peak). This forms a saddle shape.
4.  **If $D(a, b) = 0$**: The test is **inconclusive**. We need to use other methods to determine the nature of the critical point.

**Where do these formulas come from?** They are derived by examining the local behavior of the function near the critical point using a Taylor expansion. The second-order terms in the Taylor expansion involve these second partial derivatives and the discriminant $D$ dictates the nature of the quadratic form representing that behavior. This is a deeper dive, but the formulas are what we use for practical classification.

**Example 1 Revisited: The Paraboloid**
Let's classify the critical point $(0, 0)$ for $f(x, y) = x^2 + y^2$.
1.  First partial derivatives: $f_x = 2x$, $f_y = 2y$. Critical point at $(0,0)$.
2.  Second partial derivatives:
    $f_{xx} = \frac{\partial}{\partial x}(2x) = 2$
    $f_{yy} = \frac{\partial}{\partial y}(2y) = 2$
    $f_{xy} = \frac{\partial}{\partial y}(2x) = 0$
    (And $f_{yx} = \frac{\partial}{\partial x}(2y) = 0$, so $f_{xy} = f_{yx}$)
3.  Calculate $D$ and $f_{xx}$ at $(0, 0)$:
    $D(0, 0) = f_{xx}(0, 0) f_{yy}(0, 0) - [f_{xy}(0, 0)]^2 = (2)(2) - (0)^2 = 4$.
    $f_{xx}(0, 0) = 2$.

Since $D(0, 0) = 4 > 0$ and $f_{xx}(0, 0) = 2 > 0$, according to our test, $f$ has a **relative minimum** at $(0, 0)$. This matches our intuition for the bowl-shaped paraboloid.

**Example 2: A Saddle Point**
Let's consider $f(x, y) = x^2 - y^2$.
1.  Partial derivatives:
    $f_x = 2x$
    $f_y = -2y$
2.  Set to zero:
    $2x = 0 \implies x = 0$
    $-2y = 0 \implies y = 0$
3.  Critical point: $(0, 0)$.
4.  Second partial derivatives:
    $f_{xx} = 2$
    $f_{yy} = -2$
    $f_{xy} = 0$
5.  Calculate $D$ and $f_{xx}$ at $(0, 0)$:
    $D(0, 0) = f_{xx}(0, 0) f_{yy}(0, 0) - [f_{xy}(0, 0)]^2 = (2)(-2) - (0)^2 = -4$.

Since $D(0, 0) = -4 < 0$, the point $(0, 0)$ is a **saddle point**. This function represents a surface that looks like a horse's saddle – it curves up in one direction and down in another. If you were standing at $(0,0)$ on this surface, you could go uphill by moving along the x-axis and downhill by moving along the y-axis.

**Example 3: A Tentative Peak**
Let's try $f(x, y) = x^3 + y^3$.
1.  Partial derivatives:
    $f_x = 3x^2$
    $f_y = 3y^2$
2.  Set to zero:
    $3x^2 = 0 \implies x = 0$
    $3y^2 = 0 \implies y = 0$
3.  Critical point: $(0, 0)$.
4.  Second partial derivatives:
    $f_{xx} = 6x$
    $f_{yy} = 6y$
    $f_{xy} = 0$
5.  Calculate $D$ and $f_{xx}$ at $(0, 0)$:
    $D(0, 0) = f_{xx}(0, 0) f_{yy}(0, 0) - [f_{xy}(0, 0)]^2 = (0)(0) - (0)^2 = 0$.

Since $D(0, 0) = 0$, the Second Derivative Test is **inconclusive**. We need to investigate further. Let's look at the function's behavior around $(0, 0)$:
*   If we move along the x-axis (y=0), $f(x, 0) = x^3$. For $x>0$, $x^3>0$, and for $x<0$, $x^3<0$.
*   If we move along the y-axis (x=0), $f(0, y) = y^3$. For $y>0$, $y^3>0$, and for $y<0$, $y^3<0$.

In any neighborhood around $(0, 0)$, there are points where $f(x, y) > f(0, 0) = 0$ (e.g., $(1, 0)$) and points where $f(x, y) < f(0, 0) = 0$ (e.g., $(-1, 0)$). Therefore, $(0, 0)$ is neither a relative maximum nor a relative minimum. It's another type of saddle point, often called a "horizontal saddle point" because the tangent plane is horizontal.

**Common Pitfall to Watch Out For:** Always check if the second derivative test is inconclusive ($D=0$). In such cases, you must revert to the definition of maxima/minima or analyze the function's behavior directly.

### Visualizing the Concepts

**Relative Minimum:** Imagine a small dip in the ground. If you're at the lowest point of that dip, any step you take in any direction will lead you slightly uphill. The surface is "curving upwards" around that point.

**Relative Maximum:** Imagine a small hill or mound. If you're at the very top, any step you take will lead you downhill. The surface is "curving downwards" around that point.

**Saddle Point:** Think of a mountain pass. If you're standing at the exact saddle point, you can go uphill by moving towards the peaks on either side, but you can go downhill by moving towards the valleys on the other sides. The surface curves upwards in some directions and downwards in others.

### Connecting to Engineering and Science

**CO1 Application:**
*   **Optimization:** In electrical engineering, you might want to minimize power loss in a circuit or maximize the signal-to-noise ratio. These often translate to finding minima or maxima of functions representing power loss or SNR, which depend on two or more design parameters (like resistance values, frequency, etc.).
*   **Thermodynamics:** In physical science, finding equilibrium states often involves minimizing a potential energy function. If the potential energy depends on two variables (e.g., position coordinates, strain values), we'd use these techniques to locate stable equilibrium points (minima).
*   **Material Science:** Determining the conditions for maximum strength or minimum deformation in a material under stress could involve finding extrema of stress or strain functions, which might depend on temperature and pressure, for example.

**Textbook References:**
Our foundational text, **Calculus by Anton, Biven, Davis (12th ed.)**, provides a thorough treatment of these concepts, laying out the definitions and the Second Derivative Test clearly. You'll find it very helpful for reviewing the theorems and working through more abstract examples.

**Thomas' Calculus** and **Essential Calculus** are also excellent resources for building intuition and seeing a variety of examples, often with helpful graphical illustrations.

**Kreyszig's Advanced Engineering Mathematics** and **Bird's Higher Engineering Mathematics** offer more advanced perspectives and demonstrate applications in specific engineering contexts, which will be invaluable as you move into more complex problem-solving.

### Summary of the Process

To find relative maxima and minima of $z = f(x, y)$:

1.  **Find Critical Points:**
    *   Compute $f_x$ and $f_y$.
    *   Solve the system $f_x = 0$ and $f_y = 0$ to find $(a, b)$.
    *   Also, identify any points where $f_x$ or $f_y$ do not exist.
2.  **Classify Critical Points (using the Second Derivative Test):**
    *   Compute $f_{xx}$, $f_{yy}$, and $f_{xy}$.
    *   Evaluate $D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$ at each critical point $(a, b)$.
    *   **If $D(a, b) > 0$ and $f_{xx}(a, b) > 0$**: Relative minimum at $(a, b)$.
    *   **If $D(a, b) > 0$ and $f_{xx}(a, b) < 0$**: Relative maximum at $(a, b)$.
    *   **If $D(a, b) < 0$**: Saddle point at $(a, b)$.
    *   **If $D(a, b) = 0$**: Test is inconclusive; analyze the function directly.

**Remember this:** The critical points are your *candidates*. The Second Derivative Test is your tool to *classify* these candidates. Always be mindful of the case where $D=0$.

This covers the core concepts of relative maxima and minima for functions of two variables. We've seen how to find potential locations and how to distinguish between peaks, valleys, and saddle points using calculus. This is a vital skill that will underpin many of your problem-solving efforts in this course and beyond.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
What is the fundamental condition that must be met at a point $(a, b)$ for $f(x, y)$ to have a relative maximum or minimum, assuming the partial derivatives exist?

**Answer:**
For $f(x, y)$ to have a relative maximum or minimum at $(a, b)$, its first partial derivatives must both be zero at that point, provided they exist. That is, $f_x(a, b) = 0$ and $f_y(a, b) = 0$. These points are called critical points.

**Question 2 (Application/Exam-Oriented):**
Find all relative maxima, relative minima, and saddle points of the function $f(x, y) = x^3 - 3xy + y^3$.

**Solution:**
1.  **Find Critical Points:**
    *   Calculate partial derivatives:
        $f_x = \frac{\partial}{\partial x}(x^3 - 3xy + y^3) = 3x^2 - 3y$
        $f_y = \frac{\partial}{\partial y}(x^3 - 3xy + y^3) = -3x + 3y^2$
    *   Set partial derivatives to zero and solve the system:
        (1) $3x^2 - 3y = 0 \implies y = x^2$
        (2) $-3x + 3y^2 = 0 \implies x = y^2$
    *   Substitute (1) into (2):
        $x = (x^2)^2 = x^4$
        $x^4 - x = 0$
        $x(x^3 - 1) = 0$
        This gives $x = 0$ or $x^3 = 1$, so $x = 0$ or $x = 1$.
    *   Find corresponding $y$ values using $y = x^2$:
        If $x = 0$, then $y = 0^2 = 0$. So, $(0, 0)$ is a critical point.
        If $x = 1$, then $y = 1^2 = 1$. So, $(1, 1)$ is a critical point.
    The critical points are $(0, 0)$ and $(1, 1)$.

2.  **Classify Critical Points using the Second Derivative Test:**
    *   Calculate second partial derivatives:
        $f_{xx} = \frac{\partial}{\partial x}(3x^2 - 3y) = 6x$
        $f_{yy} = \frac{\partial}{\partial y}(-3x + 3y^2) = 6y$
        $f_{xy} = \frac{\partial}{\partial y}(3x^2 - 3y) = -3$
        (Check: $f_{yx} = \frac{\partial}{\partial x}(-3x + 3y^2) = -3$. So $f_{xy} = f_{yx}$.)
    *   Calculate the discriminant $D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$:
        $D(x, y) = (6x)(6y) - (-3)^2 = 36xy - 9$

    *   **At critical point (0, 0):**
        $D(0, 0) = 36(0)(0) - 9 = -9$.
        Since $D(0, 0) < 0$, the point $(0, 0)$ is a **saddle point**.

    *   **At critical point (1, 1):**
        $D(1, 1) = 36(1)(1) - 9 = 36 - 9 = 27$.
        $f_{xx}(1, 1) = 6x = 6(1) = 6$.
        Since $D(1, 1) = 27 > 0$ and $f_{xx}(1, 1) = 6 > 0$, the point $(1, 1)$ is a **relative minimum**.

**Conclusion:**
The function $f(x, y) = x^3 - 3xy + y^3$ has a saddle point at $(0, 0)$ and a relative minimum at $(1, 1)$.

**Question 3 (Conceptual/Pitfall awareness):**
Consider the function $f(x, y) = x^4 + y^4$. Show that the origin $(0,0)$ is a critical point, but the Second Derivative Test is inconclusive. Then, determine whether it is a relative maximum, minimum, or neither.

**Solution:**
1.  **Find Critical Points:**
    *   $f_x = 4x^3$, $f_y = 4y^3$.
    *   Setting $f_x = 0 \implies 4x^3 = 0 \implies x = 0$.
    *   Setting $f_y = 0 \implies 4y^3 = 0 \implies y = 0$.
    *   The origin $(0, 0)$ is indeed a critical point.

2.  **Second Derivative Test:**
    *   $f_{xx} = 12x^2$
    *   $f_{yy} = 12y^2$
    *   $f_{xy} = 0$
    *   $D(x, y) = f_{xx}f_{yy} - (f_{xy})^2 = (12x^2)(12y^2) - 0^2 = 144x^2y^2$.
    *   At $(0, 0)$:
        $D(0, 0) = 144(0)^2(0)^2 = 0$.
    *   Since $D(0, 0) = 0$, the Second Derivative Test is inconclusive.

3.  **Analyze Function Behavior at (0, 0):**
    *   The function is $f(x, y) = x^4 + y^4$.
    *   The value at the critical point is $f(0, 0) = 0^4 + 0^4 = 0$.
    *   For any other point $(x, y)$ where $x \neq 0$ or $y \neq 0$, we have $x^4 > 0$ and $y^4 \ge 0$ (or $x^4 \ge 0$ and $y^4 > 0$).
    *   Therefore, $f(x, y) = x^4 + y^4 > 0$ for all $(x, y) \neq (0, 0)$.
    *   This means $f(x, y) > f(0, 0)$ for all $(x, y)$ in any neighborhood of $(0, 0)$.

**Conclusion:**
The origin $(0, 0)$ is a critical point, the Second Derivative Test is inconclusive, but by direct analysis, $(0, 0)$ is a **relative minimum**. This highlights why it's crucial to analyze the function directly when the discriminant is zero.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
