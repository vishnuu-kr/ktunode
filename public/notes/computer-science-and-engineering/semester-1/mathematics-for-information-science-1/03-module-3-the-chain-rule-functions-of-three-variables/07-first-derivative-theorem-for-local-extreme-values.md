---
title: "First derivative theorem for local extreme values"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 3: The Chain Rule: Functions of three Variables"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bd9"
status: "completed"
scrapedAt: "2026-05-20T16:40:23.388Z"
---
## MATHEMATICS FOR INFORMATION SCIENCE – 1

### Module 3: The Chain Rule: Functions of Three Variables

#### Topic: First Derivative Theorem for Local Extreme Values

Welcome, everyone! Today, we're diving into a fundamental concept that’s crucial for understanding how functions behave, especially as we deal with more complex, real-world scenarios. We’re going to explore the **First Derivative Theorem for Local Extreme Values**. This theorem, in essence, gives us a powerful tool to find those "peak" and "valley" points of a function, which are incredibly important in many areas of information science, from optimizing algorithms to analyzing data trends.

Think about it: when you’re trying to find the best possible outcome – the most efficient route, the lowest error rate, the highest profit – you’re often looking for extreme values. This theorem is your starting point for finding them.

**(Connecting to Course Outcomes)**

Before we get into the nitty-gritty, let's see how this connects to what we're learning in this course.

*   **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions.** This topic is *directly* about finding maxima and minima. Understanding the first derivative theorem is the gateway to solving these problems for functions of multiple variables, including our focus on functions of three variables in this module. It builds upon our understanding of partial derivatives and lays the groundwork for more advanced optimization techniques.
*   **CO1: Apply various concepts in calculus to linearize functions and to analyze concavity.** While this theorem primarily focuses on *where* the extremes occur (using first derivatives), the *concept* of finding critical points is fundamental to analyzing the shape and behavior of functions, which in turn relates to linearization and concavity later on.

So, as we progress, keep these connections in mind. We're building a toolkit, and this theorem is a key piece.

### Understanding Local Extreme Values: The Intuition

Let's start with some intuition. Imagine you're hiking in a mountain range represented by a continuous, differentiable function $f(x, y, z)$ over a certain domain. We're interested in finding the highest peaks (local maxima) and the lowest valleys (local minima) in that landscape.

*   **Local Maximum:** This is a point where the function's value is greater than or equal to the values at all *nearby* points. Think of the summit of a small hill. If you're at the very top, any step you take in any direction leads you downhill.
*   **Local Minimum:** This is a point where the function's value is less than or equal to the values at all *nearby* points. This is like the bottom of a small bowl. If you're at the very bottom, any step you take in any direction leads you uphill.

Crucially, we’re talking about *local* extremes here. A point might be the highest peak in its immediate vicinity, but there could be a much taller mountain range elsewhere in the domain.

### Critical Points: Where the Magic Happens

So, how do we *find* these potential peaks and valleys mathematically? This is where the first derivative comes in, and it's a direct extension of what you learned for single-variable calculus.

In single-variable calculus, if $f(x)$ has a local maximum or minimum at $x=c$ and $f'(c)$ exists, then $f'(c) = 0$. This is because at a peak or valley, the tangent line is perfectly horizontal.

For functions of multiple variables, we extend this idea using **partial derivatives**.

**Definition: Critical Point**
A point $(x_0, y_0, z_0)$ in the domain of a function $f(x, y, z)$ is called a **critical point** if one of the following is true:

1.  All first partial derivatives are zero at $(x_0, y_0, z_0)$:
    $\frac{\partial f}{\partial x}(x_0, y_0, z_0) = 0$, $\frac{\partial f}{\partial y}(x_0, y_0, z_0) = 0$, and $\frac{\partial f}{\partial z}(x_0, y_0, z_0) = 0$.
2.  At least one of the first partial derivatives does not exist at $(x_0, y_0, z_0)$.

Why are these points so special? Let's think about our mountain analogy again. If we're at a smooth peak or valley, the "slope" in *every* direction must be zero. The partial derivatives, $\frac{\partial f}{\partial x}$, $\frac{\partial f}{\partial y}$, and $\frac{\partial f}{\partial z}$, tell us the slope in the direction of the x, y, and z axes, respectively. If all of these are zero, it means the "ground" is flat at that point – a potential extreme!

