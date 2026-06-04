---
title: "Initial value Problem for Non-Homogeneous Second order linear ODE(with constant coefficients)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e83552"
status: "completed"
scrapedAt: "2026-05-20T17:39:26.331Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 2: Homogeneous Linear ODEs of Second Order

### Topic: Initial Value Problems for Non-Homogeneous Second-Order Linear ODEs with Constant Coefficients

Welcome back, everyone! In our previous discussions on Module 2, we've built a strong foundation in understanding and solving **homogeneous** second-order linear ordinary differential equations (ODEs) with constant coefficients. We learned how the characteristic equation dictates the form of our solutions, leading to distinct real roots, repeated real roots, and complex conjugate roots. This is fantastic! This knowledge is crucial, as it forms the bedrock for tackling the next, slightly more complex, but incredibly important category: **non-homogeneous** linear ODEs.

This topic directly supports **Course Outcome 2 (CO2)**: "Solve homogeneous and non-homogeneous linear differential equation with constant coefficients." Specifically, we're focusing on the non-homogeneous aspect here, which is a key skill for electrical and physical scientists. Think about it – many real-world physical systems, like circuits with external power sources or mechanical systems with applied forces, are *driven* by something external. This "driving force" is what makes the ODE non-homogeneous, and our ability to solve these problems is essential for modeling and predicting the behavior of these systems. This is where the rubber meets the road in applying our mathematical knowledge, pushing us towards a **Knowledge Level of K3 (Application)**.

So, what exactly are we dealing with when we say "non-homogeneous"?

### Understanding Non-Homogeneous ODEs

A second-order linear differential equation with constant coefficients is generally written in the form:

$ay'' + by' + cy = g(x)$

where $a$, $b$, and $c$ are constants, and importantly, $g(x)$ is **not identically zero**. If $g(x)$ were zero, we'd be back to the homogeneous case we've already mastered. The $g(x)$ term is often called the **forcing function** or **driving function**. It represents the external influence acting on the system.

*   **Analogy Time:** Imagine a simple pendulum swinging. If you just set it in motion and let it swing freely (ignoring friction for a moment), it's a homogeneous system. Its motion is governed by the forces already inherent in the system. Now, what if you start pushing the pendulum at regular intervals? That external push is your $g(x)$. It adds to the system's dynamics, making it non-homogeneous. In electrical systems, this could be a voltage source applied to an RLC circuit. In mechanical systems, it's an external force.

### The Principle of Superposition: Our Guiding Light

The beauty of linear differential equations lies in the **Principle of Superposition**. This principle states that if $y_1(x)$ and $y_2(x)$ are solutions to the non-homogeneous equation $ay'' + by' + cy = g(x)$, then any linear combination $C_1 y_1(x) + C_2 y_2(x)$ is *not necessarily* a solution to the non-homogeneous equation, but it *is* the general solution to the **homogeneous** version of the equation ($ay'' + by' + cy = 0$).

However, for non-homogeneous equations, the principle tells us something even more powerful: the **general solution** to the non-homogeneous equation $ay'' + by' + cy = g(x)$ is the **sum** of the **general solution to the corresponding homogeneous equation** and **any particular solution** to the non-homogeneous equation.

Let's break this down:

$y(x) = y_h(x) + y_p(x)$

