---
title: "Higher order partial derivatives"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 1: Limits and continuity"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912cc5"
status: "completed"
scrapedAt: "2026-05-20T18:36:48.910Z"
---
# Mathematics for Electrical Science and Physical Science – 2: Module 1 - Limits and Continuity

## Topic: Higher Order Partial Derivatives

Welcome, everyone! Today, we're diving into a fascinating extension of partial derivatives: **Higher Order Partial Derivatives**. We've already gotten comfortable with finding the rate of change of a multivariable function with respect to one variable while holding others constant. Now, we'll explore what happens when we take this process *again*, and perhaps even again, and again! This concept is crucial for understanding the curvature of surfaces, analyzing error propagation, and solving various optimization problems that are fundamental to both electrical and physical sciences.

You'll find this topic thoroughly discussed in **Calculus by Anton, Biven, and Davis (12th ed.)** and **Thomas' Calculus (15th ed.)**, which are our primary texts. We'll also draw insights from other excellent references like Kreyszig and Bird's engineering mathematics books.

### 1. Revisiting First-Order Partial Derivatives: A Quick Refresher

Before we jump into the "higher" stuff, let's quickly remind ourselves what a first-order partial derivative is. Imagine a function $f(x, y)$, which describes, say, the temperature on a metal plate. If you're standing at a point $(x_0, y_0)$, you might be interested in how the temperature changes as you move *only* in the x-direction (keeping y constant). That's $f_x(x_0, y_0)$ or $\frac{\partial f}{\partial x}(x_0, y_0)$. Similarly, if you move *only* in the y-direction, you're looking at $f_y(x_0, y_0)$ or $\frac{\partial f}{\partial y}(x_0, y_0)$.

These first-order derivatives tell us about the *slope* of the surface in specific directions. They are essentially the rates of change of the original function.

### 2. What are Higher Order Partial Derivatives?

Now, let's think about what it means to take a *higher order* partial derivative. Since the first-order partial derivatives, like $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$, are themselves functions of $x$ and $y$, we can take their partial derivatives as well!

**Definition:** If $f(x, y)$ is a function of two variables, its **second-order partial derivatives** are the partial derivatives of its first-order partial derivatives. These are:

*   $\frac{\partial}{\partial x} \left( \frac{\partial f}{\partial x} \right) = \frac{\partial^2 f}{\partial x^2}$ (Taking the partial derivative with respect to x, twice)
*   $\frac{\partial}{\partial y} \left( \frac{\partial f}{\partial y} \right) = \frac{\partial^2 f}{\partial y^2}$ (Taking the partial derivative with respect to y, twice)
*   $\frac{\partial}{\partial y} \left( \frac{\partial f}{\partial x} \right) = \frac{\partial^2 f}{\partial y \partial x}$ (Taking the partial derivative with respect to y, after taking it with respect to x)
*   $\frac{\partial}{\partial x} \left( \frac{\partial f}{\partial y} \right) = \frac{\partial^2 f}{\partial x \partial y}$ (Taking the partial derivative with respect to x, after taking it with respect to y)

The derivatives like $\frac{\partial^2 f}{\partial y \partial x}$ and $\frac{\partial^2 f}{\partial x \partial y}$ are called **mixed second-order partial derivatives**.

**Think of it like this:** Imagine you're tracking the altitude of a drone as it flies over a hilly terrain.
*   $f(x, y)$: Altitude at position $(x, y)$.
*   $\frac{\partial f}{\partial x}$: How much the altitude changes if you move east (keeping north constant).
*   $\frac{\partial f}{\partial y}$: How much the altitude changes if you move north (keeping east constant).

Now, what is $\frac{\partial^2 f}{\partial x^2}$? It's the rate of change of $\frac{\partial f}{\partial x}$ as you move east. This tells you how the eastward slope is changing as you move further east. Is the upward slope getting steeper, or is it flattening out? This relates to the *concavity* of the terrain in the east-west direction.