The second condition, where a derivative doesn't exist, is also important. Think of a sharp peak or a cusp. At such points, the function is not "smooth," and its derivative might not be defined. These are also candidates for local extrema.

**This is a crucial takeaway: Local extrema for differentiable functions can *only* occur at critical points.** This is the heart of the First Derivative Theorem.

### The First Derivative Theorem for Local Extreme Values (Statement)

Now, let's formally state the theorem, drawing from concepts often presented in texts like Thomas' Calculus and Kreyszig's Advanced Engineering Mathematics.

**Theorem:**
Suppose a function $f(x, y, z)$ has a local maximum or a local minimum value at a point $(x_0, y_0, z_0)$. If all the first partial derivatives of $f$ exist at $(x_0, y_0, z_0)$, then:
$$ \frac{\partial f}{\partial x}(x_0, y_0, z_0) = 0 $$
$$ \frac{\partial f}{\partial y}(x_0, y_0, z_0) = 0 $$
$$ \frac{\partial f}{\partial z}(x_0, y_0, z_0) = 0 $$

**In simpler terms:** If you find a "smooth" point (where derivatives exist) that is a local peak or valley, then the gradient of the function at that point *must* be the zero vector.

Let's re-emphasize this: **If $f$ has a local extreme at $(x_0, y_0, z_0)$ and $f$ is differentiable there, then $\nabla f(x_0, y_0, z_0) = \mathbf{0}$.**

Remember, the gradient $\nabla f = \langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \rangle$ points in the direction of the steepest ascent. If you're at a peak, there's no direction of ascent, so the gradient must be zero.

### Finding Local Extrema: A Practical Procedure

So, how do we actually *use* this theorem to find local maxima and minima? It gives us a systematic approach.

**Steps to Find Local Extrema:**

1.  **Find the critical points:**
    *   Calculate the first partial derivatives: $\frac{\partial f}{\partial x}$, $\frac{\partial f}{\partial y}$, $\frac{\partial f}{\partial z}$.
    *   Set all these partial derivatives equal to zero and solve the resulting system of equations for $(x, y, z)$. These are your critical points where the gradient is zero.
    *   Also, identify any points where one or more partial derivatives do not exist. These are also critical points.

2.  **Evaluate the function at each critical point.**

3.  **Determine the nature of each critical point (local max, local min, or neither).** This is where we'll need more tools, specifically the **Second Derivative Test** (which we'll cover soon). For now, we just need to find the candidates.

**(Exam Tip!)** Many exam problems will ask you to *find the critical points* or *find the candidates for local extrema*. This means you stop after step 1! Don't forget to check for points where derivatives don't exist, as these can sometimes be overlooked.

### Example: Let's Get Our Hands Dirty!

Let's work through an example. Imagine we're designing a rectangular box with no top, made from a specific amount of material. We want to find the dimensions that maximize the volume. This is a classic optimization problem.

Suppose the volume of the box is given by the function:
$V(x, y, z) = xyz$, where $x$, $y$, and $z$ are the length, width, and height of the box, respectively.

**(Wait, this is a function of three variables, but is it constrained? Yes, usually in such problems, there's a constraint on the surface area. However, for *this specific theorem*, we're looking at finding local extrema of a *given* function, without necessarily imposing external constraints yet. We’ll tackle constrained optimization later. For now, let's consider a simpler function to illustrate finding critical points.)**

Let's use a simpler function to find critical points:
Consider the function $f(x, y, z) = x^2 + y^2 + z^2 - 4x + 6y + 2z + 10$.

This function represents a kind of "energy landscape" or a cost function. We want to find the point $(x, y, z)$ where this energy/cost is minimized.

**Step 1: Find the partial derivatives and set them to zero.**

*   $\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(x^2 + y^2 + z^2 - 4x + 6y + 2z + 10) = 2x - 4$
*   $\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^2 + y^2 + z^2 - 4x + 6y + 2z + 10) = 2y + 6$
*   $\frac{\partial f}{\partial z} = \frac{\partial}{\partial z}(x^2 + y^2 + z^2 - 4x + 6y + 2z + 10) = 2z + 2$