Where:
*   $y(x)$ is the general solution to the non-homogeneous equation.
*   $y_h(x)$ is the **complementary solution** (or the general solution to the homogeneous equation $ay'' + by' + cy = 0$). We already know how to find this! It involves solving the characteristic equation $ar^2 + br + c = 0$.
*   $y_p(x)$ is a **particular solution** to the non-homogeneous equation $ay'' + by' + cy = g(x)$. This is the new piece we need to learn.

### Finding a Particular Solution ($y_p(x)$)

This is where the real work lies. How do we find a $y_p(x)$ that satisfies the equation with $g(x)$? There are two primary methods for doing this, both well-explained in our core text, Kreyszig's "Advanced Engineering Mathematics":

1.  **The Method of Undetermined Coefficients:** This is our first port of call, especially when $g(x)$ is a "nice" function – a polynomial, an exponential function, a sine or cosine function, or combinations thereof. The idea is to *guess* the form of $y_p(x)$ based on the form of $g(x)$, and then plug this guess into the ODE to determine the unknown coefficients in our guess.

2.  **The Method of Variation of Parameters:** This is a more general method that can be used for any $g(x)$, even those that are more complex and don't fit the "nice" forms required for undetermined coefficients. It's a bit more involved mathematically, as it involves integrating, but it's a powerful fallback.

Let's dive into the **Method of Undetermined Coefficients** first, as it's often simpler when applicable.

#### Method of Undetermined Coefficients

The core idea here is educated guesswork. We look at $g(x)$ and propose a $y_p(x)$ that has a similar structure, but with unknown coefficients that we will determine.

**General Rules of Thumb for Guessing $y_p(x)$:**

*   **If $g(x)$ is a polynomial of degree $n$**: Guess $y_p(x)$ as a general polynomial of degree $n$:
    $y_p(x) = A_n x^n + A_{n-1} x^{n-1} + \dots + A_1 x + A_0$

*   **If $g(x)$ is of the form $C e^{\alpha x}$**: Guess $y_p(x) = A e^{\alpha x}$.

*   **If $g(x)$ is of the form $C \cos(\beta x)$ or $C \sin(\beta x)$**: Guess $y_p(x) = A \cos(\beta x) + B \sin(\beta x)$. This is because the derivatives of sine and cosine are also sines and cosines, so we need both in our guess to accommodate the terms.

*   **If $g(x)$ is a combination of these**: We combine the forms. For example, if $g(x) = x^2 e^{3x}$, our guess for $y_p(x)$ would be $(Ax^2 + Bx + C)e^{3x}$. If $g(x) = e^{2x} \cos(4x)$, our guess would be $e^{2x}(A \cos(4x) + B \sin(4x))$.

**The Crucial Modification: The "Dusty Window" Rule**

Now, here's a vital point, often a stumbling block if not understood. What if our initial guess for $y_p(x)$ is *already* a solution to the **homogeneous** equation $ay'' + by' + cy = 0$? If we plug it in, we'll get zero on both sides, which won't help us find a particular solution to the non-homogeneous equation. This happens when $g(x)$ or a part of it "matches" a term in $y_h(x)$.

**The Rule:** If any term in your initial guess for $y_p(x)$ is a solution to the corresponding homogeneous equation, multiply your entire guess for $y_p(x)$ by $x$. If that *still* results in a term that's a solution to the homogeneous equation, multiply by $x$ again (i.e., by $x^2$).

This modification ensures that our guess for $y_p(x)$ is linearly independent from the terms in $y_h(x)$. Think of it like trying to clean a dirty window (the $g(x)$). If your cleaning cloth (the guess) is already dusty with the same dirt (homogeneous solution), you need a cleaner cloth, perhaps one that's been used once (multiply by $x$) or twice (multiply by $x^2$) before it can effectively remove the new dirt.

Let's see this in action with an example.

**Example 1: Polynomial $g(x)$**

Consider the initial value problem (IVP):
$y'' - 3y' + 2y = 4x$
$y(0) = 1$, $y'(0) = -1$

**Step 1: Find the Complementary Solution ($y_h(x)$)**
First, solve the homogeneous equation: $y'' - 3y' + 2y = 0$.
The characteristic equation is $r^2 - 3r + 2 = 0$.
Factoring, we get $(r-1)(r-2) = 0$, so the roots are $r_1 = 1$ and $r_2 = 2$.
Since the roots are real and distinct, the complementary solution is:
$y_h(x) = c_1 e^x + c_2 e^{2x}$

**Step 2: Find a Particular Solution ($y_p(x)$)**
Our $g(x) = 4x$, which is a polynomial of degree 1.
Our initial guess for $y_p(x)$ is $y_p(x) = Ax + B$.
Now, we need to check if any part of this guess is in $y_h(x)$. $y_h(x)$ contains $e^x$ and $e^{2x}$. Our guess $Ax+B$ does not contain any exponential terms. So, the guess is fine as it is.

We need the first and second derivatives of $y_p(x)$:
$y_p'(x) = A$
$y_p''(x) = 0$

Substitute these into the non-homogeneous ODE:
$(0) - 3(A) + 2(Ax + B) = 4x$
$-3A + 2Ax + 2B = 4x$

Now, equate coefficients of like powers of $x$:
For $x$: $2A = 4 \implies A = 2$.
For constant terms: $-3A + 2B = 0$. Substitute $A=2$: $-3(2) + 2B = 0 \implies -6 + 2B = 0 \implies 2B = 6 \implies B = 3$.

So, our particular solution is:
$y_p(x) = 2x + 3$

**Step 3: Form the General Solution**
The general solution is $y(x) = y_h(x) + y_p(x)$:
$y(x) = c_1 e^x + c_2 e^{2x} + 2x + 3$

**Step 4: Apply Initial Conditions to Find Constants ($c_1$, $c_2$)**
We are given $y(0) = 1$ and $y'(0) = -1$.
First, let's find $y'(x)$:
$y'(x) = c_1 e^x + 2c_2 e^{2x} + 2$

Apply $y(0) = 1$:
$1 = c_1 e^0 + c_2 e^0 + 2(0) + 3$
$1 = c_1 + c_2 + 3$
$c_1 + c_2 = -2$ (Equation 1)

Apply $y'(0) = -1$:
$-1 = c_1 e^0 + 2c_2 e^0 + 2$
$-1 = c_1 + 2c_2 + 2$
$c_1 + 2c_2 = -3$ (Equation 2)

Now we have a system of two linear equations for $c_1$ and $c_2$:
1. $c_1 + c_2 = -2$
2. $c_1 + 2c_2 = -3$

Subtract Equation 1 from Equation 2:
$(c_1 + 2c_2) - (c_1 + c_2) = -3 - (-2)$
$c_2 = -1$

Substitute $c_2 = -1$ into Equation 1:
$c_1 + (-1) = -2$
$c_1 = -1$

**Step 5: Write the Final Solution**
The specific solution to the IVP is:
$y(x) = -e^x - e^{2x} + 2x + 3$

**Exam Tip:** Always remember to check your $y_p$ guess against the homogeneous solution. This is where many students make mistakes. If $g(x)$ itself or its derivatives (in the case of trig/exponential functions) are part of $y_h$, you *must* multiply your guess by $x$ or $x^2$.

**Example 2: Exponential $g(x)$ and the Modification Rule**

Consider the IVP:
$y'' - y' - 2y = e^{2x}$
$y(0) = 3$, $y'(0) = 1$

**Step 1: Find the Complementary Solution ($y_h(x)$)**
Homogeneous equation: $y'' - y' - 2y = 0$.
Characteristic equation: $r^2 - r - 2 = 0$.
Factoring: $(r-2)(r+1) = 0$. Roots are $r_1 = 2$ and $r_2 = -1$.
Complementary solution: $y_h(x) = c_1 e^{2x} + c_2 e^{-x}$.

**Step 2: Find a Particular Solution ($y_p(x)$)**
Our $g(x) = e^{2x}$.
Our initial guess for $y_p(x)$ is $y_p(x) = A e^{2x}$.

**NOW, CHECK AGAINST $y_h(x)$!**
Notice that $e^{2x}$ is a term in our complementary solution $y_h(x)$ (it corresponds to $c_1 e^{2x}$). So, our initial guess $y_p(x) = A e^{2x}$ is part of the homogeneous solution.
This means we *must* modify our guess. Multiply by $x$:
Modified guess: $y_p(x) = Ax e^{2x}$.

Let's check if this modified guess is *still* a solution to the homogeneous equation.
$y_p'(x) = A e^{2x} + 2Ax e^{2x} = e^{2x}(A + 2Ax)$
$y_p''(x) = 2e^{2x}(A + 2Ax) + e^{2x}(2A) = e^{2x}(2A + 4Ax + 2A) = e^{2x}(4A + 4Ax)$

Substitute into $y'' - y' - 2y = e^{2x}$:
$e^{2x}(4A + 4Ax) - e^{2x}(A + 2Ax) - 2(Ax e^{2x}) = e^{2x}$

Divide by $e^{2x}$ (since $e^{2x} \neq 0$):
$(4A + 4Ax) - (A + 2Ax) - 2Ax = 1$
$4A + 4Ax - A - 2Ax - 2Ax = 1$
$3A = 1$
$A = \frac{1}{3}$

So, our particular solution is:
$y_p(x) = \frac{1}{3} x e^{2x}$

**Step 3: Form the General Solution**
$y(x) = y_h(x) + y_p(x)$
$y(x) = c_1 e^{2x} + c_2 e^{-x} + \frac{1}{3} x e^{2x}$

**Step 4: Apply Initial Conditions**
$y(0) = 3$, $y'(0) = 1$.
$y'(x) = 2c_1 e^{2x} - c_2 e^{-x} + \frac{1}{3} e^{2x} + \frac{2}{3} x e^{2x}$

Apply $y(0) = 3$:
$3 = c_1 e^0 + c_2 e^0 + \frac{1}{3}(0)e^0$
$3 = c_1 + c_2$ (Equation 1)

Apply $y'(0) = 1$:
$1 = 2c_1 e^0 - c_2 e^0 + \frac{1}{3} e^0 + \frac{2}{3}(0)e^0$
$1 = 2c_1 - c_2 + \frac{1}{3}$
$1 - \frac{1}{3} = 2c_1 - c_2$
$\frac{2}{3} = 2c_1 - c_2$ (Equation 2)

System of equations:
1. $c_1 + c_2 = 3$
2. $2c_1 - c_2 = \frac{2}{3}$

Add Equation 1 and Equation 2:
$(c_1 + c_2) + (2c_1 - c_2) = 3 + \frac{2}{3}$
$3c_1 = \frac{9}{3} + \frac{2}{3} = \frac{11}{3}$
$c_1 = \frac{11}{9}$

Substitute $c_1 = \frac{11}{9}$ into Equation 1:
$\frac{11}{9} + c_2 = 3$
$c_2 = 3 - \frac{11}{9} = \frac{27}{9} - \frac{11}{9} = \frac{16}{9}$

**Step 5: Write the Final Solution**
$y(x) = \frac{11}{9} e^{2x} + \frac{16}{9} e^{-x} + \frac{1}{3} x e^{2x}$

This method is really about pattern recognition and careful substitution. When $g(x)$ involves sums of functions, we combine the appropriate guess forms. For example, if $g(x) = x + e^{3x}$, our $y_p$ guess would be $(Ax+B) + C e^{3x}$. Remember to check for overlaps with $y_h$ for *each part* of the guess.

#### Method of Variation of Parameters

This method, detailed in Kreyszig Chapter 2.4, is a more robust approach. It works for any continuous $g(x)$. The core idea is to take the homogeneous solution $y_h(x) = c_1 y_1(x) + c_2 y_2(x)$ and "vary" the constants $c_1$ and $c_2$ into functions of $x$, i.e., $y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$.

For the equation $y'' + P(x)y' + Q(x)y = g(x)$ (note the coefficient of $y''$ is 1 here; if it's not, divide the entire equation by $a$), the formulas for $u_1'(x)$ and $u_2'(x)$ are given by:

