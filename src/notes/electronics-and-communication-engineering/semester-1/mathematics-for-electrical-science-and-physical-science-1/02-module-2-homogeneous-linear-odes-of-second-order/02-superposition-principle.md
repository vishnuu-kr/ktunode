---
title: "Superposition principle"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fb7"
status: "completed"
scrapedAt: "2026-05-23T17:34:47.764Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 2: Homogeneous Linear ODEs of Second Order

### Topic: The Superposition Principle

Welcome, everyone! Today, we're diving into a fundamental concept that underpins much of our work with linear differential equations: the **Superposition Principle**. This principle is incredibly powerful, especially when we're dealing with homogeneous linear ODEs, and it directly helps us achieve **Course Outcome 2 (CO2)**: "Solve homogeneous and non-homogeneous linear differential equations with constant coefficients." Understanding superposition is key to building solutions from simpler parts, a concept that will echo through your studies in signals and systems, and even in linear algebra (where you'll see similar ideas in vector spaces).

Let's start by setting the stage. We're focusing on **homogeneous linear ODEs of the second order**. What does that mean? A second-order ODE involves the second derivative of the unknown function, say $y(x)$, with respect to $x$. It's **linear** if $y$ and its derivatives ($y'$ and $y''$) appear only to the first power and are not multiplied together. And it's **homogeneous** if the right-hand side of the equation is zero. So, we're talking about equations of the form:

$a y'' + b y' + c y = 0$

where $a$, $b$, and $c$ are constants, and $a \neq 0$.

Think of this equation as a system that has no external "forcing" or "input." It's just describing the internal dynamics of a system. Now, what happens when we have multiple "inputs" or "causes" in a linear system? That's where superposition comes in.

### What is the Superposition Principle?

At its heart, the Superposition Principle for homogeneous linear ODEs states that **if you have two (or more) solutions to a homogeneous linear ODE, then any linear combination of these solutions is also a solution.**

Let's break this down. Imagine we have our ODE:

$L(y) = a y'' + b y' + c y = 0$

where $L$ is what we call a **linear differential operator**.

Now, suppose we've found two distinct functions, $y_1(x)$ and $y_2(x)$, such that:

1.  $L(y_1) = a y_1'' + b y_1' + c y_1 = 0$
2.  $L(y_2) = a y_2'' + b y_2' + c y_2 = 0$

This means both $y_1$ and $y_2$ satisfy the original homogeneous equation. They are valid solutions on their own.

The Superposition Principle tells us that any linear combination of $y_1$ and $y_2$ will also be a solution. What do we mean by "linear combination"? It means taking a constant, say $c_1$, multiplying $y_1$ by it, taking another constant, $c_2$, multiplying $y_2$ by it, and adding them up:

$y(x) = c_1 y_1(x) + c_2 y_2(x)$

where $c_1$ and $c_2$ are arbitrary constants.

Let's see *why* this works, using the linearity of the operations:

$L(c_1 y_1 + c_2 y_2) = a (c_1 y_1 + c_2 y_2)'' + b (c_1 y_1 + c_2 y_2)' + c (c_1 y_1 + c_2 y_2)$

Because differentiation is a linear operation, we can distribute:
$(c_1 y_1 + c_2 y_2)' = c_1 y_1' + c_2 y_2'$
$(c_1 y_1 + c_2 y_2)'' = c_1 y_1'' + c_2 y_2''$

So, substituting back:

$L(c_1 y_1 + c_2 y_2) = a (c_1 y_1'' + c_2 y_2'') + b (c_1 y_1' + c_2 y_2') + c (c_1 y_1 + c_2 y_2)$

Now, let's regroup terms by $c_1$ and $c_2$:

$L(c_1 y_1 + c_2 y_2) = c_1 (a y_1'' + b y_1' + c y_1) + c_2 (a y_2'' + b y_2' + c y_2)$

And we know that $(a y_1'' + b y_1' + c y_1) = 0$ and $(a y_2'' + b y_2' + c y_2) = 0$ because $y_1$ and $y_2$ are solutions.

So,

$L(c_1 y_1 + c_2 y_2) = c_1 (0) + c_2 (0) = 0$

This confirms that $y(x) = c_1 y_1(x) + c_2 y_2(x)$ is indeed a solution to the homogeneous ODE.

