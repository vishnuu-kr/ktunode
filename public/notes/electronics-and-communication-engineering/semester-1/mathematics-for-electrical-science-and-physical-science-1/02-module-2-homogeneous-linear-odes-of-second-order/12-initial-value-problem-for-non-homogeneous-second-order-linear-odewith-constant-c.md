---
title: "Initial value Problem for Non-Homogeneous Second order linear ODE(with constant coefficients)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fc1"
status: "completed"
scrapedAt: "2026-05-23T17:34:56.979Z"
---
## Module 2: Homogeneous Linear ODEs of Second Order

### Topic: Initial Value Problems for Non-Homogeneous Second-Order Linear ODEs with Constant Coefficients

Welcome, everyone! Today, we're diving into a crucial topic in our journey through Mathematics for Electrical Science and Physical Science: **Initial Value Problems for Non-Homogeneous Second-Order Linear Ordinary Differential Equations (ODEs) with Constant Coefficients.**

You've already built a strong foundation with homogeneous ODEs. We know how to find the complementary solution, $y_c(x)$, which represents the natural behavior of a system. Now, we're going to introduce a new element: **forcing functions** or **driving terms**. These are the external influences that push a system away from its natural state, making the ODE non-homogeneous. Think about a circuit with a voltage source or a mechanical system with an external force applied – that's where our non-homogeneous ODEs come into play!

Our goal today is to understand how to find the complete solution, $y(x)$, to these non-homogeneous problems, especially when we are given specific starting conditions, an "initial value problem" (IVP). This is fundamental for predicting and controlling real-world systems.

---

### 1. Understanding Non-Homogeneous Linear ODEs with Constant Coefficients

Let's start by formalizing what we mean by "non-homogeneous" in this context. A second-order linear ODE with constant coefficients has the general form:

$ay''(x) + by'(x) + cy(x) = g(x)$

where $a$, $b$, and $c$ are constants, and importantly, $g(x)$ is a function of $x$ that is **not identically zero**. If $g(x) = 0$, the ODE is homogeneous, which we've already mastered. The presence of $g(x)$ on the right-hand side makes it non-homogeneous.

**Analogy Time:** Imagine a simple spring-mass system. If there's no external force, the motion is governed by a homogeneous ODE (like $m\ddot{x} + kx = 0$). But what if you start pushing or pulling the mass periodically? That external push or pull is our $g(x)$! It adds an extra "effort" to the system, causing a different kind of motion. Similarly, in an electrical circuit, if you have a resistor, inductor, and capacitor in series ($L y'' + Ry' + \frac{1}{C} y = 0$, where $y$ could be charge or current), and you connect a battery or an AC source, that source is the $g(x)$.

**Key Concept: The Principle of Superposition for Non-Homogeneous ODEs**

A crucial principle that guides our approach to solving these equations is the **Principle of Superposition**. For a non-homogeneous linear ODE, the general solution $y(x)$ is the sum of the complementary solution $y_c(x)$ (the solution to the associated homogeneous equation) and a particular solution $y_p(x)$ (any solution to the non-homogeneous equation).

$y(x) = y_c(x) + y_p(x)$

*   **Complementary Solution ($y_c(x)$):** This is the solution we've been working with! It's the general solution to $ay''(x) + by'(x) + cy(x) = 0$. We find this by solving the characteristic equation $ar^2 + br + c = 0$ and using the roots to construct $y_c(x)$ (cases of distinct real roots, repeated real roots, and complex conjugate roots). This part describes the system's natural response, influenced by its initial conditions.

*   **Particular Solution ($y_p(x)$):** This is the new piece of the puzzle! $y_p(x)$ represents the system's response to the forcing function $g(x)$. It doesn't contain arbitrary constants because it's *one specific* way the system responds to $g(x)$. The choice of $y_p(x)$ is not unique, but we'll pick one that's easiest to work with.

