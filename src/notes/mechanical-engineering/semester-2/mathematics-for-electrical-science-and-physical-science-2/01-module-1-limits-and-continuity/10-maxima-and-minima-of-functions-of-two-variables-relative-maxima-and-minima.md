---
title: "Maxima and 
minima of functions of two variables - relative maxima and 
minima"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 1: Limits and continuity"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e839a1"
status: "completed"
scrapedAt: "2026-05-20T17:45:45.495Z"
---
# Mathematics for Electrical Science and Physical Science – 2

## Module 1: Limits and Continuity

### Topic: Maxima and Minima of Functions of Two Variables – Relative Maxima and Minima

Welcome, everyone! Today, we're diving into a really exciting and practically useful part of multivariable calculus: finding the "peaks" and "valleys" of functions that depend on two variables. Think about it: in electrical science, we might be looking for the operating point that maximizes power output or minimizes energy consumption. In physical science, we might be analyzing a temperature distribution on a surface to find the hottest or coldest spots. This is exactly where understanding relative maxima and minima of functions of two variables comes in. It directly connects to our **Course Outcome 1 (CO1)**, where we aim to "Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems."

So, what do we mean by "relative" maxima and minima? Unlike absolute maxima and minima (which are the highest and lowest values over the entire domain), relative ones are like local peaks and troughs. Imagine a hilly landscape. A mountain peak is a relative maximum because it's higher than all the surrounding land. But it might not be the highest point on the entire planet (that would be an absolute maximum). Similarly, a small dip in the terrain is a relative minimum.

Let's start by getting a solid understanding of the definitions, drawing inspiration from classic texts like Anton, Biven, and Davis's *Calculus* (12th Edition) and Thomas' Calculus (15th Edition).

### Understanding the Concept: Peaks, Valleys, and Saddle Points

Consider a function of two variables, $z = f(x, y)$. We're looking for points $(a, b)$ in the domain of $f$ where the value $f(a, b)$ is either greater than all other nearby values of $f(x, y)$ or less than all other nearby values of $f(x, y)$.

#### Definition of Relative Maximum

A function $f(x, y)$ has a **relative maximum** at a point $(a, b)$ if $f(a, b) \ge f(x, y)$ for all $(x, y)$ in some open disk centered at $(a, b)$. The value $f(a, b)$ is called a **relative maximum value**.

Think of it like this: you're standing on a hill at point $(a, b)$. If you can't step in any direction and immediately go uphill, you're at a relative maximum.

#### Definition of Relative Minimum

Similarly, a function $f(x, y)$ has a **relative minimum** at a point $(a, b)$ if $f(a, b) \le f(x, y)$ for all $(x, y)$ in some open disk centered at $(a, b)$. The value $f(a, b)$ is called a **relative minimum value**.

This is like standing in a valley. If you can't step in any direction and immediately go downhill, you're at a relative minimum.

#### The Role of Critical Points

Where do these relative maxima and minima occur? Just like in single-variable calculus, where extrema often occur at critical points (where the derivative is zero or undefined), the same principle applies here.

For a function $f(x, y)$, a point $(a, b)$ is a **critical point** if:
1.  Both first partial derivatives, $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$, are zero at $(a, b)$, i.e., $\frac{\partial f}{\partial x}(a, b) = 0$ and $\frac{\partial f}{\partial y}(a, b) = 0$. These are sometimes called **stationary points**.
2.  At least one of the first partial derivatives does not exist at $(a, b)$.

Why are these critical points so important? If a function $f(x, y)$ has a relative maximum or minimum at an interior point $(a, b)$ of its domain, and if the first partial derivatives exist at $(a, b)$, then $(a, b)$ *must* be a critical point. This is a fundamental theorem, analogous to Fermat's Theorem in single-variable calculus. So, our strategy will be to find these critical points first!

**Remember this:** The critical points are our candidates for relative maxima and minima. They are the "flat" spots on the graph of $z = f(x, y)$, where the tangent plane is horizontal.