$u_1'(x) = -\frac{y_2(x)g(x)}{W(y_1, y_2)}$
$u_2'(x) = \frac{y_1(x)g(x)}{W(y_1, y_2)}$

where $W(y_1, y_2)$ is the **Wronskian** of $y_1$ and $y_2$. For a second-order equation, the Wronskian is:

$W(y_1, y_2) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_2 y_1'$

Once you find $u_1'(x)$ and $u_2'(x)$, you integrate them to get $u_1(x)$ and $u_2(x)$ (we don't need the integration constants here as we are looking for *a* particular solution). Then you plug them back into $y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$.

**Example 3: Using Variation of Parameters**

Let's solve the same equation as Example 1 using this method:
$y'' - 3y' + 2y = 4x$
$y(0) = 1$, $y'(0) = -1$

We already found $y_h(x) = c_1 e^x + c_2 e^{2x}$.
So, $y_1(x) = e^x$ and $y_2(x) = e^{2x}$.
Our $g(x)$ in this form (with leading coefficient 1) is $4x$.

**Step 1: Calculate the Wronskian**
$y_1'(x) = e^x$
$y_2'(x) = 2e^{2x}$

$W(y_1, y_2) = y_1 y_2' - y_2 y_1' = (e^x)(2e^{2x}) - (e^{2x})(e^x)$
$W(y_1, y_2) = 2e^{3x} - e^{3x} = e^{3x}$

**Step 2: Find $u_1'(x)$ and $u_2'(x)$**
$u_1'(x) = -\frac{y_2(x)g(x)}{W(y_1, y_2)} = -\frac{e^{2x}(4x)}{e^{3x}} = -4x e^{-x}$
$u_2'(x) = \frac{y_1(x)g(x)}{W(y_1, y_2)} = \frac{e^x(4x)}{e^{3x}} = 4x e^{-2x}$

**Step 3: Integrate to find $u_1(x)$ and $u_2(x)$**
For $u_1(x)$, we need to integrate $-4x e^{-x}$. We'll use integration by parts: $\int u \, dv = uv - \int v \, du$.
Let $u = -4x$, $dv = e^{-x} dx$. Then $du = -4 dx$, $v = -e^{-x}$.
$u_1(x) = \int -4x e^{-x} dx = (-4x)(-e^{-x}) - \int (-e^{-x})(-4 dx)$
$u_1(x) = 4x e^{-x} - 4 \int e^{-x} dx$
$u_1(x) = 4x e^{-x} - 4(-e^{-x}) = 4x e^{-x} + 4e^{-x} = e^{-x}(4x+4)$

For $u_2(x)$, we need to integrate $4x e^{-2x}$. Again, integration by parts.
Let $u = 4x$, $dv = e^{-2x} dx$. Then $du = 4 dx$, $v = -\frac{1}{2}e^{-2x}$.
$u_2(x) = \int 4x e^{-2x} dx = (4x)(-\frac{1}{2}e^{-2x}) - \int (-\frac{1}{2}e^{-2x})(4 dx)$
$u_2(x) = -2x e^{-2x} + 2 \int e^{-2x} dx$
$u_2(x) = -2x e^{-2x} + 2(-\frac{1}{2}e^{-2x}) = -2x e^{-2x} - e^{-2x} = -e^{-2x}(2x+1)$

**Step 4: Form the Particular Solution**
$y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$
$y_p(x) = [e^{-x}(4x+4)](e^x) + [-e^{-2x}(2x+1)](e^{2x})$
$y_p(x) = (4x+4) + -(2x+1)$
$y_p(x) = 4x + 4 - 2x - 1$
$y_p(x) = 2x + 3$

**Look familiar?** Yes, it's the same $y_p(x)$ we found using undetermined coefficients! This method is more systematic but involves more complex integration.

**Step 5: Form the General Solution and Apply Initial Conditions**
This would proceed exactly as in Example 1. The general solution is $y(x) = c_1 e^x + c_2 e^{2x} + 2x + 3$, and applying the initial conditions yields $c_1 = -1$ and $c_2 = -1$, leading to the final answer $y(x) = -e^x - e^{2x} + 2x + 3$.

**When to Use Which Method?**
*   **Undetermined Coefficients:** Use when $g(x)$ is a polynomial, $e^{\alpha x}$, $\cos(\beta x)$, $\sin(\beta x)$, or combinations thereof. It's generally quicker and less prone to integration errors if applicable.
*   **Variation of Parameters:** Use when the above forms don't apply for $g(x)$, or if you encounter issues with the modification rule for undetermined coefficients. It's a guaranteed method but requires careful integration. Kreyszig often uses this method to show the generality of the theory.

### Initial Value Problems (IVPs) Revisited

The "initial value problem" aspect means we're not just finding *any* solution to the non-homogeneous ODE, but the *specific* solution that satisfies given initial conditions at a point (usually $x=0$).

The process for an IVP is consistent:
1.  **Solve the homogeneous ODE** to find $y_h(x) = c_1 y_1(x) + c_2 y_2(x)$.
2.  **Find a particular solution $y_p(x)$** to the non-homogeneous ODE using either undetermined coefficients or variation of parameters.
3.  **Form the general solution** $y(x) = y_h(x) + y_p(x)$.
4.  **Use the initial conditions** ($y(x_0) = y_0$, $y'(x_0) = y_1$) to find the specific values of $c_1$ and $c_2$.
5.  **Write the final, specific solution** to the IVP.

This process directly addresses **CO2**, enabling us to solve practical problems where systems start from specific states and are subjected to external influences.

### Relating to Course Outcomes and Real-World Applications

*   **CO1: Solve systems of linear equations and diagonalize matrices.** While not directly used in *solving* the ODEs here, the techniques used to solve for $c_1$ and $c_2$ from the initial conditions are systems of linear equations, a direct link to CO1. Understanding eigenvalues/eigenvectors helps in more advanced ODEs or systems of ODEs.
*   **CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.** This entire topic is dedicated to the "non-homogeneous" part of CO2. The ability to combine $y_h$ and $y_p$ is key.
*   **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** Laplace transforms are another powerful tool for solving ODEs, especially IVPs, and are often introduced alongside these methods. They can handle non-homogeneous terms and initial conditions very elegantly. We'll likely cover this in a future topic.
*   **CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.** Understanding function behavior and approximations (Taylor) or periodic representations (Fourier) is crucial for analyzing the $g(x)$ term in the ODEs. For instance, a complex forcing function might be approximated by a Taylor series or represented by a Fourier series, allowing us to solve the ODE for each component.

**Real-World Connections:**

*   **Electrical Circuits:** An RLC circuit with a time-varying voltage source $V(t)$ is described by $LI'' + RI' + \frac{1}{C}I = V(t)$. Here, $V(t)$ is the non-homogeneous term $g(t)$. Finding the current $I(t)$ requires solving this non-homogeneous ODE, considering both the circuit's natural response ($y_h$) and its response to the external voltage ($y_p$).
*   **Mechanical Vibrations:** A mass-spring-damper system with an external force $F(t)$ follows $mx'' + cx' + kx = F(t)$. $F(t)$ is the driving force. The solution describes how the mass vibrates, influenced by its initial position/velocity and the applied force.
*   **Control Systems:** Understanding how systems respond to inputs is fundamental in control engineering. Non-homogeneous ODEs are the mathematical language for this.

### Summary and Key Takeaways

*   The general solution to a non-homogeneous linear ODE with constant coefficients is $y(x) = y_h(x) + y_p(x)$.
*   $y_h(x)$ is the solution to the corresponding homogeneous equation.
*   $y_p(x)$ is any particular solution to the non-homogeneous equation.
*   **Method of Undetermined Coefficients:** Guess $y_p$ based on $g(x)$ and solve for coefficients. **Crucially, modify the guess by multiplying by $x$ or $x^2$ if any term in the guess is part of $y_h$.**
*   **Method of Variation of Parameters:** Use when undetermined coefficients aren't suitable. It involves varying constants in $y_h$ and using Wronskian and integration.
*   Solving an Initial Value Problem means finding the specific $c_1, c_2$ that satisfy the given conditions.

Mastering these techniques allows us to quantitatively describe and predict the behavior of many physical and electrical systems subjected to external influences. Keep practicing, and don't hesitate to refer back to Kreyszig for detailed derivations and further examples!

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
What is the general form of the solution to a non-homogeneous second-order linear ODE with constant coefficients? Explain the meaning of each component of the solution.

**Answer:**
The general solution $y(x)$ to a non-homogeneous second-order linear ODE with constant coefficients of the form $ay'' + by' + cy = g(x)$ (where $g(x) \neq 0$) is given by:
$y(x) = y_h(x) + y_p(x)$

*   $y_h(x)$: This is the **complementary solution** or the general solution to the corresponding **homogeneous** ODE ($ay'' + by' + cy = 0$). It represents the natural response of the system if there were no external driving force. It is determined by the roots of the characteristic equation $ar^2 + br + c = 0$.
*   $y_p(x)$: This is a **particular solution** to the non-homogeneous ODE ($ay'' + by' + cy = g(x)$). It represents the system's response to the specific forcing function $g(x)$. It does not contain any arbitrary constants.

This structure reflects that the total response of a linear system to a driving force is the sum of its natural, unforced behavior and its specific response to the forcing.

**Question 2 (Exam-Oriented - Method of Undetermined Coefficients):**
Solve the initial value problem:
$y'' + y = \sin(2x)$
$y(0) = 0$, $y'(0) = 1$

**Answer:**
**Step 1: Homogeneous Solution**
The homogeneous equation is $y'' + y = 0$.
The characteristic equation is $r^2 + 1 = 0$.
The roots are $r = \pm i$. These are complex conjugate roots, $\alpha \pm i\beta$, with $\alpha=0$ and $\beta=1$.
The complementary solution is $y_h(x) = e^{0x}(c_1 \cos(1x) + c_2 \sin(1x)) = c_1 \cos(x) + c_2 \sin(x)$.

**Step 2: Particular Solution**
The non-homogeneous term is $g(x) = \sin(2x)$.
Our initial guess for $y_p(x)$ is $y_p(x) = A \cos(2x) + B \sin(2x)$.
Check against $y_h(x)$: $y_h(x)$ contains $\cos(x)$ and $\sin(x)$. Our guess $y_p(x)$ contains $\cos(2x)$ and $\sin(2x)$. There is no overlap. So, the guess is fine.

Now, find the derivatives:
$y_p'(x) = -2A \sin(2x) + 2B \cos(2x)$
$y_p''(x) = -4A \cos(2x) - 4B \sin(2x)$

Substitute into the ODE $y'' + y = \sin(2x)$:
$(-4A \cos(2x) - 4B \sin(2x)) + (A \cos(2x) + B \sin(2x)) = \sin(2x)$

Group terms by $\cos(2x)$ and $\sin(2x)$:
$(-4A + A) \cos(2x) + (-4B + B) \sin(2x) = \sin(2x)$
$-3A \cos(2x) - 3B \sin(2x) = \sin(2x)$

Equating coefficients:
For $\cos(2x)$: $-3A = 0 \implies A = 0$.
For $\sin(2x)$: $-3B = 1 \implies B = -\frac{1}{3}$.

So, the particular solution is $y_p(x) = 0 \cdot \cos(2x) - \frac{1}{3} \sin(2x) = -\frac{1}{3} \sin(2x)$.

**Step 3: General Solution**
$y(x) = y_h(x) + y_p(x) = c_1 \cos(x) + c_2 \sin(x) - \frac{1}{3} \sin(2x)$.

**Step 4: Apply Initial Conditions**
$y(0) = 0$, $y'(0) = 1$.
$y'(x) = -c_1 \sin(x) + c_2 \cos(x) - \frac{2}{3} \cos(2x)$.

Apply $y(0) = 0$:
$0 = c_1 \cos(0) + c_2 \sin(0) - \frac{1}{3} \sin(0)$
$0 = c_1(1) + c_2(0) - 0 \implies c_1 = 0$.

Apply $y'(0) = 1$:
$1 = -c_1 \sin(0) + c_2 \cos(0) - \frac{2}{3} \cos(0)$
$1 = -c_1(0) + c_2(1) - \frac{2}{3}(1)$
$1 = c_2 - \frac{2}{3}$
$c_2 = 1 + \frac{2}{3} = \frac{5}{3}$.

**Step 5: Final Solution**
Substituting $c_1=0$ and $c_2=\frac{5}{3}$ into the general solution:
$y(x) = 0 \cdot \cos(x) + \frac{5}{3} \sin(x) - \frac{1}{3} \sin(2x)$
$y(x) = \frac{5}{3} \sin(x) - \frac{1}{3} \sin(2x)$.

**Question 3 (Conceptual - Pitfall):**
For the ODE $y'' - 4y = e^{2x}$, if you were using the method of undetermined coefficients, what would be your initial guess for $y_p(x)$ and why? What is the crucial modification you might need to make?

**Answer:**
1.  **Homogeneous Solution First:** The homogeneous equation is $y'' - 4y = 0$. The characteristic equation is $r^2 - 4 = 0$, which gives $r = \pm 2$. So, $y_h(x) = c_1 e^{2x} + c_2 e^{-2x}$.
2.  **Initial Guess for $y_p(x)$:** The non-homogeneous term is $g(x) = e^{2x}$. A standard guess for this form is $y_p(x) = A e^{2x}$.
3.  **The Crucial Modification:** **Here's the pitfall!** Notice that $e^{2x}$ is already present in the homogeneous solution $y_h(x)$ (it corresponds to $c_1 e^{2x}$). If we plug $y_p(x) = A e^{2x}$ into the ODE $y'' - 4y$, we would get $2Ae^{2x} - 4(Ae^{2x}) = -2Ae^{2x}$, which does not equal $e^{2x}$ unless $A=-1/2$. This suggests the simple guess might work. **However, the rule states if ANY term in the guess is a solution to the homogeneous equation, you MUST modify the guess.** In this case, the entire guess $Ae^{2x}$ is a solution to the homogeneous equation.
    Therefore, the initial guess $y_p(x) = A e^{2x}$ must be modified. We multiply by $x$:
    Modified guess: $y_p(x) = Ax e^{2x}$.
    This guess is needed because the form $A e^{2x}$ is already covered by $y_h$. The $x$ factor ensures the term is linearly independent from $y_h$.
    We would then proceed to find the derivatives of $Ax e^{2x}$ and substitute into the ODE to find the value of $A$. (As a check: $y_p' = Ae^{2x} + 2Axe^{2x}$, $y_p'' = 2Ae^{2x} + 2Axe^{2x} + 2Ae^{2x} + 4Axe^{2x} = 4Ae^{2x} + 4Axe^{2x}$. Plugging into $y'' - 4y = e^{2x}$: $(4Ae^{2x} + 4Axe^{2x}) - 4(Axe^{2x}) = e^{2x} \implies 4Ae^{2x} = e^{2x} \implies A=1/4$. So $y_p(x) = \frac{1}{4}xe^{2x}$).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
