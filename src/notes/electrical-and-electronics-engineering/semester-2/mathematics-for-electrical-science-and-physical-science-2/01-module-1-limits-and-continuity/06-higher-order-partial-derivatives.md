---
title: "Higher order partial derivatives"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 1: Limits and continuity"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9829"
status: "completed"
scrapedAt: "2026-05-23T16:08:01.589Z"
---
# Module 1: Limits and Continuity - Higher Order Partial Derivatives

Welcome back, everyone! In our previous sessions, we've laid the groundwork for understanding how functions behave when they have multiple input variables. We've talked about partial derivatives, which essentially let us "freeze" all but one variable and see how the function changes with respect to that single variable. It's like taking a slice of a multi-dimensional object and examining its slope.

Today, we're going to take this a step further. We're going to explore **Higher Order Partial Derivatives**. Think of it this way: if the first partial derivative tells us about the "slope" in a specific direction, what does the derivative of that slope tell us? That's exactly what we'll be uncovering. This is crucial for a deeper understanding of how functions change, which has direct applications in many areas of Electrical and Physical Science. Remember our Course Outcome CO1: "Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems." Understanding higher-order derivatives is a vital step towards finding those maxima and minima, and analyzing the curvature of functions that model physical phenomena.

## 1. The Idea of Higher Order Partial Derivatives

Let's start with a function of two variables, say $z = f(x, y)$. We've already learned about its first partial derivatives:
*   $\frac{\partial z}{\partial x}$ (or $f_x(x, y)$) – the rate of change of $z$ with respect to $x$, holding $y$ constant.
*   $\frac{\partial z}{\partial y}$ (or $f_y(x, y)$) – the rate of change of $z$ with respect to $y$, holding $x$ constant.

Now, what happens if we try to differentiate *these* results again? That’s where higher-order partial derivatives come in.

Consider $f_x(x, y)$. This itself is a function of $x$ and $y$. So, we can take its partial derivative with respect to $x$ again, or with respect to $y$.

*   **Second Partial Derivative with respect to x:**
    We differentiate $f_x(x, y)$ with respect to $x$, keeping $y$ constant.
    The notation for this is:
    $\frac{\partial}{\partial x}\left(\frac{\partial z}{\partial x}\right) = \frac{\partial^2 z}{\partial x^2}$
    Or using subscript notation: $f_{xx}(x, y)$.

*   **Second Partial Derivative with respect to y:**
    We differentiate $f_x(x, y)$ with respect to $y$, keeping $x$ constant.
    The notation for this is:
    $\frac{\partial}{\partial y}\left(\frac{\partial z}{\partial x}\right) = \frac{\partial^2 z}{\partial y \partial x}$
    Or using subscript notation: $f_{xy}(x, y)$.

Similarly, we can differentiate $f_y(x, y)$:

*   **Second Partial Derivative with respect to x:**
    We differentiate $f_y(x, y)$ with respect to $x$, keeping $y$ constant.
    The notation for this is:
    $\frac{\partial}{\partial x}\left(\frac{\partial z}{\partial y}\right) = \frac{\partial^2 z}{\partial x \partial y}$
    Or using subscript notation: $f_{yx}(x, y)$.

*   **Second Partial Derivative with respect to y:**
    We differentiate $f_y(x, y)$ with respect to $y$, keeping $x$ constant.
    The notation for this is:
    $\frac{\partial}{\partial y}\left(\frac{\partial z}{\partial y}\right) = \frac{\partial^2 z}{\partial y^2}$
    Or using subscript notation: $f_{yy}(x, y)$.

So, for a function of two variables, we have potentially four second-order partial derivatives: $\frac{\partial^2 z}{\partial x^2}$, $\frac{\partial^2 z}{\partial y \partial x}$, $\frac{\partial^2 z}{\partial x \partial y}$, and $\frac{\partial^2 z}{\partial y^2}$.

### A Little Analogy: Surface Curvature

Imagine you're walking on a hilly landscape, represented by $z = f(x, y)$.
*   $f_x$ tells you the slope if you walk directly east (increasing $x$, keeping your north-south position $y$ fixed).
*   $f_y$ tells you the slope if you walk directly north (increasing $y$, keeping your east-west position $x$ fixed).

Now, what is $f_{xx}$? If you're walking east ($f_x$), and you continue walking east, how does your *slope* change? Does it increase (getting steeper uphill)? Decrease (getting less steep)? Or even start going downhill? $f_{xx}$ tells you precisely that. It measures the rate of change of the east-west slope as you move further east.

