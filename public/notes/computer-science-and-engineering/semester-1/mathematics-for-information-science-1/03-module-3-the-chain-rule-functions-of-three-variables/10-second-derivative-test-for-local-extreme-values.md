---
title: "Second Derivative Test for Local Extreme Values"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 3: The Chain Rule: Functions of three Variables"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bdc"
status: "completed"
scrapedAt: "2026-05-20T16:40:27.965Z"
---
## Mathematics for Information Science – 1

### Module 3: The Chain Rule: Functions of Three Variables

#### Topic: The Second Derivative Test for Local Extreme Values

Hello everyone, and welcome back to our journey through multivariable calculus! Today, we're diving into a crucial topic that builds upon our understanding of partial derivatives. We’ve learned how to find critical points of functions using the first derivative test – essentially, where the "slope" is zero. But just like in single-variable calculus, finding those critical points is only half the battle. We need to know *what* kind of extreme value we've found: is it a local maximum, a local minimum, or something else entirely, like a saddle point? This is where our **Second Derivative Test** comes in, and it's a powerful tool for analyzing the behavior of functions of two variables. While our module title mentions functions of three variables, the second derivative test we're focusing on today is most commonly applied and elegantly formulated for functions of *two* variables, $f(x,y)$. Later in the course, we’ll explore how to extend these ideas conceptually.

**Connecting with Course Outcomes:**

Before we get started, let's briefly touch upon how this topic ties into our broader course objectives:

*   **CO1: Apply various concepts in calculus to linearize functions and to analyze concavity.** The second derivative test is fundamentally about analyzing concavity. Just as the second derivative tells us about the curvature of a single-variable function (concave up means a minimum, concave down means a maximum), the second derivatives of a multivariable function give us information about its "shape" in multiple directions. This directly relates to understanding concavity.
*   **CO2: Calculate the limits for functions of two variables and partial derivatives of multivariable functions.** To even *use* the second derivative test, we must first be proficient at calculating *second-order partial derivatives*. This test is a direct application of that skill.
*   **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions.** This is the core of our topic! We are actively solving for local maxima and minima using these powerful derivative tools. The second derivative test helps us classify the critical points we find.

Think of it this way: the first derivative test points us to potential peaks and valleys. The second derivative test tells us if that point is indeed a peak (local max), a valley (local min), or perhaps a place where the ground flattens out in a strange way, like a saddle on a horse.

---

### 1. Revisiting Critical Points: The Foundation

Remember from our earlier discussions on the first derivative test? A function $f(x,y)$ has a **critical point** at $(x_0, y_0)$ if both first-order partial derivatives are zero there, i.e., $f_x(x_0, y_0) = 0$ and $f_y(x_0, y_0) = 0$, or if at least one of these partial derivatives is undefined at $(x_0, y_0)$. These critical points are our candidates for local maxima, local minima, and saddle points.

*   **Local Maximum:** A point $(x_0, y_0)$ is a local maximum if $f(x,y) \le f(x_0, y_0)$ for all $(x,y)$ in some open disk around $(x_0, y_0)$. Think of the very top of a hill.
*   **Local Minimum:** A point $(x_0, y_0)$ is a local minimum if $f(x,y) \ge f(x_0, y_0)$ for all $(x,y)$ in some open disk around $(x_0, y_0)$. This is like the bottom of a valley.
*   **Saddle Point:** A critical point that is neither a local maximum nor a local minimum. Imagine the center of a horse's saddle – it's higher than the points right next to it in one direction, but lower than points in another direction.

---

### 2. Introducing the Second Derivative Test: The Hessian Determinant

So, how do we distinguish between these possibilities? Just as in single-variable calculus where $f''(x) > 0$ indicated a local minimum and $f''(x) < 0$ indicated a local maximum, we need a way to check the "curvature" in multiple directions for functions of two variables.

This leads us to the **Second Derivative Test**. It relies on examining the values of the *second-order partial derivatives* at a critical point $(x_0, y_0)$. For a function $f(x,y)$ that has continuous second partial derivatives in an open region containing a point $(x_0, y_0)$ where $f_x(x_0, y_0) = 0$ and $f_y(x_0, y_0) = 0$, we define a quantity called the **Hessian Determinant** (or simply the discriminant) $D$ as follows:

$$D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$$