And what about $\frac{\partial^2 f}{\partial y \partial x}$? This is the rate of change of the eastward slope ($\frac{\partial f}{\partial x}$) as you move north. It tells you how the eastward trend is affected by a northward movement. This is quite a different perspective!

**Notation:** Besides the Leibniz notation ($\frac{\partial^2 f}{\partial x^2}$, etc.), you'll also see subscript notation: $f_{xx}$, $f_{yy}$, $f_{yx}$, $f_{xy}$. This is often more concise and easier to work with.

### 3. The Incredible Property: Equality of Mixed Partials (Clairaut's Theorem)

This is a really important point, and it's something we often highlight for exams. For most "well-behaved" functions that we encounter in science and engineering, the order in which we take the mixed partial derivatives *does not matter*. That is, $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 f}{\partial x \partial y}$. This is a consequence of a theorem called **Clairaut's Theorem** (or sometimes Schwarz's Theorem).

**Clairaut's Theorem:** If the mixed partial derivatives $\frac{\partial^2 f}{\partial y \partial x}$ and $\frac{\partial^2 f}{\partial x \partial y}$ are continuous in an open disk centered at $(a, b)$, then
$$ \frac{\partial^2 f}{\partial y \partial x}(a, b) = \frac{\partial^2 f}{\partial x \partial y}(a, b) $$
This is incredibly convenient! It means for many functions, you can choose whichever order of differentiation is easier.

**When might this *not* hold?** The theorem requires continuity of the mixed partials. If the function is "pathological" or has sharp corners or discontinuities in its derivatives, this equality might break down. But for standard polynomial, exponential, trigonometric, and many transcendental functions encountered in your courses, you can rely on this equality.

**Why is this useful?** If you need to calculate a mixed second-order partial derivative, and say, calculating $\frac{\partial^2 f}{\partial x \partial y}$ involves simpler algebra than $\frac{\partial^2 f}{\partial y \partial x}$, you can just calculate the easier one!

### 4. Examples: Bringing it to Life

Let's work through some examples to solidify these concepts.

**Example 1: A Simple Polynomial**

Let $f(x, y) = x^3 y^2 + 2x^2 y + 5x - 3y + 7$.

First-order partials:
*   $\frac{\partial f}{\partial x} = 3x^2 y^2 + 4xy + 5$
*   $\frac{\partial f}{\partial y} = 2x^3 y + 2x^2 - 3$

Now, let's find the second-order partials:

*   **$\frac{\partial^2 f}{\partial x^2}$**: Differentiate $\frac{\partial f}{\partial x}$ with respect to $x$:
    $\frac{\partial}{\partial x}(3x^2 y^2 + 4xy + 5) = 6xy^2 + 4y$

*   **$\frac{\partial^2 f}{\partial y^2}$**: Differentiate $\frac{\partial f}{\partial y}$ with respect to $y$:
    $\frac{\partial}{\partial y}(2x^3 y + 2x^2 - 3) = 2x^3$

*   **$\frac{\partial^2 f}{\partial y \partial x}$**: Differentiate $\frac{\partial f}{\partial x}$ with respect to $y$:
    $\frac{\partial}{\partial y}(3x^2 y^2 + 4xy + 5) = 6x^2 y + 4x$

*   **$\frac{\partial^2 f}{\partial x \partial y}$**: Differentiate $\frac{\partial f}{\partial y}$ with respect to $x$:
    $\frac{\partial}{\partial x}(2x^3 y + 2x^2 - 3) = 6x^2 y + 4x$

Notice? $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 f}{\partial x \partial y} = 6x^2 y + 4x$. This confirms Clairaut's Theorem for this function.

**Example 2: A Function Involving Exponentials and Trigonometrics**

Let $f(x, y) = e^{xy} \sin(x) + y^2$.

First-order partials:
*   $\frac{\partial f}{\partial x} = y e^{xy} \sin(x) + e^{xy} \cos(x)$ (using product rule)
*   $\frac{\partial f}{\partial y} = x e^{xy} \sin(x) + 2y$