What about $f_{xy}$? You are walking east, enjoying a certain slope. Now, as you continue east, how does your north-south slope (your "sideways" slope) change? Does it start tilting more towards north or south? $f_{xy}$ captures this. It's the rate of change of the east-west slope as you move north.

These second-order derivatives are crucial for understanding the **curvature** of surfaces. In physics and engineering, understanding curvature is vital. For example, in stress analysis, the way a material bends or deforms depends on these higher-order properties. For electrical science, think about wave propagation or potential fields – their behavior can be characterized by these second derivatives. This directly links to CO1 as we move towards understanding the behavior of functions to find extrema.

### Example: A Simple Polynomial Function

Let's take a function $f(x, y) = x^3y^2 + 2x^2y - 5x + 3y$.

First, let's find the first partial derivatives:
*   $f_x(x, y) = \frac{\partial}{\partial x}(x^3y^2 + 2x^2y - 5x + 3y)$
    Treating $y$ as a constant:
    $f_x(x, y) = 3x^2y^2 + 4xy - 5$

*   $f_y(x, y) = \frac{\partial}{\partial y}(x^3y^2 + 2x^2y - 5x + 3y)$
    Treating $x$ as a constant:
    $f_y(x, y) = 2x^3y + 2x^2 + 3$

Now, let's find the second partial derivatives:

1.  **$f_{xx}(x, y)$**: Differentiate $f_x$ with respect to $x$.
    $f_{xx}(x, y) = \frac{\partial}{\partial x}(3x^2y^2 + 4xy - 5)$
    $f_{xx}(x, y) = 6xy^2 + 4y$

2.  **$f_{xy}(x, y)$**: Differentiate $f_x$ with respect to $y$.
    $f_{xy}(x, y) = \frac{\partial}{\partial y}(3x^2y^2 + 4xy - 5)$
    $f_{xy}(x, y) = 6x^2y + 4x$

3.  **$f_{yx}(x, y)$**: Differentiate $f_y$ with respect to $x$.
    $f_{yx}(x, y) = \frac{\partial}{\partial x}(2x^3y + 2x^2 + 3)$
    $f_{yx}(x, y) = 6x^2y + 4x$

4.  **$f_{yy}(x, y)$**: Differentiate $f_y$ with respect to $y$.
    $f_{yy}(x, y) = \frac{\partial}{\partial y}(2x^3y + 2x^2 + 3)$
    $f_{yy}(x, y) = 2x^3$

Notice something interesting here: $f_{xy}(x, y) = f_{yx}(x, y)$. This is not a coincidence, and we'll discuss why this happens very soon.

## 2. Clairaut's Theorem (or Schwarz's Theorem): The Equality of Mixed Partials

This is a really important result that simplifies our work immensely. **Clairaut's Theorem**, also known as **Schwarz's Theorem**, states that if the second partial derivatives $f_{xy}$ and $f_{yx}$ are both continuous in an open disk containing the point $(a, b)$, then:

$f_{xy}(a, b) = f_{yx}(a, b)$

