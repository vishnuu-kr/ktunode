---
title: "General solution"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e83549"
status: "completed"
scrapedAt: "2026-05-20T17:39:19.426Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 2: Homogeneous Linear Ordinary Differential Equations (ODEs) of Second Order

### Topic: The General Solution

Welcome, everyone, to our exploration of second-order homogeneous linear ODEs! In this session, we're going to build upon what we've learned about finding *a* solution to these important equations, and we'll focus on understanding what the *general* solution truly means, and how to find it. This is a fundamental concept that underpins much of what we do in electrical and physical sciences, directly relating to **Course Outcome 2: Solve homogeneous and non-homogeneous linear differential equations with constant coefficients.**

You'll see how finding this general solution is crucial for modeling various physical phenomena, from the oscillation of a spring (think of a mass attached to a spring, bouncing up and down) to the transient behavior of electrical circuits (like an RLC circuit responding to a switch).

### Understanding the Structure of Second-Order Linear Homogeneous ODEs

Before we dive into the general solution, let's quickly recap the form of the equations we're dealing with. A homogeneous linear ODE of second order with constant coefficients looks like this:

$a \frac{d^2y}{dx^2} + b \frac{dy}{dx} + cy = 0$

Here, $y$ is our dependent variable, often representing something like displacement, voltage, or current, and $x$ is the independent variable, frequently time or position. The coefficients $a$, $b$, and $c$ are constants. The "homogeneous" part means the right-hand side is zero.

### The Principle of Superposition: The Cornerstone of General Solutions

Now, the magic of linear homogeneous equations lies in a principle called the **Principle of Superposition**. It’s a concept that truly unlocks the power of these equations. Imagine you have two valid solutions, $y_1(x)$ and $y_2(x)$, to our ODE. The Principle of Superposition states that any linear combination of these solutions is *also* a solution.

Mathematically, if $y_1$ and $y_2$ are solutions, then $c_1 y_1(x) + c_2 y_2(x)$ is also a solution, where $c_1$ and $c_2$ are any arbitrary constants.

Why is this so important? Think of it like building with LEGOs. If you have two perfectly stable LEGO structures (our solutions $y_1$ and $y_2$), you can combine them in different ways (by scaling them with $c_1$ and $c_2$ and adding them together) to create a whole family of other stable structures. This is exactly what we're doing with our ODE solutions.

This principle is deeply rooted in the linearity of the differential operator itself. The operator $L = a \frac{d^2}{dx^2} + b \frac{d}{dx} + c$ is linear. This means $L(c_1 y_1 + c_2 y_2) = c_1 L(y_1) + c_2 L(y_2)$. Since $y_1$ and $y_2$ are solutions, $L(y_1) = 0$ and $L(y_2) = 0$. Therefore, $L(c_1 y_1 + c_2 y_2) = c_1(0) + c_2(0) = 0$, proving that the combination is also a solution.

### Finding Two "Independent" Solutions

The goal of finding the general solution is to find a set of solutions such that *any* solution to the ODE can be expressed as a linear combination of them. For a second-order ODE, we need *two* such fundamental solutions. These two solutions are called **linearly independent**.

What does "linearly independent" mean in this context? Two functions, $y_1(x)$ and $y_2(x)$, are linearly independent if neither can be expressed as a constant multiple of the other. If $y_2(x) = k \cdot y_1(x)$ for some constant $k$, they are linearly dependent. For example, $y_1(x) = e^{2x}$ and $y_2(x) = 3e^{2x}$ are linearly dependent because $y_2 = 3y_1$. However, $y_1(x) = e^{2x}$ and $y_2(x) = xe^{2x}$ are linearly independent.

The key idea from Kreyszig's "Advanced Engineering Mathematics" (and indeed most standard texts like Anton's Calculus) is that for a second-order linear homogeneous ODE, if we can find two linearly independent solutions, $y_1(x)$ and $y_2(x)$, then the **general solution** is given by:

$y(x) = c_1 y_1(x) + c_2 y_2(x)$

where $c_1$ and $c_2$ are arbitrary constants.

### The Characteristic Equation: Our Ticket to Finding Solutions