Now, the second-order partials. Let's calculate $\frac{\partial^2 f}{\partial y \partial x}$ and $\frac{\partial^2 f}{\partial x \partial y}$ and see if they match.

*   **$\frac{\partial^2 f}{\partial y \partial x}$**: Differentiate $\frac{\partial f}{\partial x}$ with respect to $y$:
    $\frac{\partial}{\partial y}(y e^{xy} \sin(x) + e^{xy} \cos(x))$
    For the first term $(y e^{xy} \sin(x))$, treat $\sin(x)$ as a constant and use the product rule for $y \cdot e^{xy}$:
    $1 \cdot e^{xy} \sin(x) + y \cdot (x e^{xy}) \sin(x) = e^{xy} \sin(x) + xy e^{xy} \sin(x)$
    For the second term $(e^{xy} \cos(x))$, treat $\cos(x)$ as a constant and differentiate $e^{xy}$ with respect to $y$:
    $x e^{xy} \cos(x)$
    So, $\frac{\partial^2 f}{\partial y \partial x} = e^{xy} \sin(x) + xy e^{xy} \sin(x) + x e^{xy} \cos(x)$

*   **$\frac{\partial^2 f}{\partial x \partial y}$**: Differentiate $\frac{\partial f}{\partial y}$ with respect to $x$:
    $\frac{\partial}{\partial x}(x e^{xy} \sin(x) + 2y)$
    For the first term $(x e^{xy} \sin(x))$, this requires the product rule for three functions or two applications of the product rule. Let's do it as $(x) \cdot (e^{xy}) \cdot (\sin(x))$.
    Derivative of $x$: $1 \cdot e^{xy} \sin(x)$
    Derivative of $e^{xy}$: $x \cdot e^{xy} \sin(x)$
    Derivative of $\sin(x)$: $x \cdot e^{xy} \cos(x)$
    Summing these up: $e^{xy} \sin(x) + x (y e^{xy}) \sin(x) + x e^{xy} \cos(x)$
    Wait, let's be more systematic. Treat $e^{xy} \sin(x)$ as a function of $x$ and apply product rule:
    Derivative of $x$: $1 \cdot (e^{xy} \sin(x))$
    Derivative of $(e^{xy} \sin(x))$ w.r.t. $x$: $(y e^{xy} \sin(x) + e^{xy} \cos(x))$
    So, $\frac{\partial}{\partial x}(x e^{xy} \sin(x)) = 1 \cdot (e^{xy} \sin(x)) + x \cdot (y e^{xy} \sin(x) + e^{xy} \cos(x))$
    $= e^{xy} \sin(x) + xy e^{xy} \sin(x) + x e^{xy} \cos(x)$
    The derivative of $2y$ with respect to $x$ is $0$.
    So, $\frac{\partial^2 f}{\partial x \partial y} = e^{xy} \sin(x) + xy e^{xy} \sin(x) + x e^{xy} \cos(x)$

And indeed, they match! This is the power of Clairaut's Theorem.

### 5. Higher Order Derivatives and Their Significance

We can continue this process indefinitely. For example, we can take third-order partial derivatives, like $\frac{\partial^3 f}{\partial x^2 \partial y}$ or $\frac{\partial^3 f}{\partial x \partial y \partial x}$. If Clairaut's theorem applies at each stage, the order of differentiation among identical variables doesn't matter (e.g., $f_{xxy} = f_{xyx} = f_{yxx}$), and the order of mixed derivatives can also be swapped if they are continuous.

**What do these higher-order derivatives tell us?**

*   **Second-order derivatives ($f_{xx}, f_{yy}$):** They describe the *concavity* or curvature of the surface.
    *   If $f_{xx} > 0$ at a point where $f_x = 0$, it indicates a local minimum in the x-direction.
    *   If $f_{xx} < 0$ at a point where $f_x = 0$, it indicates a local maximum in the x-direction.
    *   Similar interpretations hold for $f_{yy}$.
    *   When combined with the second derivative test (which uses $f_{xx}$, $f_{yy}$, and $f_{xy}$), they help us classify critical points of multivariable functions as local maxima, minima, or saddle points. This directly relates to **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.**

