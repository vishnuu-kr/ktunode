---
title: "Homogeneous linear ODEs of second order with constant coefficients (Method to find general solution, solution of linear Initial Value Problem)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129d5"
status: "completed"
scrapedAt: "2026-05-20T18:30:53.749Z"
---
### Mathematics for Electrical Science and Physical Science - 1

### Module 2: Homogeneous Linear ODEs of Second Order

#### Topic: Homogeneous Linear ODEs of Second Order with Constant Coefficients

Welcome, everyone, to our exploration of differential equations! Today, we’re diving into a particularly important and manageable type: **Homogeneous Linear Ordinary Differential Equations (ODEs) of the Second Order with Constant Coefficients**. This might sound a bit technical, but trust me, once we break it down, you’ll see how fundamental it is, especially in electrical science and physical phenomena. This topic directly supports **Course Outcome 2 (CO2)**, which is about solving exactly these kinds of ODEs.

Think about systems that evolve over time – a simple spring-mass system, the charging and discharging of a capacitor in an RC circuit, or even the rate of cooling of an object. Many of these can be described by second-order ODEs. And when the coefficients in these equations are constant, life gets significantly easier!

#### 1. The Standard Form and What It Means

Before we jump into solutions, let's get comfortable with the equation itself. A general second-order linear ODE looks like this:

$a y'' + b y' + c y = f(x)$

Here:
*   $y''$ is the second derivative of $y$ with respect to $x$ (e.g., acceleration in physics, second rate of change).
*   $y'$ is the first derivative of $y$ with respect to $x$ (e.g., velocity, rate of change).
*   $y$ is the dependent variable, the function we're trying to find.
*   $x$ is the independent variable (often time, or position).
*   $a$, $b$, and $c$ are coefficients.

Now, what makes our ODEs special for this module?