So, how do we find these linearly independent solutions $y_1$ and $y_2$? The standard approach is to assume a solution of the form $y = e^{rx}$, where $r$ is a constant we need to determine. Why this form? Because derivatives of $e^{rx}$ are just multiples of $e^{rx}$:

$\frac{dy}{dx} = r e^{rx}$
$\frac{d^2y}{dx^2} = r^2 e^{rx}$

Let's substitute these into our general ODE:

$a (r^2 e^{rx}) + b (r e^{rx}) + c (e^{rx}) = 0$

We can factor out $e^{rx}$:

$e^{rx} (ar^2 + br + c) = 0$

Since $e^{rx}$ is never zero, for this equation to hold, the term in the parenthesis must be zero:

$ar^2 + br + c = 0$

This is called the **characteristic equation** (or auxiliary equation). It's a quadratic equation in $r$, and its roots will tell us the form of our solutions. This is a critical step and directly helps us achieve **Course Outcome 2**.

### Cases for the Roots of the Characteristic Equation

The nature of the roots of the characteristic equation $ar^2 + br + c = 0$ dictates the form of the solutions $y_1$ and $y_2$. There are three distinct cases:

#### Case 1: Distinct Real Roots ($r_1 \neq r_2$)

If the discriminant ($b^2 - 4ac$) is positive, we get two distinct real roots, $r_1$ and $r_2$. In this case, our two linearly independent solutions are:

$y_1(x) = e^{r_1 x}$
$y_2(x) = e^{r_2 x}$

And the general solution is:

$y(x) = c_1 e^{r_1 x} + c_2 e^{r_2 x}$

**Example:** Consider the ODE $\frac{d^2y}{dx^2} - 5\frac{dy}{dx} + 6y = 0$.
The characteristic equation is $r^2 - 5r + 6 = 0$.
Factoring this, we get $(r-2)(r-3) = 0$.
The roots are $r_1 = 2$ and $r_2 = 3$. These are distinct real roots.
So, our two linearly independent solutions are $y_1(x) = e^{2x}$ and $y_2(x) = e^{3x}$.
The general solution is $y(x) = c_1 e^{2x} + c_2 e^{3x}$.

**Relatable Analogy:** Imagine a simple damper system where the rate of change of position depends on the position itself, and the rate of change of velocity depends on velocity. If the damping is just right (not too much, not too little), you might see two distinct exponential decay or growth patterns. Think of two different chemical reactions proceeding at different constant rates.

#### Case 2: Repeated Real Roots ($r_1 = r_2 = r$)

If the discriminant ($b^2 - 4ac$) is zero, we get exactly one real root, $r$. This means we only get one solution of the form $e^{rx}$ from $ar^2 + br + c = 0$. But for a second-order ODE, we need *two* linearly independent solutions.

Here's where a clever trick comes in, often explained in detail in Kreyszig or Anton/Biven. If we have a repeated root $r$, one solution is $y_1(x) = e^{rx}$. To find a second linearly independent solution, we can use a method called **reduction of order**. We assume a solution of the form $y_2(x) = u(x) e^{rx}$, where $u(x)$ is some unknown function.

Substituting this into the ODE $ay'' + by' + cy = 0$ with a repeated root $r$ (where $r = -b/(2a)$), you can show that the only way for this form to satisfy the ODE is if $u(x)$ is of the form $c_1 + c_2 x$. Taking $c_1=0$ and $c_2=1$, we get our second linearly independent solution:

$y_2(x) = x e^{rx}$

So, when you have repeated real roots $r$, the two linearly independent solutions are $y_1(x) = e^{rx}$ and $y_2(x) = xe^{rx}$. The general solution is:

$y(x) = c_1 e^{rx} + c_2 x e^{rx} = (c_1 + c_2 x) e^{rx}$

**Example:** Consider the ODE $\frac{d^2y}{dx^2} - 6\frac{dy}{dx} + 9y = 0$.
The characteristic equation is $r^2 - 6r + 9 = 0$.
Factoring this, we get $(r-3)^2 = 0$.
The root is $r = 3$, a repeated real root.
So, our two linearly independent solutions are $y_1(x) = e^{3x}$ and $y_2(x) = xe^{3x}$.
The general solution is $y(x) = c_1 e^{3x} + c_2 x e^{3x}$, or $y(x) = (c_1 + c_2 x) e^{3x}$.