*   **Mixed second-order derivatives ($f_{xy}, f_{yx}$):** They tell us how the slope in one direction changes as you move in another direction. This is crucial in understanding how changes in one variable affect the rate of change of another. For example, in physics, this might relate to how the electric field's change with position is affected by a change in temperature.

*   **Third-order and higher derivatives:** These are important in more advanced topics such as:
    *   **Taylor Series Expansions for Multivariable Functions:** Just like we use Taylor series for single-variable functions to approximate them locally, we use them for multivariable functions. Higher-order derivatives are the coefficients in these expansions, allowing for more accurate approximations of complex functions. This is vital for modeling physical phenomena where linear or quadratic approximations aren't sufficient.
    *   **Differential Equations:** Many partial differential equations (PDEs) that describe physical phenomena (like heat flow, wave propagation, or fluid dynamics) involve second or higher-order partial derivatives. For example, the **Laplace equation** ($\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$) and the **wave equation** ($\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$) are fundamental in physics and engineering. Understanding higher-order derivatives is key to solving and analyzing these equations, which is implicitly related to **CO1** and understanding physical models.
    *   **Error Analysis and Sensitivity Analysis:** In engineering, we often need to understand how the output of a system is sensitive to small changes or errors in its input parameters. Higher-order derivatives help quantify this sensitivity, especially when the relationship between inputs and outputs is non-linear.

**Relatable Analogy: Driving a Car**

Let's say $f(x, y)$ is the altitude of a road you're driving on, where $x$ is the distance driven east and $y$ is the distance driven north.

*   $f_x$: Your rate of ascent/descent if you *only* drive east.
*   $f_y$: Your rate of ascent/descent if you *only* drive north.

Now consider $f_{xy}$:
*   This is the rate of change of your *eastward climb* ($\frac{\partial f}{\partial x}$) as you change your direction to drive *north* (keeping your current east position fixed momentarily).
*   Imagine you're on a road that goes uphill eastward. As you turn slightly north, does the uphill eastward slope get steeper, or does it flatten out? This is what $f_{xy}$ tells you.

If $f_{xx} > 0$ at a crest, it means the hill is steepest in the east-west direction at that point. If $f_{xy} > 0$, it means if you were to turn your steering wheel slightly north, the eastward uphill trend would get even stronger.

### 6. Higher Order Derivatives and Course Outcomes

Let's explicitly connect this topic to our Course Outcomes:

*   **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.**
    *   Higher-order partial derivatives are *essential* for the second derivative test to classify critical points (maxima, minima, saddle points) of multivariable functions. This is a direct application of computing these derivatives to find extrema, a core part of CO1. Moreover, many engineering optimization problems involve finding the conditions for maximum efficiency or minimum cost, which often boils down to finding maxima/minima of functions, where these derivatives play a key role. For instance, determining the optimal parameters for a circuit or the most stable configuration of a mechanical system might involve minimizing an energy function or maximizing a performance metric.

*   **CO2: Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes.**
    *   While this topic is about derivatives, it builds the foundation for understanding the behavior of functions, which is crucial before tackling integrals. Certain PDEs involving higher-order derivatives, like the heat equation or Laplace's equation, are often solved using multiple integrals or Fourier analysis, which is closely related to integration techniques. So, a strong grasp of derivatives is a prerequisite for deeper understanding in multivariable calculus.

*   **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.**
    *   Vector calculus builds upon scalar multivariable calculus. Understanding partial derivatives of scalar fields ($f(x, y, z)$) is fundamental. Concepts like the gradient ($\nabla f$), which is a vector of first partial derivatives, are used in line integrals and surface integrals. Higher-order derivatives of scalar fields also appear in more advanced vector calculus concepts. For example, the divergence of the gradient ($\nabla \cdot (\nabla f)$) is the Laplacian, which involves second-order partial derivatives.