*   **Linear:** The dependent variable $y$ and its derivatives ($y'$ and $y''$) appear only to the first power, and there are no products of $y$ or its derivatives with each other. This linearity is crucial because it allows us to use powerful superposition principles.
*   **Second Order:** The highest derivative is the second derivative ($y''$). This means we often need two pieces of information (initial conditions) to pinpoint a unique solution.
*   **Homogeneous:** The right-hand side, $f(x)$, is zero. This is our focus today: $a y'' + b y' + c y = 0$.
*   **Constant Coefficients:** The coefficients $a$, $b$, and $c$ are constants, not functions of $x$. This is the magic ingredient that simplifies the solution process immensely.

So, our target equation is:

$a y'' + b y' + c y = 0$

where $a, b, c$ are constants, and $a \neq 0$ (otherwise, it wouldn't be second order!).

**Think of it this way:** Imagine a system where the "rate of change of the rate of change" ( $y''$ ), the "rate of change" ( $y'$ ), and the "quantity itself" ( $y$ ) are all related linearly, with fixed constants of proportionality ($a$, $b$, $c$). The homogeneity means there's no external forcing or input driving the system; the behavior is purely internal to the system's properties.

**(Connection to CO2):** This is precisely the type of equation we aim to solve under CO2. Mastering this form is the foundational step for tackling more complex ODEs later.

#### 2. The Method: The Characteristic Equation

How do we find a solution $y(x)$ that satisfies $a y'' + b y' + c y = 0$? When coefficients are constant, we often look for solutions of a specific form. What kind of function, when you take its derivatives and plug them back into the equation, miraculously results in zero?

Exponential functions are often good candidates for this. Let's try a solution of the form:

$y(x) = e^{rx}$

where $r$ is some constant we need to determine.

Let's find the derivatives:
*   $y'(x) = r e^{rx}$
*   $y''(x) = r^2 e^{rx}$

Now, substitute these into our ODE:

$a (r^2 e^{rx}) + b (r e^{rx}) + c (e^{rx}) = 0$

We can factor out $e^{rx}$ since it's never zero:

$e^{rx} (a r^2 + b r + c) = 0$

For this equation to hold true for all $x$, the term in the parenthesis must be zero:

$a r^2 + b r + c = 0$

This is brilliant! We've transformed a differential equation into an algebraic equation. This is called the **characteristic equation** (or auxiliary equation). The values of $r$ that satisfy this quadratic equation will give us the specific exponential solutions $y(x) = e^{rx}$ to our ODE.

**(Kreyszig, Chapter 2.2):** Kreyszig extensively covers this transition from ODE to the characteristic equation, highlighting it as the standard approach for these constant-coefficient problems.

#### 3. Types of Roots and Corresponding Solutions

The nature of the solutions $y(x)$ depends entirely on the roots of the characteristic equation $a r^2 + b r + c = 0$. We can solve this quadratic equation using the familiar quadratic formula:

$r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

The term $b^2 - 4ac$ is the discriminant, and it determines the nature of the roots. Let's examine the three possible cases:

**Case 1: Distinct Real Roots ($b^2 - 4ac > 0$)**

If the discriminant is positive, we get two different real values for $r$, let's call them $r_1$ and $r_2$.
So, $r_1 = \frac{-b + \sqrt{b^2 - 4ac}}{2a}$ and $r_2 = \frac{-b - \sqrt{b^2 - 4ac}}{2a}$.

This gives us two independent solutions: $y_1(x) = e^{r_1 x}$ and $y_2(x) = e^{r_2 x}$.

According to the **principle of superposition** for linear homogeneous ODEs, any linear combination of these solutions is also a solution. Therefore, the **general solution** is:

$y(x) = c_1 e^{r_1 x} + c_2 e^{r_2 x}$

where $c_1$ and $c_2$ are arbitrary constants. These constants will be determined by initial conditions if we're solving an Initial Value Problem (IVP).

**Example:** Consider the ODE $y'' - 3y' + 2y = 0$.
Characteristic equation: $r^2 - 3r + 2 = 0$.
Factoring, $(r-1)(r-2) = 0$.
Roots are $r_1 = 1$ and $r_2 = 2$. These are distinct real roots.
So, the general solution is $y(x) = c_1 e^x + c_2 e^{2x}$.

**Real-world analogy:** Imagine a system with two independent modes of decay or growth. For instance, a mixture of two radioactive isotopes with different half-lives. The total amount of radiation at any time is the sum of the contributions from each isotope, each decaying exponentially.

**Case 2: Repeated Real Roots ($b^2 - 4ac = 0$)**

If the discriminant is zero, we get only one real value for $r$:

$r = \frac{-b}{2a}$

This gives us one solution, $y_1(x) = e^{rx}$. But we need *two* linearly independent solutions to form the general solution of a second-order ODE. What do we do when we only find one?

This is where a clever trick, called the **reduction of order** (though often presented directly in this context), comes in. If $y_1(x)$ is a solution, we try a solution of the form $y(x) = v(x) y_1(x)$. For repeated roots, it turns out that if $y_1(x) = e^{rx}$, then a second linearly independent solution is $y_2(x) = x e^{rx}$.

Let's verify this for $y'' - 2y' + y = 0$.
Characteristic equation: $r^2 - 2r + 1 = 0$, which is $(r-1)^2 = 0$.
The repeated root is $r = 1$.
So, $y_1(x) = e^x$ is a solution.
The second solution is $y_2(x) = x e^x$.

The general solution is then:

$y(x) = c_1 e^{rx} + c_2 x e^{rx}$

or $y(x) = (c_1 + c_2 x) e^{rx}$.

**Example:** Consider the ODE $y'' + 4y' + 4y = 0$.
Characteristic equation: $r^2 + 4r + 4 = 0$, which is $(r+2)^2 = 0$.
The repeated root is $r = -2$.
The general solution is $y(x) = c_1 e^{-2x} + c_2 x e^{-2x}$, or $y(x) = (c_1 + c_2 x) e^{-2x}$.

**Real-world analogy:** Think about a damped oscillation where the damping is just right to prevent oscillations. For example, in a mechanical system, if you have a critically damped shock absorber in a car. The system returns to equilibrium as quickly as possible without overshooting. The $xe^{rx}$ term accounts for this "slowing down" of the approach to equilibrium.

**(Anton, Biven, Davis, Chapter 6.3):** Anton’s Calculus provides a good introduction to ODEs, and while it might not delve into the derivation of $xe^{rx}$ here, it certainly covers the solution structure for repeated roots. Kreyszig is more thorough on the derivation.

**Case 3: Complex Conjugate Roots ($b^2 - 4ac < 0$)**

If the discriminant is negative, the roots are complex. Let $b^2 - 4ac = -\Delta^2$, where $\Delta$ is a real positive number.
Then the roots are:

$r = \frac{-b \pm \sqrt{-\Delta^2}}{2a} = \frac{-b \pm i\Delta}{2a}$

Let $\alpha = -\frac{b}{2a}$ and $\beta = \frac{\Delta}{2a} = \frac{\sqrt{4ac - b^2}}{2a}$.
So, the roots are $r_1 = \alpha + i\beta$ and $r_2 = \alpha - i\beta$.

This gives us two solutions involving complex exponentials: $y_1(x) = e^{(\alpha + i\beta)x}$ and $y_2(x) = e^{(\alpha - i\beta)x}$.

Using Euler's formula, $e^{i\theta} = \cos\theta + i\sin\theta$, we can rewrite these:
$e^{(\alpha + i\beta)x} = e^{\alpha x} e^{i\beta x} = e^{\alpha x}(\cos(\beta x) + i\sin(\beta x))$
$e^{(\alpha - i\beta)x} = e^{\alpha x} e^{-i\beta x} = e^{\alpha x}(\cos(\beta x) - i\sin(\beta x))$

Again, using the principle of superposition, we can form linear combinations of these to get real-valued solutions.
Let's take $\frac{1}{2}(y_1 + y_2)$ and $\frac{1}{2i}(y_1 - y_2)$:
$y_1(x) = \frac{1}{2}(e^{(\alpha+i\beta)x} + e^{(\alpha-i\beta)x}) = e^{\alpha x} \cos(\beta x)$
$y_2(x) = \frac{1}{2i}(e^{(\alpha+i\beta)x} - e^{(\alpha-i\beta)x}) = e^{\alpha x} \sin(\beta x)$

These are two linearly independent, real-valued solutions. The **general solution** is:

$y(x) = c_1 e^{\alpha x} \cos(\beta x) + c_2 e^{\alpha x} \sin(\beta x)$

or $y(x) = e^{\alpha x} (c_1 \cos(\beta x) + c_2 \sin(\beta x))$.

Remember:
*   $\alpha = -\frac{b}{2a}$ (determines the exponential decay/growth)
*   $\beta = \frac{\sqrt{4ac - b^2}}{2a}$ (determines the frequency of oscillation)

**Example:** Consider the ODE $y'' + 4y = 0$.
Characteristic equation: $r^2 + 4 = 0$.
Roots are $r^2 = -4$, so $r = \pm \sqrt{-4} = \pm 2i$.
Here, $\alpha = 0$ and $\beta = 2$.
The general solution is $y(x) = c_1 \cos(2x) + c_2 \sin(2x)$. This describes simple harmonic motion.

**Example:** Consider the ODE $y'' + 2y' + 5y = 0$.
Characteristic equation: $r^2 + 2r + 5 = 0$.
Using the quadratic formula: $r = \frac{-2 \pm \sqrt{2^2 - 4(1)(5)}}{2(1)} = \frac{-2 \pm \sqrt{4 - 20}}{2} = \frac{-2 \pm \sqrt{-16}}{2} = \frac{-2 \pm 4i}{2} = -1 \pm 2i$.
Here, $\alpha = -1$ and $\beta = 2$.
The general solution is $y(x) = e^{-x} (c_1 \cos(2x) + c_2 \sin(2x))$. This describes a damped oscillation.

**Real-world analogy:** This case is very common in electrical engineering and physics.
*   **Electrical Circuits:** An RLC circuit (Resistor-Inductor-Capacitor) often leads to ODEs with complex roots. The behavior can be oscillatory, and the $\alpha$ term represents damping due to the resistor.
*   **Mechanical Systems:** A mass on a spring with damping (like a car's suspension) will exhibit oscillatory behavior if the damping is not too strong. The $\alpha$ term represents the damping, and the $\beta$ term represents the frequency of oscillation.

**(Bird’s Higher Engineering Mathematics, Chapter 12):** Bird provides excellent examples of using the characteristic equation for complex roots, often relating them to circuit analysis or mechanical vibrations, which is highly relevant to your fields.

**Summary of Solutions based on Roots of $ar^2 + br + c = 0$:**

| Discriminant ($b^2 - 4ac$) | Roots of Characteristic Equation | General Solution $y(x)$                       |
| :------------------------- | :------------------------------- | :-------------------------------------------- |
| $> 0$ (Positive)           | Two distinct real roots $r_1, r_2$ | $y(x) = c_1 e^{r_1 x} + c_2 e^{r_2 x}$        |
| $= 0$ (Zero)               | One repeated real root $r$       | $y(x) = c_1 e^{rx} + c_2 x e^{rx}$            |
| $< 0$ (Negative)           | Complex conjugate roots $\alpha \pm i\beta$ | $y(x) = e^{\alpha x}(c_1 \cos(\beta x) + c_2 \sin(\beta x))$ |

**Key Takeaway:** The entire solution process boils down to finding the roots of a simple quadratic equation! This is a huge simplification.

#### 4. Solving Initial Value Problems (IVPs)

Often, we don't just want *any* solution to the ODE; we want the *specific* solution that satisfies certain conditions at a starting point. This is an Initial Value Problem (IVP). For a second-order ODE, we typically need two initial conditions.

A common form of IVP is:
$a y'' + b y' + c y = 0$, with $y(x_0) = y_0$ and $y'(x_0) = y'_0$.

Here, $y_0$ and $y'_0$ are the specified values of the function and its derivative at the point $x_0$.

**The Process:**

1.  **Find the General Solution:** First, determine the characteristic equation and find its roots. Based on the type of roots, write down the general solution $y(x)$ containing arbitrary constants ($c_1, c_2$).

2.  **Find the Derivative of the General Solution:** Differentiate the general solution $y(x)$ to get $y'(x)$, which will also involve $c_1$ and $c_2$.

3.  **Apply the Initial Conditions:**
    *   Substitute $x_0$ and $y_0$ into the general solution: $y(x_0) = y_0$. This gives you one equation with $c_1$ and $c_2$.
    *   Substitute $x_0$ and $y'_0$ into the derivative of the general solution: $y'(x_0) = y'_0$. This gives you a second equation with $c_1$ and $c_2$.

4.  **Solve for the Constants:** You now have a system of two linear algebraic equations for the two unknowns, $c_1$ and $c_2$. Solve this system.

5.  **Write the Specific Solution:** Substitute the values of $c_1$ and $c_2$ back into the general solution. This gives you the unique solution to the IVP.

**(Connection to CO2):** This entire process is the practical application of CO2 – taking the general solution and tailoring it to a specific physical or electrical scenario via initial conditions.

**Example 1: Distinct Real Roots IVP**

Solve the IVP: $y'' - y' - 2y = 0$, with $y(0) = 2$ and $y'(0) = 1$.

**Step 1: General Solution**
Characteristic equation: $r^2 - r - 2 = 0$.
Factoring: $(r-2)(r+1) = 0$.
Roots: $r_1 = 2$, $r_2 = -1$. (Distinct real roots)
General solution: $y(x) = c_1 e^{2x} + c_2 e^{-x}$.

**Step 2: Derivative of General Solution**
$y'(x) = 2c_1 e^{2x} - c_2 e^{-x}$.

**Step 3: Apply Initial Conditions**
*   $y(0) = 2$:
    $c_1 e^{2(0)} + c_2 e^{-(0)} = 2$
    $c_1 + c_2 = 2$ (Equation 1)

*   $y'(0) = 1$:
    $2c_1 e^{2(0)} - c_2 e^{-(0)} = 1$
    $2c_1 - c_2 = 1$ (Equation 2)

**Step 4: Solve for Constants**
Add Equation 1 and Equation 2:
$(c_1 + c_2) + (2c_1 - c_2) = 2 + 1$
$3c_1 = 3 \implies c_1 = 1$.

Substitute $c_1 = 1$ into Equation 1:
$1 + c_2 = 2 \implies c_2 = 1$.

**Step 5: Specific Solution**
Substitute $c_1 = 1$ and $c_2 = 1$ into the general solution:
$y(x) = 1 \cdot e^{2x} + 1 \cdot e^{-x}$
$y(x) = e^{2x} + e^{-x}$.

**Example 2: Complex Roots IVP**

Solve the IVP: $y'' + 9y = 0$, with $y(0) = 1$ and $y'(0) = 3$.

**Step 1: General Solution**
Characteristic equation: $r^2 + 9 = 0$.
Roots: $r^2 = -9 \implies r = \pm 3i$. (Complex roots)
Here, $\alpha = 0$, $\beta = 3$.
General solution: $y(x) = e^{0x}(c_1 \cos(3x) + c_2 \sin(3x)) = c_1 \cos(3x) + c_2 \sin(3x)$.

**Step 2: Derivative of General Solution**
$y'(x) = -3c_1 \sin(3x) + 3c_2 \cos(3x)$.

**Step 3: Apply Initial Conditions**
*   $y(0) = 1$:
    $c_1 \cos(3(0)) + c_2 \sin(3(0)) = 1$
    $c_1(1) + c_2(0) = 1 \implies c_1 = 1$.

*   $y'(0) = 3$:
    $-3c_1 \sin(3(0)) + 3c_2 \cos(3(0)) = 3$
    $-3c_1(0) + 3c_2(1) = 3 \implies 3c_2 = 3 \implies c_2 = 1$.

**Step 4: Solve for Constants**
We found $c_1 = 1$ and $c_2 = 1$ directly.

**Step 5: Specific Solution**
Substitute $c_1 = 1$ and $c_2 = 1$ into the general solution:
$y(x) = 1 \cdot \cos(3x) + 1 \cdot \sin(3x)$
$y(x) = \cos(3x) + \sin(3x)$.

**Common Pitfall:** Be very careful when differentiating the general solution, especially with the $xe^{rx}$ and $e^{\alpha x} \cos(\beta x), e^{\alpha x} \sin(\beta x)$ forms. A small error in differentiation can lead to an incorrect final answer. Always double-check your derivatives.

**Exam Tip:** When solving for $c_1$ and $c_2$, if you get equations like $c_1 + c_2 = A$ and $c_1 - c_2 = B$, adding them gives $2c_1 = A+B$, and subtracting them gives $2c_2 = A-B$. This is a quick way to solve simple 2x2 systems.

#### 5. Connection to Engineering and Physical Sciences

Why is this so important? Let's touch upon some applications.

*   **Electrical Circuits (RLC Circuits):** The behavior of charge $q(t)$ or current $i(t)$ in a series RLC circuit is governed by a second-order linear ODE with constant coefficients: $L\frac{d^2q}{dt^2} + R\frac{dq}{dt} + \frac{1}{C}q = V(t)$. For a homogeneous case (e.g., when the voltage source $V(t)$ is removed or zero), it becomes $Lq'' + Rq' + \frac{1}{C}q = 0$. The roots of the characteristic equation $Lr^2 + Rr + \frac{1}{C} = 0$ determine if the circuit's response is overdamped (distinct real roots), critically damped (repeated real roots), or underdamped/oscillatory (complex roots). This dictates how quickly a capacitor charges or discharges, or how current flows.

*   **Mechanical Vibrations (Spring-Mass-Damper):** A system with a mass $m$ attached to a spring with spring constant $k$ and a damper with damping coefficient $c$ has the equation of motion: $m x'' + c x' + k x = F(t)$. For free vibrations (no external force $F(t)=0$), we have $mx'' + cx' + kx = 0$. The characteristic equation $mr^2 + cr + k = 0$ again governs the system's behavior – whether it returns to equilibrium smoothly or oscillates.

*   **Heat Transfer:** In simplified models, the rate of change of temperature can sometimes be described by such ODEs, especially when considering rates of heating or cooling proportional to the temperature difference from surroundings.

*   **Population Dynamics (Simplified Models):** In some very basic ecological models, the interaction between populations could be approximated by such linear equations.

**(Signals and Systems by Haykin & Van Veen):** Haykin’s book is a cornerstone for understanding how these ODEs describe the behavior of signals and systems, particularly in the context of system responses (transient and steady-state). The characteristic equation roots directly relate to the system's poles, which dictate stability and response characteristics.

**In essence, understanding these homogeneous linear ODEs with constant coefficients gives you the tools to analyze the natural response of many physical and electrical systems when they are not being actively driven by an external force.** The solutions tell you how the system will behave based purely on its internal properties (the coefficients $a, b, c$).

Remember this: **the characteristic equation is your key!** Identify its coefficients, find its roots, and you're 90% of the way to the general solution. The initial conditions then just pin down the specific constants.

This topic is fundamental for **CO2** and builds a strong base for understanding more advanced topics in signals, systems, and control theory, which are core to electrical and physical sciences.

---

### Sample Questions and Answers

**1. Conceptual Question:**
What is the significance of the discriminant ($b^2 - 4ac$) in solving the characteristic equation $ar^2 + br + c = 0$ for a homogeneous linear ODE of second order with constant coefficients?

**Answer:**
The discriminant of the characteristic equation dictates the nature of the roots ($r_1, r_2$). This, in turn, determines the form of the general solution $y(x)$:
*   **$b^2 - 4ac > 0$ (Positive):** Two distinct real roots, leading to a solution of the form $y(x) = c_1 e^{r_1 x} + c_2 e^{r_2 x}$. This describes behavior that is a sum of two exponentials, often representing independent decay or growth processes.
*   **$b^2 - 4ac = 0$ (Zero):** One repeated real root, leading to a solution of the form $y(x) = (c_1 + c_2 x) e^{rx}$. This typically models critically damped systems, which return to equilibrium as quickly as possible without oscillating.
*   **$b^2 - 4ac < 0$ (Negative):** Two complex conjugate roots ($\alpha \pm i\beta$), leading to a solution of the form $y(x) = e^{\alpha x}(c_1 \cos(\beta x) + c_2 \sin(\beta x))$. This describes oscillatory behavior, possibly with exponential decay or growth depending on $\alpha$. This is common in RLC circuits and mechanical vibrations.

Understanding the discriminant directly connects the system's parameters ($a, b, c$) to its qualitative behavior (oscillatory, overdamped, etc.).

**2. Exam-Oriented Question:**
Find the general solution to the differential equation $y'' - 6y' + 9y = 0$.

**Solution:**
1.  **Form the characteristic equation:**
    The ODE is $y'' - 6y' + 9y = 0$. The characteristic equation is $r^2 - 6r + 9 = 0$.

2.  **Solve the characteristic equation:**
    This is a perfect square trinomial: $(r-3)^2 = 0$.
    The root is $r=3$, a repeated real root.

3.  **Write the general solution:**
    For a repeated real root $r$, the general solution is $y(x) = c_1 e^{rx} + c_2 x e^{rx}$.
    Substituting $r=3$, we get:
    $y(x) = c_1 e^{3x} + c_2 x e^{3x}$
    or $y(x) = (c_1 + c_2 x) e^{3x}$.

**3. Exam-Oriented Question:**
Solve the Initial Value Problem: $y'' + 4y' + 8y = 0$, with $y(0) = 1$ and $y'(0) = 0$.

**Solution:**
1.  **General Solution:**
    Characteristic equation: $r^2 + 4r + 8 = 0$.
    Using the quadratic formula $r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
    $r = \frac{-4 \pm \sqrt{4^2 - 4(1)(8)}}{2(1)} = \frac{-4 \pm \sqrt{16 - 32}}{2} = \frac{-4 \pm \sqrt{-16}}{2}$
    $r = \frac{-4 \pm 4i}{2} = -2 \pm 2i$.
    These are complex conjugate roots with $\alpha = -2$ and $\beta = 2$.
    The general solution is $y(x) = e^{-2x}(c_1 \cos(2x) + c_2 \sin(2x))$.

2.  **Derivative of General Solution:**
    Using the product rule:
    $y'(x) = -2e^{-2x}(c_1 \cos(2x) + c_2 \sin(2x)) + e^{-2x}(-2c_1 \sin(2x) + 2c_2 \cos(2x))$
    $y'(x) = e^{-2x}[(-2c_1 + 2c_2)\cos(2x) + (-2c_2 - 2c_1)\sin(2x)]$

3.  **Apply Initial Conditions:**
    *   $y(0) = 1$:
        $1 = e^{-2(0)}(c_1 \cos(0) + c_2 \sin(0))$
        $1 = 1(c_1 \cdot 1 + c_2 \cdot 0) \implies c_1 = 1$.

    *   $y'(0) = 0$:
        $0 = e^{-2(0)}[(-2c_1 + 2c_2)\cos(0) + (-2c_2 - 2c_1)\sin(0)]$
        $0 = 1[(-2c_1 + 2c_2) \cdot 1 + (-2c_2 - 2c_1) \cdot 0]$
        $0 = -2c_1 + 2c_2$.
        Since $c_1 = 1$, we have $0 = -2(1) + 2c_2 \implies 2c_2 = 2 \implies c_2 = 1$.

4.  **Specific Solution:**
    Substitute $c_1 = 1$ and $c_2 = 1$ into the general solution:
    $y(x) = e^{-2x}(1 \cdot \cos(2x) + 1 \cdot \sin(2x))$
    $y(x) = e^{-2x}(\cos(2x) + \sin(2x))$.