This structure, $y(x) = y_c(x) + y_p(x)$, directly relates to **Course Outcome CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.** We're essentially breaking down the problem into two parts: the homogeneous behavior and the response to the forcing function.

---

### 2. Methods for Finding the Particular Solution ($y_p(x)$)

Since $y_p(x)$ is the part that addresses the forcing function $g(x)$, the method we use to find it heavily depends on the form of $g(x)$. The two most common and powerful methods are:

*   **The Method of Undetermined Coefficients**
*   **The Method of Variation of Parameters**

We'll focus on the first one primarily, as it's often simpler when $g(x)$ has a specific, well-behaved form.

#### 2.1. The Method of Undetermined Coefficients

This method is fantastic when $g(x)$ is a polynomial, an exponential function, a sine or cosine function, or sums and products of these. The idea is to make an educated guess about the form of $y_p(x)$ based on the form of $g(x)$, and then determine the coefficients in our guess by substituting it into the ODE.

**The "Guessing" Strategy:**

Think of it like this: if you have a forcing function that's a simple sine wave, the system's response might also involve sine waves, perhaps with a different amplitude or phase shift. If the forcing is a polynomial, the response will likely be another polynomial of the same or higher degree.

**General Rules of Thumb for Guessing $y_p(x)$:**

Let's break down the common forms of $g(x)$ and the corresponding educated guesses for $y_p(x)$.

