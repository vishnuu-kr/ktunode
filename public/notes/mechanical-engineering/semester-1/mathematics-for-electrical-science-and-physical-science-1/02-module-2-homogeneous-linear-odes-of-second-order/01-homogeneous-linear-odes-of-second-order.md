---
title: "Homogeneous linear ODEs of second order"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e83547"
status: "completed"
scrapedAt: "2026-05-20T17:39:17.887Z"
---
# Mathematics for Electrical Science and Physical Science - 1
## Module 2: Homogeneous Linear ODEs of Second Order

Welcome, everyone! In this module, we're diving into a really fundamental and powerful topic in mathematics for both electrical and physical sciences: **Homogeneous Linear Ordinary Differential Equations (ODEs) of the Second Order**. You'll see these equations popping up everywhere, from analyzing circuits and mechanical vibrations to understanding heat transfer and quantum mechanics. Our goal here is to equip you with the tools to understand and solve them, which directly ties into **Course Outcome 2 (CO2): Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.** This module will lay the groundwork for that by focusing on the "homogeneous" part with constant coefficients, which is the most common starting point.

### 1. What is a Homogeneous Linear ODE of the Second Order? Let's Break It Down.

Before we solve anything, let's understand what we're dealing with. Imagine a system where a quantity (let's call it $y$) changes over time or space, and this change depends on the current value of $y$ and its rate of change (its derivatives). An ODE describes this relationship.

*   **Ordinary Differential Equation (ODE):** This means our dependent variable (like $y$) depends on only *one* independent variable (often time, $t$, or position, $x$).
*   **Second Order:** The highest derivative in the equation is the second derivative. This usually means we're dealing with systems that have inertia or some form of "memory" of their past state beyond just the immediate rate of change. Think of a swinging pendulum – its future motion depends not just on its current speed but also on its current position.
*   **Linear:** This is crucial. In a linear ODE, the dependent variable $y$ and its derivatives ($y'$, $y''$, etc.) appear only to the first power, and they are not multiplied together. Coefficients multiplying $y$, $y'$, or $y''$ can be functions of the independent variable, but in this module, we'll focus on the simplest, yet most important case: **constant coefficients**.
*   **Homogeneous:** This means that the term that doesn't involve $y$ or its derivatives is zero. If there were a non-zero term on the right-hand side, it would be a "non-homogeneous" equation, which we'll touch upon later but is not the primary focus of this module.

So, a **Homogeneous Linear ODE of the Second Order with Constant Coefficients** looks like this:

$ay'' + by' + cy = 0$

Here:
*   $y$ is our dependent variable.
*   $y'$ is the first derivative of $y$ with respect to the independent variable (let's assume it's $x$ for now, so $y' = \frac{dy}{dx}$).
*   $y''$ is the second derivative of $y$ with respect to $x$ (so $y'' = \frac{d^2y}{dx^2}$).
*   $a$, $b$, and $c$ are **constants**. They don't change.

This form is ubiquitous. In electrical circuits, for instance, $y$ could represent the voltage across a capacitor or the current through an inductor. The constants $a$, $b$, and $c$ would relate to the resistance ($R$), inductance ($L$), and capacitance ($C$) in the circuit. For a series RLC circuit, this equation often arises when analyzing the charge on the capacitor, leading to something like $L q'' + R q' + \frac{1}{C} q = 0$. See? The structure is exactly the same.

### 2. The Characteristic Equation: Our Key to Solving

So, how do we find solutions to $ay'' + by' + cy = 0$? The secret weapon is to assume a solution of a particular form. Based on how derivatives work with exponential functions, we can guess that a solution might look like $y = e^{mx}$ for some constant $m$.

Let's test this idea:
If $y = e^{mx}$, then:
$y' = me^{mx}$
$y'' = m^2e^{mx}$

Now, let's substitute these into our general ODE:
$a(m^2e^{mx}) + b(me^{mx}) + c(e^{mx}) = 0$

We can factor out $e^{mx}$:
$e^{mx}(am^2 + bm + c) = 0$

Since $e^{mx}$ is never zero for any real or complex $m$ and $x$, for this equation to hold true, the term in the parenthesis *must* be zero:

$am^2 + bm + c = 0$

This is it! This is called the **Characteristic Equation** (or Auxiliary Equation) of the ODE. It's a simple quadratic equation in $m$. The roots of this quadratic equation, $m_1$ and $m_2$, will tell us the form of our solutions for $y$. This is a direct application of **CO2**, where finding these roots is the first step to solving the ODE.

### 3. The Three Cases of Roots and Their Solutions

The nature of the roots of the quadratic characteristic equation $am^2 + bm + c = 0$ determines the form of the general solution. We can find these roots using the familiar quadratic formula:

$m = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

Let's look at the discriminant, $\Delta = b^2 - 4ac$:

#### Case 1: Distinct Real Roots ($\Delta > 0$)

If the discriminant is positive, we get two different real values for $m$, let's call them $m_1$ and $m_2$.
For example, if our ODE was $y'' - 3y' + 2y = 0$, the characteristic equation is $m^2 - 3m + 2 = 0$.
Factoring this, we get $(m-1)(m-2) = 0$, so $m_1 = 1$ and $m_2 = 2$.

In this case, we have two independent solutions: $y_1 = e^{m_1x}$ and $y_2 = e^{m_2x}$.
The **general solution** is a linear combination of these independent solutions:

$y(x) = C_1e^{m_1x} + C_2e^{m_2x}$

where $C_1$ and $C_2$ are arbitrary constants. These constants are determined by initial conditions, which are often given in problems.

**Real-world analogy:** Imagine you're trying to control a robot arm. If its movement is described by a second-order ODE with distinct real roots, it means the arm can be moved to a target position in two distinct, simple ways, like two separate independent "modes" of movement that don't interfere with each other.

**Example:** Let's solve $y'' - 5y' + 6y = 0$.
Characteristic equation: $m^2 - 5m + 6 = 0$.
Roots: $(m-2)(m-3) = 0 \implies m_1 = 2, m_2 = 3$.
General solution: $y(x) = C_1e^{2x} + C_2e^{3x}$.

#### Case 2: Repeated Real Roots ($\Delta = 0$)

If the discriminant is zero, we get only one real value for $m$, say $m_0 = -\frac{b}{2a}$.
This gives us one solution: $y_1 = e^{m_0x}$. But a second-order ODE needs *two* independent solutions to form a general solution. What do we do?

This is where a clever trick from linear algebra and ODE theory comes in. If $m_1 = m_2 = m_0$, it turns out that another linearly independent solution is $y_2 = xe^{m_0x}$.

The **general solution** is then:

$y(x) = C_1e^{m_0x} + C_2xe^{m_0x} = (C_1 + C_2x)e^{m_0x}$

**Real-world analogy:** Think about how a damped spring system behaves. If it's critically damped (which corresponds to repeated real roots), it returns to its equilibrium position as quickly as possible without oscillating. The $xe^{m_0x}$ term represents this slightly different decay behavior compared to a simple $e^{m_0x}$ decay.

**Example:** Let's solve $y'' + 4y' + 4y = 0$.
Characteristic equation: $m^2 + 4m + 4 = 0$.
Roots: $(m+2)^2 = 0 \implies m_1 = m_2 = -2$.
Here, $m_0 = -2$.
General solution: $y(x) = C_1e^{-2x} + C_2xe^{-2x} = (C_1 + C_2x)e^{-2x}$.

#### Case 3: Complex Conjugate Roots ($\Delta < 0$)

If the discriminant is negative, the roots are complex. They will always come in conjugate pairs, of the form $m = \alpha \pm i\beta$, where $i = \sqrt{-1}$.
So, $m_1 = \alpha + i\beta$ and $m_2 = \alpha - i\beta$.

Substituting these into $y = e^{mx}$ would give us solutions involving $e^{(\alpha + i\beta)x}$ and $e^{(\alpha - i\beta)x}$. Using Euler's formula ($e^{i\theta} = \cos\theta + i\sin\theta$), we can rewrite these complex exponential solutions into real-valued solutions involving sines and cosines.

The two independent real solutions are found to be $e^{\alpha x}\cos(\beta x)$ and $e^{\alpha x}\sin(\beta x)$.

The **general solution** becomes:

$y(x) = e^{\alpha x}(C_1\cos(\beta x) + C_2\sin(\beta x))$

**Real-world analogy:** This case is very common in physics and engineering, particularly for oscillatory systems. Think of a swing set with some friction (damping). The oscillation frequency is related to $\beta$, and the rate at which the oscillations die down (or grow, if there's energy input) is related to $\alpha$. If $\alpha < 0$, the oscillations decay. If $\alpha > 0$, they grow (unstable system). If $\alpha = 0$, they continue forever with constant amplitude.

**Example:** Let's solve $y'' + 2y' + 5y = 0$.
Characteristic equation: $m^2 + 2m + 5 = 0$.
Using the quadratic formula: $m = \frac{-2 \pm \sqrt{2^2 - 4(1)(5)}}{2(1)} = \frac{-2 \pm \sqrt{4 - 20}}{2} = \frac{-2 \pm \sqrt{-16}}{2} = \frac{-2 \pm 4i}{2} = -1 \pm 2i$.
Here, $\alpha = -1$ and $\beta = 2$.
General solution: $y(x) = e^{-x}(C_1\cos(2x) + C_2\sin(2x))$.

### 4. Initial Conditions and Finding Specific Solutions

Remember those constants $C_1$ and $C_2$? They are crucial for finding a *specific* solution that matches a particular physical scenario. This is where initial conditions come into play, which is a direct step in applying the solutions we find, aligning with **CO2**.

Initial conditions usually give us the value of $y$ and its first derivative $y'$ at a specific point, say $x=0$. For instance:
*   $y(0) = y_0$
*   $y'(0) = y'_0$

Let's take our example $y'' - 5y' + 6y = 0$, with the general solution $y(x) = C_1e^{2x} + C_2e^{3x}$.
Suppose we are given initial conditions $y(0) = 1$ and $y'(0) = 0$.

First, let's find $y'(x)$:
$y'(x) = 2C_1e^{2x} + 3C_2e^{3x}$.

Now, apply the initial conditions:
1.  $y(0) = 1$:
    $1 = C_1e^{2(0)} + C_2e^{3(0)}$
    $1 = C_1(1) + C_2(1) \implies C_1 + C_2 = 1$

2.  $y'(0) = 0$:
    $0 = 2C_1e^{2(0)} + 3C_2e^{3(0)}$
    $0 = 2C_1(1) + 3C_2(1) \implies 2C_1 + 3C_2 = 0$

Now we have a system of two linear equations with two unknowns ($C_1$ and $C_2$):
(1) $C_1 + C_2 = 1$
(2) $2C_1 + 3C_2 = 0$

From (1), $C_1 = 1 - C_2$. Substitute this into (2):
$2(1 - C_2) + 3C_2 = 0$
$2 - 2C_2 + 3C_2 = 0$
$2 + C_2 = 0 \implies C_2 = -2$

Now, substitute $C_2 = -2$ back into $C_1 = 1 - C_2$:
$C_1 = 1 - (-2) = 3$

So, $C_1 = 3$ and $C_2 = -2$.
The **specific solution** satisfying the given initial conditions is:

$y(x) = 3e^{2x} - 2e^{3x}$

**Common Pitfall:** Make sure you differentiate the general solution correctly before applying the initial conditions for $y'$. Also, be careful with algebraic manipulations when solving for $C_1$ and $C_2$.

### 5. Connection to Course Outcomes

Let's reiterate how this topic directly supports our course objectives:

*   **CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.**
    *   This entire module is dedicated to the **homogeneous** part. We've learned to identify the structure, derive the characteristic equation, find its roots (real distinct, real repeated, complex), and construct the general solution based on these roots. The process of applying initial conditions to find specific solutions is also a key part of solving ODEs. Later in the course, you'll build on this to tackle non-homogeneous cases.

*   **CO1: Solve systems of linear equations and diagonalize matrices.**
    *   You might not see it immediately, but the characteristic equation $am^2+bm+c=0$ is derived from a system-like problem. Also, the process of solving for $C_1$ and $C_2$ using initial conditions involves solving a system of linear equations. While we haven't explicitly used matrix diagonalization *here*, understanding the roots of polynomials (which the characteristic equation is) is a foundational concept that extends to eigenvalues and eigenvectors in linear algebra, which are used heavily in matrix diagonalization.

*   **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.**
    *   Laplace transforms are an alternative, powerful method for solving ODEs, especially those with initial conditions. The techniques we're learning here—finding the characteristic equation and understanding the nature of solutions—are directly transferable to the Laplace transform method, as the roots of the characteristic equation are intimately related to the poles of the transformed function.

*   **CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.**
    *   While seemingly unrelated, the solutions we've found, like $e^{mx}$ and $\sin(\beta x)$, $\cos(\beta x)$, are functions that can be represented by Taylor series. Understanding the behavior of these solutions is enhanced by knowing their series expansions. For instance, $e^{mx} = 1 + mx + \frac{(mx)^2}{2!} + \dots$. This connects our ODE solutions to the broader topic of function representation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### 6. Textbooks and References - Where to Look for More

The concepts we've covered are extensively detailed in your recommended texts.

*   **Kreyszig's Advanced Engineering Mathematics (10th Ed.)** is your primary reference for this topic. Chapters on ordinary differential equations, particularly those dealing with linear equations with constant coefficients, will provide a more rigorous mathematical treatment and a wealth of examples. Look for sections on the characteristic equation and the three cases of roots.
*   **Anton, Bivens, Davis' Calculus (12th Ed.)** will reinforce the calculus underpinnings, especially differentiation rules needed for finding $y'$ and $y''$, and solving quadratic equations.
*   **Bird's Higher Engineering Mathematics (9th Ed.)** and **Ramana's Higher Engineering Mathematics (39th Ed.)** are excellent practical resources. They often present the material in a very accessible way, with numerous worked examples directly applicable to engineering problems. You'll find that their approach to solving these ODEs mirrors exactly what we've done.
*   **Thomas' Calculus** and **Stewart's Essential Calculus** provide foundational calculus knowledge that supports the manipulation of derivatives and exponential/trigonometric functions we use here.
*   **Anton & Rorres' Elementary Linear Algebra** is relevant because, as mentioned, solving for constants often involves linear systems, and the underlying theory of linear ODEs connects to concepts of vector spaces and linear independence, which are central to linear algebra.
*   **Haykin & Van Veen's Signals and Systems** is where you'll see these ODEs applied in a very concrete way, particularly when analyzing RLC circuits or mechanical systems. It demonstrates *why* these equations are so important in physical science and engineering.

### 7. Summary and Key Takeaways

To wrap up this section on homogeneous linear ODEs of the second order with constant coefficients:

*   **The Form:** $ay'' + by' + cy = 0$, where $a, b, c$ are constants.
*   **The Tool:** The characteristic equation $am^2 + bm + c = 0$.
*   **The Roots:** Their nature (distinct real, repeated real, complex conjugate) dictates the form of the general solution.
    *   $m_1, m_2$ (real, distinct) $\implies y = C_1e^{m_1x} + C_2e^{m_2x}$
    *   $m_0$ (real, repeated) $\implies y = (C_1 + C_2x)e^{m_0x}$
    *   $\alpha \pm i\beta$ (complex conjugate) $\implies y = e^{\alpha x}(C_1\cos(\beta x) + C_2\sin(\beta x))$
*   **The Specifics:** Use initial conditions ($y(x_0)=y_0$, $y'(x_0)=y'_0$) to find the values of $C_1$ and $C_2$.

Remember this: The characteristic equation is your gateway. Once you have the roots, you have the building blocks for your solution. The specific form of these solutions (exponential, sine/cosine) tells you about the behavior of the system—whether it decays, oscillates, or grows.

***

## Sample Questions with Answers

Here are a few questions to test your understanding, ranging from conceptual checks to application problems.

**Question 1 (Conceptual):**
What is the characteristic equation for the ODE $3y'' - 2y' + y = 0$?
a) $3m^2 - 2m + 1 = 0$
b) $3m^2 + 2m + 1 = 0$
c) $m^2 - 2m + 3 = 0$
d) $3m^2 - 2m = 0$