**Relatable Analogy:** Imagine a critical system where the response is critically damped. This often leads to behavior that doesn't oscillate but also doesn't decay too quickly or too slowly. It's a very specific, balanced response. Think of a car's suspension system adjusted for critical damping – it absorbs bumps efficiently without bouncing. The $x e^{rx}$ term represents this "additional leverage" that the system has due to the critical nature of the roots.

#### Case 3: Complex Conjugate Roots ($r = \alpha \pm i\beta$)

If the discriminant ($b^2 - 4ac$) is negative, the roots of the characteristic equation are complex conjugates. Let the roots be $r = \alpha \pm i\beta$, where $\alpha$ and $\beta$ are real numbers and $\beta \neq 0$.

The solutions are of the form $e^{(\alpha + i\beta)x}$ and $e^{(\alpha - i\beta)x}$. Using Euler's formula, $e^{i\theta} = \cos\theta + i\sin\theta$, we can rewrite these complex exponential solutions into real-valued solutions that are often more useful in physical applications.

$e^{(\alpha + i\beta)x} = e^{\alpha x} e^{i\beta x} = e^{\alpha x} (\cos(\beta x) + i\sin(\beta x))$
$e^{(\alpha - i\beta)x} = e^{\alpha x} e^{-i\beta x} = e^{\alpha x} (\cos(\beta x) - i\sin(\beta x))$

Now, we can use the Principle of Superposition again. If these complex solutions are valid, then any linear combination is also valid. Let's take specific combinations to get real-valued solutions:

$y_1(x) = \frac{1}{2} [e^{(\alpha + i\beta)x} + e^{(\alpha - i\beta)x}]$
$y_1(x) = \frac{1}{2} [e^{\alpha x} (\cos(\beta x) + i\sin(\beta x)) + e^{\alpha x} (\cos(\beta x) - i\sin(\beta x))]$
$y_1(x) = \frac{1}{2} e^{\alpha x} [2\cos(\beta x)]$
$y_1(x) = e^{\alpha x} \cos(\beta x)$

And for our second solution:

$y_2(x) = \frac{1}{2i} [e^{(\alpha + i\beta)x} - e^{(\alpha - i\beta)x}]$
$y_2(x) = \frac{1}{2i} [e^{\alpha x} (\cos(\beta x) + i\sin(\beta x)) - e^{\alpha x} (\cos(\beta x) - i\sin(\beta x))]$
$y_2(x) = \frac{1}{2i} e^{\alpha x} [2i\sin(\beta x)]$
$y_2(x) = e^{\alpha x} \sin(\beta x)$

These two solutions, $y_1(x) = e^{\alpha x} \cos(\beta x)$ and $y_2(x) = e^{\alpha x} \sin(\beta x)$, are linearly independent.
The general solution is therefore:

$y(x) = c_1 e^{\alpha x} \cos(\beta x) + c_2 e^{\alpha x} \sin(\beta x)$
$y(x) = e^{\alpha x} (c_1 \cos(\beta x) + c_2 \sin(\beta x))$

**Example:** Consider the ODE $\frac{d^2y}{dx^2} + 4\frac{dy}{dx} + 13y = 0$.
The characteristic equation is $r^2 + 4r + 13 = 0$.
Using the quadratic formula $r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$r = \frac{-4 \pm \sqrt{4^2 - 4(1)(13)}}{2(1)}$
$r = \frac{-4 \pm \sqrt{16 - 52}}{2}$
$r = \frac{-4 \pm \sqrt{-36}}{2}$
$r = \frac{-4 \pm 6i}{2}$
$r = -2 \pm 3i$

Here, $\alpha = -2$ and $\beta = 3$. These are complex conjugate roots.
The two linearly independent solutions are $y_1(x) = e^{-2x} \cos(3x)$ and $y_2(x) = e^{-2x} \sin(3x)$.
The general solution is $y(x) = e^{-2x} (c_1 \cos(3x) + c_2 \sin(3x))$.

**Relatable Analogy:** This case describes oscillatory behavior, like the voltage across a capacitor in a damped RLC circuit or the motion of a pendulum with air resistance. The $e^{\alpha x}$ term represents damping (if $\alpha < 0$) or growth (if $\alpha > 0$), while the $\cos(\beta x)$ and $\sin(\beta x)$ terms describe the oscillation itself. A negative $\alpha$ means the oscillations will eventually die out, which is what we often see in physical systems due to energy dissipation. This connects directly to understanding signals and system responses as per **Course Outcome 2** and also **Course Outcome 3** if Laplace transforms are used for analysis.