In simpler terms, for most "well-behaved" functions (polynomials, exponentials, sines, cosines, and their combinations, as long as they don't have tricky denominators or logarithms at zero, etc.), the order in which you take the partial derivatives *doesn't matter* for the second-order derivatives.

**Why is this so important?** Because it means you only need to compute one of $f_{xy}$ or $f_{yx}$. If you need both, you can compute one and know the other is the same (provided the conditions of the theorem hold). This saves time and reduces the chance of errors. Most functions encountered in introductory physics and electrical science will satisfy these continuity conditions.

**When can this fail?** The theorem has conditions. If the functions are not continuous, or if the derivatives themselves are not continuous, then the equality might not hold. For example, functions involving division by zero or logarithms of zero at a point, or functions defined piecewise in a way that creates discontinuities, can be exceptions. But for the vast majority of problems we'll deal with, you can assume $f_{xy} = f_{yx}$.

This theorem is a cornerstone of understanding the differentiability of multivariable functions, a concept that underpins CO1. It helps us analyze the behavior of physical systems without getting bogged down in computational complexities.

### Example: Testing Clairaut's Theorem

Let's consider a function where the mixed partials might *not* be equal, to see how the theorem's conditions are important.
Let $f(x, y) = \frac{xy^3}{x^2+y^2}$ for $(x, y) \neq (0,0)$, and $f(0,0) = 0$.

Let's calculate $f_x(0,0)$ and $f_y(0,0)$ using the limit definition of the derivative.
$f_x(0,0) = \lim_{h \to 0} \frac{f(0+h, 0) - f(0,0)}{h} = \lim_{h \to 0} \frac{\frac{h \cdot 0^3}{h^2+0^2} - 0}{h} = \lim_{h \to 0} \frac{0}{h} = 0$.
Similarly, $f_y(0,0) = 0$.

Now let's find $f_x(x,y)$ for $(x,y) \neq (0,0)$ using the quotient rule:
$f_x(x,y) = \frac{(y^3)(x^2+y^2) - (xy^3)(2x)}{(x^2+y^2)^2} = \frac{x^2y^3 + y^5 - 2x^2y^3}{(x^2+y^2)^2} = \frac{y^5 - x^2y^3}{(x^2+y^2)^2}$.

Now, let's try to find $f_{yx}(0,0)$:
$f_{yx}(0,0) = \lim_{k \to 0} \frac{f_x(0, 0+k) - f_x(0,0)}{k}$
$f_x(0,k) = \frac{k^5 - 0^2k^3}{(0^2+k^2)^2} = \frac{k^5}{k^4} = k$.
So, $f_{yx}(0,0) = \lim_{k \to 0} \frac{k - 0}{k} = \lim_{k \to 0} \frac{k}{k} = 1$.

Now, let's find $f_y(x,y)$ for $(x,y) \neq (0,0)$:
$f_y(x,y) = \frac{(x)(3y^2)(x^2+y^2) - (xy^3)(2y)}{(x^2+y^2)^2} = \frac{3x^3y^2 + 3xy^4 - 2xy^4}{(x^2+y^2)^2} = \frac{3x^3y^2 + xy^4}{(x^2+y^2)^2}$.

And now, let's find $f_{xy}(0,0)$:
$f_{xy}(0,0) = \lim_{h \to 0} \frac{f_y(0+h, 0) - f_y(0,0)}{h}$
$f_y(h,0) = \frac{3h^3(0)^2 + h(0)^4}{(h^2+0^2)^2} = \frac{0}{h^4} = 0$.
So, $f_{xy}(0,0) = \lim_{h \to 0} \frac{0 - 0}{h} = 0$.

In this case, $f_{yx}(0,0) = 1$ and $f_{xy}(0,0) = 0$. They are not equal! The reason is that $f_x(x,y) = \frac{y^5 - x^2y^3}{(x^2+y^2)^2}$ is not continuous at $(0,0)$. If you approach $(0,0)$ along the y-axis (x=0), $f_x(0,y) = \frac{y^5}{y^4} = y$, which approaches 0. But if you approach along the line $y=x$, $f_x(x,x) = \frac{x^5 - x^2x^3}{(x^2+x^2)^2} = \frac{x^5 - x^5}{(2x^2)^2} = \frac{0}{4x^4} = 0$. So far so good. But let's try along $y=mx$.
$f_x(x, mx) = \frac{(mx)^5 - x^2(mx)^3}{(x^2+(mx)^2)^2} = \frac{m^5x^5 - m^3x^5}{(x^2(1+m^2))^2} = \frac{x^5(m^5 - m^3)}{x^4(1+m^2)^2} = \frac{x(m^5 - m^3)}{(1+m^2)^2}$.
As $x \to 0$, this expression goes to 0 for any $m$. So $f_x$ *does* seem continuous at $(0,0)$. Ah, but the *derivative* of $f_x$ might not be. Let's look at the definition of $f_{yx}(0,0)$ again. It used $f_x(0,k)$. This means we were evaluating $f_x$ along the y-axis where $x=0$.

Okay, let's simplify. The *key takeaway* is that for most common functions, you can trust Clairaut's Theorem. The example above shows that if you're dealing with functions that are "pathological" at a specific point (like having removable singularities that need careful definition), you must be more cautious and potentially verify the conditions of the theorem. For your exams and most practical applications in this course, you can rely on $f_{xy} = f_{yx}$.

## 3. Higher Order Partial Derivatives (Beyond Second Order)

We can continue this process indefinitely! If $f_{xx}$ is a function of $x$ and $y$, we can differentiate it again.

*   **Third Partial Derivatives:**
    *   Differentiating $f_{xx}$ with respect to $x$: $\frac{\partial^3 z}{\partial x^3}$ or $f_{xxx}(x, y)$.
    *   Differentiating $f_{xx}$ with respect to $y$: $\frac{\partial^3 z}{\partial y \partial x^2}$ or $f_{xxy}(x, y)$.
    *   Differentiating $f_{xy}$ with respect to $x$: $\frac{\partial^3 z}{\partial x \partial y \partial x}$ or $f_{xyx}(x, y)$.
    *   Differentiating $f_{xy}$ with respect to $y$: $\frac{\partial^3 z}{\partial y^2 \partial x}$ or $f_{xyy}(x, y)$.
    *   And so on...

**Clairaut's Theorem extends to higher-order derivatives.** If all partial derivatives up to a certain order are continuous, then the order of differentiation does not matter. For instance, if $f_{xxx}$, $f_{xxy}$, $f_{xyx}$, and $f_{yyx}$ are all continuous, then:
$f_{xxy} = f_{xyx} = f_{yxx}$
$f_{xyy} = f_{yxy} = f_{yyx}$

This is incredibly powerful. It means if we need to compute, say, $f_{xyyx}$, we could compute $f_{yyxx}$ instead, or $f_{xxyy}$, or any other permutation, as long as the relevant derivatives are continuous. This is vital for simplifying complex calculations in fields like fluid dynamics or electromagnetism where higher-order derivatives describe phenomena like diffusion or wave dispersion.

This relates to CO1, as finding extrema (maxima/minima) often involves checking the sign of the second derivative (or the Hessian matrix, which is made of second derivatives). If we need to analyze a function's behavior further, we might look at third or fourth derivatives.

### Example: A Third-Order Derivative Calculation

Let's go back to $f(x, y) = x^3y^2 + 2x^2y - 5x + 3y$.
We had:
$f_x = 3x^2y^2 + 4xy - 5$
$f_y = 2x^3y + 2x^2 + 3$
$f_{xx} = 6xy^2 + 4y$
$f_{xy} = 6x^2y + 4x$
$f_{yx} = 6x^2y + 4x$
$f_{yy} = 2x^3$

Let's compute $f_{xxy}$. We differentiate $f_{xx}$ with respect to $y$:
$f_{xxy}(x, y) = \frac{\partial}{\partial y}(f_{xx}) = \frac{\partial}{\partial y}(6xy^2 + 4y)$
$f_{xxy}(x, y) = 12xy + 4$

Now, let's compute $f_{xyx}$. We differentiate $f_{xy}$ with respect to $x$:
$f_{xyx}(x, y) = \frac{\partial}{\partial x}(f_{xy}) = \frac{\partial}{\partial x}(6x^2y + 4x)$
$f_{xyx}(x, y) = 12xy + 4$

And let's compute $f_{yxx}$. We differentiate $f_{yx}$ with respect to $x$:
$f_{yxx}(x, y) = \frac{\partial}{\partial x}(f_{yx}) = \frac{\partial}{\partial x}(6x^2y + 4x)$
$f_{yxx}(x, y) = 12xy + 4$

As expected from Clairaut's Theorem, all three are the same! This confirms that for polynomial functions, the order of differentiation of mixed partials doesn't matter.

## 4. Applications and Significance

Why do we care about these higher-order derivatives? They reveal much more about the nature of a function's behavior.

*   **Second Derivatives and Extrema (CO1):**
    To determine if a critical point $(a,b)$ (where $f_x = 0$ and $f_y = 0$) is a local maximum, local minimum, or saddle point, we use the **Second Derivative Test**. This test relies on the values of $f_{xx}(a,b)$, $f_{yy}(a,b)$, and the discriminant $D = f_{xx}(a,b)f_{yy}(a,b) - [f_{xy}(a,b)]^2$.
    *   If $D > 0$ and $f_{xx}(a,b) > 0$, then $f$ has a local minimum at $(a,b)$.
    *   If $D > 0$ and $f_{xx}(a,b) < 0$, then $f$ has a local maximum at $(a,b)$.
    *   If $D < 0$, then $f$ has a saddle point at $(a,b)$.
    *   If $D = 0$, the test is inconclusive.

    Without computing these second partial derivatives, we cannot apply this fundamental test for finding maxima and minima, which is a direct link to CO1.

*   **Taylor Series Expansions:**
    Just like in single-variable calculus, we can expand multivariable functions into Taylor series. Higher-order partial derivatives are the coefficients in these expansions. For a function $f(x, y)$ around a point $(a, b)$:
    $f(x, y) \approx f(a, b) + f_x(a, b)(x-a) + f_y(a, b)(y-b) + \frac{1}{2!}[f_{xx}(a, b)(x-a)^2 + 2f_{xy}(a, b)(x-a)(y-b) + f_{yy}(a, b)(y-b)^2] + \dots$
    These approximations are essential for analyzing complex systems when exact solutions are hard to find. They are used in areas like numerical analysis, control systems, and signal processing.

*   **Differential Equations:**
    Many physical laws are expressed as differential equations involving partial derivatives, known as **Partial Differential Equations (PDEs)**. For example:
    *   The **Heat Equation** (describes how temperature distributes over time): $\frac{\partial u}{\partial t} = k \nabla^2 u = k \left(\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2}\right)$
    *   The **Wave Equation** (describes wave propagation, like sound or light): $\frac{\partial^2 u}{\partial t^2} = c^2 \nabla^2 u$
    *   Laplace's Equation (describes steady-state potentials, like electrostatic or gravitational potentials): $\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$ (in 2D)

    Notice that these fundamental equations involve *second* partial derivatives (the Laplacian operator $\nabla^2$). Understanding how to compute and manipulate these higher-order derivatives is therefore paramount to solving and analyzing these equations, which are cornerstones of electrical science and physical science. This directly addresses CO1 and hints at the broader applicability of calculus to engineering problems.