*   **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.**
    *   Similar to CO2, understanding the underlying scalar functions and their rates of change (partial derivatives) is foundational. Many physical laws expressed using surface and volume integrals, such as Gauss's Law or Stokes' Theorem in their differential forms, directly involve partial derivatives of vector fields or scalar fields. For instance, Gauss's Law in differential form relates the divergence of an electric field (which involves second-order partial derivatives) to the charge density.

### 7. Common Pitfalls and Exam Tips

*   **Careful with the Chain Rule and Product Rule:** When differentiating, especially mixed partials, remember that the variable you are *not* differentiating with respect to is treated as a constant. However, if that "constant" variable itself is part of a product or function with the differentiation variable, you still need to apply the product or chain rule. This is where many students make errors, as seen in Example 2.
*   **Order of Differentiation:** While for most functions $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}$, always be mindful of the continuity requirement of Clairaut's Theorem. If you're unsure or the function looks "unusual," it's safer to calculate both or stick to the specified order if given.
*   **Notation Consistency:** Be clear whether you are using Leibniz notation or subscript notation and maintain consistency throughout your work.
*   **Exam Focus:** Typically, exams will test your ability to calculate second-order and sometimes third-order partial derivatives for polynomials and common transcendental functions. They might also ask you to verify Clairaut's Theorem for a given function or to use these derivatives in finding critical points.

### 8. Extending to More Variables

The concept extends seamlessly to functions of three or more variables, say $f(x, y, z)$. You can have first-order partials like $\frac{\partial f}{\partial x}$, $\frac{\partial f}{\partial y}$, $\frac{\partial f}{\partial z}$. Then, second-order partials include:
*   $\frac{\partial^2 f}{\partial x^2}, \frac{\partial^2 f}{\partial y^2}, \frac{\partial^2 f}{\partial z^2}$
*   $\frac{\partial^2 f}{\partial x \partial y}, \frac{\partial^2 f}{\partial y \partial x}$
*   $\frac{\partial^2 f}{\partial x \partial z}, \frac{\partial^2 f}{\partial z \partial x}$
*   $\frac{\partial^2 f}{\partial y \partial z}, \frac{\partial^2 f}{\partial z \partial y}$

Clairaut's Theorem still holds for these if the relevant second-order partial derivatives are continuous. The number of second-order partial derivatives for a function of $n$ variables is $n + \frac{n(n-1)}{2}$. For $n=2$, this is $2 + \frac{2(1)}{2} = 3$ distinct second-order derivatives ($f_{xx}, f_{yy}, f_{xy}$). For $n=3$, it's $3 + \frac{3(2)}{2} = 6$ distinct second-order derivatives ($f_{xx}, f_{yy}, f_{zz}, f_{xy}, f_{xz}, f_{yz}$).

---

## Sample Questions and Answers

**Question 1 (Conceptual Understanding):**
State Clairaut's Theorem regarding mixed second-order partial derivatives and explain its significance in practical calculations.

**Answer:**
Clairaut's Theorem states that if the mixed second-order partial derivatives $\frac{\partial^2 f}{\partial y \partial x}$ and $\frac{\partial^2 f}{\partial x \partial y}$ are continuous in an open disk centered at a point $(a, b)$, then these two partial derivatives are equal at that point: $\frac{\partial^2 f}{\partial y \partial x}(a, b) = \frac{\partial^2 f}{\partial x \partial y}(a, b)$.

Its significance lies in simplifying calculations. For most functions encountered in science and engineering (which are "well-behaved" and have continuous mixed partials), the order in which you perform partial differentiation for mixed derivatives doesn't matter. This allows you to choose the order of differentiation that leads to simpler algebraic manipulation, saving time and reducing the chance of errors.

**Question 2 (Calculation and Application):**
Given the function $f(x, y) = x^2 e^{3y} + y \cos(x)$, find all second-order partial derivatives and verify Clairaut's Theorem for this function.

**Answer:**
First, find the first-order partial derivatives:
$\frac{\partial f}{\partial x} = 2x e^{3y} - y \sin(x)$
$\frac{\partial f}{\partial y} = 3x^2 e^{3y} + \cos(x)$