### Initial Conditions and Finding Specific Solutions

The general solution $y(x) = c_1 y_1(x) + c_2 y_2(x)$ contains two arbitrary constants, $c_1$ and $c_2$. To find a *specific* solution that describes a particular physical scenario, we need to determine these constants. This is usually done using **initial conditions**.

For a second-order ODE, we typically need two initial conditions. These are often given as values of $y$ and its derivative at a specific point, say $x_0$:

*   $y(x_0) = y_0$
*   $y'(x_0) = y'_0$

By substituting these conditions into the general solution and its derivative, we get a system of two linear equations in $c_1$ and $c_2$, which we can then solve. This is where **Course Outcome 1 (Solve systems of linear equations and diagonalize matrices)** can come into play if the system of equations is solved using matrix methods, although direct substitution is often simpler for just two equations.

**Example (Continuing from distinct real roots):** Let's find the specific solution for $\frac{d^2y}{dx^2} - 5\frac{dy}{dx} + 6y = 0$ with initial conditions $y(0) = 1$ and $y'(0) = -1$.
We found the general solution to be $y(x) = c_1 e^{2x} + c_2 e^{3x}$.
First, let's find the derivative: $y'(x) = 2c_1 e^{2x} + 3c_2 e^{3x}$.

Now apply the initial conditions:
1.  $y(0) = 1$:
    $c_1 e^{2(0)} + c_2 e^{3(0)} = 1$
    $c_1(1) + c_2(1) = 1 \implies c_1 + c_2 = 1$

2.  $y'(0) = -1$:
    $2c_1 e^{2(0)} + 3c_2 e^{3(0)} = -1$
    $2c_1(1) + 3c_2(1) = -1 \implies 2c_1 + 3c_2 = -1$

We now have a system of two linear equations:
(i) $c_1 + c_2 = 1$
(ii) $2c_1 + 3c_2 = -1$

From (i), $c_1 = 1 - c_2$. Substitute this into (ii):
$2(1 - c_2) + 3c_2 = -1$
$2 - 2c_2 + 3c_2 = -1$
$2 + c_2 = -1$
$c_2 = -3$

Now substitute $c_2 = -3$ back into $c_1 = 1 - c_2$:
$c_1 = 1 - (-3) = 1 + 3 = 4$

So, $c_1 = 4$ and $c_2 = -3$.
The specific solution is $y(x) = 4e^{2x} - 3e^{3x}$.

### Summary of Key Concepts

*   **Principle of Superposition:** If $y_1$ and $y_2$ are solutions to a homogeneous linear ODE, then $c_1 y_1 + c_2 y_2$ is also a solution.
*   **General Solution:** For a second-order ODE, the general solution is a linear combination of two linearly independent solutions: $y(x) = c_1 y_1(x) + c_2 y_2(x)$.
*   **Characteristic Equation:** For $ay'' + by' + cy = 0$, the characteristic equation is $ar^2 + br + c = 0$. The roots determine the form of the solutions.
*   **Three Cases for Roots:**
    1.  **Distinct Real Roots ($r_1, r_2$):** $y(x) = c_1 e^{r_1 x} + c_2 e^{r_2 x}$.
    2.  **Repeated Real Root ($r$):** $y(x) = c_1 e^{rx} + c_2 x e^{rx}$.
    3.  **Complex Conjugate Roots ($\alpha \pm i\beta$):** $y(x) = e^{\alpha x} (c_1 \cos(\beta x) + c_2 \sin(\beta x))$.
*   **Initial Conditions:** Two initial conditions are needed to determine the constants $c_1$ and $c_2$ and find a specific solution.

### Important Points to Remember (Exam Focus)