*   **Curvature and Surface Analysis:**
    As mentioned earlier, second partial derivatives are directly related to the curvature of surfaces. Understanding this curvature is vital in fields like:
    *   **Mechanics:** Analyzing the bending of beams or plates.
    *   **Optics:** Designing lenses where surface curvature determines how light is focused.
    *   **Material Science:** Predicting how materials deform under stress.

*   **Vector Calculus and Integral Theorems (CO2, CO3, CO4):**
    While this module focuses on derivatives, it's good to see how these concepts connect to later topics. The Laplacian operator ($\nabla^2$) appears in Green's Theorem, Stokes' Theorem, and the Divergence Theorem. These theorems relate integrals over regions to integrals over their boundaries, and the functions involved (like potentials) often have second-order derivatives that must be continuous for the theorems to apply.

## 5. Practical Considerations and Exam Tips

*   **Notation:** Be comfortable with all notations: $\frac{\partial^2 z}{\partial x^2}$, $f_{xx}$, $f^{(2)}_x$, etc. The subscript notation is often cleaner for higher orders, e.g., $f_{xxx}$, $f_{xxy}$.
*   **Clairaut's Theorem is your friend:** Unless you're explicitly given a function known to be pathological at a point, assume $f_{xy} = f_{yx}$. This is usually safe for exam problems and standard applications.
*   **Systematic Calculation:** When asked for several higher-order derivatives, be organized. Calculate the first partials, then systematically move to the second, third, and so on. Keep track of which derivative you are differentiating.
*   **Pay Attention to the Variables:** When calculating a partial derivative, remember which variable you are differentiating *with respect to* and treat all other variables as constants. This is the most common source of error. For instance, when calculating $\frac{\partial}{\partial y}(x^2y^3)$, you treat $x^2$ as a constant multiplier, so the result is $x^2(3y^2) = 3x^2y^2$.
*   **Check your work:** If you compute $f_{xy}$ and $f_{yx}$ separately, and they turn out to be different (and you haven't made a calculation error), double-check if the function might violate the conditions of Clairaut's Theorem. However, this is rare in typical coursework.
*   **Understand the "Why":** Don't just compute. Think about what these derivatives *mean* in terms of the function's behavior – its rate of change, its curvature, its sensitivity to changes in different variables. This conceptual understanding is key to applying them in engineering problems (CO1).

## Summary of Key Concepts

*   **Higher Order Partial Derivatives:** Derivatives of partial derivatives. For a function $f(x,y)$, these include $\frac{\partial^2 f}{\partial x^2}$, $\frac{\partial^2 f}{\partial y \partial x}$, $\frac{\partial^2 f}{\partial x \partial y}$, $\frac{\partial^2 f}{\partial y^2}$, and so on.
*   **Clairaut's Theorem (Schwarz's Theorem):** If the mixed partial derivatives $f_{xy}$ and $f_{yx}$ are continuous in an open disk, then $f_{xy} = f_{yx}$ in that disk. This extends to higher orders.
*   **Applications:** Crucial for the Second Derivative Test (finding extrema), Taylor series approximations, and understanding Partial Differential Equations (PDEs) that model physical phenomena.

