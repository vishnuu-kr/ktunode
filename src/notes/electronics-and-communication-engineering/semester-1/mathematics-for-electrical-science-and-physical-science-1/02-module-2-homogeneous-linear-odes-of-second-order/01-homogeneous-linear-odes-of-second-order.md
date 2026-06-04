---
title: "Homogeneous linear ODEs of second order"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fb6"
status: "completed"
scrapedAt: "2026-05-23T17:34:47.037Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 1
## Module 2: Homogeneous Linear ODEs of Second Order

Welcome, everyone, to our exploration of second-order homogeneous linear ordinary differential equations (ODEs)! This is a cornerstone topic in mathematics for both electrical and physical sciences, and understanding it will unlock a lot of doors in your studies. We’re going to build a solid foundation here, connecting directly to **Course Outcome 2 (CO2)**: *Solve homogeneous and non-homogeneous linear differential equations with constant coefficients.* This module is all about the *homogeneous* part, and we’ll be setting the stage for the non-homogeneous cases later on. Think of it as learning to walk before we can run complex engineering problems.

Remember, the power of differential equations lies in their ability to describe how systems change over time or space. Second-order ODEs, in particular, are crucial for modeling phenomena involving acceleration, like the motion of a mass on a spring, or the behavior of electrical circuits with capacitors and inductors.

Let's dive in!

---

### 1. What is a Homogeneous Linear ODE of Second Order?

Before we solve anything, we need to be crystal clear about what we're dealing with.

A **differential equation** is an equation that involves derivatives of an unknown function.
An **ordinary differential equation (ODE)** involves derivatives with respect to only *one* independent variable.
A **linear ODE** is one where the dependent variable and its derivatives appear only to the first power, and there are no products of the dependent variable or its derivatives.

Now, let's put it all together for our topic:

A **homogeneous linear ODE of second order** has the general form:

$$a y'' + b y' + c y = 0$$

Here’s what each part means:

*   **$y$**: This is our unknown function, often representing a physical quantity like position, voltage, or current. It depends on a single independent variable, usually denoted by $x$ or $t$.
*   **$y'$**: This is the first derivative of $y$ with respect to the independent variable.
*   **$y''$**: This is the second derivative of $y$ with respect to the independent variable.
*   **$a$, $b$, $c$**: These are **constants**. This is a *very* important simplification for us right now. If $a$, $b$, and $c$ were functions of $x$, the problem would be much harder!
*   **Homogeneous**: The right-hand side of the equation is **zero**. If it were a non-zero function of $x$ (say, $g(x)$), it would be a *non-homogeneous* equation, which we'll tackle later.
*   **Linear**: $y$, $y'$, and $y''$ appear only to the first power, and there are no terms like $y^2$, $(y')^3$, or $y \cdot y'$.