*   Always start by forming the **characteristic equation**. This is your primary tool.
*   Be very careful to identify which of the three cases your roots fall into. A single mistake here will lead to the wrong form of the general solution.
*   For complex roots $r = \alpha \pm i\beta$, remember that the real solutions involve $e^{\alpha x} \cos(\beta x)$ and $e^{\alpha x} \sin(\beta x)$. Don't forget the $e^{\alpha x}$ damping/growth factor!
*   For repeated roots, the second solution is *always* $x$ times the first. It's $y_1 = e^{rx}$ and $y_2 = xe^{rx}$. A common mistake is forgetting the $x$.
*   When solving for $c_1$ and $c_2$ using initial conditions, make sure you differentiate your *general solution* correctly before applying the second condition.

This understanding of the general solution is fundamental. It allows us to describe the entire family of possible behaviors for a system governed by such an ODE. Once we have the general solution, we can then tailor it to the specific initial state of the system. This is directly related to **Course Outcome 2**.

### Sample Questions and Answers

**Q1. Conceptual:** What is the significance of the Principle of Superposition in the context of solving homogeneous linear ODEs?

**A1:** The Principle of Superposition is fundamental because it guarantees that if we find two linearly independent solutions to a homogeneous linear ODE, any linear combination of these solutions will also be a solution. This allows us to construct the most general possible solution, containing arbitrary constants that can be determined by initial or boundary conditions. It's the reason why finding a few "building block" solutions is sufficient to describe all possible behaviors of the system.

**Q2. Exam-Oriented:** Find the general solution of the ODE: $\frac{d^2y}{dx^2} + 2\frac{dy}{dx} + 5y = 0$.

**A2:**
The characteristic equation is $r^2 + 2r + 5 = 0$.
We use the quadratic formula $r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$r = \frac{-2 \pm \sqrt{2^2 - 4(1)(5)}}{2(1)}$
$r = \frac{-2 \pm \sqrt{4 - 20}}{2}$
$r = \frac{-2 \pm \sqrt{-16}}{2}$
$r = \frac{-2 \pm 4i}{2}$
$r = -1 \pm 2i$

These are complex conjugate roots of the form $\alpha \pm i\beta$, with $\alpha = -1$ and $\beta = 2$.
The general solution is $y(x) = e^{\alpha x} (c_1 \cos(\beta x) + c_2 \sin(\beta x))$.
Substituting the values of $\alpha$ and $\beta$:
$y(x) = e^{-x} (c_1 \cos(2x) + c_2 \sin(2x))$.

**Q3. Exam-Oriented:** Find the particular solution of the ODE $\frac{d^2y}{dx^2} - 4\frac{dy}{dx} + 4y = 0$ that satisfies $y(0) = 1$ and $y'(0) = 2$.

**A3:**
The characteristic equation is $r^2 - 4r + 4 = 0$.
Factoring, we get $(r-2)^2 = 0$.
This gives a repeated real root $r = 2$.
The general solution for repeated roots is $y(x) = c_1 e^{rx} + c_2 x e^{rx}$.
So, $y(x) = c_1 e^{2x} + c_2 x e^{2x}$.

Now, we find the derivative:
$y'(x) = \frac{d}{dx}(c_1 e^{2x} + c_2 x e^{2x})$
Using the product rule for the second term:
$y'(x) = 2c_1 e^{2x} + c_2 e^{2x} + c_2 x (2e^{2x})$
$y'(x) = (2c_1 + c_2)e^{2x} + 2c_2 x e^{2x}$

Apply initial conditions:
1.  $y(0) = 1$:
    $c_1 e^{2(0)} + c_2 (0) e^{2(0)} = 1$
    $c_1(1) + 0 = 1 \implies c_1 = 1$.

2.  $y'(0) = 2$:
    $(2c_1 + c_2)e^{2(0)} + 2c_2 (0) e^{2(0)} = 2$
    $(2c_1 + c_2)(1) + 0 = 2$
    $2c_1 + c_2 = 2$

Substitute $c_1 = 1$ into the second equation:
$2(1) + c_2 = 2$
$2 + c_2 = 2 \implies c_2 = 0$.

So, $c_1 = 1$ and $c_2 = 0$.
The particular solution is $y(x) = 1 \cdot e^{2x} + 0 \cdot x e^{2x}$.
$y(x) = e^{2x}$.

This concludes our discussion on the general solution of second-order homogeneous linear ODEs with constant coefficients. Remember these forms, practice forming the characteristic equation, and you'll be well-equipped to tackle problems in this area!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