#### Introducing the Second Derivative Test

Now, just finding critical points isn't enough. We need to determine if each critical point is a relative maximum, a relative minimum, or neither. For this, we turn to the **Second Derivative Test**. This test, as described in authors like Kreyszig's *Advanced Engineering Mathematics* and Stewart's *Essential Calculus*, uses the second partial derivatives to classify these critical points.

Let $(a, b)$ be a critical point of $f(x, y)$ where the first partial derivatives are zero. We need to consider the second partial derivatives:
*   $f_{xx}(x, y) = \frac{\partial^2 f}{\partial x^2}(x, y)$
*   $f_{yy}(x, y) = \frac{\partial^2 f}{\partial y^2}(x, y)$
*   $f_{xy}(x, y) = \frac{\partial^2 f}{\partial y \partial x}(x, y)$ (and $f_{yx}(x, y) = \frac{\partial^2 f}{\partial x \partial y}(x, y)$). For "nice" functions (functions with continuous second partial derivatives, which is very common in engineering and physics applications), Clairaut's Theorem tells us that $f_{xy} = f_{yx}$.

We define the **discriminant** (or Hessian determinant) $D(x, y)$ as:
$D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$

Now, we evaluate $D$ and $f_{xx}$ at the critical point $(a, b)$:

**The Second Derivative Test:**
Let $(a, b)$ be a critical point of $f(x, y)$ such that $f_x(a, b) = 0$ and $f_y(a, b) = 0$. Assume that the second partial derivatives are continuous in an open disk containing $(a, b)$.

*   **If $D(a, b) > 0$ and $f_{xx}(a, b) > 0$,** then $f$ has a **relative minimum** at $(a, b)$.
    *   *Think: Like a bowl shape, curving upwards.*
*   **If $D(a, b) > 0$ and $f_{xx}(a, b) < 0$,** then $f$ has a **relative maximum** at $(a, b)$.
    *   *Think: Like an upside-down bowl shape, curving downwards.*
*   **If $D(a, b) < 0$,** then $f$ has **neither** a relative maximum nor a relative minimum at $(a, b)$. This point is called a **saddle point**.
    *   *Think: Like a Pringles chip. If you are at the center and move along one direction, you go up, but if you move along another direction, you go down.*
*   **If $D(a, b) = 0$,** then the test is **inconclusive**. We can't determine the nature of the critical point from the second derivatives alone. We might need to use other methods, like examining the function's behavior directly or looking at the function's graph.

Let's try to connect this to our learning outcomes. CO1 requires us to *compute* derivatives and *apply* them to find maxima and minima. The Second Derivative Test is our primary tool for this classification, involving computation of first and second partial derivatives.

### Practical Example: Designing an Efficient Antenna Mount

Imagine you're designing a mount for a sensitive antenna. The cost of materials for the mount depends on its surface area, and you want to minimize this cost while ensuring structural integrity. Let's say the height of a particular section of the mount is given by a function $f(x, y)$, where $x$ and $y$ represent some design parameters, and the cost is roughly proportional to the local "curvature" or "slouch" of this surface.

Suppose the height is modeled by the function:
$f(x, y) = x^3 + y^3 - 3xy + 1$

We want to find the relative maxima and minima of this function. This is a classic problem that appears in many textbooks, including Bird's *Higher Engineering Mathematics*.

**Step 1: Find the First Partial Derivatives**

We need to find where the "slope" in the x-direction and y-direction is zero.
$\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(x^3 + y^3 - 3xy + 1) = 3x^2 - 3y$
$\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^3 + y^3 - 3xy + 1) = 3y^2 - 3x$

**Step 2: Find the Critical Points**

Set both partial derivatives to zero and solve the system of equations:
1.  $3x^2 - 3y = 0 \implies y = x^2$
2.  $3y^2 - 3x = 0 \implies y^2 = x$