Think of this equation as describing a system where the rate of change ($y'$) and the rate of change of the rate of change ($y''$) are proportional to the current state of the system ($y$), with constant proportionality constants ($a, b, c$).

**Example Analogy:** Imagine a simple mechanical system with a mass attached to a spring. The force exerted by the spring is proportional to its displacement ($F_{spring} = -kx$, where $k$ is the spring constant). If we also consider damping (like friction, proportional to velocity, $F_{damping} = -bv$, where $b$ is the damping coefficient), Newton's second law ($F = ma$) gives us $m a = -kx - bv$. Since acceleration $a = y''$ (where $y$ is displacement) and velocity $v = y'$, we get $m y'' + b y' + k y = 0$. This is exactly our form $a y'' + b y' + c y = 0$, with $a=m$, $b=b$, and $c=k$. This equation governs the motion of the mass-spring-damper system.

**Connection to Course Outcomes:** Understanding this form is the very first step to achieving **CO2**. We are learning the basic structure of the equations we will be solving.

---

### 2. The Characteristic Equation: Our Magic Key

The key to solving homogeneous linear ODEs with constant coefficients lies in a clever trick: we *assume* a solution of the form $y = e^{\lambda x}$ (or $y = e^{\lambda t}$ if our variable is time $t$). Why this form? Because the derivatives of $e^{\lambda x}$ are just multiples of $e^{\lambda x}$ itself, which nicely matches the structure of our ODE.

Let's try this assumed solution $y = e^{\lambda x}$.
Then, the first derivative is $y' = \lambda e^{\lambda x}$.
And the second derivative is $y'' = \lambda^2 e^{\lambda x}$.

Now, let's substitute these into our general ODE: $a y'' + b y' + c y = 0$.

$a (\lambda^2 e^{\lambda x}) + b (\lambda e^{\lambda x}) + c (e^{\lambda x}) = 0$

Notice that $e^{\lambda x}$ is a common factor. Since $e^{\lambda x}$ is never zero, we can divide it out:

$a \lambda^2 e^{\lambda x} + b \lambda e^{\lambda x} + c e^{\lambda x} = 0$

Dividing by $e^{\lambda x}$ gives us:

$$a \lambda^2 + b \lambda + c = 0$$

This is the **characteristic equation** (sometimes called the auxiliary equation). It's a simple quadratic equation in $\lambda$. The roots of this quadratic equation will tell us the form of our solutions for $y$. This is a brilliant piece of insight, often highlighted in textbooks like Kreyszig's "Advanced Engineering Mathematics."

**Why is this so important?** Because if we find values of $\lambda$ that satisfy this characteristic equation, then $y = e^{\lambda x}$ *is* a solution to the original ODE. The power of linear ODEs is that the solutions behave nicely – if $y_1$ and $y_2$ are solutions, then any linear combination $C_1 y_1 + C_2 y_2$ is also a solution.

**Exam Tip:** Always, always, *always* start by forming the characteristic equation. It’s the direct pathway to finding the solutions.

---

### 3. Cases for the Roots of the Characteristic Equation

The nature of the roots of the quadratic characteristic equation $a \lambda^2 + b \lambda + c = 0$ dictates the form of our general solution. There are three distinct cases, depending on the discriminant, $\Delta = b^2 - 4ac$.

#### Case 1: Distinct Real Roots ($\Delta > 0$)

If the discriminant $b^2 - 4ac$ is positive, the quadratic equation will have two different real roots, let's call them $\lambda_1$ and $\lambda_2$.

So, we have $\lambda_1 = \frac{-b + \sqrt{b^2 - 4ac}}{2a}$ and $\lambda_2 = \frac{-b - \sqrt{b^2 - 4ac}}{2a}$, with $\lambda_1 \neq \lambda_2$.

Since $y_1 = e^{\lambda_1 x}$ and $y_2 = e^{\lambda_2 x}$ are both solutions, and they are linearly independent (because the exponents are different), the **general solution** to the ODE is a linear combination of these two:

$$y(x) = C_1 e^{\lambda_1 x} + C_2 e^{\lambda_2 x}$$

where $C_1$ and $C_2$ are arbitrary constants.

**Example:** Solve $y'' - 5y' + 6y = 0$.

1.  **Form the characteristic equation:**
    The equation is $a=1$, $b=-5$, $c=6$.
    The characteristic equation is $\lambda^2 - 5\lambda + 6 = 0$.

2.  **Find the roots:**
    We can factor this: $(\lambda - 2)(\lambda - 3) = 0$.
    The roots are $\lambda_1 = 2$ and $\lambda_2 = 3$. These are distinct real roots.

3.  **Write the general solution:**
    Using the form $y(x) = C_1 e^{\lambda_1 x} + C_2 e^{\lambda_2 x}$:
    $y(x) = C_1 e^{2x} + C_2 e^{3x}$.

**Relatable Example:** Imagine a pendulum that swings and eventually stops due to air resistance (damping). If the damping is light enough, it will oscillate, but if the damping is very strong, it might just settle down without oscillating, like a door closer. In this "distinct real roots" case, it's like the system returning to equilibrium in two different "modes" or speeds, without oscillating.

**Connection to Course Outcomes:** This directly addresses **CO2** by providing a method to find solutions for a specific type of ODE.

---

#### Case 2: Repeated Real Roots ($\Delta = 0$)

If the discriminant $b^2 - 4ac = 0$, the quadratic equation has exactly one real root (a repeated root), which we can call $\lambda_0$.

$\lambda_1 = \lambda_2 = \lambda_0 = -\frac{b}{2a}$.

In this case, we have one solution $y_1 = e^{\lambda_0 x}$. But we need *two* linearly independent solutions to form the general solution. This is where a slight complication arises, and it’s a crucial point often tested in exams.

If we only had $y(x) = C_1 e^{\lambda_0 x}$, we would only have one arbitrary constant, but we need two for a second-order ODE. The second linearly independent solution turns out to be:

$y_2(x) = x e^{\lambda_0 x}$

So, the **general solution** for repeated real roots is:

$$y(x) = C_1 e^{\lambda_0 x} + C_2 x e^{\lambda_0 x}$$

This can also be written as:

$$y(x) = (C_1 + C_2 x) e^{\lambda_0 x}$$

This result can be derived using a method called **reduction of order**, which is discussed in advanced texts like Kreyszig. For now, remember this form as a fundamental case.

**Example:** Solve $y'' - 4y' + 4y = 0$.

1.  **Form the characteristic equation:**
    $a=1$, $b=-4$, $c=4$.
    $\lambda^2 - 4\lambda + 4 = 0$.

2.  **Find the roots:**
    This is a perfect square: $(\lambda - 2)^2 = 0$.
    The root is $\lambda = 2$, repeated. So, $\lambda_0 = 2$.

3.  **Write the general solution:**
    Using the form $y(x) = (C_1 + C_2 x) e^{\lambda_0 x}$:
    $y(x) = (C_1 + C_2 x) e^{2x}$.

**Relatable Example:** Consider a system that is critically damped. For instance, the suspension of a car might be tuned to critically damp so that when you hit a bump, the car quickly returns to its normal state without bouncing up and down. It's the fastest way to return to equilibrium without overshoot. The $xe^{\lambda_0 x}$ term arises because the system is trying to return to equilibrium in two "ways" at once, but they are intertwined.

**Common Pitfall:** Students sometimes forget the $x$ in the second term ($x e^{\lambda_0 x}$) when roots are repeated. This is a very common exam mistake, so really etch this into your memory!

---

#### Case 3: Complex Conjugate Roots ($\Delta < 0$)

If the discriminant $b^2 - 4ac < 0$, the roots of the characteristic equation will be complex conjugates. Let the roots be:

$\lambda = \alpha \pm i \beta$

where $\alpha = -\frac{b}{2a}$ and $\beta = \frac{\sqrt{4ac - b^2}}{2a}$. Note that $\beta$ is a positive real number.

So, we have two roots: $\lambda_1 = \alpha + i \beta$ and $\lambda_2 = \alpha - i \beta$.
If we directly plug these into $y = e^{\lambda x}$, we get solutions like $e^{(\alpha + i \beta) x}$ and $e^{(\alpha - i \beta) x}$.

Now, how do we deal with $e^{i \beta x}$? This is where **Euler's Formula** comes to the rescue, a fundamental relation from complex numbers that is essential in many areas of science and engineering. Euler's formula states:

$$e^{i \theta} = \cos \theta + i \sin \theta$$

Using this, our two solutions can be written as:

$y_1 = e^{(\alpha + i \beta) x} = e^{\alpha x} e^{i \beta x} = e^{\alpha x} (\cos(\beta x) + i \sin(\beta x))$
$y_2 = e^{(\alpha - i \beta) x} = e^{\alpha x} e^{-i \beta x} = e^{\alpha x} (\cos(\beta x) - i \sin(\beta x))$

While these are valid solutions, they involve complex numbers, and often in physical science, we are looking for real-valued solutions. The good news is that we can combine these complex solutions to obtain real solutions. If $y_1$ and $y_2$ are solutions, then so are $\frac{y_1 + y_2}{2}$ and $\frac{y_1 - y_2}{2i}$.

Let's see what happens when we combine them:

$\frac{y_1 + y_2}{2} = \frac{1}{2} [e^{\alpha x} (\cos(\beta x) + i \sin(\beta x)) + e^{\alpha x} (\cos(\beta x) - i \sin(\beta x))]$
$= \frac{1}{2} e^{\alpha x} [2 \cos(\beta x)]$
$= e^{\alpha x} \cos(\beta x)$

And:

$\frac{y_1 - y_2}{2i} = \frac{1}{2i} [e^{\alpha x} (\cos(\beta x) + i \sin(\beta x)) - e^{\alpha x} (\cos(\beta x) - i \sin(\beta x))]$
$= \frac{1}{2i} e^{\alpha x} [2i \sin(\beta x)]$
$= e^{\alpha x} \sin(\beta x)$

These two new functions, $e^{\alpha x} \cos(\beta x)$ and $e^{\alpha x} \sin(\beta x)$, are real-valued, linearly independent solutions. This derivation is a classic example found in most calculus and differential equations texts, including Anton, Biven, and Davis.

So, the **general solution** for complex conjugate roots is:

$$y(x) = C_1 e^{\alpha x} \cos(\beta x) + C_2 e^{\alpha x} \sin(\beta x)$$

Or, factoring out the common term:

$$y(x) = e^{\alpha x} (C_1 \cos(\beta x) + C_2 \sin(\beta x))$$

**Example:** Solve $y'' + 2y' + 5y = 0$.

1.  **Form the characteristic equation:**
    $a=1$, $b=2$, $c=5$.
    $\lambda^2 + 2\lambda + 5 = 0$.

2.  **Find the roots:**
    Using the quadratic formula $\lambda = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
    $\lambda = \frac{-2 \pm \sqrt{2^2 - 4(1)(5)}}{2(1)}$
    $\lambda = \frac{-2 \pm \sqrt{4 - 20}}{2}$
    $\lambda = \frac{-2 \pm \sqrt{-16}}{2}$
    $\lambda = \frac{-2 \pm 4i}{2}$
    $\lambda = -1 \pm 2i$.

    Here, $\alpha = -1$ and $\beta = 2$.

3.  **Write the general solution:**
    Using the form $y(x) = e^{\alpha x} (C_1 \cos(\beta x) + C_2 \sin(\beta x))$:
    $y(x) = e^{-x} (C_1 \cos(2x) + C_2 \sin(2x))$.

**Relatable Example:** This case often describes oscillatory behavior, but with a decay or growth factor. Think of an electrical RLC circuit where the resistance is just right to cause oscillations that die down over time (damped oscillations). The $e^{\alpha x}$ term represents the damping (if $\alpha$ is negative, it decays; if $\alpha$ is positive, it grows). The $\cos(\beta x)$ and $\sin(\beta x)$ terms represent the oscillation itself. The frequency of oscillation is related to $\beta$. This is fundamental to understanding signals and systems, as mentioned in the reference book by Haykin and Van Veen.

**Connection to Course Outcomes:** This case exemplifies how mathematical solutions can represent physical phenomena like damped oscillations. It’s a direct application of **CO2**.

---

### 4. Initial Conditions and Boundary Value Problems

So far, we've found the *general solution*, which contains arbitrary constants ($C_1$, $C_2$). In many practical problems, these constants are determined by specific conditions given at a particular point or over a range.

*   **Initial Conditions (ICs):** These specify the value of the function and its derivatives at a single point, usually the starting time ($t=0$) or position ($x=0$). For a second-order ODE, we typically need two initial conditions: $y(x_0) = y_0$ and $y'(x_0) = y'_0$.

*   **Boundary Value Problems (BVPs):** These specify conditions at two different points. For example, $y(0) = y_0$ and $y(L) = y_L$.

The process of finding the specific solution is the same:

1.  Find the general solution.
2.  Differentiate the general solution to find $y'(x)$.
3.  Substitute the initial or boundary conditions into the general solution and its derivative.
4.  Solve the resulting system of equations for $C_1$ and $C_2$.

**Example (Initial Value Problem):** Solve $y'' - 5y' + 6y = 0$ with $y(0) = 1$ and $y'(0) = -1$.

We already found the general solution in Case 1: $y(x) = C_1 e^{2x} + C_2 e^{3x}$.

1.  **Find the derivative of the general solution:**
    $y'(x) = 2C_1 e^{2x} + 3C_2 e^{3x}$.

2.  **Apply initial conditions:**
    *   At $x=0$, $y(0) = 1$:
        $1 = C_1 e^{0} + C_2 e^{0}$
        $1 = C_1 + C_2$  (Equation 1)

    *   At $x=0$, $y'(0) = -1$:
        $-1 = 2C_1 e^{0} + 3C_2 e^{0}$
        $-1 = 2C_1 + 3C_2$ (Equation 2)

3.  **Solve the system of equations:**
    From Equation 1, $C_1 = 1 - C_2$.
    Substitute this into Equation 2:
    $-1 = 2(1 - C_2) + 3C_2$
    $-1 = 2 - 2C_2 + 3C_2$
    $-1 = 2 + C_2$
    $C_2 = -3$.

    Now substitute $C_2 = -3$ back into $C_1 = 1 - C_2$:
    $C_1 = 1 - (-3) = 1 + 3 = 4$.

4.  **Write the specific solution:**
    With $C_1 = 4$ and $C_2 = -3$, the solution is:
    $y(x) = 4e^{2x} - 3e^{3x}$.

**Connection to Course Outcomes:** This is where we truly *apply* our knowledge to get a specific, predictive model, fulfilling **CO2**. Without initial or boundary conditions, the solution remains general and not as useful for pinpointing a system's exact behavior at a given time or place.

---

### 5. Key Concepts and Definitions Recap

Let's quickly summarize the essential vocabulary and ideas:

*   **Homogeneous Linear ODE of Second Order:** $a y'' + b y' + c y = 0$, with $a, b, c$ constants.
*   **Characteristic Equation:** $a \lambda^2 + b \lambda + c = 0$. This is your primary tool.
*   **Roots of Characteristic Equation:**
    *   **Distinct Real Roots ($\lambda_1, \lambda_2$):** $y(x) = C_1 e^{\lambda_1 x} + C_2 e^{\lambda_2 x}$
    *   **Repeated Real Root ($\lambda_0$):** $y(x) = (C_1 + C_2 x) e^{\lambda_0 x}$
    *   **Complex Conjugate Roots ($\alpha \pm i \beta$):** $y(x) = e^{\alpha x} (C_1 \cos(\beta x) + C_2 \sin(\beta x))$
*   **Euler's Formula:** $e^{i\theta} = \cos \theta + i \sin \theta$. Crucial for the complex root case.
*   **General Solution:** The solution containing arbitrary constants.
*   **Specific Solution:** The solution obtained after applying initial or boundary conditions to determine the constants.
*   **Initial Conditions (ICs):** Values of $y$ and $y'$ at a single point.
*   **Boundary Value Problems (BVPs):** Conditions specified at two different points.

---

### Sample Questions with Answers

Here are a few practice questions to solidify your understanding, covering conceptual points and typical exam question formats.

**Question 1 (Conceptual - Multiple Choice):**
The general solution of a homogeneous linear ODE of second order with constant coefficients is determined by:
(a) The initial conditions.
(b) The boundary conditions.
(c) The roots of the characteristic equation.
(d) The type of coefficients ($a, b, c$).

**Answer:** (c) The roots of the characteristic equation.
**Reasoning:** The form of the general solution ($e^{\lambda x}$, $xe^{\lambda x}$, $e^{\alpha x} \cos(\beta x)$, etc.) is directly determined by the nature of the roots of the characteristic equation ($\lambda^2 + \frac{b}{a}\lambda + \frac{c}{a} = 0$). Initial or boundary conditions are used to find the *specific* solution by determining the constants ($C_1, C_2$) *after* the general solution form is established. The type of coefficients is important for forming the characteristic equation, but it's the *roots* that dictate the solution form.

---

**Question 2 (Problem Solving - Finding General Solution):**
Find the general solution of the differential equation $y'' + 6y' + 9y = 0$.

**Answer:**
1.  **Characteristic Equation:** $\lambda^2 + 6\lambda + 9 = 0$.
2.  **Find Roots:** This factors as $(\lambda + 3)^2 = 0$. So, we have a repeated real root $\lambda = -3$ ($\lambda_0 = -3$).
3.  **General Solution:** For repeated roots, the form is $y(x) = (C_1 + C_2 x) e^{\lambda_0 x}$.
    Therefore, $y(x) = (C_1 + C_2 x) e^{-3x}$.

---

**Question 3 (Problem Solving - Finding Specific Solution):**
Solve the initial value problem $y'' - y = 0$, given $y(0) = 2$ and $y'(0) = 0$.

**Answer:**
1.  **Characteristic Equation:** $\lambda^2 - 1 = 0$.
2.  **Find Roots:** This factors as $(\lambda - 1)(\lambda + 1) = 0$. The roots are distinct real roots $\lambda_1 = 1$ and $\lambda_2 = -1$.
3.  **General Solution:** $y(x) = C_1 e^{x} + C_2 e^{-x}$.
4.  **Find Derivative:** $y'(x) = C_1 e^{x} - C_2 e^{-x}$.
5.  **Apply Initial Conditions:**
    *   $y(0) = 2 \implies 2 = C_1 e^0 + C_2 e^0 \implies 2 = C_1 + C_2$. (Eq. 1)
    *   $y'(0) = 0 \implies 0 = C_1 e^0 - C_2 e^0 \implies 0 = C_1 - C_2$. (Eq. 2)
6.  **Solve for Constants:**
    From Eq. 2, $C_1 = C_2$.
    Substitute into Eq. 1: $2 = C_2 + C_2 \implies 2 = 2C_2 \implies C_2 = 1$.
    Since $C_1 = C_2$, we have $C_1 = 1$.
7.  **Specific Solution:** $y(x) = 1 \cdot e^{x} + 1 \cdot e^{-x} \implies y(x) = e^x + e^{-x}$.
    (This is also equivalent to $y(x) = 2 \cosh(x)$).

---

**Question 4 (Conceptual - Understanding Oscillations):**
If the characteristic equation of a homogeneous linear ODE of second order has complex roots $\alpha \pm i \beta$ with $\alpha < 0$, what kind of behavior would you expect the solution to exhibit?

**Answer:**
The solution would exhibit **damped oscillations**.
**Reasoning:** The $e^{\alpha x}$ term with $\alpha < 0$ acts as a damping factor, causing the amplitude of the oscillations to decrease over time. The $\cos(\beta x)$ and $\sin(\beta x)$ terms represent the oscillatory nature, with $\beta$ determining the frequency of these oscillations. This scenario is common in systems like RLC circuits with resistance or mechanical systems with significant damping.

---

This concludes our initial look at homogeneous linear ODEs of second order. We've laid the groundwork for understanding how these equations arise and how to find their fundamental solutions. Keep practicing these steps, and don't hesitate to revisit the concepts. Master this, and you'll be well-equipped for the more complex ODEs and applications that await you!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
