---
title: "General solution"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fb8"
status: "completed"
scrapedAt: "2026-05-23T17:34:48.902Z"
---
## Module 2: Homogeneous Linear ODEs of Second Order - The General Solution

Welcome everyone! In our journey through "Mathematics for Electrical Science and Physical Science – 1," we've reached a pivotal module: Module 2, focusing on Homogeneous Linear Ordinary Differential Equations (ODEs) of the Second Order. Today, we're going to dive into one of the most fundamental aspects of this topic: understanding and constructing the **General Solution**. This concept is absolutely crucial for solving a wide range of physical phenomena, from simple harmonic motion in mechanical systems to transient responses in electrical circuits.

Our goal today is to understand what a general solution *is*, why it's so important, and how we find it. This directly ties into **Course Outcome CO2: Solve homogeneous and non-homogeneous linear differential equations with constant coefficients.** The general solution is our first big step towards that. Think of it as building the foundation for solving all sorts of real-world problems we'll encounter later.

### What is a Homogeneous Linear ODE of the Second Order?

Before we talk about the solution, let's quickly recap what we're dealing with. A second-order ODE involves a second derivative. It's "linear" if the dependent variable and its derivatives appear only to the first power, and there are no products of them. It's "homogeneous" if the right-hand side of the equation is zero.

So, we're looking at equations of the form:

$a y'' + b y' + c y = 0$

Here, $y$ is our unknown function (often representing displacement, voltage, current, etc.), $y'$ is its first derivative with respect to some independent variable (usually time, $t$, or position, $x$), and $y''$ is its second derivative. The coefficients $a$, $b$, and $c$ are typically constants, which simplifies things considerably. If they were functions of $x$ or $t$, life would be much harder, and we'd need more advanced techniques (which we might touch on later, but for now, constant coefficients are our focus).

*Think of it this way:* Imagine a simple spring-mass system. The force is proportional to displacement ($F = -kx$). Newton's second law ($F=ma$) gives us $ma = -kx$. Since acceleration $a$ is the second derivative of displacement $y$ with respect to time ($a = y''$), and mass $m$ is constant, we get $my'' = -ky$, or $my'' + ky = 0$. This is a second-order homogeneous linear ODE with constant coefficients ($a=m$, $b=0$, $c=k$). The solution $y(t)$ tells us how the mass oscillates over time.

### The Principle of Superposition: The Heart of the General Solution

Now, why are we interested in the "general solution"? Because most physical systems described by these ODEs have multiple possible ways they can behave. The general solution captures *all* these possible behaviors.

The magic ingredient that allows us to build this general solution is the **Principle of Superposition**. This principle, fundamental to linear systems, states that if $y_1(t)$ and $y_2(t)$ are both solutions to a homogeneous linear ODE, then any linear combination of them, $y(t) = c_1 y_1(t) + c_2 y_2(t)$ (where $c_1$ and $c_2$ are constants), is *also* a solution.

*Analogy time!* Imagine you have two separate ways to tune a radio to receive a specific station: playing it through speakers (solution $y_1$) or through headphones (solution $y_2$). The Principle of Superposition is like saying you can combine these – maybe you want to listen through both at the same time, or one more loudly than the other. As long as the radio system is "linear" (meaning doubling the signal doubles the output, and effects add up), you can mix and match these solutions. In our ODE context, $c_1$ and $c_2$ are like the "mixers" that let us combine different possible behaviors.

This principle is powerful. If we can find *two linearly independent solutions*, $y_1(t)$ and $y_2(t)$, then *all* possible solutions can be expressed as a linear combination of these two. This linear combination is precisely what we call the **general solution**:

$y(t) = c_1 y_1(t) + c_2 y_2(t)$

The constants $c_1$ and $c_2$ are determined by the initial conditions of the specific problem, which we’ll discuss later. For now, our task is to find those two special, linearly independent solutions.

### Finding Linearly Independent Solutions: The Characteristic Equation