**Crucial Point:** This principle *only* applies to **linear** operators and **homogeneous** equations. If the equation were non-homogeneous ($a y'' + b y' + c y = g(x)$ with $g(x) \neq 0$), or if the equation were non-linear (e.g., involving $y^2$ or $\sin(y)$), superposition would not generally hold.

### An Analogy: Dominoes and Music

Let's try to make this tangible. Imagine you're building a complex structure with LEGOs. If you have two ways to build a stable base, say base $A$ and base $B$, and you want to build a tower on top, the Superposition Principle is like saying:

*   If I build base $A$ and then add a tower, it stands up.
*   If I build base $B$ and then add a tower, it stands up.
*   Then, if I build base $A$ *and* base $B$ side-by-side (or perhaps one supporting the other in a specific linear way, like a combination of their effects) and add the towers to both, the whole thing will remain stable.

The "stability" here is analogous to being a "solution" to the ODE.

Or consider music. If a musical instrument can produce a pure tone $A$ (which is like a solution $y_1$) and a pure tone $B$ (like a solution $y_2$), then when played together, you get a combination of $A$ and $B$ (like $c_1 y_1 + c_2 y_2$). For a linear instrument (and thankfully, most musical instruments are *close* to linear in their behaviour), the resulting sound is precisely the sum of the individual sounds. This is superposition in action!

### The Importance of Linear Independence

The Superposition Principle tells us that we can *form* new solutions from existing ones. But to find the *general solution* to a second-order homogeneous linear ODE, we need something more. We need to know when our solutions $y_1$ and $y_2$ are "different enough" such that *all* possible solutions can be represented as a linear combination of them.

This leads us to the concept of **linear independence**. Two solutions, $y_1(x)$ and $y_2(x)$, are **linearly independent** if neither can be expressed as a constant multiple of the other. In other words, you can't get $y_2$ just by multiplying $y_1$ by some constant, or vice-versa.

If $y_1$ and $y_2$ are linearly independent solutions to a second-order homogeneous linear ODE, then their linear combination, $y(x) = c_1 y_1(x) + c_2 y_2(x)$, forms the **general solution**. This means that *any* solution to the ODE can be written in this form for some specific choices of $c_1$ and $c_2$. This is directly tied to **CO2** as it's the ultimate goal of solving these equations.

How do we check for linear independence? For solutions to second-order linear ODEs, we often use the **Wronskian**.

#### The Wronskian

The Wronskian of two functions $y_1(x)$ and $y_2(x)$ is defined as the determinant of the matrix:

$W(y_1, y_2)(x) = \begin{vmatrix} y_1(x) & y_2(x) \\ y_1'(x) & y_2'(x) \end{vmatrix} = y_1(x) y_2'(x) - y_2(x) y_1'(x)$

Now, here's a very important theorem (often found in Kreyszig, Chapter 4, or Bird's Higher Engineering Mathematics, Chapter 9):

*   If $y_1(x)$ and $y_2(x)$ are two solutions to $a y'' + b y' + c y = 0$ on an interval where $a, b, c$ are continuous and $a \neq 0$, and if the Wronskian $W(y_1, y_2)(x)$ is **non-zero** for at least one point in that interval, then $y_1$ and $y_2$ are linearly independent on that interval. Furthermore, if they are linearly independent, the Wronskian will be non-zero at *all* points in the interval.

In simpler terms: if you find two solutions, and their Wronskian is not zero, they are linearly independent, and their combination is the general solution. If their Wronskian *is* zero, they are linearly dependent, meaning one is just a multiple of the other, and they don't give us enough "information" to form the general solution.

### Example: Simple Harmonic Motion

Consider the equation for a simple harmonic oscillator (like a mass on a spring with no friction):

$y'' + \omega^2 y = 0$

Here, $a=1$, $b=0$, $c=\omega^2$. Let's assume $\omega \neq 0$.

We know from our studies (or can verify) that two fundamental solutions are:

$y_1(x) = \cos(\omega x)$
$y_2(x) = \sin(\omega x)$

Let's check if they satisfy the equation:
For $y_1 = \cos(\omega x)$: $y_1' = -\omega \sin(\omega x)$, $y_1'' = -\omega^2 \cos(\omega x)$.
$y_1'' + \omega^2 y_1 = (-\omega^2 \cos(\omega x)) + \omega^2 (\cos(\omega x)) = 0$. Yes!

For $y_2 = \sin(\omega x)$: $y_2' = \omega \cos(\omega x)$, $y_2'' = -\omega^2 \sin(\omega x)$.
$y_2'' + \omega^2 y_2 = (-\omega^2 \sin(\omega x)) + \omega^2 (\sin(\omega x)) = 0$. Yes!

So, both $y_1$ and $y_2$ are solutions. Now, let's apply the Superposition Principle. According to it, any function of the form:

$y(x) = c_1 \cos(\omega x) + c_2 \sin(\omega x)$

should also be a solution. Let's verify this using the Wronskian for linear independence.

$y_1(x) = \cos(\omega x) \implies y_1'(x) = -\omega \sin(\omega x)$
$y_2(x) = \sin(\omega x) \implies y_2'(x) = \omega \cos(\omega x)$

