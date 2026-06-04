---
title: "Homogeneous linear ODEs of second order with constant coefficients (Method to find general solution, solution of linear Initial Value Problem)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f94fb"
status: "completed"
scrapedAt: "2026-05-23T16:03:10.688Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 2: Homogeneous Linear ODEs of Second Order

### Topic: Homogeneous Linear ODEs of Second Order with Constant Coefficients

Welcome back, everyone! In this module, we're diving into a fundamental area of mathematics that's absolutely crucial for understanding many physical phenomena and engineering systems: **Homogeneous Linear Ordinary Differential Equations of Second Order with Constant Coefficients**. This might sound like a mouthful, but don't worry, we'll break it down step by step, building your intuition and equipping you with the tools to solve these important equations.

You'll recall from our previous discussions (and perhaps from your textbooks like Kreyszig or Anton, Biven, Davis) that differential equations are about rates of change. They describe how things evolve over time or space. Second-order ODEs, specifically, involve the second derivative of a function, telling us about the rate of change of the rate of change – think acceleration, or how a spring's motion changes.

When we add "linear" and "homogeneous with constant coefficients" to the mix, we're narrowing our focus to a very well-behaved and widely applicable class of equations.

### What is a Homogeneous Linear ODE of Second Order with Constant Coefficients?

Let's unpack that definition piece by piece.

A **second-order ODE** is an equation involving a function, say $y$, and its first and second derivatives, $y'$ and $y''$, where the highest derivative is the second one.

It's **linear** if $y$, $y'$, and $y''$ appear only to the first power, and there are no products of these terms (like $y \cdot y'$ or $(y')^2$). Think of it as $y$ and its derivatives being the "variables" in a linear equation.

**Constant coefficients** mean that the multipliers for $y$, $y'$, and $y''$ are just numbers, not functions of the independent variable (usually $t$ for time or $x$ for position).

Finally, **homogeneous** means that the equation doesn't have any terms that *don't* involve $y$ or its derivatives. On the right-hand side of the equation, after we've arranged it, there's a zero.

So, the general form of an equation we'll be studying looks like this:

$$ay'' + by' + cy = 0$$

where $a$, $b$, and $c$ are constants, and importantly, $a \neq 0$. If $a$ were zero, it wouldn't be a second-order ODE!