Now, substitute the first equation into the second:
$(x^2)^2 = x$
$x^4 = x$
$x^4 - x = 0$
$x(x^3 - 1) = 0$

This gives us two possibilities for $x$:
*   $x = 0$
*   $x^3 - 1 = 0 \implies x^3 = 1 \implies x = 1$

Now, find the corresponding $y$ values using $y = x^2$:
*   If $x = 0$, then $y = 0^2 = 0$. So, $(0, 0)$ is a critical point.
*   If $x = 1$, then $y = 1^2 = 1$. So, $(1, 1)$ is another critical point.

We have found two critical points: $(0, 0)$ and $(1, 1)$.

**Step 3: Find the Second Partial Derivatives**

To classify these points, we need the second partial derivatives.
$f_{xx} = \frac{\partial}{\partial x}(3x^2 - 3y) = 6x$
$f_{yy} = \frac{\partial}{\partial y}(3y^2 - 3x) = 6y$
$f_{xy} = \frac{\partial}{\partial y}(3x^2 - 3y) = -3$

*(Just a quick check: $f_{yx} = \frac{\partial}{\partial x}(3y^2 - 3x) = -3$. They match, as expected!)*

**Step 4: Calculate the Discriminant D**

$D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2$
$D(x, y) = (6x)(6y) - (-3)^2$
$D(x, y) = 36xy - 9$

**Step 5: Apply the Second Derivative Test to Each Critical Point**

Let's analyze $(0, 0)$:
*   $f_{xx}(0, 0) = 6(0) = 0$
*   $D(0, 0) = 36(0)(0) - 9 = -9$

Since $D(0, 0) = -9 < 0$, the point $(0, 0)$ is a **saddle point**.
*   *Interpretation for our antenna mount:* At this design parameter $(0,0)$, the mount section doesn't offer a stable peak or valley cost. It's a point where costs could increase or decrease depending on how you adjust the design parameters around it. This is usually not a desirable operational point.

Now let's analyze $(1, 1)$:
*   $f_{xx}(1, 1) = 6(1) = 6$
*   $D(1, 1) = 36(1)(1) - 9 = 36 - 9 = 27$

Since $D(1, 1) = 27 > 0$ and $f_{xx}(1, 1) = 6 > 0$, the point $(1, 1)$ is a **relative minimum**.
*   *Interpretation for our antenna mount:* At design parameters $(1,1)$, the cost (related to surface area) is at a local minimum. This is a good candidate for an efficient design. We'd then evaluate the function at this point: $f(1, 1) = (1)^3 + (1)^3 - 3(1)(1) + 1 = 1 + 1 - 3 + 1 = 0$. So, the relative minimum value is 0.

**Summary for the Example:**
The function $f(x, y) = x^3 + y^3 - 3xy + 1$ has a saddle point at $(0, 0)$ and a relative minimum at $(1, 1)$ with a value of 0.

This example clearly shows how we use partial derivatives and the second derivative test to find and classify extrema, directly addressing CO1.

### What If the Test is Inconclusive?

It's important to remember that the Second Derivative Test can be inconclusive if $D(a, b) = 0$. This is where things can get a bit trickier, and we might need to resort to other methods. For instance, we could:

*   **Examine the function directly:** Try to rewrite the function or analyze its behavior in the neighborhood of the critical point. Sometimes, you can factor it or complete the square.
*   **Consider the geometry:** Think about what the graph of the function looks like. Is it a flat plane, a curved surface, or something more complex?
*   **Use Taylor Series Expansion:** For a more rigorous approach, one can use the Taylor series expansion of the function around the critical point. The nature of the higher-order terms will determine the behavior. This is a more advanced topic, typically covered in more advanced calculus or analysis courses, but it underlies why the second derivative test works and what happens when it fails. (Refer to advanced texts like Kreyszig for deeper theoretical underpinnings).