How do we actually find these $y_1(t)$ and $y_2(t)$? For our homogeneous linear ODEs with constant coefficients ($a y'' + b y' + c y = 0$), there's a standard, elegant method: we assume a solution of the form $y(t) = e^{rt}$, where $r$ is some constant we need to find.

Let's try this. If $y(t) = e^{rt}$, then:
$y'(t) = r e^{rt}$
$y''(t) = r^2 e^{rt}$

Now, substitute these into our ODE:
$a (r^2 e^{rt}) + b (r e^{rt}) + c (e^{rt}) = 0$

We can factor out $e^{rt}$:
$e^{rt} (ar^2 + br + c) = 0$

Since $e^{rt}$ is never zero, for this equation to hold, the term in the parentheses must be zero:

$ar^2 + br + c = 0$

This is our **characteristic equation** (or auxiliary equation). It’s a simple quadratic equation in $r$. The roots of this equation, $r_1$ and $r_2$, tell us about the form of our solutions.

This is where **Course Outcome CO2** really comes into play. Solving this characteristic equation is the direct way to tackle ODEs with constant coefficients. The nature of the roots dictates the form of our solutions.

### Cases for the Roots of the Characteristic Equation

The quadratic formula $r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ gives us the roots. The nature of these roots (real and distinct, real and repeated, or complex conjugates) leads to three distinct cases for our general solution.

#### Case 1: Real and Distinct Roots ($r_1 \neq r_2$)

If the discriminant $b^2 - 4ac > 0$, we get two distinct real roots, $r_1$ and $r_2$.
In this case, our two linearly independent solutions are:
$y_1(t) = e^{r_1 t}$
$y_2(t) = e^{r_2 t}$

And the general solution is:
$y(t) = c_1 e^{r_1 t} + c_2 e^{r_2 t}$

*Example:* Consider the ODE $y'' - 3y' + 2y = 0$.
The characteristic equation is $r^2 - 3r + 2 = 0$.
Factoring, we get $(r-1)(r-2) = 0$.
The roots are $r_1 = 1$ and $r_2 = 2$. These are real and distinct.
So, our two solutions are $y_1(t) = e^t$ and $y_2(t) = e^{2t}$.
The general solution is $y(t) = c_1 e^t + c_2 e^{2t}$.

*Real-world flavor:* Imagine a system where a quantity decays, but in two different ways, each exponentially. For example, in some chemical reactions, the rate of decay might depend on the concentration of two different reactants, each decaying independently. The overall decay could be a combination of these two processes.

**Key takeaway:** Distinct real roots mean exponential terms with those distinct powers.

#### Case 2: Real and Repeated Roots ($r_1 = r_2 = r$)

If the discriminant $b^2 - 4ac = 0$, we get a single real root, say $r$.
So, $r_1 = r_2 = r$.
Our assumed solution $y(t) = e^{rt}$ is certainly one solution. But we need *two linearly independent* solutions to form the general solution. Where does the second one come from?

This is a classic situation in differential equations, and the second solution is found to be $t e^{rt}$. This is a result that can be rigorously derived using techniques like reduction of order (often discussed in more advanced texts like Kreyszig). For now, trust that if you have repeated roots, $t$ multiplies one of the exponential terms.

So, the two linearly independent solutions are:
$y_1(t) = e^{rt}$
$y_2(t) = t e^{rt}$

And the general solution is:
$y(t) = c_1 e^{rt} + c_2 t e^{rt} = (c_1 + c_2 t) e^{rt}$

*Example:* Consider the ODE $y'' - 2y' + y = 0$.
The characteristic equation is $r^2 - 2r + 1 = 0$.
Factoring, we get $(r-1)^2 = 0$.
The root is $r=1$, repeated.
So, our two solutions are $y_1(t) = e^t$ and $y_2(t) = t e^t$.
The general solution is $y(t) = c_1 e^t + c_2 t e^t$, or $y(t) = (c_1 + c_2 t) e^t$.

*Real-world flavor:* Think about a critically damped system, like a shock absorber in a car. When it hits a bump, it returns to its resting position smoothly and as quickly as possible, without oscillating. This often corresponds to a repeated root in the ODE describing its motion. The $t e^{rt}$ term allows for this gradual settling without overshoot.

**Key takeaway:** Repeated real roots mean one exponential term and one term that’s the exponential multiplied by $t$.

#### Case 3: Complex Conjugate Roots ($r = \alpha \pm i\beta$)

If the discriminant $b^2 - 4ac < 0$, we get two complex conjugate roots. Let them be $r = \alpha \pm i\beta$, where $\alpha$ is the real part and $\beta$ is the imaginary part, and $\beta > 0$.

If we plug these complex roots into $e^{rt}$, we get complex-valued functions:
$y_1(t) = e^{(\alpha + i\beta)t} = e^{\alpha t} e^{i\beta t}$
$y_2(t) = e^{(\alpha - i\beta)t} = e^{\alpha t} e^{-i\beta t}$

Now, recall Euler's formula: $e^{i\theta} = \cos(\theta) + i\sin(\theta)$.
Using this, we can rewrite our complex solutions:
$y_1(t) = e^{\alpha t} (\cos(\beta t) + i\sin(\beta t))$
$y_2(t) = e^{\alpha t} (\cos(\beta t) - i\sin(\beta t))$

While these are valid solutions, in physical sciences and engineering, we usually prefer solutions expressed in terms of real-valued functions (like sine and cosine). We can obtain two linearly independent *real-valued* solutions by taking linear combinations of $y_1$ and $y_2$:

Let $u(t) = \frac{y_1(t) + y_2(t)}{2} = e^{\alpha t} \cos(\beta t)$
And $v(t) = \frac{y_1(t) - y_2(t)}{2i} = e^{\alpha t} \sin(\beta t)$

Both $u(t)$ and $v(t)$ are solutions to the original ODE, and they are linearly independent.
Therefore, the general solution in this case is:
$y(t) = c_1 e^{\alpha t} \cos(\beta t) + c_2 e^{\alpha t} \sin(\beta t)$
Or, more compactly:
$y(t) = e^{\alpha t} (c_1 \cos(\beta t) + c_2 \sin(\beta t))$

*Example:* Consider the ODE $y'' + 2y' + 5y = 0$.
The characteristic equation is $r^2 + 2r + 5 = 0$.
Using the quadratic formula: $r = \frac{-2 \pm \sqrt{2^2 - 4(1)(5)}}{2(1)} = \frac{-2 \pm \sqrt{4 - 20}}{2} = \frac{-2 \pm \sqrt{-16}}{2} = \frac{-2 \pm 4i}{2} = -1 \pm 2i$.
So, the roots are complex: $r = -1 \pm 2i$. Here, $\alpha = -1$ and $\beta = 2$.
The two real linearly independent solutions are $e^{-t} \cos(2t)$ and $e^{-t} \sin(2t)$.
The general solution is $y(t) = e^{-t} (c_1 \cos(2t) + c_2 \sin(2t))$.

*Real-world flavor:* This case is extremely common in electrical engineering and physics. Think about an RLC circuit (resistor, inductor, capacitor). The voltage or current in such a circuit when subjected to a disturbance will often exhibit damped oscillations. The $e^{\alpha t}$ term represents the damping (if $\alpha$ is negative, the oscillations decay; if $\alpha$ is positive, they grow uncontrollably, which is usually an unstable system!), and the $\cos(\beta t)$ and $\sin(\beta t)$ terms represent the oscillatory behavior with a frequency determined by $\beta$. This directly relates to **Course Outcome CO2** and can be solved using Laplace transforms too (**Course Outcome CO3**).

**Key takeaway:** Complex conjugate roots $\alpha \pm i\beta$ lead to oscillating solutions modulated by an exponential decay or growth factor $e^{\alpha t}$, using $\cos(\beta t)$ and $\sin(\beta t)$.

### Checking Your Understanding: Linearly Independent Solutions

How do we *know* if $y_1(t)$ and $y_2(t)$ are linearly independent? For functions, we often use the Wronskian. The Wronskian of two functions $y_1$ and $y_2$ is defined as:

$W(y_1, y_2)(t) = \begin{vmatrix} y_1(t) & y_2(t) \\ y_1'(t) & y_2'(t) \end{vmatrix} = y_1(t)y_2'(t) - y_2(t)y_1'(t)$

If the Wronskian is non-zero for at least one value of $t$ in the interval of interest, then $y_1$ and $y_2$ are linearly independent. For the $e^{r_1 t}, e^{r_2 t}$ and $e^{\alpha t}\cos(\beta t), e^{\alpha t}\sin(\beta t)$ cases, the Wronskian will indeed be non-zero. You don't typically need to compute it if you follow the characteristic equation method correctly, as the method inherently generates linearly independent solutions. But it's good to know the concept. This relates to **Course Outcome CO1** which deals with linear algebra concepts like linear independence.

### Why is the General Solution so Important? Initial Conditions!

So far, we've found the *general* solution, which has these arbitrary constants $c_1$ and $c_2$. These constants are the key to finding a *specific* solution for a given physical problem. This is where initial conditions (or boundary conditions) come in.

For a second-order ODE, we typically need two initial conditions to uniquely determine $c_1$ and $c_2$. Common initial conditions are the value of the function and its first derivative at a specific point, usually time $t=0$. For instance:
*   $y(0) = y_0$ (initial position, initial voltage)
*   $y'(0) = v_0$ (initial velocity, initial current rate of change)

By plugging these values into the general solution and its derivative, we get a system of two linear equations for $c_1$ and $c_2$, which we can then solve. This is a direct link to **Course Outcome CO1** where you learn to solve systems of linear equations.

*Example revisited:* $y(t) = c_1 e^t + c_2 e^{2t}$ for $y'' - 3y' + 2y = 0$.
Suppose we have initial conditions $y(0) = 1$ and $y'(0) = 0$.
First, find the derivative of the general solution: $y'(t) = c_1 e^t + 2c_2 e^{2t}$.

Now, apply the initial conditions:
1.  $y(0) = 1 \implies c_1 e^0 + c_2 e^0 = 1 \implies c_1 + c_2 = 1$
2.  $y'(0) = 0 \implies c_1 e^0 + 2c_2 e^0 = 0 \implies c_1 + 2c_2 = 0$

We have a system:
$c_1 + c_2 = 1$
$c_1 + 2c_2 = 0$

Subtracting the first equation from the second gives $c_2 = -1$.
Substituting $c_2 = -1$ into the first equation gives $c_1 - 1 = 1 \implies c_1 = 2$.

So, the specific solution is $y(t) = 2e^t - e^{2t}$. This is *the* unique solution that satisfies those specific starting conditions.

### Summary of Finding the General Solution

To recap, the process for finding the general solution to $a y'' + b y' + c y = 0$ is:

1.  **Form the characteristic equation:** $ar^2 + br + c = 0$.
2.  **Find the roots** of the characteristic equation using the quadratic formula.
3.  **Determine the form of the general solution** based on the nature of the roots:
    *   **Distinct real roots ($r_1, r_2$):** $y(t) = c_1 e^{r_1 t} + c_2 e^{r_2 t}$
    *   **Repeated real roots ($r$):** $y(t) = c_1 e^{rt} + c_2 t e^{rt} = (c_1 + c_2 t) e^{rt}$
    *   **Complex conjugate roots ($\alpha \pm i\beta$):** $y(t) = e^{\alpha t} (c_1 \cos(\beta t) + c_2 \sin(\beta t))$

This method is robust for homogeneous linear ODEs with constant coefficients, forming the bedrock for many applications in electrical and physical sciences. Remember these three cases well – they are tested frequently!

### Connecting to Textbooks and Course Outcomes

Throughout this discussion, we've seen how this topic directly addresses **CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.** Finding the general solution is the first, crucial step.

The roots of the characteristic equation and the resulting forms of the general solution draw upon concepts from algebra and the understanding of exponential and trigonometric functions, which are foundational. The process of finding constants using initial conditions implicitly uses techniques for solving systems of linear equations, linking to **CO1: Solve systems of linear equations and diagonalize matrices.**

For deeper dives, you can consult Kreyszig's "Advanced Engineering Mathematics" (Chapters 1 & 2 for background on ODEs and methods) and Anton, Biven, Davis's "Calculus" for review of roots of polynomials and trigonometric functions. Bird's "Higher Engineering Mathematics" is also an excellent resource for these types of problems.

We’ll build on this understanding in subsequent sessions by looking at non-homogeneous equations and applying these solutions to specific engineering problems.

---

### Sample Questions and Answers

**Q1. Conceptual Question:** What is the role of the characteristic equation in solving homogeneous linear ODEs with constant coefficients?

**Answer:** The characteristic equation is derived by assuming a solution of the form $y = e^{rt}$. Substituting this into the ODE leads to a polynomial equation in $r$. The roots of this characteristic equation directly dictate the form of the fundamental solutions (the $y_1(t)$ and $y_2(t)$) that form the general solution. The nature of the roots (real distinct, real repeated, or complex) determines whether the solutions are exponential, involve time-multiplied exponentials, or are sinusoidal oscillations modulated by exponentials, respectively. It's the bridge between the differential equation and its solution structure.

**Q2. Exam-Oriented Question:** Find the general solution to the differential equation $y'' + 4y' + 4y = 0$.

**Solution:**
1.  **Characteristic Equation:** The ODE is $y'' + 4y' + 4y = 0$. The characteristic equation is $r^2 + 4r + 4 = 0$.
2.  **Find Roots:** This is a perfect square: $(r+2)^2 = 0$. So, we have a repeated real root: $r = -2$.
3.  **General Solution Form:** For a repeated real root $r$, the general solution is $y(t) = c_1 e^{rt} + c_2 t e^{rt}$.
4.  **Substitute Root:** Substituting $r = -2$, we get $y(t) = c_1 e^{-2t} + c_2 t e^{-2t}$, which can be written as $y(t) = (c_1 + c_2 t) e^{-2t}$.

**Answer:** The general solution is $y(t) = (c_1 + c_2 t) e^{-2t}$.

**Q3. Exam-Oriented Question:** A system is described by the ODE $y'' - 4y = 0$. If the initial conditions are $y(0) = 2$ and $y'(0) = 0$, find the specific solution.

**Solution:**
1.  **Characteristic Equation:** $r^2 - 4 = 0$.
2.  **Find Roots:** $(r-2)(r+2) = 0$. The roots are $r_1 = 2$ and $r_2 = -2$. These are distinct real roots.
3.  **General Solution Form:** For distinct real roots, the general solution is $y(t) = c_1 e^{r_1 t} + c_2 e^{r_2 t}$.
4.  **Substitute Roots:** $y(t) = c_1 e^{2t} + c_2 e^{-2t}$.
5.  **Find Derivative of General Solution:** $y'(t) = 2c_1 e^{2t} - 2c_2 e^{-2t}$.
6.  **Apply Initial Conditions:**
    *   $y(0) = 2 \implies c_1 e^0 + c_2 e^0 = 2 \implies c_1 + c_2 = 2$.
    *   $y'(0) = 0 \implies 2c_1 e^0 - 2c_2 e^0 = 0 \implies 2c_1 - 2c_2 = 0 \implies c_1 - c_2 = 0$.
7.  **Solve System for Constants:**
    We have:
    $c_1 + c_2 = 2$
    $c_1 - c_2 = 0$
    Adding the two equations gives $2c_1 = 2 \implies c_1 = 1$.
    Substituting $c_1 = 1$ into $c_1 - c_2 = 0$ gives $1 - c_2 = 0 \implies c_2 = 1$.
8.  **Substitute Constants into General Solution:**
    $y(t) = (1) e^{2t} + (1) e^{-2t} = e^{2t} + e^{-2t}$.

**Answer:** The specific solution is $y(t) = e^{2t} + e^{-2t}$.

**Q4. Conceptual Question:** When do oscillations occur in the solution of a homogeneous linear ODE of the second order with constant coefficients, and in what form do they appear?

**Answer:** Oscillations occur when the characteristic equation has complex conjugate roots. If the roots are of the form $r = \alpha \pm i\beta$ (where $\beta \neq 0$), the solutions involve sine and cosine terms. Specifically, the general solution takes the form $y(t) = e^{\alpha t} (c_1 \cos(\beta t) + c_2 \sin(\beta t))$. The term $e^{\alpha t}$ modulates the oscillations: if $\alpha < 0$, the oscillations decay (damped oscillations); if $\alpha > 0$, they grow (unstable oscillations); and if $\alpha = 0$, they are sustained oscillations. This is a critical concept for understanding phenomena like AC circuits or mechanical vibrations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