**Why are these important?** Imagine a simple electrical circuit with a resistor (R), an inductor (L), and a capacitor (C) in series. The voltage across these components, when related to the current and charge, leads to an equation of this form. Similarly, mechanical systems like a mass on a spring with damping (think of a car's shock absorbers) are beautifully modeled by these equations. These are the kinds of scenarios that make this topic so relevant for both electrical and physical science students, as highlighted in our Course Outcomes (specifically CO2).

### The Method to Find the General Solution

Now, how do we actually *solve* these equations? This is where a clever trick comes in, a method that's as elegant as it is powerful. Since the coefficients are constants, we can *guess* that the solution might be an exponential function. Why an exponential? Because the derivative of an exponential is just another exponential (scaled by a constant). This property aligns perfectly with the structure of our ODE.

Let's hypothesize that a solution is of the form $y(t) = e^{rt}$, where $r$ is some constant we need to determine.

If $y(t) = e^{rt}$, then:
*   $y'(t) = re^{rt}$
*   $y''(t) = r^2 e^{rt}$

Now, we substitute these into our general ODE: $ay'' + by' + cy = 0$.

$$a(r^2 e^{rt}) + b(re^{rt}) + c(e^{rt}) = 0$$

We can factor out $e^{rt}$ (since $e^{rt}$ is never zero):

$$e^{rt} (ar^2 + br + c) = 0$$

For this equation to hold true for all $t$, the term in the parentheses must be zero:

$$ar^2 + br + c = 0$$

This is our **characteristic equation** (or auxiliary equation). It's a quadratic equation in $r$. The roots of this equation will tell us the possible values of $r$ that make our $y(t) = e^{rt}$ guess a valid solution.

The nature of the roots of this quadratic equation dictates the form of our general solution. There are three possible cases:

#### Case 1: Distinct Real Roots ($r_1$ and $r_2$)

If the discriminant ($b^2 - 4ac$) is positive, we get two different real roots, $r_1$ and $r_2$.
In this case, we have found two independent solutions: $y_1(t) = e^{r_1 t}$ and $y_2(t) = e^{r_2 t}$.

The general solution, which is a linear combination of these two solutions, is:

$$y(t) = c_1 e^{r_1 t} + c_2 e^{r_2 t}$$

where $c_1$ and $c_2$ are arbitrary constants. This is a direct application of the superposition principle for linear ODEs.

**Example:** Solve $y'' - 5y' + 6y = 0$.

1.  **Characteristic Equation:** $r^2 - 5r + 6 = 0$.
2.  **Find Roots:** Factoring, we get $(r-2)(r-3) = 0$. So, the roots are $r_1 = 2$ and $r_2 = 3$.
3.  **General Solution:** $y(t) = c_1 e^{2t} + c_2 e^{3t}$.

Think of this like building with Lego bricks. We've found two fundamental types of bricks ($e^{2t}$ and $e^{3t}$), and the general solution is any combination of these bricks we can put together.

#### Case 2: Repeated Real Roots ($r$)

If the discriminant ($b^2 - 4ac$) is zero, we get only one real root, $r$. Let's call it $r_1$.
So, we have one solution $y_1(t) = e^{r_1 t}$. But for a second-order ODE, we generally need *two* linearly independent solutions to form the general solution.

This is where a bit more mathematical machinery comes in. When roots are repeated, it turns out that the second linearly independent solution is $y_2(t) = t e^{r_1 t}$. You can verify this by plugging it into the ODE, but it's a standard result in ODE theory (often covered in more advanced texts or as a theorem).

The general solution in this case is:

$$y(t) = c_1 e^{r_1 t} + c_2 t e^{r_1 t}$$

or more compactly, $y(t) = (c_1 + c_2 t) e^{r_1 t}$.

**Example:** Solve $y'' - 6y' + 9y = 0$.

1.  **Characteristic Equation:** $r^2 - 6r + 9 = 0$.
2.  **Find Roots:** Factoring, we get $(r-3)^2 = 0$. So, we have a repeated root $r_1 = 3$.
3.  **General Solution:** $y(t) = c_1 e^{3t} + c_2 t e^{3t}$.

This is like finding out that for a particular system, one type of behavior ($e^{3t}$) is possible, but the system's dynamics also allow for a "modified" version of that behavior that grows linearly with time ($t e^{3t}$).

#### Case 3: Complex Conjugate Roots ($\alpha \pm i\beta$)

If the discriminant ($b^2 - 4ac$) is negative, the roots of the characteristic equation are complex conjugates. We can write them as $r = \alpha \pm i\beta$, where $\alpha = -b/(2a)$ and $\beta = \sqrt{4ac - b^2} / (2a)$.

If we formally substitute $e^{(\alpha + i\beta)t}$ and $e^{(\alpha - i\beta)t}$ into the ODE, we get two complex-valued solutions. However, in many physical and electrical applications, we are interested in real-valued solutions.

Using Euler's formula, $e^{i\theta} = \cos(\theta) + i \sin(\theta)$, we can derive real-valued solutions from the complex ones.
The two linearly independent real solutions turn out to be:

$y_1(t) = e^{\alpha t} \cos(\beta t)$
$y_2(t) = e^{\alpha t} \sin(\beta t)$

The general solution is then a linear combination of these:

$$y(t) = e^{\alpha t} (c_1 \cos(\beta t) + c_2 \sin(\beta t))$$

**Example:** Solve $y'' + 2y' + 5y = 0$.

1.  **Characteristic Equation:** $r^2 + 2r + 5 = 0$.
2.  **Find Roots:** Using the quadratic formula $r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
    $r = \frac{-2 \pm \sqrt{2^2 - 4(1)(5)}}{2(1)} = \frac{-2 \pm \sqrt{4 - 20}}{2} = \frac{-2 \pm \sqrt{-16}}{2} = \frac{-2 \pm 4i}{2} = -1 \pm 2i$.
    So, $\alpha = -1$ and $\beta = 2$.
3.  **General Solution:** $y(t) = e^{-t} (c_1 \cos(2t) + c_2 \sin(2t))$.

This case often describes oscillatory behavior. The $e^{\alpha t}$ term governs the amplitude's growth or decay (if $\alpha$ is positive or negative, respectively), while $\cos(\beta t)$ and $\sin(\beta t)$ describe the oscillation itself. Think of a damped pendulum or an AC electrical circuit. The frequency of oscillation is related to $\beta$.

**Summary of the General Solution Method:**

1.  Write the ODE in the form $ay'' + by' + cy = 0$.
2.  Form the characteristic equation: $ar^2 + br + c = 0$.
3.  Find the roots ($r_1, r_2$) of the characteristic equation.
4.  Based on the nature of the roots, write down the general solution:
    *   Distinct real roots $r_1, r_2$: $y(t) = c_1 e^{r_1 t} + c_2 e^{r_2 t}$
    *   Repeated real root $r$: $y(t) = c_1 e^{r t} + c_2 t e^{r t}$
    *   Complex conjugate roots $\alpha \pm i\beta$: $y(t) = e^{\alpha t} (c_1 \cos(\beta t) + c_2 \sin(\beta t))$

This method is fundamental and directly supports Course Outcome CO2.

### Solution of Linear Initial Value Problems (IVPs)

Often, we don't just want *any* solution; we want the *specific* solution that satisfies certain conditions at a particular point in time (or space). These are called **initial conditions** (or boundary conditions, depending on the problem context). For a second-order ODE, we typically need two initial conditions to determine the two arbitrary constants ($c_1$ and $c_2$) in the general solution.

A typical initial value problem would look like:
Solve $ay'' + by' + cy = 0$ subject to $y(t_0) = y_0$ and $y'(t_0) = y'_0$.

Here, $t_0$ is the initial time, $y_0$ is the initial value of the function, and $y'_0$ is the initial value of its first derivative (often representing initial velocity or initial rate of change).

**Steps to Solve an IVP:**

1.  **Find the General Solution:** Follow the method described above to obtain the general solution $y(t)$ involving constants $c_1$ and $c_2$.
2.  **Apply the First Initial Condition:** Substitute $t_0$ and $y_0$ into the general solution: $y(t_0) = y_0$. This will give you one equation involving $c_1$ and $c_2$.
3.  **Find the Derivative of the General Solution:** Differentiate the general solution $y(t)$ to get $y'(t)$.
4.  **Apply the Second Initial Condition:** Substitute $t_0$ and $y'_0$ into the derivative $y'(t)$: $y'(t_0) = y'_0$. This will give you a second equation involving $c_1$ and $c_2$.
5.  **Solve the System of Equations:** You now have a system of two linear equations for the two unknowns, $c_1$ and $c_2$. Solve this system to find the values of $c_1$ and $c_2$.
6.  **Write the Specific Solution:** Substitute the found values of $c_1$ and $c_2$ back into the general solution to get the unique solution to the IVP.

**Example:** Solve the IVP: $y'' - 3y' + 2y = 0$, with $y(0) = 1$ and $y'(0) = 0$.

1.  **General Solution:**
    *   Characteristic equation: $r^2 - 3r + 2 = 0$.
    *   Roots: $(r-1)(r-2) = 0 \implies r_1 = 1, r_2 = 2$.
    *   General solution: $y(t) = c_1 e^t + c_2 e^{2t}$.

2.  **Apply First Initial Condition ($y(0) = 1$):**
    *   $y(0) = c_1 e^0 + c_2 e^{2(0)} = c_1(1) + c_2(1) = c_1 + c_2$.
    *   So, $c_1 + c_2 = 1$. (Equation 1)

3.  **Find the Derivative:**
    *   $y'(t) = \frac{d}{dt}(c_1 e^t + c_2 e^{2t}) = c_1 e^t + 2c_2 e^{2t}$.

4.  **Apply Second Initial Condition ($y'(0) = 0$):**
    *   $y'(0) = c_1 e^0 + 2c_2 e^{2(0)} = c_1(1) + 2c_2(1) = c_1 + 2c_2$.
    *   So, $c_1 + 2c_2 = 0$. (Equation 2)

5.  **Solve the System of Equations:**
    *   We have:
        (1) $c_1 + c_2 = 1$
        (2) $c_1 + 2c_2 = 0$
    *   Subtracting Equation 1 from Equation 2: $(c_1 + 2c_2) - (c_1 + c_2) = 0 - 1 \implies c_2 = -1$.
    *   Substitute $c_2 = -1$ into Equation 1: $c_1 + (-1) = 1 \implies c_1 = 2$.

6.  **Write the Specific Solution:**
    *   Substitute $c_1 = 2$ and $c_2 = -1$ into the general solution:
        $y(t) = 2e^t - e^{2t}$.

This specific solution tells us the exact behavior of the system at all times, given its state at $t=0$. This is a core part of applying differential equations to real-world problems, directly contributing to CO2.

### Connecting to Course Outcomes

*   **CO2: Solve homogeneous and non-homogeneous linear differential equations with constant coefficients.**
    *   Our entire discussion on finding the general solution and solving IVPs directly addresses the "homogeneous linear differential equations with constant coefficients" part of this outcome. The methods we've covered are precisely what's needed.

*   **Knowledge Level K3 (Application):** By working through examples and understanding the steps for solving IVPs, you're not just recalling formulas but *applying* them to find specific solutions to given problems. This is the essence of K3.

### Important Points to Remember:

*   The **characteristic equation** is the key to unlocking the solution. Always form it correctly: $ar^2 + br + c = 0$.
*   The **nature of the roots** of the characteristic equation determines the *form* of the general solution. Memorize the three cases (distinct real, repeated real, complex conjugate).
*   For **IVPs**, you need two conditions (usually $y(t_0)$ and $y'(t_0)$) to find the specific solution by determining the constants $c_1$ and $c_2$.
*   The coefficients $a, b, c$ are **constants**. If they were functions of $t$, the problem would be significantly harder!
*   For complex roots $\alpha \pm i\beta$, remember to use the **real-valued form** $e^{\alpha t}(c_1 \cos(\beta t) + c_2 \sin(\beta t))$, as is typical in physical sciences.

### Analogy Recap:

*   **General Solution:** Like having a toolbox with different types of screws and bolts ($e^{r_1 t}, e^{r_2 t}, t e^{rt}, e^{\alpha t} \cos(\beta t), e^{\alpha t} \sin(\beta t)$). You have all the building blocks.
*   **Initial Conditions:** Like having a blueprint and a specific project in mind. You know exactly which pieces to use and how to combine them to build *your* specific structure.

This foundational understanding of homogeneous linear ODEs with constant coefficients is a stepping stone to more complex topics, including non-homogeneous equations (which you'll tackle later) and systems of ODEs. Keep practicing, and these concepts will become second nature!

---

## Sample Questions with Answers

**1. Conceptual Question:**
What is the role of the characteristic equation in solving homogeneous linear ODEs with constant coefficients?

**Answer:**
The characteristic equation, $ar^2 + br + c = 0$, is derived by assuming a solution of the form $y = e^{rt}$ and substituting it into the ODE $ay'' + by' + cy = 0$. The roots of this quadratic equation ($r_1, r_2$) directly determine the form of the general solution. Specifically, the nature of these roots (distinct real, repeated real, or complex conjugates) dictates whether the solutions are exponentials, products of exponentials and polynomials, or damped/amplified sinusoids, respectively. Without the characteristic equation, we wouldn't have a systematic way to find the basis solutions.

**2. Exam-Oriented Question (Finding General Solution):**
Find the general solution to the differential equation $4y'' + 4y' + y = 0$.

**Solution:**
1.  **Characteristic Equation:** The given ODE is $4y'' + 4y' + y = 0$. The characteristic equation is $4r^2 + 4r + 1 = 0$.
2.  **Find Roots:** This is a perfect square: $(2r + 1)^2 = 0$.
    Therefore, we have a repeated real root $r = -\frac{1}{2}$.
3.  **General Solution:** For repeated real roots, the general solution is of the form $y(t) = c_1 e^{rt} + c_2 t e^{rt}$.
    Substituting $r = -\frac{1}{2}$, we get:
    $y(t) = c_1 e^{-t/2} + c_2 t e^{-t/2}$, or $y(t) = (c_1 + c_2 t) e^{-t/2}$.

**3. Exam-Oriented Question (Solving an IVP):**
Solve the initial value problem: $y'' + 4y = 0$, with $y(0) = 2$ and $y'(0) = -4$.

**Solution:**
1.  **General Solution:**
    *   Characteristic equation: $r^2 + 4 = 0$.
    *   Roots: $r^2 = -4 \implies r = \pm \sqrt{-4} \implies r = \pm 2i$.
    *   These are complex conjugate roots of the form $\alpha \pm i\beta$, where $\alpha = 0$ and $\beta = 2$.
    *   The general solution is $y(t) = e^{\alpha t} (c_1 \cos(\beta t) + c_2 \sin(\beta t))$.
    *   Substituting $\alpha = 0$ and $\beta = 2$, we get $y(t) = e^0 (c_1 \cos(2t) + c_2 \sin(2t))$, which simplifies to $y(t) = c_1 \cos(2t) + c_2 \sin(2t)$.

2.  **Apply First Initial Condition ($y(0) = 2$):**
    *   $y(0) = c_1 \cos(2 \cdot 0) + c_2 \sin(2 \cdot 0) = c_1 \cos(0) + c_2 \sin(0) = c_1(1) + c_2(0) = c_1$.
    *   So, $c_1 = 2$.

3.  **Find the Derivative:**
    *   $y'(t) = \frac{d}{dt}(c_1 \cos(2t) + c_2 \sin(2t)) = -2c_1 \sin(2t) + 2c_2 \cos(2t)$.

4.  **Apply Second Initial Condition ($y'(0) = -4$):**
    *   $y'(0) = -2c_1 \sin(2 \cdot 0) + 2c_2 \cos(2 \cdot 0) = -2c_1 \sin(0) + 2c_2 \cos(0) = -2c_1(0) + 2c_2(1) = 2c_2$.
    *   So, $2c_2 = -4$, which means $c_2 = -2$.

5.  **Write the Specific Solution:**
    *   Substitute $c_1 = 2$ and $c_2 = -2$ into the general solution:
        $y(t) = 2 \cos(2t) - 2 \sin(2t)$.

**4. Conceptual Question (Pitfall Identification):**
A student is solving $y'' + y' - 2y = 0$. They find the roots of the characteristic equation to be $r_1=1$ and $r_2=-2$. They then incorrectly write the general solution as $y(t) = e^t - e^{-2t}$. What is wrong with this solution?

**Answer:**
The student correctly found the roots of the characteristic equation ($r^2 + r - 2 = 0 \implies (r+2)(r-1)=0 \implies r=1, r=-2$). However, they've missed a crucial step: the general solution is a *linear combination* of the fundamental solutions, not just the difference or sum of them. For distinct real roots $r_1$ and $r_2$, the general solution is $y(t) = c_1 e^{r_1 t} + c_2 e^{r_2 t}$. Therefore, the correct general solution should be $y(t) = c_1 e^t + c_2 e^{-2t}$, where $c_1$ and $c_2$ are arbitrary constants determined by initial or boundary conditions. The student's proposed solution implies $c_1=1$ and $c_2=-1$, which is only one specific solution among infinitely many.