Now, set each of these to zero:

*   $2x - 4 = 0 \implies 2x = 4 \implies x = 2$
*   $2y + 6 = 0 \implies 2y = -6 \implies y = -3$
*   $2z + 2 = 0 \implies 2z = -2 \implies z = -1$

**Step 2: Identify the critical point.**

The only critical point where all partial derivatives are zero is $(2, -3, -1)$.

**Are there any points where the partial derivatives don't exist?**
In this case, the partial derivatives $2x-4$, $2y+6$, and $2z+2$ are polynomials, which are defined for all real numbers $x, y, z$. So, there are no critical points of the second type (where derivatives don't exist).

**Therefore, the only critical point for $f(x, y, z)$ is $(2, -3, -1)$.**

**(What does this point signify?)**
This point $(2, -3, -1)$ is our *candidate* for a local maximum or minimum. Without the Second Derivative Test, we wouldn't know for sure if it's a peak, a valley, or a saddle point (which we'll discuss later).

Let's quickly evaluate the function at this point:
$f(2, -3, -1) = (2)^2 + (-3)^2 + (-1)^2 - 4(2) + 6(-3) + 2(-1) + 10$
$f(2, -3, -1) = 4 + 9 + 1 - 8 - 18 - 2 + 10$
$f(2, -3, -1) = 14 - 8 - 18 - 2 + 10 = 6 - 18 - 2 + 10 = -12 - 2 + 10 = -14 + 10 = -4$

So, at $(2, -3, -1)$, the function value is $-4$. This is our potential minimum value.

**(Connecting to CO3 again):** We've successfully identified a candidate for a minimum value of a multivariable function by using its partial derivatives, which are foundational to solving maxima and minima problems.

### Why are Critical Points Important? A Deeper Look

The theorem tells us *where* to look. But why is this true? Let's consider a function $f(x, y, z)$ with a local maximum at $(x_0, y_0, z_0)$, and assume all partial derivatives exist.

Imagine we fix $y$ and $z$ to their values at the critical point, $y=y_0$ and $z=z_0$. Now, $f(x, y_0, z_0)$ is effectively a function of a single variable, let's call it $g(x) = f(x, y_0, z_0)$. Since $f$ has a local maximum at $(x_0, y_0, z_0)$, this function $g(x)$ must have a local maximum at $x=x_0$. As we know from single-variable calculus, if $g'(x_0)$ exists, then $g'(x_0) = 0$.
The derivative of $g(x)$ is precisely $\frac{\partial f}{\partial x}(x_0, y_0, z_0)$. So, $\frac{\partial f}{\partial x}(x_0, y_0, z_0) = 0$.

We can apply the same logic by fixing $x$ and $z$ to $x_0$ and $z_0$ respectively, and considering $f(x_0, y, z_0)$ as a function of $y$. This would show that $\frac{\partial f}{\partial y}(x_0, y_0, z_0) = 0$.
Similarly, by fixing $x$ and $y$, we find $\frac{\partial f}{\partial z}(x_0, y_0, z_0) = 0$.

This line of reasoning, often found in rigorous calculus texts like those by Anton or Larson, confirms why all partial derivatives must be zero at a smooth local extremum.

### What if Derivatives Don't Exist?

The theorem is conditional on the existence of partial derivatives. What if they don't? Consider a function like $f(x, y, z) = \sqrt{x^2 + y^2 + z^2}$. This function has a minimum value of 0 at $(0,0,0)$. However, its partial derivatives are:

$\frac{\partial f}{\partial x} = \frac{x}{\sqrt{x^2+y^2+z^2}}$
$\frac{\partial f}{\partial y} = \frac{y}{\sqrt{x^2+y^2+z^2}}$
$\frac{\partial f}{\partial z} = \frac{z}{\sqrt{x^2+y^2+z^2}}$

At $(0,0,0)$, all these partial derivatives are undefined (division by zero). So, $(0,0,0)$ is a critical point of the second type. This is analogous to $f(x) = |x|$ in single-variable calculus, which has a minimum at $x=0$ but $f'(0)$ does not exist.

This highlights why it's crucial to check for points where derivatives are undefined. These are often "sharp" points in the function's landscape, which can indeed be local extrema.

### Summary and Key Takeaways

Let's recap the core ideas of the First Derivative Theorem for Local Extreme Values:

*   **Local Extrema:** We're looking for points that are "high" or "low" in their immediate neighborhood.
*   **Critical Points:** These are the *only* places where local extrema can occur for functions with existing partial derivatives. A point is critical if:
    *   All partial derivatives are zero.
    *   At least one partial derivative does not exist.
*   **The Theorem:** If $f$ has a local maximum or minimum at $(x_0, y_0, z_0)$ and $f$ is differentiable there, then $\nabla f(x_0, y_0, z_0) = \mathbf{0}$.
*   **Practical Application:** To find candidates for local extrema, we must find all critical points by solving $\nabla f = \mathbf{0}$ and identifying points where $\nabla f$ is undefined.

**(Remember this!)** The First Derivative Theorem doesn't *guarantee* an extremum at a critical point; it only tells us that an extremum (if it exists and the function is smooth) *must* be at a critical point. You need further tests (like the Second Derivative Test) to classify these points.

This theorem is fundamental to optimization problems that appear in various forms in information science, such as finding the optimal parameters for a machine learning model or determining the most efficient configuration of a system.

---

### Sample Questions and Answers

**Conceptual Question 1:**
Explain why a function must have a gradient of zero at a point where it has a local maximum and all partial derivatives exist.

**Answer:**
If a function $f(x, y, z)$ has a local maximum at a point $(x_0, y_0, z_0)$ and all its partial derivatives exist, we can consider the function by keeping two variables constant. For example, consider $g(x) = f(x, y_0, z_0)$. Since $f$ has a local maximum at $(x_0, y_0, z_0)$, $g(x)$ has a local maximum at $x=x_0$. For differentiable functions, a local maximum occurs where the derivative is zero. The derivative of $g(x)$ is $\frac{\partial f}{\partial x}(x_0, y_0, z_0)$. Therefore, $\frac{\partial f}{\partial x}(x_0, y_0, z_0) = 0$. The same logic applies to the partial derivatives with respect to $y$ and $z$, leading to $\frac{\partial f}{\partial y}(x_0, y_0, z_0) = 0$ and $\frac{\partial f}{\partial z}(x_0, y_0, z_0) = 0$. Consequently, the gradient, $\nabla f(x_0, y_0, z_0) = \langle 0, 0, 0 \rangle$, must be the zero vector.

**Conceptual Question 2:**
What are the two conditions that define a critical point for a function of three variables? Give an example of a function that has a critical point of the second type.

**Answer:**
A point $(x_0, y_0, z_0)$ is a critical point for $f(x, y, z)$ if:
1.  All first partial derivatives of $f$ are zero at $(x_0, y_0, z_0)$: $\frac{\partial f}{\partial x}(x_0, y_0, z_0) = 0$, $\frac{\partial f}{\partial y}(x_0, y_0, z_0) = 0$, and $\frac{\partial f}{\partial z}(x_0, y_0, z_0) = 0$.
2.  At least one of the first partial derivatives does not exist at $(x_0, y_0, z_0)$.

**Example of a critical point of the second type:**
Consider the function $f(x, y, z) = \sqrt{x^2 + y^2 + z^2}$. The partial derivatives are $\frac{\partial f}{\partial x} = \frac{x}{\sqrt{x^2+y^2+z^2}}$, $\frac{\partial f}{\partial y} = \frac{y}{\sqrt{x^2+y^2+z^2}}$, and $\frac{\partial f}{\partial z} = \frac{z}{\sqrt{x^2+y^2+z^2}}$. At the point $(0, 0, 0)$, all these partial derivatives are undefined due to division by zero. The function $f(x, y, z)$ has a local minimum at $(0,0,0)$ (the value is 0), making $(0,0,0)$ a critical point of the second type.

**Exam-Oriented Question 1:**
Find all critical points of the function $f(x, y, z) = x^3 + y^3 + z^3 - 3xyz$.

**Solution:**
To find the critical points, we need to calculate the first partial derivatives and set them equal to zero.

1.  Calculate partial derivatives:
    $\frac{\partial f}{\partial x} = 3x^2 - 3yz$
    $\frac{\partial f}{\partial y} = 3y^2 - 3xz$
    $\frac{\partial f}{\partial z} = 3z^2 - 3xy$

2.  Set partial derivatives to zero:
    (1) $3x^2 - 3yz = 0 \implies x^2 = yz$
    (2) $3y^2 - 3xz = 0 \implies y^2 = xz$
    (3) $3z^2 - 3xy = 0 \implies z^2 = xy$

3.  Solve the system of equations:
    From (1), if $x=0$, then $yz=0$. This means either $y=0$ or $z=0$.
    *   If $x=0$ and $y=0$: From (3), $z^2 = 0 \cdot 0 = 0 \implies z=0$. So, $(0, 0, 0)$ is a critical point.
    *   If $x=0$ and $z=0$: From (2), $y^2 = 0 \cdot 0 = 0 \implies y=0$. Again, $(0, 0, 0)$.

    Now, assume $x, y, z$ are non-zero.
    From $x^2 = yz$ and $y^2 = xz$:
    Divide $x^2$ by $y^2$: $\frac{x^2}{y^2} = \frac{yz}{xz} = \frac{y}{x}$ (assuming $z \neq 0$)
    $\frac{x^2}{y^2} = \frac{y}{x} \implies x^3 = y^3 \implies x=y$ (since we are dealing with real numbers).

    Similarly, from $y^2 = xz$ and $z^2 = xy$:
    $\frac{y^2}{z^2} = \frac{xz}{xy} = \frac{z}{y}$ (assuming $x \neq 0$)
    $\frac{y^2}{z^2} = \frac{z}{y} \implies y^3 = z^3 \implies y=z$.

    So, if the partial derivatives are non-zero, we must have $x=y=z$.
    Substitute $y=x$ and $z=x$ into equation (1):
    $x^2 = x \cdot x \implies x^2 = x^2$. This equation is always true, meaning any point where $x=y=z$ is a candidate.

    Also, check if partial derivatives exist everywhere. These partial derivatives are polynomials, so they exist for all $x, y, z$. Thus, we only have critical points where the gradient is zero.

    Therefore, the critical points are $(0, 0, 0)$ and any point $(a, a, a)$ for any real number $a$.

**Exam-Oriented Question 2:**
Find all critical points of the function $f(x, y, z) = e^{-(x^2+y^2+z^2)}$.

**Solution:**
1.  Calculate partial derivatives:
    Using the chain rule, $\frac{\partial f}{\partial x} = e^{-(x^2+y^2+z^2)} \cdot (-2x) = -2x e^{-(x^2+y^2+z^2)}$.
    Similarly, $\frac{\partial f}{\partial y} = -2y e^{-(x^2+y^2+z^2)}$ and $\frac{\partial f}{\partial z} = -2z e^{-(x^2+y^2+z^2)}$.

2.  Set partial derivatives to zero:
    $-2x e^{-(x^2+y^2+z^2)} = 0$
    $-2y e^{-(x^2+y^2+z^2)} = 0$
    $-2z e^{-(x^2+y^2+z^2)} = 0$

3.  Solve the system:
    Since $e^{-(x^2+y^2+z^2)}$ is always positive for any real values of $x, y, z$, for the product to be zero, the other factor must be zero.
    *   From $-2x e^{-(x^2+y^2+z^2)} = 0$, we must have $-2x = 0$, which implies $x = 0$.
    *   From $-2y e^{-(x^2+y^2+z^2)} = 0$, we must have $-2y = 0$, which implies $y = 0$.
    *   From $-2z e^{-(x^2+y^2+z^2)} = 0$, we must have $-2z = 0$, which implies $z = 0$.

4.  Check for points where derivatives don't exist:
    The partial derivatives are products of a polynomial and an exponential function, both of which are defined for all real numbers. Thus, the partial derivatives exist everywhere.

Therefore, the only critical point is $(0, 0, 0)$. The function $f(x, y, z) = e^{-(x^2+y^2+z^2)}$ has a maximum at $(0,0,0)$, with $f(0,0,0) = e^0 = 1$.