Here:
*   $f_{xx} = \frac{\partial^2 f}{\partial x^2}$ is the second partial derivative with respect to $x$.
*   $f_{yy} = \frac{\partial^2 f}{\partial y^2}$ is the second partial derivative with respect to $y$.
*   $f_{xy} = \frac{\partial^2 f}{\partial y \partial x}$ is the mixed second partial derivative.

**A Crucial Note on Mixed Partial Derivatives:** Thanks to **Clairaut's Theorem** (or the theorem on equality of mixed partials), if $f_{xy}$ and $f_{yx}$ are both continuous in an open region, then $f_{xy} = f_{yx}$ in that region. This is usually true for the well-behaved functions we encounter in introductory calculus and engineering. This simplifies our calculation because we only need to find one of the mixed partials, and it appears squared in the formula for $D$.

The test then states:

Let $(x_0, y_0)$ be a critical point of $f(x,y)$ where $f_x(x_0, y_0) = 0$ and $f_y(x_0, y_0) = 0$. Let $D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$. We evaluate $D$ and $f_{xx}$ at the critical point $(x_0, y_0)$.

*   **If $D(x_0, y_0) > 0$ and $f_{xx}(x_0, y_0) > 0$:** Then $f$ has a **local minimum** at $(x_0, y_0)$.
    *   *Think:* Both $f_{xx}$ and $f_{yy}$ must be positive for $D$ to be positive (since $f_{xy}^2$ is subtracted). Positive second derivatives in all relevant directions suggest a bowl shape, hence a minimum.
*   **If $D(x_0, y_0) > 0$ and $f_{xx}(x_0, y_0) < 0$:** Then $f$ has a **local maximum** at $(x_0, y_0)$.
    *   *Think:* If $f_{xx}$ is negative, for $D$ to be positive, $f_{yy}$ must also be negative. Negative second derivatives in all relevant directions suggest an upside-down bowl shape, hence a maximum.
*   **If $D(x_0, y_0) < 0$:** Then $f$ has a **saddle point** at $(x_0, y_0)$.
    *   *Think:* This is the most common case for saddle points. It signifies curvature in opposite directions. The subtraction term $[f_{xy}(x_0, y_0)]^2$ is positive, and for $D$ to be negative, either $f_{xx}$ or $f_{yy}$ (or both) must have the "wrong" sign compared to the other, leading to mixed curvature.
*   **If $D(x_0, y_0) = 0$:** The test is **inconclusive**. We cannot determine the nature of the critical point from this test alone. We might need to use other methods, like examining the function's behavior directly or using graphical methods.

**Remember this:** The conditions $D > 0$ and $f_{xx} > 0$ for a local minimum, and $D > 0$ and $f_{xx} < 0$ for a local maximum are fundamental. The sign of $f_{xx}$ is our tie-breaker when $D$ is positive.

---

### 3. Illustrative Examples: Putting the Test to Work

Let's walk through some examples to solidify our understanding. These are the kinds of problems you'll definitely see on exams!

#### Example 1: Finding and Classifying an Extreme Value

Let's find the local maxima, minima, and saddle points of the function:
$f(x,y) = x^2 + y^2 - 2x - 4y + 5$

**Step 1: Find the critical points.**
We need to calculate the first partial derivatives and set them to zero.
$f_x = \frac{\partial f}{\partial x} = 2x - 2$
$f_y = \frac{\partial f}{\partial y} = 2y - 4$

Setting them to zero:
$2x - 2 = 0 \implies x = 1$
$2y - 4 = 0 \implies y = 2$

So, our only critical point is $(1, 2)$.

**Step 2: Calculate the second partial derivatives.**
We need $f_{xx}$, $f_{yy}$, and $f_{xy}$.
$f_{xx} = \frac{\partial}{\partial x}(2x - 2) = 2$
$f_{yy} = \frac{\partial}{\partial y}(2y - 4) = 2$
$f_{xy} = \frac{\partial}{\partial y}(2x - 2) = 0$