**Answer:**
The correct answer is **a) $3m^2 - 2m + 1 = 0$**.
**Reasoning:** To find the characteristic equation, we replace $y''$ with $m^2$, $y'$ with $m$, and $y$ with $1$ in the ODE $ay'' + by' + cy = 0$. So, for $3y'' - 2y' + y = 0$, it becomes $3m^2 - 2m + 1 = 0$.

**Question 2 (Application - Finding General Solution):**
Find the general solution to the differential equation $y'' + 6y' + 9y = 0$.

**Answer:**
1.  **Characteristic Equation:** $m^2 + 6m + 9 = 0$.
2.  **Solve for roots:** This factors as $(m+3)^2 = 0$. So, we have a repeated real root $m_1 = m_2 = -3$.
3.  **General Solution Form:** For repeated real roots $m_0$, the solution is $y(x) = (C_1 + C_2x)e^{m_0x}$.
4.  **Substitute:** With $m_0 = -3$, the general solution is $y(x) = (C_1 + C_2x)e^{-3x}$.

**Question 3 (Application - Specific Solution with Initial Conditions):**
Solve the initial value problem: $y'' - y = 0$, with $y(0) = 2$ and $y'(0) = 0$.

**Answer:**
1.  **Characteristic Equation:** $m^2 - 1 = 0$.
2.  **Solve for roots:** This factors as $(m-1)(m+1) = 0$. So, we have two distinct real roots: $m_1 = 1$ and $m_2 = -1$.
3.  **General Solution:** For distinct real roots, the solution is $y(x) = C_1e^{m_1x} + C_2e^{m_2x}$. Substituting the roots, we get $y(x) = C_1e^{x} + C_2e^{-x}$.
4.  **Find the derivative:** $y'(x) = C_1e^{x} - C_2e^{-x}$.
5.  **Apply initial conditions:**
    *   $y(0) = 2 \implies C_1e^0 + C_2e^0 = 2 \implies C_1 + C_2 = 2$.
    *   $y'(0) = 0 \implies C_1e^0 - C_2e^0 = 0 \implies C_1 - C_2 = 0$.