$W(y_1, y_2)(x) = \begin{vmatrix} \cos(\omega x) & \sin(\omega x) \\ -\omega \sin(\omega x) & \omega \cos(\omega x) \end{vmatrix}$

$W(y_1, y_2)(x) = (\cos(\omega x))(\omega \cos(\omega x)) - (\sin(\omega x))(-\omega \sin(\omega x))$
$W(y_1, y_2)(x) = \omega \cos^2(\omega x) + \omega \sin^2(\omega x)$
$W(y_1, y_2)(x) = \omega (\cos^2(\omega x) + \sin^2(\omega x))$

Using the fundamental trigonometric identity $\cos^2\theta + \sin^2\theta = 1$:

$W(y_1, y_2)(x) = \omega (1) = \omega$

Since we assumed $\omega \neq 0$, the Wronskian is $\omega$, which is non-zero. This means $y_1 = \cos(\omega x)$ and $y_2 = \sin(\omega x)$ are linearly independent solutions.

Therefore, the **general solution** to $y'' + \omega^2 y = 0$ is:

$y(x) = c_1 \cos(\omega x) + c_2 \sin(\omega x)$

This general solution contains all possible solutions. By choosing specific values for $c_1$ and $c_2$, we can satisfy initial conditions (like $y(0) = A$ and $y'(0) = B$), which is crucial in applications. This directly relates to **CO2** again, as finding the general solution is the main goal.

### Connection to Initial Value Problems (IVPs) and Boundary Value Problems (BVPs)

The Superposition Principle is vital for solving IVPs and BVPs. An IVP specifies the value of the solution and its derivative at a single point (e.g., $y(x_0) = y_0$, $y'(x_0) = y_1$). A BVP specifies conditions at two different points.

Once we have the general solution in the form $y(x) = c_1 y_1(x) + c_2 y_2(x)$, we can use the initial or boundary conditions to find the specific values of $c_1$ and $c_2$ that satisfy those conditions.

For instance, with $y(x) = c_1 \cos(\omega x) + c_2 \sin(\omega x)$ and initial conditions $y(0) = A$, $y'(0) = B$:

$y(0) = c_1 \cos(0) + c_2 \sin(0) = c_1(1) + c_2(0) = c_1$. So, $c_1 = A$.

Now, we need $y'(x)$:
$y'(x) = -c_1 \omega \sin(\omega x) + c_2 \omega \cos(\omega x)$

$y'(0) = -c_1 \omega \sin(0) + c_2 \omega \cos(0) = -c_1 \omega (0) + c_2 \omega (1) = c_2 \omega$.
So, $c_2 \omega = B$, which means $c_2 = B/\omega$ (assuming $\omega \neq 0$).

The specific solution to the IVP is then $y(x) = A \cos(\omega x) + (B/\omega) \sin(\omega x)$. This process highlights how superposition allows us to build a unique solution tailored to specific physical constraints.

### Key Takeaways and Exam Relevance

*   **The Core Idea:** If $y_1$ and $y_2$ are solutions to a homogeneous linear ODE, then $c_1 y_1 + c_2 y_2$ is also a solution. This is the essence of superposition.
*   **Linearity is Key:** This principle is a direct consequence of the linearity of the differential operator.
*   **General Solution:** To find the *general solution* of a second-order homogeneous linear ODE, you need *two linearly independent* solutions. Their linear combination forms the general solution.
*   **Wronskian:** The Wronskian is your tool to check for linear independence of solutions. If $W(y_1, y_2) \neq 0$, they are linearly independent.
*   **Application:** Superposition is fundamental for constructing solutions to initial and boundary value problems, which are common in physics and engineering. It's how we combine simpler behaviors to describe complex phenomena.

This topic is central to **CO2**. When you're asked to find the general solution of a homogeneous linear ODE, you'll be looking for those two linearly independent solutions and combining them. Understanding superposition ensures you know *why* that combination works and is indeed the most general form of the solution.

Remember this: the ability to break down a complex system's behavior into a combination of simpler, fundamental behaviors is a hallmark of working with linear systems, and superposition is the mathematical tool that enables this.

---

## Sample Questions with Answers

Here are a few questions to test your understanding, covering both the concept and how it might appear in an exam.

**Question 1 (Conceptual):**
State the Superposition Principle for homogeneous linear differential equations of second order. Explain why it holds.

**Answer:**
The Superposition Principle states that if $y_1(x)$ and $y_2(x)$ are two solutions to a homogeneous linear second-order differential equation $a y'' + b y' + c y = 0$, then any linear combination of these solutions, $y(x) = c_1 y_1(x) + c_2 y_2(x)$ (where $c_1$ and $c_2$ are arbitrary constants), is also a solution to the same differential equation.

It holds because the differential operator $L(y) = a y'' + b y' + c y$ is a **linear operator**. This means it satisfies two properties:
1.  **Additivity:** $L(y_1 + y_2) = L(y_1) + L(y_2)$
2.  **Homogeneity of Degree 1:** $L(c y) = c L(y)$ for any scalar $c$.

Using these properties, we can show:
$L(c_1 y_1 + c_2 y_2) = L(c_1 y_1) + L(c_2 y_2) = c_1 L(y_1) + c_2 L(y_2)$.
Since $y_1$ and $y_2$ are solutions, $L(y_1) = 0$ and $L(y_2) = 0$.
Therefore, $L(c_1 y_1 + c_2 y_2) = c_1(0) + c_2(0) = 0$. This demonstrates that the linear combination is also a solution.

**Question 2 (Application/Exam-Oriented):**
Consider the differential equation $y'' - 5y' + 6y = 0$.
Verify that $y_1(x) = e^{2x}$ and $y_2(x) = e^{3x}$ are solutions. Then, using the Superposition Principle, state the general solution and calculate its Wronskian.

**Answer:**
**Verification:**
For $y_1(x) = e^{2x}$:
$y_1'(x) = 2e^{2x}$
$y_1''(x) = 4e^{2x}$
Substitute into the ODE: $(4e^{2x}) - 5(2e^{2x}) + 6(e^{2x}) = 4e^{2x} - 10e^{2x} + 6e^{2x} = (4 - 10 + 6)e^{2x} = 0e^{2x} = 0$.
So, $y_1(x) = e^{2x}$ is a solution.

For $y_2(x) = e^{3x}$:
$y_2'(x) = 3e^{3x}$
$y_2''(x) = 9e^{3x}$
Substitute into the ODE: $(9e^{3x}) - 5(3e^{3x}) + 6(e^{3x}) = 9e^{3x} - 15e^{3x} + 6e^{3x} = (9 - 15 + 6)e^{3x} = 0e^{3x} = 0$.
So, $y_2(x) = e^{3x}$ is a solution.

**General Solution using Superposition:**
Since $y_1$ and $y_2$ are solutions, the Superposition Principle states that any linear combination $y(x) = c_1 y_1(x) + c_2 y_2(x)$ is also a solution.
Thus, the general solution is $y(x) = c_1 e^{2x} + c_2 e^{3x}$.

**Wronskian Calculation:**
We need to calculate $W(y_1, y_2)(x) = y_1 y_2' - y_2 y_1'$.
$y_1(x) = e^{2x}$
$y_1'(x) = 2e^{2x}$
$y_2(x) = e^{3x}$
$y_2'(x) = 3e^{3x}$

$W(y_1, y_2)(x) = (e^{2x})(3e^{3x}) - (e^{3x})(2e^{2x})$
$W(y_1, y_2)(x) = 3e^{5x} - 2e^{5x}$
$W(y_1, y_2)(x) = e^{5x}$

Since $e^{5x}$ is never zero for any real $x$, the solutions $y_1(x) = e^{2x}$ and $y_2(x) = e^{3x}$ are linearly independent, and $y(x) = c_1 e^{2x} + c_2 e^{3x}$ is indeed the general solution. This confirms our understanding for **CO2**.

**Question 3 (Pitfall/Conceptual):**
Which of the following equations would the Superposition Principle *not* generally apply to?
(a) $y'' + 2y' + y = 0$
(b) $y'' + \sin(x) y = 0$
(c) $y'' + y^2 = 0$
(d) $y'' + e^x y' = 0$

**Answer:**
The Superposition Principle applies to **homogeneous linear** ODEs. Let's examine each option:
(a) $y'' + 2y' + y = 0$: This is a homogeneous linear ODE with constant coefficients. Superposition applies.
(b) $y'' + \sin(x) y = 0$: This is a homogeneous linear ODE, but the coefficient $\sin(x)$ is not constant. However, the *linearity* property still holds for the operator $L(y) = y'' + \sin(x) y$. So, superposition *does* apply here.
(c) $y'' + y^2 = 0$: This ODE is **non-linear** because of the $y^2$ term. The operator $L(y) = y'' + y^2$ is not linear ($L(cy) = (cy)'' + (cy)^2 = c y'' + c^2 y^2 \neq c(y''+y^2)$). Therefore, Superposition does **not** generally apply.
(d) $y'' + e^x y' = 0$: This is a homogeneous linear ODE with a non-constant coefficient $e^x$. The operator $L(y) = y'' + e^x y'$ is linear, so superposition *does* apply.

The correct answer is **(c)**. This question tests your understanding of the conditions under which superposition is valid, directly relating to the "linear" and "homogeneous" aspects of the ODEs we're studying for **CO2**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