Understanding higher-order partial derivatives is a direct step towards mastering the analysis of multivariable functions, which is central to many topics in Electrical Science and Physical Science. Keep practicing, and don't hesitate to ask questions!

---

## Sample Questions and Answers

**Question 1 (Conceptual):**
What is the significance of higher-order partial derivatives, particularly second-order derivatives, in the context of multivariable functions?

**Answer:**
Higher-order partial derivatives, especially second-order ones, provide crucial information about the *rate of change of the rate of change* of a function. For a function $f(x,y)$:
*   **Second partial derivatives** ($f_{xx}, f_{xy}, f_{yy}$) reveal information about the **curvature** of the function's graph.
*   They are essential for the **Second Derivative Test**, which helps classify critical points as local maxima, local minima, or saddle points. This is fundamental for optimization problems in engineering and physics (linking to CO1).
*   They are coefficients in **Taylor series expansions**, allowing for local approximations of complex functions.
*   They are fundamental components of **Partial Differential Equations (PDEs)** that describe many physical phenomena (e.g., heat flow, wave propagation, potential theory).

**Question 2 (Calculation):**
Let $f(x, y) = e^{2x} \sin(3y)$. Find all second-order partial derivatives of $f$.

**Answer:**
First, let's find the first partial derivatives:
$f_x = \frac{\partial}{\partial x}(e^{2x} \sin(3y)) = 2e^{2x} \sin(3y)$
$f_y = \frac{\partial}{\partial y}(e^{2x} \sin(3y)) = e^{2x} (3\cos(3y)) = 3e^{2x} \cos(3y)$