6.  **Solve for $C_1$ and $C_2$:**
    From $C_1 - C_2 = 0$, we get $C_1 = C_2$.
    Substituting into $C_1 + C_2 = 2$, we get $C_1 + C_1 = 2 \implies 2C_1 = 2 \implies C_1 = 1$.
    Since $C_1 = C_2$, we have $C_2 = 1$.
7.  **Specific Solution:** Substituting $C_1=1$ and $C_2=1$ into the general solution, we get $y(x) = 1e^{x} + 1e^{-x}$, or $y(x) = e^x + e^{-x}$. (Note: This can also be written as $y(x) = 2\cosh(x)$).

**Question 4 (Conceptual - Behavior Prediction):**
Consider an ODE whose characteristic equation has roots $\alpha \pm i\beta$ with $\alpha = -2$ and $\beta = 3$. What can you say about the behavior of the solutions as $x \to \infty$?

**Answer:**
The general solution form for complex conjugate roots is $y(x) = e^{\alpha x}(C_1\cos(\beta x) + C_2\sin(\beta x))$.
In this case, $y(x) = e^{-2x}(C_1\cos(3x) + C_2\sin(3x))$.
As $x \to \infty$, the term $e^{-2x}$ approaches 0. The term in the parenthesis oscillates between some maximum and minimum values (depending on $C_1$ and $C_2$).
Therefore, as $x \to \infty$, the solutions will **decay to zero**, while oscillating. This is characteristic of a **damped oscillatory system**.