(Notice $f_{yx} = \frac{\partial}{\partial x}(2y - 4) = 0$, confirming Clairaut's Theorem).

**Step 3: Calculate the Hessian Determinant, $D$.**
$D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$
$D(x, y) = (2)(2) - (0)^2 = 4$

**Step 4: Evaluate $D$ and $f_{xx}$ at the critical point $(1, 2)$.**
$D(1, 2) = 4$
$f_{xx}(1, 2) = 2$

**Step 5: Apply the Second Derivative Test conclusions.**
Since $D(1, 2) = 4 > 0$ and $f_{xx}(1, 2) = 2 > 0$, the function $f$ has a **local minimum** at the point $(1, 2)$.

What is the value of this minimum?
$f(1, 2) = (1)^2 + (2)^2 - 2(1) - 4(2) + 5 = 1 + 4 - 2 - 8 + 5 = 0$.
So, the local minimum value is 0 at $(1, 2)$.

*Think about this example:* This function is actually a paraboloid, which opens upwards. It looks like a simple bowl. We found its absolute lowest point.

---

#### Example 2: Identifying a Saddle Point

Consider the function:
$f(x,y) = x^2 - y^2$

**Step 1: Find critical points.**
$f_x = 2x$
$f_y = -2y$

Setting to zero:
$2x = 0 \implies x = 0$
$-2y = 0 \implies y = 0$

The only critical point is $(0, 0)$.

**Step 2: Calculate second partial derivatives.**
$f_{xx} = \frac{\partial}{\partial x}(2x) = 2$
$f_{yy} = \frac{\partial}{\partial y}(-2y) = -2$
$f_{xy} = \frac{\partial}{\partial y}(2x) = 0$

**Step 3: Calculate $D$.**
$D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$
$D(x, y) = (2)(-2) - (0)^2 = -4$

**Step 4: Evaluate $D$ and $f_{xx}$ at the critical point $(0, 0)$.**
$D(0, 0) = -4$
$f_{xx}(0, 0) = 2$

**Step 5: Apply the test.**
Since $D(0, 0) = -4 < 0$, the function $f$ has a **saddle point** at $(0, 0)$.

*Visualizing this:* The function $z = x^2 - y^2$ describes a surface that looks like a saddle. Along the x-axis ($y=0$), it's $z=x^2$, a parabola opening upwards. Along the y-axis ($x=0$), it's $z=-y^2$, a parabola opening downwards. This combination of upward and downward curvature at the origin is characteristic of a saddle point.

---

#### Example 3: When the Test is Inconclusive

Let's look at the function:
$f(x,y) = x^3 + y^3$

**Step 1: Find critical points.**
$f_x = 3x^2$
$f_y = 3y^2$

Setting to zero:
$3x^2 = 0 \implies x = 0$
$3y^2 = 0 \implies y = 0$

The critical point is $(0, 0)$.

**Step 2: Calculate second partial derivatives.**
$f_{xx} = \frac{\partial}{\partial x}(3x^2) = 6x$
$f_{yy} = \frac{\partial}{\partial y}(3y^2) = 6y$
$f_{xy} = \frac{\partial}{\partial y}(3x^2) = 0$

**Step 3: Calculate $D$.**
$D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$
$D(x, y) = (6x)(6y) - (0)^2 = 36xy$

**Step 4: Evaluate $D$ and $f_{xx}$ at the critical point $(0, 0)$.**
$D(0, 0) = 36(0)(0) = 0$
$f_{xx}(0, 0) = 6(0) = 0$

**Step 5: Apply the test.**
Since $D(0, 0) = 0$, the Second Derivative Test is **inconclusive**.

**What do we do now?** We need to analyze the function directly around $(0,0)$.
*   $f(0,0) = 0^3 + 0^3 = 0$.
*   If we move along the x-axis ($y=0$), $f(x,0) = x^3$. For $x > 0$, $x^3 > 0$, and for $x < 0$, $x^3 < 0$.
*   If we move along the y-axis ($x=0$), $f(0,y) = y^3$. For $y > 0$, $y^3 > 0$, and for $y < 0$, $y^3 < 0$.

Since there are points arbitrarily close to $(0,0)$ where $f(x,y) > f(0,0)$ (e.g., along the line $y=x/2$ where $f(x, x/2) = x^3 + (x/2)^3 = x^3 + x^3/8 = 9x^3/8$, which is positive for $x>0$), and points where $f(x,y) < f(0,0)$ (e.g., along $y=x/2$ for $x<0$), the point $(0,0)$ is neither a local maximum nor a local minimum. It's another type of saddle point, sometimes called a "stationary point of inflection" in single-variable calculus, but for multivariable functions, it's simply an inconclusive case for the second derivative test, and we need further analysis to classify it as a saddle point.

---

### 4. Geometric Interpretation and Analogy

Why does this test work? It's all about the local shape of the surface defined by $z = f(x,y)$.

*   **$D > 0$:** This means $f_{xx}$ and $f_{yy}$ have the same sign.
    *   If $f_{xx} > 0$ (and thus $f_{yy} > 0$), the surface is "curving upwards" in the x-direction and also "curving upwards" in the y-direction. Imagine a small patch of the surface around the critical point looks like the bottom of a bowl. This points to a local minimum. (Think $f(x,y) = x^2 + y^2$).
    *   If $f_{xx} < 0$ (and thus $f_{yy} < 0$), the surface is "curving downwards" in both directions. It looks like the top of an upside-down bowl. This indicates a local maximum. (Think $f(x,y) = -x^2 - y^2$).

*   **$D < 0$:** This means $f_{xx}$ and $f_{yy}$ have opposite signs.
    *   If $f_{xx} > 0$, the surface curves up in the x-direction. But for $D$ to be negative, $f_{yy}$ must be negative, meaning it curves down in the y-direction. This is exactly the behavior at a saddle point. (Think $f(x,y) = x^2 - y^2$).

*   **$D = 0$:** This is where the test fails. It means that either the "curving up/down" in the x and y directions isn't consistent, or one or both of these second derivatives is zero, leaving us without clear information about the shape.

**Analogy:** Imagine you're hiking on a mountain.
*   **Critical Point:** You reach a point where the ground is flat in all directions (horizontal tangent plane). This could be the peak of a small hill, the bottom of a depression, or a mountain pass.
*   **Second Derivative Test:**
    *   If you look around and the ground slopes *downhill* in every direction from your flat spot, you're at a **local minimum**. (Like $D>0, f_{xx}>0$).
    *   If you look around and the ground slopes *uphill* in every direction from your flat spot, you're at a **local maximum**. (Like $D>0, f_{xx}<0$).
    *   If, in one direction, the ground slopes downhill, but in another direction, it slopes uphill, you're at a **saddle point** or a mountain pass. (Like $D<0$).
    *   If the ground is flat in some directions, and then you can't tell what it does in other directions without more information, the test is **inconclusive**. (Like $D=0$).

---

### 5. Connection to Eigenvalues (Advanced Insight, CO1 & CO3)

For those of you who have a bit more mathematical background or are curious about the "why" behind the formula, the Hessian matrix is key. The Hessian matrix of $f(x,y)$ is:

$$H(x,y) = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{yx} & f_{yy} \end{pmatrix}$$

The determinant of this matrix is exactly our $D(x,y) = f_{xx}f_{yy} - f_{xy}^2$ (since $f_{xy}=f_{yx}$).

In linear algebra, the eigenvalues of a symmetric matrix tell us about the stretching or shrinking factors along its eigenvectors. For the Hessian matrix at a critical point:

*   If both eigenvalues are positive, the quadratic form associated with $f$ (which approximates $f$ near the critical point) is positive definite, meaning it curves upwards in all directions – a local minimum.
*   If both eigenvalues are negative, the quadratic form is negative definite, curving downwards in all directions – a local maximum.
*   If the eigenvalues have opposite signs, the quadratic form is indefinite, meaning it curves up in some directions and down in others – a saddle point.
*   If one eigenvalue is zero, the test is inconclusive.

The condition $D > 0$ is equivalent to saying that the product of the eigenvalues is positive, meaning they have the same sign. The condition $f_{xx} > 0$ (or the first diagonal entry of the Hessian) then tells us if both eigenvalues are positive or both are negative. This gives a deeper understanding of why the test works and connects it to the geometric properties of quadratic forms, directly relating to CO1 and CO3.

---

### 6. Important Considerations and Common Pitfalls

*   **Continuous Second Derivatives:** The entire test relies on the assumption that $f_{xx}$, $f_{yy}$, and $f_{xy}$ are continuous in an open region around the critical point. Most functions you'll encounter will satisfy this, but it's good practice to be aware of the condition. (Referencing Thomas' Calculus and Kreyszig, these conditions are standard for applying the test).
*   **Local vs. Absolute:** This test only identifies *local* extreme values. A function might have a local minimum that is not the absolute minimum value of the function over its entire domain. To find absolute extrema, you often need to check the behavior of the function on the boundaries of the domain as well.
*   **Inconclusive Cases ($D=0$):** This is a common pitfall for students. When $D=0$, don't just guess! You *must* use other methods. This often involves examining the function's behavior directly or using graphical tools.
*   **Calculation Errors:** Be very careful when computing partial derivatives, especially the second and mixed ones. A small algebraic error can lead to a completely wrong conclusion. Double-check your calculations!
*   **The Role of $f_{xx}$:** Remember that $f_{xx}$ is only used to break the tie when $D > 0$. If $D < 0$, it's a saddle point regardless of the sign of $f_{xx}$.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
What does the sign of the Hessian determinant $D$ tell you about the local behavior of a function $f(x,y)$ at a critical point $(x_0, y_0)$?

**Answer 1:**
The sign of $D(x_0, y_0)$ is the primary indicator of the nature of the critical point:
*   If $D(x_0, y_0) > 0$: The function has either a local maximum or a local minimum. We need the sign of $f_{xx}(x_0, y_0)$ to distinguish between them.
*   If $D(x_0, y_0) < 0$: The function has a saddle point.
*   If $D(x_0, y_0) = 0$: The test is inconclusive, and further analysis is required.

---

**Question 2 (Application):**
Find and classify all local extrema for the function $f(x,y) = x^3 - 3x - 2y^2$.

**Answer 2:**
**Step 1: Find critical points.**
$f_x = 3x^2 - 3 = 0 \implies x^2 = 1 \implies x = \pm 1$
$f_y = -4y = 0 \implies y = 0$
Critical points are $(1, 0)$ and $(-1, 0)$.

**Step 2: Calculate second partial derivatives.**
$f_{xx} = 6x$
$f_{yy} = -4$
$f_{xy} = 0$

**Step 3: Calculate $D$.**
$D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$
$D(x, y) = (6x)(-4) - (0)^2 = -24x$

**Step 4: Evaluate at each critical point.**

*   **At $(1, 0)$:**
    $D(1, 0) = -24(1) = -24$
    $f_{xx}(1, 0) = 6(1) = 6$
    Since $D(1, 0) < 0$, the point $(1, 0)$ is a **saddle point**.

*   **At $(-1, 0)$:**
    $D(-1, 0) = -24(-1) = 24$
    $f_{xx}(-1, 0) = 6(-1) = -6$
    Since $D(-1, 0) > 0$ and $f_{xx}(-1, 0) < 0$, the point $(-1, 0)$ is a **local maximum**.

The local maximum value is $f(-1, 0) = (-1)^3 - 3(-1) - 2(0)^2 = -1 + 3 - 0 = 2$.

---

**Question 3 (Understanding Inconclusive Case):**
Consider the function $f(x,y) = (x-y)^2$. Use the second derivative test to analyze the point $(0,0)$. What would you conclude?

**Answer 3:**
**Step 1: Find critical points.**
$f(x,y) = x^2 - 2xy + y^2$
$f_x = 2x - 2y = 0 \implies x=y$
$f_y = -2x + 2y = 0 \implies x=y$
Critical points are any points where $x=y$. Let's consider $(0,0)$ as one such point.

**Step 2: Calculate second partial derivatives.**
$f_{xx} = 2$
$f_{yy} = 2$
$f_{xy} = -2$

**Step 3: Calculate $D$.**
$D(x, y) = f_{xx}f_{yy} - (f_{xy})^2 = (2)(2) - (-2)^2 = 4 - 4 = 0$.

**Step 4: Evaluate at $(0,0)$.**
$D(0,0) = 0$.

**Conclusion:** The Second Derivative Test is inconclusive at $(0,0)$.
However, let's analyze the function directly: $f(x,y) = (x-y)^2$.
We know that $(x-y)^2 \ge 0$ for all $x, y$.
At $(0,0)$, $f(0,0) = (0-0)^2 = 0$.
For any point $(x,y) \ne (0,0)$ where $x=y$ (e.g., $(1,1)$), $f(x,y) = (x-x)^2 = 0$.
For any point $(x,y)$ where $x \ne y$ (e.g., $(1,0)$), $f(x,y) = (1-0)^2 = 1 > 0$.
Since $f(x,y) \ge f(0,0)$ for all $(x,y)$ in any neighborhood of $(0,0)$, and $f(x,y) = 0$ for infinitely many points near $(0,0)$ (all points on the line $y=x$), the point $(0,0)$ is a **local minimum** (and indeed, an absolute minimum). This shows why the second derivative test can fail; other analyses might be needed.

---

This concludes our discussion on the Second Derivative Test. Mastering this tool is essential for solving optimization problems in multivariable calculus and will serve you well in many areas of information science where analyzing the behavior of complex systems is key. Keep practicing these examples, and don't hesitate to review the concepts of partial derivatives and critical points!