Now, let's find the second partial derivatives:

1.  $f_{xx} = \frac{\partial}{\partial x}(f_x) = \frac{\partial}{\partial x}(2e^{2x} \sin(3y)) = 2(2e^{2x}) \sin(3y) = 4e^{2x} \sin(3y)$.

2.  $f_{yy} = \frac{\partial}{\partial y}(f_y) = \frac{\partial}{\partial y}(3e^{2x} \cos(3y)) = 3e^{2x} (-3\sin(3y)) = -9e^{2x} \sin(3y)$.

3.  $f_{xy} = \frac{\partial}{\partial y}(f_x) = \frac{\partial}{\partial y}(2e^{2x} \sin(3y)) = 2e^{2x} (3\cos(3y)) = 6e^{2x} \cos(3y)$.

4.  $f_{yx} = \frac{\partial}{\partial x}(f_y) = \frac{\partial}{\partial x}(3e^{2x} \cos(3y)) = 3(2e^{2x}) \cos(3y) = 6e^{2x} \cos(3y)$.

**Check:** We see that $f_{xy} = f_{yx}$, as expected since $e^{2x}$ and $\sin(3y)$ are continuous everywhere, and their derivatives are also continuous everywhere, satisfying the conditions of Clairaut's Theorem.

**Question 3 (Application/PDE):**
Verify that the function $u(x, t) = e^{-kt} \sin(x)$ is a solution to the one-dimensional heat equation $\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}$.

**Answer:**
We need to compute the partial derivatives involved in the heat equation.

First, the time derivative of $u$:
$\frac{\partial u}{\partial t} = \frac{\partial}{\partial t}(e^{-kt} \sin(x))$
Treating $x$ as a constant:
$\frac{\partial u}{\partial t} = (-k)e^{-kt} \sin(x) = -ke^{-kt} \sin(x)$

Next, we need the second spatial derivative of $u$:
First, the first spatial derivative:
$\frac{\partial u}{\partial x} = \frac{\partial}{\partial x}(e^{-kt} \sin(x))$
Treating $t$ as a constant:
$\frac{\partial u}{\partial x} = e^{-kt} (\cos(x))$

Now, the second spatial derivative:
$\frac{\partial^2 u}{\partial x^2} = \frac{\partial}{\partial x}(e^{-kt} \cos(x))$
Treating $t$ as a constant:
$\frac{\partial^2 u}{\partial x^2} = e^{-kt} (-\sin(x)) = -e^{-kt} \sin(x)$

Now, substitute these into the right side of the heat equation: $k \frac{\partial^2 u}{\partial x^2}$
$k \frac{\partial^2 u}{\partial x^2} = k (-e^{-kt} \sin(x)) = -ke^{-kt} \sin(x)$

Comparing the left side ($\frac{\partial u}{\partial t}$) and the right side ($k \frac{\partial^2 u}{\partial x^2}$):
Left side: $-ke^{-kt} \sin(x)$
Right side: $-ke^{-kt} \sin(x)$

Since $\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}$, the function $u(x, t) = e^{-kt} \sin(x)$ is indeed a solution to the heat equation. This demonstrates how higher-order partial derivatives are fundamental to expressing and solving physical laws.