**Example of Inconclusive Test:**
Consider $f(x, y) = x^4 + y^4$.
*   $f_x = 4x^3$, $f_y = 4y^3$.
*   Critical point is $(0, 0)$ where both are zero.
*   $f_{xx} = 12x^2$, $f_{yy} = 12y^2$, $f_{xy} = 0$.
*   $D(x, y) = (12x^2)(12y^2) - (0)^2 = 144x^2y^2$.
*   At $(0, 0)$, $D(0, 0) = 0$. The test is inconclusive.
However, we know that $f(x, y) = x^4 + y^4 \ge 0$ for all $(x, y)$, and $f(0, 0) = 0$. Thus, $(0, 0)$ is a relative minimum (and in fact, an absolute minimum). This shows that $D=0$ doesn't *always* mean inconclusive in practice; you still need to use your understanding of the function.

### Saddle Points: The "Horseshoe" Analogy

Saddle points are fascinating. They are critical points where the function doesn't have a local maximum or minimum. The graph locally looks like a saddle for a horse.

Imagine sitting on a horse's saddle:
*   If you move forward or backward (along the horse's spine), you are in a valley (a relative minimum).
*   If you move left or right (across the horse's back), you are on a peak (a relative maximum).

So, at the center of the saddle, you are simultaneously at a local high in one direction and a local low in another. This is precisely what happens at a saddle point of $f(x, y)$ when $D(a, b) < 0$.

**Connection to CO1:** Identifying saddle points is crucial because they are critical points but not extrema. Misclassifying a saddle point as a minimum or maximum could lead to incorrect design decisions in engineering.

### Visualizing the Concepts

It's really helpful to visualize these functions. You can think of the graph of $z = f(x, y)$ as a surface in 3D space.
*   **Relative maximum:** A peak of a mountain.
*   **Relative minimum:** The bottom of a valley.
*   **Saddle point:** The point in the middle of a horse's saddle or a mountain pass.

Many graphing calculators or software (like MATLAB, Python with libraries like Matplotlib) can plot these surfaces, allowing you to visually confirm your analytical findings. This ties into the understanding aspect of CO1.

### Handling Functions with Undefined Derivatives

What if one of the partial derivatives doesn't exist at a critical point? These points are also candidates for extrema. A classic example is $f(x, y) = \sqrt{x^2 + y^2}$ (the distance from the origin).
*   $f(x, y) = (x^2 + y^2)^{1/2}$
*   $f_x = \frac{1}{2}(x^2 + y^2)^{-1/2} (2x) = \frac{x}{\sqrt{x^2 + y^2}}$
*   $f_y = \frac{y}{\sqrt{x^2 + y^2}}$

At $(0, 0)$, both $f_x$ and $f_y$ are undefined. However, we know that $f(0, 0) = 0$, and $f(x, y) = \sqrt{x^2 + y^2} \ge 0$ for all $(x, y)$. So, $(0,0)$ is a relative minimum (and indeed an absolute minimum). This is like the tip of a cone, where the surface is smooth everywhere else but has a sharp point at the origin.

**Key Takeaway:** Always check for points where partial derivatives are undefined, in addition to points where they are zero.

### Summary of the Process

To find and classify relative maxima and minima of a function $f(x, y)$:

1.  **Find the domain of $f$.**
2.  **Compute the first partial derivatives:** $f_x$ and $f_y$.
3.  **Find the critical points:** Solve the system of equations $f_x = 0$ and $f_y = 0$. Also, identify any points where $f_x$ or $f_y$ (or both) do not exist.
4.  **Compute the second partial derivatives:** $f_{xx}$, $f_{yy}$, and $f_{xy}$.
5.  **Calculate the discriminant:** $D(x, y) = f_{xx} f_{yy} - (f_{xy})^2$.
6.  **Apply the Second Derivative Test:** Evaluate $D$ and $f_{xx}$ at each critical point $(a, b)$:
    *   $D > 0$ and $f_{xx} > 0 \implies$ relative minimum at $(a, b)$.
    *   $D > 0$ and $f_{xx} < 0 \implies$ relative maximum at $(a, b)$.
    *   $D < 0 \implies$ saddle point at $(a, b)$.
    *   $D = 0 \implies$ test inconclusive; further analysis needed.
7.  **For points where derivatives are undefined:** Analyze the function's behavior directly around these points.

This structured approach is essential for tackling problems related to **CO1**.

### Connecting to Other Course Outcomes

While this topic focuses on **CO1**, understanding these concepts lays the groundwork for other outcomes. For example:
*   **CO2 (Multiple Integrals):** Knowing where the extrema of a function occur can be useful in setting up integration limits for calculating volumes or areas related to that function.
*   **CO3 & CO4 (Vector Calculus):** The concept of gradients (which are related to partial derivatives) is fundamental to vector calculus. Understanding how gradients behave at extrema connects to line and surface integrals.

### Final Thoughts and Exam Tips

*   **Be meticulous with differentiation:** Mistakes in partial derivatives are common and will cascade through the entire process. Double-check your calculations!
*   **Don't forget points where derivatives are undefined:** This is a frequent trap in exam questions.
*   **Understand the meaning of $D$ and $f_{xx}$:** It's not just about plugging numbers. Know *why* these values tell you about the shape of the function's graph.
*   **Practice diverse examples:** Problems can range from simple polynomials to functions involving exponentials, logarithms, and trigonometric terms. Refer to your textbooks (Anton, Thomas, Stewart, Bird, Kreyszig, Ramana) for a variety of examples.
*   **Recognize special cases:** Functions like $z=x^2+y^2$ (paraboloid) or $z=xy$ (saddle) are good to visualize.

This detailed look at relative maxima and minima should equip you well for understanding and solving problems in this area, directly contributing to your success in this module and the broader course objectives.

---

## Sample Questions with Answers

**1. Conceptual Question:**
What is the significance of a critical point for a function of two variables, and how does it relate to relative extrema?

**Answer:**
A critical point $(a, b)$ of a function $f(x, y)$ is a point where either both first partial derivatives are zero ($f_x(a, b) = 0$ and $f_y(a, b) = 0$) or at least one of them does not exist. The significance lies in the fact that if a function has a relative maximum or relative minimum at an interior point of its domain, and if the partial derivatives exist at that point, then the point *must* be a critical point. Therefore, critical points are the candidates for relative extrema.

**2. Application Question:**
Find the relative maxima, relative minima, and saddle points of the function:
$f(x, y) = 2x^2 + 2y^2 + 2xy - x^4 - y^4$

**Solution:**

**Step 1: Find First Partial Derivatives**
$f_x = 4x + 2y - 4x^3$
$f_y = 4y + 2x - 4y^3$

**Step 2: Find Critical Points**
Set $f_x = 0$ and $f_y = 0$:
(1) $4x + 2y - 4x^3 = 0 \implies 2x + y - 2x^3 = 0$
(2) $4y + 2x - 4y^3 = 0 \implies 2y + x - 2y^3 = 0$

Subtract (2) from (1):
$(2x + y - 2x^3) - (2y + x - 2y^3) = 0$
$x - y - 2x^3 + 2y^3 = 0$
$x - y + 2(y^3 - x^3) = 0$
$x - y - 2(x^3 - y^3) = 0$
$(x - y) - 2(x - y)(x^2 + xy + y^2) = 0$
$(x - y) [1 - 2(x^2 + xy + y^2)] = 0$

This gives two possibilities:
*   **Case A:** $x - y = 0 \implies y = x$.
    Substitute $y=x$ into equation (1):
    $2x + x - 2x^3 = 0$
    $3x - 2x^3 = 0$
    $x(3 - 2x^2) = 0$
    So, $x = 0$ or $3 - 2x^2 = 0 \implies x^2 = \frac{3}{2} \implies x = \pm \sqrt{\frac{3}{2}}$.
    If $x=0$, then $y=0$. Critical point: $(0, 0)$.
    If $x = \sqrt{\frac{3}{2}}$, then $y = \sqrt{\frac{3}{2}}$. Critical point: $(\sqrt{\frac{3}{2}}, \sqrt{\frac{3}{2}})$.
    If $x = -\sqrt{\frac{3}{2}}$, then $y = -\sqrt{\frac{3}{2}}$. Critical point: $(-\sqrt{\frac{3}{2}}, -\sqrt{\frac{3}{2}})$.

*   **Case B:** $1 - 2(x^2 + xy + y^2) = 0 \implies x^2 + xy + y^2 = \frac{1}{2}$.
    This case requires further analysis and often leads to points where $f_x=f_y=0$ as well. However, if we consider the symmetry of the original equations, if $x$ and $y$ are swapped, the equations remain the same. This suggests that if $(a,b)$ is a solution, $(b,a)$ is also a solution.
    Let's test the points from Case A in the original equations to ensure they are valid critical points. For example, at $(\sqrt{3/2}, \sqrt{3/2})$:
    $f_x = 4\sqrt{3/2} + 2\sqrt{3/2} - 4(\sqrt{3/2})^3 = 6\sqrt{3/2} - 4(3/2)\sqrt{3/2} = 6\sqrt{3/2} - 6\sqrt{3/2} = 0$.
    $f_y$ will also be 0 due to symmetry.

The critical points are $(0, 0)$, $(\sqrt{\frac{3}{2}}, \sqrt{\frac{3}{2}})$, and $(-\sqrt{\frac{3}{2}}, -\sqrt{\frac{3}{2}})$. The partial derivatives exist everywhere, so there are no critical points from undefined derivatives.

**Step 3: Find Second Partial Derivatives**
$f_{xx} = 4 - 12x^2$
$f_{yy} = 4 - 12y^2$
$f_{xy} = 2$

**Step 4: Calculate the Discriminant**
$D(x, y) = f_{xx} f_{yy} - (f_{xy})^2$
$D(x, y) = (4 - 12x^2)(4 - 12y^2) - (2)^2$
$D(x, y) = (4 - 12x^2)(4 - 12y^2) - 4$

**Step 5: Apply the Second Derivative Test**

*   **At (0, 0):**
    $f_{xx}(0, 0) = 4 - 12(0)^2 = 4$
    $D(0, 0) = (4)(4) - 4 = 16 - 4 = 12$
    Since $D(0, 0) = 12 > 0$ and $f_{xx}(0, 0) = 4 > 0$, the point $(0, 0)$ is a **relative minimum**.
    $f(0, 0) = 0$.

*   **At $(\sqrt{\frac{3}{2}}, \sqrt{\frac{3}{2}})$:**
    Let $a = \sqrt{\frac{3}{2}}$, so $a^2 = \frac{3}{2}$.
    $f_{xx}(a, a) = 4 - 12a^2 = 4 - 12(\frac{3}{2}) = 4 - 18 = -14$
    $D(a, a) = (4 - 12a^2)(4 - 12a^2) - 4 = (-14)(-14) - 4 = 196 - 4 = 192$
    Since $D(\sqrt{\frac{3}{2}}, \sqrt{\frac{3}{2}}) = 192 > 0$ and $f_{xx}(\sqrt{\frac{3}{2}}, \sqrt{\frac{3}{2}}) = -14 < 0$, the point $(\sqrt{\frac{3}{2}}, \sqrt{\frac{3}{2}})$ is a **relative maximum**.
    $f(\sqrt{\frac{3}{2}}, \sqrt{\frac{3}{2}}) = 2(\frac{3}{2}) + 2(\frac{3}{2}) + 2(\frac{3}{2}) - (\frac{3}{2})^2 - (\frac{3}{2})^2 = 3 + 3 + 3 - \frac{9}{4} - \frac{9}{4} = 9 - \frac{18}{4} = 9 - \frac{9}{2} = \frac{9}{2}$.

*   **At $(-\sqrt{\frac{3}{2}}, -\sqrt{\frac{3}{2}})$:**
    Let $b = -\sqrt{\frac{3}{2}}$, so $b^2 = \frac{3}{2}$.
    $f_{xx}(b, b) = 4 - 12b^2 = 4 - 12(\frac{3}{2}) = 4 - 18 = -14$
    $D(b, b) = (4 - 12b^2)(4 - 12b^2) - 4 = (-14)(-14) - 4 = 196 - 4 = 192$
    Since $D(-\sqrt{\frac{3}{2}}, -\sqrt{\frac{3}{2}}) = 192 > 0$ and $f_{xx}(-\sqrt{\frac{3}{2}}, -\sqrt{\frac{3}{2}}) = -14 < 0$, the point $(-\sqrt{\frac{3}{2}}, -\sqrt{\frac{3}{2}})$ is also a **relative maximum**.
    $f(-\sqrt{\frac{3}{2}}, -\sqrt{\frac{3}{2}}) = 2(\frac{3}{2}) + 2(\frac{3}{2}) + 2(\frac{3}{2}) - (\frac{3}{2})^2 - (\frac{3}{2})^2 = \frac{9}{2}$.

**Conclusion:**
*   Relative minimum at $(0, 0)$ with value $f(0, 0) = 0$.
*   Relative maxima at $(\sqrt{\frac{3}{2}}, \sqrt{\frac{3}{2}})$ and $(-\sqrt{\frac{3}{2}}, -\sqrt{\frac{3}{2}})$ with value $f = \frac{9}{2}$.
*   There are no saddle points for this function.

**3. Pitfall Question:**
Consider the function $f(x, y) = x^3$. Find the critical points and attempt to classify them using the Second Derivative Test. What is the conclusion, and why might this be a useful example?

**Answer:**
**Step 1: First Partial Derivatives**
$f_x = 3x^2$
$f_y = 0$

**Step 2: Critical Points**
Set $f_x = 0 \implies 3x^2 = 0 \implies x = 0$.
Set $f_y = 0 \implies 0 = 0$.
The second partial derivative $f_y$ is always 0, and $f_x$ is 0 only when $x=0$. The partial derivatives exist everywhere. So, the critical points are of the form $(0, y)$ for any real number $y$.

**Step 3: Second Partial Derivatives**
$f_{xx} = 6x$
$f_{yy} = 0$
$f_{xy} = 0$

**Step 4: Discriminant**
$D(x, y) = f_{xx} f_{yy} - (f_{xy})^2 = (6x)(0) - (0)^2 = 0$.

**Step 5: Apply the Second Derivative Test**
For any critical point $(0, y)$:
$D(0, y) = 0$.
The Second Derivative Test is **inconclusive** for all critical points $(0, y)$.

**Conclusion and Usefulness:**
The Second Derivative Test fails here. However, we can analyze the function directly. $f(x, y) = x^3$. The value of $y$ does not affect the function's value. For any fixed $y$, the function behaves like $g(x) = x^3$, which has a point of inflection at $x=0$, not a local extremum. For any critical point $(0, y)$, if we change $x$ slightly, $f(x, y) = x^3$ will change sign. For example, at $(0, y_0)$, $f(0, y_0) = 0$. If we move in the positive $x$ direction, $f(x, y_0) = x^3 > 0$. If we move in the negative $x$ direction, $f(x, y_0) = x^3 < 0$. Thus, these points $(0, y)$ are **points of inflection**, not relative extrema.

This example is crucial because it highlights the limitation of the Second Derivative Test. When $D=0$, we must investigate the function's behavior directly, often by examining its graph or Taylor expansion around the critical point. It also demonstrates that a function can have critical points that are neither maxima, minima, nor saddle points, but rather points of inflection in higher dimensions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