1.  **If $g(x)$ is a polynomial of degree $n$:**
    $g(x) = P_n(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_0$
    *   **Initial Guess for $y_p(x)$:** A general polynomial of degree $n$.
        $y_p(x) = A_n x^n + A_{n-1} x^{n-1} + \dots + A_0$
        (where $A_i$ are coefficients we need to find).

    *   **Example Analogy:** Imagine you're filling a swimming pool with a hose that delivers water at a steady, increasing rate (like $t^2$). The water level in the pool will also follow a pattern related to $t^2$.

2.  **If $g(x)$ is of the form $Ke^{\alpha x}$:**
    *   **Initial Guess for $y_p(x)$:** $y_p(x) = A e^{\alpha x}$

    *   **Example Analogy:** If you're charging a capacitor with a constant voltage source, the current might decay exponentially. If the source is $e^{kt}$, the current's response might be proportional to $e^{kt}$.

3.  **If $g(x)$ is of the form $K \cos(\beta x)$ or $K \sin(\beta x)$:**
    *   **Initial Guess for $y_p(x)$:** We need to guess both cosine and sine terms because they are often coupled in solutions of linear ODEs.
        $y_p(x) = A \cos(\beta x) + B \sin(\beta x)$

    *   **Example Analogy:** Think of a simple harmonic oscillator driven by a sinusoidal force. The system will likely oscillate at the driving frequency.

4.  **Combinations of the above:** If $g(x)$ is a sum or product of these forms, our guess for $y_p(x)$ is the sum or product of the individual guesses.
    *   If $g(x) = P_n(x)e^{\alpha x}$, guess $y_p(x) = (A_n x^n + \dots + A_0)e^{\alpha x}$.
    *   If $g(x) = P_n(x) \cos(\beta x)$ or $P_n(x) \sin(\beta x)$, guess $y_p(x) = (A_n x^n + \dots + A_0) \cos(\beta x) + (B_n x^n + \dots + B_0) \sin(\beta x)$.
    *   If $g(x) = e^{\alpha x} \cos(\beta x)$ or $e^{\alpha x} \sin(\beta x)$, guess $y_p(x) = e^{\alpha x} (A \cos(\beta x) + B \sin(\beta x))$.

**The Crucial Modification Rule:**

Now, here's a very important point, often a source of mistakes! What if your initial guess for $y_p(x)$ contains terms that are *already* part of the complementary solution $y_c(x)$? If that happens, substituting your guess into the ODE will result in $0 = g(x)$, which is impossible since $g(x)$ is not zero.

**The Rule:** If any term in your initial guess for $y_p(x)$ is a solution to the homogeneous equation ($ay''(x) + by'(x) + cy(x) = 0$), you must multiply your entire guess by the lowest positive integer power of $x$ (i.e., $x$, $x^2$, etc.) that eliminates this duplication.

**When does this modification happen?** It happens when the form of $g(x)$ matches terms in $y_c(x)$. Specifically:
*   If $g(x)$ is $Ke^{\alpha x}$ and $\alpha$ is a root of the characteristic equation.
    *   If $\alpha$ is a simple root, multiply your guess $Ae^{\alpha x}$ by $x$ to get $Axe^{\alpha x}$.
    *   If $\alpha$ is a repeated root, multiply your guess $Ae^{\alpha x}$ by $x^2$ to get $Ax^2e^{\alpha x}$.
*   If $g(x)$ involves $\cos(\beta x)$ or $\sin(\beta x)$, and $\alpha \pm i\beta$ are roots of the characteristic equation.
    *   If $\alpha \pm i\beta$ are simple complex roots, multiply your guess $A\cos(\beta x) + B\sin(\beta x)$ by $x$ to get $x(A\cos(\beta x) + B\sin(\beta x))$.
    *   (Note: Repeated complex roots are less common for simple $g(x)$ forms and usually arise from $g(x)$ involving $x\cos(\beta x)$ etc. already).

**Example Walkthrough (Method of Undetermined Coefficients):**

Let's solve the IVP: $y'' - y' - 2y = 3\sin(x)$, with $y(0) = 0$ and $y'(0) = 1$.

**Step 1: Find the complementary solution ($y_c(x)$).**
*   The associated homogeneous equation is $y'' - y' - 2y = 0$.
*   The characteristic equation is $r^2 - r - 2 = 0$.
*   Factoring, we get $(r-2)(r+1) = 0$.
*   The roots are $r_1 = 2$ and $r_2 = -1$.
*   Since the roots are distinct and real, the complementary solution is:
    $y_c(x) = c_1 e^{2x} + c_2 e^{-x}$

**Step 2: Find the particular solution ($y_p(x)$).**
*   Our forcing function is $g(x) = 3\sin(x)$. This is of the form $K\sin(\beta x)$ with $K=3$ and $\beta=1$.
*   Are the roots of the characteristic equation (2 and -1) of the form $\pm i\beta$? No, our roots are real. Therefore, no modification is needed for our initial guess.
*   **Initial guess for $y_p(x)$:** Based on $g(x) = 3\sin(x)$, we guess:
    $y_p(x) = A\cos(x) + B\sin(x)$
*   Now we need to find $A$ and $B$. We need $y_p'(x)$ and $y_p''(x)$:
    $y_p'(x) = -A\sin(x) + B\cos(x)$
    $y_p''(x) = -A\cos(x) - B\sin(x)$
*   Substitute these into the original non-homogeneous ODE: $y'' - y' - 2y = 3\sin(x)$:
    $(-A\cos(x) - B\sin(x)) - (-A\sin(x) + B\cos(x)) - 2(A\cos(x) + B\sin(x)) = 3\sin(x)$
*   Group terms by $\cos(x)$ and $\sin(x)$:
    $(-A - B - 2A)\cos(x) + (-B + A - 2B)\sin(x) = 3\sin(x)$
    $(-3A - B)\cos(x) + (A - 3B)\sin(x) = 3\sin(x)$
*   For this equation to hold for all $x$, the coefficients of $\cos(x)$ on both sides must match, and the coefficients of $\sin(x)$ on both sides must match.
    *   Coefficient of $\cos(x)$: $-3A - B = 0$
    *   Coefficient of $\sin(x)$: $A - 3B = 3$
*   Now we have a system of two linear equations for $A$ and $B$.
    From the first equation, $B = -3A$.
    Substitute this into the second equation: $A - 3(-3A) = 3$
    $A + 9A = 3$
    $10A = 3 \implies A = \frac{3}{10}$
    Now find $B$: $B = -3A = -3 \left(\frac{3}{10}\right) = -\frac{9}{10}$
*   So, our particular solution is:
    $y_p(x) = \frac{3}{10}\cos(x) - \frac{9}{10}\sin(x)$

**Step 3: Form the general solution.**
*   $y(x) = y_c(x) + y_p(x)$
    $y(x) = c_1 e^{2x} + c_2 e^{-x} + \frac{3}{10}\cos(x) - \frac{9}{10}\sin(x)$

**Step 4: Apply the initial conditions to find $c_1$ and $c_2$.**
*   We have $y(0) = 0$ and $y'(0) = 1$.
*   First, let's find $y'(x)$:
    $y'(x) = 2c_1 e^{2x} - c_2 e^{-x} - \frac{3}{10}\sin(x) - \frac{9}{10}\cos(x)$
*   Apply $y(0) = 0$:
    $0 = c_1 e^0 + c_2 e^0 + \frac{3}{10}\cos(0) - \frac{9}{10}\sin(0)$
    $0 = c_1 + c_2 + \frac{3}{10}(1) - \frac{9}{10}(0)$
    $c_1 + c_2 + \frac{3}{10} = 0 \implies c_1 + c_2 = -\frac{3}{10}$ (Equation 1)
*   Apply $y'(0) = 1$:
    $1 = 2c_1 e^0 - c_2 e^0 - \frac{3}{10}\sin(0) - \frac{9}{10}\cos(0)$
    $1 = 2c_1 - c_2 - \frac{3}{10}(0) - \frac{9}{10}(1)$
    $1 = 2c_1 - c_2 - \frac{9}{10}$
    $2c_1 - c_2 = 1 + \frac{9}{10} = \frac{19}{10}$ (Equation 2)
*   Now we solve the system of equations for $c_1$ and $c_2$:
    (1) $c_1 + c_2 = -\frac{3}{10}$
    (2) $2c_1 - c_2 = \frac{19}{10}$
*   Add Equation (1) and Equation (2):
    $(c_1 + c_2) + (2c_1 - c_2) = -\frac{3}{10} + \frac{19}{10}$
    $3c_1 = \frac{16}{10} = \frac{8}{5}$
    $c_1 = \frac{8}{15}$
*   Substitute $c_1$ back into Equation (1):
    $\frac{8}{15} + c_2 = -\frac{3}{10}$
    $c_2 = -\frac{3}{10} - \frac{8}{15} = -\frac{9}{30} - \frac{16}{30} = -\frac{25}{30} = -\frac{5}{6}$
*   So, the final solution to the IVP is:
    $y(x) = \frac{8}{15} e^{2x} - \frac{5}{6} e^{-x} + \frac{3}{10}\cos(x) - \frac{9}{10}\sin(x)$

**Exam Tip:** Always check the form of $g(x)$ against the roots of your characteristic equation *before* you make your guess for $y_p(x)$. This modification rule is a frequent pitfall.

**Connection to Course Outcomes:** This entire process directly addresses **CO2**. We first find the homogeneous part ($y_c$) and then the particular part ($y_p$), combining them for the general solution, and finally using initial conditions to find the specific solution for the IVP.

#### 2.2. The Method of Variation of Parameters

While Undetermined Coefficients is great for specific $g(x)$ forms, sometimes $g(x)$ is more complex (like $e^{x^2}$ or $\tan(x)$), or we just prefer a more general method. That's where Variation of Parameters comes in. It's a more systematic approach that works for *any* continuous $g(x)$.

**The Core Idea:**
Recall that the homogeneous solution is $y_c(x) = c_1 y_1(x) + c_2 y_2(x)$, where $y_1(x)$ and $y_2(x)$ are linearly independent solutions to the homogeneous ODE. Variation of Parameters says, "What if we let the coefficients $c_1$ and $c_2$ *vary* with $x$?" That is, we seek a solution of the form:

$y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$

Our job is to find the functions $u_1(x)$ and $u_2(x)$. By making a clever choice (setting $u_1''y_1 + u_2''y_2 = 0$), we can derive formulas for $u_1'(x)$ and $u_2'(x)$ that involve the Wronskian determinant.

The formulas are:
$u_1'(x) = -\frac{y_2(x) g(x)}{W(y_1, y_2)}$
$u_2'(x) = \frac{y_1(x) g(x)}{W(y_1, y_2)}$

where the Wronskian is $W(y_1, y_2) = y_1 y_2' - y_1' y_2$.

**How does this relate to our topic?**
This method is a more advanced technique for finding $y_p(x)$, essential when Undetermined Coefficients is not feasible. It also relies on having the homogeneous solutions $y_1$ and $y_2$, directly connecting to our understanding of homogeneous ODEs (CO2).

**Practicality:** For this course, you'll likely use Undetermined Coefficients more often, but it's vital to know Variation of Parameters exists and understand its underlying principles. Kreyszig's "Advanced Engineering Mathematics" (Chapter 2, Section 4) provides a thorough treatment of this method.

---

### 3. Initial Value Problems (IVPs) Revisited

We've established that the general solution to a non-homogeneous second-order linear ODE with constant coefficients is $y(x) = y_c(x) + y_p(x)$. For an IVP, we are given specific values of $y(x)$ and $y'(x)$ at a point (usually $x=0$), say $y(x_0) = y_0$ and $y'(x_0) = y_1$.

**The Process:**

1.  **Solve the Homogeneous Equation:** Find $y_c(x) = c_1 y_1(x) + c_2 y_2(x)$.
2.  **Find a Particular Solution:** Determine $y_p(x)$ using either Undetermined Coefficients or Variation of Parameters, based on $g(x)$.
3.  **Form the General Solution:** $y(x) = y_c(x) + y_p(x)$.
4.  **Apply Initial Conditions:**
    *   Calculate $y'(x)$ from the general solution $y(x)$.
    *   Substitute $x_0$ into $y(x)$ and $y'(x)$ and set them equal to the given values $y_0$ and $y_1$.
    *   This will give you a system of two linear algebraic equations for the constants $c_1$ and $c_2$.
    *   Solve this system to find the specific values of $c_1$ and $c_2$.
5.  **Write the Final Solution:** Substitute the determined values of $c_1$ and $c_2$ back into the general solution to get the unique solution to the IVP.

**Why are IVPs so important in Electrical Science and Physical Science?**
Initial conditions represent the state of a system at the beginning of an observation.
*   **Electrical Circuits:** Initial current through an inductor or initial voltage across a capacitor. These are like the "memory" of the circuit before the external source $g(x)$ is applied or changes.
*   **Mechanical Systems:** Initial position and velocity of a mass.

**Connection to Course Outcomes:** This is the practical application part. By solving IVPs, we are directly fulfilling **CO2**. We are not just finding abstract solutions; we are finding the *specific* behavior of a system given its starting state and external influences. This is also where the understanding of how mathematical models represent physical phenomena comes into play.

---

### 4. Illustrative Examples and Analogies for IVPs

Let's consider a mechanical system – a damped harmonic oscillator with a driving force.
Imagine a swing set.
*   **Homogeneous (no driving force, no damping):** If you give it a push, it swings back and forth indefinitely. That's $y_c(x)$.
*   **Homogeneous (with damping):** If you give it a push, it gradually slows down and stops due to air resistance. That's $y_c(x)$ with exponential decay.
*   **Non-homogeneous (with damping and driving force):** Now, imagine you're pushing the swing periodically (like a parent pushing a child). This external push is $g(x)$. The swing's motion will be a combination of its natural tendency to die down (if damping exists) and the forced oscillation due to your pushes. The initial push you gave it (initial conditions) determines how it starts.

**Example: Spring-Mass System IVP**
Consider a mass $m$ attached to a spring with spring constant $k$. Let there be a damping force proportional to velocity (damping coefficient $b$). An external force $F(t) = F_0 \cos(\omega t)$ is applied. The equation of motion is:

$m y''(t) + b y'(t) + k y(t) = F_0 \cos(\omega t)$

Here, $y(t)$ is the displacement from equilibrium. If we are given $y(0) = y_0$ and $y'(0) = v_0$, this is an IVP for a non-homogeneous ODE.

*   The homogeneous part $my''(t) + by'(t) + ky(t) = 0$ will give us $y_c(t)$, describing the natural decaying oscillations (if $b>0$).
*   The forcing term $F_0 \cos(\omega t)$ will lead to a particular solution $y_p(t)$, representing the steady-state forced oscillation.
*   The initial conditions $y_0$ and $v_0$ will determine the constants in $y_c(t)$ that dictate the transient behavior (how the system settles down to the steady state).

**Key Insight:** In many physical systems, the solution $y(x)$ will eventually settle into the behavior dictated by $y_p(x)$ as $x \to \infty$ (if the homogeneous solution decays). The $y_c(x)$ part represents the transient response, which dies out over time due to damping, while $y_p(x)$ represents the steady-state response.

---

### 5. Connection to Other Course Outcomes

*   **CO1: Solve systems of linear equations and diagonalize matrices.** While not directly used *in* the ODE solving process here, the algebraic manipulation to solve for $c_1$ and $c_2$ from the initial conditions is a system of linear equations. In more complex scenarios or higher-order systems, matrix methods (like those in CO1) become indispensable for solving ODE systems.

*   **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** Laplace transforms provide an alternative and often very powerful method for solving IVPs of linear ODEs with constant coefficients, especially when dealing with discontinuous or impulsive forcing functions ($g(x)$). This module's content provides the foundation for understanding how the ODE itself behaves, which is then transformed by Laplace.

*   **CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.** The forms of $g(x)$ we consider (polynomials, exponentials, sines/cosines) are often the building blocks of more complex functions representable by Taylor or Fourier series. For instance, if $g(x)$ were a square wave, we would use Fourier series to represent it as a sum of sines and cosines, and then solve the ODE for each sinusoidal component using the methods discussed today. This is a very practical application in signal processing.

---

### 6. Summary and Key Takeaways

*   **Non-homogeneous ODEs** ($ay'' + by' + cy = g(x), g(x) \neq 0$) describe systems with external influences.
*   The **general solution** is the sum of the **complementary solution** ($y_c$) and a **particular solution** ($y_p$): $y(x) = y_c(x) + y_p(x)$.
*   **$y_c(x)$** is found by solving the associated homogeneous equation.
*   **$y_p(x)$** is found by guessing its form based on $g(x)$ (Method of Undetermined Coefficients) or using Variation of Parameters.
*   **Method of Undetermined Coefficients:** Guess $y_p(x)$ based on $g(x)$ (polynomials, exponentials, trig functions, or their combinations). *Crucially*, if any term in the guess is already a solution to the homogeneous equation, multiply the guess by $x$ (or $x^2$) to eliminate duplication.
*   **Initial Value Problems (IVPs):** Use initial conditions ($y(x_0)$, $y'(x_0)$) to determine the arbitrary constants in $y_c(x)$ after finding $y_p(x)$ and forming the general solution.
*   This topic directly addresses **CO2** and is foundational for understanding system responses in engineering and physics.

Remember this: The ability to combine the natural behavior of a system ($y_c$) with its response to external stimuli ($y_p$) and then tailor it to specific starting conditions (IVP) is a cornerstone of mathematical modeling in science and engineering.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
What is the general form of the solution to a non-homogeneous linear ODE with constant coefficients? Explain the role of each component.

**Answer:**
The general solution to a non-homogeneous linear ODE with constant coefficients, $ay'' + by' + cy = g(x)$, is given by $y(x) = y_c(x) + y_p(x)$.
*   $y_c(x)$ is the **complementary solution**, which is the general solution to the associated homogeneous equation $ay'' + by' + cy = 0$. It represents the natural response of the system and contains arbitrary constants that are determined by initial or boundary conditions.
*   $y_p(x)$ is a **particular solution**, which is any one specific solution to the non-homogeneous equation $ay'' + by' + cy = g(x)$. It represents the system's response to the forcing function $g(x)$.

**Question 2 (Procedural - Undetermined Coefficients):**
Solve the initial value problem: $y'' + y = \cos(2x)$, with $y(0) = 1$ and $y'(0) = 0$.

**Answer:**
1.  **Homogeneous Solution ($y_c(x)$):**
    The characteristic equation is $r^2 + 1 = 0$, which has roots $r = \pm i$.
    So, $y_c(x) = c_1 \cos(x) + c_2 \sin(x)$.

2.  **Particular Solution ($y_p(x)$):**
    The forcing function is $g(x) = \cos(2x)$. The roots of the characteristic equation are $\pm i$. Since $2i$ is not of the form $\pm i$, no modification is needed.
    Guess: $y_p(x) = A \cos(2x) + B \sin(2x)$.
    $y_p'(x) = -2A \sin(2x) + 2B \cos(2x)$
    $y_p''(x) = -4A \cos(2x) - 4B \sin(2x)$

    Substitute into the ODE:
    $(-4A \cos(2x) - 4B \sin(2x)) + (A \cos(2x) + B \sin(2x)) = \cos(2x)$
    $(-3A) \cos(2x) + (-3B) \sin(2x) = \cos(2x)$

    Equating coefficients:
    For $\cos(2x)$: $-3A = 1 \implies A = -\frac{1}{3}$
    For $\sin(2x)$: $-3B = 0 \implies B = 0$

    So, $y_p(x) = -\frac{1}{3} \cos(2x)$.

3.  **General Solution:**
    $y(x) = y_c(x) + y_p(x) = c_1 \cos(x) + c_2 \sin(x) - \frac{1}{3} \cos(2x)$.

4.  **Apply Initial Conditions:**
    $y'(x) = -c_1 \sin(x) + c_2 \cos(x) + \frac{2}{3} \sin(2x)$.

    $y(0) = 1 \implies c_1 \cos(0) + c_2 \sin(0) - \frac{1}{3} \cos(0) = 1$
    $c_1 - \frac{1}{3} = 1 \implies c_1 = \frac{4}{3}$.

    $y'(0) = 0 \implies -c_1 \sin(0) + c_2 \cos(0) + \frac{2}{3} \sin(0) = 0$
    $c_2 = 0$.

5.  **Final Solution:**
    $y(x) = \frac{4}{3} \cos(x) - \frac{1}{3} \cos(2x)$.

**Question 3 (Conceptual - Modification Rule):**
Consider the ODE $y'' - 2y' + y = e^x$. Why is the initial guess $y_p(x) = Ae^x$ incorrect? What should the correct guess be?

**Answer:**
The characteristic equation for $y'' - 2y' + y = 0$ is $r^2 - 2r + 1 = 0$, which is $(r-1)^2 = 0$. This has a repeated root $r = 1$.
The complementary solution is $y_c(x) = c_1 e^x + c_2 x e^x$.

The forcing function is $g(x) = e^x$. The form of $g(x)$, $e^x$, is present in $y_c(x)$ in two ways: $c_1 e^x$ and $c_2 x e^x$.
*   Since $e^x$ corresponds to a root $r=1$ that is a **repeated root** of the characteristic equation, the initial guess $y_p(x) = Ae^x$ is a solution to the homogeneous equation ($y_c(x)$). If we substitute this into the ODE, we'd get $0 = e^x$, which is false.
*   Therefore, we must modify the guess. Because $r=1$ is a root of multiplicity 2, we need to multiply our initial guess $Ae^x$ by $x^2$.
*   The correct guess for the particular solution is $y_p(x) = Ax^2 e^x$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