Now, find the second-order partial derivatives:

1.  **$\frac{\partial^2 f}{\partial x^2}$**: Differentiate $\frac{\partial f}{\partial x}$ with respect to $x$:
    $\frac{\partial}{\partial x}(2x e^{3y} - y \sin(x)) = 2 e^{3y} - y \cos(x)$

2.  **$\frac{\partial^2 f}{\partial y^2}$**: Differentiate $\frac{\partial f}{\partial y}$ with respect to $y$:
    $\frac{\partial}{\partial y}(3x^2 e^{3y} + \cos(x)) = 3x^2 (3e^{3y}) + 0 = 9x^2 e^{3y}$

3.  **$\frac{\partial^2 f}{\partial y \partial x}$**: Differentiate $\frac{\partial f}{\partial x}$ with respect to $y$:
    $\frac{\partial}{\partial y}(2x e^{3y} - y \sin(x)) = 2x (3e^{3y}) - 1 \sin(x) = 6x e^{3y} - \sin(x)$

4.  **$\frac{\partial^2 f}{\partial x \partial y}$**: Differentiate $\frac{\partial f}{\partial y}$ with respect to $x$:
    $\frac{\partial}{\partial x}(3x^2 e^{3y} + \cos(x)) = 3(2x) e^{3y} - \sin(x) = 6x e^{3y} - \sin(x)$

**Verification of Clairaut's Theorem:**
We found that $\frac{\partial^2 f}{\partial y \partial x} = 6x e^{3y} - \sin(x)$ and $\frac{\partial^2 f}{\partial x \partial y} = 6x e^{3y} - \sin(x)$.
Since these two mixed second-order partial derivatives are equal, Clairaut's Theorem is verified for this function. The functions $e^{3y}$, $\sin(x)$, $\cos(x)$, and polynomials are all continuous and have continuous derivatives, satisfying the conditions of the theorem.

**Question 3 (Connection to CO1):**
Consider the function $f(x, y) = x^3 + y^3 - 3xy$. Find the critical points of this function and use the second derivative test to classify them.

**Answer:**
First, find the first-order partial derivatives and set them to zero to find critical points:
$\frac{\partial f}{\partial x} = 3x^2 - 3y = 0 \implies x^2 = y$ (Equation 1)
$\frac{\partial f}{\partial y} = 3y^2 - 3x = 0 \implies y^2 = x$ (Equation 2)

Substitute Equation 1 into Equation 2:
$(x^2)^2 = x \implies x^4 = x$
$x^4 - x = 0 \implies x(x^3 - 1) = 0$
This gives $x=0$ or $x^3=1 \implies x=1$.

*   If $x=0$, from Equation 1, $y = 0^2 = 0$. So, $(0,0)$ is a critical point.
*   If $x=1$, from Equation 1, $y = 1^2 = 1$. So, $(1,1)$ is a critical point.

Now, find the second-order partial derivatives:
$\frac{\partial^2 f}{\partial x^2} = 6x$
$\frac{\partial^2 f}{\partial y^2} = 6y$
$\frac{\partial^2 f}{\partial x \partial y} = -3$ (We can also calculate $\frac{\partial^2 f}{\partial y \partial x} = -3$, confirming Clairaut's Theorem).

Let $D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2 = (6x)(6y) - (-3)^2 = 36xy - 9$.

Now, apply the second derivative test at each critical point:

*   **At (0,0):**
    $D(0,0) = 36(0)(0) - 9 = -9$.
    Since $D(0,0) < 0$, the point $(0,0)$ is a **saddle point**.

*   **At (1,1):**
    $D(1,1) = 36(1)(1) - 9 = 36 - 9 = 27$.
    Since $D(1,1) > 0$, we check $f_{xx}(1,1)$.
    $f_{xx}(1,1) = 6(1) = 6$.
    Since $D(1,1) > 0$ and $f_{xx}(1,1) > 0$, the point $(1,1)$ is a **local minimum**.

This question demonstrates how higher-order partial derivatives are directly used in classifying extrema, fulfilling CO1.
